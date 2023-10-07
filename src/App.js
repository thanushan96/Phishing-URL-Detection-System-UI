import "./App.css";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import UrlForm from "./components/UrlForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <UrlForm />
    </div>
  );
}

export default App;
