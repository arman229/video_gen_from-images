

import { navbarname, navbarlogo } from "../utils/Navbar"
import Link from "next/link";
import { Services, Support, ServiceTypes, Contact, footer_description } from "../utils/footer"
import Image from "next/image";
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div id="footer" className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
        <div className="md:max-w-md lg:col-span-2">
          <div className="className=" inline-flex items-center>
            <Link href={"/"}>
              <img
                className="object-cover w-48 h-20 mr-4  "
                src={navbarlogo}
                alt="Person"
              />
            </Link>
          </div>
          <div className="mt-4 lg:max-w-sm">
            <p className="text text-gray-800"><span className="font-semibold text-xl">{navbarname}{' '}</span>{footer_description}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-3">
          <div>
            <p className="font-semibold tracking-wide text-gray-800">
              Services
            </p>
            <ul className="text-gray-600 mt-2  ">
              {Services.map((ser: ServiceTypes, index: number) => (
                <li key={index} className="my-4">
                  <Link href={ser.href} className="hover:underline">
                    {ser.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide text-gray-800">
              Support
            </p>
            <ul className="text-gray-600 mt-2  ">
              {Support.map((sup: ServiceTypes, index: number) => (
                <li key={index} className="mb-4">
                  <Link href={sup.href} className="hover:underline">
                    {sup.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide text-gray-800">
              Contact
            </p>
            <ul className="text-gray-600 mt-2  ">
              {Contact.map((ser: ServiceTypes, index: number) => (
                <li key={index} className="my-4">
                  <Link href={ser.href} className="hover:underline">
                    {ser.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <hr className="  border-gray-400 sm:mx-auto  " />
      <div className={"flex  justify-between gap-3 flex-wrap p-3  "}>
        <p>Copyright © {currentYear} All rights reserved.</p>
        <p>
          Developed by <span className={"font-bold"}>{navbarname}</span>
        </p>
      </div>
    </div>
  );
};