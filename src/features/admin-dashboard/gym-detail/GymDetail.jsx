import React from "react";
import gymImage from "@/assets/images/gym-1.png";
import gymLogo from "@/assets/images/gym-one.png";
import Heading from "@/common/ui/Heading";
import GymDetailCard from "./components/GymDetailCard";

function GymDetail() {
  return (
    <div>
      <div className="row">
        <Heading title="Gym Detail">
          
        </Heading>
        {/* <div>
          <img src={gymImage} alt="Gym" className="img-fluid mb-2" />
        </div> */}
         <div className="row">
           <div className="col-md-7">
            <GymDetailCard/>
           </div>
         </div>
        
      </div>
    </div>
  );
}

export default GymDetail;
