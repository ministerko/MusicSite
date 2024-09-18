import { NavBar } from '../Components';
import { gradient, hero } from '../assets';

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="relative flex flex-row justify-between">
        {/* First Div (Text Section) */}
        <div className="absolute space-y-10 mx-[125px] mt-[140px] z-10">
          <div className="w-[900px]">
            <h1 className="text-[110px] font-inter font-extrabold text-headcolor leading-[1]">
              Music without Limits
            </h1>
            <p className="text-Para text-p1">
              Enjoy music without interruption in an amazing era. It is so
              awesome and wonderful to love music that much.
            </p>
          </div>
          <a href='#' className="text-white w-[150px] h-[60px] flex justify-center items-center font-semibold bg-PrimaryRed p-[8px] rounded-[13px]">
            Sign Up
          </a>
        </div>

        {/* Second Div (Image Section) */}
        <div className="absolute right-0 z-20">
          {/* Container for both images */}
          <div className="relative w-[1000px] h-[1004px]">
            {/* Gradient Image */}
            <img
              src={gradient}
              className="absolute top-0 left-0 w-full h-full object-cover z-10"
              alt="Gradient Image"
            />
            {/* Hero Image */}
            <img
              src={hero}
              className="absolute opacity-50 top-0 right-0 w-[616px] mt-0 h-[600px] object-cover z-20"
              alt="Hero Image"
            />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
