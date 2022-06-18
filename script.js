let root = document.getElementById("root")

class todoList{
  constructor(place, title = "to-do list"){
    this.place = place
    this.title = title
    this.cardArray = []
    this.render()
  }

  addToDo(){
    let text = this.input.value
    this.cardArray.push(new Card(text, this.div, this))
  }

  render(){
    this.createToDoListElement()
    this.place.append(this.todoListElement)
  }

  createToDoListElement(){
    this.h2=document.createElement('h2')
    this.h2.innerHTML=this.title
    this.input=document.createElement('button')
    this.input.classList.add("comment")
    this.button.innerHTML='Adicionar'
    this.button.classList.add("btn-save")
    this.button.id="to-do-list-button"
    this.div=document.createElement('div')
    this.todoListElement=document.createElement('div')
    this.button.addEventListener('click', ()=>{
      if(this.input.value != ""){
        this.addToDo.call(this)
        this.input.value=""
      }
    })
    this.todoListElement.append(this.h2)
    this.todoListElement.append(this.input)
    this.todoListElement.append(this.button)
    this.todoListElement.append(this.div)
    this.todoListElement.classList.add("todoList")
  }
}

