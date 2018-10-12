import { Recipe } from '../recipes/Recipes.model';

export class RecipeService {
    private recipe: Recipe[] = [
            new Recipe('Ver inventario', 'Verifica tus productos', ''),
            new Recipe('Base de Datos', 'Descarga tu Base de Datos', ''),
            new Recipe('Configuracion', 'Opciones', '')

      ]

      getRecipes() {
          return this.recipe.slice();
      }
}
