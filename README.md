# Valley View Garage — React + Tailwind

Pixel-perfect clone of valleyviewgarage.co.uk, ready for Vercel.

---

## Setup

```bash
npm create vite@latest valley-view-garage -- --template react
cd valley-view-garage
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        franklin: ['"Libre Franklin"', '"Helvetica Neue"', "helvetica", "arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
```

### index.html — add to `<head>`

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,300;0,400;0,600;0,800;1,300;1,400&display=swap"
  rel="stylesheet"
/>
<link rel="icon" href="https://www.valleyviewgarage.co.uk/wp-content/uploads/2017/03/cropped-icon-repairs-32x32.png" sizes="32x32" />
```

### src/index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* { box-sizing: border-box; }
body { margin: 0; }
```

### src/App.jsx

```jsx
import ValleyViewGarage from "./ValleyViewGarage";

export default function App() {
  return <ValleyViewGarage />;
}
```

---

## Files

- `ValleyViewGarage.jsx` — the full page component, drop into `src/`
- `index.html` — standalone HTML preview (no build step needed)

---

## Deploy to Vercel

```bash
npm run build
# then either:
vercel deploy
# or connect the repo to vercel.com and it auto-deploys on push
```

---

## Notes

- Images are hotlinked from the live WP site. For production, download them from  
  the WP Media Library and place in `public/images/` — then update the `WP` constant  
  at the top of `ValleyViewGarage.jsx` to `""` and prefix each path with `/images/`.
- Email address in Contact section: the original site uses Cloudflare email obfuscation.  
  Replace `info@valleyviewgarage.co.uk` with the actual address if different.
- The Google Maps embed may require updating to the Maps Embed API for reliability.

---

## Brand tokens

| Token       | Value      |
|-------------|------------|
| Primary     | `#132e62`  |
| Button red  | `#d93434`  |
| Button dark | `#611313`  |
| Panel bg    | `#f2f2f2`  |
| Body text   | `#333333`  |
| Font        | Libre Franklin |
