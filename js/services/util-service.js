'use strict'

function setTextInsideParent(containerSelec, itemSelec, val) {
    $(`.${containerSelec}`).find(`.${itemSelec}`).text(val)
}