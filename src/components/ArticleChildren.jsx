import './styles/ArticleChildren.css'

const ArticleChildren = ({ children }) => {
    return (
        <article className='main__article'>
            {
                children
            }
        </article>
    )
}

export default ArticleChildren