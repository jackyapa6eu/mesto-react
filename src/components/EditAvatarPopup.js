import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditAvatarPopup(props) {
  const inputRef = React.useRef();
  const [avatar, setAvatar] = React.useState({});
  function handleEditAvatarInput() {
    setAvatar({
      [inputRef.current.name] :inputRef.current.value});
    }
  function handleSubmit(event) {
    event.preventDefault();
    props.onUpdateAvatar(avatar);
  }
  return (
    <PopupWithForm name="editavatar" title="Обновить аватар" isOpen={props.isOpen} onClose={props.onClose}  onSubmit={handleSubmit}>
    <input type="url" 
      name="avatar" 
      ref={inputRef} 
      onChange={handleEditAvatarInput}
      className="popup__input popup__input_type_avatar" 
      id="profile-avatar-input" 
      placeholder="Ссылка на картинку" 
      required
    />
    <span className='popup__error popup__error_visible' id="profile-avatar-input-error"/>
    <button type="submit" className="popup__button">Сохранить</button>  
    </PopupWithForm>
  )
}

export default EditAvatarPopup;