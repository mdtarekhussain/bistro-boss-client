import img1 from "../.././assets/home/chef-service.jpg";

const Bistro = () => {
  return (
    <div className="relative container mx-auto">
      <img
        src={img1}
        alt="Background"
        className="w-full h-full object-cover "
      />

      <div className="flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-[#FFF] z-10 rounded-lg px-23 py-10 flex flex-col justify-center items-center">
          <h1 className="text-3xl font-[600] italic text-[#151515]">
            Bistro Boss
          </h1>
          <p className="text-center mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bistro;
