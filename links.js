
// ══════════════════════════════════════════════════════════════
// THE RITUAL — Adam Nevill
// ENLACES — Capítulos Prólogo–10
// ══════════════════════════════════════════════════════════════

const links = [

    // ─── ROOT → CATEGORÍAS ────────────────────────────────────────
    { source: 'root', target: 'cat-personajes',  label: '',              type: 'cat' },
    { source: 'root', target: 'cat-eventos',     label: '',              type: 'cat' },
    { source: 'root', target: 'cat-concepto',    label: '',              type: 'cat' },
    { source: 'root', target: 'cat-lugar',       label: '',              type: 'cat' },
    { source: 'root', target: 'cat-trama',       label: '',              type: 'cat' },

    // ─── CATEGORÍAS → NODOS ───────────────────────────────────────
    { source: 'hutch',                     target: 'cat-personajes',  label: '',                          type: 'arc' },
    { source: 'luke',                      target: 'cat-personajes',  label: '',                          type: 'arc' },
    { source: 'dom',                       target: 'cat-personajes',  label: '',                          type: 'arc' },
    { source: 'phil',                      target: 'cat-personajes',  label: '',                          type: 'arc' },

    { source: 'prologue-carcass',          target: 'cat-eventos',     label: '',                          type: 'arc' },
    { source: 'decision-new-route',        target: 'cat-eventos',     label: '',                          type: 'arc' },
    { source: 'lost-in-forest',            target: 'cat-eventos',     label: '',                          type: 'arc' },
    { source: 'house-found',               target: 'cat-eventos',     label: '',                          type: 'arc' },
    { source: 'sound-in-trees',            target: 'cat-eventos',     label: '',                          type: 'arc' },
    { source: 'house-entry',               target: 'cat-eventos',     label: '',                          type: 'arc' },
    { source: 'house-interior',            target: 'cat-eventos',     label: '',                          type: 'arc' },
    { source: 'phil-upstairs-scare',       target: 'cat-eventos',     label: '',                          type: 'arc' },
    { source: 'goat-effigy-discovered',    target: 'cat-eventos',     label: '',                          type: 'arc' },

    { source: 'goat-of-mendes',            target: 'cat-concepto',    label: '',                          type: 'arc' },
    { source: 'stuga-fritidshus',          target: 'cat-concepto',    label: '',                          type: 'arc' },
    { source: 'box-bed',                   target: 'cat-concepto',    label: '',                          type: 'arc' },
    { source: 'rune-carvings',             target: 'cat-concepto',    label: '',                          type: 'arc' },
    { source: 'skull-display',             target: 'cat-concepto',    label: '',                          type: 'arc' },
    { source: 'crucifix-display',          target: 'cat-concepto',    label: '',                          type: 'arc' },
    { source: 'the-forest',               target: 'cat-concepto',    label: '',                          type: 'arc' },
    { source: 'animal-sacrifice',          target: 'cat-concepto',    label: '',                          type: 'arc' },

    { source: 'laponia-sueca',             target: 'cat-lugar',       label: '',                          type: 'arc' },
    { source: 'el-bosque-loc',             target: 'cat-lugar',       label: '',                          type: 'arc' },
    { source: 'la-casa',                   target: 'cat-lugar',       label: '',                          type: 'arc' },
    { source: 'skaite',                    target: 'cat-lugar',       label: '',                          type: 'arc' },
    { source: 'gammelstad',                target: 'cat-lugar',       label: '',                          type: 'arc' },
    { source: 'skansen',                   target: 'cat-lugar',       label: '',                          type: 'arc' },

    { source: 'trama-quien-cuelga-el-animal', target: 'cat-trama',   label: '',                          type: 'arc' },
    { source: 'trama-culto-activo',           target: 'cat-trama',   label: '',                          type: 'arc' },
    { source: 'trama-supervivencia',          target: 'cat-trama',   label: '',                          type: 'arc' },

    // ─── HUTCH ────────────────────────────────────────────────────
    { source: 'hutch', target: 'luke',                  label: 'mejor amigo (distante)',    type: 'rel' },
    { source: 'hutch', target: 'dom',                   label: 'amigo más cercano',         type: 'rel' },
    { source: 'hutch', target: 'phil',                  label: 'amigo universitario',       type: 'rel' },
    { source: 'hutch', target: 'decision-new-route',    label: 'decide el atajo',           type: 'event' },
    { source: 'hutch', target: 'prologue-carcass',      label: 'descubre / no tiene respuesta', type: 'event' },
    { source: 'hutch', target: 'house-found',           label: 'fuerza la entrada',         type: 'event' },
    { source: 'hutch', target: 'goat-effigy-discovered',label: 'identifica / fotografía',   type: 'event' },
    { source: 'hutch', target: 'goat-of-mendes',        label: 'identifica como',           type: 'lore' },
    { source: 'hutch', target: 'box-bed',               label: 'reconoce por Skansen',      type: 'lore' },
    { source: 'hutch', target: 'skansen',               label: 'visitó antes',              type: 'rel' },
    { source: 'hutch', target: 'laponia-sueca',         label: 'organiza la expedición',    type: 'event' },

    // ─── LUKE ─────────────────────────────────────────────────────
    { source: 'luke', target: 'prologue-carcass',       label: 'descubre / calla',          type: 'event' },
    { source: 'luke', target: 'decision-new-route',     label: 'advierte riesgos / cede',   type: 'event' },
    { source: 'luke', target: 'sound-in-trees',         label: 'único testigo',             type: 'event' },
    { source: 'luke', target: 'house-found',            label: 'desconfía / resiste',       type: 'event' },
    { source: 'luke', target: 'goat-effigy-discovered', label: 'sube / presencia',          type: 'event' },
    { source: 'luke', target: 'the-forest',             label: 'percibe como agente',       type: 'trama' },
    { source: 'luke', target: 'gammelstad',             label: 'vio runas allí',            type: 'lore' },

    // ─── DOM ──────────────────────────────────────────────────────
    { source: 'dom', target: 'prologue-carcass',        label: 'descubre',                  type: 'event' },
    { source: 'dom', target: 'lost-in-forest',          label: 'rodilla lesionada',         type: 'event' },
    { source: 'dom', target: 'house-found',             label: 'insiste en entrar',         type: 'event' },

    // ─── PHIL ─────────────────────────────────────────────────────
    { source: 'phil', target: 'prologue-carcass',       label: 'descubre',                  type: 'event' },
    { source: 'phil', target: 'house-entry',            label: 'primero en entrar',         type: 'event' },
    { source: 'phil', target: 'house-interior',         label: 'comenta crucifijos',        type: 'event' },
    { source: 'phil', target: 'phil-upstairs-scare',    label: 'protagoniza',               type: 'event' },
    { source: 'phil', target: 'goat-effigy-discovered', label: 'primer contacto (sin saber)', type: 'event' },

    // ─── EVENTOS EN CADENA ────────────────────────────────────────
    { source: 'prologue-carcass',       target: 'decision-new-route',     label: '4h antes (cronología)',     type: 'arc' },
    { source: 'decision-new-route',     target: 'lost-in-forest',         label: 'consecuencia',              type: 'arc' },
    { source: 'lost-in-forest',         target: 'house-found',            label: 'sendero inesperado',        type: 'arc' },
    { source: 'house-found',            target: 'house-entry',            label: 'forzada por Hutch',         type: 'arc' },
    { source: 'house-entry',            target: 'sound-in-trees',         label: 'simultáneo',                type: 'arc' },
    { source: 'house-entry',            target: 'house-interior',         label: 'exploración',               type: 'arc' },
    { source: 'house-interior',         target: 'phil-upstairs-scare',    label: 'Phil sube solo',            type: 'arc' },
    { source: 'phil-upstairs-scare',    target: 'goat-effigy-discovered', label: 'Hutch y Luke suben',        type: 'arc' },

    // ─── EVENTOS ↔ CONCEPTOS ──────────────────────────────────────
    { source: 'goat-effigy-discovered', target: 'goat-of-mendes',        label: 'identificada como',         type: 'lore' },
    { source: 'goat-effigy-discovered', target: 'box-bed',               label: 'sienta sobre',              type: 'lore' },
    { source: 'goat-effigy-discovered', target: 'rune-carvings',         label: 'rodeada de',                type: 'lore' },
    { source: 'goat-effigy-discovered', target: 'animal-sacrifice',      label: 'rodeada de',                type: 'lore' },
    { source: 'house-interior',         target: 'skull-display',         label: 'contiene',                  type: 'lore' },
    { source: 'house-interior',         target: 'crucifix-display',      label: 'contiene',                  type: 'lore' },
    { source: 'house-found',            target: 'stuga-fritidshus',      label: 'anti-arquetipo de',         type: 'lore' },
    { source: 'lost-in-forest',         target: 'the-forest',            label: 'el bosque los dirige',      type: 'trama' },
    { source: 'sound-in-trees',         target: 'the-forest',            label: 'origen del ruido',          type: 'trama' },
    { source: 'prologue-carcass',       target: 'the-forest',            label: 'ocurre en',                 type: 'trama' },

    // ─── EVENTOS ↔ LUGARES ────────────────────────────────────────
    { source: 'decision-new-route',     target: 'el-bosque-loc',         label: 'entra en',                  type: 'event' },
    { source: 'decision-new-route',     target: 'skaite',                label: 'destino propuesto',         type: 'event' },
    { source: 'house-found',            target: 'la-casa',               label: 'la localizan',              type: 'event' },
    { source: 'prologue-carcass',       target: 'el-bosque-loc',         label: '4 km al oeste de la casa',  type: 'event' },
    { source: 'el-bosque-loc',          target: 'laponia-sueca',         label: 'parte de',                  type: 'arc' },
    { source: 'la-casa',                target: 'el-bosque-loc',         label: 'en claro dentro de',        type: 'arc' },

    // ─── CONCEPTOS ↔ LUGARES ──────────────────────────────────────
    { source: 'rune-carvings',          target: 'gammelstad',            label: 'similares a runas de',      type: 'lore' },
    { source: 'box-bed',                target: 'skansen',               label: 'Hutch los vio en',          type: 'lore' },
    { source: 'la-casa',                target: 'skull-display',         label: 'contiene',                  type: 'lore' },
    { source: 'la-casa',                target: 'crucifix-display',      label: 'contiene',                  type: 'lore' },
    { source: 'la-casa',                target: 'goat-of-mendes',        label: 'templo a',                  type: 'lore' },

    // ─── TRAMAS ABIERTAS ─────────────────────────────────────────
    { source: 'trama-quien-cuelga-el-animal', target: 'prologue-carcass',         label: 'sin resolver',     type: 'trama' },
    { source: 'trama-quien-cuelga-el-animal', target: 'sound-in-trees',           label: 'posible respuesta', type: 'trama' },
    { source: 'trama-culto-activo',           target: 'goat-effigy-discovered',   label: 'evidencia',         type: 'trama' },
    { source: 'trama-culto-activo',           target: 'la-casa',                  label: 'sede del culto',    type: 'trama' },
    { source: 'trama-supervivencia',          target: 'lost-in-forest',           label: 'origen del problema', type: 'trama' },
    { source: 'trama-supervivencia',          target: 'la-casa',                  label: 'refugio nocturno',  type: 'trama' },
];
