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
    <div className="bg-[url('/Images/bg.png')] bg-cover bg-no-repeat w-full h-full">
      <section className="px-5">
        <div className="hidden">
          <img src="/Images/3.png" alt="" />
          <img src="/Images/4.png" alt="" />
        </div>

        <div className="mt-20 pt-30 text-center text-white w-[80%] mx-auto">
          <h2 className="text-3xl  font-bold pb-5 ">
            COLLABORATIVE WORK SPACE FOR EVERY EACH MEETING FOR EASY ACCESS
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing. egestas viverra
            id aliquet. vulputate egestas sollicitudin.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 mt-20 gap-10 justify-between w-full text-center text-white">
          {/* card 1 */}
          <div className="group bg-red-500 border-red-500 transition duration-300 hover:translate-y-1 py-20 px-10 border rounded-3xl hover:shadow-white hover:shadow-lg flex flex-col items-center justify-center gap-5">
            <div className="w-20 rounded-lg  bg-pri flex justify-center items-center p-5 ">
              <img
                src="/Images/icon1.png"
                alt="icon1"
                className=" group-hover:scale-110 transition duration-300"
              />
            </div>
            <h3 className="text-2xl font-bold ">
              Focus only on Real activities
            </h3>
            <p className="font-extralight text-sm w-auto">
              Lorem ipsum dolor amet, cotetur adipiscing elit. Neue enim diam
              nare sagittis, aliquet cursus.
            </p>
          </div>
          {/* card 1 */}
          <div className="group bg-yellow-500 border-yellow-500 transition duration-300 hover:translate-y-1 py-20 px-10 border rounded-3xl hover:shadow-white hover:shadow-lg flex flex-col items-center justify-center gap-5">
            <div className="w-20 rounded-lg  bg-pri flex justify-center items-center p-5 ">
              <img
                src="/Images/icon2.png"
                alt="icon2"
                className=" group-hover:scale-110 transition duration-300"
              />
            </div>
            <h3 className="text-2xl font-bold ">
              Focus only on Real activities
            </h3>
            <p className="font-extralight text-sm w-auto">
              Lorem ipsum dolor amet, cotetur adipiscing elit. Neue enim diam
              nare sagittis, aliquet cursus.
            </p>
          </div>
          {/* card 1 */}
          <div className="group bg-blue-500 border-blue-500 transition duration-300 hover:translate-y-1 py-20 px-10 border rounded-3xl hover:shadow-white hover:shadow-lg flex flex-col items-center justify-center gap-5">
            <div className="w-20 rounded-lg  bg-pri flex justify-center items-center p-5 ">
              <img
                src="/Images/icon3.png"
                alt="icon1"
                className=" group-hover:scale-110 transition duration-300"
              />
            </div>
            <h3 className="text-2xl font-bold ">
              Focus only on Real activities
            </h3>
            <p className="font-extralight text-sm w-auto">
              Lorem ipsum dolor amet, cotetur adipiscing elit. Neue enim diam
              nare sagittis, aliquet cursus.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-20 text-center text-white">
        <div>
          <h2 className="text-3xl w-[80%] mx-auto font-extrabold ">
            We know Happy Schedule is tool because we use every day
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 mt-15">
          {tool.map((t) => (
            <div className="flex p-2 mt-2 gap-5 ">
              <h2 className="text-4xl text-[#FFBD2F] font-extrabold">
                {t.serial}
              </h2>
              <div className="text-left ">
                <h3 className="text-lg font-bold pb-3 ">
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
      </section>

      {/* WHY CHOOSE US */}
      <section className="mt-20 text-center text-white">
        <div>
          <h2 className="text-3xl w-[80%] mx-auto font-extrabold">
            We know Happy Schedule is tool because we use every day
          </h2>
        </div>
        <div className="grid grid-rows-1 gap-5 ">
          <div className="flex flex-col px-10 mt-10 gap-6">
            <div className="flex gap-5 rounded-2xl px-5 py-5 bg-[#0C5F79]">
              <div className=" bg-blue-500 p-3 flex items-center w-10 h-10 rounded-full ">
                <h2 className="font-medium">01</h2>
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
            <div className="flex gap-5 rounded-2xl px-5 py-5 bg-[#0C5F79]">
              <div className=" bg-yellow-500 p-3 flex items-center w-10 h-10 rounded-full ">
                <h2 className="font-medium">02</h2>
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
            <div className="flex gap-5 rounded-2xl px-5 py-5 bg-[#0C5F79]">
              <div className=" bg-red-500 p-3 flex items-center w-10 h-10 rounded-full ">
                <h2 className="font-medium">03</h2>
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
          </div>
          <div className="m-10 p-5 rounded-2xl bg-[#0c5f78] ">
            <img src="/Images/visitgraph.png" alt="" />
          </div>
        </div>
      </section>

      {/* TESTIMONIAL  */}
      <section className="mt-20 text-center text-white">
        <div>Our Customers Have Nice Things To Say About Us</div>
        <div>
          <img src="/Images/Group 572.png" alt="" />
          <div className="p-10">
            <img src="/Images/Vector2.png" alt="" />
            <p className="font-extralight text-white/60 ">
              ""Dealing with sickle cell has been a lifelong rollercoaster. The
              thought of my voice being heard in the world of medicine is really
              what motivated me to join this study. Not only to advocate for
              myself but” "
            </p>
            <h3 className="pt-5 pb-2 text-2xl">Jhony Bravo</h3>
            <p className="text-sm text-white/60 ">CEO, THEMEFISHER</p>
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
