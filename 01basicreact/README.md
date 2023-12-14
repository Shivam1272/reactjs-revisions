# npx(Node Package Exectue)

## Create React Project

```javascript
    npx create-react-app ./projectname  //to create a new react project
```

### Flaws of This command from beginner perspective

- Time Consuming
- Vanilla React
- Provide extra file
  - serviceWorker.js
  - test.js
  - webvitals.js

## To Solve this use **Vite**

Vite is an opinionated build tool for modern web applications, it's fast and minimal by design. It serves your code with native ES

```bash
    npm create vite@latest
```

### Advantage

- Faster Project Creation
- Allow to you add extra flavor
  - TypeScript SWC
  - JavaScript SWC
- No extra Test file
