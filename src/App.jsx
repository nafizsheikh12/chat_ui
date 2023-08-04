import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./main.css";
import Signin from "./pages/Authentication/signin";
import Chat from "./pages/chat";

const App = () => {
  const [loading, setLoading] = useState(true);

  const preloader = document.getElementById("preloader");

  if (preloader) {
    setTimeout(() => {
      preloader.style.display = "none";
      setLoading(false);
    }, 2000);
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    !loading && (
      <>
        <Routes>
          <Route exact path="/" element={<Chat />} />
          <Route exact path="/sign" element={<Signin />} />
        </Routes>
      </>
    )
  );
};

export default App;
