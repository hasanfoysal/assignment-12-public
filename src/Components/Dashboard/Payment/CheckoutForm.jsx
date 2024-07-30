/* eslint-disable no-undef */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import Swal from "sweetalert2";


const CheckoutForm = () => {
    const [error, setError] = useState("")
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) =>{
        event.preventDefault();

        if (!stripe || !elements) {
            return
          }
          
          const card = elements.getElement(CardElement)
          if (card === null) {
          return
          }

          const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
          })
          if (error) {
            console.log("payment error", error)
            setError(error.message)
            
          }
           else {
            console.log("payment method", paymentMethod)
            Swal.fire({
                title: "Payment successful!",
                text: "You clicked the button!",
                icon: "success" 
              });
            setError("")
          }

    }
    return (
        <form onSubmit={handleSubmit} className="ml-6">
            <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-sm btn-primary mt-3"
        type="submit"
        disabled={!stripe}
      >
        Pay
      </button>
      <p className="text-red-600">{error}</p>
        </form>
    );
};

export default CheckoutForm;