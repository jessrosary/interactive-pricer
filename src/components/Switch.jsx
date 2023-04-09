import './Switch.css';

export default function Switch(props) {
  return (
    <div className='switch'>
      <span className='left'>Monthly Billing</span>
      <div className='toggle-switch'>
        <input
          className='react-switch-checkbox'
          id={`react-switch-new`}
          type='checkbox'
          onClick={props.handleChange}
        />
        <label className='react-switch-label' htmlFor={`react-switch-new`}>
          <span className={`react-switch-button`} />
        </label>
      </div>
      <span className='right'>
        Yearly Billing <span className='discount-flag'>25% discount</span>
      </span>
    </div>
  );
}
