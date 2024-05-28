**1. What is Next JS?**

- Created by Vercel. React framework that allows for server-side rendering and static site generation.

**3. Mention some features of Next JS and benefits**

- **Server-Side Rendering (SSR):** Next.js allows server-side rendering, improving initial page load performance by rendering HTML on the server and sending it to the client. Is used when you need to fetch and render data on every request.
- **Static Site Generation (SSG):** Next.js supports static site generation, enabling the pre-rendering of pages at build time, resulting in faster loading times and better SEO. Is used when you can pre-render pages at build time because the content doesn't change often.
- **File System-Based Routing:** The routing system is based on the file structure of the “pages” directory.
- **Automatic Code Splitting:** Next.js automatically splits code into smaller chunks, loading only what’s necessary for each page.
- **API Routes:** - serverless functions to handle backend logic.

**4. What do you mean by SSR?** - technique that generates the HTML on the server side, sending the fully rendered HTML to the client’s browser.

- Process:
  - Request from Client:
  - Server-Side Processing: The server executes the JavaScript code associated with the requested page, fetches data if needed, and renders the complete HTML content on the server side.
  - Sending Rendered HTML to Client
  - Client-Side Hydration: Once the HTML is received by the browser, any JavaScript code needed for interactive elements or further client-side rendering is executed. This process is known as “hydration.”

**5. How does Next JS handle client-side navigation?**

- HTML5 History API client-side navigation approach. This enables smooth transitions between pages on the client side without a full page reload.
  - Link Component: <Link href="/another-page">
  - Programmatic Navigation: router.push('/another-page');

**6. Difference between the pre-rendering types available in Next JS.**

- Static Generation (SG)
  - HTML is generated at build time.
- Server-Side Rendering (SSR)
  - HTML is generated on each request.

**7.client-side rendering/server-side rendering?**

- CSR: delivers an initially empty HTML page that is then populated using JavaScript
- SSR: SSR transmits a completely rendered HTML page to the client’s browser

**8. How do you pass data between pages in a Next JS application?**

- URL query parameters,
- Router API,
- state management libraries like Redux or React Context.
- getServerSideProps function to fetch data on the server and pass it as props to the page component.

**9. Data fetching methods**

- getServerSideProps - for dynamic data,
- getStaticProps - for static data,
- getInitialProps for more control and flexibility. Older method used for data fetching.

**11. Environment variables managed** - can be stored in a .env.local file and accessed using process.env.VARIABLE_NAME.

**12. What are the deployment options for a Next.js application, and how can you optimize it for production?**

- Vercel, Netlify, or your own server. To optimize use serverless deployment, CDN caching, and enabling compression. You should also use environment variables to manage configuration for different deployment environments.

**13. "Hybrid" Next.js applications.**

- Combines server-side rendering (SSR) and static site generation (SSG) on the same page. You might use this approach when you have parts of a page that require frequent updates (SSR) and other parts that can be pre-rendered at build time (SSG). It's an optimization strategy to balance dynamic and static content.

**14. next/head component**

- update the HTML head of a page. You should use it when you need to dynamically set the title, add meta tags.

15. **prefetching**

- automatically starts downloading linked pages JavaScript and assets in the background. This proactive approach minimizes navigation time, enhancing the UX with a faster transition between pages.

**16. Implement authentication and authorization**

- session management,
- JSON Web Tokens (JWT),
- OAuth2.

17. **error handling**

- try...catch blocks,
- custom error page in the pages/\_error.js file.

**18. "Serverless" deployment**

- application is hosted on serverless platforms like Vercel or Netlify, where you don't need to manage traditional server infrastructure. These platforms automatically scale and handle server-side rendering, routing, and other aspects.

**19. "HMR" (Hot Module Replacement)**

- Allows developers to see changes in their code without a full page refresh during development. It updates only the modules that have changed, making the development process faster and more efficient.

**20. Performance optimization techniques**

- code splitting,
- image optimization,
- lazy loading,
- using responsive images with next/image,
- minimizing JavaScript bundle size.

**21. Handle cross-origin requests (CORS)**

- set up CORS headers

**22. Authentication and authorization**

- Using OAuth2 or OpenID Connect. Libraries like next-auth.

**23. Styling Next JS apps**

- CSS modules
- CSS-in-JS libraries like styled-components or emotion
- Global CSS files

**24. Next JS vs. React JS**

- NextJS
  - framework developed by Vercel
  - based on Node.js and Babel
  - static sites and server-side rendering
  - To generate pages for a Next JS project, we include the page in the “pages” folder
- ReactJS
  - library by Facebook.
  - UI via components
  - client-side rendering
  - we need to craft a component, and subsequently, we incorporate it into the router to formulate a page

**25. Dynamic route-based code splitting**

- Dynamic Imports with next/dynamic:
- Client-Side Rendering (CSR) with Router

**26. Conditional redirects in Next.js based on certain criteria**

- Redirects in getServerSideProps or getStaticProps
- Client-Side Redirects with useEffect and router.push
