import './styles/InfoLocation.css'

const InfoLocation = ({ location }) => {
    return (
        <article className="main__article">
            <header className="main__article--header">
                <h1>{location?.name}</h1>
            </header>
            <section className="main__article--section">
                <ul>
                    <li>
                        <span>Type:</span>
                        <span>{location?.type}</span>
                    </li>
                    <li>
                        <span>Dimensión:</span>
                        <span>{location?.dimension}</span>
                    </li>
                    <li>
                        <span>Population:</span>
                        <span>{location?.residents.length}</span>
                    </li>
                </ul>
            </section>
        </article>
    )
}

export default InfoLocation