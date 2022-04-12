import  React, {useState} from 'react';
import Counter from "./components/Counter";

function App() {
    const [likes, setLikes] = useState(5)
    const [value, setValue] = useState('Some Text')

  return (
    <div className="App">
        <Counter/>

        <h1>{value}</h1>
        <input
            type={"text"}
            value={value}
            onChange={event => setValue(event.target.value)}
        />
    </div>
  );
}

export default App;
