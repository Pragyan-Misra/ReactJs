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
