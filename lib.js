const { stat } = require('fs')

const map = {
  happy: 'happy',
  smile: 'happy',
  excited: 'happy',
  lol: 'happy',
  smiley: 'happy',
  yay: 'happy',
  xd: 'happy',
  lmao: 'happy',
  lmfao: 'happy',
  yeet: 'happy',
  neutral: 'neutral',
  idk: 'neutral',
  default: 'neutral',
  mmm: 'neutral',
  mm: 'neutral',
  um: 'ummm',
  umm: 'ummm',
  ummm: 'ummm',
  hmm: 'ummm',
  wtf: 'ummm',
  thinking: 'thinking',
  think: 'thinking',
  thonk: 'thinking',
  thonking: 'thinking',
  thinker: 'thinking',
  thonker: 'thinking',
  thank: 'thinking',
  thanking: 'thinking',
  hmmm: 'thinking',
  suspicious: 'suspicious',
  huh: 'suspicious',
  really: 'suspicious',
  angry: 'angry',
  slap: 'angry',
  rawr: 'angry',
  angery: 'angry',
  mad: 'angry',
  triggered: 'angry',
  hello: 'hello',
  hey: 'hello',
  hi: 'hello',
  welcome: 'hello',
  hallo: 'hello',
  smug: 'smug',
  yeah: 'smug',
  mmm: 'smug',
  scared: 'scared',
  yikes: 'scared',
  welp: 'scared',
  aaaaa: 'scared',
  help: 'scared',
  freaky: 'scared',
  spoopy: 'scared',
  spooky: 'scared',
  spooped: 'scared',
  spooked: 'scared'
}

const lookup = (emote) => {
  return map[emote] || map.default
}

const listEmotes = () => {
  const values = Object.values(map)
  return values.filter((emote, index) => values.indexOf(emote) === index)
}

const keysForEmote = (value) => {
  return Object.keys(map).filter((key) => map[key] === value)
}

const capitalize = (string) => {
  return string[0].toUpperCase() + string.substr(1)
}

const asyncStat = (path) => {
  return new Promise((resolve, reject) => {
    stat(path, (error, stats) => {
      if (error) return reject(error)
      resolve(stats)
    })
  })
}

module.exports.lookup = lookup
module.exports.map = map
module.exports.asyncStat = asyncStat
module.exports.listEmotes = listEmotes
module.exports.keysForEmote = keysForEmote
module.exports.capitalize = capitalize