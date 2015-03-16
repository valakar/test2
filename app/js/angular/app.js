'use strict';

// Declare app level module which depends on views, and components
var booksApp = angular.module('booksApp', [
  'ngRoute',
  'booksControllers',
  'booksServices'
]);

booksApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/books', {
        templateUrl: 'pages/books/book-list.html',
        controller: 'BookListCtrl'
      })
      .when('/authors', {
        templateUrl: 'pages/authors/author-list.html',
        controller: 'AuthorListCtrl'
      })
      .when('/authors/author-detail/:authorId', {
        templateUrl: 'pages/authors/author-detail.html',
        controller: 'AuthorDetailCtrl'
      })
      .when('/books/book-detail/:bookId', {
        templateUrl: 'pages/books/book-detail.html',
        controller: 'BookDetailCtrl'
      })
      .when('/books/book-list-bygenre/:genreId', {
        templateUrl: 'pages/books/book-list.html',
        controller: 'BookListByGenreCtrl'
      })
      .otherwise({
        redirectTo: '/books'
      })
  }]);