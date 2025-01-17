import { Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-white dark:bg-gray-800 shadow-sm mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/aakanksha-soni" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
            <Linkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="https://www.instagram.com/aakanksha.soni.ux" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
            <Instagram size={24} />
            <span className="sr-only">Instagram</span>
          </a>
        </div>
        <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
          © 2023 Aakanksha Soni. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

