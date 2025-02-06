# Todo Project Frontend

This is the frontend of the Todo Project made with React, Vite, TypeScript, TailwindCSS, and SCSS.

## Project Structure

- `src/`
  - `components/`
    - `Header.tsx`: The header component of the application.
    - `Footer.tsx`: The footer component of the application.
    - `Main/`
      - `TaskBox.tsx`: Component for displaying individual tasks.
      - `TaskList.tsx`: Component for displaying the list of tasks.
      - `TaskManagement.tsx`: Component for managing tasks.
      - `TaskModal.tsx`: Modal component for creating and editing tasks.
      - `SearchBox.tsx`: Component for searching tasks.
      - `SortBy.tsx`: Component for sorting tasks.
      - `TaskOverview.tsx`: Component for displaying task overview.
      - `AddTaskButton.tsx`: Component for adding a new task.
  - `contexts/`
    - `TodoContext.tsx`: Context for managing todo state.
  - `hooks/`
    - `useTodo.ts`: Custom hook for accessing todo context.
  - `providers/`
    - `TodoProvider.tsx`: Provider component for todo context.
  - `styles/`
    - `index.scss`: Main stylesheet.
    - `components/`
      - `main/`
        - `task-list.scss`: Styles for task list.
        - `task-modal.scss`: Styles for task modal.
        - `task-management.scss`: Styles for task management.
        - `add-task.scss`: Styles for add task button.
  - `helper/`
    - `searchTodo.ts`: Helper function for searching todos.
  - `index.d.ts`: TypeScript type definitions.
  - `main.tsx`: Entry point of the application.

## Scripts

- `dev`: Runs the application in development mode using Vite.
- `build`: Builds the application for production.
- `lint`: Runs ESLint to check for linting errors.
- `preview`: Previews the production build.

## Installation

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Run `npm run dev` to start the development server.

## Usage

- Open `http://localhost:5173` in your browser to view the application.
- Use the search box to filter tasks.
- Use the sort dropdown to sort tasks.
- Click on the add button to create a new task.
- Click on a task to edit or examine it.
- Use the pin, edit, examine, and delete icons to manage tasks.

## Author

MOJTABA5858

## My Social Media

- __[Work GitHub Page](https://github.com/dev-mojtaba/)__
- __[Private GitHub Page](https://github.com/mojtaba5858/)__
- __[YouTube (Private & Work Both)](https://www.youtube.com/@MOJTABA5858/)__
- __[Instagram](http://instagram.com/dev_mojtaba)__
- __[LinkedIn](https://linkedin.com/in/mojtaba-zebardast-267010297/)__

## License

ISC
