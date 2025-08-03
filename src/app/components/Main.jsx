import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

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
    <div className="bg-[url('/Images/bg.png')] bg-cover bg-no-repeat w-full min-h-screen">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="pt-40 text-center text-white">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold max-w-4xl mx-auto pb-5">
            COLLABORATIVE WORK SPACE FOR EVERY EACH MEETING FOR EASY ACCESS
          </h2>
          <p className="max-w-xl mx-auto text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing. egestas viverra
            id aliquet. vulputate egestas sollicitudin.
          </p>
        </section>

        {/* Feature Cards */}
        <section className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-white">
          {[
            { color: "red-500", icon: "icon1.png" },
            { color: "yellow-500", icon: "icon2.png" },
            { color: "blue-500", icon: "icon3.png" },
          ].map((card, idx) => (
            <div
              key={idx}
              className={`group bg-${card.color} border-${card.color} transition hover:translate-y-1 py-14 px-8 border rounded-3xl hover:shadow-white hover:shadow-lg flex flex-col items-center gap-5`}
            >
              <div className="w-16 h-16 rounded-lg bg-pri flex justify-center items-center p-3">
                <img
                  src={`/Images/${card.icon}`}
                  alt={card.icon}
                  className="group-hover:scale-110 transition"
                />
              </div>
              <h3 className="text-xl font-bold text-center">
                Focus only on Real activities
              </h3>
              <p className="text-xs leading-relaxed text-center max-w-xs">
                Lorem ipsum dolor amet, cotetur adipiscing elit. Neue enim diam
                nare sagittis, aliquet cursus.
              </p>
            </div>
          ))}
        </section>

        {/* Tool Section */}
        <section className="mt-20 text-center text-white">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold max-w-3xl mx-auto">
            We know Happy Schedule is tool because we use it every day
          </h2>
          <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2">
            {tool.map((t, index) => (
              <div key={index} className="flex gap-4 p-3 max-w-md mx-auto">
                <h2 className="text-4xl text-[#FFBD2F] font-extrabold min-w-[45px]">
                  {t.serial}
                </h2>
                <div className="text-left">
                  <h3 className="text-base sm:text-lg font-bold pb-1">
                    {t.title.toUpperCase()}
                  </h3>
                  <p className="text-sm">{t.des}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mt-20 text-center text-white">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold max-w-3xl mx-auto">
            Why Choose Happy Schedule — Tools Built by Daily Users
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-6">
              {[1, 2, 3].map((num) => (
                <div
                  key={num}
                  className="flex items-start gap-4 px-4 py-5 bg-[#0C5F79] rounded-2xl max-w-md mx-auto"
                >
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full ${
                      num === 1
                        ? "bg-blue-500"
                        : num === 2
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                  >
                    0{num}
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-sm sm:text-base pb-2">
                      MANAGE YOUR WORKS EFFORTLESSLY
                    </h3>
                    <p className="text-xs sm:text-sm">
                      Lorem ipsum dolor amet, cotetur adipiscing elit. Neue enim
                      diam nare sagittis, aliquet cursus.
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <img
                src="/Images/visitgraph.png"
                alt="Graph"
                className="max-w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="mt-20 text-center text-white">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5">
            Our Customers Have Nice Things To Say About Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img
              src="/Images/Group 572.png"
              alt="Testimonial Group"
              className="mx-auto w-full max-w-xs sm:max-w-md"
            />
            <div className="px-6 max-w-md mx-auto">
              <img src="/Images/Vector2.png" alt="Quote" className="mx-auto" />
              <p className="mt-5 text-white/60 text-sm sm:text-base">
                "Dealing with sickle cell has been a lifelong rollercoaster. The
                thought of my voice being heard in the world of medicine is
                really what motivated me to join this study. Not only to
                advocate for myself but..."
              </p>
              <h3 className="pt-5 pb-1 text-xl sm:text-2xl">Jhony Bravo</h3>
              <p className="text-white/60 text-xs sm:text-sm">
                CEO, THEMEFISHER
              </p>
              <div className="flex justify-center gap-2 pt-4">
                <span className="w-5 h-5 bg-yellow-500 rounded-full"></span>
                <span className="w-5 h-5 bg-[#0c5f78] rounded-full"></span>
                <span className="w-5 h-5 bg-[#0c5f78] rounded-full"></span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 text-center text-white">
          <div className="flex flex-col lg:flex-row items-center justify-between bg-[#0c5f78] rounded-[2rem] p-8 gap-8 max-w-4xl mx-auto">
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold pb-4">
                Helping teams in the world with focus
              </h2>
              <button className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-2xl text-black font-semibold transition w-full sm:w-auto">
                Download The Theme
              </button>
            </div>
            <p className="flex-1 text-white/60 text-sm sm:text-base text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              egestas Werat viverra id et aliquet. vulputate egestas
              sollicitudin.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#0c5f78] text-white mt-20 px-6 py-10 text-center">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            <div>
              <img src="/Images/logo2.png" alt="Logo" className="pb-4" />
              <p className="text-xs sm:text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Socials</h3>
              <p className="text-xs sm:text-sm">themefisher@gmail.com</p>
              <div className="flex gap-3 mt-2 text-lg">
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <FaLinkedin />
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-2">Quick Links</h3>
              <ul className="space-y-1 text-xs sm:text-sm">
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
            <div>
              <h3 className="font-bold mb-2">Location & Contact</h3>
              <p className="text-xs sm:text-sm">
                2118 Thornridge Cir. Syracuse, Connecticut 35624
              </p>
              <p className="text-xs sm:text-sm mt-1">(704) 555-0127</p>
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
