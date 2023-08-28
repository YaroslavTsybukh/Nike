import { IDataFromServer } from '../../../../shared/dataFromServer.interface.ts'

interface IVideoItemProps {
    info: IDataFromServer
    isActive: boolean
}
export const VideoItem = ({ info, isActive }: IVideoItemProps) => {
    const { id, path } = info

    return (
        <img
            className={`shadow shadow-rose-950 ${
                isActive ? 'h-32 w-32 opacity-100' : 'h-28 w-28 opacity-30'
            }`}
            src={path}
            alt={id}
        />
    )
}
