const Section = ({ subHeading, heading }) => {
  return (
    <div className="text-center flex  flex-col items-center justify-center mt-5 ">
      <p className="text-[23px] text-[#D99904] italic ">{subHeading}</p>
      <h1 className="text-[35px] md:w-3/12 text-[#151515] mt-3  py-2 italic border-t-2 border-b-2 border-[#E8E8E8)]">
        {heading}
      </h1>
    </div>
  );
};

export default Section;
