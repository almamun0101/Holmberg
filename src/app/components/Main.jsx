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

        <div className="grid grid-cols-2 mt-20 gap-5 justify-between w-full text-center text-white">
          <div className="bg-red-500 py-20 px-10 border rounded-3xl hover:shadow-2xl flex flex-col items-center justify-center gap-5">
            <div className="rounded-lg  bg-pri flex justify-center items-center p-5 ">
              <img src="/Images/icon1.png" alt="icon1" />
            </div>
            <h3 className="text-lg font-bold ">Focus only on Real activities</h3>
            <p>
              Lorem ipsum dolor amet, cotetur adipiscing elit. Neue enim diam
              nare sagittis, aliquet cursus.
            </p>
          </div>

            <div className="bg-yellow-500 py-20 px-10 border rounded-3xl hover:shadow-2xl flex flex-col items-center justify-center gap-5">
            <div className="rounded-lg  bg-pri flex justify-center items-center p-5 ">
             <img src="/Images/icon2.png" alt="icon2" />
            </div>
            <h3>Focus only on Real activities</h3>
            <p>
              Lorem ipsum dolor amet, cotetur adipiscing elit. Neue enim diam
              nare sagittis, aliquet cursus.
            </p>
          </div>

            <div className="bg-blue-500 py-20 px-10 border rounded-3xl hover:shadow-2xl flex flex-col items-center justify-center gap-5">
            <div className="rounded-lg  bg-pri flex justify-center items-center p-5 ">
          
              <img src="/Images/icon1.png" alt="icon1" />
            </div>
            <h3>Focus only on Real activities</h3>
            <p>
              Lorem ipsum dolor amet, cotetur adipiscing elit. Neue enim diam
              nare sagittis, aliquet cursus.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
