import { NavLink } from 'react-router-dom'

const navMenu = ['Home', 'Admin', 'Collection', 'Contact']

export const Navigation = () => {
    return (
        <nav>
            <ul className='flex flex-row pt-60px'>
                {navMenu.map((menuItem, i) => (
                    <li
                        key={menuItem}
                        className='mr-80px cursor-pointer text-lg font-medium text-dim-grey hover:text-white hover:duration-500'>
                        <NavLink
                            to={i == 0 ? '/' : `/${menuItem.toLowerCase()}`}>
                            {menuItem}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
