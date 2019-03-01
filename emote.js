const { parse } = require('url')
const { createReadStream } = require('fs')
const { join } = require('path')
const { lookup, asyncStat } = require('./lib')

module.exports = async (req, res) => {
  const { query } = parse(req.url, true)
  const { emote } = query
  const lookedUp = lookup(emote)
  
  const path = join(__dirname, 'images', lookedUp + '.png')
  const stats = await asyncStat(path)

  res.writeHead(200, {
    'Content-Type': 'image/png',
    'Content-Length': stats.size
  })
  const stream = createReadStream(path)
  stream.pipe(res)
}