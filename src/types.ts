export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'web' | 'design' | 'logo' | 'all';
  imageUrl: string;
  techStack: string[];
  liveUrl?: string;
  codeUrl?: string;
  role: string;
  client: string;
  year: string;
  details: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'dev' | 'design';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  deliverables: string[];
}

export interface WorkflowStep {
  number: string;
  title: string;
  description: string;
  details: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  comment: string;
  rating: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  content: string;
  timestamp: Date;
}
