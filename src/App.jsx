//App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

//use the hooks for fetch data from API
import React, { useState, useEffect } from "react";
import { QouteContext } from "./QuoteContext/QuoteContext";

import Home from "../src/Pages/Home";
import Header from "./components/Header/Header";
import QuoteDetail from "../src/Pages/QuoteDetail";
import Favorites from "./Pages/Favorites";

import "./App.css";

function App() {
  // quotes - current state for API data, setQuotes updates it
  const [quotes, setQuotes] = useState([]);

  // error - holds API fetch errors, setError updates it
  const [error, setError] = useState(null);

  // useEffect is used for side effects like fetching data from the API
  useEffect(() => {
    // Async function that fetches data from the API using try/catch
    const fetchQuote = async () => {
      try {
        // Fetch data from the API
        const res = await fetch("https://dummyjson.com/quotes");

        // Throw an error if the response is not OK
        if (!res.ok) throw new Error(`HTTP! error! ${res.status}`);

        // Convert response to JSON
        const data = await res.json();

        // Update state with fetched quotes
        setQuotes(data.quotes);
      } catch (error) {
        // Catch and store error message
        setError(error.message);
      }
    };
    // Call fetch function once when component mounts
    fetchQuote();
  }, []); // Empty dependency array ensures it runs only once

  // This function runs only once, when the component first mounts.
  // useState is used to initialize and manage the "favorites" state, loading it from localStorage
  const [favorites, setFavorites] = useState(() => {
    try {
      // Retrieve the "favorites" key from localStorage
      const savedFavorites = localStorage.getItem("favorites");

      // If savedFavorites exists, parse the JSON string and return it; otherwise, return an empty array
      return savedFavorites ? JSON.parse(savedFavorites) : [];
    } catch (error) {
      // if it's error "console.error" return [] array
      console.error("Failed to parse favorites from localStorage:", error);
      return [];
    }
  }, []);

  // useEffect is used to save the updated favorites array to localStorage
  // It runs every time the "favorites" state changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // This function adds an item to the favorites list
  // It updates the state by creating a new array with the existing items and the new one
  const addToFavorites = (item) => {
    console.log("Adding to favorites:", item);
    setFavorites([...favorites, item]);
  };

  return (
    <>
      <main>
        <QouteContext.Provider value={{ quotes, error, addToFavorites }}>
          <BrowserRouter>
            <Header favoriteCount={favorites.length} />
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
