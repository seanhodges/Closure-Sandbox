goog.provide("sean.test.HelloProvider");

sean.test.HelloProvider = function(name) {
    this.name_ = name;
};

sean.test.HelloProvider.prototype.say = function() {
    alert('Hello, ' + this.name_);
};

