/* dev-code */
//! Variables 
cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };
/* end-dev-code */



//! Invoke a custom action
customAction = function(number) {
	app.activeDocument.suspendHistory("Custom Action "+number, "customAction_hidden("+number+");" );
};
customAction_hidden = function(number) {
	
	//! Name of custom action set
	var actionSet = 'TFP Custom';
	
	//! If action exists, do it, otherwise explain how.
	if (hasAction('Custom '+number, actionSet)) {
		app.doAction('Custom '+number, actionSet);
	} else {
		alert('Set Up Your Own Custom Action \r\nMake a new action set called, "'+actionSet+'". \r\n\r\nInside this set, record your own action named, "Custom '+number+'". \r\n\r\n(You can also change the name of the custom buttons by holding SHIFT and clicking on them.)');
	}
};



//! Rename custom buttons
renameButton = function(id) {
	
	//! Default name
	var buttonName = "Custom " + id;
	
	//! Build the box
	var box = new Window('dialog', "Custom Button " + id);  
	box.textInput = box.add('edittext', undefined, buttonName, {characters:22}); 
	box.panel2 = box.add('panel', undefined, "");  
	box.panel2.group = box.panel2.add('group', undefined );  
	box.panel2.group.orientation='row'; 
	box.panel2.group.closeBtn = box.panel2.group.add('button',undefined, "Cancel", {name:'close'});  
	box.panel2.group.saveBtn = box.panel2.group.add('button',undefined, "Save", {name:'save'});
	
	//! Close box without saving
	box.panel2.group.closeBtn.onClick = function(){  
	  box.close();  
	}  
	
	//! Save button
	box.panel2.group.saveBtn.onClick = function(){  
	  //alert('save info for button ' + id + box.textInput.text);
	  saveButtonName(id, box.textInput.text);	  
	  box.close();
	}  
	
	//! Show the box
	box.show(); 	
};



//! Save button name
saveButtonName = function(id, name) {
	
	var buttonDetails = [id,name];
	
	try {
	    var xLib = new ExternalObject("lib:\PlugPlugExternalObject");
	} catch (e) {
	    alert(e);
	}
	 
	if (xLib) {
	    var eventObj = new CSXSEvent(); 
	    eventObj.type = "dialogEvent";
	    eventObj.data = buttonDetails;
	    eventObj.dispatch();
	}
};






hasAction = function(atn, atnSet) {  
  function cTID(s) { return app.charIDToTypeID(s); };  
  var asetDesc;  
  var rc = false;  
  var i = 1;  
  var asMatches = [];  
  while (true) {  
    var ref = new ActionReference();  
    ref.putIndex(cTID("ASet"), i);  
    var desc;  
    try {  
      desc = executeActionGet(ref);  
    } catch (e) {  
      break;    // all done  
    }  
    if (desc.hasKey(cTID("Nm  ")) &&  
        desc.getString(cTID("Nm  ")) == atnSet) {  
      asetDesc = desc;  
      asMatches.push({ index: i, desc: desc});  
      //break;  
    }  
    i++;  
  }  
  if (asMatches.length == 0) {  
    return false;  
  }  
  for (var i = 0; i < asMatches.length; i++) {  
    var asmatch = asMatches[i];  
    var asetIndex = asmatch.index;  
    asetDesc = asmatch.desc;  
    if (!asetDesc.hasKey(cTID("NmbC"))) {  
      continue;  
    }  
    var max = asetDesc.getInteger(cTID("NmbC"));  
    for (var j = 1; j <= max; j++) {  
      var ref = new ActionReference();  
      ref.putIndex(cTID("Actn"), j);           // Action index  
      ref.putIndex(cTID("ASet"), asetIndex);   // ActionSet index  
      var desc;  
      try {  
        desc = executeActionGet(ref);  
      } catch (e) {  
        break;   // all done  
      }  
      if (desc.hasKey(cTID("Nm  ")) &&  
          desc.getString(cTID("Nm  ")) == atn) {  
        return true;  
      }  
    }  
  }  
  return rc;  
};