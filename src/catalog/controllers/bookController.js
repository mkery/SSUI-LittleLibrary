var Book = require("../models/book");
var Author = require("../models/author");
var Genre = require("../models/genre");
var BookInstance = require("../models/bookinstance");

const { body, validationResult } = require("express-validator/check");
const { sanitizeBody } = require("express-validator/filter");

var async = require("async");

exports.index = function(req, res) {
  async.parallel(
    {
      book_count: function(callback) {
        Book.count(callback);
      },
      book_instance_count: function(callback) {
        BookInstance.count(callback);
      },
      book_instance_available_count: function(callback) {
        BookInstance.count({ status: "Available" }, callback);
      },
      author_count: function(callback) {
        Author.count(callback);
      },
      genre_count: function(callback) {
        Genre.count(callback);
      }
    },
    function(err, results) {
      res.json({
        title: "Local Library Home",
        error: err,
        data: results
      });
    }
  );
};

// Display list of all books.
exports.book_list = function(req, res, next) {
  Book.find({}, "title author ")
    .populate("author")
    .exec(function(err, list_books) {
      if (err) {
        return next(err);
      }
      // Successful, so render
      res.json(list_books);
    });
};

// Display detail page for a specific book.
exports.book_detail = function(req, res, next) {
  async.parallel(
    {
      book: function(callback) {
        Book.findById(req.params.id)
          .populate("author")
          .populate("genre")
          .exec(callback);
      },
      book_instance: function(callback) {
        BookInstance.find({ book: req.params.id }).exec(callback);
      }
    },
    function(err, results) {
      if (err) {
        return next(err);
      }
      if (results.book == null) {
        // No results.
        var err = new Error("Book not found");
        err.status = 404;
        return next(err);
      }
      // Successful, so render.
      res.json({
        title: "Title",
        book: results.book,
        book_instances: results.book_instance
      });
    }
  );
};
