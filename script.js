// Importing the 'axios' library for making HTTP requests
const axios = require('axios');

// Function to make asynchronous HTTP GET request and log response
const fetchData = async () => {
  try {
    // Making the asynchronous GET request to the API endpoint
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');

    // Logging the response data in a human-readable format
    console.log('Response:');
    console.log(`User ID: ${response.data.userId}`);
    console.log(`ID: ${response.data.id}`);
    console.log(`Title: ${response.data.title}`);
    console.log(`Completed: ${response.data.completed}`);
  } catch (error) {
    // Handling any errors that may occur during the request
    console.error('Error fetching data:', error.message);
  }
};

// Invoking the fetchData function to make the HTTP request
fetchData();
