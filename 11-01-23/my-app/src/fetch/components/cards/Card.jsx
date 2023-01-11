import { useFetch } from "../../../hooks/use-fetch";
import { ENDPOINT } from "../../constants/endpoints";
import "./Card.css";

export function Card() {
  const { data, error, loading, refetch } = useFetch(ENDPOINT.CREDIT_CARDS);

  console.log("Card data:", data);

  /*  const { id, credit_card_type, credit_card_number, credit_card_expiry_date } =
    data; */

  if (loading) return `Loading...`;

  if (error) return `Errore`;

  return (
    <section className="card">
      {/* {JSON.stringify(data)} */}
      <div>Card code: {data?.id}</div>
      <h1>{data?.credit_card_number}</h1>
      <h5>{data?.credit_card_type}</h5>
      <h5>{data?.credit_card_expiry_date}</h5>

      <button className="btn-refresh" onClick={refetch}>
        Refetch!
      </button>
    </section>
  );
}
