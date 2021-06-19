import { render, screen } from '@testing-library/react'
import AddToCart from './AddToCart'

describe('AddToCart Component', () => {
    test('deve iniciar o título com o valor 1', () => {
        render(<AddToCart />)

        const addToCartTitle = screen.getByText("1")

        expect(addToCartTitle).toBeInTheDocument()
    })
})