const AboutCard = ({ title, description }) => {
  return (
    <a className="[text-decoration:none] flex-1 rounded-lg [background:linear-gradient(180deg,_rgba(59,_77,_129,_0.7),_rgba(59,_77,_129,_0))] h-[241px] flex flex-row items-start justify-start relative text-left text-5xl text-white font-heading-heading-1 md:flex-[unset] md:self-stretch">
      <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
        <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit">
          {title}
        </h3>
        <div className="relative text-base leading-[24px] text-center">
          {description}
        </div>
      </div>
    </a>
  );
};

export default AboutCard;
