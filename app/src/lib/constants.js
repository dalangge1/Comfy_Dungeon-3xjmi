export const COMFY_HOST = process.env.NODE_ENV === "development" ? "http://localhost:8188" : "";

export const positive_template =
  "{{SETTING}} {{STYLE}} closeup of a {{AGE}} {{BODY}}{{ETHNICITY}}{{RACE}} {{GENDER}} {{CLASS}}{{HAIR_COLOR}}{{HAIRSTYLE}}{{GEAR}}.{{RACE_HELPER}}{{BACKGROUND}} High quality, detailed, high resolution{{SETTING_HELPER}}.{{MOOD}}{{ATMOSPHERE}}";
export const negative_template =
  "{{STYLE}}{{RACE}}rendering, blurry, noisy, deformed, text, {{GENDER}}scars, blood, dirty, nipples, naked, boobs, cleavage, face mask, Christmas, garden, zippers, ill, lazy eye, {{BACKGROUND}} author, signature, 3d";

export const ethnicities = {
  1: [
    "Eritrean",
    "Djiboutian",
    "Ethiopian",
    "Somali",
    "Kenyan",
    "Ugandan",
    "Rwandan",
    "Burundian",
    "Tanzanian",
    "Malagasy",
    "Mauritian",
    "Seychellois",
  ],
  2: [
    "Chadian",
    "Sudanese",
    "Central African",
    "Cameroonian",
    "Gabonese",
    "Equatorial Guinean",
    "Sao Tomean",
    "Angolan",
    "Congolese",
    "Zambian",
    "Malawian",
    "Mozambican",
    "Madagascan",
    "Comorian",
    "Mauritian",
    "Seychellois",
  ],
  3: ["Egyptian", "Libyan", "Tunisian", "Algerian", "Moroccan", "Mauritanian", "Sahrawi", "Tuareg"],
  4: [
    "Namibian",
    "South African",
    "Botswanan",
    "Zimbabwean",
    "Zambian",
    "Malawian",
    "Mozambican",
    "Swazi",
    "Lesotho",
    "Basotho",
  ],
  5: [
    "Mauritanian",
    "Senegalese",
    "Malian",
    "Nigerien",
    "Burkinabe",
    "Ivorian",
    "Ghanaian",
    "Togolese",
    "Beninese",
    "Nigerian",
    "Cameroonian",
    "Equatorial Guinean",
    "Sao Tomean",
    "Gabonese",
    "Congolese",
  ],

  6: ["Belizean", "Costa Rican", "Salvadoran", "Guatemalan", "Honduran", "Nicaraguan", "Panamanian"],
  7: [
    "Antiguan",
    "Bahamian",
    "Barbadian",
    "Cuban",
    "Dominican",
    "Dominican",
    "Grenadian",
    "Haitian",
    "Jamaican",
    "Kittian and Nevisian",
    "Lucian",
    "Vincentian",
    "Trinidadian and Tobagonian",
  ],
  8: [
    "Argentine",
    "Bolivian",
    "Brazilian",
    "Chilean",
    "Colombian",
    "Ecuadorian",
    "Guyanese",
    "Paraguayan",
    "Peruvian",
    "Surinamese",
    "Uruguayan",
    "Venezuelan",
  ],

  9: ["Kazakhstani", "Kyrgyzstani", "Tajikistani", "Turkmen", "Uzbekistani"],
  10: ["Chinese", "Japanese", "Korean", "Mongolian", "Taiwanese"],
  11: ["Bangladeshi", "Bhutanese", "Indian", "Maldivian", "Nepalese", "Pakistani", "Sri Lankan"],
  12: [
    "Burmese",
    "Cambodian",
    "Filipino",
    "Indonesian",
    "Laotian",
    "Malaysian",
    "Singaporean",
    "Thai",
    "Timorese",
    "Vietnamese",
  ],
  13: [
    "Afghan",
    "Armenian",
    "Azerbaijani",
    "Bahraini",
    "Cypriot",
    "Georgian",
    "Iranian",
    "Iraqi",
    "Israeli",
    "Jordanian",
    "Kuwaiti",
    "Lebanese",
    "Omani",
    "Palestinian",
    "Qatari",
    "Saudi",
    "Syrian",
    "Turkish",
    "Emirati",
    "Yemeni",
  ],

  14: [
    "Australian",
    "Fijian",
    "I-Kiribati",
    "Marshallese",
    "Micronesian",
    "Nauruan",
    "New Zealander",
    "Palauan",
    "Papua New Guinean",
    "Samoan",
    "Solomon Islander",
    "Tongan",
    "Tuvaluan",
    "Vanuatuan",
  ],

  15: [
    "Belarusian",
    "Bulgarian",
    "Czech",
    "Hungarian",
    "Polish",
    "Moldovan",
    "Romanian",
    "Russian",
    "Slovak",
    "Ukrainian",
  ],
  16: ["Estonian", "Latvian", "Lithuanian"],
  17: [
    "Albanian",
    "Bosnian",
    "Croatian",
    "Greek",
    "Italian",
    "Maltese",
    "Montenegrin",
    "North Macedonian",
    "Portuguese",
    "Serbian",
    "Slovenian",
    "Spanish",
  ],
  18: ["Austrian", "Belgian", "Dutch", "French", "German", "Liechtensteiner", "Luxembourger", "Monacan", "Swiss"],
  19: ["Icelandic", "Irish", "Manx", "British"],

  //"20": ["Cuban", "Dominican", "Haitian", "Jamaican", "Puerto Rican", "Trinidadian"],
  21: [
    "Fijian",
    "Papua New Guinean",
    "Solomon Islander",
    "Vanuatuan",
    "Kiribati",
    "Marshallese",
    "Micronesian",
    "Nauruan",
    "Palauan",
    "Samoan",
    "Tongan",
    "Tuvaluan",
  ],
};