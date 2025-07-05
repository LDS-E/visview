import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-secondary p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex mr-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/LogoT.png"
              alt="VisView Logo"
              width={150}
              height={50}
              objectFit="contain"
            />
          </Link>
        </div>
        <ul className="flex space-x-6 text-white">
          <li>
            <Link href="/" className="hover:text-accent">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-secondary transition">
              About
            </Link>
          </li>
          <li>
            <Link
              href="/newsletter"
              className="hover:text-secondary transition"
            >
              Newsletter
            </Link>
          </li>
          <li>
            <Link href="/posts" className="hover:text-secondary transition">
              All Posts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
