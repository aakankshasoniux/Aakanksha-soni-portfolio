import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "E-commerce Redesign",
    description: "Revamped the user interface of an e-commerce platform, resulting in a 30% increase in conversion rates.",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Health App UX",
    description: "Designed a user-friendly health tracking app, improving user engagement by 45%.",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Travel Planner",
    description: "Created an intuitive travel planning application, streamlining the booking process and increasing user satisfaction.",
    image: "/placeholder.svg?height=200&width=300"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Image src={project.image || "/placeholder.svg"} alt={project.title} width={300} height={200} className="mb-4 rounded-lg" />
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

