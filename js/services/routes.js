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
        })
        .state('nav.work', {
            url: 'work',
            templateUrl: 'templates/work.html'
        })
        .state('nav.blogList', {
            url: 'blog',
            templateUrl: 'templates/blogList.html',
            controller: 'BlogListCtrl'
        })
        .state('nav.blogList.blog', {
            url: '/:blogDate',
            templateUrl: function ($stateParams){
                return '/templates/blogs/' + $stateParams.blogDate + '.html';
            },
            controller: 'BlogCtrl'
        })
        .state('nav.write', {
            url: 'write',
            templateUrl: 'templates/write.html',
        });
});