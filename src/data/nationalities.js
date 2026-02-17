// Comprehensive list of nationalities (demonyms) for the booking form
const nationalities = [
    "Afghan", "Albanian", "Algerian", "American", "Andorran", "Angolan",
    "Antiguan", "Argentine", "Armenian", "Australian", "Austrian", "Azerbaijani",
    "Bahamian", "Bahraini", "Bangladeshi", "Barbadian", "Belarusian", "Belgian",
    "Belizean", "Beninese", "Bhutanese", "Bolivian", "Bosnian", "Botswanan",
    "Brazilian", "British", "Bruneian", "Bulgarian", "Burkinabe", "Burundian",
    "Cambodian", "Cameroonian", "Canadian", "Cape Verdean", "Central African",
    "Chadian", "Chilean", "Chinese", "Colombian", "Comorian", "Congolese",
    "Costa Rican", "Croatian", "Cuban", "Cypriot", "Czech", "Danish",
    "Djiboutian", "Dominican", "Dutch", "East Timorese", "Ecuadorian",
    "Egyptian", "Emirati", "Equatorial Guinean", "Eritrean", "Estonian",
    "Ethiopian", "Fijian", "Filipino", "Finnish", "French",
    "Gabonese", "Gambian", "Georgian", "German", "Ghanaian", "Greek",
    "Grenadian", "Guatemalan", "Guinean", "Guyanese",
    "Haitian", "Honduran", "Hungarian",
    "Icelandic", "Indian", "Indonesian", "Iranian", "Iraqi", "Irish",
    "Israeli", "Italian", "Ivorian",
    "Jamaican", "Japanese", "Jordanian",
    "Kazakh", "Kenyan", "Kiribati", "Kuwaiti", "Kyrgyz",
    "Laotian", "Latvian", "Lebanese", "Liberian", "Libyan",
    "Liechtenstein", "Lithuanian", "Luxembourgish",
    "Macedonian", "Malagasy", "Malawian", "Malaysian", "Maldivian", "Malian",
    "Maltese", "Marshallese", "Mauritanian", "Mauritian", "Mexican",
    "Micronesian", "Moldovan", "Monacan", "Mongolian", "Montenegrin",
    "Moroccan", "Mozambican", "Myanmar",
    "Namibian", "Nauruan", "Nepalese", "New Zealander", "Nicaraguan",
    "Nigerian", "Nigerien", "North Korean", "Norwegian",
    "Omani",
    "Pakistani", "Palauan", "Palestinian", "Panamanian", "Papua New Guinean",
    "Paraguayan", "Peruvian", "Polish", "Portuguese",
    "Qatari",
    "Romanian", "Russian", "Rwandan",
    "Saint Lucian", "Salvadoran", "Samoan", "Saudi", "Scottish", "Senegalese",
    "Serbian", "Seychellois", "Sierra Leonean", "Singaporean", "Slovak",
    "Slovenian", "Solomon Islander", "Somali", "South African", "South Korean",
    "South Sudanese", "Spanish", "Sri Lankan", "Sudanese", "Surinamese",
    "Swazi", "Swedish", "Swiss", "Syrian",
    "Taiwanese", "Tajik", "Tanzanian", "Thai", "Togolese", "Tongan",
    "Trinidadian", "Tunisian", "Turkish", "Turkmen", "Tuvaluan",
    "Ugandan", "Ukrainian", "Uruguayan", "Uzbek",
    "Vanuatuan", "Venezuelan", "Vietnamese",
    "Welsh",
    "Yemeni",
    "Zambian", "Zimbabwean"
]

export const nationalityOptions = nationalities.map(n => ({
    value: n.toLowerCase().replace(/\s+/g, '-'),
    label: n
}))

export default nationalities
