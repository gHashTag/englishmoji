/* eslint-disable indent */
require('dotenv').config()
const { Telegraf, session, Stage, BaseScene, Markup: m } = require('telegraf')
const TelegrafI18n = require('telegraf-i18n')
const { level, getSticker, MyContext } = require('./helpers')
const { food, animals, activity, dress, travel, objects, symbols, time, people, nature } = require('./quiz')
const path = require('path')
const emoji = require('node-emoji')

// const index = 1
// const arr = jsEn

const getObj = (arr, index) => {
  const obj = arr[index] // получаем объект теста
  const removeArr = arr.filter((x) => x.name !== obj.name) // удаляем его из массива
  const shuffle = (x) => x.sort(() => Math.round(Math.random() * 100) - 50) // перемешивание массива
  const random = shuffle(removeArr).map(({ name }) => emoji.get(name)) // получаем емодзи в перемешеном массиве
  const shuffleArr = random.slice(0, 5) // отрезаем массив до 6-ти
  const randomInt = (min = 0, max = 5) => Math.floor(Math.random() * (max - min + 1)) + min // рендомное число
  const int = randomInt()
  const insert = (x, i, newItem) => [...x.slice(0, i), newItem, ...x.slice(i)]
  const newArr = insert(shuffleArr, int, emoji.get(obj.name))
  obj.random = newArr
  obj.correct_option_id = int
  return obj
}

const i18n = new TelegrafI18n({
  defaultLanguage: 'en',
  directory: path.resolve(__dirname, 'locales')
})

let BOT_TOKEN

if (process.env.NODE_ENV === 'production') {
  BOT_TOKEN = process.env.BOT_TOKEN
} else {
  BOT_TOKEN = process.env.BOT_TOKEN_TEST
}

const bot = new Telegraf(BOT_TOKEN, { contextType: MyContext })

bot.use(i18n.middleware())

const stage = new Stage()

bot.use(session())
bot.use(stage)

bot.command('start', ({ reply, i18n }) => {
  const btns = [
    m.callbackButton('Food🍕', 'test_food'),
    m.callbackButton('Animals🐳', 'test_animals'),
    m.callbackButton('Activity🏀', 'test_activity'),
    m.callbackButton('Dress👗', 'test_dress'),
    m.callbackButton('Travel🌎', 'test_travel'),
    m.callbackButton('Objects🎮', 'test_objects'),
    m.callbackButton('Symbols☮️', 'test_symbols'),
    m.callbackButton('Time🕐', 'test_time'),
    m.callbackButton('People👩‍🎤', 'test_people')
  ]
  const kb = m.inlineKeyboard(btns, { columns: 1 })
  return reply(`${i18n.t('intro')}:`, kb.extra())
})

bot.action(/^test_(\w+)$/, async (ctx) => {
  await ctx.scene.enter('room-' + ctx.match[1])
  await ctx.editMessageText('🚀', m.inlineKeyboard([]).extra())
})

bot.command('session', (ctx) => ctx.reply(ctx.session))

const foodRoom = new BaseScene('room-food').enter((ctx) => {
  const { i18n, session, replyWithQuiz } = ctx

  const questions = food
  const questionIndex = 0
  const counter = 0
  session.counter = counter
  session.questionIndex = questionIndex

  const { title, correct_option_id, random } = getObj(questions, questionIndex)

  replyWithQuiz(`${i18n.t('Question')}: 1 ${i18n.t('from')} ${questions.length}\n\n${title}`, random, {
    correct_option_id,
    is_anonymous: false
  })
})
stage.register(foodRoom)

foodRoom.on('poll_answer', ({ session, pollAnswer, replyWithQuiz, i18n, reply, scene, update }) => {
  const questions = food
  const questionIndex = ++session.questionIndex
  const result = questions[questionIndex - 1].correct_option_id === pollAnswer.option_ids[0]
  result && ++session.counter
  const length = questions.length

  if (questionIndex !== questions.length) {
    const { title, correct_option_id, random } = getObj(questions, questionIndex)
    replyWithQuiz(
      `${i18n.t('Question')}: ${questionIndex + 1} ${i18n.t('from')} ${questions.length}\n\n${title}
       


       ${i18n.t('score')} ${session.counter}`,
      random,
      {
        correct_option_id,
        is_anonymous: false
      }
    )
  } else {
    reply(
      `${i18n.t('score')} ${session.counter}. ${i18n.t('level')}: ${level(session.counter, length)} ${getSticker(
        session.counter,
        length
      )}`
    )
  }

  scene.current.leave()
})

