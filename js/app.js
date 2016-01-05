var app = angular.module("MyApp", ["ngResource"]);

function twitterCtrl($scope, $resource) {

  	$scope.twitter = $resource("https://api.twitter.com/1.1/search/:action",
  	{action:"tweets.json",q:"angularjs",callback:"JSON_CALLBACK"},
  	{get:{method:"JSONP"}});

  	$scope.doSearch = function(){
  		//alert("clk");
  		$scope.twitterResult = $scope.twitter.get({q:$scope.searchTerm});
  		console.log($scope.twitterResult);
  	};


 }
