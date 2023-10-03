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
import { api } from '../../services/api'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import defaultDish from '../../assets/dish.svg'
import { TfiClose } from 'react-icons/tfi'

export function EditDish() {
  const navigate = useNavigate()

  const params = useParams()

  const [dish, setDish] = useState({})
  const [isNotBlankFields, setIsNotBlankFields] = useState(false)
  const [name, setName] = useState('')
  const [dishImage, setDishImage] = useState('')
  const [dishImageFile, setDishImageFile] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [ingredientTags, setIngredientTags] = useState([])
  const [newIngredientTag, setNewIngredientTag] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [ifHasChanges, setIfHasChanges] = useState(false)
  const [dishImageHasChanges, setDishImageHasChanges] = useState(false)
  const [ingredientsHasChanges, setIngredientsHasChanges] = useState(false)
  const [dishImageFilename, setDishImageFilename] = useState('')

  function handleChangeDishImage(event) {
    const file = event.target.files[0]

    if (file && file.type.startsWith('image/')) {
      setDishImageFile(file)

      const imagePreview = URL.createObjectURL(file)
      setDishImage(imagePreview)

      setDishImageHasChanges(true)
    }
  }

  function handleAddTag() {
    setIngredientTags((prevState) => [...prevState, newIngredientTag])
    setNewIngredientTag('')
    setIngredientsHasChanges(true)
  }

  function handleRemoveTag(deleted) {
    setIngredientTags((prevState) => prevState.filter((tag) => tag !== deleted))
    setIngredientsHasChanges(true)
  }

  async function handleRemove() {
    const result = confirm('Do you really want to remove this dish?')

    if (result === true) {
      try {
        await api.delete(`/dishes/${params.id}`, { withCredentials: true })

        await api.delete(`/dishes/files/${dishImageFilename}`, {
          withCredentials: true,
        })

        alert('Dish removed successfully.')

        setTimeout(() => {
          navigate('/')
        }, 2000)
      } catch (error) {
        console.error('There was an error trying to remove dish', error)
      }
    }
  }

  async function handleUpdateDish() {
    try {
      let formattedPrice = price.toString().replace('.', ',')

      const priceRegex = /^\d{1,3},\d{2}$/

      if (priceRegex.test(price)) {
        return alert('Type a valid price format. Ex: 24,97')
      }

      formattedPrice = parseFloat(formattedPrice.replace(',', '.'))

      const fileUploadForm = new FormData()

      if (dishImageFile) {
        fileUploadForm.append('image', dishImageFile)
      }

      fileUploadForm.append('name', name)
      fileUploadForm.append('category', selectedCategory)
      fileUploadForm.append('ingredients', JSON.stringify(ingredientTags))
      fileUploadForm.append('price', formattedPrice)
      fileUploadForm.append('description', description)

      await api.put(`/dishes/${params.id}`, fileUploadForm, {
        withCredentials: true,
      })

      alert('Dish updated successfully!')

      setTimeout(() => {
        navigate('/')
      }, 2000)
    } catch (error) {
      console.error('There was an error updating the dish:', error)
    }
  }

  useEffect(() => {
    async function fetchDish() {
      try {
        const response = await api.get(`/dishes/${params.id}`, {
          withCredentials: true,
        })
        setDish(response.data)

        const foundDish = response.data

        if (foundDish) {
          setDish(foundDish)
          setDishImage(
            foundDish.image
              ? `${api.defaults.baseURL}/files/${foundDish.image}`
              : `${defaultDish}`,
          )
          setName(foundDish.name)
          setSelectedCategory(foundDish.category)
          setIngredientTags(
            foundDish.ingredients.map((ingredient) => ingredient.name),
          )
          setPrice(foundDish.price)
          setDescription(foundDish.description)
        }

        if (foundDish.image) {
          setDishImageFilename(foundDish.image)
        }
      } catch (error) {
        console.error('There was an error fetching the dish:', error)
      }
    }

    fetchDish()
  }, [])

  useEffect(() => {
    const replacedPrice = parseFloat(price.toString().replace(',', '.'))

    if (
      dishImageHasChanges ||
      name != dish.name ||
      selectedCategory != dish.category ||
      ingredientsHasChanges ||
      replacedPrice != dish.price ||
      description != dish.description
    ) {
      setIfHasChanges(true)
    } else {
      setIfHasChanges(false)
    }
  }, [
    dishImageHasChanges,
    name,
    selectedCategory,
    ingredientTags,
    price,
    description,
  ])

  return (
    <Container>
      <Header />
      <Main>
        <ReturnButton />
        <h1>Edit Dish</h1>
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
                  onChange={handleChangeDishImage}
                />
              </label>
            </SelectImageBtn>
            <InputWithLabel
              label="Name"
              placeholder="Ex: Ceaser Salad"
              onChange={(e) => setName(e.target.value)}
              value={name}
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
              value={price}
            />
          </div>
          <div>
            <TextArea>
              <label htmlFor="Description">Description</label>
              <textarea
                placeholder="Talk briefly about the dish, its ingredients and composition."
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              ></textarea>
            </TextArea>
          </div>
          <div>
            <Button tertiary onClick={handleRemove}>
              Delete Dish
            </Button>
            <Button disabled={!ifHasChanges} onClick={handleUpdateDish}>
              Save changes
            </Button>
          </div>
        </Form>
      </Main>
      <Footer />
    </Container>
  )
}
