import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import ModalVideo from "react-modal-video";

import recommstyles from './ImageComponent.module.css';

const StoreRecommend1Row = () => {
  const [isOpen, setOpen] = useState(false);

  let prodParams = useParams();
  console.log("prodParams StoreRecommend1Row: ", prodParams);
  console.log("prodParams.productCode StoreRecommend1Row: ", prodParams.productCode);

  const [productCode, setProductCode] = useState(prodParams.productCode);

  let testimg = "BROO-GH15";
  const imageUrl = `http://localhost:3000/dalrun-hc/store/recomproducts/${productCode}/${productCode}-01.png`;


  const settings = {
    dots: true,
    arrow: true,
    infinite: true,
    fade: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    // adaptiveHeight: true,
  };
  return (
    <>
    <div className="store_recomm_showcase_image store_recomm_cover_image_test" style={{ backgroundImage: `url(${imageUrl})` }} >

          <div className="recomm_showcase_container">
            <div className="recomm_title_container">
                <h1 className="fz-100 fz-90--lg lh-1 text-center recomm_title_margin">
                  <span className="recomm_title">{prodParams.productCode}</span>
                </h1>
            </div>
          </div>
        </div>
        {/* End .ptf-showcase-image */}
      
    </>
  );
};

export default StoreRecommend1Row;
