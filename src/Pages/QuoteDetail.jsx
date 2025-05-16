//Pages/QouteDetail.jsx
import { useParams, Link } from "react-router-dom";
import QuoteCard from "../components/QouteCard/QuoteCard";
import { useQoutes } from "../QuoteContext/QuoteContext";

const QuoteDetail = () => {
  const { id } = useParams();
  const { quotes } = useQoutes();
  const quote = quotes.find((q) => String(q.id) === id);

  return (
    <div>
      <h2>Quote Details</h2>
      <QuoteCard quote={quote} />
      <Link to="/">← Back to Home</Link>
    </div>
  );
};

export default QuoteDetail;
