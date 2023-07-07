import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { FavoriteContext } from "../../context/favouriteContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function PageNavbar() {
  const { favorites } = useContext(FavoriteContext);
  return (
    <section className="sticky top-0 bg-white h-[70px] shadow-md pt-1">
      <div className="resContainer">
        <Navbar fluid rounded className="">
          <Link to="/">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Articles Task
            </span>
          </Link>
          <div className="flex md:order-2">
            <div className="hidden sm:block">
              <Dropdown
                inline
                label={
                  <Avatar
                    alt="User settings"
                    img="https://wonder-day.com/wp-content/uploads/2023/03/wonder-day-brunette-face-avatar-18.jpg"
                    rounded
                  />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">Kiswa</span>
                  <span className="block truncate text-sm font-medium">
                    kiswa@gmail.com
                  </span>
                </Dropdown.Header>
                <Dropdown.Divider />
                <Dropdown.Item>Sign out</Dropdown.Item>
              </Dropdown>
            </div>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse className="sm:shadow-none shadow-md px-3 py-3 sm:py-0 sm:px-0">
            <Link to="/" className="mb-2 sm:mb-0">
              <p>Home</p>
            </Link>
            <div className="relative">
              <Link to="/favourite-articles">Favourites</Link>
              {favorites?.length > 0 && (
                <span className="w-[15px] h-[15px] absolute -top-1 -right-3 bg-[#155E75] rounded-full text-white flex justify-center items-center text-[10px]">
                  {favorites?.length}
                </span>
              )}
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </section>
  );
}
