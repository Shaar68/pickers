var defaults = {}
var factoryDefaults = {}
	factoryDefaults.font = 'Noto Sans Gujarati WF' // text area font name (a single font, no quotes)
	factoryDefaults.size = "40";  // text area font size, number of pixels (just the number)
	factoryDefaults.rows = "2.2"; // number representing number of times 100px for height of text area
	factoryDefaults.lineheight = "1.8"; // number representing line height of text area in pixels/100
	factoryDefaults.language = 'gu' // language to use for examples
	factoryDefaults.uifont = 'Noto Sans Gujarati WF'; // font name  for selection area (a single font, no quotes)
	factoryDefaults.uisize = "28";  // selection area font size, number of pixels (just the number)
	factoryDefaults.ccbase = "\u25CC";  // default base for combining characters
	factoryDefaults.uidir = "ltr" // indicates the base direction for the selection area
	factoryDefaults.contrast = "low" // contrast for UI text colours


var thisPicker = 'gujaratiPicker'

// reinstate this later
//if (localStorage.pickersStore && localStorage[thisPicker]) defaults = JSON.parse(localStorage[thisPicker]) 
//else  defaults = factoryDefaults

 defaults = factoryDefaults
 
 
var template = {}
	template.title = 'Gujarati character picker'
	template.sample = "અનુચ્છેદ ૧: પ્રતિષ્ઠા અને અધિકારોની દૃષ્ટિએ સર્વ માનવો જન્મથી સ્વતંત્ર અને સમાન હોય છે. તેમનામાં વિચારશક્તિ અને અંતઃકરણ હોય છે અને તેમણે પરસ્પર બંધુત્વની ભાવનાથી વર્તવું જોઇએ."
	template.blocklocation= 'gujarati'  // blocklocation to use for examples
	template.direction = "ltr" // indicates whether this is a picker for a RTL script


var inputAids = [
{"title":"Hinting", "dataVar":"showShapeHints", "dataLocn":"", "dataShortTitle":"H"},
{"title":"Latin characters", "dataVar":"showLatinTrans", "dataLocn":"latintranscript", "dataShortTitle":"L"}
]
