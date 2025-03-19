import Section from "../../Component/Section/Section";
import img1 from "../../assets/home/slide1.jpg";
import img2 from "../../assets/home/slide2.jpg";
import img3 from "../../assets/home/slide3.jpg";

const Chaff = () => {
  return (
    <div className="mt-10 container mx-auto">
      <Section
        heading={"---Should Try---"}
        subHeading={"CHEF RECOMMENDS"}
      ></Section>
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-13">
        <div className="card bg-[#F3F3F3] shadow-sm">
          {" "}
          <figure>
            <img
              className="w-full h-[350px]  bg-cover bg-repeat"
              src={img1}
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center space-y-2">
            <h2 className="text-center text-2xl font-semibold">
              Caeser Salad{" "}
            </h2>
            <p className="text-[18px] font-[500]">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <div className="card-actions justify-center">
              <button className="btn uppercase border-2 border-b-amber-500 rounded-lg hover:bg-[#1F2937] text-yellow-400">
                add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-[#F3F3F3] shadow-sm">
          {" "}
          <figure>
            <img
              className="w-full h-[350px] bg-cover bg-repeat"
              src={img2}
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center space-y-2">
            <h2 className="text-center text-2xl font-semibold">
              Caeser Salad{" "}
            </h2>
            <p className="text-[18px] font-[500]">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <div className="card-actions justify-center">
              <button className="btn uppercase border-2 border-b-amber-500 rounded-lg hover:bg-[#1F2937] text-yellow-400">
                add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-[#F3F3F3] shadow-sm">
          {" "}
          <figure>
            <img
              className="w-full h-[350px] bg-cover bg-repeat"
              src={img3}
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center space-y-2">
            <h2 className="text-center text-2xl font-semibold">
              Caeser Salad{" "}
            </h2>
            <p className="text-[18px] font-[500]">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <div className="card-actions justify-center">
              <button className="btn uppercase border-2 border-b-amber-500 rounded-lg hover:bg-[#1F2937] text-yellow-400">
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chaff;
