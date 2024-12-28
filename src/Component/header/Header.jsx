import React, { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useLocation } from "react-router-dom";


export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const getLinkClass = (path) => {
    if (path === "/" && location.pathname === "/") {
      return "text-[#22BCAC]";
    } else if (path !== "/" && location.pathname.includes(path)) {
      return "text-[#22BCAC]";
    } else {
      return "text-[#000]";
    }
  };
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false); // Close the menu if clicking outside
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
   <>


<header className="md:w-[70%] w-[100%] flex md:border-b-[1.5px]o md:mt-[10px]  py- md:justify-between  rounded-[10px]  md:border-[1px] border-[#6c6c6c]  bg-white  lg:!w-[80%] duration-800 ease-in-out fixed z-[400] top-[-0px] left-0 right-0  !font-Montserrat rounded-b-[9px]  mx-auto shadow-md">
        {/* Header Content */}

        <div className=" font-[400]  pl-[20px] hidden md:flex w-[60%] gap-[20px]">
          <a href="mailto:alnooraljadeed@gmail.com" className="text-[#000] flex items-center gap-[10px]">
            <i className="fa-solid text-[17px] fa-envelope"></i>
            <p className=" text-[15px] font-Monda font-[600]">infotirupati.com</p>
          </a>

          <a href="tel:+971543647527" className="text-[#000] flex items-center gap-[10px]">
            <i className="fa-sharp fa-regular text-[15px] fa-phone-volume"></i>
            <p className="text-[15px] font-Monda font-[600]">+91 9510826982</p>
          </a>

        </div>

        <div className="w-[100%] items-center justify-between md:justify-end gap-[30px] flex">
          <div className="xl:text-[15px]  gap-[30px] pl-[20px] !font-Montserrat  flex font-[600]  justify-end   md36:hidden md:flex">
            <Link to={"/"}>
              <p className={`cursor-pointer  font-[500]  font-Monda  ${getLinkClass("/")}`}>Home</p>
            </Link>
            <Link to={"/about-us"}>
              <p className={`cursor-pointer    font-Monda ${getLinkClass("/about-us")}`}>
                About
              </p>
            </Link>
            <Link to={"/blogs"}>
              <p className={`cursor-pointer   font-Monda  ${getLinkClass("/blogs")}`}>
                Blogs
              </p>
            </Link>
            <Link to={"/blogs"}>
              <p className={`cursor-pointer   font-Monda  ${getLinkClass("/blogs")}`}>
              Services
              </p>
            </Link>
            <Link to={"/contact-us"}>
              <p className={`cursor-pointer    font-Monda ${getLinkClass("/contact-us")}`}>
                Contact Us
              </p>
            </Link>
          </div>

          <div
            className="w-[40px] px-[10px] py-[10px] ml-[20px] h-[33px] md:hidden flex flex-col gap-[3px] bg-[#fff] shadow-lg rounded-[5px] cursor-pointer"
            onClick={toggleMenu}
          >
            <div className="bg-[#494949] h-[2px] w-[100%] rounded-[70px]"></div>
            <div className="bg-[#494949] h-[2px] w-[100%] rounded-[70px]"></div>
            <div className="bg-[#494949] h-[2px] w-[100%] rounded-[70px]"></div>
          </div>

          <div className="w-fit flex !font-lucida-bright-regular pr-[20px] items-center !h-[100%] md:top-[-2px] md150:top-[-2px] !border-l-0 pointer rounded-r-lg py-[10px] duration-500 ease-in-out">
          
           
                <div className="cursor-pointer bg-[#22BCAC] text-center justify-center text-[#fff] font-[500] flex w-[120px] rounded-[6px] items-center p-[6px] gap-[9px]">
                  <p className="fs-6 font-bold !font-Montserrat">Get Started</p>
                </div>
              </div>
      

        </div>

        {isMenuOpen && (
          <div
            ref={menuRef}
            className="menu absolute gap-[10px] flex flex-col top-[50px] animtionmenu left-0 w-[150px] bg-white font-Montserrat font-[500] shadow-md p-4 rounded-b-[10px]"
          >
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <p className={`cursor-pointer font-Montserrat text-center font-[500] ${getLinkClass("/")}`}>Home</p>
            </Link>
            <Link to="/about-us" onClick={() => setIsMenuOpen(false)}>
              <p className={`cursor-pointer  font-Montserrat text-center font-[500] ${getLinkClass("/about-us")}`}>
                About
              </p>
            </Link>
            <Link to="/blogs" onClick={() => setIsMenuOpen(false)}>
              <p className={`cursor-pointer font-Montserrat text-center font-[500] ${getLinkClass("/blogs")}`}>
                Blogs
              </p>
            </Link>
            <Link to="/warranty" onClick={() => setIsMenuOpen(false)}>
              <p className={`cursor-pointer  font-Montserrat text-center font-[500] ${getLinkClass("/warranty")}`}>
                Warranty
              </p>
            </Link>
            <Link to="/my-orders" onClick={() => setIsMenuOpen(false)}>
              <p className={`cursor-pointer font-Montserrat text-center font-[500] ${getLinkClass("/my-orders")}`}>
                My Orders
              </p>
            </Link>

            <Link to="/contact-us" onClick={() => setIsMenuOpen(false)}>
              <p className={`cursor-pointer font-Montserrat text-center font-[500] ${getLinkClass("/contact-us")}`}>
                Contact Us
              </p>
            </Link>
          </div>
        )}
      </header>

   </>
  );
}



// mainheaderanim 