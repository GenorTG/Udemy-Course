import { className } from "lib/utils";
import SHElement from "./ui/SHElement";

const C1profilecard = () => {
  return (
    <SHElement
      title={"Simple profile card"}
      ripColor={"light"}
      ripCenter={"true"}
    >
      <div className="bg-white border-2 border-primary flex flex-col justify-center items-center max-w-[400px] m-4">
        <img
          src="/public/placeholder.webp"
          alt="placeholder"
          className="w-full"
        />
        <div className="w-full p-4 flex flex-col">
          <h1 className="text-2xl font-bold">Krzysztof Kutniowski</h1>
          <p className="py-2">
            Frontend developer honing his skills. When not working on projects,
            I like to work on my own video game, play Age of Empires 2 DE, and
            spend time with my wife and son.
          </p>
          <div className="flex flex-wrap justify-start items-start gap-2">
            {skills.map((s) => (
              <SkillCard
                key={s.skill}
                emoji={s.emoji}
                color={s.color}
                skill={s.skill}
              />
            ))}
          </div>
        </div>
      </div>
    </SHElement>
  );
};
export default C1profilecard;

type SkillCardProps = {
  skill: string;
  emoji: string;
  color: string;
};

const SkillCard = ({ skill, emoji, color }: SkillCardProps) => {
  return (
    <div
      className={className(
        "flex flex-row gap-2 px-2 py-1 rounded text-sm font-bold",
        color
      )}
    >
      <p>{skill}</p>
      <p>{emoji}</p>
    </div>
  );
};

const skills = [
  {
    skill: "Javascript",
    emoji: "🙃",
    color: "cmix-1",
  },
  {
    skill: "Typescript",
    emoji: "🙃",
    color: "cmix-2",
  },
  {
    skill: "Web design",
    emoji: "🙃",
    color: "cmix-3",
  },
  {
    skill: "RWD",
    emoji: "🙃",
    color: "cmix-4",
  },
  {
    skill: "Git and GitHub",
    emoji: "🙃",
    color: "cmix-5",
  },
  {
    skill: "React",
    emoji: "🙃",
    color: "cmix-6",
  },
  {
    skill: "Next",
    emoji: "🙃",
    color: "cmix-7",
  },
];
