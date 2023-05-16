"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  return (
    <div className="nav">
      <Link href="/" className="navLogo">
        <Image
          width={42}
          height={42}
          src="/images/logo.png"
          alt="Agromir Logo"
        />
        <h3>Agromir</h3>
      </Link>
      <ul className="navList">
        <li className="navList__item">
          <Link href="/" className={pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li className="navList__item">
          <Link
            href="/catalogue"
            className={pathname === "/catalogue" ? "active" : ""}
          >
            Catalogue
          </Link>
        </li>
        <li className="navList__item">
          <Link href="/">Payment</Link>
        </li>
        <li className="navList__item">
          <Link href="/">Delivery</Link>
        </li>
        <li className="navList__item">
          <Link href="/">Installation</Link>
        </li>
        <li className="navList__item">
          <Link href="/">Contacts</Link>
        </li>
        <li className="navList__item">
          <Link href="/">About</Link>
        </li>
      </ul>
      <div className="navCart">
        <Image
          width={24}
          height={24}
          src="/images/searchIcon.svg"
          alt="Search"
        />
        <Image width={24} height={24} src="/images/cartIcon.svg" alt="Cart" />
      </div>
    </div>
  );
};

export default Nav;