const animalsRoom = new BaseScene('room-animals').enter((ctx) => {
  const { i18n, session, replyWithQuiz } = ctx

  const questions = animals
  const questionIndex = 0
  const counter = 0
  session.counter = counter
  session.questionIndex = questionIndex

  const { title, correct_option_id, random } = getObj(questions, questionIndex)

  replyWithQuiz(`${i18n.t('Question')}: 1 ${i18n.t('from')} ${questions.length}\n\n${title}`, random, {
    correct_option_id,
    is_anonymous: false
  })
})
stage.register(animalsRoom)

animalsRoom.on('poll_answer', ({ session, pollAnswer, replyWithQuiz, i18n, reply, scene, update }) => {
  const questions = animals
  const questionIndex = ++session.questionIndex
  const result = questions[questionIndex - 1].correct_option_id === pollAnswer.option_ids[0]
  result && ++session.counter
  const length = questions.length

  if (questionIndex !== questions.length) {
    const { title, correct_option_id, random } = getObj(questions, questionIndex)
    replyWithQuiz(
      `${i18n.t('Question')}: ${questionIndex + 1} ${i18n.t('from')} ${questions.length}\n\n${title}
       


       ${i18n.t('score')} ${session.counter}`,
      random,
      {
        correct_option_id,
        is_anonymous: false
      }
    )
  } else {
    reply(
      `${i18n.t('score')} ${session.counter}. ${i18n.t('level')}: ${level(session.counter, length)} ${getSticker(
        session.counter,
        length
      )}`
    )
  }

  scene.current.leave()
})

const activityRoom = new BaseScene('room-activity').enter((ctx) => {
  const { i18n, session, replyWithQuiz } = ctx

  const questions = activity
  const questionIndex = 0
  const counter = 0
  session.counter = counter
  session.questionIndex = questionIndex

  const { title, correct_option_id, random } = getObj(questions, questionIndex)

  replyWithQuiz(`${i18n.t('Question')}: 1 ${i18n.t('from')} ${questions.length}\n\n${title}`, random, {
    correct_option_id,
    is_anonymous: false
  })
})
stage.register(activityRoom)

activityRoom.on('poll_answer', ({ session, pollAnswer, replyWithQuiz, i18n, reply, scene, update }) => {
  const questions = activity
  const questionIndex = ++session.questionIndex
  const result = questions[questionIndex - 1].correct_option_id === pollAnswer.option_ids[0]
  result && ++session.counter
  const length = questions.length

  if (questionIndex !== questions.length) {
    const { title, correct_option_id, random } = getObj(questions, questionIndex)
    replyWithQuiz(
      `${i18n.t('Question')}: ${questionIndex + 1} ${i18n.t('from')} ${questions.length}\n\n${title}
       


       ${i18n.t('score')} ${session.counter}`,
      random,
      {
        correct_option_id,
        is_anonymous: false
      }
    )
  } else {
    reply(
      `${i18n.t('score')} ${session.counter}. ${i18n.t('level')}: ${level(session.counter, length)} ${getSticker(
        session.counter,
        length
      )}`
    )
  }

  scene.current.leave()
})

const dressRoom = new BaseScene('room-dress').enter((ctx) => {
  const { i18n, session, replyWithQuiz } = ctx

  const questions = dress
  const questionIndex = 0
  const counter = 0
  session.counter = counter
  session.questionIndex = questionIndex

  const { title, correct_option_id, random } = getObj(questions, questionIndex)

  replyWithQuiz(`${i18n.t('Question')}: 1 ${i18n.t('from')} ${questions.length}\n\n${title}`, random, {
    correct_option_id,
    is_anonymous: false
  })
})
stage.register(dressRoom)

dressRoom.on('poll_answer', ({ session, pollAnswer, replyWithQuiz, i18n, reply, scene, update }) => {
  const questions = dress
  const questionIndex = ++session.questionIndex
  const result = questions[questionIndex - 1].correct_option_id === pollAnswer.option_ids[0]
  result && ++session.counter
  const length = questions.length

  if (questionIndex !== questions.length) {
    const { title, correct_option_id, random } = getObj(questions, questionIndex)
    replyWithQuiz(
      `${i18n.t('Question')}: ${questionIndex + 1} ${i18n.t('from')} ${questions.length}\n\n${title}
       


       ${i18n.t('score')} ${session.counter}`,
      random,
      {
        correct_option_id,
        is_anonymous: false
      }
    )
  } else {
    reply(
      `${i18n.t('score')} ${session.counter}. ${i18n.t('level')}: ${level(session.counter, length)} ${getSticker(
        session.counter,
        length
      )}`
    )
  }

  scene.current.leave()
})

