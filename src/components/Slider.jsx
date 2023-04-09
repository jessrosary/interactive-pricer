import './Slider.css';

export default function Slider(props) {
  const percentage = 100 / props.value;
  const background = `linear-gradient(to right, red ${
    100 - percentage
  }%, blue ${percentage}%)`;

  console.log({ background });

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
