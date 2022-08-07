import { useNavigate } from "react-router-dom"

export const Home = () => {

    const navigate = useNavigate()

    return (
        <div>
            <h1>Homepage</h1>
            <button onClick={ () => navigate('/about') }>Navigate</button>
        </div>
    )
}