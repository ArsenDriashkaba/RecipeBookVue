import { API_BASE_URL } from '@/api/setup';
import type { AddRecipe, Recipe } from '@/types/recipe';

export const getRecipes = async (): Promise<Recipe[]> => {
  const res = await fetch(`${API_BASE_URL}/recipes`);
  return res.json();
};

export const getRecipe = async (id: string): Promise<Recipe> => {
  const res = await fetch(`${API_BASE_URL}/recipes/${id}`);
  return res.json();
};

export const getIngredients = async (): Promise<string[]> => {
  const res = await fetch(`${API_BASE_URL}/recipes/ingredients`);
  return res.json();
};

export const getSideDishes = async (): Promise<string[]> => {
  const res = await fetch(`${API_BASE_URL}/recipes/side-dishes`);
  return res.json();
};

export const addRecipe = async (params: AddRecipe): Promise<Recipe> => {
  const res = await fetch(`${API_BASE_URL}/recipes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });
  return res.json();
};

export const updateRecipe = async (
  id: string,
  params: AddRecipe,
): Promise<Recipe> => {
  const res = await fetch(`${API_BASE_URL}/recipes/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });
  return res.json();
};

export const deleteRecipe = async (id: string) => {
  try {
    return await fetch(`${API_BASE_URL}/recipes/${id}`, {
      method: 'DELETE',
    });
  } catch (error) {
    console.log(error);
  }
};
