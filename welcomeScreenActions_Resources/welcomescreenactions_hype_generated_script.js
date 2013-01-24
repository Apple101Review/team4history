//	HYPE.documents["welcomeScreenActions"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "welcomeScreenActions_Resources";
	var documentName = "welcomeScreenActions";
	var documentLoaderFilename = "welcomescreenactions_hype_generated_script.js";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_100 == "undefined") {
		if(typeof window.HYPE_100_DocumentsToLoad == "undefined") {
			window.HYPE_100_DocumentsToLoad = new Array();
			window.HYPE_100_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=100';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_100_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	var hypeDoc = new HYPE_100();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",aS:"i",d:"i",M:"i",e:"f",N:"i",f:"d",aT:"i",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",aW:"f",aI:"i",S:"i",T:"i",l:"d",aX:"i",aJ:"i",m:"c",n:"c",aK:"i",X:"i",aZ:"i",A:"c",Y:"i",aL:"i",B:"c",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};

var scenes = [{timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"2",t:0,d:2.5666666,i:"a",e:102,r:1,s:264,o:"3"},{f:"2",t:0,d:2.5666666,i:"c",e:482,r:1,s:320,o:"3"},{f:"2",t:0,d:2.5666666,i:"d",e:63,r:1,s:42,o:"3"},{f:"2",t:0,d:1.2,i:"b",e:114,r:1,s:60,o:"4"},{f:"2",t:0,d:1.2,i:"c",e:143,r:1,s:172,o:"4"},{f:"2",t:0,d:1.2,i:"d",e:265,r:1,s:319,o:"4"},{f:"2",t:0,d:2.9333334,i:"e",e:"1.000000",r:1,s:"0.000000",o:"5"},{f:"2",t:0,d:6.3666668,i:"e",e:"1.000000",r:1,s:"0.000000",o:"6"},{f:"2",t:0,d:10.666667,i:"a",e:265,r:1,s:237,o:"7"},{f:"2",t:0,d:10.666667,i:"b",e:268,r:1,s:273,o:"7"},{f:"2",t:2.9333334,d:1.4333334,i:"e",e:"0.000000",s:"1.000000",o:"5"},{f:"2",t:4.4333334,d:7.666667,i:"e",e:"0.493635",r:1,s:"0.000000",o:"7"},{f:"2",t:6.3666668,d:1.5999999,i:"e",e:"0.000000",s:"1.000000",o:"6"},{f:"2",t:12.1,d:3.166666,i:"e",e:"1.000000",s:"0.493635",o:"7"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:15.266666}},sceneIndex:0,perspective:"600px",oid:"1",initialValues:{"3":{o:"content-box",h:"cooltext666585342.png",x:"visible",a:264,q:"100% 100%",b:38,j:"absolute",r:"inline",c:320,k:"div",z:"1",d:42},"8":{c:598,d:398,I:"Solid",e:"0.000000",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",aP:"pointer",M:1,N:1,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",k:"div",aA:{type:5,goToURL:"index2.html",openInNewWindow:false},C:"#A0A0A0",z:"6",O:1,D:"#A0A0A0",P:1,a:0,b:0},"6":{o:"content-box",h:"cooltext666586247.png",x:"visible",a:246,q:"100% 100%",b:228,j:"absolute",r:"inline",c:290,k:"div",z:"4",d:90,e:"0.000000"},"4":{o:"content-box",h:"team4resize-1.png",x:"visible",a:43,q:"100% 100%",b:60,j:"absolute",r:"inline",c:172,k:"div",z:"2",d:319},"7":{o:"content-box",h:"cooltext666586400.png",x:"visible",a:237,q:"100% 100%",b:273,j:"absolute",r:"inline",aA:{type:5,goToURL:"index2.html",openInNewWindow:false},k:"div",z:"5",d:50,c:319,aP:"pointer",e:"0.000000"},"5":{o:"content-box",h:"vision-1.gif",x:"visible",a:224,q:"100% 100%",b:114,j:"absolute",r:"inline",c:345,k:"div",z:"3",d:270,e:"0.000000"}},backgroundColor:"#000000",name:"Untitled Scene"}];


	
	var javascripts = [];


	
	var Custom = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("Custom." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			Custom[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.Custom = Custom;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID("welcomescreenactions_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

