//your JS code here. If required.
async function fetchTodo() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const todo = await response.json();
    console.log('Todo:', todo);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

fetchTodo();
