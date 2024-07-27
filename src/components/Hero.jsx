function Hero() {
  return (
    <section className="flex flex-col lg:flex-row gap-3 bg-hero bg-cover bg-no-repeat min-h-[45dvh]">
      <div className="w-full min-h-[45dvh] backdrop-blur-sm bg-black/40 p-5 text-slate-100 place-content-center">
        <h1 className="text-center font-bold text-4xl">Hunter Bailey</h1>
        <h3 className="text-center text-xl">Full Stack Software Developer</h3>
        <p className="mx-auto text-center mt-[1.5%] w-full lg:w-[50%] text-lg">
          Dynamic and results-oriented software developer with over 6 years of
          experience in application development, technical support, and process
          optimization. With proven expertise in building custom solutions using
          Laravel, NodeJS, JavaScript, SaSS, MySQL, Postgres, and more, I have a
          strong track record of enhancing user experience and project
          management.
        </p>
      </div>
    </section>
  );
}
export default Hero;
