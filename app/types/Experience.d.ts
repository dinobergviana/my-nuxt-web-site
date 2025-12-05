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
