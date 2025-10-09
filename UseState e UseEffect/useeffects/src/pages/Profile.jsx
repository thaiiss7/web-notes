import { useParams } from "react-router-dom"

export const Profile = () => {

    const {nome} = useParams()

    return (
        <h1>Profile {nome}</h1>
    )
}