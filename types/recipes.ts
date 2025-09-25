export interface Recipe {
  id: number;
  title: string;
  slug: string;
  image: string;
  overview: string;
  servings: number;
  prepMinutes: number;
  cookMinutes: number;
  ingredients: string[];
  instructions: string[];
}
