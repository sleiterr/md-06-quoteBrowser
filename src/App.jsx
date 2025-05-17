//App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { QouteContext } from "./QuoteContext/QuoteContext";

import Home from "../src/Pages/Home";
import Header from "./components/Header/Header";
import QuoteDetail from "../src/Pages/QuoteDetail";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const res = await fetch("https://dummyjson.com/quotes");

        if (!res.ok) throw new Error(`HTTP! error! ${res.status}`);
        const data = await res.json();
        setQuotes(data.quotes);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchQuote();
  }, []);

  return (
    <>
      <main>
        <QouteContext.Provider value={{ quotes, error }}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quote/:id" element={<QuoteDetail />} />
              <Route />
            </Routes>
          </BrowserRouter>
        </QouteContext.Provider>
      </main>
    </>
  );
}

export default App;