const travelRoom = new BaseScene('room-travel').enter((ctx) => {
  const { i18n, session, replyWithQuiz } = ctx

  const questions = travel
  const questionIndex = 0
  const counter = 0
  session.counter = counter
  session.questionIndex = questionIndex

  const { title, correct_option_id, random } = getObj(questions, questionIndex)

  replyWithQuiz(`${i18n.t('Question')}: 1 ${i18n.t('from')} ${questions.length}\n\n${title}`, random, {
    correct_option_id,
    is_anonymous: false
  })
})
stage.register(travelRoom)

travelRoom.on('poll_answer', ({ session, pollAnswer, replyWithQuiz, i18n, reply, scene, update }) => {
  const questions = travel
  const questionIndex = ++session.questionIndex
  const result = questions[questionIndex - 1].correct_option_id === pollAnswer.option_ids[0]
  result && ++session.counter
  const length = questions.length

  if (questionIndex !== questions.length) {
    const { title, correct_option_id, random } = getObj(questions, questionIndex)
    replyWithQuiz(
      `${i18n.t('Question')}: ${questionIndex + 1} ${i18n.t('from')} ${questions.length}\n\n${title}
       


       ${i18n.t('score')} ${session.counter}`,
      random,
      {
        correct_option_id,
        is_anonymous: false
      }
    )
  } else {
    reply(
      `${i18n.t('score')} ${session.counter}. ${i18n.t('level')}: ${level(session.counter, length)} ${getSticker(
        session.counter,
        length
      )}`
    )
  }

  scene.current.leave()
})

const objectsRoom = new BaseScene('room-objects').enter((ctx) => {
  const { i18n, session, replyWithQuiz } = ctx

  const questions = objects
  const questionIndex = 0
  const counter = 0
  session.counter = counter
  session.questionIndex = questionIndex

  const { title, correct_option_id, random } = getObj(questions, questionIndex)

  replyWithQuiz(`${i18n.t('Question')}: 1 ${i18n.t('from')} ${questions.length}\n\n${title}`, random, {
    correct_option_id,
    is_anonymous: false
  })
})
stage.register(objectsRoom)

objectsRoom.on('poll_answer', ({ session, pollAnswer, replyWithQuiz, i18n, reply, scene, update }) => {
  const questions = objects
  const questionIndex = ++session.questionIndex
  const result = questions[questionIndex - 1].correct_option_id === pollAnswer.option_ids[0]
  result && ++session.counter
  const length = questions.length

  if (questionIndex !== questions.length) {
    const { title, correct_option_id, random } = getObj(questions, questionIndex)
    replyWithQuiz(
      `${i18n.t('Question')}: ${questionIndex + 1} ${i18n.t('from')} ${questions.length}\n\n${title}
       


       ${i18n.t('score')} ${session.counter}`,
      random,
      {
        correct_option_id,
        is_anonymous: false
      }
    )
  } else {
    reply(
      `${i18n.t('score')} ${session.counter}. ${i18n.t('level')}: ${level(session.counter, length)} ${getSticker(
        session.counter,
        length
      )}`
    )
  }

  scene.current.leave()
})

const symbolsRoom = new BaseScene('room-symbols').enter((ctx) => {
  const { i18n, session, replyWithQuiz } = ctx

  const questions = symbols
  const questionIndex = 0
  const counter = 0
  session.counter = counter
  session.questionIndex = questionIndex

  const { title, correct_option_id, random } = getObj(questions, questionIndex)

  replyWithQuiz(`${i18n.t('Question')}: 1 ${i18n.t('from')} ${questions.length}\n\n${title}`, random, {
    correct_option_id,
    is_anonymous: false
  })
})
stage.register(symbolsRoom)

symbolsRoom.on('poll_answer', ({ session, pollAnswer, replyWithQuiz, i18n, reply, scene, update }) => {
  const questions = symbols
  const questionIndex = ++session.questionIndex
  const result = questions[questionIndex - 1].correct_option_id === pollAnswer.option_ids[0]
  result && ++session.counter
  const length = questions.length

  if (questionIndex !== questions.length) {
    const { title, correct_option_id, random } = getObj(questions, questionIndex)
    replyWithQuiz(
      `${i18n.t('Question')}: ${questionIndex + 1} ${i18n.t('from')} ${questions.length}\n\n${title}
       


       ${i18n.t('score')} ${session.counter}`,
      random,
      {
        correct_option_id,
        is_anonymous: false
      }
    )
  } else {
    reply(
      `${i18n.t('score')} ${session.counter}. ${i18n.t('level')}: ${level(session.counter, length)} ${getSticker(
        session.counter,
        length
      )}`
    )
  }

  scene.current.leave()
})

