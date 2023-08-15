import { IDataImages } from '../../../../shared/dataImages.interface.ts'

interface IVideoItemProps {
    info: IDataImages
    isActive: boolean
}
export const VideoItem = ({ info, isActive }: IVideoItemProps) => {
    const { alt, background } = info

    return (
        <img
            className={`shadow shadow-rose-950 ${
                isActive ? 'h-32 w-32 opacity-100' : 'h-28 w-28 opacity-30'
            }`}
            src={background}
            alt={alt}
        />
    )
}
