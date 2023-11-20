import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

import { MdAccountCircle } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { GiTireIronCross } from "react-icons/gi";

import { useEffect, useState } from "react";

import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const [openNav, setOpenNav] = useState(false);
  // const [signin, setSignin] = useState(false);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {!currentUser ? (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="flex items-center gap-x-2 p-2 font-bold text-center">
          <Link
            to="/sign-in"
            className="flex items-center text-slate-100 mr-5 pr-5">
            <MdAccountCircle size={20} className="mr-1 h-16  text-slate-400" />{" "}
            Sign-In
          </Link>
        </Typography>
      ) : (
        <div className="flex gap-x-2 font-medium text-center mr-9 p-1">
          <Link to="/profile">
            <img
              src={currentUser.avatar}
              className="rounded-full w-16 object-cover  mr-9"
              alt="profile"
            />
          </Link>
        </div>
      )}

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-bold">
        <Link to="/" className="flex items-center text-slate-100 ">
          <AiOutlineHome size={16} className=" mr-1 h-16  text-slate-400" />
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-bold">
        <Link to="/offers" className="flex items-center text-slate-100">
          <BsCurrencyBitcoin size={16} className="mr-1 h-16  text-slate-400" />{" "}
          Traders
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-bold">
        <Link to="/about" className="flex items-center text-slate-100 ">
          <FcAbout size={16} className="mr-1 h-16  text-slate-400" /> About
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="bg-[#050401e5] border-none mx-auto">
      <div className=" mx-auto flex flex-wrap items-center justify-between text-slate-100">
        <h1
          href="#"
          className="mr-4 flex flex-wrap items-center cursor-pointer  font-bold">
          <div className="h-16 ">
            <img
              className="rounded-full object-cover shadow-sm h-full"
              src={Logo}
            />
          </div>
          <span className="text-[#f5f5f5]">CRYPTO</span>
          <span className="text-[#b39124]">TRADE </span>
          <span className="text-slate-300"> LINK</span>
        </h1>
        <div className="hidden lg:block">{navList}</div>
        <div className="hidden items-center gap-x-2 lg:flex">
          <div className="relative flex w-full gap-2 md:w-max">
            <input
              type="text"
              placeholder="Search..."
              className="bg-slate-200 rounded-lg w-full pl-9 p-2 mr-4 text-slate-900"
            />
            <div className="!absolute left-3 top-[8px]">
              <BsSearch size={20} className="text-slate-900 mt-1 " />
            </div>
          </div>
          <Button
            size="md"
            className="hover:shadow-lg hover:shadow-slate-200 rounded-lg p-2">
            Search
          </Button>
        </div>
        <IconButton
          variant="text"
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}>
          {openNav ? (
            <GiTireIronCross size={30} className="text-slate-100 " />
          ) : (
            <AiOutlineMenu size={30} className="text-slate-100 " />
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex flex-col gap-x-2 sm:flex-row sm:items-center">
            <div className="relative w-full gap-2 md:w-max">
              <input
                type="text"
                placeholder="Search..."
                className="bg-slate-200 rounded-lg w-full pl-9 p-2 mr-4"
              />
              <div className="!absolute left-3 top-[8px]">
                <BsSearch size={20} className="mt-1 " />
              </div>
            </div>
            <Button
              size="md"
              className="hover:shadow-slate-200 text-slate-200 mt-3  p-2 rounded-lg sm:mt-0 w-full">
              Search
            </Button>
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
}

export default Header;
