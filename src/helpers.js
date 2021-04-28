/* eslint-disable require-jsdoc */
const { Context } = require('telegraf')

class MyContext extends Context {
  get chat() {
    return (
      (this.message && this.message.chat) ||
      (this.editedMessage && this.editedMessage.chat) ||
      (this.callbackQuery && this.callbackQuery.message && this.callbackQuery.message.chat) ||
      (this.channelPost && this.channelPost.chat) ||
      (this.editedChannelPost && this.editedChannelPost.chat) ||
      (this.pollAnswer && this.pollAnswer.user)
    )
  }

  get from() {
    return (
      (this.message && this.message.from) ||
      (this.editedMessage && this.editedMessage.from) ||
      (this.callbackQuery && this.callbackQuery.from) ||
      (this.inlineQuery && this.inlineQuery.from) ||
      (this.channelPost && this.channelPost.from) ||
      (this.editedChannelPost && this.editedChannelPost.from) ||
      (this.shippingQuery && this.shippingQuery.from) ||
      (this.preCheckoutQuery && this.preCheckoutQuery.from) ||
      (this.chosenInlineResult && this.chosenInlineResult.from) ||
      (this.pollAnswer && this.pollAnswer.user)
    )
  }
}

const level = (score, length) => {
  let str
  switch (true) {
    case score < length * 0.6:
      str = 'Junior'
      break
    case score < length * 0.8:
      str = 'Middle'
      break
    case score <= length:
      str = 'Senior'
      break
    default:
      str = 'Woops..'
  }
  return str
}

const getSticker = (score, length) => {
  let str
  switch (true) {
    case score < length * 0.6:
      str = '👶🏼'
      break
    case score < length * 0.8:
      str = '😎'
      break
    case score <= length:
      str = '👨🏻‍🎓'
      break
    default:
      str = 'Woops..'
  }
  return str
}

let PROVIDER_TOKEN

if (process.env.NODE_ENV === 'production') {
  PROVIDER_TOKEN = process.env.PROVIDER_TOKEN
} else {
  PROVIDER_TOKEN = process.env.PROVIDER_TOKEN_TEST
}

const getInvoice = (i18n, id) => {
  const invoice = {
    chat_id: id,
    provider_token: PROVIDER_TOKEN,
    start_parameter: 'get_access',
    title: i18n.t('InvoiceTitle'),
    description: i18n.t('InvoiceDescription'),
    currency: 'RUB',
    prices: [{ label: i18n.t('InvoiceTitle'), amount: 100 * 100 }],
    payload: {
      unique_id: `${id}_${Number(new Date())}`,
      provider_token: process.env.PROVIDER_TOKEN
    }
  }

  return invoice
}

module.exports = {
  level,
  getSticker,
  MyContext,
  getInvoice
}
