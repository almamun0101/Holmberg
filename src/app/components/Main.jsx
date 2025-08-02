const tool = [
  {
    serial: "01",
    title: "Manage your works effortlessly",
    des: "Lorem ipsum dolor amet, cotetur adipiscing elit. Neue enim diam nare sagiis,  aliquet cursus ",
  },
  {
    serial: "02",
    title: "Manage your works effortlessly",
    des: "Lorem ipsum dolor amet, cotetur adipiscing elit. Neue enim diam nare sagiis,  aliquet cursus ",
  },
  {
    serial: "03",
    title: "Manage your works effortlessly",
    des: "Lorem ipsum dolor amet, cotetur adipiscing elit. Neue enim diam nare sagiis,  aliquet cursus ",
  },
  {
    serial: "04",
    title: "Manage your works effortlessly",
    des: "Lorem ipsum dolor amet, cotetur adipiscing elit. Neue enim diam nare sagiis,  aliquet cursus ",
  },
  {
    serial: "05",
    title: "Manage your works effortlessly",
    des: "Lorem ipsum dolor amet, cotetur adipiscing elit. Neue enim diam nare sagiis,  aliquet cursus ",
  },
  {
    serial: "06",
    title: "Manage your works effortlessly",
    des: "Lorem ipsum dolor amet, cotetur adipiscing elit. Neue enim diam nare sagiis,  aliquet cursus ",
  },
];

