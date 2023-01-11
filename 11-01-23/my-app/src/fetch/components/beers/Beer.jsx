import { useFetch } from "../../../hooks/use-fetch";
import { ENDPOINT } from "../../constants/endpoints";
import "./Beer.css";

export function Beer() {
  const { data, error, loading, refetch } = useFetch(ENDPOINT.BEERS);

  if (loading) return `Loading...`;

  if (error) return `Errore`;

  return (
    <section className="beer">
      {JSON.stringify(data)}
      <button onClick={refetch}>Refetch!</button>
    </section>
  );
}
