- Pages and layouts
- Routing
  - files system routes(next using link component)
  - programmatic routing(useRoute() hook)
  - dynamic routes ([id])
  - parallel routing - multiple pages on same layout
  - intercepting routes

```
(myFeature)
    - about
    - contacts
```

- Suspense - better to create loading page

```
<Suspense fallback={MyComponent}>
```

- Streaming - break app into smaller chunks to load progressively
- Error boundaries
- Templates vs. layouts - template re-render(good for useEffect), layout run only once
- Server vs. client components -
  - To use server component inside client component, you need to pass it as child.
- Static vs. dynamic rendering
  - Static - on build time on server
  - Dynamic rendering - at request time on client(cookies, headers, search params)
- Fetching
- Cashing
- Revalidating
- Server actions - to update data
  - form action={addItem}
  - button formAction={upVote}
  - actions.ts
  - useTransition() hook
  - combine server actions with useFormState and useFormStatus from React
- Migrating from NextJS 12
  - export const dynamic = "" to transform component to be SSR at SSG
- Image
- Fonts
- Script
- Metadata

  - config based:

  ```
  metaData
  generateMetadata
  ```

  - file based
  - static
  - dynamic
  - fields

- Middleware - run code before req is complete.
- NextAuth
  - https://next-auth.js.org/getting-started/introduction
  - https://www.freecodecamp.org/news/how-to-setup-authentication-and-protected-route-in-next-js-13-with-next-auth-js/
- DB - https://pocketbase.io
