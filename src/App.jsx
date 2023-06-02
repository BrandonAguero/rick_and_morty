import { useEffect } from 'react';
import './App.css'
import useFetch from './hooks/useFetch';
import getRandomNumber from './utils/getRandomNumber';
import Header from './components/Header';
import MainChildren from './components/MainChildren';
import InputSearch from './components/InputSearch';
import InfoLocation from './components/InfoLocation';
import { useCookies } from 'react-cookie';


function App() {

  const [cookies, setCookie] = useCookies(['cookieName']);

  setCookie('cookieName', 'cookieValue', { sameSite: 'none', secure: true });


  const randomId = getRandomNumber(126);
  const url = `https://rickandmortyapi.com/api/location/${randomId}`;
  const [location, getApiLocation] = useFetch(url)

  useEffect(() => {
    getApiLocation();
  }, [])

  console.log(location)

  return (
    <>
      <Header />
      <MainChildren>
        <InputSearch />
        <InfoLocation location={location} />  
      </MainChildren>
    </>
  )
}

export default App
