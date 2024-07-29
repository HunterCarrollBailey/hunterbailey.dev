/* eslint-disable react/no-unescaped-entities */
import { useRouteError } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col min-h-screen bg-gray-400" id="error-page">
      <Header />
      <main className="flex-grow overflow-scroll no-scrollbar h-96">
        <div className="flex flex-col lg:flex-row place-content-center place-items-center h-96">
          <div className="flex flex-col bg-slate-200 text-slate-700 p-8 w-full lg:w-[50%] rounded-3xl text-center">
            <h1 className="text-3xl font-bold text-center">Whoa there! Looks like there's an issue!</h1>
            <hr className="border border-t border-slate-400 my-3 w-[75%] mx-auto" />
            <p className="text-justify mb-5">Feel free to send me an email at <a href="mailto:hunter.carrollbailey@gmail.com" className="text-emerald-600">hunter.carrollbailey@gmail.com</a> with the URL you are trying to access and I'll do my best to resolve the issue if thats unexpected.</p>
            <p>Error Message:
              <em className="ms-1">{error.statusText || error.message}</em>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
