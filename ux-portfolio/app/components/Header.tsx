import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white">
          Aakanksha Soni
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">About</Link></li>
          <li><Link href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Projects</Link></li>
          <li><Link href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

