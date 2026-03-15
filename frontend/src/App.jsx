import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Listings from "./pages/listings.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>StaySphere</h2>
      <p>MERN projects running </p>
      <Listings />
    </>
  );
}

export default App;
