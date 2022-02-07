'use strict'

function setTextInsideParent(containerSelec, itemSelec, val) {
    $(`.${containerSelec}`).find(`.${itemSelec}`).text(val)
}

function formatTime(ts, locale = 'en-us') {
    var date = new Date(ts)
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }
    return date.toLocaleTimeString(locale, options)
}