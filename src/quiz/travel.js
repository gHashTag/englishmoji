const travel = [
  {
    id: 0,
    name: ':aerial_tramway:',
    title: 'aerial tramway',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/aerial_tramway.mp3',
    ru: 'ÐºÐ°Ð½Ð°Ñ‚Ð½Ð°Ñ Ð´Ð¾Ñ€Ð¾Ð³Ð°'
  },
  {
    id: 1,
    name: ':airplane_arriving:',
    title: 'airplane arriving',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/airplane_arriving.mp3',
    ru: 'ÑÐ°Ð¼Ð¾Ð»ÐµÑ‚ Ð¿Ñ€Ð¸Ð±Ñ‹Ð²Ð°ÐµÑ‚'
  },
  {
    id: 2,
    name: ':airplane_departure:',
    title: 'airplane departure',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/airplane_departure.mp3',
    ru: 'Ð²Ñ‹Ð»ÐµÑ‚ ÑÐ°Ð¼Ð¾Ð»ÐµÑ‚Ð°'
  },
  {
    id: 3,
    name: ':ambulance:',
    title: 'ambulance',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/ambulance.mp3',
    ru: 'ÑÐºÐ¾Ñ€Ð°Ñ Ð¿Ð¾Ð¼Ð¾Ñ‰ÑŒ'
  },
  {
    id: 4,
    name: ':anchor:',
    title: 'anchor',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/anchor.mp3',
    ru: 'ÑÐºÐ¾Ñ€ÑŒ'
  },
  {
    id: 5,
    name: ':articulated_lorry:',
    title: 'articulated lorry',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/articulated_lorry.mp3',
    ru: 'Ð°Ð²Ñ‚Ð¾Ð¿Ð¾ÐµÐ·Ð´'
  },
  {
    id: 6,
    name: ':car:',
    title: 'automobile',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/automobile.mp3',
    ru: 'Ð¼Ð°ÑˆÐ¸Ð½Ð°'
  },
  {
    id: 7,
    name: ':bank:',
    title: 'bank',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/bank.mp3',
    ru: 'Ð±Ð°Ð½Ðº'
  },
  {
    id: 8,
    name: ':bike:',
    title: 'bicycle',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/bicycle.mp3',
    ru: 'Ð²ÐµÐ»Ð¾ÑÐ¸Ð¿ÐµÐ´'
  },
  {
    id: 9,
    name: ':building_construction:',
    title: 'building construction',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/building_construction.mp3',
    ru: 'ÑÑ‚Ñ€Ð¾Ð¸Ñ‚ÐµÐ»ÑŒÑÑ‚Ð²Ð¾ Ð·Ð´Ð°Ð½Ð¸Ñ'
  },
  {
    id: 10,
    name: ':bus:',
    title: 'bus',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/bus.mp3',
    ru: 'Ð°Ð²Ñ‚Ð¾Ð±ÑƒÑ'
  },
  {
    id: 11,
    name: ':busstop:',
    title: 'bus stop',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/bus_stop.mp3',
    ru: 'Ð¾ÑÑ‚Ð°Ð½Ð¾Ð²ÐºÐ°'
  },
  {
    id: 12,
    name: ':camping:',
    title: 'camping',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/camping.mp3',
    ru: 'ÐºÐµÐ¼Ð¿Ð¸Ð½Ð³'
  },
  {
    id: 13,
    name: ':canoe:',
    title: 'canoe',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/canoe.mp3',
    ru: 'ÐºÐ°Ð½Ð¾Ñ'
  },
  {
    id: 14,
    name: ':carousel_horse:',
    title: 'carousel horse',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/carousel_horse.mp3',
    ru: 'ÐºÐ°Ñ€ÑƒÑÐµÐ»ÑŒ'
  },
  {
    id: 15,
    name: ':church:',
    title: 'church',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/church.mp3',
    ru: 'Ñ†ÐµÑ€ÐºÐ¾Ð²ÑŒ'
  },
  {
    id: 16,
    name: ':city_sunset:',
    title: 'cityscape at dusk',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/cityscape_at_dusk.mp3',
    ru: 'Ð³Ð¾Ñ€Ð¾Ð´ÑÐºÐ¾Ð¹ Ð¿ÐµÐ¹Ð·Ð°Ð¶ Ð² ÑÑƒÐ¼ÐµÑ€ÐºÐ°Ñ…'
  },
  {
    id: 17,
    name: ':construction:',
    title: 'construction',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/construction.mp3',
    ru: 'ÑÑ‚Ñ€Ð¾Ð¸Ñ‚ÐµÐ»ÑŒÑÑ‚Ð²Ð¾'
  },
  {
    id: 18,
    name: ':convenience_store:',
    title: 'convenience store',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/convenience_store.mp3',
    ru: 'ÐºÑ€ÑƒÐ³Ð»Ð¾ÑÑƒÑ‚Ð¾Ñ‡Ð½Ñ‹Ð¹ Ð¼Ð°Ð³Ð°Ð·Ð¸Ð½'
  },
  {
    id: 19,
    name: ':derelict_house_building:',
    title: 'derelict house building',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/derelict_house_building.mp3',
    ru: 'Ð·Ð°Ð±Ñ€Ð¾ÑˆÐµÐ½Ð½Ñ‹Ð¹ Ð´Ð¾Ð¼'
  },
  {
    id: 20,
    name: ':european_castle:',
    title: 'european castle',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/european_castle.mp3',
    ru: 'ÐµÐ²Ñ€Ð¾Ð¿ÐµÐ¹ÑÐºÐ¸Ð¹ Ð·Ð°Ð¼Ð¾Ðº'
  },
  {
    id: 21,
    name: ':european_post_office:',
    title: 'european post office',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/european_post_office.mp3',
    ru: 'Ð¿Ð¾Ñ‡Ñ‚Ð¾Ð²Ð¾Ðµ Ð¾Ñ‚Ð´ÐµÐ»ÐµÐ½Ð¸Ðµ'
  },
  {
    id: 22,
    name: ':factory:',
    title: 'factory',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/factory.mp3',
    ru: 'Ñ„Ð°Ð±Ñ€Ð¸ÐºÐ°'
  },
  {
    id: 23,
    name: ':ferris_wheel:',
    title: 'ferris wheel',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/ferris_wheel.mp3',
    ru: 'ÐºÐ¾Ð»ÐµÑÐ¾ Ð¾Ð±Ð¾Ð·Ñ€ÐµÐ½Ð¸Ñ'
  },
  {
    id: 24,
    name: ':ferry:',
    title: 'ferry',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/ferry.mp3',
    ru: 'Ð¿Ð°Ñ€Ð¾Ð¼'
  },
  {
    id: 25,
    name: ':fire_engine:',
    title: 'fire engine',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/fire_engine.mp3',
    ru: 'Ð¿Ð¾Ð¶Ð°Ñ€Ð½Ð°Ñ Ð¼Ð°ÑˆÐ¸Ð½Ð°'
  },
  {
    id: 26,
    name: ':sparkler:',
    title: 'firework sparkler',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/firework_sparkler.mp3',
    ru: 'Ð±ÐµÐ½Ð³Ð°Ð»ÑŒÑÐºÐ¸Ð¹ Ð¾Ð³Ð¾Ð½ÑŒ'
  },
  {
    id: 27,
    name: ':foggy:',
    title: 'foggy',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/foggy.mp3',
    ru: 'Ð¼Ð¾ÑÑ‚ Ð² Ñ‚ÑƒÐ¼Ð°Ð½Ð½Ðµ'
  },
  {
    id: 28,
    name: ':fountain:',
    title: 'fountain',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/fountain.mp3',
    ru: 'Ñ„Ð¾Ð½Ñ‚Ð°Ð½'
  },
  {
    id: 29,
    name: ':helicopter:',
    title: 'helicopter',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/helicopter.mp3',
    ru: 'Ð²ÐµÑ€Ñ‚Ð¾Ð»Ñ‘Ñ‚'
  },
  {
    id: 30,
    name: ':bullettrain_side:',
    title: 'high-speed train',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/high-speed_train.mp3',
    ru: 'Ð²Ñ‹ÑÐ¾ÐºÐ¾ÑÐºÐ¾Ñ€Ð¾ÑÑ‚Ð½Ð¾Ð¹ Ð¿Ð¾ÐµÐ·Ð´'
  },
  {
    id: 31,
    name: ':hospital:',
    title: 'hospital',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/hospital.mp3',
    ru: 'Ð±Ð¾Ð»ÑŒÐ½Ð¸Ñ†Ð°'
  },
  {
    id: 32,
    name: ':hotel:',
    title: 'hotel',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/hotel.mp3',
    ru: 'Ð¾Ñ‚ÐµÐ»ÑŒ'
  },
  {
    id: 33,
    name: ':house_buildings:',
    title: 'house buildings',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/house_buildings.mp3',
    ru: 'Ð´Ð¾Ð¼Ð¾Ð²Ñ‹Ðµ Ð¿Ð¾ÑÑ‚Ñ€Ð¾Ð¹ÐºÐ¸'
  },
  {
    id: 34,
    name: ':japanese_castle:',
    title: 'japanese castle',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/japanese_castle.mp3',
    ru: 'ÑÐ¿Ð¾Ð½ÑÐºÐ¸Ð¹ Ð·Ð°Ð¼Ð¾Ðº'
  },
  {
    id: 35,
    name: ':metro:',
    title: 'metro',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/metro.mp3',
    ru: 'Ð¼ÐµÑ‚Ñ€Ð¾'
  },
  {
    id: 36,
    name: ':milky_way:',
    title: 'milky way',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/milky_way.mp3',
    ru: 'Ð¼Ð»ÐµÑ‡Ð½Ñ‹Ð¹ Ð¿ÑƒÑ‚ÑŒ'
  },
  {
    id: 37,
    name: ':minibus:',
    title: 'minibus',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/minibus.mp3',
    ru: 'Ð¼Ð°Ñ€ÑˆÑ€ÑƒÑ‚ÐºÐ°'
  },
  {
    id: 38,
    name: ':monorail:',
    title: 'monorail',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/monorail.mp3',
    ru: 'Ð¼Ð¾Ð½Ð¾Ñ€ÐµÐ»ÑŒÑ'
  },
  {
    id: 39,
    name: ':mosque:',
    title: 'mosque',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/mosque.mp3',
    ru: 'Ð¼ÐµÑ‡ÐµÑ‚ÑŒ'
  },
  {
    id: 40,
    name: ':motor_boat:',
    title: 'motor boat',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/motor_boat.mp3',
    ru: 'Ð¼Ð¾Ñ‚Ð¾Ñ€Ð½Ð°Ñ Ð»Ð¾Ð´ÐºÐ°'
  },
  {
    id: 41,
    name: ':motor_scooter:',
    title: 'motor scooter',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/motor_scooter.mp3',
    ru: 'ÑÐºÑƒÑ‚ÐµÑ€'
  },
  {
    id: 42,
    name: ':motorway:',
    title: 'motorway',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/motorway.mp3',
    ru: 'Ð°Ð²Ñ‚Ð¾Ð¼Ð°Ð³Ð¸ÑÑ‚Ñ€Ð°Ð»ÑŒ'
  },
  {
    id: 43,
    name: ':mountain_cableway:',
    title: 'mountain cableway',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/mountain_cableway.mp3',
    ru: 'Ð³Ð¾Ñ€Ð½Ð°Ñ ÐºÐ°Ð½Ð°Ñ‚Ð½Ð°Ñ Ð´Ð¾Ñ€Ð¾Ð³Ð°'
  },
  {
    id: 44,
    name: ':night_with_stars:',
    title: 'night with stars',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/night_with_stars.mp3',
    ru: 'Ð½Ð¾Ñ‡ÑŒ ÑÐ¾ Ð·Ð²ÐµÐ·Ð´Ð°Ð¼Ð¸'
  },
  {
    id: 45,
    name: ':office:',
    title: 'office building',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/office_building.mp3',
    ru: 'Ð¾Ñ„Ð¸ÑÐ½Ð¾Ðµ Ð·Ð´Ð°Ð½Ð¸Ðµ'
  },
  {
    id: 46,
    name: ':passenger_ship:',
    title: 'passenger ship',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/passenger_ship.mp3',
    ru: 'Ð¿Ð°ÑÑÐ°Ð¶Ð¸Ñ€ÑÐºÐ¾Ðµ ÑÑƒÐ´Ð½Ð¾'
  },
  {
    id: 47,
    name: ':police_car:',
    title: 'police car',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/police_car.mp3',
    ru: 'Ð¿Ð¾Ð»Ð¸Ñ†ÐµÐ¹ÑÐºÐ°Ñ Ð¼Ð°ÑˆÐ¸Ð½Ð°'
  },
  {
    id: 48,
    name: ':racing_car:',
    title: 'racing car',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/racing_car.mp3',
    ru: 'Ð³Ð¾Ð½Ð¾Ñ‡Ð½Ñ‹Ð¹ Ð°Ð²Ñ‚Ð¾Ð¼Ð¾Ð±Ð¸Ð»ÑŒ'
  },
  {
    id: 49,
    name: ':racing_motorcycle:',
    title: 'racing motorcycle',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/racing_motorcycle.mp3',
    ru: 'Ð³Ð¾Ð½Ð¾Ñ‡Ð½Ñ‹Ð¹ Ð¼Ð¾Ñ‚Ð¾Ñ†Ð¸ÐºÐ»'
  },
  {
    id: 50,
    name: ':railway_track:',
    title: 'railway track',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/railway_track.mp3',
    ru: 'Ð¶ÐµÐ»ÐµÐ·Ð½Ð¾Ð´Ð¾Ñ€Ð¾Ð¶Ð½Ñ‹Ðµ Ð¿ÑƒÑ‚Ð¸'
  },
  {
    id: 51,
    name: ':rocket:',
    title: 'rocket',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/rocket.mp3',
    ru: 'Ñ€Ð°ÐºÐµÑ‚Ð°'
  },
  {
    id: 52,
    name: ':roller_coaster:',
    title: 'roller coaster',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/roller_coaster.mp3',
    ru: 'Ð°Ð¼ÐµÑ€Ð¸ÐºÐ°Ð½ÑÐºÐ¸Ðµ Ð³Ð¾Ñ€ÐºÐ¸'
  },
  {
    id: 53,
    name: ':boat:',
    title: 'sailboat',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/sailboat.mp3',
    ru: 'Ð¿Ð°Ñ€ÑƒÑÐ½Ð¾Ðµ ÑÑƒÐ´Ð½Ð¾'
  },
  {
    id: 54,
    name: ':satellite:',
    title: 'satellite',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/satellite.mp3',
    ru: 'ÑÐ¿ÑƒÑ‚Ð½Ð¸Ðº'
  },
  {
    id: 55,
    name: ':school:',
    title: 'school',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/school.mp3',
    ru: 'ÑˆÐºÐ¾Ð»Ð°'
  },
  {
    id: 56,
    name: ':seat:',
    title: 'seat',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/seat.mp3',
    ru: 'ÑÐ¸Ð´ÐµÐ½ÑŒÐµ'
  },
  {
    id: 57,
    name: ':shinto_shrine:',
    title: 'shinto shrine',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/shinto_shrine.mp3',
    ru: 'ÑÐ¸Ð½Ñ‚Ð¾Ð¸ÑÑ‚ÑÐºÐ¸Ð¹ Ñ…Ñ€Ð°Ð¼'
  },
  {
    id: 58,
    name: ':ship:',
    title: 'ship',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/ship.mp3',
    ru: 'ÐºÐ¾Ñ€Ð°Ð±Ð»ÑŒ'
  },
  {
    id: 59,
    name: ':stars:',
    title: 'shooting star',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/shooting_star.mp3',
    ru: 'Ð¿Ð°Ð´Ð°ÑŽÑ‰Ð°Ñ Ð·Ð²ÐµÐ·Ð´Ð°'
  },
  {
    id: 60,
    name: ':speedboat:',
    title: 'speedboat',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/speedboat.mp3',
    ru: 'Ð±Ñ‹ÑÑ‚Ñ€Ð¾Ñ…Ð¾Ð´Ð½Ñ‹Ð¹ ÐºÐ°Ñ‚ÐµÑ€'
  },
  {
    id: 61,
    name: ':station:',
    title: 'station',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/station.mp3',
    ru: 'ÑÑ‚Ð°Ð½Ñ†Ð¸Ñ'
  },
  {
    id: 62,
    name: ':statue_of_liberty:',
    title: 'statue of liberty',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/statue_of_liberty.mp3',
    ru: 'ÑÑ‚Ð°Ñ‚ÑƒÑ Ð¡Ð²Ð¾Ð±Ð¾Ð´Ñ‹'
  },
  {
    id: 63,
    name: ':steam_locomotive:',
    title: 'steam locomotive',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/steam_locomotive.mp3',
    ru: 'Ð¿Ð°Ñ€Ð¾Ð²Ð¾Ð·'
  },
  {
    id: 64,
    name: ':suspension_railway:',
    title: 'suspension railway',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/suspension_railway.mp3',
    ru: 'Ð¿Ð¾Ð´Ð²ÐµÑÐ½Ð°Ñ Ð¶ÐµÐ»ÐµÐ·Ð½Ð°Ñ Ð´Ð¾Ñ€Ð¾Ð³Ð°'
  },
  {
    id: 65,
    name: ':synagogue:',
    title: 'synagogue',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/synagogue.mp3',
    ru: 'ÑÐ¸Ð½Ð°Ð³Ð¾Ð³Ð°'
  },
  {
    id: 66,
    name: ':taxi:',
    title: 'taxi',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/taxi.mp3',
    ru: 'Ñ‚Ð°ÐºÑÐ¸'
  },
  {
    id: 67,
    name: ':tent:',
    title: 'tent',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/tent.mp3',
    ru: 'Ð¿Ð°Ð»Ð°Ñ‚ÐºÐ°'
  },
  {
    id: 68,
    name: ':tokyo_tower:',
    title: 'tokyo tower',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/tokyo_tower.mp3',
    ru: 'Ð±Ð°ÑˆÐ½Ñ Ð² Ð¢Ð¾ÐºÐ¸Ð¾'
  },
  {
    id: 69,
    name: ':tractor:',
    title: 'tractor',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/tractor.mp3',
    ru: 'Ñ‚Ñ€Ð°ÐºÑ‚Ð¾Ñ€'
  },
  {
    id: 70,
    name: ':traffic_light:',
    title: 'traffic light',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/traffic_light.mp3',
    ru: 'ÑÐ²ÐµÑ‚Ð¾Ñ„Ð¾Ñ€'
  },
  {
    id: 71,
    name: ':tram:',
    title: 'tram',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/tram.mp3',
    ru: 'Ñ‚Ñ€Ð°Ð¼Ð²Ð°Ð¹'
  },
  {
    id: 72,
    name: ':trolleybus:',
    title: 'trolleybus',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/trolleybus.mp3',
    ru: 'Ñ‚Ñ€Ð¾Ð»Ð»ÐµÐ¹Ð±ÑƒÑ'
  },
  {
    id: 73,
    name: ':volcano:',
    title: 'volcano',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/06-Travel/mp3/volcano.mp3',
    ru: 'Ð²ÑƒÐ»ÐºÐ°Ð½'
  }
]

module.exports = travel
