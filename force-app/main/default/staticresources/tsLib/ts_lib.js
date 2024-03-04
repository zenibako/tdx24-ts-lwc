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
const google_translate_api_x_1 = __importDefault(__webpack_require__(/*! google-translate-api-x */ "./node_modules/google-translate-api-x/index.cjs"));
class GoogleDataSource {
    async translate(text, to) {
        const translation = await (0, google_translate_api_x_1.default)(text, { to });
        console.log(`Text: ${text}`);
        console.log(`Translation: ${translation.text}`);
        return translation.text;
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
    window.ts_lib = controllers;
}
exports.setTsLibInUi = setTsLibInUi;


/***/ }),

/***/ "./node_modules/google-translate-api-x/index.cjs":
/*!*******************************************************!*\
  !*** ./node_modules/google-translate-api-x/index.cjs ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const translate = __webpack_require__(/*! ./lib/translate.cjs */ "./node_modules/google-translate-api-x/lib/translate.cjs");
const Translator = __webpack_require__(/*! ./lib/Translator.cjs */ "./node_modules/google-translate-api-x/lib/Translator.cjs");
const singleTranslate = __webpack_require__(/*! ./lib/translation/singleTranslate.cjs */ "./node_modules/google-translate-api-x/lib/translation/singleTranslate.cjs");
const batchTranslate = __webpack_require__(/*! ./lib/translation/batchTranslate.cjs */ "./node_modules/google-translate-api-x/lib/translation/batchTranslate.cjs");
const { langs, isSupported, getCode } = __webpack_require__(/*! ./lib/languages.cjs */ "./node_modules/google-translate-api-x/lib/languages.cjs");
const speak = __webpack_require__(/*! ./lib/speak.cjs */ "./node_modules/google-translate-api-x/lib/speak.cjs");

module.exports = translate;
module.exports.translate = translate;
module.exports.Translator = Translator;
module.exports.singleTranslate = singleTranslate;
module.exports.batchTranslate = batchTranslate;
module.exports.languages = langs;
module.exports.isSupported = isSupported;
module.exports.getCode = getCode;
module.exports.speak = speak;

/***/ }),

/***/ "./node_modules/google-translate-api-x/lib/Translator.cjs":
/*!****************************************************************!*\
  !*** ./node_modules/google-translate-api-x/lib/Translator.cjs ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const { DEFAULT_OPTIONS } = __webpack_require__(/*! ./defaults.cjs */ "./node_modules/google-translate-api-x/lib/defaults.cjs");
const translate = __webpack_require__(/*! ./translate.cjs */ "./node_modules/google-translate-api-x/lib/translate.cjs");

module.exports = class {
	options;
	constructor(options) {
		this.options = {...DEFAULT_OPTIONS, ...options};
	}

	translate(input, options) {
		options = {...this.options, ...options};
		return translate(input, options);
	}
};

/***/ }),

/***/ "./node_modules/google-translate-api-x/lib/defaults.cjs":
/*!**************************************************************!*\
  !*** ./node_modules/google-translate-api-x/lib/defaults.cjs ***!
  \**************************************************************/
/***/ ((module) => {


const TRANSLATE_PATH = 'https://translate.google.';

const DEFAULT_OPTIONS = {
	from: 'auto',
	to: 'en',
	autoCorrect: false,
	tld: 'com',
	requestFunction(url, fetchinit) { return fetch(url, fetchinit); },
	requestOptions: {
		credentials: 'omit',
		headers: {}	
	},
	fallbackBatch: true,
	forceBatch: true,
	forceFrom: false,
	forceTo: false,
	rejectOnPartialFail: true,
};

Object.freeze(DEFAULT_OPTIONS.requestOptions);
Object.freeze(DEFAULT_OPTIONS);

module.exports = { DEFAULT_OPTIONS, TRANSLATE_PATH };

/***/ }),

/***/ "./node_modules/google-translate-api-x/lib/languages.cjs":
/*!***************************************************************!*\
  !*** ./node_modules/google-translate-api-x/lib/languages.cjs ***!
  \***************************************************************/
/***/ ((module) => {


/**
 *
 * Generated from https://translate.google.com
 *
 * The languages that Google Translate supports (as of 5/15/16) alongside with their ISO 639-1 codes
 * See https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
 */

const langs = {
    'auto': 'Automatic',
    'auto': 'Detect language',
    'af': 'Afrikaans',
    'sq': 'Albanian',
    'am': 'Amharic',
    'ar': 'Arabic',
    'hy': 'Armenian',
    'as': 'Assamese',
    'ay': 'Aymara',
    'az': 'Azerbaijani',
    'bm': 'Bambara',
    'eu': 'Basque',
    'be': 'Belarusian',
    'bn': 'Bengali',
    'bho': 'Bhojpuri',
    'bs': 'Bosnian',
    'bg': 'Bulgarian',
    'ca': 'Catalan',
    'ceb': 'Cebuano',
    'ny': 'Chichewa',
    'zh-CN': 'Chinese (Simplified)',
    'zh-TW': 'Chinese (Traditional)',
    'co': 'Corsican',
    'hr': 'Croatian',
    'cs': 'Czech',
    'da': 'Danish',
    'dv': 'Dhivehi',
    'doi': 'Dogri',
    'nl': 'Dutch',
    'en': 'English',
    'eo': 'Esperanto',
    'et': 'Estonian',
    'ee': 'Ewe',
    'tl': 'Filipino',
    'fi': 'Finnish',
    'fr': 'French',
    'fy': 'Frisian',
    'gl': 'Galician',
    'ka': 'Georgian',
    'de': 'German',
    'el': 'Greek',
    'gn': 'Guarani',
    'gu': 'Gujarati',
    'ht': 'Haitian Creole',
    'ha': 'Hausa',
    'haw': 'Hawaiian',
    'iw': 'Hebrew',
    'he': 'Hebrew',
    'hi': 'Hindi',
    'hmn': 'Hmong',
    'hu': 'Hungarian',
    'is': 'Icelandic',
    'ig': 'Igbo',
    'ilo': 'Ilocano',
    'id': 'Indonesian',
    'ga': 'Irish',
    'it': 'Italian',
    'ja': 'Japanese',
    'jw': 'Javanese',
    'kn': 'Kannada',
    'kk': 'Kazakh',
    'km': 'Khmer',
    'rw': 'Kinyarwanda',
    'gom': 'Konkani',
    'ko': 'Korean',
    'kri': 'Krio',
    'ku': 'Kurdish (Kurmanji)',
    'ckb': 'Kurdish (Sorani)',
    'ky': 'Kyrgyz',
    'lo': 'Lao',
    'la': 'Latin',
    'lv': 'Latvian',
    'ln': 'Lingala',
    'lt': 'Lithuanian',
    'lg': 'Luganda',
    'lb': 'Luxembourgish',
    'mk': 'Macedonian',
    'mai': 'Maithili',
    'mg': 'Malagasy',
    'ms': 'Malay',
    'ml': 'Malayalam',
    'mt': 'Maltese',
    'mi': 'Maori',
    'mr': 'Marathi',
    'mni-Mtei': 'Meiteilon (Manipuri)',
    'lus': 'Mizo',
    'mn': 'Mongolian',
    'my': 'Myanmar (Burmese)',
    'ne': 'Nepali',
    'no': 'Norwegian',
    'or': 'Odia (Oriya)',
    'om': 'Oromo',
    'ps': 'Pashto',
    'fa': 'Persian',
    'pl': 'Polish',
    'pt': 'Portuguese',
    'pa': 'Punjabi',
    'qu': 'Quechua',
    'ro': 'Romanian',
    'ru': 'Russian',
    'sm': 'Samoan',
    'sa': 'Sanskrit',
    'gd': 'Scots Gaelic',
    'nso': 'Sepedi',
    'sr': 'Serbian',
    'st': 'Sesotho',
    'sn': 'Shona',
    'sd': 'Sindhi',
    'si': 'Sinhala',
    'sk': 'Slovak',
    'sl': 'Slovenian',
    'so': 'Somali',
    'es': 'Spanish',
    'su': 'Sundanese',
    'sw': 'Swahili',
    'sv': 'Swedish',
    'tg': 'Tajik',
    'ta': 'Tamil',
    'tt': 'Tatar',
    'te': 'Telugu',
    'th': 'Thai',
    'ti': 'Tigrinya',
    'ts': 'Tsonga',
    'tr': 'Turkish',
    'tk': 'Turkmen',
    'ak': 'Twi',
    'uk': 'Ukrainian',
    'ur': 'Urdu',
    'ug': 'Uyghur',
    'uz': 'Uzbek',
    'vi': 'Vietnamese',
    'cy': 'Welsh',
    'xh': 'Xhosa',
    'yi': 'Yiddish',
    'yo': 'Yoruba',
    'zu': 'Zulu'
};
/**
 * Returns the ISO 639-1 code of the desiredLang – if it is supported by Google Translate
 * @param {string} desiredLang – the name or the code(case sensitive) of the desired language
 * @returns {string|null} The ISO 639-1 code of the language or false if the language is not supported
 */
function getCode(desiredLang) {
    if (typeof desiredLang !== 'string') {
        return null;
    }

    if (langs[desiredLang]) {
        return desiredLang;
    }

    const keys = Object.keys(langs).filter(function (key) {
        if (typeof langs[key] !== 'string') {
            return false;
        }

        return langs[key].toLowerCase() === desiredLang.toLowerCase();
    });

	return keys[0] ?? null;
}

/**
 * Returns true if the desiredLang is supported by Google Translate and false otherwise
 * @param desiredLang – the ISO 639-1 code or the name of the desired language
 * @returns {boolean}
 */
function isSupported(desiredLang) {
	return getCode(desiredLang) !== null;
}

module.exports = { langs, isSupported, getCode };

/***/ }),

/***/ "./node_modules/google-translate-api-x/lib/speak.cjs":
/*!***********************************************************!*\
  !*** ./node_modules/google-translate-api-x/lib/speak.cjs ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const { DEFAULT_OPTIONS, TRANSLATE_PATH } = __webpack_require__(/*! ./defaults.cjs */ "./node_modules/google-translate-api-x/lib/defaults.cjs");
const { getCode } = __webpack_require__(/*! ./languages.cjs */ "./node_modules/google-translate-api-x/lib/languages.cjs");

