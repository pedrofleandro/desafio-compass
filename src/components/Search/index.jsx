import { useState } from "react"
import { Buttons } from "../Buttons"

import './styles.scss'

export function Search() {
    const [user, setUser] = useState('')

    return (
        <>
            <h1 className="titilePage">Recrutamento <span>Compass</span></h1>
            <section className="search">
                <div className="search__content">
                    <input 
                        className="search__input"
                        type="text" 
                        placeholder="buscar"
                        onChange={event => setUser(event.target.value)}
                    />

                    <Buttons user={user} />
                </div>
            </section>
        </>
    )
}