import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext.js';
import Card from './Card.js';

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar" onClick={props.onEditAvatar}>
          <div className="profile__overlay"/>
          <img className="profile__avatar-image" src={currentUser.avatar} alt="Изображение профиля"/>
        </div>
        <div className="profile__info"> 
          <h1 className="profile__display-name">{currentUser.name}</h1>
          <button type="button" className="profile__edit-button" onClick={props.onEditProfile}/>
          <p className="profile__profession">{currentUser.about}</p>
        </div>
        <button type="button" className="profile__add-button" onClick={props.onAddPlace}/>
      </section>
      <section className="places">
        {props.cards.map((card) => (<Card 
          card={card} 
          key={card._id} 
          onCardClick={props.onCardClick} 
          onCardDelete={props.onCardDelete}
          onFullImage={props.onFullImage} 
          onLikeClick={props.onCardLike}/>
          ))}
      </section>
    </main>
  )
}

export default Main;