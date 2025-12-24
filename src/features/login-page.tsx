import { FormEvent, useRef } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from 'components/base/page-header';
import Page from 'components/base/page';
import { useAppDispatch } from 'hooks/index';
import { setCity } from 'store/action';
import { AppRoute, DefaultCity } from '@constants';
import { loginAction } from 'store/api-actions';

function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleMainPageRedirect = () => {
    dispatch(setCity({ city: DefaultCity }));
  };

  const handleSubmit = ((evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const login = loginRef.current?.value;
    const password = passwordRef.current?.value;

    if (!login || !password) {
      return;
    }

    dispatch(loginAction({ login, password }));
  });

  return (
    <Page>
      <div className="page page--gray page--login">
        <PageHeader hideNavigation />
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form className="login__form form" onSubmit={handleSubmit}>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input
                    className="login__input form__input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    ref={loginRef}
                  />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input
                    className="login__input form__input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    ref={passwordRef}
                  />
                </div>
                <button className="login__submit form__submit button" type="submit">Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to={AppRoute.Main} onClick={handleMainPageRedirect}>
                  <span>{DefaultCity.name}</span>
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    </Page>
  );
}

export default LoginPage;
