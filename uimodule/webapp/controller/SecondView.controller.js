sap.ui.define(["./BaseController"], function (BaseController) {
  "use strict";

  return BaseController.extend("curso.fiori.firstApp.controller.SecondView", {
    onPress: function (oEvent) {
      // this.byId("tablaProducts").unbindElement();
      this.byId("tablaProducts").bindElement({path: oEvent.getSource().getBindingContext("tablaDataSource").getPath(),
                                              model: "tablaDataSource"});
    }
  });
});