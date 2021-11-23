'use strict';

var textArea = document.getElementById('textArea');
var minRows = 2;
var maxRows = 4;
var areaHeight = 8;
var lineHeight = 14;

// textArea.setAttribute('rows', minRows)
textArea.style.height = minRows * lineHeight + areaHeight - 4 + 'px';
textArea.addEventListener('input', OnInput, false);

function OnInput() {
    if (this.scrollHeight <= maxRows * lineHeight + areaHeight) {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
        this.style.overflow = 'hidden';
        this.style.width = '200px';
    } else {
        this.style.overflowY = 'scroll';
        this.style.width = '215px';
    }
}