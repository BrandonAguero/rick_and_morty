import { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import './styles/PrintResidents.css'

const PrintResidents = ({ resident }) => {
    
    const [character, getApiCharacter] = useFetch(resident)

    useEffect(() => {
        getApiCharacter()
    }, [])

    return (
        <section className='main__article--section'>
            <header>
                <div>
                    <span className={`${character?.status}`} ></span>
                    <span>{character?.status}</span>
                </div>
                <figure>
                    <img src={character?.image}/>
                </figure>
            </header>
            <section>
                <h3>{character?.name}</h3>
                <div></div>
                <ul>
                    <li>
                        <span>Specie</span>
                        <span>{character?.species}</span>
                    </li>
                    <li>
                        <span>Origin</span>
                        <span>{character?.origin.name}</span>
                    </li>
                    <li>
                        <span>Eppisodes where appear</span>
                        <span>{character?.episode.length}</span>
                    </li>
                </ul>
            </section>
        </section>
    )
}

export default PrintResidents