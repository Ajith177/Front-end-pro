import React from 'react';
import './First.css';

function First() {
  return (
    <div className='complete'>
        <h3>How many stars would you give to our </h3>
        <h3>Online Code Editor?</h3>
        <div className='complete-1'>
        <input type="radio"  className="fa-regular fa-star"  name="rate" id="rate-5" />
        <label for="rate-5"></label>
        <input type="radio" className='fa-regular fa-star' name="rate" id="rate-4" />
        <label for="rate-5"></label>
        <input type="radio" className='fa-regular fa-star' name="rate" id="rate-3" />
        <label for="rate-5"></label>
        <input type="radio" className='fa-regular fa-star' name="rate" id="rate-2" />
        <label for="rate-5"></label> 
        <input type="radio" className="fa-regular fa-star" name="rate" id="rate-1" />
        <label for="rate-5"></label>
        </div>
    </div>
  )
}

export default First;
