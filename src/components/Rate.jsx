import React from 'react';
import rate from './rate.css';
import specialImage from '../assets/bestseller.png';

function Rate(props) {
  const { rate, price, speed } = props;

  const cardBackgroundColor = (price) => {
    if (price === 300) {
      return 'LightBlue';
    } else if (price === 450) {
      return 'MediumAquamarine';
    } else if (price === 550) {
      return 'LightSalmon';
    } else {
      return 'black';
    }
  };

  const backgroundColor = cardBackgroundColor(price);

  return (
    <div className="internet-rate">
      {price === 550 && <img src={specialImage} alt="Special Offer" />}
      <div style={{ backgroundColor }} className="internet-rate__main">
        <div className="internet-rate__title">
          <h4>{rate}</h4>
        </div>
        <div className="internet-rate__price">
          <p className="internet-rate__price-rub">руб</p>
          <div className="internet-rate__price-inline">
            <p className="internet-rate__price-num">{price}</p>
            <p className="internet-rate__price-month">/мес</p>
          </div>
        </div>
      </div>
      <div className="internet-rate__speed">
        <p>до {speed}Мбит/сек</p>
      </div>
      <div className="internet-rate__desk">
        <p>Объем включенного трафика не ограничен</p>
      </div>
    </div>
  );
}

export { Rate };
