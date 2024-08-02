/* eslint-disable react/no-unescaped-entities */
import { useRouteError } from "react-router-dom";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      className="flex flex-col flex-grow min-h-screen max-h-screen w-screen bg-slate-950 text-slate-300 bg-rose bg-contain bg-no-repeat bg-center font-display"
      id="error-page"
    >
      <div className="backdrop-blur overflow-scroll p-10 min-h-screen flex place-content-center justify-center flex-wrap">
        <div className="flex flex-col text-center leading-relaxed hover:border-cyan-500 hover:border p-5 rounded-2xl bg-slate-950/70 shadow-md  shadow-cyan-600 hover:shadow-lg hover:shadow-cyan-500 w-full md:w-[50dvw]">
          <h1 className="text-3xl font-bold text-center">
            Whoa there! Looks like there's an issue!
          </h1>
          <hr className="border border-t border-slate-400 my-3 w-[75%] mx-auto" />
          <p className="text-justify mb-5">
            Feel free to send me an email at{" "}
            <a
              href="mailto:hunter.carrollbailey@gmail.com"
              className="text-emerald-600"
            >
              hunter.carrollbailey@gmail.com
            </a>{" "}
            with the URL you are trying to access and I'll do my best to resolve
            the issue if thats unexpected.
          </p>
          <p>
            Error Message:
            <em className="ms-1">{error.statusText || error.message}</em>
          </p>
        </div>
      </div>
    </div>
  );
}
