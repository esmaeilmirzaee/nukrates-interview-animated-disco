import Image from "next/image";

export const Member: React.FC<{ member: MemberType }> = ({ member }) => {
  return (
    <div className="">
      <Image src={member.image} width={1366} height={1555} alt={member.name} />
      <div className="">
        <h1 className="">{member.name}</h1>
        <h6 className="font-thin trailing-tight text-xs">{member.role}</h6>
      </div>
    </div>
  );
};

export interface MemberType {
  name: string;
  role: string;
  image: string;
  link: string;
}
