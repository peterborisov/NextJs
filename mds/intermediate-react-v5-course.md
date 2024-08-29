### React concept

- One way data flow
- Declarative vs Imperative

### Types of React Components

**- Stateless/Presentational/Dumb/Pure Components** - always produce the same output for the same input props and do not have any side effects. Primarily used for rendering UI elements and do not contain any logic or state management.

- **Stateful/Container/Smart/Impure Components** - may produce different output for the same input props or have side effects. Impure components are typically used for managing state, handling complex logic, making API calls, or interacting with the DOM.
- **Higher Order Components (HOCs)** - functions that take a component as input and return a new component with additional props or behavior. HOCs are used for reusing component logic, such as handling authentication, handling data fetching, or providing common functionality to multiple components.
- **Controlled Component** - whenever a component is connected to a state, so that we can manage data, then its a controlled component. A controlled component allows Two Way Binding , where we both use and update its data programmatically.

### Hooks

https://react-v8.holt.courses/lessons/hooks-in-depth/useref
https://tanstack.com

- useRef() - refer react element to the DOM element
- useReducer()
- useMemo() - memoize result of expensive calculations

```
const value = useMemo(() => {someExpensiveOperation(count)}, [count])
```

- useCallback() - memoize callback fn similar to useMemo. Save a function at one place in memory and not recreate it with every execution.

```
const memoizedCAllback = useCallback(() => {myFn()}, [])
```

### TailwindCSS

- TailwindCSS for css classes, grid/flex, etc.
- https://flowbite-react.com for UI components

### Lint, Prettier, Husky

https://medium.com/yavar/setting-up-a-eslint-prettier-husky-and-lint-staged-integration-with-typescript-in-next-js-13-14-68044dfae920

### Advanced React performance

- Code splitting
  https://bundlephobia.com
- SSR

### Testing

https://nextjs.org/docs/app/building-your-application/testing/jest
