import { CityNames } from '@constants';
import { useAppSelector } from 'hooks/index';
import { getSelectedCity } from 'store/offers-data/selectors';

type LocationListProps = {
  onCityChange: (city: CityNames) => void;
}

export function LocationList({onCityChange }: LocationListProps) {
  const activeCity = useAppSelector(getSelectedCity);

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {
          Object.values(CityNames).map((city) => (
            <li className="locations__item" key={city}>
              <a
                className={`locations__item-link tabs__item ${activeCity.name === city && 'tabs__item--active'}`}
                onClick={() => onCityChange(city)}
              >
                <span>{city}</span>
              </a>
            </li>
          ))
        }
      </ul>
    </section>
  );
}
