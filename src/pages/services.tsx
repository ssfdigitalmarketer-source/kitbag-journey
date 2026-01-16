import Navbar from "../components/Navbar"
import managementImage from "../assets/management.jpg"
import Footer from "../components/Footer"

const Services = () => {
  return (
    <div className="">
      <Navbar />
      <section className="py-20 space-y-6">
        <h1 className="text-4xl text-center items-center text-yellow-500 mb-8">OUR SERVICES</h1>
        <div className="flex">
          <div className="h-[100vh]">
            <img src={managementImage} alt="Management" className="w-full h-full object-cover"/>
          </div>
        </div>
      </section>

      <Footer />

 
    </div>
  )
}

export default Services
