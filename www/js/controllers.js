angular.module('mike.controllers', [])

.controller('areacodeCtrl', function($scope, $state, $ionicModal) {

})

.controller('signCtrl', function($scope, $state, Login, $window) {
//////LOGIN
  $scope.data = {}; // data qui correspond au ng-model="data.phone" et "data.password" du form
  $scope.goBack = function(){
    $window.history.back();
  }

  $scope.login = function(){ // login qui correspond à la function du ng-click="login()" du form
    if($scope.data.phone === undefined) {
      console.log('veuillez entrer votre numéro');
    }else if ($scope.data.password === undefined){
      console.log('veuillez saisir votre mdpasse');
    }else{
        if ($scope.data.phone == "0672406574" && $scope.data.password == "aaa"){
          //si les données correspondent alors on accède à la page message
          localStorage.setItem("user", JSON.stringify($scope.data));
          //console.log('connexion validée !');
          $state.go('tab.messages');
        }else{
            console.log('Identifiant inconnu');
        }
        console.log($scope.data);
    }
  }

///////REGISTER
  $scope.register = function(){
    if($scope.data.phone === undefined){
      console.log('veuillez entrer votre numéro');
    }else if ($scope.data.email === undefined){
      console.log('veuillez saisir votre email');
    }else if ($scope.data.password === undefined){
      console.log('veuillez saisir votre mot de passe');
    }else if ($scope.data.password != $scope.data.repassword){
      console.log('veuillez saisir votre mot de passe');
    }else{
      //  Login.set($scope.data);
      localStorage.setItem("user", JSON.stringify($scope.data));
      $state.go('tab.messages');
    }

  }

})

.controller('tabCtrl', function($scope, $state) {

})

.controller('messagesCtrl', function($scope, $state, $ionicPopup) {
  $scope.goBack = function(){
    $window.history.back();
  }
})

.controller('messagesDetail', function($scope, $state) {

})

.controller('sendLocation', function($scope, $state) {

})

.controller('messagesCall', function($scope, $state, $ionicModal) {

})

.controller('contactsCtrl', function($scope, $state) {

})

.controller('contactsRecommended', function($scope, $state) {

})

.controller('contactsAdd', function($scope, $state) {

})

.controller('contactsSearch', function($scope, $state, $stateParams) {

})

.controller('contactsUpdate', function($scope, $state) {

})

.controller('contactsNearby', function($scope, $state) {

})

.controller('nearbyLocation', function($scope, $state) {

})

.controller('contactsInvite', function($scope, $state) {

})

.controller('groupCtrl', function($scope, $state) {

})

.controller('groupCreate', function($scope, $state) {

})

.controller('groupAdd', function($scope, $state) {

})

.controller('groupView', function($scope, $state) {

})

.controller('groupDetail', function($scope, $state) {

})

.controller('settingsCtrl', function($scope, $state, Settings) {
  $scope.showPopupLogout=function(){
    localStorage.clear();
    $state.go('login');
  };
})

.controller('changePasswordCtrl', function($scope, $state) {

})

.controller('searchCtrl', function($scope, $state) {

})
