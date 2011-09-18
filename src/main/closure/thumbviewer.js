goog.provide('sean.test.ThumbViewer');

goog.require('goog.dom');
goog.require('goog.ui.Component');

sean.test.ThumbViewer = function(opt_domHelper) {
    goog.ui.Component.call(this, opt_domHelper);
};
goog.inherits(sean.test.ThumbViewer, goog.ui.Component);

sean.test.ThumbViewer.prototype.decorateInternal = function(el) {
    this.setElementInternal(el);
    this.rowCount_ = 0;

    // Clear the contents of the container
    el.innerHTML = '';
};

sean.test.ThumbViewer.prototype.createRow = function(e) {
    var caption = e.width + 'x' + e.height;

    // Create the row view
    var row = goog.dom.createDom('div', { 'class' : 'thumb_viewer_row' });
    var thumb = goog.dom.createDom('img', { 'src' : e.proxyUrl });
    var caption = goog.dom.createDom('span', null, caption);
    var hiddenField = goog.dom.createDom('input', {
        'name' : 'contentData[thumbnails][' + this.rowCount_ + ']',
        'type' : 'hidden',
        'value' : e.value
    });

    goog.dom.appendChild(row, thumb);
    goog.dom.appendChild(row, caption);
    goog.dom.appendChild(row, hiddenField);

    // Add to the container
    goog.dom.appendChild(this.getElement(), row);

    this.rowCount_ += 1;
};

sean.test.ThumbViewer.prototype.deleteRow = function(id) {
    rows = this.getElement().getElementsByTagName('div');
    goog.dom.removeNode(rows[id]);
};
