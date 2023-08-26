import Head from "next/head";
import { useCallback } from "react";
import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/contact";

const LandingPage = () => {
  const onHOMETextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='hOMEText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onABOUTTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='aBOUTText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onPROJECTSTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='pROJECTSText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onCONTACTTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='cONTACTText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <Head>
        <title>MiYaCode</title>
        <meta name="description" content="My personal portfolio website." />
      </Head>
      <div className="relative bg-white w-full flex flex-col items-center justify-start">
        <section className="self-stretch bg-darkslategray flex flex-row py-[22px] px-20 box-border items-center justify-center sticky w-full top-[0] z-[10] lg:pl-10 lg:pr-10 lg:box-border md:items-center md:justify-center md:pl-6 md:pr-6 md:box-border">
          <header className="flex-1 flex flex-row items-center justify-between text-center text-sm text-white font-heading-heading-1">
            <div className="flex flex-row items-start justify-start gap-[30px]">
              <div
                className="relative leading-[22px] cursor-pointer"
                data-scroll-to="hOMEText"
                onClick={onHOMETextClick}
              >
                HOME
              </div>
              <div
                className="relative leading-[22px] cursor-pointer"
                data-scroll-to="aBOUTText"
                onClick={onABOUTTextClick}
              >
                ABOUT
              </div>
              <div
                className="relative leading-[22px] cursor-pointer"
                data-scroll-to="pROJECTSText"
                onClick={onPROJECTSTextClick}
              >
                PROJECTS
              </div>
              <div
                className="relative leading-[22px] cursor-pointer"
                data-scroll-to="cONTACTText"
                onClick={onCONTACTTextClick}
              >
                CONTACT
              </div>
            </div>
          </header>
        </section>
        <section className="self-stretch flex flex-col py-[120px] px-[30px] box-border items-center justify-start bg-[url('/hero-section@3x.png')] bg-cover bg-no-repeat bg-[top] w-full top-[0] text-center text-33xl text-white font-header-heading-4">
          <div className="self-stretch flex flex-col items-center justify-center max-w-[95%px]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[24px] md:max-w-full">
              <h1 className="m-0 self-stretch relative text-inherit leading-[72px] font-semibold font-inherit">
                Bridging Dreams and Reality with Code.
              </h1>
              <div className="self-stretch relative text-xl leading-[28px] font-heading-heading-1 text-primary-50">
                Turning dreams into reality, using code to seamlessly bridge our
                aspirations with everyday experiences.
              </div>
            </div>
          </div>
        </section>
        <About />
        <Projects />
        <Contact />
        <section className="self-stretch bg-darkslategray flex flex-row py-2.5 px-0 box-border items-center justify-center w-full top-[0] text-center text-5xl text-white font-header-heading-4 md:self-stretch md:w-auto md:flex-row md:gap-[0px] sm:flex-col">
          <div className="flex-1 relative leading-[32px] font-semibold sm:flex-[unset] sm:self-stretch">
            ©️ 2023 MiYaCode
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage;
