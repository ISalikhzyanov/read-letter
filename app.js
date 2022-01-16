const readEL = document.getElementById("home")
const readenEl = document.getElementById("profile")
const searchEl = document.getElementById("contact")
const nameEl = document.getElementById("name")
const tagEl = document.getElementById("tag")
const linkEl = document.getElementById("link")
const addEl = document.getElementById("add")
const windowEl = document.getElementById("window")

let list = []

let readList = []

readEL.addEventListener('click', () => {

    nameEl.style.display = 'inline'

    tagEl.style.display = 'inline'

    linkEl.style.display = 'inline'

    addEl.style.display='inline'

    renderList()
})

readenEl.addEventListener('click', () => {

    nameEl.style.display = 'none'

    tagEl.style.display = 'none'

    linkEl.style.display = 'none'

    addEl.style.display='none'

    renderReadList()
})

class Read {
    constructor(name, tag, link) {
        this.name = name
        this.tag = tag
        this.link = link

    }
}


addEl.addEventListener('click', () => {
    const name = nameEl.value
    const tag = tagEl.value
    const link = linkEl.value
    const item = new Read(name, tag, link)



    list.push(item)

    renderList()
})

const renderList = () => {
    windowEl.innerHTML = ''

    for (const item of list) {
        const el = document.createElement('div')
        const index = list.indexOf(item)

        for (const index of list){
            el.innerHTML = `
        <div>
        <input id="checkbox" type="checkbox">
        <span class="badge bg-light text-dark">Название ${item.name}</span> <span class="badge bg-light text-dark">Тэг ${item.tag}</span> <span class="badge bg-light text-dark">Ссылка ${item.link}</span>
        <button type="button" class="btn btn-outline-danger" id="del">Удалить</button>
        
        </div>`
        }
        windowEl.appendChild(el)

        const delEl = document.querySelector('#del')

        delEl.addEventListener('click', () => {


            list.splice(list[index], 1)

            renderList()
        })

        const checkEl = el.querySelector('#checkbox')

        checkEl.addEventListener('change', () => {



            list.splice(list[index], 1)

            readList.push(list[index])

            renderList()
        })
    }
}

const renderReadList = () => {
    windowEl.innerHTML = ''

    for (const item of readList) {
        const el = document.createElement('div')
        const readIndex = readList.indexOf(item)


        el.innerHTML = `
        <div>
        <input id="checkbox" type="checkbox" checked>
         <span class="badge bg-light text-dark">Название ${item.name}</span> <span class="badge bg-light text-dark">Тэг ${item.tag}</span> <span class="badge bg-light text-dark">Ссылка ${item.link}</span>
        <button type="button" class="btn btn-outline-danger" id="del">Удалить</button>
        
        </div>`
        windowEl.appendChild(el)

        const delEl = document.getElementById('del')

        delEl.addEventListener('click', () => {


            readList.splice(readList[readIndex], 1)

            renderReadList()
        })

        const checkEl = el.querySelector('#checkbox')

        checkEl.addEventListener('change', () => {


            readList.splice(readList[readIndex], 1)

            list.push(readList[readIndex])

            renderReadList()
        })
    }
}