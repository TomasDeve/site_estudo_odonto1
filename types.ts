import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum TreatmentType {
  General = 'Clínica Geral',
  Esthetic = 'Estética',
  Orthodontics = 'Ortodontia',
  Implants = 'Implantes',
}