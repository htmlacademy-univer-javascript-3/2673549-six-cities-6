import MainPage from './MainPage';

type AppProps = {
  placesCount: number;
}

function App({placesCount}: AppProps): JSX.Element {
  return (
    <MainPage placeOffersCount={placesCount}/>
  );
}

export default App;
