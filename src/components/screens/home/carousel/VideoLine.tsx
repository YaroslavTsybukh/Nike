import { IDataFromServer } from '../../../../shared/dataFromServer.interface.ts'
import { VideoItem } from './VideoItem.tsx'
interface IImagesProps {
    data: IDataFromServer[]
    currentIdx: number
    setCurrentIdx: (value: number) => void
}

export const VideoLine = ({
    data,
    currentIdx,
    setCurrentIdx,
}: IImagesProps) => {
    const translateValue = currentIdx * 164
    const handleClick = (value: number) => {
        setCurrentIdx(value)
    }

    return (
        <div
            className='mt-5 flex flex-row items-end gap-9 transition-all duration-300 ease-linear'
            style={{
                transform: currentIdx ? `translateX(${-translateValue}px)` : '',
            }}>
            {data.map((item, i) => {
                const isActive = i == currentIdx
                return (
                    <div
                        key={item.id}
                        className='cursor-pointer'
                        onClick={() => handleClick(i)}>
                        <VideoItem info={item} isActive={isActive} />
                    </div>
                )
            })}
        </div>
    )
}
