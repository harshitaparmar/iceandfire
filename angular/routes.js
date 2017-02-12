
myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl     : 'views/index-view.html', 
            controller      : 'mergeAPIController',
            controllerAs    : 'mergeAPI'
        })
        .otherwise(
            {
               
                template   : '<h1>404 page not found</h1>'
            }
        );
}]);