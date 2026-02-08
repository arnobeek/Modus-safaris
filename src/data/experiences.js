/**
 * Experiences data for safari itineraries
 * Each experience has: slug, title, duration, pricing, itinerary, included/excluded
 */

export const experiences = [
    {
        id: 1,
        slug: "gorilla-trekking-bwindi",
        title: "Gorilla Trekking Adventure",
        duration: "4 Days",
        durationDays: 4,
        startingPrice: 2500,
        summary: "Trek through Bwindi's misty ancient rainforest to encounter endangered mountain gorillas in their natural habitat—an experience that changes lives.",
        heroImage: "https://images.unsplash.com/photo-1653645800971-b46f2322da3c?w=1200&auto=format&fit=crop&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1614528767034-70de9fe166e0?w=800&auto=format&fit=crop&q=70",
            "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop&q=70",
            "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop&q=70"
        ],
        destination: "bwindi-impenetrable-forest",
        country: "Uganda",
        travelStyle: "Gorilla Trekking",
        highlights: [
            "Mountain gorilla encounter",
            "UNESCO World Heritage Site",
            "Expert tracking guides",
            "Luxury eco-lodge stay",
            "Community cultural visit"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Entebbe & Transfer",
                description: "Arrive at Entebbe International Airport where your safari guide will meet you. Drive through Uganda's scenic countryside to Bwindi, passing through local villages and lush landscapes. Evening briefing about tomorrow's trek.",
                accommodation: "Buhoma Lodge",
                meals: "Lunch, Dinner"
            },
            {
                day: 2,
                title: "Gorilla Trekking Experience",
                description: "After an early breakfast, report to the park headquarters for briefing. Trek into the ancient rainforest with experienced trackers. Spend one magical hour with a habituated gorilla family. Return to lodge for celebratory dinner.",
                accommodation: "Buhoma Lodge",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 3,
                title: "Batwa Community & Nature Walk",
                description: "Visit the Batwa pygmy community to learn about their traditional forest lifestyle. Afternoon guided nature walk through the forest edge, spotting birds and primates. Evening at leisure.",
                accommodation: "Buhoma Lodge",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 4,
                title: "Departure",
                description: "Final breakfast at the lodge. Transfer back to Entebbe for your departure flight, or extend your journey to Queen Elizabeth National Park.",
                accommodation: null,
                meals: "Breakfast"
            }
        ],
        included: [
            "Gorilla trekking permit",
            "All park entrance fees",
            "Professional English-speaking guide",
            "4x4 safari vehicle with pop-up roof",
            "All accommodations as listed",
            "All meals as indicated",
            "Bottled drinking water",
            "Batwa community visit"
        ],
        excluded: [
            "International flights",
            "Visa fees",
            "Travel insurance",
            "Personal expenses",
            "Tips and gratuities",
            "Alcoholic beverages",
            "Optional activities"
        ],
        featured: true
    },
    {
        id: 2,
        slug: "serengeti-migration-safari",
        title: "Great Migration Safari",
        duration: "7 Days",
        durationDays: 7,
        startingPrice: 4200,
        summary: "Witness the greatest wildlife spectacle on earth as millions of wildebeest and zebra cross the Serengeti plains in search of fresh grazing.",
        heroImage: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=1200&auto=format&fit=crop&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop&q=70",
            "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=800&auto=format&fit=crop&q=70",
            "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop&q=70"
        ],
        destination: "serengeti",
        country: "Tanzania",
        travelStyle: "Wildlife Safari",
        highlights: [
            "Great Migration herds",
            "Big Five sightings",
            "Ngorongoro Crater descent",
            "Hot air balloon option",
            "Sundowner experiences"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Arusha",
                description: "Arrive at Kilimanjaro International Airport. Transfer to your luxury lodge in Arusha for overnight. Evening safari briefing and welcome dinner.",
                accommodation: "Arusha Coffee Lodge",
                meals: "Dinner"
            },
            {
                day: 2,
                title: "Arusha to Serengeti",
                description: "Early morning flight to the Serengeti. Game drive en route to your camp, watching for lions, elephants, and the first glimpses of the migration herds.",
                accommodation: "Serengeti Migration Camp",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 3,
                title: "Full Day Serengeti Safari",
                description: "Full day exploring the Serengeti following the migration. Picnic lunch in the bush. Optional hot air balloon safari at dawn (additional cost).",
                accommodation: "Serengeti Migration Camp",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 4,
                title: "Serengeti Game Drives",
                description: "Morning and afternoon game drives focusing on predator activity. Visit kopjes (rocky outcrops) where lions often rest. Sundowner with views over the plains.",
                accommodation: "Serengeti Migration Camp",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 5,
                title: "Serengeti to Ngorongoro",
                description: "Scenic drive to Ngorongoro Conservation Area, stopping at Olduvai Gorge archaeological site. Afternoon at leisure at the crater rim lodge.",
                accommodation: "Ngorongoro Crater Lodge",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 6,
                title: "Ngorongoro Crater",
                description: "Descend 600 meters into the world's largest intact volcanic caldera. Full day game drive with excellent chances for rhino, lion, and flamingo sightings.",
                accommodation: "Ngorongoro Crater Lodge",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 7,
                title: "Departure",
                description: "Final morning game drive or crater rim walk. Transfer to Arusha or Kilimanjaro Airport for your departure.",
                accommodation: null,
                meals: "Breakfast"
            }
        ],
        included: [
            "All park and conservation fees",
            "Domestic flight Arusha-Serengeti",
            "Professional safari guide",
            "4x4 safari vehicle",
            "All accommodations",
            "All meals as indicated",
            "Drinking water and soft drinks",
            "Airport transfers"
        ],
        excluded: [
            "International flights",
            "Visa fees",
            "Travel insurance",
            "Hot air balloon safari ($550pp)",
            "Premium alcoholic drinks",
            "Tips and gratuities"
        ],
        featured: true
    },
    {
        id: 3,
        slug: "masai-mara-explorer",
        title: "Masai Mara Explorer",
        duration: "5 Days",
        durationDays: 5,
        startingPrice: 3100,
        summary: "Experience Kenya's iconic Masai Mara with its endless plains, big cats, and rich Maasai culture in one of Africa's most celebrated wildlife reserves.",
        heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&auto=format&fit=crop&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=800&auto=format&fit=crop&q=70",
            "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop&q=70",
            "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=800&auto=format&fit=crop&q=70"
        ],
        destination: "masai-mara",
        country: "Kenya",
        travelStyle: "Wildlife Safari",
        highlights: [
            "Big cat tracking",
            "Maasai village visit",
            "Mara River crossing",
            "Bush breakfast",
            "Night game drive"
        ],
        itinerary: [
            {
                day: 1,
                title: "Nairobi to Masai Mara",
                description: "Morning pickup from Nairobi. Scenic drive through the Great Rift Valley with stops at viewpoints. Arrive in the Mara for afternoon game drive.",
                accommodation: "Mara Serena Safari Lodge",
                meals: "Lunch, Dinner"
            },
            {
                day: 2,
                title: "Full Day Game Drives",
                description: "Early morning game drive to catch predators in action. Return for breakfast. Afternoon drive focusing on the Mara River where crossings occur during migration season.",
                accommodation: "Mara Serena Safari Lodge",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 3,
                title: "Safari & Maasai Culture",
                description: "Morning game drive. Afternoon visit to a Maasai village to learn about traditional customs, dancing, and way of life. Evening night game drive (vehicle with spotlight).",
                accommodation: "Mara Serena Safari Lodge",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 4,
                title: "Bush Breakfast & Wildlife",
                description: "Pre-dawn departure for bush breakfast in the savanna. Full day of game viewing with picnic lunch. Final sundowner overlooking the plains.",
                accommodation: "Mara Serena Safari Lodge",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 5,
                title: "Departure",
                description: "Optional early morning game drive. Transfer back to Nairobi, arriving afternoon. Drop-off at airport or hotel.",
                accommodation: null,
                meals: "Breakfast"
            }
        ],
        included: [
            "All park entrance fees",
            "4x4 safari vehicle with guide",
            "All accommodations",
            "All meals as listed",
            "Maasai village visit",
            "Night game drive",
            "Bush breakfast",
            "Nairobi transfers"
        ],
        excluded: [
            "International flights",
            "Kenya visa",
            "Travel insurance",
            "Balloon safari ($450pp)",
            "Alcoholic beverages",
            "Tips and gratuities"
        ],
        featured: true
    },
    {
        id: 4,
        slug: "uganda-primates-wildlife",
        title: "Primates & Wildlife Uganda",
        duration: "10 Days",
        durationDays: 10,
        startingPrice: 5800,
        summary: "The ultimate Ugandan adventure combining gorilla trekking, chimpanzee tracking, and classic savanna safari across Uganda's finest national parks.",
        heroImage: "https://images.unsplash.com/photo-1614528767034-70de9fe166e0?w=1200&auto=format&fit=crop&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1653645800971-b46f2322da3c?w=800&auto=format&fit=crop&q=70",
            "https://images.unsplash.com/photo-1704183683740-1400a49816b7?w=800&auto=format&fit=crop&q=70",
            "https://images.unsplash.com/photo-1518709368567-b22d4217b91f?w=800&auto=format&fit=crop&q=70"
        ],
        destination: "bwindi-impenetrable-forest",
        country: "Uganda",
        travelStyle: "Primate Safari",
        highlights: [
            "Mountain gorillas in Bwindi",
            "Chimpanzees in Kibale",
            "Tree-climbing lions",
            "Murchison Falls boat safari",
            "Kazinga Channel cruise"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival Entebbe",
                description: "Arrive Entebbe International Airport. Transfer to lakeside hotel. Evening at leisure.",
                accommodation: "Protea Hotel Entebbe",
                meals: "Dinner"
            },
            {
                day: 2,
                title: "Entebbe to Murchison Falls",
                description: "Drive north to Uganda's largest national park. Afternoon game drive on the northern bank spotting giraffes, elephants, and lions.",
                accommodation: "Paraa Safari Lodge",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 3,
                title: "Murchison Falls Safari",
                description: "Morning game drive. Afternoon boat safari to the base of the magnificent falls where the Nile explodes through a 7-meter gap.",
                accommodation: "Paraa Safari Lodge",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 4,
                title: "Murchison to Kibale Forest",
                description: "Scenic drive southwest to Kibale Forest, home to 13 primate species. Evening forest walk.",
                accommodation: "Primate Lodge Kibale",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 5,
                title: "Chimpanzee Trekking",
                description: "Early departure for chimpanzee tracking in Kibale's ancient rainforest. Afternoon Bigodi Wetland Sanctuary walk for more primates and birds.",
                accommodation: "Primate Lodge Kibale",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 6,
                title: "Kibale to Queen Elizabeth",
                description: "Drive to Queen Elizabeth National Park. Afternoon Kazinga Channel boat cruise with hippos, elephants, and extraordinary birdlife.",
                accommodation: "Mweya Safari Lodge",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 7,
                title: "Ishasha Tree-Climbing Lions",
                description: "Drive to the Ishasha sector, famous for tree-climbing lions. Game drives searching for these unique big cats draped in fig trees.",
                accommodation: "Ishasha Wilderness Camp",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 8,
                title: "Ishasha to Bwindi",
                description: "Morning game drive and drive through the stunning Kigezi Highlands to Bwindi Impenetrable Forest. Gorilla briefing.",
                accommodation: "Sanctuary Gorilla Forest Camp",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 9,
                title: "Gorilla Trekking",
                description: "The highlight of your journey. Trek into the ancient forest with trackers to meet a habituated mountain gorilla family. One hour with these gentle giants.",
                accommodation: "Sanctuary Gorilla Forest Camp",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 10,
                title: "Bwindi to Entebbe - Departure",
                description: "Scenic drive or optional flight back to Entebbe for your departure. Alternative: extend to Lake Bunyonyi.",
                accommodation: null,
                meals: "Breakfast"
            }
        ],
        included: [
            "Gorilla trekking permit",
            "Chimpanzee tracking permit",
            "All park fees",
            "Professional guide throughout",
            "4x4 safari vehicle",
            "All accommodations",
            "All meals as listed",
            "Boat safaris",
            "Airport transfers"
        ],
        excluded: [
            "International flights",
            "Uganda tourist visa",
            "Travel insurance",
            "Domestic flights",
            "Alcoholic beverages",
            "Laundry services",
            "Tips and gratuities"
        ],
        featured: false
    },
    {
        id: 5,
        slug: "rwanda-gorillas-golden-monkeys",
        title: "Rwanda Gorillas & Golden Monkeys",
        duration: "5 Days",
        durationDays: 5,
        startingPrice: 4500,
        summary: "Experience Rwanda's incredible primates with gorilla trekking in Volcanoes National Park and track the rare golden monkeys in the bamboo forests.",
        heroImage: "https://images.unsplash.com/photo-1614528767034-70de9fe166e0?w=1200&auto=format&fit=crop&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1653645800971-b46f2322da3c?w=800&auto=format&fit=crop&q=70",
            "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop&q=70"
        ],
        destination: "volcanoes-national-park",
        country: "Rwanda",
        travelStyle: "Gorilla Trekking",
        highlights: [
            "Mountain gorilla trekking",
            "Golden monkey tracking",
            "Dian Fossey tomb visit",
            "Virunga volcano views",
            "Kigali Genocide Memorial"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Kigali",
                description: "Arrive Kigali International Airport. City tour including Kigali Genocide Memorial. Drive to Volcanoes National Park region.",
                accommodation: "Bisate Lodge",
                meals: "Lunch, Dinner"
            },
            {
                day: 2,
                title: "Gorilla Trekking",
                description: "Report to park headquarters for briefing. Trek into the bamboo and hagenia forests to meet a mountain gorilla family. One hour with the gorillas.",
                accommodation: "Bisate Lodge",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 3,
                title: "Golden Monkey Tracking",
                description: "Morning trek to find the playful golden monkeys endemic to the Virunga region. Afternoon visit to the Dian Fossey Research Center and her tomb.",
                accommodation: "Bisate Lodge",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 4,
                title: "Second Gorilla Trek or Community",
                description: "Option for a second gorilla trek (additional permit) or cultural experiences including traditional Intore dancing and community visits.",
                accommodation: "Bisate Lodge",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 5,
                title: "Departure",
                description: "Morning at leisure or optional volcano hike. Transfer to Kigali for departure.",
                accommodation: null,
                meals: "Breakfast"
            }
        ],
        included: [
            "Gorilla trekking permit (1)",
            "Golden monkey permit",
            "All park fees",
            "Professional guide",
            "Private 4x4 vehicle",
            "All accommodations",
            "All meals as listed",
            "Airport transfers",
            "Kigali city tour"
        ],
        excluded: [
            "International flights",
            "Rwanda visa",
            "Second gorilla permit ($1500)",
            "Travel insurance",
            "Alcoholic beverages",
            "Tips and gratuities"
        ],
        featured: false
    },
    {
        id: 6,
        slug: "amboseli-kilimanjaro-views",
        title: "Amboseli & Kilimanjaro Views",
        duration: "4 Days",
        durationDays: 4,
        startingPrice: 1800,
        summary: "Witness large elephant herds against the stunning backdrop of Mount Kilimanjaro in Kenya's most photogenic national park.",
        heroImage: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&auto=format&fit=crop&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop&q=70",
            "https://images.unsplash.com/photo-1653645800971-b46f2322da3c?w=800&auto=format&fit=crop&q=70"
        ],
        destination: "amboseli",
        country: "Kenya",
        travelStyle: "Wildlife Safari",
        highlights: [
            "Elephant herds",
            "Kilimanjaro views",
            "Big cat sightings",
            "Photography paradise",
            "Maasai culture"
        ],
        itinerary: [
            {
                day: 1,
                title: "Nairobi to Amboseli",
                description: "Morning departure from Nairobi. Scenic drive to Amboseli with views of Kilimanjaro emerging. Afternoon game drive.",
                accommodation: "Ol Tukai Lodge",
                meals: "Lunch, Dinner"
            },
            {
                day: 2,
                title: "Full Day Amboseli Safari",
                description: "Dawn game drive for the best Kilimanjaro views and elephant photography. Full day exploring different ecosystems: swamps, plains, and acacia woodland.",
                accommodation: "Ol Tukai Lodge",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 3,
                title: "Safari & Maasai Village",
                description: "Morning game drive. Afternoon visit to a local Maasai community. Evening sundowner with Kilimanjaro sunset.",
                accommodation: "Ol Tukai Lodge",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 4,
                title: "Departure",
                description: "Final sunrise game drive. Return to Nairobi for departure.",
                accommodation: null,
                meals: "Breakfast"
            }
        ],
        included: [
            "Park entrance fees",
            "Professional guide",
            "4x4 safari vehicle",
            "All accommodations",
            "All meals as listed",
            "Maasai village visit",
            "Nairobi transfers"
        ],
        excluded: [
            "International flights",
            "Kenya visa",
            "Travel insurance",
            "Alcoholic beverages",
            "Tips and gratuities"
        ],
        featured: false
    },
    {
        id: 7,
        slug: "samburu-northern-frontier",
        title: "Samburu & Northern Frontier",
        duration: "5 Days",
        durationDays: 5,
        startingPrice: 2800,
        summary: "Explore Kenya's rugged northern frontier in Samburu National Reserve. Famous for its rare 'Special Five' species and rich Samburu culture.",
        heroImage: "https://images.unsplash.com/photo-1615456950275-5743c3d52317?w=1200&auto=format&fit=crop&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1565355605260-a08091dd7192?w=800&auto=format&fit=crop&q=70",
            "https://images.unsplash.com/photo-1600609842388-3e4b77d611b8?w=800&auto=format&fit=crop&q=70",
            "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=800&auto=format&fit=crop&q=70"
        ],
        destination: "samburu-national-reserve",
        country: "Kenya",
        travelStyle: "Wildlife Safari",
        highlights: [
            "Samburu Special Five",
            "Ewaso Ng'iro River",
            "Leopards of Samburu",
            "Cultural village visit",
            "Stunning landscapes"
        ],
        itinerary: [
            {
                day: 1,
                title: "Nairobi to Samburu",
                description: "Drive north past Mount Kenya to the arid lands of Samburu. Afternoon game drive introduction to the unique northern species.",
                accommodation: "Ashnil Samburu Camp",
                meals: "Lunch, Dinner"
            },
            {
                day: 2,
                title: "Discovering Rare Species",
                description: "Full day game drives searching for the Special Five: Grevy's zebra, Somali ostrich, reticulated giraffe, gerenuk, and beisa oryx.",
                accommodation: "Ashnil Samburu Camp",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 3,
                title: "River Life & Culture",
                description: "Morning safari along the river banks. Afternoon visit to a Samburu village to learn about their nomadic way of life.",
                accommodation: "Ashnil Samburu Camp",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 4,
                title: "Buffalo Springs Reserve",
                description: "Explore the neighboring Buffalo Springs reserve for a different perspective and swimming in the natural springs.",
                accommodation: "Ashnil Samburu Camp",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 5,
                title: "Return to Nairobi",
                description: "Morning game drive en route to the exit. Drive back to Nairobi with lunch stop at Nanyuki.",
                accommodation: null,
                meals: "Breakfast, Lunch"
            }
        ],
        included: [
            "All park fees",
            "Transport in 4x4 cruiser",
            "Full board accommodation",
            "Professional guide",
            "Cultural visit",
            "Water during safari"
        ],
        excluded: [
            "Flights",
            "Drinks",
            "Tips",
            "Personal items"
        ],
        featured: false
    },
    {
        id: 8,
        slug: "tsavo-coast-safari",
        title: "Tsavo East & West Expedition",
        duration: "6 Days",
        durationDays: 6,
        startingPrice: 2400,
        summary: "A classic safari journey through the vast Tsavo ecosystems, visiting Mzima Springs, lava flows, and the red elephants of Tsavo East.",
        heroImage: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=1200&auto=format&fit=crop&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1535940348721-e3745672cd50?w=800&auto=format&fit=crop&q=70",
            "https://images.unsplash.com/photo-1469176378416-2495d4d3c631?w=800&auto=format&fit=crop&q=70"
        ],
        destination: "tsavo-west",
        country: "Kenya",
        travelStyle: "Wildlife Safari",
        highlights: [
            "Mzima Springs underwater hippos",
            "Shetani Lava Flow",
            "Red elephants",
            "Rhino sanctuary",
            "Aruba Dam"
        ],
        itinerary: [
            {
                day: 1,
                title: "Nairobi to Tsavo West",
                description: "Depart Nairobi for Tsavo West. Visit the spooky Shetani Lava Flow before checking into your lodge.",
                accommodation: "Kilaguni Serena Lodge",
                meals: "Lunch, Dinner"
            },
            {
                day: 2,
                title: "Mzima Springs & Rhinos",
                description: "Morning visit to Mzima Springs to see hippos underwater. Afternoon game drive in the rhino sanctuary.",
                accommodation: "Kilaguni Serena Lodge",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 3,
                title: "Tsavo West to Tsavo East",
                description: "Cross into the vast plains of Tsavo East. The landscape changes to red earth and open savannah.",
                accommodation: "Ashnil Aruba Lodge",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 4,
                title: "Red Elephants of Tsavo",
                description: "Full day exploring Tsavo East. Look for the famous 'red elephants' dusted in the park's soil.",
                accommodation: "Ashnil Aruba Lodge",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 5,
                title: "Galana River",
                description: "Game drive along the Galana River, a lifeline for wildlife in this arid region. Optional walking safari.",
                accommodation: "Ashnil Aruba Lodge",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 6,
                title: "Departure",
                description: "Morning game drive. Transfer to Mombasa for a beach extension or back to Nairobi/Moi International Airport.",
                accommodation: null,
                meals: "Breakfast"
            }
        ],
        included: [
            "Park fees",
            "Scanning and guiding",
            "Accommodation and meals",
            "Transport"
        ],
        excluded: [
            "International flights",
            "Tips",
            "Drinks"
        ],
        featured: false
    },
    {
        id: 9,
        slug: "rift-valley-explorer",
        title: "Great Rift Valley Explorer",
        duration: "4 Days",
        durationDays: 4,
        startingPrice: 1600,
        summary: "Discover the lakes of the Rift Valley. From the bird-rich Lake Nakuru and its rhinos to cycling through Hell's Gate and boat rides on Naivasha.",
        heroImage: "https://images.unsplash.com/photo-1596708465064-a0f124c65207?w=1200&auto=format&fit=crop&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1565152399960-9d0847b7c2b6?w=800&auto=format&fit=crop&q=70",
            "https://images.unsplash.com/photo-1506543730435-e2d1d8dc66db?w=800&auto=format&fit=crop&q=70"
        ],
        destination: "lake-nakuru",
        country: "Kenya",
        travelStyle: "Family Safari",
        highlights: [
            "Rhinos in Nakuru",
            "Cycling in Hell's Gate",
            "Boat ride on Lake Naivasha",
            "Walking safari"
        ],
        itinerary: [
            {
                day: 1,
                title: "Nairobi to Lake Nakuru",
                description: "Short drive to Lake Nakuru. Afternoon game drive to see rhinos and (seasonally) flamingos.",
                accommodation: "Sarova Lion Hill",
                meals: "Lunch, Dinner"
            },
            {
                day: 2,
                title: "Nakuru to Naivasha",
                description: "Morning game drive. Transfer to Lake Naivasha. Afternoon boat ride to see hippos and fish eagles.",
                accommodation: "Enashipai Resort",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 3,
                title: "Hell's Gate Adventure",
                description: "Walking or cycling safari in Hell's Gate National Park. Visit the spectacular gorge.",
                accommodation: "Enashipai Resort",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 4,
                title: "Return to Nairobi",
                description: "Leisurely breakfast. Drive back to Nairobi, arriving by lunch.",
                accommodation: null,
                meals: "Breakfast"
            }
        ],
        included: [
            "Park fees",
            "Boat ride",
            "Bike hire",
            "Accommodation",
            "Transport"
        ],
        excluded: [
            "Tips",
            "Personal expenses"
        ],
        featured: false
    },
    {
        id: 10,
        slug: "tarangire-manyara-gems",
        title: "Tarangire & Manyara Secret Gems",
        duration: "5 Days",
        durationDays: 5,
        startingPrice: 2200,
        summary: "Experience the northern circuit's hidden wonders: the massive elephant herds of Tarangire and the tree-climbing lions of Lake Manyara.",
        heroImage: "https://images.unsplash.com/photo-1582298539031-6e3e55139fb9?w=1200&auto=format&fit=crop&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1504543265780-4598eb2a66be?w=800&auto=format&fit=crop&q=70",
            "https://images.unsplash.com/photo-1622323758656-b07c91353f86?w=800&auto=format&fit=crop&q=70"
        ],
        destination: "tarangire",
        country: "Tanzania",
        travelStyle: "Wildlife Safari",
        highlights: [
            "Tarangire Elephants",
            "Baobab landscapes",
            "Tree-climbing lions",
            "Manyara groundwater forest",
            "Night game drive option"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arusha to Tarangire",
                description: "Depart Arusha for Tarangire, the 'Elephant Playground'. Afternoon starts with baobabs and herds.",
                accommodation: "Tarangire Safari Lodge",
                meals: "Lunch, Dinner"
            },
            {
                day: 2,
                title: "Full Day Tarangire",
                description: "Explore the Silale Swamp and river circuits. Incredible birdlife and predator action.",
                accommodation: "Tarangire Safari Lodge",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 3,
                title: "To Lake Manyara",
                description: "Short drive to Lake Manyara. Enter the groundwater forest, looking for blue monkeys and baboons.",
                accommodation: "Kirurumu Manyara",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 4,
                title: "Manyara Lions & Flamingoes",
                description: "Game drive along the lake shore. Look for famous tree-climbing lions and flocks of flamingoes.",
                accommodation: "Kirurumu Manyara",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 5,
                title: "Back to Arusha",
                description: "Morning cultural visit to Mto wa Mbu village. Return to Arusha.",
                accommodation: null,
                meals: "Breakfast"
            }
        ],
        included: [
            "All park fees",
            "Vehicle and guide",
            "Accommodation",
            "Meals"
        ],
        excluded: [
            "Tips",
            "Drinks"
        ],
        featured: false
    },
    {
        id: 11,
        slug: "southern-tanzania-safari",
        title: "Southern Tanzania River Safari",
        duration: "8 Days",
        durationDays: 8,
        startingPrice: 4800,
        summary: "Go off the beaten path to Nyerere (Selous) and Ruaha. Enjoy boat safaris, walking safaris, and huge predator populations in untamed wilderness.",
        heroImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1563812543431-7e8c363d686f?w=800&auto=format&fit=crop&q=70",
            "https://images.unsplash.com/photo-1564760290292-23341e4df6ec?w=800&auto=format&fit=crop&q=70"
        ],
        destination: "selous-game-reserve",
        country: "Tanzania",
        travelStyle: "Wilderness Safari",
        highlights: [
            "River boat safari",
            "Walking safari",
            "Wild dogs",
            "Fly camping",
            "Remote landscapes"
        ],
        itinerary: [
            {
                day: 1,
                title: "Fly to Nyerere NP",
                description: "Flight from Dar es Salaam to Nyerere (Selous). Afternoon boat safari on the Rufiji River.",
                accommodation: "Siwandu Camp",
                meals: "Lunch, Dinner"
            },
            {
                day: 2,
                title: "Walking & Game Drives",
                description: "Morning walking safari to track animals on foot. Afternoon game drive in the reserve.",
                accommodation: "Siwandu Camp",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 3,
                title: "Full Day Nyerere",
                description: "Explore the deeper parts of the reserve. Excellent chance to see wild dogs.",
                accommodation: "Siwandu Camp",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 4,
                title: "Fly to Ruaha",
                description: "Light aircraft flight to Ruaha National Park. The landscape transforms to baobabs and hills.",
                accommodation: "Jabali Ridge",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 5,
                title: "Ruaha Predators",
                description: "Ruaha has 10% of the world's lions. Spend the day tracking large prides and huge buffalo herds.",
                accommodation: "Jabali Ridge",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 6,
                title: "Ruaha Wilderness",
                description: "Explore the Great Ruaha River. In the dry season, it is the only water source, attracting massive game concentrations.",
                accommodation: "Jabali Ridge",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 7,
                title: "Remote Ruaha",
                description: "Venture to remote sectors for complete isolation and raw nature.",
                accommodation: "Jabali Ridge",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 8,
                title: "Return to Dar",
                description: "Final morning game viewing. Flight back to Dar es Salaam.",
                accommodation: null,
                meals: "Breakfast"
            }
        ],
        included: [
            "Domestic flights",
            "Park fees",
            "Activities (Walks, Boat)",
            "Luxury accommodation"
        ],
        excluded: [
            "International flights",
            "Premium drinks"
        ],
        featured: false
    },
    {
        id: 12,
        slug: "kilimanjaro-trek",
        title: "Kilimanjaro Machame Trek",
        duration: "7 Days",
        durationDays: 7,
        startingPrice: 2600,
        summary: "Conquer the Roof of Africa via the scenic Machame Route. Experience five climate zones on your way to Uhuru Peak at 5,895m.",
        heroImage: "https://images.unsplash.com/photo-1634628410298-5c029de7e01d?w=1200&auto=format&fit=crop&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1653645800971-b46f2322da3c?w=800&auto=format&fit=crop&q=70",
            "https://images.unsplash.com/photo-1522883020614-368b6b033d64?w=800&auto=format&fit=crop&q=70"
        ],
        destination: "kilimanjaro-national-park",
        country: "Tanzania",
        travelStyle: "Trekking",
        highlights: [
            "Uhuru Peak summit",
            "Shira Plateau",
            "Lava Tower",
            "Barranco Wall",
            "Sunrise on the roof of Africa"
        ],
        itinerary: [
            {
                day: 1,
                title: "Machame Gate to Machame Camp",
                description: "Register at the gate. Trek through the rainforest zone to Machame Camp (3000m).",
                accommodation: "Camping",
                meals: "Lunch, Dinner"
            },
            {
                day: 2,
                title: "To Shira Camp",
                description: "Steep ascent leaving the forest for moorland. Views of Shira Plateau. Camp at 3840m.",
                accommodation: "Camping",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 3,
                title: "Lava Tower to Barranco",
                description: "Climb to Lava Tower (4600m) for acclimatization, then descend to Barranco Camp (3950m).",
                accommodation: "Camping",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 4,
                title: "Barranco Wall to Karanga",
                description: "Scramble up the Barranco Wall. Traverse to Karanga Camp (3995m).",
                accommodation: "Camping",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 5,
                title: "To Barafu Camp",
                description: "Hike to Barafu Camp (4673m), the base for the summit push. Early dinner and rest.",
                accommodation: "Camping",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 6,
                title: "Summit & Descent",
                description: "Midnight start. Reach Stella Point at dawn and Uhuru Peak (5895m) shortly after. Long descent to Mweka Camp.",
                accommodation: "Camping",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 7,
                title: "Mweka Gate",
                description: "Final descent through rainforest. Receive summit certificates at the gate.",
                accommodation: null,
                meals: "Breakfast"
            }
        ],
        included: [
            "Park & camping fees",
            "Guides & porters",
            "Meals on mountain",
            "Rescue fees"
        ],
        excluded: [
            "Gear rental",
            "Tips for crew (Mandatory)",
            "Personal insurance"
        ],
        featured: false
    },
    {
        id: 13,
        slug: "akagera-big-five",
        title: "Akagera Big Five Safari",
        duration: "3 Days",
        durationDays: 3,
        startingPrice: 1500,
        summary: "Discover Rwanda's savannah wilderness. Track lions, rhinos, and elephants in Akagera and enjoy a scenic boat cruise on Lake Ihema.",
        heroImage: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=1200&auto=format&fit=crop&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1576487248795-0373df899539?w=800&auto=format&fit=crop&q=70",
            "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=800&auto=format&fit=crop&q=70"
        ],
        destination: "akagera-national-park",
        country: "Rwanda",
        travelStyle: "Wildlife Safari",
        highlights: [
            "Big Five viewing",
            "Boat cruise",
            "Night game drive",
            "Scenic wetland scenery"
        ],
        itinerary: [
            {
                day: 1,
                title: "Kigali to Akagera",
                description: "Drive east to Akagera. Afternoon boat trip on Lake Ihema to see hippos and crocs.",
                accommodation: "Ruzizi Tented Lodge",
                meals: "Lunch, Dinner"
            },
            {
                day: 2,
                title: "North to South Game Drive",
                description: "Full day game drive heading to the exciting northern plains (Mutumba Hills) where wildlife density is highest.",
                accommodation: "Ruzizi Tented Lodge",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 3,
                title: "Morning Drive & Return",
                description: "Short morning game drive. Return to Kigali.",
                accommodation: null,
                meals: "Breakfast"
            }
        ],
        included: [
            "Park fees",
            "Boat trip",
            "Vehicle & Guide",
            "Accommodation"
        ],
        excluded: [
            "Tips",
            "Drinks"
        ],
        featured: false
    },
    {
        id: 14,
        slug: "nyungwe-canopy-chimps",
        title: "Nyungwe Primate & Canopy",
        duration: "3 Days",
        durationDays: 3,
        startingPrice: 1200,
        summary: "Immerse yourself in one of Africa's oldest rainforests. Trek chimps and walk high above the trees on the famous Canopy Walkway.",
        heroImage: "https://images.unsplash.com/photo-1507646870237-7c3855938575?w=1200&auto=format&fit=crop&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1440557653017-487052528669?w=800&auto=format&fit=crop&q=70",
            "https://images.unsplash.com/photo-1498642279262-d962058e586c?w=800&auto=format&fit=crop&q=70"
        ],
        destination: "nyungwe-forest",
        country: "Rwanda",
        travelStyle: "Primate & Hiking",
        highlights: [
            "Chimpanzee trekking",
            "Canopy Walkway",
            "Tea plantations",
            "Rainforest hikes"
        ],
        itinerary: [
            {
                day: 1,
                title: "Kigali to Nyungwe",
                description: "Scenic drive through the hills to Nyungwe. Stop at the Royal Palace Museum en route.",
                accommodation: "Nyungwe Top View",
                meals: "Lunch, Dinner"
            },
            {
                day: 2,
                title: "Chimps & Canopy Walk",
                description: "Morning chimp trek in the Cyamudongo forest. Afternoon canopy walk 60m above the forest floor.",
                accommodation: "Nyungwe Top View",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 3,
                title: "Tea & Departure",
                description: "Visit a tea plantation. Drive back to Kigali.",
                accommodation: null,
                meals: "Breakfast"
            }
        ],
        included: [
            "Permits (Chimp + Canopy)",
            "Guide",
            "Accommodation",
            "Transport"
        ],
        excluded: [
            "Tips",
            "Personal items"
        ],
        featured: false
    },
    {
        id: 15,
        slug: "kibale-chimps-craters",
        title: "Kibale Chimps & Crater Lakes",
        duration: "4 Days",
        durationDays: 4,
        startingPrice: 1400,
        summary: "Focus on primates in Kibale, the world's primate capital. Track chimps and explore the stunning crater lakes region.",
        heroImage: "https://images.unsplash.com/photo-1544605058-297d266e744d?w=1200&auto=format&fit=crop&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1582298539031-6e3e55139fb9?w=800&auto=format&fit=crop&q=70",
            "https://images.unsplash.com/photo-1585834925763-7c1527633633?w=800&auto=format&fit=crop&q=70"
        ],
        destination: "kibale-national-park",
        country: "Uganda",
        travelStyle: "Primate Safari",
        highlights: [
            "Habituated Chimpanzee Trek",
            "Bigodi Wetland",
            "Crater Lake Hikes",
            "Views of Rwenzoris"
        ],
        itinerary: [
            {
                day: 1,
                title: "Kampala to Kibale",
                description: "Drive to Fort Portal and the crater lakes region. Views of the Rwenzori mountains.",
                accommodation: "Turaco Treetops",
                meals: "Lunch, Dinner"
            },
            {
                day: 2,
                title: "Chimpe Trekking",
                description: "Morning chimp tracking. Afternoon Bigodi swamp walk to see other primates and birds.",
                accommodation: "Turaco Treetops",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 3,
                title: "Crater Lakes Hike",
                description: "Guided hike through the crater lakes area, visiting 'Top of the World' viewpoint.",
                accommodation: "Turaco Treetops",
                meals: "Breakfast, Lunch, Dinner"
            },
            {
                day: 4,
                title: "Return to Kampala",
                description: "Leisurely breakfast and drive back to Kampala/Entebbe.",
                accommodation: null,
                meals: "Breakfast"
            }
        ],
        included: [
            "Chimp permit",
            "Nature walks",
            "Accommodation",
            "Transport"
        ],
        excluded: [
            "Tips",
            "Drinks"
        ],
        featured: false
    },
    {
        id: 16,
        slug: "wild-lake-mburo",
        title: "Wildlife of Lake Mburo",
        duration: "2 Days",
        durationDays: 2,
        startingPrice: 600,
        summary: "A perfect short getaway to see zebras, giraffes, and impalas. Enjoy a walking safari and boat cruise in Uganda's smallest savannah park.",
        heroImage: "https://images.unsplash.com/photo-1550155829-3738b5561a09?w=1200&auto=format&fit=crop&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1518335043817-f58c7329759d?w=800&auto=format&fit=crop&q=70",
            "https://images.unsplash.com/photo-1565355605260-a08091dd7192?w=800&auto=format&fit=crop&q=70"
        ],
        destination: "lake-mburo",
        country: "Uganda",
        travelStyle: "Short Safari",
        highlights: [
            "Walking safari",
            "Zebras & Giraffes",
            "Boat cruise",
            "Equator stop"
        ],
        itinerary: [
            {
                day: 1,
                title: "Kampala to Mburo",
                description: "Drive to Lake Mburo with a stop at the Equator. Afternoon boat cruise.",
                accommodation: "Rwakobo Rock",
                meals: "Lunch, Dinner"
            },
            {
                day: 2,
                title: "Morning Safari & Return",
                description: "Early morning walking safari or game drive. Return to Kampala in the afternoon.",
                accommodation: null,
                meals: "Breakfast, Lunch"
            }
        ],
        included: [
            "Park fees",
            "Activities",
            "Accommodation",
            "Transport"
        ],
        excluded: [
            "Tips",
            "Drinks"
        ],
        featured: false
    }
]


/**
 * Get featured experiences
 */
export const getFeaturedExperiences = () => {
    return experiences.filter(exp => exp.featured)
}

/**
 * Get experience by slug
 */
export const getExperienceBySlug = (slug) => {
    return experiences.find(exp => exp.slug === slug)
}

/**
 * Get experiences by country
 */
export const getExperiencesByCountry = (country) => {
    return experiences.filter(exp => exp.country === country)
}

/**
 * Get experiences by destination slug
 */
export const getExperiencesByDestination = (destinationSlug) => {
    return experiences.filter(exp => exp.destination === destinationSlug)
}
