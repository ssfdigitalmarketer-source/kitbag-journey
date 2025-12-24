const Footer = () => {
  return (
    <footer className="p-10 mt-32">
        <div className="border-y-[0.5px] py-20 border-yellow-500 flex flex-col gap-10 lg:justify-around lg:flex-row lg:gap-10">

          <div className="lg:w-[20%] space-y-4">
            <h2 className="text-yellow-500 text-2xl">ABOUT US</h2>
            <p className="text-lg font-sans">
              Kitbag Journey is an athlete management company dedicated to nurturing
              and promoting sports talent. Our mission is to provide athletes with the
              guidance, resources, and opportunities they need to excel both on and
              off the field.
            </p>
          </div>

          <div className="lg:w-[20%] space-y-4">
            <h2 className="text-yellow-500 text-2xl">CONTACT</h2>
            <p className="text-lg font-sans">
              kitbag@email.com <br />
              +91 9876543210
            </p>
          </div>

          <div className="lg:w-[20%] space-y-4">
            <h2 className="text-yellow-500 text-2xl">LINKS</h2>
            <div className="text-lg font-sans space-y-2">
              <div>HOME</div>
              <div>PAGES</div>
              <div>ABOUT US</div>
              <div>CONTACT</div>
            </div>
          </div>

        </div>
      </footer>
  )
}

export default Footer
