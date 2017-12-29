//! Variables
var cTID = function(s) { return app.charIDToTypeID(s); };
var sTID = function(s) { return app.stringIDToTypeID(s); };


//
//==================== Highlights 1 ==============
//
Highlights1 = function() {
  // Set
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Chnl'), cTID('Chnl'), sTID("RGB"));
    desc1.putReference(cTID('T   '), ref2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Duplicate
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Highlights 1");
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  step1();      // Set
  step2();      // Duplicate
};



//
//==================== Highlights 2 ==============
//
Highlights2 = function() {
  // Set
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Chnl'), cTID('Chnl'), sTID("RGB"));
    desc1.putReference(cTID('T   '), ref2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Duplicate
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Intersect
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Alpha 1");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('With'), ref2);
    executeAction(cTID('Intr'), desc1, dialogMode);
  };

  // Select
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Alpha 1");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Delete
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
  };

  // Duplicate
  function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Highlights 2");
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  step1();      // Set
  step2();      // Duplicate
  step3();      // Intersect
  step4();      // Select
  step5();      // Delete
  step6();      // Duplicate
};



//
//==================== Highlights 3 ==============
//
Highlights3 = function() {
  // Set
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Chnl'), cTID('Chnl'), sTID("RGB"));
    desc1.putReference(cTID('T   '), ref2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Duplicate
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Intersect
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Alpha 1");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('With'), ref2);
    executeAction(cTID('Intr'), desc1, dialogMode);
  };

  // Select
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Alpha 1");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Delete
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
  };

  // Duplicate
  function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Highlights 2");
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Intersect
  function step7(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 2");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('With'), ref2);
    executeAction(cTID('Intr'), desc1, dialogMode);
  };

  // Select
  function step8(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 2");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Delete
  function step9(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
  };

  // Duplicate
  function step10(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Highlights 3");
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  step1();      // Set
  step2();      // Duplicate
  step3();      // Intersect
  step4();      // Select
  step5();      // Delete
  step6();      // Duplicate
  step7();      // Intersect
  step8();      // Select
  step9();      // Delete
  step10();      // Duplicate
};



//
//==================== Highlights 4 ==============
//
Highlights4 = function() {
  // Set
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Chnl'), cTID('Chnl'), sTID("RGB"));
    desc1.putReference(cTID('T   '), ref2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Duplicate
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Intersect
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Alpha 1");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('With'), ref2);
    executeAction(cTID('Intr'), desc1, dialogMode);
  };

  // Select
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Alpha 1");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Delete
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
  };

  // Duplicate
  function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Highlights 2");
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Intersect
  function step7(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 2");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('With'), ref2);
    executeAction(cTID('Intr'), desc1, dialogMode);
  };

  // Select
  function step8(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 2");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Delete
  function step9(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
  };

  // Duplicate
  function step10(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Highlights 3");
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Intersect
  function step11(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 3");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('With'), ref2);
    executeAction(cTID('Intr'), desc1, dialogMode);
  };

  // Select
  function step12(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 3");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Delete
  function step13(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
  };

  // Duplicate
  function step14(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Highlights 4");
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  step1();      // Set
  step2();      // Duplicate
  step3();      // Intersect
  step4();      // Select
  step5();      // Delete
  step6();      // Duplicate
  step7();      // Intersect
  step8();      // Select
  step9();      // Delete
  step10();      // Duplicate
  step11();      // Intersect
  step12();      // Select
  step13();      // Delete
  step14();      // Duplicate
};



//
//==================== Highlights 5 ==============
//
Highlights5 = function() {
  // Set
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Chnl'), cTID('Chnl'), sTID("RGB"));
    desc1.putReference(cTID('T   '), ref2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Duplicate
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Intersect
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Alpha 1");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('With'), ref2);
    executeAction(cTID('Intr'), desc1, dialogMode);
  };

  // Select
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Alpha 1");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Delete
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
  };

  // Duplicate
  function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Highlights 2");
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Intersect
  function step7(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 2");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('With'), ref2);
    executeAction(cTID('Intr'), desc1, dialogMode);
  };

  // Select
  function step8(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 2");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Delete
  function step9(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
  };

  // Duplicate
  function step10(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Highlights 3");
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Intersect
  function step11(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 3");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('With'), ref2);
    executeAction(cTID('Intr'), desc1, dialogMode);
  };

  // Select
  function step12(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 3");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Delete
  function step13(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
  };

  // Duplicate
  function step14(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Highlights 4");
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Intersect
  function step15(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 4");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('With'), ref2);
    executeAction(cTID('Intr'), desc1, dialogMode);
  };

  // Select
  function step16(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 4");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Delete
  function step17(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
  };

  // Duplicate
  function step18(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Highlights 5");
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  step1();      // Set
  step2();      // Duplicate
  step3();      // Intersect
  step4();      // Select
  step5();      // Delete
  step6();      // Duplicate
  step7();      // Intersect
  step8();      // Select
  step9();      // Delete
  step10();      // Duplicate
  step11();      // Intersect
  step12();      // Select
  step13();      // Delete
  step14();      // Duplicate
  step15();      // Intersect
  step16();      // Select
  step17();      // Delete
  step18();      // Duplicate
};



//
//==================== Highlights 6 ==============
//
Highlights6 = function(mode) {
  // Set
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Chnl'), cTID('Chnl'), sTID("RGB"));
    desc1.putReference(cTID('T   '), ref2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Duplicate
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Highlights 1");
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Intersect
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 1");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('With'), ref2);
    executeAction(cTID('Intr'), desc1, dialogMode);
  };

  // Select
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 1");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Delete
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
  };

  // Duplicate
  function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Highlights 2");
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Intersect
  function step7(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 2");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('With'), ref2);
    executeAction(cTID('Intr'), desc1, dialogMode);
  };

  // Select
  function step8(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 2");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Delete
  function step9(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
  };

  // Duplicate
  function step10(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Highlights 3");
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Intersect
  function step11(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 3");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('With'), ref2);
    executeAction(cTID('Intr'), desc1, dialogMode);
  };

  // Select
  function step12(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 3");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Delete
  function step13(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
  };

  // Duplicate
  function step14(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Highlights 4");
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Intersect
  function step15(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 4");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('With'), ref2);
    executeAction(cTID('Intr'), desc1, dialogMode);
  };

  // Select
  function step16(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 4");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Delete
  function step17(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
  };

  // Duplicate
  function step18(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Highlights 5");
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Intersect
  function step19(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 5");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('With'), ref2);
    executeAction(cTID('Intr'), desc1, dialogMode);
  };

  // Select
  function step20(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 5");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Delete
  function step21(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
  };

  // Duplicate
  function step22(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Highlights 6");
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };
  
  // Select RGB Channel
  function step23(enabled, withDialog) {
		if (enabled != undefined && !enabled)
			return;
		var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
		var desc1 = new ActionDescriptor();
		var ref1 = new ActionReference();
		ref1.putEnumerated(cTID('Chnl'), cTID('Chnl'), sTID("RGB"));
		desc1.putReference(cTID('null'), ref1);
		executeAction(cTID('slct'), desc1, dialogMode);
	};

  step1();      // Set
  step2();      // Duplicate
  step3();      // Intersect
  step4();      // Select
  //step5();      // Delete
  if (mode != 'all') { step5(); } // Delete
  step6();      // Duplicate
  step7();      // Intersect
  step8();      // Select
  //step9();      // Delete
  if (mode != 'all') { step9(); } // Delete
  step10();      // Duplicate
  step11();      // Intersect
  step12();      // Select
  //step13();      // Delete
  if (mode != 'all') { step13(); } // Delete
  step14();      // Duplicate
  step15();      // Intersect
  step16();      // Select
  //step17();      // Delete
  if (mode != 'all') { step17(); } // Delete
  step18();      // Duplicate
  step19();      // Intersect
  step20();      // Select
  //step21();      // Delete
  if (mode != 'all') { step21(); } // Delete
  step22();      // Duplicate
  if (mode == 'all') { step23(); } // Select RGB Channel
};




//
//==================== All Highlights (Expanded) ==============
//
lumAllHighlights = function() {
	Highlights6('all');
}



//
//==================== Highlights 7 ==============
//
Highlights7 = function(mode) {
	
  // Set
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putEnumerated(cTID('Chnl'), cTID('Chnl'), sTID("RGB"));
    desc1.putReference(cTID('T   '), ref2);
    executeAction(cTID('setd'), desc1, dialogMode);
  };

  // Duplicate
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Highlights 1"); /*delete this*/
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Intersect
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 1"); /* rename Alpha 1 */
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('With'), ref2);
    executeAction(cTID('Intr'), desc1, dialogMode);
  };

  // Select
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 1"); /* rename Alpha 1 */
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Delete
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
  };

  // Duplicate
  function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Highlights 2");
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Intersect
  function step7(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 2");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('With'), ref2);
    executeAction(cTID('Intr'), desc1, dialogMode);
  };

  // Select
  function step8(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 2");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Delete
  function step9(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
  };

  // Duplicate
  function step10(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Highlights 3");
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Intersect
  function step11(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 3");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('With'), ref2);
    executeAction(cTID('Intr'), desc1, dialogMode);
  };

  // Select
  function step12(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 3");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Delete
  function step13(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
  };

  // Duplicate
  function step14(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Highlights 4");
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Intersect
  function step15(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 4");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('With'), ref2);
    executeAction(cTID('Intr'), desc1, dialogMode);
  };

  // Select
  function step16(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 4");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Delete
  function step17(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
  };

  // Duplicate
  function step18(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Highlights 5");
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Intersect
  function step19(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 5");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('With'), ref2);
    executeAction(cTID('Intr'), desc1, dialogMode);
  };

  // Select
  function step20(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 5");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Delete
  function step21(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
  };

  // Duplicate
  function step22(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Highlights 6");
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };

  // Intersect
  function step23(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 6");
    desc1.putReference(cTID('null'), ref1);
    var ref2 = new ActionReference();
    ref2.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('With'), ref2);
    executeAction(cTID('Intr'), desc1, dialogMode);
  };

  // Select
  function step24(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 6");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('slct'), desc1, dialogMode);
  };

  // Delete
  function step25(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
  };

  // Duplicate
  function step26(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(cTID('Chnl'), sTID("selection"));
    desc1.putReference(cTID('null'), ref1);
    desc1.putString(cTID('Nm  '), "Highlights 7");
    executeAction(cTID('Dplc'), desc1, dialogMode);
  };
  
  // Select RGB Channel
  function step27(enabled, withDialog) {
		if (enabled != undefined && !enabled)
			return;
		var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
		var desc1 = new ActionDescriptor();
		var ref1 = new ActionReference();
		ref1.putEnumerated(cTID('Chnl'), cTID('Chnl'), sTID("RGB"));
		desc1.putReference(cTID('null'), ref1);
		executeAction(cTID('slct'), desc1, dialogMode);
	};

  step1();      // Set
  step2();      // Duplicate
  step3();      // Intersect
  step4();      // Select
  
  if (mode != 'all') {
  	step5();      // Delete
  }
  
  step6();      // Duplicate
  step7();      // Intersect
  step8();      // Select

  if (mode != 'all') {
  	step9();      // Delete
  }
  
  step10();      // Duplicate
  step11();      // Intersect
  step12();      // Select

  if (mode != 'all') {
  	step13();      // Delete
  }

  step14();      // Duplicate
  step15();      // Intersect
  step16();      // Select

  if (mode != 'all') {
  	step17();      // Delete
  }

  step18();      // Duplicate
  step19();      // Intersect
  step20();      // Select

  if (mode != 'all') {
  	step21();      // Delete
  }

  step22();      // Duplicate
  step23();      // Intersect
  step24();      // Select

  if (mode != 'all') {
  	step25();      // Delete
  }

  step26();      // Duplicate
  
  if (mode == 'all') {
	step27(); 	// Select RGB Channel

  }
};



//
//==================== Delete Highlights ==============
//
lumDeleteHighlights = function() {

	function checkForChannelName (theName) {  
		if (app.documents.length > 0) {  
			var ref = new ActionReference();  
			ref.putProperty(stringIDToTypeID("property"), stringIDToTypeID("numberOfChannels"));  
			ref.putEnumerated( charIDToTypeID("Dcmn"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") );  
			var docDesc = executeActionGet(ref);  
			var channelsNumber = docDesc.getInteger(stringIDToTypeID("numberOfChannels"));  
			for (var m = 1; m <= channelsNumber; m++) {  
				var ref = new ActionReference();  
				ref.putProperty(stringIDToTypeID("property"), stringIDToTypeID("channelName"));  
				ref.putIndex( charIDToTypeID("Chnl"), m);  
				var channelDesc = executeActionGet(ref);  
				var thisName = channelDesc.getString(stringIDToTypeID("channelName"));  
				if (theName == thisName) {return true}  
			};  
			return false  
		}  
	};  

  // Delete
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = DialogModes.NO;
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 1");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
  };

  // Delete
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = DialogModes.NO;
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 2");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
  };

  // Delete
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = DialogModes.NO;
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 3");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
  };

  // Delete
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = DialogModes.NO;
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 4");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
  };

  // Delete
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = DialogModes.NO;
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 5");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
  };

  // Delete
  function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = DialogModes.NO;
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 6");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
  };

  // Delete
  function step7(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = DialogModes.NO;
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putName(cTID('Chnl'), "Highlights 7");
    desc1.putReference(cTID('null'), ref1);
    executeAction(cTID('Dlt '), desc1, dialogMode);
  };

  /*
  step1();      // Delete
  step2();      // Delete
  step3();      // Delete
  step4();      // Delete
  step5();      // Delete
  step6();      // Delete
  step7();      // Delete
  */
  
  if (checkForChannelName("Highlights 1") == true) { step1(); };
  if (checkForChannelName("Highlights 2") == true) { step2(); };
  if (checkForChannelName("Highlights 3") == true) { step3(); };
  if (checkForChannelName("Highlights 4") == true) { step4(); };
  if (checkForChannelName("Highlights 5") == true) { step5(); };
  if (checkForChannelName("Highlights 6") == true) { step6(); };
  if (checkForChannelName("Highlights 7") == true) { step7(); };  
};