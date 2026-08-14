import { Link } from "react-router-dom";
import { MenuList } from "../sub-components/Navbar";

const Navbar = () => {
  return (
    <nav className="sticky top-0 navbar flex justify-center items-center w-full h-16 bg-black text-white border-b border-gray-600 z-50">
      <header className="z-40 flex px-3 sm:px-6 gap-2 sm:gap-4 w-full flex-row relative flex-nowrap items-center justify-between">
        <div className="flex gap-4 h-full flex-row items-center min-w-0">
          <div className="flex basis-0 flex-row flex-grow flex-nowrap justify-start bg-transparent items-center no-underline text-medium whitespace-nowrap box-border min-w-0">
            <Link aria-current="page" to="/" className="min-w-0">
              <h1 className="text-lg sm:text-xl md:text-2xl text-purple-500 font-bold truncate">&lt; Abhishek Kumar /&gt;</h1>
            </Link>
          </div>
        </div>
        <MenuList />
      </header>
    </nav>
  );
};

export default Navbar;