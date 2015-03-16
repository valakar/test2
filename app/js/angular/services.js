'use strict';

/* Services */

var booksServices = angular.module('booksServices', ['ngResource']);

booksServices.factory('Book', ['$resource',
  function($resource){
    return $resource('json/books/:bookId.json', {}, {
      query: {method:'GET', params:{bookId:'books'}, isArray:true}
    });
  }]);

booksServices.factory('Author', ['$resource',
  function($resource){
    return $resource('json/authors/:authorId.json', {}, {
      query: {method:'GET', params:{authorId:'authors'}, isArray:true}
    });
  }]);

booksServices.factory('Genre', ['$resource',
  function($resource){
    return $resource('json/genres/genres.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);