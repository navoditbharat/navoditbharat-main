import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          Built with 💖 by{" "}
          <a
            href="https://github.com/navoditbharat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Navodit Bharat
          </a>
        </p>
        <div className="mt-4 space-x-4">
          <a
            href="https://peerlist.io/navoditbharat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Peerlist
          </a>
          <a
            href="https://www.linkedin.com/in/navoditbharat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://instagram.com/navoditbharat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://github.com/navoditbharat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
