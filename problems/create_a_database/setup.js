function rndint () {
  return Math.ceil(Math.random() * 100)
}

module.exports = function () {
  return { args: ['ws-nano-' + rndint()], stdin: null }
}