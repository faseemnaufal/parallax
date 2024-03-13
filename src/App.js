import React, { useState, useEffect } from 'react';
import './App.css';
import Records from './records.json';

function App() {
  const [currentImageIndices, setCurrentImageIndices] = useState(() => {
    return Records.map(() => 0);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndices(prevIndices => {
        return prevIndices.map((index, i) => (index + 1) % Records[i].images.length);
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="header">
        <h1>STOREMATE</h1>
      </header>
      
      <div className="container">
        <div className="left-side">
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Stock</th>
                </tr>
              </thead>
              
            </table>
          </div>
        </div>
        <div className="right-side">
          <div className="inner">
            {Records && Records.map((record, index) => (
              <div className="box" key={record.id}>
                <div className="image-section">
                  <img src={record.images[currentImageIndices[index]]} alt="" />
                </div>
                <div className="details-section">
                  <div className="caption">{record.caption}</div>
                  <div className="price">Rs:{record.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="left-buttons">
          <button className="btn">btn</button>
          <button className="btn">btn</button>
          <button className="btn">btn</button>
          <button className="btn">btn</button>
          <button className="btn">btn</button>
        </div>
        <div className="net-weight">Net Weight: 100g</div>
        <div className="right-buttons">
          <button className="btn">btn</button>
          <button className="btn">btn</button>
          <button className="btn">btn</button>
        </div>
        
      </footer>
    </div>
  );
}

export default App;
