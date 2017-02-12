myApp.factory('iceandfireService',['$http','$q',function($http,$q){

	var sampleAPIS  =  {};
	var getbooks = $http.get('http://www.anapioficeandfire.com/api/books?page=1&pageSize=20');
    var getcharacters = $http.get('http://www.anapioficeandfire.com/api/characters?page=1&pageSize=20');
    var gethouses = $http.get('http://www.anapioficeandfire.com/api/houses?page=1&pageSize=20');
       sampleAPIS.getData=function(){
       	 
       	console.log("helo " + $q.all([getbooks,getcharacters,gethouses]));
       	return $q.all([getbooks,getcharacters,gethouses]);
       }
	
	
	return sampleAPIS;

}]);//end of service 
