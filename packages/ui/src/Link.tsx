import { Menu } from "@headlessui/react";
import * as React from "react";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
  file?: File;
}

console.log("Menu", Menu);

export const Link = (props: LinkProps) => {
  const { children, href, ...rest } = props;

  if (rest.target === "_blank") {
    rest.rel = "noopener noreferrer";
  }

  return (
    <>
      <Menu>
        <Menu.Button>Button</Menu.Button>
      </Menu>
      <a href={href} {...rest}>
        {children}
      </a>
    </>
  );
};
