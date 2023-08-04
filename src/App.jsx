import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
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
        </Routes>
      </>
    )
  );
};

export default App;
