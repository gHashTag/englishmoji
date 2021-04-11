const food = [
  {
    id: '0',
    name: ':green_apple:',
    title: 'apple',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/apple.mp3'
  },
  {
    id: '1',
    name: ':eggplant:',
    title: 'aubergine',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/aubergine.mp3'
  },
  {
    id: '2',
    name: ':baby_bottle:',
    title: 'baby bottle',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/baby_bottle.mp3'
  },
  {
    id: '3',
    name: ':bacon:',
    title: 'bacon',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/bacon.mp3'
  },
  {
    id: '4',
    name: ':baguette_bread:',
    title: 'baguette bread',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/baguette_bread.mp3'
  },
  {
    id: '5',
    name: ':banana:',
    title: 'banana',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/banana.mp3'
  },
  {
    id: '6',
    name: ':bento:',
    title: 'bento box',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/bento_box.mp3'
  },
  {
    id: '7',
    name: ':bread:',
    title: 'bread',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/bread.mp3'
  },
  {
    id: '8',
    name: ':broccoli:',
    title: 'broccoli',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/broccoli.mp3'
  },
  {
    id: '9',
    name: ':burrito:',
    title: 'burrito',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/burrito.mp3'
  },
  {
    id: '10',
    name: ':candy:',
    title: 'candy',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/candy.mp3'
  },
  {
    id: '11',
    name: ':canned_food:',
    title: 'canned food',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/canned_food.mp3'
  },
  {
    id: '12',
    name: ':carrot:',
    title: 'carrot',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/carrot.mp3'
  },
  {
    id: '13',
    name: ':cheese_wedge:',
    title: 'cheese',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/cheese.mp3'
  },
  {
    id: '14',
    name: ':cherries:',
    title: 'cherries',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/cherries.mp3'
  },
  {
    id: '15',
    name: ':chocolate_bar:',
    title: 'chocolate bar',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/chocolate_bar.mp3'
  },
  {
    id: '16',
    name: ':chopsticks:',
    title: 'chopsticks',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/chopsticks.mp3'
  },
  {
    id: '17',
    name: ':coconut:',
    title: 'coconut',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/coconut.mp3'
  },
  {
    id: '18',
    name: ':coffee:',
    title: 'coffee',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/coffee.mp3'
  },
  {
    id: '19',
    name: ':rice:',
    title: 'cooked rice',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/cooked_rice.mp3'
  },
  {
    id: '20',
    name: ':cookie:',
    title: 'cookie',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/cookie.mp3'
  },
  {
    id: '21',
    name: ':corn:',
    title: 'corn',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/corn.mp3'
  },
  {
    id: '22',
    name: ':croissant:',
    title: 'croissant',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/croissant.mp3'
  },
  {
    id: '23',
    name: ':cucumber:',
    title: 'cucumber',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/cucumber.mp3'
  },
  {
    id: '24',
    name: ':curry:',
    title: 'curry and rice',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/curry_and_rice.mp3'
  },
  {
    id: '25',
    name: ':custard:',
    title: 'custard',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/custard.mp3'
  },
  {
    id: '26',
    name: ':cut_of_meat:',
    title: 'cut of meat',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/cut_of_meat.mp3'
  },
  {
    id: '27',
    name: ':dango:',
    title: 'dango',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/dango.mp3'
  },
  {
    id: '28',
    name: ':doughnut:',
    title: 'doughnut',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/doughnut.mp3'
  },
  {
    id: '29',
    name: ':dumpling:',
    title: 'dumpling',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/dumpling.mp3'
  },
  {
    id: '30',
    name: ':egg:',
    title: 'egg',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/egg.mp3'
  },
  {
    id: '31',
    name: ':fork_and_knife:',
    title: 'fork and knife',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/fork_and_knife.mp3'
  },
  {
    id: '32',
    name: ':fortune_cookie:',
    title: 'fortune cookie',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/fortune_cookie.mp3'
  },
  {
    id: '33',
    name: ':fries:',
    title: 'french fries',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/french_fries.mp3'
  },
  {
    id: '34',
    name: ':fried_egg:',
    title: 'fried egg',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/fried_egg.mp3'
  },
  {
    id: '35',
    name: ':fried_shrimp:',
    title: 'fried shrimp',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/fried_shrimp.mp3'
  },
  {
    id: '36',
    name: ':glass_of_milk:',
    title: 'glass of milk',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/glass_of_milk.mp3'
  },
  {
    id: '37',
    name: ':grapes:',
    title: 'grapes',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/grapes.mp3'
  },
  {
    id: '38',
    name: ':green_salad:',
    title: 'green salad',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/green_salad.mp3'
  },
  {
    id: '39',
    name: ':hamburger:',
    title: 'hamburger',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/hamburger.mp3'
  },
  {
    id: '40',
    name: ':honey_pot:',
    title: 'honey pot',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/honey_pot.mp3'
  },
  {
    id: '41',
    name: ':hotdog:',
    title: 'hot dog',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/hot_dog.mp3'
  },
  {
    id: '42',
    name: ':ice_cream:',
    title: 'ice cream',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/ice_cream.mp3'
  },
  {
    id: '43',
    name: ':kiwifruit:',
    title: 'kiwi',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/kiwi.mp3'
  },
  {
    id: '44',
    name: ':knife_fork_plate:',
    title: 'knife fork plate',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/knife_fork_plate.mp3'
  },
  {
    id: '45',
    name: ':lemon:',
    title: 'lemon',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/lemon.mp3'
  },
  {
    id: '46',
    name: ':lollipop:',
    title: 'lollipop',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/lollipop.mp3'
  },
  {
    id: '47',
    name: ':meat_on_bone:',
    title: 'meat on bone',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/meat_on_bone.mp3'
  },
  {
    id: '48',
    name: ':melon:',
    title: 'melon',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/melon.mp3'
  },
  {
    id: '49',
    name: ':oden:',
    title: 'oden',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/oden.mp3'
  },
  {
    id: '50',
    name: ':pancakes:',
    title: 'pancakes',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/pancakes.mp3'
  },
  {
    id: '51',
    name: ':peach:',
    title: 'peach',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/peach.mp3'
  },
  {
    id: '52',
    name: ':peanuts:',
    title: 'peanuts',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/peanuts.mp3'
  },
  {
    id: '53',
    name: ':pear:',
    title: 'pear',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/pear.mp3'
  },
  {
    id: '54',
    name: ':hot_pepper:',
    title: 'pepper',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/pepper.mp3'
  },
  {
    id: '55',
    name: ':pie:',
    title: 'pie',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/pie.mp3'
  },
  {
    id: '56',
    name: ':pineapple:',
    title: 'pineapple',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/pineapple.mp3'
  },
  {
    id: '57',
    name: ':pizza:',
    title: 'pizza',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/pizza.mp3'
  },
  {
    id: '58',
    name: ':popcorn:',
    title: 'popcorn',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/popcorn.mp3'
  },
  {
    id: '59',
    name: ':potato:',
    title: 'potato',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/potato.mp3'
  },
  {
    id: '60',
    name: ':poultry_leg:',
    title: 'poultry leg',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/poultry_leg.mp3'
  },
  {
    id: '61',
    name: ':pretzel:',
    title: 'pretzel',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/pretzel.mp3'
  },
  {
    id: '62',
    name: ':rice_ball:',
    title: 'rice ball',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/rice_ball.mp3'
  },
  {
    id: '63',
    name: ':rice_cracker:',
    title: 'rice cracker',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/rice_cracker.mp3'
  },
  {
    id: '64',
    name: ':shaved_ice:',
    title: 'shaved ice',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/shaved_ice.mp3'
  },
  {
    id: '65',
    name: ':cake:',
    title: 'shortcake',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/shortcake.mp3'
  },
  {
    id: '66',
    name: ':icecream:',
    title: 'soft ice cream',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/soft_ice_cream.mp3'
  },
  {
    id: '67',
    name: ':spaghetti:',
    title: 'spaghetti',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/spaghetti.mp3'
  },
  {
    id: '68',
    name: ':spoon:',
    title: 'spoon',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/spoon.mp3'
  },
  {
    id: '69',
    name: ':strawberry:',
    title: 'strawberry',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/strawberry.mp3'
  },
  {
    id: '70',
    name: ':sushi:',
    title: 'sushi',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/sushi.mp3'
  },
  {
    id: '71',
    name: ':sweet_potato:',
    title: 'sweet potato',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/sweet_potato.mp3'
  },
  {
    id: '72',
    name: ':taco:',
    title: 'taco',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/taco.mp3'
  },
  {
    id: '73',
    name: ':takeout_box:',
    title: 'takeout box',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/takeout_box.mp3'
  },
  {
    id: '74',
    name: ':tangerine:',
    title: 'tangerine',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/tangerine.mp3'
  },
  {
    id: '75',
    name: ':tea:',
    title: 'tea',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/tea.mp3'
  },
  {
    id: '76',
    name: ':tomato:',
    title: 'tomato',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/tomato.mp3'
  },
  {
    id: '77',
    name: ':watermelon:',
    title: 'watermelon',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/02-Food/mp3/watermelon.mp3'
  }
]

module.exports = food
