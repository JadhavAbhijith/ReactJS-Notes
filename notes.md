ReactJs:

 - Reactjs is an efficient, declarative & flexible javaScript library for building reusable UI components.

 - It is an  open-source, component based front end library which is responsible only for the view layer of the application.

 - Created by Jordan Walke, a software engineer at Facebook. 

 - Initially developed & maintained by Facebook & and later used in its products like WhatsApp & Instagram.

 - Facebook developed ReactJs in 2011 in its newsfeed section , but it was released to the public in the month of May 2013.




- An imperative programming language specifies how to do what you want.
    .g: C prog

- A declarative language specifies what you want but not how to do.
    e.g: React



What is ReactJs?

    - ReactJs is a JavaScript library for building user interfaces.






Why we use ReactJs?

1. The main objective of ReactJs is to develop user interfaces (UI) that improves the speed of the apps.

2. It uses Virtual DOM (JavaScript Object) which improves the performance of the app. The JavaScript virtual DOM is faster than the regular DOM.

3. ReactJS allows to divide our entire application into various components.

4. It uses the same traditional data flow, but it is not directly operating on the browser's Document Object Model (DOM) immediately; instead it operates on a virtual DOM.





Creating React Project:

Open terminal
1. npx create-react-app project_name






node_modules:

1. It contains the React library & any other third party libraries needed.




public:

- It holds the public assets of the application.

- It contains the index.html where React will mount the application by default on the <div id="root"></div> element.




src:

- It contains the App.css, App.js, App.test.js, index.css, index.js & serviceWorker.js files. Here, the App.js file always responsible for displaying the output screen in React.




package-lock.json:

- It is generated automatically for any operations where npm package modifies either the node_modules tree or package.json.

- It cannot be published it will be ignored if it finds any other place rather than the top-level package.



package.json:

- It holds various metadata required for the project.

- It gives information to npm, which allows to identify the project as well as handle the project's dependencies.



README.md:

- 






ReactJs Features:

1. JSX

    - JSX stands for JavaScript XML. It is a JS syntax extension

    - It is an XML or HTML like syntax used by ReactJs.

    - this syntax is processed into JS calls of React




2. Components:

    - ReactJs application is made up of multiple components & each component has its own logic & controls.

    - These components are reusable which help us to maintain the code while working on large scale projects.




3. One-Way Data binding:

    - ReactJs is designed in such a manner that follows unidirectional data flow.

    - The benefit of 1 way data binding is that it gives better control throghout the application. 




4. Virtual DOM:

    - It is an virtual representation of real DOM.

    - It works like 1 way data binding

    - Whenever any modification happens in the web app, the entire UI is re-rendered in virtual DOM representation.

======================================================

Advantages of ReactJs

1. Known to be SEO friendly:

    - traditional JS frameworks have an issue in dealing with SEO.

    - ReactJs overcomes this problem that helps developers to be easily navigated on various search engines.

    - It is because ReactJS apps can run on the server & the virtual DOM will be rendering & returning to the browser as a regular web page.



2. Benefit of Having JS library

3. Scope for testing the codes

4. Easy to Learn & Use

5. Creating dynamic Web Applications becomes easier.

6. Reusable Components

7. Performance Enhancement

8. The Support of Handy Tools





Disadvantages of ReactJs:

1. High pace of development

2. Poor documentation.

3. View Part - ReactJS covers only the UI layers of the app & nothing else. We still need to choose other tech to get a complete set for development in the project.

4. JSX as a barrier






Why use JSX?

    - JSX is not a necessity to write React application.

    - We can create react app without JSX but JSX makes React code simpler & elegant.

    - JSX ultimately transpiles to pure JS which is understood by the browser.


==============================================================

React Props:

- Props stands for Properties.

- they are read-only components

- Props are immutable so we cannot modify the Props from inside the component

- Inside the Components we can add attribute called Props.

- These attributes are available in the components as this.props & can be used to render dynamic data in our render() method.





To use props without De-Structuring:

- Props are like arguments that you pass to the React component when you don't use this structuring you must always access values using the Props object.



=====================================================================

React State:

- React Component has a built-in state object.

- The state object is where you store property values that belongs to the component.

- When the State object changes, the component re-renders.







Changing the State object:

- To change a value in the state object, use the this.setState() method.

- When a value in the state object changes, the component will re-render meaning that the output will change according to the new value(s).








Components:

- A Component is considered as the core building block of a React application.

- It makes the task of building the UI much easier.

- Each component exists in the same space, but they work independently from one another & merge all in a parent component, which will be the final UI of our application.

- Every React Component has their own structure, methods as well as API.They are reusable as per our needs.

- Consider entire UI as a tree.Here, the root is the starting component & each of the other pieces becomes branches, which are further divided into sub-branches.






Functional Components/Stateless Component

- These are a way to write components that only contain a render method & don't have their own state.

- They are simply javaScript functions that may or may not receive data as parameters.






Stateless Component:

- In react a stateless component is a component that does not maintain its own state it simply receives data from props & displays it.






Class Components:

- Class Components are more complex than functional Components.

- It requires to extend from React.

- Component & create a render function which returns a React element.

