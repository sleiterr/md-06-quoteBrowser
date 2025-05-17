//Pages/QouteDetail.jsx
import { useParams, Link } from "react-router-dom";
// import QuoteCard from "../components/QouteCard/QuoteCard";
import { useQoutes } from "../QuoteContext/QuoteContext";

const QuoteDetail = () => {
  const { id } = useParams();
  const { quotes } = useQoutes();
  const quote = quotes.find((q) => String(q.id) === id);

  if (!quote) return <p>Quote not found</p>;

  return (
    <section>
      <div className="detailsContainer container">
        <div className="detailsCart">
          <h2 className="quoteTitle">Quote Details</h2>
          <p className="quoteSubtitle">{quote.quote}</p>
          <p className="quoteAuthor">{quote.author}</p>
          {/* <QuoteCard quote={quote} /> */}
          <div className="linkBox">
            <Link className="quoteLink" to="/">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteDetail;
