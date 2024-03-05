/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data/data-sources/GoogleDataSource.ts":
/*!***************************************************!*\
  !*** ./src/data/data-sources/GoogleDataSource.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GoogleDataSource = void 0;
const translate_1 = __importDefault(__webpack_require__(/*! translate */ "./node_modules/translate/index.min.js"));
class GoogleDataSource {
    async translate(text, to) {
        const translation = await (0, translate_1.default)(text, to);
        console.log(`Text: ${text}`);
        console.log(`Translation: ${translation}`);
        return translation;
    }
}
exports.GoogleDataSource = GoogleDataSource;


/***/ }),

/***/ "./src/data/repositories/FrenchTranslationRepository.ts":
/*!**************************************************************!*\
  !*** ./src/data/repositories/FrenchTranslationRepository.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FrenchTranslationRepository = void 0;
const Translation_1 = __webpack_require__(/*! ../../domain/entities/Translation */ "./src/domain/entities/Translation.ts");
class FrenchTranslationRepository {
    googleData;
    constructor(googleData) {
        this.googleData = googleData;
    }
    async get(text, target) {
        const translation = await this.googleData.translate(text, target);
        return new Translation_1.Translation(text, translation, target);
    }
}
exports.FrenchTranslationRepository = FrenchTranslationRepository;


/***/ }),

/***/ "./src/domain/entities/Translation.ts":
/*!********************************************!*\
  !*** ./src/domain/entities/Translation.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Translation = void 0;
class Translation {
    text;
    translation;
    target;
    constructor(text, translation, target) {
        this.text = text;
        this.translation = translation;
        this.target = target;
    }
    getSourceText() {
        return this.text;
    }
    getTranslatedText() {
        return this.translation;
    }
    getLanguage() {
        return this.target;
    }
}
exports.Translation = Translation;


/***/ }),

/***/ "./src/domain/use-cases/GetFrenchTranslationUseCase.ts":
/*!*************************************************************!*\
  !*** ./src/domain/use-cases/GetFrenchTranslationUseCase.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetFrenchTranslationUseCase = void 0;
class GetFrenchTranslationUseCase {
    translations;
    constructor(translationRepository) {
        this.translations = translationRepository;
    }
    async execute(text) {
        return this.translations.get(text, "fr");
    }
}
exports.GetFrenchTranslationUseCase = GetFrenchTranslationUseCase;


/***/ }),

/***/ "./src/presentation/controllers/TranslationController.ts":
/*!***************************************************************!*\
  !*** ./src/presentation/controllers/TranslationController.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TranslationController = void 0;
const GoogleDataSource_1 = __webpack_require__(/*! ../../data/data-sources/GoogleDataSource */ "./src/data/data-sources/GoogleDataSource.ts");
const FrenchTranslationRepository_1 = __webpack_require__(/*! ../../data/repositories/FrenchTranslationRepository */ "./src/data/repositories/FrenchTranslationRepository.ts");
const GetFrenchTranslationUseCase_1 = __webpack_require__(/*! ../../domain/use-cases/GetFrenchTranslationUseCase */ "./src/domain/use-cases/GetFrenchTranslationUseCase.ts");
class TranslationController {
    static async translateIntoFrench(text) {
        const googleData = new GoogleDataSource_1.GoogleDataSource();
        const translations = new FrenchTranslationRepository_1.FrenchTranslationRepository(googleData);
        const translation = await new GetFrenchTranslationUseCase_1.GetFrenchTranslationUseCase(translations).execute(text);
        return translation;
    }
}
exports.TranslationController = TranslationController;


/***/ }),

/***/ "./src/presentation/ui/SalesforceUi.ts":
/*!*********************************************!*\
  !*** ./src/presentation/ui/SalesforceUi.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setTsLibInUi = void 0;
const TranslationController_1 = __webpack_require__(/*! ../controllers/TranslationController */ "./src/presentation/controllers/TranslationController.ts");
const controllers = {
    TranslationController: TranslationController_1.TranslationController
};
function setTsLibInUi() {
    window.tsLib = controllers;
}
exports.setTsLibInUi = setTsLibInUi;


/***/ }),

