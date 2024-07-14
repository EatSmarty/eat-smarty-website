import type { IApproval } from './i-approval';
import type { ICertificates } from './i-certificates';

export interface IAdditive {
  id: number;
  code: number;
  eNumber: string;
  name: string;
  description?: string;
  category?: string;
  danger?: number;
  source?: string;
  otherNames?: string[];
  certificates?: ICertificates;
  origin?: string;
  info?: {
    usage?: string;
    products?: string;
    sideEffect?: string;
    restrictions?: string;
    exampleUse?: string;
  }
  approval?: IApproval;
}
