goog.provide('sean.test.HelloProvider');

sean.test.HelloProvider = function(name) {
    this.name_ = name;
};

sean.test.HelloProvider.prototype.say = function() {
    document.write('Hello, ' + this.name_);
};

