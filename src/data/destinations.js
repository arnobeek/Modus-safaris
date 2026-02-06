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
      "https://images.unsplash.com/photo-1614528767034-70de9fe166e0?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop&q=70",
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
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=800&auto=format&fit=crop&q=70",
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
      "https://images.unsplash.com/photo-1518709368567-b22d4217b91f?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1553521306-9387d3795516?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=800&auto=format&fit=crop&q=70",
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
      "https://images.unsplash.com/photo-1553521306-9387d3795516?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1518709368567-b22d4217b91f?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop&q=70",
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
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=800&auto=format&fit=crop&q=70",
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
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1653645800971-b46f2322da3c?w=800&auto=format&fit=crop&q=70",
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
      "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=800&auto=format&fit=crop&q=70",
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
      "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop&q=70",
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
      "https://images.unsplash.com/photo-1653645800971-b46f2322da3c?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop&q=70",
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
      "https://images.unsplash.com/photo-1544605058-297d266e744d?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1582298539031-6e3e55139fb9?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1585834925763-7c1527633633?w=800&auto=format&fit=crop&q=70"
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
      "https://images.unsplash.com/photo-1550155829-3738b5561a09?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1565355605260-a08091dd7192?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1518335043817-f58c7329759d?w=800&auto=format&fit=crop&q=70"
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
      "https://images.unsplash.com/photo-1576487248795-0373df899539?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=800&auto=format&fit=crop&q=70"
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
      "https://images.unsplash.com/photo-1440557653017-487052528669?w=800&auto=format&fit=crop&q=70",
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
      "https://images.unsplash.com/photo-1535940348721-e3745672cd50?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1469176378416-2495d4d3c631?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=800&auto=format&fit=crop&q=70"
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
      "https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1605559424843-9e4c228d948f?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1534720993189-e1ae6f4666cf?w=800&auto=format&fit=crop&q=70"
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
      "https://images.unsplash.com/photo-1615456950275-5743c3d52317?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1565355605260-a08091dd7192?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1600609842388-3e4b77d611b8?w=800&auto=format&fit=crop&q=70"
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
      "https://images.unsplash.com/photo-1596708465064-a0f124c65207?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1565152399960-9d0847b7c2b6?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1462924194098-963d3dbdb114?w=800&auto=format&fit=crop&q=70"
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
      "https://images.unsplash.com/photo-1520637042858-a8d626353d9e?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1517685938982-35f992224056?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1627832822003-8d488e3328c0?w=800&auto=format&fit=crop&q=70"
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
      "https://images.unsplash.com/photo-1582298539031-6e3e55139fb9?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1504543265780-4598eb2a66be?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1481595166669-8086203939ba?w=800&auto=format&fit=crop&q=70"
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
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1622323758656-b07c91353f86?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=800&auto=format&fit=crop&q=70"
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
      "https://images.unsplash.com/photo-1627832822003-8d488e3328c0?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1564760290292-23341e4df6ec?w=800&auto=format&fit=crop&q=70"
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
      "https://images.unsplash.com/photo-1470434767159-ac7bf1b43351?w=800&auto=format&fit=crop&q=70",
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
      "https://images.unsplash.com/photo-1653645800971-b46f2322da3c?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1634628410298-5c029de7e01d?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1522883020614-368b6b033d64?w=800&auto=format&fit=crop&q=70"
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
      "https://images.unsplash.com/photo-1563812543431-7e8c363d686f?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1502484646875-9c849185aab6?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1564769661445-6688ae045354?w=800&auto=format&fit=crop&q=70"
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
      "https://images.unsplash.com/photo-1518709368567-b22d4217b91f?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop&q=70"
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
      "https://images.unsplash.com/photo-1653645800971-b46f2322da3c?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1445548671935-127db55f36e6?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop&q=70"
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
    id: 27,
    slug: "rwenzori-mountains",
    name: "Rwenzori Mountains National Park",
    location: "Uganda",
    description: "The 'Mountains of the Moon', the Rwenzoris offer world-class hiking and mountaineering. Snow-capped peaks on the equator, unique alpine flora, and stunning waterfalls make it a trekker's paradise.",
    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1589405858862-2ac9cbb6309d?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1459213599465-03ab6a4d5931?w=800&auto=format&fit=crop&q=70"
    ],
    highlights: [
      "Margherita Peak climbing",
      "Unique alpine flora",
      "Waterfalls & lakes",
      "Challenging treks"
    ],
    accommodations: [
      { name: "Equator Snow Lodge", type: "Lodge", area: "Mountain base" },
      { name: "Ruboni Community Camp", type: "Community camp", area: "Foothills" }
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
      "https://images.unsplash.com/photo-1589405858862-2ac9cbb6309d?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1627832822003-8d488e3328c0?w=800&auto=format&fit=crop&q=70"
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
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1534958178-59c25da7347a?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1627832822003-8d488e3328c0?w=800&auto=format&fit=crop&q=70"
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
  },
  {
    id: 33,
    slug: "arusha-national-park",
    name: "Arusha National Park",
    location: "Tanzania",
    description: "A small but varied park dominated by Mount Meru. It features the Momella Lakes, Ngurdoto Crater, and lush montane forest. It is one of the few places in northern Tanzania where walking safaris are easily possible.",
    images: [
      "https://images.unsplash.com/photo-1615456950275-5743c3d52317?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1552668693-b34e56eb6550?w=800&auto=format&fit=crop&q=70",
      "https://images.unsplash.com/photo-1513221379361-ec880bb6b7e5?w=800&auto=format&fit=crop&q=70"
    ],
    highlights: [
      "Mount Meru climb",
      "Momella Lakes (Canoeing)",
      "Ngurdoto Crater",
      "Black-and-white colobus"
    ],
    accommodations: [
      { name: "Hatari Lodge", type: "Lodge", area: "Arusha NP edge" },
      { name: "Arusha Serena Hotel", type: "Hotel", area: "Lake Duluti" },
      { name: "Ngurdoto Mountain Lodge", type: "Lodge", area: "Usa River" }
    ],
    relatedExperiences: []
  }
]