- You can create a class by defining a class that extends Component & has a render function.

- The Class Component is also known as stateful component because they can hold or manage local state.



=======================================================================================

React Event:

- Just like HTML DOM events, React can perform actions based on user events.

- React has the same events as HTML: click, change, mouseover etc

- An event is an action that could be triggered as a result of the user action or system generated event.

- e.g: a mouse click, loading of a web page, pressing a key, window resizes & other interactions are called events.

- React has its own event handling system which is very similar to handling events on DOM elements.

- The React event handling system is called Synthetic Events.

- The Synthetic Event is a cross browser wrapper of the browser's native event.







Adding Events:

- React Events are written in camelCase syntax:
    onClick instead of onclick

- React event handlers are written inside curly braces:
    onClick={shoot} instead of onClick ="shoot()"






bind:

- In React, class components event handler methods like changeText are not automatically bind to the component instance.

=============================================================================================

UnControlled Component:

- The uncontrolled input is similar to the traditional HTML form inputs.

- The DOM itself handles the form data.

- Need to use a ref to get form values from the DOM.

- No need to write an event handler for every state update.









Controlled Component                                                               UnControlled Component

1. They do not maintain their own state.                                   1. They maintain their own state.

2. Data is controlled by the parent component.                             2. Data is controlled by the DOM.

3. They take in current values through props & then notify                 3. They use a ref to get values from DOM
   the changes via contacts.                                             










Controlled Components:

- Here, the mutable state is kept in the state property & will be updated only with setState() method.


1. Controlled Compnents have functions that govern the data passing into them on every onChange event, rather than grabbing the data only once. 
e.g: When you click a submit button


2. A controlled component takes its current value through props & notifies the changes through callbacks like an onChange event.


3. A parent component "controls" this changes by handling the callback & managing its own state & then passing the new values as props to the controlled component. It is also called as a "dumb component".


=============================================================================================

React Router:

- Routing is the process of redirecting a user to different pages based on their action or request.






How to install React Router?

- React makes use of an external library to handle routing.

- However, before we can implement routing with that library, we must first install it in our project, which is accomplished by running the following command in your terminal (within your project directory)

    - npm install react-router-dom@6




==========================================================

React Hooks:

What are React Hooks?
- Hooks are special functions in React that let you use State & other react features in function components without needing to write class components.




Why Hooks?
- Before Hooks only class components could have state & lifecycle methods hooks made it possible to
1. use state in function components 
2. Run side effects like fetching data, timers
3. Reuse logic easily
4. Write cleaner & shorter code




Names of Hooks:
1. useState
2. useEffect
3. useContext
4. useRef
5. useMemo
6. useCallback
7. useReducer
8. useLayoutEffect




1. useState: to create & manage component state

2. useEffect: to handle side effects like fetching data, timers

3. useContext: to access context data directly in a component

4. useRef: to access DOM elements or persist values without re-rendering







- The React Hook APIs provide an alternative to writing class-based components & offer an alternative approach to state management & life cycle methods.

- Hooks bring to functional components the things we once were only able to do with classes, like being able to work with React local state, effects & context through useState, useEffect & useContext.





When to use Hooks?
- If you write a function component & then you want to add some state to it, previously you do this by converting it to a class.

- But now you can do it by using a Hook inside the existing function component.





The Benefits of Using Hooks:

- they change the way we write components for the better.




# Imp
# 5 important rules for Hooks:

1. Never call hooks from inside a loop, condition or nested function.

2. Hooks should sit at the top-level of your component.

3. Only call Hooks from React functional components.

4. Never call a Hook from a regular function

5. Hooks can call other Hooks.






useEffect :

- It is a React hook that lets you run side effects in your components.

- A side effect is anything that affects something outside the component like fetching data from an API, updating the document title, setting a timer

=================================================================

useContext:

- It is a react hook that lets you access context without having to pass props manually through every level of the component tree.

- It helps when multiple components need the same data like theme, user info, languages.


=================================================================

Redux:

- Redux is a state management library it helps manage global state, data shared across components in large applications.

- In React each component can have its own local state using useState, but when multiple components need to share or update the same data like user info, cart, theme managing state becomes difficult. 

- Redux solves this by using storing the entire app state in one central store.

    Store:
        - The single source of truth stores the entire state of your application
        - Action : A plain java script object that describes what happened
        - Reducer : A pure function that takes the current state & action & returns the new state 
        - Dispatch : A method used to send action to the store 


            1. UseSelector() : to access data from the store

            2. useDispatch() : to send actions




Steps:
1. A user interacts with the UI e.g: Clicks the button

2. The component dispatches an action 

3. The reducer receives the current state and that action 

4. The reducer returns the new state 

5. The store notifies react component & they re-render with updated data



=================================================================================================


## Adding folder to GitHub (e.g RWD folder)
- Open folder & inside terminal give commands:

1. git init
2. git add .
3. git commit -m "Initial commit - RWD project"
4. Go to your GitHub Account create a new Repository (e.g: RWD)

- back to vs code terminal 

5. git remote add origin https://github.com/JadhavAbhijith/RWD.git   (RWD - repo name)
6. git branch -M main
7. git push -u origin main

- Folder is added to your github repo