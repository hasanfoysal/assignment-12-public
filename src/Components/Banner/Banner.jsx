import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

import img1 from "../../assets/pexels-cottonbro-8721318.jpg";
import img2 from "../../assets/pexels-pixabay-267389.jpg";
import img3 from "../../assets/pexels-pixabay-38544.jpg";
import img4 from "../../assets/pexels-thisisengineering-3862632.jpg";


const Banner = () => {
  return (
    <Carousel>
      <div>
        <img className="shadow-xl rounded-2xl" src={img2} />
      </div>
      <div>
        <img className="shadow-xl rounded-2xl"  src={img1} />
      </div>
      <div>
        <img className="shadow-xl rounded-2xl" src={img3} />
      </div>
      <div>
        <img className="shadow-xl rounded-2xl" src={img4} />
      </div>
     
    </Carousel>
  )
}

export default Banner