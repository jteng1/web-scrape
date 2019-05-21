// Web Scraper to pull food data from http://whatcandogseat.com/
// Example search url = http://whatcandogseat.com/Search/Search?item=Bones-(Raw)

let list = `Bones (Raw)
Apple
Pink Lady Apple
Granny Smith Apple
Fuji Apple
Royal Gala Apple
Avocado
Alcohol (All Varieties)
Arugula
Almonds
Anchovies
Apricot
Artichoke
Asparagus
Aioli
Aubergine (Eggplant)
Apple Pie
Bananas
Chili Beans
Baked Beans
Beans
Kidney Beans
Cannellini Beans
Black Beans
Pinto Beans
Lima Beans
Basil
Beef (Cooked)
Beef (Raw)
Bones (Cooked)
Beer
Bok Choy
Blackberries
Blueberries
Broccoli
Bread
Beetroot
Beets
Brandy
Burger
Hamburger
Cheeseburger
Butter
Bacon
Biscuits (Sweet)
Cookies
Shortbread Cookies
Biscuits (Savoury)
Barbeque Sauce
BBQ Sauce
Brioche
Fruit Bun
Easter Bun
Hot Cross Bun
Bagel (Plain)
Burrito
Beef Jerky
Baguette
Cabbage
Red Cabbage
Cantaloupe
Rockmelon
Carrot
Cashews
Cauliflower
Celery
Cereal
Breakfast Cereal
Granola
Champagne
Goats Cheese
Cheddar Cheese
Blue Cheese
Parmesan Cheese
Mozzarella Cheese
Ricotta Cheese
Edam Cheese
Cottage Cheese
Cream Cheese
Soy Cheese
Romano Cheese
Swiss Cheese
Chicken Breast (Raw)
Chicken Necks (Raw)
Chicken Wings (Raw)
Chicken Schnitzel
Chicken Nuggets
Fried Chicken
Chicken (Cooked)
Cherries
Chickpeas (Cooked)
Chives
Chocolate (All Varieties)
Energy Drinks
Coffee
Coffee Beans
Collard Greens
Creamed Corn
Corn
Maize
Corn on the Cob
Sweet Corn
Coriander
Cilantro
Couscous
Crab Meat
Cranberries
Currants
Cucumber
Red Capsicum
Red Pepper
Green Capsicum
Green Pepper
Yellow Capsicum
Yellow Pepper
Bell Peppers
Sweet Peppers
Red Chili
Green Chili
Hot Chips
French Fries
Fries
Potato Fries
Potato Chips
Potato Crisps
Crisps
Chips (All Varieties)
Pringles
Coconut
Cabanossi
Cake (All Varieties)
Crumb Cake
Curry (All Varieties)
Dates
Dill
Donuts
Doughnuts
Dumplings
Dip (All Varieties)
Edamame
Cooked Egg
Cooked Eggs
Raw Egg
Raw Eggs
Endive
Enchiladas
Figs
Flaxseed
Flour (All Varieties)
Frozen Yoghurt
Frozen Yogurt
Focaccia Bread
Fish (Cooked)
Fish (Raw)
Calamari (Raw)
Squid (Raw)
Fruit Cake
Fruit Mince Pie
Fruit Mince Tart
Christmas Pudding
Garlic
Gin
Ginger
Grapefruit
Grapes
Green Beans
Guacamole
Guava
Gravy
Golden Syrup
Grits
Graham Crackers
Garlic Bread
Ham
Hazelnuts
Honey
Hot Sauce
Hummus
Hommus
Hot Dog Frankfurt
Frankfurt
Frankfurter
Deli Frankfurt
Frankfurts
Saveloy
Saveloys
Horseradish
Hash Browns
Tater Tots
Potato Gems
Ice Cream
Jam
Jelly
Juice (All Varieties)
Fruit Juice (All Varieties)
Apple Juice
Orange Juice
Jalapeno
Kale
Ketchup
Tomato Sauce
Kiwi Fruit
Lamb (Cooked)
Lamb (Raw)
Limes
Leeks
Lettuce
Lentils
Lemon
Lychees
Gummy Worms
Lollies
Candy
Candies
Sweets
Jubes
Jelly Lollies
Smores/S'mores
Marshmallows
Lasagne
Mangoes
Margarine Spread
Mayonnaise
Mayo
Almond Milk
Cows Milk (Whole or Full Fat)
Cows Milk (Skim or Fat Free)
Cows Milk (Lite or Light or Low Fat)
Rice Milk
Goats Milk
Soy Milk
Mint
Mushrooms
Dijon Mustard
Mustard (Hot)
Mustard (Mild)
Mandarins
Maple Syrup
Muffins (All Varieties)
English Muffins
Meatballs
Milkshake
Nectarines
Brazil Nuts
Macadamia Nuts
Pine Nuts
Pistachio Nuts
Naan Bread
Noodles
Oats (Cooked)
Oatmeal (Cooked)
Porridge
Canola Oil
Olive Oil
Sesame Oil
Coconut Oil
Walnut Oil
Okra
Olives
Onions
Red Onion
White Onion
Brown Onion
Oranges
Clementine
Oregano
Oysters
Pancakes
Papaya
Paprika
Parsley
Parsnip
Pasta
Spaghetti (Plain)
Peaches
Peanuts
Peanut Butter
Pears
Green Peas
Snow Peas
Sugar Snap Peas
Pecans
Chili Peppers
Pepperoncini
Wasabi
Persimmons
Pineapple
Pita Bread
Plums
White Potato (Cooked)
Mashed Potato
Boiled Red Potato
Boiled White Potato
Sweet Potato
Pumpkin (All Varieties)
Prunes
Meat Pie
Vegetable Pie
Chicken Pie
Potato Bake
Potato Gratin
Burger Patty
Meat Patty
Vegie Patty
Vegie Burger
Vegetable Patty
Vegetable Burger
Pancetta
Pastrami
Prosciutto
Deli Sandwich Meats
Cold Cut Sandwich Meat
Cold Cuts
Pork (Raw)
Pork (Cooked)
Pizza (All Varieties)
Pepperoni
Movie Popcorn
Candy Corn
Caramel Popcorn
Plain Popcorn
Quinoa
Quiche
Radicchio
Raisins
Raspberries
Rhubarb
Brown Rice
Rice
White Rice
Sushi Rice
Wild Rice
Rice Cakes
Rice Crackers
Saltine Crackers
Rosemary
Rum
Bourbon
Whisky
Vodka
Rutabaga
Rissoles
Salmon
Sage
Salsa
Sausages
Sausage
Sausage Patty
Chorizo
Bratwurst
Salt
Scallops
Potato Scallops
Potato Cakes
Seaweed
Nori
Dried Seaweed
Sesame Seeds
Pumpkin Seeds
Sunflower Seeds
Scallions
Shallots
Shellfish
Sherry
Shrimp (Cooked)
Prawns (Cooked)
Shrimp (Raw)
Prawns (Raw)
Sour Cream
Soy Beans
Soy Crisps
Soy Sauce
Spinach
Squash
Steak (Raw)
Steak (Cooked)
Strawberries
White Sugar
Icing Sugar
Brown Sugar
Salami
Bologna
Devon
Sultanas
Sushi (All Varieties)
Spaghetti Sauce
Bolognaise
Spaghetti Bolognaise
Tangerines
Black Tea
Green Tea
Decaf Tea
Herbal Tea
Toast (Fruit or Raisin)
Tempeh
Tofu
Sun-dried Tomatoes
Sun dried Tomatoes
Tomatoes (Fresh/Ripe)
Tomato Paste
Corn Tortillas
Flour Tortillas
Tuna (Raw Skinless & Boneless)
Tuna (Cooked Skinless & Boneless)
Turkey (Raw Lean)
Turkey (Cooked Boneless Skinless & Fat Removed)
Toast (Plain)
Apple Cidar Vinegar (Diluted)
Balsamic Vinegar
Venison (Cooked)
Vegemite
Waffles
Walnuts
Watercress
Watermelon
Weet-Bix
Red Wine
White Wine
Worcestershire Sauce
Yams
Flavoured Yoghurt
Flavored Yogurt
Plain Yoghurt
Plain Yogurt
Greek Yogurt
Greek Yoghurt
Zucchini
Chewing Gum
Mints
Breath Mints
Toothpaste
Mouthwash
Peppermints
Pastries
Sticky Buns
Finger Buns
Fat (from Cooked Meat)
Nutmeg
Baking Soda
Baking Powder
Human Vitamins
Human Supplements
Meat Sauce
Sardines (Canned)
Herring (Cooked)
Mackerel (Cooked)
Peppermint (Fresh leaves)
Spring Parsley
Starfruit
Turnip
Pickles
Dill Pickles
Cat Food
Nutella
Hazlenut Spread
Chocolate Spread
Nut Spread
Pretzels
Bread Dough
Dough
Yeast Dough
Kebab
Corn Dog
Pluto Pup
Fajita
Moussaka
Cornbread
Pulled Pork
Nachos
Stew
Chowder
Casseroles
Brisket
Rissotto
Pecan Pie
Fizzy Pop (All Varieties)
Soda (All Varieties)
Soft Drink (All Varieties)
Fizzy Drink (All Varieties)
Ginger Beer
Sugar Free Candy
Sugar Free Gum
Sugar Free Lollies
Spam
Macaroni and Cheese
Pomegranate
Cream
Whipped Cream
Cool-Whip
Redi-Whip
Cinnamon
Pork Pie
Rabbit (Cooked)
Rabbit (Raw)
Coleslaw
Topping
Chocolate Topping
Strawberry Topping
Caramel Topping
Custard
Caesar Salad
Potato Salad
Salad Dressing
Ranch Dressing
Caesar Dressing
Thousand Island Dressing
Hollandaise Sauce
Bechamel Sauce
Bernaise Sauce
Quinoa
Chicken Necks (Cooked)
Chicken Wings (Cooked)
Pumpkin Pie
Processed Cheese Slices
Cookie Dough
Breakfast Sandwich
Egg and Bacon Muffin
Egg and Bacon Sandwich
Corn Nuts
Corned Beef
Silverside
Brussel Sprouts
Bay Leaf
Kefir
Quorn Products
Chia Seeds
Honeydew Melon
Honey dew Melon
Rockmelon
Passionfruit
Passion Fruit
Swiss Chard
Lemongrass
Lemon Grass
Plantain
Bean sprouts
Alfalfa Sprouts
Mung Bean Sprouts
Wheat Germ
Bouillon
Stock Cubes
Mustard Greens
Barley
Black Eyed Peas
Sauerkraut
Fish Fingers
Cheese-Its
Cheese Its
Cheez-Its
Twisties
Pate
Toffee
Toffee Apple
Raw Potato
Multigrain Bread
White Bread
Wholemeal Bread
Combos
Pesto
Ice Block
Ice Lolly
Popsicle
Soup
Yorkshire Pudding
Ham Hock
Pork Knuckle
White Vinegar
Tarragon
Thyme
Fennel
Grapeseed Oil
Lavender
Jicama
Radish
Lactaid
Lactose Free Milk
Tea Tree Oil
Black Pepper
Pepper
Mulberries
Molasses
Sugar Ice Cream Cones
Waffle Cone
Waffle Icecream Cone
Smoked Salmon
Tumeric
Vanilla Extract
Vanilla
Coconut Water
Coconut Juice
Licorice
Liquorice
Cream of Wheat
Farina
Bacon Grease
Bacon Fat`;

let foodList = list.split(/\n/);

module.exports = createList = () => {
  let searchTerms = [];
  for (let i = 0; i < foodList.length; i++) {
    searchTerms.push(foodList[i].replace(/ /g, "-"));
  }
  return searchTerms;
};
