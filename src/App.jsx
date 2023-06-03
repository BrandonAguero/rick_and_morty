import { useEffect, useState } from 'react';
import './App.css'
import useFetch from './hooks/useFetch';
import getRandomNumber from './utils/getRandomNumber';
import Header from './components/Header';
import InputSearch from './components/InputSearch';
import InfoLocation from './components/InfoLocation';
import { useCookies } from 'react-cookie';
import PrintResidents from './components/PrintResidents';

function App() {

  const [cookies, setCookie] = useCookies(['cookieName']);
  const [findLocation, setFindLocation] = useState()

  setCookie('cookieName', 'cookieValue', { sameSite: 'none', secure: true });

  const randomId = findLocation || getRandomNumber(126);
  const url = `https://rickandmortyapi.com/api/location/${randomId}`;
  const [location, getApiLocation] = useFetch(url)

  useEffect(() => {
    getApiLocation();
  }, [findLocation])

  return (
    <>
      <Header />
      <main className='main'>
        <InputSearch setFindLocation={setFindLocation} />
        <InfoLocation location={location} />
        <article className={`${location?.residents.length >= 1 && location?.residents.length <= 3 ? 'main__character--one' : 'main__article'}`}>
          {
            location?.residents.map((resident) => (
              <PrintResidents key={resident} resident={resident} />
            ))
          }
        </article>
      </main>
    </>
  )
}

export default App
