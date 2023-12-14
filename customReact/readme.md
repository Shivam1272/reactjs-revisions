# Concept

### Learning how **React** Create Element

- React has `createElement` method which take three parameter
  - html type : a, div, p, h1
  - properties: classname, id, href, target
  - children: tex-content or another element

```javascript
function customRender(reactElement, container) {
  /*
        const domElement = document.createElement(reactElement.type);
        domElement.innerHTML = reactElement.children;
        domElement.setAttribute("href", reactElement.props.href);
        domElement.setAttribute("target", reactElement.props.target);
        
        container.appendChild(domElement);
    */

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;

  for (const prop in reactElement.props) {
    if (prop == "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://shivam-patel.netlify.app/",
    target: "_blank",
  },
  children: "click me to visit my portfolio",
};
```

**To know more about this checkout 01vitereact folder**
