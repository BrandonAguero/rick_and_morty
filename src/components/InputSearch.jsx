import { useEffect, useRef, useState } from 'react'
import './styles/InputSearch.css';
import useFetch from '../hooks/useFetch';

const InputSearch = () => {

    const url = 'https://rickandmortyapi.com/api/location';

    const [allLocations, getAllLocations] = useFetch(url)

    useEffect(() => {
        getAllLocations()
    }, [])
    
    console.log(allLocations?.results)

    const valueInput = useRef();
    const [inputValue, setInputValue] = useState([])
    const nameLocationAll =  allLocations?.results.map(location => location.name)

    const handleChangeInput = () => {
        const nameLocation = valueInput.current.value.trim()
        const nameEqualLocation = nameLocationAll.filter((name) => name.includes(nameLocation))
        if (nameEqualLocation.length !== 20) setInputValue(nameEqualLocation)
        if (nameEqualLocation.length === 20) setInputValue([])
    }

    console.log(inputValue)    

    return (
        <form className="main__form" onChange={handleChangeInput}>
            <div>
                <input placeholder="Enter a name location" type='text' ref={valueInput}/>
                <button>Search</button>
            </div>
            <div className={`${inputValue.length ? 'div' : 'notDiv'}`}>
                <ul>
                    {
                        inputValue?.map((name) => (<li key={name}>{name}</li> ))
                    }
                </ul>
            </div>
        </form>
    )
}

export default InputSearch