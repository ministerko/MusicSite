import { Logo } from '../assets/index.tsx';

const NavBar = () => {
  return (
    <div>
      <div className="bg-transparent mx-[100px] h-[60px] w-auto mt-[50px] rounded-[24px] flex flex-row px-[50px] justify-between items-center ">
        <div>
          <img src={Logo} className="" style={{ height: '25px' }} />
        </div>
        <div className="flex flex-row gap-[48px] text-low_white text-UI font-inter">
          <a href="#" className="text-white">Home</a>
          <a href="#">Dowload</a>
          <a href="#">New arrivals</a>
          <a href="#">Pricing</a>
        </div>
        <div className="flex flex-row gap-[24px] text-UI text-low_white font-inter">
          <a href="#" className="flex items-center">Sign In</a>
          <a href="#" className="text-white font-semibold bg-signup p-[8px] rounded-[13px]">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
