import TodosList from '../assets/data/TodosList'

export function FindTodoById (id) {
  const todo =  TodosList.find(todo => todo.id ===id)
return new Promise((resolveFunc,rejectFunc) =>{
if(todo) {
    resolveFunc(todo)
}else{
    rejectFunc('desolé mais aucune todo correspondant')
}
} ) 
}