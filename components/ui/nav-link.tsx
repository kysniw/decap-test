import React from "react";
import Link from "next/link";

interface NavLinkProps {
  url: string;
  children: React.ReactNode
}

const NavLink = ({url, children}: NavLinkProps) => {
  return <Link href={url}>{children}</Link>;
};

export default NavLink;
