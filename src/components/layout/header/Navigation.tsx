const navMenu = ['Home', 'Collection', 'About', 'Contact']

export const Navigation = () => {
    return (
        <nav>
            <ul className='pt-60px flex flex-row'>
                {navMenu.map((menuItem) => (
                    <li
                        key={menuItem}
                        className='text-dim-grey mr-80px cursor-pointer text-lg font-medium hover:text-white hover:duration-500'>
                        {menuItem}
                    </li>
                ))}
            </ul>
        </nav>
    )
}
