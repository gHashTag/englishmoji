const objects = [
  {
    id: 0,
    name: ':alarm_clock:',
    title: 'alarm clock',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/alarm_clock.mp3',
    ru: 'Ð±ÑƒÐ´Ð¸Ð»ÑŒÐ½Ð¸Ðº'
  },
  {
    id: 1,
    name: ':amphora:',
    title: 'amphora',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/amphora.mp3',
    ru: 'Ð°Ð¼Ñ„Ð¾Ñ€Ð°'
  },
  {
    id: 2,
    name: ':ballot_box_with_ballot:',
    title: 'ballot box with ballot',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/ballot_box_with_ballot.mp3',
    ru: 'ÑƒÑ€Ð½Ð° Ñ Ð±ÑŽÐ»Ð»ÐµÑ‚ÐµÐ½ÐµÐ¼'
  },
  {
    id: 3,
    name: ':bar_chart:',
    title: 'bar chart',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/bar_chart.mp3',
    ru: 'Ð³Ð¸ÑÑ‚Ð¾Ð³Ñ€Ð°Ð¼Ð¼Ð°'
  },
  {
    id: 4,
    name: ':bathtub:',
    title: 'bathtub',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/bathtub.mp3',
    ru: 'Ð²Ð°Ð½Ð½Ð°'
  },
  {
    id: 5,
    name: ':battery:',
    title: 'battery',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/battery.mp3',
    ru: 'Ð°ÐºÐºÑƒÐ¼ÑƒÐ»ÑÑ‚Ð¾Ñ€'
  },
  {
    id: 6,
    name: ':bell:',
    title: 'bell',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/bell.mp3',
    ru: 'ÐºÐ¾Ð»Ð¾ÐºÐ¾Ð»'
  },
  {
    id: 7,
    name: ':bellhop_bell:',
    title: 'bellhop bell',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/bellhop_bell.mp3',
    ru: 'ÐºÐ¾Ð»Ð¾ÐºÐ¾Ð»'
  },
  {
    id: 9,
    name: ':bomb:',
    title: 'bomb',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/bomb.mp3',
    ru: 'Ð±Ð¾Ð¼Ð±Ð¸Ñ‚ÑŒ'
  },
  {
    id: 10,
    name: ':books:',
    title: 'books',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/books.mp3',
    ru: 'ÐºÐ½Ð¸Ð³Ð¸'
  },
  {
    id: 11,
    name: ':boxing_glove:',
    title: 'boxing glovee',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/boxing_glovee.mp3',
    ru: 'Ð±Ð¾ÐºÑÐµÑ€ÑÐºÐ¸Ðµ Ð¿ÐµÑ€Ñ‡Ð°Ñ‚ÐºÐ¸'
  },
  {
    id: 12,
    name: ':brain:',
    title: 'brain',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/brain.mp3',
    ru: 'Ð³Ð¾Ð»Ð¾Ð²Ð½Ð¾Ð¹ Ð¼Ð¾Ð·Ð³'
  },
  {
    id: 13,
    name: ':camera_with_flash:',
    title: 'camera with flash',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/camera_with_flash.mp3',
    ru: 'ÐºÐ°Ð¼ÐµÑ€Ð° ÑÐ¾ Ð²ÑÐ¿Ñ‹ÑˆÐºÐ¾Ð¹'
  },
  {
    id: 14,
    name: ':candle:',
    title: 'candle',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/candle.mp3',
    ru: 'ÑÐ²ÐµÑ‡Ð°'
  },
  {
    id: 15,
    name: ':card_file_box:',
    title: 'card file box',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/card_file_box.mp3',
    ru: 'ÐºÐ¾Ñ€Ð¾Ð±ÐºÐ° ÐºÐ°Ñ€Ñ‚Ð¾Ñ‚ÐµÐºÐ¸'
  },
  {
    id: 16,
    name: ':card_index_dividers:',
    title: 'card index dividers',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/card_index_dividers.mp3',
    ru: 'Ñ€Ð°Ð·Ð´ÐµÐ»Ð¸Ñ‚ÐµÐ»Ð¸ ÐºÐ°Ñ€Ñ‚Ð¾Ñ‚ÐµÐºÐ¸'
  },
  {
    id: 17,
    name: ':clapper:',
    title: 'clapper board',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/clapper_board.mp3',
    ru: 'Ñ…Ð»Ð¾Ð¿ÑƒÑˆÐºÐ°'
  },
  {
    id: 18,
    name: ':clipboard:',
    title: 'clipboard',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/clipboard.mp3',
    ru: ''
  },
  {
    id: 19,
    name: ':compression:',
    title: 'compression',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/compression.mp3',
    ru: 'ÑÐ¶Ð°Ñ‚Ð¸Ðµ'
  },
  {
    id: 20,
    name: ':control_knobs:',
    title: 'control knobs',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/control_knobs.mp3',
    ru: 'Ñ€ÑƒÑ‡ÐºÐ¸ ÑƒÐ¿Ñ€Ð°Ð²Ð»ÐµÐ½Ð¸Ñ'
  },
  {
    id: 21,
    name: ':couch_and_lamp:',
    title: 'couch and lamp',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/couch_and_lamp.mp3',
    ru: 'Ð´Ð¸Ð²Ð°Ð½ Ð¸ Ð»Ð°Ð¼Ð¿Ð°'
  },
  {
    id: 22,
    name: ':credit_card:',
    title: 'credit card',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/credit_card.mp3',
    ru: 'ÐºÑ€ÐµÐ´Ð¸Ñ‚Ð½Ð°Ñ ÐºÐ°Ñ€Ñ‚Ð°'
  },
  {
    id: 23,
    name: ':crystal_ball:',
    title: 'crystal ball',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/crystal_ball.mp3',
    ru: 'Ñ…Ñ€ÑƒÑÑ‚Ð°Ð»ÑŒÐ½Ñ‹Ð¹ ÑˆÐ°Ñ€'
  },
  {
    id: 24,
    name: ':curling_stone:',
    title: 'curling stone',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/curling_stone.mp3',
    ru: 'ÐºÐµÑ€Ð»Ð¸Ð½Ð³'
  },
  {
    id: 25,
    name: ':desktop_computer:',
    title: 'desktop computer',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/desktop_computer.mp3',
    ru: 'Ð½Ð°ÑÑ‚Ð¾Ð»ÑŒÐ½Ñ‹Ð¹ ÐºÐ¾Ð¼Ð¿ÑŒÑŽÑ‚ÐµÑ€'
  },
  {
    id: 26,
    name: ':floppy_disk:',
    title: 'diskette',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/diskette.mp3',
    ru: 'Ð´Ð¸ÑÐºÐµÑ‚Ð°'
  },
  {
    id: 27,
    name: ':dollar:',
    title: 'dollar',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/dollar.mp3',
    ru: 'Ð´Ð¾Ð»Ð»Ð°Ñ€'
  },
  {
    id: 28,
    name: ':door:',
    title: 'door',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/door.mp3',
    ru: 'Ð´Ð²ÐµÑ€ÑŒ'
  },
  {
    id: 29,
    name: ':droplet:',
    title: 'droplet',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/droplet.mp3',
    ru: 'ÐºÐ°Ð¿Ð»Ñ'
  },
  {
    id: 30,
    name: ':drum_with_drumsticks:',
    title: 'drum with drumsticks',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/drum_with_drumsticks.mp3',
    ru: 'Ð±Ð°Ñ€Ð°Ð±Ð°Ð½Ð½Ñ‹Ðµ Ð¿Ð°Ð»Ð¾Ñ‡ÐºÐ¸'
  },
  {
    id: 31,
    name: ':bulb:',
    title: 'electric light bulb',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/electric_light_bulb.mp3',
    ru: 'ÑÐ»ÐµÐºÑ‚Ñ€Ð¸Ñ‡ÐµÑÐºÐ°Ñ Ð»Ð°Ð¼Ð¿Ð°'
  },
  {
    id: 32,
    name: ':electric_plug:',
    title: 'electric plug',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/electric_plug.mp3',
    ru: 'ÑÐ»ÐµÐºÑ‚Ñ€Ð¸Ñ‡ÐµÑÐºÐ°Ñ Ð²Ð¸Ð»ÐºÐ°'
  },
  {
    id: 33,
    name: ':flashlight:',
    title: 'electric torch',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/electric_torch.mp3',
    ru: 'ÑÐ»ÐµÐºÑ‚Ñ€Ð¸Ñ‡ÐµÑÐºÐ¸Ð¹ Ñ„Ð¾Ð½Ð°Ñ€Ð¸Ðº'
  },
  {
    id: 34,
    name: ':euro:',
    title: 'euro',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/euro.mp3',
    ru: 'ÐµÐ²Ñ€Ð¾'
  },
  {
    id: 35,
    name: ':fax:',
    title: 'fax machine',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/fax_machine.mp3',
    ru: 'Ñ„Ð°ÐºÑ'
  },
  {
    id: 36,
    name: ':file_cabinet:',
    title: 'file cabinet',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/file_cabinet.mp3',
    ru: 'ÐºÐ°Ñ€Ñ‚Ð¾Ñ‚ÐµÑ‡Ð½Ñ‹Ð¹ ÑˆÐºÐ°Ñ„'
  },
  {
    id: 37,
    name: ':file_folder:',
    title: 'file folder',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/file_folder.mp3',
    ru: 'Ð¿Ð°Ð¿ÐºÐ°'
  },
  {
    id: 38,
    name: ':film_frames:',
    title: 'film frames',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/film_frames.mp3',
    ru: 'ÐºÐ°Ð´Ñ€Ñ‹ Ñ„Ð¸Ð»ÑŒÐ¼Ð°'
  },
  {
    id: 39,
    name: ':film_projector:',
    title: 'film projector',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/film_projector.mp3',
    ru: 'ÐºÐ¸Ð½Ð¾Ð¿Ñ€Ð¾ÐµÐºÑ‚Ð¾Ñ€'
  },
  {
    id: 40,
    name: ':first_place_medal:',
    title: 'first place medal',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/first_place_medal.mp3',
    ru: 'Ð¼ÐµÐ´Ð°Ð»ÑŒ Ð·Ð° Ð¿ÐµÑ€Ð²Ð¾Ðµ Ð¼ÐµÑÑ‚Ð¾'
  },
  {
    id: 42,
    name: ':frame_with_picture:',
    title: 'frame with picture',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/frame_with_picture.mp3',
    ru: 'Ñ€Ð°Ð¼ÐºÐ° Ñ Ð¸Ð·Ð¾Ð±Ñ€Ð°Ð¶ÐµÐ½Ð¸ÐµÐ¼'
  },
  {
    id: 43,
    name: ':goal_net:',
    title: 'goal net',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/goal_net.mp3',
    ru: 'ÑÐµÑ‚ÐºÐ° Ð²Ð¾Ñ€Ð¾Ñ‚'
  },
  {
    id: 44,
    name: ':hammer:',
    title: 'hammer',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/hammer.mp3',
    ru: 'Ð¼Ð¾Ð»Ð¾Ñ‚Ð¾Ðº'
  },
  {
    id: 45,
    name: ':hammer_and_wrench:',
    title: 'hammer and wrench',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/hammer_and_wrench.mp3',
    ru: 'Ð¼Ð¾Ð»Ð¾Ñ‚Ð¾Ðº Ð¸ Ð³Ð°ÐµÑ‡Ð½Ñ‹Ð¹ ÐºÐ»ÑŽÑ‡'
  },
  {
    id: 46,
    name: ':headphones:',
    title: 'headphones',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/headphones.mp3',
    ru: 'Ð½Ð°ÑƒÑˆÐ½Ð¸ÐºÐ¸'
  },
  {
    id: 47,
    name: ':hourglass:',
    title: 'hourglass',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/hourglass.mp3',
    ru: 'Ð¿ÐµÑÐ¾Ñ‡Ð½Ñ‹Ðµ Ñ‡Ð°ÑÑ‹'
  },
  {
    id: 48,
    name: ':dolls:',
    title: 'japanese dolls',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/japanese_dolls.mp3',
    ru: 'ÑÐ¿Ð¾Ð½ÑÐºÐ¸Ðµ ÐºÑƒÐºÐ»Ñ‹'
  },
  {
    id: 49,
    name: ':joystick:',
    title: 'joystick',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/joystick.mp3',
    ru: 'Ð´Ð¶Ð¾Ð¹ÑÑ‚Ð¸Ðº'
  },
  {
    id: 50,
    name: ':keyboard:',
    title: 'keyboard',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/keyboard.mp3',
    ru: 'ÐºÐ»Ð°Ð²Ð¸Ð°Ñ‚ÑƒÑ€Ð°'
  },
  {
    id: 51,
    name: ':label:',
    title: 'label',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/label.mp3',
    ru: 'Ð¼ÐµÑ‚ÐºÐ°'
  },
  {
    id: 52,
    name: ':ledger:',
    title: 'ledger',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/ledger.mp3',
    ru: 'Ð±ÑƒÑ…Ð³Ð°Ð»Ñ‚ÐµÑ€ÑÐºÐ°Ñ ÐºÐ½Ð¸Ð³Ð°'
  },
  {
    id: 53,
    name: ':level_slider:',
    title: 'level slider',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/level_slider.mp3',
    ru: 'Ð¿Ð¾Ð»Ð·ÑƒÐ½Ð¾Ðº'
  },
  {
    id: 54,
    name: ':linked_paperclips:',
    title: 'linked paperclips',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/linked_paperclips.mp3',
    ru: 'ÑÐ²ÑÐ·Ð°Ð½Ð½Ñ‹Ðµ ÑÐºÑ€ÐµÐ¿ÐºÐ¸'
  },
  {
    id: 55,
    name: ':lock:',
    title: 'lock',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/lock.mp3',
    ru: 'Ð·Ð°Ð¼Ð¾Ðº'
  },
  {
    id: 56,
    name: ':medal:',
    title: 'medal',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/medal.mp3',
    ru: 'Ð¼ÐµÐ´Ð°Ð»ÑŒ'
  },
  {
    id: 57,
    name: ':microphone:',
    title: 'microphone',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/microphone.mp3',
    ru: 'Ð¼Ð¸ÐºÑ€Ð¾Ñ„Ð¾Ð½'
  },
  {
    id: 58,
    name: ':microscope:',
    title: 'microscope',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/microscope.mp3',
    ru: 'Ð¼Ð¸ÐºÑ€Ð¾ÑÐºÐ¾Ð¿'
  },
  {
    id: 59,
    name: ':iphone:',
    title: 'mobile phone',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/mobile_phone.mp3',
    ru: 'Ð¼Ð¾Ð±Ð¸Ð»ÑŒÐ½Ñ‹Ð¹ Ñ‚ÐµÐ»ÐµÑ„Ð¾Ð½'
  },
  {
    id: 60,
    name: ':moneybag:',
    title: 'money bag',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/money_bag.mp3',
    ru: 'ÑÑƒÐ¼ÐºÐ° Ð´ÐµÐ½ÐµÐ³'
  },
  {
    id: 61,
    name: ':three_button_mouse:',
    title: 'mouse',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/mouse.mp3',
    ru: 'Ð¼Ñ‹ÑˆÑŒ'
  },
  {
    id: 62,
    name: ':movie_camera:',
    title: 'movie camera',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/movie_camera.mp3',
    ru: 'ÐºÐ¸Ð½Ð¾ÐºÐ°Ð¼ÐµÑ€Ð°'
  },
  {
    id: 63,
    name: ':newspaper:',
    title: 'newspaper',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/newspaper.mp3',
    ru: 'Ð³Ð°Ð·ÐµÑ‚Ð°'
  },
  {
    id: 64,
    name: ':notebook:',
    title: 'notebook',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/notebook.mp3',
    ru: 'Ð½Ð¾ÑƒÑ‚Ð±ÑƒÐº'
  },
  {
    id: 65,
    name: ':notes:',
    title: 'notes',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/notes.mp3',
    ru: 'Ð½Ð¾Ñ‚Ñ‹'
  },
  {
    id: 66,
    name: ':nut_and_bolt:',
    title: 'nut and bolt',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/nut_and_bolt.mp3',
    ru: 'Ð³Ð°Ð¹ÐºÐ° Ð¸ Ð±Ð¾Ð»Ñ‚'
  },
  {
    id: 67,
    name: ':oil_drum:',
    title: 'oil drum',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/oil_drum.mp3',
    ru: 'Ð±Ð¾Ñ‡ÐºÐ° Ð´Ð»Ñ Ð½ÐµÑ„Ñ‚ÐµÐ¿Ñ€Ð¾Ð´ÑƒÐºÑ‚Ð¾Ð²'
  },
  {
    id: 68,
    name: ':old_key:',
    title: 'old key',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/old_key.mp3',
    ru: 'ÑÑ‚Ð°Ñ€Ñ‹Ð¹ ÐºÐ»ÑŽÑ‡'
  },
  {
    id: 69,
    name: ':cd:',
    title: 'optical disc',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/optical_disc.mp3',
    ru: 'Ð¾Ð¿Ñ‚Ð¸Ñ‡ÐµÑÐºÐ¸Ð¹ Ð´Ð¸ÑÐº'
  },
  {
    id: 70,
    name: ':package:',
    title: 'package',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/package.mp3',
    ru: 'Ð¿Ð°ÐºÐµÑ‚'
  },
  {
    id: 71,
    name: ':pager:',
    title: 'pager',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/pager.mp3',
    ru: 'Ð¿ÐµÐ¹Ð´Ð¶ÐµÑ€'
  },
  {
    id: 72,
    name: ':paperclip:',
    title: 'paperclip',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/paperclip.mp3',
    ru: 'ÑÐºÑ€ÐµÐ¿ÐºÐ°'
  },
  {
    id: 73,
    name: ':computer:',
    title: 'personal computer',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/personal_computer.mp3',
    ru: 'Ð¿ÐµÑ€ÑÐ¾Ð½Ð°Ð»ÑŒÐ½Ñ‹Ð¹ ÐºÐ¾Ð¼Ð¿ÑŒÑŽÑ‚ÐµÑ€'
  },
  {
    id: 74,
    name: ':pill:',
    title: 'pill',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/pill.mp3',
    ru: 'Ñ‚Ð°Ð±Ð»ÐµÑ‚ÐºÐ°'
  },
  {
    id: 75,
    name: ':gun:',
    title: 'pistol',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/pistol.mp3',
    ru: 'Ð¿Ð¸ÑÑ‚Ð¾Ð»ÐµÑ‚'
  },
  {
    id: 76,
    name: ':postbox:',
    title: 'postbox',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/postbox.mp3',
    ru: 'Ð¿Ð¾Ñ‡Ñ‚Ð¾Ð²Ñ‹Ð¹ ÑÑ‰Ð¸Ðº'
  },
  {
    id: 77,
    name: ':potable_water:',
    title: 'potable water',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/potable_water.mp3',
    ru: 'Ð¿Ð¸Ñ‚ÑŒÐµÐ²Ð°Ñ Ð²Ð¾Ð´Ð°'
  },
  {
    id: 78,
    name: ':printer:',
    title: 'printer',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/printer.mp3',
    ru: 'Ð¿Ñ€Ð¸Ð½Ñ‚ÐµÑ€'
  },
  {
    id: 79,
    name: ':pushpin:',
    title: 'pushpin',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/pushpin.mp3',
    ru: 'ÐºÐ°Ð½Ñ†ÐµÐ»ÑÑ€ÑÐºÐ°Ñ ÐºÐ½Ð¾Ð¿ÐºÐ°'
  },
  {
    id: 80,
    name: ':radio:',
    title: 'radio',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/radio.mp3',
    ru: 'Ñ€Ð°Ð´Ð¸Ð¾'
  },
  {
    id: 81,
    name: ':rolled_up_newspaper:',
    title: 'rolled up newspaper',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/rolled_up_newspaper.mp3',
    ru: 'ÑÐ²ÐµÑ€Ð½ÑƒÑ‚Ð°Ñ Ð³Ð°Ð·ÐµÑ‚Ð°'
  },
  {
    id: 82,
    name: ':satellite_antenna:',
    title: 'satellite antenna',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/satellite_antenna.mp3',
    ru: 'ÑÐ¿ÑƒÑ‚Ð½Ð¸ÐºÐ¾Ð²Ð°Ñ Ð°Ð½Ñ‚ÐµÐ½Ð½Ð°'
  },
  {
    id: 83,
    name: ':shield:',
    title: 'shield',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/shield.mp3',
    ru: 'Ñ‰Ð¸Ñ‚'
  },
  {
    id: 84,
    name: ':shopping_trolley:',
    title: 'shopping trolley',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/shopping_trolley.mp3',
    ru: 'Ñ‚ÐµÐ»ÐµÐ¶ÐºÐ° Ð´Ð»Ñ Ð¿Ð¾ÐºÑƒÐ¿Ð¾Ðº'
  },
  {
    id: 85,
    name: ':shower:',
    title: 'shower',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/shower.mp3',
    ru: 'Ð´ÑƒÑˆ'
  },
  {
    id: 86,
    name: ':spiral_calendar_pad:',
    title: 'spiral calendar pad',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/spiral_calendar_pad.mp3',
    ru: 'ÑÐ¿Ð¸Ñ€Ð°Ð»ÑŒÐ½Ñ‹Ð¹ ÐºÐ°Ð»ÐµÐ½Ð´Ð°Ñ€ÑŒ'
  },
  {
    id: 87,
    name: ':spiral_note_pad:',
    title: 'spiral note pad',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/spiral_note_pad.mp3',
    ru: 'ÑÐ¿Ð¸Ñ€Ð°Ð»ÑŒÐ½Ñ‹Ð¹ Ð±Ð»Ð¾ÐºÐ½Ð¾Ñ‚'
  },
  {
    id: 88,
    name: ':stopwatch:',
    title: 'stopwatch',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/stopwatch.mp3',
    ru: 'ÑÐµÐºÑƒÐ½Ð´Ð¾Ð¼ÐµÑ€'
  },
  {
    id: 89,
    name: ':straight_ruler:',
    title: 'straight ruler',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/straight_ruler.mp3',
    ru: 'Ð¿Ñ€ÑÐ¼Ð°Ñ Ð»Ð¸Ð½ÐµÐ¹ÐºÐ°'
  },
  {
    id: 90,
    name: ':studio_microphone:',
    title: 'studio microphone',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/studio_microphone.mp3',
    ru: 'ÑÑ‚ÑƒÐ´Ð¸Ð¹Ð½Ñ‹Ð¹ Ð¼Ð¸ÐºÑ€Ð¾Ñ„Ð¾Ð½'
  },
  {
    id: 91,
    name: ':telephone_receiver:',
    title: 'telephone receiver',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/telephone_receiver.mp3',
    ru: 'Ñ‚ÐµÐ»ÐµÑ„Ð¾Ð½Ð½Ð°Ñ Ñ‚Ñ€ÑƒÐ±ÐºÐ°'
  },
  {
    id: 92,
    name: ':telescope:',
    title: 'telescope',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/telescope.mp3',
    ru: 'Ñ‚ÐµÐ»ÐµÑÐºÐ¾Ð¿'
  },
  {
    id: 93,
    name: ':tv:',
    title: 'television',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/television.mp3',
    ru: 'Ñ‚ÐµÐ»ÐµÐ²Ð¸Ð´ÐµÐ½Ð¸Ðµ'
  },
  {
    id: 94,
    name: ':thermometer:',
    title: 'thermometer',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/thermometer.mp3',
    ru: 'Ñ‚ÐµÑ€Ð¼Ð¾Ð¼ÐµÑ‚Ñ€'
  },
  {
    id: 95,
    name: ':ticket:',
    title: 'ticket',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/ticket.mp3',
    ru: 'Ð¿Ñ€Ð¾ÐµÐ·Ð´Ð½Ð¾Ð¹ Ð±Ð¸Ð»ÐµÑ‚'
  },
  {
    id: 96,
    name: ':toilet:',
    title: 'toilet',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/toilet.mp3',
    ru: 'Ñ‚ÑƒÐ°Ð»ÐµÑ‚'
  },
  {
    id: 97,
    name: ':trackball:',
    title: 'trackbally',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/trackbally.mp3',
    ru: 'Ñ‚Ñ€ÐµÐºÐ±Ð°Ð»ÑŒÐ½Ð¾'
  },
  {
    id: 98,
    name: ':triangular_ruler:',
    title: 'triangular ruler',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/triangular_ruler.mp3',
    ru: 'Ñ‚Ñ€ÐµÑƒÐ³Ð¾Ð»ÑŒÐ½Ð°Ñ Ð»Ð¸Ð½ÐµÐ¹ÐºÐ°'
  },
  {
    id: 99,
    name: ':video_game:',
    title: 'video game',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/video_game.mp3',
    ru: 'Ð²Ð¸Ð´ÐµÐ¾ Ð¸Ð³Ñ€Ð°'
  },
  {
    id: 100,
    name: ':vhs:',
    title: 'videocassette',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/videocassette.mp3',
    ru: 'Ð²Ð¸Ð´ÐµÐ¾ÐºÐ°ÑÑÐµÑ‚Ð°'
  },
  {
    id: 101,
    name: ':wastebasket:',
    title: 'wastebasket',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/wastebasket.mp3',
    ru: 'Ð¼ÑƒÑÐ¾Ñ€Ð½Ð°Ñ ÐºÐ¾Ñ€Ð·Ð¸Ð½Ð°'
  },
  {
    id: 102,
    name: ':watch:',
    title: 'watch',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/watch.mp3',
    ru: 'ÑÐ¼Ð¾Ñ‚Ñ€ÐµÑ‚ÑŒ'
  },
  {
    id: 103,
    name: ':world_map:',
    title: 'world map',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/world_map.mp3',
    ru: 'ÐºÐ°Ñ€Ñ‚Ð° Ð¼Ð¸Ñ€Ð°'
  },
  {
    id: 104,
    name: ':wrench:',
    title: 'wrench',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/07-Objects/mp3/wrench.mp3',
    ru: 'Ð³Ð°ÐµÑ‡Ð½Ñ‹Ð¹ ÐºÐ»ÑŽÑ‡'
  }
]

module.exports = objects
