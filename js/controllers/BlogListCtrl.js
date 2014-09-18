app.controller('BlogListCtrl', function($scope, BlogService){
    $scope.blogs = BlogService.query();
});