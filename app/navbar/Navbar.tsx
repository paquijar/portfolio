import Link from "next/link";
import { navItems } from "./items";
function Navbar() {
  return (
    <>
      <nav className="bg-yellow-500 py-4 fixed w-full z-10 top-0">
        <div className="container mx-auto flex items-center justify-between px-4">
          <p className="text-2xl font-medium">Pablo Quijano</p>
          <div className="flex items-center">
            {navItems.map((item) => (
              <Link
                href={item.url}
                className="px-4 py-2 text-white hover:bg-yellow-500"
                key={item.name}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
