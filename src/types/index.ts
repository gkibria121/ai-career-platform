export interface StudentProfile {
  name: string;
  studentId: string;
  major: string;
  university: string;
  gpa: number;
  skills: string[];
  projects: string[];
  interests: string[];
  preferredCareer?: string;
}

export interface CareerMatch {
  title: string;
  matchScore: number;
  description: string;
  requiredSkills: string[];
  missingSkills: string[];
}

export interface RoadmapStep {
  title: string;
  description: string;
  completed: boolean;
  active?: boolean;
  isTarget?: boolean;
}
