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

# Development Day 5

VIDEOS

PART 1 - Login, Characters with Autoswiper, desktop view
- https://user-images.githubusercontent.com/88943189/223278956-070e4b68-6df6-4713-9e77-2e60481609bb.mp4

PART 2 - Responsivity, laptop, tablet, mobile view, Swipe in mobile mode, transition back to desktop
- https://user-images.githubusercontent.com/88943189/223278975-2a826831-3c34-482f-b28d-f64bc0e8296e.mp4

PART 3 - Guards in action, authentication, cookies, logInData in localstorage
- https://user-images.githubusercontent.com/88943189/223278995-7c56c3b2-18de-4c42-bf78-4698dc93dcf1.mp4

PHOTOS
- Login Page
![image](https://user-images.githubusercontent.com/88943189/223279078-0fdbd5da-24ec-4bad-98f6-c45ab8239d11.png)

- Not Found Page
![image](https://user-images.githubusercontent.com/88943189/223279124-d6e369cf-be7f-464d-87cb-4f9f28050bfc.png)

- Character Selection
![image](https://user-images.githubusercontent.com/88943189/223279194-331d1038-320e-439e-9450-e557e8e9b178.png)

#Challenges and Highlights
- Working with SwiperJS - SwiperOptions (config), Keyboard, Pagination, Navigation, Autoplay, Delay, Speed etc...
- Working with DOM manipulation, Renderer2, Viewchild(), ElementRef - NOTE: ngFor ruined the viewchild as it was an undefined element. The solution could be lifecycle hook but it was 2 hour work and no final perfect solution for it. Get to known to lifecycle hooks like ngAfterViewInit, ngAfterContentChecked etc
- New technique for me. To display the character name on the page as a HTML element [innerHTML]="character.name" solved the problem easily. No typescript, lifecycle hook logic was needed. Painfull hours of debugging as content wasn't displayed. Lesson learned.
- Working more with media querys mixins, breakpoints, variables, webkit elements, pseudo elements ... with Sass. Could refactor the code to have a single massive block of media query following one to another. Stick to this method now.
- Working with model interfaces
- Full responsive, desktop, laptop, tablet, mobile view

#Note
- There is one more bug, but I am too tired to solve it as it's 12:30 now, and today I have to submit the homework. So I will do it now just to be sure be in time. If I log in, the content isn't displayed. Like the whole swiper but if you refresh it you get it. If you have once refreshed on the page. And log out. It is visible. So the key is to refresh the page. I will solve it but for now I will submit my homework

# Development Day 6

FINAL PROGRAM FOR 1 WEEK SPRINT

VIDEO FOR FINAL PRODUCT

https://user-images.githubusercontent.com/88943189/223407122-df9251f6-1087-4716-9757-36fbea1a7e06.mp4

https://user-images.githubusercontent.com/88943189/223407517-5d5bdc4a-89eb-4331-b9ca-f25e0d61a2f6.mp4

#Challenges and Highlights
- The bug that was previously said was with the token. The access token wasn't set in time before the HTTP request, so it couldn't fetch the data. However if you had the token then it was no problem. The problem is solved.
- Making asnyc updateAuthorizationHeader function. Working with Promise and Observable at the same time, on the same element too.

#Note
- A lot of lesson was learnt especially about authentication, I had a lot of motivation during the development and learnt a lot of new stuff. I am glad to get this opportunity and thank you for the occasion!
- I am a little bit sad I couldn't do the battle arena part. But I have done it in Vue.js in one of my project so at least I experienced how it should be done. 
- So again thank you for the opportunity and hope to improve a lot like this in the future and I continue working on my Angular with Udemy!

https://github.com/RolandMarton/vue-monster-slayer
