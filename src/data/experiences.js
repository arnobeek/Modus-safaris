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