const timeRoom = new BaseScene('room-time').enter((ctx) => {
  const { i18n, session, replyWithQuiz } = ctx

  const questions = time
  const questionIndex = 0
  const counter = 0
  session.counter = counter
  session.questionIndex = questionIndex

  const { title, correct_option_id, random } = getObj(questions, questionIndex)

  replyWithQuiz(`${i18n.t('Question')}: 1 ${i18n.t('from')} ${questions.length}\n\n${title}`, random, {
    correct_option_id,
    is_anonymous: false
  })
})
stage.register(timeRoom)

timeRoom.on('poll_answer', ({ session, pollAnswer, replyWithQuiz, i18n, reply, scene, update }) => {
  const questions = time
  const questionIndex = ++session.questionIndex
  const result = questions[questionIndex - 1].correct_option_id === pollAnswer.option_ids[0]
  result && ++session.counter
  const length = questions.length

  if (questionIndex !== questions.length) {
    const { title, correct_option_id, random } = getObj(questions, questionIndex)
    replyWithQuiz(
      `${i18n.t('Question')}: ${questionIndex + 1} ${i18n.t('from')} ${questions.length}\n\n${title}
       


       ${i18n.t('score')} ${session.counter}`,
      random,
      {
        correct_option_id,
        is_anonymous: false
      }
    )
  } else {
    reply(
      `${i18n.t('score')} ${session.counter}. ${i18n.t('level')}: ${level(session.counter, length)} ${getSticker(
        session.counter,
        length
      )}`
    )
  }

  scene.current.leave()
})

const peopleRoom = new BaseScene('room-people').enter((ctx) => {
  const { i18n, session, replyWithQuiz } = ctx

  const questions = people
  const questionIndex = 0
  const counter = 0
  session.counter = counter
  session.questionIndex = questionIndex

  const { title, correct_option_id, random } = getObj(questions, questionIndex)

  replyWithQuiz(`${i18n.t('Question')}: 1 ${i18n.t('from')} ${questions.length}\n\n${title}`, random, {
    correct_option_id,
    is_anonymous: false
  })
})
stage.register(peopleRoom)

peopleRoom.on('poll_answer', ({ session, pollAnswer, replyWithQuiz, i18n, reply, scene, update }) => {
  const questions = people
  const questionIndex = ++session.questionIndex
  const result = questions[questionIndex - 1].correct_option_id === pollAnswer.option_ids[0]
  result && ++session.counter
  const length = questions.length

  if (questionIndex !== questions.length) {
    const { title, correct_option_id, random } = getObj(questions, questionIndex)
    replyWithQuiz(
      `${i18n.t('Question')}: ${questionIndex + 1} ${i18n.t('from')} ${questions.length}\n\n${title}
       


       ${i18n.t('score')} ${session.counter}`,
      random,
      {
        correct_option_id,
        is_anonymous: false
      }
    )
  } else {
    reply(
      `${i18n.t('score')} ${session.counter}. ${i18n.t('level')}: ${level(session.counter, length)} ${getSticker(
        session.counter,
        length
      )}`
    )
  }

  scene.current.leave()
})

const natureRoom = new BaseScene('room-nature').enter((ctx) => {
  const { i18n, session, replyWithQuiz } = ctx

  const questions = nature
  const questionIndex = 0
  const counter = 0
  session.counter = counter
  session.questionIndex = questionIndex

  const { title, correct_option_id, random } = getObj(questions, questionIndex)

  replyWithQuiz(`${i18n.t('Question')}: 1 ${i18n.t('from')} ${questions.length}\n\n${title}`, random, {
    correct_option_id,
    is_anonymous: false
  })
})
stage.register(natureRoom)

natureRoom.on('poll_answer', ({ session, pollAnswer, replyWithQuiz, i18n, reply, scene, update }) => {
  const questions = nature
  const questionIndex = ++session.questionIndex
  const result = questions[questionIndex - 1].correct_option_id === pollAnswer.option_ids[0]
  result && ++session.counter
  const length = questions.length

  if (questionIndex !== questions.length) {
    const { title, correct_option_id, random } = getObj(questions, questionIndex)
    replyWithQuiz(
      `${i18n.t('Question')}: ${questionIndex + 1} ${i18n.t('from')} ${questions.length}\n\n${title}
       


       ${i18n.t('score')} ${session.counter}`,
      random,
      {
        correct_option_id,
        is_anonymous: false
      }
    )
  } else {
    reply(
      `${i18n.t('score')} ${session.counter}. ${i18n.t('level')}: ${level(session.counter, length)} ${getSticker(
        session.counter,
        length
      )}`
    )
  }

  scene.current.leave()
})

// eslint-disable-next-line no-console
bot.catch((err) => console.log(err))

bot.launch()
