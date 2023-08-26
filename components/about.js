import AboutCard from "./about-card";

const About = () => {
  return (
    <div className="self-stretch h-[722px] flex flex-col p-[50px] box-border items-center justify-start gap-[45px] w-full top-[0] text-center text-21xl text-primary-800 font-heading-heading-1 md:h-auto">
      <div className="self-stretch flex flex-col py-0 px-[30px] items-center justify-start md:self-stretch md:w-auto">
        <h1 className="m-0 self-stretch relative text-inherit leading-[48px] font-semibold font-inherit">
          About me
        </h1>
      </div>
      <div className="self-stretch flex-1 flex flex-row flex-wrap py-0 px-2.5 box-border items-start justify-center max-w-[95%px] text-left text-5xl text-white">
        <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[24px] max-w-[1300px]">
          <div className="self-stretch flex flex-row items-start justify-center gap-[26px] lg:flex-row md:flex-col">
            <AboutCard title="Career" description="Elementary school teacher" />
            <AboutCard
              title="Interesting"
              description="Full stack development."
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-center lg:flex-row md:flex-col">
            <a className="[text-decoration:none] flex-1 rounded-lg [background:linear-gradient(180deg,_rgba(59,_77,_129,_0.7),_rgba(59,_77,_129,_0))] h-[241px] flex flex-col p-2.5 box-border items-start justify-start gap-[10px] text-[inherit] md:flex-[unset] md:self-stretch">
              <div className="flex flex-col items-start justify-start">
                <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit">
                  Skills
                </h3>
              </div>
              <img
                className="max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/frame-2@2x.png"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
