import React, { useState } from 'react';
import Header from './components/header/Header';
import Rate from './components/rate/Rate';

const rates = [
  { title: 'Тариф Light', price: 300, speed: 10 },
  { title: 'Тариф Standart', price: 450, speed: 50 },
  { title: 'Тариф Smart', price: 550, speed: 100 },
  { title: 'Тариф PRO', price: 1000, speed: 200 },
];
function App() {
  const [selectedRate, setSelectedRate] = useState(null);
  const handleRateClick = (rateTitle) => {
    setSelectedRate(rateTitle);
  };

  return (
    <div>
      <Header />
      <div className="cards">
        {rates.map((rate, index) => (
          <Rate
            key={index}
            rate={rate.title}
            price={rate.price}
            speed={rate.speed}
            isSelected={selectedRate === rate.title}
            onRateClick={handleRateClick}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
