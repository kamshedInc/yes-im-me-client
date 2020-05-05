export default function smoothScroll(id, duration, offset) {
    const offsetY = offset !== undefined ? offset : 0
    console.log(offset, offsetY)
    const target = document.querySelector(id)
    const targetPosition = target.getBoundingClientRect().top + offsetY
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    let startTime = null

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime
        const timeElapsed = currentTime - startTime
        const run = ease(timeElapsed, startPosition, distance, duration)
        window.scrollTo(0, run)
        if (timeElapsed < duration) requestAnimationFrame(animation)
    }

    function ease(t, b, c, d) {

        // t = timeElapsed, 
        // b = startPosition, 
        // c = distance, 
        // d = duration

        t /= d / 2
        if (t < 1) return c / 2 * t * t + b
        t--
        return -c / 2 * (t * (t - 2) - 1) + b
    }

    requestAnimationFrame(animation)
}