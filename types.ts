export interface Room {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  imageUrl: string;
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  iconName: string; // Mapping to Lucide icons string
  imageUrl?: string;
}

export interface Slogan {
  main: string;
  sub: string;
}