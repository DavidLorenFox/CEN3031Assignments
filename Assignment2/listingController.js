angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.searchQuery = '';
    $scope.rowIndex = '';
    $scope.inCode = '';
    $scope.inName = '';
    $scope.inLat = '';
    $scope.inLong = '';
    $scope.inAddress = '';

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      if($scope.inCode.length != 0 && $scope.inName != 0)
      {
        $scope.listings.push({"code":$scope.inCode, "name":$scope.inName, "coordinates":{"latitude":$scope.inLat, "longitude":$scope.inLong}, "address":$scope.inAddress});
      }
      $scope.inCode = '';
      $scope.inName = '';
      $scope.inLat = '';
      $scope.inLong = '';
      $scope.inAddress = '';
      return;
    };
    
    $scope.deleteListing = function(index) {
      $scope.listings.splice(index, 1);
    };
    
    $scope.showDetails = function() {
      var item = $scope.listings[$scope.rowIndex];
      $scope.detailedInfo = "";
      if($scope.listings[$scope.rowIndex].coordinates != undefined)
      {
         var coordinateLine = "Coordinates: (" + item.coordinates.latitude + ", " + item.coordinates.longitude + ")\n";
         $scope.detailedInfo += coordinateLine;
         console.log(coordinateLine);
      }
      if($scope.listings[$scope.rowIndex].address != undefined)
      {
        var addressLine = "Address:" + $scope.listings[$scope.rowIndex].address;
        console.log(addressLine);
        $scope.detailedInfo += addressLine;
      }
    };

    $scope.updateIndex = function(index) {
      $scope.rowIndex = index;
    }

  }
]);