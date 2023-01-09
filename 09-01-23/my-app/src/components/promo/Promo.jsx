import PromoHeading from "./PromoHeading";

const data = {
  heading: "80% off all items",
  callToAction: "Everything must go!",
};

export function Promo() {
  return (
    <div>
      <PromoHeading heading={data.heading} callToAction={data.callToAction} />
    </div>
  );
}
