System.register(['angular2/ts/bootstrap', './app'], function(exports_1) {
    var bootstrap_1, app_1;
    return {
        setters:[
            function (bootstrap_1_1) {
                bootstrap_1 = bootstrap_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            }],
        execute: function() {
            bootstrap_1.bootstrap(app_1.App);
        }
    }
});
//# sourceMappingURL=boot.js.map