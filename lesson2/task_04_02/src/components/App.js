import React from 'react';

import AppTitle from './AppTitle.js';
import Contacts from './Contacts.js';

const App = () => {

  const userData = [
    {
      id: 0,
      avatar: './img/0.jpg',
      name: 'Антон Максимчак',
      location: 'Kyiv',
      geoData: 'https://www.google.com.ua/maps/place/%D0%93%D1%83%D0%B3%D0%BB+%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0/@50.4600746,30.5201888,17z/data=!4m6!3m5!1s0x40d4ce46a355fd4f:0x9bb1b5375abbc47!4b1!8m2!3d50.4600746!4d30.5223775',
      facebook: 'https://www.facebook.com/',
      github: 'https://github.com/',
      mail: 'https://www.ukr.net/'
    },
    {
      id: 1,
      avatar: './img/1.jpg',
      name: 'Дмитрий Рожков',
      location: 'Kyiv',
      geoData: 'https://www.google.com.ua/maps/place/%D0%93%D1%83%D0%B3%D0%BB+%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0/@50.4600746,30.5201888,17z/data=!4m6!3m5!1s0x40d4ce46a355fd4f:0x9bb1b5375abbc47!4b1!8m2!3d50.4600746!4d30.5223775',
      facebook: 'https://www.facebook.com/',
      github: 'https://github.com/',
      mail: 'https://www.ukr.net/'
    },
    {
      id: 2,
      avatar: './img/2.jpg',
      name: 'Сергей Ларченко',
      location: 'Kyiv',
      geoData: 'https://www.google.com.ua/maps/place/%D0%93%D1%83%D0%B3%D0%BB+%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0/@50.4600746,30.5201888,17z/data=!4m6!3m5!1s0x40d4ce46a355fd4f:0x9bb1b5375abbc47!4b1!8m2!3d50.4600746!4d30.5223775',
      facebook: 'https://www.facebook.com/',
      github: 'https://github.com/',
      mail: 'https://www.ukr.net/'
    },
    {
      id: 3,
      avatar: './img/3.jpg',
      name: 'Sergey Puzankov',
      location: 'Kyiv',
      geoData: 'https://www.google.com.ua/maps/place/%D0%93%D1%83%D0%B3%D0%BB+%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0/@50.4600746,30.5201888,17z/data=!4m6!3m5!1s0x40d4ce46a355fd4f:0x9bb1b5375abbc47!4b1!8m2!3d50.4600746!4d30.5223775',
      facebook: 'https://www.facebook.com/',
      github: 'https://github.com/',
      mail: 'https://www.ukr.net/'
    },
  ];

  return (
    <div>
      <AppTitle />
      <Contacts users={userData} />
    </div>
  );
};

export default App;