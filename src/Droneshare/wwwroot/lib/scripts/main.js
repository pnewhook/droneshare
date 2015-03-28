(function() {
  require({
    shim: {
      "libs/spin": {
        "deps": []
      },
      "libs/ladda": {
        "deps": ["libs/spin"]
      },
      "custom/atmosphere": {
        "deps": ["libs/ladda"]
      },
      "libs/jquery": {
        "deps": ["custom/atmosphere"]
      },
      "libs/jquery.flot": {
        "deps": ["libs/jquery"]
      },
      "libs/jquery.flot.time": {
        "deps": ["libs/jquery.flot"]
      },
      "libs/angular-file-upload-shim.min": {
        "deps": ["libs/jquery.flot.time"]
      },
      "libs/angular.min": {
        "deps": ["libs/angular-file-upload-shim.min"]
      },
      "libs/mapbox": {
        "deps": ["libs/angular.min"]
      },
      "libs/ngprogress-lite": {
        "deps": ["libs/mapbox"]
      },
      "libs/angular-animate.min": {
        "deps": ["libs/mapbox"]
      },
      "libs/angular-route.min": {
        "deps": ["libs/mapbox"]
      },
      "custom/angular-leaflet-directive": {
        "deps": ["libs/mapbox"]
      },
      "custom/angular-atmosphere": {
        "deps": ["libs/mapbox"]
      },
      "libs/angulartics.min": {
        "deps": ["libs/mapbox"]
      },
      "libs/angulartics-ga.min": {
        "deps": ["libs/mapbox"]
      },
      "libs/angular-flot": {
        "deps": ["libs/mapbox"]
      },
      "libs/angular-social": {
        "deps": ["libs/mapbox"]
      },
      "libs/angular-file-upload.min": {
        "deps": ["libs/mapbox"]
      },
      "libs/ng-infinite-scroll": {
        "deps": ["libs/mapbox"]
      },
      "libs/ng-ladda-bootstrap": {
        "deps": ["libs/mapbox"]
      },
      "libs/highcharts-ng": {
        "deps": ["libs/mapbox"]
      },
      "app": {
        "deps": ["libs/ngprogress-lite", "libs/angular-animate.min", "libs/angular-route.min", "custom/angular-leaflet-directive", "custom/angular-atmosphere", "libs/angulartics.min", "libs/angulartics-ga.min", "libs/angular-flot", "libs/angular-social", "libs/angular-file-upload.min", "libs/ng-infinite-scroll", "libs/ng-ladda-bootstrap", "libs/highcharts-ng"]
      },
      "controllers/aboutController": {
        "deps": ["app"]
      },
      "controllers/adminController": {
        "deps": ["app"]
      },
      "controllers/dapiControllers": {
        "deps": ["app"]
      },
      "controllers/detailControllers": {
        "deps": ["app"]
      },
      "controllers/mapController": {
        "deps": ["app"]
      },
      "directives/accessCodeDropdown": {
        "deps": ["app"]
      },
      "directives/liveMap": {
        "deps": ["app"]
      },
      "directives/mapboxStaticMap": {
        "deps": ["app"]
      },
      "directives/missionList": {
        "deps": ["app"]
      },
      "directives/missionPlot": {
        "deps": ["app"]
      },
      "directives/missionSummary": {
        "deps": ["app"]
      },
      "directives/navbarDirective": {
        "deps": ["app"]
      },
      "directives/tab": {
        "deps": ["app"]
      },
      "directives/tabs": {
        "deps": ["app"]
      },
      "directives/uploadMission": {
        "deps": ["app"]
      },
      "directives/userSummary": {
        "deps": ["app"]
      },
      "directives/vehicleSummary": {
        "deps": ["app"]
      },
      "filters/capitalize": {
        "deps": ["app"]
      },
      "filters/duration": {
        "deps": ["app"]
      },
      "filters/toMapIcon": {
        "deps": ["app"]
      },
      "filters/twitterfy": {
        "deps": ["app"]
      },
      "interceptors/dispatcher": {
        "deps": ["app"]
      },
      "libs/FileAPI.min": {
        "deps": ["app"]
      },
      "libs/angular-mocks": {
        "deps": ["app"]
      },
      "libs/ui-bootstrap-0.11.0": {
        "deps": ["app"]
      },
      "libs/ui-bootstrap-tpls-0.11.0": {
        "deps": ["app"]
      },
      "loadingIndicator": {
        "deps": ["app"]
      },
      "routes": {
        "deps": ["app"]
      },
      "services/dapiServices": {
        "deps": ["app"]
      },
      "views": {
        "deps": ["app"]
      }
    }
  }, ["require", "controllers/aboutController", "controllers/adminController", "controllers/dapiControllers", "controllers/detailControllers", "controllers/mapController", "directives/accessCodeDropdown", "directives/liveMap", "directives/mapboxStaticMap", "directives/missionList", "directives/missionPlot", "directives/missionSummary", "directives/navbarDirective", "directives/tab", "directives/tabs", "directives/uploadMission", "directives/userSummary", "directives/vehicleSummary", "filters/capitalize", "filters/duration", "filters/toMapIcon", "filters/twitterfy", "interceptors/dispatcher", "libs/FileAPI.min", "libs/angular-mocks", "libs/ui-bootstrap-0.11.0", "libs/ui-bootstrap-tpls-0.11.0", "loadingIndicator", "routes", "services/dapiServices", "views"], function(require) {
    return require(['bootstrap']);
  });

}).call(this);

//# sourceMappingURL=main.js.map
