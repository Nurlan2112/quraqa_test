import React from 'react';

const Profile = ({name, email, city, street, suite, phone}) => {
  return(
    <div className="Profile">      
      <h3>Имя: {name}</h3>
      <p>Эл. почта: {email}</p>
      <p>Адрес: {city}, {street}, {suite}</p>
      <p>Телефон: {phone} </p>
    </div>
  );
};

export default Profile;