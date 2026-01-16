interface IProject {
  title: string;
  description: string;
}

interface IExperience {
  title: string;
  role: string;
  period: string;
  description: string;
  actions: string[];
  main_projects: IProject[];
  stacks: string[];
}

export interface ExperiencePeriod {
  start: string; // ex: "06/2025"
  end: string; // ex: "09/2025" | "Present"
}

export interface ExperienceProject {
  title: string;
  description: string;
}

interface ProfessionalExperience {
  title: string; // Company name
  role: string; // Job title
  period: ExperiencePeriod;
  description: string; // Company / context description
  actions: string[]; // Main responsibilities / achievements
  main_projects: ExperienceProject[];
  stacks: string[];
}
