import './Slider.css';

export default function Slider(props) {
  const percentage = (100 / props.max) * props.value;
  const background = `linear-gradient(to right, hsl(174, 77%, 80%) ${percentage}%, hsl(224, 65%, 95%) ${percentage}%)`;

  return (
    <input
      type='range'
      id='slider'
      name='slider'
      min={0}
      max={props.max}
      value={props.value}
      onChange={props.handleChange}
      style={{ background }}
    ></input>
  );
}
