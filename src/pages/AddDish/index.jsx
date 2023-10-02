import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { InputWithLabel } from '../../components/InputWithLabel'
import { ReturnButton } from '../../components/ReturnButton'
import { PiSignOut } from 'react-icons/pi'
import {
  ChoiceOfImage,
  Container,
  Form,
  Ingredients,
  Main,
  RemoveImage,
  SelectCategory,
  SelectImageBtn,
  TextArea,
} from './styles'
import { Select } from '../../components/Select'
import { Button } from '../../components/Button'
import { IngredientTag } from '../../components/IngredientTag'
import { useState, useEffect } from 'react'
import { TfiClose } from 'react-icons/tfi'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { USER_ROLE } from '../../utils/roles'

export function AddDish() {
  const { user } = useAuth()
  // const isAdmin = [USER_ROLE.ADMIN].includes(user.role)

  const navigate = useNavigate()

  const [isNotBlankFields, setIsNotBlankFields] = useState(false)
  const [name, setName] = useState('')
  const [dishImage, setDishImage] = useState('')
  const [dishImageFile, setDishImageFile] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [ingredientTags, setIngredientTags] = useState([])
  const [newIngredientTag, setNewIngredientTag] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  function handleAddDishImage(event) {
    const file = event.target.files[0]

    if (file && file.type.startsWith('image/')) {
      setDishImageFile(file)

      const imagePreview = URL.createObjectURL(file)
      setDishImage(imagePreview)
    }
  }

  function handleAddTag() {
    setIngredientTags((prevState) => [...prevState, newIngredientTag])
    setNewIngredientTag('')
  }

  function handleRemoveTag(deleted) {
    setIngredientTags((prevState) => prevState.filter((tag) => tag !== deleted))
  }

  function checkBlankFields() {
    if (
      name &&
      selectedCategory &&
      ingredientTags.length > 0 &&
      price &&
      description
    ) {
      setIsNotBlankFields(true)
    } else {
      setIsNotBlankFields(false)
    }
  }

  async function handleNewDish() {
    try {
      const priceRegex = /^\d{1,3},\d{2}$/

      if (priceRegex.test(price)) {
        return alert('Type a valid price format. Ex: 24,97')
      }

      const formattedPrice = parseFloat(price.replace(',', '.'))

      const fileUploadForm = new FormData()

      if (dishImageFile) {
        fileUploadForm.append('image', dishImageFile)
      }

      fileUploadForm.append('name', name)
      fileUploadForm.append('category', selectedCategory.toLowerCase())
      fileUploadForm.append('ingredients', JSON.stringify(ingredientTags))
      fileUploadForm.append('price', formattedPrice)
      fileUploadForm.append('description', description)

      await api.post('/dishes', fileUploadForm, { withCredentials: true })

      alert('Dish created successfully!')

      setTimeout(() => {
        navigate('/')
      }, 2000)
    } catch (error) {
      console.error('There was an error creating the dish:', error)
    }
  }

  useEffect(() => {
    checkBlankFields()
  }, [dishImage, name, selectedCategory, ingredientTags, price, description])

  return (
    <Container>
      <Header />
      <Main>
        <ReturnButton />
        <h1>Add Dish</h1>
        <Form>
          <ChoiceOfImage>
            {!dishImage && <span>No dish image</span>}
            {dishImage && (
              <>
                <img src={dishImage} alt="Image view" />
                <RemoveImage
                  onClick={() => setDishImage('') && setDishImageFile('')}
                >
                  <TfiClose />
                </RemoveImage>
              </>
            )}
          </ChoiceOfImage>
          <div>
            <SelectImageBtn>
              Dish Image
              <label htmlFor="dishImage">
                <PiSignOut />
                Select Image
                <input
                  type="file"
                  id="dishImage"
                  onChange={handleAddDishImage}
                />
              </label>
            </SelectImageBtn>
            <InputWithLabel
              label="Name"
              placeholder="Ex: Ceaser Salad"
              onChange={(e) => setName(e.target.value)}
            />
            <SelectCategory>
              <label htmlFor="category">Category</label>
              <Select
                value={selectedCategory}
                id="category"
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">Select an option</option>
                <option value="Meals">Meals</option>
                <option value="Beverages">Beverages</option>
                <option value="Desserts">Desserts</option>
              </Select>
            </SelectCategory>
          </div>
          <div>
            <Ingredients>
              <label htmlFor="ingredients">Ingredients</label>
              <div id="ingredients">
                {ingredientTags.map((tag, index) => (
                  <IngredientTag
                    key={String(index)}
                    value={String(tag).toLowerCase()}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))}

                <IngredientTag
                  isnew
                  placeholder="add"
                  onChange={(e) => setNewIngredientTag(e.target.value)}
                  onClick={handleAddTag}
                  value={newIngredientTag}
                />
              </div>
            </Ingredients>
            <InputWithLabel
              type="number"
              label="Price"
              placeholder="$ 00,00"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <TextArea>
              <label htmlFor="Description">Description</label>
              <textarea
                placeholder="Talk briefly about the dish, its ingredients and composition."
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </TextArea>
          </div>
          <div>
            <Button disabled={!isNotBlankFields} onClick={handleNewDish}>
              Add Dish
            </Button>
          </div>
        </Form>
      </Main>
      <Footer />
    </Container>
  )
}
