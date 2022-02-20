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
    </div>
  );
}

export default App;
