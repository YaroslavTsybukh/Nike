import { AiOutlineCloseCircle } from 'react-icons/ai'
import { ISideBarProps } from '../../../shared/menuProps.interface.ts'

const sideBarItems = ['Item1', 'Item2', 'Item3']
export const SideBar = ({ isClosed, setIsClosed }: ISideBarProps) => {
    const handleClose = () => {
        setIsClosed(true)
    }

    return (
        <>
            <div
                className='absolute right-0 top-0 h-960 w-sidebar bg-white'
                style={
                    !isClosed
                        ? {
                              transform: 'translateX(0)',
                              transition: 'transform .40s ease',
                          }
                        : {
                              transform: 'translateX(300px)',
                              transition: 'transform .40s ease',
                          }
                }>
                <div
                    className='mt-20px flex cursor-pointer justify-end'
                    onClick={handleClose}>
                    <AiOutlineCloseCircle size={25} />
                </div>
                <ul className='mt-150px flex flex-col items-center gap-10'>
                    {sideBarItems.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}
