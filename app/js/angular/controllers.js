'use strict';

var booksControllers = angular.module('booksControllers', []);

booksControllers.controller('BookListCtrl', ['$scope', 'Book',
  function($scope, Book) {
    $scope.books = Book.query();
  }]);

booksControllers.controller('AuthorListCtrl', ['$scope', 'Author',
  function($scope, Author) {
    console.log($scope.authors);
    $scope.authors = Author.query();
  }]);

booksControllers.controller('AuthorDetailCtrl', ['$scope', '$routeParams', 'Author',
  function($scope, $routeParams, Author) {
    $scope.author = Author.get({authorId: $routeParams.authorId});
  }]);

booksControllers.controller('BookDetailCtrl', ['$scope', '$routeParams', 'Book',
  function($scope, $routeParams, Book) {
    $scope.book = Book.get({bookId: $routeParams.bookId});
  }]);

booksControllers.controller('BookListByGenreCtrl', ['$scope', '$routeParams', 'Book', 'Genre',
  function($scope, $routeParams, Book, Genre) {
    $scope.booksId = [];
    $scope.books = [];
    Genre.query(function (response) {
      angular.forEach(response, function (item) {
          if (item.id == $routeParams.genreId) {
            $scope.booksId = item.books;
              if ($scope.booksId) {
                Book.query(function (response) {
                  angular.forEach(response, function (book) {
                    if (~$scope.booksId.indexOf(book.id) ) {
                      $scope.books.push(book);
                    };
                  });
                });
              };
          }
      });
    });
  }]);