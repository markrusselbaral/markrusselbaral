// v-reveal: fade/slide an element in the first time it scrolls into view.
// The scroll container is `.right-content`, so the IntersectionObserver
// roots there (falling back to the viewport).
const map = new WeakMap()

export default {
  mounted(el) {
    el.classList.add('reveal')
    // Observe against the viewport. This works whether the desktop
    // `.right-content` panel scrolls or the window scrolls on mobile,
    // since viewport-intersection reflects actual on-screen visibility.
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        }
      },
      { root: null, threshold: 0.12 }
    )
    io.observe(el)
    map.set(el, io)
  },
  unmounted(el) {
    const io = map.get(el)
    if (io) io.disconnect()
    map.delete(el)
  }
}
