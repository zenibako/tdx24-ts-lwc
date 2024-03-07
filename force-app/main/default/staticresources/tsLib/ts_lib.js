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
    langCode = "fr";
    googleData;
    constructor(googleData) {
        this.googleData = googleData;
    }
    async get(text) {
        const translation = await this.googleData.translate(text, this.langCode);
        return new Translation_1.Translation(text, translation, this.langCode);
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
    language;
    constructor(text, translation, language) {
        this.text = text;
        this.translation = translation;
        this.language = language;
    }
    getSourceText() {
        return this.text;
    }
    getTranslatedText() {
        return this.translation;
    }
    getLanguage() {
        return this.language;
    }
}
exports.Translation = Translation;


/***/ }),

/***/ "./src/domain/use-cases/TranslateTextUseCase.ts":
/*!******************************************************!*\
  !*** ./src/domain/use-cases/TranslateTextUseCase.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TranslateTextUseCase = void 0;
class TranslateTextUseCase {
    translations;
    constructor(translationRepository) {
        this.translations = translationRepository;
    }
    async execute(text) {
        const translation = await this.translations.get(text);
        return translation.getTranslatedText();
    }
}
exports.TranslateTextUseCase = TranslateTextUseCase;


/***/ }),

/***/ "./src/presentation/presenters/TranslationPresenter.ts":
/*!*************************************************************!*\
  !*** ./src/presentation/presenters/TranslationPresenter.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TranslationPresenter = void 0;
class TranslationPresenter {
    translateFrenchUseCase;
    constructor(translateFrenchUseCase) {
        this.translateFrenchUseCase = translateFrenchUseCase;
    }
    text;
    translate(text) {
        this.text = text;
        return this;
    }
    async intoFrench() {
        if (!this.text) {
            throw new Error('No text to translate');
        }
        return this.translateFrenchUseCase.execute(this.text);
    }
}
exports.TranslationPresenter = TranslationPresenter;


/***/ }),

