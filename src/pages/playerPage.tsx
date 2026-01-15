import Navbar from "../components/Navbar"
import playerImg from "../assets/players/virat-singh.jpeg"

const PlayerPage = () => {
  return (
    <div>
        <Navbar />

        <section className="py-20 space-y-16 text-center">
            <div className="space-y-4">
            <h1 className="text-4xl font-bold lg:text-6xl">VIRAT SINGH</h1>
            <h2 className="text-yellow-500 font-sans">Right Handed Batsman</h2>
            </div>

            <div className="px-8 font-sans gap-4 lg:flex">
                <div className="mb-5 lg:w-1/3"><img src={playerImg} alt="Player" className="w-full rounded-lg shadow-lg" /></div>
                <p className="text-left text-lg flex-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, harum eius iure aperiam eos culpa ullam labore consequatur et fugiat alias veritatis sunt odit asperiores veniam! Fugit laudantium provident repellat?
                Eum quos deserunt incidunt dolor nulla explicabo, odit praesentium facere reiciendis ipsa minus. Exercitationem, error recusandae? Corporis inventore assumenda minus. Dignissimos id iusto maxime. Soluta in dolore quae numquam ipsam?
                Optio id veritatis nostrum perspiciatis expedita facere, voluptatum nesciunt ducimus, consectetur aliquid voluptatem error. Nisi, nesciunt sunt ipsum veniam illo doloribus dignissimos quaerat non possimus explicabo unde inventore nihil similique.
                Necessitatibus velit inventore doloremque voluptate temporibus, debitis quae fuga fugiat, voluptatem expedita, beatae optio laudantium. Itaque quod deserunt omnis laudantium error, perspiciatis nostrum odit vitae voluptatibus provident aut, architecto ullam.
                Delectus nulla minima harum laudantium omnis numquam possimus a veniam atque natus aspernatur, voluptas hic! Adipisci, omnis? Delectus, id quos enim nostrum vero saepe dolore incidunt ipsam molestias inventore aliquam.</p>
            </div>


        </section>
    </div>
  )
}

export default PlayerPage
