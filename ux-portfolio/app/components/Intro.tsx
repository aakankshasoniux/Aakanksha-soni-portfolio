import { Button } from "@/components/ui/button"

export default function Intro() {
  return (
    <section id="about" className="py-16 text-center">
      <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">Aakanksha Soni</h1>
      <h2 className="text-2xl mb-6 text-gray-600 dark:text-gray-300">UX Designer</h2>
      <p className="max-w-2xl mx-auto mb-8 text-gray-600 dark:text-gray-300">
        Hello! I'm Aakanksha, a passionate UX designer with a keen eye for creating intuitive and engaging user experiences. 
        With a background in psychology and design, I strive to create digital products that not only look great but also 
        solve real user problems.
      </p>
      <Button>Download Resume</Button>
    </section>
  )
}

