const time = [
  {
    id: 0,
    name: ':clock1:',
    title: 'one oclock',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/10-Time/mp3/one_oclock.mp3',
    ru: 'Ð¾Ð´Ð¸Ð½ Ñ‡Ð°Ñ'
  },
  {
    id: 1,
    name: ':clock2:',
    title: 'two oclock',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/10-Time/mp3/two_oclock.mp3',
    ru: 'Ð´Ð²Ð° Ñ‡Ð°ÑÐ°'
  },
  {
    id: 2,
    name: ':clock3:',
    title: 'three oclock',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/10-Time/mp3/three_oclock.mp3',
    ru: 'Ñ‚Ñ€Ð¸ Ñ‡Ð°ÑÐ°'
  },
  {
    id: 3,
    name: ':clock4:',
    title: 'four oclock',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/10-Time/mp3/four_oclock.mp3',
    ru: 'Ñ‡ÐµÑ‚Ñ‹Ñ€Ðµ Ñ‡Ð°ÑÐ°'
  },
  {
    id: 4,
    name: ':clock5:',
    title: 'five oclock',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/10-Time/mp3/five_oclock.mp3',
    ru: 'Ð¿ÑÑ‚ÑŒ Ñ‡Ð°ÑÐ¾Ð²'
  },
  {
    id: 5,
    name: ':clock6:',
    title: 'six oclock',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/10-Time/mp3/six_oclock.mp3',
    ru: 'ÑˆÐµÑÑ‚ÑŒ Ñ‡Ð°ÑÐ¾Ð²'
  },
  {
    id: 6,
    name: ':clock7:',
    title: 'seven oclock',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/10-Time/mp3/seven_oclock.mp3',
    ru: 'ÑÐµÐ¼ÑŒ Ñ‡Ð°ÑÐ¾Ð²'
  },
  {
    id: 7,
    name: ':clock8:',
    title: 'eight oclock',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/10-Time/mp3/eight_oclock.mp3',
    ru: 'Ð²Ð¾ÑÐµÐ¼ÑŒ Ñ‡Ð°ÑÐ¾Ð²'
  },
  {
    id: 8,
    name: ':clock9:',
    title: 'nine oclock',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/10-Time/mp3/nine_oclock.mp3',
    ru: 'Ð´ÐµÐ²ÑÑ‚ÑŒ Ñ‡Ð°ÑÐ¾Ð²'
  },
  {
    id: 9,
    name: ':clock10:',
    title: 'ten oclock',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/10-Time/mp3/ten_oclock.mp3',
    ru: 'Ð´ÐµÑÑÑ‚ÑŒ Ñ‡Ð°ÑÐ¾Ð²'
  },
  {
    id: 10,
    name: ':clock11:',
    title: 'eleven oclock',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/10-Time/mp3/eleven_oclock.mp3',
    ru: 'Ð¾Ð´Ð¸Ð½Ð½Ð°Ð´Ñ†Ð°Ñ‚ÑŒ Ñ‡Ð°ÑÐ¾Ð²'
  },
  {
    id: 11,
    name: ':clock12:',
    title: 'twelve oclock',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/10-Time/mp3/twelve_oclock.mp3',
    ru: 'Ð´Ð²ÐµÐ½Ð°Ð´Ñ†Ð°Ñ‚ÑŒ Ñ‡Ð°ÑÐ¾Ð²'
  },
  {
    id: 12,
    name: ':clock130:',
    title: 'one-thirty',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/10-Time/mp3/one-thirty.mp3',
    ru: 'Ñ‡Ð°Ñ Ñ‚Ñ€Ð¸Ð´Ñ†Ð°Ñ‚ÑŒ'
  },
  {
    id: 13,
    name: ':clock230:',
    title: 'two-thirty',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/10-Time/mp3/two-thirty.mp3',
    ru: 'Ð´Ð²Ð° Ñ‚Ñ€Ð¸Ð´Ñ†Ð°Ñ‚ÑŒ'
  },
  {
    id: 14,
    name: ':clock330:',
    title: 'three-thirty',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/10-Time/mp3/three-thirty.mp3',
    ru: 'Ñ‚Ñ€Ð¸ Ñ‚Ñ€Ð¸Ð´Ñ†Ð°Ñ‚ÑŒ'
  },
  {
    id: 15,
    name: ':clock430:',
    title: 'four-thirty',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/10-Time/mp3/four-thirty.mp3',
    ru: 'Ñ‡ÐµÑ‚Ñ‹Ñ€Ðµ Ñ‚Ñ€Ð¸Ð´Ñ†Ð°Ñ‚ÑŒ'
  },
  {
    id: 16,
    name: ':clock530:',
    title: 'five-thirty',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/10-Time/mp3/five-thirty.mp3',
    ru: 'Ð¿ÑÑ‚ÑŒ Ñ‚Ñ€Ð¸Ð´Ñ†Ð°Ñ‚ÑŒ'
  },
  {
    id: 17,
    name: ':clock530:',
    title: 'five-thirty',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/10-Time/mp3/five-thirty.mp3',
    ru: 'Ð¿Ð¾Ð» ÑˆÐµÑÑ‚Ð¾Ð³Ð¾'
  },
  {
    id: 18,
    name: ':clock630:',
    title: 'six-thirty',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/10-Time/mp3/six-thirty.mp3',
    ru: 'ÑˆÐµÑÑ‚ÑŒ Ñ‚Ñ€Ð¸Ð´Ñ†Ð°Ñ‚ÑŒ'
  },
  {
    id: 19,
    name: ':clock730:',
    title: 'seven-thirty',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/10-Time/mp3/seven-thirty.mp3',
    ru: 'ÑÐµÐ¼ÑŒ Ñ‚Ñ€Ð¸Ð´Ñ†Ð°Ñ‚ÑŒ'
  },
  {
    id: 20,
    name: ':clock830:',
    title: 'eight-thirty',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/10-Time/mp3/eight-thirty.mp3',
    ru: 'Ð²Ð¾ÑÐµÐ¼ÑŒ Ñ‚Ñ€Ð¸Ð´Ñ†Ð°Ñ‚ÑŒ'
  },
  {
    id: 21,
    name: ':clock930:',
    title: 'nine-thirty',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/10-Time/mp3/nine-thirty.mp3',
    ru: 'Ð´ÐµÐ²ÑÑ‚ÑŒ Ñ‚Ñ€Ð¸Ð´Ñ†Ð°Ñ‚ÑŒ'
  },
  {
    id: 22,
    name: ':clock1030:',
    title: 'ten-thirty',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/10-Time/mp3/ten-thirty.mp3',
    ru: 'Ð´ÐµÑÑÑ‚ÑŒ Ñ‚Ñ€Ð¸Ð´Ñ†Ð°Ñ‚ÑŒ'
  },
  {
    id: 23,
    name: ':clock1130:',
    title: 'eleven-thirty',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/10-Time/mp3/eleven-thirty.mp3',
    ru: 'Ð¾Ð´Ð¸Ð½Ð½Ð°Ð´Ñ†Ð°Ñ‚ÑŒ Ñ‚Ñ€Ð¸Ð´Ñ†Ð°Ñ‚ÑŒ'
  },
  {
    id: 24,
    name: ':clock1230:',
    title: 'twelve-thirty',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/10-Time/mp3/twelve-thirty.mp3',
    ru: 'Ð´Ð²ÐµÐ½Ð°Ð´Ñ†Ð°Ñ‚ÑŒ Ñ‚Ñ€Ð¸Ð´Ñ†Ð°Ñ‚ÑŒ'
  }
]

module.exports = time
