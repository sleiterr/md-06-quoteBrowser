//App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { QouteContext } from "./QuoteContext/QuoteContext";

import Home from "../src/Pages/Home";
import Header from "./components/Header/Header";
import QuoteDetail from "../src/Pages/QuoteDetail";
import Favorites from "./Pages/Favorites";

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

  const [favorites, setFavorites] = useState(() => {
    try {
      const savedFavorites = localStorage.getItem("favorites");
      return savedFavorites ? JSON.parse(savedFavorites) : [];
    } catch (error) {
      console.error("Failed to parse favorites from localStorage:", error);
      return [];
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (item) => {
    console.log("Adding to favorites:", item);
    setFavorites([...favorites, item]);
  };

  return (
    <>
      <main>
        <QouteContext.Provider value={{ quotes, error, addToFavorites }}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route
                path="/"
                element={<Home addToFavorites={addToFavorites} />}
              />
              <Route path="/quote/:id" element={<QuoteDetail />} />

              <Route
                path="/favorites"
                element={<Favorites favorites={favorites} />}
              />
            </Routes>
          </BrowserRouter>
        </QouteContext.Provider>
      </main>
    </>
  );
}

export default App;
