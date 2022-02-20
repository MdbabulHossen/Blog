<<<<<<< HEAD
import './App.css';
import Home from './Components/Home/Home.jsx';
function App() {
  return (
    <div className="App">
    




    <Home />
=======
import "./App.css";
import ContactMain from "./Contacts/ContactMain";
import ArchiveMain from "./Archive/ArchiveMain";


function App() {
  return (
    <div className="App">
          <ContactMain />
          <br/>
          <br/>
          {/* this br tag will be removed when. archive & contact file add to another routing */}

          <ArchiveMain />
>>>>>>> 1162d7b9ce0c46597cf7080eb0fccdc47c78753f
    </div>
  );
}

export default App;
