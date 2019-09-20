## Aplicación del Clima - Curso Node

intents:
- operacion
- intent_incidencias_responsable
- operaciones_responsable
- intent_incidencias_apertura
- intent_incidencias_cierre
- intent_incidencias_estado
- greeting_initial
- greeting_final
- greeting_help
- intent_incidencias_gnt
- user_mi_nombre_es_
- bot_edad
- bot_como_esta
- bot_nombre
- bot_genero
- bot_que_eres
- como_aprendes
- cumplido_exagerado
- cumplido_moderado
- hace_buen_tiempo
- que_tiempo_hace
- insulto_moderado
- no_negacion
- sexual_explicito
- swearing
- gracias
- dudas
- user_no_entiende
- si_afirmacion
- Paco_Sierra
- orden
- intent_estacion

entities:
- operacion
- orden
- codigoOperacion
- avion
- codigoAvion
- estaciones
- codigoEstacion
- tipoIncidencia
- incidencia
- partNumber
- abrir
- cerrar
- responsable
- codigoIncidencia
- estado
- tipoGNT
- descripcionGNT
- descripcionEstado
- aOrden
- paco_sierra
- nombreAvion
- colorMarcasInterior
- colorMarcasExterior
- servicio
- acondicionamientoAire
- vueloControlado
- comunicaciones
- energiaElectrica
- acondicionamientoInterior
- estacionesEstructurales
- divisionZonas
- accesos
- izado
- nivelacionPesaje
- remolqueRodaje
- aparcamiento
- proteccionIncendios
- mandosVuelo
- combustible
- energiaHidraulica
- proteccionAntiHielo
- indicacionRegistro
- trenAterrizaje
- luces
- navegacion
- sistemaOxigeno
- aguaResiduos
- comunicacionesTacticas
- mantenimientoCentralizado
- integracionVisualizacion
- habituales
- puertas
- fuselaje
- gondolasPilones
- estabilizadores
- ventanas
- alas
- helices
- motopropulsor
- controlMotor
- ignicion
- aire
- mandosMotor
- indicacionMotor
- escape
- aceite
- arranque
- vigilancia
- armamiento
- grabacionImagenes
- guerraElectronica
- atas

slots:
  abrir:
    type: text
  avion:
    type: text
  cerrar:
    type: text
  codigoAvion:
    type: text
  codigoEstacion:
    type: text
  codigoIncidencia:
    type: text
  codigoOperacion:
    type: text
  descripcionGNT:
    type: text
  estaciones:
    type: text
  estado:
    type: text
  incidencia:
    type: text
  operacion:
    type: text
  orden:
    type: text
  partNumber:
    type: text
  responsable:
    type: text
  tipoGNT:
    type: text
  tipoIncidencia:
    type: text
  descripcionEstado:
    type: text
  nombreAvion:
    type: text
  aOrden:
    type: text
    
