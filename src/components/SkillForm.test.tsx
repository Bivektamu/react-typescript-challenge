import { fireEvent, render, screen } from "@testing-library/react"
import SkillForm from "./SkillForm"
import { describe, expect, it, vi } from "vitest"

const setStage = vi.fn(), submitHandler = vi.fn();
const renderComponent = () => {
    render(<SkillForm setStage={setStage} submitHandler={submitHandler} /> )
    const begineer = screen.getByRole('radio', {
        name: /begineer/i
    })
    const intermediate = screen.getByRole('radio', {name:/intermediate/i})
    const advanced = screen.getByRole('radio', {name:/advanced/i})
    const expert = screen.getByRole('radio', {name:/expert/i})
    const backBtn = screen.getByRole('button', {name: /go back/i})
    const nextBtn = screen.getByRole('button', {name: /next step/i})
    return {begineer, intermediate, advanced, expert, setStage, submitHandler, nextBtn, backBtn}
}

describe('Testing Skill Form', ()=> {
    it('All Radio Inputs exist', ()=> {
        const {begineer, intermediate, advanced, expert} = renderComponent()
        expect(begineer).toBeInTheDocument()
        expect( intermediate).toBeInTheDocument()
        expect( advanced).toBeInTheDocument()
        expect(expert).toBeInTheDocument()
    })
    it('Error should not exist', ()=> {
        let error = screen.queryByTestId('error')
        expect(error).not.toBeInTheDocument()
    })

    it('Error should exist', ()=> {
        const {nextBtn} = renderComponent()
        fireEvent.click(nextBtn)
        let error = screen.getByTestId('error')
        expect(error).toBeInTheDocument()
    })
    it('Begineer is selected', ()=> {
        const {begineer} = renderComponent()
        fireEvent.click(begineer)
        expect(begineer).toBeChecked()
    })
    
    it('advanced is selected', ()=> {
        const {advanced} = renderComponent()
        fireEvent.click(advanced)
        expect(advanced).toBeChecked()
    })
    
    it('intermediate is selected', ()=> {
        const {intermediate} = renderComponent()
        fireEvent.click(intermediate)
        expect(intermediate).toBeChecked()
    })
    
    it('expert is selected', ()=> {
        const {expert} = renderComponent()
        fireEvent.click(expert)
        expect(expert).toBeChecked()
    })

    it('Submit handler is called once with begineer parameter', ()=> {
        const {begineer, submitHandler, nextBtn} = renderComponent()
        fireEvent.click(begineer)
        expect(begineer).toBeChecked()
        fireEvent.click(nextBtn)
        expect(submitHandler).toHaveBeenCalledOnce()
        expect(submitHandler).toHaveBeenCalledWith({skillLevel: 'begineer'})
    })

    it('SetStage callback is called once', ()=> {
        const {backBtn, setStage} = renderComponent()
        fireEvent.click(backBtn)
        expect(setStage).toHaveBeenCalledOnce()
    })
})