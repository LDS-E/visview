import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-secondary py-2 shadow-md">
      <div className="container mx-auto flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/LogoT.png"
            alt="VisView Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Links */}
        <ul className="flex space-x-6 text-white text-base font-medium items-center">
          <li>
            <Link
              href="/"
              className="transition duration-300 hover:text-accent hover:underline underline-offset-4"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="transition duration-300 hover:text-accent hover:underline underline-offset-4"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/newsletter"
              className="transition duration-300 hover:text-accent hover:underline underline-offset-4"
            >
              Newsletter
            </Link>
          </li>
          <li>
            <Link
              href="/posts"
              className="transition duration-300 hover:text-accent hover:underline underline-offset-4"
            >
              All Posts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
