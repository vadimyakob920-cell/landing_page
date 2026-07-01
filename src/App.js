import Navbar from "./Container/Header/Navbar.jsx";
import Homepage from "./Container/Home/Homepage";
import BotCheckModal from "./Container/BotCheck/BotCheckModal";
import "./App.css";

function App() {
  return (
    <>
      <BotCheckModal />
      <Navbar />
      <Homepage />
    </>
  );
}

export default App;
