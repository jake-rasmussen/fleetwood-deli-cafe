export type CateringInfoType = {
  name: string;
  description: string;
  pricing: string[];
};

export type CateringFoodType = {
  name: string;
  info?: string;
  options?: {
    option: string;
    price?: number;
  }[];
};

export type CateringInfoListType = {
  name: string;
  foods: (string | CateringFoodType)[];
  disclaimer?: string[];
  header?: string[];
};

export const catering: CateringInfoType[] = [
  {
    name: "Continental Breakfast",
    description:
      "Includes assorted mini bagels, mini danish, mini croissants, and mini muffins. Served with cream cheese, butter, orange juice, and coffee.",
    pricing: ["$119.50", "11.95/person", "10 Person Minimum"],
  },
  {
    name: "Cold Lunch",
    description:
      "Includes your choice of our most popular sandwiches and wraps. Served with salad, cookies, and soda.",
    pricing: ["$169.50", "16.95/person", "10 Person Minimum"],
  },
  {
    name: "Eggplanet Parmesan",
    description:
      "Includes breaded eggplant with tomato sauce, mozzarella cheese, and parmesan.",
    pricing: ["$49.00", "4.90/person", "Serves 10 People"],
  },
  {
    name: "BBQ Hot Lunch",
    description:
      "Includes BBQ ribs , chicken, Mac & Cheese, grilled vegetables, cornbread, and sweet plantains. Served with cookies and soda.",
    pricing: ["$199.50", "19.95/person", "10 Person Minimum"],
  },
  {
    name: "Hot Breakfast",
    description:
      "Includes scrambled eggs, bacon, sausage, hash browns, and mini bagels. Served with coffee and orange juice.",
    pricing: ["$135.00", "13.50/person", "10 Person Minimum"],
  },
  {
    name: "Gluten Free Hot Lunch",
    description:
      "Includes your choice of chicken, grilled vegetables, and your choice of salad and drinks.",
    pricing: ["$179.50", "17.95/person", "10 Person Minimum"],
  },
  {
    name: "Vegan Lunch",
    description:
      "Includes your choice of pasta, grilled vegetables, a mixed green salad, and your choice of drink.",
    pricing: ["$169.50", "16.95/person", "10 Person Minimum"],
  },
  {
    name: "Italian Hot Lunch",
    description:
      "Includes your choice of entrée, pasta and salad. Served with bread, cookies, and soda",
    pricing: ["$179.50", "17.95/person", "10 Person Minimum"],
  },
];

