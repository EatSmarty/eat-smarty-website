import type { ICertificates } from './i-certificates';
import type { INutrition } from './i-nutrition';

export interface IProduct {
  id?: number;
  barcode?: string;
  imgproduct?: string;
  title?: string;
  category?: string;
  source?: string;
  description?: string;
  src?: string;
  rating?: number;
  what?: string;
  nutrition?: INutrition;
  ingradient?: string[];
  certificates?: ICertificates;
}
