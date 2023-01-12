import { Fragment } from "react";
import { useFetch } from "../../../hooks/use-fetch";
import { ENDPOINT } from "../../constants/endpoints";
import "./Beer.css";

export function Beer() {
  const { data, error, loading, refetch } = useFetch(ENDPOINT.BEERS);

  if (loading) return `Loading...`;

  if (error) return `Errore`;

  return (
    <section className="beer">
      <div>Beer code: {data?.id}</div>
      <h1>Brand: {data?.brand}</h1>
      <h5>Name: {data?.name}</h5>
      <h5>Style: {data?.style}</h5>
      <button className="btn-refresh" onClick={refetch}>
        Refetch!
      </button>
    </section>
  );
}
