import { Fragment } from "react";

function PromoHeading(props) {
  return (
    <Fragment>
      <h1>{props.heading}</h1>
      <h2>{props.callToAction}</h2>
    </Fragment>
  );
}

export default PromoHeading;
