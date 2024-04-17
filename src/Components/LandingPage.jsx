import { Link } from "react-router-dom";
import "../App.css";
import { useState } from "react";
import woman1 from "../images/woman1.jpeg";
import woman2 from "../images/woman2.jpeg";
import woman3 from "../images/woman3.jpeg";
import woman4 from "../images/woman4.jpeg";
import woman5 from "../images/woman5.jpeg";
import woman6 from "../images/woman6.jpeg";
import woman7 from "../images/woman7.jpeg";
import woman8 from "../images/woman8.jpeg";
import woman9 from "../images/woman9.jpeg";
import woman10 from "../images/woman10.jpeg";

function LandingPage() {
  const [count, setCount] = useState(0);
  const [margin, setMargin] = useState("0%");
  const [forward, setForward] = useState(true);

  // create a function where the percentage of the shift of the image is based on the count
  const shiftImage = (count) => {
    switch (count) {
      case 0:
        setMargin("0%");
        break;
      case 1:
        setMargin("-10%");
        break;
      case 2:
        setMargin("-20%");
        break;
      case 3:
        setMargin("-30%");
        break;
      case 4:
        setMargin("-40%");
        break;
      case 5:
        setMargin("-50%");
        break;
      case 6:
        setMargin("-60%");
        break;
      case 7:
        setMargin("-70%");
        break;
      case 8:
        setMargin("-80%");
        break;
      case 9:
        setMargin("-90%");
        break;
    }
  };

  // function for the sliding functionality
  if (forward) {
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        if (count === 10) {
          setForward(false);
        } else {
          setCount(count + 1);
          shiftImage(count);
        }
      }, 5000);
      // check if the function is working
      // console.log(count);
    }
  } else {
    for (let i = 10; i > 0; i--) {
      setTimeout(() => {
        if (count === 0) {
          setForward(true);
        } else {
          setCount(count - 1);
          shiftImage(count);
        }
      }, 5000);
    }
  }

  return (
    <>
      <div className="card">
        <div className="hero-section button">
          {/* Your hero content here */}
          <h1>Welcome to My Website</h1>
          <p>This is a fantastic place to be!</p>
        </div>
      </div>
      <div className="carousel-container">
        <div className="images-container">
          <div className="image" style={{ marginLeft: margin }}>
            <img
              src="https://res.cloudinary.com/dluexpyt4/image/upload/c_crop,ar_16:9/v1713227412/JourneeJots/priscilla-du-preez-EFoH8YajQuA-unsplash_hmi95n.jpg"
              alt="image 1"
            />
          </div>
          <div className="image">
            <img
              src="https://res.cloudinary.com/dluexpyt4/image/upload/c_crop,ar_16:9/v1713210315/JourneeJots/thought-catalog-23KdVfc395A-unsplash_2_qcsqze.jpg"
              alt="image 2"
            />
          </div>

          <div className="image">
            <img
              src="https://res.cloudinary.com/dluexpyt4/image/upload/c_crop,ar_16:9/v1713282037/JourneeJots/atikh-bana-Ycds6emp7BA-unsplash_rrtzwu.jpg"
              alt="image 3"
            />
          </div>

          <div className="image">
            <img
              src="https://res.cloudinary.com/dluexpyt4/image/upload/c_crop,ar_16:9/v1713282221/JourneeJots/jakob-owens-L0KuHxQc62s-unsplash_tpllxr.jpg"
              alt="image 4"
            />
          </div>

          <div className="image">
            <img
              src="https://res.cloudinary.com/dluexpyt4/image/upload/c_crop,ar_16:9/v1713226853/JourneeJots/sebastien-jermer-n7DY58YFg9E-unsplash_rskix8.jpg"
              alt="image 5"
            />
          </div>
          <div className="image">
            <img
              src="https://res.cloudinary.com/dluexpyt4/image/upload/c_crop,ar_16:9/v1713227128/JourneeJots/rana-sawalha-W_-6PWGbYaU-unsplash_sxletr.jpg"
              alt="image 6"
            />
          </div>

          <div className="image">
            <img
              src="https://res.cloudinary.com/dluexpyt4/image/upload/c_crop,ar_16:9/v1713277822/JourneeJots/pietro-de-grandi-T7K4aEPoGGk-unsplash_rgeidb.jpg"
              alt="image 7"
            />
          </div>

          <div className="image">
            <img
              src="https://res.cloudinary.com/dluexpyt4/image/upload/c_crop,ar_16:9/v1713278013/JourneeJots/dino-reichmuth-A5rCN8626Ck-unsplash_hjluxo.jpg"
              alt="image 8"
            />
          </div>

          <div className="image">
            <img
              src="https://res.cloudinary.com/dluexpyt4/image/upload/c_crop,ar_16:9/v1713278164/JourneeJots/luca-bravo-O453M2Liufs-unsplash_bfdcsx.jpg"
              alt="image 9"
            />
          </div>
          <div className="image">
            <img src={woman10} alt="image 10" />
          </div>
        </div>
      </div>
      <Link to="/trips">
        <button className="get-started-btn bg-blue-500">
          CLICK TO GET STARTED
        </button>
      </Link>
    </>
  );
}

export default LandingPage;
