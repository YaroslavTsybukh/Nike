import { Navigation } from './Navigation.tsx'
import { Hamburger } from './Hamburger.tsx'
import { SideBar } from './SideBar.tsx'
import { useState } from 'react'

export const Header = () => {
    const [isClosed, setIsClosed] = useState(true)

    return (
        <header>
            <div className='container mx-auto px-4'>
                <div className='flex flex-row justify-end'>
                    <Navigation />
                    <Hamburger setIsClosed={setIsClosed} />
                </div>
                <SideBar isClosed={isClosed} setIsClosed={setIsClosed} />
            </div>
        </header>
    )
}
