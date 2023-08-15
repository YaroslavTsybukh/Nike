import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

interface IControlsProps {
    currentIdx: number
    setCurrentIdx: (value: (prev: number) => number) => void
    dataLength: number
}
export const Controls = ({
    currentIdx,
    setCurrentIdx,
    dataLength,
}: IControlsProps) => {
    const isDisabledPrev = currentIdx == 0
    const isDisabledNext = currentIdx + 1 == dataLength

    const prevHandler = () => {
        !isDisabledPrev && setCurrentIdx((prev) => prev - 1)
    }
    const nextHandler = () => {
        !isDisabledNext && setCurrentIdx((prev) => prev + 1)
    }

    return (
        <div className='flex items-center gap-x-5'>
            <button
                onClick={prevHandler}
                style={
                    isDisabledPrev
                        ? { cursor: 'not-allowed', opacity: 0.3 }
                        : { cursor: 'pointer', opacity: 1 }
                }>
                <AiOutlineArrowLeft color='white' size={26} />
            </button>
            <p className='text-md text-white'>{currentIdx + 1} couple</p>
            <button
                onClick={nextHandler}
                style={
                    isDisabledNext
                        ? { cursor: 'not-allowed', opacity: 0.3 }
                        : { cursor: 'pointer', opacity: 1 }
                }>
                <AiOutlineArrowRight color='white' size={26} />
            </button>
        </div>
    )
}
