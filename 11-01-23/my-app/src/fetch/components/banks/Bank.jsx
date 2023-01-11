import { useFetch } from "../../../hooks/use-fetch";
import { ENDPOINT } from "../../constants/endpoints";
import "./Bank.css";

export function Bank() {
  const { data, error, loading, refetch } = useFetch(ENDPOINT.BANKS);

  if (loading) return `Loading...`;

  if (error) return `Errore`;

  return (
    <section className="bank">
      {JSON.stringify(data)}
      <button onClick={refetch}>Refetch!</button>
    </section>
  );
}
