import { Container } from './styles'
import { FiPlus, FiX } from 'react-icons/fi'

export function IngredientTag({ isnew, value, onClick, ...props }) {
  function InputLength() {
    if (!isnew) {
      const { length } = value

      const inputLength = (length * 8 + 15) / 16

      return inputLength
    }
  }
  return (
    <Container $isnew={isnew}>
      <input
        type="text"
        value={value}
        readOnly={!isnew}
        style={{ width: `${InputLength()}rem`, textTransform: 'capitalize' }}
        {...props}
      />
      <button type="button" onClick={onClick}>
        {isnew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}
