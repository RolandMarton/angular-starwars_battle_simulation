# StarWars BattleSimulation

This is the homework from Webstar, which is basically a Star Wars theme Battle Arena Simulator made with Angular, Sass and REST API.

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

<div style="text-align:center" align="center">
  <table>
    <thead>
      <tr>
        <th>Technology</th>
        <th>Version</th>
        <th>&nbsp;</th>
        <th>Package</th>
        <th>Version</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Sass</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>@angular-devkit/architect</td>
        <td>0.1502.0</td>
      </tr>
      <tr>
        <td>VS Code</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>@angular-devkit/build-angular</td>
        <td>15.2.0</td>
      </tr>
      <tr>
        <td>Postman</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>@angular-devkit/core</td>
        <td>15.2.0</td>
      </tr>
      <tr>
        <td>Angular CLI</td>
        <td>15.2.0</td>
        <td>&nbsp;</td>
        <td>@angular-devkit/schematics</td>
        <td>15.2.0</td>
      </tr>
      <tr>
        <td>Node</td>
        <td>18.12.1</td>
        <td>&nbsp;</td>
        <td>@schematics/angular</td>
        <td>15.2.0</td>
      </tr>
      <tr>
        <td>Package Manager</td>
        <td>npm 9.5.1</td>
        <td>&nbsp;</td>
        <td>rxjs</td>
        <td>7.8.0</td>
      </tr>
      <tr>
        <td>OS</td>
        <td>win32 x64</td>
        <td>&nbsp;</td>
        <td>typescript</td>
        <td>4.9.5</td>
      </tr>
      <tr>
        <td>Angular</td>
        <td>15.2.0</td>
        <td>&nbsp;</td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</div>

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

# Development Day 3 

https://user-images.githubusercontent.com/88943189/222843363-019e1230-7203-4802-80e8-1635689a9d57.mp4

## Challenges and highlights
- Discovering several approaches for authentication like auth0, http interceptor, refreshtoken - accesstoken etc
- Firstly implemented a logic where interval check every x seconds whether there is a cookie or not. If not then log out
- Had logic where it checks every x seconds and if there is no cookie it logs out
- Now a logic was implemented where with lifecycle hooks it checks authentication. If one of the essential token is missing, like access or refreshtoken then return false. One implementation had logout inside the method, but following single responsivity it's in different method.
- Current implementation logs out if the authentication fails. 
- You can return to the route /character if still have the session token. If not you can't.
- Created complete guard logic to prevent logged in user to reach log in form, and logged out user to reach character selection page

# Development Day 4

No video at this time :( It looks the same really. 

![image](https://user-images.githubusercontent.com/88943189/222930083-7d8f37b1-30d9-4b3b-9841-12ecc95b6fc0.png)

## Challenges and highligts
- When I wanted to get the firstName and lastName for the navbar template, i ran into a problem. So I had to rethink the logic behind authentication and login
- When I wanted to get the loggedInData in the template the object was empty. So I created a solution where I used BehaviourSubject from RxJS. As it gives back the latest value I could subscribe to it and get the data object.
- Next problem was that when i was already authenticated. The user doesn't log in obviously. So the page didnt know the the firstName and lastName. What was the solution? When I once logged in I set the value to the localStorage in the loggedInUserData. So with the constructor I applied the logic to get the item and to parse it.
- So in the end I could get the values from the template. Little bit more complicated I imagined as I think I overdid (?!) the authentication. But this is the first time I do it, and I didn't learn it from Udemy yet. The best practises. There is no perfect code, but I think i improved a lot and looking forward to get the best practise from pros. 
