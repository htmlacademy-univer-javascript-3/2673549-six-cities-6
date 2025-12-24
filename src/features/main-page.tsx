import { Link } from 'react-router-dom';
import Page from 'components/base/page';
import { Cities } from 'components/main-page/cities';
import { LocationList } from 'components/main-page/location-list';
import { useAppDispatch } from 'hooks/index';
import { setCity } from 'store/action';
import { AppRoute, CITIES, CityNames } from '@constants';

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
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link className="header__logo-link header__logo-link--active" to={AppRoute.Main}>
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
                </Link>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favourites}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      <span className="header__favorite-count">3</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="#">
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

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
