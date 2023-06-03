import { useEffect, useRef, useState } from 'react'
import './styles/InputSearch.css';
import useFetch from '../hooks/useFetch';
import getRandomNumber from '../utils/getRandomNumber';

const InputSearch = ({setFindLocation}) => {
    const url = 'https://rickandmortyapi.com/api/location';
    const [allLocations, getAllLocations] = useFetch(url)

    useEffect(() => {
        getAllLocations()
    }, [])

    const valueInput = useRef();
    const [inputValue, setInputValue] = useState([])
    const [resultInput, setResultInput] = useState('')
    const nameLocationAll =  allLocations?.results.map(location => location.name)

    const handleChangeInput = () => {
        const nameLocation = valueInput.current.value.trim()
        const nameEqualLocation = nameLocationAll.filter((name) => name.includes(nameLocation))
        if (nameEqualLocation.length !== 20) setInputValue(nameEqualLocation)
        if (nameEqualLocation.length === 20) setInputValue([])
        setResultInput(nameLocation)
    }

    const handleClickLi = (e) => {
        const choiceUser = e.target.getAttribute('value')
        setResultInput(choiceUser)
        setInputValue([])
    }

    const handleClickForm = (e) => {
        e.preventDefault()
        const findLocation = allLocations?.results.find((location) => {
            if (location.name === resultInput) {
                return location.id
            }
        })
        console.log(findLocation)
        if (findLocation === undefined) setFindLocation(getRandomNumber(126))
        if (findLocation) setFindLocation(findLocation.id)
        setResultInput('')
    }

    return (
        <form className="main__form" onSubmit={handleClickForm}>
            <div>
                <input 
                    value={resultInput}
                    placeholder="Enter a location name" 
                    type='text' 
                    ref={valueInput}
                    onChange={handleChangeInput}
                />
                <button>Search</button>
            </div>
            <div className={`${inputValue.length ? 'div' : 'notDiv'}`}>
                <ul>
                    {
                        inputValue?.map((name) => (
                            <li value={name} key={name} onClick={handleClickLi}>{name}</li>
                        ))
                    }
                </ul>
            </div>
        </form>
    )
}

export default InputSearch;
