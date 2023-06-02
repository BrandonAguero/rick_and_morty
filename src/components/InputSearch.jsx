import { useRef, useState } from 'react'
import './styles/InputSearch.css';

const InputSearch = () => {

    const valueInput = useRef();
    const [inputValue, setInputValue] = useState()

    const handleClick = (e) => {
        e.preventDefault()
        setInputValue(valueInput.current.value.trim())
        valueInput.current.value = '';
    }

    console.log(inputValue)    

    return (
        <form className="main__form" onSubmit={handleClick}>
            <input placeholder="Please, enter a number" type='text' ref={valueInput}/>
            <button>Search</button>
        </form>
    )
}

export default InputSearch