"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import ToggleMenuItem from "./ToggleMenuItem";
import ListItem from "./ListItem";
import { components } from "./navbarHelpers";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-center m-4 ">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-2 flex items-center justify-center p-1 w-fit border border-primary/10 rounded-2xl bg-background/80 backdrop-blur-sm z-50 border-b"
      >
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Blogs</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <ToggleMenuItem />
          </NavigationMenuList>
        </NavigationMenu>
      </motion.div>
    </nav>
  );
};

export default Navbar;
