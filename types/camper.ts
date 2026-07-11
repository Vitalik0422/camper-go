export interface Gallery {
  id: string;
  camperId: string;
  thumb: string;
  original: string;
  order: number;
}

export type Transmission = 'automatic' | 'manual';
export type Engine = 'diesel' | 'petrol' | 'hybrid' | 'electric';
export type Form = 'alcove' | 'panel_van' | 'integrated' | 'semi_integrated';

export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: Form;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: Transmission;
  engine: Engine;
  amenities: string[];
  createdAt: string;
  updatedAt: string;
  coverImage: string;
  totalReviews: number;
  gallery: Gallery[];
}

export interface Review {
  id: string;
  camperId: string;
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
  createdAt: string;
}
