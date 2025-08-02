import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary py-4 text-white relative">
      <div className="container mx-auto px-4 flex items-center relative">
        {/* Logo alinhado à esquerda */}
        <div className="flex-shrink-0">
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

        {/* Texto centralizado na tela */}
        <p className="absolute left-1/2 transform -translate-x-1/2 text-sm">
          © 2025 VisView. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
