import { LucideIcon } from 'lucide-react';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  location: string;
}

export interface NavItem {
  label: string;
  href: string;
}