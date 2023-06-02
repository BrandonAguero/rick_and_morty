import './styles/Header.css';

const Header = () => {

    const altDescription = `
        Foto de portada de Rick and Morty 
        siendo perseguidos por un monstruo de un solo ojo,
        de color verde y con varios tentáculos.
    `
    return (
        <header className="header">
            <figure className="header__figure">
                <img src='/images/rickmorty.jpg' alt={altDescription} />
            </figure>
        </header>
    )
}

export default Header