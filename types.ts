export interface SubSection {
  title: string;
  content: string;
}

export interface Chapter {
  id: string;
  title: string;
  subsections: SubSection[];
}

export interface Reference {
  id: string;
  title: string;
  url: string;
  date: string;
}

export interface ModelComparisonData {
  feature: string;
  deepseek: string;
  claude: string;
  gpt: string;
  gemini: string;
}

export interface CostData {
  name: string;
  input: number;
  output: number;
}
