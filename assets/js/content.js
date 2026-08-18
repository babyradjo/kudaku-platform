/* =============================================================================
   KUDAKU — Content & Data Layer (V0)
   -----------------------------------------------------------------------------
   Single source of truth for all repeated / structured site content.
   - Kept strictly separated from markup so a future CMS can hydrate these
     objects, and so an Indonesian (id) parallel dataset can be added without
     touching page markup.
   - Bilingual architecture: add a sibling `id` object with identical keys, then
     the loader in app.js will prefer it when ?lang=id is requested.
   ============================================================================= */
window.KUDAKU_CONTENT = (function () {
  "use strict";

  var brand = {
    name: "KUDAKU",
    fullName: "Kuningan Dapur Kuliner",
    descriptor: "A Cultural Food Platform",
    taglineId: "KUDAKU adalah tempat Indonesia bertemu melalui pangan.",
    taglineEn: "Where Indonesia meets through food.",
    principle: ["Born in Kuningan.", "Rooted in Nusantara.", "Open to the World."],
    initiator: "Bumi Seni Tarikolot",
    location: "Desa Sukamukti · Kuningan · Jawa Barat · Indonesia"
  };

  var nav = [
    { label: "Home", href: "index.html" },
    { label: "About", href: "about.html" },
    { label: "Ecosystem", href: "ecosystem.html" },
    { label: "Nusantara", href: "nusantara.html" },
    { label: "Impact & Legacy", href: "impact.html" },
    { label: "Partners", href: "partners.html" },
    { label: "Origin", href: "origin.html" },
    { label: "Contact", href: "contact.html" }
  ];

  /* Experience DNA — the five ways food opens a doorway. */
  var dna = [
    { code: "TASTE", title: "Taste", text: "Food as sensory knowledge — ingredients, dishes, and the memory they carry from field to table." },
    { code: "KNOW", title: "Know", text: "Food as knowledge — history, ecology, science, and living tradition passed between generations." },
    { code: "MEET", title: "Meet", text: "Food as encounter — shared tables, honest dialogue, and the bonds that form over a common meal." },
    { code: "CREATE", title: "Create", text: "Food as creation — craft, art, and the imagination that keeps a cuisine alive and moving." },
    { code: "CARE", title: "Care", text: "Food as stewardship — of soil, farmers, ecosystems, and the generations still to be fed." }
  ];

  /* Ecosystem — the program modules. */
  var programs = [
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
  ];

  /* KUDAKU Nusantara — the annual flagship, three days. */
  var days = [
    {
      day: "Day 1",
      name: "AKAR",
      gloss: "Root",
      subtitle: "Tanah, Pangan & Identitas",
      text: "Understanding where food comes from — and the people behind it. A day of return to the source of taste.",
      moments: ["Dari Tanah ke Meja", "KUDAKU Farm Experience", "KUDAKU Archive: Cerita dari Dapur Nenek", "Pasar Pangan & Kreativitas", "Jamuan Nusantara", "Malam Budaya Nusantara"]
    },
    {
      day: "Day 2",
      name: "PERTEMUAN",
      gloss: "Encounter",
      subtitle: "Indonesia Bertemu",
      text: "Bringing together regions, traditions, people and knowledge around one shared table.",
      moments: ["Sarapan Nusantara", "Pangan sebagai Identitas", "Dapur Nusantara", "KUDAKU Lab: Tradisi Bertemu Kreativitas", "KUDAKU Young Talent", "Parade Pangan Nusantara", "The Great Nusantara Dinner", "Nusantara Night"]
    },
    {
      day: "Day 3",
      name: "MASA DEPAN",
      gloss: "Future",
      subtitle: "Kreativitas, Ketahanan & Dunia",
      text: "From inherited knowledge toward the future of food — creativity, resilience, and the world.",
      moments: ["Future Food Forum", "Food as Cultural Diplomacy", "One Table — Many Cultures", "KUDAKU CREATE / Food Lab Final", "Future Market", "KUDAKU Legacy Session", "KUDAKU Awards"]
    }
  ];

  /* Impact & Legacy — the pillars of long-term value. */
  var impact = [
    { title: "Culture", text: "Knowledge and recipes documented — living food traditions recorded and carried forward." },
    { title: "Education", text: "Learning participants and young people involved — the table as a classroom for the next generation." },
    { title: "Economy", text: "Economic value and benefits received by local actors — producers, growers, and makers." },
    { title: "Network", text: "Villages, regions, institutions and countries connected through food." },
    { title: "Creativity", text: "New works, products and collaborations born from the platform." },
    { title: "Ecology", text: "Waste reduction, local food use and environmentally responsible practice." },
    { title: "Legacy", text: "Knowledge, documentation, programs and collaborations that continue after the flagship event." }
  ];

  /* Partners — the ecosystem of collaborators. */
  var partners = [
    { title: "Government", text: "Policy, place, and public platforms that align cultural and economic development." },
    { title: "Academia", text: "Research, documentation, and the rigour that turns practice into knowledge." },
    { title: "Business", text: "Purpose-aligned enterprises that extend reach in service of culture." },
    { title: "Community", text: "Producers, practitioners, and local groups who carry the culture every day." },
    { title: "Media", text: "Storytellers who bring the work to wider publics with care and context." },
    { title: "Cultural institutions", text: "Peers at home who open doors for exchange and shared learning." },
    { title: "International organizations", text: "Global networks that connect Indonesian food culture to the world." }
  ];

  /* Growth path — an ambition to widen the table, stage by stage. */
  var growth = [
    { stage: "Kuningan", note: "Where KUDAKU is born — at Bumi Seni Tarikolot, at the foot of Mount Ciremai." },
    { stage: "Jawa Barat", note: "The province as a living region of producers, kitchens, and traditions." },
    { stage: "Nusantara", note: "The archipelago as one shared table of islands, ingredients, and peoples." },
    { stage: "International", note: "Indonesia's food culture in dialogue with the world." }
  ];

  /* Year-round lifecycle — the platform works beyond the event. */
  var lifecycle = {
    statementId: "Event berlangsung beberapa hari, tetapi platform KUDAKU bekerja sepanjang tahun.",
    statementEn: "The event lasts a few days, but the KUDAKU platform works all year round.",
    phases: [
      { phase: "Pre-event", note: "Research, participant curation, education programs, residency, content production, promotion, and collaboration." },
      { phase: "Flagship event", note: "KUDAKU Nusantara — the annual gathering where the whole ecosystem comes to the table." },
      { phase: "Post-event", note: "Documentation, evaluation, publication, product development, collaboration follow-up, and legacy building." }
    ]
  };

  return {
    lang: "en",
    brand: brand,
    nav: nav,
    dna: dna,
    programs: programs,
    days: days,
    impact: impact,
    partners: partners,
    growth: growth,
    lifecycle: lifecycle,
    footer: {
      initiatedLabel: "Initiated by",
      principle: "Born in Kuningan. Rooted in Nusantara. Open to the World.",
      note: "A cultural food platform — a shared table that keeps growing across Nusantara."
    }
  };
})();
