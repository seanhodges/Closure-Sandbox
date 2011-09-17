goog.provide('sean.test.ThumbViewer');

sean.test.ThumbViewer = function(container) {
    this.container_ = goog.dom.getElement(container);
};
goog.inherits(sean.test.ThumbViewer, goog.ui.Component);

sean.test.ThumbViewer.prototype.createDom = function() {
    this.decorateInternal(this.container_);
};

sean.test.ThumbViewer.prototype.createRow = function(thumb_data) {
    // Create the row view
    var row = goog.dom.createElement('div');

    // Add to the container
    this.appendChild(row);
};

