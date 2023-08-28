import { Controls } from './Controls.tsx'
import { VideoLine } from './VideoLine.tsx'
import { useState } from 'react'
import { useImagesData } from '../../../../hooks/useImages.tsx'

export const Carousel = () => {
    const [currentIdx, setCurrentIdx] = useState<number>(0)
    const dataImages = useImagesData()

    return (
        <div className='mt-20'>
            {dataImages.length > 0 ? (
                <>
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
                </>
            ) : (
                <h2 className='mt-5 text-white'>
                    Add a picture through the admin panel
                </h2>
            )}
        </div>
    )
}
