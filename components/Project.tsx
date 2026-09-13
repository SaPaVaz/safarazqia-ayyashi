import { projects } from "@/data/data"

export default function Project() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32" id="projects">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-indigo-400">Projects</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
          {projects.heading}
        </p>
        <figure className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          {projects.items.map((project, index) => (
          <div className={`group relative min-h-80 overflow-hidden rounded-xl ${
            index === 0
              ? "lg:row-span-2 rounded-l-4xl" 
              : index === 2 
              ? "lg:row-span-2 rounded-r-4xl"
              : ""
          }`} 
          key={project.title}>
            <img
                    alt=""
                    src={project.imageUrl}                    
                    className="absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-105"
                  />
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-t-4xl" />
          </div>
          ))}
        </figure>
      </div>
    </div>
  )
}
