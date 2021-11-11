/* eslint-disable no-unused-expressions */
// Facebook Pixel Code
// eslint-disable
!(function (f, b, e, v, n, t, s) {
  if (f.fbq) {
    return
  }
  n = f.fbq = function () {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
  }
  if (!f._fbq) {
    f._fbq = n
  }
  n.push = n
  n.loaded = !0
  n.version = '2.0'
  n.queue = []
  t = b.createElement(e)
  t.async = !0
  t.src = v
  s = b.getElementsByTagName(e)[0]
  s.parentNode.insertBefore(t, s)
})(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')
// eslint-disable-next-line no-undef
// fbq('init', '299157177719075')
// eslint-disable-next-line no-undef
// fbq('track', 'PageView')
// eslint-disable-next-line no-undef
fbq('init', '360214899184444')
// eslint-disable-next-line no-undef
fbq('track', 'PageView')
// End Facebook Pixel Code
