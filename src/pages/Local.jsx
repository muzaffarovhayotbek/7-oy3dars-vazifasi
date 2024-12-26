import React, { useEffect, useState } from 'react';

function Local() {
  const [city, setCity] = useState('Asia/Tashkent');
  const [time, setTime] = useState('');

  const cities = [
    { name: 'Tashkent', timezone: 'Asia/Tashkent' },
    { name: 'London', timezone: 'Europe/London' },
    { name: 'Tokio', timezone: 'Asia/Tokyo' },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString('en-US', {
          timeZone: city,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      );
    }, 1000);
    return () => clearInterval(intervalId);
  }, [city]);

  return (
    <div>
      <h2>Mahalliy vaqt</h2>
      <label htmlFor="city">Shaharni tanlang:</label>
      <select id="city" value={city} onChange={(e) => setCity(e.target.value)}>
        {cities.map(({ name, timezone }) => (
          <option key={timezone} value={timezone}>
            {name}
          </option>
        ))}
      </select>
      <div>{time}</div>
    </div>
  );
}

export default Local;
