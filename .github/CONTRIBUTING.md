## Git

## Folder Structure (general) ##

```bash
      REACT_STRUCTURE
      ├── LICENSE
      ├── README.md - You are here!   
      ├── public/
      ├── src/
      │   ├──app.tsx  
      │   ├── styles/  # global styles
      │   │   └── global.css # Always use lowercase letters in styles
      │   ├── components/
      │   │   ├── UI/ # UI Items ex : Button, Inputs
      │   │   │   └── Item-example # Capital first letter ex : Button
      │   │   │   │     └──  index.tsx
      │   │   │   │     └──  styles.module.css
      │   │   │   └── Item-example-two 
      │   │   │         └──  index.tsx
      │   │   │         └──  styles.module.css
      │   │   └── Component-example/ # Uppercase component name
      │   │   │        └── index.tsx # Files with lowercase first letter
      │   │   │        └── styles.module.scss # Styles with lowercase first letter
      │   │   └── Component-example-two/
      │   │           └── index.tsx
      │   │           └── styles.module.scss   
```