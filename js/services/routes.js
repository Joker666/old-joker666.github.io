app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('nav', {
            url: '/',
            templateUrl: 'templates/nav.html'
        });
});