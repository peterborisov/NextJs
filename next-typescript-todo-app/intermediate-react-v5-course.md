### Hooks

https://react-v8.holt.courses/lessons/hooks-in-depth/useref
https://tanstack.com

- useRef() - refer react element to the DOM element
- useReducer()
- useMemo() - memoize result of expensive calculations

```
const value = useMemo(() => {someExpensiveOperation(count)}, [count])
```

- useCallback() - memoize callback fn similar to useMemo

```
const memoizedCAllback = useCallback(() => {myFn()}, [])
```

### TailwindCSS

- TailwindCSS for css classes, grid/flex, etc.
- https://flowbite-react.com for UI components
