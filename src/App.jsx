import { useEffect } from 'react';
import './App.css'
import useFetch from './hooks/useFetch';
import getRandomNumber from './utils/getRandomNumber';
import Header from './components/Header';
import MainChildren from './components/MainChildren';
import InputSearch from './components/InputSearch';
import InfoLocation from './components/InfoLocation';
import { useCookies } from 'react-cookie';
import PrintResidents from './components/PrintResidents';
import ArticleChildren from './components/ArticleChildren';


function App() {

  const [cookies, setCookie] = useCookies(['cookieName']);

  setCookie('cookieName', 'cookieValue', { sameSite: 'none', secure: true });

  const randomId = getRandomNumber(126);
  const url = `https://rickandmortyapi.com/api/location/${randomId}`;
  const [location, getApiLocation] = useFetch(url)

  useEffect(() => {
    getApiLocation();
  }, [])

  const characterResidents = location?.residents;

  return (
    <>
      <Header />
      <MainChildren>
        <InputSearch />
        <InfoLocation location={location} />
        <ArticleChildren>
          {
            characterResidents?.map((resident) => (
              <PrintResidents key={resident} resident={resident} />
            ))
          }
        </ArticleChildren>
      </MainChildren>
    </>
  )
}

export default App
