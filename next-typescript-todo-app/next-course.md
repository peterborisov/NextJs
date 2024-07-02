- Pages and layouts
- Navigation between pages
- Dynamic routes
- Route groups

```
(myFeature)
    - about
    - contacts
```

- Suspense and streaming

```
<Suspense fallback={MyComponent}>
```

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
  - startTransition
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

- Route handlers
- Middleware - run code before req is complete.
- Parallel routes - multiple pages on same layout
- Intercepting routes
- NextAuth
