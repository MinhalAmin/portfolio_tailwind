// Header.tsx
import header from "@/components/ui/Header";
import { Menu } from "lucide-react";
import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

export default function Header() {
  return (
    <header
      className="flex justify-between py-4 px-4 bg-teal-950 text-white min-w-full
       md:max-w-screen-2xl"
    >
      {/* Logo */}
      <li className="py-3 pl-4 text-white text-2xl font-serif md:pl-20 font-extrabold">
            <Link href="/">Portfolio</Link>
          </li>
      {/* Navigation Buttons */}
      <nav className="font-sans text-base pr-11 hover:text-teal-200 transition-colors duration-300">
        <ul
          className=" space-x-6 py-3 pr-12 font-medium hidden md:flex lg-flex xl-flex 2xl-flex
          "
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
          <Link href="/about">About</Link>
          </li>
          <li>
          <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <ul className="text-black">
            <li className=" flex flex-col content-between space-y-4 py-72 text-center text-3xl font-extrabold font-sans">
              <Link href="/">HOME</Link>
              <Link href="/about">ABOUT</Link>
              <Link href="/services">SERVICES</Link>
              <Link href="/contact">CONTACT</Link>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </header>
  );
}
