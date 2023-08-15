const navMenu = ['Admin', 'Collection', 'About', 'Contact']

export const Navigation = () => {
    return (
        <nav>
            <ul className='flex flex-row pt-60px'>
                {navMenu.map((menuItem) => (
                    <li
                        key={menuItem}
                        className='mr-80px cursor-pointer text-lg font-medium text-dim-grey hover:text-white hover:duration-500'>
                        {menuItem}
                    </li>
                ))}
            </ul>
        </nav>
    )
}
