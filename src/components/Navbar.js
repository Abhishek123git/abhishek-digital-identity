import { Link } from "react-router-dom";
import { MenuList } from "../sub-components/Navbar";
const Navbar = () => {
  return (
    <nav className="sticky top-0 navbar flex justify-center items-center w-full h-16 bg-black text-white border-b border-gray-600 absolute z-50">
      <header className="z-40 flex px-6 gap-4 w-full flex-row relative flex-nowrap items-center justify-between">
        <div className="flex gap-4 h-full flex-row items-center">        
          <div className="flex basis-0 flex-row flex-grow flex-nowrap justify-start bg-transparent items-center no-underline text-medium whitespace-nowrap box-border" justify="start">
            <Link aria-current="page" to="/">
              <p className="font-semibold text-2xl justEffect font-serif bg-gradient-to-b from-purple-400 via-purple-500 to-black bg-clip-text text-transparent border-0" style={{ "backgroundSize": "100% 100%", "backgroundPosition": "center top" }}>&lt; Abhishek Kumar /&gt;</p>
            </Link>
          </div>
        </div>
        <MenuList />
      </header>
    </nav>
  );
};

export default Navbar;