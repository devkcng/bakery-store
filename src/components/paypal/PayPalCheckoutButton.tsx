import React from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

const PayPalCheckoutButton = ({ totalAmount, onSuccess, onError }) => {
  const [{ isPending, isRejected }] = usePayPalScriptReducer();

  if (isPending) {
    return <div>Loading PayPal...</div>; // Hiển thị khi SDK đang tải
  }

  if (isRejected) {
    return <div>Failed to load PayPal SDK. Please try again later.</div>;
  }

  return (
    <PayPalButtons
      style={{ layout: "horizontal" }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: { value: totalAmount },
            },
          ],
        });
      }}
      onApprove={(data, actions) => {
        return actions.order.capture().then((details) => {
          onSuccess && onSuccess(details);
        });
      }}
      onError={(err) => {
        onError && onError(err);
      }}
    />
  );
};
