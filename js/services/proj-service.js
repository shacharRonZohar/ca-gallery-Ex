'use strict'

const PROJS = [{
        id: 'minesweeper',
        name: 'Minesweeper',
        title: 'You gotta find these mines, and watch your step!',
        desc: `use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
        maiores repudiandae, nostrum, reiciendis facere nemo!`,
        url: '',
        publishedAt: Date.now(),
        lables: ['Matrixes ', ' Mouse Events']
    }, {
        id: 'in-picture',
        name: 'In-Picture',
        title: 'Match the image to the correct description',
        desc: `use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
        maiores repudiandae, nostrum, reiciendis facere nemo!`,
        url: '',
        date: Date.now(),
        lables: ['CSS ', ' Mouse Events']
    }, ]
    //     id: 'minesweeper',
    //     name: 'Minesweeper',
    //     title: 'You gotta find these mines, and watch your step!',
    //     desc: `use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
    //         maiores repudiandae, nostrum, reiciendis facere nemo!`,
    //     url: '',
    //     publishedAt: Date.now(),
    //     lables: ['Matrixes', 'Mouse Events']
    // }, ]

function getProjs() {
    return PROJS
}

function getProj(id) {
    return getProjs().find(proj => proj.id === id)
}