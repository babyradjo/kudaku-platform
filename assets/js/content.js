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
    { n: "01", name: "KUDAKU Table", text: "Curated dining encounters where a single dish opens a conversation about place, people, and history." },
    { n: "02", name: "KUDAKU Kitchen", text: "The living kitchen — traditional technique, live craft, and the hands that transform raw ingredients into shared meaning." },
    { n: "03", name: "KUDAKU Market", text: "Producers and ingredients in direct dialogue — the local economy made visible, and made tasteable." },
    { n: "04", name: "KUDAKU Farm", text: "Seed, soil, and food systems — agriculture understood as the first act of culture." },
    { n: "05", name: "KUDAKU Lab", text: "Research and experiment — food studies, ecology, and the questions that sit behind the plate." },
    { n: "06", name: "KUDAKU Class", text: "Learning and transmission — workshops that carry technique and knowledge across generations." },
    { n: "07", name: "KUDAKU Talk", text: "Dialogue and narrative — conversations on food as culture, economy, and ecology." },
    { n: "08", name: "KUDAKU Stage", text: "Performance and ritual — music, movement, and ceremony gathered around food." },
    { n: "09", name: "KUDAKU Archive", text: "Documentation and memory — recipes, stories, and knowledge preserved as a living legacy." },
    { n: "10", name: "KUDAKU Residency", text: "Residencies for chefs, artists, and researchers — deep, unhurried work in a living landscape." },
    { n: "11", name: "Food Diplomacy", text: "Cross-cultural exchange — food as a shared language between regions, nations, and worlds." }
  ];

  /* KUDAKU Nusantara — the annual flagship, three days. */
  var days = [
    {
      day: "Day 1",
      name: "AKAR",
      gloss: "Root",
      text: "Where food begins: seeds, soil, ingredients, and the inherited knowledge that gives a dish its origin. A day of return to the source of taste."
    },
    {
      day: "Day 2",
      name: "PERTEMUAN",
      gloss: "Encounter",
      text: "Where food gathers people: shared tables, exchange between regions, and the conversations that only happen around a common meal."
    },
    {
      day: "Day 3",
      name: "MASA DEPAN",
      gloss: "Future",
      text: "Where food looks forward: young makers, sustainable systems, and the imagination of what Indonesian food can become."
    }
  ];

  /* Impact & Legacy — the pillars of long-term value. */
  var impact = [
    { title: "Culture", text: "Keeping living food traditions in practice — not preserved behind glass, but performed, tasted, and carried forward." },
    { title: "Education", text: "Turning the table into a classroom: technique, food literacy, and ecological understanding for the next generation." },
    { title: "Local economy", text: "Directing value to producers, growers, and makers — so that a thriving food culture also means thriving livelihoods." },
    { title: "Agriculture & food systems", text: "Supporting seed, soil, and regenerative practice as the foundation beneath every plate." },
    { title: "Ecology", text: "Treating land and water as participants, not resources — food as a relationship with place." },
    { title: "Community", text: "Building the shared tables and recurring gatherings where belonging is felt and reinforced." },
    { title: "International cultural exchange", text: "Opening Indonesian food culture to the world, and the world's food culture to Indonesia." },
    { title: "Annual archive & knowledge legacy", text: "Documenting recipes, narratives, and practices each year into an archive that outlives any single event." }
  ];

  /* Partners — the ecosystem of collaborators. */
  var partners = [
    { title: "Government", text: "Policy, place, and public platforms that align cultural and economic development." },
    { title: "Academia", text: "Research, documentation, and the rigour that turns practice into knowledge." },
    { title: "Business", text: "Purpose-aligned enterprises that extend reach without extracting from culture." },
    { title: "Community", text: "Producers, practitioners, and local groups who carry the culture every day." },
    { title: "Media", text: "Storytellers who bring the work to wider publics with care and context." },
    { title: "Cultural & international institutions", text: "Peers abroad and at home who open doors for exchange and shared learning." }
  ];

  /* Growth path — the ambition, not a promise of scale. */
  var growth = [
    { stage: "Kuningan", note: "Where KUDAKU is born — at Bumi Seni Tarikolot, at the foot of Mount Ciremai." },
    { stage: "Jawa Barat", note: "The province as a living region of producers, kitchens, and traditions." },
    { stage: "Nusantara", note: "The archipelago as one shared table of islands, ingredients, and peoples." },
    { stage: "International", note: "Indonesia's food culture in dialogue with the world." }
  ];

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
    footer: {
      initiatedLabel: "Initiated by",
      principle: "Born in Kuningan. Rooted in Nusantara. Open to the World.",
      note: "A cultural food platform. Not an event, a festival, or a single place — a shared table that keeps growing."
    }
  };
})();
