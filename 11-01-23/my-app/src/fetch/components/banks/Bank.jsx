import { useFetch } from "../../../hooks/use-fetch";
import { ENDPOINT } from "../../constants/endpoints";
import "./Bank.css";

export function Bank() {
  const { data, error, loading, refetch } = useFetch(ENDPOINT.BANKS);

  if (loading) return `Loading...`;

  if (error) return `Errore`;

  return (
    <section className="bank">
      <div>Bank code: {data?.id}</div>
      <h1>{data?.bank_name}</h1>
      <h5>{data?.account_number}</h5>
      <h5>{data?.swift_bic}</h5>
      <button className="btn-refresh" onClick={refetch}>
        Refetch!
      </button>
    </section>
  );
}
