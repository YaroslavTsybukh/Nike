import { useImagesData } from '../../../hooks/useImages.tsx'

export const BlockImages = () => {
    const imagesData = useImagesData()

    return (
        <div className='w-1/2 bg-white p-10 opacity-60'>
            <div className='flex gap-x-9'>
                <p>Images</p>
                <p>Video urls</p>
            </div>
            {imagesData.length > 0 ? (
                imagesData.map((image) => (
                    <div className='mt-8 flex gap-x-9' key={image.id}>
                        <img
                            className='h-16 w-16'
                            src={image.path}
                            alt={image.id}
                        />
                        <p className='break-all'>
                            {image.path.length > 100 &&
                                `${image.path.slice(0, 101)}...`}
                        </p>
                    </div>
                ))
            ) : (
                <p className='mt-8'>It's empty so far.</p>
            )}
        </div>
    )
}
