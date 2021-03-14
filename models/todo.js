//************************** */
// Our Todos - The Data
//************************** */ 

const todos = [
   {text: 'Feed Dogs', done: true},
   {text: 'Learn Express', done: false},
   {text: 'Buy Milk', done: false}
  ];

//************************** */
// Model Functions (functions to update, delete, find, create data)
//************************** */

  // get all the todos
  function getAll() {
   return todos;
  }

  // Define function to get one todo
  function getOne(index){
     return todos[index];
  }

  // function to add a todo
  function create(todo){
     todos.push(todo)
  }

  // function to remove one todo
  function deleteOne(id){
     todos.splice(id, 1)
  }

//************************** */
// Exporting Our Model
//************************** */
  module.exports = {
   getAll,
   getOne,
   create,
   deleteOne
  };