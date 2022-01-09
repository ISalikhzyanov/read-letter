const formEl = document.getElementById('form');
const mesEl = document.getElementById('mess');
const tagEl = document.getElementById('tag');
const linkEl = document.getElementById('link');
const listEl = document.getElementById('list');
let readEl = document.getElementById('read');



class Task {
    constructor(mes, tag, link) {
        this.mes = mes;
        this.tag = tag;
        this.link = link;
    }


}

class TaskList {
    constructor() {
        this.list = []



    }

    add(task) {
        this.list.push(task);
        this.render()
        localStorage.setItem('key', JSON.stringify(this.list))
    }

    render() {
        listEl.innerHTML = '';
        for (const task of this.list) {
            const el = document.createElement('li')
            el.innerHTML = `
            <div class="alert alert-success" role="alert">
            <input type="checkbox" id="i-checkbox" value="selected">
              ${task.mes}&nbsp${task.tag}&nbsp${task.link}
            </div>
            `
            listEl.appendChild(el)
        }


    }
}

const store = new TaskList()

formEl.addEventListener('submit', (e) => {
    e.preventDefault()
    const mes = mesEl.value;
    const tag = tagEl.value;
    const link = linkEl.value;
    const task = new Task(mes, tag, link);
    store.add(task)
    console.log(store.list)

})
const readen = localStorage.getItem('key')
readEl.value = JSON.parse(readen)