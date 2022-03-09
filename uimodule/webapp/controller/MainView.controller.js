sap.ui.define(
  ["./BaseController",
    "sap/ui/model/odata/v2/ODataModel",
	"sap/ui/model/json/JSONModel"
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (BaseController,
	ODataModel,
	JSONModel) {
    "use strict";

    return BaseController.extend("curso.fiori.firstApp.controller.MainView", {
      onInit: function () {
        console.log('%c mainview', 'font-weight: bold; background-color: lightblue;font-size: large;')
        var url = "/Northwind/";
        this.setModel(new JSONModel([{}]), "tabla");
        var oModel = new ODataModel(url);
        var that = this;
        oModel.read("/Categories", {
          success: function (res, ret) {
            that.getModel("tabla").setData(res.results);
            console.log('%c', 'font-weight: bold; background-color: lightblue;font-size: large;')
          },
          error: function (error) {
            console.log('%c', 'font-weight: bold; background-color: lightblue;font-size: large;')
          }
        })
      },

      onPress: function (oEvent) {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("RouteAccionView", null);
      },
    });
  }
);