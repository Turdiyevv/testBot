
const TelegramApi = require('node-telegram-bot-api')
const api = '5540518908:AAFIKvNSUHfZ0NCI0oIdRTk_CMN2u1nETm0'
const bot = new TelegramApi(api, { polling: true })
// const chats = {}

const classOption = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{text: 'siz haqingizda', callback_data: '/info'}, {text: 'maxsus', callback_data: '/maxsus'}]
    ]
  })
}
cons = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{text: `Dilam admin`, callback_data: `/dilam`}, {text: `Sevinch admin`, callback_data: `/sevinch`}]
    ]
  })
}

bot.setMyCommands([
  {command: `/start`, description: `Muloqot boshlanishi`},
])

const start = () => {
  bot.on('message', async msg => {
    const text = msg.text
    const chatId = msg.chat.id
    // console.log(msg);
    if (text === '/start') {
      return bot.sendMessage(chatId, `Assalomu alaykum xush kelibsiz!😎

        Agar kanal uchun post tayorlamoqchi bo'lsangiz, matnini to'g'ridan-to'g'ri yozib yuboring!`, classOption)
    }
    // if (text === '/dilam') {
    //   return bot.sendMessage(chatId, `E qalaysiz bormisiz @${msg.from.username},
    //     charchamayapsizmi? Manam yurimman chachamay, shippillab!
    //     🤗🙃`)
    // }
    // if (text === '/sevinch') {
    //   return bot.sendMessage(chatId, `Qannaysan Sevi tinchmisan? Manam yaxshi yurimman uzoqlarga!`)
    // }
    if (msg.text === text) {
      // console.log(msg);
      let body = `
      🌿🌿🌿🌿 T.S.5 🌿🌿🌿🌿
        
      ${msg.text}
    
  @Tonggi_soat_5 | @QOLDIRISHIZOHTS5_BOT
    
🌿🌿🌿🌿 T.S.5 🌿🌿🌿🌿`
      return bot.sendMessage(
        chatId, body
        )
      
    } else {
      return bot.sendMessage(chatId, `xabar aniqlanmadi!`)
    }
  })

  bot.on('callback_query', msg => {
    // console.log(msg);
    const data = msg.data
    const chatId = msg.message.chat.id

    bot.sendMessage(chatId, `siz ${data} buyrug'ini tanladingiz`)
    if (data === '/maxsus') {
      return bot.sendMessage(chatId, `💌 takomillashtirilmoqda 💌`)
    } else if (data === '/info') {
      return bot.sendMessage(
        chatId, `siz haqingizda ma'lumot 👈🏻
        telegramdagi ismingiz: [${ msg.from.first_name}]👈🏻
        USERNAME ingiz: @${msg.from.username}👈🏻
        tanib oluvchi ID ingiz: ${msg.from.id}👈🏻
        bot tomonidan: ${msg.from.is_bot}👈🏻`
      )
    } 
    // else if (data === '/dilam') {
    //     return bot.sendMessage(chatId, `🙋🏻‍♂️
    //     E qalaysiz bormisiz do'stim,
    //     charchamayapsizmi? Manam yurimman chachamay, shippillab!
    //     🤗🙃`, classAdmin
    //   )
    // }
  })
  // bot.on('callback_query', msg => {
  //   const data = msg.data
  //   const chatId = msg.message.chat.id
    
  //   // bot.sendMessage(chatId, `siz ${data} buyrug'ini tanl;adingiz`)
  // })
  
}
start()
