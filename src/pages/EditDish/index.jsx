import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { InputWithLabel } from '../../components/InputWithLabel'
import { ReturnButton } from '../../components/ReturnButton'
import { PiSignOut } from 'react-icons/pi'
import {
  Container,
  Form,
  Ingredients,
  Main,
  SelectCategory,
  SelectImageBtn,
  TextArea,
} from './styles'
import { Select } from '../../components/Select'
import { Button } from '../../components/Button'
import { IngredientTag } from '../../components/IngredientTag'

export function EditDish() {
  function handleChangeDishImage() {}

  return (
    <Container>
      <Header />
      <Main>
        <ReturnButton />
        <h1>Edit Dish</h1>
        <Form>
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
            <InputWithLabel label="Name" placeholder="Ex: Ceaser Salad" />
            <SelectCategory>
              <label htmlFor="category">Category</label>
              <Select id="category">
                <option value="Meals">Meals</option>
                <option value="Beverages">Beverages</option>
                <option value="Desserts">Meals</option>
              </Select>
            </SelectCategory>
          </div>
          <div>
            <Ingredients>
              <label htmlFor="ingredients">Ingredients</label>
              <div id="ingredients">
                <IngredientTag value="Naan Bread" />
                <IngredientTag isnew placeholder="add" />
              </div>
            </Ingredients>
            <InputWithLabel type="number" label="Price" placeholder="$ 00,00" />
          </div>
          <div>
            <TextArea>
              <label htmlFor="Description">Description</label>
              <textarea></textarea>
            </TextArea>
          </div>
          <div>
            <Button tertiary>Delete Dish</Button>
            <Button disabled>Save changes</Button>
          </div>
        </Form>
      </Main>
      <Footer />
    </Container>
  )
}
