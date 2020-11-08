(function () {

    require.config({
        baseUrl: 'js/', // 基本的路径
        paths: { // 配置路径
            dataService: './modules/dataService',
            alerter: './modules/alerter',
            jquery: './libs/jquery-1.10.1',
            angular: './libs/angular',
        },
        shim: {
            angular: {
                exports: 'angular'
            }
        }
    });

    requirejs(['alerter', 'angular'], function (alerter, angular) {
        alerter.showMsg();
        console.log(angular);
    });
})();