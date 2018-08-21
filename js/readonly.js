var obj = {}

Object.defineProperty(obj, 'name', {
    enumerable: true,
    configurable: true,
    get:function() {
        return 'wukai';
    },
    set: function(val) {

    }
})
console.log(obj.name, 44444)