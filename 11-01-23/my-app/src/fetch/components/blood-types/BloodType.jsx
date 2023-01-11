import { useEffect, useState } from "react";
import { useFetch } from "../../../hooks/use-fetch";
import { ENDPOINT } from "../../constants/endpoints";
import "./BloodType.css";

export function BloodType() {
  const { data, error, loading, refetch } = useFetch(ENDPOINT.BLOOD_TYPES);

  if (loading) return `Loading...`;

  if (error) return `Errore`;

  return (
    <section className="blood-type">
      {JSON.stringify(data)}
      <button onClick={refetch}>Refetch!</button>
    </section>
  );
}
