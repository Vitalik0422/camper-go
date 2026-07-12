import { Engine, Form, Transmission } from '@/types/camper';
import { Filters } from '@/types/filters';

const FORM_VALUES: Form[] = [
  'alcove',
  'panel_van',
  'integrated',
  'semi_integrated',
];

const ENGINE_VALUES: Engine[] = ['diesel', 'petrol', 'hybrid', 'electric'];
const TRANSMISSION_VALUES: Transmission[] = ['automatic', 'manual'];

const isForm = (value: string): value is Form =>
  FORM_VALUES.includes(value as Form);
const isEngine = (value: string): value is Engine =>
  ENGINE_VALUES.includes(value as Engine);
const isTransmission = (value: string): value is Transmission =>
  TRANSMISSION_VALUES.includes(value as Transmission);

export const parseFilters = (params: URLSearchParams): Filters => {
  const location = params.get('location')?.trim() ?? '';
  const form = params.get('form') ?? '';
  const engine = params.get('engine') ?? '';
  const transmission = params.get('transmission') ?? '';

  return {
    location,
    form: isForm(form) ? form : '',
    engine: isEngine(engine) ? engine : '',
    transmission: isTransmission(transmission) ? transmission : '',
  };
};
