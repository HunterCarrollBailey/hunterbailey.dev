import Card from "./Card";
function ProjectsHome() {
  return (
    <section className="flex flex-col lg:flex-row gap-3 bg-projects bg-cover bg-no-repeat min-h-[45dvh]">
      <div className="w-full min-h-[45dvh] bg-black/30 p-5 text-slate-100">
        <h1 className="text-3xl text-center font-bold">Some of My Projects</h1>
        <div className="flex flex-col lg:flex-row gap-5 mt-[3%] w-full justify-center content-center *:mx-auto lg:*:mx-0">
          <Card
            title="un-Traditional Magick"
            description="My first client in web development, they needed assistance in re-desiging their web presence after significant re-branding.
            They were the initial adopters of Acolyte, and were a great help in developing it into the platform it is today."
            link="https://un-traditionalmagick.com"
          />
          <Card
            title="Enchanted Rose Innovations"
            description="Enchanted Rose Innovations or ERI is the business name in which I manage and sell Acolyte under.
          This is also the business that manages some of my other projects such as Project Alchemist which is an add-on to Acolyte but also functions as a standalone application."
            link="https://enchantedroseinnovations.com"
          />
          <Card
            title="Acolyte R.E.A.L.M.S."
            description="This is what I lovingly call my lifes work, or my Magnum Opus. It is a custom Remote
          Engagement and Learning Management System (R.E.A.L.M.S.) I designed from the ground up and created myself. un-Traditional Magick used version 4
          before going on a haiatus, and I am currently working on version 5, which is set to release late 2024."
            link="https://enchantedroseinnovations.com/acolyte"
          />
        </div>
      </div>
    </section>
  );
}
export default ProjectsHome;
