/**
 * Created by kevhu on 2017/3/31.
 */


var Class =  {
    create: function() {
        return function(){
            console.log('in Class -> create -> function => this:');
            console.log(this);
            this.initialize.apply(this, arguments);
        }
    }
};

var A = Class.create();

A.prototype = {
    initialize: function (v) {
        console.log('in A.prototype -> initialize => this: ');
        console.log(this);
        this.value = v;
    },
    showValue: function () {
        console.log(this.value);
    }
};

var a = new A('Hello world');
a.showValue();