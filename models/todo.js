// OUR TODOS   
const todos = [
   {text: 'Feed Dogs', done: true},
   {text: 'Learn Express', done: false},
   {text: 'Buy Milk', done: false}
  ];
// Define Our Todo Functions
  function getAll() {
   return todos;
  }
// Define function to get one todo
  function getOne(index){
     return todos[index];
  }
  function create(todo){
     todos.push(todo)
  }

  function deleteOne(id){
     todos.splice(id, 1)
  }
// Export our Todo
  module.exports = {
   getAll,
   getOne,
   create,
   deleteOne
  };