module.exports = function (input, options) {
	options = {...DEFAULT_OPTIONS, ...options};
	// jQ1olc - is the specific id for spoken requests
	const rpcids = 'jQ1olc';
	const queryParams = new URLSearchParams({
		'rpcids': rpcids,
		'source-path': '/',
		'f.sid': '',
		'bl': '',
		'hl': 'en-US',
		'soc-app': 1,
		'soc-platform': 1,
		'soc-device': 1,
		'_reqid': Math.floor(1000 + (Math.random() * 9000)),
		'rt': 'c'
	});
	const url = TRANSLATE_PATH + options.tld + '/_/TranslateWebserverUi/data/batchexecute?' + queryParams.toString();

	const requestOptions = {...options.requestOptions, ...DEFAULT_OPTIONS.requestOptions};
	requestOptions.method = 'POST';
	requestOptions.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
	const sourceArray = Array.isArray(input) ? input : (typeof input === 'object' ? Object.values(input) : [input]);
	const freq = [];
	for (let i = 0; i < sourceArray.length; i++) {
		const text = sourceArray[i].text ?? sourceArray[i];
		if (text.length > 200) {
			return new Promise(() => {
				throw new Error('At least one of the inputs exceeded 200 characters, which is rejected by Google translate.  You should split it into a batch input with arrays/objects.', {cause: {input: {text}}});
			});
		}

		const forceTo = sourceArray[i].forceTo ?? options.forceTo;
		const to = sourceArray[i].to ?? options.to;
		const toIso = forceTo ? to : getCode(to);
		if (toIso === null) {
			return new Promise(() => {
				throw new Error(`To language ${to} unsupported, bypass this with setting forceTo to true if you're certain the iso is correct`, {cause: {options: {to}}});
			});
		}

		// i (converted to base 36 to minimize request length) is used as a unique indentifier to order responses
		const freqPart = [rpcids, JSON.stringify([text, toIso, true]), null, i.toString(36)];
		freq.push(freqPart);
	}

	requestOptions.body = 'f.req=' + encodeURIComponent(JSON.stringify([freq])) + '&';

	return options.requestFunction(url, requestOptions).then( async res => {
		if (!res.ok) {
			throw new Error(res.statusText, {cause: {options, url, response: res}});
		}
		res = await res.text();
		res = res.slice(6);

		let finalResult = Array.isArray(input) ? [] : (typeof input === 'object' ? {} : undefined);

		for (let chunk of res.split('\n')) {
			if (chunk[0] !== '[' || chunk[3] === 'e') {
				continue;
			}
			chunk = JSON.parse(chunk);
			for (let translation of chunk) {
				if (translation[0] !== 'wrb.fr') {
					continue;
				}
				const id = parseInt(translation[translation.length - 1], 36);
				if (translation[2] === null && options.rejectOnPartialFail) {
					throw new Error(
						'Partial TTS Request Fail: at least one TTS request failed, it was either invalid or more likely- rejected by the server.  ' +
						'You can try the request again and if it persists try a proxy, spacing out requests, and/or using a different tld.  ' +
						'If you would like to still speak other requests in a batch speak request even if one fails(the failed TTS will be ' +
						'set to `null`) pass the option `rejectOnPartialFail: false`',
						{cause: {input, url, options, requestOptions}}
					);
				}
				const result = (translation[2] !== null) ? JSON.parse(translation[2])[0] : null;
				if (Array.isArray(input)) {
					finalResult[id] = result;
				} else if (typeof input === 'object') {
					finalResult[Object.keys(input)[id]] = result;
				} else {
					finalResult = result;
				}
			}
		}
		return finalResult;
	});
};

/***/ }),

/***/ "./node_modules/google-translate-api-x/lib/translate.cjs":
/*!***************************************************************!*\
  !*** ./node_modules/google-translate-api-x/lib/translate.cjs ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const { DEFAULT_OPTIONS } = __webpack_require__(/*! ./defaults.cjs */ "./node_modules/google-translate-api-x/lib/defaults.cjs");
const batchTranslate = __webpack_require__(/*! ./translation/batchTranslate.cjs */ "./node_modules/google-translate-api-x/lib/translation/batchTranslate.cjs");
const singleTranslate = __webpack_require__(/*! ./translation/singleTranslate.cjs */ "./node_modules/google-translate-api-x/lib/translation/singleTranslate.cjs");

module.exports = function (input, options) {
	options = {...DEFAULT_OPTIONS, ...options};
	if (typeof input === 'string'  && !options.forceBatch) {
		return singleTranslate(input, options).catch(e => {
			if (options.fallbackBatch) {
				return batchTranslate(input, options);
			}
			throw e;
		});
	}
	return batchTranslate(input, options);
};

/***/ }),

/***/ "./node_modules/google-translate-api-x/lib/translation/TranslationResult.cjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/google-translate-api-x/lib/translation/TranslationResult.cjs ***!
  \***********************************************************************************/
/***/ ((module) => {


module.exports = class {
    text = '';
    pronunciation = undefined;
    from = {
        language: {
            didYouMean: undefined,
            iso: ''
        },
        text: {
            autoCorrected: undefined,
            value: '',
            didYouMean: undefined
        }
    };
    raw = undefined;
    constructor(raw) {
        this.raw = raw;
    }
};

/***/ }),

/***/ "./node_modules/google-translate-api-x/lib/translation/batchTranslate.cjs":
/*!********************************************************************************!*\
  !*** ./node_modules/google-translate-api-x/lib/translation/batchTranslate.cjs ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const { DEFAULT_OPTIONS, TRANSLATE_PATH } = __webpack_require__(/*! ../defaults.cjs */ "./node_modules/google-translate-api-x/lib/defaults.cjs");
const TranslationResult = __webpack_require__(/*! ./TranslationResult.cjs */ "./node_modules/google-translate-api-x/lib/translation/TranslationResult.cjs");
const { getCode } = __webpack_require__(/*! ../languages.cjs */ "./node_modules/google-translate-api-x/lib/languages.cjs");

module.exports = function (input, options) {
	options = {...DEFAULT_OPTIONS, ...options};

	// according to translate.google.com constant rpcids seems to have different values with different POST body format.
    // * MkEWBc - returns translation
    // * AVdN8 - return suggest
    // * exi25c - return some technical info
	const rpcids = 'MkEWBc';
	const queryParams = new URLSearchParams({
		'rpcids': rpcids,
		'source-path': '/',
		'f.sid': '', // as far as I can tell, what is input for f.sid and bl doesn't matter
		'bl': '',
		'hl': 'en-US',
		'soc-app': 1,
		'soc-platform': 1,
		'soc-device': 1,
		'_reqid': Math.floor(1000 + (Math.random() * 9000)),
		'rt': 'c'
	});
	const url = TRANSLATE_PATH + options.tld + '/_/TranslateWebserverUi/data/batchexecute?' + queryParams.toString();

	const requestOptions = {...options.requestOptions, ...DEFAULT_OPTIONS.requestOptions};
	requestOptions.method = 'POST';
	requestOptions.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
	
	const sourceArray = Array.isArray(input) ? input : (typeof input === 'object' ? Object.values(input) : [input]);
	let finalResult = Array.isArray(input) ? [] : (typeof input === 'object' ? {} : undefined);

	const freq = [];
	for (let i = 0; i < sourceArray.length; i++) {
		const text = sourceArray[i].text ?? sourceArray[i];

		const forceFrom = sourceArray[i].forceFrom ?? options.forceFrom;
		const from = sourceArray[i].from ?? options.from;
		const fromIso = forceFrom ? from : getCode(from);
		if (fromIso === null) {
			return new Promise(() => {
				throw new Error(`From language ${from} unsupported, bypass this with setting forceFrom to true if you're certain the iso is correct`, {cause: {options: {from}}});
			});
		}

		const forceTo = sourceArray[i].forceTo ?? options.forceTo;
		const to = sourceArray[i].to ?? options.to;
		const toIso = forceTo ? to : getCode(to);
		if (toIso === null) {
			return new Promise(() => {
				throw new Error(`To language ${to} unsupported, bypass this with setting forceTo to true if you're certain the iso is correct`, {cause: {options: {to}}});
			});
		}

		const autoCorrect = sourceArray[i].autoCorrect ?? options.autoCorrect;

		if (text.length === 0) {
			const result = new TranslationResult(text);
			result.text = text;
			result.from = fromIso;
			result.to = toIso;
			if (Array.isArray(input)) {
				finalResult[i] = result;
			} else if (typeof input === 'object') {
				finalResult[Object.keys(input)[i]] = result;
			} else {
				finalResult = result;
			}
			continue;
		}

		// i (converted to base 36 to minimize request length) is used as a unique indentifier to order responses
		const freqPart = [rpcids, JSON.stringify([[text, fromIso, toIso, autoCorrect], [null]]), null, i.toString(36)];
		freq.push(freqPart);
	}

	if (freq.length === 0) {
		return new Promise((resolve) => {
			resolve(finalResult);
		});
	}

	requestOptions.body = 'f.req=' + encodeURIComponent(JSON.stringify([freq])) + '&';

	return options.requestFunction(url, requestOptions).then( async res => {
		if (!res.ok) {
			throw new Error(res.statusText, {cause: {options, url, response: res}});
		}
		res = await res.text();
		res = res.slice(6);

		for (let chunk of res.split('\n')) {
			if (chunk[0] !== '[' || chunk[3] === 'e') {
				continue;
			}
			chunk = JSON.parse(chunk);
			for (let translation of chunk) {
				if (translation[0] !== 'wrb.fr') {
					continue;
				}
				const id = parseInt(translation[translation.length - 1], 36);
				if (translation[2] === null) {
					if (!options.rejectOnPartialFail) {
						if (Array.isArray(input)) {
							finalResult[id] = null;
						} else if (typeof input === 'object') {
							finalResult[Object.keys(input)[id]] = null;
						} else {
							finalResult = null;
						}
						continue;
					}
					throw new Error(
						'Partial Translation Request Fail: at least one translation failed, it was either invalid or more likely- rejected by the server.  ' +
						'You can try the request again and if it persists try a proxy, spacing out requests, and/or using a different tld.  ' +
						'If you would like to translate other requests in a batch translation even if one fails(the failed translation will be ' +
						'set to `null`) pass the option `rejectOnPartialFail: false`.  You can also try using the singleTranslate endpoint with: `forceBatch: false`',
						{cause: {input, url, options, requestOptions}}
					);
				}
				translation = JSON.parse(translation[2]);
				const result = new TranslationResult(translation);

				if (translation[1][0][0][5] === undefined || translation[1][0][0][5] === null) {
					// translation not found, could be a hyperlink or gender-specific translation?
					result.text = translation[1][0][0][0];
				} else {
					result.text = translation[1][0][0][5]
						.map(function (obj) {
							return obj[0];
						})
						.filter(Boolean)
						// Google api seems to split text per sentences by <dot><space>
						// So we join text back with spaces.
						// See: https://github.com/vitalets/google-translate-api/issues/73
						.join(' ');
				}
				result.pronunciation = translation[1][0][0][1];

				// From language
				result.from.language.didYouMean = true;
				if (translation[0] && translation[0][1] && translation[0][1][1]) {
					result.from.language.didYouMean = true;
					result.from.language.iso = translation[0][1][1][0];
				} else if (translation[1][3] === 'auto') {
					result.from.language.iso = translation[2];
				} else {
					result.from.language.iso = translation[1][3];
				}

				// Did you mean & autocorrect
				result.from.text.autoCorrected = false;
				result.from.text.didYouMean = false;
				if (translation[0] && translation[0][1] && translation[0][1][0]) {
					let str = translation[0][1][0][0][1];

					str = str.replace(/<b>(<i>)?/g, '[');
					str = str.replace(/(<\/i>)?<\/b>/g, ']');

					result.from.text.value = str;

					if (translation[0][1][0][2] === 1) {
						result.from.text.autoCorrected = true;
					} else {
						result.from.text.didYouMean = true;
					}
				}

				if (Array.isArray(input)) {
					finalResult[id] = result;
				} else if (typeof input === 'object') {
					finalResult[Object.keys(input)[id]] = result;
				} else {
					finalResult = result;
				}
			}
		}
		return finalResult;
	});
};

/***/ }),

/***/ "./node_modules/google-translate-api-x/lib/translation/singleTranslate.cjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/google-translate-api-x/lib/translation/singleTranslate.cjs ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const { DEFAULT_OPTIONS, TRANSLATE_PATH } = __webpack_require__(/*! ../defaults.cjs */ "./node_modules/google-translate-api-x/lib/defaults.cjs");
const TranslationResult = __webpack_require__(/*! ./TranslationResult.cjs */ "./node_modules/google-translate-api-x/lib/translation/TranslationResult.cjs");
const { getCode } = __webpack_require__(/*! ../languages.cjs */ "./node_modules/google-translate-api-x/lib/languages.cjs");

