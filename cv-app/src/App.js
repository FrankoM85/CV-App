import {useState} from 'react';
import './App.css';
import ResetButton from './components/ResetButton';
import TextDisplay from './components/TextDisplay';
import TextInput from './components/TextInput';


function App() {
  const [text, setText] = useState("");
  return (
    <div className="App">
      <ResetButton onClick={(event) => setText("")} />

      <div className="container">
        <TextInput value={text} onInput={(event) => setText(event.target.value)} />
        <TextDisplay>{text}</TextDisplay>
      </div>
    </div>
  );
}

export default App;
