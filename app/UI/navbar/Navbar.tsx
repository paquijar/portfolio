"use client";
import { Link } from "react-scroll";
import { navItems } from "./items";

export const Navbar = () => {
  return (
    <>
      <nav className="bg-yellow-500 py-4 fixed w-full z-10 top-0">
        <div className="container mx-auto flex items-center justify-between px-4">
          <p className="text-2xl font-medium">Pablo Quijano</p>
          <div className="flex items-center">
            {navItems.map((item) => (
              <Link
                to={item.url}
                className="px-4 py-2 text-white hover:bg-yellow-500 cursor-pointer"
                key={item.name}
                smooth
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
