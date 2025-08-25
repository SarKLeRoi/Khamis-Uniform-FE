/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
import Image from "next/image";
export default function Logo({ isSticky }) {
  return (
    <div className="center-logo">
      <Link href={"/"} className="flex gap-1">
        <Image
          src={isSticky ? "../images/logo.png" : "../images/logo.png"}
          alt="Khamis Uniform"
          className="custom-logo"
          width={100}
          height={100}
        />
      </Link>
    </div>
  );
}
