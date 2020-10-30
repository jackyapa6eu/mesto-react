import React from 'react'
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import {popupAddPlaceContent, popupEditProfileContent, popupEditAvatarContent, popupDeleteRequestContent} from '../utils/utils.js'

function App() {
  const [isEditProfilePopupOpen, toggleEditProfilePopup] = React.useState(false);
  const [isAddPlacePopupOpen, toggleAddPlacePopup] = React.useState(false);
  const [isEditAvatarPopupOpen, toggleEditAvatarPopup] = React.useState(false);
  const [isImagePopupOpen, toggleImagePopup] = React.useState(false);
  const [isDeleteRequestOpen, toggleDeleteRequestPopup] = React.useState(false);
  const [popupContent, setPopupContent] = React.useState(<></>);
  const [popupTitle, setPopupTitle] = React.useState('');
  const [popupName, setPopupName] = React.useState('');
  const [selectedCard, setCard] = React.useState({});

  function handleEditAvatarClick() {
    setPopupContent(popupEditAvatarContent);
    setPopupTitle('Обновить аватар');
    setPopupName('editavatar');
    toggleEditAvatarPopup(true);
  }

  function handleEditProfileClick() {
    setPopupContent(popupEditProfileContent);
    setPopupTitle('Редактировать профиль');
    setPopupName('editprofile');
    toggleEditProfilePopup(true);
  }

  function handleAddPlaceClick() {
    setPopupContent(popupAddPlaceContent);
    setPopupTitle('Новое место');
    setPopupName('addplace');
    toggleAddPlacePopup(true);
  }

  function handleDeleteCard() { // загатовка на будущее
    setPopupContent(popupDeleteRequestContent);
    setPopupTitle('Вы уверены?');
    setPopupName('deleterequest');
    toggleDeleteRequestPopup(true);    
  }

  function closeAllPopups() {
    toggleImagePopup(false);
    toggleAddPlacePopup(false); 
    toggleEditProfilePopup(false); 
    toggleEditAvatarPopup(false);
  }

  return (
    <div className="page">
      <Header />
      <Main 
        onEditProfile={handleEditProfileClick} 
        onAddPlace={handleAddPlaceClick} 
        onEditAvatar={handleEditAvatarClick}
        onFullImage={toggleImagePopup}
        onCardClick={setCard}
      />
      <Footer />
      <PopupWithForm 
        name={popupName} 
        title={popupTitle}
        isOpen={isEditProfilePopupOpen || isAddPlacePopupOpen || isEditAvatarPopupOpen || isDeleteRequestOpen ? true : false}
        children={popupContent}
        onClose={closeAllPopups}
      />
      <ImagePopup 
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      />
  </div>
  );
}

export default App;
