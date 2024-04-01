import React, { ChangeEvent, FormEvent, useEffect, useRef } from 'react'

const OTP_LENGTH = 4

const OTP = () => {
    const ref = useRef<(HTMLInputElement | null)[]>([])
    const changeHandler = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        e.stopPropagation()

        if(!(parseInt(e.target.value))) {
            e.target.value=''
            return
        }
        
        if (index < ref.current.length) {
            ref.current[index + 1]?.focus()
        }
    }

    useEffect(() => {
        console.log(ref)
    }, [ref])


    const onSubmit = (e:FormEvent<HTMLFormElement>)=> {
        e.preventDefault()
        if(ref.current.filter(input=>!input?.value).length  > 0) {
            return
        }
        const datas = ref.current.map(input=>input?.value)
    }

    return (
        <div>
            <h2>Verify OTP</h2>
            <form action="" onSubmit={onSubmit}>
                {OTP_LENGTH > 0 && Array(OTP_LENGTH).fill('').map((_, index) =>
                    <input key={index} ref={e => ref.current[index] = e} name="otp1" id="" minLength={1} maxLength={1} onChange={(e) => changeHandler(e, index)} />
                )}
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default OTP