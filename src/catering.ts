export type CateringInfoType = {
  name: string;
  description: string;
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
};

export const catering: CateringInfoType[] = [
  {
    name: "Continental Breakfast",
    description:
      "Includes assorted mini bagels, mini danish, mini croissants, and mini muffins. Serevd with cream cheese, butter, orange juice, and coffee.",
  },
  {
    name: "Cold Lunch",
    description:
      "Includes your choice of our most popular sandwiches and wraps. Served with salad, cookies, and soda.",
  },
  {
    name: "Eggplanet Parmesan",
    description:
      "Includes breaded eggplant with tomato sauce, mozzarella cheese, and parmesan.",
  },
  {
    name: "BBQ Hot Lunch",
    description:
      "Includes BBQ ribs , chicken, Mac & Cheese, grilled vegetables, cornbread, and sweet plantains. Served with cookies and soda.",
  },
  {
    name: "Hot Breakfast",
    description:
      "Includes scrambled eggs, bacon, sausage, hash browns, and mini bagels. Served with coffee and orange juice.",
  },
  {
    name: "Gluten Free Hot Lunch",
    description:
      "Includes your choice of chicken, grilled vegetables, and your choice of salad and drinks.",
  },
  {
    name: "Vegan Lunch",
    description:
      "Includes your choice of pasta, grilled vegetables, a mixed green salad, and your choice of drink.",
  },
  {
    name: "Italian Hot Lunch",
    description:
      "Includes your choice of entrée, pasta and salad. Served with bread, cookies and soda",
  },
];

export const cateringList: CateringInfoListType[] = [
  {
    name: "Pastas",
    foods: [
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
      },
      {
        name: "Ziti & Broccoli in Garlic & Oil",
      },
      {
        name: "Farfalle with Fresh Tomato & Eggplant",
      },
      {
        name: "Stuffed Shells",
      },
      {
        name: "Ravioli",
      },
      {
        name: "Past Primavera",
        info: "45/80",
      },
      {
        name: "Lasagna (Beef or Veggie)",
      },
      {
        name: "Eggplant Parmesan or Rollatini",
      },
    ],
    disclaimer: [
      "Small (10-12 People)",
      "Large (20-24 People)",
    ]
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
        info: "65/120"
      }
    ],
    disclaimer: [
      "Small (10-12 People)",
      "Large (20-24 People)",
    ]
  },
  {
    name: "Poultry",
    foods: [
      "Boneless",
      {
        name: "Chicken Francese",
        info: "75/140"
      },
      {
        name: "Chicken Piccata",
        info: "75/140"
      },
      {
        name: "Chicken Marsala",
        info: "75/140"
      },
      {
        name: "Chicken Parmesan",
        info: "75/140"
      },
      {
        name: "Chicken Espagna",
        info: "75/140"
      },
      {
        name: "Chicken Vesuvio",
        info: "75/140"
      },
      {
        name: "Chicken Cacciatore",
        info: "75/140"
      },
      {
        name: "Chicken Scarpariello",
        info: "75/140"
      },
      {
        name: "Chicken Rosemary",
        info: "75/140"
      },
      {
        name: "Stuffed Chicken",
        info: "75/140",
        options: [
          {
            option: "w/ Spinach & Mozzarella",
          },
          {
            option: "w/ Bread Stuffing"
          }
        ]
      },
      "Bone in",
      {
        name: "Fried Chicken",
        info: "65/120"
      },
      {
        name: "Jerk Chicken",
        info: "65/120"
      },
      {
        name: "Cilantro Lime Chicken",
        info: "65/120"
      },
      {
        name: "Roasted Chicken w/ Vegetables",
        info: "65/120"
      },
    ],
    disclaimer: [
      "Small (10-12 People)",
      "Large (20-24 People)",
    ]
  },
  {
    name: "Salad Trays",
    foods: [
      {
        name: "Mixed Field Greens",
      },
      {
        name: "Ana’s Salad",
        options: [
          {
            option: "w/ Dried Cranberries, Nuts, Goat Cheese, Sliced"
          },
        ]
      },
      {
        name: "Classic Caesar Salad",
      },
      {
        name: "Grilled Chicken Caesar Salad",
      },
      {
        name: "Israeli Chopped Salad",
        options: [
          {
            option: "w/ Tomatoes, Cucumbers and Dill",
          }
        ]
      },
      {
        name: "Greek Salad",
      },
      {
        name: "Pasta Salad",
        options: [
          {
            option: "Choice of: Antonio’s, Rotini, Couscous, Pepper Tricolor",
          }
        ]
      },
    ],
    disclaimer: [
      "Large Bowl Serves 12-14 People"
    ]
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
      },
      {
        name: "Vegetable Egg Rolls",
      },
      {
        name: "Chicken Dumplings",
      },
      {
        name: "Mozzerella Sticks",
      },
      {
        name: "Mini Quiches",
      },
      {
        name: "Quesadillas",
      },
      {
        name: "Half Trays Serve 12",
      },
    ],
  },
  {
    name: "Mom's Sides",
    foods: [
      {
        name: "Real Bakes Macaroni & Cheese",
      },
      {
        name: "Collared Greens",
      },
      {
        name: "Bakes Beans",
      },
      {
        name: "Smashed Potatoes",
      },
      {
        name: "Rice and Peas",
      },
      {
        name: "Fried Rice",
      },
      {
        name: "Sweet Plantains",
      },
      {
        name: "Buttered Corn",
      },
      {
        name: "Coleslaw",
      },
      {
        name: "Creamed Spinach",
      },
      {
        name: "Broccoli",
      },
      {
        name: "Steamed Cabbage",
      },
      {
        name: "String Bean Casserole",
      },
      {
        name: "Red Roasted Potatoes",
      },
      {
        name: "Spanish Rice",
      },
      {
        name: "Okra Potato Salad",
      },
      {
        name: "Macaroni Salad",
      },
      {
        name: "Roasted Brussel Sprouts"
      }
    ],
    disclaimer: [
      "Half Trays Serves 12"
    ]
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
      }
    ],
    disclaimer: [
      "Small (10-12 People)",
      "Large (20-24 People)"
    ]
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
    disclaimer: [
      "Priced According to Quantities"
    ]
  },
  {
    name: "Chicken Wings",
    foods: [
      {
        name: "Half Tray (Approx. 50 Wings)",
        info: "65/Per Tray",
      },
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
      }
    ],
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
        name: "Shrimp Any Style"
      }
    ],
    disclaimer: ["Priced by the size of the fish", "Serves 8-10 People"],
  },
  {
    name: "Hispanic Platter",
    foods: [
      {
        name: "Empanadas",
      },
      {
        name: "Bollos de Yuca (Fried Casava Balls)",
      },
      {
        name: "Quipes de Carne (Lebanese Kibbeh)",
        options: [
          {
            option: "w/ Ground Beef",
          }
        ]
      },
      {
        name: "Arepas"
      },
    ],
    disclaimer: ["Small (10-12 People)", "Large (20-24 People)"],
  },
];
