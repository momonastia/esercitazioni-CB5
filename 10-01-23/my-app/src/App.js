import { useEffect, useState } from "react";
import "./App.css";

const API_ENDPOINT = {
  BASE: `https://random-data-api.com/api/v2`,

  get CREDIT_CARDS() {
    return `${this.BASE}/credit_cards`;
  },
};

function useRandomCard() {
  const [randomCard, setRandomCard] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNewCard = () => {
    setLoading(true);
    setError(null);

    fetch(API_ENDPOINT.CREDIT_CARDS)
      .then((r) => r.json())
      .then((card) => {
        console.log({ card });
        setRandomCard(card);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchNewCard();
  }, []);

  return { randomCard, loading, setLoading, error, fetchNewCard };
}

function App() {
  const { randomCard, loading, error, fetchNewCard } = useRandomCard();

  if (loading) {
    return `Caricamento in corso...`;
  }

  if (error || !randomCard) {
    return `Errore di connessione al server, provare a ricaricare la pagina`;
  }

  const { id, credit_card_type, credit_card_number, credit_card_expiry_date } =
    randomCard;

  return (
    <div className="App">
      <div>Card code: {id}</div>
      <h1>{credit_card_number}</h1>
      <h2>{credit_card_type}</h2>
      <h2>{credit_card_expiry_date}</h2>

      <button onClick={() => fetchNewCard()}>Tranfer all my money here!</button>
    </div>
  );
}

export default App;
