myApp.directive("houseList",function(){
	return{

		restrict : "E", // restrict element
		templateUrl : "./views/house-view.html",
		controller  : function($scope){
			console.log("house scope");
		}// end controller
	}
});