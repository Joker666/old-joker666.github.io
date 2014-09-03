app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('nav', {
            url: '/',
            templateUrl: 'templates/nav.html',
            controller: 'NavbarCtrl'
        })
        .state('nav.home', {
            url: 'home',
            templateUrl: 'templates/home.html'
        })
        .state('nav.blogList', {
            url: 'blog',
            templateUrl: 'templates/blogList.html',
            controller: 'BlogListCtrl'
        })
        .state('nav.blogList.blog', {
            url: 'blog',
            templateUrl: 'templates/blogList.html',
            controller: 'BlogListCtrl'
        });
});