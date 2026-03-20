
// ══════════════════════════════════════════════════════════════
// THE RITUAL — Adam Nevill
// NODOS — Capítulos Prólogo–10
// ══════════════════════════════════════════════════════════════

const nodes = [

    // ══════════════════════════════════════════════════════════════
    // CATEGORÍAS RAÍZ
    // ══════════════════════════════════════════════════════════════
    { id: 'root',           label: 'THE RITUAL',       group: 'CENTER',   type: 'Root',                    desc: 'Mapa mental de The Ritual (Adam Nevill). Cuatro amigos perdidos en un bosque virgen de Laponia sueca. Lo que empieza como una excursión mal planificada se convierte en un descenso hacia el terror.', star: '' },
    { id: 'cat-personajes', label: 'Personajes',        group: 'CAT',      type: 'Categoría',               desc: 'Personajes principales de The Ritual.',                    star: '' },
    { id: 'cat-eventos',    label: 'Eventos',           group: 'CAT',      type: 'Categoría',               desc: 'Secuencia narrativa de eventos clave, caps. Prólogo–10.',  star: '' },
    { id: 'cat-concepto',   label: 'Conceptos',         group: 'CAT',      type: 'Categoría',               desc: 'Conceptos ocultistas, culturales y ambientales.',          star: '' },
    { id: 'cat-lugar',      label: 'Lugares',           group: 'CAT',      type: 'Categoría',               desc: 'Localizaciones de la novela.',                             star: '' },
    { id: 'cat-trama',      label: 'Tramas Abiertas',   group: 'CAT',      type: 'Categoría',               desc: 'Hilos narrativos sin resolver al final del capítulo 10.',  star: '' },

    // ══════════════════════════════════════════════════════════════
    // PERSONAJES
    // ══════════════════════════════════════════════════════════════
    {
        id: 'hutch',
        label: 'Hutch',
        group: 'PERSONAJE',
        type: 'Personaje — Líder',
        desc: 'Organizador de la excursión. Oriundo de Yorkshire. Físicamente en forma — junto a Luke, el más preparado del grupo. Pelo largo, ojos verdes pálidos con pestañas negras ("casi demasiado bonitos para un hombre"). Lleva la guía y el mapa; él decide la ruta y los pivotes de emergencia. Carismático: mantiene la cohesión del grupo con humor y autoridad suave incluso bajo presión extrema. Amigo de infancia de los cuatro; más cercano a Dom en la actualidad, comparten tienda. Casado (la boda fue cuando surgió la idea de este viaje). Tiene experiencia en actividades al aire libre desde hace veinte años — y jamás ha visto nada parecido al animal en el árbol. Estado actual: dentro de la casa abandonada, acaba de fotografiar la efigie de la Cabra de Mendes (ver nodo goat-effigy-discovered). Identifica la efigie, localiza el lecho-caja histórico. Primera fisura real en su compostura (cara pálida, ojos aguados al ver la efigie). Referencias: (ver nodo decision-new-route), (ver nodo prologue-carcass), (ver nodo house-found), (ver nodo goat-effigy-discovered).',
        star: '★★ La autoridad de Hutch se sostiene sobre el optimismo y la decisión rápida. El primer momento en que genuinamente no tiene respuesta es ante la efigie — "If it moved, my heart would stop." Su reacción revela hasta dónde llega su control.'
    },
    {
        id: 'luke',
        label: 'Luke',
        group: 'PERSONAJE',
        type: 'Personaje — Sensible/Introspectivo',
        desc: 'Rubio, facciones cuadradas, barba de varios días, cejas rubias. El más delgado y observador del grupo. Fuma cigarrillos Camel con encendedor Zippo. Lleva una navaja comprada en la tienda de aventura de Estocolmo. Igual de preparado físicamente que Hutch. Históricamente el mejor amigo de Hutch — pero el viaje revela que se siente marginado: Dom y Phil tienen una dinámica cerrada con Hutch de la que Luke se siente excluido. Tiene problemas para "internalizar su rabia" desde hace tiempo — sus llamadas telefónicas a Hutch derivan en diatribas. Odia el piso compartido en Finsbury Park. Solero; Dom y Phil se burlan de sus chicas y bares. Reacción intuitiva al bosque: labios que se mueven solos, fuma sin parar — señales de alarma que Hutch identifica como indicadores de estrés en Luke. ÚNICO en escuchar el ruido en los árboles (ver nodo sound-in-trees). Estado actual: en el desván junto a Hutch, contemplando la efigie. La presencia del lugar le produce una sensación física de terror existencial antes incluso de ver la figura. Referencias: (ver nodo prologue-carcass), (ver nodo sound-in-trees), (ver nodo house-reluctance), (ver nodo goat-effigy-discovered).',
        star: '★★★ Luke funciona como el sensor emocional del texto: el único que escucha, el único que duda, el único que siente que la casa "no es bienvenida para hombres." Nevill lo usa como foco perceptivo porque su hipervigilancia detecta lo que los demás descartan como fatiga.'
    },
    {
        id: 'dom',
        label: 'Dom',
        group: 'PERSONAJE',
        type: 'Personaje — Escéptico/Gruñón',
        desc: 'Director de marketing en un banco grande. 34 años; su cara aparenta cincuenta. Cintura de 46 pulgadas, vestido de pies a cabeza en Officers Club casuals. Ex-lanzador de cricket rápido que casi llegó a county cricket, ex-viajero por Sudamérica — ahora casado con hijos. El hijo menor tiene problemas (no especificados). La esposa le causa estrés constante. Tortilla el tobillo en el primer día en el campo de bolos de rocas; al final del día 2 la rodilla está inflamada como un balón de rugby y camina cojeando. Lenguaje violento pero sin odio real — familiaridad con Hutch expresada en insultos afectuosos. Lleva el Jack Daniel\'s de la expedición. Personalidad dominante: sarcástico, impulsivo, acapara la única silla de la casa. Estado actual: instalado en la planta baja de la casa abandonada, esperando que Hutch averigüe qué hay arriba. Referencias: (ver nodo house-found), (ver nodo prologue-carcass).',
        star: '★ Dom personifica la resistencia a lo inexplicable: prefiere racionalizar o burlarse antes que confrontar el miedo. Su desestimación constante de las observaciones de Luke sirve narrativamente para aislar al lector con la percepción de Luke.'
    },
    {
        id: 'phil',
        label: 'Phil',
        group: 'PERSONAJE',
        type: 'Personaje — Agotado/Impulsivo',
        desc: 'Corpulento, cara redonda y rojiza, hombros redondeados. Lleva vaqueros en una excursión de tres días bajo la lluvia — exactamente lo que Hutch le pidió que no hiciera en Kiruna. Asma. Ampollas en los talones convertidas en carne viva el primer día. Perdió su navaja de Estocolmo en el primer campamento. Casado; su esposa le genera estrés constante ("permanent state of ball-ache"). Comparte la incomodidad de Luke de sentirse fuera del círculo Hutch-Dom, aunque ninguno de los dos lo admitiría. Impulsivo: fue el primero en insistir en entrar a la casa ("I\'m spending the night in there") y el primero en subir las escaleras solo. Estado actual: en la planta baja, sentado en el suelo tras bajar corriendo las escaleras en estado de shock. Vio algo grande, negro, sentado e inmóvil en el desván mirándolo. Referencias: (ver nodo house-entry), (ver nodo phil-upstairs-scare).',
        star: '★ Phil provee el primer contacto aterrador con la efigie — sin saber lo que es, su reacción (pánico físico, incapacidad de articular) es más genuina que cualquier descripción directa. Nevill usa la ignorancia de Phil como herramienta de suspense.'
    },

    // ══════════════════════════════════════════════════════════════
    // EVENTOS
    // ══════════════════════════════════════════════════════════════
    {
        id: 'prologue-carcass',
        label: 'Prólogo — Animal en el Árbol',
        group: 'EVENTO',
        type: 'Evento — Incidente Fundacional',
        desc: 'Los cuatro amigos tropiezan simultáneamente con una carcasa colgada en un árbol, segundo día de la excursión, después de un día completo de lluvia intensa y pérdida progresiva de orientación. La criatura cuelga entre las ramas de un abeto a altura inaccesible para un hombre erguido. Detalles: caja torácica grande de la que cuelgan vísceras azuladas; la piel extendida sobre ramas adyacentes, perforada pero tensa en algunos puntos; el centro arrugado sugiere que la piel fue arrancada del dorso de un solo tirón rápido; mandíbula ósea con dientes visibles; un ojo tan grande como una bola de billar, opaco. Sin olor — muerte reciente, "una matanza fresca." Reacciones: Hutch queda pálido y mudo (Hutch siempre tiene respuestas — esta es la primera vez que no). Phil tiembla al hablar. Dom pregunta por qué alguien la pondría ahí arriba. Luke no dice nada. El grupo abandona el lugar a paso acelerado, hablando en voz alta para disipar el miedo. Consecuencia narrativa: la sola existencia de esta matanza — a una altura que requiere fuerza descomunal o una criatura muy grande, en bosque virgen sin cazadores — establece desde el inicio que hay algo en ese bosque que no pertenece al mundo ordinario.',
        star: '★★★ Nevill coloca este evento en el Prólogo para establecer la regla del juego antes del capítulo 1: el bosque ya ha matado. La falta de olor confirma que sea lo que sea, está CERCA. El misterio no se resolverá pronto — el animal nunca se identifica con certeza.'
    },
    {
        id: 'decision-new-route',
        label: 'Decisión — Nuevo Camino por el Bosque',
        group: 'EVENTO',
        type: 'Evento — Punto de No Retorno',
        desc: 'Al mediodía del segundo día, Hutch para y llama a Luke aparte. Dom y Phil están agotados: la rodilla de Dom empeoró y el pie de Phil es carne viva. Hutch evalúa: no llegarán a Porjus. Propone atajo: abandonar el sendero Sörstubba hacia el sureste cruzando una franja estrecha del bosque nacional, salir al Río Stora Luleälven al anochecer, seguir el río aguas abajo hasta las cabañas turísticas de Skaite. "Se supone que es solo un par de horas por la franja más estrecha." Luke plantea objeciones concretas: el terreno forestal es desconocido (off-piste), hay zonas pantanosas marcadas en el mapa, nadie sabe que van allí (la oficina medioambiental de Porjus estaba cerrada y Hutch no llamó). Hutch las descarta: el Parque Nacional es terreno virgen pero seguro en septiembre, sin nieve ni hielo, nadie llamará su atención. Luke cede: "You\'re the boss." La decisión es voluntaria pero basada en confianza excesiva — el mapa no puede representar la densidad real del bosque. Consecuencia: cinco horas después están completamente perdidos, sin posibilidad de dar marcha atrás.',
        star: '★★★ El gran error de Hutch no es atreverse — es no llamar a la oficina medioambiental. Nadie en el mundo sabe que están en ese bosque. Este detalle convierte el olvido burocrático de Hutch en una sentencia de muerte potencial.'
    },
    {
        id: 'lost-in-forest',
        label: 'Perdidos en el Bosque',
        group: 'EVENTO',
        type: 'Evento — Descenso',
        desc: 'Cinco horas después de entrar al bosque, los cuatro están completamente desorientados. Hutch consulta el mapa por quinta vez en una hora. El bosque los lleva en dirección noroeste aunque intentan moverse hacia el sureste — solo pueden avanzar donde la vegetación es menos densa, que nunca es en la dirección correcta. Tras cuatro kilómetros de avance en la dirección equivocada, el sentido de orientación de Hutch desaparece. El dosel del bosque es tan denso que bloquea la luz: el techo de ramas crea la ilusión de descender hacia algo que se estrecha. El otoño llegó tarde ese año (el verano más lluvioso desde que existen registros en Suecia) y el bosque está arrojando sus partes muertas con violencia: ramas gigantes bloqueando el paso, raíces que atrapan los pies, zarzas que se meten dentro de las camisas. Los árboles de gran antigüedad están cubiertos de líquenes resbaladizos. Las ramas superiores actúan como embudos concentrando la lluvia en ráfagas heladas del tamaño de canicas. Dom ya no puede doblar la rodilla. Phil tiene asma. Hutch considera dar marcha atrás — pero eso implicaría pasar de noche por el árbol con la carcasa colgada. Resultado: encuentran un sendero estrecho poco antes de las siete de la tarde, que llevan hasta una casa.',
        star: '★★ La desorientación no es un error técnico de navegación — es el bosque como agente activo. "The forest was leading them." Nevill prepara el terreno para sugerir que la dirección es imposible mantener no porque Hutch sea incompetente, sino porque algo en ese bosque no quiere que salgan.'
    },
    {
        id: 'house-found',
        label: 'La Casa Abandonada — Descubierta',
        group: 'EVENTO',
        type: 'Evento — Hallazgo',
        desc: 'Justo antes de las siete de la tarde, los cuatro siguen un sendero estrecho que aparece inesperadamente en el bosque. El sendero lleva a una casa. Detalle del exterior: se hunde hacia la parte trasera de un patio de cultivo cubierto de ortigas y hierbas empapadas hasta la altura de la rodilla. Construcción de dos plantas. Las paredes abultadas están ennegrecidas como si hubiera habido un incendio y nadie las hubiera atendido después. Las tejas se han desprendido. Las ventanas siguen entablilladas contra inviernos que pasaron hace tiempo. Ningún ángulo recto visible — todo cede y se comba. No capta ni refleja la luz que cae en el claro: desde donde está Luke, "suggests that the interior would be just as wet and cold as the darkening wood." Contraste explícito con las típicas stugas suecas que los cuatro vieron desde el tren (ver nodo stuga-fritidshus): sin paredes rojas, sin cerca blanca, sin jardín cuidado, sin nada acogedor. Phil lo ve y dice "It\'s empty. Let\'s get in there." Luke tiene un mal presentimiento y propone seguir avanzando — Dom y Phil lo ignoran. Hutch toma la decisión pragmática: hay chimenea, parece sólida, necesitan secarse.',
        star: '★★ La casa como inversión de lo familiar. Nevill hace que los cuatro reconozcan el arquetipo (stuga = seguridad) antes de revelar que esta es su negación exacta. El hecho de que Phil insista en entrar mientras Luke duda establece la jerarquía perceptiva del relato.'
    },
    {
        id: 'sound-in-trees',
        label: 'El Ruido en los Árboles',
        group: 'EVENTO',
        type: 'Evento — Señal Ignorada',
        desc: 'Mientras los otros ya están dentro de la casa, Luke permanece en el patio bajo la lluvia, fumando. Escucha un estallido tremendo proveniente del bosque: madera fresca y sólida quebrándose, como si una rama gruesa — "like an arm from a torso" — fuera arrancada de un tronco oscurecido. El eco se pierde adentrándose en el bosque. Luke se queda paralizado: pulso desbocado, desorientado por el miedo, "imagining a terrific rage and strength, a terrible intent, out there." Casi acepta la realidad de lo que imagina antes de que el trueno cubra el sonido y Hutch lo llame desde dentro. Luke descarta la experiencia como alucinación de agotamiento ("Exhaustion overwhelmed you. Played tricks with your mind"). Informa a Hutch en la puerta: "The trees. In the trees. Did you not hear it?" Hutch lo atribuye al trueno y al aguacero. Nadie le cree ni lo investiga. Dom le dice directamente que no empiece "con esa mierda." Consecuencia: el ruido queda sin explicar. Justo 4 kilómetros al este del árbol con la carcasa. Luke es el único testigo.',
        star: '★★★ Este es el momento pivote que Nevill usa para separar la percepción de Luke de la del grupo. El ruido no es subjetivo — está descrito con detalle físico preciso. La decisión de los personajes de no investigarlo es el error que la novela cobrará caro.'
    },
    {
        id: 'house-entry',
        label: 'Entrada a la Casa',
        group: 'EVENTO',
        type: 'Evento — Intrusión',
        desc: 'Hutch revienta la puerta a patadas alrededor del pomo de hierro negro. Luke es el último en entrar, tras el altercado verbal con Dom ("arrested development"). Mientras los otros entran, Luke escucha el ruido en los árboles (ver nodo sound-in-trees) y se queda paralizado en el patio. Cuando finalmente cruza el umbral, Dom ya ha reclamado el taburete, Phil examina la mesa y Hutch ataca la estufa de hierro con su navaja de Estocolmo. Primer impacto visual al entrar: calaveras en las paredes, crucifijos torcidos. La casa no tiene cerradura pero la puerta estaba atascada. La puerta en sí es tan negra que no tiene definición dentro del frente de la casa. Acto de forzar la puerta como vandalismo que molesta a Luke — "breaking into private property." La lluvia y el ruido de los ratones bajo el suelo completan la bienvenida.',
        star: ''
    },
    {
        id: 'house-interior',
        label: 'Interior de la Casa — Planta Baja',
        group: 'EVENTO',
        type: 'Evento — Exploración',
        desc: 'La planta baja consiste en una habitación grande. Inventario completo bajo la luz amarilla de sus linternas: (1) Calaveras: desde pájaros pequeños hasta ardillas y armiños, fijadas con clavos oxidados en las paredes de madera. Cráneos más grandes de lince, ciervo y alce — la mayoría caídos al suelo y rotos, uno o dos todavía colgando junto al techo bajo. (2) Crucifijos: al menos una docena hechos a mano con manojos de ramitas atadas con hilo, mayormente ladeados o colgando boca abajo. (3) Mobiliario: una mesa de caballete que cruje bajo la presión, un taburete de madera basta junto a la cabecera, una estufa de hierro oxidada en el hogar (atascada pero relativamente seca). (4) Lámparas: dos lámparas de aceite vacías y corroídas que chirrían en sus ganchos al ser tocadas. (5) Anexo lateral con herramientas — Hutch encuentra una guadaña de aspecto amenazante. (6) Bajo el suelo: ratones moviéndose con una confianza y agresividad inusuales. Phil señala los crucifijos: "You\'d think they\'d make you feel safe. But they don\'t." Luke, el más alto, se golpea la cabeza con una de las lámparas de aceite.',
        star: '★★ La mezcla de símbolos cristianos (crucifijos) y práctica pagana (cráneos) es el primer indicio del carácter sincrético del culto que habitó este lugar. Hutch lo nombrará en el desván: "crosses on the walls downstairs and a bloody goat in the loft — mixing metaphors."'
    },
    {
        id: 'phil-upstairs-scare',
        label: 'Phil Sube Solo — El Pánico',
        group: 'EVENTO',
        type: 'Evento — Primer Contacto',
        desc: 'Phil decide subir al piso de arriba para "ver las habitaciones" (quiere un lugar donde dormir). Sube mientras los otros tres están en la planta baja: Hutch ataca la estufa, Dom se quita las botas, Luke observa la lluvia por la puerta. Solo escuchan sus pasos en las escaleras. Menos de un minuto después, Phil baja tan rápido que suena como una caída: golpes de pies, jadeos asmáticos. Llega al último escalón, cae de rodillas, gira sobre su trasero y se arrastra alejándose de las escaleras. Los tres linterna en mano se giran. Phil intenta gritar pero sale como un aullido. Dice: "Something\'s up there!" y luego: "I don\'t know! I saw it. In the bed." Descripción de lo que vio: "I saw some eyes in my torchlight. And something black. Something big. But it didn\'t move. It just sat there and stared at me." Hutch intenta racionalizar: sin huellas de entrada, lleno de polvo, los ratones se escucharían mucho antes que cualquier animal. Debate breve: ¿volver al bosque bajo la tormenta? Imposible — temperatura bajará en picado. Decisión: Hutch y Luke suben juntos, navaja en mano.',
        star: '★★ La reacción física de Phil (caída, arrastre en el suelo) sin que Nevill describa aún qué vio exactamente es técnica clásica de horror — el miedo del personaje testigo precede a la revelación y la amplifica. "It was sitting up. Staring at me" es todo lo que sabemos.'
    },
    {
        id: 'goat-effigy-discovered',
        label: 'La Efigie de la Cabra de Mendes',
        group: 'EVENTO',
        type: 'Evento — Revelación Central',
        desc: 'Hutch sube primero con la navaja, Luke detrás. La escalera estrecha cruje y truena bajo cada paso — no hay forma de hacerlo en silencio. El desván es bajo y oscuro; la lluvia penetra por las vigas. Al fondo del desván, entre los dos lados del tejado a dos aguas, la silueta. Descripción completa de la efigie: (1) Una cabra disecada, sentada erguida e inmóvil en un pequeño féretro de madera del tamaño de una cuna infantil — pintado o ennegrecido por la edad. El pelo negro brilla donde la lluvia lo ha humedecido. (2) Cuernos largos y gruesos, de color marrón hueso, que brotan sobre dos cuencas oculares oscuras. (3) Patas traseras finas que terminan en pezuñas, dobladas en las rodillas y posadas sobre los bordes del féretro "como si la cosa estuviera a punto de levantarse." (4) Labios negros retraídos sobre dientes amarillos largos — una mueca permanente. Ollares que parecen todavía húmedos. (5) Tetinas rosas que parten el pelo a lo largo del pecho — el detalle más inquietante para Luke. (6) Las patas delanteras, o brazos, alzadas a altura de hombros y dobladas por el codo, con las palmas hacia arriba — gesto de "Levantaos" o de quien ha soltado objetos que ya no sostiene. Las manos son HUMANAS: momificadas, ennegrecidas, cosidas al cuerpo de la cabra. Hutch las examina de cerca. (7) En el suelo alrededor del féretro: huesos de animales pequeños (conejos, aves grandes con alas rotas y cráneos de papel), algunos todavía cubiertos de un pergamino gris sin pelo. (8) En las vigas del tejado: símbolos tallados a fondo en la madera, algunos similares a piedras rúnicas vistas en Gammelstad, dispuestos aleatoriamente a distintas alturas y en líneas largas. El féretro resulta ser un lecho-caja tradicional escandinavo (ver nodo box-bed). Hutch lo identifica: "The Goat of Mendes" (ver nodo goat-of-mendes). La conclusión de Hutch sobre el lugar: algún tipo de templo, ofrenda y sacrificio — "just as mad as hatters." La explicación que ofrece: "It\'s the darkness and the long nights. Send anyone mad." Hutch fotografía la escena antes de que bajen.',
        star: '★★★ La efigie es el corazón icónico de los capítulos 1–10: un ídolo pagano con manos humanas cosidas, en una casa de campo sueca del siglo XIX, en medio de un bosque virgen donde algo acaba de matar un alce. Nevill fusiona folclore escandinavo real (lecho-caja, símbolos rúnicos) con iconografía ocultista europea (Baphomet/Cabra de Mendes) para crear algo que no tiene explicación limpia ni histórica ni sobrenatural. La pregunta que queda: ¿está solo la efigie, o el culto sigue activo?'
    },

    // ══════════════════════════════════════════════════════════════
    // CONCEPTOS — OCULTISMO / CULTURA / ENTORNO
    // ══════════════════════════════════════════════════════════════
    {
        id: 'goat-of-mendes',
        label: 'Cabra de Mendes (Baphomet)',
        group: 'CONCEPTO',
        type: 'Concepto — Ocultismo',
        desc: 'Símbolo ocultista de origen complejo. La "Cabra de Mendes" como designación específica proviene del ocultista francés del siglo XIX Éliphas Lévi, quien en su obra Dogme et Rituel de la Haute Magie (1854–1856) creó la imagen del "Sabbatical Goat" o Baphomet: una figura andrógina con cabeza de macho cabrío, alas negras, torso humano con pechos, piernas de cabra y un caduceo en el regazo. Los brazos apuntan en direcciones opuestas (derecha arriba, izquierda abajo), con las palabras latinas "SOLVE" y "COAGULA" grabadas — "disuelve y coagula", frase alquímica sobre la transformación espiritual. Lévi equiparó su figura con el dios egipcio de Mendes (la ciudad griega de Djedet), cuyo culto honoraba al dios Banebdjedet — deidad de fertilidad con aspecto de carnero, erróneamente interpretada como cabra por Herodoto. El pentágrama invertido sobre la frente fue añadido después por Stanislas de Guaïta en 1897. En 1966 Anton LaVey adoptó esta imagen como símbolo oficial de la Iglesia de Satán (Sigilo de Baphomet). [Nota: Lévi no concibió el Baphomet como demonio ni como símbolo de mal — lo concibió como representación del equilibrio de opuestos, síntesis del universo. Su lectura satánica es una apropiación posterior.] En la novela: la efigie del desván NO es el Baphomet andrógino de Lévi (no tiene torso humano completo ni alas) sino una cabra real disecada con manos humanas cosidas en posición similar — ídolo artesanal, siniestro por su manufactura física.',
        star: '★★ La identificación de Hutch es parcialmente correcta (postura, cuernos, gesto de brazos) pero la efigie es más primitiva y más perturbadora que el símbolo ocultista europeo culto. La diferencia importa: Lévi diseñó un símbolo filosófico; quien hizo esta cosa mató animales reales y cosió manos humanas.'
    },
    {
        id: 'stuga-fritidshus',
        label: 'Stuga / Fritidshus',
        group: 'CONCEPTO',
        type: 'Concepto — Cultura Sueca',
        desc: 'Stuga (del sueco antiguo stuva, relacionado con el inglés "stove" — originalmente "habitación con fuego"): cabaña o casa de campo pequeña, típicamente de madera. Hay decenas de miles distribuidas por la Suecia rural, especialmente en el norte. Tradición nacional: casi la mitad de los suecos tienen acceso a una stuga. El fritidshus es la clasificación oficial de una casa de vacaciones de uso recreativo. El arquetipo visual es una casita de dos plantas con fachada de madera pintada en rojo Falun (pigmento derivado de las minas de cobre de Falun, región de Dalarna, en uso desde el siglo XVI por su capacidad protectora contra la humedad) con detalles en blanco, cerca de madera pintada, jardín cuidado, ventanas simétricas. Históricamente eran las viviendas permanentes de quienes vivían en el campo antes de la migración a las ciudades del siglo XX; hoy son hogares de verano. Muchas carecen de electricidad o agua corriente. Techos bajos (la gente era más baja hace un siglo). [Referencia en la novela: los cuatro personajes vieron cientos de stugas desde el tren Mora–Gällivare. La casa abandonada del bosque es la negación de este arquetipo: sin pintura, sin simetría, ennegrecida, entablillada — un anti-stuga.]',
        star: '★ Nevill explota el contraste cultural deliberadamente: la stuga es el símbolo sueco de conexión segura con la naturaleza. Al deformar ese símbolo, convierte lo que debería ser refugio en trampa.'
    },
    {
        id: 'box-bed',
        label: 'Lecho-Caja (Sängkammare / Box Bed)',
        group: 'CONCEPTO',
        type: 'Concepto — Arquitectura Histórica',
        desc: 'Cama-caja de madera construida empotrada en las habitaciones de las casas rurales escandinavas y noruegas más antiguas. Funcionamiento: el interior se rellenaba con heno o paja para dormir; la tapa convertía la estructura en banco durante el día. Hutch los vio por primera vez en el museo de vivienda histórica de Skansen (Estocolmo) y también en Noruega. Eran pequeños porque la gente era significativamente más baja hace un siglo. La superficie exterior funcionaba como mueble multifuncional: banco, caja de almacenamiento. En el desván de la casa abandonada, el "féretro" o "cuna" que sirve de base a la efigie es en realidad uno de estos lechos-caja — pintado o ennegrecido hasta ser casi irreconocible como mueble doméstico. Phil lo confundió con una cama ("I saw it. In the bed."), lo que resultó técnicamente correcto.',
        star: '★ El lecho-caja convertido en trono para la efigie ocultista es el símbolo más concentrado de la novela hasta aquí: lo doméstico (el mueble donde dormían familias) puesto al servicio de lo ritual (el altar donde "duerme" el ídolo).'
    },
    {
        id: 'rune-carvings',
        label: 'Símbolos Rúnicos Tallados',
        group: 'CONCEPTO',
        type: 'Concepto — Simbolismo Arcano',
        desc: 'Grabados en las vigas del tejado del desván a distintas alturas, tallados profundamente en la madera. Descripción: símbolos infantiloides, círculos, similares a los petroglifos y piedras rúnicas que los cuatro vieron en Gammelstad (iglesia-ciudad medieval en el norte de Suecia, Patrimonio de la Humanidad de la UNESCO). Distribuidos de forma aparentemente aleatoria — algunos en líneas largas como escritura china, otros dispersos. Nevill no los identifica ni decodifica; los personajes tampoco pueden hacerlo. Las runas históricas (Futhark antiguo y sus variantes nórdicas) eran sistema de escritura Y de magia simbólica — una runa podía ser a la vez letra, nombre de fuerza cósmica y talismán. En el contexto de la casa: junto a los cráneos y la efigie sugieren rituales de inscripción o invocación. Su presencia en las vigas del techo (sobre la efigie) podría indicar protección o invocación vertical — llamar a algo desde arriba o contener algo dentro.',
        star: '¿Son los grabados una barrera (para mantener a la efigie contenida) o una invocación (para llamar a la entidad que representa)? La ambigüedad es intencional.'
    },
    {
        id: 'skull-display',
        label: 'Exhibición de Cráneos',
        group: 'CONCEPTO',
        type: 'Concepto — Práctica Ritual',
        desc: 'Cráneos de animales fijados con clavos oxidados en las paredes de madera de la planta baja. Espectro de tamaños: pájaros pequeños, ardillas, armiños (los más pequeños, moteados), hasta lince, ciervo y alce (la mayoría caídos y rotos en el suelo, uno o dos todavía colgando junto al techo bajo). La exhibición de cráneos en paredes es práctica documentada en tradiciones europeas precristianas y en el contexto del folclore nórdico. Función posible: apotropaica (protección frente a espíritus malignos), votiva (ofrenda al espíritu del animal cazado), delimitación de territorio sagrado, o pura acumulación ritual compulsiva. La mezcla de pequeños y grandes sugiere una práctica sostenida en el tiempo, no un evento único.',
        star: ''
    },
    {
        id: 'crucifix-display',
        label: 'Crucifijos de Ramitas',
        group: 'CONCEPTO',
        type: 'Concepto — Sincretismo Ritual',
        desc: 'Al menos una docena de cruces hechas a mano con manojos de ramitas atadas con hilo. La mayoría ladeadas o colgando boca abajo. Hutch los llama "evil Christian shit." El cruce más significativo: una cruz colgada al revés puede significar (a) simple deterioro y caída parcial, (b) la Cruz de San Pedro (símbolo cristiano de humildad), o (c) en interpretación ocultista/satánica posterior al siglo XIX, inversión deliberada del símbolo cristiano. En el contexto del conjunto (Cabra de Mendes arriba + cruces abajo), Hutch concluye que los habitantes mezclaban marcos simbólicos: "crosses on the walls downstairs and a bloody goat in the loft — mixing metaphors. Lunacy. Swedish lunacy." Posibilidad alternativa: las cruces eran originalmente de protección cristiana, y la efigie fue instalada después por un ocupante diferente — o los mismos moradores combinaban fe cristiana con prácticas paganas locales, lo cual es documentado en el Norrland (norte de Suecia) hasta el siglo XX.',
        star: '★ La coexistencia de símbolos no es necesariamente "locura" — el sincretismo religioso en comunidades rurales del norte de Europa es históricamente común. La lectura de Hutch como "lunacy" puede estar equivocada y revelarse peligrosa.'
    },
    {
        id: 'the-forest',
        label: 'El Bosque — Entidad Activa',
        group: 'CONCEPTO',
        type: 'Concepto — Entorno/Antagonista',
        desc: 'El bosque virgen del Parque Nacional de Gällivare (Norrbotten, Suecia) como personaje activo de la novela. Características físicas: ~27.000 km² de municipio; el tramo que cruzan lleva al menos 5 km sin ningún sendero; árboles prehistóricos cubiertos de líquenes resbaladizos; sotobosque denso de zarzas, raíces, ramas bajas y ortigas; dosel que bloquea casi toda la luz; el otoño tardío ha convertido la caída de ramas en algo casi violento. Comportamiento narrativo: el bosque "los lleva" — intentan avanzar sureste pero la vegetación solo permite moverse noroeste. Hutch lo reconoce: "The forest was leading them." Sin olor de la carcasa = matanza reciente y el autor del crimen está cerca. La oscuridad del bosque deja "una mancha" en los pensamientos de Luke, tiñendo cada percepción. Luke siente instintivamente que "this was never a place for a man to be, ever." El ruido de madera rompiéndose que escucha Luke (ver nodo sound-in-trees) tiene origen en este espacio. [Nota literaria: Nevill cita a Algernon Blackwood al inicio — "The Gods are here, if they are anywhere at all in the world" — cuento The Willows (1907). Blackwood fue pionero del horror cósmico de la naturaleza como fuerza inhumana, y The Ritual opera en esa misma tradición.]',
        star: '★★★ El bosque NO es un escenario pasivo. Nevill lo construye con agencia narrativa desde el capítulo 3. Si algo vive en él y generó la casa-templo, llevan en su territorio desde que entraron.'
    },
    {
        id: 'animal-sacrifice',
        label: 'Sacrificio Animal',
        group: 'CONCEPTO',
        type: 'Concepto — Práctica Ritual',
        desc: 'Huesos de animales pequeños esparcidos alrededor del lecho-caja de la efigie en el desván. Identificados provisionalmente como conejos y aves grandes con alas rotas y cráneos de papel. Algunos todavía cubiertos de un pergamino gris sin pelo — piel seca como el papel, sin carne visible. El patrón sugiere que los animales fueron colocados alrededor de la carcasa central (la efigie) tras consumir su carne o dejar que se descompusiera. El sacrificio animal en contextos paganos nórdicos (blót) era ofrenda ritual a divinidades — el animal ofrecido compartía sus propiedades espirituales con la entidad invocada. Aquí el sacrificio rodea la efigie como si la estuviera alimentando. Combinado con la carcasa del prólogo (ver nodo prologue-carcass), establece un patrón: algo en este territorio mata animales de tamaño significativo y los exhibe de formas ritualmente organizadas.',
        star: ''
    },

    // ══════════════════════════════════════════════════════════════
    // LUGARES
    // ══════════════════════════════════════════════════════════════
    {
        id: 'laponia-sueca',
        label: 'Laponia Sueca — Norrbotten',
        group: 'LUGAR',
        type: 'Lugar — Territorio',
        desc: 'Municipio de Gällivare, condado de Norrbotten, Suecia. Situado en el norte del país, por encima del Círculo Polar Ártico. El municipio mide ~27.000 km² — la mayoría bosque virgen e intocado. La excursión de los cuatro amigos transcurre en septiembre, tras el verano más lluvioso desde que existen registros en Suecia. El otoño llegó tarde: el bosque todavía está arrojando sus partes muertas. Ciudad de referencia para transporte: Gällivare. Llegaron en tren desde Mora (sur de Suecia) pasando por Jokkmokk. Planeaban un circuito de tres días: sendero Sörstubba → Porjus → retorno. Estado actual (cap. 10): abandonaron el sendero Sörstubba al mediodía del día 2, están dentro del bosque sin poder salir, nadie sabe que cambiaron de ruta.',
        star: ''
    },
    {
        id: 'el-bosque-loc',
        label: 'El Bosque — Localización',
        group: 'LUGAR',
        type: 'Lugar — Bosque',
        desc: 'El bosque virgen entre el sendero Sörstubba (abandonado al mediodía del día 2) y el Río Stora Luleälven (destino no alcanzado). Parque Nacional — "completely untampered with. Virgin forest." A unos 5+ km del último sendero oficial. Nadie en la oficina medioambiental de Porjus sabe que los cuatro están aquí (Hutch nunca llamó). Sin senderos marcados. Zonas de pantano señalizadas en el mapa que Hutch prometió evitar. El bosque actúa como agente direccional activo (ver nodo the-forest). La casa abandonada está en un claro dentro del bosque, a 4 km al este del árbol con la carcasa (ver nodo prologue-carcass). Estado actual: están dentro, con tormenta encima. La temperatura bajará drásticamente durante la noche.',
        star: ''
    },
    {
        id: 'la-casa',
        label: 'La Casa Abandonada',
        group: 'LUGAR',
        type: 'Lugar — Edificio / Templo',
        desc: 'Casa de campo oscura y hundida al fondo de un patio cubierto de ortigas, al final de un sendero estrecho. Dos plantas. Exterior: paredes abultadas y ennegrecidas (¿incendio antiguo?), tejas desprendidas, tablones sueltos junto a los cimientos, ventanas entablilladas. Sin color, sin simetría, sin ninguna propiedad atractiva. Interior planta baja (ver nodo house-interior): cráneos, crucifijos, estufa, mesa, taburete, lámparas de aceite. Anexo con herramientas (guadaña). Interior planta alta (ver nodo goat-effigy-discovered): desván con vigas bajas, símbolos rúnicos tallados, lecho-caja con la efigie de la Cabra de Mendes, huesos de animales sacrificados. Hutch estima que puede tener ~100 años. Estado actual: los cuatro están instalados aquí para pasar la noche — sin otra opción con la tormenta. La casa cruje como un barco de madera atrapado en el hielo. Phil afirma que la estructura no es segura. Distancia: 4 km al este de la carcasa en el árbol.',
        star: '★★ La casa es el escenario del descubrimiento central y probablemente el escenario de lo que viene. Su posición exacta en el territorio — 4 km del árbol con la carcasa — no es casual. Quien construyó el templo interior conocía bien ese bosque.'
    },
    {
        id: 'skaite',
        label: 'Skaite — Cabañas Turísticas',
        group: 'LUGAR',
        type: 'Lugar — Destino No Alcanzado',
        desc: 'Cabañas turísticas a orillas del Río Stora Luleälven, aguas abajo. Destino alternativo de emergencia que Hutch propone cuando abandona el plan de llegar a Porjus. Incluye fuego, calor y posiblemente compañía ("Dom\'s Jack Daniel\'s before an open fire"). Accesible siguiendo el sendero fluvial hacia el este desde la orilla del Stora Luleälven. Nunca alcanzado: el grupo no encontró el río. Estado actual: ignorada su localización y distancia real desde la posición actual del grupo.',
        star: ''
    },
    {
        id: 'gammelstad',
        label: 'Gammelstad',
        group: 'LUGAR',
        type: 'Lugar — Referencia Cultural',
        desc: 'Ciudad-iglesia medieval en el norte de Suecia, Patrimonio de la Humanidad de la UNESCO. Los cuatro la vieron en algún momento del viaje y encontraron allí piedras rúnicas. Hutch compara los símbolos tallados en las vigas del desván con las inscripciones rúnicas que vieron en Gammelstad: "like on the rune stones they had seen in Gammelstad." La conexión es visual — no confirma que sean la misma tradición.',
        star: ''
    },
    {
        id: 'skansen',
        label: 'Skansen — Museo al Aire Libre',
        group: 'LUGAR',
        type: 'Lugar — Referencia Cultural',
        desc: 'Museo al aire libre de arquitectura histórica sueca en Estocolmo. Hutch lo visitó en su primer viaje a Suecia. Allí vio los lechos-caja históricos (ver nodo box-bed) por primera vez — también los vio en Noruega. Ese conocimiento previo le permite identificar la estructura de madera del desván no como un féretro, sino como un lecho-caja tradicional: "I\'ve seen them in the housing museum at Skansen." Sin ese dato, el grupo habría asumido que la caja era literalmente un ataúd.',
        star: ''
    },

    // ══════════════════════════════════════════════════════════════
    // TRAMAS ABIERTAS
    // ══════════════════════════════════════════════════════════════
    {
        id: 'trama-quien-cuelga-el-animal',
        label: '¿Qué Colgó el Animal?',
        group: 'TRAMA',
        type: 'Trama — Abierta',
        desc: 'La carcasa del prólogo nunca se identifica con certeza ni en cuanto al animal (alce o ciervo, por tamaño) ni en cuanto al autor del crimen. Hipótesis planteadas por los personajes: (1) Cazador — Hutch descarta esto: la caza está prohibida en el Parque Nacional. (2) Granjero — Hutch descarta: no hay nada cultivado en todo el parque. (3) Guardabosques — Phil lo sugiere; Hutch dice que probablemente son los primeros humanos en pasar por ese punto en mucho tiempo. (4) Lobo — Luke sugiere que un lobo mató al animal; luego añade que "algo lo puso en el árbol" para protegerlo de carroñeros en el suelo (conducta documentada en pumas y leopardos, no en lobos). (5) Oso — Luke menciona esta posibilidad; Hutch pregunta si los osos de Suecia son lo suficientemente grandes. (6) Un hombre — planteado como posibilidad más perturbadora aún que un animal. Estado al final del cap. 10: sin resolver. El ruido escuchado por Luke (ver nodo sound-in-trees) y la efigie del desván añaden contexto sin dar respuesta.',
        star: '★★★ La respuesta correcta importa menos que la implicación de cualquier respuesta posible: si fue un animal, es uno de una fuerza descomunal que actúa con intencionalidad. Si fue un hombre, alguien vive en este bosque y los vio entrar.'
    },
    {
        id: 'trama-culto-activo',
        label: '¿El Culto Sigue Activo?',
        group: 'TRAMA',
        type: 'Trama — Abierta',
        desc: 'La casa y su contenido son claramente el resultado de una práctica religiosa o ritual sostenida. Hutch la data en ~100 años. Pero: (1) el animal del prólogo es una matanza FRESCA — sin olor, reciente. (2) El sendero que llevó a la casa fue hecho por alguien, y ese alguien iba "a algún lugar que valía la pena ir." (3) Los símbolos rúnicos del desván están tallados a distintas alturas y en momentos aparentemente distintos — sugieren uso prolongado y repetido, no un único evento pasado. Preguntas sin resolver: ¿quién construyó el templo? ¿Los actuales habitantes del bosque (si los hay) lo conocen? ¿La matanza del prólogo es parte del mismo culto o algo diferente y más reciente?',
        star: '★★★ Si alguien sigue usando ese lugar, los cuatro durmiendo dentro no son simplemente "intrusos en propiedad privada" — son profanadores de un espacio sagrado activo.'
    },
    {
        id: 'trama-supervivencia',
        label: 'Supervivencia — ¿Cómo Salen?',
        group: 'TRAMA',
        type: 'Trama — Abierta',
        desc: 'Al final del capítulo 10, los cuatro amigos están: (1) completamente perdidos — no saben exactamente dónde están en el mapa; (2) sin que nadie en el exterior sepa que cambiaron de ruta; (3) con Dom incapacitado de caminar con eficacia y Phil físicamente al límite; (4) dentro de una casa potencialmente conectada con el culto responsable del animal en el árbol; (5) con algo desconocido en el bosque (ver nodo sound-in-trees) cuya naturaleza y distancia son desconocidas. La tormenta elimina la posibilidad de moverse esa noche. Cuando amanezca, ¿en qué dirección salen? ¿Qué habrá pasado durante la noche?',
        star: ''
    },
];
