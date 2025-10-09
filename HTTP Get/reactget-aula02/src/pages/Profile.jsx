import { useLocation, useNavigate } from "react-router-dom"
import './Profile.css'

function Profile () {

    const location = useLocation()
    const {user} = location.state || {}
    const navigate = useNavigate()

    const handleNavigate = () => {
        console.log("Navegar")
        navigate('/')
    }

    if (!user) return <p>Nenhum usuário selecionado</p>

    return (
        <>
        <div className="container">
            <h2>Perfil do Usuário</h2>
            <p>Nome: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Telefone: {user.phone}</p>
        </div>
        <button onClick={handleNavigate}>Home</button>
        </>
    )
}

export default Profile