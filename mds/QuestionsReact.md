**1. Building blocks of React**

- **Components**: Reusable blocks of code that return HTML.
- **JSX**: It stands for JavaScript and XML and allows you to write HTML in React.
- **Props and State**: props are like function parameters and State is similar to variables.
- **Context**: This allows data to be passed through components as props in a hierarchy.
- **Virtual DOM**: It is a lightweight copy of the actual DOM which makes DOM manipulation easier.

**2. Props and State in React with differences**

- **Props** pass data from one component to another.
- **State** is local data storage

**3. What is virtual DOM in React**

- Lightweight copy of the actual DOM. Manipulating Virtual DOM is more faster.

**4. What are components and their type in React**

- **Functional Components**: Functional components are simply javascript functions.
- **Class Components**:

**5. React vs. Angular**

- React is library. Angular is framework.
- React is view from MVC. Angular is MVVM.
- React is one way data binding(user click, handle event, update state). Child components are not able to update the data that is coming from the parent component. Angular is two ways(watcher update state and view at the same time).
- React VDOM. Angular DOM.

**6. React state**

- Object to keep some information about component.

**7. React Props.**

- objects which can be used inside a component

**8. Higher-order component**

- Takes the original component and returns the enhanced component. Helps to get rid of copying the same logic in every component.

**9. Functional vs. Class component**

- Function component:
  - Plain JavaScript pure function
  - No render method
  - Stateless
  - No lifecycle methods
  - No Constructors

**10. Lifecycle methods of component**

- Initialization: the component is constructed with the given Props and default state.
- Mounting: rendering the JSX returned by the render method itself.
- Updating:the state of a component is updated.
- Unmounting:the component is removed from the page.

11. Ref in React

- function provided by React to access the DOM element and the React element that you might have created on your own.

**12. Hooks**

- Reusable functions that allows you to use state and other React features without writing a class.
  - **useState**: It allows you to manipulate DOM elements before each render.
  - **useEffect**: Perform the side effect(action which is not related to current component, table component with data fetching).
  - **useRef**: Object that hold DOM element or value. Doesn't rerenders if ref data is updated.
  - **useMemo**: memoize the result of a function.
  - **useCallback**: memoize callbacks
  - **useContext**: Allows you to consume context(Context provides a way to pass data through the component tree without having props drilling.) in functional components.
  - **useReducer**: Alternative to useState for managing more complex state logic. It accepts a reducer function and an initial state, returning the current state and a dispatch function to trigger state updates.

```
  reducer(state, action)
```

- custom hooks: normal JS functions start with "use". It helps us to write a logic once and use it anywhere in the code. Extract reusable logic.

**13. React Fragments**

- wrap more than one root elements

**14. How to optimize a React code?**

- meaningful component names
- Break down components
- destructuring
- prop-types
- functional components
- Avoid using inline styles
- arrow functions
- spread operator

**15. CORS in React**

- allows you to make requests to the server deployed at a different domain.

**16. Axios**

- send asynchronous HTTP requests to REST endpoints. This library is very useful to perform CRUD operations.

**17. How the Virtual DOM works**

- React crate copy of the real DOM.
- On component render, React creates Virtual DOM representation in memory.
- On state or props change, React creates a new Virtual DOM representation.
- Compares the new Virtual DOM with the previous one.
- Updates the real DOM

**18. How VDOM improves performance**

- grouping multiple updates together before applying them to the real DOM
- It only updates the specific components or elements that have changed

**19. What are controlled components and uncontrolled components?**

- Controlled: state and behaviors are controlled by Parent components via props
- Uncontrolled: control of their own state and manage the behaviors on themselves

**20. What are Pure components?**

- only re-render when their props or state change.

**21. Pass state data**

- Parent to Child (via props)
- Child to Parent (via callback functions)
- Sibling to Sibling
- Using Context API
- Using State Management Libraries

**22. What is the difference between stateful and stateless React?**

- Stateful(Class) can modify state
- Stateless(Functional) components print out what is given to them via props, or they always render the same thing.

**23. What is state in React?**

- Object that is used to contain data or information about the component.
- When state change, component re-render.

**24. What are props in React?**

- Mechanism for passing data from a parent to child.

**25. How to Handle Errors in React Applications?**

- Try/Catch in Event Handlers
- Error State in Hooks
- PropTypes
- Strict Mode

**26. How to optimize the performance of React app.**

- Code Splitting: Split your code into smaller chunks using tools like Webpack or React.lazy() to load only what is necessary for each page or component.
- Bundle Size Reduction
- Lazy Loading: Load components and resources only when they are needed, improving initial load time and reducing data transferred
- Memoization: Use React’s `memo` or `PureComponent` to memoize components and prevent unnecessary re-renders when props or state haven’t changed.
- Server-Side Rendering (SSR): Implement SSR to pre-render React components on the server, reducing initial load time and improving SEO.

27. How to Secure Your React.js Application

- HTTPS
- Avoid Storing Sensitive Data
- Implement Authentication
