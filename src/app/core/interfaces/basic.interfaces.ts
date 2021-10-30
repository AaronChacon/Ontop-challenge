
export type ITheme = 'light-theme' | 'dark-theme';

export interface Contractor {
  id: number;
  contractorName: string;
  imgUrl: string;
  type: string;
  startDate: string;
  amount: number;
  status: string;
}
export interface ClientData {
  id: number;
  company: string;
  contracts: Contractor[];
}
