import Page from 'components/base/page';
import PageHeader from 'components/base/page-header';
import { Cities } from 'components/main-page/cities';
import { LocationList } from 'components/main-page/location-list';
import { useAppDispatch } from 'hooks/index';
import { setCity } from 'store/action';
import { CITIES, CityNames } from '@constants';

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleChangeCity = (cityName: CityNames) => {
    const activeCity = CITIES.find((city) => city.name === cityName);

    if (!activeCity) {
      return;
    }

    dispatch(setCity({ city: activeCity }));
  };

  return (
    <Page>
      <div className="page page--gray page--main">
        <PageHeader />
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <LocationList onCityChange={handleChangeCity}/>
          </div>
          <Cities/>
        </main>
      </div>
    </Page>
  );
}

export default MainPage;
