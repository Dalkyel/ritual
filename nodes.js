// THE RITUAL — Adam Nevill | NODOS — Prólogo–Cap.20

const nodes = [
    {
        id: `root`,
        label: `THE RITUAL`,
        group: `CENTER`,
        type: `Root`,
        desc: `Mapa mental de The Ritual (Adam Nevill). Cuatro amigos perdidos en un bosque virgen de Laponia sueca. Lo que empieza como una excursión mal planificada se convierte en un descenso hacia el terror.`,
        star: ``
    },
    {
        id: `cat-personajes`,
        label: `Personajes`,
        group: `CAT`,
        type: `Categoría`,
        desc: `Personajes principales de The Ritual.`,
        star: ``
    },
    {
        id: `cat-eventos`,
        label: `Eventos`,
        group: `CAT`,
        type: `Categoría`,
        desc: `Secuencia narrativa de eventos clave, caps. Prólogo–10.`,
        star: ``
    },
    {
        id: `cat-concepto`,
        label: `Conceptos`,
        group: `CAT`,
        type: `Categoría`,
        desc: `Conceptos ocultistas, culturales y ambientales.`,
        star: ``
    },
    {
        id: `cat-lugar`,
        label: `Lugares`,
        group: `CAT`,
        type: `Categoría`,
        desc: `Localizaciones de la novela.`,
        star: ``
    },
    {
        id: `cat-trama`,
        label: `Tramas Abiertas`,
        group: `CAT`,
        type: `Categoría`,
        desc: `Hilos narrativos sin resolver al final del capítulo 10.`,
        star: ``
    },
    {
        id: `hutch`,
        label: `Hutch`,
        group: `PERSONAJE`,
        type: `Personaje — Líder`,
        desc: `Organizador de la excursión. Yorkshire. El más en forma del grupo: escalada, buceo en pecios del Mar del Norte, mountain-bike (clasificado nacional en la Masters league), maratón de París el año anterior. Lleva la guía, el mapa y la brújula; toma todas las decisiones de ruta. Carismático: mantiene la cohesión del grupo con humor incluso bajo presión extrema. Casado (la boda fue cuando nació la idea de este viaje). Amigo de infancia de los cuatro; más cercano a Dom en la actualidad, comparten tienda.

Estado tras caps. 1–10: dentro de la casa abandonada, acaba de fotografiar la efigie de la Cabra de Mendes (ver nodo goat-effigy-discovered). Identifica la efigie y el lecho-caja histórico. Primera fisura real en su compostura.

Caps. 11–20: Sufre un episodio de sonambulismo durante la noche en la casa — Luke lo encuentra arrodillado en el desván, en ropa interior, llorando con el regazo mojado, frente a la efigie (ver nodo night-terrors). El contenido del sueño (detallado en cap. 18): dos figuras viejas con dientes sucios le dijeron "Don't keep him waiting. Your clothes are in the fire." Subió como un niño desnudo y aterrorizado; huesos crujiendo bajo los pies descalzos; olor a estiércol y azufre; las pezuñas de la criatura golpeando la caja con emoción creciente; una ranura circular lisa en el frente para apoyar el cuello. Luke lo despertó antes del final. Las manos todavía le tiemblan horas después. Identifica las runas talladas en los pinos escoceses que rodean la casa en círculo (ver nodo runes-on-trees-discovery). Descubre en el cap. 20 que la brújula marca noroeste cuando deberían ir suroeste — el bosque los ha desviado de nuevo (ver nodo compass-deviation-ch20). Referencias: (ver nodo decision-new-route), (ver nodo prologue-carcass), (ver nodo house-found), (ver nodo goat-effigy-discovered), (ver nodo camp-night-ch11), (ver nodo morning-escape-house).`,
        star: `★★ El sonambulismo de Hutch es la primera vez que el bosque actúa directamente sobre él. Su racionalismo — la herramienta que sostiene al grupo — es lo que la efigie ataca primero. Sin Hutch funcional, el grupo no tiene dirección.`
    },
    {
        id: `luke`,
        label: `Luke`,
        group: `PERSONAJE`,
        type: `Personaje — Sensible/Introspectivo`,
        desc: `Rubio, facciones cuadradas, barba de varios días, cejas rubias. El más delgado y observador del grupo. Fuma cigarrillos Camel con encendedor Zippo. Lleva una navaja comprada en la tienda de aventura de Estocolmo. Trabaja en el gimnasio tres veces por semana y corre los fines de semana. Vive en Finsbury Park en un piso compartido que odia. Apenas pudo pagar el viaje; sospecha que Hutch propuso acampar precisamente para que él pudiera permitírselo. Soltero; Dom y Phil se burlan de sus salidas con chicas.

Estado tras caps. 1–10: en el desván junto a Hutch, contemplando la efigie. La presencia del lugar le produce una sensación física de terror existencial.

Caps. 11–20: Único que no sale de su saco durante la noche — tuvo una pesadilla de caza, no de ritual (ver nodo night-terrors). Rescató a los otros tres: primero a Hutch en el desván, luego localizó a Dom en el prado y a Phil en la despensa. Observaciones del cap. 11: sospecha que Dom tiene problemas matrimoniales graves — Gayle no fue mencionada ni una vez en todo el viaje; observa que Phil está claramente miserable y atribuye la causa a Michelle, su esposa. Secreto: Luke se acostó con Michelle en la Easter Ball hace 16 años, antes de que Phil la conociera — fue él quien los presentó. Actualmente explora solo por delante del grupo (ver nodo luke-scouts-ahead). Contempla ir a buscar ayuda en solitario si el bosque no abre pronto. Descubre una piedra de granito cubierta de hiedra al final del cap. 19 (ver nodo standing-stone-found). Referencias: (ver nodo prologue-carcass), (ver nodo sound-in-trees), (ver nodo house-reluctance), (ver nodo goat-effigy-discovered), (ver nodo night-terrors).`,
        star: `★★★ Luke es el sensor emocional del texto: el único que escucha, el único que duda, el único que rescata. Su pesadilla difiere de las de los demás — es una caza, no un ritual. Algo en el bosque lo persigue; a Hutch lo invitó a arrodillarse.`
    },
    {
        id: `dom`,
        label: `Dom`,
        group: `PERSONAJE`,
        type: `Personaje — Escéptico/Gruñón`,
        desc: `Director de marketing en un banco grande. 34 años; su cara aparenta cincuenta. Cintura de 46 pulgadas. Ex-lanzador de cricket rápido que casi llegó a county cricket, ex-viajero por Sudamérica — ahora casado con tres hijos. El hijo menor tiene problemas (no especificados). La rodilla izquierda inflamada como un balón de rugby desde el final del día 2; camina apoyándose en Hutch. Lenguaje violento pero sin odio real — familiaridad con Hutch expresada en insultos afectuosos. Lleva el Jack Daniel's de la expedición.

Estado tras caps. 1–10: instalado en la planta baja de la casa abandonada, esperando que Hutch averigüe qué hay arriba.

Caps. 11–20: Revelaciones del cap. 11 (por observación de Luke): poniéndose gris rápidamente, ojeras profundas, no ha mencionado a su esposa Gayle ni una vez en todo el viaje; Luke sospecha problemas matrimoniales graves. Bebe hasta el colapso en cualquier oportunidad (boda de Hutch, Estocolmo, Gällivare antes del inicio, la noche en la casa). Durante la noche fue encontrado fuera de la casa, arrodillado en la hierba húmeda del prado, en ropa interior y camiseta, mirando los árboles con ojos vidriosos (ver nodo night-terrors). Sus palabras al despertar parcialmente: "It's going to put us up there, in the trees." Estado actual: apoyándose en Hutch para caminar. Referencias: (ver nodo house-found), (ver nodo prologue-carcass), (ver nodo night-terrors).`,
        star: `★ Las palabras de Dom — "It's going to put us up there, in the trees" — son la única referencia explícita de intención por parte de la entidad. ¿Las trajo de un sueño o vio algo real en el bosque?`
    },
    {
        id: `phil`,
        label: `Phil`,
        group: `PERSONAJE`,
        type: `Personaje — Agotado/En Shock`,
        desc: `Corpulento, cara redonda y rojiza, hombros redondeados. Lleva vaqueros en una excursión de tres días bajo la lluvia — exactamente lo que Hutch le pidió que no hiciera en Kiruna. Asma (usa inhalador). Ampollas en los talones convertidas en carne viva el primer día. Promotor inmobiliario exitoso en el West London. Casado con Michelle (alta manutención, trastornos alimentarios, violentamente celosa). Dos hijas, casa en Wimbledon, apartamento en Chipre. Michelle no tolera a Luke — Phil ha asumido parte de ese desdén. Luke se acostó con Michelle en la Easter Ball hace 16 años, antes de que Phil la conociera.

Estado tras caps. 1–10: en la planta baja, sentado en el suelo tras bajar corriendo las escaleras en estado de pánico. Vio la efigie sin saber qué era.

Caps. 11–20: Durante la noche fue encontrado desnudo en la despensa de la casa, acobardado en un rincón, mirando algo que no estaba allí — ligeramente por encima y detrás de Hutch y Luke. Brazos levantados en gesto indeciso de defensa. Labios temblando. Se había orinado encima. Hutch lo sacó de la mano como a un niño. Revivió al aire libre con tres sollozos poderosos (ver nodo night-terrors). Fue el primero en notar las marcas rúnicas talladas en los pinos escoceses alrededor de la casa (ver nodo runes-on-trees-discovery). Estado actual: mayormente silencioso, posiblemente todavía en shock. Referencias: (ver nodo house-entry), (ver nodo phil-upstairs-scare), (ver nodo night-terrors).`,
        star: `★ La experiencia de Phil en la despensa es la más perturbadora porque nunca se describe qué vio — solo su reacción de terror absoluto ante algo que Hutch y Luke no pueden detectar.`
    },
    {
        id: `prologue-carcass`,
        label: `Prólogo — Animal en el Árbol`,
        group: `EVENTO`,
        type: `Evento — Incidente Fundacional`,
        desc: `Los cuatro amigos tropiezan simultáneamente con una carcasa colgada en un árbol, segundo día de la excursión, después de un día completo de lluvia intensa y pérdida progresiva de orientación. La criatura cuelga entre las ramas de un abeto a altura inaccesible para un hombre erguido. Detalles: caja torácica grande de la que cuelgan vísceras azuladas; la piel extendida sobre ramas adyacentes, perforada pero tensa en algunos puntos; el centro arrugado sugiere que la piel fue arrancada del dorso de un solo tirón rápido; mandíbula ósea con dientes visibles; un ojo tan grande como una bola de billar, opaco. Sin olor — muerte reciente, "una matanza fresca." Reacciones: Hutch queda pálido y mudo (Hutch siempre tiene respuestas — esta es la primera vez que no). Phil tiembla al hablar. Dom pregunta por qué alguien la pondría ahí arriba. Luke no dice nada. El grupo abandona el lugar a paso acelerado, hablando en voz alta para disipar el miedo. Consecuencia narrativa: la sola existencia de esta matanza — a una altura que requiere fuerza descomunal o una criatura muy grande, en bosque virgen sin cazadores — establece desde el inicio que hay algo en ese bosque que no pertenece al mundo ordinario.`,
        star: `★★★ Nevill coloca este evento en el Prólogo para establecer la regla del juego antes del capítulo 1: el bosque ya ha matado. La falta de olor confirma que sea lo que sea, está CERCA. El misterio no se resolverá pronto — el animal nunca se identifica con certeza.`
    },
    {
        id: `decision-new-route`,
        label: `Decisión — Nuevo Camino por el Bosque`,
        group: `EVENTO`,
        type: `Evento — Punto de No Retorno`,
        desc: `Al mediodía del segundo día, Hutch para y llama a Luke aparte. Dom y Phil están agotados: la rodilla de Dom empeoró y el pie de Phil es carne viva. Hutch evalúa: no llegarán a Porjus. Propone atajo: abandonar el sendero Sörstubba hacia el sureste cruzando una franja estrecha del bosque nacional, salir al Río Stora Luleälven al anochecer, seguir el río aguas abajo hasta las cabañas turísticas de Skaite. "Se supone que es solo un par de horas por la franja más estrecha." Luke plantea objeciones concretas: el terreno forestal es desconocido (off-piste), hay zonas pantanosas marcadas en el mapa, nadie sabe que van allí (la oficina medioambiental de Porjus estaba cerrada y Hutch no llamó). Hutch las descarta: el Parque Nacional es terreno virgen pero seguro en septiembre, sin nieve ni hielo, nadie llamará su atención. Luke cede: "You're the boss." La decisión es voluntaria pero basada en confianza excesiva — el mapa no puede representar la densidad real del bosque. Consecuencia: cinco horas después están completamente perdidos, sin posibilidad de dar marcha atrás.`,
        star: `★★★ El gran error de Hutch no es atreverse — es no llamar a la oficina medioambiental. Nadie en el mundo sabe que están en ese bosque. Este detalle convierte el olvido burocrático de Hutch en una sentencia de muerte potencial.`
    },
    {
        id: `lost-in-forest`,
        label: `Perdidos en el Bosque`,
        group: `EVENTO`,
        type: `Evento — Descenso`,
        desc: `Cinco horas después de entrar al bosque, los cuatro están completamente desorientados. Hutch consulta el mapa por quinta vez en una hora. El bosque los lleva en dirección noroeste aunque intentan moverse hacia el sureste — solo pueden avanzar donde la vegetación es menos densa, que nunca es en la dirección correcta. Tras cuatro kilómetros de avance en la dirección equivocada, el sentido de orientación de Hutch desaparece. El dosel del bosque es tan denso que bloquea la luz: el techo de ramas crea la ilusión de descender hacia algo que se estrecha. El otoño llegó tarde ese año (el verano más lluvioso desde que existen registros en Suecia) y el bosque está arrojando sus partes muertas con violencia: ramas gigantes bloqueando el paso, raíces que atrapan los pies, zarzas que se meten dentro de las camisas. Los árboles de gran antigüedad están cubiertos de líquenes resbaladizos. Las ramas superiores actúan como embudos concentrando la lluvia en ráfagas heladas del tamaño de canicas. Dom ya no puede doblar la rodilla. Phil tiene asma. Hutch considera dar marcha atrás — pero eso implicaría pasar de noche por el árbol con la carcasa colgada. Resultado: encuentran un sendero estrecho poco antes de las siete de la tarde, que llevan hasta una casa.`,
        star: `★★ La desorientación no es un error técnico de navegación — es el bosque como agente activo. "The forest was leading them." Nevill prepara el terreno para sugerir que la dirección es imposible mantener no porque Hutch sea incompetente, sino porque algo en ese bosque no quiere que salgan.`
    },
    {
        id: `house-found`,
        label: `La Casa Abandonada — Descubierta`,
        group: `EVENTO`,
        type: `Evento — Hallazgo`,
        desc: `Justo antes de las siete de la tarde, los cuatro siguen un sendero estrecho que aparece inesperadamente en el bosque. El sendero lleva a una casa. Detalle del exterior: se hunde hacia la parte trasera de un patio de cultivo cubierto de ortigas y hierbas empapadas hasta la altura de la rodilla. Construcción de dos plantas. Las paredes abultadas están ennegrecidas como si hubiera habido un incendio y nadie las hubiera atendido después. Las tejas se han desprendido. Las ventanas siguen entablilladas contra inviernos que pasaron hace tiempo. Ningún ángulo recto visible — todo cede y se comba. No capta ni refleja la luz que cae en el claro: desde donde está Luke, "suggests that the interior would be just as wet and cold as the darkening wood." Contraste explícito con las típicas stugas suecas que los cuatro vieron desde el tren (ver nodo stuga-fritidshus): sin paredes rojas, sin cerca blanca, sin jardín cuidado, sin nada acogedor. Phil lo ve y dice "It's empty. Let's get in there." Luke tiene un mal presentimiento y propone seguir avanzando — Dom y Phil lo ignoran. Hutch toma la decisión pragmática: hay chimenea, parece sólida, necesitan secarse.`,
        star: `★★ La casa como inversión de lo familiar. Nevill hace que los cuatro reconozcan el arquetipo (stuga = seguridad) antes de revelar que esta es su negación exacta. El hecho de que Phil insista en entrar mientras Luke duda establece la jerarquía perceptiva del relato.`
    },
    {
        id: `sound-in-trees`,
        label: `El Ruido en los Árboles`,
        group: `EVENTO`,
        type: `Evento — Señal Ignorada`,
        desc: `Mientras los otros ya están dentro de la casa, Luke permanece en el patio bajo la lluvia, fumando. Escucha un estallido tremendo proveniente del bosque: madera fresca y sólida quebrándose, como si una rama gruesa — "like an arm from a torso" — fuera arrancada de un tronco oscurecido. El eco se pierde adentrándose en el bosque. Luke se queda paralizado: pulso desbocado, desorientado por el miedo, "imagining a terrific rage and strength, a terrible intent, out there." Casi acepta la realidad de lo que imagina antes de que el trueno cubra el sonido y Hutch lo llame desde dentro. Luke descarta la experiencia como alucinación de agotamiento ("Exhaustion overwhelmed you. Played tricks with your mind"). Informa a Hutch en la puerta: "The trees. In the trees. Did you not hear it?" Hutch lo atribuye al trueno y al aguacero. Nadie le cree ni lo investiga. Dom le dice directamente que no empiece "con esa mierda." Consecuencia: el ruido queda sin explicar. Justo 4 kilómetros al este del árbol con la carcasa. Luke es el único testigo.`,
        star: `★★★ Este es el momento pivote que Nevill usa para separar la percepción de Luke de la del grupo. El ruido no es subjetivo — está descrito con detalle físico preciso. La decisión de los personajes de no investigarlo es el error que la novela cobrará caro.`
    },
    {
        id: `house-entry`,
        label: `Entrada a la Casa`,
        group: `EVENTO`,
        type: `Evento — Intrusión`,
        desc: `Hutch revienta la puerta a patadas alrededor del pomo de hierro negro. Luke es el último en entrar, tras el altercado verbal con Dom ("arrested development"). Mientras los otros entran, Luke escucha el ruido en los árboles (ver nodo sound-in-trees) y se queda paralizado en el patio. Cuando finalmente cruza el umbral, Dom ya ha reclamado el taburete, Phil examina la mesa y Hutch ataca la estufa de hierro con su navaja de Estocolmo. Primer impacto visual al entrar: calaveras en las paredes, crucifijos torcidos. La casa no tiene cerradura pero la puerta estaba atascada. La puerta en sí es tan negra que no tiene definición dentro del frente de la casa. Acto de forzar la puerta como vandalismo que molesta a Luke — "breaking into private property." La lluvia y el ruido de los ratones bajo el suelo completan la bienvenida.`,
        star: ``
    },
    {
        id: `house-interior`,
        label: `Interior de la Casa — Planta Baja`,
        group: `EVENTO`,
        type: `Evento — Exploración`,
        desc: `La planta baja consiste en una habitación grande. Inventario completo bajo la luz amarilla de sus linternas: (1) Calaveras: desde pájaros pequeños hasta ardillas y armiños, fijadas con clavos oxidados en las paredes de madera. Cráneos más grandes de lince, ciervo y alce — la mayoría caídos al suelo y rotos, uno o dos todavía colgando junto al techo bajo. (2) Crucifijos: al menos una docena hechos a mano con manojos de ramitas atadas con hilo, mayormente ladeados o colgando boca abajo. (3) Mobiliario: una mesa de caballete que cruje bajo la presión, un taburete de madera basta junto a la cabecera, una estufa de hierro oxidada en el hogar (atascada pero relativamente seca). (4) Lámparas: dos lámparas de aceite vacías y corroídas que chirrían en sus ganchos al ser tocadas. (5) Anexo lateral con herramientas — Hutch encuentra una guadaña de aspecto amenazante. (6) Bajo el suelo: ratones moviéndose con una confianza y agresividad inusuales. Phil señala los crucifijos: "You'd think they'd make you feel safe. But they don't." Luke, el más alto, se golpea la cabeza con una de las lámparas de aceite.`,
        star: `★★ La mezcla de símbolos cristianos (crucifijos) y práctica pagana (cráneos) es el primer indicio del carácter sincrético del culto que habitó este lugar. Hutch lo nombrará en el desván: "crosses on the walls downstairs and a bloody goat in the loft — mixing metaphors."`
    },
    {
        id: `phil-upstairs-scare`,
        label: `Phil Sube Solo — El Pánico`,
        group: `EVENTO`,
        type: `Evento — Primer Contacto`,
        desc: `Phil decide subir al piso de arriba para "ver las habitaciones" (quiere un lugar donde dormir). Sube mientras los otros tres están en la planta baja: Hutch ataca la estufa, Dom se quita las botas, Luke observa la lluvia por la puerta. Solo escuchan sus pasos en las escaleras. Menos de un minuto después, Phil baja tan rápido que suena como una caída: golpes de pies, jadeos asmáticos. Llega al último escalón, cae de rodillas, gira sobre su trasero y se arrastra alejándose de las escaleras. Los tres linterna en mano se giran. Phil intenta gritar pero sale como un aullido. Dice: "Something's up there!" y luego: "I don't know! I saw it. In the bed." Descripción de lo que vio: "I saw some eyes in my torchlight. And something black. Something big. But it didn't move. It just sat there and stared at me." Hutch intenta racionalizar: sin huellas de entrada, lleno de polvo, los ratones se escucharían mucho antes que cualquier animal. Debate breve: ¿volver al bosque bajo la tormenta? Imposible — temperatura bajará en picado. Decisión: Hutch y Luke suben juntos, navaja en mano.`,
        star: `★★ La reacción física de Phil (caída, arrastre en el suelo) sin que Nevill describa aún qué vio exactamente es técnica clásica de horror — el miedo del personaje testigo precede a la revelación y la amplifica. "It was sitting up. Staring at me" es todo lo que sabemos.`
    },
    {
        id: `goat-effigy-discovered`,
        label: `La Efigie de la Cabra de Mendes`,
        group: `EVENTO`,
        type: `Evento — Revelación Central`,
        desc: `Hutch sube primero con la navaja, Luke detrás. La escalera estrecha cruje y truena bajo cada paso — no hay forma de hacerlo en silencio. El desván es bajo y oscuro; la lluvia penetra por las vigas. Al fondo del desván, entre los dos lados del tejado a dos aguas, la silueta. Descripción completa de la efigie: (1) Una cabra disecada, sentada erguida e inmóvil en un pequeño féretro de madera del tamaño de una cuna infantil — pintado o ennegrecido por la edad. El pelo negro brilla donde la lluvia lo ha humedecido. (2) Cuernos largos y gruesos, de color marrón hueso, que brotan sobre dos cuencas oculares oscuras. (3) Patas traseras finas que terminan en pezuñas, dobladas en las rodillas y posadas sobre los bordes del féretro "como si la cosa estuviera a punto de levantarse." (4) Labios negros retraídos sobre dientes amarillos largos — una mueca permanente. Ollares que parecen todavía húmedos. (5) Tetinas rosas que parten el pelo a lo largo del pecho — el detalle más inquietante para Luke. (6) Las patas delanteras, o brazos, alzadas a altura de hombros y dobladas por el codo, con las palmas hacia arriba — gesto de "Levantaos" o de quien ha soltado objetos que ya no sostiene. Las manos son HUMANAS: momificadas, ennegrecidas, cosidas al cuerpo de la cabra. Hutch las examina de cerca. (7) En el suelo alrededor del féretro: huesos de animales pequeños (conejos, aves grandes con alas rotas y cráneos de papel), algunos todavía cubiertos de un pergamino gris sin pelo. (8) En las vigas del tejado: símbolos tallados a fondo en la madera, algunos similares a piedras rúnicas vistas en Gammelstad, dispuestos aleatoriamente a distintas alturas y en líneas largas. El féretro resulta ser un lecho-caja tradicional escandinavo (ver nodo box-bed). Hutch lo identifica: "The Goat of Mendes" (ver nodo goat-of-mendes). La conclusión de Hutch sobre el lugar: algún tipo de templo, ofrenda y sacrificio — "just as mad as hatters." La explicación que ofrece: "It's the darkness and the long nights. Send anyone mad." Hutch fotografía la escena antes de que bajen.`,
        star: `★★★ La efigie es el corazón icónico de los capítulos 1–10: un ídolo pagano con manos humanas cosidas, en una casa de campo sueca del siglo XIX, en medio de un bosque virgen donde algo acaba de matar un alce. Nevill fusiona folclore escandinavo real (lecho-caja, símbolos rúnicos) con iconografía ocultista europea (Baphomet/Cabra de Mendes) para crear algo que no tiene explicación limpia ni histórica ni sobrenatural. La pregunta que queda: ¿está solo la efigie, o el culto sigue activo?`
    },
    {
        id: `camp-night-ch11`,
        label: `Noche en la Casa — Hoguera y Teorías`,
        group: `EVENTO`,
        type: `Evento — Pausa / Revelación de Personajes`,
        desc: `Cap. 11. Última noche completa en la casa abandonada, tras la jornada más exigente hasta ahora. Cena: las cuatro últimas latas de salchichas con alubias y sopa de pollo en polvo con fideos (primera vez que lamen los cuencos), dos barritas de cereales y chocolate cada uno — siguen con hambre. Último trago del Jack Daniel's de Dom, repartido en vasos de plástico; Dom bebe la mayor parte. Hutch empuja la última pata de la silla por la puerta de la estufa; Phil y Dom ya habían roto el taburete como leña, contra la voluntad de Luke. Hutch usa cuatro crucifijos como yesca — Luke no mira para no sentirse cómplice de la profanación.

Revelaciones (observación de Luke): Dom poniéndose gris rápidamente, ojeras profundas, sin mencionar a Gayle en todo el viaje, bebe en cualquier ocasión como método de evasión. Phil completamente dejado — su estilo desapareció pese al dinero; Luke atribuye la causa a Michelle, su esposa. Luke se acostó con Michelle en la Easter Ball hace 16 años — fue él quien los presentó a ambos. Phil nunca ha invitado a Luke a su casa en Wimbledon.

Conversación alrededor del fuego: la discusión sobre el animal en el árbol lleva a Luke a su teoría más articulada: "el bosque hizo que esta gente enloqueciera... no creo que la gente deba venir aquí." Hutch admite, por primera vez sin ironía, que jamás ha visto nada parecido. Luke acuña: "The blasted heath. The cursed wood."

Conversación final en voz baja entre Luke y Hutch: Hutch confiesa que no tiene ningún plan. Ambos de acuerdo en que el lugar seguiría siendo aterrador aunque hiciera sol. Antes de dormir, Luke verbaliza la idea que no puede dejar de pensar: la efigie del desván como representación de lo que colgó la carcasa en el árbol. Phil, aparentemente dormido: "I heard that."`,
        star: `★★ Este capítulo funciona como una pausa de humanidad antes del terror. Nevill usa el calor de la hoguera y el whiskey para revelar los fracasos personales de cada uno — las vidas rotas que hay detrás de la excursión. La ironía es que se sienten, por primera vez en días, relativamente seguros.`
    },
    {
        id: `night-terrors`,
        label: `Pesadillas Simultáneas — La Noche en la Casa`,
        group: `EVENTO`,
        type: `Evento — Sobrenatural / Catalizador`,
        desc: `Caps. 12–15. Durante la noche en la casa, los cuatro amigos sufren experiencias de terror disociativas simultáneas. Ninguno permanece en su saco de dormir hasta el amanecer.

— LUKE (cap. 12): Pesadilla de caza narrada en segunda persona. Colgado entre ramas y zarzas en el bosque completamente oscuro, incapaz de mover las piernas. Una criatura avanza a grandes zancadas: cuernos moteados negros, dientes amarillos para desgarrar, encías de perro negro, un bramido de novillo que sube de octava hasta el "yip yip yip" de la caza solitaria. Luke sabe que vendrán los cuernos primero. Despierta temblando. Tres sacos vacíos a su alrededor. Escucha sollozos desde el piso de arriba.

— HUTCH (cap. 13): Sonámbulo. Luke lo encuentra en el desván, arrodillado en ropa interior, llorando, con el regazo mojado. Contenido del sueño (detallado en cap. 18): dos figuras viejas con dientes sucios le dijeron "Don't keep him waiting. Your clothes are in the fire." Subió como un niño pequeño, desnudo, incapaz de resistirse. En el suelo: huesos crepitando bajo sus pies descalzos. El olor: estiércol, sudor de ganado, azufre. La criatura en la caja: pezuñas negras anchas como las de un caballo golpeando el borde con emoción creciente; una ranura circular lisa en el frente de la caja para apoyar el cuello; cráneos rotos en la paja alrededor de las patas. Hutch se acercó a la ranura. Las pezuñas se elevaron. Luke lo despertó antes.

— DOM (cap. 14): Encontrado fuera de la casa, arrodillado en la hierba húmeda del prado, en ropa interior y camiseta. Cara sin color, labios oscuros, ojos vidriosos. Rastros de lágrimas. Completamente ajeno a Hutch y Luke. Mirando los árboles. Sin moverse. Cuando oye a Hutch, sin girar la cabeza: "It's going to put us up there, in the trees."

— PHIL (cap. 15): Encontrado en la despensa, de pie pero encogido desnudo en un rincón. Ojos fijos en algo que no existe — ligeramente por encima y detrás de los que lo buscan. Brazos levantados en gesto indeciso de defensa inútil. Labios temblando. Olor a orina rancia en la madera húmeda. Hutch lo saca de la mano. Phil revive al aire libre con tres sollozos poderosos, incongruentes para él.`,
        star: `★★★ Cuatro personas, cuatro experiencias distintas pero conectadas por la misma fuente. Luke es cazado. Hutch es convocado como víctima ritual. Dom recibe una advertencia específica sobre el destino del grupo. Phil ve algo que los demás no pueden ver. La simultaneidad descarta el azar y apunta a agencia externa.`
    },
    {
        id: `morning-escape-house`,
        label: `Huida de la Casa — Mañana y Debate de Ruta`,
        group: `EVENTO`,
        type: `Evento — Decisión / Escape`,
        desc: `Caps. 15–17. Amanecer. Se visten con la ropa ahumada y sucia, recogen el equipo. Luke: "I told you it was a bad idea. Who knows what we stirred up." Hutch, en el umbral: "There'll be time to talk about it when we're tear-arsing out of here."

Intento de salida hacia el sur: el bosque es impenetrable en todas las direcciones excepto de vuelta al norte por el antiguo sendero. Dom arranca un sauce enano — la rama lo quema y lo enmantequilla de savia pero no cede. Hutch explica el cinturón boreal conífero (ver nodo boreal-forest): árboles de 500–600 años, nunca talados, la última biodiversidad auténtica de Europa. Dom: "Then why the hell did you bring us in here, if we can't bloody walk through it?" Hutch: "Solo se suponía que íbamos a cruzar una franja estrecha. Estamos aquí por accidente."

Debate de ruta (cap. 17): (A) Retroceder el camino de entrada — dos días completos mínimo, terreno devastador para Dom y Phil. (B) Seguir el sendero hacia el oeste esperando que doble al sur en algún punto. (C) Seguir el sendero hacia el norte — descartado: aleja del borde del bosque. Decisión final de Hutch: opción B. Razonamiento: "Why would you make a track that just endlessly snaked around inside a wood?" Luke objeta: si no lleva a ninguna salida sur, habrán perdido otro día entero en la dirección equivocada. Hutch: "No hay alternativa sensata." Phil, de espaldas a todos mirando la casa: "The last thing we want is to be in here again at night."`,
        star: `★★ La lógica de Hutch es razonable pero descansa sobre una premisa que la novela ya ha cuestionado: que los senderos de este bosque tienen propósito humano ordinario.`
    },
    {
        id: `runes-on-trees-discovery`,
        label: `Runas en los Árboles — Círculo alrededor de la Casa`,
        group: `EVENTO`,
        type: `Evento — Hallazgo / Lore`,
        desc: `Caps. 16–17. Mientras el grupo busca infructuosamente una salida sur, Phil se aleja hacia el lado norte del claro. De espaldas a los demás: "It's on all of the trees. Goes in a circle. Round the house. On the old ones. The ones with the dead branches."

Examen: donde la corteza ha sido rasurada o alisada a la altura de la cintura, hay una serie de marcas talladas profundamente en la madera, oscurecidas por el tiempo pero todavía legibles. Hutch traza el contorno con el dedo. "Runas." Las compara con las piedras rúnicas vistas en Gammelstad (ver nodo gammelstad) y en Skansen y Lund. Luke: "Parece una B. ¿Cuántos años pueden tener los árboles?" Hutch: "Este es un pino escocés. Grande y muerto, pero pueden vivir seiscientos años. Los vikingos usaban las runas hace unos mil años, pero alguien sabía usarlas después de los vikingos también."

Reacción de Phil: "No way. It's all wrong. Wrong." Dom descarta el hallazgo como la última de sus prioridades. La combinación de runas dentro del desván (en vigas, ver nodo rune-carvings) y runas fuera en los árboles formando un círculo completo implica que la casa fue situada dentro de un espacio previamente delimitado y consagrado.`,
        star: `★★★ El círculo de runas en los árboles transforma la casa de un edificio abandonado en el centro geométrico de un recinto ritual trazado sobre el bosque mismo. Quien lo construyó no eligió ese claro por casualidad.`
    },
    {
        id: `two-buildings-found`,
        label: `Dos Edificios Más — Asentamiento Abandonado`,
        group: `EVENTO`,
        type: `Evento — Hallazgo`,
        desc: `Caps. 18–19. Dos horas caminando hacia el oeste por el antiguo sendero, Luke — que va en cabeza — divisa dos edificios oscuros en la maraña del sotobosque. Tablas de madera negras abultadas de humedad, ventanas apenas distinguibles, una sugestión de chimenea de piedra asomando antes de desaparecer entre la vegetación. Entre el sendero y los edificios: un manto impenetrable de ortigas con tallos negros espinosos, seguido de ramas desnudas de abedules y sauces enanos formando un porticullis de veinte metros de ramas entrelazadas.

Dom: "Sigue avanzando. No quiero saber lo que hay dentro." Luke: "Genuinamente prefiero no saberlo." Hutch empuja el pie bajo el helecho y levanta una manta de ramas: surcos de ruedas de carro bajo la maleza, todavía visibles en los bordes del sendero. "Debió de ser un asentamiento abandonado. Este sendero debía de unirlos a la otra casa." No entran. El bosque cae completamente en silencio justo después de que el grupo los sobrepasa (ver nodo forest-silence).`,
        star: `★ El asentamiento amplía la escala del hallazgo. No era la casa de un ermitaño solitario — era una comunidad. La pregunta implícita: ¿qué les pasó?`
    },
    {
        id: `luke-scouts-ahead`,
        label: `Luke Explora en Solitario`,
        group: `EVENTO`,
        type: `Evento — Exploración / Límite Psicológico`,
        desc: `Cap. 19. Para huir del ritmo lento impuesto por Dom y su queja constante, Luke propone ir solo por delante a explorar qué hay más adelante en el sendero. Veinte minutos fuera del alcance auditivo de los demás: el sendero empieza a retorcerse, ya no avanza en línea recta; sube y baja sobre terrenos desiguales con raíces resbaladizas. Un árbol caído cada seis metros. El pecho duele con fuerza — entrena tres veces por semana y corre los fines de semana, pero este terreno no tiene preparación posible.

Rabia contra Hutch: los labios se mueven, dice cosas sobre su mejor amigo que sabe que lo harán sentir frío de culpa después. Luego la rabia se drena y lo deja temblando. La sed: el agua se acabó hace más de una hora. Las cantimploras de los demás también están vacías.

El bosque es todo idéntico: mismos árboles, mismo suelo, sin puntos de referencia. El miedo de haberse salido del sendero y no poder reencontrar a los demás. Contempla internamente la posibilidad de ir a buscar ayuda en solitario — "la hora de la acción drástica." Si Hutch no accede, lo hará igualmente.

Treinta minutos después de perder de vista al grupo, tropieza con algo de granito (ver nodo standing-stone-found).`,
        star: `★★ La soledad de Luke es la primera vez en la novela que un personaje queda completamente aislado del grupo en el bosque. Nevill usa el monólogo interior para mostrar que la racionalidad de Luke también está cediendo — solo que de una forma diferente a la de los demás.`
    },
    {
        id: `standing-stone-found`,
        label: `Piedra Rúnica de Granito — Descubierta`,
        group: `EVENTO`,
        type: `Evento — Hallazgo / Cliffhanger`,
        desc: `Cap. 19, final. Luke, solo y a más de treinta minutos de los demás, tropieza con un plinto de granito cubierto de hiedra. Piedra erguida, oculta por el crecimiento vegetal. La novela corta aquí sin descripción adicional de la piedra ni de la reacción de Luke.

Contexto: la piedra aparece inmediatamente después de que Luke contemple ir en busca de ayuda en solitario — el bosque responde al pensamiento con un hallazgo. La piedra está a distancia considerable de la casa y del asentamiento secundario, pero en la misma dirección del sendero antiguo.`,
        star: `★★★ Nevill cierra el cap. 19 sin describir la piedra. La hiedra implica antigüedad extrema y abandono. En el contexto de todo lo descubierto — casa-templo, runas en árboles, asentamiento, sendero con surcos de carro — la piedra sugiere que el perímetro del recinto ritual es mucho más grande de lo que parecía.`
    },
    {
        id: `compass-deviation-ch20`,
        label: `Desviación de Brújula — El Bosque los Gira de Nuevo`,
        group: `EVENTO`,
        type: `Evento — Obstáculo / Amenaza Creciente`,
        desc: `Cap. 20. Hutch lo nota gradualmente: el bosque ha caído completamente en silencio (ver nodo forest-silence). El sendero parece disolverse en huecos sombríos engañosos: áreas que prometen paso más fácil pero que resultan ser callejones ciegos de zarzas. La luz ha caído — el dosel tan denso que bloquea casi todo. Hutch se preocupa por Luke, que está solo por delante.

Se detiene. Se seca el sudor de los ojos. Saca la brújula. Noroeste. Quiere gritar. Se han desviado de nuevo — esta vez de forma incremental e imperceptible, arrastrados por el peso de Dom apoyado en su lado izquierdo. Están adentrándose en el bosque, no saliendo. "No good." Dom: "What isn't?" Hutch: "This direction." Golpea las manos contra los muslos. "Shit."`,
        star: `★★★ Tercera desviación de brújula del libro — cada vez más perturbadora porque ocurre mientras Hutch cree estar prestando atención. El silencio del bosque como señal previa se introduce aquí como dato concreto, no como percepción subjetiva.`
    },
    {
        id: `goat-of-mendes`,
        label: `Cabra de Mendes (Baphomet)`,
        group: `CONCEPTO`,
        type: `Concepto — Ocultismo`,
        desc: `Símbolo ocultista de origen complejo. La "Cabra de Mendes" como designación específica proviene del ocultista francés del siglo XIX Éliphas Lévi, quien en su obra Dogme et Rituel de la Haute Magie (1854–1856) creó la imagen del "Sabbatical Goat" o Baphomet: una figura andrógina con cabeza de macho cabrío, alas negras, torso humano con pechos, piernas de cabra y un caduceo en el regazo. Los brazos apuntan en direcciones opuestas (derecha arriba, izquierda abajo), con las palabras latinas "SOLVE" y "COAGULA" grabadas — "disuelve y coagula", frase alquímica sobre la transformación espiritual. Lévi equiparó su figura con el dios egipcio de Mendes (la ciudad griega de Djedet), cuyo culto honoraba al dios Banebdjedet — deidad de fertilidad con aspecto de carnero, erróneamente interpretada como cabra por Herodoto. El pentágrama invertido sobre la frente fue añadido después por Stanislas de Guaïta en 1897. En 1966 Anton LaVey adoptó esta imagen como símbolo oficial de la Iglesia de Satán (Sigilo de Baphomet). [Nota: Lévi no concibió el Baphomet como demonio ni como símbolo de mal — lo concibió como representación del equilibrio de opuestos, síntesis del universo. Su lectura satánica es una apropiación posterior.] En la novela: la efigie del desván NO es el Baphomet andrógino de Lévi (no tiene torso humano completo ni alas) sino una cabra real disecada con manos humanas cosidas en posición similar — ídolo artesanal, siniestro por su manufactura física.`,
        star: `★★ La identificación de Hutch es parcialmente correcta (postura, cuernos, gesto de brazos) pero la efigie es más primitiva y más perturbadora que el símbolo ocultista europeo culto. La diferencia importa: Lévi diseñó un símbolo filosófico; quien hizo esta cosa mató animales reales y cosió manos humanas.`
    },
    {
        id: `stuga-fritidshus`,
        label: `Stuga / Fritidshus`,
        group: `CONCEPTO`,
        type: `Concepto — Cultura Sueca`,
        desc: `Stuga (del sueco antiguo stuva, relacionado con el inglés "stove" — originalmente "habitación con fuego"): cabaña o casa de campo pequeña, típicamente de madera. Hay decenas de miles distribuidas por la Suecia rural, especialmente en el norte. Tradición nacional: casi la mitad de los suecos tienen acceso a una stuga. El fritidshus es la clasificación oficial de una casa de vacaciones de uso recreativo. El arquetipo visual es una casita de dos plantas con fachada de madera pintada en rojo Falun (pigmento derivado de las minas de cobre de Falun, región de Dalarna, en uso desde el siglo XVI por su capacidad protectora contra la humedad) con detalles en blanco, cerca de madera pintada, jardín cuidado, ventanas simétricas. Históricamente eran las viviendas permanentes de quienes vivían en el campo antes de la migración a las ciudades del siglo XX; hoy son hogares de verano. Muchas carecen de electricidad o agua corriente. Techos bajos (la gente era más baja hace un siglo). [Referencia en la novela: los cuatro personajes vieron cientos de stugas desde el tren Mora–Gällivare. La casa abandonada del bosque es la negación de este arquetipo: sin pintura, sin simetría, ennegrecida, entablillada — un anti-stuga.]`,
        star: `★ Nevill explota el contraste cultural deliberadamente: la stuga es el símbolo sueco de conexión segura con la naturaleza. Al deformar ese símbolo, convierte lo que debería ser refugio en trampa.`
    },
    {
        id: `box-bed`,
        label: `Lecho-Caja (Sängkammare / Box Bed)`,
        group: `CONCEPTO`,
        type: `Concepto — Arquitectura Histórica`,
        desc: `Cama-caja de madera construida empotrada en las habitaciones de las casas rurales escandinavas y noruegas más antiguas. Funcionamiento: el interior se rellenaba con heno o paja para dormir; la tapa convertía la estructura en banco durante el día. Hutch los vio por primera vez en el museo de vivienda histórica de Skansen (Estocolmo) y también en Noruega. Eran pequeños porque la gente era significativamente más baja hace un siglo. La superficie exterior funcionaba como mueble multifuncional: banco, caja de almacenamiento. En el desván de la casa abandonada, el "féretro" o "cuna" que sirve de base a la efigie es en realidad uno de estos lechos-caja — pintado o ennegrecido hasta ser casi irreconocible como mueble doméstico. Phil lo confundió con una cama ("I saw it. In the bed."), lo que resultó técnicamente correcto.`,
        star: `★ El lecho-caja convertido en trono para la efigie ocultista es el símbolo más concentrado de la novela hasta aquí: lo doméstico (el mueble donde dormían familias) puesto al servicio de lo ritual (el altar donde "duerme" el ídolo).`
    },
    {
        id: `rune-carvings`,
        label: `Símbolos Rúnicos Tallados`,
        group: `CONCEPTO`,
        type: `Concepto — Simbolismo Arcano`,
        desc: `Grabados en las vigas del tejado del desván a distintas alturas, tallados profundamente en la madera. Descripción: símbolos infantiloides, círculos, similares a los petroglifos y piedras rúnicas que los cuatro vieron en Gammelstad (iglesia-ciudad medieval en el norte de Suecia, Patrimonio de la Humanidad de la UNESCO). Distribuidos de forma aparentemente aleatoria — algunos en líneas largas como escritura china, otros dispersos. Nevill no los identifica ni decodifica; los personajes tampoco pueden hacerlo. Las runas históricas (Futhark antiguo y sus variantes nórdicas) eran sistema de escritura Y de magia simbólica — una runa podía ser a la vez letra, nombre de fuerza cósmica y talismán. En el contexto de la casa: junto a los cráneos y la efigie sugieren rituales de inscripción o invocación. Su presencia en las vigas del techo (sobre la efigie) podría indicar protección o invocación vertical — llamar a algo desde arriba o contener algo dentro.`,
        star: `¿Son los grabados una barrera (para mantener a la efigie contenida) o una invocación (para llamar a la entidad que representa)? La ambigüedad es intencional.`
    },
    {
        id: `skull-display`,
        label: `Exhibición de Cráneos`,
        group: `CONCEPTO`,
        type: `Concepto — Práctica Ritual`,
        desc: `Cráneos de animales fijados con clavos oxidados en las paredes de madera de la planta baja. Espectro de tamaños: pájaros pequeños, ardillas, armiños (los más pequeños, moteados), hasta lince, ciervo y alce (la mayoría caídos y rotos en el suelo, uno o dos todavía colgando junto al techo bajo). La exhibición de cráneos en paredes es práctica documentada en tradiciones europeas precristianas y en el contexto del folclore nórdico. Función posible: apotropaica (protección frente a espíritus malignos), votiva (ofrenda al espíritu del animal cazado), delimitación de territorio sagrado, o pura acumulación ritual compulsiva. La mezcla de pequeños y grandes sugiere una práctica sostenida en el tiempo, no un evento único.`,
        star: ``
    },
    {
        id: `crucifix-display`,
        label: `Crucifijos de Ramitas`,
        group: `CONCEPTO`,
        type: `Concepto — Sincretismo Ritual`,
        desc: `Al menos una docena de cruces hechas a mano con manojos de ramitas atadas con hilo. La mayoría ladeadas o colgando boca abajo. Hutch los llama "evil Christian shit." El cruce más significativo: una cruz colgada al revés puede significar (a) simple deterioro y caída parcial, (b) la Cruz de San Pedro (símbolo cristiano de humildad), o (c) en interpretación ocultista/satánica posterior al siglo XIX, inversión deliberada del símbolo cristiano. En el contexto del conjunto (Cabra de Mendes arriba + cruces abajo), Hutch concluye que los habitantes mezclaban marcos simbólicos: "crosses on the walls downstairs and a bloody goat in the loft — mixing metaphors. Lunacy. Swedish lunacy." Posibilidad alternativa: las cruces eran originalmente de protección cristiana, y la efigie fue instalada después por un ocupante diferente — o los mismos moradores combinaban fe cristiana con prácticas paganas locales, lo cual es documentado en el Norrland (norte de Suecia) hasta el siglo XX.`,
        star: `★ La coexistencia de símbolos no es necesariamente "locura" — el sincretismo religioso en comunidades rurales del norte de Europa es históricamente común. La lectura de Hutch como "lunacy" puede estar equivocada y revelarse peligrosa.`
    },
    {
        id: `the-forest`,
        label: `El Bosque — Entidad Activa`,
        group: `CONCEPTO`,
        type: `Concepto — Entorno/Antagonista`,
        desc: `El bosque virgen del Parque Nacional de Gällivare (Norrbotten, Suecia) como personaje activo de la novela. Características físicas: ~27.000 km² de municipio; el tramo que cruzan lleva al menos 5 km sin ningún sendero; árboles prehistóricos cubiertos de líquenes resbaladizos; sotobosque denso de zarzas, raíces, ramas bajas y ortigas; dosel que bloquea casi toda la luz; el otoño tardío ha convertido la caída de ramas en algo casi violento. Comportamiento narrativo: el bosque "los lleva" — intentan avanzar sureste pero la vegetación solo permite moverse noroeste. Hutch lo reconoce: "The forest was leading them." Sin olor de la carcasa = matanza reciente y el autor del crimen está cerca. La oscuridad del bosque deja "una mancha" en los pensamientos de Luke, tiñendo cada percepción. Luke siente instintivamente que "this was never a place for a man to be, ever." El ruido de madera rompiéndose que escucha Luke (ver nodo sound-in-trees) tiene origen en este espacio. [Nota literaria: Nevill cita a Algernon Blackwood al inicio — "The Gods are here, if they are anywhere at all in the world" — cuento The Willows (1907). Blackwood fue pionero del horror cósmico de la naturaleza como fuerza inhumana, y The Ritual opera en esa misma tradición.]`,
        star: `★★★ El bosque NO es un escenario pasivo. Nevill lo construye con agencia narrativa desde el capítulo 3. Si algo vive en él y generó la casa-templo, llevan en su territorio desde que entraron.`
    },
    {
        id: `animal-sacrifice`,
        label: `Sacrificio Animal`,
        group: `CONCEPTO`,
        type: `Concepto — Práctica Ritual`,
        desc: `Huesos de animales pequeños esparcidos alrededor del lecho-caja de la efigie en el desván. Identificados provisionalmente como conejos y aves grandes con alas rotas y cráneos de papel. Algunos todavía cubiertos de un pergamino gris sin pelo — piel seca como el papel, sin carne visible. El patrón sugiere que los animales fueron colocados alrededor de la carcasa central (la efigie) tras consumir su carne o dejar que se descompusiera. El sacrificio animal en contextos paganos nórdicos (blót) era ofrenda ritual a divinidades — el animal ofrecido compartía sus propiedades espirituales con la entidad invocada. Aquí el sacrificio rodea la efigie como si la estuviera alimentando. Combinado con la carcasa del prólogo (ver nodo prologue-carcass), establece un patrón: algo en este territorio mata animales de tamaño significativo y los exhibe de formas ritualmente organizadas.`,
        star: ``
    },
    {
        id: `boreal-forest`,
        label: `Bosque Boreal — Taiga Virgen`,
        group: `CONCEPTO`,
        type: `Concepto — Entorno / Contexto Científico`,
        desc: `El cinturón conífero boreal (taiga) que se extiende de Noruega a Rusia — lo que creció después de la Edad de Hielo. Hutch lo explica en el cap. 16 mientras el grupo busca infructuosamente una salida sur. Un abeto noruego puede vivir 500 años; un pino escocés, 600. El bosque boreal encogió un 90% en el siglo pasado por tala masiva. Los bosques visibles desde el tren en el camino al norte tienen como mucho 100 años — gestionados, plantados. Las reservas nacionales como esta preservan lo único que queda del bosque original: fungi, líquenes, biodiversidad de aves e insectos. Nunca talado, nunca despejado — de ahí que sea literalmente impenetrable: siglos de troncos caídos, raíces de árboles muertos en pie, sotobosque sin apertura posible. Solo científicos y conservacionistas irían tan adentro. El grupo está aquí únicamente por accidente.`,
        star: `★ La explicación científica de Hutch es genuinamente informativa — y genuinamente insuficiente. El bosque es impasable por razones naturales Y por algo más. Nevill usa el conocimiento real para legitimar el horror.`
    },
    {
        id: `forest-silence`,
        label: `El Silencio del Bosque`,
        group: `CONCEPTO`,
        type: `Concepto — Señal Sobrenatural`,
        desc: `Cap. 20. A partir del momento en que el grupo pasa junto a los edificios del asentamiento abandonado, los pájaros cesan su charla esporádica. No hay brisa. El bosque queda completamente quieto — solo el arrastrar de pies, el suave repiqueteo de la lluvia y el golpe de hojas contra la tela impermeable. Hutch lo percibe como el bosque conteniendo la respiración "in anticipation." Decide no decírselo a Dom y Phil.

El silencio no es una ausencia casual — coincide exactamente con el paso junto al asentamiento y precede a la desviación de brújula del cap. 20. Hasta ese momento, los pájaros habían estado presentes esporádicamente. Posibles interpretaciones: (1) El paso de los cuatro perturba a la fauna local. (2) La misma presencia que actuó durante la noche en la casa está activa de nuevo. (3) El bosque funciona como sistema de alarma, y los pájaros responden a algo que Hutch no puede percibir directamente.`,
        star: `★★ El silencio como precursor es un dispositivo de horror clásico (Blackwood, Machen, Lovecraft), pero Nevill lo ancla en un evento concreto y localizado — no es atmósfera general sino un cambio observado en un momento específico.`
    },
    {
        id: `laponia-sueca`,
        label: `Laponia Sueca — Norrbotten`,
        group: `LUGAR`,
        type: `Lugar — Territorio`,
        desc: `Municipio de Gällivare, condado de Norrbotten, Suecia. Situado en el norte del país, por encima del Círculo Polar Ártico. El municipio mide ~27.000 km² — la mayoría bosque virgen e intocado. La excursión de los cuatro amigos transcurre en septiembre, tras el verano más lluvioso desde que existen registros en Suecia. El otoño llegó tarde: el bosque todavía está arrojando sus partes muertas. Ciudad de referencia para transporte: Gällivare. Llegaron en tren desde Mora (sur de Suecia) pasando por Jokkmokk. Planeaban un circuito de tres días: sendero Sörstubba → Porjus → retorno. Estado actual (cap. 10): abandonaron el sendero Sörstubba al mediodía del día 2, están dentro del bosque sin poder salir, nadie sabe que cambiaron de ruta.`,
        star: ``
    },
    {
        id: `el-bosque-loc`,
        label: `El Bosque — Localización`,
        group: `LUGAR`,
        type: `Lugar — Bosque`,
        desc: `El bosque virgen entre el sendero Sörstubba (abandonado al mediodía del día 2) y el Río Stora Luleälven (destino no alcanzado). Parque Nacional — "completely untampered with. Virgin forest." A unos 5+ km del último sendero oficial. Nadie en la oficina medioambiental de Porjus sabe que los cuatro están aquí (Hutch nunca llamó). Sin senderos marcados. Zonas de pantano señalizadas en el mapa que Hutch prometió evitar. El bosque actúa como agente direccional activo (ver nodo the-forest). La casa abandonada está en un claro dentro del bosque, a 4 km al este del árbol con la carcasa (ver nodo prologue-carcass). Estado actual: están dentro, con tormenta encima. La temperatura bajará drásticamente durante la noche.`,
        star: ``
    },
    {
        id: `la-casa`,
        label: `La Casa Abandonada`,
        group: `LUGAR`,
        type: `Lugar — Edificio / Templo`,
        desc: `Casa de campo oscura y hundida al fondo de un patio cubierto de ortigas, al final de un sendero estrecho. Dos plantas. Exterior: paredes abultadas y ennegrecidas (¿incendio antiguo?), tejas desprendidas, tablones sueltos junto a los cimientos, ventanas entablilladas. Sin color, sin simetría, sin ninguna propiedad atractiva. Interior planta baja (ver nodo house-interior): cráneos, crucifijos, estufa, mesa, taburete, lámparas de aceite. Anexo con herramientas (guadaña). Interior planta alta (ver nodo goat-effigy-discovered): desván con vigas bajas, símbolos rúnicos tallados, lecho-caja con la efigie de la Cabra de Mendes, huesos de animales sacrificados. Hutch estima que puede tener ~100 años. Estado actual: los cuatro están instalados aquí para pasar la noche — sin otra opción con la tormenta. La casa cruje como un barco de madera atrapado en el hielo. Phil afirma que la estructura no es segura. Distancia: 4 km al este de la carcasa en el árbol.`,
        star: `★★ La casa es el escenario del descubrimiento central y probablemente el escenario de lo que viene. Su posición exacta en el territorio — 4 km del árbol con la carcasa — no es casual. Quien construyó el templo interior conocía bien ese bosque.`
    },
    {
        id: `skaite`,
        label: `Skaite — Cabañas Turísticas`,
        group: `LUGAR`,
        type: `Lugar — Destino No Alcanzado`,
        desc: `Cabañas turísticas a orillas del Río Stora Luleälven, aguas abajo. Destino alternativo de emergencia que Hutch propone cuando abandona el plan de llegar a Porjus. Incluye fuego, calor y posiblemente compañía ("Dom's Jack Daniel's before an open fire"). Accesible siguiendo el sendero fluvial hacia el este desde la orilla del Stora Luleälven. Nunca alcanzado: el grupo no encontró el río. Estado actual: ignorada su localización y distancia real desde la posición actual del grupo.`,
        star: ``
    },
    {
        id: `gammelstad`,
        label: `Gammelstad`,
        group: `LUGAR`,
        type: `Lugar — Referencia Cultural`,
        desc: `Ciudad-iglesia medieval en el norte de Suecia, Patrimonio de la Humanidad de la UNESCO. Los cuatro la vieron en algún momento del viaje y encontraron allí piedras rúnicas. Hutch compara los símbolos tallados en las vigas del desván con las inscripciones rúnicas que vieron en Gammelstad: "like on the rune stones they had seen in Gammelstad." La conexión es visual — no confirma que sean la misma tradición.`,
        star: ``
    },
    {
        id: `skansen`,
        label: `Skansen — Museo al Aire Libre`,
        group: `LUGAR`,
        type: `Lugar — Referencia Cultural`,
        desc: `Museo al aire libre de arquitectura histórica sueca en Estocolmo. Hutch lo visitó en su primer viaje a Suecia. Allí vio los lechos-caja históricos (ver nodo box-bed) por primera vez — también los vio en Noruega. Ese conocimiento previo le permite identificar la estructura de madera del desván no como un féretro, sino como un lecho-caja tradicional: "I've seen them in the housing museum at Skansen." Sin ese dato, el grupo habría asumido que la caja era literalmente un ataúd.`,
        star: ``
    },
    {
        id: `asentamiento-abandonado`,
        label: `Asentamiento Abandonado — Dos Edificios`,
        group: `LUGAR`,
        type: `Lugar — Edificio / Asentamiento`,
        desc: `Dos edificios de madera engullidos por la vegetación a ambos lados del sendero antiguo, aproximadamente dos horas de camino al oeste de la casa principal (ver nodo la-casa). Tablas negras de humedad, ventanas apenas distinguibles, sugestión de chimenea de piedra. Impenetrable manto de ortigas y abedules enanos entre el sendero y las fachadas. Hutch identifica surcos de ruedas de carro bajo el helecho: el mismo sendero que lleva a la casa principal pasaba aquí — ambas construcciones estaban conectadas. "Debió de ser un asentamiento abandonado." No explorado. El bosque cae completamente en silencio justo después de que el grupo los sobrepasa (ver nodo forest-silence, ver nodo compass-deviation-ch20).`,
        star: ``
    },
    {
        id: `piedra-runica`,
        label: `Piedra Rúnica de Granito`,
        group: `LUGAR`,
        type: `Lugar — Monumento / Marcador Ritual`,
        desc: `Plinto de granito cubierto de hiedra descubierto por Luke mientras explora en solitario, a más de treinta minutos de los demás, más allá del asentamiento abandonado. La hiedra implica abandono prolongado y posiblemente gran antigüedad. Hallazgo al final del cap. 19 — la novela corta aquí sin descripción adicional. Las piedras erguidas son parte del legado cultural escandinavo y nórdico; su presencia en este bosque, junto a las runas en los árboles (ver nodo runes-on-trees-discovery) y dentro de la casa (ver nodo rune-carvings), sugiere que el recinto ritual es mucho más extenso que la casa y su claro inmediato. Estado: recién descubierta, sin examinar.`,
        star: `★★ Si la piedra está marcada con runas, el recinto ritual se extiende por kilómetros en el bosque — lo que significaría que el grupo ha estado dentro del perímetro sagrado desde antes de encontrar la casa.`
    },
    {
        id: `trama-quien-cuelga-el-animal`,
        label: `¿Qué Colgó el Animal?`,
        group: `TRAMA`,
        type: `Trama — Abierta`,
        desc: `La carcasa del prólogo nunca se identifica con certeza ni en cuanto al animal (alce o ciervo, por tamaño) ni en cuanto al autor del crimen. Hipótesis planteadas por los personajes: (1) Cazador — Hutch descarta esto: la caza está prohibida en el Parque Nacional. (2) Granjero — Hutch descarta: no hay nada cultivado en todo el parque. (3) Guardabosques — Phil lo sugiere; Hutch dice que probablemente son los primeros humanos en pasar por ese punto en mucho tiempo. (4) Lobo — Luke sugiere que un lobo mató al animal; luego añade que "algo lo puso en el árbol" para protegerlo de carroñeros en el suelo (conducta documentada en pumas y leopardos, no en lobos). (5) Oso — Luke menciona esta posibilidad; Hutch pregunta si los osos de Suecia son lo suficientemente grandes. (6) Un hombre — planteado como posibilidad más perturbadora aún que un animal. Estado al final del cap. 10: sin resolver. El ruido escuchado por Luke (ver nodo sound-in-trees) y la efigie del desván añaden contexto sin dar respuesta.`,
        star: `★★★ La respuesta correcta importa menos que la implicación de cualquier respuesta posible: si fue un animal, es uno de una fuerza descomunal que actúa con intencionalidad. Si fue un hombre, alguien vive en este bosque y los vio entrar.`
    },
    {
        id: `trama-culto-activo`,
        label: `¿El Culto Sigue Activo?`,
        group: `TRAMA`,
        type: `Trama — Abierta`,
        desc: `La casa y su contenido son claramente el resultado de una práctica religiosa o ritual sostenida. Hutch la data en ~100 años. Pero: (1) el animal del prólogo es una matanza FRESCA — sin olor, reciente. (2) El sendero que llevó a la casa fue hecho por alguien, y ese alguien iba "a algún lugar que valía la pena ir." (3) Los símbolos rúnicos del desván están tallados a distintas alturas y en momentos aparentemente distintos — sugieren uso prolongado y repetido, no un único evento pasado. Preguntas sin resolver: ¿quién construyó el templo? ¿Los actuales habitantes del bosque (si los hay) lo conocen? ¿La matanza del prólogo es parte del mismo culto o algo diferente y más reciente?`,
        star: `★★★ Si alguien sigue usando ese lugar, los cuatro durmiendo dentro no son simplemente "intrusos en propiedad privada" — son profanadores de un espacio sagrado activo.`
    },
    {
        id: `trama-supervivencia`,
        label: `Supervivencia — ¿Cómo Salen?`,
        group: `TRAMA`,
        type: `Trama — Abierta`,
        desc: `Al final del capítulo 10, los cuatro amigos están: (1) completamente perdidos — no saben exactamente dónde están en el mapa; (2) sin que nadie en el exterior sepa que cambiaron de ruta; (3) con Dom incapacitado de caminar con eficacia y Phil físicamente al límite; (4) dentro de una casa potencialmente conectada con el culto responsable del animal en el árbol; (5) con algo desconocido en el bosque (ver nodo sound-in-trees) cuya naturaleza y distancia son desconocidas. La tormenta elimina la posibilidad de moverse esa noche. Cuando amanezca, ¿en qué dirección salen? ¿Qué habrá pasado durante la noche?`,
        star: ``
    },
    {
        id: `trama-que-causo-pesadillas`,
        label: `¿Qué Causó las Pesadillas Simultáneas?`,
        group: `TRAMA`,
        type: `Trama — Abierta`,
        desc: `Caps. 12–15. Los cuatro amigos sufren experiencias de terror disociativas simultáneas durante la noche en la casa (ver nodo night-terrors). No existe explicación racional que cubra los cuatro casos a la vez.

Hipótesis: (1) La efigie actúa como inductor sobrenatural — presencia activa que opera durante el sueño de cualquiera que pernocte en el espacio ritual. (2) La entidad del bosque actúa deliberadamente desde el exterior, usando el estado de sueño como puerta de acceso. (3) Agotamiento extremo, hipotermia leve y trauma psicológico colectivo producen alucinaciones disociativas simultáneas. (4) El espacio ritual activo contamina el sueño de cualquiera que pernocte en él.

Datos sin resolver: ¿Qué vio Phil exactamente en la despensa? ¿Las palabras de Dom son una advertencia traída del sueño o algo que percibió con los ojos abiertos en el prado? El sueño de Hutch tenía actores específicos (las dos figuras viejas con dientes sucios) — ¿son personajes de la historia del lugar o proyecciones de su propio miedo?`,
        star: `★★★ La simultaneidad es lo más perturbador. Si fuera solo Hutch, podría atribuirse a su trauma previo ante la efigie. Pero los cuatro, en cuatro lugares distintos, la misma noche — eso apunta a agencia externa, no a psicología colectiva.`
    }
];
