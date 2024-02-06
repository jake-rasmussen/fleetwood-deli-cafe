export type MenuSectionType = {
  name: string;
  foods: FoodType[];
  extras?: FoodType[];
};

export type FoodType = {
  food: string;
  price?: number;
  options?: {
    option: string;
    price?: number;
  }[];
  optionsInline?: {
    option: string;
    price?: number;
  }[];
  description?: string;
};

export const menu: MenuSectionType[] = [
  {
    name: "Breakfast",
    foods: [
      {
        food: "Egg on Roll",
        price: 3.25,
      },
      {
        food: "Egg, Bacon, Ham or Sausage",
        price: 4.75,
      },
      {
        food: "Egg and Cheese Roll",
        price: 3.75
      },
      {
        food: "Bacon Egg and Cheese Roll",
        price: 5.25,
      },
      {
        food: "Sausage Egg and Cheese Roll",
        price: 5.75
      },
      {
        food: "Turkey Bacon Egg Roll",
        price: 6.50
      },  
      {
        food: "Turkey Bacon Egg and Cheese",
        price: 6.75
      },
      {
        food: "Breakfast Burrito",
        price: 6.75,
        description: "Includes egg, cheese, tater tots and avacado",
      },
      {
        food: "Bacon Egg and Cheese Wrap",
        price: 6.25,
        description: "2 Eggs, Bacon and Cheese",
      },
      {
        food: "Egg Cheese Hero",
        price: 7.25
      },
      {
        food: "Bacon Egg and Cheese Hero",
        price: 8.75,
      },
      {
        food: "Egg Homefries Platter",
        price: 6.75,
        description: "Includes Homefries or Hashbrowns & Toast",
      },
      {
        food: "Egg Bacon Homefries Platter",
        price: 7.50
      },
      {
        food: "Western Omelette",
        price: 9.25,
        description: "Includes Homefries or Hashbrowns & Toast",
      },
      {
        food: "Veggie Omelette",
        price: 9.25,
        description: "Includes Homefries or Hashbrowns & Toast",
      },
      {
        food: "Egg White Veggie Omelette",
        price: 9.95,
        options: [
          {
            option: "Add Bacon, Sausage or Ham",
            price: 1.75,
          },
        ],
      },
      {
        food: "French Toast",
        price: 9.50,
        options: [
          {
            option: "Add Bacon, Sausage or Ham",
            price: 1.75,
          },
        ],
        description: "Made with Challah Bread",
      },
      {
        food: "Pancakes",
        price: 9.50,
        options: [
          {
            option: "Add Bacon, Sausage, Ham or Egg",
            price: 1.75,
          },
        ],
      },
      {
        food: "Turkey Bacon or Chicken Sausage Available",
        price: 2.0,
      },
      {
        food: "Old Fashioned Oatmeal",
        optionsInline: [
          {
            option: "S",
            price: 3.99,
          },
          {
            option: "L",
            price: 6.99,
          },
        ],
        options: [
          {
            option: "Add Cranberries, Almonds or Cinnamon",
            price: 0.75,
          },
        ],
      },
    ],
  },
  {
    name: "Bagels",
    foods: [
      {
        food: "Plain",
        price: 1.25,
      },
      {
        food: "Bagel w/ Butter",
        price: 2.25,
      },
      {
        food: "Bagel w/ Cream Cheese",
        price: 3.25,
      },
      {
        food: "Flavored Cream Cheese",
        price: 3.75,
        description: "Scallion or Veggie",
      },
      {
        food: "Smoked Salmon",
        price: 11.95,
        description: "Lettuce, Tomato, Onion and Cream Cheese",
      },
    ],
  },
  {
    name: "Fresh Brewed",
    foods: [
      {
        food: "Colombian Supremo Coffee",
        description: "Regular, Hazelnut or Decaf",
      },
      {
        food: "Lipton and Herbal Teas",
      },
      {
        food: "Cappucino or Latte",
      },
      {
        food: "Espresso",
      },
      {
        food: "Hot Chocolate",
      },
      {
        food: "Chai Tea",
      },
      {
        food: "Iced Coffee",
        description: "Regular, Hazelnut or Decaf",
      },
      {
        food: "Iced Tea",
      },
    ],
  },
  {
    name: "Specialty Combo",
    foods: [
      {
        food: "The City Hall",
        optionsInline: [
          {
            option: "Roll",
            price: 10.49,
          },
          {
            option: "Wedge",
            price: 11.99,
          },
        ],
        description: "Pastrami, Swiss, Russian, Coleslaw",
      },
      {
        food: "The Gramatan",
        optionsInline: [
          {
            option: "Roll",
            price: 10.49,
          },
          {
            option: "Wedge",
            price: 11.99,
          },
        ],
        description: "Chicken Cutlet, Lettuce, Tomato, Red Onion, Russian",
      },
      {
        food: "The Empire",
        optionsInline: [
          {
            option: "Roll",
            price: 10.49,
          },
          {
            option: "Wedge",
            price: 11.99,
          },
        ],
        description:
          "Grilled Chicken, Mixed Greens, Hot Peppers, Fresh Mozzarella, Balsamic Vinaigrette",
      },
      {
        food: "The Lite Weight Wrap",
        price: 10.99,
        description: "Turkey, Swiss, Lettuce, Tomato, Honey Mustard",
      },
      {
        food: "The Big Bite",
        price: 12.25,
        description: "Corned Beef, Turkey Swiss and Russian Slaw on a Wedge",
      },
      {
        food: "Italian or American Wedge",
        price: 12.25,
      },
      {
        food: "Papo V's Philly Cheese Steak",
        price: 12.99,
        description:
          "Sliced Steak Smothered in Onions and Melted Cheese on Wedge",
      },
      {
        food: "Benny's Special",
        price: 11.95,
        description:
          "Chicken Cutlet, Bacon, Pepper Jack Cheese, Lettuce, Tomato and Chipotle Mayo on Wedge",
      },
      {
        food: "Eggplant Wrap",
        price: 9.99,
        description:
          "Eggplant, Fresh Mozzarella, Roasted Peppers and Balsamic Vinaigrette",
      },
      {
        food: "Dominican Chimi",
        price: 10.25,
        description: "Groud Beef, Season Cabbage, Tomatoes and Onion on a Roll w/ Ketchup Mayo Sauce",
      },
      {
        food: "Mount Vernon Delight",
        description: "Ovengold Turkey, Muenster Cheese, Tomato, Avocado, Mayo",
        optionsInline: [
          {
            option: "Roll",
            price: 10.50
          },
          {
            option: "Wedge",
            price: 11.99,
          },
        ]
      },
      {
        food: "The Fleetwood",
        description: "Grilled Chicken, Sautéed Mushrooms/Onions, Swiss Cheese, Caesar Dressing",
        optionsInline: [
          {
            option: "Roll",
            price: 10.50
          },
          {
            option: "Wedge",
            price: 11.99,
          },
        ]
      },
      {
        food: "The Mexican Dream",
        description: "Roast Beef, Onions, Peppers, Jalapeños and Pepper Jack Cheese",
        optionsInline: [
          {
            option: "Wedge",
            price: 12.99,
          },
        ]
      },
      {
        food: "Turkey Club/Chicken",
        description: "Turkey, Bacon, Tomato, Lettuce",
        optionsInline: [
          {
            option: "Roll",
            price: 10.49
          },
          {
            option: "Wedge",
            price: 11.99,
          },
        ]
      },
    ],
  },
  {
    name: "Sandwiches",
    foods: [
      {
        food: "Ham and Cheese",
        optionsInline: [
          {
            option: "Roll",
            price: 8.99,
          },
          {
            option: "Wedge",
            price: 10.49,
          },
        ]
      },
      {
        food: "Grilled Cheese",
        optionsInline: [
          {
            option: "Roll",
            price: 5.50,
          },
          {
            option: "Wedge",
            price: 6.99,
          },
        ]
      },
      {
        food: "BLT",
        optionsInline: [
          {
            option: "Roll",
            price: 5.50,
          },
          {
            option: "Wedge",
            price: 6.99,
          },
        ]
      },
      {
        food: "Bologna",
        optionsInline: [
          {
            option: "Roll",
            price: 7.99,
          },
          {
            option: "Wedge",
            price: 9.49,
          },
        ]
      },
      {
        food: "Turkey",
        optionsInline: [
          {
            option: "Roll",
            price: 8.99
          },
          {
            option: "Wedge",
            price: 10.49,
          },
        ]
      },
      {
        food: "Roast Beef",
        optionsInline: [
          {
            option: "Roll",
            price: 10.25
          },
          {
            option: "Wedge",
            price: 11.99,
          },
        ]
      },
      {
        food: "Pastrami",
        optionsInline: [
          {
            option: "Roll",
            price: 10.25
          },
          {
            option: "Wedge",
            price: 11.75,
          },
        ]
      },
      {
        food: "Genoa Salami",
        optionsInline: [
          {
            option: "Roll",
            price: 8.99
          },
          {
            option: "Wedge",
            price: 10.49,
          },
        ]
      },
      {
        food: "Corned Beef",
        optionsInline: [
          {
            option: "Roll",
            price: 10.25
          },
          {
            option: "Wedge",
            price: 11.75,
          },
        ]
      },
      {
        food: "Grilled Chicken",
        optionsInline: [
          {
            option: "Roll",
            price: 9.99
          },
          {
            option: "Wedge",
            price: 11.49,
          },
        ]
      },
      {
        food: "Chicken Salad",
        optionsInline: [
          {
            option: "Roll",
            price: 9.99
          },
          {
            option: "Wedge",
            price: 11.49,
          },
        ]
      },
      {
        food: "Tuna Salad",
        optionsInline: [
          {
            option: "Roll",
            price: 9.99
          },
          {
            option: "Wedge",
            price: 11.49,
          },
        ]
      },
      {
        food: "Egg Salad",
        optionsInline: [
          {
            option: "Roll",
            price: 8.99
          },
          {
            option: "Wedge",
            price: 10.49,
          },
        ]
      },
      {
        food: "Chicken Cutlet",
        optionsInline: [
          {
            option: "Roll",
            price: 9.99
          },
          {
            option: "Wedge",
            price: 11.49,
          },
        ]
      },
      {
        food: "Eggplant Parmigiana",
        optionsInline: [
          {
            option: "Roll",
            price: 9.99
          },
          {
            option: "Wedge",
            price: 11.49,
          },
        ]
      },
      {
        food: "Chicken Cutlet Parmigiana",
        optionsInline: [
          {
            option: "Roll",
            price: 9.99
          },
          {
            option: "Wedge",
            price: 11.49,
          },
        ]
      },
      {
        food: "Turkey or Ham and Cheese Croissant",
        price: 6.29,
      },
    ],
    extras: [
      {
        food: "Cheese",
        price: 0.5,
      },
      {
        food: "Mozz. & P. Jack",
        price: 0.75,
      },
      {
        food: "Tomato",
        price: 0.5,
      },
      {
        food: "Hot Peppers",
        price: 0.5,
      },
      {
        food: "Roasted Peppers",
        price: 0.5,
      },
      {
        food: "Coleslaw",
        price: 0.5,
      },
      {
        food: "Jalapeño",
        price: 0.5,
      },
      {
        food: "Bacon",
        price: 1.75,
      },
      {
        food: "Wraps",
        price: 1.0,
      },
      {
        food: "Croissant",
        price: 1.5,
      },
    ],
  },
  {
    name: "Paninis",
    foods: [
      {
        food: "(Served on Fresh Baked Focaccia)",
        price: 11.99,
        description:
          "Fresh Mozzarella, Roasted Peppers and Pesto with choice of: Grilled Chicken, Chicken Cutlet, Eggplant or Italian Combo",
      },
    ],
  },
  {
    name: "Salads",
    foods: [
      {
        food: "Mixed Greens",
        optionsInline: [
          {
            option: "S",
            price: 6.25,
          },
          {
            option: "L",
            price: 7.25,
          },
        ],
      },
      {
        food: "Mixed Greens",
        optionsInline: [
          {
            option: "S",
            price: 9.25,
          },
          {
            option: "L",
            price: 10.25,
          },
        ],
        description: "Choice of Chicken or Tuna",
      },
      {
        food: "Caesar",
        optionsInline: [
          {
            option: "S",
            price: 6.25,
          },
          {
            option: "L",
            price: 7.25,
          },
        ],
      },
      {
        food: "Ana's",
        optionsInline: [
          {
            option: "S",
            price: 8.50,
          },
          {
            option: "L",
            price: 9.50,
          },
        ],
        description:
          "Mixed Greens, Goat Cheese, Nuts, Dried Cranberries and Mandarin",
      },
      {
        food: "Chef",
        optionsInline: [
          {
            option: "S",
            price: 9.99,
          },
          {
            option: "L",
            price: 10.99,
          },
        ],
      },
      {
        food: "Greek",
        optionsInline: [
          {
            option: "S",
            price: 7.99,
          },
          {
            option: "L",
            price: 8.99,
          },
        ],
        description: "Feta Cheese, Stuffed Grape Leaves and Olives",
      },
      {
        food: "Cobb Salad",
        optionsInline: [
          {
            option: "S",
            price: 8.99,
          },
          {
            option: "L",
            price: 9.99,
          },
        ],
        description:
          "Feta Cheese, Crispy Bacon, Hard Boiled Egg, Corn on Mixed Greens and Tomato",
      },
      {
        food: "Salad Platter",
        optionsInline: [
          {
            option: "S",
            price: 7.99,
          },
          {
            option: "L",
            price: 8.99,
          },
        ],
        description: "Choice of Chicken, Tuna, Egg or Pasta Salad",
      },
    ],
  },
  {
    name: "Burgers & Sides",
    foods: [
      {
        food: "Burger Deluxe",
        price: 13.75,
      },
      {
        food: "6oz Fresh Beef Burger",
        price: 8.50,
      },
      {
        food: "Fried Egg Beef Burger",
        price: 8.25,
      },
      {
        food: "Veggie Burger",
        price: 7.50,
      },
      {
        food: "Quesadillas",
        price: 9.99,
        description: "Includes 3 Cheeses",
      },
      {
        food: "Chicken Quesadillas",
        price: 12.99,
      },
      {
        food: "Fries or Knish",
        price: 4.25,
      },
      {
        food: "Potato, Macaroni Salad or Coleslaw 1/2 LB",
        price: 4.99,
      },
    ],
  },
  {
    name: "Soups & Chili",
    foods: [
      {
        food: "Soup Du Jour",
        options: [
          {
            option: "16oz",
            price: 5.99,
          },
          {
            option: "32oz",
            price: 8.99,
          },
        ],
      },
      {
        food: "Turkey Chili",
        options: [
          {
            option: "16oz",
            price: 6.99,
          },
          {
            option: "32oz",
            price: 9.99,
          },
        ],
      },
    ],
  },
];
