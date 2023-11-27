export type CateringInfoType = {
  name: string;
  description: string;
}

export type CateringInfoListType = {
  name: string;
  foods: string[];
  disclaimer?: string;
}

export const catering: CateringInfoType[] = [
  {
    name: "Continental Breakfast",
    description: "Includes assorted mini bagels, mini danish, mini croissants, and mini muffins. Serevd with cream cheese, butter, orange juice, and coffee."
  },
  {
    name: "Cold Lunch",
    description: "Includes your choice of our most popular sandwiches and wraps. Served with salad, cookies, and soda."
  },
  {
    name: "Eggplanet Parmesan",
    description: "Includes breaded eggplant with tomato sauce, mozzarella cheese, and parmesan."
  },
  {
    name: "BBQ Hot Lunch",
    description: "Includes BBQ ribs , chicken, Mac & Cheese, grilled vegetables, cornbread, and sweet plantains. Served with cookies and soda."
  },
  {
    name: "Hot Breakfast",
    description: "Includes scrambled eggs, bacon, sausage, hash browns, and mini bagels. Served with coffee and orange juice."
  },
  {
    name: "Gluten Free Hot Lunch",
    description: "Includes your choice of chicken, grilled vegetables, and your choice of salad and drinks."
  },
  {
    name: "Vegan Lunch",
    description: "Includes your choice of pasta, grilled vegetables, a mixed green salad, and your choice of drink."
  },
  {
    name: "Italian Hot Lunch",
    description: "Includes your choice of entree, pasta and salad. Served with bread, cookies and soda"
  }
]

export const cateringList: CateringInfoListType[] = [
  {
    name: "Hot Catered Entrées",
    foods: [
      "Baked Ziti",
      "Penne a la Vodka",
      "Fettuccinne Alfredo",
      "Ziti & Broccoli in Garlic & Oil",
      "Farfalle with Fresh Tomato & Eggplant",
      "Stuffed Shells",
      "Ravioli",
      "Pasta Primavera",
      "Lasagna (Beef or Veggie)",
      "Chicken: Francese, Piccata, Marsla, Parmesan, Rocket, Espagna, Vesuvio, Cacciatore, Scarpariello, Rosemary or Hawaiian",
      "Pepper Steak",
      "Meatballs",
      "Beef & Broccoli",
      "Sausage & Peppers",
      "Baked Tilapia",
      "Poached Salmon", 
      "Shrimp Any Style", 
      "Eggplant Parmesan or Rollatini",
      "Steamed or Grilled Vegetables",
    ]
  },
  {
    name: "Salad Trays",
    foods: [
      "Mixed Field Greens",
      "Ana’s Salad with Dried Cranberries, Nuts, Goat Cheese, Sliced",
      "Classic Caesar Salad",
      "Grilled Chicken Caesar Salad",
      "Israeli Chopped Salad with Tomatoes, Cucumbers and Dill",
      "Greek Salad",
      "Pasta Salad",
      "Choice of: Antonio’s, Rotini, Couscous, Pepper Tricolor",
    ],
    disclaimer: "Priced according to quantities"
  },
  {
    name: "Appetizer Trays",
    foods: [
      "Stuffed Mushrooms",
      "Vegetable Egg Rolls",
      "Chicken Dumplings",
      "Mozzerella Sticks",
      "Wings Any Style",
      "Mini Quiches",
      "Swedish Meatballs",
      "Quesadillas and More",
    ],
    disclaimer: "Priced according to quantities"
  },
  {
    name: "Pit BBQ & Southern Fried",
    foods: [
      "St. Louis Ribs",
      "Carolina Pulled Pork (Chopped BBQ)",
      "Southern Fried Chicken",
      "Baked BBQ or Jerk Chicken",
      "Smother Chicken or Pork Chops",
      "Curry Chicken",
      "Beef Ribs",
      "Oxtails",
      "Fried Whiting",
      "Turkey Meatloaf"
    ]
  },
  {
    name: "Mom's Sides",
    foods: [
      "Real Bakes Macaroni & Cheese",
      "Collared Greens",
      "Bakes Beans",
      "Smashed Potatoes",
      "Rice and Peas",
      "Fried Rice",
      "Sweet Plantains",
      "Buttered Corn",
      "Coleslaw",
      "Creamed Spinach",
      "Broccoli",
      "Steamed Cabbage",
      "String Bean Casserole",
      "Red Roasted Potatoes",
      "Spanish Rice",
      "Okra Potato Salad",
      "Macaroni Salad"
    ]
  },
  {
    name: "Desserts",
    foods: [
      "Fresh Baked Cookies", 
      "Red Velvet Layer Cake", 
      "Muffins", 
      "Croissants", 
      "Cupcakes", 
      "Brownies", 
      "Crumb Cakes", 
      "Pound Cakes", 
      "Mini Italian Pastries"
    ]
  },
]