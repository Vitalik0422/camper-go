import { Engine, Form, Transmission } from './camper';

export interface Filters {
  engine?: Engine | '';
  form?: Form | '';
  transmission?: Transmission | '';
  location?: string;
}
