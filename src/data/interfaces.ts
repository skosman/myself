interface Project {
  name: string;
  date: string;
  description: string;
  technology: string[];
  githubUrl: string;
  demoUrl: string;
}

interface Job {
  name: string;
  company: string;
  date: string;
  description: string;
  technology: string[];
}

export type { Job, Project };
