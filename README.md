# ReactJs

# React Fiber: [link](https://github.com/acdlite/react-fiber-architecture)

# reconciliation

The algorithm React uses to diff one tree with another to determine which parts need to be changed.

# Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM."

# To install tailwindcss

npm install tailwindcss @tailwindcss/vite

- Configure the Vite plugin

Add the @tailwindcss/vite plugin to your Vite configuration.

vite.config.ts

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
plugins: [
tailwindcss(),
],
})

- import Tailwind CSS
  Add an @import to your CSS file that imports Tailwind CSS.
  @import "tailwindcss";

# Link and NavLink:

Link is used inplace of "a" tag as "a" tag refreshes the page completely but in react we dont have the concept of page refreshment, here the things directly go, and are show in web-page without refreshment.
NavLink provides some additional features, in NavLink we provide a callback in classname, as we get a "isActive" variable directly.
Example:

```javascript
<NavLink
  className={({ isActive }) =>
    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
  }
>
  Home
</NavLink>
```
