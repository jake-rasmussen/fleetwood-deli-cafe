export type MenuSectionType = {
  name: string;
  foods: FoodType[];
  universalOptions?: FoodType[]
}

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
        price: 3.00
      },
      {
        food: "Egg, Bacon, Ham or Sausage",
        price: 4.75
      },
      {
        food: "Sausage",
        options: [
          {
            option: "Cheese",
            price: .50
          },
          {
            option: "Egg White",
            price: .75
          },
          {
            option: "Bagel",
            price: .50
          },
          {
            option: "Croissant",
            price: 1.50
          },
          {
            option: "Extra Egg",
            price: .75
          },
        ]
      },
      {
        food: "Bacon Egg and Cheese Wrap",
        price: 5.75,
        description: "2 Eggs, Bacon and Cheese"
      },
      {
        food: "Two Egg Platter",
        price: 5.95,
        description: "Includes Homefries or Hashbrowns & Toast"
      },
      {
        food: "Omelette, 1 Item",
        price: 6.95,
        description: "Includes Homefries or Hashbrowns & Toast"
      },
      {
        food: "Western Omelette",
        price: 8.95,
        description: "Includes Homefries or Hashbrowns & Toast"
      },
      {
        food: "Egg White Veggie Omelette",
        price: 9.95,
        description: "Includes Homefries or Hashbrowns & Toast"
      },
      {
        food: "Egg White Veggie Omelette",
        price: 9.95,
        options: [
          {
            option: "Add Bacon, Sausage or Ham",
            price: 1.75
          }
        ],
        description: "Made with Challah Bread"
      },
      {
        food: "French Toast",
        price: 8.49,
        options: [
          {
            option: "Add Bacon, Sausage or Ham",
            price: 1.75
          }
        ],
        description: "Made with Challah Bread"
      },
      {
        food: "Pancakes",
        price: 8.49,
        options: [
          {
            option: "Add Bacon, Sausage or Ham",
            price: 1.75
          }
        ],
      },
      {
        food: "Turkey Bacon or Chicken Sausage Available",
        price: 2.00,
      },
      {
        food: "Old Fashioned Oatmeal",
        optionsInline: [
          {
            option: "S",
            price: 3.99
          },
          {
            option: "L",
            price: 6.99
          }
        ],
        options: [
          {
            option: "Add Cranberries, Almonds or Cinnamon",
            price: 0.75
          }
        ]
      },
    ]
  },
  {
    name: "Bagels",
    foods: [
      {
        food: "Plain",
        price: 1.25
      },
      {
        food: "Bagel w/ Butter",
        price: 2.25
      },
      {
        food: "Bagel w/ Cream Cheese",
        price: 3.25
      },
      {
        food: "Flavored Cream Cheese",
        price: 3.75,
        description: "Scallion or Veggie"
      },
      {
        food: "Smoked Salmon",
        price: 11.95,
        description: "Lettuce, Tomato, Onion and Cream Cheese"
      },
    ]
  },
  {
    name: "Burgers & Sides",
    foods: [
      {
        food: "6oz Fresh Beef Burger",
        price: 7.99
      },
      {
        food: "Fried Egg Beef Burger",
        price: 8.49
      },
      {
        food: "Quesadillas",
        price: 9.99,
        description: "Includes 3 Cheeses"
      },
      {
        food: "Chicken Quesadillas",
        price: 12.99,
        options: [
          {
            option: "Additional Sides",
            price: 1.5
          }
        ]
      },
      {
        food: "Fries or Knish",
        price: 4.99,
      },
      {
        food: "Potato, Macaroni Salad or Coleslaw 1/2 LB",
        price: 4.99,
      },
    ]
  },
  {
    name: "Salads",
    foods: [
      {
        food: "Mixed Greens",
        optionsInline: [
          {
            option: "S",
            price: 5.99
          },
          {
            option: "L",
            price: 6.99
          }
        ]
      },
      {
        food: "Mixed Greens",
        optionsInline: [
          {
            option: "S",
            price: 9.74
          },
          {
            option: "L",
            price: 10.74
          }
        ],
        description: "Choice of Chicken or Tuna"
      },
      {
        food: "Casear",
        optionsInline: [
          {
            option: "S",
            price: 6.25,
          },
          {
            option: "L",
            price: 7.25
          }
        ]
      },
      {
        food: "Ana\'s",
        optionsInline: [
          {
            option: "S",
            price: 7.99,
          },
          {
            option: "L",
            price: 8.99
          }
        ],
        description: "Mixed Greens, Goat Cheese, Nuts, Dried Cranberries and Mandarin"
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
            price: 10.99
          }
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
            price: 8.99
          }
        ],
        description: "Feta Cheese, Stuffed Grape Leaves and Olives"
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
            price: 9.99
          }
        ],
        description: "Feta Cheese, Crispy Bacon, Hard Boiled Egg, Corn on Mixed Greens and Tomato"
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
            price: 8.99
          }
        ],
        description: "Choice of Chicken, Tuna, Egg or Pasta Salad"
      },
    ]
  },
  {
    name: "Paninis",
    foods: [
      {
        food: "(Served on Fresh Baked Focaccia)",
        price: 11.99,
        description: "Fresh Mozzarella, Roasted Peppers and Pesto with choice of: Grilled Chicken, Chicken Cutlet, Eggplant or Italian Combo"
      }
    ],
  },
  {
    name: "Fresh Brewed",
    foods: [
      {
        food: "Colombian Supremo Coffee",
        description: "Regular, Hazelnut or Decaf"
      },
      {
        food: "Lipton and Herbal Teas"
      },
      {
        food: "Cappucino or Latte"
      },
      {
        food: "Espresso"
      },
      {
        food: "Hot Chocolate"
      },
      {
        food: "Chai Tea"
      },
      {
        food: "Iced Coffee",
        description: "Regular, Hazelnut or Decaf"
      },
      {
        food: "Iced Tea"
      }
    ]
  },
  {
    name: "Sandwiches",
    foods: [
      {
        food: "Ham and Cheese",
        price: 8.99
      },
      {
        food: "Grilled Cheese",
        price: 5.29
      },
      {
        food: "BLT",
        price: 5.49
      },
      {
        food: "Bologna",
        price: 7.99
      },
      {
        food: "Turkey",
        price: 11.99
      },
      {
        food: "Roast Beef",
        price: 11.99
      },
      {
        food: "Pastrami",
        price: 11.99
      },
      {
        food: "Genoa Salami",
        price: 8.99
      },
      {
        food: "Corned Beef",
        price: 11.99
      },
      {
        food: "Grilled Chicken",
        price: 9.99
      },
      {
        food: "Chicken Salad",
        price: 9.99
      },
      {
        food: "Tuna Salad",
        price: 9.99
      },
      {
        food: "Egg Salad",
        price: 8.99,
      },
      {
        food: "Chicken Cutlet",
        price: 9.99
      },
      {
        food: "Eggplant Parmigiana",
        price: 9.99
      },
      {
        food: "Chicken Cutlet Parmigiana",
        price: 11.99
      },
      {
        food: "Turkey or Ham and Cheese Croissant",
        price: 5.99
      },
    ],
    universalOptions: [
      {
        food: "Cheese",
        price: 0.50
      },
      {
        food: "Mozz. & P. Jack",
        price: 0.75
      },
      {
        food: "Tomato",
        price: 0.50
      },
      {
        food: "Hot Peppers",
        price: 0.50
      },
      {
        food: "Roasted Peppers",
        price: 0.50
      },
      {
        food: "Coleslaw",
        price: 0.50
      },
      {
        food: "Jalapeño",
        price: 0.50
      },
      {
        food: "Bacon",
        price: 1.75
      },
      {
        food: "Wraps",
        price: 1.00
      },
      {
        food: "Croissant",
        price: 1.50
      },
      {
        food: "Wedge",
        price: 1.50
      },
    ]
  },

  {
    name: "Specialty Combo",
    foods: [
      {
        food: "The City Hall",
        optionsInline: [
          {
            option: "Roll",
            price: 10.49
          },
          {
            option: "Wedge",
            price: 11.99
          },
        ],
        description: "Pastrami, Swiss, Russian, Coleslaw"
      },
      {
        food: "The Gramatan",
        optionsInline: [
          {
            option: "Roll",
            price: 10.49
          },
          {
            option: "Wedge",
            price: 11.99
          },
        ],
        description: "Chicken Cutlet, Lettuce, Tomato, Red Onion, Russian"
      },
      {
        food: "The Empire",
        optionsInline: [
          {
            option: "Roll",
            price: 10.49
          },
          {
            option: "Wedge",
            price: 11.99
          },
        ],
        description: "Grilled Chicken, Mixed Greens, Hot Peppers, Fresh Mozzarella, Balsamic Vinaigrette"
      },
      {
        food: "The Lite Weight Wrap",
        price: 10.99,
        description: "Turkey, Swiss, Lettuce, Tomato, Honey Mustard"
      },
      {
        food: "Grilled Veggie / Hummus wrap",
        price: 8.95,
      },
      {
        food: "El Gringo Wrap",
        price: 9.99,
        description: "Chipotle Chicken Salad and Bacon"
      },
      {
        food: "The Big Bite",
        price: 11.95,
        description: "Corned Beef, Turkey Swiss and Russian Slaw on a Wedge"
      },
      {
        food: "Grilled \"Puebla\" Chicken",
        price: 11.99,
        description: "Includes Fried Egg and Cheddar on Wedge"
      },
      {
        food: "Italian or American Wedge",
        price: 11.99
      },
      {
        food: "Papo V\'s Philly Cheese Steak",
        price: 12.99,
        description: "Sliced Steak Smothered in Onions and Melted Cheese on Wedge"
      },
      {
        food: "Benny\'s Special",
        price: 11.95,
        description: "Chicken Cutlet, Bacon, Pepper Jack Cheese, Lettuce, Tomato and Chipotle Mayo on Wedge"
      },
      {
        food: "Eggplant Wrap",
        price: 9.99,
        description: "Eggplant, Fresh Mozzarella, Roasted Peppers and Balsamic Vinaigrette"
      }
    ]
  },
  {
    name: "Soups & Chili",
    foods: [
      {
        food: "Soup Du Jour",
        options: [
          {
            option: "16oz",
            price: 5.99
          },
          {
            option: "32oz",
            price: 8.99
          }
        ]
      },
      {
        food: "Turkey Chili",
        options: [
          {
            option: "16oz",
            price: 6.99
          },
          {
            option: "32oz",
            price: 9.99
          }
        ]
      }
    ],
  },
]