import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

var output = (
<>
  <meta charSet="UTF-8" />
  <title>Hotel Menu</title>
  <link rel="stylesheet" href="style.css" />
  <header>
    <h1>Hotel Menu</h1>
  </header>
  <main>
    <section className="menu-category">
      <h2>Breakfast</h2>
      <div className="menu-item">
        <div className="menu-item-name">
          <h3>Scrambled Eggs</h3>
          <p>Fresh eggs served with toast and choice of bacon or sausage.</p>
        </div>
        <div className="menu-item-price">$10</div>
      </div>
      <div className="menu-item">
        <div className="menu-item-name">
          <h3>Buttermilk Pancakes</h3>
          <p>Fluffy pancakes served with butter and maple syrup.</p>
        </div>
        <div className="menu-item-price">$8</div>
      </div>
    </section>
    <section className="menu-category">
      <h2>Lunch</h2>
      <div className="menu-item">
        <div className="menu-item-name">
          <h3>Caesar Salad</h3>
          <p>
            Romaine lettuce, croutons, and Parmesan cheese tossed in a classic
            Caesar dressing.
          </p>
        </div>
        <div className="menu-item-price">$12</div>
      </div>
      <div className="menu-item">
        <div className="menu-item-name">
          <h3>Grilled Cheese</h3>
          <p>Melted cheddar cheese on toasted sourdough bread.</p>
        </div>
        <div className="menu-item-price">$9</div>
      </div>
    </section>
    <section className="menu-category">
      <h2>Dinner</h2>
      <div className="menu-item">
        <div className="menu-item-name">
          <h3>Filet Mignon</h3>
          <p>
            Tender and juicy beef filet served with roasted vegetables and
            garlic mashed potatoes.
          </p>
        </div>
        <div className="menu-item-price">$30</div>
      </div>
      <div className="menu-item">
        <div className="menu-item-name">
          <h3>Salmon</h3>
          <p>
            Grilled salmon served with a side of rice pilaf and steamed
            broccoli.
          </p>
        </div>
        <div className="menu-item-price">$25</div>
      </div>
    </section>
  </main>
</>

) 
root.render(output);  


