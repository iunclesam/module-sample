(function () {

    require.config({
        baseUrl: 'js/', // 基本的路径
        paths: { // 配置路径
            dataService: './modules/dataService',
            alerter: './modules/alerter',
        }
    });

    requirejs(['alerter'], function (alerter) {
        alerter.showMsg();
    });
})();