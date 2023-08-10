import { ReactNode } from 'react'
import { Header } from './header/Header.tsx'

interface IProp {
    children: ReactNode
}
export const Layout = ({ children }: IProp) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}
