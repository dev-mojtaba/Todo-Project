# Todo Project

This is a Todo Project Backend made with ExpressJS, Mongoose, and TypeScript.

## Project Structure

- `src/`
  - `helper/`
    - `sha1.ts`: Computes the SHA-1 hash of a given string.
    - `uuidv4.ts`: Generates a random UUID version 4.
    - `uuidv5.ts`: Generates a UUID version 5 based on a namespace and a name.
  - `models/`
    - `Todo.ts`: Defines the Mongoose model `TodoModel` and sets a pre-save hook for UUID generation.
  - `routes/`
    - `index.ts`: Exports a router instance for handling API routes.
  - `schemas/`
    - `Todo.ts`: Defines the structure of a todo item using Mongoose schema.
  - `index.d.ts`: Defines the TypeScript type `Todo`.
  - `server.ts`: Entry point of the application, sets up the Express server and connects to MongoDB.

## Environment Variables

Create a `.env` file in the root of the project with the following structure:

```
# MongoDB connection string
MONGODB_URI=mongodb://localhost:27017/todo

# Port number for the Express server
PORT=3000

# MongoDB connection string with authentication
# Uncomment and fill in the following lines if you want to use a secured MongoDB connection
# MONGODB_URI=mongodb://<username>:<password>@<host>:<port>/<database>?authSource=<authDatabase>
```

## Scripts

- `dev`: Runs the application in development mode using Nodemon.
- `build`: Compiles the TypeScript files to JavaScript.

## Installation

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Create a `.env` file as described above.
4. Run `npm run dev` to start the server.

## Author

MOJTABA5858

## License

ISC