# `Game of thornes` — an Angular(1.x) app

This project is an application skeleton for a typical [AngularJS][angularjs] web app that access the apis avilable at https://anapioficeandfire.com/

After installation, you can browse through the books, cahracters and houses


## Getting Started

To get you started you can simply clone the repository and install the dependencies:

### Prerequisites

You need git to clone the repository. You can get git from [here][git].

You must have Node.js and its package manager (npm) installed. You can get them from [here][node].

### Clone `angular-app`

Clone the `angular-app` repository using git:

```
git clone https://bitbucket.org/gisha_james/angular-app
cd angular-app
```

### Install Dependencies

```
npm install
```
After that, you should find out that you have two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the Angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
`angular-app` changes this location through the `.bowerrc` file. Putting it in the `app` folder makes it easier to serve the files by a web server.*

### Run the Application

To start the server run

```
npm start
```

Now browse to the app at [`localhost:8000`][local-app-url].

Alternatively, you can choose to configure your own web server, such as Apache or Nginx. Just
configure your server to serve the files under the `app/` directory.

### Following libraries are used

* https://github.com/angular/angular-seed (Seed for project for angular app)

* http://getbootstrap.com/

* http://fontawesome.io/

[angularjs]: https://angularjs.org/
[bower]: http://bower.io/
[git]: https://git-scm.com/
[http-server]: https://github.com/indexzero/http-server
[jasmine]: https://jasmine.github.io/
[jdk]: https://wikipedia.org/wiki/Java_Development_Kit
[jdk-download]: http://www.oracle.com/technetwork/java/javase/downloads
[karma]: https://karma-runner.github.io/
[local-app-url]: http://localhost:8000/index.html
[node]: https://nodejs.org/
[npm]: https://www.npmjs.org/
[protractor]: http://www.protractortest.org/
[selenium]: http://docs.seleniumhq.org/
[travis]: https://travis-ci.org/
[travis-docs]: https://docs.travis-ci.com/user/getting-started

