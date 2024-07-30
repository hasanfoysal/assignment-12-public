import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
    return (
        <div>
         <h1 className="text-4xl mx-auto text-black ml[100px] lg:ml-[200px] text-center btn btn-outline border-0 border-b-4 border-green-600  py-1 my-5 font-semibold">Payment</h1>
         <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>


            </Elements>
         </div>
        </div>
    );
};

export default Payment; 