angular.module('blogApp').
  component('singlePost', {
    //Important note on path: it starts from the app folder as the root
    templateUrl: 'components/single-post/single-post.template.html',
    controller: function SinglePostController($http, $stateParams) {
      var self = this;
    //   this.id = $stateParams.id;

      $http.get('https://jsonplaceholder.typicode.com/posts/' + $stateParams.id).then(function(response) {
        console.log(response.data);
        self.post = response.data;
      });
    }
  });
