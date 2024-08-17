import { Helmet } from "react-helmet-async";
import Banner from "../../Banner/Banner";
import FamousProducts from "../../FamousProducts/FamousProducts";
import Featured from "../../Featured/Featured";






const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Featured></Featured>
           <FamousProducts></FamousProducts>
           
           
           <Helmet>
            <title>
                Products Hunt || Home
            </title>
           </Helmet>
         
        </div>
    );
};

export default Home;