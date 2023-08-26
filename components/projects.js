import ProjectCard from "./project-card";

const Projects = () => {
  return (
    <section className="self-stretch bg-aliceblue h-[551px] flex flex-col py-[50px] px-0 box-border items-center justify-start w-full top-[0] text-center text-21xl text-primary-800 font-heading-heading-1 lg:flex-1">
      <div className="self-stretch flex flex-col items-center justify-start gap-[54px] max-w-[95%px]">
        <div className="self-stretch flex flex-col py-0 px-[30px] box-border items-center justify-start max-w-[95%px]">
          <h1 className="m-0 self-stretch relative text-inherit leading-[48px] font-semibold font-inherit">
            Projects
          </h1>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[86px] text-left text-base text-gray-700">
          <ProjectCard
            icon="/icon.svg"
            project1="Project1"
            description1="description1"
          />
          <ProjectCard
            icon="/icon1.svg"
            project1="Project2"
            description1="description2"
            propWidth="312px"
          />
          <ProjectCard
            icon="/icon2.svg"
            project1="Project3"
            description1="description3"
            propWidth="unset"
          />
          <ProjectCard
            icon="/icon3.svg"
            project1="Project4"
            description1="description4"
            propWidth="312px"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
