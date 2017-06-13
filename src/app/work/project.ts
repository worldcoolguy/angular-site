export interface Project {
  key: string;
  name: string;
  url?: string;
  dateFrom: string;
  dateTo?: string;
  hours: Array<number>;
  technologies: Array<string>;
  description: string;
  logo: string;

}