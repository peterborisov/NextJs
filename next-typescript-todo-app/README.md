# next-todo

Example Tasks application built with Next.js and Typescript

Run `pnpm run dev` to run app locally (`localhost:3000`)

- pnpm
- react-hook-form(https://react-hook-form.com)
- custom hooks
- redux-toolkit - https://redux-toolkit.js.org/
- tailwindcss - https://tailwindcss.com/docs/guides/nextjs
- flowbite-react - https://flowbite-react.com/
- icons - https://heroicons.com/
- https://handsonreact.com/docs/react-redux-thunk
- https://tanstack.com/query/latest/docs/framework/react/overview

```
src/
  |- app/
     |- App.js                # Main React component
     |- store.js              # Redux Toolkit store configuration
  |- features/
     |- feature1/
        |- feature1Slice.js   # Redux Toolkit Slice configuration for feature1
        |- Feature1.js        # Feature1 component
        |- feature1API.js     # API calls related to feature1
     |- feature2/
        |- feature2Slice.js   # Redux Toolkit Slice configuration for feature2
        |- Feature2.js        # Feature2 component
        |- feature2API.js     # API calls related to feature2
  |- components/
     |- CommonComponent.js    # Reusable UI components
  |- pages/
     |- XxxPage.js            # Page component
     |- layout.js             # Layout shared across multiple pages
  |- hooks/
     |- useLocalStorage.js    # Custom hook for storing data in localStorage
     |- useFetch.js           # Custom hook for fetching data from an API
  |- lib/                     # Custom hooks, data manipulation functions, or third-party libraries that are used globally.
  |- services/                # The services folder holds modules or classes responsible for interacting with external services such as APIs, databases, or authentication services. These services encapsulate communication logic and keep it separate from UI components.
  |- utils/
     |- utilityFunctions.js   # Helper functions
  |- API/
     |- index.js              # API exports
  |- config/
     |- config.js             # Application configuration file
  |- router/
     |- index.js              # React Router configuration
  |- .env                     # Environment variables
  |- index.js                 # Application entry file
```
