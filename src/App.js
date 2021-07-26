import './App.css';
import CustomSelect from './components/CustomSelect';
import FormInput from './components/FormInput';

function App() {

  const handleChange = val => {
    console.log(val);
  }

  const selectData = [
    { id: 1, name: 'one' },
    { id: 2, name: 'Two' },
    { id: 3, name: 'Three' },
    { id: 4, name: 'Four' },
    { id: 5, name: 'Five' }
  ];
  const handleSelectChange = val => {
    console.log({val});
  }

  return (
    <div className="App">
      <div>
        <FormInput type="number" onChange={handleChange} />
      </div>
      <div>
        <CustomSelect data={selectData} onSelectChange={handleSelectChange} />
      </div>
    </div>
  );
}

export default App;
