import { useState } from "react"
import Login from "./Login"
import { NavLink } from "react-router-dom"
export default function Header(){

    const [isLogged, setIsLogged] = useState(false)

    const handleLogin = () =>{
        setIsLogged(!isLogged)
    }

    return(
        <>
            <header className="flex w-full h-14 bg-purple-700 justify-around items-center text-white">
                <div>
                    <h1>Portal Filmes</h1>
                </div>
                <nav>
                    <ul className="flex gap-6">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/movies">Lista dos filmes</NavLink></li>
                        <li><NavLink to="/genre">Lista de Gênero</NavLink></li>
                        {isLogged && <li><NavLink to="/settings">Configurações</NavLink></li>}
                    </ul>
                </nav>
                <Login isLogged={isLogged} handleLogin={handleLogin} />
            </header>
        </>
    )
}