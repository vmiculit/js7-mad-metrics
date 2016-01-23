
angular.module("js7",[])

angular.module("js7")
	.controller("js7Troller",["$scope", "$filter", function($scope, $filter) {

		$scope.lightBoxSwitch = false

		$scope.showMetrics = function(event) {
			$scope.lightBoxSwitch = true

			$scope.time = $filter('date')(event.timeStamp, "mm:ss")
			$scope.distanceScrolled = event.view.scrollY*100/document.documentElement.scrollHeight
		}

		$scope.closeLightbox = function(){
			$scope.lightBoxSwitch = false
		}


	}])