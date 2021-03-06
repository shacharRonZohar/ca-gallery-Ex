'use strict'

$(initPage)

function initPage() {
    renderProjs()
    setEventListeners()
}

function renderProjs() {
    const projs = getProjs()
    const $elRow = $('.projs')
    $elRow.html(projs.map(proj => {
        const currProjStr = `<div class="col-md-4 col-sm-6 portfolio-item">
             <a class="item-link" data-toggle="modal" href="#portfolioModal">
                 <div class="item-hover">
                     <div class="item-hover-content">
                         <i class="fa fa-plus fa-3x"></i>
                     </div>
                 </div>
                 <img class="img-fluid thumbnail" src="img/portfolio/${proj.id}.jpg" alt="">
             </a>
             <div class="item-caption">
                 <h4>${proj.name}</h4>
                 <p class="text-muted">${proj.lables}</p>
             </div>
         </div>`
        const $elCurrProj = $(currProjStr).click(proj, setModal)
        return $elCurrProj
    }))
}

function setEventListeners() {
    $('.submit-confirm').click(submitForm)
    $('.close-btn').click(toggleCanvas)
}

function submitForm() {
    const email = $('.e-mail').val()
    const subj = $('.subject').val()

    // Don't know how to make it go down a line in the email through the URL,
    // so it's not formatted correctly
    var msgBody = `Sent From: ${email}        ` + $('.msg-body').val().trim()
    const url = `https://mail.google.com/mail/u/0/?fs=1&to=RZShachar@gmail.com&su=${subj}&body=${msgBody}&tf=cm`
    window.open(url, '_blank')
}

function setModal(ev) {
    const itemOpts = ['name', 'title', 'img', 'desc', 'date', 'lables', 'url']
    const proj = ev.data
    const setInsideParentFuncs = getSetInsideParentFuncs()
    itemOpts.forEach(item => {
        var cellConts = proj[item]
        if (item === 'img') return setInsideParentFuncs.attr('modal-body', 'item-img', 'src', `img/portfolio/${proj.id}.jpg`)
        if (item === 'url') {
            $('.check-it-btn').one('click', proj.url, gotoProjPage)
        }
        if (item === 'date') cellConts = formatTime(proj.date)
        setInsideParentFuncs.txt('modal-body', item, cellConts)
    })
}

// Returns an object with replacement funcs accodring to attr or txt, val is optional
function getSetInsideParentFuncs() {
    return {
        attr: (parentSelec, itemSelec, attr, val = null) => $(`.${parentSelec}`).find(`.${itemSelec}`).attr(attr, val),
        txt: (parentSelec, itemSelec, val = null) => $(`.${ parentSelec }`).find(`.${itemSelec}`).text(val)
    }
}

function gotoProjPage(ev) {
    window.open(ev.data, '_blank')
}