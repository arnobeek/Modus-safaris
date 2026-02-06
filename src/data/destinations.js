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
]
