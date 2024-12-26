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
    <footer className=" py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-lg font-semibold">Connect with Me</h2>
        <ul className="flex justify-center space-x-4 mt-4">
          {socialLinks.map((link) => (
            <li key={link.name}>
              <Button asChild variant="outline">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <span>{link.icon}</span>
                  <span>{link.name}</span>
                </a>
              </Button>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-gray-400">
          © {new Date().getFullYear()} Navodit Bharat. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
