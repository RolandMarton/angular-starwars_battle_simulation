# StarWars BattleSimulation

This is the homework from Webstar, which is basically a Star Wars theme Battle Arena Simulator.

## Design

<div align="center">
 <img src="https://user-images.githubusercontent.com/88943189/222539974-3c4c42c0-df0e-4d76-ba4d-fea70442227c.jpg" width="30%"></img> 
 <img src="https://user-images.githubusercontent.com/88943189/222539988-9450f955-fc33-4b7f-af0e-207645299026.jpg" width="30%"></img> 
 <img src="https://user-images.githubusercontent.com/88943189/222541082-a619d1f1-d605-483d-b533-e8ca0f87ea70.jpg" width="30%"></img> 
 <img src="https://user-images.githubusercontent.com/88943189/222541093-6d0388a0-dc4f-409e-9bbd-5caa046f110b.jpg" width="30%"></img> 
 <img src="https://user-images.githubusercontent.com/88943189/222541045-bb7d886c-8ec8-4821-adf7-4edcbb90aef4.jpg" width="30%"></img> 
 <img src="https://user-images.githubusercontent.com/88943189/222541060-c929ed7d-27d2-4ee1-a497-a7d069c4d278.jpg" width="30%"></img>
</div>

## Technologies
- Sass
- VsCode
- Postman
- Angular CLI: 15.2.0
- Node: 18.12.1
- Package Manager: npm 9.5.1
- OS: win32 x64

- Angular: 15.2.0

Package                         Version
---------------------------------------------------------
- @angular-devkit/architect       0.1502.0
- @angular-devkit/build-angular   15.2.0
- @angular-devkit/core            15.2.0
- @angular-devkit/schematics      15.2.0
- @schematics/angular             15.2.0
- rxjs                            7.8.0
- typescript                      4.9.5

# Development Day 1

https://user-images.githubusercontent.com/88943189/222204378-8eb1236f-9f3a-4d12-a8d2-198e90a6a54d.mp4

## Challenges and highlights
- Make the foundation of the Sass styles (root variables for colors, variables for devices, media querys, default style configuration, nesting, using different level selectors etc...)
- Create the default component structure for the app using BEM methodologies
- Create Routes using Routermodule - create not-found page, log-in page
- Model interface for REST API HTTP response - for error, response
- Create Authentication, and character selection service
- Start the foundation of JWT token, planning to store the token and the refreshertoken in cookie or localstorage
- Working with RxJS Observables with HTTPClientModule
- Create application wide singleton service pattern
- Create fully responsive web design with only one breakpoint yet for mobile devices

# Development Day 2

https://user-images.githubusercontent.com/88943189/222537303-ce420557-f2c0-4f41-8d04-450d49ee4a6b.mp4

## Challenges and highlights
- Restructure the SCSS files, create mixins to remove code duplications, make variables, imports, full responsive design
- Routing module has guards now, canActivate, canDeactivate (will have resolver as well)
- Prevent user to reach routes if logged in - authentication JWT token
- Useage of ngx-cookie-service
- Planning to create refreshtoken - token system where token is updated if expired
- Create navbar component - able to delete JWT token here and logout
- Create footer component
- Make semantic HTML structure for clean code
- Have different breakpoints now, can be reached with variables from styles
