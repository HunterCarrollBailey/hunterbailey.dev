import Card from "../components/cards/Card";
import { TimelineFull } from "@/app/components/lists/Timeline";
import Heading from "../components/typography/Headings";
export default function Resume() {
  return (
    <section id="resume" className="p-5 flex flex-col items-center mt-6">
      <Card>
        <Heading Level={4}>Resume</Heading>
        <Heading Level={6} className="mt-2 text-cyan-500 text-md font-semibold">
          With some fun style to it.
        </Heading>
        <TimelineFull />
      </Card>
    </section>
  );
}
