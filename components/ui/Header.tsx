// Header.tsx

import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center bg-teal-950 text-white 
    max-w-screen-2xl mx-auto px-20 py-6">
      {/* Logo */}
      <div className="text-2xl font-serif font-extrabold pl-14 pt-10" style={{ marginRight: "auto" }}>
        <h1>Portfolio</h1>
      </div>

      {/* Navigation */}
      <nav className="pr-11 hover:text-teal-200 transition-colors duration-300">
        <ul className="space-x-10  md:flex md:mr-12 text-sm font-bold
         ">
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
    </header>
  );
}




