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

// Export our Todo
 module.exports = {
  getAll,
  getOne
 };