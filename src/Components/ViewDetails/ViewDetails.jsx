import { useLoaderData } from "react-router-dom";
import Details from "../Details/Details";



const Viewdetails = () => {
    const details = useLoaderData();
    // console.log(details)
    return (
        <div>
            {/* <Helmet><title>viewdetails</title></Helmet> */}
            {
                details.map(detail => <Details key={detail._id} detail={detail}>
                </Details>)
            }
        </div>
    );
};

export default Viewdetails;