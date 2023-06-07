import {render, screen, fireEvent} from '@testing-library/react-native'
import App from '../App'

describe('Triangle tesztelése', () => {
  beforeEach(() => {
    render(<App />)
  })
  
  it('Cím tesztelése', async () => {
      const title = screen.getByTestId('title').props.children
      expect(title).toMatch(/Háromszög/)
  })
  
  it('Bemenet 30, 35-re elvárt 525', async () => {
    fireEvent.changeText(screen.getByTestId('base'), 30)
    fireEvent.changeText(screen.getByTestId('height'), 35)
    fireEvent.press(screen.getByTestId('calcButton'))
    const area = await screen.getByTestId('area').props.value
    expect(area).toEqual(525)
  })

});



