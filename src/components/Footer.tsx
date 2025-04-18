import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary py-3 sm:py-4 text-center">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-shrink-0 mr-4">
          <Link href="/" className="inline-block">
            <Image
              src="/images/LogoT.png"
              alt="VisView Logo"
              width={100}
              height={33}
              objectFit="contain"
            />
          </Link>
        </div>
        <p className="text-white text-sm">
          © 2025 VisView. All rights reserveddd.
        </p>
      </div>
    </footer>
  );
}
