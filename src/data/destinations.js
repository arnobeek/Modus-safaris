/**
 * Static destinations data for East Africa safari listings.
 * Each destination has: id, slug, name, location, description, images, highlights, accommodations.
 */

export const destinations = [
  {
    id: 1,
    slug: "bwindi-impenetrable-forest",
    name: "Bwindi Impenetrable Forest",
    location: "Uganda",
    description:
      "Home to nearly half the world's remaining mountain gorillas, Bwindi Impenetrable Forest is a UNESCO World Heritage Site of extraordinary biodiversity. Trek through misty ancient rainforest guided by expert trackers, spend an hour with a gorilla family, and stay in luxury eco-lodges that support conservation and local communities.",
    images: [
      "https://images.unsplash.com/photo-1653645800971-b46f2322da3c?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1620148878899-7c9b16ce9651?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YndpbmRpJTIwaW1wZW5ldHJhYmxlJTIwbmF0aW9uYWwlMjBwYXJrfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1653645190009-1e13eb0fdb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YndpbmRpJTIwaW1wZW5ldHJhYmxlJTIwbmF0aW9uYWwlMjBwYXJrfGVufDB8fDB8fHww",
    ],
    highlights: [
      "Mountain gorilla trekking",
      "UNESCO World Heritage Site",
      "Luxury eco-lodges",
      "Ancient rainforest",
      "Community visits",
    ],
    accommodations: [
      { name: "Sanctuary Gorilla Forest Camp", type: "Luxury tented camp", area: "Buhoma" },
      { name: "Buhoma Lodge", type: "Safari lodge", area: "Buhoma" },
      { name: "Mahogany Springs", type: "Luxury lodge", area: "Buhoma" },
      { name: "Nkuringo Bwindi Gorilla Lodge", type: "Safari lodge", area: "Nkuringo" },
      { name: "Clouds Mountain Gorilla Lodge", type: "Luxury lodge", area: "Nkuringo" },
    ],
    relatedExperiences: ["gorilla-trekking-bwindi", "uganda-primates-wildlife"],
  },
  {
    id: 2,
    slug: "murchison-falls",
    name: "Murchison Falls National Park",
    location: "Uganda",
    description:
      "Where the Nile explodes through a narrow gorge, Murchison Falls is Uganda's largest national park. Experience game drives on rolling savanna, boat safaris along the river to the base of the falls, and sightings of lions, elephants, giraffes, and countless bird species.",
    images: [
      "https://images.unsplash.com/photo-1704183683740-1400a49816b7?w=800&auto=format&fit=crop&q=70",
      "https://res.cloudinary.com/dv093jd0o/image/upload/v1770451664/TTP23Murchison-10_cqc1yk.jpg",
      "https://res.cloudinary.com/dv093jd0o/image/upload/v1770451664/TTP23Murchison-27_agbmyt.jpg",
    ],
    highlights: [
      "Murchison Falls & Nile boat safaris",
      "Big game drives",
      "Lions, elephants, giraffes",
      "Birding paradise",
    ],
    accommodations: [
      { name: "Paraa Safari Lodge", type: "Safari lodge", area: "Paraa / Nile River" },
      { name: "Nile Safari Lodge", type: "Luxury lodge", area: "Southern bank" },
      { name: "Chobe Safari Lodge", type: "Safari lodge", area: "Karuma Falls region" },
      { name: "Bakers Lodge", type: "Safari lodge", area: "Southern bank" },
      { name: "Murchison River Lodge", type: "Safari lodge", area: "Southern bank" },
    ],
    relatedExperiences: ["uganda-primates-wildlife"],
  },
  {
    id: 3,
    slug: "queen-elizabeth",
    name: "Queen Elizabeth National Park",
    location: "Uganda",
    description:
      "Queen Elizabeth National Park offers tree-climbing lions, vast savanna, and the famous Kazinga Channel boat cruise. Set against the Rwenzori Mountains, it's a classic East African safari with diverse habitats and excellent wildlife viewing.",
    images: [
      "https://images.unsplash.com/photo-1660988251043-7998126125c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHF1ZWVuJTIwZWxpemFiZXRoJTIwbmF0aW9uYWwlMjBwYXJrfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1420537659459-1e231ca42aa1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cXVlZW4lMjBlbGl6YWJldGglMjBuYXRpb25hbCUyMHBhcmt8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1663116403935-96b35772b184?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHF1ZWVuJTIwZWxpemFiZXRoJTIwbmF0aW9uYWwlMjBwYXJrfGVufDB8fDB8fHww",
    ],
    highlights: [
      "Tree-climbing lions",
      "Kazinga Channel boat cruise",
      "Rwenzori backdrop",
      "Savanna & crater lakes",
    ],
    accommodations: [
      { name: "Mweya Safari Lodge", type: "Safari lodge", area: "Mweya Peninsula" },
      { name: "Ishasha Wilderness Camp", type: "Tented camp", area: "Ishasha sector" },
      { name: "Kyambura Gorge Lodge", type: "Luxury lodge", area: "Kyambura Gorge" },
      { name: "Marafiki Safari Lodge", type: "Safari lodge", area: "Katunguru" },
      { name: "Elephant Plains Lodge", type: "Safari lodge", area: "Katunguru" },
    ],
    relatedExperiences: ["uganda-primates-wildlife"],
  },
  {
    id: 4,
    slug: "kidepo-valley",
    name: "Kidepo Valley National Park",
    location: "Uganda",
    description:
      "Remote and wild, Kidepo Valley in Uganda's northeast is one of Africa's most dramatic landscapes. Vast plains, rugged mountains, and rare species including cheetah and ostrich make it a bucket-list destination for serious safari travellers.",
    images: [
      "https://res.cloudinary.com/dv093jd0o/image/upload/v1770452177/TTP23Kidepo-35_n8xqhu.jpg",
      "https://res.cloudinary.com/dv093jd0o/image/upload/v1770452177/TTP23Kidepo-21_ott08t.jpg",
      "https://res.cloudinary.com/dv093jd0o/image/upload/v1770452165/TTP23Kidepo-69_dqoexz.jpg",
    ],
    highlights: [
      "Remote wilderness",
      "Cheetah & rare species",
      "Vast plains & mountains",
      "Exclusive safari experience",
    ],
    accommodations: [
      { name: "Apoka Safari Lodge", type: "Luxury lodge", area: "Inside Kidepo" },
      { name: "Kidepo Savannah Lodge", type: "Safari lodge", area: "Kalokudo Gate area" },
      { name: "Adere Safari Lodge", type: "Safari lodge", area: "Near park boundary" },
    ],
  },
  {
    id: 5,
    slug: "masai-mara",
    name: "Masai Mara National Reserve",
    location: "Kenya",
    description:
      "The Masai Mara is the stage for the Great Migration and one of Africa's finest wildlife reserves. Endless plains, big cats, and the iconic Maasai culture define this legendary destination. Game drives and balloon safaris offer unforgettable views.",
    images: [
      "https://images.unsplash.com/photo-1519659528534-7fd733a832a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFzYWklMjBtYXJhfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1518459384564-ecfd8e80721f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFzYWklMjBtYXJhfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1543107484-b13a21b26e8c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hc2FpJTIwbWFyYXxlbnwwfHwwfHx8MA%3D%3D",
    ],
    highlights: [
      "Great Migration",
      "Big cats & predators",
      "Hot-air balloon safaris",
      "Maasai culture",
    ],
    accommodations: [
      { name: "Mara Serena Safari Lodge", type: "Safari lodge", area: "Mara Triangle region" },
      { name: "Sarova Mara Game Camp", type: "Safari camp", area: "Sekenani area" },
      { name: "Keekorok Lodge", type: "Safari lodge", area: "Near Keekorok airstrip" },
      { name: "Angama Mara", type: "Luxury lodge", area: "Oloololo Escarpment" },
      { name: "Governors' Camp", type: "Tented camp", area: "Mara River region" },
    ],
    relatedExperiences: ["masai-mara-explorer"],
  },
  {
    id: 6,
    slug: "amboseli",
    name: "Amboseli National Park",
    location: "Kenya",
    description:
      "Amboseli is famous for its large elephant herds with Mount Kilimanjaro as a backdrop. Open savanna and seasonal swamps attract wildlife and photographers year-round. Classic views of elephants against Africa's highest peak make it unmissable.",
    images: [
      "https://images.unsplash.com/photo-1691161880599-287b6b52d372?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFtYm9zZWxpfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1631646109248-a7264aae1790?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1ib3NlbGl8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1571293392300-516aa1baaf8c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFtYm9zZWxpfGVufDB8fDB8fHww",
    ],
    highlights: [
      "Elephants & Kilimanjaro views",
      "Photography hotspot",
      "Open savanna & swamps",
      "Year-round game viewing",
    ],
    accommodations: [
      { name: "Ol Tukai Lodge", type: "Safari lodge", area: "Inside Amboseli" },
      { name: "Tortilis Camp", type: "Tented camp", area: "Amboseli ecosystem" },
      { name: "Elerai Camp", type: "Tented camp", area: "Elerai Conservancy" },
      { name: "Amboseli Serena Safari Lodge", type: "Safari lodge", area: "Amboseli ecosystem" },
    ],
    relatedExperiences: ["amboseli-kilimanjaro-views"],
  },
  {
    id: 7,
    slug: "serengeti",
    name: "Serengeti National Park",
    location: "Tanzania",
    description:
      "The Serengeti's vast savannas host the greatest wildlife spectacle on earth. The annual migration of wildebeest and zebra, prides of lions, and endless horizons define the African safari dream. Game drives and luxury camps bring you into the heart of it.",
    images: [
      "https://images.unsplash.com/photo-1528275646751-ff237d1cd935?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VyZW5nZXRpJTIwbmF0aW9uYWwlMjBwYXJrfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1597877774402-d04cad0b7596?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VyZW5nZXRpJTIwbmF0aW9uYWwlMjBwYXJrfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1622073492812-ed21d3443390?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2VyZW5nZXRpJTIwbmF0aW9uYWwlMjBwYXJrfGVufDB8fDB8fHww",
    ],
    highlights: [
      "Great Migration",
      "Vast savanna & big cats",
      "Luxury safari camps",
      "World-class game viewing",
    ],
    accommodations: [
      { name: "Four Seasons Safari Lodge Serengeti", type: "Luxury lodge", area: "Central Serengeti" },
      { name: "Serengeti Serena Safari Lodge", type: "Safari lodge", area: "Central Serengeti" },
      { name: "Singita Grumeti", type: "Luxury lodge", area: "Grumeti Reserve" },
      { name: "Mbuzi Mawe Serena Camp", type: "Tented camp", area: "Central Serengeti" },
      { name: "Kubu Kubu Tented Lodge", type: "Tented lodge", area: "Central Serengeti" },
    ],
    relatedExperiences: ["serengeti-migration-safari"],
  },
  {
    id: 8,
    slug: "ngorongoro",
    name: "Ngorongoro Conservation Area",
    location: "Tanzania",
    description:
      "The Ngorongoro Crater is the world's largest intact volcanic caldera and a natural amphitheatre for wildlife. Dense populations of lions, elephants, rhinos, and more make it possible to see the Big Five in a single day. Stunning scenery and Maasai communities complete the experience.",
    images: [
      "https://images.unsplash.com/photo-1726075016723-6ea81c84925c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmdvcm9uZ29ybyUyMGNvbnNlcnZhdGlvbiUyMGFyZWF8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1631222240703-e93e07351646?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmdvcm9uZ29ybyUyMGNvbnNlcnZhdGlvbiUyMGFyZWF8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1602410141957-ee70b4739066?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmdvcm9uZ29ybyUyMGNvbnNlcnZhdGlvbiUyMGFyZWF8ZW58MHx8MHx8fDA%3D",
    ],
    highlights: [
      "Ngorongoro Crater",
      "Big Five in one day",
      "High density wildlife",
      "Maasai culture",
    ],
    accommodations: [
      { name: "Ngorongoro Crater Lodge", type: "Luxury lodge", area: "Crater rim" },
      { name: "Ngorongoro Serena Safari Lodge", type: "Safari lodge", area: "Crater rim" },
      { name: "The Highlands Ngorongoro", type: "Luxury camp", area: "Ngorongoro Highlands" },
      { name: "Rhino Lodge", type: "Safari lodge", area: "Crater rim" },
    ],
  },
  {
    id: 9,
    slug: "volcanoes-national-park",
    name: "Volcanoes National Park",
    location: "Rwanda",
    description:
      "Volcanoes National Park in the Virunga massif is the original home of mountain gorilla trekking and Dian Fossey's conservation work. Trek through bamboo and montane forest to meet habituated gorilla families in one of the most moving wildlife experiences on earth.",
    images: [
      "https://images.unsplash.com/photo-1614528767034-70de9fe166e0?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1662612732223-1fe6ea43263e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dm9sY2Fub2VzJTIwbmF0aW9uYWwlMjBwYXJrfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1667504319000-8133f9021cf8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z29yaWxsYSUyMHRyZWtraW5nfGVufDB8fDB8fHww",
    ],
    highlights: [
      "Mountain gorilla trekking",
      "Virunga volcanoes",
      "Dian Fossey legacy",
      "Golden monkeys",
    ],
    accommodations: [
      { name: "Bisate Lodge", type: "Luxury lodge", area: "Volcanoes region" },
      { name: "One&Only Gorilla's Nest", type: "Luxury lodge", area: "Kinigi" },
      { name: "Sabyinyo Silverback Lodge", type: "Safari lodge", area: "Kinigi" },
      { name: "Virunga Lodge", type: "Luxury lodge", area: "Musanze / lakes region" },
    ],
    relatedExperiences: ["rwanda-gorillas-golden-monkeys"],
  },
  {
    id: 10,
    slug: "kibale-national-park",
    name: "Kibale National Park",
    location: "Uganda",
    description: "Kibale National Park is the primate capital of the world, home to the largest concentration of chimpanzees in Africa. The lush rainforest offers incredible chimpanzee trekking experiences, along with 12 other primate species and rich birdlife.",
    images: [
      "https://res.cloudinary.com/dv093jd0o/image/upload/v1770452483/TTP23Kibale-11_wolzam.jpg",
      "https://res.cloudinary.com/dv093jd0o/image/upload/v1770451047/TTP23Kibale-26_mw2qgg.jpg",
      "https://res.cloudinary.com/dv093jd0o/image/upload/v1770452486/TTP23Kibale-23_k0zzc4.jpg"
    ],
    highlights: [
      "Chimpanzee tracking",
      "13 Primate species",
      "Bigodi Wetland Sanctuary",
      "Crater lakes nearby"
    ],
    accommodations: [
      { name: "Primate Lodge", type: "Safari lodge", area: "Inside Park" },
      { name: "Kyaninga Lodge", type: "Luxury lodge", area: "Crater Lake" },
      { name: "Turaco Treetops", type: "Lodge", area: "Near park" }
    ],
    relatedExperiences: ["uganda-primates-wildlife"]
  },
  {
    id: 11,
    slug: "lake-mburo",
    name: "Lake Mburo National Park",
    location: "Uganda",
    description: "A gem in western Uganda, Lake Mburo is the best place to see zebras and impalas. Its mosaic of habitats— acacia woodland, wetlands, and the lake itself—supports a wealth of wildlife, including leopards and hippos.",
    images: [
      "https://plus.unsplash.com/premium_photo-1696531220266-362a418da9b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFrZSUyMG1idXJvfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1553521306-9387d3795516?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFrZSUyMG1idXJvfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1667630728936-1fa7fcd466d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZSUyMG1idXJvfGVufDB8fDB8fHww"
    ],
    highlights: [
      "Zebras & Impalas",
      "Boat safaris",
      "Walking safaris",
      "Night game drives"
    ],
    accommodations: [
      { name: "Mihingo Lodge", type: "Luxury lodge", area: "Rocky outcrop" },
      { name: "Rwakobo Rock", type: "Mid-range lodge", area: "Park boundary" },
      { name: "Kigambira Safari Lodge", type: "Luxury lodge", area: "Inside park" }
    ],
    relatedExperiences: []
  },
  {
    id: 12,
    slug: "akagera-national-park",
    name: "Akagera National Park",
    location: "Rwanda",
    description: "Akagera is Central Africa's largest protected wetland and the last remaining refuge for savannah-adapted species in Rwanda. Following a successful reintroduction program, it is now home to the Big Five.",
    images: [
      "https://images.unsplash.com/photo-1667504248323-9e1f83d9af92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWthZ2VyYSUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1643367750096-0f9215fdd0ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGFrYWdlcmElMjBuYXRpb25hbCUyMHBhcmt8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1665069674584-c3cd26086998?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGFrYWdlcmElMjBuYXRpb25hbCUyMHBhcmt8ZW58MHx8MHx8fDA%3D"
    ],
    highlights: [
      "Big Five safari",
      "Boat trips on Lake Ihema",
      "Scenic savannah landscapes",
      "Conservation success story"
    ],
    accommodations: [
      { name: "Magashi Camp", type: "Luxury camp", area: "North Akagera" },
      { name: "Ruzizi Tented Lodge", type: "Tented lodge", area: "Lake Ihema" },
      { name: "Akagera Game Lodge", type: "Lodge", area: "South Akagera" }
    ],
    relatedExperiences: []
  },
  {
    id: 13,
    slug: "nyungwe-forest",
    name: "Nyungwe Forest National Park",
    location: "Rwanda",
    description: "One of the oldest rainforests in Africa, Nyungwe is rich in biodiversity and spectacularly beautiful. It is home to chimpanzees and 12 other primate species, along with the famous Canopy Walkway suspended above the treetops.",
    images: [
      "https://images.unsplash.com/photo-1489640818597-89b1edc97db5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bnl1bmd3ZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1507646870237-7c3855938575?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1498642279262-d962058e586c?w=800&auto=format&fit=crop&q=70"
    ],
    highlights: [
      "Chimpanzee trekking",
      "Canopy Walkway",
      "Tea plantations",
      "Birdwatching"
    ],
    accommodations: [
      { name: "One&Only Nyungwe House", type: "Ultra-luxury", area: "Tea plantation edge" },
      { name: "Nyungwe Top View Hill Hotel", type: "Mid-range", area: "Hilltop" }
    ],
    relatedExperiences: []
  },
  {
    id: 14,
    slug: "tsavo-east",
    name: "Tsavo East National Park",
    location: "Kenya",
    description: "One of Kenya's oldest and largest parks, Tsavo East is known for its dust-red elephants, the Galana River, and the Yatta Plateau. Its vast open spaces offer a wild and rugged safari experience.",
    images: [
      "https://images.unsplash.com/photo-1643735240112-adf0c4f45d31?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHNhdm8lMjBuYXRpb25hbCUyMHBhcmt8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1644325509085-532b0a7d0fc1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRzYXZvJTIwbmF0aW9uYWwlMjBwYXJrfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1609251237901-7bf2febea66a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRzYXZvJTIwbmF0aW9uYWwlMjBwYXJrfGVufDB8fDB8fHww"
    ],
    highlights: [
      "Red elephants",
      "Aruba Dam",
      "Mudanda Rock",
      "Lugard Falls"
    ],
    accommodations: [
      { name: "Satao Camp", type: "Tented camp", area: "Waterhole view" },
      { name: "Ashnil Aruba Lodge", type: "Lodge", area: "Aruba Dam" },
      { name: "Voi Wildlife Lodge", type: "Lodge", area: "Park boundary" }
    ],
    relatedExperiences: []
  },
  {
    id: 15,
    slug: "tsavo-west",
    name: "Tsavo West National Park",
    location: "Kenya",
    description: "Tsavo West offers a diverse landscape of volcanoes, lava flows, Mzima Springs, and rich wildlife. It's known for the 'Man-Eaters' history and the Shetani Lava Flow.",
    images: [
      "https://images.unsplash.com/photo-1623654973637-df20c734dee9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRzYXZvJTIwbmF0aW9uYWwlMjBwYXJrfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1623654693452-cff27a3ec63b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRzYXZvJTIwbmF0aW9uYWwlMjBwYXJrfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1670349202857-f4615ee3c977?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRzYXZvJTIwbmF0aW9uYWwlMjBwYXJrfGVufDB8fDB8fHww"
    ],
    highlights: [
      "Mzima Springs",
      "Shetani Lava Flow",
      "Rhino Sanctuary",
      "Leopard sightings"
    ],
    accommodations: [
      { name: "Finch Hattons", type: "Luxury camp", area: "Natural springs" },
      { name: "Kilaguni Serena Safari Lodge", type: "Lodge", area: "Waterhole view" },
      { name: "Severin Safari Camp", type: "Tented camp", area: "Savannah" }
    ],
    relatedExperiences: []
  },
  {
    id: 16,
    slug: "samburu-national-reserve",
    name: "Samburu National Reserve",
    location: "Kenya",
    description: "Located in the arid north, Samburu is famed for its unique 'Special Five' species: Beisa oryx, reticulated giraffe, Grevy's zebra, gerenuk, and Somali ostrich. Ideally situated along the Ewaso Ng'iro River.",
    images: [
      "https://images.unsplash.com/photo-1702498257321-6b5907efcda5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2FtYnVydSUyMG5hdGlvbmFsJTIwcmVzZXJ2ZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1558907685-9f38cd850e1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtYnVydSUyMG5hdGlvbmFsJTIwcmVzZXJ2ZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1565013371592-80cb53eeca79?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2FtYnVydSUyMG5hdGlvbmFsJTIwcmVzZXJ2ZXxlbnwwfHwwfHx8MA%3D%3D"
    ],
    highlights: [
      "Samburu Special Five",
      "Ewaso Ng'iro River",
      "Leopard sightings",
      "Samburu culture"
    ],
    accommodations: [
      { name: "Samburu Intrepids", type: "Tented camp", area: "Riverfront" },
      { name: "Elephant Bedroom Camp", type: "Luxury camp", area: "Riverfront" },
      { name: "Saruni Samburu", type: "Luxury lodge", area: "Kalama Conservancy" }
    ],
    relatedExperiences: []
  },
  {
    id: 17,
    slug: "lake-nakuru",
    name: "Lake Nakuru National Park",
    location: "Kenya",
    description: "Famous for its flamingo-filled shores (season dependent) and as a rhino sanctuary. The park surrounds the soda lake and offers easy game viewing of rhinos, lions, and leopards.",
    images: [
      "https://images.unsplash.com/photo-1623745493572-ef78d94249f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFrZSUyMG5ha3VydSUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1706394212063-1017e86d5d4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFrZSUyMG5ha3VydSUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1704562550146-894f47734265?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFrZSUyMG5ha3VydSUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D"
    ],
    highlights: [
      "Rhino sanctuary (Black & White)",
      "Flamingoes",
      "Lake views",
      "Rothschild's giraffes"
    ],
    accommodations: [
      { name: "Sarova Lion Hill Game Lodge", type: "Lodge", area: "Hillside" },
      { name: "The Cliff", type: "Luxury tented camp", area: "Cliff top" },
      { name: "Lake Nakuru Sopa Lodge", type: "Lodge", area: "High ground" }
    ],
    relatedExperiences: []
  },
  {
    id: 18,
    slug: "ol-pejeta",
    name: "Ol Pejeta Conservancy",
    location: "Kenya",
    description: "A leading conservancy in Laikipia, famous for hosting the last two northern white rhinos and a sanctuary for rescued chimpanzees. It offers high densities of wildlife and pioneering conservation experiences.",
    images: [
      "https://images.unsplash.com/photo-1618473392064-46ba36c54062?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2wlMjBwZWpldGElMjBjb25zZXJ2YW5jeXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1643706432932-8809d7086e4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b2wlMjBwZWpldGElMjBjb25zZXJ2YW5jeXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1643705343804-5f7e44b94db6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2wlMjBwZWpldGElMjBjb25zZXJ2YW5jeXxlbnwwfHwwfHx8MA%3D%3D"
    ],
    highlights: [
      "Northern White Rhinos",
      "Sweetwaters Chimpanzee Sanctuary",
      "Lion tracking",
      "Dog anti-poaching unit"
    ],
    accommodations: [
      { name: "Sweetwaters Serena Camp", type: "Tented camp", area: "Waterhole view" },
      { name: "Ol Pejeta Bush Camp", type: "Tented camp", area: "River" },
      { name: "Kicheche Laikipia Camp", type: "Eco camp", area: "Wilderness" }
    ],
    relatedExperiences: []
  },
  {
    id: 19,
    slug: "tarangire",
    name: "Tarangire National Park",
    location: "Tanzania",
    description: "Tarangire is famous for its massive elephant herds and iconic baobab trees. In the dry season, the Tarangire River becomes a magnet for thirsty wildlife, offering spectacular game viewing.",
    images: [
      "https://images.unsplash.com/photo-1707410437019-40c82e3a417f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFyYW5naXJlJTIwbmF0aW9uYWwlMjBwYXJrfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1723643728886-30011416dc5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGFyYW5naXJlJTIwbmF0aW9uYWwlMjBwYXJrfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1641133293394-90f79ea7c600?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGFyYW5naXJlJTIwbmF0aW9uYWwlMjBwYXJrfGVufDB8fDB8fHww"
    ],
    highlights: [
      "Huge elephant herds",
      "Baobab trees",
      "Tree-climbing lions",
      "Bird diversity"
    ],
    accommodations: [
      { name: "Tarangire Treetops", type: "Luxury lodge", area: "Private concession" },
      { name: "Lemala Mpingo Ridge", type: "Luxury lodge", area: "Hilltop" },
      { name: "Tarangire Safari Lodge", type: "Lodge", area: "River view" }
    ],
    relatedExperiences: []
  },
  {
    id: 20,
    slug: "lake-manyara",
    name: "Lake Manyara National Park",
    location: "Tanzania",
    description: "A scenic gem at the base of the Rift Valley escarpment, famous for tree-climbing lions and flocks of flamingos. The park offers a mix of groundwater forest, acacia woodland, and the alkaline lake.",
    images: [
      "https://images.unsplash.com/photo-1528827376221-8a866fddcafc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFrZSUyMG1hbnlhcmElMjBuYXRpb25hbCUyMHBhcmt8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1641133293407-9455bfb409aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFrZSUyMG1hbnlhcmElMjBuYXRpb25hbCUyMHBhcmt8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1677636665512-d210c919fe74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFrZSUyMG1hbnlhcmF8ZW58MHx8MHx8fDA%3D"
    ],
    highlights: [
      "Tree-climbing lions",
      "Flamingos",
      "Groundwater forest",
      "Baboon troops"
    ],
    accommodations: [
      { name: "Lake Manyara Tree Lodge", type: "Luxury lodge", area: "Mahogany forest" },
      { name: "Manyara Green Camp", type: "Eco camp", area: "Riverbed" },
      { name: "Kirurumu Manyara Lodge", type: "Lodge", area: "Escarpment edge" }
    ],
    relatedExperiences: []
  },
  {
    id: 21,
    slug: "selous-game-reserve",
    name: "Nyerere National Park (Selous)",
    location: "Tanzania",
    description: "One of the largest faunal reserves in the world, Nyerere (formerly Selous) offers a raw and untouched wilderness experience. Boat safaris on the Rufiji River and walking safaris are key highlights.",
    images: [
      "https://images.unsplash.com/photo-1695304693615-1b93195c57ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bnllcmVyZSUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1695303657304-7c7d76a69e6b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bnllcmVyZSUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1695304909172-e35aa636ec0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bnllcmVyZSUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D"
    ],
    highlights: [
      "Rufiji River boat safaris",
      "Walking safaris",
      "Wild dogs",
      "Fly camping"
    ],
    accommodations: [
      { name: "Siwandu Camp", type: "Luxury camp", area: "Lake Nzerakera" },
      { name: "Beho Beho", type: "Luxury lodge", area: "Highlands" },
      { name: "Sand Rivers Selous", type: "Luxury lodge", area: "Riverfront" }
    ],
    relatedExperiences: []
  },
  {
    id: 22,
    slug: "ruaha-national-park",
    name: "Ruaha National Park",
    location: "Tanzania",
    description: "Ruaha is known for its rugged landscape, baobab-studded hills, and large predator populations, especially lions. It offers a remote and authentic safari experience away from the crowds.",
    images: [
      "https://images.unsplash.com/photo-1516899843768-460939230e51?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cnVhaGElMjBuYXRpb25hbCUyMHBhcmt8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1563812543431-7e8c363d686f?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1534958178-59c25da7347a?w=800&auto=format&fit=crop&q=70"
    ],
    highlights: [
      "Large lion prides",
      "Wild dogs",
      "Giant baobabs",
      "Greater Kudu"
    ],
    accommodations: [
      { name: "Jabali Ridge", type: "Luxury lodge", area: "Rocky outcrop" },
      { name: "Ruaha River Lodge", type: "Lodge", area: "Riverfront" },
      { name: "Ikuka Safari Camp", type: "Luxury camp", area: "Escarpment" }
    ],
    relatedExperiences: []
  },
  {
    id: 23,
    slug: "kilimanjaro-national-park",
    name: "Mount Kilimanjaro National Park",
    location: "Tanzania",
    description: "Home to the highest peak in Africa, this park protects the varied ecosystems of Mount Kilimanjaro. While climbing to the summit is the main draw, the lower slopes offer lush rainforest and wildlife.",
    images: [
      "https://images.unsplash.com/photo-1635865897833-38bc0f8aee44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW91bnQlMjBraWxpbWFuamFyb3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1464908394256-327852e6539a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vdW50JTIwa2lsaW1hbmphcm98ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1525535816528-974e4b19eb51?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vdW50JTIwa2lsaW1hbmphcm98ZW58MHx8MHx8fDA%3D"
    ],
    highlights: [
      "Uhuru Peak (5,895m)",
      "Diverse climate zones",
      "Shira Plateau",
      "Chala Crater Lake"
    ],
    accommodations: [
      { name: "Kaliwa Lodge", type: "Lodge", area: "Machame foothills" },
      { name: "Ameg Lodge", type: "Lodge", area: "Moshi" },
      { name: "Kambi ya Tembo", type: "Camp", area: "Sinya concession" }
    ],
    relatedExperiences: []
  },
  {
    id: 24,
    slug: "mikumi-national-park",
    name: "Mikumi National Park",
    location: "Tanzania",
    description: "Often compared to the Serengeti, Mikumi's Mkata Floodplain is the heart of the park. It's easily accessible and offers excellent sightings of elephants, buffaloes, zebras, and lions.",
    images: [
      "https://images.unsplash.com/photo-1735150671620-368651d477a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWlrdW1pJTIwbmF0aW9uYWwlMjBwYXJrfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1735150671771-2e542c558bed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWlrdW1pJTIwbmF0aW9uYWwlMjBwYXJrfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1673138631643-c3fd613afdc7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWlrdW1pJTIwbmF0aW9uYWwlMjBwYXJrfGVufDB8fDB8fHww"
    ],
    highlights: [
      "Mkata Floodplain",
      "Hippo pools",
      "Eland (world's largest antelope)",
      "Birdwatching"
    ],
    accommodations: [
      { name: "Vuma Hills Tented Camp", type: "Tented camp", area: "Hillside" },
      { name: "Stanley's Kopje", type: "Camp", area: "Rocky outcrop" },
      { name: "Mikumi Wildlife Camp", type: "Lodge", area: "Waterhole view" }
    ],
    relatedExperiences: []
  },
  {
    id: 25,
    slug: "semuliki-national-park",
    name: "Semuliki National Park",
    location: "Uganda",
    description: "Semuliki is a sprawling extension of the Ituri Forest of the DR Congo. It is one of Africa’s most biodiverse forests and is famous for its Sempaya Hot Springs and rich birdlife.",
    images: [
      "https://res.cloudinary.com/dv093jd0o/image/upload/v1770453167/TTP23Semuliki-35_kfzyxm.jpg",
      "https://res.cloudinary.com/dv093jd0o/image/upload/v1770453171/TTP23Semuliki-24_je2uzr.jpg",
      "https://res.cloudinary.com/dv093jd0o/image/upload/v1770453170/TTP23Semuliki-16_cxnxnj.jpg"
    ],
    highlights: [
      "Sempaya Hot Springs",
      "Birdwatching (Shoebill)",
      "Pygmy antelope",
      "Ituri forest experience"
    ],
    accommodations: [
      { name: "Semliki Safari Lodge", type: "Luxury lodge", area: "Semliki Valley" },
      { name: "Ntoroko Game Lodge", type: "Lodge", area: "Lake Albert" }
    ],
    relatedExperiences: []
  },
  {
    id: 26,
    slug: "mgahinga-gorilla",
    name: "Mgahinga Gorilla National Park",
    location: "Uganda",
    description: "Where gold meets silver: Mgahinga is the place to trek golden monkeys and mountain gorillas. It sits high in the clouds, covering three conical volcanoes of the Virunga range.",
    images: [
      "https://res.cloudinary.com/dv093jd0o/image/upload/v1770453960/TTP23Mgahinga-11_vfsu88.jpg",
      "https://res.cloudinary.com/dv093jd0o/image/upload/v1770453962/TTP23Mgahinga-23_ikwzay.jpg",
      "https://res.cloudinary.com/dv093jd0o/image/upload/v1770453949/TTP23Mgahinga-29_dzoeyk.jpg"
    ],
    highlights: [
      "Gorilla trekking",
      "Golden monkeys",
      "Volcano hiking",
      "Batwa Trail"
    ],
    accommodations: [
      { name: "Mount Gahinga Lodge", type: "Luxury lodge", area: "Park entrance" },
      { name: "Travelers Rest Hotel", type: "Historic hotel", area: "Kisoro" }
    ],
    relatedExperiences: []
  },
  {
    id: 28,
    slug: "gishwati-mukura",
    name: "Gishwati-Mukura National Park",
    location: "Rwanda",
    description: "Rwanda's newest national park, Gishwati-Mukura is a restoration success story. It comprises two separate forests and is home to chimpanzees, golden monkeys, and blue monkeys.",
    images: [
      "https://images.unsplash.com/photo-1448375240586-dfd8d395ea6c?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&auto=format&fit=crop&q=70"
    ],
    highlights: [
      "Primate tracking",
      "Birdwatching",
      "Forest restoration",
      "Community tea experiences"
    ],
    accommodations: [
      { name: "Forest of Hope Guest House", type: "Guesthouse", area: "Gishwati" },
      { name: "The Retreat", type: "Luxury hotel", area: "Kigali (Base)" }
    ],
    relatedExperiences: []
  },
  {
    id: 29,
    slug: "mount-kenya",
    name: "Mount Kenya National Park",
    location: "Kenya",
    description: "Africa's second-highest mountain, Mount Kenya offers pristine wilderness, lakes, glaciers, and peaks of great beauty. It's a UNESCO World Heritage site and a challenging alternative to Kilimanjaro.",
    images: [
      "https://images.unsplash.com/photo-1646159755791-54e741749028?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnQlMjBrZW55YXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1618856445394-259e67220916?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnQlMjBrZW55YXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1721171260453-00a76bbda91a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnQlMjBrZW55YXxlbnwwfHwwfHx8MA%3D%3D"
    ],
    highlights: [
      "Point Lenana climb",
      "Afro-alpine flora",
      "Mountain bongos",
      "Glacial lakes"
    ],
    accommodations: [
      { name: "Fairmont Mount Kenya Safari Club", type: "Luxury hotel", area: "Nanyuki" },
      { name: "Serena Mountain Lodge", type: "Lodge", area: "Forest zone" }
    ],
    relatedExperiences: []
  },
  {
    id: 30,
    slug: "aberdare-national-park",
    name: "Aberdare National Park",
    location: "Kenya",
    description: "The Aberdares are a high-altitude moorland and forest range. Famous for atmospheric game viewing at Treetops-style lodges where wildlife comes to the salt licks, and for spectacular waterfalls.",
    images: [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1463995531770-98528990c749?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1456356627738-3a96db6d54cb?w=800&auto=format&fit=crop&q=70"
    ],
    highlights: [
      "Karuru Falls",
      "Bongo antelope",
      "Fishing in mountain streams",
      "High moorland scenery"
    ],
    accommodations: [
      { name: "The Ark", type: "Lodge", area: "Salient" },
      { name: "Aberdare Country Club", type: "Hotel", area: "Mweiga" },
      { name: "Treetops Lodge", type: "Historic lodge", area: "Salient" }
    ],
    relatedExperiences: []
  },
  {
    id: 31,
    slug: "hells-gate",
    name: "Hell's Gate National Park",
    location: "Kenya",
    description: "Named for the intense geothermal activity within its boundaries, Hell's Gate is a remarkable quarter of the Great Rift Valley. Spectacular scenery including soaring cliffs and gorges makes it perfect for hiking and cycling safaris.",
    images: [
      "https://images.unsplash.com/photo-1596708465064-a0f124c65207?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1518182170546-0766ce6fec56?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1506543730435-e2d1d8dc66db?w=800&auto=format&fit=crop&q=70"
    ],
    highlights: [
      "Cycling among wildlife",
      "Ol Njorowa Gorge walk",
      "Geothermal steam",
      "Fisher's Tower climbing"
    ],
    accommodations: [
      { name: "Enashipai Resort & Spa", type: "Resort", area: "Lake Naivasha" },
      { name: "Camp Carnelley's", type: "Camp", area: "Lake Naivasha" }
    ],
    relatedExperiences: []
  },
  {
    id: 32,
    slug: "nairobi-national-park",
    name: "Nairobi National Park",
    location: "Kenya",
    description: "The only national park in the world within a capital city. Nairobi National Park offers the surreal experience of viewing rhinos, lions, and giraffes with the city skyline as a backdrop.",
    images: [
      "https://images.unsplash.com/photo-1635595358293-03620e36be48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFpcm9iaSUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1599555217300-2952310d238e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5haXJvYmklMjBuYXRpb25hbCUyMHBhcmt8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1634662101368-fa8021773862?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpcm9iaSUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D"
    ],
    highlights: [
      "City skyline backdrop",
      "Rhino sanctuary",
      "Lion sightings",
      "Ivory Burning Site"
    ],
    accommodations: [
      { name: "The Emakoko", type: "Luxury lodge", area: "Park border" },
      { name: "Nairobi Tented Camp", type: "Tented camp", area: "Inside park" },
      { name: "Hemingways Nairobi", type: "Luxury hotel", area: "Karen" }
    ],
    relatedExperiences: []
  }
  
]

