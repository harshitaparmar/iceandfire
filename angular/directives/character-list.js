myApp.directive("characterList",function(){
	return{

		restrict : "E", // restrict element
		templateUrl : "./views/character-view.html",

		controller  : function($scope){

			console.log("directive scope");
		}// end controller


	}

});