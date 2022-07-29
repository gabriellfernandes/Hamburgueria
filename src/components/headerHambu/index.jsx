import { type } from "@testing-library/user-event/dist/type"
import { useState } from "react"
import logo from "../../assets/image/logo.png"
import { HeaderStyle } from "./style"

function Header({filtred}){
    const [value, setValue] = useState("")

    return(
        <HeaderStyle>
            <img src={logo} alt="logo" />
            <form
            onSubmit={(event) => {
                event.preventDefault()
                filtred(value)
            }}>
                <input type="text" placeholder="Pesquise a comida..." onChange={(event) => setValue(event.target.value)}/>
                <div>
                    <button type="submit">Pesquisar</button>
                    <button type="button" onClick={() => filtred("")}>Mostrar todos</button>
                </div>
            </form>
            
            
        </HeaderStyle>
    )
}

export default Header