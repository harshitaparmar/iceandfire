myApp.directive("bookList",function(){
	return{

		restrict : "E", // restrict element
		templateUrl : "./views/book-view.html",
		controller  : function($scope){
			console.log("book scope");
		}// end controller
	}
});