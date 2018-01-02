 compileJSX('/Volumes/Macintosh HD/Users/thefella/Desktop/JSXBIN/blending.jsx');  
  
function compileJSX(jsxFile) {  
    var compileScript, tempFile, isMac, script;  
    isMac = +($.os[0] === 'M');  
    compileScript = [  
        "#target estoolkit#dbg",  
        "var jsxFile, jsxBinFile, jsxScript, jsxbinString;",  
        "var targetReg, targetEngineReg, wrapper, target, targetEngine;",  
        "targetReg = /#target [^\\r\\n]+/;",  
        "targetEngineReg = /#targetengine [^\\r\\n]+/;",  
        "jsxFile = new File('__FILE__');",  
        "jsxBinFile = new File(jsxFile.absoluteURI + 'bin');",  
        "jsxFile.open('r');",  
        "jsxBinFile.open('w');",  
        "jsxFile.encoding = 'UTF8';",  
        "jsxBinFile.encoding = 'UTF8';",  
        "jsxScript = jsxFile.read();",  
        "jsxbinString = app.compile(jsxScript);",  
        "target = jsxScript.match(targetReg);",  
        "targetEngine = jsxScript.match(targetEngineReg);",  
        "if (target || targetEngine) {",  
        "if (target) {",  
        "wrapper = target + '\\n';",  
        "}",  
        "if (targetEngine) {",  
        "wrapper += targetEngine + '\\n';",  
        "}",  
        "jsxbinString = wrapper + 'app.doScript(\"myScript\");'.replace(/myScript/, jsxbinString.replace(/[\\n\\r]/g, ''));",  
        "}",  
        "jsxBinFile.write(jsxbinString);",  
        "jsxFile.close();",  
        "jsxBinFile.close();",  
        "jsxBinFile.parent.execute();",  
    ].join('\n').replace(/__FILE__/, jsxFile);  
    tempFile = new File(Folder.temp + '/compileJSX_' + (+new Date()) + '.jsx');  
    tempFile.open('w');  
    tempFile.write(compileScript);  
    tempFile.close();  
    script = localize(  
        isMac ?  
        'do shell script "\\"/Applications/Adobe ExtendScript Toolkit CC/ExtendScript Toolkit.app/Contents/MacOS/ExtendScript Toolkit\\" -cmd \\"%1\\""' :  
        'CreateObject("WScript.Shell").Run(\"\"\"C:\\Program Files (x86)\\Adobe\\Adobe ExtendScript Toolkit CC\\ExtendScript Toolkit.exe"" -cmd ""%1\"\"\")',  
        tempFile.fsName  
    );  
    try {  
        app.doScript(script, ScriptLanguage[["VISUAL_BASIC", "APPLESCRIPT_LANGUAGE"][isMac]]);  
        return script;  
    } catch (e){  
        return e + '\n' + script;  
    }  
}  








/*
#target estoolkit#dbg  
jsxToBinary('/Volumes/Macintosh HD/Users/thefella/Desktop/JSXBIN/blending.jsx','/Volumes/Macintosh HD/Users/thefella/Desktop/JSXBIN/blending_binary.jsx');

function jsxToBinary(source,dest) 
{   
	var jsxFile, jsxBinFile, jsxScript, jsxbinString;	
	//jsxFile = new File('/Volumes/Macintosh\ HD/Users/thefella/Desktop/JSXBIN/blending.jsx');  
	jsxFile = new File(source); 
	//jsxBinFile = new File( jsxFile.absoluteURI + 'bin' ) ;  
	jsxBinFile = new File(dest);
	jsxFile.open('r');  
	jsxBinFile.open('w');  
	  
	jsxScript = jsxFile.read();  
	jsxbinString = app.compile(jsxScript);  
	  
	jsxBinFile.write(jsxbinString);  
	  
	jsxFile.close();  
	jsxBinFile.close();  
}
*/