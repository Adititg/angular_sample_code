angular.module('MyApp')
  .factory('signup', function($http) {
    return {
      getProfile: function() {
        return $http.get('/api/me');
      },
      updateProfile: function(profileData) {
        return $http.put('/api/me', profileData);
      }
    };
  });