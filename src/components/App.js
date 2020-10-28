import React from 'react'
import headerLogo from '../images/header__logo.svg';

function App() {
  return (
    <div className="page">
      <header className="header">
        <img className="logo" src={headerLogo} alt="логотип Mesto"/>
      </header>
      <main className="content">
        <section className="profile">
          <div className="profile__avatar">
            <div className="profile__overlay"></div>
            <img className="profile__avatar-image" src="./images/profile__avatar.png" alt="Изображение профиля"/>
          </div>
          <div className="profile__info"> 
            <h1 className="profile__display-name"></h1>
            <button type="button" className="profile__edit-button"></button>
            <p className="profile__profession"></p>
          </div>
          <button type="button" className="profile__add-button"></button>
        </section>
        <section className="places">
        </section>
      </main> 
    <footer className="footer">
      <p className="footer__copyright">&COPY; 2020 Mesto Russia</p>
    </footer>
    <div className="popup popup_type_edit-profile">
      <form className="popup__form popup__form_type_edit-profile" name="editprofile" novalidate>
        <button type="button" className="popup__close-button"></button>
        <h3 className="popup__title">Редактировать профиль</h3>
        <input type="text" name="name" className="popup__input popup__input_type_display-name" id="profile-display-name-input" required minlength="2" maxlength="40"/>
        <span className='popup__error popup__error_visible' id="profile-display-name-input-error"></span>
        <input type="text" name="about" className="popup__input popup__input_type_profession" id="profile-profession-input" required minlength="2" maxlength="200"/>
        <span className='popup__error popup__error_visible' id="profile-profession-input-error"></span>
        <button type="submit" className="popup__button">Сохранить</button>
      </form>
    </div>
    <div className="popup popup_type_edit-avatar">
      <form className="popup__form popup__form_type_edit-avatar" name="editavatar" novalidate>
        <button type="button" className="popup__close-button"></button>
        <h3 className="popup__title">Обновить аватар</h3>
        <input type="url" name="avatar" className="popup__input popup__input_type_avatar" id="profile-avatar-input" placeholder="Ссылка на картинку" required/>
        <span className='popup__error popup__error_visible' id="profile-avatar-input-error"></span>
        <button type="submit" className="popup__button">Сохранить</button>
      </form>
    </div>
    <div className="popup popup_type_add-place">
      <form className="popup__form popup__form_type_add-place" name="addplace" novalidate>
        <button type="button" className="popup__close-button"></button>
        <h3 className="popup__title">Новое место</h3>
        <input type="text" name="name" className="popup__input popup__input_type_place-name" id="place-name-input" placeholder="Название" required minlength="2" maxlength="30"/>
        <span className='popup__error popup__error_visible' id="place-name-input-error"></span>
        <input type="url" name="link" className="popup__input popup__input_type_place-link" id="place-link-input" placeholder="Ссылка на картинку" required />
        <span className='popup__error popup__error_visible' id="place-link-input-error"></span>
        <button type="submit" className="popup__button">Создать</button>
      </form>
    </div>
    <div className="popup popup_type_figure">
      <figure className="popup__figure">
        <button type="button" className="popup__close-button"></button>
        <img className="popup__image" src="#" alt="" />
        <figcaption className="popup__caption"></figcaption>
      </figure>
    </div>
    <div className="popup popup_type_delete-request">
      <form className="popup__form popup__form_type_delete-request" name="deleterequest" novalidate>
        <button type="button" className="popup__close-button"></button>
        <h3 className="popup__title">Вы уверены?</h3>
        <button type="submit" className="popup__button">Да</button>
      </form>
    </div>
  </div>
  );
}

export default App;
