import * as React from 'react';
import img from '../assets/img/aepplaroe-one-seat-section-outdoor-brown-wood.jpg';
import './card.scss';

export default function ActionAreaCard() {
  return (
    <article className='main-section'>
      <div className='card'>
        <img alt='card img' className='card-img' src={img}></img>
        <div className='card-content'>
          <h3 className='card-title'>APPLARO 1-seat</h3>
          <p className='card-discription'>1-seat modular sofa. 
            By combining different seating sections, you can create 
            a sofa in a shape and size that perfectly suits your outdoor space.</p>
          <ul>
            <li className='type'><span><b>Type: </b><span className="age">Chair</span></span></li>
            <li className='size'><span><b>Size: </b><span className="age">1</span></span></li>
            <li className='color'><span><b>Color: </b><span className="age">Brown</span></span></li>
            <li className='material'><span><b>Material: </b><span className="age">Wood</span></span></li>
          </ul>
        </div>
        <p className='card-price'><span>Price: </span><span>120</span>$<span/></p>
      </div>
      <div className='card'>
        <img alt='card img' className='card-img' src={img}></img>
        <div className='card-content'>
          <h3 className='card-title'>APPLARO 1-seat</h3>
          <p className='card-discription'>1-seat modular sofa. 
            By combining different seating sections, you can create 
            a sofa in a shape and size that perfectly suits your outdoor space.</p>
          <ul>
            <li className='type'><span><b>Type: </b><span className="age">Chair</span></span></li>
            <li className='size'><span><b>Size: </b><span className="age">1</span></span></li>
            <li className='color'><span><b>Color: </b><span className="age">Brown</span></span></li>
            <li className='material'><span><b>Material: </b><span className="age">Wood</span></span></li>
          </ul>
        </div>
        <p className='card-price'><span>Price: </span><span>120</span>$<span/></p>
      </div>
      <div className='card'>
        <img alt='card img' className='card-img' src={img}></img>
        <div className='card-content'>
          <h3 className='card-title'>APPLARO 1-seat</h3>
          <p className='card-discription'>1-seat modular sofa. 
            By combining different seating sections, you can create 
            a sofa in a shape and size that perfectly suits your outdoor space.</p>
          <ul>
            <li className='type'><span><b>Type: </b><span className="age">Chair</span></span></li>
            <li className='size'><span><b>Size: </b><span className="age">1</span></span></li>
            <li className='color'><span><b>Color: </b><span className="age">Brown</span></span></li>
            <li className='material'><span><b>Material: </b><span className="age">Wood</span></span></li>
          </ul>
        </div>
        <p className='card-price'><span>Price: </span><span>120</span>$<span/></p>
      </div>
      <div className='card'>
        <img alt='card img' className='card-img' src={img}></img>
        <div className='card-content'>
          <h3 className='card-title'>APPLARO 1-seat</h3>
          <p className='card-discription'>1-seat modular sofa. 
            By combining different seating sections, you can create 
            a sofa in a shape and size that perfectly suits your outdoor space.</p>
          <ul>
            <li className='type'><span><b>Type: </b><span className="age">Chair</span></span></li>
            <li className='size'><span><b>Size: </b><span className="age">1</span></span></li>
            <li className='color'><span><b>Color: </b><span className="age">Brown</span></span></li>
            <li className='material'><span><b>Material: </b><span className="age">Wood</span></span></li>
          </ul>
        </div>
        <p className='card-price'><span>Price: </span><span>120</span>$<span/></p>
      </div>
    </article>
    
  );
}