import Link from "next/link";

function Navbar() {
  return (
    <>
      <nav className="fixed h-20 top-0 left-0 z-40 w-full backdrop-blur bg-yellow-500 supports-backdrop-blur:bg-white/95 flex justify-between">
        <div>
          <p>Logo</p>
        </div>
        <ul className="flex justify-center items-center h-full">
          <li className="mx-4">
            <Link href="/">About</Link>
          </li>
          <li className="mx-4">
            <Link href="/">Experience</Link>
          </li>
          <li className="mx-4">
            <Link href="/">Work</Link>
          </li>
          <li className="mx-4">
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
