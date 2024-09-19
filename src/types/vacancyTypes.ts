export interface Vacancy {
  id: number;
  title: string;
  salary: string;
  location: string;
  company: string;
  experience: string;
}

export interface SearchParams {
  skill: string;
  city: string;
}

export interface Vacancy {
  id: number;
  title: string;
  salary: string;
  location: string;
  company: string;
  experience: string;
}

export interface Option {
  label: string;
  value: String
}

export interface AutoCompleteComponentProps {
  options: Option[];
  value: Option[];
  setValue: (value: Option) => void;
  label: String,
  placeholder: String
}
