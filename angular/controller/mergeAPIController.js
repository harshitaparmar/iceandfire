myApp.controller('mergeAPIController',['$http','iceandfireService','$q',function($http,iceandfireService,$q) {

  

 var main=this;
 this.contents=[];
 this.content1=[];
 this.values=[];
 this.values1=[];
 this.values2=[];
 this.IsVisible = false;
 this.modelValue;
console.log(this.IsVisible);
var main=this;
this.ShowHide = function () {
    main.IsVisible = true;
    console.log("variable value" + main.IsVisible);
}
this.changeValue=function(newValue)
{
  main.modelValue=newValue;
  console.log(main.modelValue);
}
 iceandfireService.getData()
 .then(function successCallback(response) {
 // main.contents=response;
  main.contents=[].concat(response.map(item => item.data));
  //main.content1=[].concat(main.contents.map(item => item.data));
  //console.log(main.contents);
  /*for(var i=0;i<main.contents.length;i++)
  {
    for(x in main.contents[i])
    {
      main.values[x]=main.contents[i][x];
    }
  }*/
  main.values=main.contents[0];
  main.values1=main.contents[1];
  main.values2=main.contents[2];
  main.values=main.values.concat(main.values1);
  main.values=main.values.concat(main.values2);
  console.log(main.values);
        }, function errorCallback(response) {
          alert("some error occurred. Check the console.");
          console.log(response);
        });
 }]); // end controller