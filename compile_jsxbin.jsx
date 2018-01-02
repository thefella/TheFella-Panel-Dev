//////////////////////////////////////////////////////////////  
// For compiling jsxbin from an InDesign Script             //  
// You MUST have the ESTK CLOSED!!! (always good advise ;-) //  
// You must run the script from InDesign                    //  
// By Trevor http://creative-scripts.com                    //  
// For Mac and Windows                                      //  
//////////////////////////////////////////////////////////////  
  
// change to address of your favorite scripts  
compileJSX('~/Documents/Adobe%20Scripts/Scripts%20Panel/Forum%20Scripts/targetEngineTest.jsx');  
  
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

/*#target estoolkit#dbg  function compileBinary()  {      //var batchFolder = new Folder("/Volumes/Macintosh HD/Users/will.dowling/automatic_binary_conversion/convert_to_binary");      //var destFolder = new Folder("/Volumes/Macintosh HD/Users/will.dowling/automatic_binary_conversion/binary_converted");      var batchFolder = new Folder("/Volumes/Macintosh\ HD/Users/thefella/Desktop/JSXBIN");    var destFolder = new Folder("/Volumes/Macintosh\ HD/Users/thefella/Desktop/JSXBIN/compiled");      var files = batchFolder.getFiles();      var compFiles;      var contents,compiledString,outFile;        var pat = /\s/g;      var devPat = /_Dev\.js[x]?/;        function compileAndWrite(file)      {          file.open("r");          contents = file.read();          file.close();            compiledString = app.compile(contents);          compiledString = compiledString.replace(pat,"");          compiledString = "eval(\"" + compiledString + "\")";            if(devPat.test(file.name))          {              outFile = new File(destFolder + "/" + file.name.replace(devPat,".jsx"))          }          else          {              outFile = new File(destFolder + "/" + file.name.replace(/\.js/,".jsxbin") );          }            outFile.open("w");          outFile.write(compiledString);          outFile.close();      }        for(var x=0,len=files.length;x<len;x++)      {          compileAndWrite(files[x]);        }  }; compileBinary(); 
*/