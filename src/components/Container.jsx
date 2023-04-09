import Slider from './Slider';
import Switch from './Switch';
import { useState } from 'react';

const products = [
  { pageviews: '10K', price: 8 },
  { pageviews: '50K', price: 12 },
  { pageviews: '100K', price: 16 },
  { pageviews: '500K', price: 24 },
  { pageviews: '1M', price: 36 },
];

export default function Container() {
  const [rangeValue, setRangeValue] = useState(2);
  const [isMonthlyBilling, setIsMonthlyBilling] = useState(true);

  const handleRangeChange = (event) => {
    const newValue = parseInt(event.target.value);
    setRangeValue(newValue);
  };

  const handleIsMonthlyBilling = (event) => {
    setIsMonthlyBilling((prevState) => !prevState);
  };

  const product = products[rangeValue];

  const price = parseInt(product.price).toFixed(2);
  const discountPrice = ((price * 12) / 1.25).toFixed(2);
  const totalCost = isMonthlyBilling ? price : discountPrice;

  const submitHandler = () => {
    console.log({ product, totalCost });
  };

  return (
    <div className='container'>
      <div className='container-head'>
        <span className='pageviews'>{product.pageviews} pageviews</span>
        <span className='price'>
          <span className='number'>${totalCost}</span>
          {isMonthlyBilling ? '/month' : '/year'}
        </span>
        <Slider
          value={rangeValue}
          max={products.length - 1}
          handleChange={handleRangeChange}
        />
        <Switch handleChange={handleIsMonthlyBilling} />
      </div>
      <hr></hr>
      <div className='container-foot'>
        <ul>
          <li>Unlimited websites</li>
          <li>100% data ownership</li>
          <li>Email reports</li>
        </ul>
        <button name='button' onClick={submitHandler}>
          Start my trial
        </button>
      </div>
    </div>
  );
}
