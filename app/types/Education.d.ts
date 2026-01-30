interface EducationItem {
  id: string;
  title: string;
  institutionImage: string;
  description: string;
  status: "Finalizado" | "Em andamento" | "Completed" | "In Progress";
  period: string;
}

interface CourseItem {
  id: string;
  title: string;
  image: string;
  description: string;
  tags: Tag[];
}
