import { useEffect, useState } from 'react'
import './List.css'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function List () {

    const [users, setUsers] = useState([])
    const navigate = useNavigate()
        
    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        // console.log(response.data)
        setUsers(response.data)
    }

    const openUserProfile = (user) => {
        navigate('/profile', {state: {user}})
    }

    return (
        <>
        <h1>Users List</h1>
        <div className='container'>
        {
            users.map(user => (
                <li 
                key={user.id}
                onClick={() =>openUserProfile(user)}
                style={{cursor: "pointer", marginBottom: "8px"}}
                >
                {user.name}</li>
            ))
        }
        </div>
        </>
    )
}

export default List