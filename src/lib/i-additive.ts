export interface IAdditive {
  id: number;
  code: number;
  eNumber: string;
  name: string;
  category?: string;
  danger?: number;
  source?: string;
  otherNames?: string[];
  certificates?: {
    isHalal?: boolean;
    isVegan?: boolean;
    isVegetrian?: boolean;
    isKosher?: boolean;
    isJecfa?: boolean;
    isPregnant?: boolean;
    isChildren?: boolean;
    isAllergey?: boolean;
    isCarcinogenic?: boolean;
  }
  origin?: string;
  usage?: string;
  products?: string;
  sideEffect?: string;
  restrictions?: string;
  approval?: {
    usa?: boolean;
    eur?: boolean;
    australia?: boolean;
  };
  exampleUse?: string;
  description?: string;
}
