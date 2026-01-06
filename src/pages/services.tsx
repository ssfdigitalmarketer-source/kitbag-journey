import Navbar from "../components/Navbar"
import managementImage from "../assets/management.jpg"

const Services = () => {
  return (
    <div className="">
      <Navbar />
      <section className=" px-5 py-20 space-y-6">
        <h1 className="text-4xl text-center text-yellow-500 mb-8">OUR SERVICES</h1>
        <div>

          <div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row ">
            <div className="lg:w-1/2">
              <img src={managementImage} className="grayscale " alt="" />
            </div>
            <div className="lg:w-1/2 space-y-6 lg:ml-10">
              <h1 className="text-yellow-500 text-center lg:text-left text-2xl">PLAYER MANAGEMENT</h1>
              <p className="font-sans text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam ullam eius quaerat magni dolorem ea. Aspernatur ad voluptas, recusandae ducimus perferendis magni ex tempore a dignissimos aut reprehenderit neque rerum.
                Facere doloribus maiores, expedita voluptatem veritatis quasi natus praesentium fuga in ex aliquid. Nesciunt illum commodi beatae a perspiciatis praesentium pariatur itaque tempore, expedita ipsam quasi, ea voluptatem, veniam eos!</p>
            </div>
          </div>

          <div className="flex flex-col-reverse space-y-6 lg:space-y-0 lg:flex-row ">
           
            <div className="lg:w-1/2 space-y-6 lg:mr-10">
              <h1 className="text-yellow-500 text-center lg:text-left text-2xl">PLAYER MANAGEMENT</h1>
              <p className="font-sans text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam ullam eius quaerat magni dolorem ea. Aspernatur ad voluptas, recusandae ducimus perferendis magni ex tempore a dignissimos aut reprehenderit neque rerum.
                Facere doloribus maiores, expedita voluptatem veritatis quasi natus praesentium fuga in ex aliquid. Nesciunt illum commodi beatae a perspiciatis praesentium pariatur itaque tempore, expedita ipsam quasi, ea voluptatem, veniam eos!</p>
            </div>
             <div className="lg:w-1/2">
              <img src={managementImage} className="grayscale " alt="" />
            </div>
          </div>

           <div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row ">
            <div className="lg:w-1/2">
              <img src={managementImage} className="grayscale " alt="" />
            </div>
            <div className="lg:w-1/2 space-y-6 lg:ml-10">
              <h1 className="text-yellow-500 text-center lg:text-left text-2xl">PLAYER MANAGEMENT</h1>
              <p className="font-sans text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam ullam eius quaerat magni dolorem ea. Aspernatur ad voluptas, recusandae ducimus perferendis magni ex tempore a dignissimos aut reprehenderit neque rerum.
                Facere doloribus maiores, expedita voluptatem veritatis quasi natus praesentium fuga in ex aliquid. Nesciunt illum commodi beatae a perspiciatis praesentium pariatur itaque tempore, expedita ipsam quasi, ea voluptatem, veniam eos!</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Services
