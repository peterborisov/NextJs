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

### Lint, Prettier, Husky

https://medium.com/yavar/setting-up-a-eslint-prettier-husky-and-lint-staged-integration-with-typescript-in-next-js-13-14-68044dfae920

### Advanced React performance

- Code splitting
  https://bundlephobia.com
- SSR

### Testing

https://nextjs.org/docs/app/building-your-application/testing/jest