/***/ "./node_modules/translate/index.min.js":
/*!*********************************************!*\
  !*** ./node_modules/translate/index.min.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ exp)
/* harmony export */ });
var iso={aar:"aa",abk:"ab",afr:"af",aka:"ak",alb:"sq",amh:"am",ara:"ar",arg:"an",arm:"hy",asm:"as",ava:"av",ave:"ae",aym:"ay",aze:"az",bak:"ba",bam:"bm",baq:"eu",bel:"be",ben:"bn",bih:"bh",bis:"bi",bos:"bs",bre:"br",bul:"bg",bur:"my",cat:"ca",cha:"ch",che:"ce",chi:"zh",chu:"cu",chv:"cv",cor:"kw",cos:"co",cre:"cr",cze:"cs",dan:"da",div:"dv",dut:"nl",dzo:"dz",eng:"en",epo:"eo",est:"et",ewe:"ee",fao:"fo",fij:"fj",fin:"fi",fre:"fr",fry:"fy",ful:"ff",geo:"ka",ger:"de",gla:"gd",gle:"ga",glg:"gl",glv:"gv",gre:"el",grn:"gn",guj:"gu",hat:"ht",hau:"ha",heb:"he",her:"hz",hin:"hi",hmo:"ho",hrv:"hr",hun:"hu",ibo:"ig",ice:"is",ido:"io",iii:"ii",iku:"iu",ile:"ie",ina:"ia",ind:"id",ipk:"ik",ita:"it",jav:"jv",jpn:"ja",kal:"kl",kan:"kn",kas:"ks",kau:"kr",kaz:"kk",khm:"km",kik:"ki",kin:"rw",kir:"ky",kom:"kv",kon:"kg",kor:"ko",kua:"kj",kur:"ku",lao:"lo",lat:"la",lav:"lv",lim:"li",lin:"ln",lit:"lt",ltz:"lb",lub:"lu",lug:"lg",mac:"mk",mah:"mh",mal:"ml",mao:"mi",mar:"mr",may:"ms",mlg:"mg",mlt:"mt",mon:"mn",nau:"na",nav:"nv",nbl:"nr",nde:"nd",ndo:"ng",nep:"ne",nno:"nn",nob:"nb",nor:"no",nya:"ny",oci:"oc",oji:"oj",ori:"or",orm:"om",oss:"os",pan:"pa",per:"fa",pli:"pi",pol:"pl",por:"pt",pus:"ps",que:"qu",roh:"rm",rum:"ro",run:"rn",rus:"ru",sag:"sg",san:"sa",sin:"si",slo:"sk",slv:"sl",sme:"se",smo:"sm",sna:"sn",snd:"sd",som:"so",sot:"st",spa:"es",srd:"sc",srp:"sr",ssw:"ss",sun:"su",swa:"sw",swe:"sv",tah:"ty",tam:"ta",tat:"tt",tel:"te",tgk:"tg",tgl:"tl",tha:"th",tib:"bo",tir:"ti",ton:"to",tsn:"tn",tso:"ts",tuk:"tk",tur:"tr",twi:"tw",uig:"ug",ukr:"uk",urd:"ur",uzb:"uz",ven:"ve",vie:"vi",vol:"vo",wel:"cy",wln:"wa",wol:"wo",xho:"xh",yid:"yi",yor:"yo",zha:"za",zul:"zu"},names={afar:"aa",abkhazian:"ab",afrikaans:"af",akan:"ak",albanian:"sq",amharic:"am",arabic:"ar",aragonese:"an",armenian:"hy",assamese:"as",avaric:"av",avestan:"ae",aymara:"ay",azerbaijani:"az",bashkir:"ba",bambara:"bm",basque:"eu",belarusian:"be",bengali:"bn","bihari languages":"bh",bislama:"bi",tibetan:"bo",bosnian:"bs",breton:"br",bulgarian:"bg",burmese:"my",catalan:"ca",valencian:"ca",czech:"cs",chamorro:"ch",chechen:"ce",chinese:"zh","church slavic":"cu","old slavonic":"cu","church slavonic":"cu","old bulgarian":"cu","old church slavonic":"cu",chuvash:"cv",cornish:"kw",corsican:"co",cree:"cr",welsh:"cy",danish:"da",german:"de",divehi:"dv",dhivehi:"dv",maldivian:"dv",dutch:"nl",flemish:"nl",dzongkha:"dz",greek:"el",english:"en",esperanto:"eo",estonian:"et",ewe:"ee",faroese:"fo",persian:"fa",fijian:"fj",finnish:"fi",french:"fr","western frisian":"fy",fulah:"ff",georgian:"ka",gaelic:"gd","scottish gaelic":"gd",irish:"ga",galician:"gl",manx:"gv",guarani:"gn",gujarati:"gu",haitian:"ht","haitian creole":"ht",hausa:"ha",hebrew:"he",herero:"hz",hindi:"hi","hiri motu":"ho",croatian:"hr",hungarian:"hu",igbo:"ig",icelandic:"is",ido:"io","sichuan yi":"ii",nuosu:"ii",inuktitut:"iu",interlingue:"ie",occidental:"ie",interlingua:"ia",indonesian:"id",inupiaq:"ik",italian:"it",javanese:"jv",japanese:"ja",kalaallisut:"kl",greenlandic:"kl",kannada:"kn",kashmiri:"ks",kanuri:"kr",kazakh:"kk","central khmer":"km",kikuyu:"ki",gikuyu:"ki",kinyarwanda:"rw",kirghiz:"ky",kyrgyz:"ky",komi:"kv",kongo:"kg",korean:"ko",kuanyama:"kj",kwanyama:"kj",kurdish:"ku",lao:"lo",latin:"la",latvian:"lv",limburgan:"li",limburger:"li",limburgish:"li",lingala:"ln",lithuanian:"lt",luxembourgish:"lb",letzeburgesch:"lb","luba-katanga":"lu",ganda:"lg",macedonian:"mk",marshallese:"mh",malayalam:"ml",maori:"mi",marathi:"mr",malay:"ms",malagasy:"mg",maltese:"mt",mongolian:"mn",nauru:"na",navajo:"nv",navaho:"nv","ndebele, south":"nr","south ndebele":"nr","ndebele, north":"nd","north ndebele":"nd",ndonga:"ng",nepali:"ne","norwegian nynorsk":"nn","nynorsk, norwegian":"nn","norwegian bokmål":"nb","bokmål, norwegian":"nb",norwegian:"no",chichewa:"ny",chewa:"ny",nyanja:"ny",occitan:"oc",ojibwa:"oj",oriya:"or",oromo:"om",ossetian:"os",ossetic:"os",panjabi:"pa",punjabi:"pa",pali:"pi",polish:"pl",portuguese:"pt",pushto:"ps",pashto:"ps",quechua:"qu",romansh:"rm",romanian:"ro",moldavian:"ro",moldovan:"ro",rundi:"rn",russian:"ru",sango:"sg",sanskrit:"sa",sinhala:"si",sinhalese:"si",slovak:"sk",slovenian:"sl","northern sami":"se",samoan:"sm",shona:"sn",sindhi:"sd",somali:"so","sotho, southern":"st",spanish:"es",castilian:"es",sardinian:"sc",serbian:"sr",swati:"ss",sundanese:"su",swahili:"sw",swedish:"sv",tahitian:"ty",tamil:"ta",tatar:"tt",telugu:"te",tajik:"tg",tagalog:"tl",thai:"th",tigrinya:"ti",tonga:"to",tswana:"tn",tsonga:"ts",turkmen:"tk",turkish:"tr",twi:"tw",uighur:"ug",uyghur:"ug",ukrainian:"uk",urdu:"ur",uzbek:"uz",venda:"ve",vietnamese:"vi","volapük":"vo",walloon:"wa",wolof:"wo",xhosa:"xh",yiddish:"yi",yoruba:"yo",zhuang:"za",chuang:"za",zulu:"zu"};const isoKeys=Object.values(iso).sort();var languages=e=>{if("string"!=typeof e)throw new Error('The "language" must be a string, received '+typeof e);if(e.length>100)throw new Error(`The "language" is too long at ${e.length} characters`);if(e=e.toLowerCase(),e=names[e]||iso[e]||e,!isoKeys.includes(e))throw new Error(`The language "${e}" is not part of the ISO 639-1`);return e};function Cache(){var e=Object.create(null);function a(a){delete e[a]}this.set=function(n,i,r){if(void 0!==r&&("number"!=typeof r||isNaN(r)||r<=0))throw new Error("Cache timeout must be a positive number");var t=e[n];t&&clearTimeout(t.timeout);var o={value:i,expire:r+Date.now()};return isNaN(o.expire)||(o.timeout=setTimeout((()=>a(n)),r)),e[n]=o,i},this.del=function(n){var i=!0,r=e[n];return r?(clearTimeout(r.timeout),!isNaN(r.expire)&&r.expire<Date.now()&&(i=!1)):i=!1,i&&a(n),i},this.clear=function(){for(var a in e)clearTimeout(e[a].timeout);e=Object.create(null)},this.get=function(a){var n=e[a];if(void 0!==n){if(isNaN(n.expire)||n.expire>=Date.now())return n.value;delete e[a]}return null}}const exp$1=new Cache;exp$1.Cache=Cache;const base="https://translate.googleapis.com/translate_a/single";var google={fetch:({key:e,from:a,to:n,text:i})=>[`${base}?client=gtx&sl=${a}&tl=${n}&dt=t&q=${encodeURI(i)}`],parse:e=>e.json().then((e=>{if(!(e=e&&e[0]&&e[0][0]&&e[0].map((e=>e[0])).join("")))throw new Error("Translation not found");return e}))},yandex={needkey:!0,fetch:({key:e,from:a,to:n,text:i})=>[`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${e}&lang=${a}-${n}&text=${encodeURIComponent(i)}`,{method:"POST",body:""}],parse:e=>e.json().then((e=>{if(200!==e.code)throw new Error(e.message);return e.text[0]}))};const libreUrl="https://libretranslate.com/translate";var libre={needkey:!1,fetch:({url:e=libreUrl,key:a,from:n,to:i,text:r})=>[e,{method:"POST",body:JSON.stringify({q:r,source:n,target:i,api_key:a}),headers:{"Content-Type":"application/json"}}],parse:e=>e.json().then((e=>{if(!e)throw new Error("No response found");if(e.error)throw new Error(e.error);if(!e.translatedText)throw new Error("No response found");return e.translatedText}))},deepl={needkey:!0,fetch:({key:e,from:a,to:n,text:i})=>[`https://api${/:fx$/.test(e)?"-free":""}.deepl.com/v2/translate?auth_key=${e}&source_lang=${a}&target_lang=${n}&text=${i=encodeURIComponent(i)}`,{method:"POST",body:""}],parse:async e=>{if(!e.ok){if(403===e.status)throw new Error("Auth Error, please review the key for DeepL");throw new Error(`Error ${e.status}`)}return e.json().then((e=>e.translations[0].text))}},engines={google:google,yandex:yandex,libre:libre,deepl:deepl};const Translate=function(e={}){if(!(this instanceof Translate))return new Translate(e);const a={from:"en",to:"en",cache:void 0,languages:languages,engines:engines,engine:"google",keys:{}},n=async(e,a={})=>{"string"==typeof a&&(a={to:a}),a.text=e,a.from=languages(a.from||n.from),a.to=languages(a.to||n.to),a.cache=a.cache||n.cache,a.engines=a.engines||{},a.engine=a.engine||n.engine,a.url=a.url||n.url,a.id=a.id||`${a.url}:${a.from}:${a.to}:${a.engine}:${a.text}`,a.keys=a.keys||n.keys||{};for(let e in n.keys)a.keys[e]=a.keys[e]||n.keys[e];a.key=a.key||n.key||a.keys[a.engine];const i=a.engines[a.engine]||n.engines[a.engine],r=exp$1.get(a.id);if(r)return Promise.resolve(r);if(a.to===a.from)return Promise.resolve(a.text);if(i.needkey&&!a.key)throw new Error(`The engine "${a.engine}" needs a key, please provide it`);const t=i.fetch(a);return fetch(...t).then(i.parse).then((e=>exp$1.set(a.id,e,a.cache)))};for(let i in a)n[i]=void 0===e[i]?a[i]:e[i];return n},exp=new Translate;exp.Translate=Translate;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const SalesforceUi_1 = __webpack_require__(/*! ./presentation/ui/SalesforceUi */ "./src/presentation/ui/SalesforceUi.ts");
(function () {
    (0, SalesforceUi_1.setTsLibInUi)();
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sNEJBQTRCLG1EQUFtRCxxQ0FBcUMsbUVBQW1FLCtCQUErQixnREFBZ0Qsb0RBQW9ELFNBQVMsbUNBQW1DLG1CQUFtQix1RUFBdUUsNENBQTRDLFNBQVMsbUJBQW1COzs7Ozs7VUNBcnBRO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7OztBQ05hO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHVCQUF1QixtQkFBTyxDQUFDLDZFQUFnQztBQUMvRDtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RzLXNkay8uL3NyYy9kYXRhL2RhdGEtc291cmNlcy9Hb29nbGVEYXRhU291cmNlLnRzIiwid2VicGFjazovL3RzLXNkay8uL3NyYy9kYXRhL3JlcG9zaXRvcmllcy9GcmVuY2hUcmFuc2xhdGlvblJlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vdHMtc2RrLy4vc3JjL2RvbWFpbi9lbnRpdGllcy9UcmFuc2xhdGlvbi50cyIsIndlYnBhY2s6Ly90cy1zZGsvLi9zcmMvZG9tYWluL3VzZS1jYXNlcy9HZXRGcmVuY2hUcmFuc2xhdGlvblVzZUNhc2UudHMiLCJ3ZWJwYWNrOi8vdHMtc2RrLy4vc3JjL3ByZXNlbnRhdGlvbi9jb250cm9sbGVycy9UcmFuc2xhdGlvbkNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vdHMtc2RrLy4vc3JjL3ByZXNlbnRhdGlvbi91aS9TYWxlc2ZvcmNlVWkudHMiLCJ3ZWJwYWNrOi8vdHMtc2RrLy4vbm9kZV9tb2R1bGVzL3RyYW5zbGF0ZS9pbmRleC5taW4uanMiLCJ3ZWJwYWNrOi8vdHMtc2RrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RzLXNkay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHMtc2RrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHMtc2RrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHMtc2RrLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Hb29nbGVEYXRhU291cmNlID0gdm9pZCAwO1xuY29uc3QgdHJhbnNsYXRlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInRyYW5zbGF0ZVwiKSk7XG5jbGFzcyBHb29nbGVEYXRhU291cmNlIHtcbiAgICBhc3luYyB0cmFuc2xhdGUodGV4dCwgdG8pIHtcbiAgICAgICAgY29uc3QgdHJhbnNsYXRpb24gPSBhd2FpdCAoMCwgdHJhbnNsYXRlXzEuZGVmYXVsdCkodGV4dCwgdG8pO1xuICAgICAgICBjb25zb2xlLmxvZyhgVGV4dDogJHt0ZXh0fWApO1xuICAgICAgICBjb25zb2xlLmxvZyhgVHJhbnNsYXRpb246ICR7dHJhbnNsYXRpb259YCk7XG4gICAgICAgIHJldHVybiB0cmFuc2xhdGlvbjtcbiAgICB9XG59XG5leHBvcnRzLkdvb2dsZURhdGFTb3VyY2UgPSBHb29nbGVEYXRhU291cmNlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkZyZW5jaFRyYW5zbGF0aW9uUmVwb3NpdG9yeSA9IHZvaWQgMDtcbmNvbnN0IFRyYW5zbGF0aW9uXzEgPSByZXF1aXJlKFwiLi4vLi4vZG9tYWluL2VudGl0aWVzL1RyYW5zbGF0aW9uXCIpO1xuY2xhc3MgRnJlbmNoVHJhbnNsYXRpb25SZXBvc2l0b3J5IHtcbiAgICBnb29nbGVEYXRhO1xuICAgIGNvbnN0cnVjdG9yKGdvb2dsZURhdGEpIHtcbiAgICAgICAgdGhpcy5nb29nbGVEYXRhID0gZ29vZ2xlRGF0YTtcbiAgICB9XG4gICAgYXN5bmMgZ2V0KHRleHQsIHRhcmdldCkge1xuICAgICAgICBjb25zdCB0cmFuc2xhdGlvbiA9IGF3YWl0IHRoaXMuZ29vZ2xlRGF0YS50cmFuc2xhdGUodGV4dCwgdGFyZ2V0KTtcbiAgICAgICAgcmV0dXJuIG5ldyBUcmFuc2xhdGlvbl8xLlRyYW5zbGF0aW9uKHRleHQsIHRyYW5zbGF0aW9uLCB0YXJnZXQpO1xuICAgIH1cbn1cbmV4cG9ydHMuRnJlbmNoVHJhbnNsYXRpb25SZXBvc2l0b3J5ID0gRnJlbmNoVHJhbnNsYXRpb25SZXBvc2l0b3J5O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlRyYW5zbGF0aW9uID0gdm9pZCAwO1xuY2xhc3MgVHJhbnNsYXRpb24ge1xuICAgIHRleHQ7XG4gICAgdHJhbnNsYXRpb247XG4gICAgdGFyZ2V0O1xuICAgIGNvbnN0cnVjdG9yKHRleHQsIHRyYW5zbGF0aW9uLCB0YXJnZXQpIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy50cmFuc2xhdGlvbiA9IHRyYW5zbGF0aW9uO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICB9XG4gICAgZ2V0U291cmNlVGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dDtcbiAgICB9XG4gICAgZ2V0VHJhbnNsYXRlZFRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uO1xuICAgIH1cbiAgICBnZXRMYW5ndWFnZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0O1xuICAgIH1cbn1cbmV4cG9ydHMuVHJhbnNsYXRpb24gPSBUcmFuc2xhdGlvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HZXRGcmVuY2hUcmFuc2xhdGlvblVzZUNhc2UgPSB2b2lkIDA7XG5jbGFzcyBHZXRGcmVuY2hUcmFuc2xhdGlvblVzZUNhc2Uge1xuICAgIHRyYW5zbGF0aW9ucztcbiAgICBjb25zdHJ1Y3Rvcih0cmFuc2xhdGlvblJlcG9zaXRvcnkpIHtcbiAgICAgICAgdGhpcy50cmFuc2xhdGlvbnMgPSB0cmFuc2xhdGlvblJlcG9zaXRvcnk7XG4gICAgfVxuICAgIGFzeW5jIGV4ZWN1dGUodGV4dCkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbnMuZ2V0KHRleHQsIFwiZnJcIik7XG4gICAgfVxufVxuZXhwb3J0cy5HZXRGcmVuY2hUcmFuc2xhdGlvblVzZUNhc2UgPSBHZXRGcmVuY2hUcmFuc2xhdGlvblVzZUNhc2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVHJhbnNsYXRpb25Db250cm9sbGVyID0gdm9pZCAwO1xuY29uc3QgR29vZ2xlRGF0YVNvdXJjZV8xID0gcmVxdWlyZShcIi4uLy4uL2RhdGEvZGF0YS1zb3VyY2VzL0dvb2dsZURhdGFTb3VyY2VcIik7XG5jb25zdCBGcmVuY2hUcmFuc2xhdGlvblJlcG9zaXRvcnlfMSA9IHJlcXVpcmUoXCIuLi8uLi9kYXRhL3JlcG9zaXRvcmllcy9GcmVuY2hUcmFuc2xhdGlvblJlcG9zaXRvcnlcIik7XG5jb25zdCBHZXRGcmVuY2hUcmFuc2xhdGlvblVzZUNhc2VfMSA9IHJlcXVpcmUoXCIuLi8uLi9kb21haW4vdXNlLWNhc2VzL0dldEZyZW5jaFRyYW5zbGF0aW9uVXNlQ2FzZVwiKTtcbmNsYXNzIFRyYW5zbGF0aW9uQ29udHJvbGxlciB7XG4gICAgc3RhdGljIGFzeW5jIHRyYW5zbGF0ZUludG9GcmVuY2godGV4dCkge1xuICAgICAgICBjb25zdCBnb29nbGVEYXRhID0gbmV3IEdvb2dsZURhdGFTb3VyY2VfMS5Hb29nbGVEYXRhU291cmNlKCk7XG4gICAgICAgIGNvbnN0IHRyYW5zbGF0aW9ucyA9IG5ldyBGcmVuY2hUcmFuc2xhdGlvblJlcG9zaXRvcnlfMS5GcmVuY2hUcmFuc2xhdGlvblJlcG9zaXRvcnkoZ29vZ2xlRGF0YSk7XG4gICAgICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gYXdhaXQgbmV3IEdldEZyZW5jaFRyYW5zbGF0aW9uVXNlQ2FzZV8xLkdldEZyZW5jaFRyYW5zbGF0aW9uVXNlQ2FzZSh0cmFuc2xhdGlvbnMpLmV4ZWN1dGUodGV4dCk7XG4gICAgICAgIHJldHVybiB0cmFuc2xhdGlvbjtcbiAgICB9XG59XG5leHBvcnRzLlRyYW5zbGF0aW9uQ29udHJvbGxlciA9IFRyYW5zbGF0aW9uQ29udHJvbGxlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zZXRUc0xpYkluVWkgPSB2b2lkIDA7XG5jb25zdCBUcmFuc2xhdGlvbkNvbnRyb2xsZXJfMSA9IHJlcXVpcmUoXCIuLi9jb250cm9sbGVycy9UcmFuc2xhdGlvbkNvbnRyb2xsZXJcIik7XG5jb25zdCBjb250cm9sbGVycyA9IHtcbiAgICBUcmFuc2xhdGlvbkNvbnRyb2xsZXI6IFRyYW5zbGF0aW9uQ29udHJvbGxlcl8xLlRyYW5zbGF0aW9uQ29udHJvbGxlclxufTtcbmZ1bmN0aW9uIHNldFRzTGliSW5VaSgpIHtcbiAgICB3aW5kb3cudHNMaWIgPSBjb250cm9sbGVycztcbn1cbmV4cG9ydHMuc2V0VHNMaWJJblVpID0gc2V0VHNMaWJJblVpO1xuIiwidmFyIGlzbz17YWFyOlwiYWFcIixhYms6XCJhYlwiLGFmcjpcImFmXCIsYWthOlwiYWtcIixhbGI6XCJzcVwiLGFtaDpcImFtXCIsYXJhOlwiYXJcIixhcmc6XCJhblwiLGFybTpcImh5XCIsYXNtOlwiYXNcIixhdmE6XCJhdlwiLGF2ZTpcImFlXCIsYXltOlwiYXlcIixhemU6XCJhelwiLGJhazpcImJhXCIsYmFtOlwiYm1cIixiYXE6XCJldVwiLGJlbDpcImJlXCIsYmVuOlwiYm5cIixiaWg6XCJiaFwiLGJpczpcImJpXCIsYm9zOlwiYnNcIixicmU6XCJiclwiLGJ1bDpcImJnXCIsYnVyOlwibXlcIixjYXQ6XCJjYVwiLGNoYTpcImNoXCIsY2hlOlwiY2VcIixjaGk6XCJ6aFwiLGNodTpcImN1XCIsY2h2OlwiY3ZcIixjb3I6XCJrd1wiLGNvczpcImNvXCIsY3JlOlwiY3JcIixjemU6XCJjc1wiLGRhbjpcImRhXCIsZGl2OlwiZHZcIixkdXQ6XCJubFwiLGR6bzpcImR6XCIsZW5nOlwiZW5cIixlcG86XCJlb1wiLGVzdDpcImV0XCIsZXdlOlwiZWVcIixmYW86XCJmb1wiLGZpajpcImZqXCIsZmluOlwiZmlcIixmcmU6XCJmclwiLGZyeTpcImZ5XCIsZnVsOlwiZmZcIixnZW86XCJrYVwiLGdlcjpcImRlXCIsZ2xhOlwiZ2RcIixnbGU6XCJnYVwiLGdsZzpcImdsXCIsZ2x2OlwiZ3ZcIixncmU6XCJlbFwiLGdybjpcImduXCIsZ3VqOlwiZ3VcIixoYXQ6XCJodFwiLGhhdTpcImhhXCIsaGViOlwiaGVcIixoZXI6XCJoelwiLGhpbjpcImhpXCIsaG1vOlwiaG9cIixocnY6XCJoclwiLGh1bjpcImh1XCIsaWJvOlwiaWdcIixpY2U6XCJpc1wiLGlkbzpcImlvXCIsaWlpOlwiaWlcIixpa3U6XCJpdVwiLGlsZTpcImllXCIsaW5hOlwiaWFcIixpbmQ6XCJpZFwiLGlwazpcImlrXCIsaXRhOlwiaXRcIixqYXY6XCJqdlwiLGpwbjpcImphXCIsa2FsOlwia2xcIixrYW46XCJrblwiLGthczpcImtzXCIsa2F1Olwia3JcIixrYXo6XCJra1wiLGtobTpcImttXCIsa2lrOlwia2lcIixraW46XCJyd1wiLGtpcjpcImt5XCIsa29tOlwia3ZcIixrb246XCJrZ1wiLGtvcjpcImtvXCIsa3VhOlwia2pcIixrdXI6XCJrdVwiLGxhbzpcImxvXCIsbGF0OlwibGFcIixsYXY6XCJsdlwiLGxpbTpcImxpXCIsbGluOlwibG5cIixsaXQ6XCJsdFwiLGx0ejpcImxiXCIsbHViOlwibHVcIixsdWc6XCJsZ1wiLG1hYzpcIm1rXCIsbWFoOlwibWhcIixtYWw6XCJtbFwiLG1hbzpcIm1pXCIsbWFyOlwibXJcIixtYXk6XCJtc1wiLG1sZzpcIm1nXCIsbWx0OlwibXRcIixtb246XCJtblwiLG5hdTpcIm5hXCIsbmF2OlwibnZcIixuYmw6XCJuclwiLG5kZTpcIm5kXCIsbmRvOlwibmdcIixuZXA6XCJuZVwiLG5ubzpcIm5uXCIsbm9iOlwibmJcIixub3I6XCJub1wiLG55YTpcIm55XCIsb2NpOlwib2NcIixvamk6XCJvalwiLG9yaTpcIm9yXCIsb3JtOlwib21cIixvc3M6XCJvc1wiLHBhbjpcInBhXCIscGVyOlwiZmFcIixwbGk6XCJwaVwiLHBvbDpcInBsXCIscG9yOlwicHRcIixwdXM6XCJwc1wiLHF1ZTpcInF1XCIscm9oOlwicm1cIixydW06XCJyb1wiLHJ1bjpcInJuXCIscnVzOlwicnVcIixzYWc6XCJzZ1wiLHNhbjpcInNhXCIsc2luOlwic2lcIixzbG86XCJza1wiLHNsdjpcInNsXCIsc21lOlwic2VcIixzbW86XCJzbVwiLHNuYTpcInNuXCIsc25kOlwic2RcIixzb206XCJzb1wiLHNvdDpcInN0XCIsc3BhOlwiZXNcIixzcmQ6XCJzY1wiLHNycDpcInNyXCIsc3N3Olwic3NcIixzdW46XCJzdVwiLHN3YTpcInN3XCIsc3dlOlwic3ZcIix0YWg6XCJ0eVwiLHRhbTpcInRhXCIsdGF0OlwidHRcIix0ZWw6XCJ0ZVwiLHRnazpcInRnXCIsdGdsOlwidGxcIix0aGE6XCJ0aFwiLHRpYjpcImJvXCIsdGlyOlwidGlcIix0b246XCJ0b1wiLHRzbjpcInRuXCIsdHNvOlwidHNcIix0dWs6XCJ0a1wiLHR1cjpcInRyXCIsdHdpOlwidHdcIix1aWc6XCJ1Z1wiLHVrcjpcInVrXCIsdXJkOlwidXJcIix1emI6XCJ1elwiLHZlbjpcInZlXCIsdmllOlwidmlcIix2b2w6XCJ2b1wiLHdlbDpcImN5XCIsd2xuOlwid2FcIix3b2w6XCJ3b1wiLHhobzpcInhoXCIseWlkOlwieWlcIix5b3I6XCJ5b1wiLHpoYTpcInphXCIsenVsOlwienVcIn0sbmFtZXM9e2FmYXI6XCJhYVwiLGFia2hhemlhbjpcImFiXCIsYWZyaWthYW5zOlwiYWZcIixha2FuOlwiYWtcIixhbGJhbmlhbjpcInNxXCIsYW1oYXJpYzpcImFtXCIsYXJhYmljOlwiYXJcIixhcmFnb25lc2U6XCJhblwiLGFybWVuaWFuOlwiaHlcIixhc3NhbWVzZTpcImFzXCIsYXZhcmljOlwiYXZcIixhdmVzdGFuOlwiYWVcIixheW1hcmE6XCJheVwiLGF6ZXJiYWlqYW5pOlwiYXpcIixiYXNoa2lyOlwiYmFcIixiYW1iYXJhOlwiYm1cIixiYXNxdWU6XCJldVwiLGJlbGFydXNpYW46XCJiZVwiLGJlbmdhbGk6XCJiblwiLFwiYmloYXJpIGxhbmd1YWdlc1wiOlwiYmhcIixiaXNsYW1hOlwiYmlcIix0aWJldGFuOlwiYm9cIixib3NuaWFuOlwiYnNcIixicmV0b246XCJiclwiLGJ1bGdhcmlhbjpcImJnXCIsYnVybWVzZTpcIm15XCIsY2F0YWxhbjpcImNhXCIsdmFsZW5jaWFuOlwiY2FcIixjemVjaDpcImNzXCIsY2hhbW9ycm86XCJjaFwiLGNoZWNoZW46XCJjZVwiLGNoaW5lc2U6XCJ6aFwiLFwiY2h1cmNoIHNsYXZpY1wiOlwiY3VcIixcIm9sZCBzbGF2b25pY1wiOlwiY3VcIixcImNodXJjaCBzbGF2b25pY1wiOlwiY3VcIixcIm9sZCBidWxnYXJpYW5cIjpcImN1XCIsXCJvbGQgY2h1cmNoIHNsYXZvbmljXCI6XCJjdVwiLGNodXZhc2g6XCJjdlwiLGNvcm5pc2g6XCJrd1wiLGNvcnNpY2FuOlwiY29cIixjcmVlOlwiY3JcIix3ZWxzaDpcImN5XCIsZGFuaXNoOlwiZGFcIixnZXJtYW46XCJkZVwiLGRpdmVoaTpcImR2XCIsZGhpdmVoaTpcImR2XCIsbWFsZGl2aWFuOlwiZHZcIixkdXRjaDpcIm5sXCIsZmxlbWlzaDpcIm5sXCIsZHpvbmdraGE6XCJkelwiLGdyZWVrOlwiZWxcIixlbmdsaXNoOlwiZW5cIixlc3BlcmFudG86XCJlb1wiLGVzdG9uaWFuOlwiZXRcIixld2U6XCJlZVwiLGZhcm9lc2U6XCJmb1wiLHBlcnNpYW46XCJmYVwiLGZpamlhbjpcImZqXCIsZmlubmlzaDpcImZpXCIsZnJlbmNoOlwiZnJcIixcIndlc3Rlcm4gZnJpc2lhblwiOlwiZnlcIixmdWxhaDpcImZmXCIsZ2VvcmdpYW46XCJrYVwiLGdhZWxpYzpcImdkXCIsXCJzY290dGlzaCBnYWVsaWNcIjpcImdkXCIsaXJpc2g6XCJnYVwiLGdhbGljaWFuOlwiZ2xcIixtYW54OlwiZ3ZcIixndWFyYW5pOlwiZ25cIixndWphcmF0aTpcImd1XCIsaGFpdGlhbjpcImh0XCIsXCJoYWl0aWFuIGNyZW9sZVwiOlwiaHRcIixoYXVzYTpcImhhXCIsaGVicmV3OlwiaGVcIixoZXJlcm86XCJoelwiLGhpbmRpOlwiaGlcIixcImhpcmkgbW90dVwiOlwiaG9cIixjcm9hdGlhbjpcImhyXCIsaHVuZ2FyaWFuOlwiaHVcIixpZ2JvOlwiaWdcIixpY2VsYW5kaWM6XCJpc1wiLGlkbzpcImlvXCIsXCJzaWNodWFuIHlpXCI6XCJpaVwiLG51b3N1OlwiaWlcIixpbnVrdGl0dXQ6XCJpdVwiLGludGVybGluZ3VlOlwiaWVcIixvY2NpZGVudGFsOlwiaWVcIixpbnRlcmxpbmd1YTpcImlhXCIsaW5kb25lc2lhbjpcImlkXCIsaW51cGlhcTpcImlrXCIsaXRhbGlhbjpcIml0XCIsamF2YW5lc2U6XCJqdlwiLGphcGFuZXNlOlwiamFcIixrYWxhYWxsaXN1dDpcImtsXCIsZ3JlZW5sYW5kaWM6XCJrbFwiLGthbm5hZGE6XCJrblwiLGthc2htaXJpOlwia3NcIixrYW51cmk6XCJrclwiLGthemFraDpcImtrXCIsXCJjZW50cmFsIGtobWVyXCI6XCJrbVwiLGtpa3V5dTpcImtpXCIsZ2lrdXl1Olwia2lcIixraW55YXJ3YW5kYTpcInJ3XCIsa2lyZ2hpejpcImt5XCIsa3lyZ3l6Olwia3lcIixrb21pOlwia3ZcIixrb25nbzpcImtnXCIsa29yZWFuOlwia29cIixrdWFueWFtYTpcImtqXCIsa3dhbnlhbWE6XCJralwiLGt1cmRpc2g6XCJrdVwiLGxhbzpcImxvXCIsbGF0aW46XCJsYVwiLGxhdHZpYW46XCJsdlwiLGxpbWJ1cmdhbjpcImxpXCIsbGltYnVyZ2VyOlwibGlcIixsaW1idXJnaXNoOlwibGlcIixsaW5nYWxhOlwibG5cIixsaXRodWFuaWFuOlwibHRcIixsdXhlbWJvdXJnaXNoOlwibGJcIixsZXR6ZWJ1cmdlc2NoOlwibGJcIixcImx1YmEta2F0YW5nYVwiOlwibHVcIixnYW5kYTpcImxnXCIsbWFjZWRvbmlhbjpcIm1rXCIsbWFyc2hhbGxlc2U6XCJtaFwiLG1hbGF5YWxhbTpcIm1sXCIsbWFvcmk6XCJtaVwiLG1hcmF0aGk6XCJtclwiLG1hbGF5OlwibXNcIixtYWxhZ2FzeTpcIm1nXCIsbWFsdGVzZTpcIm10XCIsbW9uZ29saWFuOlwibW5cIixuYXVydTpcIm5hXCIsbmF2YWpvOlwibnZcIixuYXZhaG86XCJudlwiLFwibmRlYmVsZSwgc291dGhcIjpcIm5yXCIsXCJzb3V0aCBuZGViZWxlXCI6XCJuclwiLFwibmRlYmVsZSwgbm9ydGhcIjpcIm5kXCIsXCJub3J0aCBuZGViZWxlXCI6XCJuZFwiLG5kb25nYTpcIm5nXCIsbmVwYWxpOlwibmVcIixcIm5vcndlZ2lhbiBueW5vcnNrXCI6XCJublwiLFwibnlub3Jzaywgbm9yd2VnaWFuXCI6XCJublwiLFwibm9yd2VnaWFuIGJva23DpWxcIjpcIm5iXCIsXCJib2ttw6VsLCBub3J3ZWdpYW5cIjpcIm5iXCIsbm9yd2VnaWFuOlwibm9cIixjaGljaGV3YTpcIm55XCIsY2hld2E6XCJueVwiLG55YW5qYTpcIm55XCIsb2NjaXRhbjpcIm9jXCIsb2ppYndhOlwib2pcIixvcml5YTpcIm9yXCIsb3JvbW86XCJvbVwiLG9zc2V0aWFuOlwib3NcIixvc3NldGljOlwib3NcIixwYW5qYWJpOlwicGFcIixwdW5qYWJpOlwicGFcIixwYWxpOlwicGlcIixwb2xpc2g6XCJwbFwiLHBvcnR1Z3Vlc2U6XCJwdFwiLHB1c2h0bzpcInBzXCIscGFzaHRvOlwicHNcIixxdWVjaHVhOlwicXVcIixyb21hbnNoOlwicm1cIixyb21hbmlhbjpcInJvXCIsbW9sZGF2aWFuOlwicm9cIixtb2xkb3ZhbjpcInJvXCIscnVuZGk6XCJyblwiLHJ1c3NpYW46XCJydVwiLHNhbmdvOlwic2dcIixzYW5za3JpdDpcInNhXCIsc2luaGFsYTpcInNpXCIsc2luaGFsZXNlOlwic2lcIixzbG92YWs6XCJza1wiLHNsb3ZlbmlhbjpcInNsXCIsXCJub3J0aGVybiBzYW1pXCI6XCJzZVwiLHNhbW9hbjpcInNtXCIsc2hvbmE6XCJzblwiLHNpbmRoaTpcInNkXCIsc29tYWxpOlwic29cIixcInNvdGhvLCBzb3V0aGVyblwiOlwic3RcIixzcGFuaXNoOlwiZXNcIixjYXN0aWxpYW46XCJlc1wiLHNhcmRpbmlhbjpcInNjXCIsc2VyYmlhbjpcInNyXCIsc3dhdGk6XCJzc1wiLHN1bmRhbmVzZTpcInN1XCIsc3dhaGlsaTpcInN3XCIsc3dlZGlzaDpcInN2XCIsdGFoaXRpYW46XCJ0eVwiLHRhbWlsOlwidGFcIix0YXRhcjpcInR0XCIsdGVsdWd1OlwidGVcIix0YWppazpcInRnXCIsdGFnYWxvZzpcInRsXCIsdGhhaTpcInRoXCIsdGlncmlueWE6XCJ0aVwiLHRvbmdhOlwidG9cIix0c3dhbmE6XCJ0blwiLHRzb25nYTpcInRzXCIsdHVya21lbjpcInRrXCIsdHVya2lzaDpcInRyXCIsdHdpOlwidHdcIix1aWdodXI6XCJ1Z1wiLHV5Z2h1cjpcInVnXCIsdWtyYWluaWFuOlwidWtcIix1cmR1OlwidXJcIix1emJlazpcInV6XCIsdmVuZGE6XCJ2ZVwiLHZpZXRuYW1lc2U6XCJ2aVwiLFwidm9sYXDDvGtcIjpcInZvXCIsd2FsbG9vbjpcIndhXCIsd29sb2Y6XCJ3b1wiLHhob3NhOlwieGhcIix5aWRkaXNoOlwieWlcIix5b3J1YmE6XCJ5b1wiLHpodWFuZzpcInphXCIsY2h1YW5nOlwiemFcIix6dWx1OlwienVcIn07Y29uc3QgaXNvS2V5cz1PYmplY3QudmFsdWVzKGlzbykuc29ydCgpO3ZhciBsYW5ndWFnZXM9ZT0+e2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlKXRocm93IG5ldyBFcnJvcignVGhlIFwibGFuZ3VhZ2VcIiBtdXN0IGJlIGEgc3RyaW5nLCByZWNlaXZlZCAnK3R5cGVvZiBlKTtpZihlLmxlbmd0aD4xMDApdGhyb3cgbmV3IEVycm9yKGBUaGUgXCJsYW5ndWFnZVwiIGlzIHRvbyBsb25nIGF0ICR7ZS5sZW5ndGh9IGNoYXJhY3RlcnNgKTtpZihlPWUudG9Mb3dlckNhc2UoKSxlPW5hbWVzW2VdfHxpc29bZV18fGUsIWlzb0tleXMuaW5jbHVkZXMoZSkpdGhyb3cgbmV3IEVycm9yKGBUaGUgbGFuZ3VhZ2UgXCIke2V9XCIgaXMgbm90IHBhcnQgb2YgdGhlIElTTyA2MzktMWApO3JldHVybiBlfTtmdW5jdGlvbiBDYWNoZSgpe3ZhciBlPU9iamVjdC5jcmVhdGUobnVsbCk7ZnVuY3Rpb24gYShhKXtkZWxldGUgZVthXX10aGlzLnNldD1mdW5jdGlvbihuLGkscil7aWYodm9pZCAwIT09ciYmKFwibnVtYmVyXCIhPXR5cGVvZiByfHxpc05hTihyKXx8cjw9MCkpdGhyb3cgbmV3IEVycm9yKFwiQ2FjaGUgdGltZW91dCBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyXCIpO3ZhciB0PWVbbl07dCYmY2xlYXJUaW1lb3V0KHQudGltZW91dCk7dmFyIG89e3ZhbHVlOmksZXhwaXJlOnIrRGF0ZS5ub3coKX07cmV0dXJuIGlzTmFOKG8uZXhwaXJlKXx8KG8udGltZW91dD1zZXRUaW1lb3V0KCgoKT0+YShuKSkscikpLGVbbl09byxpfSx0aGlzLmRlbD1mdW5jdGlvbihuKXt2YXIgaT0hMCxyPWVbbl07cmV0dXJuIHI/KGNsZWFyVGltZW91dChyLnRpbWVvdXQpLCFpc05hTihyLmV4cGlyZSkmJnIuZXhwaXJlPERhdGUubm93KCkmJihpPSExKSk6aT0hMSxpJiZhKG4pLGl9LHRoaXMuY2xlYXI9ZnVuY3Rpb24oKXtmb3IodmFyIGEgaW4gZSljbGVhclRpbWVvdXQoZVthXS50aW1lb3V0KTtlPU9iamVjdC5jcmVhdGUobnVsbCl9LHRoaXMuZ2V0PWZ1bmN0aW9uKGEpe3ZhciBuPWVbYV07aWYodm9pZCAwIT09bil7aWYoaXNOYU4obi5leHBpcmUpfHxuLmV4cGlyZT49RGF0ZS5ub3coKSlyZXR1cm4gbi52YWx1ZTtkZWxldGUgZVthXX1yZXR1cm4gbnVsbH19Y29uc3QgZXhwJDE9bmV3IENhY2hlO2V4cCQxLkNhY2hlPUNhY2hlO2NvbnN0IGJhc2U9XCJodHRwczovL3RyYW5zbGF0ZS5nb29nbGVhcGlzLmNvbS90cmFuc2xhdGVfYS9zaW5nbGVcIjt2YXIgZ29vZ2xlPXtmZXRjaDooe2tleTplLGZyb206YSx0bzpuLHRleHQ6aX0pPT5bYCR7YmFzZX0/Y2xpZW50PWd0eCZzbD0ke2F9JnRsPSR7bn0mZHQ9dCZxPSR7ZW5jb2RlVVJJKGkpfWBdLHBhcnNlOmU9PmUuanNvbigpLnRoZW4oKGU9PntpZighKGU9ZSYmZVswXSYmZVswXVswXSYmZVswXS5tYXAoKGU9PmVbMF0pKS5qb2luKFwiXCIpKSl0aHJvdyBuZXcgRXJyb3IoXCJUcmFuc2xhdGlvbiBub3QgZm91bmRcIik7cmV0dXJuIGV9KSl9LHlhbmRleD17bmVlZGtleTohMCxmZXRjaDooe2tleTplLGZyb206YSx0bzpuLHRleHQ6aX0pPT5bYGh0dHBzOi8vdHJhbnNsYXRlLnlhbmRleC5uZXQvYXBpL3YxLjUvdHIuanNvbi90cmFuc2xhdGU/a2V5PSR7ZX0mbGFuZz0ke2F9LSR7bn0mdGV4dD0ke2VuY29kZVVSSUNvbXBvbmVudChpKX1gLHttZXRob2Q6XCJQT1NUXCIsYm9keTpcIlwifV0scGFyc2U6ZT0+ZS5qc29uKCkudGhlbigoZT0+e2lmKDIwMCE9PWUuY29kZSl0aHJvdyBuZXcgRXJyb3IoZS5tZXNzYWdlKTtyZXR1cm4gZS50ZXh0WzBdfSkpfTtjb25zdCBsaWJyZVVybD1cImh0dHBzOi8vbGlicmV0cmFuc2xhdGUuY29tL3RyYW5zbGF0ZVwiO3ZhciBsaWJyZT17bmVlZGtleTohMSxmZXRjaDooe3VybDplPWxpYnJlVXJsLGtleTphLGZyb206bix0bzppLHRleHQ6cn0pPT5bZSx7bWV0aG9kOlwiUE9TVFwiLGJvZHk6SlNPTi5zdHJpbmdpZnkoe3E6cixzb3VyY2U6bix0YXJnZXQ6aSxhcGlfa2V5OmF9KSxoZWFkZXJzOntcIkNvbnRlbnQtVHlwZVwiOlwiYXBwbGljYXRpb24vanNvblwifX1dLHBhcnNlOmU9PmUuanNvbigpLnRoZW4oKGU9PntpZighZSl0aHJvdyBuZXcgRXJyb3IoXCJObyByZXNwb25zZSBmb3VuZFwiKTtpZihlLmVycm9yKXRocm93IG5ldyBFcnJvcihlLmVycm9yKTtpZighZS50cmFuc2xhdGVkVGV4dCl0aHJvdyBuZXcgRXJyb3IoXCJObyByZXNwb25zZSBmb3VuZFwiKTtyZXR1cm4gZS50cmFuc2xhdGVkVGV4dH0pKX0sZGVlcGw9e25lZWRrZXk6ITAsZmV0Y2g6KHtrZXk6ZSxmcm9tOmEsdG86bix0ZXh0Oml9KT0+W2BodHRwczovL2FwaSR7LzpmeCQvLnRlc3QoZSk/XCItZnJlZVwiOlwiXCJ9LmRlZXBsLmNvbS92Mi90cmFuc2xhdGU/YXV0aF9rZXk9JHtlfSZzb3VyY2VfbGFuZz0ke2F9JnRhcmdldF9sYW5nPSR7bn0mdGV4dD0ke2k9ZW5jb2RlVVJJQ29tcG9uZW50KGkpfWAse21ldGhvZDpcIlBPU1RcIixib2R5OlwiXCJ9XSxwYXJzZTphc3luYyBlPT57aWYoIWUub2spe2lmKDQwMz09PWUuc3RhdHVzKXRocm93IG5ldyBFcnJvcihcIkF1dGggRXJyb3IsIHBsZWFzZSByZXZpZXcgdGhlIGtleSBmb3IgRGVlcExcIik7dGhyb3cgbmV3IEVycm9yKGBFcnJvciAke2Uuc3RhdHVzfWApfXJldHVybiBlLmpzb24oKS50aGVuKChlPT5lLnRyYW5zbGF0aW9uc1swXS50ZXh0KSl9fSxlbmdpbmVzPXtnb29nbGU6Z29vZ2xlLHlhbmRleDp5YW5kZXgsbGlicmU6bGlicmUsZGVlcGw6ZGVlcGx9O2NvbnN0IFRyYW5zbGF0ZT1mdW5jdGlvbihlPXt9KXtpZighKHRoaXMgaW5zdGFuY2VvZiBUcmFuc2xhdGUpKXJldHVybiBuZXcgVHJhbnNsYXRlKGUpO2NvbnN0IGE9e2Zyb206XCJlblwiLHRvOlwiZW5cIixjYWNoZTp2b2lkIDAsbGFuZ3VhZ2VzOmxhbmd1YWdlcyxlbmdpbmVzOmVuZ2luZXMsZW5naW5lOlwiZ29vZ2xlXCIsa2V5czp7fX0sbj1hc3luYyhlLGE9e30pPT57XCJzdHJpbmdcIj09dHlwZW9mIGEmJihhPXt0bzphfSksYS50ZXh0PWUsYS5mcm9tPWxhbmd1YWdlcyhhLmZyb218fG4uZnJvbSksYS50bz1sYW5ndWFnZXMoYS50b3x8bi50byksYS5jYWNoZT1hLmNhY2hlfHxuLmNhY2hlLGEuZW5naW5lcz1hLmVuZ2luZXN8fHt9LGEuZW5naW5lPWEuZW5naW5lfHxuLmVuZ2luZSxhLnVybD1hLnVybHx8bi51cmwsYS5pZD1hLmlkfHxgJHthLnVybH06JHthLmZyb219OiR7YS50b306JHthLmVuZ2luZX06JHthLnRleHR9YCxhLmtleXM9YS5rZXlzfHxuLmtleXN8fHt9O2ZvcihsZXQgZSBpbiBuLmtleXMpYS5rZXlzW2VdPWEua2V5c1tlXXx8bi5rZXlzW2VdO2Eua2V5PWEua2V5fHxuLmtleXx8YS5rZXlzW2EuZW5naW5lXTtjb25zdCBpPWEuZW5naW5lc1thLmVuZ2luZV18fG4uZW5naW5lc1thLmVuZ2luZV0scj1leHAkMS5nZXQoYS5pZCk7aWYocilyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHIpO2lmKGEudG89PT1hLmZyb20pcmV0dXJuIFByb21pc2UucmVzb2x2ZShhLnRleHQpO2lmKGkubmVlZGtleSYmIWEua2V5KXRocm93IG5ldyBFcnJvcihgVGhlIGVuZ2luZSBcIiR7YS5lbmdpbmV9XCIgbmVlZHMgYSBrZXksIHBsZWFzZSBwcm92aWRlIGl0YCk7Y29uc3QgdD1pLmZldGNoKGEpO3JldHVybiBmZXRjaCguLi50KS50aGVuKGkucGFyc2UpLnRoZW4oKGU9PmV4cCQxLnNldChhLmlkLGUsYS5jYWNoZSkpKX07Zm9yKGxldCBpIGluIGEpbltpXT12b2lkIDA9PT1lW2ldP2FbaV06ZVtpXTtyZXR1cm4gbn0sZXhwPW5ldyBUcmFuc2xhdGU7ZXhwLlRyYW5zbGF0ZT1UcmFuc2xhdGU7ZXhwb3J0e2V4cCBhcyBkZWZhdWx0fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgU2FsZXNmb3JjZVVpXzEgPSByZXF1aXJlKFwiLi9wcmVzZW50YXRpb24vdWkvU2FsZXNmb3JjZVVpXCIpO1xuKGZ1bmN0aW9uICgpIHtcbiAgICAoMCwgU2FsZXNmb3JjZVVpXzEuc2V0VHNMaWJJblVpKSgpO1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==