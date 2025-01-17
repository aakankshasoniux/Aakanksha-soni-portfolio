import Header from './components/Header'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Intro />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

