import { Controls } from './Controls.tsx'
import { VideoLine } from './VideoLine.tsx'
import { useState } from 'react'
import { IDataImages } from '../../../../shared/dataImages.interface.ts'

const dataImages: IDataImages[] = [
    {
        id: 1,
        background: 'src/assets/backgroundFirst.png',
        alt: 'firstImage',
    },
    {
        id: 2,
        background: 'src/assets/backgroundSecond.png',
        alt: 'secondImage',
    },
    {
        id: 3,
        background: 'src/assets/backgroundThird.png',
        alt: 'thirdImage',
    },
]

export const Carousel = () => {
    const [currentIdx, setCurrentIdx] = useState<number>(0)

    return (
        <div className='mt-20'>
            <Controls
                currentIdx={currentIdx}
                setCurrentIdx={setCurrentIdx}
                dataLength={dataImages.length}
            />
            <VideoLine
                data={dataImages}
                currentIdx={currentIdx}
                setCurrentIdx={setCurrentIdx}
            />
        </div>
    )
}
