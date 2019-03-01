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
  mmm: 'smug'
}

const lookup = (emote) => {
  return map[emote] || map.default
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