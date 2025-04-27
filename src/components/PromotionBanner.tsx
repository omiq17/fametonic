import React from "react";

const PromotionBanner = () => {
  return (
    <div
      className="text-white fs-5 fw-bolder text-center py-4 py-md-2 px-20"
      style={{
        background:
          "linear-gradient( 90deg, var(--bs-primary) 0%,var(--bs-secondary) 100%)",
      }}
    >
      <span role="img" aria-label="rocket" className="me-2">
        &#128640;
      </span>
      <span className="text-secondary">FRESH BEGINNINGS SALE:</span> Extra 25%
      OFF, Limited Spots - start your journey today!
    </div>
  );
};

export default PromotionBanner;
