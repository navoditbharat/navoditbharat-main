import React from "react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { name: "Peerlist", url: "https://peerlist.io/navoditbharat", icon: "🌐" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/navoditbharat",
    icon: "🔗",
  },
  { name: "Instagram", url: "https://instagram.com/navoditbharat", icon: "📸" },
  { name: "GitHub", url: "https://github.com/navoditbharat", icon: "🐙" },
];

export default function Footer() {
  return (
    <footer className="py-8">
      <div className="container mx-auto text-center px-4">
        <p className="text-sm">
          Developed with 💖 by{" "}
          <a
            href="https://github.com/navoditbharat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Navodit Bharat
          </a>
        </p>
        <ul className="flex flex-wrap justify-center gap-4 mt-4">
          {socialLinks.map((link) => (
            <li key={link.name}>
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2"
                >
                  <span>{link.icon}</span>
                  <span>{link.name}</span>
                </a>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
