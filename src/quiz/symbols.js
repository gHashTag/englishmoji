const symbols = [
  {
    id: 0,
    name: ':anchor:',
    title: 'anchor',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/anchor.mp3',
    ru: 'ÑÐºÐ¾Ñ€ÑŒ'
  },
  {
    id: 1,
    name: ':aquarius:',
    title: 'aquarius',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/aquarius.mp3',
    ru: 'Ð²Ð¾Ð´Ð¾Ð»ÐµÐ¹'
  },
  {
    id: 2,
    name: ':aries:',
    title: 'aries',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/aries.mp3',
    ru: 'Ð¾Ð²ÐµÐ½'
  },
  {
    id: 3,
    name: ':atom_symbol:',
    title: 'atom',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/atom.mp3',
    ru: 'Ð°Ñ‚Ð¾Ð¼'
  },
  {
    id: 4,
    name: ':baby_symbol:',
    title: 'baby',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/baby.mp3',
    ru: 'Ð´ÐµÑ‚ÐºÐ°'
  },
  {
    id: 5,
    name: ':baggage_claim:',
    title: 'baggage claim',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/baggage_claim.mp3',
    ru: 'Ð¿Ð¾Ð»ÑƒÑ‡ÐµÐ½Ð¸Ðµ Ð±Ð°Ð³Ð°Ð¶Ð°'
  },
  {
    id: 6,
    name: ':heartbeat:',
    title: 'beating heart',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/beating_heart.mp3',
    ru: 'Ð±ÑŒÑŽÑ‰ÐµÐµÑÑ ÑÐµÑ€Ð´Ñ†Ðµ'
  },
  {
    id: 7,
    name: ':beginner:',
    title: 'beginner',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/beginner.mp3',
    ru: 'Ð½Ð¾Ð²Ð¸Ñ‡Ð¾Ðº'
  },
  {
    id: 8,
    name: ':biohazard_sign:',
    title: 'biohazard sign',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/biohazard_sign.mp3',
    ru: 'Ð·Ð½Ð°Ðº Ð±Ð¸Ð¾Ð»Ð¾Ð³Ð¸Ñ‡ÐµÑÐºÐ¾Ð¹ Ð¾Ð¿Ð°ÑÐ½Ð¾ÑÑ‚Ð¸'
  },
  {
    id: 10,
    name: ':low_brightness:',
    title: 'brightness',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/brightness.mp3',
    ru: 'ÑÑ€ÐºÐ¾ÑÑ‚ÑŒ'
  },
  {
    id: 11,
    name: ':cancer:',
    title: 'cancer',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/cancer.mp3',
    ru: 'Ñ€Ð°Ðº'
  },
  {
    id: 12,
    name: ':capricorn:',
    title: 'capricorn',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/capricorn.mp3',
    ru: 'ÐºÐ¾Ð·ÐµÑ€Ð¾Ð³'
  },
  {
    id: 13,
    name: ':parking:',
    title: 'car parking',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/car_parking.mp3',
    ru: 'Ð°Ð²Ñ‚Ð¾Ð¼Ð¾Ð±Ð¸Ð»ÑŒÐ½Ð°Ñ ÑÑ‚Ð¾ÑÐ½ÐºÐ°'
  },
  {
    id: 14,
    name: ':children_crossing:',
    title: 'children crossing',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/children_crossing.mp3',
    ru: 'Ð´ÐµÑ‚Ð¸ Ð¿ÐµÑ€ÐµÑ…Ð¾Ð´ÑÑ‚'
  },
  {
    id: 15,
    name: ':clubs:',
    title: 'clubs',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/clubs.mp3',
    ru: 'ÐºÐ»ÑƒÐ±Ñ‹'
  },
  {
    id: 16,
    name: ':copyright:',
    title: 'copyright',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/copyright.mp3',
    ru: 'Ð°Ð²Ñ‚Ð¾Ñ€ÑÐºÐ¾Ðµ Ð¿Ñ€Ð°Ð²Ð¾'
  },
  {
    id: 17,
    name: ':crossed_swords:',
    title: 'crossed swords',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/crossed_swords.mp3',
    ru: 'ÑÐºÑ€ÐµÑ‰ÐµÐ½Ð½Ñ‹Ðµ Ð¼ÐµÑ‡Ð¸'
  },
  {
    id: 18,
    name: ':currency_exchange:',
    title: 'currency exchange',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/currency_exchange.mp3',
    ru: 'Ð¾Ð±Ð¼ÐµÐ½ Ð²Ð°Ð»ÑŽÑ‚'
  },
  {
    id: 19,
    name: ':customs:',
    title: 'customs',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/customs.mp3',
    ru: 'Ñ‚Ð°Ð¼Ð¾Ð¶Ð½Ñ'
  },
  {
    id: 20,
    name: ':do_not_litter:',
    title: 'do not litter',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/do_not_litter.mp3',
    ru: 'Ð½Ðµ ÑÐ¾Ñ€Ð¸Ñ‚ÑŒ'
  },
  {
    id: 21,
    name: ':loop:',
    title: 'double curly loop',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/double_curly_loop.mp3',
    ru: 'Ð´Ð²Ð¾Ð¹Ð½Ð°Ñ Ñ„Ð¸Ð³ÑƒÑ€Ð½Ð°Ñ Ð¿ÐµÑ‚Ð»Ñ'
  },
  {
    id: 22,
    name: ':dove_of_peace:',
    title: 'dove of peace',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/dove_of_peace.mp3',
    ru: 'Ð³Ð¾Ð»ÑƒÐ±ÑŒ Ð¼Ð¸Ñ€Ð°'
  },
  {
    id: 24,
    name: ':e-mail:',
    title: 'e-mail',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/e-mail.mp3',
    ru: 'ÑÐ». Ð¿Ð¾Ñ‡Ñ‚Ð°'
  },
  {
    id: 25,
    name: ':female_sign:',
    title: 'female sign',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/female_sign.mp3',
    ru: 'Ð¶ÐµÐ½ÑÐºÐ¸Ð¹ Ð·Ð½Ð°Ðº'
  },
  {
    id: 26,
    name: ':gemini:',
    title: 'gemini',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/gemini.mp3',
    ru: 'Ð±Ð»Ð¸Ð·Ð½ÐµÑ†Ñ‹'
  },
  {
    id: 27,
    name: ':globe_with_meridians:',
    title: 'globe with meridians',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/globe_with_meridians.mp3',
    ru: 'Ð³Ð»Ð¾Ð±ÑƒÑ Ñ Ð¼ÐµÑ€Ð¸Ð´Ð¸Ð°Ð½Ð°Ð¼Ð¸'
  },
  {
    id: 28,
    name: ':hammer_and_pick:',
    title: 'hammer and pick',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/hammer_and_pick.mp3',
    ru: 'Ð¼Ð¾Ð»Ð¾Ñ‚Ð¾Ðº Ð¸ ÐºÐ¸Ñ€ÐºÐ°'
  },
  {
    id: 29,
    name: ':hammer_and_wrench:',
    title: 'hammer and wrench',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/hammer_and_wrench.mp3',
    ru: 'Ð¼Ð¾Ð»Ð¾Ñ‚Ð¾Ðº Ð¸ Ð³Ð°ÐµÑ‡Ð½Ñ‹Ð¹ ÐºÐ»ÑŽÑ‡'
  },
  {
    id: 30,
    name: ':hearts:',
    title: 'hearts',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/hearts.mp3',
    ru: 'ÑÐµÑ€Ð´Ñ†Ð°'
  },
  {
    id: 31,
    name: ':heavy_check_mark:',
    title: 'heavy check mark',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/heavy_check_mark.mp3',
    ru: 'Ð¶Ð¸Ñ€Ð½Ð°Ñ Ð³Ð°Ð»Ð¾Ñ‡ÐºÐ°'
  },
  {
    id: 32,
    name: ':heavy_division_sign:',
    title: 'heavy division sign',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/heavy_division_sign.mp3',
    ru: 'Ð·Ð½Ð°Ðº Ð´ÐµÐ»ÐµÐ½Ð¸Ñ'
  },
  {
    id: 33,
    name: ':exclamation:',
    title: 'heavy exclamation mark',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/heavy_exclamation_mark.mp3',
    ru: 'Ð¶Ð¸Ñ€Ð½Ñ‹Ð¹ Ð²Ð¾ÑÐºÐ»Ð¸Ñ†Ð°Ñ‚ÐµÐ»ÑŒÐ½Ñ‹Ð¹ Ð·Ð½Ð°Ðº'
  },
  {
    id: 34,
    name: ':heavy_minus_sign:',
    title: 'heavy minus sign',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/heavy_minus_sign.mp3',
    ru: 'Ð·Ð½Ð°Ðº Ð¼Ð¸Ð½ÑƒÑ'
  },
  {
    id: 35,
    name: ':heavy_plus_sign:',
    title: 'heavy plus sign',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/heavy_plus_sign.mp3',
    ru: 'Ð·Ð½Ð°Ðº Ð¿Ð»ÑŽÑ'
  },
  {
    id: 36,
    name: ':zap:',
    title: 'high voltage sign',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/high_voltage_sign.mp3',
    ru: 'Ð·Ð½Ð°Ðº Ð²Ñ‹ÑÐ¾ÐºÐ¾Ð³Ð¾ Ð½Ð°Ð¿Ñ€ÑÐ¶ÐµÐ½Ð¸Ñ'
  },
  {
    id: 37,
    name: ':hotsprings:',
    title: 'hotsprings',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/hotsprings.mp3',
    ru: 'Ð³Ð¾Ñ€ÑÑ‡Ð¸Ðµ Ð¸ÑÑ‚Ð¾Ñ‡Ð½Ð¸ÐºÐ¸'
  },
  {
    id: 38,
    name: ':100:',
    title: 'hundred points',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/hundred_points.mp3',
    ru: '100 Ð¾Ñ‡ÐºÐ¾Ð²'
  },
  {
    id: 39,
    name: ':information_source:',
    title: 'information source',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/information_source.mp3',
    ru: 'Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸Ð¾Ð½Ð½Ñ‹Ð¹ Ñ€ÐµÑÑƒÑ€Ñ'
  },
  {
    id: 40,
    name: ':latin_cross:',
    title: 'latin cross',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/latin_cross.mp3',
    ru: 'Ð»Ð°Ñ‚Ð¸Ð½ÑÐºÐ¸Ð¹ ÐºÑ€ÐµÑÑ‚'
  },
  {
    id: 42,
    name: ':leo:',
    title: 'leo',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/leo.mp3',
    ru: 'Ð»ÐµÐ²'
  },
  {
    id: 43,
    name: ':libra:',
    title: 'libra',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/libra.mp3',
    ru: 'Ð²ÐµÑÑ‹'
  },
  {
    id: 44,
    name: ':loud_sound:',
    title: 'loud sound',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/loud_sound.mp3',
    ru: 'Ð³Ñ€Ð¾Ð¼ÐºÐ¸Ð¹ Ð·Ð²ÑƒÐº'
  },
  {
    id: 45,
    name: ':male_sign:',
    title: 'male sign',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/male_sign.mp3',
    ru: 'Ð¼ÑƒÐ¶ÑÐºÐ¾Ð¹ Ð·Ð½Ð°Ðº'
  },
  {
    id: 46,
    name: ':medical_symbol:',
    title: 'medical',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/medical.mp3',
    ru: 'Ð¼ÐµÐ´Ð¸Ñ†Ð¸Ð½ÑÐºÐ¸Ð¹'
  },
  {
    id: 47,
    name: ':menorah_with_nine_branches:',
    title: 'menorah with nine branches',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/menorah_with_nine_branches.mp3',
    ru: 'Ð¼ÐµÐ½Ð¾Ñ€Ð° Ñ Ð´ÐµÐ²ÑÑ‚ÑŒÑŽ Ð²ÐµÑ‚Ð²ÑÐ¼Ð¸'
  },
  {
    id: 48,
    name: ':mens:',
    title: 'mens',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/mens.mp3',
    ru: 'Ð¼ÑƒÐ¶ÑÐºÐ¾Ð¹'
  },
  {
    id: 49,
    name: ':musical_note:',
    title: 'musical note',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/musical_note.mp3',
    ru: 'Ð¼ÑƒÐ·Ñ‹ÐºÐ°Ð»ÑŒÐ½Ð°Ñ Ð½Ð¾Ñ‚Ð°'
  },
  {
    id: 50,
    name: ':no_bicycles:',
    title: 'no bicycles',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/no_bicycles.mp3',
    ru: 'Ð²ÐµÐ»Ð¾ÑÐ¸Ð¿ÐµÐ´Ñ‹ Ð·Ð°Ð¿Ñ€ÐµÑ‰ÐµÐ½Ñ‹'
  },
  {
    id: 51,
    name: ':no_entry:',
    title: 'no entry',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/no_entry.mp3',
    ru: 'Ð½ÐµÑ‚ Ð²Ñ…Ð¾Ð´Ð°'
  },
  {
    id: 52,
    name: ':no_entry_sign:',
    title: 'no entry sign',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/no_entry_sign.mp3',
    ru: 'Ð·Ð½Ð°Ðº Ð·Ð°Ð¿Ñ€ÐµÑ‰ÐµÐ½'
  },
  {
    id: 53,
    name: ':no_mobile_phones:',
    title: 'no mobile phones',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/no_mobile_phones.mp3',
    ru: 'Ð½ÐµÑ‚ Ð¼Ð¾Ð±Ð¸Ð»ÑŒÐ½Ñ‹Ñ… Ñ‚ÐµÐ»ÐµÑ„Ð¾Ð½Ð¾Ð²'
  },
  {
    id: 54,
    name: ':no_pedestrians:',
    title: 'no pedestrians',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/no_pedestrians.mp3',
    ru: 'Ð´Ð²Ð¸Ð¶ÐµÐ½Ð¸Ðµ Ð¿ÐµÑˆÐµÑ…Ð¾Ð´Ð¾Ð² Ð·Ð°Ð¿Ñ€ÐµÑ‰ÐµÐ½Ð¾'
  },
  {
    id: 55,
    name: ':no_smoking:',
    title: 'no smoking',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/no_smoking.mp3',
    ru: 'Ð½Ðµ ÐºÑƒÑ€Ð¸Ñ‚ÑŒ'
  },
  {
    id: 56,
    name: ':non-potable_water:',
    title: 'non potable water',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/non_potable_water.mp3',
    ru: 'Ð½ÐµÐ¿Ð¸Ñ‚ÑŒÐµÐ²Ð°Ñ Ð²Ð¾Ð´Ð°'
  },
  {
    id: 57,
    name: ':om_symbol:',
    title: 'om symbol',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/om_symbol.mp3',
    ru: 'ÑÐ¸Ð¼Ð²Ð¾Ð» Ð¾Ð¼'
  },
  {
    id: 58,
    name: ':ophiuchus:',
    title: 'ophiuchus',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/ophiuchus.mp3',
    ru: 'Ð·Ð¼ÐµÐµÐ½Ð¾ÑÐµÑ†'
  },
  {
    id: 59,
    name: ':orthodox_cross:',
    title: 'orthodox cross',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/orthodox_cross.mp3',
    ru: 'Ð¿Ñ€Ð°Ð²Ð¾ÑÐ»Ð°Ð²Ð½Ñ‹Ð¹ ÐºÑ€ÐµÑÑ‚'
  },
  {
    id: 60,
    name: ':passport_control:',
    title: 'passport control',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/passport_control.mp3',
    ru: 'Ð¿Ð°ÑÐ¿Ð¾Ñ€Ñ‚Ð½Ñ‹Ð¹ ÐºÐ¾Ð½Ñ‚Ñ€Ð¾Ð»ÑŒ'
  },
  {
    id: 61,
    name: ':peace_symbol:',
    title: 'peace',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/peace.mp3',
    ru: 'Ð¼Ð¸Ñ€'
  },
  {
    id: 62,
    name: ':pisces:',
    title: 'pisces',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/pisces.mp3',
    ru: 'Ñ€Ñ‹Ð±Ñ‹'
  },
  {
    id: 63,
    name: ':potable_water:',
    title: 'potable water',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/potable_water.mp3',
    ru: 'ÐŸÐ¸Ñ‚ÑŒÐµÐ²Ð°Ñ Ð²Ð¾Ð´Ð°'
  },
  {
    id: 64,
    name: ':radioactive_sign:',
    title: 'radioactive sign',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/radioactive_sign.mp3',
    ru: 'Ñ€Ð°Ð´Ð¸Ð¾Ð°ÐºÑ‚Ð¸Ð²Ð½Ñ‹Ð¹ Ð·Ð½Ð°Ðº'
  },
  {
    id: 65,
    name: ':recycle:',
    title: 'recycle',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/recycle.mp3',
    ru: 'Ñ€ÐµÑ†Ð¸Ñ€ÐºÑƒÐ»Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ'
  },
  {
    id: 66,
    name: ':registered:',
    title: 'registered',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/registered.mp3',
    ru: 'Ð·Ð°Ñ€ÐµÐ³Ð¸ÑÑ‚Ñ€Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð½Ñ‹Ð¹'
  },
  {
    id: 67,
    name: ':repeat:',
    title: 'repeat',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/repeat.mp3',
    ru: 'Ð¿Ð¾Ð²Ñ‚Ð¾Ñ€ÐµÐ½Ð¸Ðµ'
  },
  {
    id: 68,
    name: ':restroom:',
    title: 'restroom',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/restroom.mp3',
    ru: 'ÑƒÐ±Ð¾Ñ€Ð½Ð°Ñ'
  },
  {
    id: 69,
    name: ':sagittarius:',
    title: 'sagittarius',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/sagittarius.mp3',
    ru: 'ÑÑ‚Ñ€ÐµÐ»ÐµÑ†'
  },
  {
    id: 70,
    name: ':scales:',
    title: 'scales',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/scales.mp3',
    ru: 'Ð²ÐµÑÑ‹'
  },
  {
    id: 71,
    name: ':scorpius:',
    title: 'scorpius',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/scorpius.mp3',
    ru: 'ÑÐºÐ¾Ñ€Ð¿Ð¸Ð¾Ð½'
  },
  {
    id: 72,
    name: ':shamrock:',
    title: 'shamrock',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/shamrock.mp3',
    ru: 'Ñ‚Ñ€Ð¸Ð»Ð¸ÑÑ‚Ð½Ð¸Ðº'
  },
  {
    id: 73,
    name: ':shower:',
    title: 'shower',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/shower.mp3',
    ru: 'Ð´ÑƒÑˆ'
  },
  {
    id: 74,
    name: ':six_pointed_star:',
    title: 'six pointed star',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/six_pointed_star.mp3',
    ru: 'ÑˆÐµÑÑ‚Ð¸ÐºÐ¾Ð½ÐµÑ‡Ð½Ð°Ñ Ð·Ð²ÐµÐ·Ð´Ð°'
  },
  {
    id: 75,
    name: 'skull_and_crossbones',
    title: 'skull and crossbones',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/skull_and_crossbones.mp3',
    ru: 'Ñ‡ÐµÑ€ÐµÐ¿ Ð¸ ÐºÐ¾ÑÑ‚Ð¸'
  },
  {
    id: 77,
    name: ':star_and_crescent:',
    title: 'star and crescent',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/star_and_crescent.mp3',
    ru: 'Ð·Ð²ÐµÐ·Ð´Ð° Ð¸ Ð¿Ð¾Ð»ÑƒÐ¼ÐµÑÑÑ†'
  },
  {
    id: 78,
    name: ':star_of_david:',
    title: 'star of David',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/star_of_David.mp3',
    ru: 'Ð·Ð²ÐµÐ·Ð´Ð° Ð”Ð°Ð²Ð¸Ð´Ð°'
  },
  {
    id: 79,
    name: ':taurus:',
    title: 'taurus',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/taurus.mp3',
    ru: 'Ñ‚ÐµÐ»ÐµÑ†'
  },
  {
    id: 80,
    name: ':tm:',
    title: 'trade mark sign',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/trade_mark_sign.mp3',
    ru: 'Ð·Ð½Ð°Ðº Ñ‚Ð¾Ñ€Ð³Ð¾Ð²Ð¾Ð¹ Ð¼Ð°Ñ€ÐºÐ¸'
  },
  {
    id: 81,
    name: ':trident:',
    title: 'trident',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/trident.mp3',
    ru: 'Ñ‚Ñ€ÐµÐ·ÑƒÐ±ÐµÑ†'
  },
  {
    id: 83,
    name: ':virgo:',
    title: 'virgo',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/virgo.mp3',
    ru: 'Ð´ÐµÐ²Ð°'
  },
  {
    id: 84,
    name: ':warning:',
    title: 'warning',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/warning.mp3',
    ru: 'Ð¿Ñ€ÐµÐ´ÑƒÐ¿Ñ€ÐµÐ¶Ð´ÐµÐ½Ð¸Ðµ'
  },
  {
    id: 85,
    name: ':wc:',
    title: 'water closet',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/water_closet.mp3',
    ru: 'Ñ‚ÑƒÐ°Ð»ÐµÑ‚'
  },
  {
    id: 86,
    name: ':wheel_of_dharma:',
    title: 'wheel of dharma',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/wheel_of_dharma.mp3',
    ru: 'ÐºÐ¾Ð»ÐµÑÐ¾ Ð´Ñ…Ð°Ñ€Ð¼Ñ‹'
  },
  {
    id: 87,
    name: ':wheelchair:',
    title: 'wheelchair',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/wheelchair.mp3',
    ru: 'Ð¸Ð½Ð²Ð°Ð»Ð¸Ð´Ð½Ð°Ñ ÐºÐ¾Ð»ÑÑÐºÐ°'
  },
  {
    id: 88,
    name: ':womens:',
    title: 'womens',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/womens.mp3',
    ru: 'Ð¶ÐµÐ½ÑÐºÐ¸Ð¹'
  },
  {
    id: 89,
    name: ':yin_yang:',
    title: 'yin yang',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/08-Symbols/mp3/yin_yang.mp3',
    ru: 'Ð¸Ð½ÑŒ ÑÐ½ÑŒ'
  }
]

module.exports = symbols
