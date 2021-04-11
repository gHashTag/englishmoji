const people = [
  {
    id: 0,
    name: ':female-artist:',
    title: 'artist',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/artist.mp3',
    ru: 'Ñ…ÑƒÐ´Ð¾Ð¶Ð½Ð¸Ðº'
  },
  {
    id: 1,
    name: ':male-astronaut:',
    title: 'astronaut',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/astronaut.mp3',
    ru: 'Ð°ÑÑ‚Ñ€Ð¾Ð½Ð°Ð²Ñ‚'
  },
  {
    id: 2,
    name: ':baby:',
    title: 'baby',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/baby.mp3',
    ru: 'Ð¼Ð»Ð°Ð´ÐµÐ½ÐµÑ†'
  },
  {
    id: 3,
    name: ':angel:',
    title: 'baby angel',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/baby_angel.mp3',
    ru: 'Ð¼Ð°Ð»ÐµÐ½ÑŒÐºÐ¸Ð¹ Ð°Ð½Ð³ÐµÐ»'
  },
  {
    id: 4,
    name: ':blond-haired-woman:',
    title: 'blond haired woman',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/blond_haired_woman.mp3',
    ru: 'Ð±ÐµÐ»Ð¾ÐºÑƒÑ€Ð°Ñ Ð¶ÐµÐ½Ñ‰Ð¸Ð½Ð°'
  },
  {
    id: 5,
    name: ':boy:',
    title: 'boy',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/boy.mp3',
    ru: 'Ð¼Ð°Ð»ÑŒÑ‡Ð¸Ðº'
  },
  {
    id: 6,
    name: ':brain:',
    title: 'brain',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/brain.mp3',
    ru: 'Ð¼Ð¾Ð·Ð³'
  },
  {
    id: 7,
    name: ':breast-feeding:',
    title: 'breast feeding',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/breast_feeding.mp3',
    ru: 'ÐºÐ¾Ñ€Ð¼Ð»ÐµÐ½Ð¸Ðµ Ð³Ñ€ÑƒÐ´ÑŒÑŽ'
  },
  {
    id: 8,
    name: ':bride_with_veil:',
    title: 'bride with veil',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/bride_with_veil.mp3',
    ru: 'Ð½ÐµÐ²ÐµÑÑ‚Ð° Ñ Ð²ÑƒÐ°Ð»ÑŒÑŽ'
  },
  {
    id: 9,
    name: ':call_me_hand:',
    title: 'call me hand',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/call_me_hand.mp3',
    ru: 'Ð¿Ð¾Ð·Ð²Ð¾Ð½Ð¸ Ð¼Ð½Ðµ'
  },
  {
    id: 10,
    name: ':child:',
    title: 'child',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/child.mp3',
    ru: 'Ñ€ÐµÐ±Ñ‘Ð½Ð¾Ðº'
  },
  {
    id: 11,
    name: ':construction_worker:',
    title: 'construction worker',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/construction_worker.mp3',
    ru: 'ÑÑ‚Ñ€Ð¾Ð¸Ñ‚ÐµÐ»ÑŒ'
  },
  {
    id: 12,
    name: ':male-cook:',
    title: 'cook',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/cook.mp3',
    ru: 'Ð¿Ð¾Ð²Ð°Ñ€'
  },
  {
    id: 13,
    name: ':couple_with_heart:',
    title: 'couple with heart',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/couple_with_heart.mp3',
    ru: 'Ð¿Ð°Ñ€Ð° Ñ ÑÐµÑ€Ð´Ñ†ÐµÐ¼'
  },
  {
    id: 14,
    name: ':crossed_fingers:',
    title: 'crossed fingers',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/crossed_fingers.mp3',
    ru: 'ÑÐºÑ€ÐµÑ‰ÐµÐ½Ð½Ñ‹Ðµ Ð¿Ð°Ð»ÑŒÑ†Ñ‹'
  },
  {
    id: 15,
    name: ':dancers:',
    title: 'dancers with bunny ears',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/dancers_with_bunny_ears.mp3',
    ru: 'Ñ‚Ð°Ð½Ñ†Ð¾Ñ€Ñ‹ Ñ Ð·Ð°ÑÑ‡ÑŒÐ¸Ð¼Ð¸ ÑƒÑˆÐ°Ð¼Ð¸'
  },
  {
    id: 16,
    name: ':man_dancing:',
    title: 'dancing',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/dancing.mp3',
    ru: 'Ñ‚Ð°Ð½Ñ†Ñ‹'
  },
  {
    id: 17,
    name: ':male-detective:',
    title: 'detective',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/detective.mp3',
    ru: 'Ð´ÐµÑ‚ÐµÐºÑ‚Ð¸Ð²'
  },
  {
    id: 18,
    name: ':ear:',
    title: 'ear',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/ear.mp3',
    ru: 'ÑƒÑ…Ð¾'
  },
  {
    id: 19,
    name: ':female_elf:',
    title: 'elf',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/elf.mp3',
    ru: 'ÑÐ»ÑŒÑ„'
  },
  {
    id: 20,
    name: ':eye:',
    title: 'eye',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/eye.mp3',
    ru: 'Ð³Ð»Ð°Ð·'
  },
  {
    id: 22,
    name: ':massage:',
    title: 'face massage',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/face_massage.mp3',
    ru: 'Ð¼Ð°ÑÑÐ°Ð¶ Ð»Ð¸Ñ†Ð°'
  },
  {
    id: 23,
    name: ':female-factory-worker:',
    title: 'factory worker',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/factory_worker.mp3',
    ru: 'Ñ€Ð°Ð±Ð¾Ñ‚Ð½Ð¸Ðº Ñ„Ð°Ð±Ñ€Ð¸ÐºÐ¸'
  },
  {
    id: 24,
    name: ':fairy:',
    title: 'fairy',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/fairy.mp3',
    ru: 'Ñ„ÐµÑ'
  },
  {
    id: 25,
    name: ':family:',
    title: 'family',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/family.mp3',
    ru: 'ÑÐµÐ¼ÑŒÑ'
  },
  {
    id: 26,
    name: ':female-farmer:',
    title: 'farmer',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/farmer.mp3',
    ru: 'Ñ„ÐµÑ€Ð¼ÐµÑ€'
  },
  {
    id: 27,
    name: ':santa:',
    title: 'father christmas',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/father_christmas.mp3',
    ru: 'Ð”ÐµÐ´ ÐœÐ¾Ñ€Ð¾Ð·'
  },
  {
    id: 28,
    name: ':male-firefighter:',
    title: 'firefighter',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/firefighter.mp3',
    ru: 'Ð¿Ð¾Ð¶Ð°Ñ€Ð½Ñ‹Ð¹'
  },
  {
    id: 29,
    name: ':pray:',
    title: 'folded hands',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/folded_hands.mp3',
    ru: 'ÑÐ»Ð¾Ð¶ÐµÐ½Ð½Ñ‹Ðµ Ñ€ÑƒÐºÐ¸'
  },
  {
    id: 30,
    name: ':footprints:',
    title: 'footprints',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/footprints.mp3',
    ru: 'ÑÐ»ÐµÐ´Ñ‹'
  },
  {
    id: 31,
    name: ':genie:',
    title: 'genie',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/genie.mp3',
    ru: 'Ð´Ð¶Ð¸Ð½'
  },
  {
    id: 32,
    name: ':girl:',
    title: 'girl',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/girl.mp3',
    ru: 'Ð´ÐµÐ²Ð¾Ñ‡ÐºÐ°'
  },
  {
    id: 33,
    name: ':male-guard:',
    title: 'guard',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/guard.mp3',
    ru: 'Ð¾Ñ…Ñ€Ð°Ð½Ð½Ð¸Ðº'
  },
  {
    id: 34,
    name: ':haircut:',
    title: 'haircut',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/haircut.mp3',
    ru: 'ÑÑ‚Ñ€Ð¸Ð¶ÐºÐ° Ð²Ð¾Ð»Ð¾Ñ'
  },
  {
    id: 35,
    name: ':raised_hand_with_fingers_splayed:',
    title: 'hand with fingers splayed',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/hand_with_fingers_splayed.mp3',
    ru: 'Ñ€ÑƒÐºÐ° Ñ Ñ€Ð°ÑÑ‚Ð¾Ð¿Ñ‹Ñ€ÐµÐ½Ð½Ñ‹Ð¼Ð¸ Ð¿Ð°Ð»ÑŒÑ†Ð°Ð¼Ð¸'
  },
  {
    id: 36,
    name: ':handshake:',
    title: 'handshake',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/handshake.mp3',
    ru: 'Ñ€ÑƒÐºÐ¾Ð¿Ð¾Ð¶Ð°Ñ‚Ð¸Ðµ'
  },
  {
    id: 37,
    name: ':two_women_holding_hands:',
    title: 'hold hands',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/hold_hands.mp3',
    ru: 'Ð´ÐµÑ€Ð¶Ð°Ñ‚ÑŒÑÑ Ð·Ð° Ñ€ÑƒÐºÐ¸'
  },
  {
    id: 38,
    name: ':information_desk_person:',
    title: 'information desk person',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/information_desk_person.mp3',
    ru: 'ÑÐ¾Ñ‚Ñ€ÑƒÐ´Ð½Ð¸Ðº ÑÐ¿Ñ€Ð°Ð²Ð¾Ñ‡Ð½Ð¾Ð¹ ÑÐ»ÑƒÐ¶Ð±Ñ‹'
  },
  {
    id: 39,
    name: ':male-judge:',
    title: 'judge',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/judge.mp3',
    ru: 'ÑÑƒÐ´ÑŒÑ'
  },
  {
    id: 40,
    name: ':woman-kiss-man:',
    title: 'kiss',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/kiss.mp3',
    ru: 'Ð¿Ð¾Ñ†ÐµÐ»ÑƒÐ¹'
  },
  {
    id: 41,
    name: ':man_in_business_suit_levitating:',
    title: 'levitation',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/levitation.mp3',
    ru: 'Ð»ÐµÐ²Ð¸Ñ‚Ð°Ñ†Ð¸Ñ'
  },
  {
    id: 42,
    name: ':person_in_lotus_position:',
    title: 'lotus position',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/lotus_position.mp3',
    ru: 'Ð¿Ð¾Ð·Ð° Ð»Ð¾Ñ‚Ð¾ÑÐ°'
  },
  {
    id: 43,
    name: ':i_love_you_hand_sign:',
    title: 'love you gesture',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/love_you_gesture.mp3',
    ru: 'Ð¶ÐµÑÑ‚ Ð»ÑŽÐ±Ð²Ð¸'
  },
  {
    id: 44,
    name: ':mage:',
    title: 'mage',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/mage.mp3',
    ru: 'Ð¼Ð°Ð³'
  },
  {
    id: 45,
    name: ':man:',
    title: 'man',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/man.mp3',
    ru: 'Ð¼ÑƒÐ¶Ñ‡Ð¸Ð½Ð°'
  },
  {
    id: 46,
    name: ':man-gesturing-no:',
    title: 'man gesturing-no',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/man_gesturing-no.mp3',
    ru: 'Ð¼ÑƒÐ¶Ñ‡Ð¸Ð½Ð° Ð¶ÐµÑÑ‚Ð¸ÐºÑƒÐ»Ð¸Ñ€ÑƒÐµÑ‚-Ð½ÐµÑ‚'
  },
  {
    id: 47,
    name: ':man_in_tuxedo:',
    title: 'man in tuxedo',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/man_in_tuxedo.mp3',
    ru: 'Ð¼ÑƒÐ¶Ñ‡Ð¸Ð½Ð° Ð² ÑÐ¼Ð¾ÐºÐ¸Ð½Ð³Ðµ'
  },
  {
    id: 48,
    name: ':bearded_person:',
    title: 'man with a beard',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/man_with_a_beard.mp3',
    ru: 'Ð¼ÑƒÐ¶Ñ‡Ð¸Ð½Ð° Ñ Ð±Ð¾Ñ€Ð¾Ð´Ð¾Ð¹'
  },
  {
    id: 49,
    name: ':man-facepalming:',
    title: 'man-facepalming',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/man-facepalming.mp3',
    ru: 'Ð»Ð°Ð´Ð¾Ð½ÑŒÑŽ Ð¿Ð¾ Ð»Ð¸Ñ†Ñƒ'
  },
  {
    id: 50,
    name: ':mermaid:',
    title: 'mermaid',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/mermaid.mp3',
    ru: 'Ñ€ÑƒÑÐ°Ð»ÐºÐ°'
  },
  {
    id: 51,
    name: ':merman:',
    title: 'merman',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/merman.mp3',
    ru: 'Ð²Ð¾Ð´ÑÐ½Ð¾Ð¹'
  },
  {
    id: 52,
    name: ':middle_finger:',
    title: 'middle finger',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/middle_finger.mp3',
    ru: 'ÑÑ€ÐµÐ´Ð½Ð¸Ð¹ Ð¿Ð°Ð»ÐµÑ†'
  },
  {
    id: 53,
    name: ':lips:',
    title: 'mouth',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/mouth.mp3',
    ru: 'Ñ€Ð¾Ñ‚'
  },
  {
    id: 54,
    name: ':mrs_claus:',
    title: 'mrs. claus',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/mrs._claus.mp3',
    ru: 'Ð¡Ð½ÐµÐ³ÑƒÑ€Ð¾Ñ‡ÐºÐ°'
  },
  {
    id: 55,
    name: ':muscle:',
    title: 'muscle',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/muscle.mp3',
    ru: 'Ð¼Ñ‹ÑˆÑ†Ñ‹'
  },
  {
    id: 56,
    name: ':nail_care:',
    title: 'nail care',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/nail_care.mp3',
    ru: 'ÑƒÑ…Ð¾Ð´ Ð·Ð° Ð½Ð¾Ð³Ñ‚ÑÐ¼Ð¸'
  },
  {
    id: 57,
    name: ':nose:',
    title: 'nose',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/nose.mp3',
    ru: 'Ð½Ð¾Ñ'
  },
  {
    id: 58,
    name: ':male-office-worker:',
    title: 'office worker',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/office_worker.mp3',
    ru: 'Ð¾Ñ„Ð¸ÑÐ½Ñ‹Ð¹ Ñ€Ð°Ð±Ð¾Ñ‚Ð½Ð¸Ðº'
  },
  {
    id: 59,
    name: 'ok_hand',
    title: 'ok',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/ok.mp3',
    ru: 'Ñ…Ð¾Ñ€Ð¾ÑˆÐ¾'
  },
  {
    id: 60,
    name: ':older_woman:',
    title: 'old woman',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/old_woman.mp3',
    ru: 'Ð¿Ð¾Ð¶Ð¸Ð»Ð°Ñ Ð¶ÐµÐ½Ñ‰Ð¸Ð½Ð°'
  },
  {
    id: 61,
    name: ':older_adult:',
    title: 'older person',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/older_person.mp3',
    ru: 'Ð¿Ð¾Ð¶Ð¸Ð»Ð¾Ð¹ Ñ‡ÐµÐ»Ð¾Ð²ÐµÐº'
  },
  {
    id: 62,
    name: ':facepunch:',
    title: 'oncoming fist',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/oncoming_fist.mp3',
    ru: 'Ð²ÑÑ‚Ñ€ÐµÑ‡Ð½Ñ‹Ð¹ ÐºÑƒÐ»Ð°Ðº'
  },
  {
    id: 63,
    name: ':open_hands:',
    title: 'open hands',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/open_hands.mp3',
    ru: 'Ð¾Ñ‚ÐºÑ€Ñ‹Ñ‚Ñ‹Ðµ Ñ€ÑƒÐºÐ¸'
  },
  {
    id: 64,
    name: ':palms_up_together:',
    title: 'palms up together',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/palms_up_together.mp3',
    ru: 'Ð»Ð°Ð´Ð¾Ð½Ð¸ Ð²Ð¼ÐµÑÑ‚Ðµ'
  },
  {
    id: 65,
    name: ':walking:',
    title: 'pedestrian',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/pedestrian.mp3',
    ru: 'Ð¿ÐµÑˆÐµÑ…Ð¾Ð´'
  },
  {
    id: 66,
    name: ':person_with_blond_hair:',
    title: 'person',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/person.mp3',
    ru: 'Ñ‡ÐµÐ»Ð¾Ð²ÐµÐº'
  },
  {
    id: 67,
    name: ':bow:',
    title: 'person bowing deeply',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/person_bowing_deeply.mp3',
    ru: 'Ñ‡ÐµÐ»Ð¾Ð²ÐµÐº Ð³Ð»ÑƒÐ±Ð¾ÐºÐ¾ ÐºÐ»ÑÐ½Ñ‘Ñ‚ÑÑ'
  },
  {
    id: 68,
    name: ':person_frowning:',
    title: 'person frowning',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/person_frowning.mp3',
    ru: 'Ñ…Ð¼ÑƒÑ€Ñ‹Ð¹ Ñ‡ÐµÐ»Ð¾Ð²ÐµÐº'
  },
  {
    id: 69,
    name: ':person_in_steamy_room:',
    title: 'person in steamy room',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/person_in_steamy_room.mp3',
    ru: 'Ñ‡ÐµÐ»Ð¾Ð²ÐµÐº Ð² Ð¿Ð°Ñ€Ð½Ð¾Ð¹'
  },
  {
    id: 70,
    name: ':man-wearing-turban:',
    title: 'person wearing turban',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/person_wearing_turban.mp3',
    ru: 'Ñ‡ÐµÐ»Ð¾Ð²ÐµÐº Ð² Ñ‚ÑŽÑ€Ð±Ð°Ð½Ðµ'
  },
  {
    id: 71,
    name: ':man_with_gua_pi_mao:',
    title: 'person with skullcap',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/person_with_skullcap.mp3',
    ru: 'Ñ‡ÐµÐ»Ð¾Ð²ÐµÐº Ñ Ñ‚ÑŽÐ±Ð¸Ñ‚ÐµÐ¹ÐºÐ¾Ð¹'
  },
  {
    id: 72,
    name: ':male-pilot:',
    title: 'pilot',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/pilot.mp3',
    ru: 'Ð¿Ð¸Ð»Ð¾Ñ‚'
  },
  {
    id: 73,
    name: ':point_down:',
    title: 'pointer down',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/pointer_down.mp3',
    ru: 'ÑƒÐºÐ°Ð·Ð°Ñ‚ÐµÐ»ÑŒ Ð²Ð½Ð¸Ð·'
  },
  {
    id: 74,
    name: ':point_left:',
    title: 'pointer to the left',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/pointer_to_the_left.mp3',
    ru: 'ÑƒÐºÐ°Ð·Ð°Ñ‚ÐµÐ»ÑŒ Ð½Ð°Ð»ÐµÐ²Ð¾'
  },
  {
    id: 75,
    name: ':point_right:',
    title: 'pointer to the right',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/pointer_to_the_right.mp3',
    ru: 'ÑƒÐºÐ°Ð·Ð°Ñ‚ÐµÐ»ÑŒ Ð²Ð¿Ñ€Ð°Ð²Ð¾'
  },
  {
    id: 76,
    name: ':point_up_2:',
    title: 'pointer up',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/pointer_up.mp3',
    ru: 'ÑƒÐºÐ°Ð·Ð°Ñ‚ÐµÐ»ÑŒ Ð²Ð²ÐµÑ€Ñ…'
  },
  {
    id: 77,
    name: ':cop:',
    title: 'police officer',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/police_officer.mp3',
    ru: 'Ð¿Ð¾Ð»Ð¸Ñ†ÐµÐ¹ÑÐºÐ¸Ð¹'
  },
  {
    id: 78,
    name: ':pregnant_woman:',
    title: 'pregnant woman',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/pregnant_woman.mp3',
    ru: 'Ð±ÐµÑ€ÐµÐ¼ÐµÐ½Ð½Ð°Ñ Ð¶ÐµÐ½Ñ‰Ð¸Ð½Ð°'
  },
  {
    id: 79,
    name: ':princess:',
    title: 'princess',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/princess.mp3',
    ru: 'Ð¿Ñ€Ð¸Ð½Ñ†ÐµÑÑÐ°'
  },
  {
    id: 80,
    name: ':raised_back_of_hand:',
    title: 'raised back of hand',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/raised_back_of_hand.mp3',
    ru: 'Ð¿Ð¾Ð´Ð½ÑÑ‚Ð°Ñ Ñ‚Ñ‹Ð»ÑŒÐ½Ð°Ñ ÑÑ‚Ð¾Ñ€Ð¾Ð½Ð° Ñ€ÑƒÐºÐ¸'
  },
  {
    id: 81,
    name: ':fist:',
    title: 'raised fist',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/raised_fist.mp3',
    ru: 'Ð¿Ð¾Ð´Ð½ÑÑ‚Ñ‹Ð¹ ÐºÑƒÐ»Ð°Ðº'
  },
  {
    id: 82,
    name: ':hand:',
    title: 'raised hand',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/raised_hand.mp3',
    ru: 'Ð¿Ð¾Ð´Ð½ÑÑ‚Ð°Ñ Ñ€ÑƒÐºÐ°'
  },
  {
    id: 83,
    name: ':raised_hands:',
    title: 'raising hands',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/raising_hands.mp3',
    ru: 'Ð¿Ð¾Ð´Ð½Ð¸Ð¼Ð°Ñ‚ÑŒ Ñ€ÑƒÐºÐ¸'
  },
  {
    id: 84,
    name: ':runner:',
    title: 'running',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/running.mp3',
    ru: 'Ð±ÐµÐ³'
  },
  {
    id: 85,
    name: ':female-scientist:',
    title: 'scientist',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/scientist.mp3',
    ru: 'ÑƒÑ‡ÐµÐ½Ñ‹Ð¹'
  },
  {
    id: 86,
    name: ':selfie:',
    title: 'selfie',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/selfie.mp3',
    ru: 'ÑÐµÐ»Ñ„Ð¸'
  },
  {
    id: 87,
    name: ':shrug:',
    title: 'shrug',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/shrug.mp3',
    ru: 'Ð¿Ð¾Ð¶Ð¸Ð¼Ñ‚ÑŒ Ð¿Ð»ÐµÑ‡Ð°Ð¼Ð¸'
  },
  {
    id: 88,
    name: ':the_horns:',
    title: 'sign of the horns',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/sign_of_the_horns.mp3',
    ru: 'Ð·Ð½Ð°Ðº Ñ€Ð¾Ð³Ð¾Ð²'
  },
  {
    id: 89,
    name: ':female-singer:',
    title: 'singer',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/singer.mp3',
    ru: 'Ð¿ÐµÐ²Ð¸Ñ†Ð°'
  },
  {
    id: 90,
    name: ':speaking_head_in_silhouette:',
    title: 'speaking head',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/speaking_head.mp3',
    ru: 'Ð³Ð¾Ð²Ð¾Ñ€ÑÑ‰Ð°Ñ Ð³Ð¾Ð»Ð¾Ð²Ð°'
  },
  {
    id: 91,
    name: ':male-student:',
    title: 'student',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/student.mp3',
    ru: 'ÑÑ‚ÑƒÐ´ÐµÐ½Ñ‚'
  },
  {
    id: 92,
    name: ':male-teacher:',
    title: 'teacher',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/teacher.mp3',
    ru: 'ÑƒÑ‡Ð¸Ñ‚ÐµÐ»ÑŒ'
  },
  {
    id: 93,
    name: ':female-technologist:',
    title: 'technologist',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/technologist.mp3',
    ru: 'Ñ‚ÐµÑ…Ð½Ð¾Ð»Ð¾Ð³'
  },
  {
    id: 94,
    name: ':-1:',
    title: 'thumb down',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/thumb_down.mp3',
    ru: 'Ð¿Ð°Ð»ÐµÑ† Ð²Ð½Ð¸Ð·'
  },
  {
    id: 95,
    name: ':+1:',
    title: 'thumbs up',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/thumbs_up.mp3',
    ru: 'Ð½ÐµÐ´ÑƒÑ€Ð½Ð¾'
  },
  {
    id: 96,
    name: ':tongue:',
    title: 'tongue',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/tongue.mp3',
    ru: 'ÑÐ·Ñ‹Ðº'
  },
  {
    id: 97,
    name: ':vampire:',
    title: 'vampire',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/vampire.mp3',
    ru: 'Ð²Ð°Ð¼Ð¿Ð¸Ñ€'
  },
  {
    id: 98,
    name: ':spock-hand:',
    title: 'vulcan salute',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/vulcan_salute.mp3',
    ru: 'Ð¶ÐµÑÑ‚ Ð¿Ñ€Ð¸Ð²ÐµÑ‚ÑÑ‚Ð²Ð¸Ñ'
  },
  {
    id: 99,
    name: ':wave:',
    title: 'waving hand',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/waving_hand.mp3',
    ru: 'Ð¼Ð°ÑˆÑƒÑ‰Ð°Ñ Ñ€ÑƒÐºÐ°'
  },
  {
    id: 100,
    name: ':woman-gesturing-ok:',
    title: 'woman gesturing-ok',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/woman_gesturing-ok.mp3',
    ru: 'Ð¶ÐµÐ½Ñ‰Ð¸Ð½Ð° Ð¶ÐµÑÑ‚Ð¸ÐºÑƒÐ»Ð¸Ñ€ÑƒÐµÑ‚-Ð¾Ðº'
  },
  {
    id: 101,
    name: ':person_with_headscarf:',
    title: 'woman in headscarf',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/woman_in_headscarf.mp3',
    ru: 'Ð¶ÐµÐ½Ñ‰Ð¸Ð½Ð° Ð² Ð¿Ð»Ð°Ñ‚ÐºÐµ'
  },
  {
    id: 102,
    name: ':woman-pouting:',
    title: 'woman pouting',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/woman_pouting.mp3',
    ru: 'Ð½Ð°Ñ…Ð¼ÑƒÑ€ÐµÐ½Ð½Ð°Ñ Ð¶ÐµÐ½Ñ‰Ð¸Ð¸Ð½Ð°'
  },
  {
    id: 103,
    name: ':woman-raising-hand:',
    title: 'woman raising hand',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/woman_raising_hand.mp3',
    ru: 'Ð¶ÐµÐ½Ñ‰Ð¸Ð½Ð° Ð¿Ð¾Ð´Ð½Ð¸Ð¼Ð°ÐµÑ‚ Ñ€ÑƒÐºÑƒ'
  },
  {
    id: 104,
    name: ':writing_hand:',
    title: 'writing hand',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/writing_hand.mp3',
    ru: 'Ð¿Ð¸Ñ‰ÑƒÑ‰Ð°Ñ Ñ€ÑƒÐºÐ°'
  },
  {
    id: 105,
    name: ':zombie:',
    title: 'zombie',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/zombie.mp3',
    ru: 'Ð·Ð¾Ð¼Ð±Ð¸'
  },
  {
    id: 106,
    name: ':clap:',
    title: 'Ñlapping hands',
    url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/EnForKids/11-People/mp3/Ñlapping_hands.mp3',
    ru: 'Ñ…Ð»Ð¾Ð¿Ð°Ñ Ð² Ð»Ð°Ð´Ð¾ÑˆÐ¸'
  }
]

module.exports = people
