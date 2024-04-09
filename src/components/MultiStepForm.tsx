import React, { useCallback, useEffect, useState } from 'react'
import PersonalForm from './PersonalForm'
import SkillForm from './SkillForm'
import ChallengeForm from './ChallengeForm'
import ReviewForm from './ReviewForm'

type ReviewFormData = {
  [key: string]: string | string[]
}

const MultiStepForm = () => {
  const [stage, setStage] = useState(1)
  const [formData, setFormData] = useState<ReviewFormData>({})

  const updateStage = (data: ReviewFormData) => {
    setFormData({ ...formData, ...data })
    setStage(stage + 1)
  }

  useEffect(() => console.log(formData), [formData])

  return (
    <div>
      <h1>MultiStepForm</h1>
      {stage === 1 ?
        <PersonalForm submitHandler={(data: ReviewFormData) => updateStage(data)} />
        : stage === 2 ?
          <SkillForm setStage={setStage} submitHandler={(data: ReviewFormData) => updateStage(data)} />
          : stage === 3 ?
            <ChallengeForm setStage={setStage} submitHandler={(data: ReviewFormData) => updateStage(data)} />
            :
            <ReviewForm setStage={setStage} formData={formData} />}
    </div>
  )
}

export default MultiStepForm