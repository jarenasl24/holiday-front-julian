import EkoPlayer from 'eko-js-sdk'

export default function getEko ({ app }, inject) {
  inject('EkoPlayer', EkoPlayer)
}
