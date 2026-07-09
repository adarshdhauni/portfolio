import SkillCard from "./SkillCard";
import { SKILLS } from "@/constants/skills";

const spanClasses = {
  12: "lg:col-span-12",
  6: "lg:col-span-6",
};

const SkillsGrid = () => {
  return (
    <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
      {SKILLS.map((category, index) => (
        <div
          key={category.id}
          className={spanClasses[category.span]}
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <SkillCard category={category} />
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;