/***/ "./src/presentation/ui/SalesforceUi.ts":
/*!*********************************************!*\
  !*** ./src/presentation/ui/SalesforceUi.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setTsLibInUi = void 0;
const GoogleDataSource_1 = __webpack_require__(/*! ../../data/data-sources/GoogleDataSource */ "./src/data/data-sources/GoogleDataSource.ts");
const FrenchTranslationRepository_1 = __webpack_require__(/*! ../../data/repositories/FrenchTranslationRepository */ "./src/data/repositories/FrenchTranslationRepository.ts");
const TranslateTextUseCase_1 = __webpack_require__(/*! ../../domain/use-cases/TranslateTextUseCase */ "./src/domain/use-cases/TranslateTextUseCase.ts");
const TranslationPresenter_1 = __webpack_require__(/*! ../presenters/TranslationPresenter */ "./src/presentation/presenters/TranslationPresenter.ts");
function setTsLibInUi() {
    const googleData = new GoogleDataSource_1.GoogleDataSource();
    const frenchTranslations = new FrenchTranslationRepository_1.FrenchTranslationRepository(googleData);
    const translateTextUseCase = new TranslateTextUseCase_1.TranslateTextUseCase(frenchTranslations);
    window.tsLib = new TranslationPresenter_1.TranslationPresenter(translateTextUseCase);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF1SCw4REFBOEQsTUFBTSxHQUFHLE9BQU8sR0FBRyxLQUFLLEdBQUcsU0FBUyxHQUFHLE9BQU8sNEJBQTRCLG1EQUFtRCxxQ0FBcUMsbUVBQW1FLCtCQUErQixnREFBZ0Qsb0RBQW9ELFNBQVMsbUNBQW1DLG1CQUFtQix1RUFBdUUsNENBQTRDLFNBQVMsbUJBQW1COzs7Ozs7VUNBcnBRO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7OztBQ05hO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHVCQUF1QixtQkFBTyxDQUFDLDZFQUFnQztBQUMvRDtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RzLXNkay8uL3NyYy9kYXRhL2RhdGEtc291cmNlcy9Hb29nbGVEYXRhU291cmNlLnRzIiwid2VicGFjazovL3RzLXNkay8uL3NyYy9kYXRhL3JlcG9zaXRvcmllcy9GcmVuY2hUcmFuc2xhdGlvblJlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vdHMtc2RrLy4vc3JjL2RvbWFpbi9lbnRpdGllcy9UcmFuc2xhdGlvbi50cyIsIndlYnBhY2s6Ly90cy1zZGsvLi9zcmMvZG9tYWluL3VzZS1jYXNlcy9UcmFuc2xhdGVUZXh0VXNlQ2FzZS50cyIsIndlYnBhY2s6Ly90cy1zZGsvLi9zcmMvcHJlc2VudGF0aW9uL3ByZXNlbnRlcnMvVHJhbnNsYXRpb25QcmVzZW50ZXIudHMiLCJ3ZWJwYWNrOi8vdHMtc2RrLy4vc3JjL3ByZXNlbnRhdGlvbi91aS9TYWxlc2ZvcmNlVWkudHMiLCJ3ZWJwYWNrOi8vdHMtc2RrLy4vbm9kZV9tb2R1bGVzL3RyYW5zbGF0ZS9pbmRleC5taW4uanMiLCJ3ZWJwYWNrOi8vdHMtc2RrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RzLXNkay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHMtc2RrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHMtc2RrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHMtc2RrLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Hb29nbGVEYXRhU291cmNlID0gdm9pZCAwO1xuY29uc3QgdHJhbnNsYXRlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInRyYW5zbGF0ZVwiKSk7XG5jbGFzcyBHb29nbGVEYXRhU291cmNlIHtcbiAgICBhc3luYyB0cmFuc2xhdGUodGV4dCwgdG8pIHtcbiAgICAgICAgY29uc3QgdHJhbnNsYXRpb24gPSBhd2FpdCAoMCwgdHJhbnNsYXRlXzEuZGVmYXVsdCkodGV4dCwgdG8pO1xuICAgICAgICBjb25zb2xlLmxvZyhgVGV4dDogJHt0ZXh0fWApO1xuICAgICAgICBjb25zb2xlLmxvZyhgVHJhbnNsYXRpb246ICR7dHJhbnNsYXRpb259YCk7XG4gICAgICAgIHJldHVybiB0cmFuc2xhdGlvbjtcbiAgICB9XG59XG5leHBvcnRzLkdvb2dsZURhdGFTb3VyY2UgPSBHb29nbGVEYXRhU291cmNlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkZyZW5jaFRyYW5zbGF0aW9uUmVwb3NpdG9yeSA9IHZvaWQgMDtcbmNvbnN0IFRyYW5zbGF0aW9uXzEgPSByZXF1aXJlKFwiLi4vLi4vZG9tYWluL2VudGl0aWVzL1RyYW5zbGF0aW9uXCIpO1xuY2xhc3MgRnJlbmNoVHJhbnNsYXRpb25SZXBvc2l0b3J5IHtcbiAgICBsYW5nQ29kZSA9IFwiZnJcIjtcbiAgICBnb29nbGVEYXRhO1xuICAgIGNvbnN0cnVjdG9yKGdvb2dsZURhdGEpIHtcbiAgICAgICAgdGhpcy5nb29nbGVEYXRhID0gZ29vZ2xlRGF0YTtcbiAgICB9XG4gICAgYXN5bmMgZ2V0KHRleHQpIHtcbiAgICAgICAgY29uc3QgdHJhbnNsYXRpb24gPSBhd2FpdCB0aGlzLmdvb2dsZURhdGEudHJhbnNsYXRlKHRleHQsIHRoaXMubGFuZ0NvZGUpO1xuICAgICAgICByZXR1cm4gbmV3IFRyYW5zbGF0aW9uXzEuVHJhbnNsYXRpb24odGV4dCwgdHJhbnNsYXRpb24sIHRoaXMubGFuZ0NvZGUpO1xuICAgIH1cbn1cbmV4cG9ydHMuRnJlbmNoVHJhbnNsYXRpb25SZXBvc2l0b3J5ID0gRnJlbmNoVHJhbnNsYXRpb25SZXBvc2l0b3J5O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlRyYW5zbGF0aW9uID0gdm9pZCAwO1xuY2xhc3MgVHJhbnNsYXRpb24ge1xuICAgIHRleHQ7XG4gICAgdHJhbnNsYXRpb247XG4gICAgbGFuZ3VhZ2U7XG4gICAgY29uc3RydWN0b3IodGV4dCwgdHJhbnNsYXRpb24sIGxhbmd1YWdlKSB7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMudHJhbnNsYXRpb24gPSB0cmFuc2xhdGlvbjtcbiAgICAgICAgdGhpcy5sYW5ndWFnZSA9IGxhbmd1YWdlO1xuICAgIH1cbiAgICBnZXRTb3VyY2VUZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy50ZXh0O1xuICAgIH1cbiAgICBnZXRUcmFuc2xhdGVkVGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb247XG4gICAgfVxuICAgIGdldExhbmd1YWdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sYW5ndWFnZTtcbiAgICB9XG59XG5leHBvcnRzLlRyYW5zbGF0aW9uID0gVHJhbnNsYXRpb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVHJhbnNsYXRlVGV4dFVzZUNhc2UgPSB2b2lkIDA7XG5jbGFzcyBUcmFuc2xhdGVUZXh0VXNlQ2FzZSB7XG4gICAgdHJhbnNsYXRpb25zO1xuICAgIGNvbnN0cnVjdG9yKHRyYW5zbGF0aW9uUmVwb3NpdG9yeSkge1xuICAgICAgICB0aGlzLnRyYW5zbGF0aW9ucyA9IHRyYW5zbGF0aW9uUmVwb3NpdG9yeTtcbiAgICB9XG4gICAgYXN5bmMgZXhlY3V0ZSh0ZXh0KSB7XG4gICAgICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gYXdhaXQgdGhpcy50cmFuc2xhdGlvbnMuZ2V0KHRleHQpO1xuICAgICAgICByZXR1cm4gdHJhbnNsYXRpb24uZ2V0VHJhbnNsYXRlZFRleHQoKTtcbiAgICB9XG59XG5leHBvcnRzLlRyYW5zbGF0ZVRleHRVc2VDYXNlID0gVHJhbnNsYXRlVGV4dFVzZUNhc2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVHJhbnNsYXRpb25QcmVzZW50ZXIgPSB2b2lkIDA7XG5jbGFzcyBUcmFuc2xhdGlvblByZXNlbnRlciB7XG4gICAgdHJhbnNsYXRlRnJlbmNoVXNlQ2FzZTtcbiAgICBjb25zdHJ1Y3Rvcih0cmFuc2xhdGVGcmVuY2hVc2VDYXNlKSB7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlRnJlbmNoVXNlQ2FzZSA9IHRyYW5zbGF0ZUZyZW5jaFVzZUNhc2U7XG4gICAgfVxuICAgIHRleHQ7XG4gICAgdHJhbnNsYXRlKHRleHQpIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGFzeW5jIGludG9GcmVuY2goKSB7XG4gICAgICAgIGlmICghdGhpcy50ZXh0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHRleHQgdG8gdHJhbnNsYXRlJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlRnJlbmNoVXNlQ2FzZS5leGVjdXRlKHRoaXMudGV4dCk7XG4gICAgfVxufVxuZXhwb3J0cy5UcmFuc2xhdGlvblByZXNlbnRlciA9IFRyYW5zbGF0aW9uUHJlc2VudGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnNldFRzTGliSW5VaSA9IHZvaWQgMDtcbmNvbnN0IEdvb2dsZURhdGFTb3VyY2VfMSA9IHJlcXVpcmUoXCIuLi8uLi9kYXRhL2RhdGEtc291cmNlcy9Hb29nbGVEYXRhU291cmNlXCIpO1xuY29uc3QgRnJlbmNoVHJhbnNsYXRpb25SZXBvc2l0b3J5XzEgPSByZXF1aXJlKFwiLi4vLi4vZGF0YS9yZXBvc2l0b3JpZXMvRnJlbmNoVHJhbnNsYXRpb25SZXBvc2l0b3J5XCIpO1xuY29uc3QgVHJhbnNsYXRlVGV4dFVzZUNhc2VfMSA9IHJlcXVpcmUoXCIuLi8uLi9kb21haW4vdXNlLWNhc2VzL1RyYW5zbGF0ZVRleHRVc2VDYXNlXCIpO1xuY29uc3QgVHJhbnNsYXRpb25QcmVzZW50ZXJfMSA9IHJlcXVpcmUoXCIuLi9wcmVzZW50ZXJzL1RyYW5zbGF0aW9uUHJlc2VudGVyXCIpO1xuZnVuY3Rpb24gc2V0VHNMaWJJblVpKCkge1xuICAgIGNvbnN0IGdvb2dsZURhdGEgPSBuZXcgR29vZ2xlRGF0YVNvdXJjZV8xLkdvb2dsZURhdGFTb3VyY2UoKTtcbiAgICBjb25zdCBmcmVuY2hUcmFuc2xhdGlvbnMgPSBuZXcgRnJlbmNoVHJhbnNsYXRpb25SZXBvc2l0b3J5XzEuRnJlbmNoVHJhbnNsYXRpb25SZXBvc2l0b3J5KGdvb2dsZURhdGEpO1xuICAgIGNvbnN0IHRyYW5zbGF0ZVRleHRVc2VDYXNlID0gbmV3IFRyYW5zbGF0ZVRleHRVc2VDYXNlXzEuVHJhbnNsYXRlVGV4dFVzZUNhc2UoZnJlbmNoVHJhbnNsYXRpb25zKTtcbiAgICB3aW5kb3cudHNMaWIgPSBuZXcgVHJhbnNsYXRpb25QcmVzZW50ZXJfMS5UcmFuc2xhdGlvblByZXNlbnRlcih0cmFuc2xhdGVUZXh0VXNlQ2FzZSk7XG59XG5leHBvcnRzLnNldFRzTGliSW5VaSA9IHNldFRzTGliSW5VaTtcbiIsInZhciBpc289e2FhcjpcImFhXCIsYWJrOlwiYWJcIixhZnI6XCJhZlwiLGFrYTpcImFrXCIsYWxiOlwic3FcIixhbWg6XCJhbVwiLGFyYTpcImFyXCIsYXJnOlwiYW5cIixhcm06XCJoeVwiLGFzbTpcImFzXCIsYXZhOlwiYXZcIixhdmU6XCJhZVwiLGF5bTpcImF5XCIsYXplOlwiYXpcIixiYWs6XCJiYVwiLGJhbTpcImJtXCIsYmFxOlwiZXVcIixiZWw6XCJiZVwiLGJlbjpcImJuXCIsYmloOlwiYmhcIixiaXM6XCJiaVwiLGJvczpcImJzXCIsYnJlOlwiYnJcIixidWw6XCJiZ1wiLGJ1cjpcIm15XCIsY2F0OlwiY2FcIixjaGE6XCJjaFwiLGNoZTpcImNlXCIsY2hpOlwiemhcIixjaHU6XCJjdVwiLGNodjpcImN2XCIsY29yOlwia3dcIixjb3M6XCJjb1wiLGNyZTpcImNyXCIsY3plOlwiY3NcIixkYW46XCJkYVwiLGRpdjpcImR2XCIsZHV0OlwibmxcIixkem86XCJkelwiLGVuZzpcImVuXCIsZXBvOlwiZW9cIixlc3Q6XCJldFwiLGV3ZTpcImVlXCIsZmFvOlwiZm9cIixmaWo6XCJmalwiLGZpbjpcImZpXCIsZnJlOlwiZnJcIixmcnk6XCJmeVwiLGZ1bDpcImZmXCIsZ2VvOlwia2FcIixnZXI6XCJkZVwiLGdsYTpcImdkXCIsZ2xlOlwiZ2FcIixnbGc6XCJnbFwiLGdsdjpcImd2XCIsZ3JlOlwiZWxcIixncm46XCJnblwiLGd1ajpcImd1XCIsaGF0OlwiaHRcIixoYXU6XCJoYVwiLGhlYjpcImhlXCIsaGVyOlwiaHpcIixoaW46XCJoaVwiLGhtbzpcImhvXCIsaHJ2OlwiaHJcIixodW46XCJodVwiLGlibzpcImlnXCIsaWNlOlwiaXNcIixpZG86XCJpb1wiLGlpaTpcImlpXCIsaWt1OlwiaXVcIixpbGU6XCJpZVwiLGluYTpcImlhXCIsaW5kOlwiaWRcIixpcGs6XCJpa1wiLGl0YTpcIml0XCIsamF2OlwianZcIixqcG46XCJqYVwiLGthbDpcImtsXCIsa2FuOlwia25cIixrYXM6XCJrc1wiLGthdTpcImtyXCIsa2F6Olwia2tcIixraG06XCJrbVwiLGtpazpcImtpXCIsa2luOlwicndcIixraXI6XCJreVwiLGtvbTpcImt2XCIsa29uOlwia2dcIixrb3I6XCJrb1wiLGt1YTpcImtqXCIsa3VyOlwia3VcIixsYW86XCJsb1wiLGxhdDpcImxhXCIsbGF2OlwibHZcIixsaW06XCJsaVwiLGxpbjpcImxuXCIsbGl0OlwibHRcIixsdHo6XCJsYlwiLGx1YjpcImx1XCIsbHVnOlwibGdcIixtYWM6XCJta1wiLG1haDpcIm1oXCIsbWFsOlwibWxcIixtYW86XCJtaVwiLG1hcjpcIm1yXCIsbWF5OlwibXNcIixtbGc6XCJtZ1wiLG1sdDpcIm10XCIsbW9uOlwibW5cIixuYXU6XCJuYVwiLG5hdjpcIm52XCIsbmJsOlwibnJcIixuZGU6XCJuZFwiLG5kbzpcIm5nXCIsbmVwOlwibmVcIixubm86XCJublwiLG5vYjpcIm5iXCIsbm9yOlwibm9cIixueWE6XCJueVwiLG9jaTpcIm9jXCIsb2ppOlwib2pcIixvcmk6XCJvclwiLG9ybTpcIm9tXCIsb3NzOlwib3NcIixwYW46XCJwYVwiLHBlcjpcImZhXCIscGxpOlwicGlcIixwb2w6XCJwbFwiLHBvcjpcInB0XCIscHVzOlwicHNcIixxdWU6XCJxdVwiLHJvaDpcInJtXCIscnVtOlwicm9cIixydW46XCJyblwiLHJ1czpcInJ1XCIsc2FnOlwic2dcIixzYW46XCJzYVwiLHNpbjpcInNpXCIsc2xvOlwic2tcIixzbHY6XCJzbFwiLHNtZTpcInNlXCIsc21vOlwic21cIixzbmE6XCJzblwiLHNuZDpcInNkXCIsc29tOlwic29cIixzb3Q6XCJzdFwiLHNwYTpcImVzXCIsc3JkOlwic2NcIixzcnA6XCJzclwiLHNzdzpcInNzXCIsc3VuOlwic3VcIixzd2E6XCJzd1wiLHN3ZTpcInN2XCIsdGFoOlwidHlcIix0YW06XCJ0YVwiLHRhdDpcInR0XCIsdGVsOlwidGVcIix0Z2s6XCJ0Z1wiLHRnbDpcInRsXCIsdGhhOlwidGhcIix0aWI6XCJib1wiLHRpcjpcInRpXCIsdG9uOlwidG9cIix0c246XCJ0blwiLHRzbzpcInRzXCIsdHVrOlwidGtcIix0dXI6XCJ0clwiLHR3aTpcInR3XCIsdWlnOlwidWdcIix1a3I6XCJ1a1wiLHVyZDpcInVyXCIsdXpiOlwidXpcIix2ZW46XCJ2ZVwiLHZpZTpcInZpXCIsdm9sOlwidm9cIix3ZWw6XCJjeVwiLHdsbjpcIndhXCIsd29sOlwid29cIix4aG86XCJ4aFwiLHlpZDpcInlpXCIseW9yOlwieW9cIix6aGE6XCJ6YVwiLHp1bDpcInp1XCJ9LG5hbWVzPXthZmFyOlwiYWFcIixhYmtoYXppYW46XCJhYlwiLGFmcmlrYWFuczpcImFmXCIsYWthbjpcImFrXCIsYWxiYW5pYW46XCJzcVwiLGFtaGFyaWM6XCJhbVwiLGFyYWJpYzpcImFyXCIsYXJhZ29uZXNlOlwiYW5cIixhcm1lbmlhbjpcImh5XCIsYXNzYW1lc2U6XCJhc1wiLGF2YXJpYzpcImF2XCIsYXZlc3RhbjpcImFlXCIsYXltYXJhOlwiYXlcIixhemVyYmFpamFuaTpcImF6XCIsYmFzaGtpcjpcImJhXCIsYmFtYmFyYTpcImJtXCIsYmFzcXVlOlwiZXVcIixiZWxhcnVzaWFuOlwiYmVcIixiZW5nYWxpOlwiYm5cIixcImJpaGFyaSBsYW5ndWFnZXNcIjpcImJoXCIsYmlzbGFtYTpcImJpXCIsdGliZXRhbjpcImJvXCIsYm9zbmlhbjpcImJzXCIsYnJldG9uOlwiYnJcIixidWxnYXJpYW46XCJiZ1wiLGJ1cm1lc2U6XCJteVwiLGNhdGFsYW46XCJjYVwiLHZhbGVuY2lhbjpcImNhXCIsY3plY2g6XCJjc1wiLGNoYW1vcnJvOlwiY2hcIixjaGVjaGVuOlwiY2VcIixjaGluZXNlOlwiemhcIixcImNodXJjaCBzbGF2aWNcIjpcImN1XCIsXCJvbGQgc2xhdm9uaWNcIjpcImN1XCIsXCJjaHVyY2ggc2xhdm9uaWNcIjpcImN1XCIsXCJvbGQgYnVsZ2FyaWFuXCI6XCJjdVwiLFwib2xkIGNodXJjaCBzbGF2b25pY1wiOlwiY3VcIixjaHV2YXNoOlwiY3ZcIixjb3JuaXNoOlwia3dcIixjb3JzaWNhbjpcImNvXCIsY3JlZTpcImNyXCIsd2Vsc2g6XCJjeVwiLGRhbmlzaDpcImRhXCIsZ2VybWFuOlwiZGVcIixkaXZlaGk6XCJkdlwiLGRoaXZlaGk6XCJkdlwiLG1hbGRpdmlhbjpcImR2XCIsZHV0Y2g6XCJubFwiLGZsZW1pc2g6XCJubFwiLGR6b25na2hhOlwiZHpcIixncmVlazpcImVsXCIsZW5nbGlzaDpcImVuXCIsZXNwZXJhbnRvOlwiZW9cIixlc3RvbmlhbjpcImV0XCIsZXdlOlwiZWVcIixmYXJvZXNlOlwiZm9cIixwZXJzaWFuOlwiZmFcIixmaWppYW46XCJmalwiLGZpbm5pc2g6XCJmaVwiLGZyZW5jaDpcImZyXCIsXCJ3ZXN0ZXJuIGZyaXNpYW5cIjpcImZ5XCIsZnVsYWg6XCJmZlwiLGdlb3JnaWFuOlwia2FcIixnYWVsaWM6XCJnZFwiLFwic2NvdHRpc2ggZ2FlbGljXCI6XCJnZFwiLGlyaXNoOlwiZ2FcIixnYWxpY2lhbjpcImdsXCIsbWFueDpcImd2XCIsZ3VhcmFuaTpcImduXCIsZ3VqYXJhdGk6XCJndVwiLGhhaXRpYW46XCJodFwiLFwiaGFpdGlhbiBjcmVvbGVcIjpcImh0XCIsaGF1c2E6XCJoYVwiLGhlYnJldzpcImhlXCIsaGVyZXJvOlwiaHpcIixoaW5kaTpcImhpXCIsXCJoaXJpIG1vdHVcIjpcImhvXCIsY3JvYXRpYW46XCJoclwiLGh1bmdhcmlhbjpcImh1XCIsaWdibzpcImlnXCIsaWNlbGFuZGljOlwiaXNcIixpZG86XCJpb1wiLFwic2ljaHVhbiB5aVwiOlwiaWlcIixudW9zdTpcImlpXCIsaW51a3RpdHV0OlwiaXVcIixpbnRlcmxpbmd1ZTpcImllXCIsb2NjaWRlbnRhbDpcImllXCIsaW50ZXJsaW5ndWE6XCJpYVwiLGluZG9uZXNpYW46XCJpZFwiLGludXBpYXE6XCJpa1wiLGl0YWxpYW46XCJpdFwiLGphdmFuZXNlOlwianZcIixqYXBhbmVzZTpcImphXCIsa2FsYWFsbGlzdXQ6XCJrbFwiLGdyZWVubGFuZGljOlwia2xcIixrYW5uYWRhOlwia25cIixrYXNobWlyaTpcImtzXCIsa2FudXJpOlwia3JcIixrYXpha2g6XCJra1wiLFwiY2VudHJhbCBraG1lclwiOlwia21cIixraWt1eXU6XCJraVwiLGdpa3V5dTpcImtpXCIsa2lueWFyd2FuZGE6XCJyd1wiLGtpcmdoaXo6XCJreVwiLGt5cmd5ejpcImt5XCIsa29taTpcImt2XCIsa29uZ286XCJrZ1wiLGtvcmVhbjpcImtvXCIsa3VhbnlhbWE6XCJralwiLGt3YW55YW1hOlwia2pcIixrdXJkaXNoOlwia3VcIixsYW86XCJsb1wiLGxhdGluOlwibGFcIixsYXR2aWFuOlwibHZcIixsaW1idXJnYW46XCJsaVwiLGxpbWJ1cmdlcjpcImxpXCIsbGltYnVyZ2lzaDpcImxpXCIsbGluZ2FsYTpcImxuXCIsbGl0aHVhbmlhbjpcImx0XCIsbHV4ZW1ib3VyZ2lzaDpcImxiXCIsbGV0emVidXJnZXNjaDpcImxiXCIsXCJsdWJhLWthdGFuZ2FcIjpcImx1XCIsZ2FuZGE6XCJsZ1wiLG1hY2Vkb25pYW46XCJta1wiLG1hcnNoYWxsZXNlOlwibWhcIixtYWxheWFsYW06XCJtbFwiLG1hb3JpOlwibWlcIixtYXJhdGhpOlwibXJcIixtYWxheTpcIm1zXCIsbWFsYWdhc3k6XCJtZ1wiLG1hbHRlc2U6XCJtdFwiLG1vbmdvbGlhbjpcIm1uXCIsbmF1cnU6XCJuYVwiLG5hdmFqbzpcIm52XCIsbmF2YWhvOlwibnZcIixcIm5kZWJlbGUsIHNvdXRoXCI6XCJuclwiLFwic291dGggbmRlYmVsZVwiOlwibnJcIixcIm5kZWJlbGUsIG5vcnRoXCI6XCJuZFwiLFwibm9ydGggbmRlYmVsZVwiOlwibmRcIixuZG9uZ2E6XCJuZ1wiLG5lcGFsaTpcIm5lXCIsXCJub3J3ZWdpYW4gbnlub3Jza1wiOlwibm5cIixcIm55bm9yc2ssIG5vcndlZ2lhblwiOlwibm5cIixcIm5vcndlZ2lhbiBib2ttw6VsXCI6XCJuYlwiLFwiYm9rbcOlbCwgbm9yd2VnaWFuXCI6XCJuYlwiLG5vcndlZ2lhbjpcIm5vXCIsY2hpY2hld2E6XCJueVwiLGNoZXdhOlwibnlcIixueWFuamE6XCJueVwiLG9jY2l0YW46XCJvY1wiLG9qaWJ3YTpcIm9qXCIsb3JpeWE6XCJvclwiLG9yb21vOlwib21cIixvc3NldGlhbjpcIm9zXCIsb3NzZXRpYzpcIm9zXCIscGFuamFiaTpcInBhXCIscHVuamFiaTpcInBhXCIscGFsaTpcInBpXCIscG9saXNoOlwicGxcIixwb3J0dWd1ZXNlOlwicHRcIixwdXNodG86XCJwc1wiLHBhc2h0bzpcInBzXCIscXVlY2h1YTpcInF1XCIscm9tYW5zaDpcInJtXCIscm9tYW5pYW46XCJyb1wiLG1vbGRhdmlhbjpcInJvXCIsbW9sZG92YW46XCJyb1wiLHJ1bmRpOlwicm5cIixydXNzaWFuOlwicnVcIixzYW5nbzpcInNnXCIsc2Fuc2tyaXQ6XCJzYVwiLHNpbmhhbGE6XCJzaVwiLHNpbmhhbGVzZTpcInNpXCIsc2xvdmFrOlwic2tcIixzbG92ZW5pYW46XCJzbFwiLFwibm9ydGhlcm4gc2FtaVwiOlwic2VcIixzYW1vYW46XCJzbVwiLHNob25hOlwic25cIixzaW5kaGk6XCJzZFwiLHNvbWFsaTpcInNvXCIsXCJzb3Robywgc291dGhlcm5cIjpcInN0XCIsc3BhbmlzaDpcImVzXCIsY2FzdGlsaWFuOlwiZXNcIixzYXJkaW5pYW46XCJzY1wiLHNlcmJpYW46XCJzclwiLHN3YXRpOlwic3NcIixzdW5kYW5lc2U6XCJzdVwiLHN3YWhpbGk6XCJzd1wiLHN3ZWRpc2g6XCJzdlwiLHRhaGl0aWFuOlwidHlcIix0YW1pbDpcInRhXCIsdGF0YXI6XCJ0dFwiLHRlbHVndTpcInRlXCIsdGFqaWs6XCJ0Z1wiLHRhZ2Fsb2c6XCJ0bFwiLHRoYWk6XCJ0aFwiLHRpZ3JpbnlhOlwidGlcIix0b25nYTpcInRvXCIsdHN3YW5hOlwidG5cIix0c29uZ2E6XCJ0c1wiLHR1cmttZW46XCJ0a1wiLHR1cmtpc2g6XCJ0clwiLHR3aTpcInR3XCIsdWlnaHVyOlwidWdcIix1eWdodXI6XCJ1Z1wiLHVrcmFpbmlhbjpcInVrXCIsdXJkdTpcInVyXCIsdXpiZWs6XCJ1elwiLHZlbmRhOlwidmVcIix2aWV0bmFtZXNlOlwidmlcIixcInZvbGFww7xrXCI6XCJ2b1wiLHdhbGxvb246XCJ3YVwiLHdvbG9mOlwid29cIix4aG9zYTpcInhoXCIseWlkZGlzaDpcInlpXCIseW9ydWJhOlwieW9cIix6aHVhbmc6XCJ6YVwiLGNodWFuZzpcInphXCIsenVsdTpcInp1XCJ9O2NvbnN0IGlzb0tleXM9T2JqZWN0LnZhbHVlcyhpc28pLnNvcnQoKTt2YXIgbGFuZ3VhZ2VzPWU9PntpZihcInN0cmluZ1wiIT10eXBlb2YgZSl0aHJvdyBuZXcgRXJyb3IoJ1RoZSBcImxhbmd1YWdlXCIgbXVzdCBiZSBhIHN0cmluZywgcmVjZWl2ZWQgJyt0eXBlb2YgZSk7aWYoZS5sZW5ndGg+MTAwKXRocm93IG5ldyBFcnJvcihgVGhlIFwibGFuZ3VhZ2VcIiBpcyB0b28gbG9uZyBhdCAke2UubGVuZ3RofSBjaGFyYWN0ZXJzYCk7aWYoZT1lLnRvTG93ZXJDYXNlKCksZT1uYW1lc1tlXXx8aXNvW2VdfHxlLCFpc29LZXlzLmluY2x1ZGVzKGUpKXRocm93IG5ldyBFcnJvcihgVGhlIGxhbmd1YWdlIFwiJHtlfVwiIGlzIG5vdCBwYXJ0IG9mIHRoZSBJU08gNjM5LTFgKTtyZXR1cm4gZX07ZnVuY3Rpb24gQ2FjaGUoKXt2YXIgZT1PYmplY3QuY3JlYXRlKG51bGwpO2Z1bmN0aW9uIGEoYSl7ZGVsZXRlIGVbYV19dGhpcy5zZXQ9ZnVuY3Rpb24obixpLHIpe2lmKHZvaWQgMCE9PXImJihcIm51bWJlclwiIT10eXBlb2Ygcnx8aXNOYU4ocil8fHI8PTApKXRocm93IG5ldyBFcnJvcihcIkNhY2hlIHRpbWVvdXQgbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlclwiKTt2YXIgdD1lW25dO3QmJmNsZWFyVGltZW91dCh0LnRpbWVvdXQpO3ZhciBvPXt2YWx1ZTppLGV4cGlyZTpyK0RhdGUubm93KCl9O3JldHVybiBpc05hTihvLmV4cGlyZSl8fChvLnRpbWVvdXQ9c2V0VGltZW91dCgoKCk9PmEobikpLHIpKSxlW25dPW8saX0sdGhpcy5kZWw9ZnVuY3Rpb24obil7dmFyIGk9ITAscj1lW25dO3JldHVybiByPyhjbGVhclRpbWVvdXQoci50aW1lb3V0KSwhaXNOYU4oci5leHBpcmUpJiZyLmV4cGlyZTxEYXRlLm5vdygpJiYoaT0hMSkpOmk9ITEsaSYmYShuKSxpfSx0aGlzLmNsZWFyPWZ1bmN0aW9uKCl7Zm9yKHZhciBhIGluIGUpY2xlYXJUaW1lb3V0KGVbYV0udGltZW91dCk7ZT1PYmplY3QuY3JlYXRlKG51bGwpfSx0aGlzLmdldD1mdW5jdGlvbihhKXt2YXIgbj1lW2FdO2lmKHZvaWQgMCE9PW4pe2lmKGlzTmFOKG4uZXhwaXJlKXx8bi5leHBpcmU+PURhdGUubm93KCkpcmV0dXJuIG4udmFsdWU7ZGVsZXRlIGVbYV19cmV0dXJuIG51bGx9fWNvbnN0IGV4cCQxPW5ldyBDYWNoZTtleHAkMS5DYWNoZT1DYWNoZTtjb25zdCBiYXNlPVwiaHR0cHM6Ly90cmFuc2xhdGUuZ29vZ2xlYXBpcy5jb20vdHJhbnNsYXRlX2Evc2luZ2xlXCI7dmFyIGdvb2dsZT17ZmV0Y2g6KHtrZXk6ZSxmcm9tOmEsdG86bix0ZXh0Oml9KT0+W2Ake2Jhc2V9P2NsaWVudD1ndHgmc2w9JHthfSZ0bD0ke259JmR0PXQmcT0ke2VuY29kZVVSSShpKX1gXSxwYXJzZTplPT5lLmpzb24oKS50aGVuKChlPT57aWYoIShlPWUmJmVbMF0mJmVbMF1bMF0mJmVbMF0ubWFwKChlPT5lWzBdKSkuam9pbihcIlwiKSkpdGhyb3cgbmV3IEVycm9yKFwiVHJhbnNsYXRpb24gbm90IGZvdW5kXCIpO3JldHVybiBlfSkpfSx5YW5kZXg9e25lZWRrZXk6ITAsZmV0Y2g6KHtrZXk6ZSxmcm9tOmEsdG86bix0ZXh0Oml9KT0+W2BodHRwczovL3RyYW5zbGF0ZS55YW5kZXgubmV0L2FwaS92MS41L3RyLmpzb24vdHJhbnNsYXRlP2tleT0ke2V9Jmxhbmc9JHthfS0ke259JnRleHQ9JHtlbmNvZGVVUklDb21wb25lbnQoaSl9YCx7bWV0aG9kOlwiUE9TVFwiLGJvZHk6XCJcIn1dLHBhcnNlOmU9PmUuanNvbigpLnRoZW4oKGU9PntpZigyMDAhPT1lLmNvZGUpdGhyb3cgbmV3IEVycm9yKGUubWVzc2FnZSk7cmV0dXJuIGUudGV4dFswXX0pKX07Y29uc3QgbGlicmVVcmw9XCJodHRwczovL2xpYnJldHJhbnNsYXRlLmNvbS90cmFuc2xhdGVcIjt2YXIgbGlicmU9e25lZWRrZXk6ITEsZmV0Y2g6KHt1cmw6ZT1saWJyZVVybCxrZXk6YSxmcm9tOm4sdG86aSx0ZXh0OnJ9KT0+W2Use21ldGhvZDpcIlBPU1RcIixib2R5OkpTT04uc3RyaW5naWZ5KHtxOnIsc291cmNlOm4sdGFyZ2V0OmksYXBpX2tleTphfSksaGVhZGVyczp7XCJDb250ZW50LVR5cGVcIjpcImFwcGxpY2F0aW9uL2pzb25cIn19XSxwYXJzZTplPT5lLmpzb24oKS50aGVuKChlPT57aWYoIWUpdGhyb3cgbmV3IEVycm9yKFwiTm8gcmVzcG9uc2UgZm91bmRcIik7aWYoZS5lcnJvcil0aHJvdyBuZXcgRXJyb3IoZS5lcnJvcik7aWYoIWUudHJhbnNsYXRlZFRleHQpdGhyb3cgbmV3IEVycm9yKFwiTm8gcmVzcG9uc2UgZm91bmRcIik7cmV0dXJuIGUudHJhbnNsYXRlZFRleHR9KSl9LGRlZXBsPXtuZWVka2V5OiEwLGZldGNoOih7a2V5OmUsZnJvbTphLHRvOm4sdGV4dDppfSk9PltgaHR0cHM6Ly9hcGkkey86ZngkLy50ZXN0KGUpP1wiLWZyZWVcIjpcIlwifS5kZWVwbC5jb20vdjIvdHJhbnNsYXRlP2F1dGhfa2V5PSR7ZX0mc291cmNlX2xhbmc9JHthfSZ0YXJnZXRfbGFuZz0ke259JnRleHQ9JHtpPWVuY29kZVVSSUNvbXBvbmVudChpKX1gLHttZXRob2Q6XCJQT1NUXCIsYm9keTpcIlwifV0scGFyc2U6YXN5bmMgZT0+e2lmKCFlLm9rKXtpZig0MDM9PT1lLnN0YXR1cyl0aHJvdyBuZXcgRXJyb3IoXCJBdXRoIEVycm9yLCBwbGVhc2UgcmV2aWV3IHRoZSBrZXkgZm9yIERlZXBMXCIpO3Rocm93IG5ldyBFcnJvcihgRXJyb3IgJHtlLnN0YXR1c31gKX1yZXR1cm4gZS5qc29uKCkudGhlbigoZT0+ZS50cmFuc2xhdGlvbnNbMF0udGV4dCkpfX0sZW5naW5lcz17Z29vZ2xlOmdvb2dsZSx5YW5kZXg6eWFuZGV4LGxpYnJlOmxpYnJlLGRlZXBsOmRlZXBsfTtjb25zdCBUcmFuc2xhdGU9ZnVuY3Rpb24oZT17fSl7aWYoISh0aGlzIGluc3RhbmNlb2YgVHJhbnNsYXRlKSlyZXR1cm4gbmV3IFRyYW5zbGF0ZShlKTtjb25zdCBhPXtmcm9tOlwiZW5cIix0bzpcImVuXCIsY2FjaGU6dm9pZCAwLGxhbmd1YWdlczpsYW5ndWFnZXMsZW5naW5lczplbmdpbmVzLGVuZ2luZTpcImdvb2dsZVwiLGtleXM6e319LG49YXN5bmMoZSxhPXt9KT0+e1wic3RyaW5nXCI9PXR5cGVvZiBhJiYoYT17dG86YX0pLGEudGV4dD1lLGEuZnJvbT1sYW5ndWFnZXMoYS5mcm9tfHxuLmZyb20pLGEudG89bGFuZ3VhZ2VzKGEudG98fG4udG8pLGEuY2FjaGU9YS5jYWNoZXx8bi5jYWNoZSxhLmVuZ2luZXM9YS5lbmdpbmVzfHx7fSxhLmVuZ2luZT1hLmVuZ2luZXx8bi5lbmdpbmUsYS51cmw9YS51cmx8fG4udXJsLGEuaWQ9YS5pZHx8YCR7YS51cmx9OiR7YS5mcm9tfToke2EudG99OiR7YS5lbmdpbmV9OiR7YS50ZXh0fWAsYS5rZXlzPWEua2V5c3x8bi5rZXlzfHx7fTtmb3IobGV0IGUgaW4gbi5rZXlzKWEua2V5c1tlXT1hLmtleXNbZV18fG4ua2V5c1tlXTthLmtleT1hLmtleXx8bi5rZXl8fGEua2V5c1thLmVuZ2luZV07Y29uc3QgaT1hLmVuZ2luZXNbYS5lbmdpbmVdfHxuLmVuZ2luZXNbYS5lbmdpbmVdLHI9ZXhwJDEuZ2V0KGEuaWQpO2lmKHIpcmV0dXJuIFByb21pc2UucmVzb2x2ZShyKTtpZihhLnRvPT09YS5mcm9tKXJldHVybiBQcm9taXNlLnJlc29sdmUoYS50ZXh0KTtpZihpLm5lZWRrZXkmJiFhLmtleSl0aHJvdyBuZXcgRXJyb3IoYFRoZSBlbmdpbmUgXCIke2EuZW5naW5lfVwiIG5lZWRzIGEga2V5LCBwbGVhc2UgcHJvdmlkZSBpdGApO2NvbnN0IHQ9aS5mZXRjaChhKTtyZXR1cm4gZmV0Y2goLi4udCkudGhlbihpLnBhcnNlKS50aGVuKChlPT5leHAkMS5zZXQoYS5pZCxlLGEuY2FjaGUpKSl9O2ZvcihsZXQgaSBpbiBhKW5baV09dm9pZCAwPT09ZVtpXT9hW2ldOmVbaV07cmV0dXJuIG59LGV4cD1uZXcgVHJhbnNsYXRlO2V4cC5UcmFuc2xhdGU9VHJhbnNsYXRlO2V4cG9ydHtleHAgYXMgZGVmYXVsdH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFNhbGVzZm9yY2VVaV8xID0gcmVxdWlyZShcIi4vcHJlc2VudGF0aW9uL3VpL1NhbGVzZm9yY2VVaVwiKTtcbihmdW5jdGlvbiAoKSB7XG4gICAgKDAsIFNhbGVzZm9yY2VVaV8xLnNldFRzTGliSW5VaSkoKTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=