app.directive('linkify', function(){
    return{
        scope: {},
        link: function (scope, element, attributes) {
            if(!element.className || !element.className.match( /roll/g )){
                scope.text1 = attributes.title;
                element[0].className += ' roll';
            }
        },
        template: '<span data-title="{{ text1 }}">' + '{{ text1 }}</span>'
    }
});