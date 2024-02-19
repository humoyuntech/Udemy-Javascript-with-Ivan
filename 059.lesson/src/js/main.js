function myModule() {
    this.hello = function() {
        console.log('hello!');
    };

    this.goodby = function() {
        console.log('bye!');
    };
}

module.exports = myModule;

