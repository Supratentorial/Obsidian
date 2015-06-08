/// <reference path="../../typings/angularjs/angular.d.ts"/>

module app.matters.controller {

    import Matter = app.matters.service.Matter;

    interface IMatterScope {
        getMatters(): ng.IPromise<Matter[]>;
        
    }


}