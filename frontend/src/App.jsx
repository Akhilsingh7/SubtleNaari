import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  const [open, setOpen] = useState(false);

  const toggleWindow = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div
      className={`${
        open ? "overflow-hidden h-screen" : "overflow-y-auto h-full"
      }`}
    >
      <Navbar open={open} setOpen={setOpen} toggleWindow={toggleWindow} />
      <Home />
    </div>
  );
}

export default App;
