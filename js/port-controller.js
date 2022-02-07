'use strict'

$(initPage)

function initPage() {
    renderProjs()
}

function renderProjs() {
    const projs = getProjs()

    // console.log('projs', projs)
    const $elRow = $('.projs')
        // console.log('$elRow', $elRow)
    $elRow.html(projs.map(proj => {
        const currProjStr = `<div class="col-md-4 col-sm-6 portfolio-item">
             <a class="item-link" data-toggle="modal" href="#portfolioModal">
                 <div class="item-hover">
                     <div class="item-hover-content">
                         <i class="fa fa-plus fa-3x"></i>
                     </div>
                 </div>
                 <img class="img-fluid" src="img/portfolio/${proj.id}.jpg" alt="">
             </a>
             <div class="item-caption">
                 <h4>${proj.name}</h4>
                 <p class="text-muted">${proj.lables}</p>
             </div>
         </div>`
        const $elCurrProj = $(currProjStr).click({ proj }, setModal)
        return $elCurrProj
    }))
}

function setModal(ev) {
    const itemOpts = ['name', 'title', 'desc', 'date']
    const proj = ev.data.proj
    console.log('proj', proj)
    console.log('proj.name', proj.name)
    itemOpts
    const $elModal = $('.modal-body')
        // console.log('$elModal', $elModal)
    itemOpts.forEach(item => {
        console.log('item', item)
        setTextInsideParent('modal-body', item, proj[item])
    })
}