const Main = () => {
  return (
    <div className="bg-[url('/Images/bg.png')] bg-cover bg-no-repeat w-full h-full ">
      <div className="max-w-[1200px] mx-auto">
        {/* Hero Section */}
        <section className="px-5">
          <div className="hidden">
            <img src="/Images/3.png" alt="" />
            <img src="/Images/4.png" alt="" />
          </div>

          <div className="mt-20 pt-50 text-center text-white max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold pb-5">
              COLLABORATIVE WORK SPACE FOR EVERY EACH MEETING FOR EASY ACCESS
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing. egestas
              viverra id aliquet. vulputate egestas sollicitudin.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-20 gap-10 w-full text-center text-white">
            {/* Card 1 */}
            <div className="group bg-red-500 border-red-500 transition duration-300 hover:translate-y-1 py-20 px-10 border rounded-3xl hover:shadow-white hover:shadow-lg flex flex-col items-center justify-center gap-5">
              <div className="w-20 rounded-lg bg-pri flex justify-center items-center p-5">
                <img
                  src="/Images/icon1.png"
                  alt="icon1"
                  className="group-hover:scale-110 transition duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold">
                Focus only on Real activities
              </h3>
              <p className="font-extralight text-sm">
                Lorem ipsum dolor amet, cotetur adipiscing elit. Neue enim diam
                nare sagittis, aliquet cursus.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-yellow-500 border-yellow-500 transition duration-300 hover:translate-y-1 py-20 px-10 border rounded-3xl hover:shadow-white hover:shadow-lg flex flex-col items-center justify-center gap-5">
              <div className="w-20 rounded-lg bg-pri flex justify-center items-center p-5">
                <img
                  src="/Images/icon2.png"
                  alt="icon2"
                  className="group-hover:scale-110 transition duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold">
                Focus only on Real activities
              </h3>
              <p className="font-extralight text-sm">
                Lorem ipsum dolor amet, cotetur adipiscing elit. Neue enim diam
                nare sagittis, aliquet cursus.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-blue-500 border-blue-500 transition duration-300 hover:translate-y-1 py-20 px-10 border rounded-3xl hover:shadow-white hover:shadow-lg flex flex-col items-center justify-center gap-5">
              <div className="w-20 rounded-lg bg-pri flex justify-center items-center p-5">
                <img
                  src="/Images/icon3.png"
                  alt="icon3"
                  className="group-hover:scale-110 transition duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold">
                Focus only on Real activities
              </h3>
              <p className="font-extralight text-sm">
                Lorem ipsum dolor amet, cotetur adipiscing elit. Neue enim diam
                nare sagittis, aliquet cursus.
              </p>
            </div>
          </div>
        </section>

        {/* Tool Section */}
        <section className="mt-20 text-center text-white px-5">
          <h2 className="text-3xl max-w-3xl mx-auto font-extrabold">
            We know Happy Schedule is tool because we use it every day
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10">
            {tool.map((t, index) => (
              <div key={index} className="flex gap-5 p-2">
                <h2 className="text-4xl text-[#FFBD2F] font-extrabold">
                  {t.serial}
                </h2>
                <div className="text-left">
                  <h3 className="text-lg font-bold pb-3">
                    {t.title.toUpperCase()}
                  </h3>
                  <p>{t.des}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mt-20 text-center text-white px-5">
          <h2 className="text-3xl max-w-3xl mx-auto font-extrabold">
            Why Choose Happy Schedule — Tools Built by Daily Users
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 w-full">
            <div className="flex flex-col gap-5 mt-10 ">
              {[1, 2, 3].map((num) => (
                <div
                  key={num}
                  className="flex gap-5 rounded-2xl px-5 py-5 bg-[#0C5F79] items-start max-w-3xl mx-auto"
                >
                  <div
                    className={`p-3 flex items-center justify-center w-10 h-10 rounded-full ${
                      num === 1
                        ? "bg-blue-500"
                        : num === 2
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                  >
                    <h2 className="font-medium">0{num}</h2>
                  </div>
                  <div className="text-left">
                    <h3 className="text-base pb-3 font-bold">
                      MANAGE YOUR WORKS EFFORTLESSLY
                    </h3>
                    <p>
                      Lorem ipsum dolor amet, cotetur adipiscing elit. Neue enim
                      diam nare sagittis, aliquet cursus.
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="m-10 p-5 rounded-2xl bg-[#0c5f78] max-w-4xl mx-auto">
              <img
                src="/Images/visitgraph.png"
                alt="Graph"
                className="mx-auto"
              />
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="mt-20 text-center text-white px-5">
          <h2 className="text-3xl font-bold mb-5">
            Our Customers Have Nice Things To Say About Us
          </h2>
          <img
            src="/Images/Group 572.png"
            alt="Testimonial Group"
            className="mx-auto"
          />
          <div className="p-10 max-w-3xl mx-auto">
            <img src="/Images/Vector2.png" alt="Quote" className="mx-auto" />
            <p className="font-extralight text-white/60 mt-5">
              "Dealing with sickle cell has been a lifelong rollercoaster. The
              thought of my voice being heard in the world of medicine is really
              what motivated me to join this study. Not only to advocate for
              myself but..."
            </p>
            <h3 className="pt-5 pb-2 text-2xl">Jhony Bravo</h3>
            <p className="text-sm text-white/60">CEO, THEMEFISHER</p>
            <div className="flex justify-center items-center pt-5 gap-2">
              <div className="w-5 h-5 rounded-full bg-yellow-500"></div>
              <div className="w-5 h-5 rounded-full bg-[#0c5f78]"></div>
              <div className="w-5 h-5 rounded-full bg-[#0c5f78]"></div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 text-center text-white px-5">
          <div className="flex flex-col lg:flex-row items-center justify-between p-10 bg-[#0c5f78] rounded-[2rem] gap-10 max-w-6xl mx-auto">
            <div className="flex-1">
              <h2 className="text-3xl font-bold pb-5">
                Helping teams in the world with focus
              </h2>
              <button className="bg-yellow-500 hover:bg-yellow-600 px-5 py-2 rounded-2xl text-black font-semibold transition">
                Download The Theme
              </button>
            </div>
            <div className="flex-1 text-white/60 text-left">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                egestas Werat viverra id et aliquet. vulputate egestas
                sollicitudin.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[##0c5f78] text-white mt-20 px-5 py-10 text-center">
          <img className="hidden" src="/Images/8.png" alt="" />

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
            {/* Logo & Description */}
            <div className="p-2">
              <img className="pb-5" src="/Images/logo2.png" alt="Logo" />
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* Socials */}
            <div className="p-2">
              <h3 className="font-bold mb-2">Socials</h3>
              <p className="text-sm">themefisher@gmail.com</p>
              <div className="flex gap-4 mt-3 text-xl">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-skype"></i>
              </div>
            </div>

            {/* Quick Links */}
            <div className="p-2">
              <h3 className="font-bold mb-2">Quick Links</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Category</a>
                </li>
                <li>
                  <a href="#">Testimonial</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="p-2">
              <h3 className="font-bold mb-2">Location & Contact</h3>
              <p className="text-sm">
                2118 Thornridge Cir. Syracuse, Connecticut 35624
              </p>
              <p className="text-sm mt-1">(704) 555-0127</p>
            </div>
          </div>

          <hr className="my-8 border-white/20" />

          <p className="text-xs text-white/50">
            Designed By Themefisher, Developed by Gethugothemes
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Main;
