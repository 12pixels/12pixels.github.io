var app=angular.module('gratitudeApp',['ngResource']),
	storage=window.localStorage;

app.controller('gratitudeApp.controller',function(Journal, $scope, $location){


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
    $scope.journal=[{"date":1426250260000,"note":"I am thankful for the beautiful sunshine that fills my house"},{"date":1425913240000,"note":"I am thankful for the abundance of wealth in my life"}];
    //alert($scope.getDate());

    if(storage.journal){
        $scope.journal=JSON.parse(storage.journal);
        $scope.newvisitor=false;
    }else{
        $scope.journal[0].date = $scope.journal[1].date = $scope.getDate();
        // alert($scope.journal[0].note);
        $scope.newvisitor=true;
        storage.journal=JSON.stringify($scope.journal);
    }
    $scope.textField = '';
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
