const mongoose = require('mongoose')
const { Schema, model } = mongoose

const recipeSchema = new Schema({
    title: String,
    category: String,
    area: String,
    instructions: String,
    description: String,
    thumb: String,
    preview: String,
    time: String,
    popularity: Number,
    favorites: [String],
    likes: [String],
    youtube: String,
    tags: [String],
    createdAt: Date,
    updatedAt: Date,
    ingredients: [
      {
        name: String,
        quantity: String,
      },
    ],
});
const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;

// {
//     "_id": {
//       "$oid": "640cd5ac2d9fecf12e8897ee"
//     },
//     "title": "Bakewell tart",
//     "category": "Dessert",
//     "area": "British",
//     "instructions": "To make the pastry, measure the flour into a bowl and rub in the butter with your fingertips until the mixture resembles fine breadcrumbs. Add the water, mixing to form a soft dough.\r\nRoll out the dough on a lightly floured work surface and use to line a 20cm/8in flan tin. Leave in the fridge to chill for 30 minutes.\r\nPreheat the oven to 200C/400F/Gas 6 (180C fan).\r\nLine the pastry case with foil and fill with baking beans. Bake blind for about 15 minutes, then remove the beans and foil and cook for a further five minutes to dry out the base.\r\nFor the filing, spread the base of the flan generously with raspberry jam.\r\nMelt the butter in a pan, take off the heat and then stir in the sugar. Add ground almonds, egg and almond extract. Pour into the flan tin and sprinkle over the flaked almonds.\r\nBake for about 35 minutes. If the almonds seem to be browning too quickly, cover the tart loosely with foil to prevent them burning.",
//     "description": "A British dessert consisting of a shortcrust pastry shell filled with raspberry jam, frangipane, and topped with almonds.",
//     "thumb": "https://www.themealdb.com/images/media/meals/wyrqqq1468233628.jpg",
//     "preview": "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560408/lygbfa7j94dgegmvnpas.jpg",
//     "time": "85",
//     "popularity": 1,
//     "favorites": [
//       {
//         "$oid": "640e10b12752a54004e7b2bc"
//       },
//       {
//         "$oid": "6411fef75848f7534c62c591"
//       },
//       {
//         "$oid": "64136b81f9ab2e3d387206df"
//       }
//     ],
//     "likes": [
//       {
//         "$oid": "640ad9d808527273c5cd789c"
//       }
//     ],
//     "youtube": "https://www.youtube.com/watch?v=1ahpSTf_Pvk",
//     "tags": [
//       "Tart",
//       "Baking",
//       "Alcoholic"
//     ],
//     "createdAt": {
//       "$date": "2023-03-11T19:25:33.239Z"
//     },
//     "updatedAt": {
//       "$date": "2023-03-22T11:38:07.552Z"
//     },
//     "ingredients": [
//       {
//         "id": {
//           "$oid": "640c2dd963a319ea671e3743"
//         },
//         "measure": "175g/6oz"
//       },
//       {
//         "id": {
//           "$oid": "640c2dd963a319ea671e369a"
//         },
//         "measure": "75g/2½oz"
//       },
//       {
//         "id": {
//           "$oid": "640c2dd963a319ea671e36ad"
//         },
//         "measure": "2-3 tbsp"
//       },
//       {
//         "id": {
//           "$oid": "640c2dd963a319ea671e3749"
//         },
//         "measure": "1 tbsp"
//       },
//       {
//         "id": {
//           "$oid": "640c2dd963a319ea671e367e"
//         },
//         "measure": "125g/4½oz"
//       },
//       {
//         "id": {
//           "$oid": "640c2dd963a319ea671e3687"
//         },
//         "measure": "125g/4½oz"
//       },
//       {
//         "id": {
//           "$oid": "640c2dd963a319ea671e36f6"
//         },
//         "measure": "125g/4½oz"
//       },
//       {
//         "id": {
//           "$oid": "640c2dd963a319ea671e36da"
//         },
//         "measure": "1"
//       },
//       {
//         "id": {
//           "$oid": "640c2dd963a319ea671e3861"
//         },
//         "measure": "½ tsp"
//       },
//       {
//         "id": {
//           "$oid": "640c2dd963a319ea671e36d5"
//         },
//         "measure": "50g/1¾oz"
//       }
//     ]
//   }