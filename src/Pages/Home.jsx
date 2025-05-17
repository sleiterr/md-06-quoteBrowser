//Page/Home.jsx
import FilterSort from "../components/FilterSort/FilterSort";
import { useQoutes } from "../QuoteContext/QuoteContext";

const Home = ({ addToFavorites }) => {
  const { quotes, error } = useQoutes();

  return (
    <FilterSort quotes={quotes} error={error} addToFavorites={addToFavorites} />
  );
};

export default Home;
