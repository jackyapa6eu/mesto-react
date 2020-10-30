import React from 'react'
import api from '../utils/Api'
import Card from './Card.js'

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCardsArr] = React.useState([]);
  React.useEffect(() => {
    api
    .getUserData()
    .then((result) => {
      setUserName(result.name);
      setUserDescription(result.about);
      setUserAvatar(result.avatar);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []); 

  React.useEffect(() => {
    api
    .getInitialCards()
    .then((result) => {
      setCardsArr(result);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar" onClick={props.onEditAvatar}>
          <div className="profile__overlay"></div>
          <img className="profile__avatar-image" src={userAvatar} alt="Изображение профиля"/>
        </div>
        <div className="profile__info"> 
          <h1 className="profile__display-name">{userName}</h1>
          <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
          <p className="profile__profession">{userDescription}</p>
        </div>
        <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
      </section>
      <section className="places">
        {cards.map((card) => (<Card card={card} key={card._id} onCardClick={props.onCardClick} onFullImage={props.onFullImage}/>))}
      </section>
    </main>
  )
}

export default Main;