import './App.css';
import Container from './components/Container.jsx';

export default function App() {
  return (
    <div className='App'>
      <header className='hero'>
        <h1>Simple, traffic-based pricing</h1>
        <h2>Sign-up for our 30-day trial. No credit card required.</h2>
      </header>
      <Container />
      <div className='attribution'>
        Challenge by{' '}
        <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
          Frontend Mentor
        </a>
        . Coded by <a href='https://github.com/jessrosary/'>Jess Rose</a>.
      </div>
    </div>
  );
}
