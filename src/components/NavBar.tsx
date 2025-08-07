"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-secondary py-2 shadow-md">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link href="/">
          <Image
            src="/images/LogoT.png"
            alt="VisView Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </Link>

        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul
          className={`md:flex md:space-x-6 md:items-center text-white text-base font-medium transition-all duration-300 
          ${
            isOpen
              ? "block absolute top-16 left-0 w-full bg-secondary px-4 py-4 space-y-4 z-50"
              : "hidden md:flex"
          }`}
        >
          <li>
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-accent"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="hover:text-accent"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/newsletter"
              onClick={() => setIsOpen(false)}
              className="hover:text-accent"
            >
              Newsletter
            </Link>
          </li>
          <li>
            <Link
              href="/posts"
              onClick={() => setIsOpen(false)}
              className="hover:text-accent"
            >
              All Posts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
