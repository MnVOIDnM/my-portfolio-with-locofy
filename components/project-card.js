import { useMemo } from "react";

const ProjectCard = ({ icon, project1, description1, propWidth }) => {
  const project1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className="rounded bg-white shadow-[0px_24px_68px_rgba(59,_77,_129,_0.08)] flex flex-col p-[22px] box-border items-start justify-start min-w-[300px] max-w-[340px] text-left text-base text-gray-700 font-heading-heading-1"
      style={project1Style}
    >
      <div className="flex flex-col items-start justify-start gap-[24px]">
        <img
          className="relative w-[78px] h-[78px] overflow-hidden shrink-0"
          alt=""
          src={icon}
        />
        <div className="flex flex-col items-start justify-start gap-[24px]">
          <h3 className="m-0 relative text-5xl leading-[32px] font-semibold font-inherit text-center">
            {project1}
          </h3>
          <div className="relative leading-[24px] text-gray-400 flex items-end w-[268px]">
            {description1}
          </div>
          <div className="relative leading-[24px] text-primary-500">
            View details
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
