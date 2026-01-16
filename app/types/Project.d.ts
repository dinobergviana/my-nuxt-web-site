type ProjectStatus = "completed" | "finished" | "in progress";

type ProjectLabel = "Finalizado" | "Em andamento" | "Finished" | "In Progress";

interface ProjectDetails {
  description: string;
  stacks: string[];
}

interface Project {
  id: number;
  name: string;
  status: ProjectStatus;
  label: ProjectLabel;
  show_github_link: boolean;
  github_url: string;
  has_access_link: boolean;
  access_link: string | null;
  details: ProjectDetails;
}
