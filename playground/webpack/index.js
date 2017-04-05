/**
 * Created by kevhu on 2017/4/5.
 */

function component () {
    "use strict";
    var element = document.createElement("div");
    element.innerHTML = 'Hello, Webpack';

    return element;
}

document.body.appendChild(component());