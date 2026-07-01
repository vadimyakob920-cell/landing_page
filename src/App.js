import Navbar from "./Container/Header/Navbar.jsx";
import Homepage from "./Container/Home/Homepage";
import BotCheckModal from "./Container/BotCheck/BotCheckModal";
import { recordVisitStep } from "./api/backend";
import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    recordVisitStep(1).catch(() => {});
  }, []);

  return (
    <>
      <BotCheckModal />
      <Navbar />
      <Homepage />
    </>
  );
}

export default App;