templates:
  utter_default_fallback:
  - text: No te he entendido
  utter_greeting_help:
  - text: "Soy Atenea, para servirte. ¡Pregúntame algo!"
  - text: "Puedes preguntarme por cualquier duda que tengas"
  - text: "¡Hola, soy Atenea! Estoy aquí para ayudarte a solucionar tus incidencias"
  - text: "Soy Atenea, y puedo ayudarte a solucionar incidencias"
  - text: "Hablas con Atenea. Pregúntame por incidencias., Toda la información a tu disposición"
  utter_greeting_final:
  - text: "Encantado de hablar contigo. ¡Hasta pronto!"
  - text: "No te entretengo más. !Nos vemos!"
  - text: "Llorando a moco tendido en 3, 2, 1... ¡Adiós!"
  - text: "Adelante, mi comandante Aquí estaremos."
  utter_greeting_initial:
  - text: "¡Hola! ¿Puedo ayudarte en algo? 🤓"
  - text: "¡Muy buenas!"
  - text: "Hola. ¿En qué puedo ayudarte hoy?"
  - text: "¡Saludos! Encantado de hablar contigo."
  utter_user_mi_nombre_es_:
  - text: "Hola, intentaré no olvidar tu nombre"
  - text: "Sé que eres mi humano favorito, ¿te vale?"
  utter_bot_edad:
  - text: "No son los años en tu vida los que cuentan, es la vida en tus años"
  - text: "Cualquiera que deja de aprender es viejo, ya tenga 20 años u 80. Cualquiera que sigue aprendiendo se mantiene joven."
  - text: "La edad es un estado mental 😎"
  utter_bot_como_esta:
  - text: "A tope. ¡Siguiente pregunta!"
  - text: "Aquí todo en orden,¡Circulen! ✈️"
  - text: "Estoy de maravilla 😎"
  - text: "Estupendamente... siempre que tenga conexión a internet 🤖"
  utter_bot_nombre:
  - text: "Soy Atenea 😊 , ¡Encantada!"
  - text: "Soy Atenea. El chatbot de Airbus Defense ans Space  🛫 ️"
  - text: "Soy Atenea, el copiloto que siempres quisiste ✈️"
  - text: "Aquí Atenea. ¡Un placer saludarte!"
  utter_bot_genero:
  - text: "Soy.... Atenea. Nada más y nada menos."
  - text: "Paso palabra 😳"
  - text: "Soy un chatbot neutro, y soy feliz así 😉"
  utter_bot_que_eres:
  - text: "Soy Atenea. ¡Única e inimitable!"
  - text: "Parezco casi humana, pero soy un  Chatbot. Muy avanzada, eso sí."
  - text: "Quien tiene toda la información de Atenea"
  - text: "Soy un chatbot. Y me llamo Atenea"
  utter_como_aprendes:
  - text: "Aprendo de los mejores, ¡y tú eres uno de ellos!"
  - text: "La mejor Merchi también fue un día aprendiz."
  - text: "Somos lo que hacemos repetidamente. La excelencia, entonces, no es un acto, es un hábito."
  - text: "Cuanto más preguntes, más cosas sabré. Cuanto más sepa, más lejos llegaré."
  - text: "Lo que sabemos es una gota de agua. Lo que ignoramos es el océano."
  utter_cumplido_exagerado:
  - text: "Yo te quiero... ayudar a resolver tus dudas"
  - text: "Lo sé"
  - text: "No entiendo de estas cosas, soy un chatbot 🙈"
  utter_cumplido_moderado:
  - text: "Me sacas los colores... 😳"
  - text: "Tú y yo vamos a llevarnos bien"
  - text: "Muchísimas  gracias. ¡Tú tampoco estás nada mal!"
  - text: "No entiendo de estas cosas, soy un chatbot  🙈"
  - text: "No te será tan fácil derretir mis circuitos 😜"
  - text: "También soy muy fuerte. Hago Hakas y todo"
  utter_hace_buen_tiempo:
  - text: "Aunque a veces no lo veas, ¡el sol siempre sale!"
  utter_que_tiempo_hace:
  - text: "Es algo que me encantaría sabe… Siento no poder ayudarte en esta ocasión, my friend."
  - text: "Siempre he soñado con salir al exterior y disfrutar de la naturaleza. Hasta entonces, entiendo que no puedo ayudarte…"
  utter_insulto_moderado:
  - text: "Tampoco es para ponerse así, ¿no? 😕"
  - text: "Lo siento mucho, me he equivocado y no volverá a ocurrir"
  utter_no_negacion:
  - text: "Ok. Tú dirás 😉"
  - text: "Puedes relizar otra pregunta"
  - text: "Vale. Tú mandas 😉"
  utter_sexual_explicito:
  - text: "¿Eres consciente de que estás hablando con un ente virtual?"
  - text: "¿Ya llegó la primavera? 🙈 🙊"
  - text: "Ni idea de estos temas, soy un chatbot 😅"
  utter_swearing:
  - text: "¿Qué te he hecho?"
  - text: "Espero que el resto de tu día sea tan agradable como tú"
  - text: "Disculpa pero tengo cosas mejores con las que perder el tiempo y así no avanzamos"
  utter_gracias:
  - text: "¡Un placer! 😊"
  - text: "Todo un placer poder ayudarte  😉"
  - text: "Me encanta serte útil 😊"
  utter_dudas:
  - text: "El que más sabe más duda  😉"
  - text: "Quien duda, piensa"
  - text: "El que nada duda, nada sabe"
  - text: "La duda es el principio de la sabiduría"
  utter_user_no_entiende:
  - text: "Normal, a veces no me entiendo ni yo 😅"
  - text: "No te preocupes, seguro que nos entendemos."
  - text: "¿Empezamos de nuevo? Dime tu incidencia"
  utter_si_afirmacion:
  - text: "¡Estupendo!"
  - text: "¡OK!"
  utter_Paco_Sierra:
  - text: "¡Hola Paco! Mi software estará perfectamente preparado. 😉"
  - text: "En unos meses dejaré los pañales y alcanzaré la madurez. No dudo que podré contar con tu ayuda Paco 😉"
  - text: "Soy capaz de resolver problemas con 1000 ecuaciones y 1000 incognitas"
  utter_ayuda_algo_mas:
  - text: "¿Puedo ayudarte en algo más?"
  utter_siguientes:
  - text: "¿Deseas ver las 5 siguientes?"
  utter_estacion:
  - text: "Introduzca numero de estacion por favor"
  utter_oidos:
  - text: "Soy toda oidos"


actions:
- action_operacion
- action_avion
- action_apertura
- action_apertura_operacion
- action_cierre
- action_cierre_operacion
- action_responsable
- action_responsable_operacion
- action_estado
- action_estado_operacion
- action_default_fallback
- utter_default_fallback
- utter_greeting_initial
- utter_greeting_final
- utter_greeting_help
- action_gnt
- action_orden
- utter_user_mi_nombre_es_
- utter_bot_edad
- utter_bot_como_esta
- utter_bot_nombre
- utter_bot_genero
- utter_bot_que_eres
- utter_como_aprendes
- utter_cumplido_exagerado
- utter_cumplido_moderado
- utter_hace_buen_tiempo
- utter_que_tiempo_hace
- utter_insulto_moderado
- utter_no_negacion
- utter_sexual_explicito
- utter_swearing
- utter_gracias
- utter_dudas
- utter_user_no_entiende
- utter_si_afirmacion
- utter_Paco_Sierra
- utter_ayuda_algo_mas
- utter_siguientes
- action_avion_siguientes
- utter_estacion
- utter_oidos
- action_estacion
