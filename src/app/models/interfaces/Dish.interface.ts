export interface IDish {
  id: number;
  vegan: boolean;
  title: string;
  healthScore: number;
  pricePerServing: number;
  image: string;
  preparationMinutes?: number;
  cookingMinutes?: number;
  readyInMinutes?: number;
  summary?: string;
}
