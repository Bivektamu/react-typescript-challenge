import React, { Dispatch, ChangeEvent, FormEvent, useState } from 'react'

type SkillLevel = {
    skillLevel: string
}
type Props = {
    submitHandler: (SkillLevel: SkillLevel) => void,
    setStage: Dispatch<React.SetStateAction<number>>
}



const SkillForm = ({ submitHandler, setStage }: Props) => {

    const [selected, setSelected] = useState('')
    const [error, setError] = useState('')

    const onSelected = (e:ChangeEvent<HTMLInputElement>) => {
        setSelected(e.target.value);
        setError('')
    }

    const onSubmit=(e:FormEvent<HTMLFormElement>)=> {
        e.preventDefault()
        if(!selected) {
            return setError('Please select skill level')
        }
        submitHandler({skillLevel: selected})
    }

    return (
        <form onSubmit={onSubmit}>
            <h1>Skill Level</h1>
            <fieldset>
                <input type="radio" name="skillLevel" id='begineer' onChange={onSelected} value='begineer' />
                <label htmlFor="begineer">Begineer</label>

                <input type="radio" name="skillLevel" id='intermediate' value='intermediate' onChange={onSelected} />
                <label htmlFor="intermediate">Intermediate</label>
                <br />
                <input type="radio" name="skillLevel" id='advanced' value='advanced' onChange={onSelected} />
                <label htmlFor="advanced">Advanced</label>
                
                <input type="radio" name="skillLevel" id='expert' value='expert' onChange={onSelected} />
                <label htmlFor="expert">Expert</label>
            </fieldset>

            {error && <><br />{error}<br /><br /></>}
           
            <button type="button" onClick={()=>setStage((prev)=>prev-1)}>Go Back</button>
            <button type="submit">Next Step</button>
        </form>
    )
}

export default SkillForm