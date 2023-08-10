const navMenu = ['Home', 'Collection', 'About', 'Contact']

export const Navigation = () => {
    return (
        <div>
            <ul>
                {navMenu.map((menuItem) => (
                    <li key={menuItem}>{menuItem}</li>
                ))}
            </ul>
        </div>
    )
}
