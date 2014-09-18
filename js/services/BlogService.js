app.factory('BlogService', function($resource) {
    return $resource('blog/blogs.json'); // Note the full endpoint address
});