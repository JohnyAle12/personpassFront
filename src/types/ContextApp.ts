export type ContextApp = {
    user?: UserApp
    setUser?: React.SetStateAction<any>
}

export type UserApp = {
    id: number,
    name: string,
    lastname: string,
    mobile: string,
    email: string,
    token: string,
}