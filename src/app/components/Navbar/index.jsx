"use client"
import NavbarItem from "./NavbarItem";
import { BiHomeAlt2 } from 'react-icons/bi'
import { IoAppsOutline } from 'react-icons/io5'
import { BsCart } from 'react-icons/bs'

function Navbar() {

  const PAGES = [
    {
      href: "/",
      label: "Home",
      icon: BiHomeAlt2
    },
    {
      href: "/wizard",
      label: "Wizard",
      icon: IoAppsOutline
    },
    {
      href: "/cart",
      label: "Cart",
      icon: BsCart
    },
  ];

  return (
    <div className="navbar bg-base-200 rounded-lg mb-20">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">EFFICIENT COMPONENT SELECTION</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-x-3">
          {PAGES?.map((item) => (
            <NavbarItem key={item.href} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
