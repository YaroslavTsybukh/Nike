import { SubmitHandler, useForm } from 'react-hook-form'
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'
import { db } from '../../../firebase.ts'

interface IFormData {
    thumbnail: string
}

export const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<IFormData>({
        defaultValues: {
            thumbnail: '',
        },
    })

    const onSubmit: SubmitHandler<IFormData> = async (data) => {
        try {
            await setDoc(doc(db, 'images', `image-${new Date().getTime()}`), {
                path: data.thumbnail,
                timestamp: serverTimestamp(),
            })
        } catch (e) {
            if (e instanceof Error) {
                console.log(e.message)
            } else if (typeof e == 'string') {
                console.log(e)
            }
        }

        reset()
    }

    return (
        <div className='w-1/2 bg-white p-9 opacity-60'>
            <h2>Add new photos</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register('thumbnail', {
                        required: 'This field is required',
                    })}
                    className='mt-4 block w-full rounded border-2 border-solid border-black p-1'
                    placeholder='Enter thumbnail path'
                />
                {errors.thumbnail && <div>{errors.thumbnail?.message}</div>}
                <button
                    className='mt-8 w-full border-2 border-solid border-black'
                    type='submit'>
                    Отправить
                </button>
            </form>
        </div>
    )
}
