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
      <div>Blood type code: {data?.id}</div>
      <h1>{data?.type}</h1>
      <h5>{data?.group}</h5>
      <h5>{data?.rh_factor}</h5>
      <button className="btn-refresh" onClick={refetch}>
        Refetch!
      </button>
    </section>
  );
}
