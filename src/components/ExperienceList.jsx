import ExperienceItem from "../components/ExperienceItem";
import experienceData from "../assets/experience.json";
export default function ExperienceList() {
  return (
    <>
      {experienceData.experience.map((item, index) => (
        <ExperienceItem
          key={index}
          name={item.name}
          title={item.title}
          shortID={item.shortID}
          timePeriod={item.timePeriod}
          link={item.link}
          description={item.description}
          skills={item.skills}
        />
      ))}
    </>
  );
}
