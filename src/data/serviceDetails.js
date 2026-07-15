// Six dedicated service pages under /services/<slug>/. Each needs genuinely
// distinct copy (300-500 words) — not a mail-merge of the overview page.
module.exports = [
  {
    slug: "residential-locksmith",
    icon: "home",
    navLabel: "Residential Locksmith",
    title: "Residential Locksmith | Lockouts, Rekeys & Smart Locks",
    metaDescription:
      "Locked out of your house? Tradition Locksmith handles lockouts, rekeys, deadbolts & smart locks across the Treasure Coast, 24/7.",
    h1: "Residential Locksmith Services on the Treasure Coast",
    kicker: "Home & Apartment Security",
    intro:
      "Your front door works harder than almost anything else in your house, and it only takes one bad day — a lost key, a snapped lock cylinder, a moving day mix-up — to remind you how much you depend on it. Tradition Locksmith handles residential lock and key work across the Treasure Coast, from a simple house lockout to a full rekey after closing on a new home.",
    body: [
      "House lockouts are the call we get most often, and they're rarely convenient — a toddler locks the door from the inside, groceries are melting in the car, or you're standing outside at midnight with no spare key in sight. We use non-destructive entry methods whenever the lock allows it, so in most cases your existing hardware doesn't need to be replaced just to get you back inside.",
      "Rekeying is the residential job that saves people the most money in the long run. If you just closed on a home, you have no idea how many copies of the old keys are floating around — a rekey changes the internals of your existing lock to work with a new key, without the cost of replacing the hardware itself. It's just as common after a roommate moves out, a lease ends, or you've simply lost track of who has a copy.",
      "Beyond lockouts and rekeys, we install and repair deadbolts, handle sliding glass door and patio lock repair (a frequent issue on Treasure Coast homes exposed to salt air and humidity), and cut replacement keys for mailboxes and lockboxes. If you're moving into a smart-lock era, we install and set up keypad and app-controlled locks on both new construction and older doors — matching the existing strike plate and door prep so it's a clean retrofit, not a redo of your whole door.",
      "A lot of Treasure Coast neighborhoods are HOA-managed, and we're used to working within community hardware requirements — matching approved finishes and lock styles so you stay compliant without extra back-and-forth. Whether your home has original hardware from the 1980s or a builder-grade smart lock installed last year, we carry parts and expertise for both.",
    ],
    included: [
      "House & apartment lockouts",
      "Lock rekeying (new home, roommate move-out, lost keys)",
      "Deadbolt & lock installation or repair",
      "Smart lock installation & setup",
      "Sliding door & patio lock repair",
      "Mailbox & lockbox keys",
      "HOA-compliant hardware matching",
    ],
    faq: [
      {
        q: "What's the difference between rekeying and replacing a lock?",
        a: "Rekeying changes the internal pins of your existing lock so old keys no longer work and a new key is issued — it's faster and less expensive than replacing the hardware. Replacement is only necessary if the lock itself is damaged or you want a different style or finish.",
      },
      {
        q: "Can you get into my house without damaging the door or lock?",
        a: "In most cases, yes. We use non-destructive entry techniques appropriate to the lock type, and only recommend drilling or forcing entry when the lock is already damaged or the situation requires it.",
      },
      {
        q: "Do you install smart locks on older doors?",
        a: "Yes. We regularly retrofit smart locks onto older doors, adjusting the strike plate and door prep as needed for a clean, secure fit.",
      },
    ],
  },
  {
    slug: "commercial-locksmith",
    icon: "building",
    navLabel: "Commercial Locksmith",
    title: "Commercial Locksmith | Master Key Systems & Security",
    metaDescription:
      "Commercial locksmith service across the Treasure Coast — master key systems, panic hardware, and business rekeys. Call 772-244-4552.",
    h1: "Commercial Locksmith Services for Treasure Coast Businesses",
    kicker: "Business & Property Security",
    intro:
      "A locked door shouldn't be what stands between your team and a normal workday. Tradition Locksmith works with business owners, office managers, and property managers across the Treasure Coast to keep storefronts, offices, and multi-tenant buildings secure and running — usually scheduled around your hours, not the other way around.",
    body: [
      "Master key systems are the backbone of most commercial security setups, and getting one designed right the first time saves headaches for years. We design and install master key systems that give you and your managers the access you need without handing every employee a key that opens everything — useful for offices, retail chains with multiple locations, and multi-tenant buildings where different keyholders need different levels of access.",
      "Panic bars and exit devices are both a security decision and a fire code requirement for many commercial occupancies. We install, repair, and service panic hardware so your building stays compliant and your exits stay reliable — this isn't hardware you want failing during an actual emergency.",
      "Employee turnover is one of the most common reasons businesses call us: a former employee still has a key, or you simply don't know how many copies exist after years of staff changes. A commercial rekey resets that risk without replacing every lock in the building. We also handle file cabinet and desk locks, which tend to get forgotten until the one time you actually need them to work.",
      "For businesses evaluating a bigger security upgrade, we offer access control consultation — walking through your current setup and where keyed locks, master key systems, or electronic access might make the most sense for your specific building and traffic patterns. Because after-hours lockouts cost businesses real time and money, we prioritize scheduling that works around your operating hours, including early-morning and after-close service when that's what keeps your business moving.",
    ],
    included: [
      "Storefront & office lockouts",
      "Master key system design & installation",
      "Panic bar & exit device hardware",
      "Commercial rekeys after staff turnover",
      "File cabinet & desk locks",
      "Access control consultation",
      "Scheduling around business hours",
    ],
    faq: [
      {
        q: "How does a master key system work?",
        a: "A master key system uses specially cut keys so that individual keys open only their assigned door, while a master key opens multiple or all doors. It lets you control access by role without issuing a universal key to everyone.",
      },
      {
        q: "Do you install panic bars for fire code compliance?",
        a: "Yes, we install and service panic bar and exit device hardware to help commercial properties meet fire code egress requirements.",
      },
      {
        q: "Can you rekey a business without disrupting the workday?",
        a: "Yes — we regularly schedule commercial rekeys before opening, after closing, or during slower hours specifically to avoid disrupting your team or customers.",
      },
    ],
  },
  {
    slug: "automotive-locksmith",
    icon: "car",
    navLabel: "Automotive Locksmith",
    title: "Automotive Locksmith | Car Lockouts & Key Replacement",
    metaDescription:
      "Locked out of your car or lost your only key? Tradition Locksmith offers mobile automotive locksmith service, Treasure Coast-wide, 24/7.",
    h1: "Automotive Locksmith Services — Car Lockouts & Key Replacement",
    kicker: "Mobile Vehicle Locksmith",
    intro:
      "Car lockouts and lost keys don't happen on a schedule — they happen in parking lots, driveways, and rest stops, usually at the worst possible time. Tradition Locksmith is a mobile automotive locksmith service, which means we come to you rather than asking you to get your car towed somewhere first.",
    body: [
      "A vehicle lockout is our most common automotive call, and it's one we can usually resolve on the spot without damaging your door or window. Whether your key is locked inside, snapped in the ignition, or simply missing, we bring the tools and training to get you back in your car safely.",
      "Modern vehicles almost all use transponder chip keys or proximity fobs rather than simple metal keys, which means losing your only key is more involved than it used to be — the replacement has to be cut and programmed to match your specific vehicle's immobilizer system before the engine will even start. We program transponder keys and smart fobs on-site for most makes and models, including vehicles where you've genuinely lost every key and need one created from scratch.",
      "Because a dealership visit for a replacement key often means towing the car in and waiting days for a part order, a mobile automotive locksmith is usually both faster and less expensive — we come to your location, whether that's your driveway, a Treasure Coast parking lot, or the shoulder of the road, and handle the cutting and programming there.",
      "Beyond keys and lockouts, we handle ignition repair for ignitions that are sticking, spinning, or refusing to turn, and broken key extraction when a key snaps off inside the lock or ignition. We also cut and program keys for motorcycles and trucks, not just standard passenger cars. If you're stranded, the goal is always the same: get you back on the road safely, without unnecessary towing or downtime.",
    ],
    included: [
      "Car lockout / vehicle entry",
      "Key fob & transponder chip programming",
      "Replacement car keys, cut & programmed on-site",
      "Ignition repair",
      "Broken key extraction",
      "Motorcycle & truck keys",
      "Mobile service — we come to you",
    ],
    faq: [
      {
        q: "Can you make a car key if I've lost all of my keys?",
        a: "Yes. When there are no working keys left, we can cut and program a new key or fob to your vehicle's immobilizer system on-site, without needing the car towed to a dealer.",
      },
      {
        q: "Is a mobile locksmith really faster than the dealership?",
        a: "Usually. Dealerships often require towing the vehicle in and waiting on parts, while we bring the key-cutting and programming equipment to your location and typically finish the same visit.",
      },
      {
        q: "Do you work on all car makes and models?",
        a: "We program transponder keys and smart fobs for most makes and models on the road. If you're unsure about your specific vehicle, call and we can confirm before dispatching.",
      },
    ],
  },
  {
    slug: "emergency-locksmith",
    icon: "siren",
    navLabel: "24/7 Emergency Locksmith",
    title: "24/7 Emergency Locksmith | Treasure Coast, FL",
    metaDescription:
      "Locked out at 2am or dealing with a break-in? Tradition Locksmith answers the phone 24/7 across the Treasure Coast. Call 772-244-4552.",
    h1: "24/7 Emergency Locksmith Service on the Treasure Coast",
    kicker: "Nights, Weekends & Holidays",
    intro:
      "Lock emergencies don't check the clock, and neither do we. Tradition Locksmith answers the phone and dispatches a locksmith 24 hours a day, 7 days a week, including holidays — for homes, businesses, and vehicles anywhere across our Treasure Coast service area.",
    body: [
      "Most people only think about an emergency locksmith the moment they need one, so here's what actually counts: a house or apartment lockout after hours, a business that won't secure because of damaged door hardware, a key that's snapped off inside a lock or ignition, or a lock that's been forced or damaged during a break-in. All of these are situations where waiting until morning isn't really an option.",
      "When you call, we'll ask a few quick questions — what's locked, where you are, and what's already been tried — so we can send a locksmith equipped for the actual job rather than guessing. Residential, commercial, and automotive emergencies all come through the same line, so whether you're standing outside your house at midnight or dealing with a break-in at your business before opening, it's one call.",
      "Break-ins deserve special mention: if a door or window lock has been forced or damaged, getting it secured and often rekeyed isn't just about convenience, it's about making sure whoever caused the damage doesn't still have a way back in. We treat post-break-in calls as a priority and can usually get a functioning, secure lock back in place the same visit, with a full rekey or replacement scheduled after if needed.",
      "We won't pretend every emergency call gets an identical response time — how fast we arrive depends on where you are in our Treasure Coast coverage area and what else is in progress at that moment — but the phone gets answered, and a locksmith gets dispatched, every time, day or night.",
    ],
    included: [
      "24/7 phone answer — no answering service",
      "Emergency house & apartment lockouts",
      "Emergency business lockouts",
      "Vehicle lockouts, any hour",
      "Broken key extraction",
      "Post-break-in lock repair & rekey",
      "Holidays & weekends covered",
    ],
    faq: [
      {
        q: "Do you actually answer the phone at night, or does it go to voicemail?",
        a: "We answer the phone directly, 24 hours a day. It's not an answering service that calls you back in the morning.",
      },
      {
        q: "My door was forced open in a break-in — what should I do first?",
        a: "Make sure it's safe before touching anything, and call us — we prioritize post-break-in calls and can typically get the door secured the same visit, with a rekey or hardware replacement to follow.",
      },
      {
        q: "Is emergency service available on holidays?",
        a: "Yes, we're open and dispatching locksmiths 24/7/365, including all major holidays.",
      },
    ],
  },
  {
    slug: "smart-lock-installation",
    icon: "chip",
    navLabel: "Smart Lock Installation",
    title: "Smart Lock Installation | Tradition Locksmith",
    metaDescription:
      "Professional smart lock installation across the Treasure Coast — keypad & app-controlled locks for homes and businesses. Call now.",
    h1: "Smart Lock Installation & Setup",
    kicker: "Keyless Entry, Done Right",
    intro:
      "Smart locks solve a real problem — no more hidden spare keys, no more re-keying every time a housekeeper or guest needs access — but only if they're installed correctly on hardware that actually fits your door. Tradition Locksmith installs and configures smart locks across the Treasure Coast, on both new construction and older doors.",
    body: [
      "Smart locks generally fall into a couple of categories: keypad locks that use a code instead of a physical key, and app-controlled or proximity locks that connect to your phone over Bluetooth or Wi-Fi. Which one makes sense depends on how you'll use it — a keypad is often simplest for a family that just wants to stop worrying about lost keys, while an app-controlled lock makes more sense if you want to grant and revoke access remotely, like for a vacation rental.",
      "Installation is where a lot of smart lock problems start, and it's usually a fit issue rather than a technology issue — the lock needs to match your door's backset, bore hole size, and existing strike plate, or it needs some adjustment to fit properly. We handle that fitting work on both newer doors that were pre-drilled for standard hardware and older Treasure Coast homes where the door prep doesn't perfectly match a big-box smart lock kit out of the box.",
      "Once it's physically installed, we handle setup — pairing the lock with your phone or hub, programming keypad codes, and walking you through how to add or remove access for family members, cleaners, or guests. For vacation rental owners, which is common along our stretch of the coast, this means being able to issue a unique code per guest and change it after every checkout without ever having to physically visit the property or make a new key.",
      "We install locks across the range of major smart lock brands rather than pushing one specific product, so the recommendation is based on your door, your budget, and how you actually want to use it — not on what we happen to have the most of in the truck.",
    ],
    included: [
      "Keypad lock installation",
      "App-controlled & Bluetooth lock installation",
      "Retrofitting older doors for smart lock hardware",
      "App/hub pairing and setup",
      "Access code programming for family, guests & staff",
      "Vacation rental / short-term rental setups",
      "Works with most major smart lock brands",
    ],
    faq: [
      {
        q: "Will a smart lock fit my existing door?",
        a: "In most cases, yes — we check your door's backset and bore hole size against the lock and handle any adjustment needed. Some older doors need minor prep work, which we can usually do on the same visit.",
      },
      {
        q: "Can I set different access codes for different people?",
        a: "Yes, most keypad and app-controlled locks support multiple codes or user profiles, and we'll set those up and show you how to manage them yourself afterward.",
      },
      {
        q: "Are smart locks a good fit for a vacation rental?",
        a: "Very much so — a unique code per guest, changed automatically or manually after each checkout, means you're not rekeying or meeting guests in person just to hand over a key.",
      },
    ],
  },
  {
    slug: "car-key-programming",
    icon: "key",
    navLabel: "Car Key Programming",
    title: "Car Key & Fob Programming | Tradition Locksmith",
    metaDescription:
      "On-site car key and fob programming across the Treasure Coast — transponder keys, smart fobs, lost-key replacement. Call 772-244-4552.",
    h1: "Car Key & Fob Programming",
    kicker: "Transponder Keys & Smart Fobs",
    intro:
      "Almost every car built in the last two decades won't start on a cut key alone — it also needs to be programmed to the vehicle's immobilizer system, or the engine simply won't turn over. Tradition Locksmith cuts and programs car keys and fobs on-site across the Treasure Coast, whether you need a spare or you've lost every key you own.",
    body: [
      "There's a real difference between a basic metal key, a transponder key, and a proximity smart fob, and it matters for what we're actually doing. A basic key just needs cutting to match the lock. A transponder key has a chip inside that has to be programmed to \"talk\" to your car's immobilizer before the engine will start, even if the cut is perfect. A proximity fob goes further, handling keyless entry and push-button start, and needs its own programming to sync with the vehicle.",
      "If you still have one working key, adding a spare is usually the simpler job — we cut and program an additional key or fob without disturbing the one you already have. It's the more complicated scenario, losing every key to a vehicle, where a locksmith saves the most time and money: we can program a brand new key to the car from scratch, on-site, without the vehicle ever needing to be towed anywhere.",
      "Dealerships can do this work too, but it typically means scheduling an appointment, having the car towed in if you have zero working keys, and waiting on a parts order — sometimes days. We bring the programming equipment to you, whether that's your home, workplace, or roadside, and most jobs are completed in a single visit.",
      "We program keys and fobs for most makes and models on the road today. If you're not sure whether your vehicle uses a basic key, a transponder, or a smart fob, that's fine — tell us the year, make, and model when you call, and we'll know exactly what to bring.",
    ],
    included: [
      "Transponder key programming",
      "Smart key fob programming",
      "Spare key & fob creation",
      "All-keys-lost replacement, programmed from scratch",
      "On-site service — no towing required",
      "Most makes and models",
    ],
    faq: [
      {
        q: "Why won't my new key start the car even though it fits the lock?",
        a: "Most modern cars require the key to be electronically programmed to the vehicle's immobilizer system, not just cut correctly. A key that fits but wasn't programmed will turn the lock but won't start the engine.",
      },
      {
        q: "What if I've lost all my keys, not just one?",
        a: "We can program a brand new key or fob to your vehicle from scratch, on-site, even with zero working keys remaining — no tow truck needed.",
      },
      {
        q: "Is this cheaper than going to the dealership?",
        a: "Often, yes — dealerships frequently require towing and a parts-order wait, while we bring the equipment to you and typically finish the same visit.",
      },
    ],
  },
];
