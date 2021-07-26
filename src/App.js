import './App.css';
import FormInput from './components/FormInput';

function App() {

  const handleChange = val => {
    console.log(val);
  }

  return (
    <div className="App">
      <FormInput type="number" onChange={handleChange} />
    </div>
  );
}

export default App;
