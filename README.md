struktura plików

SoYummy.API/
  ├── app.js
  ├── package.json 
  ├── node_modules/ 
  ├── server.js
  ├── swagger.js
  ├── routes/ 
  │     ├── auth.js
  ├── controllers/ 
  │     ├── authController.js 
  ├── models/ 
  │     ├──user.js 
  ├── middleware/ 
  │     ├── authenticate.js 
  ├── service/
  │     ├── userService.js 

## Obsługa API

### Plik .env

Należy stworzyć plik .env, którego struktura będzie wyglądać następująco:

- URI - connection string do bazy danych (można wygenerować na stronie MongoDb)
- PORT - numer portu, na którym chcecie uruchomic serwer
- SECRET - dowolny ciąg znaków służący do enkrypcji

### Obsługa Swagger

- w plikach routes definiujemy schematy danych (jak w routes/auth.js)
- wpisujemy dokumentację swagger przy każdym endpoint (m.in należy podać get/post itp., jaki schemat
  danych bądź parametry przyjmuje, jakie odpowiedzi zwraca)
- należy pilnować prawidłowej indentacji dokumentacji swagger (syntax yaml)
- dokumentacje można otworzyć pod adresem localhost:PORT/api-docs
- [swagger-jsdoc](https://github.com/Surnet/swagger-jsdoc)


SoYummy.API\models\shoppingList.js:
console.log('ShoppingList model initialized.');

SoYummy.API\service\shoppingListService.js:
console.log('ShoppingList service initialized.');

SoYummy.API\controllers\shoppingListController.js:
console.log('ShoppingList controller initialized.');

// W funkcji addToShoppingList
console.log('Request to add ingredient to shopping list:', userId, ingredientId);
console.log('Ingredient added to shopping list successfully:', result);

// W funkcji removeFromShoppingList
console.log('Request to remove ingredient from shopping list:', userId, ingredientId);
console.log('Ingredient removed from shopping list successfully:', result);

// W funkcji getShoppingList
console.log('Request to get shopping list for user:', userId);
console.log('Shopping list retrieved successfully:', result);
Te linie console.log pomogą 
