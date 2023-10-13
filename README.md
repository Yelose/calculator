# Calculator

This standalone project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.3.

```
ng new calculator --standalone
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Cleaning up

app.component.html
Delete everyting

## Installing Angular Material

```
ng add @angular/material
```

## Components generation

To create a component write in your IDE terminal the command ng generate component route/component's name
You can use angular abreviations g = generate, c = component.

```
ng g c pages/home
ng g c pages/standard
ng g c pages/scientific
ng g c pages/dates
```

## Routing

- Adding a route in a standalone project

app.routes.ts

```ts
export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/home/home.component').then((mod) => mod.HomeComponent),
  },
  {
    path: 'standard',
    loadComponent: () =>
      import('./pages/standard/standard.component').then(
        (mod) => mod.StandardComponent
      ),
  },
  ...
]
```

Now in your browser, you should see "home works"

- Trying the routes

app.component.html

```html
<router-outlet></router-outlet>
```

In your browser type the name of your routes, in this case:

```
localhost:4200/standard
localhost:4200/scientific
localhost:4200/dates
```

## Interface

First step I do is the interface, I created the shape of the standard calculator with Scss.