module.exports = function (input, options) {
	options = {...DEFAULT_OPTIONS, ...options, ...input.options};
	const requestOptions = {...DEFAULT_OPTIONS.requestOptions, ...options.requestOptions};
	requestOptions.method = 'POST';
	requestOptions.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

	const fromIso = options.forceFrom ? options.from : getCode(options.from);
	if (fromIso === null) {
		return new Promise(() => {
			throw new Error(`From language ${options.from} unsupported, bypass this with setting forceFrom to true if you're certain the iso is correct`, {cause: {options}});
		});
	}

	const toIso = options.forceTo ? options.to : getCode(options.to);
	if (toIso === null) {
		return new Promise(() => {
			throw new Error(`To language ${options.to} unsupported, bypass this with setting forceTo to true if you're certain the iso is correct`, {cause: {options}});
		});
	}

	const params = {
		sl: fromIso,
		tl: toIso,
		q: input.text ?? input
	};

	if (params.q.length === 0) {
		return new Promise((resolve) => {
			const result = new TranslationResult(params.q);
			result.from = fromIso;
			result.to = toIso;
			resolve(result);
		});
	}

	requestOptions.body = new URLSearchParams(params).toString();

	const url = TRANSLATE_PATH + options.tld + '/translate_a/single?client=at&dt=t&dt=rm&dj=1';

	return options.requestFunction(url, requestOptions).then(res => {
		if (res.ok) {
			return res.json();
		}
		throw new Error(res.statusText, {cause: {options, url, response: res}});
	}).then(res => {
		const result = new TranslationResult(res);
		result.from = res.src ?? options.from;
		result.to = options.to;
		for (const sentence of res.sentences) {
			if (typeof sentence.trans !== 'undefined') {
				result.text += sentence.trans;
			} else if (typeof sentence.translit !== 'undefined') {
				result.pronunciation = sentence.translit;
			}
		}
		return result;
	});
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7OztBQ3RCYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCx1QkFBdUIsbUJBQU8sQ0FBQyw2RUFBZ0M7QUFDL0Q7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cy1zZGsvLi9zcmMvZGF0YS9kYXRhLXNvdXJjZXMvR29vZ2xlRGF0YVNvdXJjZS50cyIsIndlYnBhY2s6Ly90cy1zZGsvLi9zcmMvZGF0YS9yZXBvc2l0b3JpZXMvRnJlbmNoVHJhbnNsYXRpb25SZXBvc2l0b3J5LnRzIiwid2VicGFjazovL3RzLXNkay8uL3NyYy9kb21haW4vZW50aXRpZXMvVHJhbnNsYXRpb24udHMiLCJ3ZWJwYWNrOi8vdHMtc2RrLy4vc3JjL2RvbWFpbi91c2UtY2FzZXMvR2V0RnJlbmNoVHJhbnNsYXRpb25Vc2VDYXNlLnRzIiwid2VicGFjazovL3RzLXNkay8uL3NyYy9wcmVzZW50YXRpb24vY29udHJvbGxlcnMvVHJhbnNsYXRpb25Db250cm9sbGVyLnRzIiwid2VicGFjazovL3RzLXNkay8uL3NyYy9wcmVzZW50YXRpb24vdWkvU2FsZXNmb3JjZVVpLnRzIiwid2VicGFjazovL3RzLXNkay8uL25vZGVfbW9kdWxlcy9nb29nbGUtdHJhbnNsYXRlLWFwaS14L2luZGV4LmNqcyIsIndlYnBhY2s6Ly90cy1zZGsvLi9ub2RlX21vZHVsZXMvZ29vZ2xlLXRyYW5zbGF0ZS1hcGkteC9saWIvVHJhbnNsYXRvci5janMiLCJ3ZWJwYWNrOi8vdHMtc2RrLy4vbm9kZV9tb2R1bGVzL2dvb2dsZS10cmFuc2xhdGUtYXBpLXgvbGliL2RlZmF1bHRzLmNqcyIsIndlYnBhY2s6Ly90cy1zZGsvLi9ub2RlX21vZHVsZXMvZ29vZ2xlLXRyYW5zbGF0ZS1hcGkteC9saWIvbGFuZ3VhZ2VzLmNqcyIsIndlYnBhY2s6Ly90cy1zZGsvLi9ub2RlX21vZHVsZXMvZ29vZ2xlLXRyYW5zbGF0ZS1hcGkteC9saWIvc3BlYWsuY2pzIiwid2VicGFjazovL3RzLXNkay8uL25vZGVfbW9kdWxlcy9nb29nbGUtdHJhbnNsYXRlLWFwaS14L2xpYi90cmFuc2xhdGUuY2pzIiwid2VicGFjazovL3RzLXNkay8uL25vZGVfbW9kdWxlcy9nb29nbGUtdHJhbnNsYXRlLWFwaS14L2xpYi90cmFuc2xhdGlvbi9UcmFuc2xhdGlvblJlc3VsdC5janMiLCJ3ZWJwYWNrOi8vdHMtc2RrLy4vbm9kZV9tb2R1bGVzL2dvb2dsZS10cmFuc2xhdGUtYXBpLXgvbGliL3RyYW5zbGF0aW9uL2JhdGNoVHJhbnNsYXRlLmNqcyIsIndlYnBhY2s6Ly90cy1zZGsvLi9ub2RlX21vZHVsZXMvZ29vZ2xlLXRyYW5zbGF0ZS1hcGkteC9saWIvdHJhbnNsYXRpb24vc2luZ2xlVHJhbnNsYXRlLmNqcyIsIndlYnBhY2s6Ly90cy1zZGsvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHMtc2RrLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Hb29nbGVEYXRhU291cmNlID0gdm9pZCAwO1xuY29uc3QgZ29vZ2xlX3RyYW5zbGF0ZV9hcGlfeF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJnb29nbGUtdHJhbnNsYXRlLWFwaS14XCIpKTtcbmNsYXNzIEdvb2dsZURhdGFTb3VyY2Uge1xuICAgIGFzeW5jIHRyYW5zbGF0ZSh0ZXh0LCB0bykge1xuICAgICAgICBjb25zdCB0cmFuc2xhdGlvbiA9IGF3YWl0ICgwLCBnb29nbGVfdHJhbnNsYXRlX2FwaV94XzEuZGVmYXVsdCkodGV4dCwgeyB0byB9KTtcbiAgICAgICAgY29uc29sZS5sb2coYFRleHQ6ICR7dGV4dH1gKTtcbiAgICAgICAgY29uc29sZS5sb2coYFRyYW5zbGF0aW9uOiAke3RyYW5zbGF0aW9uLnRleHR9YCk7XG4gICAgICAgIHJldHVybiB0cmFuc2xhdGlvbi50ZXh0O1xuICAgIH1cbn1cbmV4cG9ydHMuR29vZ2xlRGF0YVNvdXJjZSA9IEdvb2dsZURhdGFTb3VyY2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRnJlbmNoVHJhbnNsYXRpb25SZXBvc2l0b3J5ID0gdm9pZCAwO1xuY29uc3QgVHJhbnNsYXRpb25fMSA9IHJlcXVpcmUoXCIuLi8uLi9kb21haW4vZW50aXRpZXMvVHJhbnNsYXRpb25cIik7XG5jbGFzcyBGcmVuY2hUcmFuc2xhdGlvblJlcG9zaXRvcnkge1xuICAgIGdvb2dsZURhdGE7XG4gICAgY29uc3RydWN0b3IoZ29vZ2xlRGF0YSkge1xuICAgICAgICB0aGlzLmdvb2dsZURhdGEgPSBnb29nbGVEYXRhO1xuICAgIH1cbiAgICBhc3luYyBnZXQodGV4dCwgdGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gYXdhaXQgdGhpcy5nb29nbGVEYXRhLnRyYW5zbGF0ZSh0ZXh0LCB0YXJnZXQpO1xuICAgICAgICByZXR1cm4gbmV3IFRyYW5zbGF0aW9uXzEuVHJhbnNsYXRpb24odGV4dCwgdHJhbnNsYXRpb24sIHRhcmdldCk7XG4gICAgfVxufVxuZXhwb3J0cy5GcmVuY2hUcmFuc2xhdGlvblJlcG9zaXRvcnkgPSBGcmVuY2hUcmFuc2xhdGlvblJlcG9zaXRvcnk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVHJhbnNsYXRpb24gPSB2b2lkIDA7XG5jbGFzcyBUcmFuc2xhdGlvbiB7XG4gICAgdGV4dDtcbiAgICB0cmFuc2xhdGlvbjtcbiAgICB0YXJnZXQ7XG4gICAgY29uc3RydWN0b3IodGV4dCwgdHJhbnNsYXRpb24sIHRhcmdldCkge1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLnRyYW5zbGF0aW9uID0gdHJhbnNsYXRpb247XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgIH1cbiAgICBnZXRTb3VyY2VUZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy50ZXh0O1xuICAgIH1cbiAgICBnZXRUcmFuc2xhdGVkVGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb247XG4gICAgfVxuICAgIGdldExhbmd1YWdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXJnZXQ7XG4gICAgfVxufVxuZXhwb3J0cy5UcmFuc2xhdGlvbiA9IFRyYW5zbGF0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdldEZyZW5jaFRyYW5zbGF0aW9uVXNlQ2FzZSA9IHZvaWQgMDtcbmNsYXNzIEdldEZyZW5jaFRyYW5zbGF0aW9uVXNlQ2FzZSB7XG4gICAgdHJhbnNsYXRpb25zO1xuICAgIGNvbnN0cnVjdG9yKHRyYW5zbGF0aW9uUmVwb3NpdG9yeSkge1xuICAgICAgICB0aGlzLnRyYW5zbGF0aW9ucyA9IHRyYW5zbGF0aW9uUmVwb3NpdG9yeTtcbiAgICB9XG4gICAgYXN5bmMgZXhlY3V0ZSh0ZXh0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9ucy5nZXQodGV4dCwgXCJmclwiKTtcbiAgICB9XG59XG5leHBvcnRzLkdldEZyZW5jaFRyYW5zbGF0aW9uVXNlQ2FzZSA9IEdldEZyZW5jaFRyYW5zbGF0aW9uVXNlQ2FzZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5UcmFuc2xhdGlvbkNvbnRyb2xsZXIgPSB2b2lkIDA7XG5jb25zdCBHb29nbGVEYXRhU291cmNlXzEgPSByZXF1aXJlKFwiLi4vLi4vZGF0YS9kYXRhLXNvdXJjZXMvR29vZ2xlRGF0YVNvdXJjZVwiKTtcbmNvbnN0IEZyZW5jaFRyYW5zbGF0aW9uUmVwb3NpdG9yeV8xID0gcmVxdWlyZShcIi4uLy4uL2RhdGEvcmVwb3NpdG9yaWVzL0ZyZW5jaFRyYW5zbGF0aW9uUmVwb3NpdG9yeVwiKTtcbmNvbnN0IEdldEZyZW5jaFRyYW5zbGF0aW9uVXNlQ2FzZV8xID0gcmVxdWlyZShcIi4uLy4uL2RvbWFpbi91c2UtY2FzZXMvR2V0RnJlbmNoVHJhbnNsYXRpb25Vc2VDYXNlXCIpO1xuY2xhc3MgVHJhbnNsYXRpb25Db250cm9sbGVyIHtcbiAgICBzdGF0aWMgYXN5bmMgdHJhbnNsYXRlSW50b0ZyZW5jaCh0ZXh0KSB7XG4gICAgICAgIGNvbnN0IGdvb2dsZURhdGEgPSBuZXcgR29vZ2xlRGF0YVNvdXJjZV8xLkdvb2dsZURhdGFTb3VyY2UoKTtcbiAgICAgICAgY29uc3QgdHJhbnNsYXRpb25zID0gbmV3IEZyZW5jaFRyYW5zbGF0aW9uUmVwb3NpdG9yeV8xLkZyZW5jaFRyYW5zbGF0aW9uUmVwb3NpdG9yeShnb29nbGVEYXRhKTtcbiAgICAgICAgY29uc3QgdHJhbnNsYXRpb24gPSBhd2FpdCBuZXcgR2V0RnJlbmNoVHJhbnNsYXRpb25Vc2VDYXNlXzEuR2V0RnJlbmNoVHJhbnNsYXRpb25Vc2VDYXNlKHRyYW5zbGF0aW9ucykuZXhlY3V0ZSh0ZXh0KTtcbiAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uO1xuICAgIH1cbn1cbmV4cG9ydHMuVHJhbnNsYXRpb25Db250cm9sbGVyID0gVHJhbnNsYXRpb25Db250cm9sbGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnNldFRzTGliSW5VaSA9IHZvaWQgMDtcbmNvbnN0IFRyYW5zbGF0aW9uQ29udHJvbGxlcl8xID0gcmVxdWlyZShcIi4uL2NvbnRyb2xsZXJzL1RyYW5zbGF0aW9uQ29udHJvbGxlclwiKTtcbmNvbnN0IGNvbnRyb2xsZXJzID0ge1xuICAgIFRyYW5zbGF0aW9uQ29udHJvbGxlcjogVHJhbnNsYXRpb25Db250cm9sbGVyXzEuVHJhbnNsYXRpb25Db250cm9sbGVyXG59O1xuZnVuY3Rpb24gc2V0VHNMaWJJblVpKCkge1xuICAgIHdpbmRvdy50c19saWIgPSBjb250cm9sbGVycztcbn1cbmV4cG9ydHMuc2V0VHNMaWJJblVpID0gc2V0VHNMaWJJblVpO1xuIiwiJ3VzZSBzdHJpY3QnO1xyXG5jb25zdCB0cmFuc2xhdGUgPSByZXF1aXJlKCcuL2xpYi90cmFuc2xhdGUuY2pzJyk7XHJcbmNvbnN0IFRyYW5zbGF0b3IgPSByZXF1aXJlKCcuL2xpYi9UcmFuc2xhdG9yLmNqcycpO1xyXG5jb25zdCBzaW5nbGVUcmFuc2xhdGUgPSByZXF1aXJlKCcuL2xpYi90cmFuc2xhdGlvbi9zaW5nbGVUcmFuc2xhdGUuY2pzJyk7XHJcbmNvbnN0IGJhdGNoVHJhbnNsYXRlID0gcmVxdWlyZSgnLi9saWIvdHJhbnNsYXRpb24vYmF0Y2hUcmFuc2xhdGUuY2pzJyk7XHJcbmNvbnN0IHsgbGFuZ3MsIGlzU3VwcG9ydGVkLCBnZXRDb2RlIH0gPSByZXF1aXJlKCcuL2xpYi9sYW5ndWFnZXMuY2pzJyk7XHJcbmNvbnN0IHNwZWFrID0gcmVxdWlyZSgnLi9saWIvc3BlYWsuY2pzJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHRyYW5zbGF0ZTtcclxubW9kdWxlLmV4cG9ydHMudHJhbnNsYXRlID0gdHJhbnNsYXRlO1xyXG5tb2R1bGUuZXhwb3J0cy5UcmFuc2xhdG9yID0gVHJhbnNsYXRvcjtcclxubW9kdWxlLmV4cG9ydHMuc2luZ2xlVHJhbnNsYXRlID0gc2luZ2xlVHJhbnNsYXRlO1xyXG5tb2R1bGUuZXhwb3J0cy5iYXRjaFRyYW5zbGF0ZSA9IGJhdGNoVHJhbnNsYXRlO1xyXG5tb2R1bGUuZXhwb3J0cy5sYW5ndWFnZXMgPSBsYW5ncztcclxubW9kdWxlLmV4cG9ydHMuaXNTdXBwb3J0ZWQgPSBpc1N1cHBvcnRlZDtcclxubW9kdWxlLmV4cG9ydHMuZ2V0Q29kZSA9IGdldENvZGU7XHJcbm1vZHVsZS5leHBvcnRzLnNwZWFrID0gc3BlYWs7IiwiJ3VzZSBzdHJpY3QnO1xyXG5jb25zdCB7IERFRkFVTFRfT1BUSU9OUyB9ID0gcmVxdWlyZSgnLi9kZWZhdWx0cy5janMnKTtcclxuY29uc3QgdHJhbnNsYXRlID0gcmVxdWlyZSgnLi90cmFuc2xhdGUuY2pzJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIHtcclxuXHRvcHRpb25zO1xyXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuXHRcdHRoaXMub3B0aW9ucyA9IHsuLi5ERUZBVUxUX09QVElPTlMsIC4uLm9wdGlvbnN9O1xyXG5cdH1cclxuXHJcblx0dHJhbnNsYXRlKGlucHV0LCBvcHRpb25zKSB7XHJcblx0XHRvcHRpb25zID0gey4uLnRoaXMub3B0aW9ucywgLi4ub3B0aW9uc307XHJcblx0XHRyZXR1cm4gdHJhbnNsYXRlKGlucHV0LCBvcHRpb25zKTtcclxuXHR9XHJcbn07IiwiJ3VzZSBzdHJpY3QnO1xyXG5jb25zdCBUUkFOU0xBVEVfUEFUSCA9ICdodHRwczovL3RyYW5zbGF0ZS5nb29nbGUuJztcclxuXHJcbmNvbnN0IERFRkFVTFRfT1BUSU9OUyA9IHtcclxuXHRmcm9tOiAnYXV0bycsXHJcblx0dG86ICdlbicsXHJcblx0YXV0b0NvcnJlY3Q6IGZhbHNlLFxyXG5cdHRsZDogJ2NvbScsXHJcblx0cmVxdWVzdEZ1bmN0aW9uKHVybCwgZmV0Y2hpbml0KSB7IHJldHVybiBmZXRjaCh1cmwsIGZldGNoaW5pdCk7IH0sXHJcblx0cmVxdWVzdE9wdGlvbnM6IHtcclxuXHRcdGNyZWRlbnRpYWxzOiAnb21pdCcsXHJcblx0XHRoZWFkZXJzOiB7fVx0XHJcblx0fSxcclxuXHRmYWxsYmFja0JhdGNoOiB0cnVlLFxyXG5cdGZvcmNlQmF0Y2g6IHRydWUsXHJcblx0Zm9yY2VGcm9tOiBmYWxzZSxcclxuXHRmb3JjZVRvOiBmYWxzZSxcclxuXHRyZWplY3RPblBhcnRpYWxGYWlsOiB0cnVlLFxyXG59O1xyXG5cclxuT2JqZWN0LmZyZWV6ZShERUZBVUxUX09QVElPTlMucmVxdWVzdE9wdGlvbnMpO1xyXG5PYmplY3QuZnJlZXplKERFRkFVTFRfT1BUSU9OUyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHsgREVGQVVMVF9PUFRJT05TLCBUUkFOU0xBVEVfUEFUSCB9OyIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICpcbiAqIEdlbmVyYXRlZCBmcm9tIGh0dHBzOi8vdHJhbnNsYXRlLmdvb2dsZS5jb21cbiAqXG4gKiBUaGUgbGFuZ3VhZ2VzIHRoYXQgR29vZ2xlIFRyYW5zbGF0ZSBzdXBwb3J0cyAoYXMgb2YgNS8xNS8xNikgYWxvbmdzaWRlIHdpdGggdGhlaXIgSVNPIDYzOS0xIGNvZGVzXG4gKiBTZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGlzdF9vZl9JU09fNjM5LTFfY29kZXNcbiAqL1xuXG5jb25zdCBsYW5ncyA9IHtcbiAgICAnYXV0byc6ICdBdXRvbWF0aWMnLFxuICAgICdhdXRvJzogJ0RldGVjdCBsYW5ndWFnZScsXG4gICAgJ2FmJzogJ0FmcmlrYWFucycsXG4gICAgJ3NxJzogJ0FsYmFuaWFuJyxcbiAgICAnYW0nOiAnQW1oYXJpYycsXG4gICAgJ2FyJzogJ0FyYWJpYycsXG4gICAgJ2h5JzogJ0FybWVuaWFuJyxcbiAgICAnYXMnOiAnQXNzYW1lc2UnLFxuICAgICdheSc6ICdBeW1hcmEnLFxuICAgICdheic6ICdBemVyYmFpamFuaScsXG4gICAgJ2JtJzogJ0JhbWJhcmEnLFxuICAgICdldSc6ICdCYXNxdWUnLFxuICAgICdiZSc6ICdCZWxhcnVzaWFuJyxcbiAgICAnYm4nOiAnQmVuZ2FsaScsXG4gICAgJ2Jobyc6ICdCaG9qcHVyaScsXG4gICAgJ2JzJzogJ0Jvc25pYW4nLFxuICAgICdiZyc6ICdCdWxnYXJpYW4nLFxuICAgICdjYSc6ICdDYXRhbGFuJyxcbiAgICAnY2ViJzogJ0NlYnVhbm8nLFxuICAgICdueSc6ICdDaGljaGV3YScsXG4gICAgJ3poLUNOJzogJ0NoaW5lc2UgKFNpbXBsaWZpZWQpJyxcbiAgICAnemgtVFcnOiAnQ2hpbmVzZSAoVHJhZGl0aW9uYWwpJyxcbiAgICAnY28nOiAnQ29yc2ljYW4nLFxuICAgICdocic6ICdDcm9hdGlhbicsXG4gICAgJ2NzJzogJ0N6ZWNoJyxcbiAgICAnZGEnOiAnRGFuaXNoJyxcbiAgICAnZHYnOiAnRGhpdmVoaScsXG4gICAgJ2RvaSc6ICdEb2dyaScsXG4gICAgJ25sJzogJ0R1dGNoJyxcbiAgICAnZW4nOiAnRW5nbGlzaCcsXG4gICAgJ2VvJzogJ0VzcGVyYW50bycsXG4gICAgJ2V0JzogJ0VzdG9uaWFuJyxcbiAgICAnZWUnOiAnRXdlJyxcbiAgICAndGwnOiAnRmlsaXBpbm8nLFxuICAgICdmaSc6ICdGaW5uaXNoJyxcbiAgICAnZnInOiAnRnJlbmNoJyxcbiAgICAnZnknOiAnRnJpc2lhbicsXG4gICAgJ2dsJzogJ0dhbGljaWFuJyxcbiAgICAna2EnOiAnR2VvcmdpYW4nLFxuICAgICdkZSc6ICdHZXJtYW4nLFxuICAgICdlbCc6ICdHcmVlaycsXG4gICAgJ2duJzogJ0d1YXJhbmknLFxuICAgICdndSc6ICdHdWphcmF0aScsXG4gICAgJ2h0JzogJ0hhaXRpYW4gQ3Jlb2xlJyxcbiAgICAnaGEnOiAnSGF1c2EnLFxuICAgICdoYXcnOiAnSGF3YWlpYW4nLFxuICAgICdpdyc6ICdIZWJyZXcnLFxuICAgICdoZSc6ICdIZWJyZXcnLFxuICAgICdoaSc6ICdIaW5kaScsXG4gICAgJ2htbic6ICdIbW9uZycsXG4gICAgJ2h1JzogJ0h1bmdhcmlhbicsXG4gICAgJ2lzJzogJ0ljZWxhbmRpYycsXG4gICAgJ2lnJzogJ0lnYm8nLFxuICAgICdpbG8nOiAnSWxvY2FubycsXG4gICAgJ2lkJzogJ0luZG9uZXNpYW4nLFxuICAgICdnYSc6ICdJcmlzaCcsXG4gICAgJ2l0JzogJ0l0YWxpYW4nLFxuICAgICdqYSc6ICdKYXBhbmVzZScsXG4gICAgJ2p3JzogJ0phdmFuZXNlJyxcbiAgICAna24nOiAnS2FubmFkYScsXG4gICAgJ2trJzogJ0themFraCcsXG4gICAgJ2ttJzogJ0tobWVyJyxcbiAgICAncncnOiAnS2lueWFyd2FuZGEnLFxuICAgICdnb20nOiAnS29ua2FuaScsXG4gICAgJ2tvJzogJ0tvcmVhbicsXG4gICAgJ2tyaSc6ICdLcmlvJyxcbiAgICAna3UnOiAnS3VyZGlzaCAoS3VybWFuamkpJyxcbiAgICAnY2tiJzogJ0t1cmRpc2ggKFNvcmFuaSknLFxuICAgICdreSc6ICdLeXJneXonLFxuICAgICdsbyc6ICdMYW8nLFxuICAgICdsYSc6ICdMYXRpbicsXG4gICAgJ2x2JzogJ0xhdHZpYW4nLFxuICAgICdsbic6ICdMaW5nYWxhJyxcbiAgICAnbHQnOiAnTGl0aHVhbmlhbicsXG4gICAgJ2xnJzogJ0x1Z2FuZGEnLFxuICAgICdsYic6ICdMdXhlbWJvdXJnaXNoJyxcbiAgICAnbWsnOiAnTWFjZWRvbmlhbicsXG4gICAgJ21haSc6ICdNYWl0aGlsaScsXG4gICAgJ21nJzogJ01hbGFnYXN5JyxcbiAgICAnbXMnOiAnTWFsYXknLFxuICAgICdtbCc6ICdNYWxheWFsYW0nLFxuICAgICdtdCc6ICdNYWx0ZXNlJyxcbiAgICAnbWknOiAnTWFvcmknLFxuICAgICdtcic6ICdNYXJhdGhpJyxcbiAgICAnbW5pLU10ZWknOiAnTWVpdGVpbG9uIChNYW5pcHVyaSknLFxuICAgICdsdXMnOiAnTWl6bycsXG4gICAgJ21uJzogJ01vbmdvbGlhbicsXG4gICAgJ215JzogJ015YW5tYXIgKEJ1cm1lc2UpJyxcbiAgICAnbmUnOiAnTmVwYWxpJyxcbiAgICAnbm8nOiAnTm9yd2VnaWFuJyxcbiAgICAnb3InOiAnT2RpYSAoT3JpeWEpJyxcbiAgICAnb20nOiAnT3JvbW8nLFxuICAgICdwcyc6ICdQYXNodG8nLFxuICAgICdmYSc6ICdQZXJzaWFuJyxcbiAgICAncGwnOiAnUG9saXNoJyxcbiAgICAncHQnOiAnUG9ydHVndWVzZScsXG4gICAgJ3BhJzogJ1B1bmphYmknLFxuICAgICdxdSc6ICdRdWVjaHVhJyxcbiAgICAncm8nOiAnUm9tYW5pYW4nLFxuICAgICdydSc6ICdSdXNzaWFuJyxcbiAgICAnc20nOiAnU2Ftb2FuJyxcbiAgICAnc2EnOiAnU2Fuc2tyaXQnLFxuICAgICdnZCc6ICdTY290cyBHYWVsaWMnLFxuICAgICduc28nOiAnU2VwZWRpJyxcbiAgICAnc3InOiAnU2VyYmlhbicsXG4gICAgJ3N0JzogJ1Nlc290aG8nLFxuICAgICdzbic6ICdTaG9uYScsXG4gICAgJ3NkJzogJ1NpbmRoaScsXG4gICAgJ3NpJzogJ1NpbmhhbGEnLFxuICAgICdzayc6ICdTbG92YWsnLFxuICAgICdzbCc6ICdTbG92ZW5pYW4nLFxuICAgICdzbyc6ICdTb21hbGknLFxuICAgICdlcyc6ICdTcGFuaXNoJyxcbiAgICAnc3UnOiAnU3VuZGFuZXNlJyxcbiAgICAnc3cnOiAnU3dhaGlsaScsXG4gICAgJ3N2JzogJ1N3ZWRpc2gnLFxuICAgICd0Zyc6ICdUYWppaycsXG4gICAgJ3RhJzogJ1RhbWlsJyxcbiAgICAndHQnOiAnVGF0YXInLFxuICAgICd0ZSc6ICdUZWx1Z3UnLFxuICAgICd0aCc6ICdUaGFpJyxcbiAgICAndGknOiAnVGlncmlueWEnLFxuICAgICd0cyc6ICdUc29uZ2EnLFxuICAgICd0cic6ICdUdXJraXNoJyxcbiAgICAndGsnOiAnVHVya21lbicsXG4gICAgJ2FrJzogJ1R3aScsXG4gICAgJ3VrJzogJ1VrcmFpbmlhbicsXG4gICAgJ3VyJzogJ1VyZHUnLFxuICAgICd1Zyc6ICdVeWdodXInLFxuICAgICd1eic6ICdVemJlaycsXG4gICAgJ3ZpJzogJ1ZpZXRuYW1lc2UnLFxuICAgICdjeSc6ICdXZWxzaCcsXG4gICAgJ3hoJzogJ1hob3NhJyxcbiAgICAneWknOiAnWWlkZGlzaCcsXG4gICAgJ3lvJzogJ1lvcnViYScsXG4gICAgJ3p1JzogJ1p1bHUnXG59O1xuLyoqXG4gKiBSZXR1cm5zIHRoZSBJU08gNjM5LTEgY29kZSBvZiB0aGUgZGVzaXJlZExhbmcg4oCTIGlmIGl0IGlzIHN1cHBvcnRlZCBieSBHb29nbGUgVHJhbnNsYXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gZGVzaXJlZExhbmcg4oCTIHRoZSBuYW1lIG9yIHRoZSBjb2RlKGNhc2Ugc2Vuc2l0aXZlKSBvZiB0aGUgZGVzaXJlZCBsYW5ndWFnZVxuICogQHJldHVybnMge3N0cmluZ3xudWxsfSBUaGUgSVNPIDYzOS0xIGNvZGUgb2YgdGhlIGxhbmd1YWdlIG9yIGZhbHNlIGlmIHRoZSBsYW5ndWFnZSBpcyBub3Qgc3VwcG9ydGVkXG4gKi9cbmZ1bmN0aW9uIGdldENvZGUoZGVzaXJlZExhbmcpIHtcbiAgICBpZiAodHlwZW9mIGRlc2lyZWRMYW5nICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAobGFuZ3NbZGVzaXJlZExhbmddKSB7XG4gICAgICAgIHJldHVybiBkZXNpcmVkTGFuZztcbiAgICB9XG5cbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMobGFuZ3MpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgbGFuZ3Nba2V5XSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsYW5nc1trZXldLnRvTG93ZXJDYXNlKCkgPT09IGRlc2lyZWRMYW5nLnRvTG93ZXJDYXNlKCk7XG4gICAgfSk7XG5cblx0cmV0dXJuIGtleXNbMF0gPz8gbnVsbDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGRlc2lyZWRMYW5nIGlzIHN1cHBvcnRlZCBieSBHb29nbGUgVHJhbnNsYXRlIGFuZCBmYWxzZSBvdGhlcndpc2VcbiAqIEBwYXJhbSBkZXNpcmVkTGFuZyDigJMgdGhlIElTTyA2MzktMSBjb2RlIG9yIHRoZSBuYW1lIG9mIHRoZSBkZXNpcmVkIGxhbmd1YWdlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNTdXBwb3J0ZWQoZGVzaXJlZExhbmcpIHtcblx0cmV0dXJuIGdldENvZGUoZGVzaXJlZExhbmcpICE9PSBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgbGFuZ3MsIGlzU3VwcG9ydGVkLCBnZXRDb2RlIH07IiwiJ3VzZSBzdHJpY3QnO1xyXG5jb25zdCB7IERFRkFVTFRfT1BUSU9OUywgVFJBTlNMQVRFX1BBVEggfSA9IHJlcXVpcmUoJy4vZGVmYXVsdHMuY2pzJyk7XHJcbmNvbnN0IHsgZ2V0Q29kZSB9ID0gcmVxdWlyZSgnLi9sYW5ndWFnZXMuY2pzJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgb3B0aW9ucykge1xyXG5cdG9wdGlvbnMgPSB7Li4uREVGQVVMVF9PUFRJT05TLCAuLi5vcHRpb25zfTtcclxuXHQvLyBqUTFvbGMgLSBpcyB0aGUgc3BlY2lmaWMgaWQgZm9yIHNwb2tlbiByZXF1ZXN0c1xyXG5cdGNvbnN0IHJwY2lkcyA9ICdqUTFvbGMnO1xyXG5cdGNvbnN0IHF1ZXJ5UGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XHJcblx0XHQncnBjaWRzJzogcnBjaWRzLFxyXG5cdFx0J3NvdXJjZS1wYXRoJzogJy8nLFxyXG5cdFx0J2Yuc2lkJzogJycsXHJcblx0XHQnYmwnOiAnJyxcclxuXHRcdCdobCc6ICdlbi1VUycsXHJcblx0XHQnc29jLWFwcCc6IDEsXHJcblx0XHQnc29jLXBsYXRmb3JtJzogMSxcclxuXHRcdCdzb2MtZGV2aWNlJzogMSxcclxuXHRcdCdfcmVxaWQnOiBNYXRoLmZsb29yKDEwMDAgKyAoTWF0aC5yYW5kb20oKSAqIDkwMDApKSxcclxuXHRcdCdydCc6ICdjJ1xyXG5cdH0pO1xyXG5cdGNvbnN0IHVybCA9IFRSQU5TTEFURV9QQVRIICsgb3B0aW9ucy50bGQgKyAnL18vVHJhbnNsYXRlV2Vic2VydmVyVWkvZGF0YS9iYXRjaGV4ZWN1dGU/JyArIHF1ZXJ5UGFyYW1zLnRvU3RyaW5nKCk7XHJcblxyXG5cdGNvbnN0IHJlcXVlc3RPcHRpb25zID0gey4uLm9wdGlvbnMucmVxdWVzdE9wdGlvbnMsIC4uLkRFRkFVTFRfT1BUSU9OUy5yZXF1ZXN0T3B0aW9uc307XHJcblx0cmVxdWVzdE9wdGlvbnMubWV0aG9kID0gJ1BPU1QnO1xyXG5cdHJlcXVlc3RPcHRpb25zLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04JztcclxuXHRjb25zdCBzb3VyY2VBcnJheSA9IEFycmF5LmlzQXJyYXkoaW5wdXQpID8gaW5wdXQgOiAodHlwZW9mIGlucHV0ID09PSAnb2JqZWN0JyA/IE9iamVjdC52YWx1ZXMoaW5wdXQpIDogW2lucHV0XSk7XHJcblx0Y29uc3QgZnJlcSA9IFtdO1xyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgc291cmNlQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuXHRcdGNvbnN0IHRleHQgPSBzb3VyY2VBcnJheVtpXS50ZXh0ID8/IHNvdXJjZUFycmF5W2ldO1xyXG5cdFx0aWYgKHRleHQubGVuZ3RoID4gMjAwKSB7XHJcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdBdCBsZWFzdCBvbmUgb2YgdGhlIGlucHV0cyBleGNlZWRlZCAyMDAgY2hhcmFjdGVycywgd2hpY2ggaXMgcmVqZWN0ZWQgYnkgR29vZ2xlIHRyYW5zbGF0ZS4gIFlvdSBzaG91bGQgc3BsaXQgaXQgaW50byBhIGJhdGNoIGlucHV0IHdpdGggYXJyYXlzL29iamVjdHMuJywge2NhdXNlOiB7aW5wdXQ6IHt0ZXh0fX19KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgZm9yY2VUbyA9IHNvdXJjZUFycmF5W2ldLmZvcmNlVG8gPz8gb3B0aW9ucy5mb3JjZVRvO1xyXG5cdFx0Y29uc3QgdG8gPSBzb3VyY2VBcnJheVtpXS50byA/PyBvcHRpb25zLnRvO1xyXG5cdFx0Y29uc3QgdG9Jc28gPSBmb3JjZVRvID8gdG8gOiBnZXRDb2RlKHRvKTtcclxuXHRcdGlmICh0b0lzbyA9PT0gbnVsbCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge1xyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgVG8gbGFuZ3VhZ2UgJHt0b30gdW5zdXBwb3J0ZWQsIGJ5cGFzcyB0aGlzIHdpdGggc2V0dGluZyBmb3JjZVRvIHRvIHRydWUgaWYgeW91J3JlIGNlcnRhaW4gdGhlIGlzbyBpcyBjb3JyZWN0YCwge2NhdXNlOiB7b3B0aW9uczoge3RvfX19KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gaSAoY29udmVydGVkIHRvIGJhc2UgMzYgdG8gbWluaW1pemUgcmVxdWVzdCBsZW5ndGgpIGlzIHVzZWQgYXMgYSB1bmlxdWUgaW5kZW50aWZpZXIgdG8gb3JkZXIgcmVzcG9uc2VzXHJcblx0XHRjb25zdCBmcmVxUGFydCA9IFtycGNpZHMsIEpTT04uc3RyaW5naWZ5KFt0ZXh0LCB0b0lzbywgdHJ1ZV0pLCBudWxsLCBpLnRvU3RyaW5nKDM2KV07XHJcblx0XHRmcmVxLnB1c2goZnJlcVBhcnQpO1xyXG5cdH1cclxuXHJcblx0cmVxdWVzdE9wdGlvbnMuYm9keSA9ICdmLnJlcT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KFtmcmVxXSkpICsgJyYnO1xyXG5cclxuXHRyZXR1cm4gb3B0aW9ucy5yZXF1ZXN0RnVuY3Rpb24odXJsLCByZXF1ZXN0T3B0aW9ucykudGhlbiggYXN5bmMgcmVzID0+IHtcclxuXHRcdGlmICghcmVzLm9rKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihyZXMuc3RhdHVzVGV4dCwge2NhdXNlOiB7b3B0aW9ucywgdXJsLCByZXNwb25zZTogcmVzfX0pO1xyXG5cdFx0fVxyXG5cdFx0cmVzID0gYXdhaXQgcmVzLnRleHQoKTtcclxuXHRcdHJlcyA9IHJlcy5zbGljZSg2KTtcclxuXHJcblx0XHRsZXQgZmluYWxSZXN1bHQgPSBBcnJheS5pc0FycmF5KGlucHV0KSA/IFtdIDogKHR5cGVvZiBpbnB1dCA9PT0gJ29iamVjdCcgPyB7fSA6IHVuZGVmaW5lZCk7XHJcblxyXG5cdFx0Zm9yIChsZXQgY2h1bmsgb2YgcmVzLnNwbGl0KCdcXG4nKSkge1xyXG5cdFx0XHRpZiAoY2h1bmtbMF0gIT09ICdbJyB8fCBjaHVua1szXSA9PT0gJ2UnKSB7XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2h1bmsgPSBKU09OLnBhcnNlKGNodW5rKTtcclxuXHRcdFx0Zm9yIChsZXQgdHJhbnNsYXRpb24gb2YgY2h1bmspIHtcclxuXHRcdFx0XHRpZiAodHJhbnNsYXRpb25bMF0gIT09ICd3cmIuZnInKSB7XHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y29uc3QgaWQgPSBwYXJzZUludCh0cmFuc2xhdGlvblt0cmFuc2xhdGlvbi5sZW5ndGggLSAxXSwgMzYpO1xyXG5cdFx0XHRcdGlmICh0cmFuc2xhdGlvblsyXSA9PT0gbnVsbCAmJiBvcHRpb25zLnJlamVjdE9uUGFydGlhbEZhaWwpIHtcclxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcclxuXHRcdFx0XHRcdFx0J1BhcnRpYWwgVFRTIFJlcXVlc3QgRmFpbDogYXQgbGVhc3Qgb25lIFRUUyByZXF1ZXN0IGZhaWxlZCwgaXQgd2FzIGVpdGhlciBpbnZhbGlkIG9yIG1vcmUgbGlrZWx5LSByZWplY3RlZCBieSB0aGUgc2VydmVyLiAgJyArXHJcblx0XHRcdFx0XHRcdCdZb3UgY2FuIHRyeSB0aGUgcmVxdWVzdCBhZ2FpbiBhbmQgaWYgaXQgcGVyc2lzdHMgdHJ5IGEgcHJveHksIHNwYWNpbmcgb3V0IHJlcXVlc3RzLCBhbmQvb3IgdXNpbmcgYSBkaWZmZXJlbnQgdGxkLiAgJyArXHJcblx0XHRcdFx0XHRcdCdJZiB5b3Ugd291bGQgbGlrZSB0byBzdGlsbCBzcGVhayBvdGhlciByZXF1ZXN0cyBpbiBhIGJhdGNoIHNwZWFrIHJlcXVlc3QgZXZlbiBpZiBvbmUgZmFpbHModGhlIGZhaWxlZCBUVFMgd2lsbCBiZSAnICtcclxuXHRcdFx0XHRcdFx0J3NldCB0byBgbnVsbGApIHBhc3MgdGhlIG9wdGlvbiBgcmVqZWN0T25QYXJ0aWFsRmFpbDogZmFsc2VgJyxcclxuXHRcdFx0XHRcdFx0e2NhdXNlOiB7aW5wdXQsIHVybCwgb3B0aW9ucywgcmVxdWVzdE9wdGlvbnN9fVxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gKHRyYW5zbGF0aW9uWzJdICE9PSBudWxsKSA/IEpTT04ucGFyc2UodHJhbnNsYXRpb25bMl0pWzBdIDogbnVsbDtcclxuXHRcdFx0XHRpZiAoQXJyYXkuaXNBcnJheShpbnB1dCkpIHtcclxuXHRcdFx0XHRcdGZpbmFsUmVzdWx0W2lkXSA9IHJlc3VsdDtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ29iamVjdCcpIHtcclxuXHRcdFx0XHRcdGZpbmFsUmVzdWx0W09iamVjdC5rZXlzKGlucHV0KVtpZF1dID0gcmVzdWx0O1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRmaW5hbFJlc3VsdCA9IHJlc3VsdDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBmaW5hbFJlc3VsdDtcclxuXHR9KTtcclxufTsiLCIndXNlIHN0cmljdCc7XHJcbmNvbnN0IHsgREVGQVVMVF9PUFRJT05TIH0gPSByZXF1aXJlKCcuL2RlZmF1bHRzLmNqcycpO1xyXG5jb25zdCBiYXRjaFRyYW5zbGF0ZSA9IHJlcXVpcmUoJy4vdHJhbnNsYXRpb24vYmF0Y2hUcmFuc2xhdGUuY2pzJyk7XHJcbmNvbnN0IHNpbmdsZVRyYW5zbGF0ZSA9IHJlcXVpcmUoJy4vdHJhbnNsYXRpb24vc2luZ2xlVHJhbnNsYXRlLmNqcycpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5wdXQsIG9wdGlvbnMpIHtcclxuXHRvcHRpb25zID0gey4uLkRFRkFVTFRfT1BUSU9OUywgLi4ub3B0aW9uc307XHJcblx0aWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycgICYmICFvcHRpb25zLmZvcmNlQmF0Y2gpIHtcclxuXHRcdHJldHVybiBzaW5nbGVUcmFuc2xhdGUoaW5wdXQsIG9wdGlvbnMpLmNhdGNoKGUgPT4ge1xyXG5cdFx0XHRpZiAob3B0aW9ucy5mYWxsYmFja0JhdGNoKSB7XHJcblx0XHRcdFx0cmV0dXJuIGJhdGNoVHJhbnNsYXRlKGlucHV0LCBvcHRpb25zKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aHJvdyBlO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdHJldHVybiBiYXRjaFRyYW5zbGF0ZShpbnB1dCwgb3B0aW9ucyk7XHJcbn07IiwiJ3VzZSBzdHJpY3QnO1xyXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIHtcclxuICAgIHRleHQgPSAnJztcclxuICAgIHByb251bmNpYXRpb24gPSB1bmRlZmluZWQ7XHJcbiAgICBmcm9tID0ge1xyXG4gICAgICAgIGxhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgIGRpZFlvdU1lYW46IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgaXNvOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGV4dDoge1xyXG4gICAgICAgICAgICBhdXRvQ29ycmVjdGVkOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnJyxcclxuICAgICAgICAgICAgZGlkWW91TWVhbjogdW5kZWZpbmVkXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJhdyA9IHVuZGVmaW5lZDtcclxuICAgIGNvbnN0cnVjdG9yKHJhdykge1xyXG4gICAgICAgIHRoaXMucmF3ID0gcmF3O1xyXG4gICAgfVxyXG59OyIsIid1c2Ugc3RyaWN0JztcclxuY29uc3QgeyBERUZBVUxUX09QVElPTlMsIFRSQU5TTEFURV9QQVRIIH0gPSByZXF1aXJlKCcuLi9kZWZhdWx0cy5janMnKTtcclxuY29uc3QgVHJhbnNsYXRpb25SZXN1bHQgPSByZXF1aXJlKCcuL1RyYW5zbGF0aW9uUmVzdWx0LmNqcycpO1xyXG5jb25zdCB7IGdldENvZGUgfSA9IHJlcXVpcmUoJy4uL2xhbmd1YWdlcy5janMnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBvcHRpb25zKSB7XHJcblx0b3B0aW9ucyA9IHsuLi5ERUZBVUxUX09QVElPTlMsIC4uLm9wdGlvbnN9O1xyXG5cclxuXHQvLyBhY2NvcmRpbmcgdG8gdHJhbnNsYXRlLmdvb2dsZS5jb20gY29uc3RhbnQgcnBjaWRzIHNlZW1zIHRvIGhhdmUgZGlmZmVyZW50IHZhbHVlcyB3aXRoIGRpZmZlcmVudCBQT1NUIGJvZHkgZm9ybWF0LlxyXG4gICAgLy8gKiBNa0VXQmMgLSByZXR1cm5zIHRyYW5zbGF0aW9uXHJcbiAgICAvLyAqIEFWZE44IC0gcmV0dXJuIHN1Z2dlc3RcclxuICAgIC8vICogZXhpMjVjIC0gcmV0dXJuIHNvbWUgdGVjaG5pY2FsIGluZm9cclxuXHRjb25zdCBycGNpZHMgPSAnTWtFV0JjJztcclxuXHRjb25zdCBxdWVyeVBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xyXG5cdFx0J3JwY2lkcyc6IHJwY2lkcyxcclxuXHRcdCdzb3VyY2UtcGF0aCc6ICcvJyxcclxuXHRcdCdmLnNpZCc6ICcnLCAvLyBhcyBmYXIgYXMgSSBjYW4gdGVsbCwgd2hhdCBpcyBpbnB1dCBmb3IgZi5zaWQgYW5kIGJsIGRvZXNuJ3QgbWF0dGVyXHJcblx0XHQnYmwnOiAnJyxcclxuXHRcdCdobCc6ICdlbi1VUycsXHJcblx0XHQnc29jLWFwcCc6IDEsXHJcblx0XHQnc29jLXBsYXRmb3JtJzogMSxcclxuXHRcdCdzb2MtZGV2aWNlJzogMSxcclxuXHRcdCdfcmVxaWQnOiBNYXRoLmZsb29yKDEwMDAgKyAoTWF0aC5yYW5kb20oKSAqIDkwMDApKSxcclxuXHRcdCdydCc6ICdjJ1xyXG5cdH0pO1xyXG5cdGNvbnN0IHVybCA9IFRSQU5TTEFURV9QQVRIICsgb3B0aW9ucy50bGQgKyAnL18vVHJhbnNsYXRlV2Vic2VydmVyVWkvZGF0YS9iYXRjaGV4ZWN1dGU/JyArIHF1ZXJ5UGFyYW1zLnRvU3RyaW5nKCk7XHJcblxyXG5cdGNvbnN0IHJlcXVlc3RPcHRpb25zID0gey4uLm9wdGlvbnMucmVxdWVzdE9wdGlvbnMsIC4uLkRFRkFVTFRfT1BUSU9OUy5yZXF1ZXN0T3B0aW9uc307XHJcblx0cmVxdWVzdE9wdGlvbnMubWV0aG9kID0gJ1BPU1QnO1xyXG5cdHJlcXVlc3RPcHRpb25zLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04JztcclxuXHRcclxuXHRjb25zdCBzb3VyY2VBcnJheSA9IEFycmF5LmlzQXJyYXkoaW5wdXQpID8gaW5wdXQgOiAodHlwZW9mIGlucHV0ID09PSAnb2JqZWN0JyA/IE9iamVjdC52YWx1ZXMoaW5wdXQpIDogW2lucHV0XSk7XHJcblx0bGV0IGZpbmFsUmVzdWx0ID0gQXJyYXkuaXNBcnJheShpbnB1dCkgPyBbXSA6ICh0eXBlb2YgaW5wdXQgPT09ICdvYmplY3QnID8ge30gOiB1bmRlZmluZWQpO1xyXG5cclxuXHRjb25zdCBmcmVxID0gW107XHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzb3VyY2VBcnJheS5sZW5ndGg7IGkrKykge1xyXG5cdFx0Y29uc3QgdGV4dCA9IHNvdXJjZUFycmF5W2ldLnRleHQgPz8gc291cmNlQXJyYXlbaV07XHJcblxyXG5cdFx0Y29uc3QgZm9yY2VGcm9tID0gc291cmNlQXJyYXlbaV0uZm9yY2VGcm9tID8/IG9wdGlvbnMuZm9yY2VGcm9tO1xyXG5cdFx0Y29uc3QgZnJvbSA9IHNvdXJjZUFycmF5W2ldLmZyb20gPz8gb3B0aW9ucy5mcm9tO1xyXG5cdFx0Y29uc3QgZnJvbUlzbyA9IGZvcmNlRnJvbSA/IGZyb20gOiBnZXRDb2RlKGZyb20pO1xyXG5cdFx0aWYgKGZyb21Jc28gPT09IG51bGwpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHtcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYEZyb20gbGFuZ3VhZ2UgJHtmcm9tfSB1bnN1cHBvcnRlZCwgYnlwYXNzIHRoaXMgd2l0aCBzZXR0aW5nIGZvcmNlRnJvbSB0byB0cnVlIGlmIHlvdSdyZSBjZXJ0YWluIHRoZSBpc28gaXMgY29ycmVjdGAsIHtjYXVzZToge29wdGlvbnM6IHtmcm9tfX19KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgZm9yY2VUbyA9IHNvdXJjZUFycmF5W2ldLmZvcmNlVG8gPz8gb3B0aW9ucy5mb3JjZVRvO1xyXG5cdFx0Y29uc3QgdG8gPSBzb3VyY2VBcnJheVtpXS50byA/PyBvcHRpb25zLnRvO1xyXG5cdFx0Y29uc3QgdG9Jc28gPSBmb3JjZVRvID8gdG8gOiBnZXRDb2RlKHRvKTtcclxuXHRcdGlmICh0b0lzbyA9PT0gbnVsbCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge1xyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgVG8gbGFuZ3VhZ2UgJHt0b30gdW5zdXBwb3J0ZWQsIGJ5cGFzcyB0aGlzIHdpdGggc2V0dGluZyBmb3JjZVRvIHRvIHRydWUgaWYgeW91J3JlIGNlcnRhaW4gdGhlIGlzbyBpcyBjb3JyZWN0YCwge2NhdXNlOiB7b3B0aW9uczoge3RvfX19KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgYXV0b0NvcnJlY3QgPSBzb3VyY2VBcnJheVtpXS5hdXRvQ29ycmVjdCA/PyBvcHRpb25zLmF1dG9Db3JyZWN0O1xyXG5cclxuXHRcdGlmICh0ZXh0Lmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRjb25zdCByZXN1bHQgPSBuZXcgVHJhbnNsYXRpb25SZXN1bHQodGV4dCk7XHJcblx0XHRcdHJlc3VsdC50ZXh0ID0gdGV4dDtcclxuXHRcdFx0cmVzdWx0LmZyb20gPSBmcm9tSXNvO1xyXG5cdFx0XHRyZXN1bHQudG8gPSB0b0lzbztcclxuXHRcdFx0aWYgKEFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XHJcblx0XHRcdFx0ZmluYWxSZXN1bHRbaV0gPSByZXN1bHQ7XHJcblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIGlucHV0ID09PSAnb2JqZWN0Jykge1xyXG5cdFx0XHRcdGZpbmFsUmVzdWx0W09iamVjdC5rZXlzKGlucHV0KVtpXV0gPSByZXN1bHQ7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZmluYWxSZXN1bHQgPSByZXN1bHQ7XHJcblx0XHRcdH1cclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gaSAoY29udmVydGVkIHRvIGJhc2UgMzYgdG8gbWluaW1pemUgcmVxdWVzdCBsZW5ndGgpIGlzIHVzZWQgYXMgYSB1bmlxdWUgaW5kZW50aWZpZXIgdG8gb3JkZXIgcmVzcG9uc2VzXHJcblx0XHRjb25zdCBmcmVxUGFydCA9IFtycGNpZHMsIEpTT04uc3RyaW5naWZ5KFtbdGV4dCwgZnJvbUlzbywgdG9Jc28sIGF1dG9Db3JyZWN0XSwgW251bGxdXSksIG51bGwsIGkudG9TdHJpbmcoMzYpXTtcclxuXHRcdGZyZXEucHVzaChmcmVxUGFydCk7XHJcblx0fVxyXG5cclxuXHRpZiAoZnJlcS5sZW5ndGggPT09IDApIHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG5cdFx0XHRyZXNvbHZlKGZpbmFsUmVzdWx0KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmVxdWVzdE9wdGlvbnMuYm9keSA9ICdmLnJlcT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KFtmcmVxXSkpICsgJyYnO1xyXG5cclxuXHRyZXR1cm4gb3B0aW9ucy5yZXF1ZXN0RnVuY3Rpb24odXJsLCByZXF1ZXN0T3B0aW9ucykudGhlbiggYXN5bmMgcmVzID0+IHtcclxuXHRcdGlmICghcmVzLm9rKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihyZXMuc3RhdHVzVGV4dCwge2NhdXNlOiB7b3B0aW9ucywgdXJsLCByZXNwb25zZTogcmVzfX0pO1xyXG5cdFx0fVxyXG5cdFx0cmVzID0gYXdhaXQgcmVzLnRleHQoKTtcclxuXHRcdHJlcyA9IHJlcy5zbGljZSg2KTtcclxuXHJcblx0XHRmb3IgKGxldCBjaHVuayBvZiByZXMuc3BsaXQoJ1xcbicpKSB7XHJcblx0XHRcdGlmIChjaHVua1swXSAhPT0gJ1snIHx8IGNodW5rWzNdID09PSAnZScpIHtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjaHVuayA9IEpTT04ucGFyc2UoY2h1bmspO1xyXG5cdFx0XHRmb3IgKGxldCB0cmFuc2xhdGlvbiBvZiBjaHVuaykge1xyXG5cdFx0XHRcdGlmICh0cmFuc2xhdGlvblswXSAhPT0gJ3dyYi5mcicpIHtcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjb25zdCBpZCA9IHBhcnNlSW50KHRyYW5zbGF0aW9uW3RyYW5zbGF0aW9uLmxlbmd0aCAtIDFdLCAzNik7XHJcblx0XHRcdFx0aWYgKHRyYW5zbGF0aW9uWzJdID09PSBudWxsKSB7XHJcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMucmVqZWN0T25QYXJ0aWFsRmFpbCkge1xyXG5cdFx0XHRcdFx0XHRpZiAoQXJyYXkuaXNBcnJheShpbnB1dCkpIHtcclxuXHRcdFx0XHRcdFx0XHRmaW5hbFJlc3VsdFtpZF0gPSBudWxsO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ29iamVjdCcpIHtcclxuXHRcdFx0XHRcdFx0XHRmaW5hbFJlc3VsdFtPYmplY3Qua2V5cyhpbnB1dClbaWRdXSA9IG51bGw7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0ZmluYWxSZXN1bHQgPSBudWxsO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFxyXG5cdFx0XHRcdFx0XHQnUGFydGlhbCBUcmFuc2xhdGlvbiBSZXF1ZXN0IEZhaWw6IGF0IGxlYXN0IG9uZSB0cmFuc2xhdGlvbiBmYWlsZWQsIGl0IHdhcyBlaXRoZXIgaW52YWxpZCBvciBtb3JlIGxpa2VseS0gcmVqZWN0ZWQgYnkgdGhlIHNlcnZlci4gICcgK1xyXG5cdFx0XHRcdFx0XHQnWW91IGNhbiB0cnkgdGhlIHJlcXVlc3QgYWdhaW4gYW5kIGlmIGl0IHBlcnNpc3RzIHRyeSBhIHByb3h5LCBzcGFjaW5nIG91dCByZXF1ZXN0cywgYW5kL29yIHVzaW5nIGEgZGlmZmVyZW50IHRsZC4gICcgK1xyXG5cdFx0XHRcdFx0XHQnSWYgeW91IHdvdWxkIGxpa2UgdG8gdHJhbnNsYXRlIG90aGVyIHJlcXVlc3RzIGluIGEgYmF0Y2ggdHJhbnNsYXRpb24gZXZlbiBpZiBvbmUgZmFpbHModGhlIGZhaWxlZCB0cmFuc2xhdGlvbiB3aWxsIGJlICcgK1xyXG5cdFx0XHRcdFx0XHQnc2V0IHRvIGBudWxsYCkgcGFzcyB0aGUgb3B0aW9uIGByZWplY3RPblBhcnRpYWxGYWlsOiBmYWxzZWAuICBZb3UgY2FuIGFsc28gdHJ5IHVzaW5nIHRoZSBzaW5nbGVUcmFuc2xhdGUgZW5kcG9pbnQgd2l0aDogYGZvcmNlQmF0Y2g6IGZhbHNlYCcsXHJcblx0XHRcdFx0XHRcdHtjYXVzZToge2lucHV0LCB1cmwsIG9wdGlvbnMsIHJlcXVlc3RPcHRpb25zfX1cclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRyYW5zbGF0aW9uID0gSlNPTi5wYXJzZSh0cmFuc2xhdGlvblsyXSk7XHJcblx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gbmV3IFRyYW5zbGF0aW9uUmVzdWx0KHRyYW5zbGF0aW9uKTtcclxuXHJcblx0XHRcdFx0aWYgKHRyYW5zbGF0aW9uWzFdWzBdWzBdWzVdID09PSB1bmRlZmluZWQgfHwgdHJhbnNsYXRpb25bMV1bMF1bMF1bNV0gPT09IG51bGwpIHtcclxuXHRcdFx0XHRcdC8vIHRyYW5zbGF0aW9uIG5vdCBmb3VuZCwgY291bGQgYmUgYSBoeXBlcmxpbmsgb3IgZ2VuZGVyLXNwZWNpZmljIHRyYW5zbGF0aW9uP1xyXG5cdFx0XHRcdFx0cmVzdWx0LnRleHQgPSB0cmFuc2xhdGlvblsxXVswXVswXVswXTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmVzdWx0LnRleHQgPSB0cmFuc2xhdGlvblsxXVswXVswXVs1XVxyXG5cdFx0XHRcdFx0XHQubWFwKGZ1bmN0aW9uIChvYmopIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gb2JqWzBdO1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHQuZmlsdGVyKEJvb2xlYW4pXHJcblx0XHRcdFx0XHRcdC8vIEdvb2dsZSBhcGkgc2VlbXMgdG8gc3BsaXQgdGV4dCBwZXIgc2VudGVuY2VzIGJ5IDxkb3Q+PHNwYWNlPlxyXG5cdFx0XHRcdFx0XHQvLyBTbyB3ZSBqb2luIHRleHQgYmFjayB3aXRoIHNwYWNlcy5cclxuXHRcdFx0XHRcdFx0Ly8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vdml0YWxldHMvZ29vZ2xlLXRyYW5zbGF0ZS1hcGkvaXNzdWVzLzczXHJcblx0XHRcdFx0XHRcdC5qb2luKCcgJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJlc3VsdC5wcm9udW5jaWF0aW9uID0gdHJhbnNsYXRpb25bMV1bMF1bMF1bMV07XHJcblxyXG5cdFx0XHRcdC8vIEZyb20gbGFuZ3VhZ2VcclxuXHRcdFx0XHRyZXN1bHQuZnJvbS5sYW5ndWFnZS5kaWRZb3VNZWFuID0gdHJ1ZTtcclxuXHRcdFx0XHRpZiAodHJhbnNsYXRpb25bMF0gJiYgdHJhbnNsYXRpb25bMF1bMV0gJiYgdHJhbnNsYXRpb25bMF1bMV1bMV0pIHtcclxuXHRcdFx0XHRcdHJlc3VsdC5mcm9tLmxhbmd1YWdlLmRpZFlvdU1lYW4gPSB0cnVlO1xyXG5cdFx0XHRcdFx0cmVzdWx0LmZyb20ubGFuZ3VhZ2UuaXNvID0gdHJhbnNsYXRpb25bMF1bMV1bMV1bMF07XHJcblx0XHRcdFx0fSBlbHNlIGlmICh0cmFuc2xhdGlvblsxXVszXSA9PT0gJ2F1dG8nKSB7XHJcblx0XHRcdFx0XHRyZXN1bHQuZnJvbS5sYW5ndWFnZS5pc28gPSB0cmFuc2xhdGlvblsyXTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmVzdWx0LmZyb20ubGFuZ3VhZ2UuaXNvID0gdHJhbnNsYXRpb25bMV1bM107XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBEaWQgeW91IG1lYW4gJiBhdXRvY29ycmVjdFxyXG5cdFx0XHRcdHJlc3VsdC5mcm9tLnRleHQuYXV0b0NvcnJlY3RlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdHJlc3VsdC5mcm9tLnRleHQuZGlkWW91TWVhbiA9IGZhbHNlO1xyXG5cdFx0XHRcdGlmICh0cmFuc2xhdGlvblswXSAmJiB0cmFuc2xhdGlvblswXVsxXSAmJiB0cmFuc2xhdGlvblswXVsxXVswXSkge1xyXG5cdFx0XHRcdFx0bGV0IHN0ciA9IHRyYW5zbGF0aW9uWzBdWzFdWzBdWzBdWzFdO1xyXG5cclxuXHRcdFx0XHRcdHN0ciA9IHN0ci5yZXBsYWNlKC88Yj4oPGk+KT8vZywgJ1snKTtcclxuXHRcdFx0XHRcdHN0ciA9IHN0ci5yZXBsYWNlKC8oPFxcL2k+KT88XFwvYj4vZywgJ10nKTtcclxuXHJcblx0XHRcdFx0XHRyZXN1bHQuZnJvbS50ZXh0LnZhbHVlID0gc3RyO1xyXG5cclxuXHRcdFx0XHRcdGlmICh0cmFuc2xhdGlvblswXVsxXVswXVsyXSA9PT0gMSkge1xyXG5cdFx0XHRcdFx0XHRyZXN1bHQuZnJvbS50ZXh0LmF1dG9Db3JyZWN0ZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0cmVzdWx0LmZyb20udGV4dC5kaWRZb3VNZWFuID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChBcnJheS5pc0FycmF5KGlucHV0KSkge1xyXG5cdFx0XHRcdFx0ZmluYWxSZXN1bHRbaWRdID0gcmVzdWx0O1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIGlucHV0ID09PSAnb2JqZWN0Jykge1xyXG5cdFx0XHRcdFx0ZmluYWxSZXN1bHRbT2JqZWN0LmtleXMoaW5wdXQpW2lkXV0gPSByZXN1bHQ7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGZpbmFsUmVzdWx0ID0gcmVzdWx0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZpbmFsUmVzdWx0O1xyXG5cdH0pO1xyXG59OyIsIid1c2Ugc3RyaWN0JztcclxuY29uc3QgeyBERUZBVUxUX09QVElPTlMsIFRSQU5TTEFURV9QQVRIIH0gPSByZXF1aXJlKCcuLi9kZWZhdWx0cy5janMnKTtcclxuY29uc3QgVHJhbnNsYXRpb25SZXN1bHQgPSByZXF1aXJlKCcuL1RyYW5zbGF0aW9uUmVzdWx0LmNqcycpO1xyXG5jb25zdCB7IGdldENvZGUgfSA9IHJlcXVpcmUoJy4uL2xhbmd1YWdlcy5janMnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBvcHRpb25zKSB7XHJcblx0b3B0aW9ucyA9IHsuLi5ERUZBVUxUX09QVElPTlMsIC4uLm9wdGlvbnMsIC4uLmlucHV0Lm9wdGlvbnN9O1xyXG5cdGNvbnN0IHJlcXVlc3RPcHRpb25zID0gey4uLkRFRkFVTFRfT1BUSU9OUy5yZXF1ZXN0T3B0aW9ucywgLi4ub3B0aW9ucy5yZXF1ZXN0T3B0aW9uc307XHJcblx0cmVxdWVzdE9wdGlvbnMubWV0aG9kID0gJ1BPU1QnO1xyXG5cdHJlcXVlc3RPcHRpb25zLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04JztcclxuXHJcblx0Y29uc3QgZnJvbUlzbyA9IG9wdGlvbnMuZm9yY2VGcm9tID8gb3B0aW9ucy5mcm9tIDogZ2V0Q29kZShvcHRpb25zLmZyb20pO1xyXG5cdGlmIChmcm9tSXNvID09PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYEZyb20gbGFuZ3VhZ2UgJHtvcHRpb25zLmZyb219IHVuc3VwcG9ydGVkLCBieXBhc3MgdGhpcyB3aXRoIHNldHRpbmcgZm9yY2VGcm9tIHRvIHRydWUgaWYgeW91J3JlIGNlcnRhaW4gdGhlIGlzbyBpcyBjb3JyZWN0YCwge2NhdXNlOiB7b3B0aW9uc319KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgdG9Jc28gPSBvcHRpb25zLmZvcmNlVG8gPyBvcHRpb25zLnRvIDogZ2V0Q29kZShvcHRpb25zLnRvKTtcclxuXHRpZiAodG9Jc28gPT09IG51bGwpIHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihgVG8gbGFuZ3VhZ2UgJHtvcHRpb25zLnRvfSB1bnN1cHBvcnRlZCwgYnlwYXNzIHRoaXMgd2l0aCBzZXR0aW5nIGZvcmNlVG8gdG8gdHJ1ZSBpZiB5b3UncmUgY2VydGFpbiB0aGUgaXNvIGlzIGNvcnJlY3RgLCB7Y2F1c2U6IHtvcHRpb25zfX0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBwYXJhbXMgPSB7XHJcblx0XHRzbDogZnJvbUlzbyxcclxuXHRcdHRsOiB0b0lzbyxcclxuXHRcdHE6IGlucHV0LnRleHQgPz8gaW5wdXRcclxuXHR9O1xyXG5cclxuXHRpZiAocGFyYW1zLnEubGVuZ3RoID09PSAwKSB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gbmV3IFRyYW5zbGF0aW9uUmVzdWx0KHBhcmFtcy5xKTtcclxuXHRcdFx0cmVzdWx0LmZyb20gPSBmcm9tSXNvO1xyXG5cdFx0XHRyZXN1bHQudG8gPSB0b0lzbztcclxuXHRcdFx0cmVzb2x2ZShyZXN1bHQpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZXF1ZXN0T3B0aW9ucy5ib2R5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhwYXJhbXMpLnRvU3RyaW5nKCk7XHJcblxyXG5cdGNvbnN0IHVybCA9IFRSQU5TTEFURV9QQVRIICsgb3B0aW9ucy50bGQgKyAnL3RyYW5zbGF0ZV9hL3NpbmdsZT9jbGllbnQ9YXQmZHQ9dCZkdD1ybSZkaj0xJztcclxuXHJcblx0cmV0dXJuIG9wdGlvbnMucmVxdWVzdEZ1bmN0aW9uKHVybCwgcmVxdWVzdE9wdGlvbnMpLnRoZW4ocmVzID0+IHtcclxuXHRcdGlmIChyZXMub2spIHtcclxuXHRcdFx0cmV0dXJuIHJlcy5qc29uKCk7XHJcblx0XHR9XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IocmVzLnN0YXR1c1RleHQsIHtjYXVzZToge29wdGlvbnMsIHVybCwgcmVzcG9uc2U6IHJlc319KTtcclxuXHR9KS50aGVuKHJlcyA9PiB7XHJcblx0XHRjb25zdCByZXN1bHQgPSBuZXcgVHJhbnNsYXRpb25SZXN1bHQocmVzKTtcclxuXHRcdHJlc3VsdC5mcm9tID0gcmVzLnNyYyA/PyBvcHRpb25zLmZyb207XHJcblx0XHRyZXN1bHQudG8gPSBvcHRpb25zLnRvO1xyXG5cdFx0Zm9yIChjb25zdCBzZW50ZW5jZSBvZiByZXMuc2VudGVuY2VzKSB7XHJcblx0XHRcdGlmICh0eXBlb2Ygc2VudGVuY2UudHJhbnMgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0cmVzdWx0LnRleHQgKz0gc2VudGVuY2UudHJhbnM7XHJcblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIHNlbnRlbmNlLnRyYW5zbGl0ICE9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRcdHJlc3VsdC5wcm9udW5jaWF0aW9uID0gc2VudGVuY2UudHJhbnNsaXQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblx0fSk7XHJcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgU2FsZXNmb3JjZVVpXzEgPSByZXF1aXJlKFwiLi9wcmVzZW50YXRpb24vdWkvU2FsZXNmb3JjZVVpXCIpO1xuKGZ1bmN0aW9uICgpIHtcbiAgICAoMCwgU2FsZXNmb3JjZVVpXzEuc2V0VHNMaWJJblVpKSgpO1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==