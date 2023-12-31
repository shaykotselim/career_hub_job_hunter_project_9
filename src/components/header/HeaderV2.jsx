import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Example() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography className="p-1 font-normal text-black">
        <Link to="/statistics" className="flex items-center">
          Statistics
        </Link>
      </Typography>
      <Typography className="p-1 font-normal text-black">
        <Link to="/applied_job" className="flex items-center">
          Applied-Job
        </Link>
      </Typography>
      <Typography className="p-1 font-normal text-black">
        <Link to="/blog" className="flex items-center">
          Blog
        </Link>
      </Typography>
    </ul>
  );

  return (
    <div className="bg-cyan-50">
      <Navbar className="mx-auto bg-cyan-50 shadow-none border-none rounded-none max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography className="mr-4 cursor-pointer py-1.5 font-normal">
            <Link to="/home">
              <span className="text-3xl font-medium bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500 inline-block text-transparent bg-clip-text ">
                Job_Hunter
              </span>
            </Link>
          </Typography>
          <div className="hidden lg:block">{navList}</div>
          <Button
            variant="gradient"
            size="lg"
            className="hidden lg:inline-block text-white p-2 rounded font-medium bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500"
          >
            <span>Start Applying</span>
          </Button>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          <div className="container mx-auto">
            {navList}
            <Button
              variant="gradient"
              size="sm"
              fullWidth
              className="mb-2 text-white p-2 rounded font-medium bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500"
            >
              <span>Start Applying</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
}
