app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("home");
    $stateProvider
        .state('nav', {
            url: '/',
            templateUrl: 'templates/nav.html',
            controller: 'NavbarCtrl'
        })
        .state('nav.home', {
            url: 'home',
            templateUrl: 'templates/home.html'
        });
});