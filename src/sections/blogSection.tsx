import BlogCard from "../components/BlogCard"

const blogSection = () => {
  return (
          <section className="px-5 mt-6 space-y-6 py-20 ">
        <h1 className="text-yellow-500 text-4xl text-center">LATEST BLOGS</h1>
        <div className="justify-evenly lg:flex">
          <BlogCard image={playerImg} description="Virat Singh gets selected in IPL" date="2024-05-15" />
          <BlogCard image={playerImg2} description=" simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the" date="2024-05-10" />
          <BlogCard image={playerImg2} description=" simply dummy text of the printinpsum has been the industry's standard dummy text ever" date="2024-05-10" />

        </div>
      </section>
  )
}

export default blogSection
