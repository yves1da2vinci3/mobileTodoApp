

function Calculate (todo) {
// retouner les infos suivantes , la taille , terminé , non terminé

// la taille
const length = todo.todos.length

// non terminé

const todoNotFinished = todo.todos.filter( elt => elt.status === 0)
const NotFinishedLength = todoNotFinished.length

// terminé
const todoFinished = todo.todos.filter( elt => elt.status === 1)
const FinishedLength = todoFinished.length

return{
    length,
    NotFinishedLength,
    FinishedLength
}

}

export default Calculate