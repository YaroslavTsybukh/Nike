import { BiMenuAltRight } from 'react-icons/bi'
import { IHamburgerProps } from '../../../shared/menuProps.interface.ts'

export const Hamburger = ({ setIsClosed }: IHamburgerProps) => {
    const handleClick = () => {
        setIsClosed(false)
    }

    return (
        <div className='pt-50px cursor-pointer' onClick={handleClick}>
            <BiMenuAltRight color='white' size='30px' />
        </div>
    )
}
