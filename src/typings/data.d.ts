export type sidebar = {
  subTitle: string;
  options: {
    title: string;
    id: string;
  }[];
};
export type main = {
  firstLine: string;
  secondLine: string;
  thirdLine: string;
  subHeading: string;
};

export type mySkills = {
  number: string;
  title: string;
  skills: { skill: string; progress: number; color: string }[];
  words: string[];
};

export type work = {
  number: string;
  title: string;
  work: {
    title: string;
    company: string;
    date: string;
    description: string[];
  }[];
};
