
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string; // Primary thumbnail
  images?: string[]; // Optional array for slideshow
  link?: string; // Optional live link
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}
