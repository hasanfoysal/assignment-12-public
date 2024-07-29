import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe('');
const Payment = () => {
    return (
        <div>
         <h1 className="text-4xl mx-auto text-black ml[100px] lg:ml-[200px] text-center btn btn-outline border-0 border-b-4 border-green-600  py-1 my-5 font-semibold">Payment</h1>
         <div>
            <Elements stripe={stripePromise}>
                

            </Elements>
         </div>
        </div>
    );
};

export default Payment; 