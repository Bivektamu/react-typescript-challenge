import React, { ChangeEvent, Dispatch, FormEvent, useState } from 'react'

type Skill = 'html/css/js' | 'ReactJs' | 'AngularJs' | 'VueJs'
type Challenge = {
    challengeSkills: Skill[]

}

type Props = {
    setStage: Dispatch<React.SetStateAction<number>>,
    submitHandler: (challengeSkills: Challenge) => void
}

const ChallengeForm = ({ setStage, submitHandler }: Props) => {
    const [selectedSkills, setSelectedSkills] = useState<Skill[]>([])
    const [error, setError] = useState('')
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setError('')
            const newSkill:Skill = e.target.value as Skill
            setSelectedSkills([...selectedSkills, newSkill])
        }
        else {
            setSelectedSkills([...selectedSkills.filter(skill => skill !== e.target.value)])
        }
    }
    const onSubmit = (e:FormEvent) => {
        e.preventDefault()
        if(selectedSkills.length < 1)
            return setError('Please select atleast one skill to challenge')

        const allSelectedSkills:Challenge = {challengeSkills: [...selectedSkills]}
        submitHandler({...allSelectedSkills})
    }
    return (
        <form onSubmit={onSubmit}>
            <h1>Challenge Form</h1>
            <fieldset>
                <legend>
                    <label htmlFor="html">html/css/js</label>
                    <input type="checkbox" name="html" id="html" value='html/css/js' onChange={changeHandler} />
                </legend>
            </fieldset>
            <fieldset>
                <legend>
                    <label htmlFor="ReactJs">ReactJs</label>
                    <input type="checkbox" name="ReactJs" id="ReactJs" value='ReactJs' onChange={changeHandler} />
                </legend>
            </fieldset>

            <fieldset>
                <legend>
                    <label htmlFor="AngularJs">AngularJs</label>
                    <input type="checkbox" name="AngularJs" id="AngularJs" value='AngularJs' onChange={changeHandler} />
                </legend>
            </fieldset>

            <fieldset>
                <legend>
                    <label htmlFor="VueJs">VueJs</label>
                    <input type="checkbox" name="VueJs" id="VueJs" value='VueJs' onChange={changeHandler} />
                </legend>
            </fieldset>
            {error && <div>{error}</div>}
            <div>
                <button type="button" onClick={()=>setStage(prev=>prev-1)}>Go Back</button>
                <button type="submit">Next</button>
            </div>
        </form>
    )
}

export default ChallengeForm