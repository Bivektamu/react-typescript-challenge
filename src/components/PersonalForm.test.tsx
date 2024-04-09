import { afterEach, describe, expect, it, onTestFinished, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import PersonalForm from './PersonalForm'

const renderComponent = () => {
    const handleSubmit = vi.fn()
    render(<PersonalForm submitHandler={handleSubmit} />)
    const fullNameInput = screen.getByRole('textbox', {
        name: /full name/i
    })

    const emailAddress = screen.getByRole('textbox', {
        name: /email address/i
    })

    const phoneNumber = screen.getByRole('textbox', {
        name: /phone number/i
    })

    const portfolioLink = screen.getByRole('textbox', {
        name: /link/i
    })
    
    const submitBtn = screen.getByRole('button', {
        name: /next step/i
    })

    return {fullNameInput, emailAddress, phoneNumber, portfolioLink, submitBtn, handleSubmit}
}
describe("Personal Form Test", () => {
    it("Input Tests", () => {
       
        const {fullNameInput, emailAddress, phoneNumber, portfolioLink} = renderComponent()
        
        fireEvent.change(fullNameInput, { target: { value: 'Jane Doe' } })
        fireEvent.change(emailAddress, { target: { value: 'test@test.com' } })
        fireEvent.change(phoneNumber, { target: { value: '0452424565' } })
        fireEvent.change(portfolioLink, { target: { value: 'https://asdf.com' } })

        expect(fullNameInput).toBeInTheDocument()
        expect(fullNameInput).toHaveValue('Jane Doe')
        expect(emailAddress).toBeInTheDocument()
        expect(emailAddress).toHaveValue('test@test.com')
        expect(phoneNumber).toBeInTheDocument()
        expect(phoneNumber).toHaveValue('0452424565')
        expect(portfolioLink).toBeInTheDocument()
        expect(portfolioLink).toHaveValue('https://asdf.com')
    })

    it("Error Tests", () => {
       
        const {submitBtn, handleSubmit} = renderComponent()

        expect(submitBtn).toBeInTheDocument()
        
        fireEvent.click(submitBtn)

        const errors = screen.queryAllByTestId('error')

        expect(errors).toHaveLength(4)
      
    })

    it("Callback Test", () => {
        
        const {submitBtn, handleSubmit, fullNameInput, emailAddress, phoneNumber, portfolioLink} = renderComponent()
        
        fireEvent.change(fullNameInput, { target: { value: 'Jane Doe' } })
        fireEvent.change(emailAddress, { target: { value: 'test@test.com' } })
        fireEvent.change(phoneNumber, { target: { value: '0452424565' } })
        fireEvent.change(portfolioLink, { target: { value: 'https://asdf.com' } })

        fireEvent.click(submitBtn)

        const parameters = {
            fullName: 'Jane Doe',
            emailAddress: 'test@test.com',
            phoneNumber: '0452424565',
            link: 'https://asdf.com'
        }
        expect(handleSubmit).toHaveBeenCalledOnce
        expect(handleSubmit).toHaveBeenCalledWith(parameters)
    })
})

