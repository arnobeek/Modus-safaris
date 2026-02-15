/**
 * Static destinations data for East Africa safari listings.
 * Each destination has: id, slug, name, location, description, images, highlights, accommodations.
 */

export const destinations = [
  {
    id: 1,
    slug: "bwindi-impenetrable-forest",
    name: "Bwindi Impenetrable National Park",
    location: "Uganda",
    description:
      "Bwindi Impenetrable National Park, located in south-western Uganda, is one of Africa's most biologically diverse rainforests and a UNESCO Natural World Heritage Site. Covering 321 km² and rising from 1,160m to 2,607m above sea level, Bwindi protects one of the oldest and most ecologically complex forests on the continent.",
    shortDescription: "A UNESCO World Heritage Site and the world's premier destination for mountain gorilla trekking.",
    images: [
      "https://images.unsplash.com/photo-1653645190009-1e13eb0fdb7e?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1620148878899-7c9b16ce9651?w=600&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1653645800971-b46f2322da3c?w=600&auto=format&fit=crop&q=60",
    ],
    highlights: [
      "Mountain gorilla trekking",
      "UNESCO World Heritage Site",
      "Primate capital of the world",
      "Extraordinary birding paradise",
      "Ancient rainforest ecosystem",
      "Batwa cultural experiences",
    ],
    sections: [
      {
        title: "Mountain Gorilla Trekking Experience",
        content: [
          { type: "paragraph", text: "Bwindi is globally renowned as the world's leading destination for mountain gorilla trekking, offering visitors a once-in-a-lifetime encounter with these gentle giants in their natural habitat." },
          { type: "paragraph", text: "Bwindi is home to over half of the world's remaining mountain gorilla population, with 15 habituated gorilla families available for tourism. Gorilla trekking is conducted from four main trailheads:" },
          { type: "list", items: ["Buhoma (North West)", "Ruhija (East)", "Rushaga (South)", "Nkuringo (South West)"] },
          { type: "paragraph", text: "Each gorilla group is visited by a maximum of 8 trekkers per day, ensuring a low-impact, intimate wildlife experience. Treks vary in difficulty and duration, lasting anywhere from a few hours to a full day, depending on the movement of the gorilla family. Visitors spend a magical one hour in the presence of the gorillas, strictly following conservation guidelines set by Uganda Wildlife Authority." },
          { type: "paragraph", text: "Minimum age for gorilla trekking: 15 years. Permits: Must be booked in advance." },
        ]
      },
      {
        title: "Biodiversity & Wildlife",
        content: [
          { type: "paragraph", text: "Beyond gorillas, Bwindi hosts extraordinary biodiversity:" },
          {
            type: "list", items: [
              "120 mammal species, including chimpanzees, L'Hoest's monkeys, blue monkeys, and forest elephants",
              "357 bird species, making it one of Africa's top birding destinations",
              "23 Albertine Rift endemics, representing over 90% of all Albertine Rift endemic birds",
              "310 butterflies, 200 tree species, and 51 reptiles"
            ]
          },
          { type: "paragraph", text: "Notable bird species include the African green broadbill, Shelley's crimson wing, short-tailed warbler, and blue-headed sunbird, with several species found nowhere else in Uganda." },
        ]
      },
      {
        title: "Bird Watching Paradise",
        content: [
          { type: "paragraph", text: "Bwindi is a premier destination for serious birders. Key birding trails include:" },
          {
            type: "list", items: [
              "Mubwindi Swamp Trail (Ruhija) – famous for Albertine Rift endemics",
              "Bamboo Trail to Rwamunyoni Peak (2,607m)",
              "Munyaga River Trail (Buhoma)",
              "River Ivi Trail connecting Buhoma and Nkuringo"
            ]
          },
        ]
      },
      {
        title: "Nature Walks & Scenic Trails",
        content: [
          { type: "paragraph", text: "For travelers seeking relaxed forest exploration, Bwindi offers guided nature walks:" },
          {
            type: "list", items: [
              "Waterfall Trail – a scenic hike through pristine rainforest leading to three crystal-clear waterfalls",
              "Rushura Hill Trail – panoramic views of the Albertine Rift Valley, Lake Edward, and the Rwenzori Mountains on clear days",
              "Munyaga River Trail – ideal for birding and primate viewing along the forest edge"
            ]
          },
        ]
      },
      {
        title: "Culture & Local Communities",
        content: [
          { type: "paragraph", text: "Bwindi is surrounded by rich cultural heritage:" },
          {
            type: "list", items: [
              "Bakiga communities, known for their impressive terraced hillsides and agricultural traditions",
              "Batwa (Pygmy) communities, the forest's original hunter-gatherers, now living at the forest edge"
            ]
          },
          { type: "paragraph", text: "Community walks offer visitors insight into traditional lifestyles, cultural performances, and community-led conservation initiatives, supporting responsible and inclusive tourism." },
        ]
      },
      {
        title: "Climate & When to Visit",
        content: [
          { type: "paragraph", text: "Bwindi can be visited year-round. However, visitors should expect cool temperatures (7°C – 20°C) and high rainfall (up to 2,390 mm annually). Cold mornings and evenings are common, especially in June and July. Warm clothing, waterproof gear, and sturdy hiking boots are essential." },
        ]
      },
      {
        title: "Accommodation Options",
        content: [
          { type: "paragraph", text: "Accommodation is available at all four trailheads, ranging from luxury lodges to budget camps. Visitors trekking in Ruhija may also stay in Kabale or Lake Bunyonyi, while Rushaga and Nkuringo trekkers can stay near Kisoro or Lake Mutanda." },
        ]
      },
      {
        title: "Access & Transportation",
        content: [
          { type: "paragraph", text: "By Road: Approximately 460 km from Kampala. Best accessed via Mbarara – Ntungamo – Rukungiri – Kihihi – Buhoma. Southern trailheads accessed via Kabale – Kisoro – Muko. 4×4 vehicle recommended." },
          { type: "paragraph", text: "By Air: Scheduled flights from Entebbe or Kajjansi to Kisoro, Savannah, or Ishasha airstrips. Road transfers arranged upon arrival." },
        ]
      },
      {
        title: "Why Visit Bwindi with Modus Safaris?",
        content: [
          { type: "paragraph", text: "At Modus Safaris UG Limited, we design immersive, responsible, and expertly guided Bwindi experiences—combining gorilla trekking, birding, nature walks, and authentic community encounters while prioritizing conservation and guest safety." },
        ]
      }
    ],
    accommodations: [
      { name: "Sanctuary Gorilla Forest Camp", type: "Luxury tented camp", area: "Buhoma" },
      { name: "Buhoma Lodge", type: "Safari lodge", area: "Buhoma" },
      { name: "Mahogany Springs", type: "Luxury lodge", area: "Buhoma" },
      { name: "Nkuringo Bwindi Gorilla Lodge", type: "Safari lodge", area: "Nkuringo" },
      { name: "Clouds Mountain Gorilla Lodge", type: "Luxury lodge", area: "Nkuringo" },
    ],
    latitude: -1.0456,
    longitude: 29.6152,
    locationName: "Bwindi Impenetrable National Park",
    relatedExperiences: ["gorilla-trekking-bwindi", "uganda-primates-wildlife"],
  },
  {
    id: 2,
    slug: "murchison-falls",
    name: "Murchison Falls National Park",
    location: "Uganda",
    description: "Where the Nile explodes through a narrow gorge, Murchison Falls is Uganda's largest and oldest protected area. This spectacular wilderness is where the world’s longest river forces itself through a 6-metre-wide gap, plunging 45 metres into the Devil’s Cauldron — a natural wonder that defines the East African safari experience.",
    shortDescription: "Uganda's largest park featuring the world's most powerful waterfall and abundant wildlife on the Nile.",
    images: [
      "https://images.unsplash.com/photo-1704183683740-1400a49816b7?w=800&auto=format&fit=crop&q=70",
      "https://res.cloudinary.com/dv093jd0o/image/upload/v1770451664/TTP23Murchison-10_cqc1yk.jpg",
      "https://res.cloudinary.com/dv093jd0o/image/upload/v1770451664/TTP23Murchison-27_agbmyt.jpg",
    ],
    highlights: [
      "Murchison Falls & Nile boat safaris",
      "Buligi Peninsula game drives",
      "76 mammal species (Elephants, Giraffes)",
      "Over 451 bird species (Shoebill stork)",
      "Chimpanzee tracking at Kaniyo Pabidi",
      "Nile Delta water-based safaris",
    ],
    sections: [
      {
        title: "Wildlife & Scenic Landscapes",
        content: [
          { type: "paragraph", text: "Murchison Falls National Park (3,840 km²) lies at the northern end of the Albertine Rift Valley, where savannah plains, riverine woodland, and wetlands create a dramatic landscape. The riverbanks below the falls provide one of Uganda’s finest wildlife spectacles." },
          {
            type: "list", items: [
              "76 mammal species including elephants, lions, and leopards",
              "Huge herds of buffaloes, Uganda kobs, and hippos",
              "Over 451 bird species for premier birding",
              "Rothschild’s giraffes frequently seen on the northern bank"
            ]
          }
        ]
      },
      {
        title: "Game Viewing – Buligi & Heart of Murchison",
        content: [
          { type: "paragraph", text: "The Buligi Peninsula is the park’s prime grassland triangle bounded by the Victoria and Albert Niles, where game drives regularly yield sightings of big cats and massive herds. The Heart of Murchison is an emerging hotspot further south known for its large kob populations and lion sightings." }
        ]
      },
      {
        title: "Nile Boat Cruises & Water-Based Safaris",
        content: [
          { type: "paragraph", text: "Water-based activities are the soul of Murchison Falls. The classic launch cruise to the base of the falls offers exceptional close-ups of hippos, crocodiles, and elephants at Fajao Gorge. Downstream, the Nile Delta cruise explores a maze of wetland channels, famous for spotting the elusive Shoebill stork." }
        ]
      },
      {
        title: "Forest Walks & Chimpanzee Tracking",
        content: [
          { type: "paragraph", text: "In the southern Kaniyo Pabidi Forest (Budongo), visitors can track habituated chimpanzees with experienced guides. This pristine forest is also a hotspot for Albertine Rift endemics and rare forest bird species." }
        ]
      },
      {
        title: "Top of the Falls Experience",
        content: [
          { type: "paragraph", text: "Reachable by vehicle or a guided hike from the river base, the Top of the Falls viewpoint allows you to hear and feel the raw power of the Nile as it crashes through the narrow gorge—an unforgettable sensory experience." }
        ]
      },
      {
        title: "Birding, Ballooning & Sport Fishing",
        content: [
          { type: "paragraph", text: "Beyond standard game viewing, Murchison offers hot air balloon safaris over the plains and world-class sport fishing below the falls (record Nile perch catch: 108 kg). It is a top-tier destination for specialized birding tours." }
        ]
      },
      {
        title: "Climate & Best Time to Visit",
        content: [
          { type: "paragraph", text: "The park has a tropical climate (25–32°C). The dry seasons (December–February and June–September) are best for wildlife viewing as animals congregate at water sources. Birding is excellent in January–March." }
        ]
      },
      {
        title: "Access & Logistics",
        content: [
          { type: "paragraph", text: "Murchison is approximately 305 km (4 hours) from Kampala. It is accessible by road via Masindi or by air with daily flights from Entebbe to Pakuba, Chobe, or Bugungu airstrips. A vehicle ferry crosses the Nile at Paraa daily." }
        ]
      },
      {
        title: "Ziwa Rhino Sanctuary (En Route)",
        content: [
          { type: "paragraph", text: "Located just outside the park, Ziwa offers the only opportunity in Uganda to track southern white rhinos on foot, making it an essential stop for a complete 'Big Five' safari circuit." }
        ]
      },
      {
        title: "Why Visit Murchison Falls with Modus Safaris?",
        content: [
          { type: "paragraph", text: "Modus Safaris UG Limited curates seamless Murchison Falls experiences that combine game drives, Nile cruises, forest walks, and conservation-focused activities—delivered with professional guides, comfortable logistics, and responsible tourism practices." }
        ]
      }
    ],
    accommodations: [
      { name: "Paraa Safari Lodge", type: "Classic safari lodge", area: "Paraa / Nile River" },
      { name: "Nile Safari Lodge", type: "Luxury eco-lodge", area: "Southern bank" },
      { name: "Chobe Safari Lodge", type: "Luxury safari lodge", area: "Karuma Falls region" },
      { name: "Bakers Lodge", type: "Lodge", area: "Southern bank" },
      { name: "Murchison River Lodge", type: "Lodge", area: "Southern bank" },
      { name: "Nile Delta Camp", type: "Tented camp", area: "Delta region" }
    ],
    latitude: 2.1876,
    longitude: 31.7816,
    locationName: "Murchison Falls National Park",
    relatedExperiences: ["uganda-primates-wildlife"],
  },
  {
    id: 3,
    slug: "queen-elizabeth",
    name: "Queen Elizabeth National Park",
    location: "Uganda",
    description: "Lying astride the Equator in western Uganda, Queen Elizabeth National Park is the country’s most visited protected area. It offers an extraordinary diversity of landscapes—from open savannah and dense forests to crater lakes and the famous Kazinga Channel—making it one of East Africa’s most visually striking safari destinations.",
    shortDescription: "A diverse park famous for its tree-climbing lions, Kazinga Channel boat safaris, and volcanic crater lakes.",
    images: [
      "https://images.unsplash.com/photo-1660988251043-7998126125c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHF1ZWVuJTIwZWxpemFiZXRoJTIwbmF0aW9uYWwlMjBwYXJrfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1420537659459-1e231ca42aa1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cXVlZW4lMjBlbGl6YWJldGglMjBuYXRpb25hbCUyMHBhcmt8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1663116403935-96b35772b184?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHF1ZWVuJTIwZWxpemFiZXRoJTIwbmF0aW9uYWwlMjBwYXJrfGVufDB8fDB8fHww",
    ],
    highlights: [
      "Kazinga Channel boat safaris",
      "Tree-climbing lions of Ishasha",
      "Equator crossing & markers",
      "Over 600 bird species",
      "Kyambura Gorge chimpanzees",
      "Volcanic Craters & Salt Lakes"
    ],
    sections: [
      {
        title: "Wildlife & Biodiversity",
        content: [
          { type: "paragraph", text: "QENP boasts the highest mammal diversity of any Ugandan park, hosting over 95 mammal species and more than 600 bird species. Its ecosystems support a unique blend of East African savannah and Central African forest species." },
          {
            type: "list", items: [
              "Big Four: Elephants, lions, leopards, and buffaloes",
              "Highest bird count in Uganda (600+ species)",
              "Concentrated populations of hippos and crocodiles",
              "Albertine Rift endemics & migratory birds"
            ]
          }
        ]
      },
      {
        title: "Game Viewing – Kasenyi & Ishasha",
        content: [
          { type: "paragraph", text: "The Kasenyi Plains provide classic savannah game viewing where herds of Uganda kob attract resident lion prides. In the southern Ishasha sector, you can witness the world-famous tree-climbing lions lounging in ancient fig trees against the backdrop of vast rift valley skies." }
        ]
      },
      {
        title: "Kazinga Channel Boat Safaris",
        content: [
          { type: "paragraph", text: "The 32-km natural waterway linking Lake George and Lake Edward is the park’s crown jewel. A 2-hour launch cruise offers unparalleled close-up views of hundreds of hippos, crocodiles, and waterbirds, with elephants and buffaloes frequently seen along the shoreline." }
        ]
      },
      {
        title: "Forest Walks & Primate Tracking",
        content: [
          { type: "paragraph", text: "Descend into the 'Valley of Apes' at Kyambura Gorge for a dramatic chimpanzee tracking experience. Nearby, Maramagambo Forest offers nature walks through pristine canopy to spot various primates, crater lakes, and the famous Bat Cave—home to a bat-feeding python." }
        ]
      },
      {
        title: "Volcanic Craters & Scenic Heritage",
        content: [
          { type: "paragraph", text: "The 27-km Crater Drive north of Mweya winds around rim edges of extinct volcanic craters, offering panoramic views of the rift valley. Highlights include the Queen’s Pavilion, Equator markers, and the traditional salt mines of Lake Katwe." }
        ]
      },
      {
        title: "Cultural Experiences",
        content: [
          { type: "paragraph", text: "The park is surrounded by culturally rich communities, including the Basongora pastoralists and Bakonzo farmers. Modus Safaris facilitates guided cultural encounters that offer insights into local traditions, music, and community-led conservation." }
        ]
      },
      {
        title: "Bird Watching Hotspot",
        content: [
          { type: "paragraph", text: "QENP is an Important Birding Area. Beyond the channel, visitors can see seasonal flamingos at Lake Munyanyange and search for the elusive shoebill stork on the remote Lake Edward Flats in the Ishasha sector." }
        ]
      },
      {
        title: "Climate & Best Time to Visit",
        content: [
          { type: "paragraph", text: "Temperatures range from 18–28°C, with cool nights. The park is a year-round destination, though dry seasons (June–August, December–February) offer the most intensive wildlife viewing." }
        ]
      },
      {
        title: "Access & Connectivity",
        content: [
          { type: "paragraph", text: "QENP is easily reached via Fort Portal or Mbarara. Its position makes it the perfect bridge between Bwindi Impenetrable and Kibale National Park. Domestic flights are available to Kasese, Mweya, and Ishasha airstrips." }
        ]
      },
      {
        title: "Why Visit Queen Elizabeth with Modus Safaris?",
        content: [
          { type: "paragraph", text: "Modus Safaris UG Limited designs expertly guided Queen Elizabeth safaris that blend classic game drives, scenic boat cruises, forest walks, cultural encounters, and responsible tourism—delivering rich wildlife experiences across Uganda’s most diverse park." }
        ]
      }
    ],
    accommodations: [
      { name: "Mweya Safari Lodge", type: "Classic luxury lodge", area: "Mweya Peninsula" },
      { name: "Ishasha Wilderness Camp", type: "Luxury tented camp", area: "Ishasha sector" },
      { name: "Kyambura Gorge Lodge", type: "Luxury eco-lodge", area: "Kyambura Gorge" },
      { name: "Elephant Plains Lodge", type: "Safari lodge", area: "Katunguru" },
      { name: "Twin Lakes Safari Lodge", type: "Boutique lodge", area: "Rubirizi" },
      { name: "Marafiki Safari Lodge", type: "Mid-range safari lodge", area: "Katunguru" }
    ],
    latitude: -0.3706,
    longitude: 29.9577,
    locationName: "Queen Elizabeth National Park",
    relatedExperiences: ["uganda-primates-wildlife"],
  },
  {
    id: 4,
    slug: "kidepo-valley",
    name: "Kidepo Valley National Park",
    location: "Uganda",
    description: "Kidepo Valley National Park is one of East Africa’s most remote and spectacular wilderness areas. Covering 1,442 km² in Uganda’s far north-eastern corner, it offers dramatic landscapes of vast open plains, rugged mountains, and sweeping valleys, making it one of Africa’s most scenic safari destinations.",
    shortDescription: "Africa's last true frontier—a remote wilderness of vast plains and dramatic mountain landscapes.",
    images: [
      "https://res.cloudinary.com/dv093jd0o/image/upload/v1770452177/TTP23Kidepo-35_n8xqhu.jpg",
      "https://res.cloudinary.com/dv093jd0o/image/upload/v1770452177/TTP23Kidepo-21_ott08t.jpg",
      "https://res.cloudinary.com/dv093jd0o/image/upload/v1770452165/TTP23Kidepo-69_dqoexz.jpg",
    ],
    highlights: [
      "Untouched remote wilderness",
      "86 mammal species (Cheetah, Caracal)",
      "Over 475 bird species (Ostrich, Raptors)",
      "Vast plains & rugged mountain backdrop",
      "Karamojong & Ik cultural encounters",
      "Scenic Narus & Kidepo Valley drives",
    ],
    sections: [
      {
        title: "Landscapes & Unique Ecosystem",
        content: [
          { type: "paragraph", text: "Kidepo is shaped around two seasonal river systems: the wildlife-rich Narus Valley and the drier, vast Kidepo Valley. The backdrop of the Morungule Mountains and Mount Zulia gives the park a cinematic atmosphere unlike any other in Uganda." },
          { type: "paragraph", text: "During the dry season, wildlife concentrates around the permanent pools in the Narus Valley, making it the prime area for game viewing and park activities." }
        ]
      },
      {
        title: "Wildlife & Birdlife",
        content: [
          { type: "paragraph", text: "Kidepo is the only Ugandan refuge for several rare species, including cheetah, bat-eared fox, striped hyena, and caracal. It also supports the Big Four and over 475 bird species." },
          {
            type: "list", items: [
              "Rare mammals: Cheetah, Bat-eared fox, Striped hyena, Caracal",
              "Classic safari: Lions, Leopards, Elephants, Buffaloes, Rothschild's giraffes",
              "Iconic birds: Ostrich, Secretary bird, Kori bustard, Abyssinian roller",
              "Rare raptors: Lappet-faced vulture, Lesser kestrel"
            ]
          }
        ]
      },
      {
        title: "Game Drives & Scenic Excursions",
        content: [
          { type: "paragraph", text: "The Narus Valley is the park's wildlife hub, offering views of large buffalo herds, lions on rocky outcrops, and giraffes on the slopes. For adventure, the 30km drive into the Kidepo Valley leads to the Kanangorok Hot Springs near the South Sudan border, offering epic scale and solitude." }
        ]
      },
      {
        title: "Walking Safaris & Culture",
        content: [
          { type: "paragraph", text: "Kidepo offers some of Uganda's richest cultural encounters with the Karamojong and Ik communities. Guests can also enjoy guided nature walks around Apoka or longer hikes in the Morungule range for an immersive wilderness experience." }
        ]
      },
      {
        title: "Climate, Access & Accommodation",
        content: [
          { type: "paragraph", text: "The semi-arid climate makes the dry season best for wildlife viewing. Kidepo is approx. 571 km from Kampala and requires a 4WD vehicle, though it is also served by scheduled and charter flights to the Kidepo airstrip. Accommodations range from high-end luxury to scenic campsites." }
        ]
      },
      {
        title: "Why Visit Kidepo with Modus Safaris?",
        content: [
          { type: "paragraph", text: "With Modus Safaris UG Limited, Kidepo becomes a true expedition-style safari featuring expert guiding in remote wilderness, deep cultural immersion with the Karamojong, and authentic, uncrowded wildlife encounters in one of Africa's last true frontiers." }
        ]
      }
    ],
    accommodations: [
      { name: "Apoka Safari Lodge", type: "Luxury lodge", area: "Inside Kidepo" },
      { name: "Kidepo Savannah Lodge", type: "Safari lodge", area: "Kalokudo Gate area" },
      { name: "Adere Safari Lodge", type: "Safari lodge", area: "Near park boundary" },
      { name: "Apoka Rest Camp", type: "UWA Hostel", area: "Inside Park" }
    ],
    latitude: 3.7333,
    longitude: 33.8667,
    locationName: "Kidepo Valley National Park",
    relatedExperiences: ["uganda-wildlife-culture-14-days"]
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
    latitude: -1.5055,
    longitude: 35.2509,
    locationName: "Maasai Mara National Reserve",
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
    latitude: -2.6521,
    longitude: 37.2606,
    locationName: "Amboseli National Park",
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
    latitude: -2.3333,
    longitude: 34.8333,
    locationName: "Serengeti National Park",
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
    latitude: -3.2435,
    longitude: 35.4878,
    locationName: "Ngorongoro Conservation Area",
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
    latitude: -1.4823,
    longitude: 29.4925,
    locationName: "Volcanoes National Park",
    relatedExperiences: ["rwanda-gorillas-golden-monkeys"],
  },
  {
    id: 10,
    slug: "kibale-national-park",
    name: "Kibale National Park",
    location: "Uganda",
    description: "Kibale National Park is Uganda’s leading primate destination and one of Africa’s most important tropical forests for biodiversity research. Home to Uganda’s largest population of chimpanzees and the greatest diversity of primates in the country, it offers a rich mosaic of habitats set against the scenic backdrop of crater lakes and tea plantations.",
    shortDescription: "Uganda's premier primate capital, home to 13 primate species and the best chimpanzee tracking in Africa.",
    images: [
      "https://res.cloudinary.com/dv093jd0o/image/upload/v1770452483/TTP23Kibale-11_wolzam.jpg",
      "https://res.cloudinary.com/dv093jd0o/image/upload/v1770451047/TTP23Kibale-26_mw2qgg.jpg",
      "https://res.cloudinary.com/dv093jd0o/image/upload/v1770452486/TTP23Kibale-23_k0zzc4.jpg"
    ],
    highlights: [
      "Primate walks & Chimpanzee tracking",
      "13 Primate species (highest in Uganda)",
      "Chimpanzee Habituation Experience (CHEX)",
      "Bigodi Wetland Sanctuary birding",
      "Nocturnal forest night walks",
      "Scenic Crater Lakes & Tea Plantations",
    ],
    sections: [
      {
        title: "Primate Diversity & Wildlife",
        content: [
          { type: "paragraph", text: "Kibale supports an exceptional range of species, including 13 primate species, 1,450 chimpanzees, and rare primates like the L’Hoest’s monkey and the endemic Uganda mangabey." },
          {
            type: "list", items: [
              "13 primate species (highest in Uganda)",
              "L’Hoest’s monkey (Albertine Rift endemic)",
              "Uganda mangabey (endemic monkey species)",
              "Red colobus monkey (threatened species)",
              "Forest elephants, buffaloes, and giant forest hogs",
              "372 bird species (6 Albertine Rift endemics)"
            ]
          }
        ]
      },
      {
        title: "Chimpanzee Tracking (Primate Walk)",
        content: [
          { type: "paragraph", text: "Chimpanzee tracking is the park’s flagship activity, conducted from the Kanyanchu Visitor Centre with a high sighting success rate of over 90%." },
          {
            type: "list", items: [
              "Start times: 08:00, 11:00 and 14:00",
              "Duration: 2–5 hours",
              "Max group size: 6 visitors",
              "Minimum age: 16 years",
              "Time with chimpanzees: 1 hour",
              "Advance booking required"
            ]
          }
        ]
      },
      {
        title: "Habituation, Nature & Night Walks",
        content: [
          { type: "paragraph", text: "For a deeper encounter, the Chimpanzee Habituation Experience (CHEX) allows guests to join researchers for a half-day or full-day forest immersion. Kibale also offers guided nature walks and night walks (19:30–22:00) to spot nocturnal creatures like bushbabies, pottos, and galagos." }
        ]
      },
      {
        title: "Bird Watching & Tourism Zones",
        content: [
          { type: "paragraph", text: "With 372 species, Kibale is a world-class birding destination. Key areas include the main hub at Kanyanchu and the quieter Sebitoli zone. Birding is best combined with the Bigodi Wetland Sanctuary for forest-edge species." }
        ]
      },
      {
        title: "Culture, Climate & Access",
        content: [
          { type: "paragraph", text: "Kibale is home to the Batooro and Bakiga people, offering rich cultural heritage. The park enjoys pleasant temperatures (14°C–27°C) and can be visited year-round. It is easily accessible by road (335 km from Kampala) or via nearby airstrips." }
        ]
      },
      {
        title: "Why Visit Kibale with Modus Safaris?",
        content: [
          { type: "paragraph", text: "Kibale becomes a deeply enriching experience through expertly guided chimpanzee tracking, thoughtfully paced forest experiences, and community-inclusive tourism practices that seamlessly combine with the Queen Elizabeth and Rwenzori circuits." }
        ]
      }
    ],
    accommodations: [
      { name: "Primate Lodge", type: "Safari lodge", area: "Inside Park" },
      { name: "Kyaninga Lodge", type: "Luxury lodge", area: "Crater Lake" },
      { name: "Turaco Treetops", type: "Lodge", area: "Near park" },
      { name: "Ndali Lodge", type: "Luxury lodge", area: "Crater Lake" },
      { name: "Papaya Lake Lodge", type: "Boutique lodge", area: "Crater Lake" }
    ],
    latitude: 0.4913,
    longitude: 30.3957,
    locationName: "Kibale National Park",
    relatedExperiences: ["uganda-primates-wildlife"]
  },
  {
    id: 11,
    slug: "lake-mburo",
    name: "Lake Mburo National Park",
    location: "Uganda",
    description: "Lake Mburo National Park is a compact yet remarkably diverse protected area, serving as the ideal wildlife escape between Kampala and western Uganda. Known for its mosaic of acacia woodlands, wetlands, and rolling savannah, it is the only place in southern Uganda where you can see impalas and Burchell’s zebras in a relaxed, intimate setting.",
    shortDescription: "Uganda's most accessible savannah park, perfect for walking safaris and unique zebras.",
    images: [
      "https://plus.unsplash.com/premium_photo-1696531220266-362a418da9b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFrZSUyMG1idXJvfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1553521306-9387d3795516?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFrZSUyMG1idXJvfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1667630728936-1fa7fcd466d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZSUyMG1idXJvfGVufDB8fDB8fHww",
    ],
    highlights: [
      "Only park in Uganda with Impalas",
      "Horseback & Mountain bike safaris",
      "Guided walking safaris",
      "Night game drives for leopards",
      "332 bird species including Shoebill",
      "Salt Lick wildlife viewing"
    ],
    sections: [
      {
        title: "Wildlife & Biodiversity",
        content: [
          { type: "paragraph", text: "Lake Mburo supports 69 mammal species in a compact 260 km² area. It is the only park in western Uganda where Burchell’s zebra and eland coexist with a reintroduced population of Rothschild’s giraffes. Its wetlands also hide the rare sitatunga antelope." },
          {
            type: "list", items: [
              "Exclusive Impala sightings in Uganda",
              "Western Uganda's only Burchell’s zebras",
              "High concentration of leopards and hyenas",
              "Greatest diversity of antelopes (Eland, Topi, Oribi)"
            ]
          }
        ]
      },
      {
        title: "Unique Ways to Explore the Park",
        content: [
          { type: "paragraph", text: "Freedom is the hallmark of Lake Mburo. Beyond traditional game drives, visitors can explore the park on horseback, by mountain bike, or on guided walking safaris—offering an intimacy with nature rarely found in larger African parks." }
        ]
      },
      {
        title: "Boat Safaris & Wetland Discovery",
        content: [
          { type: "paragraph", text: "Boat cruises on Lake Mburo provide exceptional sightings of hippos, crocodiles, and waterbirds. It is a premier spot for seeing the African finfoot and the elusive shoebill stork in the northern papyrus wetlands." }
        ]
      },
      {
        title: "Guided Nature Walks & Viewpoints",
        content: [
          { type: "paragraph", text: "Experience the park on foot with a visit to the Salt Lick, where animals congregate at a natural mineral source. For birders, Rubanga Forest offers a dense canopy experience, while Kazuma Lookout provides a 360-degree panorama of the park’s multiple lakes." }
        ]
      },
      {
        title: "Cultural Encounters",
        content: [
          { type: "paragraph", text: "The surrounding area is home to the Banyankole people. Guests can visit local communities to learn about the traditional cattle culture of the Bahima pastoralists and the rural livelihoods of the Bairu cultivators." }
        ]
      },
      {
        title: "Climate & Best Time to Visit",
        content: [
          { type: "paragraph", text: "Lying in a rain shadow zone, the park is dry and warm all year. While it can be visited at any time, the dry months (June–August and December–February) are particularly good for spotting wildlife as they group near the lake." }
        ]
      },
      {
        title: "Access & Logistics",
        content: [
          { type: "paragraph", text: "Located just 228 km (3.5 hours) from Kampala, Lake Mburo is the most accessible savannah park in Uganda. It serves as the perfect break on the long journey to Bwindi or Queen Elizabeth." }
        ]
      },
      {
        title: "Why Visit Lake Mburo with Modus Safaris?",
        content: [
          { type: "paragraph", text: "With Modus Safaris UG Limited, Lake Mburo becomes more than a stopover. We curate active adventures like cycling and horseback safaris, combined with expert-led walking tours, to ensure a deeply personal encounter with Uganda's wildlife." }
        ]
      }
    ],
    accommodations: [
      { name: "Mihingo Lodge", type: "Luxury eco-lodge", area: "Rocky outcrop" },
      { name: "Kigambira Safari Lodge", type: "Luxury lodge", area: "Inside park" },
      { name: "Rwakobo Rock", type: "Mid-range eco-lodge", area: "Park boundary" },
      { name: "Mantana Tented Camp", type: "Boutique camp", area: "Lake view" },
      { name: "Rwonyo Rest Camp", type: "Budget/UWA", area: "Lakeshore" }
    ],
    latitude: -0.6385,
    longitude: 30.9575,
    locationName: "Lake Mburo National Park",
    relatedExperiences: ["ultimate-uganda-adventure-13-days"],
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
    latitude: -1.7167,
    longitude: 30.7000,
    locationName: "Akagera National Park",
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
    latitude: -2.3167,
    longitude: 29.2167,
    locationName: "Nyungwe Forest National Park",
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
    latitude: -2.8596,
    longitude: 38.8354,
    locationName: "Tsavo East National Park",
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
    latitude: -3.3769,
    longitude: 37.9404,
    locationName: "Tsavo West National Park",
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
    latitude: 0.6128,
    longitude: 37.5350,
    locationName: "Samburu National Reserve",
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
    latitude: -0.3013,
    longitude: 36.1402,
    locationName: "Lake Nakuru National Park",
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
    latitude: 0.0076,
    longitude: 36.9602,
    locationName: "Ol Pejeta Conservancy",
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
    latitude: -3.9317,
    longitude: 36.0076,
    locationName: "Tarangire National Park",
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
    latitude: -3.5356,
    longitude: 35.8450,
    locationName: "Lake Manyara National Park",
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
    latitude: -8.5200,
    longitude: 37.4500,
    locationName: "Nyerere National Park",
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
    latitude: -7.6667,
    longitude: 34.9000,
    locationName: "Ruaha National Park",
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
    latitude: -3.0674,
    longitude: 37.3556,
    locationName: "Mount Kilimanjaro National Park",
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
    latitude: -7.2167,
    longitude: 37.1500,
    locationName: "Mikumi National Park",
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
    latitude: 0.8313,
    longitude: 30.1587,
    locationName: "Semuliki National Park",
    relatedExperiences: []
  },
  {
    id: 26,
    slug: "mgahinga-gorilla",
    name: "Mgahinga Gorilla National Park",
    location: "Uganda",
    description: "Mgahinga Gorilla National Park is Uganda’s smallest yet one of its most dramatic protected areas. Protecting three conical Virunga Volcanoes, it offers a rich combination of gorilla trekking, golden monkey tracking, volcano hiking, and authentic cultural encounters.",
    shortDescription: "Where gold meets silver—a scenic park for gorilla trekking, golden monkeys, and volcano hiking.",
    images: [
      "https://res.cloudinary.com/dv093jd0o/image/upload/v1770453960/TTP23Mgahinga-11_vfsu88.jpg",
      "https://res.cloudinary.com/dv093jd0o/image/upload/v1770453962/TTP23Mgahinga-23_ikwzay.jpg",
      "https://res.cloudinary.com/dv093jd0o/image/upload/v1770453949/TTP23Mgahinga-29_dzoeyk.jpg"
    ],
    highlights: [
      "Mountain Gorilla trekking",
      "Endangered Golden Monkey tracking",
      "Three Volcanic Peak hikes",
      "Batwa Cultural Trail experience",
      "Garama Cave exploration",
      "Albertine Rift birding hotspots",
    ],
    sections: [
      {
        title: "Gorilla & Golden Monkey Experiences",
        content: [
          { type: "paragraph", text: "Mgahinga offers an intimate and uncrowded gorilla trekking experience with its habituated gorilla family. It is also one of the few places to track the endangered golden monkey, including a full-day habituation experience." },
          {
            type: "list", items: [
              "Gorilla tracking: starts 08:00, 3–5 hours duration",
              "Golden Monkey: standard tracking or full-day habituation",
              "Intimate encounters due to park's small size",
              "Excellent photography opportunities for primates"
            ]
          }
        ]
      },
      {
        title: "Volcano Hiking Adventures",
        content: [
          { type: "paragraph", text: "All three volcanoes in the park can be climbed in a single day, offering breathtaking views across Uganda, Rwanda, and DR Congo." },
          {
            type: "list", items: [
              "Mount Muhavura (4,127m): Highest peak with crater lake",
              "Mount Sabinyo (3,669m): Standing in 3 countries at once",
              "Mount Gahinga (3,474m): Swamp-filled crater",
              "Stunning views of Lake Mutanda and the Rift Valley"
            ]
          }
        ]
      },
      {
        title: "Batwa Cultural Trail",
        content: [
          { type: "paragraph", text: "The Batwa Cultural Trail is one of Uganda’s most authentic encounters, led by indigenous forest people who share their storytelling, hunting skills, and survival heritage, including a visit to the historic Garama Cave." }
        ]
      },
      {
        title: "Wildlife & Scenic Extensions",
        content: [
          { type: "paragraph", text: "Beyond primates, the park hosts 76 mammal species and localized Albertine Rift endemic birds. It is perfectly positioned for extensions to Lake Mutanda and Lake Bunyonyi for canoeing and relaxation." }
        ]
      },
      {
        title: "Climate, Access & Accommodation",
        content: [
          { type: "paragraph", text: "Mgahinga has a cool climate (avg. 15°C) and can be visited year-round. It is accessible by road (524 km from Kampala) or via daily scheduled flights to Kisoro airfield, with various lodge options on the park edge and in Kisoro town." }
        ]
      },
      {
        title: "Why Visit Mgahinga with Modus Safaris?",
        content: [
          { type: "paragraph", text: "With Modus Safaris UG Limited, Mgahinga becomes a multi-experience destination offering exclusive gorilla trekking, spectacular volcano hikes, and authentic Batwa cultural experiences tailored for adventure seekers and luxury travelers seeking scenic seclusion." }
        ]
      }
    ],
    accommodations: [
      { name: "Mount Gahinga Lodge", type: "Luxury lodge", area: "Park entrance" },
      { name: "Travelers Rest Hotel", type: "Historic hotel", area: "Kisoro" },
      { name: "Mutanda Lake Resort", type: "Eco-lodge", area: "Lake Mutanda" },
      { name: "Chameleon Hill Lodge", type: "Luxury boutique", area: "Lake Mutanda" }
    ],
    latitude: -1.3667,
    longitude: 29.6333,
    locationName: "Mgahinga Gorilla National Park",
    relatedExperiences: ["uganda-adventure-safari-primates-7-days"]
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
    latitude: -1.7583,
    longitude: 29.4269,
    locationName: "Gishwati-Mukura National Park",
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
    latitude: -0.1500,
    longitude: 37.3000,
    locationName: "Mount Kenya National Park",
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
    latitude: -0.4214,
    longitude: 36.6879,
    locationName: "Aberdare National Park",
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
    latitude: -0.9080,
    longitude: 36.3190,
    locationName: "Hell's Gate National Park",
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
    latitude: -1.3615,
    longitude: 36.8451,
    locationName: "Nairobi National Park",
    relatedExperiences: []
  },
  {
    id: 33,
    slug: "kampala-entebbe",
    name: "Kampala & Entebbe",
    location: "Uganda",
    description: "Kampala, the vibrant capital city built on seven hills, and Entebbe, the peaceful lakeside town on the shores of Lake Victoria. Together they offer a rich blend of Buganda culture, religious history, diverse markets, and botanical beauty.",
    shortDescription: "Explore Uganda's vibrant capital and peaceful lakeshore town, rich in culture and history.",
    images: [
      "https://images.unsplash.com/photo-1578325872347-6cc1795a5fea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2FtcGFsYXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1621367296494-e64fd2a2d890?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2FtcGFsYXxlbnwwfHwwfHx8MA%3D%3D",
      "https://res.cloudinary.com/dv093jd0o/image/upload/v1771146784/site_1022_0003-1000-750-20220502002509_rmcfb5.jpg"
    ],
    highlights: [
      "Buganda Kingdom Heritage",
      "Gaddafi National Mosque",
      "Kasubi Tombs (UNESCO)",
      "Namugongo Martyrs' Shrine",
      "Entebbe Botanical Gardens",
      "Lake Victoria Beaches"
    ],
    accommodations: [
      { name: "Serena Hotel Kampala", type: "Luxury hotel", area: "Kampala City" },
      { name: "Hotel No. 5", type: "Luxury boutique", area: "Entebbe" },
      { name: "Fairway Hotel", type: "Mid-range", area: "Kampala City" },
      { name: "Karibu Guest House", type: "Mid-range", area: "Entebbe" }
    ],
    latitude: 0.3476,
    longitude: 32.5825,
    locationName: "Kampala and Entebbe",
    relatedExperiences: ["kampala-entebbe-city-tour"]
  },
  {
    id: 34,
    slug: "sipi-falls",
    name: "Sipi Falls",
    location: "Uganda",
    description: "Located on the foothills of Mount Elgon, Sipi Falls is a series of three stunning waterfalls. It's a paradise for hikers and coffee lovers, offering breathtaking views of the Karamoja plains and immersive cultural experiences.",
    shortDescription: "A paradise of three stunning waterfalls and Arabica coffee plantations on the slopes of Mt Elgon.",
    images: [
      "https://pbs.twimg.com/media/G618oA5W0AAMyTt?format=jpg&name=small",
      "https://www.sipifalls.com/wp-content/uploads/2023/02/things-to-do.jpg"
    ],
    highlights: [
      "Three-tier waterfall hike",
      "Mount Elgon foothills",
      "Arabica coffee tours",
      "Abseiling adventures",
      "Karamoja plains views"
    ],
    accommodations: [
      { name: "Sipi River Lodge", type: "Luxury lodge", area: "Waterfall edge" },
      { name: "Rafiki Lodge Sipi", type: "Mid-range", area: "Cliff view" },
      { name: "Sipi Heritage Lodge", type: "Mid-range", area: "Garden view" }
    ],
    latitude: 1.3364,
    longitude: 34.3789,
    locationName: "Kapchorwa District",
    relatedExperiences: ["uganda-wildlife-culture-14-days"]
  },
  {
    id: 35,
    slug: "moroto-karamoja",
    name: "Moroto & Karamoja",
    location: "Uganda",
    description: "The rugged and authentic heart of northeastern Uganda. Moroto is the gateway to the Karamoja region, home to proud pastoralist communities, stunning volcanic mountains, and a culture that has remained beautifully preserved through time.",
    shortDescription: "Gateway to the rugged Karamoja region, home to proud pastoralist cultures and untamed mountains.",
    images: [
      "https://pbs.twimg.com/media/EdTZ_-IXoAEQYmo?format=jpg&name=medium",
      "https://pbs.twimg.com/media/HAS0vx1XcAAHu-p?format=jpg&name=medium"
    ],
    highlights: [
      "Authentic Manyatta visits",
      "Mount Moroto hiking",
      "Karamoja cattle culture",
      "Traditional crafts & jewelry",
      "Untamed wilderness"
    ],
    accommodations: [
      { name: "Karatunga Arts & Guest House", type: "Cultural lodge", area: "Moroto Town" },
      { name: "Moroto River Lodge", type: "Mid-range", area: "Riverfront" }
    ],
    latitude: 2.5292,
    longitude: 34.6653,
    locationName: "Karamoja Sub-region",
    relatedExperiences: ["uganda-wildlife-culture-14-days"]
  },
  {
    id: 36,
    slug: "lake-bunyonyi",
    name: "Lake Bunyonyi",
    location: "Uganda",
    description: "Known as the 'Switzerland of Africa', Lake Bunyonyi is a serene haven of 29 islands and emerald hills. It is one of the deepest and cleanest lakes in Africa, perfect for relaxation, bird watching, and exploring island history.",
    shortDescription: "The 'Switzerland of Africa'—a serene lake of 29 islands and lush emerald hills.",
    images: [
      "https://pbs.twimg.com/media/F-CI7jeXgAAeK9l?format=jpg&name=large",
      "https://pbs.twimg.com/media/G9R91t7XgAAy9PX?format=jpg&name=small",
      "https://pbs.twimg.com/media/G9v_hs9WEAIs7LZ?format=jpg&name=small"
    ],
    highlights: [
      "29 scenic islands",
      "Canoe & boat cruises",
      "Bird watching hotspot",
      "Punishment Island history",
      "Terraced hill hiking"
    ],
    accommodations: [
      { name: "Arcadia Lodge Bunyonyi", type: "Luxury lodge", area: "Hilltop view" },
      { name: "Bird Nest Resort", type: "Boutique resort", area: "Lakeshore" },
      { name: "Bunyonyi Overland Resort", type: "Mid-range", area: "Lakeshore" }
    ],
    latitude: -1.2858,
    longitude: 29.9328,
    locationName: "Kabale District",
    relatedExperiences: ["uganda-wildlife-culture-14-days"]
  },
  {
    id: 37,
    slug: "ziwa-rhino-sanctuary",
    name: "Ziwa Rhino Sanctuary",
    location: "Uganda",
    description: "The only place in Uganda where you can see southern white rhinos in the wild. Ziwa is a critical conservation success story, offering guided rhino tracking on foot and a peaceful sanctuary for various wildlife and bird species.",
    shortDescription: "The only place in Uganda to track southern white rhinos on foot in a peaceful sanctuary.",
    images: [
      "https://media.istockphoto.com/id/175478696/photo/baby-white-rhinos-double-horns.webp?a=1&b=1&s=612x612&w=0&k=20&c=gwZvN2ahonad1xyQmJORdmtSTksgpY-X0uKkyXFzZpA=",
      "https://media.istockphoto.com/id/155353445/photo/young-male-white-rhinos-three-friends.webp?a=1&b=1&s=612x612&w=0&k=20&c=sXp3BCwPXnhm9BLf79LCBWLJ-6XNv6OPeqLVD90pP7s=",
      "https://media.istockphoto.com/id/2209634079/photo/resting-rhinoceros-under-tree-in-lush-green-ziwa-wildlife-habitat.webp?a=1&b=1&s=612x612&w=0&k=20&c=zDOLrDOg4iU9H9RIbfAUHj29Eu-GlUlMjdtUrCqSoOs="
    ],
    highlights: [
      "On-foot Rhino tracking",
      "White Rhino conservation",
      "Shoebill stork sightings",
      "Nature walks & birding",
      "Canoe excursions"
    ],
    accommodations: [
      { name: "Amuka Safari Lodge", type: "Luxury lodge", area: "Sanctuary grounds" },
      { name: "Ziwa Rhino Lodge", type: "Mid-range", area: "Sanctuary grounds" }
    ],
    latitude: 1.4554,
    longitude: 32.0833,
    locationName: "Nakasongola District",
    relatedExperiences: ["ultimate-uganda-adventure-13-days"]
  },
  {
    id: 38,
    slug: "mount-elgon",
    name: "Mount Elgon National Park",
    location: "Uganda",
    description: "Mount Elgon National Park protects the higher slopes of Mount Elgon (4,321m), an extinct volcano straddling the Uganda–Kenya border. Known for one of the world's largest volcanic calderas, waterfall-streaked cliffs, and diverse adventure trails, it is East Africa’s ancient adventure playground.",
    shortDescription: "An ancient extinct volcano featuring one of the world's largest calderas and scenic Sipi Falls.",
    images: [
      "https://images.unsplash.com/photo-1549413247-4979e2746404?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1448375240586-dfd8d395ea6c?w=800&auto=format&fit=crop&q=70"
    ],
    highlights: [
      "World's largest volcanic caldera (8km)",
      "Wagagai Peak (4,321m) trekking",
      "Sipi Falls exploration",
      "Over 300 bird species",
      "Bagisu & Sabiny cutural heritage",
      "Mountain biking & rock climbing"
    ],
    sections: [
      {
        title: "Unique Landscapes & Geological Features",
        content: [
          { type: "paragraph", text: "Mount Elgon is renowned for its giant volcanic caldera, dramatic waterfall-streaked cliffs, and extensive lava ridges. It features a full sequence of East Africa’s altitudinal vegetation zones, from montane forest and bamboo to afro-alpine moorland with giant lobelias." }
        ]
      },
      {
        title: "Mountain Climbing & Trekking",
        content: [
          { type: "paragraph", text: "Elgon offers trekking for all levels. The Sasa Trail (from Budadiri) is the shortest and most direct route to Wagagai Peak (4,321m), while the Sipi Trail starting from Kapkwai offers a longer but gentler ascent ideal for acclimatization." },
          {
            type: "list", items: [
              "Summit: Wagagai Peak (4,321m)",
              "Sasa Trail: 3–4 days duration, steep ascent",
              "Sipi Trail: Gentler ascent from 2,050m",
              "Highlights: Jackson’s Pool and scenic moorlands"
            ]
          }
        ]
      },
      {
        title: "Forest Walks & Nature Experiences",
        content: [
          { type: "paragraph", text: "For those preferring soft adventure, the lower slopes around the Kapkwai Forest Exploration Centre offer forest walks passing caves and waterfalls, with excellent opportunities for birding and primate observation." }
        ]
      },
      {
        title: "Wildlife & Birdlife",
        content: [
          { type: "paragraph", text: "The park supports over 300 bird species, including the endangered lammergeyer (bearded vulture) and African goshawk. While mammals like elephant and buffalo are present, they are elusive due to the dense forest cover." }
        ]
      },
      {
        title: "Cultural Experiences",
        content: [
          { type: "paragraph", text: "The mountain is home to the Bagisu (Bamasaba) and Sabiny communities. The Bagisu are known for the vibrant biannual Imbalu circumcision ceremony and consider the mountain the embodiment of their founding father." }
        ]
      },
      {
        title: "Sipi Falls & Adventure Activities",
        content: [
          { type: "paragraph", text: "Just outside the park lies the stunning Sipi Valley, home to the three-tier Sipi Falls. The area is a hub for mountain biking, rock climbing, fly fishing, and tours of Uganda’s finest Arabica coffee plantations." }
        ]
      },
      {
        title: "Climate & Best Time to Visit",
        content: [
          { type: "paragraph", text: "Mount Elgon can be climbed year-round. Best conditions are during the drier seasons (June–August and December–March). The mountain offers a cool escape from the hotter Karamoja plains." }
        ]
      },
      {
        title: "Access & Logistics",
        content: [
          { type: "paragraph", text: "Located 235 km east of Kampala, it is easily reached via Mbale. It combines perfectly with Kidepo Valley and Pian Upe for extended eastern Uganda itineraries." }
        ]
      },
      {
        title: "Why Visit Mount Elgon with Modus Safaris?",
        content: [
          { type: "paragraph", text: "With Modus Safaris UG Limited, Mount Elgon becomes a flexible adventure destination offering professionally guided treks, soft hikes, and immersive cultural experiences tailored for adventure seekers and nature lovers." }
        ]
      }
    ],
    accommodations: [
      { name: "Sipi River Lodge", type: "Mid-range/Boutique", area: "Sipi Falls" },
      { name: "Rafiki Lodge Sipi", type: "Mid-range", area: "Sipi" },
      { name: "Mount Elgon Hotel", type: "Upscale", area: "Mbale" },
      { name: "Kapkwai Forest Cottages", type: "Budget", area: "Inside Park" }
    ],
    latitude: 1.1444,
    longitude: 34.5500,
    locationName: "Mbale / Kapchorwa District",
    relatedExperiences: ["uganda-wildlife-culture-14-days"]
  },
  {
    id: 39,
    slug: "semuliki",
    name: "Semuliki National Park",
    location: "Uganda",
    description: "Protecting the only true lowland tropical rainforest in East Africa, Semuliki National Park represents the eastern edge of the vast Congo Basin. It is a biodiversity hotspot famous for its prehistoric hot springs, rare Central African bird species, and ancient forest immersion.",
    shortDescription: "The eastern edge of the Congo Basin—a lowland rainforest paradise with prehistoric hot springs.",
    images: [
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1549413247-4979e2746404?w=800&auto=format&fit=crop&q=70"
    ],
    highlights: [
      "Sempaya Hot Springs (Female & Male)",
      "Lowland tropical rainforest",
      "Over 441 bird species",
      "Rare Congo-Guinea biome species",
      "Kirumia Trail forest walk",
      "Toro-Semuliki savannah & Lake Albert"
    ],
    sections: [
      {
        title: "Exceptional Biodiversity & Congo Edge",
        content: [
          { type: "paragraph", text: "Semuliki is one of Africa’s most biologically diverse forests, hosting 53 mammal species and 11–15 primate species. It contains many rare species found nowhere else in East Africa, such as Dent’s mona monkey and Central African red colobus." }
        ]
      },
      {
        title: "Sempaya Hot Springs",
        content: [
          { type: "paragraph", text: "The park’s most iconic attraction, the Sempaya geothermal springs, feature the 'Female' spring (Nyansimbi)—a boiling geyser shooting steam two metres high—and the 'Male' spring (Bintente), a dramatic 12-metre wide steaming pool set against a Rwenzori backdrop." }
        ]
      },
      {
        title: "Nature Walks & Forest Exploration",
        content: [
          { type: "paragraph", text: "Immerse yourself in the rainforest via the 14km Kirumia Trail, which runs to the Semuliki River. Short trails around Sempaya offer excellent birding, while guided night walks provide a rare chance to see nocturnal primates." }
        ]
      },
      {
        title: "Birding Destination of International Importance",
        content: [
          { type: "paragraph", text: "Widely regarded as a top birding destination, Semuliki hosts 35 Congo-Guinea biome species found nowhere else in East Africa. Birders can spot the Nkulengu rail, Congo serpent eagle, and the elusive shoebill in nearby wetlands." }
        ]
      },
      {
        title: "Primate Walks & Chimpanzees",
        content: [
          { type: "paragraph", text: "Guided walks through the Mugiri River Forest offer opportunities to see habituated chimpanzees, especially during the fruiting season, alongside other forest primates and a vibrant array of butterflies." }
        ]
      },
      {
        title: "Toro–Semuliki Wildlife Reserve",
        content: [
          { type: "paragraph", text: "Adjacent to the park, this reserve offers classic savannah game drives and boat trips on Lake Albert. This combination allows visitors to experience both Congo rainforest and East African savannah in a single destination area." }
        ]
      },
      {
        title: "Cultural Diversity",
        content: [
          { type: "paragraph", text: "The region is home to four distinct communities: the Bakonzo farmers, Bwamba mountain dwellers, Batuku pastoralists, and the traditionally forest-dependent Batwa (pygmies)." }
        ]
      },
      {
        title: "Climate & Best Time to Visit",
        content: [
          { type: "paragraph", text: "Temperatures range from 18°C – 30°C. While reachable all year, the park is most rewarding for forest immersion during the drier months, though birding is exceptional throughout the year." }
        ]
      },
      {
        title: "Access & Logistics",
        content: [
          { type: "paragraph", text: "Located 60km from Fort Portal on a highly scenic tarmac road descending 700m into the rift valley. It is approximately 290km (4–5 hours) from Kampala via Mubende." }
        ]
      },
      {
        title: "Why Visit Semuliki with Modus Safaris?",
        content: [
          { type: "paragraph", text: "With Modus Safaris UG Limited, Semuliki becomes a distinctive specialist experience. We offer expert-guided birding, low-impact rainforest exploration, and a unique blend of savannah and Lake Albert adventures for true nature enthusiasts." }
        ]
      }
    ],
    accommodations: [
      { name: "Semuliki Safari Lodge", type: "Luxury lodge", area: "Toro-Semuliki Reserve" },
      { name: "Ntoroko Game Lodge", type: "Mid-range", area: "Lake Albert" },
      { name: "Mountains of the Moon", type: "Hotel", area: "Fort Portal (Day trip)" },
      { name: "Bumaga Cottages", type: "Budget", area: "Sempaya" }
    ],
    latitude: 0.8200,
    longitude: 30.0500,
    locationName: "Bundibugyo / Ntoroko District",
    relatedExperiences: ["ultimate-uganda-adventure-13-days"]
  },
  {
    id: 40,
    slug: "rwenzori-mountains",
    name: "Rwenzori Mountains National Park",
    location: "Uganda",
    description: "The legendary 'Mountains of the Moon', Rwenzori Mountains National Park is a UNESCO World Heritage Site featuring permanent glaciers, dramatic alpine valleys, and otherworldly vegetation. It is home to Africa's third highest peak and offers some of the continent’s most challenging and rewarding trekking experiences.",
    shortDescription: "The 'Mountains of the Moon'—a UNESCO site with glaciers and Africa's third-highest peak.",
    images: [
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1549413247-4979e2746404?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&auto=format&fit=crop&q=70"
    ],
    highlights: [
      "Margherita Peak (5,109m) ascent",
      "UNESCO World Heritage landscapes",
      "Permanent glaciers & alpine lakes",
      "Giant Lobelias & Groundsels",
      "Kilembe & Central Circuit Trails",
      "Bakonzo cultural heritage"
    ],
    sections: [
      {
        title: "The Legendary Mountains of the Moon",
        content: [
          { type: "paragraph", text: "Rwenzori Mountains National Park (995 km²) protects a dramatic range of six distinct mountains along the DR Congo border. Celebrated since antiquity and recognized as a UNESCO site, it is globally famous for its glaciers and extraordinary afro-alpine biodiversity." }
        ]
      },
      {
        title: "A Landscape Like No Other",
        content: [
          { type: "paragraph", text: "The Rwenzori is unique for its otherworldly vegetation zones, often called 'botanical big game'. The landscape transforms from montane forest and bamboo to heather-moss forests draped in lichens, and finally into afro-alpine moorlands dominated by giant lobelias and groundsels." }
        ]
      },
      {
        title: "Trekking & Hiking Experiences",
        content: [
          { type: "paragraph", text: "Rwenzori offers trekking for all levels. The Kilembe Trail (Rwenzori Trekking Services) and the Central Circuit (Rwenzori Mountaineering Services) provide multi-day expeditions to the high peaks. For less technical hikers, shorter routes like the Lake Mahoma hike or forest walks from Kilembe offer immersive nature experiences." }
        ]
      },
      {
        title: "Peak Climbing for Adventurers",
        content: [
          { type: "paragraph", text: "For experienced climbers, Margherita Peak (5,109m) on Mount Stanley is Africa’s premier technical ascent. It requires specialist equipment, technical skill, and an expedition-style commitment to face the mountain's dynamic and unpredictable mountain weather." }
        ]
      },
      {
        title: "Wildlife & Birdlife",
        content: [
          { type: "paragraph", text: "While the landscape is the main draw, the park hosts 217 bird species and rare mammals. Notable birds include the Rwenzori Turaco and the Scarlet-tufted Malachite Sunbird, which feeds on higher-altitude lobelias. Primates like the endemic Rwenzori colobus can also be spotted." }
        ]
      },
      {
        title: "Cultural Significance",
        content: [
          { type: "paragraph", text: "The Bakonzo people consider the peaks the home of their god, Kitasamba. There are 18 identified sacred cultural sites on the mountain, and cultural encounters can be integrated into treks to offer deeper insight into local traditions." }
        ]
      },
      {
        title: "Climate & Best Time to Visit",
        content: [
          { type: "paragraph", text: "Rwenzori is extremely wet and dynamic, with temperatures often dropping below freezing at night. The best months for trekking are January and June–July, though climbers must be prepared for rain and mist at any time." }
        ]
      },
      {
        title: "Access & Logistics",
        content: [
          { type: "paragraph", text: "Trailheads are reached via Kasese on the Fort Portal–Kasese highway. Kasese is approximately 375km from Kampala. Domestic flights are available from Entebbe to Kasese airstrip for quicker access." }
        ]
      },
      {
        title: "Why Visit Rwenzori with Modus Safaris?",
        content: [
          { type: "paragraph", text: "With Modus Safaris UG Limited, your Rwenzori expedition is professionally curated. We coordinate with certified guides, provide safety and equipment advice, and tailor itineraries ranging from soft scenic hikes to technical summit expeditions." }
        ]
      }
    ],
    accommodations: [
      { name: "Equator Snow Lodge", type: "Luxury adventure lodge", area: "Nyakalengija" },
      { name: "Sandton Hotel Kasese", type: "City hotel", area: "Kasese" },
      { name: "RMS Community Lodges", type: "Basic community lodge", area: "Nyakalengija" },
      { name: "Trekking Huts", type: "Mountain shelter", area: "On-trail" }
    ],
    latitude: 0.3800,
    longitude: 29.8700,
    locationName: "Kasese District",
    relatedExperiences: ["ultimate-uganda-adventure-13-days"]
  }
]

