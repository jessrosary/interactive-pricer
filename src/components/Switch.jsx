import './Switch.css';

export default function Switch(props) {
  return (
    <div className='switch'>
      Monthly Billing
      <input type='checkbox' id='toggle' onClick={props.handleChange}></input>
      Yearly Billing 25% Discount
    </div>
  );
}
