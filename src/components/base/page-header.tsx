import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks/index';
import { logoutAction } from 'store/api-actions';
import { getAuthorizationStatus, getUserData } from 'store/user-process/selectors';
import { AppRoute, AuthorizationStatus } from '@constants';
import { getFavoriteOffers } from 'store/favorite-offers-data/selectors';

type PageHeaderProps = {
  hideNavigation?: boolean;
}

function PageHeader({ hideNavigation = false }: PageHeaderProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const favoritesCount = useAppSelector(getFavoriteOffers).length;
  const email = useAppSelector(getUserData)?.email ?? 'User';
  const authorized = authorizationStatus === AuthorizationStatus.Auth;
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={AppRoute.Main}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>

          {!hideNavigation && (
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={authorized ? AppRoute.Favorites : AppRoute.Login}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>

                    {((authorized)
                      ? (
                        <React.Fragment>
                          <span className="header__user-name user__name">{email}</span>
                          <span className="header__favorite-count">{favoritesCount}</span>
                        </React.Fragment>
                      )
                      : <span className="header__login">Sign in</span>
                    )}
                  </Link>
                </li>

                {authorized && (
                  <li className="header__nav-item">
                    <Link className="header__nav-link" to={AppRoute.Main} onClick={handleLogout}>
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>
                )}

              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

export default PageHeader;