export const cateringList: CateringInfoListType[] = [
  {
    name: "Pastas",
    foods: [
      {
        name: "Cheese Lasagna",
        info: "40/75",
      },
      {
        name: "Baked Ziti",
        info: "45/85",
      },
      {
        name: "Penne a la Vodka",
        info: "45/80",
      },
      {
        name: "Fettuccinne Alfredo",
        info: "45/80",
      },
      {
        name: "Ziti & Broccoli in Garlic & Oil",
        info: "45/80",
      },
      {
        name: "Farfalle with Fresh Tomato & Eggplant",
        info: "45/70",
      },
      {
        name: "Stuffed Shells",
        info: "45/80",
      },
      {
        name: "Ravioli",
        info: "45/80",
      },
      {
        name: "Past Primavera",
        info: "45/80",
      },
      {
        name: "Lasagna (Beef or Veggie)",
        info: "Beef:45/80 - Veg:40/75",
      },
      {
        name: "Eggplant Parmesan or Rollatini",
        info: "45/75",
      },
    ],
    header: ["Small (10-12 People)", "Large (20-24 People)"],
  },
  {
    name: "Beef",
    foods: [
      {
        name: "Steak and Peppers",
        info: "80/160",
      },
      {
        name: "Meatball Italian or Swedish",
        info: "55/110",
      },
    ],
    header: ["Small (10-12 People)", "Large (20-24 People)"],
  },
  {
    name: "Poultry",
    foods: [
      "Boneless",
      {
        name: "Chicken Francese",
        info: "65/120",
      },
      {
        name: "Chicken Piccata",
        info: "65/120",
      },
      {
        name: "Chicken Marsala",
        info: "65/120",
      },
      {
        name: "Chicken Parmesan",
        info: "65/120",
      },
      {
        name: "Chicken Espagna",
        info: "65/120",
      },
      {
        name: "Chicken Vesuvio",
        info: "65/120",
      },
      {
        name: "Chicken Cacciatore",
        info: "65/120",
      },
      {
        name: "Chicken Scarpariello",
        info: "65/120",
      },
      {
        name: "Chicken Rosemary",
        info: "65/120",
      },
      {
        name: "Stuffed Chicken",
        info: "65/120",
        options: [
          {
            option: "w/ Spinach & Mozzarella",
          },
          {
            option: "w/ Bread Stuffing",
          },
        ],
      },
      "Bone in",
      {
        name: "Fried Chicken",
        info: "65/120",
      },
      {
        name: "Jerk Chicken",
        info: "65/120",
      },
      {
        name: "Cilantro Lime Chicken",
        info: "65/120",
      },
      {
        name: "Roasted Chicken w/ Vegetables",
        info: "65/120",
      },
    ],
    header: ["Small (10-12 People)", "Large (20-24 People)"],
  },
  {
    name: "Platters & Party Wedges",
    foods: [
      {
        name: "Fruit and Cheese",
      },
      {
        name: "Crudité",
      },
      {
        name: "Smoked Salmon Platter",
        options: [
          {
            option:
              "Includes freshly sliced nova with onions, tomatoes, capers, cream cheese",
          },
        ],
      },
      {
        name: "Miniature Sandwich Platter",
        options: [
          {
            option: "(By the dozen)",
          },
        ],
      },
      {
        name: "Party Wedges",
        options: [
          {
            option: "Long 2’-6’ or Round 2’-4’, Choice of Filling",
          },
        ],
      },
    ],
    disclaimer: ["Priced According to Quantities", "Please call in for current pricing"],
  },
  {
    name: "Salad Trays",
    foods: [
      {
        name: "Mixed Field Greens",
        info: "45",
      },
      {
        name: "Ana’s Salad",
        options: [
          {
            option: "w/ Dried Cranberries, Nuts, Goat Cheese, Sliced",
          },
        ],
        info: "60",
      },
      {
        name: "Classic Caesar Salad",
        info: "45",
      },
      {
        name: "Grilled Chicken Caesar Salad",
        info: "60",
      },
      {
        name: "Israeli Chopped Salad",
        options: [
          {
            option: "w/ Tomatoes, Cucumbers and Dill",
          },
        ],
        info: "60",
      },
      {
        name: "Pasta Salad",
        options: [
          {
            option: "Choice of: Antonio’s, Rotini, Couscous, Pepper Tricolor",
          },
        ],
        info: "60",
      },
    ],
    header: ["Large Bowl Serves 12-14 People"],
  },
  {
    name: "Starters",
    foods: [
      {
        name: "Cheese Platter",
        info: "50/90",
      },
      {
        name: "Antipasto Platter",
        info: "50/90",
      },
      {
        name: "Vegetable Platter",
        info: "45/80",
      },
      {
        name: "Grilled Vegetable",
        info: "55/100",
      },
      {
        name: "Veggie & Cheese Combo Platter",
        info: "50/90",
      },
      {
        name: "Cold Cut Platter",
        info: "18.99/lb",
      },
    ],
  },
  {
    name: "Appetizer Trays",
    foods: [
      {
        name: "Stuffed Mushrooms",
        info: "45/90",
      },
      {
        name: "Vegetable Egg Rolls",
        info: "45/90",
      },
      {
        name: "Chicken Dumplings",
        info: "55/110",
      },
      {
        name: "Mozzerella Sticks",
        info: "45/90",
      },
      {
        name: "Quesadillas",
        info: "45/90",
      },
    ],
    header: ["Small Trays (10-12 People)", "Large Trays (20-24 People)"],
  },
  {
    name: "Mom's Sides",
    foods: [
      {
        name: "Real Bakes Macaroni & Cheese",
        info: "40",
      },
      {
        name: "Collared Greens",
        info: "35",
      },
      {
        name: "Bakes Beans",
        info: "30",
      },
      {
        name: "Smashed Potatoes",
        info: "40",
      },
      {
        name: "Rice and Peas",
        info: "35",
      },
      {
        name: "Fried Rice",
        info: "40",
      },
      {
        name: "Sweet Plantains",
        info: "30",
      },
      {
        name: "Buttered Corn",
        info: "35",
      },
      {
        name: "Coleslaw",
        info: "30",
      },
      {
        name: "Creamed Spinach",
        info: "30",
      },
      {
        name: "Broccoli",
        info: "30",
      },
      {
        name: "Steamed Cabbage",
        info: "30",
      },
      {
        name: "String Bean Casserole",
        info: "35",
      },
      {
        name: "Red Roasted Potatoes",
        info: "35",
      },
      {
        name: "Spanish Rice",
        info: "35",
      },
      {
        name: "Okra Potato Salad",
        info: "40",
      },
      {
        name: "Macaroni Salad",
        info: "35",
      },
      {
        name: "Roasted Brussel Sprouts",
        info: "35",
      },
    ],
  },
  {
    name: "Pit BBQ & Southern Fried",
    foods: [
      {
        name: "St. Louis Ribs",
      },
      {
        name: "Carolina Pulled Pork (Chopped BBQ)",
      },
      {
        name: "Southern Fried Chicken",
      },
      {
        name: "Baked BBQ or Jerk Chicken",
      },
      {
        name: "Smother Chicken or Pork Chops",
      },
      {
        name: "Curry Chicken",
      },
      {
        name: "Beef Ribs",
      },
      {
        name: "Oxtails",
      },
      {
        name: "Fried Whiting",
      },
      {
        name: "Turkey Meatloaf",
      },
    ],
    disclaimer: ["Prices vary according to quantity", "Call in for pricing"],
    header: ["Small (10-12 People)", "Large (20-24 People)"],
  },
  {
    name: "Desserts",
    foods: [
      {
        name: "Fresh Baked Cookies",
      },
      {
        name: "Red Velvet Layer Cake",
      },
      {
        name: "Muffins",
      },
      {
        name: "Croissants",
      },
      {
        name: "Cupcakes",
      },
      {
        name: "Brownies",
      },
      {
        name: "Crumb Cakes",
      },
      {
        name: "Pound Cakes",
      },
      {
        name: "Mini Italian Pastries",
      },
    ],
    disclaimer: ["Priced According to Quantities"],
  },
  {
    name: "Chicken Wings",
    foods: [
      {
        name: "Buffalo (Hot or Mild)",
      },
      {
        name: "Teriyaki",
      },
      {
        name: "Honey BBQ",
      },
      {
        name: "Lemon Pepper",
      },
    ],
    disclaimer: ["Prices vary according to quantity", "Call in for pricing"],
  },
  {
    name: "Speciality Salads",
    foods: [
      {
        name: "Tuna Salad",
        info: "10.25/lb",
      },
      {
        name: "Egg Salad",
        info: "8.25/lb",
      },
      {
        name: "Curry Chicken Salad",
        info: "10.25/lb",
      },
      {
        name: "Chicken Salad",
        info: "10.25/lb",
      },
      {
        name: "Buffalo Chicken Salad",
        info: "10.25/lb",
      },
      {
        name: "Cranberry Walnut Chicken Salad",
        info: "10.25/lb",
      },
      {
        name: "Dill Tuna",
        info: "10.25/lb",
      },
    ],
  },
  {
    name: "Seafood",
    foods: [
      {
        name: "Poached Salmon",
      },
      {
        name: "Baked Tilapia",
      },
      {
        name: "Shrimp Any Style",
      },
    ],
    disclaimer: ["Prices vary according to quantity", "Call in for pricing"],
  },
  {
    name: "Hispanic Bites",
    foods: [
      {
        name: "Empanadas",
        info: "22/44",
      },
      {
        name: "Bollos de Yuca (Fried Casava Balls)",
        info: "22/44",
      },
      {
        name: "Quipes de Carne (Lebanese Kibbeh)",
        info: "22/44",
        options: [
          {
            option: "w/ Ground Beef",
          },
        ],
      },
      {
        name: "Arepas de Yuca",
        info: "22/44"
      },
    ],
    header: ["Small (10-12 People)", "Large (20-24 People)"],
  },
];
