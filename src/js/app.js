let position = 0
let max = 6

global.updatePosition = function(n) {
  position += n
  position = ((position < 0) ? 0 : ((position > max) ? max : position))
  document.querySelector('progress').value = position
  document.querySelector('svg').setAttribute('data-position', position)
}
