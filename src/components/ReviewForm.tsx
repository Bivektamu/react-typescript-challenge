import React, { Dispatch } from 'react'

type ReviewFormData = {
    [key: string]: string | string[]
  }

type Props = {
    formData: ReviewFormData,
    setStage: Dispatch<React.SetStateAction<number>>
}

const ReviewForm = ({formData, setStage}: Props) => {
  return (
    <div>
        <h1>Review & Confirm</h1>
        <form>
            <fieldset>
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id='fullName' name="fullName" value={formData.fullName} />
            </fieldset>
            
            <fieldset>
                <label htmlFor="emailAddress">Email Address</label>
                <input type="text" id='emailAddress' name="emailAddress" value={formData.emailAddress} />
            </fieldset>
            
            <fieldset>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="text" id='phoneNumber' name="phoneNumber" value={formData.phoneNumber} />
            </fieldset>
            
            <fieldset>
                <label htmlFor="link">Portfolio Link</label>
                <input type="text" id='link' name="link" value={formData.link} />
            </fieldset>
            
            <fieldset>
                <label htmlFor="skillLevel">Skill Level</label>
                <input type="text" id='skillLevel' name="skillLevel" value={formData.skillLevel} />
            </fieldset>
            
            <fieldset>
                <label htmlFor="challengeSkills">Challenge Preference</label>
                <input type="text" id='challengeSkills' name="challengeSkills" value={formData.challengeSkills} />
            </fieldset>

            <div>
                <button type="button" onClick={()=>setStage(prev=>prev-1)}>Go Back</button>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>

  )
}

export default ReviewForm