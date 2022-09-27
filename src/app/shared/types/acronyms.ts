export interface Acronym {
  id: number;
  name: string;
  description: string;
  created_at: string;
}

export interface AcronymResponse {
  status: string;
  data: Acronym[];
  length: number;
}
