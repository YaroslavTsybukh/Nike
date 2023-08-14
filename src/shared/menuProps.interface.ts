export interface ISideBarProps {
    isClosed: boolean
    setIsClosed: (value: boolean) => void
}

export type IHamburgerProps = Omit<ISideBarProps, 'isClosed'>
