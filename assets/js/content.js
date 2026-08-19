/* =============================================================================
   KUDAKU — Content & Data Layer (V0.3 · bilingual ID/EN)
   -----------------------------------------------------------------------------
   Single source of truth for all site content, kept strictly separated from
   markup so the whole surface can switch between Indonesian (id) and English
   (en) without touching page structure.

   — `meta`      : language runtime settings (default, supported, storage key)
   — `en` / `id` : parallel datasets with identical shapes
   — `pages`     : static per-page copy (hero, sections, CTAs, title, meta desc)
   ============================================================================= */
window.KUDAKU_CONTENT = (function () {
  "use strict";

  var META = {
    defaultLang: "id",
    supported: ["id", "en"],
    storageKey: "kudaku-lang"
  };

  /* ===========================================================================
     ENGLISH (en)
     =========================================================================== */
  var en = {
    brand: {
      name: "KUDAKU",
      fullName: "Kuningan Dapur Kuliner",
      descriptor: "A Cultural Food Platform",
      tagline: "Where Indonesia meets through food.",
      principle: ["Born in Kuningan.", "Rooted in Nusantara.", "Open to the World."],
      initiator: "Bumi Seni Tarikolot",
      location: "Desa Sukamukti · Kuningan · Jawa Barat · Indonesia"
    },

    nav: [
      { label: "Home", href: "index.html" },
      { label: "About", href: "about.html" },
      { label: "Ecosystem", href: "ecosystem.html" },
      { label: "Nusantara", href: "nusantara.html" },
      { label: "Impact & Legacy", href: "impact.html" },
      { label: "Partners", href: "partners.html" },
      { label: "Origin", href: "origin.html" },
      { label: "Contact", href: "contact.html" }
    ],

    dna: [
      { code: "TASTE", title: "Taste", text: "Food as sensory knowledge — ingredients, dishes, and the memory they carry from field to table." },
      { code: "KNOW", title: "Know", text: "Food as knowledge — history, ecology, science, and living tradition passed between generations." },
      { code: "MEET", title: "Meet", text: "Food as encounter — shared tables, honest dialogue, and the bonds that form over a common meal." },
      { code: "CREATE", title: "Create", text: "Food as creation — craft, art, and the imagination that keeps a cuisine alive and moving." },
      { code: "CARE", title: "Care", text: "Food as stewardship — of soil, farmers, ecosystems, and the generations still to be fed." }
    ],

    programs: [
      { n: "01", name: "KUDAKU Table", id: "Perjamuan Budaya", concept: "One Table. Many Cultures. One Earth.", text: "Communal dining that gathers farmers, chefs, village communities, artists, national guests and international guests around one shared table." },
      { n: "02", name: "KUDAKU Kitchen", id: "Dapur Pengalaman", text: "Cooking experiences, demonstrations, classes, chef collaboration, and the living transmission of traditional culinary knowledge." },
      { n: "03", name: "KUDAKU Market", id: "Pasar Pangan & Kreativitas", text: "Farm products, culinary products, processed food, UMKM, spices, creative products, crafts, books and cultural works — in direct dialogue." },
      { n: "04", name: "KUDAKU Farm", id: "Dari Tanah ke Dapur", text: "Seed, planting, harvesting, spices and agriculture — transforming garden produce from soil to plate." },
      { n: "05", name: "KUDAKU Lab", id: "Laboratorium Pangan", concept: "Chef × Farmer × Researcher × Student × Designer × UMKM", text: "Product innovation, fermentation, local food, processing technology, recipe development, food waste, packaging and the creative economy." },
      { n: "06", name: "KUDAKU Class", id: "Sekolah Pangan dan Budaya", text: "Learning and transmission for children, youth, students, communities, UMKM, teachers, farmers and tourism actors." },
      { n: "07", name: "KUDAKU Talk", id: "Forum Pangan & Kebudayaan", text: "Dialogue on local food, food resilience, culture, agriculture, climate change, youth, the creative economy, gastronomy, tourism and the future of food." },
      { n: "08", name: "KUDAKU Stage", id: "Seni dan Kebudayaan", text: "Music, dance, theatre, storytelling, traditional performance and contemporary work — gathered around food." },
      { n: "09", name: "KUDAKU Archive", id: "Arsip Pangan Nusantara", concept: "Ambition: 100 Resep Dapur Kuningan → 1000 Cerita Pangan Nusantara", text: "Recipes, stories, photography, video, interviews, kitchen tools, ingredients, practitioners and food history — documented as a living legacy." },
      { n: "10", name: "KUDAKU Residency", text: "A residence and creative program for chefs, artists, researchers, students, cultural practitioners and food practitioners — living and working at Bumi Seni Tarikolot alongside the community." },
      { n: "11", name: "Food Diplomacy", concept: "Food is one of the most universal ways for people to meet.", text: "Food as cultural diplomacy — chef exchange, cultural dinners, cooking collaborations, residencies, food research, cultural dialogue and creative collaboration. A future exchange architecture between Indonesia and Japan, Korea, India, Thailand, Malaysia, Australia, and beyond." }
    ],

    days: [
      {
        day: "Day 1", name: "AKAR", gloss: "Root", subtitle: "Tanah, Pangan & Identitas",
        text: "Understanding where food comes from — and the people behind it. A day of return to the source of taste.",
        moments: ["Dari Tanah ke Meja", "KUDAKU Farm Experience", "KUDAKU Archive: Cerita dari Dapur Nenek", "Pasar Pangan & Kreativitas", "Jamuan Nusantara", "Malam Budaya Nusantara"]
      },
      {
        day: "Day 2", name: "PERTEMUAN", gloss: "Encounter", subtitle: "Indonesia Bertemu",
        text: "Bringing together regions, traditions, people and knowledge around one shared table.",
        moments: ["Sarapan Nusantara", "Pangan sebagai Identitas", "Dapur Nusantara", "KUDAKU Lab: Tradisi Bertemu Kreativitas", "KUDAKU Young Talent", "Parade Pangan Nusantara", "The Great Nusantara Dinner", "Nusantara Night"]
      },
      {
        day: "Day 3", name: "MASA DEPAN", gloss: "Future", subtitle: "Kreativitas, Ketahanan & Dunia",
        text: "From inherited knowledge toward the future of food — creativity, resilience, and the world.",
        moments: ["Future Food Forum", "Food as Cultural Diplomacy", "One Table — Many Cultures", "KUDAKU CREATE / Food Lab Final", "Future Market", "KUDAKU Legacy Session", "KUDAKU Awards"]
      }
    ],

    impact: [
      { title: "Culture", text: "Knowledge and recipes documented — living food traditions recorded and carried forward." },
      { title: "Education", text: "Learning participants and young people involved — the table as a classroom for the next generation." },
      { title: "Economy", text: "Economic value and benefits received by local actors — producers, growers, and makers." },
      { title: "Network", text: "Villages, regions, institutions and countries connected through food." },
      { title: "Creativity", text: "New works, products and collaborations born from the platform." },
      { title: "Ecology", text: "Waste reduction, local food use and environmentally responsible practice." },
      { title: "Legacy", text: "Knowledge, documentation, programs and collaborations that continue after the flagship event." }
    ],

    partners: [
      { title: "Government", text: "Policy, place, and public platforms that align cultural and economic development." },
      { title: "Academia", text: "Research, documentation, and the rigour that turns practice into knowledge." },
      { title: "Business", text: "Purpose-aligned enterprises that extend reach in service of culture." },
      { title: "Community", text: "Producers, practitioners, and local groups who carry the culture every day." },
      { title: "Media", text: "Storytellers who bring the work to wider publics with care and context." },
      { title: "Cultural institutions", text: "Peers at home who open doors for exchange and shared learning." },
      { title: "International organizations", text: "Global networks that connect Indonesian food culture to the world." }
    ],

    growth: [
      { stage: "Kuningan", note: "Where KUDAKU is born — at Bumi Seni Tarikolot, at the foot of Mount Ciremai." },
      { stage: "Jawa Barat", note: "The province as a living region of producers, kitchens, and traditions." },
      { stage: "Nusantara", note: "The archipelago as one shared table of islands, ingredients, and peoples." },
      { stage: "International", note: "Indonesia's food culture in dialogue with the world." }
    ],

    lifecycle: {
      phases: [
        { phase: "Pre-event", note: "Research, participant curation, education programs, residency, content production, promotion, and collaboration." },
        { phase: "Flagship event", note: "KUDAKU Nusantara — the annual gathering where the whole ecosystem comes to the table." },
        { phase: "Post-event", note: "Documentation, evaluation, publication, product development, collaboration follow-up, and legacy building." }
      ]
    },

    ui: {
      dayLabel: "Day",
      signatureMoments: "Signature moments",
      toggleMenu: "Toggle menu",
      primaryNav: "Primary",
      langLabel: "Language"
    },

    footer: {
      initiatedLabel: "Initiated by",
      principle: "Born in Kuningan. Rooted in Nusantara. Open to the World.",
      note: "A cultural food platform — a shared table that keeps growing across Nusantara."
    },

    pages: {
      index: {
        title: "KUDAKU — Kuningan Dapur Kuliner · A Cultural Food Platform",
        description: "KUDAKU is a cultural food platform initiated by Bumi Seni Tarikolot. Born in Kuningan, rooted in Nusantara, open to the world — where Indonesia meets through food.",
        heroEyebrow: "KUDAKU · Kuningan Dapur Kuliner",
        heroTitle: "Where Indonesia meets through <em>food</em>.",
        heroSub: "KUDAKU is a cultural food platform initiated by Bumi Seni Tarikolot — a doorway into culture, people, nature, knowledge, and the future, opened one dish at a time.",
        heroCta1: "Explore the ecosystem",
        heroCta2: "KUDAKU Nusantara",
        heroTagline: "KUDAKU adalah tempat Indonesia bertemu melalui pangan.",
        ideaKicker: "The idea",
        ideaTitle: "Food is how a culture explains itself.",
        ideaLead: "Inside every dish is a geography, a history, a set of hands, and a way of seeing the world. KUDAKU treats food as a doorway — into the people who grow it, the land that sustains it, the knowledge that shaped it, and the future it points toward.",
        dnaKicker: "Experience DNA",
        dnaTitle: "Five ways to enter.",
        dapurKicker: "The dapur",
        dapurTitle: "A kitchen is a country in miniature.",
        dapurLead: "The Indonesian word <em>dapur</em> — kitchen — names the hearth where raw becomes nourishing, where knowledge passes from one generation to the next, and where a family, a village, a nation is made.",
        dapurText: "KUDAKU carries this metaphor forward. We understand the dapur as the heart of culture: a place of transformation, care, gathering, and memory — the room where Indonesia has always met itself.",
        dapurCta: "About KUDAKU",
        flagshipKicker: "Flagship",
        flagshipTitle: "KUDAKU Nusantara",
        flagshipLead: "The annual gathering where the whole ecosystem comes to the table — three days, from root to future.",
        flagshipRoll: "Day 1 — AKAR · Day 2 — PERTEMUAN · Day 3 — MASA DEPAN",
        flagshipCta: "Meet the flagship",
        lifecycleKicker: "Year-round platform",
        lifecycleTitle: "The event lasts a few days. The platform works all year.",
        lifecycleLead: "\u201cEvent berlangsung beberapa hari, tetapi platform KUDAKU bekerja sepanjang tahun.\u201d KUDAKU Nusantara is the annual peak of a cycle that runs all year round.",
        ecoKicker: "Ecosystem",
        ecoTitle: "One platform. Eleven ways in.",
        ecoLead: "From table to farm, kitchen to archive, the KUDAKU ecosystem connects the people who grow, cook, study, perform, and remember food.",
        ecoRoll: "KUDAKU Table · KUDAKU Kitchen · KUDAKU Market · KUDAKU Farm · KUDAKU Lab · KUDAKU Class · KUDAKU Talk · KUDAKU Stage · KUDAKU Archive · KUDAKU Residency · Food Diplomacy",
        ecoCta: "Explore the ecosystem",
        impactKicker: "Impact & legacy",
        impactTitle: "A meal, then a memory, then a legacy.",
        impactLead: "KUDAKU measures itself by what it leaves behind — in culture, education, local economy, ecology, and the archive of knowledge it keeps.",
        impactCta: "Impact & legacy",
        partnerKicker: "Partnership",
        partnerTitle: "Build the table together.",
        partnerLead: "KUDAKU grows through a network of government, academia, business, community, media, and cultural institutions. If your work shares this table, begin the conversation.",
        partnerCta: "Become a partner"
      },
      about: {
        title: "About — KUDAKU · Kuningan Dapur Kuliner",
        description: "KUDAKU is a cultural food platform born at Bumi Seni Tarikolot in Kuningan, growing from Kuningan to Jawa Barat, Nusantara, and the world.",
        heroEyebrow: "About KUDAKU",
        heroTitle: "A living cultural food platform.",
        heroLead: "KUDAKU is an independent cultural food platform — born at Bumi Seni Tarikolot, designed to grow far beyond it.",
        originKicker: "Origin",
        originTitle: "Born in Kuningan.",
        originLead: "KUDAKU begins at the foot of Mount Ciremai, in Desa Sukamukti, Kuningan, Jawa Barat — home of Bumi Seni Tarikolot, a forest-based cultural ecosystem with over a decade of grassroots practice.",
        originText: "What starts here is a conviction: that food is one of the deepest languages Indonesia speaks, and that it deserves a platform of its own.",
        visionKicker: "Vision",
        visionTitle: "A shared table for the whole archipelago.",
        visionText: "KUDAKU envisions Indonesia meeting itself — and the world — through food: a durable cultural platform where taste, knowledge, encounter, creation, and care are practiced as one.",
        missionKicker: "Mission",
        missionTitle: "Make food a doorway.",
        missionText: "To gather producers, cooks, scholars, artists, and communities around living food culture — and to turn every dish into a pathway into culture, people, nature, knowledge, and the future.",
        philosophyKicker: "Philosophy",
        philosophyTitle: "The dapur as cultural metaphor.",
        philosophyLead: "In the dapur — the kitchen — raw ingredients become nourishment, strangers become family, and knowledge moves quietly from elder hands to younger ones.",
        philosophyText: "KUDAKU reads the nation through this room. The dapur is where a culture is transformed, cared for, gathered, and remembered. It is the smallest unit of a civilization, and the most intimate.",
        initiatorKicker: "Initiator",
        initiatorTitle: "Initiated by Bumi Seni Tarikolot.",
        initiatorLead: "Bumi Seni Tarikolot is KUDAKU's birthplace, initiator, and physical home — a living laboratory where culture, nature, and community already meet every day.",
        initiatorText: "KUDAKU is an independent platform that carries its own name and its own trajectory, with Bumi Seni Tarikolot as its initiator and home.",
        initiatorCta: "Read the origin",
        growthKicker: "Growth vision",
        growthTitle: "From one kitchen to the world.",
        growthLead: "KUDAKU grows in stages — each step widening the table without leaving the last one behind.",
        lifecycleKicker: "Year-round platform",
        lifecycleTitle: "KUDAKU works throughout the year.",
        lifecycleLead: "\u201cEvent berlangsung beberapa hari, tetapi platform KUDAKU bekerja sepanjang tahun.\u201d The flagship event marks one moment in a continuous cycle of work.",
        ctaTitle: "Come to the table.",
        ctaLead: "Explore the ecosystem that turns this idea into practice.",
        ctaBtn: "Explore the ecosystem"
      },
      ecosystem: {
        title: "Ecosystem — KUDAKU · Kuningan Dapur Kuliner",
        description: "The KUDAKU ecosystem: KUDAKU Table, Kitchen, Market, Farm, Lab, Class, Talk, Stage, Archive, Residency, and Food Diplomacy.",
        heroEyebrow: "Ecosystem",
        heroTitle: "One platform. Eleven ways in.",
        heroLead: "Each module is a doorway into food culture. Together they form a single, connected ecosystem.",
        programsKicker: "Program modules",
        programsTitle: "The rooms of the dapur.",
        programsLead: "Each module carries an Indonesian name that anchors it in Nusantara food culture. Modules are designed to overlap and combine — a Talk can begin at a Table, a Residency can feed the Archive, a Farm can supply the Kitchen.",
        connectKicker: "How they connect",
        connectTitle: "Nothing here works alone.",
        connectLead: "A seed from the Farm becomes a dish at the Table; the recipe enters the Archive; a Class transmits it; a Residency reimagines it; Food Diplomacy carries it across borders.",
        connectText: "KUDAKU is a loop — a living system where taste, knowledge, encounter, creation, and care keep feeding one another.",
        ctaTitle: "Bring a module to life with us.",
        ctaLead: "Institutions, producers, and practitioners can co-build any module of the ecosystem.",
        ctaBtn1: "Start a partnership",
        ctaBtn2: "Contact KUDAKU"
      },
      nusantara: {
        title: "KUDAKU Nusantara — KUDAKU · Kuningan Dapur Kuliner",
        description: "KUDAKU Nusantara is the annual flagship gathering of the KUDAKU platform — three days, from root (Akar) to encounter (Pertemuan) to future (Masa Depan).",
        heroEyebrow: "KUDAKU Nusantara",
        heroTitle: "The annual flagship.",
        heroLead: "One gathering each year, three days long — where the whole ecosystem comes to the table.",
        introKicker: "The annual flagship",
        introTitle: "KUDAKU Nusantara is the annual gathering where KUDAKU's year-round ecosystem comes together.",
        introLead: "The event concentrates the ecosystem into three days of intensity. KUDAKU lives year-round through its programs, partnerships, and archive. The flagship gathers it; the platform sustains it.",
        daysKicker: "The three-day structure",
        daysTitle: "From root, to encounter, to future.",
        daysLead: "Three days, each with its own question — and its own signature moments.",
        daysNote: "The moments above are selected highlights from the official rundown. Dates, venue, and the full timetable will be announced with the official KUDAKU Nusantara calendar.",
        ctaTitle: "Before the flagship, there is the platform.",
        ctaLead: "Meet the ecosystem that makes KUDAKU Nusantara possible.",
        ctaBtn1: "Explore the ecosystem",
        ctaBtn2: "About KUDAKU"
      },
      impact: {
        title: "Impact & Legacy — KUDAKU · Kuningan Dapur Kuliner",
        description: "KUDAKU's impact and legacy spans culture, education, local economy, agriculture and food systems, ecology, community, international exchange, and an annual archive.",
        heroEyebrow: "Impact & Legacy",
        heroTitle: "What we leave behind.",
        heroLead: "KUDAKU is measured by the knowledge, livelihoods, and relationships it leaves in place.",
        indicatorsKicker: "Success indicators",
        indicatorsTitle: "Measured in what KUDAKU leaves behind.",
        indicatorsLead: "KUDAKU tracks what it leaves behind — across culture, education, economy, network, creativity, ecology, and legacy.",
        knowledgeKicker: "Knowledge legacy",
        knowledgeTitle: "An archive that outlives any event.",
        knowledgeLead: "Every KUDAKU Nusantara and every program feeds a growing archive — recipes, oral histories, documentation, and practice records.",
        knowledgeText: "This is the quiet work of the platform: to keep what is tasted and spoken each year as a shared inheritance for the generations that follow.",
        knowledgeCta: "See the Archive module",
        ctaTitle: "Help build the legacy.",
        ctaLead: "Partners shape the long-term impact of the platform.",
        ctaBtn: "Become a partner"
      },
      partners: {
        title: "Partners — KUDAKU · Kuningan Dapur Kuliner",
        description: "KUDAKU builds with government, academia, business, community, media, and cultural and international institutions.",
        heroEyebrow: "Partners",
        heroTitle: "A table set with many hands.",
        heroLead: "KUDAKU grows through a network of institutions and communities who share the table — each bringing what only they can bring.",
        categoriesKicker: "Partnership ecosystem",
        categoriesTitle: "Seven kinds of hands.",
        categoriesLead: "No single actor can hold a food culture alone. KUDAKU builds with institutions across seven domains.",
        strategicKicker: "Strategic partnership",
        strategicTitle: "Build something that lasts.",
        strategicLead: "We invite purpose-aligned institutions into a long-term, values-first partnership — shaped together around shared programs and a shared legacy.",
        strategicNote: "Funding strengthens KUDAKU's cultural mission.",
        strategicBtn1: "Begin the conversation",
        strategicBtn2: "About our origin",
        strategicDisclaimer: "Sponsorship tiers and partner packages will be shared directly with aligned institutions."
      },
      origin: {
        title: "Origin — KUDAKU · Kuningan Dapur Kuliner",
        description: "KUDAKU was born at Bumi Seni Tarikolot — its birthplace, initiator, and living laboratory in Desa Sukamukti, Kuningan, Jawa Barat.",
        heroEyebrow: "Origin · Bumi Seni Tarikolot",
        heroTitle: "Born at Bumi Seni Tarikolot.",
        heroLead: "The place where KUDAKU began — and the living ground it keeps returning to.",
        birthplaceKicker: "Birthplace & initiator",
        birthplaceTitle: "A forest-based cultural ecosystem.",
        birthplaceLead: "Bumi Seni Tarikolot is a cultural and nature space at the foot of Mount Ciremai — home to over a decade of grassroots practice in art, nature, knowledge, and community.",
        birthplaceText: "It is the initiator of KUDAKU: the origin that named the platform and gave it its first home, its first people, and its first table.",
        labKicker: "Physical home",
        labTitle: "A living laboratory.",
        labLead: "Bumi Seni Tarikolot is where KUDAKU's ideas are tested in real soil — among real trees, real people, and real food.",
        labText: "It is the platform's first field site: the place where a program can be prototyped, tasted, and understood before it travels elsewhere.",
        independentKicker: "Independent by design",
        independentTitle: "KUDAKU is its own platform.",
        independentLead: "Born at Bumi Seni Tarikolot, KUDAKU carries its own name, its own direction, and its own ambition — from Kuningan to Jawa Barat, to Nusantara, to the world.",
        placeTitle: "Desa Sukamukti · Kuningan · Jawa Barat.",
        placeLead: "At the foot of Mount Ciremai — where the platform takes root.",
        placeBtn: "About KUDAKU"
      },
      contact: {
        title: "Contact — KUDAKU · Kuningan Dapur Kuliner",
        description: "Contact KUDAKU for partnership and general inquiries.",
        heroEyebrow: "Contact",
        heroTitle: "Start a conversation.",
        heroLead: "Partnership, programs, and general inquiries — one simple route to reach the table.",
        inquiriesKicker: "Inquiries",
        inquiriesTitle: "Write to us.",
        inquiriesLead: "Tell us who you are and what you have in mind. We read every message.",
        block1Title: "KUDAKU inquiries",
        block1Sub: "via Bumi Seni Tarikolot",
        block2Title: "Home",
        block2Text: "Desa Sukamukti, Kuningan, Jawa Barat, Indonesia — at Bumi Seni Tarikolot",
        block3Title: "Note",
        block3Text: "KUDAKU is in early development. Responses may take a few days.",
        formName: "Name",
        formOrg: "Organization",
        formEmail: "Email",
        formMessage: "Message",
        formSubmit: "Send inquiry",
        formNote: "This opens your email client with the message prepared. No data is stored on this site."
      },
      error404: {
        title: "Page not found — KUDAKU",
        kicker: "404",
        title: "This table is not set.",
        lead: "The page you're looking for doesn't exist — or hasn't been cooked yet.",
        btn: "Back to KUDAKU"
      }
    }
  };

  /* ===========================================================================
     INDONESIA (id)
     =========================================================================== */
  var id = {
    brand: {
      name: "KUDAKU",
      fullName: "Kuningan Dapur Kuliner",
      descriptor: "Platform Pangan dan Kebudayaan",
      tagline: "Tempat Indonesia bertemu melalui pangan.",
      principle: ["Born in Kuningan.", "Rooted in Nusantara.", "Open to the World."],
      initiator: "Bumi Seni Tarikolot",
      location: "Desa Sukamukti · Kuningan · Jawa Barat · Indonesia"
    },

    nav: [
      { label: "Beranda", href: "index.html" },
      { label: "Tentang", href: "about.html" },
      { label: "Ekosistem", href: "ecosystem.html" },
      { label: "Nusantara", href: "nusantara.html" },
      { label: "Dampak & Legacy", href: "impact.html" },
      { label: "Mitra", href: "partners.html" },
      { label: "Asal-usul", href: "origin.html" },
      { label: "Kontak", href: "contact.html" }
    ],

    dna: [
      { code: "RASA", title: "Rasa", text: "Pangan sebagai pengetahuan indrawi — bahan, hidangan, dan ingatan yang dibawanya dari ladang ke meja." },
      { code: "ILMU", title: "Ilmu", text: "Pangan sebagai pengetahuan — sejarah, ekologi, sains, dan tradisi hidup yang diwariskan antargenerasi." },
      { code: "TEMU", title: "Temu", text: "Pangan sebagai pertemuan — meja bersama, dialog yang jujur, dan ikatan yang tumbuh dari santapan bersama." },
      { code: "CIPTA", title: "Cipta", text: "Pangan sebagai kreasi — keterampilan, seni, dan imajinasi yang menjaga sebuah masakan tetap hidup dan bergerak." },
      { code: "RAWAT", title: "Rawat", text: "Pangan sebagai penjagaan — atas tanah, petani, ekosistem, dan generasi yang masih harus diberi makan." }
    ],

    programs: [
      { n: "01", name: "KUDAKU Table", id: "Perjamuan Budaya", concept: "Satu Meja. Banyak Budaya. Satu Bumi.", text: "Santap bersama yang menghimpun petani, juru masak, komunitas desa, seniman, tamu nasional, dan tamu internasional di satu meja bersama." },
      { n: "02", name: "KUDAKU Kitchen", id: "Dapur Pengalaman", text: "Pengalaman memasak, peragaan, kelas, kolaborasi juru masak, dan pewarisan hidup pengetahuan kuliner tradisional." },
      { n: "03", name: "KUDAKU Market", id: "Pasar Pangan & Kreativitas", text: "Produk pertanian, produk kuliner, pangan olahan, UMKM, rempah, karya kreatif, kerajinan, buku, dan karya budaya — dalam dialog langsung." },
      { n: "04", name: "KUDAKU Farm", id: "Dari Tanah ke Dapur", text: "Benih, penanaman, panen, rempah, dan pertanian — mengubah hasil kebun dari tanah ke piring." },
      { n: "05", name: "KUDAKU Lab", id: "Laboratorium Pangan", concept: "Juru Masak × Petani × Peneliti × Pelajar × Desainer × UMKM", text: "Inovasi produk, fermentasi, pangan lokal, teknologi pengolahan, pengembangan resep, pengelolaan limbah pangan, kemasan, dan ekonomi kreatif." },
      { n: "06", name: "KUDAKU Class", id: "Sekolah Pangan dan Budaya", text: "Pembelajaran dan pewarisan bagi anak, remaja, pelajar, komunitas, UMKM, guru, petani, dan pelaku pariwisata." },
      { n: "07", name: "KUDAKU Talk", id: "Forum Pangan & Kebudayaan", text: "Dialog tentang pangan lokal, ketahanan pangan, budaya, pertanian, perubahan iklim, anak muda, ekonomi kreatif, gastronomi, pariwisata, dan masa depan pangan." },
      { n: "08", name: "KUDAKU Stage", id: "Seni dan Kebudayaan", text: "Musik, tari, teater, penuturan, pertunjukan tradisional, dan karya kontemporer — berkumpul di sekitar pangan." },
      { n: "09", name: "KUDAKU Archive", id: "Arsip Pangan Nusantara", concept: "Ambisi: 100 Resep Dapur Kuningan → 1000 Cerita Pangan Nusantara", text: "Resep, cerita, fotografi, video, wawancara, peralatan dapur, bahan, pelaku, dan sejarah pangan — didokumentasikan sebagai warisan yang hidup." },
      { n: "10", name: "KUDAKU Residency", text: "Program tinggal dan berkarya bagi juru masak, seniman, peneliti, pelajar, praktisi budaya, dan praktisi pangan — hidup dan bekerja di Bumi Seni Tarikolot bersama komunitas." },
      { n: "11", name: "Food Diplomacy", concept: "Pangan adalah salah satu cara paling universal bagi manusia untuk bertemu.", text: "Pangan sebagai diplomasi budaya — pertukaran juru masak, santap budaya, kolaborasi memasak, residency, riset pangan, dialog budaya, dan kolaborasi kreatif. Arsitektur pertukaran masa depan antara Indonesia dan Jepang, Korea, India, Thailand, Malaysia, Australia, dan seterusnya." }
    ],

    days: [
      {
        day: "Hari 1", name: "AKAR", gloss: "", subtitle: "Tanah, Pangan & Identitas",
        text: "Memahami dari mana pangan berasal — dan orang-orang di baliknya. Hari untuk kembali ke sumber rasa.",
        moments: ["Dari Tanah ke Meja", "KUDAKU Farm Experience", "KUDAKU Archive: Cerita dari Dapur Nenek", "Pasar Pangan & Kreativitas", "Jamuan Nusantara", "Malam Budaya Nusantara"]
      },
      {
        day: "Hari 2", name: "PERTEMUAN", gloss: "", subtitle: "Indonesia Bertemu",
        text: "Menghadirkan daerah, tradisi, manusia, dan pengetahuan di satu meja bersama.",
        moments: ["Sarapan Nusantara", "Pangan sebagai Identitas", "Dapur Nusantara", "KUDAKU Lab: Tradisi Bertemu Kreativitas", "KUDAKU Young Talent", "Parade Pangan Nusantara", "The Great Nusantara Dinner", "Nusantara Night"]
      },
      {
        day: "Hari 3", name: "MASA DEPAN", gloss: "", subtitle: "Kreativitas, Ketahanan & Dunia",
        text: "Dari pengetahuan yang diwariskan menuju masa depan pangan — kreativitas, ketahanan, dan dunia.",
        moments: ["Future Food Forum", "Food as Cultural Diplomacy", "One Table — Many Cultures", "KUDAKU CREATE / Food Lab Final", "Future Market", "KUDAKU Legacy Session", "KUDAKU Awards"]
      }
    ],

    impact: [
      { title: "Budaya", text: "Pengetahuan dan resep terdokumentasi — tradisi pangan yang hidup tercatat dan diteruskan." },
      { title: "Pendidikan", text: "Peserta belajar dan anak muda yang terlibat — meja sebagai ruang belajar bagi generasi berikut." },
      { title: "Ekonomi", text: "Nilai dan manfaat ekonomi yang diterima pelaku lokal — produsen, petani, dan perajin." },
      { title: "Jejaring", text: "Desa, daerah, lembaga, dan negara yang terhubung melalui pangan." },
      { title: "Kreativitas", text: "Karya, produk, dan kolaborasi baru yang lahir dari platform." },
      { title: "Ekologi", text: "Pengurangan limbah, penggunaan pangan lokal, dan praktik yang menjaga lingkungan." },
      { title: "Legacy", text: "Pengetahuan, dokumentasi, program, dan kolaborasi yang berlanjut setelah perhelatan utama." }
    ],

    partners: [
      { title: "Pemerintah", text: "Kebijakan, tempat, dan platform publik yang menyelaraskan pembangunan budaya dan ekonomi." },
      { title: "Akademisi", text: "Riset, dokumentasi, dan ketelitian yang mengubah praktik menjadi pengetahuan." },
      { title: "Bisnis", text: "Usaha yang selaras nilai dan memperluas jangkauan dalam pelayanan bagi budaya." },
      { title: "Komunitas", text: "Produsen, praktisi, dan kelompok lokal yang menjaga budaya setiap hari." },
      { title: "Media", text: "Penutur cerita yang membawa karya kepada publik luas dengan kehati-hatian dan konteks." },
      { title: "Lembaga kebudayaan", text: "Rekan sejawat di dalam negeri yang membuka pintu pertukaran dan pembelajaran bersama." },
      { title: "Organisasi internasional", text: "Jejaring global yang menghubungkan budaya pangan Indonesia dengan dunia." }
    ],

    growth: [
      { stage: "Kuningan", note: "Tempat KUDAKU lahir — di Bumi Seni Tarikolot, di kaki Gunung Ciremai." },
      { stage: "Jawa Barat", note: "Provinsi sebagai kawasan hidup para produsen, dapur, dan tradisi." },
      { stage: "Nusantara", note: "Kepulauan sebagai satu meja bersama pulau, bahan, dan masyarakat." },
      { stage: "Internasional", note: "Budaya pangan Indonesia dalam dialog dengan dunia." }
    ],

    lifecycle: {
      phases: [
        { phase: "Pra-event", note: "Riset, kurasi, pendidikan, residency, produksi konten, dan kolaborasi." },
        { phase: "KUDAKU Nusantara", note: "Pertemuan tahunan tempat seluruh ekosistem KUDAKU hadir bersama." },
        { phase: "Pasca-event", note: "Dokumentasi, publikasi, pengembangan karya, tindak lanjut kolaborasi, dan pembangunan legacy." }
      ]
    },

    ui: {
      dayLabel: "Hari",
      signatureMoments: "Momen utama",
      toggleMenu: "Buka menu",
      primaryNav: "Utama",
      langLabel: "Bahasa"
    },

    footer: {
      initiatedLabel: "Diprakarsai oleh",
      principle: "Born in Kuningan. Rooted in Nusantara. Open to the World.",
      note: "Platform pangan dan kebudayaan — meja bersama yang terus bertumbuh di sepanjang Nusantara."
    },

    pages: {
      index: {
        title: "KUDAKU — Kuningan Dapur Kuliner · Platform Pangan dan Kebudayaan",
        description: "KUDAKU adalah platform pangan dan kebudayaan yang diprakarsai Bumi Seni Tarikolot. Lahir di Kuningan, berakar di Nusantara, terbuka bagi dunia — tempat Indonesia bertemu melalui pangan.",
        heroEyebrow: "KUDAKU · Kuningan Dapur Kuliner",
        heroTitle: "Tempat Indonesia bertemu melalui <em>pangan</em>.",
        heroSub: "KUDAKU adalah platform pangan dan kebudayaan yang diprakarsai Bumi Seni Tarikolot — jalan masuk menuju budaya, manusia, alam, pengetahuan, dan masa depan, dibuka satu hidangan demi satu hidangan.",
        heroCta1: "Jelajahi ekosistem",
        heroCta2: "KUDAKU Nusantara",
        heroTagline: "KUDAKU adalah tempat Indonesia bertemu melalui pangan.",
        ideaKicker: "Gagasan",
        ideaTitle: "Pangan adalah cara sebuah budaya menjelaskan dirinya.",
        ideaLead: "Di dalam setiap hidangan ada geografi, sejarah, sepasang tangan, dan cara memandang dunia. KUDAKU memperlakukan pangan sebagai jalan masuk — menuju orang-orang yang menumbuhkannya, tanah yang menopangnya, pengetahuan yang membentuknya, dan masa depan yang ditujunya.",
        dnaKicker: "DNA Pengalaman",
        dnaTitle: "Lima jalan masuk.",
        dapurKicker: "Dapur",
        dapurTitle: "Dapur adalah sebuah negeri dalam bentuk kecil.",
        dapurLead: "Kata <em>dapur</em> menamai perapian tempat yang mentah menjadi bergizi, tempat pengetahuan berpindah dari satu generasi ke generasi berikutnya, dan tempat sebuah keluarga, sebuah desa, sebuah bangsa dibentuk.",
        dapurText: "KUDAKU membawa kiasan ini ke depan. Kami memahami dapur sebagai jantung budaya: ruang transformasi, perawatan, kebersamaan, dan ingatan — ruang tempat Indonesia sejak lama bertemu dengan dirinya sendiri.",
        dapurCta: "Tentang KUDAKU",
        flagshipKicker: "Perhelatan utama",
        flagshipTitle: "KUDAKU Nusantara",
        flagshipLead: "Pertemuan tahunan tempat seluruh ekosistem hadir di meja — tiga hari, dari akar menuju masa depan.",
        flagshipRoll: "Hari 1 — AKAR · Hari 2 — PERTEMUAN · Hari 3 — MASA DEPAN",
        flagshipCta: "Kenali perhelatan utama",
        lifecycleKicker: "Platform sepanjang tahun",
        lifecycleTitle: "Perhelatan berlangsung beberapa hari. Platform bekerja sepanjang tahun.",
        lifecycleLead: "\u201cEvent berlangsung beberapa hari, tetapi platform KUDAKU bekerja sepanjang tahun.\u201d KUDAKU Nusantara adalah puncak tahunan dari siklus yang berjalan sepanjang tahun.",
        ecoKicker: "Ekosistem",
        ecoTitle: "Satu platform. Sebelas jalan masuk.",
        ecoLead: "Dari meja ke ladang, dapur ke arsip, ekosistem KUDAKU menghubungkan orang-orang yang menumbuhkan, memasak, mempelajari, menampilkan, dan mengingat pangan.",
        ecoRoll: "KUDAKU Table · KUDAKU Kitchen · KUDAKU Market · KUDAKU Farm · KUDAKU Lab · KUDAKU Class · KUDAKU Talk · KUDAKU Stage · KUDAKU Archive · KUDAKU Residency · Food Diplomacy",
        ecoCta: "Jelajahi ekosistem",
        impactKicker: "Dampak & Legacy",
        impactTitle: "Sebuah hidangan, lalu ingatan, lalu legacy.",
        impactLead: "KUDAKU mengukur dirinya dari apa yang ditinggalkannya — dalam budaya, pendidikan, ekonomi lokal, ekologi, dan arsip pengetahuan yang dijaganya.",
        impactCta: "Dampak & Legacy",
        partnerKicker: "Kemitraan",
        partnerTitle: "Bangun meja ini bersama.",
        partnerLead: "KUDAKU bertumbuh melalui jejaring pemerintah, akademisi, bisnis, komunitas, media, dan lembaga kebudayaan. Bila karya Anda berada di meja yang sama, mulailah percakapan.",
        partnerCta: "Menjadi mitra"
      },
      about: {
        title: "Tentang — KUDAKU · Kuningan Dapur Kuliner",
        description: "KUDAKU adalah platform pangan dan kebudayaan yang lahir di Bumi Seni Tarikolot, Kuningan — bertumbuh dari Kuningan ke Jawa Barat, Nusantara, dan dunia.",
        heroEyebrow: "Tentang KUDAKU",
        heroTitle: "Platform pangan dan kebudayaan yang hidup.",
        heroLead: "KUDAKU adalah platform pangan dan kebudayaan yang merdeka — lahir di Bumi Seni Tarikolot, dirancang untuk bertumbuh jauh melampauinya.",
        originKicker: "Asal-usul",
        originTitle: "Lahir di Kuningan.",
        originLead: "KUDAKU bermula di kaki Gunung Ciremai, di Desa Sukamukti, Kuningan, Jawa Barat — rumah Bumi Seni Tarikolot, ekosistem budaya berbasis hutan dengan lebih dari satu dekade praktik akar rumput.",
        originText: "Yang bermula di sini adalah sebuah keyakinan: bahwa pangan adalah salah satu bahasa terdalam yang dituturkan Indonesia, dan bahwa ia layak mendapatkan platformnya sendiri.",
        visionKicker: "Visi",
        visionTitle: "Meja bersama bagi seluruh kepulauan.",
        visionText: "KUDAKU membayangkan Indonesia bertemu dengan dirinya sendiri — dan dengan dunia — melalui pangan: platform budaya yang lestari tempat rasa, pengetahuan, pertemuan, kreasi, dan perawatan dipraktikkan sebagai satu kesatuan.",
        missionKicker: "Misi",
        missionTitle: "Menjadikan pangan sebuah jalan masuk.",
        missionText: "Menghimpun produsen, juru masak, cendekiawan, seniman, dan komunitas di sekitar budaya pangan yang hidup — dan mengubah setiap hidangan menjadi jalan menuju budaya, manusia, alam, pengetahuan, dan masa depan.",
        philosophyKicker: "Filosofi",
        philosophyTitle: "Dapur sebagai kiasan budaya.",
        philosophyLead: "Di dapur, bahan mentah menjadi santapan, orang asing menjadi keluarga, dan pengetahuan berpindah dengan tenang dari tangan yang tua ke tangan yang muda.",
        philosophyText: "KUDAKU membaca bangsa melalui ruangan ini. Dapur adalah tempat sebuah budaya diubah, dirawat, dikumpulkan, dan diingat. Ia adalah satuan terkecil sebuah peradaban, sekaligus yang paling intim.",
        initiatorKicker: "Pemrakarsa",
        initiatorTitle: "Diprakarsai Bumi Seni Tarikolot.",
        initiatorLead: "Bumi Seni Tarikolot adalah tempat lahir, pemrakarsa, dan rumah fisik KUDAKU — laboratorium hidup tempat budaya, alam, dan komunitas setiap hari bertemu.",
        initiatorText: "KUDAKU adalah platform merdeka yang membawa namanya sendiri dan arahnya sendiri, dengan Bumi Seni Tarikolot sebagai pemrakarsa dan rumahnya.",
        initiatorCta: "Baca asal-usulnya",
        growthKicker: "Visi pertumbuhan",
        growthTitle: "Dari satu dapur menuju dunia.",
        growthLead: "KUDAKU bertumbuh bertahap — setiap langkah memperluas meja tanpa meninggalkan yang sebelumnya.",
        lifecycleKicker: "Platform sepanjang tahun",
        lifecycleTitle: "KUDAKU bekerja sepanjang tahun.",
        lifecycleLead: "\u201cEvent berlangsung beberapa hari, tetapi platform KUDAKU bekerja sepanjang tahun.\u201d Perhelatan utama menandai satu momen dalam siklus kerja yang berkesinambungan.",
        ctaTitle: "Datanglah ke meja.",
        ctaLead: "Jelajahi ekosistem yang mewujudkan gagasan ini menjadi praktik.",
        ctaBtn: "Jelajahi ekosistem"
      },
      ecosystem: {
        title: "Ekosistem — KUDAKU · Kuningan Dapur Kuliner",
        description: "Ekosistem KUDAKU: KUDAKU Table, Kitchen, Market, Farm, Lab, Class, Talk, Stage, Archive, Residency, dan Food Diplomacy.",
        heroEyebrow: "Ekosistem",
        heroTitle: "Satu platform. Sebelas jalan masuk.",
        heroLead: "Setiap modul adalah jalan masuk menuju budaya pangan. Bersama, mereka membentuk satu ekosistem yang saling terhubung.",
        programsKicker: "Modul program",
        programsTitle: "Ruang-ruang dapur.",
        programsLead: "Setiap modul menyandang nama Indonesia yang mengakarnya pada budaya pangan Nusantara. Modul dirancang untuk tumpang-tindih dan berpadu — sebuah Talk dapat bermula di sebuah Table, sebuah Residency dapat menghidupi Archive, sebuah Farm dapat memasok Kitchen.",
        connectKicker: "Cara mereka terhubung",
        connectTitle: "Semuanya bekerja bersama.",
        connectLead: "Sebuah benih dari Farm menjadi hidangan di Table; resepnya masuk ke Archive; sebuah Class mewariskannya; sebuah Residency menafsirkannya ulang; Food Diplomacy membawanya melintasi batas.",
        connectText: "KUDAKU adalah sebuah lingkaran — sistem hidup tempat rasa, pengetahuan, pertemuan, kreasi, dan perawatan saling menghidupi.",
        ctaTitle: "Hidupkan sebuah modul bersama kami.",
        ctaLead: "Lembaga, produsen, dan praktisi dapat membangun bersama modul mana pun dari ekosistem.",
        ctaBtn1: "Mulai kemitraan",
        ctaBtn2: "Hubungi KUDAKU"
      },
      nusantara: {
        title: "KUDAKU Nusantara — KUDAKU · Kuningan Dapur Kuliner",
        description: "KUDAKU Nusantara adalah perhelatan tahunan platform KUDAKU — tiga hari, dari Akar menuju Pertemuan hingga Masa Depan.",
        heroEyebrow: "KUDAKU Nusantara",
        heroTitle: "Perhelatan tahunan.",
        heroLead: "Satu pertemuan setiap tahun, tiga hari lamanya — tempat seluruh ekosistem hadir di meja.",
        introKicker: "Perhelatan tahunan",
        introTitle: "KUDAKU Nusantara adalah pertemuan tahunan tempat ekosistem KUDAKU sepanjang tahun hadir bersama.",
        introLead: "Perhelatan ini memusatkan ekosistem ke dalam tiga hari yang padat. KUDAKU hidup sepanjang tahun melalui program, kemitraan, dan arsipnya. Perhelatan menghimpunnya; platform menopangnya.",
        daysKicker: "Struktur tiga hari",
        daysTitle: "Dari akar, menuju pertemuan, hingga masa depan.",
        daysLead: "Tiga hari, masing-masing dengan pertanyaannya sendiri — dan momen utamanya sendiri.",
        daysNote: "Momen di atas adalah sorotan terpilih dari rundown resmi. Tanggal, tempat, dan jadwal lengkap akan diumumkan bersama kalender resmi KUDAKU Nusantara.",
        ctaTitle: "Sebelum perhelatan, ada platform.",
        ctaLead: "Kenali ekosistem yang mewujudkan KUDAKU Nusantara.",
        ctaBtn1: "Jelajahi ekosistem",
        ctaBtn2: "Tentang KUDAKU"
      },
      impact: {
        title: "Dampak & Legacy — KUDAKU · Kuningan Dapur Kuliner",
        description: "Dampak dan legacy KUDAKU mencakup budaya, pendidikan, ekonomi lokal, pertanian dan sistem pangan, ekologi, komunitas, pertukaran internasional, dan arsip tahunan.",
        heroEyebrow: "Dampak & Legacy",
        heroTitle: "Apa yang kami tinggalkan.",
        heroLead: "KUDAKU diukur dari pengetahuan, penghidupan, dan relasi yang ditinggalkannya di tempat.",
        indicatorsKicker: "Indikator keberhasilan",
        indicatorsTitle: "Diukur dari apa yang ditinggalkan KUDAKU.",
        indicatorsLead: "KUDAKU mencatat apa yang ditinggalkannya — melintasi budaya, pendidikan, ekonomi, jejaring, kreativitas, ekologi, dan legacy.",
        knowledgeKicker: "Legacy pengetahuan",
        knowledgeTitle: "Arsip yang hidup lebih lama dari perhelatan mana pun.",
        knowledgeLead: "Setiap KUDAKU Nusantara dan setiap program menghidupi arsip yang terus bertumbuh — resep, sejarah lisan, dokumentasi, dan catatan praktik.",
        knowledgeText: "Inilah kerja senyap platform: menjaga apa yang dicicipi dan dituturkan setiap tahun sebagai warisan bersama bagi generasi yang menyusul.",
        knowledgeCta: "Lihat modul Archive",
        ctaTitle: "Bantu bangun legacy ini.",
        ctaLead: "Mitra membentuk dampak jangka panjang platform.",
        ctaBtn: "Menjadi mitra"
      },
      partners: {
        title: "Mitra — KUDAKU · Kuningan Dapur Kuliner",
        description: "KUDAKU membangun bersama pemerintah, akademisi, bisnis, komunitas, media, serta lembaga kebudayaan dan internasional.",
        heroEyebrow: "Mitra",
        heroTitle: "Meja yang ditata banyak tangan.",
        heroLead: "KUDAKU bertumbuh melalui jejaring lembaga dan komunitas yang berbagi meja — masing-masing membawa apa yang hanya bisa dibawanya.",
        categoriesKicker: "Ekosistem kemitraan",
        categoriesTitle: "Tujuh jenis tangan.",
        categoriesLead: "Budaya pangan ditopang oleh banyak tangan bersama. KUDAKU membangun bersama lembaga di tujuh ranah.",
        strategicKicker: "Kemitraan strategis",
        strategicTitle: "Bangun sesuatu yang bertahan.",
        strategicLead: "Kami mengundang lembaga yang selaras nilai ke dalam kemitraan jangka panjang berbasis nilai — dibentuk bersama di sekitar program dan legacy bersama.",
        strategicNote: "Pendanaan menguatkan misi kebudayaan KUDAKU.",
        strategicBtn1: "Mulai percakapan",
        strategicBtn2: "Tentang asal-usul kami",
        strategicDisclaimer: "Jenjang sponsor dan paket kemitraan akan dibagikan langsung kepada lembaga yang selaras."
      },
      origin: {
        title: "Asal-usul — KUDAKU · Kuningan Dapur Kuliner",
        description: "KUDAKU lahir di Bumi Seni Tarikolot — tempat lahir, pemrakarsa, dan laboratorium hidupnya di Desa Sukamukti, Kuningan, Jawa Barat.",
        heroEyebrow: "Asal-usul · Bumi Seni Tarikolot",
        heroTitle: "Lahir di Bumi Seni Tarikolot.",
        heroLead: "Tempat KUDAKU bermula — dan tanah hidup yang terus ditujunya kembali.",
        birthplaceKicker: "Tempat lahir & pemrakarsa",
        birthplaceTitle: "Ekosistem budaya berbasis hutan.",
        birthplaceLead: "Bumi Seni Tarikolot adalah ruang budaya dan alam di kaki Gunung Ciremai — rumah bagi lebih dari satu dekade praktik akar rumput dalam seni, alam, pengetahuan, dan komunitas.",
        birthplaceText: "Ia adalah pemrakarsa KUDAKU: asal yang menamai platform ini dan memberinya rumah pertama, orang-orang pertama, dan meja pertama.",
        labKicker: "Rumah fisik",
        labTitle: "Laboratorium yang hidup.",
        labLead: "Bumi Seni Tarikolot adalah tempat gagasan KUDAKU diuji di tanah yang nyata — di antara pohon, manusia, dan pangan yang nyata.",
        labText: "Ia adalah lokasi lapangan pertama platform: tempat sebuah program dapat diprototipekan, dicicipi, dan dipahami sebelum berangkat ke tempat lain.",
        independentKicker: "Merdeka secara rancangan",
        independentTitle: "KUDAKU adalah platformnya sendiri.",
        independentLead: "Lahir di Bumi Seni Tarikolot, KUDAKU membawa namanya sendiri, arahnya sendiri, dan ambisinya sendiri — dari Kuningan ke Jawa Barat, ke Nusantara, ke dunia.",
        placeTitle: "Desa Sukamukti · Kuningan · Jawa Barat.",
        placeLead: "Di kaki Gunung Ciremai — tempat platform ini berakar.",
        placeBtn: "Tentang KUDAKU"
      },
      contact: {
        title: "Kontak — KUDAKU · Kuningan Dapur Kuliner",
        description: "Hubungi KUDAKU untuk kemitraan dan pertanyaan umum.",
        heroEyebrow: "Kontak",
        heroTitle: "Mulai sebuah percakapan.",
        heroLead: "Kemitraan, program, dan pertanyaan umum — satu jalan sederhana untuk mencapai meja.",
        inquiriesKicker: "Pertanyaan",
        inquiriesTitle: "Tulis kepada kami.",
        inquiriesLead: "Sampaikan siapa Anda dan apa yang Anda pikirkan. Kami membaca setiap pesan.",
        block1Title: "Pertanyaan KUDAKU",
        block1Sub: "melalui Bumi Seni Tarikolot",
        block2Title: "Rumah",
        block2Text: "Desa Sukamukti, Kuningan, Jawa Barat, Indonesia — di Bumi Seni Tarikolot",
        block3Title: "Catatan",
        block3Text: "KUDAKU berada dalam tahap pengembangan awal. Tanggapan dapat memakan waktu beberapa hari.",
        formName: "Nama",
        formOrg: "Organisasi",
        formEmail: "Email",
        formMessage: "Pesan",
        formSubmit: "Kirim pertanyaan",
        formNote: "Ini membuka klien email Anda dengan pesan yang telah disiapkan. Tidak ada data yang disimpan di situs ini."
      },
      error404: {
        title: "Halaman tidak ditemukan — KUDAKU",
        kicker: "404",
        title: "Meja ini belum ditata.",
        lead: "Halaman yang Anda tuju belum tersedia — atau masih dimasak.",
        btn: "Kembali ke KUDAKU"
      }
    }
  };

  return { meta: META, en: en, id: id };
})();
