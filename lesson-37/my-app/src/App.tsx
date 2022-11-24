import React, { useState, useEfefct } from 'react';
import {Button} from './components/Button';
import {Welcome} from './pages/Welcome'

const Input = ({ handleChange, value }) => <input onChange={handleChange} defaultValue={value} type="text" />;

function App() {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setValue(value);
  };

  return (
    <>
      <div>My app</div>
      <Button
        color='red'
        onHandleClick={() => console.log('Clicked!')}
        text='Edit'
        disabled={value?.length < 3}
        >
        <div>Edit</div>
      </Button>
      <Button text="Save" onHandleClick={() => console.log('Clicked!')} />
      <Input handleChange={handleChange} value={value}/>
      <Welcome arr={[1, 2, 3]} text="Some text" title="Some Title" content="Some content"/>
    </>
  );
}

export default App;
