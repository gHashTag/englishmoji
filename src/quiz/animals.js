const animals = [
  {
    id: '1',
    name: ':ant:',
    title: 'ant',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/ant.mp3'
  },
  {
    id: '2',
    name: ':baby_chick:',
    title: 'baby chick',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/baby_chick.mp3'
  },
  {
    id: '3',
    name: ':bat:',
    title: 'bat',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/bat.mp3'
  },
  {
    id: '4',
    name: ':bee:',
    title: 'bee',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/bee.mp3'
  },
  {
    id: '5',
    name: ':bird:',
    title: 'bird',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/bird.mp3'
  },
  {
    id: '6',
    name: ':boar:',
    title: 'boar',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/boar.mp3'
  },
  {
    id: '7',
    name: ':water_buffalo:',
    title: 'buffalo',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/buffalo.mp3'
  },
  {
    id: '8',
    name: ':butterfly:',
    title: 'butterfly',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/butterfly.mp3'
  },
  {
    id: '9',
    name: ':camel:',
    title: 'camel',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/camel.mp3'
  },
  {
    id: '10',
    name: ':cat2:',
    title: 'cat',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/cat.mp3'
  },
  {
    id: '11',
    name: ':bug:',
    title: 'caterpillar',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/caterpillar.mp3'
  },
  {
    id: '12',
    name: ':chicken:',
    title: 'chicken',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/chicken.mp3'
  },
  {
    id: '13',
    name: ':cow2:',
    title: 'cow',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/cow.mp3'
  },
  {
    id: '14',
    name: ':crab:',
    title: 'crab',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/crab.mp3'
  },
  {
    id: '15',
    name: ':crocodile:',
    title: 'crocodile',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/crocodile.mp3'
  },
  {
    id: '16',
    name: ':deer:',
    title: 'deer',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/deer.mp3'
  },
  {
    id: '17',
    name: ':dog2:',
    title: 'dog',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/dog.mp3'
  },
  {
    id: '18',
    name: ':dolphin:',
    title: 'dolphin',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/dolphin.mp3'
  },
  {
    id: '19',
    name: ':dragon:',
    title: 'dragon',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/dragon.mp3'
  },
  {
    id: '20',
    name: ':eagle:',
    title: 'eagle',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/eagle.mp3'
  },
  {
    id: '21',
    name: ':elephant:',
    title: 'elephant',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/elephant.mp3'
  },
  {
    id: '22',
    name: ':fish:',
    title: 'fish',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/fish.mp3'
  },
  {
    id: '23',
    name: ':giraffe_face:',
    title: 'giraffe',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/giraffe.mp3'
  },
  {
    id: '24',
    name: ':goat:',
    title: 'goat',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/goat.mp3'
  },
  {
    id: '25',
    name: ':hedgehog:',
    title: 'hedgehog',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/hedgehog.mp3'
  },
  {
    id: '26',
    name: ':racehorse:',
    title: 'horse',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/horse.mp3'
  },
  {
    id: '27',
    name: ':koala:',
    title: 'koala',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/koala.mp3'
  },
  {
    id: '28',
    name: ':beetle:',
    title: 'lady beetle',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/lady_beetle.mp3'
  },
  {
    id: '29',
    name: ':leopard:',
    title: 'leopard',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/leopard.mp3'
  },
  {
    id: '30',
    name: ':lizard:',
    title: 'lizard',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/lizard.mp3'
  },
  {
    id: '31',
    name: ':monkey:',
    title: 'monkey',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/monkey.mp3'
  },
  {
    id: '32',
    name: ':mouse2:',
    title: 'mouse',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/mouse.mp3'
  },
  {
    id: '33',
    name: ':octopus:',
    title: 'octopus',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/octopus.mp3'
  },
  {
    id: '34',
    name: ':owl:',
    title: 'owl',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/owl.mp3'
  },
  {
    id: '35',
    name: ':ox:',
    title: 'ox',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/ox.mp3'
  },
  {
    id: '36',
    name: ':feet:',
    title: 'paw prints',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/paw_prints.mp3'
  },
  {
    id: '37',
    name: ':penguin:',
    title: 'penguin',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/penguin.mp3'
  },
  {
    id: '38',
    name: ':pig2:',
    title: 'pig',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/pig.mp3'
  },
  {
    id: '39',
    name: ':poodle:',
    title: 'poodle',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/poodle.mp3'
  },
  {
    id: '40',
    name: ':rabbit2:',
    title: 'rabbit',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/rabbit.mp3'
  },
  {
    id: '41',
    name: ':ram:',
    title: 'ram',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/ram.mp3'
  },
  {
    id: '42',
    name: ':rat:',
    title: 'rat',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/rat.mp3'
  },
  {
    id: '43',
    name: ':rhinoceros:',
    title: 'rhinoceros',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/rhinoceros.mp3'
  },
  {
    id: '44',
    name: ':rooster:',
    title: 'rooster',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/rooster.mp3'
  },
  {
    id: '45',
    name: ':sauropod:',
    title: 'sauropod',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/sauropod.mp3'
  },
  {
    id: '46',
    name: ':scorpion:',
    title: 'scorpion',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/scorpion.mp3'
  },
  {
    id: '47',
    name: ':shark:',
    title: 'shark',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/shark.mp3'
  },
  {
    id: '48',
    name: ':sheep:',
    title: 'sheep',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/sheep.mp3'
  },
  {
    id: '49',
    name: ':shell:',
    title: 'shell',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/shell.mp3'
  },
  {
    id: '50',
    name: ':shrimp:',
    title: 'shrimp',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/shrimp.mp3'
  },
  {
    id: '51',
    name: ':snail:',
    title: 'snail',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/snail.mp3'
  },
  {
    id: '52',
    name: ':snake:',
    title: 'snake',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/snake.mp3'
  },
  {
    id: '53',
    name: ':squid:',
    title: 'squid',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/squid.mp3'
  },
  {
    id: '54',
    name: ':chipmunk:',
    title: 'squirrel',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/squirrel.mp3'
  },
  {
    id: '55',
    name: ':t-rex:',
    title: 't-rex',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/t-rex.mp3'
  },
  {
    id: '56',
    name: ':tiger2:',
    title: 'tiger',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/tiger.mp3'
  },
  {
    id: '57',
    name: ':turkey:',
    title: 'turkey',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/turkey.mp3'
  },
  {
    id: '58',
    name: ':turtle:',
    title: 'turtle',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/turtle.mp3'
  },
  {
    id: '59',
    name: ':unicorn_face:',
    title: 'unicorn',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/unicorn.mp3'
  },
  {
    id: '60',
    name: ':whale2:',
    title: 'whale',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/whale.mp3'
  },
  {
    id: '61',
    name: ':zebra_face:',
    title: 'zebra',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/03-Animals/mp3/zebra.mp3'
  }
]

module.exports = animals
