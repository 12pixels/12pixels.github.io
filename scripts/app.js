var app=angular.module('gratitudeApp',['ngResource']),
	storage=window.localStorage;

app.controller('gratitudeApp.controller',function(Journal, $scope, $location){
	$scope.journal=[{"date":1426250260000,"note":"i am thankful for the beautiful sunshine that fills my house"},
{"date":1425913240000,"note":"i am thankful for the abundance of wealth in my life"}];

	if(storage.journal){
		$scope.journal=JSON.parse(storage.journal);
		$scope.newvisitor=false;
	}else{
		$scope.newvisitor=true;
		storage.journal=JSON.stringify($scope.journal);	
	}
	$scope.textField = '';

$scope.addMore = function(){
if ($scope.textField != '') {
	$scope.journal.unshift({
		date:this.getDate(),
		note:$scope.textField
	});
	storage.journal=JSON.stringify($scope.journal)	
	$scope.textField = '';	
}
else
	console.log('invalid!');
}
$scope.getDate = function() {
	var d = new Date();
	var e = d.getTime() - d.getMilliseconds();
	return e;
}
$scope.removeNote = function(note, index){
	this.journal.splice(index,1);
	storage.journal=JSON.stringify($scope.journal)	
	console.log(index+". "+note+" (removed!)");
}

}); //end of controller

app.factory('Journal', function($resource){
	return $resource('notes.json');
});

	document.getElementById('resbutton').addEventListener("click", function(){ closeMe('box');});
	document.getElementById('addbtn').addEventListener("click", function(){ closeMe('btn');});

	function closeMe(elem) {
		if(elem=='btn'){
			document.getElementById('addbtn').parentElement.style.opacity="0";
			document.getElementById('box').style.opacity="1";
		}else{
			document.getElementById('addbtn').parentElement.style.opacity="1";
			document.getElementById('box').style.opacity="0";
			document.getElementById('inptarea').value="";			
		}

	}
