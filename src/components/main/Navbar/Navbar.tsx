import { useState } from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-100 dark:bg-gray-900 p-4 mb-4 mx-4">
      <div className="flex items-center justify-between w-full">
        {/* Navbar Brand */}
        <motion.div
          className="flex items-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            {"<NB/>"}
          </h1>
        </motion.div>

        {/* Desktop Navigation Menu */}
        <div className="hidden md:flex space-x-6">
          <div className="flex space-x-6">
            <a
              href="#home"
              className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu (without overlay) */}
      {isMenuOpen && (
        <motion.div
          className="flex flex-col items-center space-y-6 py-8 md:hidden border"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <a href="#home" onClick={() => setIsMenuOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>
            About
          </a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
