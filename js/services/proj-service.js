'use strict'

const PROJS = [{
    id: 'minesweeper',
    name: 'Minesweeper',
    title: 'You gotta find these mines, and watch your step!',
    desc: `use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
        maiores repudiandae, nostrum, reiciendis facere nemo!`,
    url: 'https://shacharronzohar.github.io/CaJan22-Minesweeper/',
    date: Date.now(),
    lables: ['Matrixes ', ' Mouse Events']
}, {
    id: 'in-picture',
    name: 'In-Picture',
    title: 'Match the image to the correct description',
    desc: `use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
        maiores repudiandae, nostrum, reiciendis facere nemo!`,
    url: 'https://shacharronzohar.github.io/in-picture/',
    date: Date.now(),
    lables: ['CSS ', ' Mouse Events']
}, {
    id: 'touch-nums',
    name: 'Touch-Nums',
    title: 'Touch the numbers in the correct order',
    desc: `use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
        maiores repudiandae, nostrum, reiciendis facere nemo!`,
    url: 'https://shacharronzohar.github.io/touch-nums/',
    date: Date.now(),
    lables: ['CSS ', ' Mouse Events']
}, {
    id: 'ball-board',
    name: 'Ball-Board',
    title: 'Eat all the balls while avoiding the traps',
    desc: `use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
        maiores repudiandae, nostrum, reiciendis facere nemo!`,
    url: 'https://shacharronzohar.github.io/ball-board/',
    date: Date.now(),
    lables: ['Keyboard Events ', ' Matrixes']
}, {
    id: 'chess',
    name: 'Chess',
    title: 'Play Chess',
    desc: `use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
        maiores repudiandae, nostrum, reiciendis facere nemo!`,
    url: 'https://shacharronzohar.github.io/chess/',
    date: Date.now(),
    lables: ['CSS ', ' Mouse Events']
}, {
    id: 'todos',
    name: 'Todos',
    title: 'A todo app',
    desc: `use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
        maiores repudiandae, nostrum, reiciendis facere nemo!`,
    url: 'https://shacharronzohar.github.io/proj-todo-mvc/',
    date: Date.now(),
    lables: ['CSS ', ' Event Handeling ', ' MVC']
}, {
    id: 'bookshop',
    name: 'Book-Shop',
    title: 'A book shop managment app',
    desc: `use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
        maiores repudiandae, nostrum, reiciendis facere nemo!`,
    url: 'https://shacharronzohar.github.io/book-shop-proj/',
    date: Date.now(),
    lables: ['CSS ', ' Event Handeling ', ' MVC']
}]

function getProjs() {
    const projs = JSON.parse(JSON.stringify(PROJS))
    return projs

}

function getProj(id) {
    return getProjs().find(proj => proj.id === id)
}