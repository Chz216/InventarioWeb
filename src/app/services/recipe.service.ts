import { Recipes } from '../recipes/recipes.model';

export class RecipeService {
    private recipe: Recipes[] = [
            new Recipes('Ver inventario', 'Verifica tus productos', ''),
            new Recipes('Base de Datos', 'Descarga tu Base de Datos', ''),
            new Recipes('Configuracion', 'Opciones', '')

      ]

      getRecipes() {
          return this.recipe.slice();
      }
}
