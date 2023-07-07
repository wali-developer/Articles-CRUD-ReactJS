"use client";

import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";

export default function PageFooter() {
  return (
    <section className="resContainer">
      <Footer container className="shadow-none px-3">
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <Link to="/">
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                Articles Task
              </span>
            </Link>
            <Footer.LinkGroup>
              <Link
                className="mx-auto mt-4 sm:mt-0 sm:mx-4"
                to="/favourite-articles"
              >
                Favourites
              </Link>
              <Link className="mx-4 md:block hidden" to="#">
                Privacy Policy
              </Link>
              <Link className="mx-4 md:block hidden" to="#">
                Contact
              </Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright by="Articles task by Kiswa" href="#" year={2023} />
        </div>
      </Footer>
    </section>
  );
}
