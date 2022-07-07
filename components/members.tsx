import React from "react";
import { Member, MemberType } from "./member";

const members_list: MemberType[] = [
  {
    name: "Esmaeil",
    role: "Fullstack Enginer",
    image: "/assets/team/margelo_faces_janic.svg",
    link: ""
  },
  {
    name: "Reza",
    role: "Frontend Enginer",
    image: "/assets/team/margelo_faces_catalin.svg",
    link: ""
  }
];

const Members: React.FC = () => {
  return (
    <>
      <div className="absolute w-full h-full opacity-100 bg-amber-50 z-0"></div>
      <div className="flex flex-col py-20 z-10">
        <div className="mx-auto container bg-amber-50/50 px-11 text-center z-10">
          <h2 className="text-3xl font-bold">Our Team</h2>
          <div className="mt-2 font-thin">&ldquo;Why&rdquo;</div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20">
            {members_list.map((m) => (
              <Member key={m.name} member={m} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Members;
