const countryLangsArray = [
    {
        name: "Abkhazia",
        languages: ["Abkhaz", "Russian"]
    },
    {
        name: "Afghanistan",
        languages: ["Pashto", "Dari"]
    },
    {
        name: "Albania",
        languages: "Albanian"
    },
    {
        name: "Algeria",
        languages: ["Arabic", "Tamazight"]
    },
    {
        name: "Andorra",
        languages: "Catalan"
    },
    {
        name: "Angola",
        languages: "Portuguese" 
    },
    {
        name: "Antigua and Barbuda",
        languages: "English",
    },
    {
        name: "Argentina",
        languages: "Spanish"
    },
    {
        name: "Armenia",
        languages: "Armenian"
    },
    {
        name: "Artsakh",
        languages: "English"
    },
    {
        name: "Australia",
        languages: "English"
    },
    {
        name: "Austria",
        languages: "German",
    },
    {
        name: "Azerbaijan",
        languages: "Azerbajani",
    },
    {
        name: "Bahamas",
        languages: "English",
    },
    {
        name: "Bahrain",
        languages: "Arabic",
    },
    {
        name: "Bangladesh",
        languages: "Bengali",
    },
    {
        name: "Barbados",
        languages: "English",
    },
    {
        name: "Belarus",
        languages: ["Belarusian", "Russian"],
    },
    {
        name: "Belgium",
        languages: ["Dutch", "French", "German"],
    },
    {
        name: "Belize",
        languages: "English",
    },
    {
        name: "Benin",
        languages: "French",
    },
    {
        name: "Bhutan",
        languages: "Dzongkha",
    },
    {
        name: "Bolivia",
        languages: "Spanish",
    },
    {
        name: "Boznia and Herzegovina",
        languages: ["Bosnian", "Croatian", "Serbian"],
    },
    {
        name: "Botswana",
        languages: ["English", "Tswana"],
    },
    {
        name: "Brazil",
        languages: "Portuguese",
    },
    {
        name: "Brunei",
        languages: ["Malay", "English"],
    },
    {
        name: "Bulgaria",
        languages: "Bulgarian",
    },
    {
        name: "Burkina Faso",
        languages: "French",
    },
    {
        name: "Burundi",
        languages: ["French", "Kirundi", "English"],
    },
    {
        name: "Cambodia",
        languages: "Khmer",
    },
    {
        name: "Cameroon",
        languages: ["English", "French"],
    },
    {
        name: "Canada",
        languages: ["English", "French"],
    },
    {
        name: "Cape Verde",
        languages: "Portuguese",
    },
    {
        name: "Central African Republic",
        languages: "French",
    },
    {
        name: "Chad",
        languages: ["Arabic", "French"],
    },
    {
        name: "Chile",
        languages: "Spanish",
    },
    {
        name: "China",
        languages: ["Mandarin Chinese", "Chinese", "Hmong", "Cantonese"]
    },
    {
        name: "Christmas Island",
        languages: ["English", "Mandarin Chinese", "Malay"],
    },
    {
        name: "Cocos",
        languages: ["English", "Cocos Malay"],
    },
    {
        name: "Colombia",
        languages: "Spanish",
    },
    {
        name: "Comoros",
        languages: ["Arabic", "Comorian", "French"],
    },
    {
        name: "Democratic Republic of Congo",
        languages: "French",
    },
    {
        name: "Republic of the Congo",
        languages: "French",
    },
    {
        name: "Cook Islands",
        languages: ["English", "Cook Islands Maori"],
    },
    {
        name: "Costa Rica",
        languages: "Spanish",
    },
    {
        name: "Croatia",
        languages: ["Croatian"]
    },
    {
        name: "Cuba",
        languages: "Spanish"
    },
    {
        name: "Cyprus",
        languages: ["Greek", "Turkish"]
    },
    {
        name: "Czech Republic",
        languages: ["Czech", "Slovak"]
    },
    {
        name: "Denmark",
        languages: "Danish"
    },
    {
        name: "Djibouti",
        languages: ["Arabic", "French"]
    },
    {
        name: "Dominica",
        languages: "English"
    },
    {
        name: "Dominican Republic",
        languages: "Spanish"
    },
    {
        name: "East Timor",
        languages: ["Portuguese", "Tetum"]
    },
    {
        name: "Ecuador",
        languages: ["Spanish", "Quechua"]
    },
    {
        name: "Egypt",
        languages: "Arabic"
    },
    {
        name: "El Salvador",
        languages: "Spanish"
    },
    {
        name: "England",
        languages: "English"
    },
    {
        name: "Equatorial Guinea",
        languages: ["French", "Portuguese", "Spanish"]
    },
    {
        name: "Eritrea",
        languages: "Tigrinya"
    },
    {
        name: "Eswanti",
        languages: ["English", "Swazi"]
    },
    {
        name: "Ethiopia",
        languages: ["Afar", "Amharic", "Oromo", "Somali", "Tigrinya", "English"]
    },
    {
        name: "Fiji",
        languages: ["English", "Fijian", "Fiji Hindi"]
    },
    {
        name: "Finland",
        languages: ["Finnish", "Swedish"]
    },
    {
        name: "France",
        languages: "French"
    },
    {
        name: "Gabon",
        languages: "French"
    },
    {
        name: "Gambia",
        languages: "English"
    },
    {
        name: "Georgia",
        languages: "Georgian"
    },
    {
        name: "Germany",
        languages: "German"
    },
    {
        name: "Ghana",
        languages: "English"
    },
    {
        name: "Greece",
        languages: "Greek"
    },
    {
        name: "Grenada",
        languages: "English"
    },
    {
        name: "Guatemala",
        languages: "Spanish"
    },
    {
        name: "Guinea-Bissau",
        languages: "Portuguese"
    },
    {
        name: "Guyana",
        languages: "English"
    },
    {
        name: "Haiti",
        languages: ["French", "Haitian Creole"]
    },
    {
        name: "Honduras",
        languages: "Spanish"
    },
    {
        name: "Hungary",
        languages: "Hungarian"
    },
    {
        name: "Iceland",
        languages: "Icelandic"
    },
    {
        name: "India",
        languages: ["English", "Hindi"]
    },
    {
        name: "Indonesia",
        languages: "Indonesian"
    },
    {
        name: "Iran",
        languages: "Persian"
    },
    {
        name: "Iraq",
        languages: "Arabic"
    },
    {
        name: "Ireland",
        languages: ["Irish", "English"]
    },
    {
        name: "Israel",
        languages: "Hebrew"
    },
    {
        name: "Italy",
        languages: "Italian"
    },
    {
        name: "Ivory Coast",
        languages: "French"
    },
    {
        name: "Jamaica",
        languages: "English"
    },
    {
        name: "Japan",
        languages: "Japanese"
    },
    {
        name: "Kazakhstan",
        languages: ["Kazakh", "Russian"]
    },
    {
        name: "Kenya",
        languages: "English"
    },
    {
        name: "Kiribati",
        languages: "English"
    },
    {
        name: "North Korea",
        languages: "Korean"
    },
    {
        name: "South Korean",
        languages: "Korean"
    },
    {
        name: "Kosovo",
        languages: ["Albanian", "Serbian"]
    },
    {
        name: "Kuwait",
        languages: "Arabic"
    },
    {
        name: "Kyrgyzstan",
        languages: ["Kyrgyz", "Russian"]
    },
    {
        name: "Laos",
        languages: "Lao"
    },
    {
        name: "Latvia",
        languages: "Latvian"
    },
    {
        name: "Lebanon",
        languages: "Arabic"
    },
    {
        name: "Lesotho",
        languages: ["Sotho", "English"]
    },
    {
        name: "Liberia",
        languages: "English"
    },
    {
        name: "Libya",
        languages: "Arabic"
    },
    {
        name: "Liechtenstein",
        languages: "German"
    },
    {
        name: "Lithuania",
        languages: "Lithuanian"
    },
    {
        name: "Luxembourg",
        languages: ["French", "German", "Luxembourgish"]
    },
    {
        name: "Madagascar",
        languages: ["French", "Malagasy"]
    },
    {
        name: "Malawi",
        languages: ["English", "Chichewa"]
    },
    {
        name: "Malaysia",
        languages: ["Malay", "English"]
    },
    {
        name: "Maldives",
        languages: "Dhivehi"
    },
    {
        name: "Mali",
        languages: "French"
    },
    {
        name: "Malta",
        languages: ["Maltese", "Italian"]
    },
    {
        name: "Sovereign Military Order of Malta",
        languages: "Italian"
    },
    {
        name: "Marshall Islands",
        languages: "English"
    },
    {
        name: "Mauritania",
        languages: "Arabic"
    },
    {
        name: "Mauritius",
        languages: "English"
    },
    {
        name: "Mexico",
        languages: "Spanish"
    },
    {
        name: "Federated States of Micronesia",
        languages: "English"
    },
    {
        name: "Moldova",
        languages: "Romanian"
    },
    {
        name: "Monaco",
        languages: "French"
    },
    {
        name: "Mongolia",
        languages: "Mongolian"
    },
    {
        name: "Montenegro",
        languages: ["Arabic", "Tamazight"]
    },
    {
        name: "Mozambique",
        languages: "Portuguese"
    },
    {
        name: "Myanmar",
        languages: "Burmese"
    },
    {
        name: "Namibia",
        languages: "English"
    },
    {
        name: "Nauru",
        languages: ["English", "Nauruan"]
    },
    {
        name: "Nepal",
        languages: "Nepali"
    },
    {
        name: "Netherlands",
        languages: "Dutch"
    },
    {
        name: "New Zealand",
        languages: ["English", "Maori"]
    },
    {
        name: "Nicaragua",
        languages: "Spanish"
    },
    {
        name: "Niger",
        languages: "French"
    },
    {
        name: "Nigeria",
        languages: "English"
    },
    {
        name: "Niue",
        languages: ["English", "Niuean"]
    },
    {
        name: "Norfolk Island",
        languages: ["English", "Norfuk"]
    },
    {
        name: "North Macedonia",
        languages: ["Macedonian", "Albanian"]
    },
    {
        name: "Northern Cyprus",
        languages: "Turkish"
    },
    {
        name: "Norway",
        languages: ["Norwegian", "Sami"]
    },
    {
        name: "Oman",
        languages: "Arabic"
    },
    {
        name: "Pakistan",
        languages: ["Urdu", "English"]
    },
    {
        name: "Palau",
        languages: ["English", "Palauan"]
    },
    {
        name: "Palestine",
        languages: "Arabic"
    },
    {
        name: "Papua New Guinea",
        languages: "English"
    },
    {
        name: "Paraguay",
        languages: ["Spanish", "Guarani"]
    },
    {
        name: "Peru",
        languages: ["Spanish", "Aymara", "Kechua"]
    },
    {
        name: "Philipines",
        languages: ["Philipino", "English"]
    },
    {
        name: "Poland",
        languages: "Polish"
    },
    {
        name: "Portugal",
        languages: "Portuguese"
    },
    {
        name: "Qatar",
        languages: "Arabic"
    },
    {
        name: "Romania",
        languages: "Romanian"
    },
    {
        name: "Russia",
        languages: "Russian"
    },
    {
        name: "Rwanda",
        languages: ["English", "French", "Kinyarwanda", "Swahili"]
    },
    {
        name: "Sahrawi Arab Democratic Republic",
        languages: ["Tamazight", "Arabic", "Spanish"]
    },
    {
        name: "Saint Kitts and Nevis",
        languages: "English"
    },
    {
        name: "Saint Lucia",
        languages: "English"
    },
    {
        name: "Saint Vincent and the Grenadines",
        languages: "English"
    },
    {
        name: "Samoa",
        languages: "English"
    },
    {
        name: "San Marino",
        languages: "Italian"
    },
    {
        name: "São Tomé and Príncipe",
        languages: "Portuguese"
    },
    {
        name: "Saudi Arabia",
        languages: "Arabic"
    },
    {
        name: "Senegal",
        languages: "French"
    },
    {
        name: "Serbia",
        languages: "Serbian"
    },
    {
        name: "Seychelles",
        languages: ["English", "French", "Seychellois Creole"]
    },
    {
        name: "Sierra Leone",
        languages: "English"
    },
    {
        name: "Singapore",
        languages: ["English", "Malay", "Mandarin Chinese", "Tamil"]
    },
    {
        name: "Slovakia",
        languages: "Slovak"
    },
    {
        name: "Slovenia",
        languages: "Slovene"
    },
    {
        name: "Solomon Islands",
        languages: "English"
    },
    {
        name: "Somalia",
        languages: "Arabic"
    },
    {
        name: "Somaliland",
        languages: ["Arabic", "English", "Somali"]
    },
    {
        name: "South Africa",
        languages: ["Afrikaans", "English", "Southern Ndebele", "Sotho Northern", "Sotho", "Swazi", "Tsonga", "Tswana", "Venda", "Xhosa", "Zulu"]
    },
    {
        name: "South Osettia",
        languages: ["Osettian", "Russian"]
    },
    {
        name: "South Sudan",
        languages: "English"
    },
    {
        name: "Spain",
        languages: "Spanish"
    },
    {
        name: "Sri Lanka",
        languages: ["Sinhala", "Tamil"]
    },
    {
        name: "Sudan",
        languages: ["Arabic", "English"]
    },
    {
        name: "Suriname",
        languages: "Dutch"
    },
    {
        name: "Sweden",
        languages: "Swedish"
    },
    {
        name: "Switzerland",
        languages: ["French", "German", "Italian", "Romansh"]
    },
    {
        name: "Syria",
        languages: "Arabic"
    },
    {
        name: "Taiwan",
        languages: "Mandarin Chinese"
    },
    {
        name: "Tajikistan",
        languages: "Tajik"
    },
    {
        name: "Tanzania",
        languages: "English"
    },
    {
        name: "Thailand",
        languages: "Thai"
    },
    {
        name: "Togo",
        languages: "French"
    },
    {
        name: "Tokelau",
        languages: ["English", "Tokelauan"]
    },
    {
        name: "Tonga",
        languages: ["English", "Tongan"]
    },
    {
        name: "Tansnistria",
        languages: ["Moldovan", "Russian", "Ukranian"]
    },
    {
        name: "Trinidad and Tobago",
        languages: "English"
    },
    {
        name: "Tunisia",
        languages: ["Tunisian", "Arabic", "French"]
    },
    {
        name: "Turkey",
        languages: "Turkish"
    },
    {
        name: "Turkmenistan",
        languages: "Turkmen"
    },
    {
        name: "Tuvalu",
        languages: ["Tuvaluan", "English"]
    },
    {
        name: "Uganda",
        languages: ["English", "Swahili"]
    },
    {
        name: "Ukraine",
        languages: "Ukrainian"
    },
    {
        name: "United Arab Emirates",
        languages: "Arabic"
    },
    {
        name: "United Kingdom",
        languages: ["English", ]
    },
    {
        name: "United States",
        languages: ["English", "Spanish","Chinese", "Vietnamese", "Arabic", "French", "German", "Korean", "Hindi", "Punjabi"]
    },
    {
        name: "Uruguay",
        languages: "Spanish"
    },
    {
        name: "Vanuatu",
        languages: "English"
    },
    {
        name: "Vatican City",
        languages: "Italian"
    },
    {
        name: "Venezuela",
        languages: "Spanish"
    },
    {
        name: "Vietnam",
        languages: "Vietnamese"
    },
    {
        name: "Yemen",
        languages: "Arabic"
    },
    {
        name: "Zambia",
        languages: "English"
    },
    {
        name: "Zimbabwe",
        languages: ["Chewa", "Chibarwe", "English", "Kalanga", "Koisan", "Nambya", "Ndau", "Ndebele", "Shangani", "Sotho", "Tonga", "Tswana", "Venda", "Xhosa"]
    },
];

export default countryLangsArray;