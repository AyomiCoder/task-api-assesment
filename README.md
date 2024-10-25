# Todo API

This is a simple RESTful API built with Node.js and Express for managing a list of tasks (a to-do list) with basic CRUD functionality. It supports adding, updating, retrieving, and deleting tasks, with optional data persistence using a JSON file.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete tasks.
- **Data Persistence**: Tasks are stored in memory or persisted to a JSON file.
- **Validation and Error Handling**: Validates incoming data and returns appropriate HTTP status codes.
- **Custom Logging Middleware**: Logs request details (method, endpoint, timestamp).

## Getting Started

1. **Clone the repository**:

    ```bash
    git clone https://github.com/AyomiCoder/task-api-assesment.git
    cd task-api-assesment
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```


### Running the Server

1. **Start the server**:

    ```bash
    npm start
    ```

2. **Server Output**:

   The server will start on the port specified (default: 3000). You should see a message like:

    ```
    Server running on port 3000
    ```

### Testing the API

The API supports the following endpoints, which can be tested using [Postman](https://www.postman.com/), [curl](https://curl.se/), or your preferred API client.

#### Endpoints

1. **Get all tasks**
   - **URL**: `GET /tasks`
   - **Description**: Retrieves a list of all tasks.
   - **Example**:

     ```bash
     curl -X GET http://localhost:3000/tasks
     ```

2. **Add a new task**
   - **URL**: `POST /tasks`
   - **Description**: Adds a new task to the list.
   - **Body**: JSON, including the `title` field.
   - **Example**:

     ```bash
     curl -X POST http://localhost:3000/tasks -H "Content-Type: application/json" -d '{"title": "New Task"}'
     ```

3. **Update an existing task**
   - **URL**: `PUT /tasks/:id`
   - **Description**: Updates an existing task by ID.
   - **Body**: JSON, including at least one of `title` or `completed`.
   - **Example**:

     ```bash
     curl -X PUT http://localhost:3000/tasks/1 -H "Content-Type: application/json" -d '{"completed": true}'
     ```

4. **Delete a task**
   - **URL**: `DELETE /tasks/:id`
   - **Description**: Deletes a task by ID.
   - **Example**:

     ```bash
     curl -X DELETE http://localhost:3000/tasks/1
     ```

### Example Task Object

Each task object in the API looks like this:

```json
{
  "id": 1,
  "title": "Learn Node.js",
  "completed": false
}
```

### Expected Responses and Status Codes

- **200 OK**: The request was successful.
- **201 Created**: A new resource was created successfully (for POST requests).
- **400 Bad Request**: The request failed validation (e.g., missing `title` on task creation).
- **404 Not Found**: The specified task was not found (for invalid `:id` values).

### Logging

The API includes basic request logging, which outputs to the console. It logs the HTTP method, endpoint, and timestamp for each request, aiding in debugging and tracking.
