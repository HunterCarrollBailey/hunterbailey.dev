import Image from "next/image";
import BookCoverFront from "@/assets/BookCoverFront.jpg";
import BookCoverBack from "@/assets/BookCoverBack.jpg";
import Link from "next/link";
export default function Book() {
  return (
    <section id="book" className="p-5">
      <div className="bg-slate-950/50 backdrop-blur shadow-md shadow-cyan-800 rounded-2xl p-5 flex flex-col items-center">
        <h2 className="text-2xl text-center font-semibold font-heading">I Wrote A Book!</h2>
        <p className="text-justify leading-relaxed mt-2 mb-2">
          One of the challenges I set for myself in 2024 was to finally take all
          of the poetry I have written over the years and condense it into a
          book. This evolved into telling my story from a young child dealing
          with trauma to the hopefull outlook I have for life now that I have
          found a home in Seattle.
        </p>
        <div className="flex flex-row flex-wrap lg:flex-nowrap gap-5 justify-center">
          <div className="basis-2/3 md:basis-1/3 lg:basis-1/4">
            <Image
              src={BookCoverFront}
              alt="A Warrior's Journey Front Cover"
              className="rounded-2xl transition brightness-50 hover:brightness-100"
            />
          </div>
          <div className="basis-2/3 md:basis-1/3 lg:basis-1/4 transition brightness-50 hover:brightness-100">
            <Image
              src={BookCoverBack}
              alt="A Warrior's Journey Back Cover"
              className="rounded-2xl"
            />
          </div>
          <div className="basis-2/3 lg:basis-2/4">
            <ul className="my-4 *:text-slate-400 *:text-sm lg:*:text-lg">
              <li>ISBN: 9798218480882</li>
              <li>Title: A Warrior{`'`}s Journey</li>
              <li>Publication Date: July 26th, 2024</li>
              <li><Link href={"https://www.barnesandnoble.com/w/a-warriors-journey-hunter-bailey/1146141656?ean=9798218480882"} target="_blank" className="text-cyan-400 font-bold">B&N Listing</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
