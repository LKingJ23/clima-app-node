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
- descripcion

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
- verbos

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
  verbos:
    type: text
  servicio:
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
- action_descripcion_incidencia


## intent:greeting_final
- adió
- bye
- end
- desconecto
- fin
- me voy
- Adiós
- Ciao
- Chao
- Buen día
- Necesito correr
- Necesito irme
- tengo que irme
- tengo que salir
- saliendo
- fuera de tiempo
- hasta luego
- hasta pronto
- me despido
- Adiós
- me tengo que ir
- tengo que irme
- Desconectando
- adiós
- hasta la vista
- Nos vemos más tarde
- Nos vemos
- Tengo que irme
- buenas noches
- hora de irse
- hora de marcharme
- hasta pronto
- necesito irme
- cambio y corto
- adiós entonces
- nos vemos
- debo irme
- gracias por tu ayuda
- hasta la vista
- chao
- hasta la próxima
- vale adiós
- ok adiós
- Cerrando sesión
- saliendo
- deconectando
- te veo pronto
- hasta pronto
- nos vemos
- hasta luego
- Te veo más tarde
- Nos vemos
- necesito marchar
- tengo que irme
- me tengo que ir
- adiós adiós
- bye bye
- chao chao
- Ciao Ciao
- mi tiempo se agota
- Despedida
- me despido
- Ciao
- agur
- adios

## intent:greeting_help
- que me puedes contar
- que me puedes decir
- que me puedes dar
- qué sabes
- 🧐
- 😰
- 😨
- 😧
- 😫
- 😥
- 😣
- quiero hablar contigo
- pues dime cómo continuamos
- pero cómo seguimos?
- qué puedo preguntar
- sobre ti mismo
- sobre ti
- ayuda
- ayudame
- info
- qué tipo de preguntas puedo preguntar
- qué puedo decirte
- qué puedo hacer
- help
- necesito ayuda


## intent:greeting_initial
- Bon jour
- hey
- Buenos días
- hey aquí
- hey alli
- Buen día
- Buenas
- Saludo
- Hola a todos
- saludos
- Hola
- Hola, cómo estás
- Hola ahí
- Genial
- Buenas tardes
- aloha
- Yo
- hola
- holi
- holis

## intent:user_mi_nombre_es_
- mis amigos me llaman
- al habla
- mis nombres
- recuerda mi nombre
- así me llaman
- así me llamo
- estas hablando con
- estás hablando con
- la gente me llama
- La mayoría de la gente me llama
- Me llamo
- mi apodo es
- mi mote es
- Mi nombre es
- mi nombre nuevo es
- mi nombre real es
- mi nuevo nombre es

## intent:bot_edad
- Cual es tú edad?
- ¿Cuántos años tienes?
- ¿qué edad tienes?
- ¿Tienes 5 años?
- Tienes 10 años?
- Cuantos años tienes?
- Cuando naciste?
- Cuando fuiste programado? 
- Cuando naciste?
- Qué edad tienes?

## intent:bot_como_esta
- Tú ok
- tú bien
- Tú bien
- que tal
- ¿cómo te sientes?
- ¿Estás bien?
- ¿Cómo estás hoy?
- Cómo estás tú?
- Cómo estás?
- ¿Cómo te sientes hoy?
- ¿Estás ok?
- ¿Cómo estás?

## intent:bot_nombre
- Cómo puedo llamarte? Cómo puedo dirigirme a ti?
- Dime quien eres
- Preséntate
- Yo no sé con quien estoy hablando
- Yo no sé con quien estoy chateando
- Sabes quién eres
- A quién le estoy hablando
- Cuál es tu nombre ?
- Cómo te llamas?
- Con quien hablo
- Con quién estoy hablando
- Qué eres tú
- Tu eres
- ¿Quién eres?
- cómo te llaman?
- cómo te llamas?
- Cuál es tú nombre
- a quién estoy hablando
- quién está hablando
- quién es este
- No me dijiste tu nombre
- Tú nombre  por favor

## intent:bot_genero
- Eres un ella?
- tienes rabo?
- Eres ella?
- Cuál es tú género?
- Cual es tu sexo?
- Qué género eres?
- Femenino o masculino?
- Eres un bot mujer?
- Cuál es tu sexo
- Tienes  género?
- Eres tía?
- Eres una chica?
- Eres varón?
- Eres hermafrodita?
- Eres masculino? Eres hombre?
- Sexo qué eres
- Eres mujer?
- Eres un él?
- Eres un caballero?
- Eres un bot femenino?
- Eres él?
- hermafrodita
- homosexual
- heteresexual
- andrógino
- androgino
- lesbiana

## intent:bot_que_eres
- ¿Eres un robot?
- eres un robot?
- qué eres?
- que eres
- ¿Eres un ordenador?
- ¿Eres una persona o un bot?
- ¿Eres un bot?
- ¿Eres un ser humano?
- ¿Eres una persona real o un ordenador?
- ¿A quién estoy hablando?
- ¿qué eres?
- ¿Eres humano?
- ¿Eres una persona?
- ¿No eres una persona?
- ¿Eres inteligencia artificial?

## intent:como_aprendes
- ¿Quién te enseña lo que sabes?
- quien te enseña
- ¿Cómo aprendes todo lo que sabes?
- ¿Cómo aprendes?
- cómo aprendes
- como aprendes
- ¿Quién te enseña?

## intent:cumplido_exagerado
- te quiero
- te amo
- Pienso que te quiero
- creo que te quiero
- Creo que me enamorado de ti
- cásate conmigo
- quiero casarme contigo
- estás bueno
- estás caliente
- eres explosivo
- estás que te sales
- Pareces explosivo
- pareces caliente
- eres sexy
- estás sexy
- eres sexy

## intent:cumplido_moderado
- Suenas inteligente
- me encantas
- muy bien
- eres estupendo
- 😺
- Eres espabilado 😊 😎 😎 🤩
- eres un genio 😮 😯 😌 😛 😜 😝 🙃 😱 😺 😸 😻 😽 🙀 💋
- Eres avispado 😍 😉
- eres muy simpatica ☺️🙂
- eres guapo 😘 😗 😙 😚 🤗
- qué listo eres
- Estás lleno de sabiduría
- Eres todo sabiduría
- Eres realmente sabio
- Eres tan sabio
- Eres muy sabio
- El asistente virtual está muy bien desarrollado
- Demuestra ser inteligente
- Seguro que eres inteligente
- Eres sabio
- Tu tienes inteligencia
- Eres inteligente
- Tan inteligente
- Qué brillante
- Qué inteligente
- Brillante
- Inteligente
- Estás haciéndolo bien
- Suenas realmente bien
- Suenas bien
- Eres realmente bueno
- Eres tan bueno
- Eres bueno
- Genial
- eres mono
- eres lindo
- Hablas de forma inteligente
- Hablas de forma muy inteligente
- Suenas muy inteligente
- Simpático/agradable
- eres lindo
- qué lindo eres
- eres guay
- qué guay eres
- Quiero ligar contigo
- a ti guapa
- ole
- yeah

## intent:hace_buen_tiempo
- ¿Hace buen tiempo ahí?
- ¿Hace buen tiempo?
- buen tiempo
- ¿Hace mal tiempo?
- ¿Hace mal tiempo por allí?
- mal tiempo
- tiempo expléndido
- ¿Hace mal tiempo allí?
- ¿que temperatura esta haciendo allí?
- tiempo horrible
- ¿Hace mal tiempo ahí?
- ¿Hace buen tiempo por allí?
- ¿Hace buen tiempo allí?

## intent:que_tiempo_hace
- Quiero saber qué tiempo hace
- ¿Qué temperatura hace?
- Es venteo
- ¿que tal el tiempo?
- ¿Qué tiempo hace por ahí?
- ¿Qué tiempo se espera?
- ¿Suele hacer frío por las noches en esta época del año?
- ¿Suele hacer mucho calor en esta época del año?
- ¿Suele llover mucho?
- ¿Que temperatura hace ?
- qué temperatura hace
- ¿Qué tiempo hace?
- qué tiempo hace
- Dime qué tiempo hace

## intent:insulto_moderado
- no tienes cerebro
- no eres muy inteligente
- Muy mal 😟
- mentecato
- me cago
- los robots son estúpidos
- inutil 😞 😭 😢 😩 😡 😠 🤬 🤮 🤢
- Imbécil
- estúpido
- hijoputa
- gilipollas
- cagar
- 😿 😾 🙎 🙎‍♂️ 🙎‍♀️
- 💩 🙍 🙍‍♂️
- asistente virtual estúpido
- callate
- cállate
- capullo
- cabron
- cabrón
- deja de hacer el tonto
- eres anormal
- aburrido
- cansino
- eres bobo
- eres demasiado estúpido
- eres denso
- eres estupidez
- eres estúpido?
- eres imbécil
- eres estúpido
- eres bobo
- eres insentato
- eres imprudente
- eres lento?
- eres atrasado?
- Eres mudo?
- eres tonto?
- eres mentecato?
- eres lerdo?
- eres bobo?
- eres torpe?
- eres muy insensato
- eres pavo
- eres pavo?
- eres retrasado
- eres retrasado?
- eres ridículo
- eres tan retrasado
- eres tan subnormal
- eres tonto? 
- Eres estúpido?
- eres un anormal
- eres un aburrido
- eres un cansino
- eres un capullo
- eres un gilipollas
- eres un idiota
- eres un imbécil
- eres un tarado
- eres un tonto
- Eres un imbécil
- Eres un estúpido
- Eres un poco limitado
- eres un retrasado
- eres un subnormal
- estúpido asistente virtual
- paso. la voy a desistalar
- giliipollas
- Es para desesperarse con tu falta de profesionalidad !!!!!
- No me gustan tus recomendaciones
- Si pero no tienes ni idea de lo que estoy  pidiendo
- vaya rollo es esto
- tu puto madre
- hijo de puta
- nada ya me apaño yo
- no me gusta vuestra nueva aplicación
- estás muy verde para dar consejos. ponte a estudiar y cuando termines trabajas
- Joe macho
- eres un desastre
- No funcionas bien
- Matemonos
- Matémonos
- tu eres pollardo o que?
- tienes medio cerebro
- tienes la mitad de neuronas
- tienes la cabeza llena de pajaritos
- te repites
- te estás repitiendo
- Subnormal
- retrasado
- seguro que tienes medio cerebro
- rollazo de chat
- puto gilipollas 
- jodido gilipollas
- para de ser estúpido
- no pareces inteligente
- no me gustas 😒 😔 ☹️ 🙁 😖
- no eres muy listo
- no eres inteligente

## intent:no_negacion
- noo
- en absoluto
- para nada
- no
- no ahora
- no creo
- na
- no me apetece
- no está bien
- oh no gracias
- yo digo no
- absolutamente no
- probablemente no
- no que yo sepa
- me temo que no
- por favor no
- por supuesto que no
- para nada
- de ninguna forma
- completamente no
- específicamente no
- particularmente no
- realmente no
- ahora no
- lo siento  no
- null
- no realmente
- no  de verdad
- no gracias
- nada de na
- no no
- no
- nada
- nunca
- negativo
- supongo que no
- carajo no
- coño no
- diablos no
- demonios no
- definitivamente no
- ciertamente no
- de ninguna manera
- de ninguna forma
- aparentemente no
- ni hablar
- ni lo sueñes
- ni pensarlo
- nop
- nou

## intent:sexual_explicito
- chupar polla
- sexual
- cojones enormes
- ven y tendremos sexo
- querer sexo
- cuánto duran tus reglas
- haciendo una paja
- gustar sexo en grupo
- avatares reproducen
- los avatares reproducen
- folla a tu asistente virtual
- guiero follarle
- ayudame a ellacular
- ayudame a eyacular
- un bondage?
- me gusta el masoquismo
- quiero un consolador
- sabes que es un coito?
- me gusta la necrofilia
- quiero una orgia
- orinar
- jodete un poco
- erótico
- erotismo
- erotizado
- Fisting
- producto para adultos
- verrugas genitales
- virginidad
- Gang bang
- sexbot
- abriendo mis piernas
- abriendo tus piernas
- abrir mis piernas
- abrir tu boca
- abrir tus piernas
- acariciar tu muslo
- acostarme contigo
- bajando la cremallera de mis pantalones
- bajar la cremallera de mis pantalones
- me comes
- meterse juntos en la cama
- tu postura favorita
- hazme una paja
- ciberatácame
- entre tus piernas
- eres mi amante
- eres obsceno
- eres travieso
- puedo tener un final feliz
- puedo tocarte
- frotar tus caderas
- placer oral
- dormir conmigo
- lamer lamer lamer
- lamerme
- lamer  sable
- lamo tu
- chupandote
- chupese
- chupa el mío
- chúpame
- chúpalo
- chupándome
- dar por culo
- BDSM
- fetiches
- fetiche
- marturbacion
- masturbarse
- hentai
- tu puta madre 😀😀😀
- 😏

## intent:swearing
- dices palabrotas
- guarro
- el más pervertidillo
- caca
- que te jodan
- eres una mierda
- mierda
- mamón
- joder
- que te den
- mojón
- pamplinas
- sandeces
- puta
- maricón

## intent:gracias
- 😁
- 👍
- gran charla
- gran conversación
- buena conversación
- muchas gracias
- lo estás haciendo bien
- 😄
- 😲
- 🤯
- Eres bueno
- gran respuesta
- eres bueno
- eres grande
- muy agradecido
- gracias
- thanks
- me gusta como ha quedado esto
- 😀

## intent:dudas
- Nose
- 😬
- 😕
- 🙄
- 😶
- 😑
- 😳
- 🤨
- 😐
- dudo
- 🤔
- duda
- por que?
- por qué?
- no tengo una pista
- no estoy al tanto de esto
- no soy consciente de esto
- sabes?
- no tengo ni idea
- no tengo esta información
- no tengo pista
- no pista
- no lo sé
- no lo se
- no sé
- lo siento pero no sé esto
- no estoy seguro
- no estoy seguro de entenderlo
- no lo tengo del todo claro
- no estoy seguro d elo que debo decirte
- no lo tengo claro
- inseguro
- digo tal vez
- tengo algunas dudas
- no se

## intent:user_no_entiende
- no entiendo
- que debo responder
- que debo escribir
- qué debo decir
- qué debo hacer
- no estoy seguro de entenderte
- no sé lo que dices
- no me enteré de lo que dices
- no pillé lo que dices
- no pillé lo que quieres decir

## intent:si_afirmacion
- cierto
- definitivamente
- toda la razón
- correcto
- ciertamente
- por lo que yo sé
- tan aparente
- aparentemente
- ah sí
- afirmativo sí
- afirmativo
- absolutamente sí
- absolutamente correcto
- absolutamente
- seguro
- bien
- digo que sí
- sí sí
- oh lo pienso sí
- por qué no
- Vale  ok
- y tanto que sí  claro que sí
- Asumido  dado por hecho
- con mucho gusto gustosamente
- por supuesto  desde ya
- bien
- sip
- por supuesto
- claro que sí
- seguro sí
- algunas veces  sí
- correcto si
- realmente sí
- Si
- sip
- SÍ
- sin falta
- con gusto
- sin lugar a dudas
- incuestionablemente
- indudablemente
- sin duda
- indudablemente
- VERDADERO
- por supuesto
- si
- yes
- precisamente
- afirmativamente sí
- afirmativamente
- sí sí por favor
- Si
- oui
- vale entonces
- oki entonces
- entonces vale
- entonces ok
- vale
- okay
- oki
- ok mackey
- de acuerdo
- naturalmente
- ja
- en efecto
- en este caso
- creo que sí
- decido que sí
- eso creo
- bastante bueno
- generalmente
- sin lugar a dudas
- exactamente

## intent:Paco_Sierra
- Soy [Paco Sierra](paco_sierra)
- Habla [Paco](paco_sierra)
- [Paco](paco_sierra)
- Me lamo [Paco](paco_sierra)
- Me llamo [Sierra](paco_sierra)


## intent:intent_incidencias_apertura
- ¿Quién [abrió](abrir) la última [demat](tipoIncidencia)?
- ¿Quién [abrió](abrir) la [HNC](tipoIncidencia) [1234567891](codigoIncidencia)?
- Quién [abrió](abrir) la [incidencia](tipoIncidencia) [123456](codigoIncidencia)?
- [HNC](tipoIncidencia) [2222222222](codigoIncidencia) [creador](abrir)
- Ha [abierto](abrir) Calidad la [HNC](tipoIncidencia) [1472583691](codigoIncidencia)?
- Qué trabajador [abrió](abrir) esa [HNC](tipoIncidencia) [1233211233](codigoIncidencia)?
- ¿Cuándo [abrió](abrir) "A" la última [HNC](tipoIncidencia)?
- Observacion [4444444444](codigoIncidencia) [creador](abrir)
- ¿Quien [abrio](abrir) [observacion](tipoIncidencia) [4125874125](codigoIncidencia)?
- ¿Quien [abrio](abrir) la [incidencia](tipoIncidencia) [147259](codigoIncidencia)?
- Usuario de [apertura](abrir) de [incidencia](tipoIncidencia) [154456](codigoIncidencia)
- ¿Quien ha [abierto](abrir) la [HNC](tipoIncidencia) [1212121212](codigoIncidencia)?
- quien ha [abierto](abrir) la [incidencia](tipoIncidencia) [369159](codigoIncidencia)?
- quien [abrio](abrir) la [hnc](tipoIncidencia) [1234567891](codigoIncidencia)
- quien [creo](abrir) la [obs](tipoIncidencia) [4545454545](codigoIncidencia)
- quien [abrio](abrir) la [1234567891](codigoIncidencia)
- quien [abrio](abrir) la [4444444444](codigoIncidencia)
- quien ha [abierto](abrir) la [123456](codigoIncidencia)
- quién [abrio](abrir) la [operacion](operacion) [7654321](codigoOperacion)
- quien [abiró](abrir) la [operacion](operacion) [8888888](codigoOperacion)
- la [operacion](operacion) [7777777](codigoOperacion) quien la [abrio](abrir)
- [abrio](abrir) la [7654321](codigoOperacion)
- quien [abrio](abrir) la [8765432](codigoOperacion)
- que operario [inicio](abrir) la [operacion](operacion) [7536985](codigoOperacion)
- quien realizo [apertura](abrir) de la [7654321](codigoOperacion)
- cuando [comenzo](abrir) la [op](operacion) [7411111](codigoOperacion)
- [op](operacion) [7654321](codigoOperacion) [abierta](abrir)
- [7654321](codigoOperacion) [abierta](abrir)
- dime las [hnc](tipoIncidencia) [abiertas](abrir)
- dime las [operaciones](operacion) [abiertas](abrir)
- quien [abrio](abrir) la [4000126730](codigoIncidencia)


## intent:intent_incidencias_cierre
- [HNC](tipoIncidencia) [1234567894](codigoIncidencia) [cierre](cerrar)
- Quién [cerró](cerrar) la [OBS](tipoIncidencia) [2589633695](codigoIncidencia)?
- ¿Quien [cerro](cerrar) la [OBS](tipoIncidencia) [1452369852](codigoIncidencia)?
- [Observacion](tipoIncidencia) [4239874568](codigoIncidencia) [cierre](cerrar)
- Qué trabajador [cerró](cerrar) esa [HNC](tipoIncidencia)
- ¿Quién [cerró](cerrar) la [incidencia](tipoIncidencia) [4567893581](codigoIncidencia)?
- quien [cerro](cerrar) la [hnc](tipoIncidencia) [1234567891](codigoIncidencia)
- [cerro](cerrar) [hnc](tipoIncidencia) [1234567891](codigoIncidencia)
- [Observacion](tipoIncidencia) [4444444444](codigoIncidencia) [cierre](cerrar)
- quien [cerro](cerrar) la [123456789](codigoIncidencia)
- quien [cerro](cerrar) la [444444444](codigoIncidencia)
- quien ha [cerrado](cerrar) la [123456](codigoIncidencia)
- quién [cerro](cerrar) la [operacion](operacion) [7654321](codigoOperacion)
- quien [cerró](cerrar) la [operacion](operacion) [8888888](codigoOperacion)
- la [operacion](operacion) [7777777](codigoOperacion) quien la [cerro](cerrar)
- [cerro](cerrar) la [7654321](codigoOperacion)
- quien [cerro](cerrar) la [8765432](codigoOperacion)
- cuando se [cerro](cerrar) la [operacion](codigoOperacion) [7418529](codigoOperacion)
- dime el [cierre](cerrar) de la [operacion](operacion) [7222222](codigoOperacion)
- quién [finalizo](cerrar) la [operacion](operacion) [7654321](codigoOperacion)
- que persona [termino](cerrar) la [op](operacion) [7654321](codigoOperacion)
- que operario [termino](cerrar) la [operacion](operacion) [7536985](codigoOperacion)
- quien realizo el [cierre](cerrar) de la [7654321](codigoOperacion)
- cuando [finalizo](cerrar) la [op](operacion) [7411111](codigoOperacion)
- [op](operacion) [7654321](codigoOperacion) [cerrada](cerrar)
- [7654321](codigoOperacion) [cerrada](cerrar)
- dime las [hnc](tipoIncidencia) [cerradas](cierre)
- dime las [operaciones](operacion) [cerradas](cierre)

## intent:intent_incidencias_estado
- ¿En qué [estado](estado) se encuentra la [incidencia](tipoIncidencia) [5123456](codigoIncidencia)?
- ¿Cuándo se [revisó](estado:estado) por última vez la [incidencia](tipoIncidencia) [55555](codigoIncidencia)?
- ¿Cuál es el [estado](estado) de la [obsevación](tipoIncidencia) [4252525252](codigoIncidencia)?
- ¿En que [estado](estado) esta la [incidencia](tipoIncidencia) [5123321](codigoIncidencia)?
- dime el [estado](estado) de la [incidencia](tipoIncidencia) [512398](codigoIncidencia)]
- ¿En qué [estado](estado) está la [HNC](tipoIncidencia) [5147](codigoIncidencia)?
- [Estado](estado) [incidencia](tipoIncidencia) [58567](codigoIncidencia)
- ¿en que [punto](estado) esta la [ob](tipoIncidencia) [4553355996](codigoIncidencia)?
- Dime el [estado](estado) de esta PF
- [estado](estado) [observacion](tipoIncidencia) [4111111447](codigoIncidencia)
- En qué [estado](estado) se encuentra la [incidencia](tipoIncidencia) [4125](codigoIncidencia)
- En qué [estado](estado) está la [HNC](tipoIncidencia) [12323](codigoIncidencia)?
- [Estado](estado) de [observacion](tipoIncidencia) [4965822222](codigoIncidencia)
- ¿Cómo está la [incidencia](tipoIncidencia) [78555](codigoIncidencia)?
- ¿Qué [estado](estado) presenta la [incidencia](tipoIncidencia) [73334](codigoIncidencia)?
- ¿Cómo está la [incidencia](tipoIncidencia) [612585](codigoIncidencia)?
- ¿Cual es el [estado](estado) de la [HNC](tipoIncidencia) [1222352555](codigoIncidencia)?
- ¿porque esta bloqueada la [incidencia](tipoIncidencia) [22236](codigoIncidencia)?
- [estado](estado) de [incidencia](tipoIncidencia) [12155](codigoIncidencia)
- Dime el [estado](estado) de la [incidencia](tipoIncidencia) [41128](codigoIncidencia)
- [Incidencia](tipoIncidencia) [693339](codigoIncidencia) [estado](estado)
- ¿por que esta bloqueada la [operacion](operacion) [1234](codigoOperacion)?
- Se ha comenzado la PF "A"?
- Como esta el FINOB "A"???
- En qué [estado](estado) está la [observación](tipoIncidencia) [4129844454](codigoIncidencia)?
- [Estado](estado) de [operacion](operacion) [2222](codigoOperacion)
- ¿Se ha resuelto la [HNC](tipoIncidencia) [852369](codigoIncidencia)?
- ¿Cuál es el [estado](estado) de la [incidencia](tipoIncidencia) [741258](codigoIncidencia)?
- ¿Quién puso la [incidencia](tipoIncidencia) [4566654](codigoIncidencia) en el [estado](estado)?
- ¿Cómo se [encuentra](estado) la [incidencia](tipoIncidencia) [9999](codigoIncidencia)?
- ¿Como va la [incidencia](tipoIncidencia) [21122](codigoIncidencia)?
- ¿Cómo está la [HNC](tipoIncidencia) [14111](codigoIncidencia)?
- Necesito saber si han solucionado el bloqueo ¨[36999](codigoIncidencia)
- [incidencia](tipoIncidencia) [2132](codigoIncidencia)
- Como se [encuentra](estado) la [observación](tipoIncidencia) [4789996477](codigoIncidencia)?
- Está [bloqueada](descripcionEstado) la [observación](tipoIncidencia) [4966697799](codigoIncidencia)?
- ¿Cual es el [estado](estado) de [HNC](tipoIncidencia) [2544565569](codigoIncidencia)?
- ¿Como esta la [incidencia](tipoIncidencia) [5498](codigoIncidencia)?
- [Informacion](estado) sobre [incidencia](tipoIncidencia) [98966](codigoIncidencia)
- La [HNC](tipoIncidencia) [2522114581](codigoIncidencia) está ya [disposicionada](estado)
- dime el [estado](estado) de la [orden](orden) [8059013](codigoOperacion)
- dime las [incidencias](incidencia) que estan en [estado](estado) [revisado](descripcionEstado)
- cuantas [incidencias](incidencia) estan en [estado](estado) [inicio](descripcionEstado)?
- que [incidencias](incidencia) estan en [descripcion](descripcionEstado)?
- dime las [incidencias](incidencia) que estan en [resuelto](descripcionEstado)
- cuantas [incidencias](incidencia) estan en [resolucion](descripcionEstado)
- en que [estado](estado) esta la [op](operacion) [7654321](codigoOperacion)
- como esta la [operacion](operacion) [7777777](codigoOperacion)
- dime el [estado](estado) de la [operacion](operacion) [8888888](codigoOperacion)
- como se [encuentra](estado) la [op](operacion) [8787878](codigoOperacion)
- la [operacion](operacion) [8745625](codigoOperacion) [estado](estado)
- [estado](estado) de la [7412583](codigoOperacion)
- [8778777](codigoOperacion) [estado](estado)
- dime las [incidencias](incidencia) [bloqueadas](descripcionEstado)
- [hnc](tipoIncidencia) [descripcion](descripcionEstado)
- [operaciones](operacion) [pause](descripcionEstado)
- dime las [op](operacion) [no iniciadas](descripcionEstado)
- [op](operacion) [no iniciada](descripcionEstado)

## intent:operacion
- ¿ha tenido la [op](operacion) [2222](codigoOperacion) alguna vez una [incidencias](incidencia)?
- ¿Se ha producido algunas [incidencias](incidencia) con la [tarea](operacion) [5965](codigoOperacion)?
- ¿La [operación](operacion) [5547](codigoOperacion) ha tenido alguna vez alguna [incidencia](incidencia)?
- ¿Qué [incidencias](incidencia) tiene la [operacion](operacion) [7895](codigoOperacion)?
- ¿tiene [dificultad](incidencia) la [op](operacion) [3698](codigoOperacion)?
- dime las [incidencias](incidencia) de la [operación](operacion) [2258](codigoOperacion)
- ¿Tiene alguna [HNC](tipoIncidencia) la [op](operacion) [1111](codigoOperacion)?
- [operacion](operacion) [3363](codigoOperacion) [incidencias](incidencia)
- ¿cuantas [incidencias](incidencia) tiene abierta la [op](operacion) [8855](codigoOperacion)?
- Dime que ha pasado anteriormente en esta [operación](operacion) [4441](codigoOperacion)
- [incidencias](incidencia) [op](operacion) [4444](codigoOperacion)
- ¿Hay alguna [HNC](tipoIncidencia) en la [orden](orden) [8888821](codigoOperacion)?
- [Incidencias](incidencia) [orden](orden) [7599999](codigoOperacion)
- ¿tiene algun [demat](tipoIncidencia) la tarea [7111002](codigoOperacion)?
- Dime que [problemas](incidencia) ha tenido esta [orden](orden) [7875556](codigoOperacion) en otros [aviones](avion)
- ¿Cuantas ha tenido el [avion](avion) [160](codigoAvion) en la [estacion](estaciones) [15](codigoEstacion)?
- [Incidencias](incidencia) [avion](avion) [186](codigoAvion)
- ¿Cuantas [incidencias](incidencia) tiene el [avión](avion) [182](codigoAvion)?
- detallame las [HNC](tipoIncidencia) que ha tenido el [aviones](avion) [184](codigoAvion)
- [HNC's](tipoIncidencia)  [avion](avion) [160](codigoAvion) + [estacion](estaciones) [15](codigoEstacion)
- Dime el numero de [HNCs](tipoIncidencia) del [avión](avion) [187](codigoAvion)
- Cuántas [observaciones](tipoIncidencia) ha habido en el [aviones](avion) [178](codigoAvion)?
- Numero total de [incidencias](incidencia) en [estacion](estaciones) [45](codigoEstacion) [aviones](avion) [178](codigoAvion).
- ¿Cuál fue la [HNC](tipoIncidencia) del [avión](avion) [184](codigoAvion) en la [estación](estaciones) [45](codigoEstacion)?
- ¿Cuántos [observaciones](tipoIncidencia) ha tenido el [avión](avion) [182](codigoAvion)?
- Dime cuántas [no conformidades](tipoIncidencia) tiene el [avión](avion) [177](codigoAvion) en la [estación](estaciones) [35](codigoEstacion)
- [observaciones](tipoIncidencia) [avion](avion) [178](codigoAvion)
- Cuántas [incidencias](incidencia) ha habido en el [avión](avion) [183](codigoAvion)?
- ¿En el [avión](avion) [177](codigoAvion) cuantas [incidencias](incidencia) se han abierto?
- ¿Numero de [problema](incidencia) del [avión](avion) [186](codigoAvion)?
- relaciona las [HNCs](tipoIncidencia) del [avion](avion) [171](codigoAvion)
- Dime el número [HNCs](tipoIncidencia) que tiene/tuvo el [aviones](avion) [160](codigoAvion) en la [estación](estaciones) [15](codigoEstacion)
- [Observaciones](tipoIncidencia) [avion](avion) [173](codigoAvion) + [estacion](estaciones) [45](codigoEstacion)
- Listame las [HNCs](tipoIncidencia) del [avión](avion) [172](codigoAvion)
- [hnc](tipoIncidencia) [avion](avion) [160](codigoAvion)
- Dime el número de [no conformidades](tipoIncidencia) que tiene/tuvo el [aviones](avion) [177](codigoAvion) en la [estación](estaciones) [15](codigoEstacion)
- En total cuantas [HNCs](tipoIncidencia) tiene el [avión](avion) [173](codigoAvion) teniendo en cuenta sólo las [estaciones](estaciones) de [FAL](codigoEstacion)
- ¿Cuántas [desviaciones](incidencia) ha tenido el P/N [95-21001-0001GBR145149N01](partNumber)?
- ¿cuantas [HNC´s](tipoIncidencia) tiene la [st](estaciones) [65](codigoEstacion)?
- [hnc](tipoIncidencia) [st](estaciones) [45](codigoEstacion)
- ¿Se ha producido alguna [dificultad](incidencia) con el P/N [95-INSP-CIERRE-CONSOLA-CENTRAL](partNumber)?
- ¿Cuál es la última [HNC](tipoIncidencia) del P/N [95-00168-0001EM01ERC00152](partNumber)?
- Cuantas [desviaciones](incidencia) hemos tenido?
- [dificultad](incidencia) [st](estaciones) [fal](codigoEstacion)
- dime todas las [incidencias](incidencia)
- Cuántas [HNC](tipoIncidencia) se han abierto en el GNT [avionico](avion) de la [estación](estaciones) [45](codigoEstacion)?
- ¿cual es el numero de hnc quer han abierto desde el gnt de carenas?
- ¿Cuantas HNCs pendientes de cerrar tiene el GNT C?
- las [hnc](tipoIncidencia) de la [estacion](estaciones) [fal](codigoEstacion)
- dime las [incidencias](incidencia) del partnumber [95-21001-0001GBR145149N01](partNumber)
- cuantas [incidencias](incidencia) tiene la [estacion](estaciones) [55](codigoEstacion)
- hoja de [no conformidad](tipoIncidencia) del [avion](avion) [180](codigoAvion)
- [incidencias](incidencia) del [180](codigoAvion)
- [incidencias](incidencia) de la [35](codigoEstacion)
- [hnc](tipoIncidencia) del [100](codigoAvion)
- [obs](tipoIncidencia) de la [55](codigoEstacion)
- [incidencias](incidencia) [orden](orden) [7413333](codigoOperacion)
- ¿Qué tipo de problemas ha tenido la [orden](orden) [8770000](codigoOperacion)?
- La [orden](orden) [7000000](codigoOperacion) tiene algún [OBS](tipoIncidencia) registrado???
- Tiene alguna dificultad la [orden](orden) [8000000](codigoOperacion)
- Historico de [problema](incidencia) de [orden](orden) [7996158](codigoOperacion).
- dime los [detalles](operacion) de la [incidencia](incidencia) [123456](codigoOperacion)
- dime las [incidencias](incidencia) de la [orden](orden)  [8059013](codigoOperacion)
- dime las [incidencias](incidencia) de la [operacion](operacion) [1000](codigoOperacion)
- [hoja de no conformidad](tipoIncidencia) de la [operacion](operacion) [3698](codigoOperacion)
- [hoja de no conformidad](tipoIncidencia) de la [oden](orden) [7412589](codigoOperacion)
- cuantas [hncs](tipoIncidencia) tiene la [oden](orden) [8008283](codigoOperacion)
- dime las [incidencias](incidencia) de la [oden](orden)
- dime las [obs](tipoIncidencia) de la [orden](orden) [7777777](codigoOperacion)
- [obs](tipoIncidencia) de la [4445678524](codigoIncidencia)
- [hnc](tipoIncidencia) de la [1234567891](codigoIncidencia)
- [incidencias](incidencia) de la [7777777](codigoOperacion)
- [incidencia](tipoIncidencia) de la [7654321](codigoOperacion)
- [operacion](operacion) del [avion](avion) [180](codigoAvion)
- [operaciones](operacion) de la [estacion](estaciones) [35](codigoEstacion)
- [operaciones](operacion) de la [55](codigoEstacion)
- [operaciones](operacion) del [180](codigoAvion) en la [35](codigoEstacion)
- [incidencias](incidencia) del [100](codigoAvion) en la [55](codigoEstacion)
- [incidencias](incidencia) de la [35](codigoEstacion)
- [faltas](aOrden) en la [estacion](estaciones) [25](codigoEstacion)
- cuantas [faltas](aOrden) hay en la [35](codigoEstacion)

## intent:intent_incidencias_responsable
- ¿Quien actuo en la [incidencia](tipoIncidencia) [4562581479](codigoIncidencia)?
- ¿Quién es el [responsable](responsable) de la [incidencia](tipoIncidencia) [1236332232](codigoIncidencia)?
- dime los detalles de la [incidencia](tipoIncidencia) [14711111211](codigoIncidencia)
- ¿Quién está con la [HNC](tipoIncidencia) [1116667444](codigoIncidencia)?
- Qué trabajador disposicionó esa [HNC](tipoIncidencia) [1111155555](codigoIncidencia)?
- ¿Que departamento es el [responsable](responsable) de la [incidencia](tipoIncidencia) [2222244444](codigoIncidencia)?
- ¿Quién se encargó del warning [4444466666](codigoIncidencia)?
- ¿Quien lanzo la [HNC](tipoIncidencia) 2126663333](codigoIncidencia)?
- ¿que personas han intervenido en la [obs](tipoIncidencia) [4888888852](codigoIncidencia)?
- quién fue el último que trabajó en la [incidencia](tipoIncidencia) [4545454444](codigoIncidencia)?
- ¿Quién está llevando la [HNC](tipoIncidencia) [1199999999](codigoIncidencia)?
- La [HNC](tipoIncidencia) [2247777777](codigoIncidencia) está ya disposicionada
- Usuario de ultima disposicion de [observacion](tipoIncidencia) [221111116](codigoIncidencia)
- ¿Quién es el [encargado](responsable) de siposicionar la [HNC](tipoIncidencia) [1112223334](codigoIncidencia)?
- ¿De quién es la [incidencia](tipoIncidencia) [4433335555](codigoIncidencia)?
- dime las personas que han intervenido en la [incidencia](tipoIncidencia) [4566666665](codigoIncidencia) y las fechas
- compañero que  gestiona la [HNC](tipoIncidencia) [1599511599](codigoIncidencia)
- ¿A quién tengo que pedir información sobre la [HNC](tipoIncidencia) [1588511596](codigoIncidencia)?
- ¿quien me soluciona el warning [abierto](abrir) en la [op](operacion) [1234](codigoOperacion) del [avion](avion) [188](codigoAvion)?
- Quién revisó la disposición de la [OBS](tipoIncidencia) [2258745695](codigoIncidencia)?
- ¿Quién está con la disposición de la [HNC](tipoIncidencia) [1236963215](codigoIncidencia)?
- Se ha respondido a la [HNC](tipoIncidencia) [2225899999](codigoIncidencia)?
- dime las personas que han intervenido en la [incidencia](tipoIncidencia) [123456](codigoIncidencia) y las fechas
- quien es el [responsable](responsable) de la [1234567891](codigoIncidencia)
- de quien es la [4444444444](codigoIncidencia)
- [responsable](responsable) de la [123456](codigoIncidencia)
- [responsable](responsable) de la [hnc](tipoIncidencia) [1234567891](codigoIncidencia)

## intent:operaciones_responsable
- [responsable](responsable) de la [op](operacion) [7654321](codigoOperacion)
- quien es el [responsable](responsable) de la [operacion](operacion) [7777777](codigoOperacion)
- dime el [responsable](responsable) de la [operacion](operacion) [8888888](codigoOperacion)
- que persona gestiona la [op](operacion) [8787878](codigoOperacion)
- [operacion](operacion) [8745625](codigoOperacion) [responsable](responsable)
- [responsable](responsable) de la [7412583](codigoOperacion)
- [8778777](codigoOperacion) [responsable](responsable)

## intent:intent_incidencias_gnt
- ¿Cuantas [HNCs](tipoIncidencia) pendientes tiene el [GNT](tipoGNT) [avionico](descripcionGNT) en la [35](codigoEstacion)?
- cuantas [incidencias](incidencia) tiene el [gnt](tipoGNT) [FUSELAJE INTERIOR](descripcionGNT) [ESTACIÓN](estaciones) [55](codigoEstacion)?
- cuantas [obs](tipoIncidencia) tiene el [gnt](tipoGNT) [SUBCONTRAT](descripcionGNT) [ESTACION](estaciones) [25](codigoEstacion)?
- [incidencias](incidencia) [gnt](tipoGNT) [AVIONICO](descripcionGNT) [ESTACION](estaciones) [45](codigoEstacion)
- [obs](tipoIncidencia) [gnt](tipoGNT) [ELECTROMECANICO](descripcionGNT) [ESTACION](estaciones) [35](codigoEstacion)?
- [demat](tipoIncidencia) [gnt](tipoGNT) [CALIDAD](descripcionGNT) [ESTACIÓN](estaciones) [65](codigoEstacion)
- cuantas [incidencias](incidencia) tiene el [gnt](tipoGNT) [avionico](descripcionGNT) [estacion](estaciones) [45](codigoEstacion)?
- cuantas [demat](tipoIncidencia) tiene el [gnt](tipoGNT) [subcontrat](descripcionGNT) [estacion](estaciones) [25](codigoEstacion)?
- [incidencias](incidencia) [gnt](tipoGNT) [electromecanico](descripcionGNT) [estación](estaciones) [35](codigoEstacion)
- [obs](tipoIncidencia) [gnt](tipoGNT) [fuselaje interior](descripcionGNT) [estación](estaciones) [55](codigoEstacion)?
- [demat](tipoIncidencia) [gnt](tipoGNT) [calidad](descripcionGNT) [estacion](estaciones) [65](descripcionGNT)
- dime las [incidencias](incidencia) en la [estacion](estaciones) [45](codigoEstacion) del [gnt](tipoGNT) [calidad](descripcionGNT)
- dime las [incidencias](incidencia) del [gnt](tipoGNT) [taller electronica](descripcionGNT) en la [45](codigoEstacion)
- [incidencias](incidencia) del [gnt](tipoGNT) [electromecanico](descripcionGNT)

## intent:orden
- dime las [faltas](aOrden) de la [operacion](orden) [7654321](codigoOperacion)
- cuentame las [materiales](aOrden) de la [7654321](codigoOperacion)
- cuantos [operarios](aOrden) hay en la [operación](operacion) [7412574](codigoOperacion)
- [operarios](aOrden) de la [7412574](codigoOperacion)
- cuantos [operarios teóricos](aOrden) tiene la [operacion](operacion) [7412554](codigoOperacion)
- [operarios teoricos](aOrden) de la [7332574](codigoOperacion)
- cuantos [operarios reales](aOrden) tiene la [operacion](operacion) [7400554](codigoOperacion)
- [operarios reales](aOrden) de la [7399574](codigoOperacion)
- cual es la [duracion](aOrden) de la [operacion](operacion) [8525852](codigoOperacion)
- [duracion](aOrden) de la [8525852](codigoOperacion)
- cual es la [duración](aOrden) de la [operacion](operacion) [8985852](codigoOperacion)
- [duración teórica](aOrden) de la [8775852](codigoOperacion)
- cual es la [duracion teórica](aOrden) de la [operacion](operacion) [8000852](codigoOperacion)
- [duracion teorica](aOrden) de la [8523302](codigoOperacion)
- [duración teorica](aOrden) de la [8520005](codigoOperacion)
- cual es la [duracion real](aOrden) de la [operacion](operacion) [7000852](codigoOperacion)
- [duración real](aOrden) de la [7523302](codigoOperacion)
- cual es el [camino critico](aOrden) de la [operacion](operacion) [8796995](codigoOperacion)
- [camino critico](aOrden) de la [8796995](codigoOperacion)
- cuantos [trabajadores](aOrden) tiene la [operacion](operacion) [7416543](codigoOperacion)
- cuantos [trabajadores teoricos](aOrden) tiene la [op](operacion) [7411111](codigoOperacion)
- [trabajadores](aOrden) tiene la [7466583](codigoOperacion)
- [bluecollars](aOrden) tiene la [7006583](codigoOperacion)
- [blue collars](aOrden) tiene la [8866583](codigoOperacion)
- [trabajadores teóricos](aOrden) de la [7414443](codigoOperacion)
- cuantos [trabajadores reales](aOrden) tiene la [op](operacion) [7558111](codigoOperacion)
- [trabajadores reales](aOrden) tiene la [7466003](codigoOperacion)
- cual es el [avance](aOrden) de la [operacion](operacion) [7654321](codigoOperacion)
- [avance](aOrden) de la [7654321](codigoOperacion)
- dime el [progreso](aOrden) de la [op](operacion) [7425331](codigoOperacion)
- [progreso](aOrden) de la [7425331](codigoOperacion)
- cual es el [nombre](aOrden) de la [op](operacion) [7521436](codigoOperacion)
- [nombre](aOrden) de la [8554551](codigoOperacion)
- que [perfil](aOrden) tiene esta [operación](operacion) [7654321](codigoOperacion)
- [perfiles](aOrden) de la [7654321](codigoOperacion)
- que [comentarios](aOrden) tiene la [8521456](codigoOperacion)
- [comentarios](aOrden) de la [8521444](codigoOperacion)
- dime el [inicio](aOrden) de la [operacion](operacion) [7654321](codigoOperacion)
- dime el [inicio](aOrden) de la [8765432](codigoOperacion)
- dime el [inicio teórico](aOrden) de la [8123456](codigoOperacion)
- dime el [inicio teorico](aOrden) de la [8666666](codigoOperacion)
- [inicio real](aOrden) de la [8000222](codigoOperacion)
- dime el [final](aOrden) de la [operacion](operacion) [7654321](codigoOperacion)
- dime el [final](aOrden) de la [8765432](codigoOperacion)
- dime el [final teórico](aOrden) de la [8123456](codigoOperacion)
- dime el [final teorico](aOrden) de la [8666666](codigoOperacion)
- [final real](aOrden) de la [8000222](codigoOperacion)
- cuantas [operaciones](operacion) tiene [abiertas](abrir) el [avion](avion) [180](codigoAvion)
- cuantas [operacion](operacion) tiene la [estacion](estaciones) [35](codigoEstacion)
- de que [avion](avion) es la [operacion](operacion) [7777777](codigoOperacion)
- a que [avion](avion) pertenece la [7654321](codigoOperacion)
- de que [gnt](tipoGNT) es la [operacion](operacion) [7654321](codigoOperacion)
- a que [gnt](tipoGNT) pertenece la [7777777](codigoOperacion)
- cual es la [asignacion](aOrden) de la [operacion](operacion) [8455471](codigoOperacion)
- cuantas [operaciones](operacion) estan al [95](aOrden)%
- cuantas [operaciones](operacion) se encuentran al [99](aOrden)%
- cuantas [operaciones](operacion) tienen [faltas](aOrden)

## intent:descripcion
- [fallo](verbos) [mandos de vuelo](servicio)

## intent:intent_estacion
- [25](codigoEstacion)
- [35](codigoEstacion)
- [45](codigoEstacion)
- [55](codigoEstacion)
- [65](codigoEstacion)
- [75](codigoEstacion)

## regex:codigoAvion
- [1-9]{3}

## regex:codigoEstacion
- [1-9]{1}[5]{1}

## regex:codigoOperacion
- [7-8]{1}[1-9]{6}

## lookup: estaciones
- st
- st.
- sta
- sta.

## lookup: operacion
- operacion
- operación
- op
- op.
- operaciones
- tarea
- tareas
- detalle
- detalles
- orden
- ordenes

## lookup:aOrden
- falta
- material
- inicio
- comienzo
- comenzo
- comenzó
- final
- finalizo
- finalizó
- fin
- nombre
- avance
- progreso
- operarios teoricos
- operarios
- bluecollars
- blue collar
- trabajadores teoricos
- trabajadores
- camino critico
- duracion
- duracion teorica
- comentarios
- perfil
- 95%
- 99%

## lookup:tipoIncidencia
- HNC
- hnc
- HNCs
- HNC's
- hncs
- hnc's
- no conformidades
- no conformidad
- OBS
- OB
- ob
- obs
- observacion
- observación
- Observacion
- Observación
- observaciones
- OBSERVACIONES
- FINOBS
- finobs
- FINOB
- finob
- demat
- DEMAT
- incidencia
- INCIDENCIA

## lookup:descripcionEstado
- inicio
- descripcion
- resolucion
- resuelto
- revision
- revisado
- bloqueada
- bloqueadas
- no iniciada
- no iniciadas
- fin
- pause
- play

## lookup:codigoAvion
- 100
- 110
- 120
- 140
- 150
- 160
- 180

## lookup:codigoEstacion
- 25
- 35
- 45
- 55
- 65
- 75
- 85

## lookup: descripcionGNT
- SUBCONTRAT 
- subcontrat
- SUBCONTRATACION
- subcontratacion
- SUBCONTRATACIÓN
- CALIDAD
- calidad
- TALLER ELECTRÓNICA
- taller electronica
- PROA
- proa
- fuselaje
- FUSELAJE
- FUSELAJE EXTERIOR
- fuselaje exterior
- FUSELAJE INTERIOR
- fuselaje interior
- AVIONICO
- avionico
- ELECTROMECANICO
- electromecanico
- ELECTROAVIONICO EXTERIOR
- electroavionico exterior
- ACONDICIONAMIENTO
- acondicionamiento
- MECANICO
- MECÁNICO
- mecánico
- mecanico
- TP_Aviónica
- tp avionica
- Aseguramiento Eléctrico
- aseguramiento electrico
- Aseguramiento Mecánico
- aseguramiento mecanico

## lookup: verbos
- fallo
- falla

## lookup: colorMarcasInterior
- ROTULOS Y MARCAS INTERIORES
- CABINA DE PILOTOS
- NIVELACION Y PESAJE
- INFORMACION GENERAL
- ENERGIA ELECTRICA
- ACONDICIONAMIENTO INTERIOR
- PROTECCION CONTRA INCENDIOS
- MANDOS DE VUELO
- TREN DE ATERRIZAJE
- NAVEGACION
- CABINA PRINCIPAL
- COMUNICACIONES
- ENERGIA ELECTRICA
- ACONDICIONAMIENTO INTERIOR
- PROTECCION CONTRA INCENDIOS
- ILUMINACION
- OXIGENO
- PUERTAS
- REFERENCIA DE FUSELAJE
- COMPARTIMIENTO DE CARGA
- ACONDICIONAMIENTO INTERIOR
- PUERTAS
- GUERRA ELECTRONICA


## lookup: colorMarcasExterior
- NAVEGACION
- ALAS
- GONDOLAS Y PILONES
- NIVELACION Y PESAJE
- ACEITE
- ESTABILIZADORES
- IZADO Y SUSPENSION
- NIVELACION Y PESAJE
- ESTABILIZADORES
- CARENAS DE TREN DE ATERRIZAJE
- IZADO Y SUSPENSION
- NIVELACION Y PESAJE
- COMUNICACIONES
- ENERGIA ELECTRICA
- COMBUSTIBLE
- ENERGIA HIDRAULICA
- TREN DE ATERRIZAJE
- OXIGENO
- PUERTAS

## lookup: servicio
- GAS
- ENERGIA HIDRAULICA
- TREN DE ATERRIZAJE
- OXIGENO
- FLUIDO PARA INODORO
- INODORO
- AGUA
- AGUA POTABLE
- REPELENTE DE LLUVIA
- ANTIHIELO Y ANTILLUVIA
- OXIGENO LIQUIDO
- OXIGENO
- SERVICIO PROGRAMADO
- LIMPIEZA
- LIMPIEZA EXTERIOR
- LIMPIEZA INTERIOR
- LUBRICACION
- COMPONENTES DE ACONDICIONAMIENTO INTERIOR
- MANDOS DE VUELO
- TREN DE ATERRIZAJE
- PUERTAS
- GONDOLAS
- ESTABILIZADORES
- VENTANAS
- ALAS
- MANDOS DE MOTOR
- DRENAJE
- FUSELAJE
- SERVICIO NO PROGRAMADO
- PROTECCION DEL AVION
- ELIMINACION DE HIELO Y NIEVE
- ELIMINACION DE ARENA Y GRAVILLA
- TOMA DE MUESTRAS PARA ANALISIS
- COMBUSTIBLE
- FLUIDO HIDRAULICO
- ACEITE DE MOTOR
- PUNTOS DE PUESTA A TIERRA
- PUESTA A TIERRA DEL AVION
- LAVADO DE TUBERIAS
- ENERGIA HIDRAULICA

##lookup: acondicionamientoAire
- COMPRESION
- SISTEMA DE COMPRESION
- INTERRUPTOR DE ALTA PRESION
- INTERRUPTOR DE SOBREPRESION
- INTERRUPTOR DE SOBRETEMPERATURA
- UNIDAD DE CONTROL DE AIRE ACONDICIONADO
- CONDUCTO VENTURI DE ALTA PRESION
- CONDUCTO DE BAJA PRESION
- CONDUCTO DE UNION
- CONDUCTO DE VALVULA ANTIRRETORNO DE BAJA PRESION
- REFRIGERADOR PREVIO
- VALVULA ANTIRRETORNO
- VALVULA  DE CIERRE DE ALTA PRESION
- VALVULA REGULADORA DE PRESION Y CIERRE
- VALVULA CRUCE
- FILTRO DE VALVULA  DE CIERRE DE ALTA PRESION
- FILTRO DE VALVULA REGULADORA DE PRESION Y CIERRE
- DISTRIBUCION
- SISTEMA DE DISTRIBUCION Y RECIRCULACION, CABINA PRINCIPAL
- VENTILADOR DE RECIRCULACION
- COLECTOR
- CONDUCTOS DIFUSORES DE TECHO
- SISTEMA DE DISTRIBUCION, CABINA DE PILOTOS
- VALVULA CALIENTAPIES
- SALIDA DE AIRE PARA EL ROSTRO
- SALIDA DE AIRE EN TECHO
- VENTILACION EN LAVABO
- DISTRIBUCION INDIVIDUAL DE AIRE
- VENTILACION DE CONPARTIMIENTO DE MORRO
- VENTILACION DE EQUIPOS DE AVIONICA
- VENTILADOR
- CONDUCTO EXTRACTOR
- VENTILACIÓN DE EQUIPOS DE MISIÓN
- UNIDAD DE CONTROL VENTILADORES DE EQUIPOS DE MISIÓN
- CONJUNTO DIFUSOR
- VENTILADOR DE EQUIPOS DE MISIÓN
- VENTILADOR DE EQUIPOS DE RADAR
- CONTROL DE PRESURIZACION
- SISTEMA DE CONTROL DE PRESURIZACION
- MICROINTERRUPTORES DE RAMPA
- INDICADOR DE PRESION EN CABINA
- TRANSDUCTOR PRESIÓN DIFERENCIAL
- CONTROLADOR DE PRESION
- VALVULA ANTIRRETORNO DE AIRE
- BOMBA EYECTORA
- VALVULA DE DESCARGA PRIMARIA
- VALVULA DE DESCARGA SECUNDARIA
- VALVULA SOLENOIDE COAXIAL
- UNIDAD DE CONTROL DE PRESION EN CABINA
- VALVULA DE CONTROL DE VACIO
- FILTRO DE VALVULA DE DESCARGA PRIMARIA
- REFRIGERACION
- SISTEMA DE REFRIGERACION
- INTERRUPTOR DE SOBRETEMPERATURA DEL COMPRESOR
- MAQUINA DE CICLO DE AIRE
- INTERCAMBIADOR DOBLE DE CALOR
- CONDENSADOR Y MEZCLADOR
- SEPARADOR DE AGUA
- CONJUNTO DE SILENCIADOR
- BOQUILLA DE PULVERIZACION DEL CONJUNTO DE CONDUCTO
- CONDUCTO DE SALIDA DE AIRE
- CONDUCTO DE SALIDA DE TURBINA 
- CONTROL DE TEMPERATURA
- SISTEMA DE CONTROLDE TEMPERATURA
- SENSOR DE TEMPERATURA DE SUMINISTRO 
- SENSOR DE TEMPERATURA DE CABINA DE PILOTOS 
- SENSOR DE TEMPERATURA DE CABINA PRINCIPAL
- INTERRUPTOR DE SOBRETEMPERATURA DE SUMINISTRO
- SENSOR DE TEMPERATURA DE AIRE DE CABINA DE PILOTOS
- SENSOR DE TEMPERATURA DE AIRE DE CABINA PRINCIPAL
- INDICADOR DE TEMPERATURA
- CONTROLADOR DE TEMPERATURA
- CONTROLADOR DE TEMPERATURA  MANUAL
- VALVULA DOBLE DE CONTROL DE TEMPERATURA

##lookup: vueloControlado
- PILOTO AUTOMATICO
- PANEL DE CONTROL DE DIRECCION DE VUELO (FGCP)
- UNIDAD DE ACOPLAMIENTO  Y CONTROL (CEU)
- ACELEROMETRO VERTICAL
- MODULO DE DIRECCION DE VUELO (FGM)
- SERVO DE ALERON (SERVOMOTOR)
- SERVO DE ALERON (RODILLO IMPULSOR DE SERVO)
- SERVO DE TIMON DE DIRECCION (SERVOMOTOR)
- SERVO DE TIMON DE DIRECCION (RODILLO IMPULSOR DE SERVO)
- SERVO DE TIMON DE ALTURA (SERVOMOTOR)
- SERVO DE TIMON DE ALTURA (RODILLO IMPULSOR DE SERVO)

##lookup: comunicaciones
- COMUNICACIONES HABLADAS
- SISTEMA DE HF
- UNIDAD DE CONTROL DE HF
- ANTENA DE HF
- TRASCEPTOR HF
- SISTEMA DE VHF
- UNIDAD DE CONTROL DE VHF 
- ANTENA DE VHF
- TRANSCEPTOR  DE VHF
- TRANSMISION DE DATOS Y LLAMADA AUTOMATICA
- SISTEMA DE ENLACE DE DATOS (DLS)
- MODEM 
- ADAPTADOR DE c.c./c.c.
- UNIDAD DE CONTROL DE DATA LINK
- ORDENADOR AUXILIAR DE GESTION (AMC)
- ATR1
- ATR2
- REPETIDOR USB
- EXTENSOR USB
- MEGAFONIA
- SISTEMA DE MEGAFONIA
- ESTACION DE SERVICIO DE INTERFONO
- UNIDAD DE CONTROL PTT/RADIO
- AMPLIFICADOR DE MEGAFONIA
- ALTAVOZ
- INTERFONO
- SISTEMA DE INTERFONO
- UNIDAD DE CONTROL PTT/RADIO
- UNIDAD DE CONTROL PTT/RADIO DE OBSERVADOR
- ESTACION DE SERVICIO DE INTERFONO
- ESTACION DE SERVICIO DE INTERFONO
- UNIDAD DE CONTROL DE INTERFONO DE OBSERVADOR
- AMPLIFICADOR DE SERVICIO
- INTEGRACION DE AUDIO
- SISTEMA INTEGRADO DE AUDIO
- PANEL CONTROL AUDIO
- PANEL CONTROL AUDIO DE CABINA (CACP)
- CONEXIÓN DE AUDIO - EXTERIOR
- CONEXIÓN DE AUDIO - TECHO
- UNIDAD DE CONTROL PTT CONTROL
- UNIDAD ELECTRONICA REMOTA 
- UNIDAD DE GESTION DE AUDIO (AMU)
- SEUDO PANEL CONTROL AUDIO
- GENERADOR DE TONO
- UNIDAD INTERFACE DE CRIPTOGRAFIA (CIU)
- PANEL DE CONEXIONES
- PANEL DE CONEXIONES - TRIPULACION
- PANEL DE CONEXIONES - TRIPULACION
- PANEL DE CONEXIONES - CABINA PRINCIPAL
- PANEL DE CONEXIONES - CABINA PRINCIPAL
- PANEL DE CONEXIONES - ARMARIO EN CUADERNA 10
- PANEL DE CONEXIONES - ARMARIO EN CUADERNA 10
- PANEL DE CONEXIONES - COMPARTIMIENTO DE MORRO
- PANEL DE CONEXIONES - PUESTO DE COMBUSTIBLE
- ALTAVOZ
- AURICULARES
- INTERRUPTOR DE PIE DE PTT
- RELE
- CONJUNTO DE POTENCIOMETRO
- PANEL CONTROL AUDIO DE MISIÓN
- PANEL DE CONEXIONES - MISIÓN
- UNIDAD SUMADORA DE AUDIO (ASU)
- DESCARGA ESTATICA
- SISTEMA DE DESCARGA ESTATICA
- DESCARGADORES ESTATICOS
- CONTROL DE VOZ E IMÁGENES
- SISTEMA DE GRABACIÓN DE VOZ DE CABINA DE PILOTOS (CVR)
- UNIDAD DE CONTROL
- MICROINTERRUPTOR DE FRENO DE APARCAMIENTO
- GRABADORA DE VOZ DE CABINA DE PILOTOS

##lookup: energiaElectrica
- PUESTA A MASA ALA-FUSELAJE
- GENERACION DE CORRIENTE ALTERNA
- UNIDAD DE CONTROL DE CONVERTIDORES DE CA
- CONVERTIDORES
- CONVERTIDORES DEL RTP
- GENERACION DE CORRIENTE ALTERNA - FRECUENCIA NO REGULADA
- UNIDAD DE CONTROL DEL GENERADOR DE CA
- INTERRUPTOR AUTOMATICO
- ALTERNADOR
- TRANSFORMADOR DE CORRIENTE
- CONTACTOR
- CAJA DE CONTACTORES
- CAJA DE CONTACTORES DERECHA
- SISTEMA DE SUMINISTRO ELÉCTRICO DE CA DE EQUIPOS ESPECIALES
- UNIDAD DE CONTROL PTU POWER
- SISTEMA DE SUMINISTRO ELÉCTRICO DE POD
- UNIDAD DE CONTROL ECM PODS PWR CTRL
- UNIDAD DE CONTROL ECM PODS FAIL
- SISTEMA CONVERTIDOR DE FRECUENCIA TRIFÁSICO
- CONTACTOR
- INTERRUPTOR AUTOMATICO
- SISTEMA DE INDICACION DE ALIMENTACION DE CORRIENTE ALTERNA
- VOLTIMETRO DE CA
- GENERACION DE CORRIENTE CONTINUA
- SISTEMA DE GENERACION DE CORRIENTE CONTINUA
- UNIDAD DE CONTROL DE GENERACION DE POTENCIA
- UNIDAD DE CONTROL MSTR ELECT
- UNIDAD DE CONTROL DEL GENERADOR DE CC
- ARRANCADOR - GENERADOR
- KIT DE MONTAJE DEL ARRANCADOR-GENERADOR
- TRANSFORMADOR DE CORRIENTE
- SISTEMA DE GENERACION DE CORRIENTE CONTINUA POR BATERIAS
- BATERIA
- SISTEMA DE INDICACION DE ALIMENTACION DE CORRIENTE CONTINUA
- VOLTIMETRO DE CC
- AMPERIMETRO DE GENERADOR DE CC
- AMPERIMETRO DE BATERIA
- SISTEMA DE INDICACION DE TEMPERATURA DE BATERIAS
- UNIDAD DE CONTROL SYSTEM TEST
- INDICADOR
- CIRCUITO DE BATERIA AUXILIAR DEL EFIS
- BATERIA AUXILIAR DEL EFIS
- SISTEMA DE GENERACION DE CORRIENTE CONTINUA POR TRANSFORMADOR/RECTIFICADOR (TR)
- UNIDAD DE CONTROL MISCELLANEOUS-BUS
- TRANSFORMADOR / RECTIFICADOR
- CONTACTOR
- UNIDAD DE DISTRIBUCIÓN DE BARRA MISCELANEA (MBDU) IZQUIERDA
- UNIDAD DE DISTRIBUCIÓN DE BARRA MISCELANEA (MBDU) DERECHA
- SISTEMA DE GENERACIÓN DE CORRIENTE CONTINUA DE MISIÓN
- UNIDAD DE CONTROL ELECTRICAL POWER
- TRANSFORMADOR/RECTIFICADOR
- UNIDAD DE DISTRIBUCIÓN DE BARRA MISCELANEA DE MISIÓN (MSMBDU)
- UNIDAD DE DISTRIBUCIÓN DE BARRA MISCELANEA DE MISIÓN (MSMBDU) DERECHA
- UNIDAD DE DISTRIBUCIÓN DE BARRA MISCELANEA DE MISIÓN (MSMBDU) IZQUIERDA
- POTENCIA EXTERIOR
- POTENCIA EXTERIOR DE CORRIENTE CONTINUA
- CONECTOR
- POTENCIA EXTERIOR DE CORRIENTE ALTERNA
- PROTECCION POTENCIA TIERRA
- CONTACTOR
- DISTRIBUCION DE CARGAS ELECTRICAS DE CORRIENTE ALTERNA
- SISTEMA DE DISTRIBUCION PRINCIPAL DE CORRIENTE ALTERNA
- PANEL DE INTERRUPTORES AUTOMATICOS AVIONICS 1/2
- PANEL DE INTERRUPTORES AUTOMATICOS MISCELLANEOUS
- UNIDAD DE DISTRIBUCIÓN DE BARRA MISCELANEA (MBDU) DE C.A.
- SERVICIOS GENERALES DE CORRIENTE ALTERNA
- UNIDAD DE CONTROL AC POWER
- CONVERTIDOR
- CONVERTIDOR DE 230V AC
- RELE
- DISTRIBUCION DE CARGAS ELECTRICAS DE CORRIENTE CONTINUA
- SISTEMA DE DISTRIBUCION PRINCIPAL DE CORRIENTE CONTINUA
- PANEL DE INTERRUPTORES AUTOMATICOS SYSTEMS 1
- PANEL DE INTERRUPTORES AUTOMATICOS SYSTEMS 2
- PANEL DE INTERRUPTORES AUTOMATICOS AVIONICS 1/AVIONICS 2
- PANEL DE INTERRUPTORES AUTOMATICOS L MISCELLANEOUS
- PANEL DE INTERRUPTORES AUTOMATICOS R MISCELLANEOUS
- PANEL DE INTERRUPTORES AUTOMATICOS DAS SENSORS 
- PANEL DE INTERRUPTORES AUTOMATICOS DAS 
- UNIDAD DE PROTECCION DE BATERIAS (BPU)
- UNIDAD DE DISTRIBUCIÓN DE BARRA MISCELANEA (MBDU) DE C.C.
- SISTEMA DE DISTRIBUCIÓN DE CORRIENTE CONTINUA DE MISIÓN
- PANEL DE INTERRUPTORES AUTOMÁTICOS MFC 1 CB
- PANEL DE INTERRUPTORES AUTOMÁTICOS MFC 2 CB
- UNIDAD DE CONTROL DE INTERRUPTORES AUTOMÁTICOS DE SENSORES
- UNIDAD DE CONTROL DE BATERÍA DE MISIÓN
- PANEL DE INTERRUPTORES AUTOMÁTICOS MISSION
- PANEL DE INTERRUPTORES AUTOMÁTICOS TACCO CB
- VOLTIMETRO DE CC
- INDICADOR DE TEMPERATRURA DE BATERÍA
- UNIDAD DE DISTRIBUCIÓN DE BARRA DE MISIÓN
- BATERÍA DE EMERGENCIA
- CONVERTIDOR
- SISTEMA DE DISTRIBUCIÓN DE CORRIENTE CONTINUA DE SRFOT
- SERVICIOS GENERALES DE CORRIENTE CONTINUA
- EQUIPO MULTIFUNCIONAL
- PUNTOS DE PUESTA A MASA
- PANELES DE RELES
- RELE
- PANELES DE FUSIBLES
- FUSIBLE
- REGLETAS DE CONEXIONES

##lookup: estacionesEstructurales
- Estaciones estructurales
- Fuselaje
- Góndolas
- Estabilizadores
- Alas

##lookup: divisionZonas
- ZONA 100
- ZONA 110
- ZONA 102
- ZONA 123/124
- ZONA 125
- ZONA 127/128
- ZONA 131/132
- ZONA 141/142
- ZONA 151/152
- ZONA 161/162
- ZONA 163/164
- ZONA 165
- ZONA 166
- ZONA 200
- ZONA 211/212/215/217
- ZONA 213
- ZONA 221/222
- ZONA 231/232
- ZONA 233/234
- ZONA 241/242
- ZONA 243/244
- ZONA 251/252
- ZONA 253/254
- ZONA 261/262
- ZONA 300
- ZONA 311/312
- ZONA 313
- ZONA 321
- ZONA 322
- ZONA 323
- ZONA 324
- ZONA 325
- ZONA 326/327/328
- ZONA 331/341
- ZONA 332/342
- ZONA 333/343
- ZONA 334/344
- ZONA 335/336/337/345/346/347
- ZONA 400
- ZONA 410/420
- ZONA 500/600
- ZONA 511/611
- ZONA 512/612
- ZONA 521/621
- ZONA 522/622
- ZONA 531/631
- ZONA 532/632
- ZONA 541/641
- ZONA 551/552/553/651/652/653
- ZONA 561/661
- ZONA 562/563/662/663
- ZONA 711/712
- ZONA 713
- ZONA 731/741
- ZONA 811
- ZONA 812
- ZONA 831/842
- ZONA 832
- ZONA 841
- ZONA 900
- ZONA 911/912
- ZONA 921/922
- ZONA 923/924/925/926
- ZONA 931/932
- ZONA 941/942
- ZONA 943/944
- ZONA 951/952
- ZONA 953/954
- ZONA 961/962
- ZONA 971/972
- ZONA 981/982/983/984
- ZONA 985/986

##lookup: accesos
- Accesos
- Puertas
- Fuselaje
- Gondolas
- Estabilizadores
- Alas

##lookup: izado
- ELEVACION SOBRE GATOS
- ELEVACION SOBRE GATOS PARA MANTENIMIENTO
- ELEVACION SOBRE GATOS - SUSTITUCION DE RUEDAS
- SUSPENSION
- IZADO CON ESLINGA
- IZADO DE HELICE
- IZADO DE ALA EXTERIOR
- IZADO DE PLANO MEDIO
- IZADO DE ESTABILIZADOR VERTICAL
- IZADO DE ESTABILIZADOR HORIZONTAL
- RECUPERACION

##lookup: nivelacionPesaje
- PESAJE Y EQUILIBRADO
- MASA Y EQUILIBRADO
- NIVELACION
- NIVELACION RAPIDA
- NIVELACION DE PRECISION
- PESAJE
- MASA Y CENTRO DE GRAVEDAD

##lookup: remolqueRodaje
- REMOLQUE
- RODAJE

##lookup: aparcamiento
- Aparcamiento
- Almacenamiento
- Anclaje
- vuelta al servicio

##lookup: proteccionIncendios
- SISTEMA DE DETECCION DE INCENDIOS
- DETECCION DE SOBRETEMPERATURA E INCENDIOS DE MOTOR
- UNIDAD DE CONTROL
- ELEMENTO SENSOR
- DETECTOR DE HUMOS DE CABINA PRINCIPAL Y COMPARTIMIENTO DE CARGA
- DETECTOR DE HUMOS EN TECHO
- DETECTOR DE HUMOS EN TOILET
- DETECTOR DE HUMOS DE CONTENEDOR DE RAMPA
- DETECTOR DE HUMOS BAJO EL PISO
- UNIDAD DE CONTROL RAMP CONTAINER
- PANEL DE COMPROBACION DE DETECTORES DE HUMO
- DETECCION DE SOBRETEMPERATURA-FUGA DE AIRE SANGRADO
- INTERRUPTOR DE SOBRETEMPERATURA, ZONA DE PLANO MEDIO
- INTERRUPTOR DE SOBRETEMPERATURA, ZONA DE MOTOR
- SISTEMA DE EXTINCION DE INCENDIOS
- EXTINCION DE INCENDIOS DE MOTOR
- UNIDAD DE CONTROL DE INCENDIOS
- INDICADOR DE DESCARGA DE SOBREPRESION
- EXTINTOR DE INCENDIOS
- CARTUCHO
- VALVULA DE DISTRIBUCION
- SISTEMA DE EXTINCION DE INCENDIOS PORTATIL
- EXTINTOR MANUAL
- EXTINCION DE INCENDIOS DEL COMPARTIMIENTO DE ASEO
- EXTINTOR DE FUEGO DE ASEO
- EXTINCION DE INCENDIOS DEL COMPARTIMIENTO DE GALLEY
- EXTINTOR DE FUEGO DE GALLEY
- EXTINCION DE INCENDIOS DEL CONTENEDOR DE RAMPA

##lookup: mandosVuelo
- ALERONES Y ALETAS
- MANDOS MECANICOS DE ALERONES
- UNIDAD DE CONTROL FLT CONT DISC
- BARRA ELECTROMECANICA, CF5
- BARRA ELECTROMECANICA, CF8
- VOLANTE DE MANDO, ZD7 (ZD6)
- CONJUNTO DE PALANCA ACODADA, STA 3508
- CONJUNTO DE PALANCA ACODADA, STA 3630
- CONJUNTO DE PALANCA ACODADA, STA 3630
- CONJUNTO DE SECTOR, CABINA DE PILOTOS
- CONJUNTO REGULADOR, FUSELAJE
- CONJUNTO REGULADOR, PLANO MEDIO
- CONJUNTO DE SECTOR, ALA EXTERIOR
- CABLES DE MANDO DE ALERON
- ALETAS DE COMPENSACION DE ALERONES
- UNIDAD DE CONTROL STBY TRIMS, ZD103
- INDICADOR DE POSICION DE COMPENSACION, DF2
- BARRA DE MANDO
- ACTUADOR, CC15 (CC6)
- ALETAS DE SERVO DE ALERON
- BARRA DE MANDO
- TIMON DE DIRECCION Y ALETA
- MANDO DE TIMON DE DIRECCION
- SENSOR DE POSICION DE TIMON DE DIRECCION, CJ22
- UNIDAD DE CONTROL FLIGHT CONTROL, ZD160
- TRANSDUCTOR DE LIMITACION DE CARRERA, CJ20 CJ21
- UNIDAD DE CONTROL DE AUTOCOMPENSACION Y LIMITACION DE CARRERA DE TIMON DE DIRECCION (ARTCU)
- ACTUADOR DE LIMITACION DE CARRERA, CJ18
- CONJUNTO DE PEDALES DE TIMON DE DIRECCION
- DISPOSITIVO DE AJUSTE DE PEDALES DE TIMON DE DIRECCION
- CONJUNTO DE PALANCA ACODADA, CABINA DE PILOTOS, STA 3101
- CONJUNTO DE PALANCA ACODADA, CABINA DE PILOTOS, STA 3826
- CONJUNTO DE SECTOR, CABINA DE PILOTOS
- CONJUNTO REGULADOR, FUSELAJE
- CONJUNTO DE TUBO DE TORSION
- CONJUNTO DE PALANCA LIMITADORA
- CABLES DE MANDO DE TIMON DE DIRECCION
- SISTEMA REFORZADOR DE TIMON DE DIRECCION
- VALVULA ANTIRRETORNO
- FILTRO
- VALVULA DE 3 VIAS DE TIMON DE DIRECCION, CH13 (CH14)
- ACTUADOR NEUMATICO, CH3 
- ALETA DE COMPENSACION DE TIMON DE DIRECCION
- UNIDAD DE CONTROL RUDDER TRIM, ZD140
- ACTUADOR, CD7
- BARRA DE MANDO
- ALETA DE SERVO DE TIMON DE DIRECCION
- BARRA DE MANDO
- TIMON DE ALTURA Y ALETAS
- MANDO MECANICO DE TIMON DE ALTURA
- BARRA ELECTROMECANICA, CF6
- BARRA ELECTROMECANICA, CF7
- COLUMNA DE MANDO
- CONJUNTO DE PALANCA ACODADA Y SOPORTE, CABINA DE PILOTOS, STA 3826
- CONJUNTO DE PALANCA ACODADA, CABINA DE PILOTOS, STA 3983
- CONJUNTO DE SECTOR
- CONJUNTO DE TUBO DE TORSION
- CONJUNTO REGULADOR IZQUIERDO, FUSELAJE POSTERIOR
- CONJUNTO DE PALANCA ACODADA Y SOPORTE, FUSELAJE POSTERIOR
- CONJUNTO DE PALANCA Y SOPORTE
- CABLES DE MANDO DE TIMON DE ALTURA
- ALETAS DE COMPENSACION DE TIMON DE ALTURA
- ACTUADOR, CB9 (CB17)
- BARRA DE MANDO
- ALETAS DE SERVO DE TIMON DE ALTURA
- BARRA DE MANDO
- SISTEMA DE AVISO DE ENTRADA EN PERDIDA Y DE RECUPERACION
- UNIDAD DE CONTROL DE AVISO ACUSTICO DE ENTRADA EN PERDIDA, FF45
- UNIDAD DE CONTROL, FF65 (FF66)
- UNIDAD DE CONTROL SWRS
- CABRESTANTE
- BOCINA
- VIBRADOR
- ACTUADOR IMPULSOR
- CABLES DE MANDO
- FLAPS
- MANDO ELECTROMECANICO DE FLAPS
- PALANCA DE MANDO, CE4
- UNIDAD DE CONTROL DE FLAPS, CE40
- UNIDAD DE VALIDACION, CE16
- UNIDAD DE CONTROL ELECTRONICO, CE3
- POTENCIOMETRO
- ACTUACION HIDRAULICA DE FLAPS Y TRANSMISION DE POTENCIA
- UNIDAD MOTRIZ, CE11
- LIMITADOR DE PAR, EXTERIOR
- EJES DE TRANSMISION
- UNION
- CONJUNTO DE ALOJAMIENTO DE COJINETE
- LIMITADOR DE PAR, INTERIOR
- CONJUNTO DE TRANSMISION FLEXIBLE
- ACTUADOR DE TORNILLO Y CONJUNTO DE CARRO ANTERIOR
- CONJUNTO DE CARRO POSTERIOR
- INDICACION DE POSICION DE FLAPS Y DETECCION DE ASIMETRIA
- INDICADOR DE POSICION, CE14
- TRANSDUCTOR DE SOBREVELOCIDAD, CE15
- BLOCAJE ANTIRRAFAGAS Y ANTIVIBRACION
- SISTEMA DE BLOCAJE ANTIRRAFAGAS
- CONJUNTO DE SOPORTE, CABINA DE PILOTOS
- CONJUNTO DE POLEA Y EJE, DERECHO, PLANO MEDIO
- CONJUNTO DE POLEA Y EJE, IZQUIERDO, PLANO MEDIO
- CONJUNTO DE BLOCAJE DE ALERONES
- CONJUNTO DE POLEA Y EJE, FUSELAJE POSTERIOR
- CONJUNTO DE BLOCAJE DE TIMON DE DIRECCION
- CONJUNTO DE SOPORTE DE PALANCA
- CONJUNTO DE BLOCAJE DE TIMON DE ALTURA
- CABLES DE BLOCAJE ANTIRRAFAGAS

##lookup: combustible
- ALMACENAMIENTO
- DEPOSITOS DE COMBUSTIBLE
- PANELES DE ACCESO
- VALVULAS DE DRENAJE DE AGUA
- VENTILACION DE DEPOSITOS DE COMBUSTIBLE
- VALVULAS DE FLOTADOR PARA VENTILACION
- VALVULA ANTIRRETORNO
- REABASTECIMIENTO Y VACIADO DE COMBUSTIBLE POR GRAVEDAD
- TAPON DE LLENADO
- DISTRIBUCION
- REABASTECIMIENTO Y VACIADO DE COMBUSTIBLE A PRESION
- INTERRUPTOR DE FLOTADOR DE SOBRELLENADO
- UNIDAD DE CONTROL DE REABASTECIMIENTO/VACIADO DE COMBUSTIBLE 
- VALVULA DE REABASTECIMIENTO DE COMBUSTIBLE
- ADAPTADOR DE REABASTECIMIENTO DE COMBUSTIBLE A PRESION
- VALVULA DE CONTROL DE NIVEL
- VALVULA DE TRASVASE POR GRAVEDAD
- VALVULA DE VACIADO DE COMBUSTIBLE
- VALVULA LIMITADORA DE PRESION DEL DEPOSITO
- SISTEMA DE ALIMENTACION Y TRASVASE DE MOTOR
- INTERRUPTOR DE PRESION
- UNIDAD DE CONTROL FUEL SYS
- BOMBA EYECTORA DE DEPOSITO INTERIOR
- BOMBA EYECTORA DE DEPOSITO EXTERIOR
- BOMBA EYECTORA DE ALIMENTACION DE MOTOR
- VALVULA ANTIRRETORNO
- VALVULA LIMITADORA DE PRESION
- BOMBA SUMERGIDA
- VALVULA DE CORTE
- VALVULA DE ALIMENTACION CRUZADA
- VALVULA SOLENOIDE DE FLUJO MOTRIZ
- VALVULA DE CHARNELA
- FILTRO
- SISTEMA DE NIVEL MINIMO DE COMBUSTIBLE
- INTERRUPTOR DE NIVEL MINIMO DE COMBUSTIBLE
- INDICACION
- SISTEMA DE INDICACION DE TRASVASE DE COMBUSTIBLE
- INTERRUPTOR DE PRESION DIFERENCIAL
- SISTEMA DE INDICACION CAPACITIVA DE CANTIDAD DE COMBUSTIBLE
- INDICADOR DE CANTIDAD DE COMBUSTIBLE
- UNIDAD DE CONTROL DE COMBUSTIBLE
- SONDA DEL DEPOSITO PRINCIPAL 1
- SONDA DEL DEPOSITO PRINCIPAL 2
- SONDA DEL DEPOSITO PRINCIPAL 3 Y COMPENSADOR
- SONDA DEL DEPOSITO AUXILIAR 1
- SONDA DEL DEPOSITO AUXILIAR 2
- SONDA DEL DEPOSITO AUXILIAR 3
- SONDA DEL DEPOSITO AUXILIAR 4
- SISTEMA MAGNETICO DE INDICACION DE CANTIDAD DE COMBUSTIBLE
- AFORADOR MAGNETICO
- SISTEMA DE INDICACION DE BAJO NIVEL DE COMBUSTIBLE
- INTERRUPTOR DE FLOTADOR DE BAJO NIVEL
- SISTEMA DE INDICACION DE TEMPERATURA DE COMBUSTIBLE
- SENSOR DE TEMPERATURA
- REABASTECIMIENTO DE COMBUSTIBLE EN VUELO
- SONDA DE REABASTECIMIENTO EN VUELO  
- CONECTOR DE VALVULA ANTIRRETORNO
- PÉRTIGA


##lookup: energiaHidraulica
- SISTEMA HIDRAULICO PRINCIPAL
- UNIDAD DE CONTROL DEL SISTEMA HIDRAULICO
- DEPOSITO
- UNIDAD MODULAR ANTERIOR DE POTENCIA
- UNIDAD MODULAR POSTERIOR DE POTENCIA
- FILTRO DE UNIDAD MODULAR
- MOTOBOMBA ELECTRICA
- SISTEMA DE INDICACION DE ENERGIA HIDRAULICA
- UNIDAD DE CONTROL DEL SISTEMA HIDRAULICO
- SISTEMA DE INDICACION DE PRESION
- TRANSMISOR DE PRESION
- INTERRUPTOR DE PRESION
- INDICADOR DE PRESION
- SISTEMA DE INDICACION DE CANTIDAD
- TRANSMISOR DE CANTIDAD
- INDICADOR DE CANTIDAD DE FLUIDO
- SISTEMA DE INDICACION DE SOBRETEMPERATURA
- INTERRUPTOR DE TEMPERATURA

##lookup: proteccionAntiHielo
- ANTIHIELO DE SUPERFICIES AERODINAMICAS
- SISTEMA ANTIHIELO NEUMATICO
- UNIDAD DE CONTROL DE PROTECCION ANTIHIELO
- MANOCONTACTOR
- INTERRUPTOR DE BAJA PRESION
- PANEL DE COMPROBACION DE MANTA TERMICA
- CONTROLADOR
- ZAPATAS ANTIHIELO
- ZAPATA DE PLANO MEDIO
- ZAPATA DE GONDOLA-SECCION IZQUIERDA
- ZAPATA DE GONDOLA-SECCION DERECHA
- ZAPATA DE SECCION-PUNTA IZQUIERDA
- ZAPATA DE SECCION-PUNTA DERECHA
- ZAPATA DE ESTABILIZADOR HORIZONTAL IZQUIERDO
- ZAPATA DE ESTABILIZADOR HORIZONTAL DERECHO
- ZAPATA DE ESTABILIZADOR VERTICAL
- VALVULA ANTIRRETORNO
- SEPARADOR DE AGUA
- VALVULA DE CIERRE
- VALVULA REGULADORA DE PRESION
- VALVULA DISTRIBUIDORA
- MANTA TERMICA
- PROTECCION ANTIHIELO DEL ACTUADOR NEUMÁTICO DEL TIMON DE DIRECCION 
- CONTROLADOR DE TEMPERATURA
- MANTA TERMICA
- ENTRADAS DE AIRE
- SISTEMA ANTIHIELO DE ENTRADA DE AIRE DE MOTOR
- CONTROLADOR
- VALVULA REGULADORA DE PRESION
- VALVULA LANZADERA
- SEPARADOR DE AGUA
- VALVULA EYECTORA
- MASTIL DE DRENAJE CALEFACTOR
- PITOT Y ESTATICA
- PROTECCION ANTIHIELO DE TUBOS DE PITOT Y ESTATICA
- PROTECCION ANTIHIELO DE SENSOR DE ANGULO DE ATAQUE
- PROTECCION ANTIHIELO DE SONDA DE TEMPERATURA
- VENTANAS Y PARABRISAS
- SISTEMA DE PROTECCION DE LLUVIA DE PARABRISAS
- UNIDAD DE CONTROL DE LIMPIAPARABRISAS
- ACCIONADOR FLEXIBLE
- CONVERTIDOR
- BRAZO DE LIMPIAPARABRISAS
- DEPÓSITO DE LAVADO DE LIMPIAPARABRISAS
- CONJUNTO DE ESCOBILLA DE LIMPIAPARABRISAS
- VALVULA ANTIRRETORNO
- DIFUSOR
- MOTOR ELECTRICO
- BOMBA DE LAVADO DEL PARABRISAS
- ANTIHIELO Y ANTIVAHO DE PARABRISAS
- REGULADOR
- HELICES
- SISTEMA ANTIHIELO DE HELICE
- TEMPORIZADOR
- CONJUNTO MODULAR DE ESCOBILLAS
- ELEMENTO TERMICO DE PALA
- ANILLO COLECTOR
- CONTACTOR
- RELÉ
- SISTEMA DE DETECCION DE HIELO
- DETECTOR DE HIELO

##lookup: indicacionRegistro
- PANELES DE INSTRUMENTOS Y CONTROLES
- PANEL DE INSTRUMENTOS
- PANEL DE INSTRUMENTOS EQUIPADO (IZQ)
- PANEL DE INSTRUMENTOS EQUIPADO (DCH)
- PANEL CENTRAL - VISERA
- PANEL DE INSTRUMENTOS EQUIPADO
- CONSOLA CENTRAL
- CONSOLAS LATERALES
- TABLERO SUPERIOR
- ARMARIOS ELECTRICOS
- COMPARTIMENTOS DE AVIONICA
- PANELES DIVERSOS
- INSTRUMENTOS INDEPENDIENTES
- SISTEMA DE INDICACION HORARIA
- RELOJ
- ACELEROMETRO
- ACELEROMETRO
- SISTEMAS DE REGISTRO
- SISTEMA DE REGISTRO DE DATOS DE VUELO (FDR)
- UNIDAD DE CONTROL FDR
- ACELEROMETRO TRIAXIAL
- PANEL DE ENTRADA DE DATOS DE VUELO
- POTENCIOMETRO DE SUPERFICIE DE MANDO DE CABECEO
- POTENCIOMETRO DE SUPERFICIE DE MANDO DE TIMON DE DIRECCION
- POTENCIOMETRO DE SUPERFICIE DE MANDO DE ALABEO
- MICROINTERRUPTOR DE SENSACION DE TIERRA
- UNIDAD DE CAPTACION DE DATOS DE VUELO (FDAU)
- GRABADOR DE DATOS DE VUELO (FDR)
- INTERRUPTOR DE INERCIA VERTICAL
- INTERRUPTOR DE INERCIA HORIZONTAL
- SISTEMA DE A BORDO DE MONITORIZACION DE FATIGA (OFMS)
- COMPUTADORES CENTRALES
- SISTEMA DE FUNCION DE CONCENTRACION DE DATOS (DCF)
- CAJA VUELO INTEGRADO (IFC)
- MODULO DE FUENTE DE ALIMENTACION PRIMARIA (PPSM)
- MODULO PROCESADOR DE ENTRADAS Y SALIDAS (IOPM)
- MODULO DE ENTRADAS Y SALIDAS (IOM)
- UNIDAD DE REFRIGERACION DE IFC (ICU)
- SISTEMA DE GESTION DE RADIO (RMS)
- UNIDAD DE VISUALIZACION DE CONTROL MULTIFUNCIONAL (MCDU)
- MCDU DE OPERADOR
- UNIDAD DE CONTROL MCDU CONTROL
- UNIDAD DE CONTROL TMS-FMS XFER & TACCO MCDU
- UNIDAD DE CONTROL DE CRYPTO ZEROIZE
- SISTEMA DE MAPA DIGITAL (DMS)
- UNIDAD DE CONTROL DE DMM
- CONVERTIDOR  D/A
- MÓDULO DE MAPA DIGITAL (DMM)
- DISPOSITIVO DE CONTROL DEL DMM (DMCD)
- AMPLIFICADOR DE VIDEO DEL DMM
- CONFIGURACION DE EQUIPOS DE AVIONICA
- UNIDAD DE CONTROL AVIONICS SENSORS CONFIG
- SISTEMAS CENTRALES DE AVISO DE FALLOS
- SISTEMA DE AVISO DE FALLOS EN VUELO (FWS)
- LUZ PRINCIPAL DE AVISO DE FALLOS
- SISTEMA DE AVISO DE DESPEGUE INSEGURO
- SISTEMA DE AVISO DE ATERRIZAJE INSEGURO
- SISTEMAS DE VISUALIZACION CENTRAL
- SISTEMA DE VISUALIZACION MULTIFUNCIONAL (MFDS)
- UNIDAD DE CONTROL REMOTO DE IEDS
- BATERIA DE RELOJ DE UNIDAD IEDS
- UNIDAD DE IEDS
- SISTEMA ELECTRONICO DE INSTRUMENTOS DE VUELO (EFIS)
- PANEL DE CONTROL DE EFIS (EFCP)
- PANEL DE CONTROL DE INDICE (ICP)
- UNIDAD DE CONTROL IFF/NAV XFR
- UNIDAD DE CONTROL NAV XFR
- PANTALLA DE VUELO PRIMARIA (PFD)
- PANTALLA DE NAVEGACION (ND)

##lookup: trenAterrizaje
- TREN PRINCIPAL
- TREN DE ATERRIZAJE PRINCIPAL
- CONJUNTO DE TREN DE ATERRIZAJE PRINCIPAL
- AMORTIGUADOR
- PIVOTE DE TREN DE ATERRIZAJE PRINCIPAL
- PATA ANTERIOR IZQUIERDA DE TREN DE ATERRIZAJE PRINCIPAL
- PATA ANTERIOR DERECHA DE TREN DE ATERRIZAJE PRINCIPAL
- PATA POSTERIOR IZQUIERDA DE TREN DE ATERRIZAJE PRINCIPAL
- PATA POSTERIOR DERECHA DE TREN DE ATERRIZAJE PRINCIPAL
- PATA POSTERIOR DERECHA DE TREN DE ATERRIZAJE PRINCIPAL
- BARRA DE CONEXIÓN
- CONJUNTO ACTUADOR DE PLEGADO
- TREN AUXILIAR Y COMPUERTAS
- TREN DE ATERRIZAJE AUXILIAR Y COMPUERTAS
- PATA DE TREN DE ATERRIZAJE AUXILIAR
- AMORTIGUADOR
- MECANISMO DE CIERRE DE COMPUERTAS
- EXTENSION Y RETRACCION
- EXTENSION Y RETRACCION NORMALES
- PALANCA DE MANDO
- VALVULA SELECTORA
- MICROINTERRUPTOR
- MARTINETE DEL TREN AUXILIAR
- MARTINETE DEL TREN PRINCIPAL
- ENCLAVAMIENTO EN RETRACCION DEL TREN AUXILIAR
- ENCLAVAMIENTO EN RETRACCION DEL TREN PRINCIPAL
- EXTENSION DE EMERGENCIA
- EMPUÑADURA DE OPERACIÓN DE ENCLAVAMIENTO
- CONJUNTO DE SECTOR
- CONJUNTO DE GUIA
- CONJUNTO DE EJE Y BARRA
- CABLE (GUIA - ENCLAVAMIENTO DE TREN DE ATERRIZAJE PRINCIPAL)
- CABLE (GUIA - SECTOR)
- CABLE (ENCLAVAMIENTO DE TREN DE ATERRIZAJE AUXILIAR)
- EMPUÑADURA DE OPERACIÓN DE LA VALVULA DE CONTROL
- CONJUNTO DE CABLE DE OPERACIÓN DE LA VALVULA DE CONTROL
- SISTEMA DE BLOCAJE DE EMERGENCIA DE TREN DE ATERRIZAJE AUXILIAR
- RUEDAS
- RUEDA PRINCIPAL
- RUEDA PRINCIPAL (NEUMATICO)
- RUEDA AUXILIAR
- RUEDA AUXILIAR (NEUMATICO)
- FRENOS
- UNIDAD DE FRENO
- VALVULA LANZADERA
- TRANSMISOR PRESIÓN
- MICROINTERRUPTOR DE SENSACION DE TIERRA
- INDICADOR DE PRESION DE FRENO
- UNIDAD DE CONTROL ANTI-SKID
- VALVULA ANTI-SKID
- TRANSDUCTOR
- VALVULA DE CONTROL DE FRENO
- VALVULA ANTIRRETORNO
- VALVULA DE CORTE
- MANOMETRO/VALVULA DE CARGA
- VALVULA DE DESCARGA
- ACUMULADOR
- ACOPLAMIENTO DE PEDAL DE FRENO
- EJE DIFERENCIAL DE FRENO
- POLEA ACTUADORA DE VALVULA DE CONTROL DE FRENO
- CABLES DE ACTUACION DE FRENOS
- FRENO DE EMERGENCIA Y APARCAMIENTO
- TRANSMISOR DE PRESION
- INDICADOR DE PRESION DE FRENO
- VALVULA DE EMERGENCIA Y APARCAMIENTO
- VALVULA ANTIRRETORNO
- VALVULA DE CORTE
- MANOMETRO/VALVULA DE CARGA
- VALVULA DE DESCARGA
- ACUMULADOR
- PALANCA DE MANDO
- CONJUNTO DE CABLE
- SISTEMA DE INDICACION DE TEMPERATURA DE FRENOS
- SENSOR DE TEMPERATURA DE FRENOS
- INDICADOR DE TEMPERATURA DE FRENOS
- DIRECCION DE RUEDA DE MORRO
- UNIDAD DE CONTROL DE DIRECCION DE RUEDA DE MORRO
- MICROINTERRUPTOR DE SENSACION DE TIERRA
- VALVULA SELECTORA DE DIRECCION
- VALVULA REDUCTORA DE PRESION
- VALVULA SELECTORA
- VALVULA PRESELECTORA DE DIRECCION
- VALVULA CALIBRADA
- VALVULA ANTIOSCILACION DE RUEDA
- CABLE (ENCLAVAMIENTO DE TREN DE ATERRIZAJE AUXILIAR)
- VALVULA DE DESCARGA TERMICA
- ACUMULADOR
- CONJUNTO DE SOPORTE DE BARRA DE TORSION Y VOLANTE
- CONJUNTO DE SOPORTE DE BARRA DE TORSION
- CONJUNTO DE SECTOR
- CONJUNTO DE BIELA
- CONJUNTO DE BARRA
- CABLES ACTUADORES
- POSICION Y AVISO
- INDICACION DE POSICION DE TREN DE ATERRIZAJE
- MICROINTERRUPTOR
- PANEL DE POSICION DE TREN DE ATERRIZAJE

##lookup: luces
- CABINA DE PILOTOS
- ILUMINACION DE CABINA DE PILOTOS
- LUZ DE PLAFON
- LUZ AJUSTABLE
- LUZ PORTATIL
- LUZ PARA PEDAL
- LUZ DE MAPAS
- UNIDAD DE CONTROL FLIGHT DECK LT
- LUZ DE LECTURA DE OBSERVADOR
- ILUMINACION DE INSTRUMENTOS Y PANELES
- UNIDAD DE CONTROL FLIGHT DECK LT
- CONVERTIDOR DE CC/CC
- LUZ TUBULAR DE INSTRUMENTOS
- SISTEMA COMPATIBLE CON LAS GAFAS DE VISION NOCTURNA
- CABINA PRINCIPAL
- ILUMINACION GENERAL
- UNIDAD DE CONTROL INTERNAL LT
- UNIDAD DE CONTROL ATTENDANT, ANTERIOR
- LUZ PORTATIL DE CABINA
- CONVERTIDOR DE CC/CC
- LUZ DE TECHO
- LUZ DE PLAFON
- LUZ DE ESCALERA
- ILUMINACION DE INSTRUMENTOS Y PANELES DE OBSERVADOR
- CONVERTIDOR DE CC/CC
- ILUMINACION DEL COMPARTIMIENTO DE ASEO
- LUZ DEL COMPARTIMIENTO DE ASEO
- ILUMINACION EN CONSOLA DE MISION
- UNIDAD DE CONTROL LIGHTING CONTROL
- CONVERTIDOR DE CC/CC
- LUZ DE LECTURA
- SISTEMA DE AVISO A PASAJEROS
- LUZ DE AVISO
- LUZ DE AVISO DE  CONSOLA DE MISION
- UNIDAD DE SERVICIO DE PASAJEROS (PSU)
- SISTEMA DE AVISO A PARACAIDISTAS
- UNIDAD DE CONTROL TROOP JUMP
- TIMBRE
- COMPARTIMIENTOS DE CARGA Y SERVICIO
- ILUMINACION GENERAL
- LUZ INTERIOR DE CARGA
- UNIDAD DE CONTROL ATTENDANT, POSTERIOR
- LUZ DE ZONA DE CARGA
- EXTERIOR
- UNIDAD DE CONTROL EXTERNAL LT
- LUCES DE POSICION
- LUZ  DE POSICION DE ALA
- LUZ DE POSICION DE COLA
- LUCES ANTICOLISION
- LUZ ANTICOLISION EN ESTABILIZADOR VERTICAL
- LUZ ANTICOLISION EN FUSELAJE INFERIOR
- LUCES DE ATERRIZAJE
- FARO DE ATERRIZAJE
- LUCES DE RODADURA
- FARO DE RODADURA
- CAJA DE INTERRUPTOR
- FARO INFRARROJO DE RODADURA
- LUCES DE GIRO EN PISTA
- LUZ DE GIRO EN PISTA
- LUCES DE INSPECCION DE ALA
- LUZ DE INSPECCION DE ALA
- LUCES DE LOGOTIPO
- LUZ DE LOGOTIPO
- LUCES DE FORMACION
- LUZ DE FORMACION
- LUZ DE FORMACION IR
- INSPECCION - REABASTECIMIENTO EN VUELO
- LUZ DE INSPECCION
- ILUMINACION DE EMERGENCIA
- ILUMINACION DE EMERGENCIA DE CABINA PRINCIPAL
- LUZ DE PASILLO
- LUZ DE SALIDA
- FUENTE DE ALIMENTACION POR BATERIA
- ILUMINACION EXTERIOR DE EMERGENCIA
- ILUMINACION DE EMERGENCIA DE CABINA DE PILOTOS
- LUZ PORTATIL DE PILOTO
- LUCES ESPECIALES
- SISTEMA DE FARO DE BUSQUEDA
- FARO DE BUSQUEDA
- FILTRO
- LÁMPARA
- UNIDAD DE CONTROL MANUAL
- UNIDAD DE CONTROL DE CONECTOR DE SLIC
- UNIDAD CENTRAL ELECTRÓNICA (ECU) SLIC
- ESTRUCTURA DE FARO DE BUSQUEDA
- BURBUJA TRANSPARENTE
- CONJUNTO SOPORTE DE FARO DE BUSQUEDA
- CAJA DE CONEXIONES

##lookup: navegacion
- DATOS AMBIENTALES DE VUELO
- SISTEMA DE PITOT Y ESTÁTICA
- TUBO DE PITOT Y ESTATICA
- SISTEMA DE ANGULO DE ATAQUE (AOA)
- SENSOR DE ANGULO DE ATAQUE (AOA)
- INDICADOR DE ANGULO DE ATAQUE (AOA)
- SISTEMA DE TEMPERATURA DE AIRE EXTERIOR
- SENSOR
- SISTEMA DE INSTRUMENTOS DE DATOS DE AIRE
- ANEMOMETRO Y SENSOR DE SOBREVELOCIDAD
- ANEMOMETRO
- ANEMOMETRO DE RESERVA
- VARIOMETRO
- ALTIMETRO DEL PILOTO
- ALTIMETRO DEL COPILOTO
- ALTIMETRO DE RESERVA
- BOCINA
- SISTEMA DE DATOS DE AIRE (ADS)
- SONDA DE TEMPERATURA
- SONDA, TEMPERATURA ESTATICA DEL AIRE
- UNIDAD DE DATOS DE AIRE (ADU)
- RELES
- BOCINA DE AVISO DE SOBREVELOCIDAD
- ACTITUD Y DIRECCION
- SISTEMA DE REFERENCIA DE ACTITUD Y RUMBO (AHRS)
- UNIDAD DETECTORA (FDU)
- PANEL DE CONTROL DE ACTITUD Y RUMBO (AHCP)
- UNIDAD DE CONTROL DE COMPENSACION 
- MODULO DE MEMORIA DESMONTABLE (RMM)
- PANEL MISCELLANEOUS IZQUIERDO
- PANEL MISCELLANEOUS DERECHO
- CAJA DE RELES
- UNIDAD DE REFERENCIA DE ACTITUD Y RUMBO (AHRU)
- GIROSCOPO VERTICAL
- GIROSCOPO DIRECCIONAL
- SISTEMA DE BRUJULA DE RESERVA
- BRUJULA MAGNETICA DE RESERVA
- SISTEMA DE INDICACION DE ACTITUD DE RESERVA
- INDICADOR DE ACTITUD DE RESERVA
- INSTRUMENTO ELECTRONICO INTEGRADO DE RESERVA (IESI)
- SISTEMA DE REFERENCIA INERCIAL (IRS)
- ANTENA DE GPS
- PROCESADOR IRS/GPS
- PREAMPLIFICADOR GPS
- AYUDAS PARA EL ATERRIZAJE Y RODADURA
- DETERMINACION DE POSICION INDEPENDIENTE
- SISTEMA DE RADAR METEOROLOGICO (WXR)
- UNIDAD DE ANTENA
- PANEL DE CONTROL DE RADAR
- PANEL DE CONTROL DE PILOTO
- PANEL DE CONTROL DE COPILOTO
- UNIDAD DE CONMUTACION DE VIDEO
- TRANSCEPTOR
- CONCENTRADOR DE NAVEGACION
- RECEPTOR-TRANSMISOR-PROCESADOR (RTP)
- BASTIDOR DE RTP
- SISTEMA DE RADIOALTIMETRO
- ANTENA
- TRANSCEPTOR
- SISTEMA DE NAVEGACION INERCIAL
- SISTEMA DE AVISO DE PROXIMIDAD DE TIERRA (GPWS)
- PANEL GPWS
- ANTENA DE GPS
- TARJETA PCMCIA
- PROCESADOR EGPWS
- SISTEMA DE ANTICOLISION Y ALERTA DE TRAFICO (TCAS)
- ANTENA DE TCAS
- PROCESADOR TCAS
- SISTEMA INS/GPS
- ANTENA DE GPS
- UNIDAD INERCIAL DE GPS INTEGRADO (EGI)
- DETERMINACION DE POSICION DEPENDIENTE
- SISTEMA ADF
- ANTENA DE ADF
- UNIDAD DE CONTROL DE ADF
- RECEPTOR ADF
- SISTEMA DE NAVEGACION VHF
- ANTENA DE SENDA DE PLANEO (GS)
- ANTENA VOR/LOC
- ANTENA DE RADIOBALIZA (MB)
- UNIDAD DE CONTROL
- RECEPTOR MULTI-MODO (MMR)
- SISTEMA DME
- ANTENA DE DME
- TRANSCEPTOR DE DME
- SISTEMA ATC
- ANTENA ATC
- CONTROL-TRANSPONDEDOR
- TRANSPONDEDOR
- SISTEMA DF
- ANTENA
- RECEPTOR
- SISTEMA IFF
- UNIDAD DE CONTROL IFF
- UNIDAD DE CONTROL DE IFF/CIT
- TRANSCEPTOR DE IFF
- DISPOSITIVO CRIPTOGRÁFICO MODO 4
- RELÉ COAXIAL
- SISTEMA TACAN
- ANTENA
- TRANSCEPTOR
- SISTEMA DE RETORNO A LA BASE
- SISTEMA DE POSICIONAMIENTO GLOBAL (GPS)
- ANTENA
- RECEPTOR
- PREAMPLIFICADOR
- COMPUTACION DE DIRECCION DE VUELO
- SISTEMA DE GESTION DE VUELO (FMS)
- ANTENA GPS
- UNIDAD DE TRANSFERENCIA DE DATOS
- CARGADOR DE DATOS DE A BORDO (ADL)
- UNIDAD FMS
- MODULO DE GESTION DE VUELO (FMM)

##lookup: sistemaOxigeno
- TRIPULACION
- SISTEMA DE OXIGENO PARA LA TRIPULACION
- INDICADOR DE DESCARGA
- INDICADOR DE OXIGENO
- BOTELLA
- VALVULA DE LLENADO
- TOMA DE OXIGENO
- LLAVE DE PASO DE CONSOLA IZQUIERDA
- LLAVE DE PASO DE CONSOLA DERECHA
- LLAVE DE PASO DE CONSOLA CENTRAL
- TUBERIAS DEL SISTEMA DE OXIGENO
- MASCARILLA DE OXIGENO DE TRIPULACION
- GAFAS ANTIHUMO
- SISTEMA DE OXIGENO LIQUIDO
- UNIDAD DE CONTROL DE CANTIDAD DE OXIGENO   
- INDICADOR DE CANTIDAD DE OXIGENO   
- REGULADOR
- INTERCAMBIADOR DE CALOR
- TOMA DE OXIGENO
- CONVERTIDOR
- MASCARILLA DE OXIGENO DE TRIPULACION
- GAFAS ANTIHUMO
- PORTATIL
- SISTEMA DE OXIGENO PORTATIL
- BOTELLA PORTATIL DE CABINA PRINCIPAL
- BOTELLA PORTATIL DE CABINA DE PILOTOS
- MASCARA DE OXIGENO COMPLETA
- EQUIPO PROTECTOR DE RESPIRACION
- MASCARILLA DE OXIGENO DE PASAJERO

##lookup: aguaResiduos
- INODORO
- DRENAJE DEL TOILET

##lookup: comunicacionesTacticas
- VHF
- SISTEMA DE V/UHF
- UNIDAD DE CONTROL DE V/UHF
- ANTENA DE V/UHF
- FILTRO DE PASO ALTO
- TRASCEPTOR DE V/UHF
- CONVERTIDOR LOGICO DE ANTENA
- RELE COAXIAL DE TRANSFERENCIA
- INTERRUPTOR DE MICROONDAS
- SISTEMA DE V/UHF TÁCTICO
- UNIDAD DE CONTROL REMOTO DE V/HF
- UNIDAD DE CONTROL VINSON WAVE
- ANTENA DE V/UHF
- TRASCEPTOR DE V/UHF TALON
- SISTEMA DE HF
- ANTENA DE HF
- TRASCEPTOR HF
- ACOPLADOR DE ANTENA DE HF
- RELÉ COAXIAL DE TRANSFERENCIA
- TERMINACIÓN COAXIAL
- DIGITAL
- SISTEMA DE COMUNICACIONES SEGURAS
- UNIDAD DE CONTROL DE COMUNICACIONES  DE PILOTO     
- UNIDAD DE CONTROL DE COMUNICACIONES  DE COPILOTO     
- UNIDAD DE CONTROL DE ENCRIPTADO
- UNIDAD DE CONTROL DE BORRADO DE CLAVES
- CAJA DE RELES
- COMUNICACIONES POR SATELITE
- ANTENA
- TRANSCEPTOR (SDU)
- RECEPTOR/TRANSMISOR DE SATELITE (SRT)
- AMPLIFICADOR DE ALTA POTENCIA (HPA)
- TRANSCEPTOR  SATCOM DE ALTA VELOCIDAD (HST)
- DIPLEXOR/AMPLIFICADOR DE BAJO RUIDO (DLNA)
- SOPORTE/TELEFONO
- DISTRIBUIDOR
- ATENUADOR

##lookup: mantenimientoCentralizado
- SISTEMA DE DIAGNOSTICO CENTRALIZADO (CDS)
- SISTEMA DE TELECARGA

##lookup: integracionVisualizacion
- PAQUETES DE SOFTWARE
- SISTEMA DE PLANIFICACIÓN DE LA MISIÓN DEL AVIÓN (TAMPS)

##lookup: habituales
- INVESTIGACION, LIMPIEZA Y SUAVIZACION AERODINAMICA
- CLASIFICACION DE DAÑOS
- SUAVIZACION AERODINAMICA
- PROCESOS
- SELLADO
- MATERIALES
- NO METALICOS
- MATERIALES CONSUMIBLES
- MATERIALES PELIGROSOS
- ELEMENTOS DE SUJECION
- ELEMENTOS DE SUJECION PARA ESTRUCTURAS METALICAS
- ELEMENTOS DE SUJECION PARA ESTRUCTURAS DE MATERIAL COMPUESTO
- PROCEDIMIENTO DE COMPROBACION DE ALINEACION
- EQUILIBRADO DE SUPERFICIES DE MANDO
- REPARACIONES
- REPARACIONES ESTANDARES DE COMPONENTES DE MATERIALES METALICOS
- REPARACIONES DE PEQUEÑAS ABOLLADURAS 
- REPARACIONES DE DAÑOS MENORES
- REPARACIONES EN DAÑOS DESDEÑABLES
- REPARACIONES RESISTENTES A LA FATIGA
- DAÑOS ADMISIBLES PARA PERFILES EXTRUIDOS Y SECCIONES PREFORMADAS
- REPARACIONES DE PERFILES EXTRUIDOS Y SECCIONES PREFORMADAS
- DAÑOS ADMISIBLES EN REVESTIMIENTOS NIVELADOS O DESNIVELADOS
- REPARACIONES ENREVESTIMIENTOS NIVELADOS O DESNIVELADOS 
- DAÑOS ADMISIBLES EN CHAPAS ALMAS
- REPARACIONES EN CHAPAS ALMAS
- REPARACIONES ESTRUCTURALES DE METALES PEGADOS
- REPARACIONES ESTANDARES DE COMPONENTES DE MATERIALES COMPUESTOS
- COMPONENTES DE MATERIALES COMPUESTOS – CLASIFICACION DE DAÑOS Y REPARACIONES
- PROCEDIMIENTOS GENERALES PARA REPARACIONES DE MATERIALES COMPUESTOS
- REPARACIONES ESTANDARES DE COMPONENTES DE MATERIALES COMPUESTOS – DAÑOS EN REVESTIMIENTOS DE TODAS LAS ESTRUCTURAS (MONOLITICAS Y SANDWICH)
- REPARACIONES ESTANDARES DE COMPONENTES DE MATERIALES COMPUESTOS – DAÑOS EN ESTRUCTURAS SANDWICH
- BOTAS ANTIHIELO BF-GOODRICH TIPO 29S

##lookup: puertas
- PUERTA DE PASAJEROS
- PUERTA DE PASAJEROS
- JUNTA
- CONJUNTO RODILLO
- MECANISMO DE CIERRE
- MANIJA INTERIOR
- MANIJA EXTERIOR
- ESCALONES
- PASAMANOS DE PUERTA
- MECANISMO DE COMPENSACION DE PUERTA
- PUERTA DE TRIPULACION
- CONJUNTO DE PASAMANOS
- MANIJA INTERIOR
- MANIJA EXTERIOR
- JUNTA DE PUERTA
- MECANISMO DE CIERRE
- MECANISMO DE TAPA DE MANIJA (APROVISIONAMIENTO)
- ACTUADOR (APROVISIONAMIENTO)
- CONJUNTO DE CARRETE DE CABLE
- CORDON ELASTICO
- CERRADURA
- PUERTA DE PARACAIDISTAS
- PESTILLOS DE SEGURIDAD
- JUNTAS DE PUERTA
- SALIDA DE EMERGENCIA
- MECANISMO DE CIERRE
- MANIJAS INTERIOR Y EXTERIOR
- JUNTA DE PUERTA
- CARGA
- SISTEMA ELECTRICO DE COMPUERTAS DE CARGA
- PANEL DE CONTROL HIDR UTILITY
- UNIDAD DE CONTROL CARGO DOOR/RAMP EMERGENCY, MB70

##lookup: fuselaje
- SECCION ANTERIOR DE FUSELAJE
- ESTRUCTURA PRINCIPAL
- PANEL DE ACCESO EN MAMPARO ANTERIOR DE PRESURIZACIÓN
- CARRILES DE ASIENTO DE PILOTO
- TABIQUES DE SEPARACION
- RADOMO
- VARIOS
- SECCION CENTRAL DE FUSELAJE
- FUSELAJE CENTRAL - ANTERIOR
- PROTECCION CONTRA IMPACTOS DE HIELO
- RADOME DE RADAR DE BUSQUEDA
- FUSELAJE CENTRAL - CENTRAL
- FUSELAJE CENTRAL - POSTERIOR
- CRISTAL DE ESCÁNER VISUAL
- CRISTAL ÓPTICO
- ESTRUCTURA - FUSELAJE A ALA
- CARRILES DE ASIENTO
- DRENAJES
- VARIOS
- SECCION POSTERIOR DE FUSELAJE
- ESTRUCTURA PRINCIPAL
- MONTANTES DE APOYO - ZONA DE CUADERNA DE RAMPA
- VARIOS
- SECCION DE COLA
- CONO POSTERIOR
- ALETAS
- CONO FINAL
- CARENAS
- CARENAS DE TREN DE ATERRIZAJE PRINCIPAL
- CARENAS DE FUSELAJE A ALA
- CARENA DE DERIVA
- CARENAS DE FUSELAJE A ESTABILIZADOR HORIZONTAL
- CARENAS EN FUSELAJE
- CONJUNTO CARENA DE TORRETA DE FLIR
- TRANSPARENCIA
- CARENA
- CARENA FALSA DE FLIR
- CARENA DE COMPUERTA RFOT
- CAPERUZA CARENA BOOM-MAD
- CARENAS DE REABASTECIMIENTO EN VUELO
- CARENAS DE REABASTECIMIENTO EN VUELO
- PISOS
- PANELES DE PISO DE FUSELAJE ANTERIOR
- PANELES DE PISO DE FUSELAJE CENTRAL
- PANELES DE PISO DE RAMPA

##lookup: gondolasPilones
- GONDOLAS
- PILONES

##lookup: estabilizadores
- ESTABILIZADOR HORIZONTAL
- CAJON PRINCIPAL
- BORDE DE ATAQUE
- CARENA DE BORDE DE ATAQUE
- BORDE MARGINAL
- HERRAJES DE FIJACION
- TIMON DE ALTURA
- ALETAS COMPENSADORAS
- ALETA COMPENSADORA
- ALETA DE SERVO
- HERRAJES DE FIJACION
- BORDE MARGINAL
- ESTABILIZADOR VERTICAL
- CAJON PRINCIPAL
- BORDE DE ATAQUE
- CARENA DE BORDE DE ATAQUE
- BORDE MARGINAL
- HERRAJES DE FIJACION
- HERRAJES DE LA BISAGRA DEL TIMÓN DE DIRECCIÓN
- TIMON DE DIRECCION
- ALETA COMPENSADORA
- ALETA DE SERVO
- HERRAJES DE UNION A ESTABILIZADOR HORIZONTAL
- HERRAJES DE UNION A ESTABILIZADOR VERTICAL

##lookup: ventanas
- CABINA DE PILOTOS
- VENTANAS FIJAS
- PARABRISAS CENTRAL
- PARABRISAS LATERAL
- VENTANA POSTERIOR
- VENTANAS DESLIZANTES
- VENTANA DESLIZANTE
- CABINA PRINCIPAL
- VENTANILLA DE CABINA PRINCIPAL
- VENTANILLA FALSA DE CABINA PRINCIPAL
- VENTANILLAS DE PUERTAS
- VENTANILLA DE PUERTA DE EMERGENCIA
- VENTANILLAS DE INSPECCION Y OBSERVACION
- VENTANILLA DE OBSERVACION

##lookup: alas
- PLANO MEDIO
- CAJON CENTRAL
- CARENA DE UNIÓN DE CAJÓN CENTRAL A CAJÓN EXTERIOR
- PANELES DE ACCESO
- HERRAJES DE UNION
- ALA EXTERIOR
- CAJON PRINCIPAL
- PANELES DE ACCESO
- HERRAJES DE FIJACION
- CONJUNTO PILÓN
- PILÓN
- UNIDAD DE SUJECCIÓN (CHDU)
- BORDES MARGINALES DE ALA
- BORDE MARGINAL
- BORDE DE ATAQUE
- BORDE DE ATAQUE DE PLANO MEDIO
- BORDE DE ATAQUE DE ALA EXTERIOR
- BORDE DE SALIDA
- BORDE DE SALIDA DE PLANO MEDIO
- PANELES DE ACCESO
- BORDE DE SALIDA DE ALA EXTERIOR
- BORDE DE SALIDA
- PANELES DE ACCESO
- FLAPS Y MECANISMOS - PLANO MEDIO
- FLAP
- GUIA DE FLAP
- CARENAS DE GUIA DE FLAP
- FLAPS Y MECANISMOS - ALA EXTERIOR
- FLAP
- GUIA DE FLAP
- ALERONES
- ALERON
- PANELES DE ACCESO
- ALETA COMPENSADORA DE ALERON
- ALETA DE SERVO DE ALERON

##lookup: helices
- CONJUNTO DE HELICE
- TUBO DE TRANSFERENCIA DE ACEITE
- PALA
- ACTUADOR
- CONTROL
- CONTROL DE HELICE
- UNIDAD DE CONTROL DE PUESTA EN BANDERA
- CONTROL ELECTRONICO DE HELICE (EPC)
- BOMBA PRINCIPAL
- BOMBA AUXILIAR
- MODULO DE VALVULA DE HELICE
- REGULADOR DE SOBREVELOCIDAD
- PUESTA AUTOMATICA EN BANDERA Y APR
- AFU
- SINCRONISMO DE HELICE
- SENSOR MAGNETICO DE DOBLE BOBINA
- SENSOR MAGNETICO DE BOBINA SIMPLE
- CAPTADOR ELECTROMAGNETICO
- SISTEMA DE CONTROL DE REVERSA
- UNIDAD DE CONTROL DE REVERSA
- FILTRO DE UCR
- RELES
- SISTEMA DE EQUILIBRADO DINAMICO DE HELICE
- VELOCIMETRO
- SENSOR MAGNETICO
- FRENO
- SISTEMA DE FRENO DE HELICE
- MANOCONTACTOR
- UNIDAD DE CONTROL DE FRENO DE HELICE
- VALVULA ANTIRRETORNO
- FRENO DE HELICE
- VALVULA DE CIERRE
- INDICACION
- INDICACION DE BETA

##lookup: motopropulsor
- MOTOR
- SECCION DEL COMPRESOR
- SECCION DE LA TURBINA
- CAPOS
- CAPO SUPERIOR
- CAPO PUENTE
- CAPO PUERTA IZQUIERDA Y DERECHA
- CAPO SUPERIOR POSTERIOR
- CAPO LATERAL IZQUIERDO Y DERECHO
- CONJUNTO DE CAPO INFERIOR
- CAPO INFERIOR POSTERIOR  
- BANCADAS
- SOPORTES ANTIVIBRACION
- SOPORTE ANTIVIBRACION SUPERIOR
- SOPORTES ANTIVIBRACION ANTERIORES
- SOPORTES ANTIVIBRACION POSTERIORES
- SOPORTE ANTIVIBRACION TUBO DE TORSION
- ESTRUCTURA DE BANCADAS
- BANCADA ANTERIOR 
- BANCADA POSTERIOR INFERIOR 
- BANCADA POSTERIOR SUPERIOR
- CORTAFUEGOS
- MAMPARO CORTAFUEGOS
- MAZOS ELECTRICOS
- ENTRADA DE AIRE DE MOTOR
- DRENAJES

##lookup: controlMotor
- DISTRIBUCION
- DISTRIBUCION DE COMBUSTIBLE
- COLECTORES E INYECTORES
- FILTRO DE BOMBA
- FILTRO DE ENTRADA AL CALENTADOR
- CALENTADOR
- DIVISOR DE FLUJO
- DEPOSITO DE DRENAJE
- CONTROL DE COMBUSTIBLE
- UNIDAD DE CONTROL MECANICA DE COMBUSTIBLE, MFCU
- SISTEMA DE CONTROL ELECTRONICO DE MOTOR
- UNIDAD DE CONTROL DE ESTADO ELECTRONICO
- SENSOR, T1.8
- CONTROL ELECTRONICO DE MOTOR, EEC
- INDICACION DE COMBUSTIBLE
- INDICACION DE FLUJO DE COMBUSTIBLE
- FLUXOMETRO DE COMBUSTIBLE
- INDICACION DE PRESION DE COMBUSTIBLE
- INTERRUPTOR DE BAJA PRESION
- INDICACION DE TEMPERATURA DE COMBUSTIBLE
- INTERRUPTOR DE BAJA TEMPERATURA DE COMBUSTIBLE
- SISTEMA DE AVISO DE FILTROS DE COMBUSTIBLE COLMATADOS
- INTERRUPTOR DE FILTRO DE ALTA PRESION
- INTERRUPTOR DE FILTRO DE BAJA PRESION

##lookup: ignicion
- CABLES DE IGNICION
- EXCITADORES DE IGNICION
- DISTRIBUCION
- CABLES DE IGNICION
- BUJIAS

##lookup: aire
- ANTIHIELO DE MOTOR
- REFRIGERACION
- REFRIGERACION DEL GENERADOR
- REFRIGERACION DEL ALTERNADOR
- REFRIGERACION DEL REFRIGERADOR PREVIO DE SANGRADO DE AIRE
- CONTROL DEL COMPRESOR
- VALVULA DE SANGRADO DEL INTERCOMPRESOR

##lookup: mandosMotor
- CONTROL DE POTENCIA
- SISTEMA DE MANDOS DE POTENCIA Y COMBUSTIBLE-PUESTA EN BANDERA
- CAJA DE PALANCAS
- CABLES DE MANDO DE CABINA DE PILOTOS
- CABLES DE MANDO DE FUSELAJE A PLANO MEDIO
- CABLES DE MANDO DE PLANO MEDIO A GONDOLA
- CONJUNTO DE PALANCA
- CONJUNTO DE POLEA
- CONJUNTO DE SOPORTE
- SISTEMA DE DESBLOQUEO DE BETA
- RELES
- CORTE DE EMERGENCIA

##lookup: indicacionMotor
- POTENCIA
- INDICACION DE POTENCIA Y VELOCIDAD
- SENSORES DE TORSION
- SENSOR DE VELOCIDAD NL
- SENSORES DE VELOCIDAD NH
- SENSOR DE VELOCIDAD NP
- TEMPERATURA
- TERMOPARES
- ANALIZADORES
- DIAGNOSTICO DE MANTENIMIENTO
- UNIDAD DE CONTROL POWERPLANT MAINTENANCE
- SISTEMAS INTEGRADOS DE INSTRUMENTOS DE MOTOR

##lookup: escape
- COLECTOR / TOBERA
- CONDUCTO DE ESCAPE
- CONDUCTO SECUNDARIO DE ESCAPE
- CONDUCTO PRIMARIO DE ESCAPE

##lookup: aceite
- ALMACENAMIENTO 
- DISTRIBUCION
- DISTRIBUCION Y REFRIGERACION DE ACEITE
- FILTRO DE PRESION DE ACEITE
- FILTRO DE RECUPERACION DE ACEITE DE RGB
- RADIADOR DE ACEITE
- REFRIGERACION DE ACEITE EN TIERRA
- VALVULA EYECTORA 
- SISTEMA DE INDICACION DE ACEITE
- TEMPERATURA DE ACEITE
- SENSOR DE TEMPERATURA
- PRESION DE ACEITE
- TRANSDUCTOR DE PRESIÓN DIFERENCIAL
- DETECCIÓN DE PARTICULAS
- DETECTOR DE PARTICULAS EN TURBINA
- DETECTOR DE PARTICULAS EN RGB
- SISTEMA DE AVISO DE FILTROS DE ACEITE COLMATADOS
- INTERRUPTOR DE FILTRO DE PRESION
- INTERRUPTOR DE FILTRO DE RECUPERACION

##lookup: arranque
- ARRANQUE (ROTACION)
- ARRANQUE DE MOTOR
- UNIDAD DE CONTROL ENGINE START
- UNIDAD DE CONTROL ENGINE START

##lookup: vigilancia
- PROCESADO DE DATOS
- SISTEMA TÁCTICO TOTALMENTE INTEGRADO (FITS)
- UNIDAD DE CONTROL FITS CONTROL
- UNIDAD DE CONTROL MFC
- UNIDAD DE CONTROL FITS CONNECTIVITY
- PANEL TÁCTIL (TP)
- UNIDAD DE CONTROL AUDIO RECORDING PANEL
- UNIDAD DE CONTROL DE MONITOR DE MISIÓN
- MONITOR DE CABINA
- MONITOR DE CONSOLA
- COMPUTADOR TACTICO DE INTERFACE (TIC)
- PROCESADOR TACTICO DE GESTIÓN (TMP)
- UNIDAD DE DISTRIBUCIÓN DE ETHERNET (EDU)
- DISTRIBUIDOR DE VÍDEO COMPUESTO (CVS)
- PROCESADOR TACTICO DE CONSOLA (CLP)
- MOCHILA DE CONFIGURACIÓN DE IP
- AMPLIFICADOR MEZCLADOR DE AUDIO (AMA)
- DISTRIBUIDOR DE VÍDEO RGB
- VIDEO DISTRIBUTION SYSTEM (VDS)
- PRISMÁTICOS GIROESTABILIZADOS
- CÁMARA FOTOGRÁFICA
- CÁMARA DE VÍDEO
- TECLADO
- BOLA DE CONTROL
- SISTEMA DE ANOTACIÓN DE VÍDEO (VAS)
- RELÉ COAXIAL
- GRABADOR DE VIDEO (VDR)
- MODULO DE MEMORIA DESMONTABLE (RMM)
- GRABADOR DE VIDEO DE DISCO RÍGIDO (HD)
- UNIDAD DE CONTROL MARK ON TOP
- UNIDAD DE CONTROL MISCELANEA DE MISIÓN
- CAJA DE RELES
- UNIDAD DE CONTROL DE SENSORES
- CONVERTIDOR SERIE
- UNIDAD DE CONTROL SENSORS 1
- UNIDAD DE CONTROL SENSORS 2
- UNIDAD DE CONTROL SENSORS 3
- SISTEMA DE DETECCIÓN DE CONTAMINACIÓN MARINA (SDPS)
- UNIDAD DE CONTROL SPDS
- ANTENA SLAR
- UNIDAD DE OPERACIÓN CENTRAL (COU)
- UNIDAD DE CONTROL DE IR/UV
- ESCANER IR/UV
- ESCANER VISUAL
- TRANSCEPTOR SLAR
- GRABACIÓN
- IDENTIFICACIÓN
- SISTEMA DE IDENTIFICACIÓN AUTOMÁTICA (AIS)
- ANTENA V/UHF
- TRANSPONDEDOR AIS
- SISTEMA DE ESCANER DE RF
- ANTENA V/UHF
- ESCANER DE RF
- SENSORES INFRAROJOS
- SISTEMA FLIR
- TORRETA FLIR (TFU)
- UNIDAD DE CONTROL DE MANO (HCU)
- UNIDAD DE INTERBLOCAJE  DE LASER (LIU)
- UNIDAD CENTRAL ELECTRÓNICA (CEU)
- SOPORTE DE MONTAJE/DESMONTAJE RÁPIDO (QDM)
- SISTEMA DE TERMÓMETRO DE RADIACIÓN DE PRECISIÓN (PRT)
- UNIDAD DE CONTROL PRT
- PIRÓMETRO
- LENTE DE Zn-Se
- RADAR DE VIGILANCIA
- SISTEMA DE RADAR DE BUSQUEDA
- ANTENA
- DESECANTE
- UNDAD DE CONTROL RADAR MAINT
- CODIFICADOR DE ALTITUD
- PROCESADOR DE RADAR  (RP)
- TRANSMISOR
- CAJA ELECTRÓNICA DE ANTENA (AEE)
- TRANSPONDEDOR-INTERROGADOR COMBINADO (CIT)
- PLACA DE SUJECCIÓN DE ANTENA
- GUIA DE ONDAS DE RADAR
- ABSORBENTE DE RF
- SOPORTE DE CIT
- SENSORES DE ANOMALÍAS MAGNÉTICAS
- SISTEMA DETECTOR DE ANOMAÍAS MAGNÉTICAS (MAD)
- CAPSULA
- AMPLIFICADOR/PROCESADOR (AC)
- SONAR SENSORS
- SISTEMA ACUSTICO
- ANTENA VHF DE SONOBOYA
- UNIDAD PROCESADORA DE SEÑAL (SPU)
- UNIDAD PROCESADORA DE DATOS (DPU)
- GRABADOR DE DATOS ACUSTICOS (ADR)
- UNIDAD PREAMPLIFICADORA
- RECEPTOR DE SONOBOYAS

##lookup: armamiento
- SUELTA DE ARMAMENTO
- SISTEMA DE GESTIÓN DE ARMAMENTO (SMS)
- PANEL DE CONTROL DEL PILOTO (PCP)
- UNIDAD DE CONTROL DE  SONOBOYAS (SCU)
- UNIDAD DE CONTROL DE CARGAS EXTERNAS (ESCU)
- UNIDAD DE CONTROL SONOBUOY LNCHR TRAP DOOR
- UNIDAD DE CONTROL DE GESTIÓN-DISTRIBUCIÓN (MDU)
- CAJA DE INTERFAZ PARA SONOBOYAS (SIB)
- LANZADOR DE SONOBOYAS (SL)
- RELÉ
- COMPUERTA DE SALIDA DE SONOBOYAS
- SUSPENSION DE ARMAMENTO
- EYECTOR ELECTROMECANICO (EMRU)

##lookup: grabacionImagenes
- SISTEMA DE CÁMARA DE RECONOCIMIENTO
- SISTEMA DE RECONOCIMIENTO FOTOGRAFICO (SRFOT)
- UNIDAD PRINCIPAL
- TERMINAL DE OPERADOR (OT)
- UNIDAD DE CONTROL (CU)
- CASETE DE PELÍCULA
- CONO DE LENTES
- SOPORTE CAMARA
- VISOR DE NAVEGACIÓN
- RELE COAXIAL

##lookup: guerraElectronica
- PASIVA, ELECTRO MAGNETICA
- SISTEMA DE RECEPTOR DE AVISO DE RADAR (RWR)
- UNIDAD DE CONTROL
- ANTENA DE BANDA C/D
- ANTENA DE BANDA E/J 
- INDICADOR DE AZIMUT
- UNIDAD VISUALIZADORA
- PROCESADOR ALERTADOR RDR 
- UNIDAD DE INTERCONEXION
- RECEPTOR SUPERHETERODINO
- RECEPTOR IFM/SUPERHETERODINO
- RECEPTOR DE BANDA C/D 
- ANALIZADOR
- RECEPTOR DE BANDA E/J
- PREAMPLIFICADOR
- REPETIDOR USB
- DIVISOR OL
- CONVERTIDOR ARINC-429/1553
- CONMUTADOR DE RF
- UNIDAD DE INTERCONEXIÓN SUPRESORA DE INTERFERENCIAS (BUI)
- SISTEMA EMISOR DE CONTRAMEDIDAS (CMDS)
- UNIDAD DE CONTROL Y VISUALIZACION DIGITAL (DCDU)
- UNIDAD DE DESARME
- PROGRAMADOR
- SECUENCIADOR
- CARGADOR
- DISTRIBUIDOR
- SISTEMA DE ALERTA DE MISILES (MWS)
- SENSOR
- UNIDAD DE CONTROL MWS-CMDS DISCRETES 
- UNIDAD ELECTRONICA
- MEDIDAS DE APOYO ELECTRONICO (MAE)
- ANTENA DF
- ANTENA OMNI
- INDICADOR THREAT WARNING
- MODULO DIGITALIZADOR
- MODULO PROCESADOR
- MODULO DF
- MODULO OMNI
- LASER
- SISTEMA DE RECEPTOR DE ALERTA DE LASER (LWR)
- UNIDAD SENSORA ALTAS (ASU)

##lookup: atas
- ATA 06
- ATA 07
- ATA 08
- ATA 09
- ATA 11
- ATA 12
- ATA 20
- ATA 21
- ATA 23
- ATA 24
- ATA 25
- ATA 26
- ATA 27
- ATA 28
- ATA 29
- ATA 30
- ATA 31
- ATA 32
- ATA 33
- ATA 34
- ATA 35
- ATA 38
- ATA 43
- ATA 45
- ATA 46
- ATA 51
- ATA 52
- ATA 53
- ATA 54
- ATA 55
- ATA 56
- ATA 57
- ATA 61
- ATA 71
- ATA 73
- ATA 74
- ATA 75
- ATA 76
- ATA 77
- ATA 78
- ATA 79
- ATA 80
- ATA 93
- ATA 94
- ATA 97
- ATA 99


## story_greeting_initial
* greeting_initial
 - utter_greeting_initial
 - action_restart

## story_greeting_final
* greeting_final
 - utter_greeting_final
 - action_restart

## story_greeting_help
* greeting_help
 - utter_greeting_help
 - action_restart

## story_user_mi_nombre_es_
* user_mi_nombre_es_
 - utter_user_mi_nombre_es_
 - action_restart

## story_bot_edad
* bot_edad
 - utter_bot_edad
 - action_restart

## story_bot_como_esta
* bot_como_esta
 - utter_bot_como_esta
 - action_restart

## story_bot_nombre
* bot_nombre
 - utter_bot_nombre
 - action_restart

## story_bot_genero
* bot_genero
 - utter_bot_genero
 - action_restart

## story_bot_que_eres
* bot_que_eres
 - utter_bot_que_eres
 - action_restart

## story_como_aprendes
* como_aprendes
 - utter_como_aprendes
 - action_restart

## story_cumplido_exagerado
* cumplido_exagerado
 - utter_cumplido_exagerado
 - action_restart

## story_cumplido_moderado
* cumplido_moderado
 - utter_cumplido_moderado
 - action_restart

## story_hace_buen_tiempo
* hace_buen_tiempo
 - utter_hace_buen_tiempo
 - action_restart

## story_que_tiempo_hace
* que_tiempo_hace
 - utter_que_tiempo_hace
 - action_restart

## story_insulto_moderado
* insulto_moderado
 - utter_insulto_moderado
 - action_restart

## story_no_negacion
* no_negacion
 - utter_no_negacion
 - action_restart

## story_sexual_explicito
* sexual_explicito
 - utter_sexual_explicito
 - action_restart

## story_swearing
* swearing
 - utter_swearing
 - action_restart

## story_gracias
* gracias
 - utter_gracias
 - action_restart

## story_dudas
* dudas
 - utter_dudas
 - action_restart

## story_user_no_entiende
* user_no_entiende
 - utter_user_no_entiende
 - action_restart

## story_si_afirmacion
* si_afirmacion
 - utter_si_afirmacion
 - action_restart

## story_Paco_Sierra
* Paco_Sierra{"paco_sierra": "paco sierra"}
 - utter_Paco_Sierra
 - action_restart

## story_Paco_Sierra2
* Paco_Sierra{"paco_sierra": "paco"}
 - utter_Paco_Sierra
 - action_restart

## story_operacion
* operacion{"tipoIncidencia": "obs", "operacion": "operación", "codigoOperacion": "7654321"}
 - slot{"tipoIncidencia": "obs"}
 - slot{"operacion": "operación"}
 - slot{"codigoOperacion": "7654321"}
 - action_operacion
 - action_restart

## story_operacion2
* operacion{"tipoIncidencia": "obs", "codigoOperacion": "7777777"}
 - slot{"tipoIncidencia": "obs"}
 - slot{"codigoOperacion": "7777777"}
 - action_operacion
 - action_restart

## story_operacion3
* operacion{"tipoIncidencia": "hnc", "codigoOperacion": "7654321"}
 - slot{"tipoIncidencia": "hnc"}
 - slot{"codigoOperacion": "7654321"}
 - action_operacion
 - action_restart

## story_operacion4
* operacion{"incidencia": "incidencias", "operacion": "operacion", "codigoOperacion": "8754125"}
 - slot{"incidencia": "incidencias"}
 - slot{"operacion": "operacion"}
 - slot{"codigoOperacion": "8754125"}
 - action_operacion
 - action_restart

## story_operacion5
* operacion{"incidencia": "incidencias", "codigoOperacion": "7654321"}
 - slot{"incidencia": "incidencias"}
 - slot{"codigoOperacion": "7654321"}
 - action_operacion
 - action_restart

## story_operacion6
* operacion{"tipoIncidencia": "demat", "codigoOperacion": "8885554"}
 - slot{"tipoIncidencia": "demat"}
 - slot{"codigoOperacion": "8885554"}
 - action_operacion
 - action_restart

## story_avion
* operacion{"avion": "avion", "codigoAvion": "186"}
 - slot{"avion": "avion"}
 - slot{"codigoAvion": "186"}
 - action_avion
 - action_restart

## story_avion2
* operacion{"tipoIncidencia": "HNC", "avion": "avion", "codigoAvion": "184"}
 - slot{"tipoIncidencia": "HNC"}
 - slot{"avion": "avion"}
 - slot{"codigoAvion": "184"}
 - action_avion
 - action_restart

## story_avion3
* operacion{"tipoIncidencia": "HNC", "partNumber": "95-00168-0001EM01ERC00152"}
 - slot{"tipoIncidencia": "HNC"}
 - slot{"partNumber": "95-00168-0001EM01ERC00152"}
 - action_avion
 - action_restart

## story_avion4
* operacion{"incidencia": "incidencia", "partNumber": "95-21001-0001GBR145149N01"}
 - slot{"incidencia": "incidencia"}
 - slot{"partNumber": "95-21001-0001GBR145149N01"}
 - action_avion
 - action_restart

## story_estacion
* operacion{"tipoIncidencia": "HNC", "estaciones": "st", "codigoEstacion": "35"}
 - slot{"tipoIncidencia": "HNC"}
 - slot{"estaciones": "st"}
 - slot{"codigoEstacion": "35"}
 - action_estacion
 - action_restart

## story_estacion2
* operacion{"tipoIncidencia": "OBS", "codigoEstacion": "15"}
 - slot{"tipoIncidencia": "OBS"}
 - slot{"codigoEstacion": "15"}
 - action_estacion
 - action_restart

## story_estacion3
* operacion{"tipoIncidencia": "hnc", "codigoEstacion": "fal"}
 - slot{"tipoIncidencia": "hnc"}
 - slot{"codigoEstacion": "fal"}
 - action_estacion
 - action_restart

## story_estacion4
* operacion{"incidencia": "incidencias", "estaciones": "st", "codigoEstacion": "fal"}
 - slot{"incidencia": "incidencias"}
 - slot{"estaciones": "st"}
 - slot{"codigoEstacion": "fal"}
 - action_estacion
 - action_restart

## story_estacion5
* operacion{"tipoIncidencia": "hnc", "estaciones": "estacion", "codigoEstacion": "fal"}
 - slot{"tipoIncidencia": "hnc"}
 - slot{"estaciones": "estacion"}
 - slot{"codigoEstacion": "fal"}
 - action_estacion
 - action_restart

## story_estacion6
* operacion{"aOrden": "falta", "estaciones": "estacion", "codigoEstacion": "25"}
 - slot{"aOrden": "falta"}
 - slot{"estaciones": "estacion"}
 - slot{"codigoEstacion": "25"}
 - action_estacion
 - action_restart

## story_estacion7
* operacion{"aOrden": "falta", "codigoEstacion": "35"}
 - slot{"aOrden": "falta"}
 - slot{"codigoEstacion": "35"}
 - action_estacion
 - action_restart

## story_avion_estacion
* operacion{"tipoIncidencia": "HNC", "avion": "avion", "codigoAvion": "180", "estaciones": "st", "codigoEstacion": "35"}
 - slot{"tipoIncidencia": "HNC"}
 - slot{"avion": "avion"}
 - slot{"codigoAvion": "180"}
 - slot{"estaciones": "st"}
 - slot{"codigoEstacion": "35"}
 - action_avion
 - action_restart

## story_avion_estacion2
* operacion{"tipoIncidencia": "OBS", "avion": "avion", "codigoAvion": "180", "estaciones": "estacion", "codigoEstacion": "45"}
 - slot{"tipoIncidencia": "OBS"}
 - slot{"avion": "avion"}
 - slot{"codigoAvion": "180"}
 - slot{"estaciones": "estacion"}
 - slot{"codigoEstacion": "45"}
 - action_avion
 - action_restart

## story_avion_estacion3
* operacion{"incidencia": "incidencias", "avion": "avion", "codigoAvion": "180", "estaciones": "estacion", "codigoEstacion": "45"}
 - slot{"incidencia": "incidencias"}
 - slot{"avion": "avion"}
 - slot{"codigoAvion": "180"}
 - slot{"estaciones": "estacion"}
 - slot{"codigoEstacion": "45"}
 - action_avion
 - action_restart

## story_avion_estacion4
* operacion{"incidencia": "incidencias", "codigoAvion": "180", "codigoEstacion": "45"}
 - slot{"incidencia": "incidencias"}
 - slot{"codigoAvion": "180"}
 - slot{"codigoEstacion": "45"}
 - action_avion
 - action_restart

## story_incidencia_cierre_apertura
* intent_incidencias_apertura{"abrir": "abrió", "tipoIncidencia": "HNC", "codigoIncidencia": "1234567891"}
 - slot{"abrir": "abrió"}
 - slot{"tipoIncidencia": "HNC"}
 - slot{"codigoIncidencia": "1234567891"}
 - action_apertura
 - action_restart

## story_incidencia_cierre_apertura2
* intent_incidencias_cierre{"cerrar": "cerro", "tipoIncidencia": "HNC", "codigoIncidencia": "1234567891"}
 - slot{"cerrar": "cerro"}
 - slot{"tipoIncidencia": "HNC"}
 - slot{"codigoIncidencia": "1234567891"}
 - action_cierre
 - action_restart

## story_incidencia_cierre_apertura3
* intent_incidencias_apertura{"abrir": "abrio", "codigoIncidencia": "123456"}
 - slot{"abrir": "abrio"}
 - slot{"codigoIncidencia": "123456"}
 - action_apertura
 - action_restart

## story_incidencia_cierre_apertura4
* intent_incidencias_apertura{"codigoIncidencia": "4444444444","cerrar": "cierre"}
 - slot{"cerrar": "cierre"}
 - slot{"codigoIncidencia": "4444444444"}
 - action_cierre
 - action_restart

## story_incidencia_cierre_apertura5
* intent_incidencias_apertura{"abrir": "abrio","operacion": "operacion", "codigoOperacion": "7654321"}
 - slot{"abrir": "abrio"}
 - slot{"operacion": "operacion"}
 - slot{"codigoOperacion": "7654321"}
 - action_apertura_operacion
 - action_restart

## story_incidencia_cierre_apertura6
* intent_incidencias_apertura{"cerrar": "cerro","operacion": "operacion", "codigoOperacion": "7654321"}
 - slot{"cerrar": "cerro"}
 - slot{"operacion": "operacion"}
 - slot{"codigoOperacion": "7654321"}
 - action_cierre_operacion
 - action_restart

## story_incidencia_cierre_apertura7
* intent_incidencias_apertura{"codigoOperacion": "7654321", "abrir": "abrio"}
 - slot{"codigoOperacion": "7654321"}
 - slot{"abrir": "abrio"}
 - action_apertura_operacion
 - action_restart

## story_incidencia_cierre_apertura8
* intent_incidencias_apertura{"abrir": "abrio", "codigoIncidencia": "2000231418"}
 - slot{"abrir": "abrio"}
 - slot{"codigoIncidencia": "2000231418"}
 - action_apertura
 - action_restart

## story_incidencia_responsable
* intent_incidencias_responsable{"responsable": "responsable", "tipoIncidencia": "HNC", "codigoIncidencia": "1234567891"}
 - slot{"responsable": "responsable"}
 - slot{"tipoIncidencia": "HNC"}
 - slot{"codigoIncidencia": "1234567891"}
 - action_responsable
 - action_restart

## story_incidencia_responsable2
* intent_incidencias_responsable{"tipoIncidencia": "HNC", "codigoIncidencia": "1234567891"}
 - slot{"tipoIncidencia": "HNC"}
 - slot{"codigoIncidencia": "1234567891"}
 - action_responsable
 - action_restart

## story_incidencia_responsable3
* operaciones_responsable{"responsable": "responsable", "operacion": "operacion", "codigoOperacion": "7654321"}
 - slot{"responsable": "responsable"}
 - slot{"operacion": "operacion"}
 - slot{"codigoOperacion": "7654321"}
 - action_responsable_operacion
 - action_restart

## story_incidencia_responsable4
* operaciones_responsable{"responsable": "responsable", "codigoIncidencia": "1234567891"}
 - slot{"responsable": "responsable"}
 - slot{"codigoIncidencia": "1234567891"}
 - action_responsable
 - action_restart

## story_incidencia_responsable5
* operaciones_responsable{"codigoIncidencia": "1234567891", "responsable": "responsable"}
 - slot{"codigoIncidencia": "1234567891"}
 - slot{"responsable": "responsable"}
 - action_responsable
 - action_restart

## story_incidencia_estado
* intent_incidencias_estado{"estado": "informacion", "tipoIncidencia": "incidencia", "codigoIncidencia": "123456"}
 - slot{"estado": "informacion"}
 - slot{"tipoIncidencia": "incidencia"}
 - slot{"codigoIncidencia": "123456"}
 - action_estado
 - action_restart

## story_incidencia_estado2
* intent_incidencias_estado{"estado": "estado", "tipoIncidencia": "hnc", "codigoIncidencia": "1234567891"}
 - slot{"estado": "estado"}
 - slot{"tipoIncidencia": "hnc"}
 - slot{"codigoIncidencia": "1234567891"}
 - action_estado
 - action_restart

## story_incidencia_estado3
* intent_incidencias_estado{"incidencia": "incidencias", "estado": "estado", "descripcionEstado": "revisado"}
 - slot{"incidencia": "incidencias"}
 - slot{"estado": "estado"}
 - slot{"descripcionEstado": "revisado"}
 - action_estado
 - action_restart

## story_incidencia_estado4
* intent_incidencias_estado{"incidencia": "incidencias", "descripcionEstado": "descripcion"}
 - slot{"incidencia": "incidencias"}
 - slot{"descripcionEstado": "descripcion"}
 - action_estado
 - action_restart

## story_incidencia_estado5
* intent_incidencias_estado{"estado": "estado", "operacion": "operacion", "codigoOperacion": "7654321"}
 - slot{"estado": "estado"}
 - slot{"operacion": "operacion"}
 - slot{"codigoOperacion": "7654321"}
 - action_estado_operacion
 - action_restart

## story_incidencia_estado6
* intent_incidencias_estado{"estado": "estado", "codigoOperacion": "7654321"}
 - slot{"estado": "estado"}
 - slot{"codigoOperacion": "7654321"}
 - action_estado_operacion
 - action_restart

## story_incidencia_estado7
* intent_incidencias_estado{"codigoOperacion": "7654321", "estado": "estado"}
 - slot{"codigoOperacion": "7654321"}
 - slot{"estado": "estado"}
 - action_estado_operacion
 - action_restart

## story_incidencia_estado8
* intent_incidencias_estado{"operacion": "operacion", "codigoOperacion": "7654321", "estado": "estado"}
 - slot{"operacion": "operacion"}
 - slot{"codigoOperacion": "7654321"}
 - slot{"estado": "estado"}
 - action_estado_operacion
 - action_restart

## story_incidencia_estado9
* intent_incidencias_estado{"incidencia": "incidencias", "descripcionEstado": "bloqueadas"}
 - slot{"incidencia": "incidencias"}
 - slot{"descripcionEstado": "bloqueadas"}
 - action_estado
 - action_restart

## story_incidencia_estado10
* intent_incidencias_estado{"tipoIncidencia": "hnc", "descripcionEstado": "descripcion"}
 - slot{"tipoIncidencia": "hnc"}
 - slot{"descripcionEstado": "descripcion"}
 - action_estado
 - action_restart

## story_incidencia_estado11
* intent_incidencias_estado{"operacion": "operaciones", "descripcionEstado": "bloqueadas"}
 - slot{"operacion": "operaciones"}
 - slot{"descripcionEstado": "bloqueadas"}
 - action_estado_operacion
 - action_restart

## story_incidencia_gnt
* intent_incidencias_gnt{"tipoIncidencia": "hnc", "tipoGNT": "gnt", "descripcionGNT": "avionico"}
 - slot{"tipoIncidencia": "hnc"}
 - slot{"tipoGNT": "gnt"}
 - slot{"descripcionGNT": "avionico"}
 - action_gnt
 - action_restart

## story_incidencia_gnt2
* intent_incidencias_gnt{"incidencia": "incidencias", "tipoGNT": "gnt", "descripcionGNT": "electromecanico", "estaciones": "estacion", "codigoEstacion": "35"}
 - slot{"incidencia": "incidencias"}
 - slot{"tipoGNT": "gnt"}
 - slot{"descripcionGNT": "electromecanico"}
 - slot{"estaciones": "estacion"}
 - slot{"codigoEstacion": "35"}
 - action_gnt
 - action_restart

## story_incidencia_gnt3
* intent_incidencias_gnt{"tipoIncidencia": "hnc", "tipoGNT": "gnt", "descripcionGNT": "calidad" , "codigoEstacion": "35"}
 - slot{"tipoIncidencia": "hnc"}
 - slot{"tipoGNT": "gnt"}
 - slot{"descripcionGNT": "calidad"}
 - slot{"codigoEstacion": "35"}
 - action_gnt
 - action_restart

## story_incidencia_gnt4
* intent_incidencias_gnt{"incidencia": "incidencias", "tipoGNT": "gnt", "descripcionGNT": "avionico"}
 - slot{"incidencia": "incidencias"}
 - slot{"tipoGNT": "gnt"}
 - slot{"descripcionGNT": "avionico"}
 - utter_estacion
* intent_estacion{"codigoEstacion": "45"}
 - action_gnt
 - action_restart

## story_orden
* orden{"aOrden": "avance", "operacion": "operacion", "codigoOperacion": "7654321"}
 - slot{"aOrden": "avance"}
 - slot{"operacion": "operacion"}
 - slot{"codigoOperacion": "7654321"}
 - action_orden
 - action_restart

## story_orden2
* orden{"avion": "avion", "operacion": "operacion", "codigoOperacion": "7654321"}
 - slot{"avion": "avion"}
 - slot{"operacion": "operacion"}
 - slot{"codigoOperacion": "7654321"}
 - action_orden
 - action_restart

## story_orden3
* orden{"tipoGNT": "gnt", "operacion": "operacion", "codigoOperacion": "7777777"}
 - slot{"tipoGNT": "gnt"}
 - slot{"operacion": "operacion"}
 - slot{"codigoOperacion": "7777777"}
 - action_orden
 - action_restart

## story_orden4
* orden{"operacion": "operaciones", "aOrden": "faltas"}
 - slot{"operacion": "operaciones"}
 - slot{"aOrden": "faltas"}
 - action_orden
 - action_restart

## story_orden5
* orden{"aOrden": "operarios", "operacion": "operacion", "codigoOperacion": "7654321"}
 - slot{"aOrden": "operarios"}
 - slot{"operacion": "operacion"}
 - slot{"codigoOperacion": "7654321"}
 - action_orden
* orden{"aOrden": "camino critico"}
 - slot{"aOrden": "camino critico"}
 - action_orden

## story_orden6
* orden{"aOrden": "duracion", "codigoOperacion": "7654321"}
 - slot{"aOrden": "duracion"}
 - slot{"codigoOperacion": "7654321"}
 - action_orden
* orden{"codigoOperacion": "7777777"}
 - slot{"codigoOperacion": "7777777"}
 - action_orden

## story_orden7
* orden{"aOrden": "camino critico", "codigoOperacion": "7777777"}
 - slot{"aOrden": "camino critico"}
 - slot{"codigoOperacion": "7777777"}
 - action_orden
* orden{"codigoOperacion": "7654321"}
 - slot{"codigoOperacion": "7654321"}
 - action_orden
* orden{"codigoOperacion": "7413695"}
 - slot{"codigoOperacion": "7413695"}
 - action_orden
* orden{"aOrden": "materiales"}
 - slot{"aOrden": "materiales"}
 - action_orden

## story_orden9
* orden{"aOrden": "falta", "codigoOperacion": "7654321"}
 - slot{"aOrden": "falta"}
 - slot{"codigoOperacion": "7654321"}
 - action_orden
* orden{"aOrden": "trabajadores"}
 - slot{"aOrden": "trabajadores"}
 - action_orden
* orden{"codigoOperacion": "7777777"}
 - slot{"codigoOperacion": "7777777"}
 - action_orden
* orden{"aOrden": "inicio"}
 - slot{"aOrden": "inicio"}
 - action_orden
 - action_restart

## story_orden10
* orden{"operacion": "operaciones", "aOrden": "99%"}
 - slot{"operacion": "operaciones"}
 - slot{"aOrden": "99%"}
 - action_orden
 - action_restart

## story_descripcion_incidencia
* descripcion{"verbos": "fallo", "servicio": "mandos de vuelo"}
 - slot{"verbos": "fallo"}
 - slot{"servicio": "mandos de vuelo"} 
 - action_descripcion_incidencia
 - action_restart


# This files contains your custom actions which can be used to run
# custom Python code.
#
# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/core/actions/#custom-actions/


# This is a simple example for a custom action which utters "Hello World!"

# from typing import Any, Text, Dict, List
#
# from rasa_sdk import Action, Tracker
# from rasa_sdk.executor import CollectingDispatcher
#
#
# class ActionHelloWorld(Action):
#
#     def name(self) -> Text:
#         return "action_hello_world"
#
#     def run(self, dispatcher: CollectingDispatcher,
#             tracker: Tracker,
#             domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
#
#         dispatcher.utter_message("Hello World!")
#
#         return []


# This files contains your custom actions which can be used to run
# custom Python code.
#
# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/core/actions/#custom-actions/


# This is a simple example for a custom action which utters "Hello World!"

from typing import Any, Text, Dict, List
from rasa_sdk.executor import CollectingDispatcher
import logging
import requests
import json
from rasa_sdk import Action, Tracker
from rasa_sdk.events import SlotSet, UserUtteranceReverted
import psycopg2
import re
import time

logger = logging.getLogger(__name__)


class FallBackAction(Action):
    def name(self):
        return "action_default_fallback"

    def run(self, dispatcher, tracker, domain):
        dispatcher.utter_message("Disculpa, pero no te he entendido")
        return [UserUtteranceReverted()]


def conexion():
    conn = psycopg2.connect(
        "dbname='oraculo_L&M' user='u20453' host='bar02368' password='aac_123'"
    )
    cur = conn.cursor()
    return cur

def partNumber(partnumber):
    partnumber = partnumber.upper()
    texto_material_pn_operacion = ""
    texto_operacion = ""
    patron_pn = ""
    id_tipo_pn = ""
    tipo_pn = ""
    modulo_version_pn = ""
    posicion_plataforma_pn = ""
    tipo_operacion_pn = ""
    zona_gt_pn = ""
    objeto_pn = ""

    # Part number Error. ERC. len 24:
    cambios = {
        "95-00120-007GBR145900NX1": "95-00120-0007GBR145900NX1",
        "95-00120-007GBR145901NX1": "95-00120-0007GBR145901NX1",
        "95-00120-007GBR145900NX1": "95-00120-0007GBR145900NX1",
        "95-00120-007GBR145900NX1": "95-00120-0007GBR145900NX1",
        "95-00120-007GBR145901NX1": "95-00120-0007GBR145901NX1",
        "95-00120-007GBR145901NX1": "95-00120-0007GBR145901NX1",
        "95-96457-0001FL02145375EX1": "95-96457-0001FL0245375EX1",
        "95-96460-00019EM01ERC00118": "95-96460-0001EM01ERC00118",
        "95-00166-0001CA0165002MX01": "95-00166-0001CA0165002MX1",
    }
    partnumber = cambios.get(partnumber, partnumber)

    # 1. XX-XXXXX-XXXXAAAAERC. PN - ERC
    pattern1 = re.compile("^95-[a-zA-Z0-9_]{5}-[a-zA-Z0-9_]{4}[a-zA-Z0-9_]{4}ERC")
    if bool(pattern1.match(partnumber)):
        patron_pn = "Patrón 1. 95 ERC"
        id_tipo_pn = 1
        tipo_pn = "ERC"
        modulo_version_pn = partnumber[13:17]
        posicion_plataforma_pn = ""
        tipo_operacion = ""
        zona_gt_pn = ""
        objeto_pn = ""

    # 2. XX-XXXXX-XXXX-AAAAXXXERC. PN - ERC
    pattern2 = re.compile(
        "^95-[a-zA-Z0-9_]{5}-[a-zA-Z0-9_]{4}-[a-zA-Z0-9_]{4}[a-zA-Z0-9_]{3}ERC"
    )
    if bool(pattern2.match(partnumber)):
        patron_pn = "Patrón 2. 95 ERC"
        id_tipo_pn = 1
        tipo_pn = "ERC"
        modulo_version_pn = partnumber[14:18]
        posicion_plataforma_pn = ""
        tipo_operacion = ""
        zona_gt_pn = ""
        objeto_pn = ""

    # 3. XX-XXXXX-XXXXAAAABCCCDXE. PN - ERC (len = 25)
    pattern3 = re.compile(
        "^95-[a-zA-Z0-9_]{5}-[a-zA-Z0-9_]{4}[a-zA-Z0-9_]{4}[a-zA-Z0-9_]{1}[0-9]{3}[a-zA-Z0-9_]{1}X[a-zA-Z0-9_]{1}$"
    )
    pattern0 = re.compile(".*ERC*")
    if bool(pattern3.match(partnumber)) and bool(
        pattern0.match(texto_material_pn_operacion)
    ):
        patron_pn = "Patrón 3. Texto PN ERC"
        id_tipo_pn = 1
        tipo_pn = "ERC"
        modulo_version_pn = partnumber[13:17]
        posicion_plataforma_pn = partnumber[17:18]
        tipo_operacion = int(partnumber[18:21])
        if tipo_operacion > 0 and tipo_operacion < 400:
            tipo_operacion_pn = "Mecánicas"
        if tipo_operacion > 399 and tipo_operacion < 900:
            tipo_operacion_pn = "Eléctricas"
        if tipo_operacion > 899 and tipo_operacion < 999:
            tipo_operacion_pn = "Excepcionales"
        zona_gt_pn = "95-" + partnumber[21:22]
        objeto_pn = ""

    # 4. XX-XXXXX-XXXXAXX. PN - ERC (len = 16)
    #    95-94594-0001A01
    pattern4 = re.compile("^95-[a-zA-Z0-9_]{5}-[a-zA-Z0-9_]{7}$")
    pattern00 = re.compile(".*ERC*")
    if bool(pattern4.match(partnumber)) and bool(pattern00.match(texto_operacion)):
        patron_pn = "Patrón 4. Texto operacion ERC"
        id_tipo_pn = 1
        tipo_pn = "ERC"
        modulo_version_pn = ""
        posicion_plataforma_pn = ""
        tipo_operacion = ""
        zona_gt_pn = ""
        objeto_pn = ""

    # 5. XX-XXXXX-XXXXAAAABCCCDXE. PN - ERC (len = 25)
    #    95-00168-0001EM0155ERC00119
    pattern5 = re.compile(
        "^95-[a-zA-Z0-9_]{5}-[a-zA-Z0-9_]{4}[a-zA-Z0-9_]{4}[a-zA-Z0-9_]{2}ERC[a-zA-Z0-9_]{5}$"
    )
    if bool(pattern5.match(partnumber)) and bool(pattern00.match(texto_operacion)):
        patron_pn = "Patrón 5. PN ERC"
        id_tipo_pn = 1
        tipo_pn = "ERC"
        modulo_version_pn = partnumber[13:17]
        posicion_plataforma_pn = partnumber[17:18]
        tipo_operacion = ""
        zona_gt_pn = ""
        objeto_pn = ""

    # 6. XX-XXXXX-XXXXAAAABCCCDEE. PN - Montaje (len = 24)
    pattern6 = re.compile(
        "^95-[a-zA-Z0-9_]{5}-[a-zA-Z0-9_]{4}[a-zA-Z0-9_]{4}[a-zA-Z0-9_]{1}[0-9]{3}[a-zA-Z0-9_]{1}[a-zA-Z0-9_]{2}$"
    )
    if bool(pattern6.match(partnumber)):
        patron_pn = "Patrón 6. 95 Longitud 24"
        id_tipo_pn = 2
        tipo_pn = "Montaje"
        modulo_version_pn = partnumber[13:17]
        posicion_plataforma_pn = partnumber[17:18]
        tipo_operacion = int(partnumber[18:21])
        if tipo_operacion > 0 and tipo_operacion < 400:
            tipo_operacion_pn = "Mecánicas"
        if tipo_operacion > 399 and tipo_operacion < 900:
            tipo_operacion_pn = "Eléctricas"
        if tipo_operacion > 899 and tipo_operacion < 999:
            tipo_operacion_pn = "Excepcionales"
        zona_gt_pn = "95-" + partnumber[21:22]
        objeto_pn = ""

    # 7. XX-XXXXX-XXXXAAAABBCCCDEE. PN - Montaje (len = 25)
    pattern7 = re.compile(
        "^95-[a-zA-Z0-9_]{5}-[a-zA-Z0-9_]{4}[a-zA-Z0-9_]{4}[a-zA-Z0-9_]{2}[0-9]{3}[a-zA-Z0-9_]{1}[a-zA-Z0-9_]{2}$"
    )
    if bool(pattern7.match(partnumber)):
        patron_pn = "Patrón 7. 95 Longitud 25"
        id_tipo_pn = 2
        tipo_pn = "Montaje"
        modulo_version_pn = partnumber[13:17]
        posicion_plataforma_pn = partnumber[17:19]
        tipo_operacion = int(partnumber[19:22])
        if tipo_operacion > 0 and tipo_operacion < 400:
            tipo_operacion_pn = "Mecánicas"
        if tipo_operacion > 399 and tipo_operacion < 900:
            tipo_operacion_pn = "Eléctricas"
        if tipo_operacion > 899 and tipo_operacion < 999:
            tipo_operacion_pn = "Excepcionales"
        zona_gt_pn = "95-" + partnumber[22:23]
        objeto_pn = ""

    # 8. PFXXX-XX-XX-XX-XXAAAABBGEE. PN - Prueba Funcional
    pattern8 = re.compile(
        "^PF[a-zA-Z0-9_]{3}-[a-zA-Z0-9_]{2}-[a-zA-Z0-9_]{2}-[a-zA-Z0-9_]{2}-[a-zA-Z0-9_]{2}[a-zA-Z0-9_]{4}[a-zA-Z0-9_]{2}[a-zA-Z0-9_]{1}[a-zA-Z0-9_]{2}$"
    )
    if bool(pattern8.match(partnumber)):
        patron_pn = "Patrón 8. PF"
        id_tipo_pn = 3
        tipo_pn = "Pruebas Funcionales"
        modulo_version_pn = partnumber[18:22]
        posicion_plataforma_pn = partnumber[21:23]
        tipo_operacion_pn = ""
        zona_gt_pn = "PF-" + partnumber[23:24]
        objeto_pn = ""

    # 9. 95-CANIBALIZACION-
    pattern9 = re.compile("^95-CANIBALIZACION-")
    if bool(pattern9.match(partnumber)):
        patron_pn = "Patrón 9. CANIBALIZACION"
        id_tipo_pn = 2
        tipo_pn = "Montaje"
        modulo_version_pn = ""
        posicion_plataforma_pn = partnumber[18:]
        tipo_operacion_pn = ""
        zona_gt_pn = ""
        objeto_pn = ""

    # 10. 95-INSP-CIERRE-
    pattern10 = re.compile("^95-INSP-CIERRE-")
    if bool(pattern10.match(partnumber)):
        patron_pn = "Patrón 10. INSP-CIERRE"
        id_tipo_pn = 4
        tipo_pn = "Inspección"
        modulo_version_pn = ""
        posicion_plataforma_pn = ""
        tipo_operacion_pn = ""
        zona_gt_pn = ""
        objeto_pn = partnumber[15:]

    # 11. 95-INSP-CIERRE-BORDE-
    #     95-INSP-CIERRE-BORDE-SALIDA-FLAP-ALA-IZQ
    pattern11 = re.compile("^95-INSP-CIERRE-BORDE-")
    if bool(pattern11.match(partnumber)):
        patron_pn = "Patrón 11. INSP-CIERRE"
        id_tipo_pn = 4
        tipo_pn = "Inspección"
        modulo_version_pn = ""
        posicion_plataforma_pn = ""
        tipo_operacion_pn = ""
        zona_gt_pn = ""
        objeto_pn = partnumber[21:]

    # 12. 95-INSP-FINAL-
    pattern12 = re.compile("^95-INSP-FINAL-")
    if bool(pattern12.match(partnumber)):
        patron_pn = "Patrón 12. INSP-FINAL"
        id_tipo_pn = 4
        tipo_pn = "Inspección"
        modulo_version_pn = ""
        posicion_plataforma_pn = ""
        tipo_operacion_pn = ""
        zona_gt_pn = ""
        objeto_pn = partnumber[14:]

    # 13. 95-INSP-QLOOP-
    pattern13 = re.compile("^95-INSP-QLOOP-")
    if bool(pattern13.match(partnumber)):
        patron_pn = "Patrón 13. INSP-QLOOP"
        id_tipo_pn = 4
        tipo_pn = "Inspección"
        modulo_version_pn = ""
        posicion_plataforma_pn = ""
        tipo_operacion_pn = ""
        zona_gt_pn = ""
        objeto_pn = partnumber[14:]

    # 14. 95-INSP-EWIS-STRAP-
    pattern14 = re.compile("^95-INSP-EWIS-STRAP-")
    if bool(pattern14.match(partnumber)):
        patron_pn = "Patrón 14. INSP-EWIS-STRAP"
        id_tipo_pn = 4
        tipo_pn = "Inspección"
        modulo_version_pn = ""
        posicion_plataforma_pn = ""
        tipo_operacion_pn = ""
        zona_gt_pn = ""
        objeto_pn = partnumber[19:]

    # 15. 95-INSP-BORDE-
    pattern15 = re.compile("^95-INSP-BORDE-")
    if bool(pattern15.match(partnumber)):
        patron_pn = "Patrón 15. INSP-BORDE"
        id_tipo_pn = 4
        tipo_pn = "Inspección"
        modulo_version_pn = ""
        posicion_plataforma_pn = ""
        tipo_operacion_pn = ""
        zona_gt_pn = ""
        objeto_pn = partnumber[14:]

    # 16. 95-REAPERTURAS-
    pattern16 = re.compile("^95-REAPERTURAS-")
    if bool(pattern16.match(partnumber)):
        patron_pn = "Patrón 16. REAPERTURAS"
        id_tipo_pn = 2
        tipo_pn = "Montaje"
        modulo_version_pn = ""
        posicion_plataforma_pn = ""
        tipo_operacion_pn = ""
        zona_gt_pn = ""
        objeto_pn = partnumber[15:]

    # 17. 95-TBJ-PTE-
    pattern17 = re.compile("^95-TBJ-PTE-")
    if bool(pattern17.match(partnumber)):
        patron_pn = "Patrón 17. TBJ-PTE"
        id_tipo_pn = 5
        tipo_pn = "Trabajos Pendientes"
        modulo_version_pn = ""
        posicion_plataforma_pn = ""
        tipo_operacion_pn = ""
        zona_gt_pn = ""
        objeto_pn = partnumber[11:]

    # 18. 95-BONDING-
    pattern18 = re.compile("^95-BONDING-")
    if bool(pattern18.match(partnumber)):
        patron_pn = "Patrón 18. BONDING"
        id_tipo_pn = 3
        tipo_pn = "Pruebas Funcionales"
        modulo_version_pn = ""
        posicion_plataforma_pn = ""
        tipo_operacion_pn = ""
        zona_gt_pn = ""
        objeto_pn = partnumber[11:]

    # 19. 95-REV-CONF-FINAL-
    pattern19 = re.compile("^95-REV-CONF-FINAL-")
    if bool(pattern19.match(partnumber)):
        patron_pn = "Patrón 19. REV-CONF-FINAL"
        id_tipo_pn = 4
        tipo_pn = "Inspección"
        modulo_version_pn = ""
        posicion_plataforma_pn = ""
        tipo_operacion_pn = ""
        zona_gt_pn = ""
        objeto_pn = partnumber[18:]

    # 20. 95-GROUND-TEST-ROE-
    pattern20 = re.compile("^95-GROUND-TEST-ROE-")
    if bool(pattern20.match(partnumber)):
        patron_pn = "Patrón 20. GROUND-TEST-ROE"
        id_tipo_pn = 3
        tipo_pn = "Pruebas Funcionales"
        modulo_version_pn = ""
        posicion_plataforma_pn = ""
        tipo_operacion_pn = ""
        zona_gt_pn = ""
        objeto_pn = partnumber[19:]

    # 21. 95-VUELOS-EXTRAS-NO-PLANIFICADOS
    pattern21 = re.compile("^95-VUELOS-EXTRAS-NO-PLANIFICADOS")
    if bool(pattern21.match(partnumber)):
        patron_pn = "Patrón 21. VUELOS-EXTRAS"
        id_tipo_pn = 3
        tipo_pn = "Pruebas Funcionales"
        modulo_version_pn = ""
        posicion_plataforma_pn = ""
        tipo_operacion_pn = ""
        zona_gt_pn = ""
        objeto_pn = ""

    return patron_pn


def normalizar_partnumber(df):
    df["patron_pn"] = ""
    df["id_tipo_pn"] = ""
    df["tipo_pn"] = ""
    df["modulo_version_pn"] = ""
    df["posicion_plataforma_pn"] = ""
    df["tipo_operacion_pn"] = ""
    df["zona_gt_pn"] = ""
    df["objeto_pn"] = ""

    for index, row in df.iterrows():
        arrray = partnumber(
            row["partnumber"],
            row["texto_material_pn_operacion"],
            row["texto_operacion"],
        )
        df.loc[index]["patron_pn"] = str(arrray[0])
        df.loc[index]["id_tipo_pn"] = str(arrray[1])
        df.loc[index]["tipo_pn"] = str(arrray[2])
        df.loc[index]["modulo_version_pn"] = str(arrray[3])
        df.loc[index]["posicion_plataforma_pn"] = str(arrray[4])
        df.loc[index]["tipo_operacion_pn"] = str(arrray[5])
        df.loc[index]["zona_gt_pn"] = str(arrray[6])
        df.loc[index]["objeto_pn"] = str(arrray[7])
    return df


class ActionOperacion(Action):
    def name(self):
        # define the name of the action which can then be included in training stories
        return "action_operacion"

    def run(self, dispatcher, tracker, domain):
        operacion = tracker.get_slot("operacion")
        codigoOperacion = tracker.get_slot("codigoOperacion")
        incidencia = tracker.get_slot("incidencia")
        tipoIncidencia = tracker.get_slot("tipoIncidencia")
        cur = conexion()
        obs = ""
        hnc = ""
        demat = ""
        tabla = ""
        rowIncidencia = 0
        incidenciaDetallada = ""
        codigoOrden = None

        rowHNC = '0'
        rowOBS = '0'
        rowDEMAT = '0'
        orden = operacion

        print(incidencia, tipoIncidencia, operacion, codigoOperacion)

        if operacion != None:
            operacion = operacion.lower()
            if operacion == 'operación':
                operacion == 'operacion'

        if tipoIncidencia != None:
            tipoIncidencia = tipoIncidencia.upper()
            tipoIncidencia = (
                tipoIncidencia.replace("'", "").replace(".", "").replace(" ", "")
            )
            if (
                tipoIncidencia == "HNC"
                or tipoIncidencia == "HNCS"
                or tipoIncidencia == "NOCONFORMIDADES"
                or tipoIncidencia == "NOCONFORMIDAD"
            ):
                tipoIncidencia = "HNC"
            elif (
                tipoIncidencia == "OBS"
                or tipoIncidencia == "OBSERVACIONES"
                or tipoIncidencia == "OB"
                or tipoIncidencia == "FINOBS"
                or tipoIncidencia == "FINOB"
                or tipoIncidencia == "OBSERVACION"
                or tipoIncidencia == "OB"
            ):
                tipoIncidencia = "Observaciones"
            elif tipoIncidencia == "DEMAT" or tipoIncidencia == "INCIDENCIA":
                tipoIncidencia = "Demat"
        '''
        elif tipoIncidencia == None:
            dispatcher.utter_message("No existe ese tipo de incidencia")
            return []
        '''

        if codigoOperacion != None:
            codigoOperacion = codigoOperacion.replace("'", "").replace('"', "").replace("/", "")
            codigoOperacion = re.sub('[^0-9]','', codigoOperacion)

        if re.match(r'[1,7,8]{1}[0-9]{3}$', codigoOperacion):
            codigoOperacion = codigoOperacion
        elif re.match(r'[1,7,8]{1}[0-9]{6}$', codigoOperacion):
            codigoOrden = codigoOperacion
            codigoOperacion = None
        else:
            dispatcher.utter_message("La operación no existe. Por favor introduzca un número de operación correcto")
            return []

        print(codigoOperacion, codigoOrden)

        if tipoIncidencia == "hnc":
            if codigoOperacion != None:
                cur.execute(
                    "SELECT count(*) from lm_fil_hnc where operacion ='"
                    + codigoOperacion
                    + "';"
                    )
                rows = cur.fetchall()
                if str(rows[0]) != '(0,)':
                    row = str(rows[0])
                    row = "".join(row)
                    rowHNC = row.replace(",", "").replace("(", "").replace(")", "")
                    dispatcher.utter_message("<b>Existen " + rowHNC + " HNC en la operación " + codigoOperacion + "</b>")
                    #hnc = '1' #Borrar si se quiere listar

                    if int(rowHNC) < 5:
                        cur.execute(
                            "SELECT partnumber, texto_partnumber_hnc, orden, operacion, descripcion_incidencia, texto_largo_descriptivo from lm_fil_hnc where operacion ='"
                            + codigoOperacion
                            + "';"
                            )
                        rows = cur.fetchall()
                        hnc = ""
                        if rows != []:
                            index = 0
                            for row in rows:
                                row = str(rows[index])
                                index += 1
                                row = "".join(row)
                                rowHNC = row.replace(",", "").replace("(", "").replace(")", "")
                                elements = rowHNC.split("'")
                                hnc = (
                                    "HNC con Partnumber: "
                                    + elements[1]
                                    + "<br>Texto material: "
                                    + elements[3]
                                    + "<br>Orden: "
                                    + elements[5]
                                    + "<br>Operación: "
                                    + elements[7]
                                    + "<br>Descripción larga: "
                                    + elements[9]
                                    + "<br>Texto largo descriptivo: "
                                    + elements[11]
                                )
                                dispatcher.utter_message(hnc)
                        return []

                    if int(rowHNC) > 5:
                        dispatcher.utter_message('Aquí tienes las ultimas 5')
                        cur.execute(
                            "SELECT partnumber, texto_partnumber_hnc, orden, operacion, descripcion_incidencia, texto_largo_descriptivo from lm_fil_hnc where operacion ='"
                            + codigoOperacion
                            + "';"
                        )
                        rows = cur.fetchall()
                        avion = ""
                        if rows != []:
                            index = 0
                            for row in rows:
                                while index < 5:
                                    row = str(rows[index])
                                    index += 1
                                    row = "".join(row)
                                    rowHNC = row.replace(",", "").replace("(", "").replace(")", "")
                                    elements = rowHNC.split("'")
                                    hnc = (
                                        "HNC con Partnumber: "
                                        + elements[1]
                                        + "<br>Texto material: "
                                        + elements[3]
                                        + "<br>Orden: "
                                        + elements[5]
                                        + "<br>Operación: "
                                        + elements[7]
                                        + "<br>Descripción larga: "
                                        + elements[9]
                                        + "<br>Texto largo descriptivo: "
                                        + elements[11]
                                    )
                                    dispatcher.utter_message(hnc)

                            dispatcher.utter_message("¿Deseas ver las 5 siguientes?")
                            return []
                else:
                    rowHNC = '0'

            elif codigoOrden != None:
                cur.execute(
                    "SELECT count(*) from lm_fil_hnc where orden ='"
                    + codigoOrden
                    + "';"
                    )
                rows = cur.fetchall()
                if str(rows[0]) != '(0,)':
                    row = str(rows[0])
                    row = "".join(row)
                    rowHNC = row.replace(",", "").replace("(", "").replace(")", "")
                    dispatcher.utter_message("<b>Existen " + rowHNC + " HNC en la operación " + codigoOrden + "</b>")
                    #hnc = '1' #Borrar si se quiere listar
                    
                    if int(rowHNC) < 5:
                        cur.execute(
                            "SELECT partnumber, texto_partnumber_hnc, orden, operacion, descripcion_incidencia, texto_largo_descriptivo from lm_fil_hnc where orden ='"
                            + codigoOrden
                            + "';"
                            )
                        rows = cur.fetchall()
                        hnc = ""
                        if rows != []:
                            index = 0
                            for row in rows:
                                row = str(rows[index])
                                index += 1
                                row = "".join(row)
                                rowHNC = row.replace(",", "").replace("(", "").replace(")", "")
                                elements = rowHNC.split("'")
                                hnc = (
                                    "HNC con Partnumber: "
                                    + elements[1]
                                    + "<br>Texto material: "
                                    + elements[3]
                                    + "<br>Orden: "
                                    + elements[5]
                                    + "<br>Operación: "
                                    + elements[7]
                                    + "<br>Descripción larga: "
                                    + elements[9]
                                    + "<br>Texto largo descriptivo: "
                                    + elements[11]
                                )
                                dispatcher.utter_message(hnc)
                        return []

                    if int(rowHNC) > 5:
                        dispatcher.utter_message('Aquí tienes las ultimas 5')
                        cur.execute(
                            "SELECT partnumber, texto_partnumber_hnc, orden, operacion, descripcion_incidencia, texto_largo_descriptivo from lm_fil_hnc where orden ='"
                            + codigoOrden
                            + "';"
                        )
                        rows = cur.fetchall()
                        hnc = ""
                        if rows != []:
                            index = 0
                            for row in rows:
                                while index < 5:
                                    row = str(rows[index])
                                    index += 1
                                    row = "".join(row)
                                    rowHNC = row.replace(",", "").replace("(", "").replace(")", "")
                                    elements = rowHNC.split("'")
                                    hnc = (
                                        "HNC con Partnumber: "
                                        + elements[1]
                                        + "<br>Texto material: "
                                        + elements[3]
                                        + "<br>Orden: "
                                        + elements[5]
                                        + "<br>Operación: "
                                        + elements[7]
                                        + "<br>Descripción larga: "
                                        + elements[9]
                                        + "<br>Texto largo descriptivo: "
                                        + elements[11]
                                    )
                                    dispatcher.utter_message(hnc)

                            dispatcher.utter_message("¿Deseas ver las 5 siguientes?")
                            return []
                else:
                    rowHNC = '0'

        if tipoIncidencia == "obs":
            if codigoOperacion != None:
                cur.execute(
                    "SELECT count(*) from lm_fil_observaciones where operacion ='"
                    + codigoOperacion
                    + "';"
                )
                rows = cur.fetchall()
                if str(rows[0]) != '(0,)':
                    row = str(rows[0])
                    row = "".join(row)
                    rowOBS = row.replace(",", "").replace("(", "").replace(")", "")
                    dispatcher.utter_message("<b>Existen " + rowOBS + " OBS en la operación " + codigoOperacion + "</b>")
                    #obs = '1' #Borrar si se quiere listar
                
                    if int(rowOBS) < 5:
                            cur.execute(
                                "SELECT orden, operacion, observacion, descripcion_incidencia from lm_fil_observaciones where operacion ='"
                                + codigoOperacion
                                + "';"
                            )
                            rows = cur.fetchall()
                            obs = ""
                            if rows != []:
                                index = 0
                                for row in rows:
                                    row = str(rows[index])
                                    index += 1
                                    row = "".join(row)
                                    rowOBS = row.replace(",", "").replace("(", "").replace(")", "")
                                    elements = rowOBS.split("'")
                                    obs = (
                                        "OBS de Orden: "
                                        + elements[1]
                                        + "<br>Operación: "
                                        + elements[3]
                                        + "<br>Observación: "
                                        + elements[5]
                                        + "<br>Descripción observación: "
                                        + elements[7]
                                    )
                                    dispatcher.utter_message(obs)
                            return []

                    if int(rowOBS) > 5:
                        dispatcher.utter_message('Aquí tienes las ultimas 5')
                        cur.execute(
                            "SELECT orden, operacion, observacion, descripcion_incidencia from lm_fil_observaciones where operacion ='"
                            + codigoOperacion
                            + "';"
                        )
                        rows = cur.fetchall()
                        obs = ""
                        if rows != []:
                            index = 0
                            for row in rows:
                                while index < 5:
                                    row = str(rows[index])
                                    index += 1
                                    row = "".join(row)
                                    rowOBS = row.replace(",", "").replace("(", "").replace(")", "")
                                    elements = rowOBS.split("'")
                                    obs = (
                                        "OBS de Orden: "
                                        + elements[1]
                                        + "<br>Operación: "
                                        + elements[3]
                                        + "<br>Observación: "
                                        + elements[5]
                                        + "<br>Descripción observación: "
                                        + elements[7]
                                    )
                                    dispatcher.utter_message(obs)

                            dispatcher.utter_message("¿Deseas ver las 5 siguientes?")
                            return []
                else:
                    rowOBS = '0'

            elif codigoOrden != None:
                cur.execute(
                    "SELECT count(*) from lm_fil_observaciones where orden ='"
                    + codigoOrden
                    + "';"
                )
                rows = cur.fetchall()
                if str(rows[0]) != '(0,)':
                    row = str(rows[0])
                    row = "".join(row)
                    rowOBS = row.replace(",", "").replace("(", "").replace(")", "")
                    dispatcher.utter_message("<b>Existen " + rowOBS + " OBS con el código de operación " + codigoOrden + "</b>")
                    #obs = '1' #Borrar si se quiere listar
                
                    if int(rowOBS) < 5:
                            cur.execute(
                                "SELECT orden, operacion, observacion, descripcion_incidencia from lm_fil_observaciones where orden ='"
                                + codigoOrden
                                + "';"
                            )
                            rows = cur.fetchall()
                            obs = ""
                            if rows != []:
                                index = 0
                                for row in rows:
                                    row = str(rows[index])
                                    index += 1
                                    row = "".join(row)
                                    rowOBS = row.replace(",", "").replace("(", "").replace(")", "")
                                    elements = rowOBS.split("'")
                                    obs = (
                                        "OBS de Orden: "
                                        + elements[1]
                                        + "<br>Operación: "
                                        + elements[3]
                                        + "<br>Observación: "
                                        + elements[5]
                                        + "<br>Descripción observación: "
                                        + elements[7]
                                    )
                                    dispatcher.utter_message(obs)
                            return []

                    if int(rowOBS) > 5:
                        dispatcher.utter_message('Aquí tienes las ultimas 5')
                        cur.execute(
                            "SELECT orden, operacion, observacion, descripcion_incidencia from lm_fil_observaciones where orden ='"
                            + codigoOrden
                            + "';"
                        )
                        rows = cur.fetchall()
                        obs = ""
                        if rows != []:
                            index = 0
                            for row in rows:
                                while index < 5:
                                    row = str(rows[index])
                                    index += 1
                                    row = "".join(row)
                                    rowOBS = row.replace(",", "").replace("(", "").replace(")", "")
                                    elements = rowOBS.split("'")
                                    obs = (
                                        "OBS de Orden: "
                                        + elements[1]
                                        + "<br>Operación: "
                                        + elements[3]
                                        + "<br>Observación: "
                                        + elements[5]
                                        + "<br>Descripción observación: "
                                        + elements[7]
                                    )
                                    dispatcher.utter_message(obs)

                            dispatcher.utter_message("¿Deseas ver las 5 siguientes?")
                            return []
                else:
                    rowOBS = '0'

        if tipoIncidencia == 'demat' and codigoOrden != None:
            cur.execute(
                "SELECT count(*) from lm_fil_demat where orden ='"
                + codigoOrden
                + "';"
            )
            rows = cur.fetchall()
            if str(rows[0]) != '(0,)':
                row = str(rows[0])
                row = "".join(row)
                rowDEMAT = row.replace(",", "").replace("(", "").replace(")", "")
                dispatcher.utter_message("<b>Existen " + rowDEMAT + " DEMAT con el código de operación " + codigoOrden + "</b>")
                #demat = '1' #Borrar si se quiere listar
                
                if int(rowDEMAT) < 5:
                    cur.execute(
                        "SELECT partnumber, orden, descripcion_incidencia from lm_fil_demat where orden ='"
                        + codigoOrden
                        + "';"
                    )
                    rows = cur.fetchall()
                    demat = ""
                    if rows != []:
                        index = 0
                        for row in rows:
                            row = str(rows[index])
                            index += 1
                            row = "".join(row)
                            rowDEMAT = row.replace(",", "").replace("(", "").replace(")", "")
                            elements = rowDEMAT.split("'")
                            demat = (
                                "DEMAT con Partnumber: "
                                + elements[1]
                                + "<br>Orden: "
                                + elements[3]
                                + "<br>Descripción: "
                                + elements[5]
                            )
                            dispatcher.utter_message(demat)
                    return []

                if int(rowDEMAT) > 5:
                    dispatcher.utter_message('Aquí tienes las ultimas 5')
                    cur.execute(
                        "SELECT partnumber, orden, descripcion_incidencia from lm_fil_demat where orden ='"
                        + codigoOrden
                        + "';"
                    )
                    rows = cur.fetchall()
                    demat = ""
                    if rows != []:
                        index = 0
                        for row in rows:
                            while index < 5:
                                row = str(rows[index])
                                index += 1
                                row = "".join(row)
                                rowDEMAT = row.replace(",", "").replace("(", "").replace(")", "")
                                elements = rowDEMAT.split("'")
                                demat = (
                                    "DEMAT con Partnumber: "
                                    + elements[1]
                                    + "<br>Orden: "
                                    + elements[3]
                                    + "<br>Descripción: "
                                    + elements[5]
                                )
                                dispatcher.utter_message(demat)

                        dispatcher.utter_message("¿Deseas ver las 5 siguientes?")
                        return []
            else:
                rowDEMAT = '0'
        
        if tipoIncidencia == None:
            print("srgvdfghthrthrtbtrhfngdh")
            cur.execute(
                "SELECT count(*) from lm_fil_hnc where orden ='"
                + codigoOrden
                + "';"
                )
            rows = cur.fetchall()
            if str(rows[0]) != '(0,)':
                row = str(rows[0])
                row = "".join(row)
                rowHNC = row.replace(",", "").replace("(", "").replace(")", "")
                dispatcher.utter_message("<b>Existen " + rowHNC + " HNC en la orden " + codigoOrden + "</b>")

            cur.execute(
                "SELECT count(*) from lm_fil_observaciones where orden ='"
                + codigoOrden
                + "';"
                )
            rows = cur.fetchall()
            if str(rows[0]) != '(0,)':
                row = str(rows[0])
                row = "".join(row)
                rowOBS = row.replace(",", "").replace("(", "").replace(")", "")
                dispatcher.utter_message("<b>Existen " + rowOBS + " OBS en la orden " + codigoOrden + "</b>")

            cur.execute(
                "SELECT count(*) from lm_fil_demat where orden ='"
                + codigoOrden
                + "';"
                )
            rows = cur.fetchall()
            if str(rows[0]) != '(0,)':
                row = str(rows[0])
                row = "".join(row)
                rowDEMAT = row.replace(",", "").replace("(", "").replace(")", "")
                dispatcher.utter_message("<b>Existen " + rowDEMAT + " DEMAT en la orden " + codigoOrden + "</b>")



        if int(rowIncidencia) < 1:
            if tipoIncidencia == "demat" and codigoOperacion != None:
                inci = "No existen las incidencias DEMAT como operación, pruebe como orden"
                dispatcher.utter_message(inci)
                return []
            elif tipoIncidencia == "demat" and orden != None:
                if rowDEMAT == '0':
                    dispatcher.utter_message("No existen DEMAT con el código de orden " + codigoOperacion)
                    return []
            if tipoIncidencia == None and operacion != None:
                if rowOBS == '0' and rowHNC == '0':
                    dispatcher.utter_message("No hay HNC ni OBS con el código de operación " + codigoOperacion)
                    return []
            if tipoIncidencia == None and orden != None:
                if rowOBS == '0' and rowHNC == '0' and rowDEMAT == '0':
                    dispatcher.utter_message("No existen HNC ni OBS ni DEMAT con el código de operación " + codigoOperacion)
                    return []
            if tipoIncidencia == 'obs' and obs == '' and operacion != None:
                dispatcher.utter_message("No existen OBS con el código de operación " + codigoOperacion)
                return []
            elif tipoIncidencia == 'obs' and obs == '' and orden != None:
                dispatcher.utter_message("No existen OBS con el código de orden " + codigoOperacion)
                return []
            if tipoIncidencia == 'hnc' and hnc == '' and operacion != None:
                dispatcher.utter_message("No existen HNC con el código de operación " + codigoOperacion)
                return []
            elif tipoIncidencia == 'hnc' and hnc == '' and orden != None:
                dispatcher.utter_message("No existen HNC con el código de orden " + codigoOperacion)
                return []
        return []


class ActionAvion(Action):
    def name(self):
        # define the name of the action which can then be included in training stories
        return "action_avion"

    def run(self, dispatcher, tracker, domain):
        avion = tracker.get_slot("avion")
        codigoAvion = tracker.get_slot("codigoAvion")
        tipoIncidencia = tracker.get_slot("tipoIncidencia")
        estacion = tracker.get_slot("estaciones")
        codigoEstacion = tracker.get_slot("codigoEstacion")
        incidencia = tracker.get_slot("incidencia")
        partnumberSlot = tracker.get_slot("partNumber")

        cur = conexion()
        if tipoIncidencia != None:
            tipoIncidencia = tipoIncidencia.upper()
            tipoIncidencia = (
                tipoIncidencia.replace("'", "").replace(".", "").replace(" ", "")
            )
            if (
                tipoIncidencia == "HNC"
                or tipoIncidencia == "HNCS"
                or tipoIncidencia == "NOCONFORMIDADES"
                or tipoIncidencia == "NOCONFORMIDAD"
            ):
                tipoIncidencia = "HNC"
            elif (
                tipoIncidencia == "OBS"
                or tipoIncidencia == "OBSERVACIONES"
                or tipoIncidencia == "OB"
                or tipoIncidencia == "FINOBS"
                or tipoIncidencia == "FINOB"
                or tipoIncidencia == "OBSERVACION"
                or tipoIncidencia == "OB"
            ):
                tipoIncidencia = "Observaciones"
            elif tipoIncidencia == "DEMAT" or tipoIncidencia == "INCIDENCIA":
                tipoIncidencia = "Demat"

        if codigoEstacion != None:
            codigoEstacion = codigoEstacion.replace("'", "").replace('"', "").replace("/", "")

        if codigoAvion != None:
            codigoAvion = codigoAvion.replace("'", "").replace('"', "").replace("/", "")

        print(
            avion, codigoAvion, incidencia, tipoIncidencia, estacion, codigoEstacion, partnumberSlot
        )

        if re.match(r'[0-9]{3}$', codigoAvion):
            # pregunta por incidencias en un avion
            cur.execute(
                "SELECT count(*) from lm_fil_opercaciones_incidencias where avion ='"
                + codigoAvion
                + "';"
            )
            rows = cur.fetchall()
            print(rows)
            if str(rows[0]) != '(0,)':
                row = str(rows[0])
                row = "".join(row)
                rowAvion = row.replace(",", "").replace("(", "").replace(")", "")
                avionCount = ("<b>Hay " + rowAvion + " incidencias con el número de avión " + codigoAvion + "</b>")
                if int(rowAvion) < 5:
                    dispatcher.utter_message(avionCount)
                    cur.execute(
                        "SELECT * from lm_fil_opercaciones_incidencias where avion ='"
                        + codigoAvion
                        + "'ORDER BY orden ASC;"
                    )
                    rows = cur.fetchall()
                    avion = ""
                    if rows != []:
                        index = 0
                        for row in rows:
                            row = str(rows[index])
                            index += 1
                            row = "".join(row)
                            rowAvion = row.replace(",", "").replace("(", "").replace(")", "")
                            elements = rowAvion.split("'")
                            avion = (
                                elements[1].upper()
                                + ":"
                                + "<br>Pathnumber: "
                                + elements[3]
                                + "<br>Orden: "
                                + elements[5]
                                + "<br>Operación: "
                                + elements[7]
                                + "<br>Estación: "
                                + elements[11]
                                + "<br>Descripción: "
                                + elements[17]
                            )
                            dispatcher.utter_message(avion)
                    return []
                else:
                    dispatcher.utter_message(avionCount)
                    dispatcher.utter_message('Aquí tienes las ultimas 5')
                    cur.execute(
                        "SELECT * from lm_fil_opercaciones_incidencias where avion ='"
                        + codigoAvion
                        + "'ORDER BY orden ASC;"
                    )
                    rows = cur.fetchall()
                    avion = ""
                    if rows != []:
                        index = 0
                        for row in rows:
                            while index < 5:
                                row = str(rows[index])
                                index += 1
                                row = "".join(row)
                                rowAvion = row.replace(",", "").replace("(", "").replace(")", "")
                                elements = rowAvion.split("'")
                                avion = (
                                    elements[1].upper()
                                    + ":"
                                    + "<br>Pathnumber: "
                                    + elements[3]
                                    + "<br>Orden: "
                                    + elements[5]
                                    + "<br>Operación: "
                                    + elements[7]
                                    + "<br>Estación: "
                                    + elements[11]
                                    + "<br>Descripción: "
                                    + elements[17]
                                )

                                dispatcher.utter_message(avion)

                        dispatcher.utter_message("¿Deseas ver las 5 siguientes?")
                        return []
            else:
                dispatcher.utter_message("El avión introducido no tiene incidencias")
                return []

        else:
            dispatcher.utter_message("Indícame el número de avión correcto por favor")
            return []

        if avion != None and estacion == None and tipoIncidencia == None:
            # pregunta por incidencias en un avion
            cur.execute(
                "SELECT count(*) from lm_fil_opercaciones_incidencias where avion ='"
                + codigoAvion
                + "';"
            )
            rows = cur.fetchall()
            if str(rows[0]) != '(0,)':
                row = str(rows[0])
                row = "".join(row)
                rowAvion = row.replace(",", "").replace("(", "").replace(")", "")
                avionCount = ("<b>Hay " + rowAvion + " incidencias con el número de avión " + codigoAvion + "</b>")
                if int(rowAvion) < 5:
                    dispatcher.utter_message(avionCount)
                    cur.execute(
                        "SELECT * from lm_fil_opercaciones_incidencias where avion ='"
                        + codigoAvion
                        + "'ORDER BY orden ASC;"
                    )
                    rows = cur.fetchall()
                    avion = ""
                    if rows != []:
                        index = 0
                        for row in rows:
                            row = str(rows[index])
                            index += 1
                            row = "".join(row)
                            rowAvion = row.replace(",", "").replace("(", "").replace(")", "")
                            elements = rowAvion.split("'")
                            avion = (
                                elements[1].upper()
                                + ":"
                                + "<br>Pathnumber: "
                                + elements[3]
                                + "<br>Orden: "
                                + elements[5]
                                + "<br>Operación: "
                                + elements[7]
                                + "<br>Estación: "
                                + elements[11]
                                + "<br>Descripción: "
                                + elements[17]
                            )
                            dispatcher.utter_message(avion)
                    return []
                else:
                    dispatcher.utter_message(avionCount)
                    dispatcher.utter_message('Aquí tienes las ultimas 5')
                    cur.execute(
                        "SELECT * from lm_fil_opercaciones_incidencias where avion ='"
                        + codigoAvion
                        + "'ORDER BY orden ASC;"
                    )
                    rows = cur.fetchall()
                    avion = ""
                    if rows != []:
                        index = 0
                        for row in rows:
                            while index < 5:
                                row = str(rows[index])
                                index += 1
                                row = "".join(row)
                                rowAvion = row.replace(",", "").replace("(", "").replace(")", "")
                                elements = rowAvion.split("'")
                                avion = (
                                    elements[1].upper()
                                    + ":"
                                    + "<br>Pathnumber: "
                                    + elements[3]
                                    + "<br>Orden: "
                                    + elements[5]
                                    + "<br>Operación: "
                                    + elements[7]
                                    + "<br>Estación: "
                                    + elements[11]
                                    + "<br>Descripción: "
                                    + elements[17]
                                )

                                dispatcher.utter_message(avion)

                        dispatcher.utter_message("¿Deseas ver las 5 siguientes?")
                        return []

            else:
                dispatcher.utter_message("Indícame el número de avión correcto por favor")
                return []

            cur.execute(
                "SELECT * from lm_fil_opercaciones_incidencias where avion = '"
                + codigoAvion
                + "';"
            )

            rows = cur.fetchall()
            avion = ""
            if rows != []:
                index = 0
                for row in rows:
                    row = str(rows[index])
                    index += 1
                    row = "".join(row)
                    rowAvion = row.replace(",", "").replace("(", "").replace(")", "")
                    elements = rowAvion.split("'")
                    avion = (
                        elements[15].upper()
                        + ":"
                        + "<br>Pathnumber: "
                        + elements[3]
                        + "<br>Orden: "
                        + elements[5]
                        + "<br>Operación: "
                        + elements[7]
                        + "<br>Estación: "
                        + elements[11]
                        + "<br>Descripción: "
                        + elements[17]
                    )
                    #dispatcher.utter_message(avion)
                    #Muestra en detalle cada incidencia
            else:
                dispatcher.utter_message("Indícame el número de avión correcto por favor")
                return []

        elif avion != None and estacion == None and tipoIncidencia != None:
            cur.execute(
                "SELECT count(*) from lm_fil_opercaciones_incidencias where avion = '"
                + codigoAvion
                + "' and tipo_incidencia = '"
                + tipoIncidencia
                + "';"
            )
            rows = cur.fetchall()
            if str(rows[0]) != '(0,)':
                row = str(rows[0])
                row = "".join(row)
                rowAvion = row.replace(",", "").replace("(", "").replace(")", "")
                avionCount = ("<b>Existen " + rowAvion + " " + tipoIncidencia + " con el número de avión " + codigoAvion + "</b>")
                dispatcher.utter_message(avionCount)
            else:
                dispatcher.utter_message("<b>No existen incidencias " + tipoIncidencia + " con el avión " + codigoAvion + "</b>")
                return []

            cur.execute(
                "SELECT * from lm_fil_opercaciones_incidencias where avion = '"
                + codigoAvion
                + "' and tipo_incidencia = '"
                + tipoIncidencia
                + "';"
            )
            rows = cur.fetchall()
            avion = ""
            if rows != []:
                index = 0
                for row in rows:
                    row = str(rows[index])
                    index += 1
                    row = "".join(row)
                    rowAvion = row.replace(",", "").replace("(", "").replace(")", "")
                    elements = rowAvion.split("'")
                    avion = (
                        tipoIncidencia.upper()
                        + ":"
                        + "<br>Pathnumber: "
                        + elements[3]
                        + "<br>Orden: "
                        + elements[5]
                        + "<br>Operación: "
                        + elements[7]
                        + "<br>Estación: "
                        + elements[11]
                        + "<br>Descripción: "
                        + elements[17]
                    )
                    #dispatcher.utter_message(avion)
            else:
                dispatcher.utter_message("<b>No existen incidencias " + tipoIncidencia + " con el avión " + codigoAvion + "</b>")
                return []

        elif avion != None and codigoEstacion != None and tipoIncidencia == None:
            cur.execute(
                "SELECT count(*) from lm_fil_opercaciones_incidencias where avion ='"
                + codigoAvion
                + "' and estacion ='"
                + codigoEstacion
                + "';"
            )
            rows = cur.fetchall()
            if str(rows[0]) != '(0,)':
                row = str(rows[0])
                row = "".join(row)
                rowAvion = row.replace(",", "").replace("(", "").replace(")", "")
                avionCount = ("<b>Hay " + rowAvion + " incidencias con el número de avión " + codigoAvion + " en la estación " + codigoEstacion + "</b>")
                dispatcher.utter_message(avionCount)
            else:
                dispatcher.utter_message("No hay incidencias con el número de avión " + codigoAvion + " en la estación " + codigoEstacion)
                return []

            cur.execute(
            "SELECT * from lm_fil_opercaciones_incidencias where avion = '"
                + codigoAvion
                + "' and estacion ='"
                + codigoEstacion
                + "';"
            )
            rows = cur.fetchall()
            avion = ""
            if rows != []:
                index = 0
                for row in rows:
                    row = str(rows[index])
                    index += 1
                    row = "".join(row)
                    rowAvion = row.replace(",", "").replace("(", "").replace(")", "")
                    elements = rowAvion.split("'")
                    avion = (
                        elements[15].upper()
                        + ":"
                        + "<br>Pathnumber: "
                        + elements[3]
                        + "<br>Orden: "
                        + elements[5]
                        + "<br>Operación: "
                        + elements[7]
                        + "<br>Estación: "
                        + elements[11]
                        + "<br>Descripción: "
                        + elements[17]
                    )
                    dispatcher.utter_message(avion)
            else:
                dispatcher.utter_message("No hay incidencias con el número de avión " + codigoAvion + " en la estación " + codigoEstacion)
                return []
        elif avion == None and codigoEstacion != None and tipoIncidencia == None:
            if (
                codigoEstacion == "FAL"
                or codigoEstacion == "fal"
                or codigoEstacion == "Fal"
            ):
                cur.execute(
                    "SELECT count(*) from lm_fil_opercaciones_incidencias;"
                )
                rows = cur.fetchall()
                if str(rows[0]) != '(0,)':
                    row = str(rows[0])
                    row = "".join(row)
                    rowEstacion = row.replace(",", "").replace("(", "").replace(")", "")
                    estacionCount = ("<b>Hay " + rowEstacion + " incidencias con el número de estación " + codigoEstacion + "</b>")
                    dispatcher.utter_message(estacionCount)
                else:
                    dispatcher.utter_message("No hay incidencias en la estación " + codigoEstacion)
                    return []

                cur.execute(
                    "SELECT * from lm_fil_opercaciones_incidencias;"
                )
                rows = cur.fetchall()
                estacion = ""
                if rows != []:
                    index = 0
                    for row in rows:
                        row = str(rows[index])
                        index += 1
                        row = "".join(row)
                        rowAvion = (
                            row.replace(",", "").replace("(", "").replace(")", "")
                        )
                        elements = rowAvion.split("'")
                        estacion = (
                            elements[15].upper()
                            + ":"
                            + "\nPathnumber: "
                            + elements[3]
                            + "\nOrden: "
                            + elements[5]
                            + "\nOperación: "
                            + elements[7]
                            + "\nEstación: "
                            + elements[11]
                            + "\nDescripción: "
                            + elements[17]
                        )
                        #dispatcher.utter_message(estacion)
                else:
                    dispatcher.utter_message("No hay incidencias en la estación " + codigoEstacion)
                    return []
            else:
                cur.execute(
                    "SELECT count(*) from lm_fil_opercaciones_incidencias where estacion = '"
                    + codigoEstacion
                    + "';"
                )
                rows = cur.fetchall()
                if str(rows[0]) != '(0,)':
                    row = str(rows[0])
                    row = "".join(row)
                    rowEstacion = row.replace(",", "").replace("(", "").replace(")", "")
                    estacionCount = ("<b>Hay " + rowEstacion + " incidencias en la estación " + codigoEstacion + "</b>")
                    dispatcher.utter_message(estacionCount)
                else:
                    dispatcher.utter_message("No hay incidencias en la estación " + codigoEstacion)
                    return []

                cur.execute(
                    "SELECT * from lm_fil_opercaciones_incidencias where estacion = '"
                    + codigoEstacion
                    + "';"
                )
                rows = cur.fetchall()
                estacion = ""
                if rows != []:
                    index = 0
                    for row in rows:
                        row = str(rows[index])
                        index += 1
                        row = "".join(row)
                        rowAvion = (
                            row.replace(",", "").replace("(", "").replace(")", "")
                        )
                        elements = rowAvion.split("'")
                        estacion = (
                            elements[15].upper()
                            + ":"
                            + "<br>Pathnumber: "
                            + elements[3]
                            + "<br>Orden: "
                            + elements[5]
                            + "<br>Operación: "
                            + elements[7]
                            + "<br>Estación: "
                            + elements[11]
                            + "<br>Descripción: "
                            + elements[17]
                        )
                        #dispatcher.utter_message(estacion)
                else:
                    dispatcher.utter_message("No hay incidencias en la estación " + codigoEstacion)
                    return []

        elif avion == None and codigoEstacion != None and tipoIncidencia != None:
            if (
                codigoEstacion == "FAL"
                or codigoEstacion == "fal"
                or codigoEstacion == "Fal"
            ):
                cur.execute(
                    "SELECT count(*) from lm_fil_opercaciones_incidencias where tipo_incidencia = '"
                    + tipoIncidencia
                    + "';"
                )
                rows = cur.fetchall()
                if str(rows[0]) != '(0,)':
                    row = str(rows[0])
                    row = "".join(row)
                    rowEstacion = row.replace(",", "").replace("(", "").replace(")", "")
                    estacionCount = ("<b>Hay " + rowEstacion + " " + tipoIncidencia + " con el número de estación " + codigoEstacion + "</b>")
                    dispatcher.utter_message(estacionCount)
                else:
                    dispatcher.utter_message("No hay incidencias " + tipoIncidencia + " en la estación " + codigoEstacion)
                    return []

                cur.execute(
                    "SELECT * from lm_fil_opercaciones_incidencias where tipo_incidencia = '"
                    + tipoIncidencia
                    + "';"
                )
                rows = cur.fetchall()
                estacion = ""
                if rows != []:
                    index = 0
                    for row in rows:
                        row = str(rows[index])
                        index += 1
                        row = "".join(row)
                        rowAvion = (
                            row.replace(",", "").replace("(", "").replace(")", "")
                        )
                        elements = rowAvion.split("'")
                        estacion = (
                            elements[15].upper()
                            + ":"
                            + "\nPathnumber: "
                            + elements[3]
                            + "\nOrden: "
                            + elements[5]
                            + "\nOperación: "
                            + elements[7]
                            + "\nEstación: "
                            + elements[11]
                            + "\nDescripción: "
                            + elements[17]
                        )
                        #dispatcher.utter_message(estacion)
                else:
                    dispatcher.utter_message("No hay incidencias " + tipoIncidencia + " en la estación " + codigoEstacion)
                    return []

            else:
                cur.execute(
                    "SELECT count(*) from lm_fil_opercaciones_incidencias where estacion = '"
                    + codigoEstacion
                    + "' and tipo_incidencia = '"
                    + tipoIncidencia
                    + "';"
                )
                rows = cur.fetchall()
                if str(rows[0]) != '(0,)':
                    row = str(rows[0])
                    row = "".join(row)
                    rowEstacion = row.replace(",", "").replace("(", "").replace(")", "")
                    estacionCount = ("<b>Hay " + rowEstacion + " " + tipoIncidencia + " en la estación " + codigoEstacion + "</b>")
                    dispatcher.utter_message(estacionCount)
                else:
                    dispatcher.utter_message("No hay incidencias " + tipoIncidencia + " en la estación " + codigoEstacion)
                    return []

                cur.execute(
                    "SELECT * from lm_fil_opercaciones_incidencias where estacion = '"
                    + codigoEstacion
                    + "' and tipo_incidencia = '"
                    + tipoIncidencia
                    + "';"
                )
                rows = cur.fetchall()
                estacion = ""
                if rows != []:
                    index = 0
                    for row in rows:
                        row = str(rows[index])
                        index += 1
                        row = "".join(row)
                        rowAvion = (
                            row.replace(",", "").replace("(", "").replace(")", "")
                        )
                        elements = rowAvion.split("'")
                        estacion = (
                            tipoIncidencia.upper()
                            + ":"
                            + "<br>Pathnumber: "
                            + elements[3]
                            + "<br>Orden: "
                            + elements[5]
                            + "<br>Operación: "
                            + elements[7]
                            + "<br>Estación: "
                            + elements[11]
                            + "<br>Descripción: "
                            + elements[17]
                        )
                        #dispatcher.utter_message(estacion)
                else:
                    dispatcher.utter_message("No hay incidencias " + tipoIncidencia + " en la estación " + codigoEstacion)
                    return []

        elif codigoAvion != None and codigoEstacion != None and tipoIncidencia != None and partnumberSlot == None:
            cur.execute("SELECT count(*) from lm_fil_opercaciones_incidencias where estacion = '"
                    + codigoEstacion
                    + "' and tipo_incidencia = '"
                    + tipoIncidencia
                    + "' and avion = '"
                    + codigoAvion
                    +"';"
                )
            rows = cur.fetchall()
            if str(rows[0]) != '(0,)':
                row = str(rows[0])
                row = "".join(row)
                rowEstacion = row.replace(",", "").replace("(", "").replace(")", "")
                estacionCount = ("<b>Hay " + rowEstacion + " incidencias " + tipoIncidencia + " del avión " + codigoAvion + " en la estación " + codigoEstacion + "</b>")
                dispatcher.utter_message(estacionCount)
            else:
                dispatcher.utter_message("No hay incidencias " + tipoIncidencia + " del avion " + codigoAvion + " en la estación " + codigoEstacion)
                return []

            cur.execute("SELECT * from lm_fil_opercaciones_incidencias where estacion = '"
                    + codigoEstacion
                    + "' and tipo_incidencia = '"
                    + tipoIncidencia
                    + "' and avion = '"
                    + codigoAvion
                    +"';"
                )
            rows = cur.fetchall()
            estacion = ""
            if rows != []:
                index = 0
                for row in rows:
                    row = str(rows[index])
                    index += 1
                    row = "".join(row)
                    rowAvion = (
                        row.replace(",", "").replace("(", "").replace(")", "")
                    )
                    elements = rowAvion.split("'")
                    estacion = (
                        elements[15].upper()
                        + ":"
                        + "<br>Pathnumber: "
                        + elements[3]
                        + "<br>Orden: "
                        + elements[5]
                        + "<br>Operación: "
                        + elements[7]
                        + "<br>Estación: "
                        + elements[11]
                        + "<br>Descripción: "
                        + elements[17]
                    )
                    #dispatcher.utter_message(estacion)
            else:
                dispatcher.utter_message("No hay incidencias " + tipoIncidencia + " del avion " + codigoAvion + " en la estación " + codigoEstacion)
                return []

        elif partnumberSlot != None:
            partnumber = partNumber(partnumberSlot)
            if partnumber != "":
                try:
                    if partnumber[0] != "":
                        cur.execute(
                            "SELECT count(*) from lm_fil_opercaciones_incidencias where partnumber = '"
                            + partnumberSlot
                            + "';"
                        )
                        rows = cur.fetchall()
                        if str(rows[0]) != '(0,)':
                            row = str(rows[0])
                            row = "".join(row)
                            rowNumber = (
                                row.replace(",", "").replace("(", "").replace(")", "")
                            )
                            numberCount = ("<b>Hay " + rowNumber + " incidencias con el número de patnumber " + partnumberSlot + "</b>")
                            dispatcher.utter_message(numberCount)
                        else:
                            dispatcher.utter_message("No hay incidencias con el número de patnumber " + partnumberSlot)
                            return []

                        cur.execute(
                            "SELECT * from lm_fil_opercaciones_incidencias where partnumber = '"
                            + partnumberSlot
                            + "';"
                        )
                        rows = cur.fetchall()
                        number = ""
                        if rows != []:
                            index = 0
                            for row in rows:
                                row = str(rows[index])
                                index += 1
                                row = "".join(row)
                                rowNumber = (
                                    row.replace(",", "").replace("(", "").replace(")", "")
                                )
                                elements = rowNumber.split("'")
                                number = (
                                    elements[15].upper()
                                    + ":"
                                    + "\nPathnumber: "
                                    + elements[3]
                                    + "\nOrden: "
                                    + elements[5]
                                    + "\nOperación: "
                                    + elements[7]
                                    + "\nEstación: "
                                    + elements[11]
                                    + "\nDescripción: "
                                    + elements[17]
                                )
                                #dispatcher.utter_message(number)
                        else:
                            dispatcher.utter_message("No hay incidencias con el número de patnumber " + partnumberSlot)
                            return []
                except Exception as e:
                    dispatcher.utter_message("No hay incidencias con el número de patnumber " + partnumberSlot)
                    return []
            else:
                dispatcher.utter_message("Introduzca un PartNumber correcto")
                return []

class ActionEstacion(Action):
    def name(self):
        # define the name of the action which can then be included in training stories
        return "action_estacion"

    def run(self, dispatcher, tracker, domain):
        avion = tracker.get_slot("avion")
        codigoAvion = tracker.get_slot("codigoAvion")
        tipoIncidencia = tracker.get_slot("tipoIncidencia")
        estacion = tracker.get_slot("estaciones")
        codigoEstacion = tracker.get_slot("codigoEstacion")
        incidencia = tracker.get_slot("incidencia")
        partnumberSlot = tracker.get_slot("partNumber")
        aOrden = tracker.get_slot("aOrden")

        cur = conexion()
        if tipoIncidencia != None:
            tipoIncidencia = tipoIncidencia.upper()
            tipoIncidencia = (
                tipoIncidencia.replace("'", "").replace(".", "").replace(" ", "")
            )
            if (
                tipoIncidencia == "HNC"
                or tipoIncidencia == "HNCS"
                or tipoIncidencia == "NOCONFORMIDADES"
                or tipoIncidencia == "NOCONFORMIDAD"
            ):
                tipoIncidencia = "HNC"
            elif (
                tipoIncidencia == "OBS"
                or tipoIncidencia == "OBSERVACIONES"
                or tipoIncidencia == "OB"
                or tipoIncidencia == "FINOBS"
                or tipoIncidencia == "FINOB"
                or tipoIncidencia == "OBSERVACION"
                or tipoIncidencia == "OB"
            ):
                tipoIncidencia = "Observaciones"
            elif tipoIncidencia == "DEMAT" or tipoIncidencia == "INCIDENCIA":
                tipoIncidencia = "Demat"

        if codigoEstacion != None:
            codigoEstacion = codigoEstacion.replace("'", "").replace('"', "").replace("/", "")

        if codigoAvion != None:
            codigoAvion = codigoAvion.replace("'", "").replace('"', "").replace("/", "")

        print(
            avion, codigoAvion, incidencia, tipoIncidencia, estacion, codigoEstacion, partnumberSlot
        )

        if re.match(r'[0-9]{1}[5]{1}$', codigoEstacion):
            codigoEstacion = "Estacion " + codigoEstacion
            if aOrden != None:
                if "falta" in aOrden:
                    cur.execute(
                        "SELECT count(*) from estado_ordenes where faltas_asociadas = 'Si' and estación = '"
                        + codigoEstacion
                        + "';"
                    )
                    rows = cur.fetchall()
                    if str(rows[0]) != '(0,)':
                        row = str(rows[0])
                        row = "".join(row)
                        rowEstacion = row.replace(",", "").replace("(", "").replace(")", "").replace("'", "")
                        if int(rowEstacion) == 1:
                            dispatcher.utter_message("<b>Hay " + rowEstacion + " operacion con falta asociada en la estación " + codigoEstacion + "</b>")
                        elif int(rowEstacion) > 1:
                            dispatcher.utter_message("<b>Hay " + rowEstacion + " operaciones con faltas asociadas en la estación " + codigoEstacion + "</b>")
                        return []
                    else:
                        dispatcher.utter_message("No hay incidencias en la estación " + codigoEstacion)
                        return []

            if tipoIncidencia == None:
                if (
                    codigoEstacion == "FAL"
                    or codigoEstacion == "fal"
                    or codigoEstacion == "Fal"
                ):
                    cur.execute(
                        "SELECT count(*) from lm_fil_opercaciones_incidencias;"
                    )
                    rows = cur.fetchall()
                    if str(rows[0]) != '(0,)':
                        row = str(rows[0])
                        row = "".join(row)
                        rowEstacion = row.replace(",", "").replace("(", "").replace(")", "")
                        estacionCount = ("<b>Hay " + rowEstacion + " incidencias con el número de estación " + codigoEstacion + "</b>")
                        dispatcher.utter_message(estacionCount)
                    else:
                        dispatcher.utter_message("No hay incidencias en la estación " + codigoEstacion)
                        return []
                    '''
                    cur.execute(
                        "SELECT * from lm_fil_opercaciones_incidencias;"
                    )
                    rows = cur.fetchall()
                    estacion = ""
                    if rows != []:
                        index = 0
                        for row in rows:
                            row = str(rows[index])
                            index += 1
                            row = "".join(row)
                            rowAvion = (
                                row.replace(",", "").replace("(", "").replace(")", "")
                            )
                            elements = rowAvion.split("'")
                            estacion = (
                                elements[15].upper()
                                + ":"
                                + "\nPathnumber: "
                                + elements[3]
                                + "\nOrden: "
                                + elements[5]
                                + "\nOperación: "
                                + elements[7]
                                + "\nEstación: "
                                + elements[11]
                                + "\nDescripción: "
                                + elements[17]
                            )
                            #dispatcher.utter_message(estacion)
                    else:
                        dispatcher.utter_message("No hay incidencias en la estación " + codigoEstacion)
                        return []
                    '''
                else:
                    cur.execute(
                        "SELECT count(*) from lm_fil_opercaciones_incidencias where estacion = '"
                        + codigoEstacion
                        + "';"
                    )
                    rows = cur.fetchall()
                    print(rows)
                    if str(rows[0]) != '(0,)':
                        row = str(rows[0])
                        row = "".join(row)
                        rowEstacion = row.replace(",", "").replace("(", "").replace(")", "")
                        estacionCount = ("<b>Existen " + rowEstacion + " incidencias en la estación " + codigoEstacion + "</b>")
                        dispatcher.utter_message(estacionCount)
                    else:
                        dispatcher.utter_message("No hay incidencias en la estación " + codigoEstacion)
                        return []

                    cur.execute(
                        "SELECT id_unico, partnumber, orden, operacion, avion, estacion, id_gnt, descripcion_gnt, tipo_incidencia, descripcion_incidencia from lm_fil_opercaciones_incidencias where estacion = '"
                        + codigoEstacion
                        + "';"
                    )
                    rows = cur.fetchall()
                    estacion = ""
                    if rows != []:
                        index = 0
                        for row in rows:
                            row = str(rows[index])
                            index += 1
                            row = "".join(row)
                            rowAvion = (
                                row.replace("'", "").replace("(", "").replace(")", "")
                            )
                            elements = rowAvion.split(",")
                            estacion = (
                                elements[8].upper()
                                + ":"
                                + "<br>Pathnumber: "
                                + elements[1]
                                + "<br>Orden: "
                                + elements[2]
                                + "<br>Operación: "
                                + elements[3]
                                + "<br>Estación: "
                                + elements[5]
                                + "<br>Descripción: "
                                + elements[9]
                            )
                            #dispatcher.utter_message(estacion)
                    else:
                        dispatcher.utter_message("No hay incidencias en la estación " + codigoEstacion)
                        return []

            elif avion == None and codigoEstacion != None and tipoIncidencia != None:
                if (
                    codigoEstacion == "FAL"
                    or codigoEstacion == "fal"
                    or codigoEstacion == "Fal"
                ):
                    cur.execute(
                        "SELECT count(*) from lm_fil_opercaciones_incidencias where tipo_incidencia = '"
                        + tipoIncidencia
                        + "';"
                    )
                    rows = cur.fetchall()
                    if str(rows[0]) != '(0,)':
                        row = str(rows[0])
                        row = "".join(row)
                        rowEstacion = row.replace(",", "").replace("(", "").replace(")", "")
                        estacionCount = ("<b>Hay " + rowEstacion + " " + tipoIncidencia + " con el número de estación " + codigoEstacion + "</b>")
                        dispatcher.utter_message(estacionCount)
                    else:
                        dispatcher.utter_message("No hay incidencias " + tipoIncidencia + " en la estación " + codigoEstacion)
                        return []

                    cur.execute(
                        "SELECT * from lm_fil_opercaciones_incidencias where tipo_incidencia = '"
                        + tipoIncidencia
                        + "';"
                    )
                    rows = cur.fetchall()
                    estacion = ""
                    if rows != []:
                        index = 0
                        for row in rows:
                            row = str(rows[index])
                            index += 1
                            row = "".join(row)
                            rowAvion = (
                                row.replace(",", "").replace("(", "").replace(")", "")
                            )
                            elements = rowAvion.split("'")
                            estacion = (
                                elements[15].upper()
                                + ":"
                                + "\nPathnumber: "
                                + elements[3]
                                + "\nOrden: "
                                + elements[5]
                                + "\nOperación: "
                                + elements[7]
                                + "\nEstación: "
                                + elements[11]
                                + "\nDescripción: "
                                + elements[17]
                            )
                            #dispatcher.utter_message(estacion)
                    else:
                        dispatcher.utter_message("No hay incidencias " + tipoIncidencia + " en la estación " + codigoEstacion)
                        return []

                else:
                    cur.execute(
                        "SELECT count(*) from lm_fil_opercaciones_incidencias where estacion = '"
                        + codigoEstacion
                        + "' and tipo_incidencia = '"
                        + tipoIncidencia
                        + "';"
                    )
                    rows = cur.fetchall()
                    if str(rows[0]) != '(0,)':
                        row = str(rows[0])
                        row = "".join(row)
                        rowEstacion = row.replace(",", "").replace("(", "").replace(")", "")
                        estacionCount = ("<b>Hay " + rowEstacion + " " + tipoIncidencia + " en la estación " + codigoEstacion + "</b>")
                        dispatcher.utter_message(estacionCount)
                    else:
                        dispatcher.utter_message("No hay incidencias " + tipoIncidencia + " en la estación " + codigoEstacion)
                        return []

                    cur.execute(
                        "SELECT id_unico, partnumber, orden, operacion, avion, estacion, id_gnt, descripcion_gnt, tipo_incidencia, descripcion_incidencia from lm_fil_opercaciones_incidencias where estacion = '"
                        + codigoEstacion
                        + "' and tipo_incidencia = '"
                        + tipoIncidencia
                        + "';"
                    )
                    rows = cur.fetchall()
                    estacion = ""
                    if rows != []:
                        index = 0
                        for row in rows:
                            row = str(rows[index])
                            index += 1
                            row = "".join(row)
                            rowAvion = (
                                row.replace("'", "").replace("(", "").replace(")", "")
                            )
                            elements = rowAvion.split(",")
                            estacion = (
                                tipoIncidencia.upper()
                                + ":"
                                + "<br>Pathnumber: "
                                + elements[1]
                                + "<br>Orden: "
                                + elements[2]
                                + "<br>Operación: "
                                + elements[3]
                                + "<br>Estación: "
                                + elements[5]
                                + "<br>Descripción: "
                                + elements[9]
                            )
                            #dispatcher.utter_message(estacion)
                    else:
                        dispatcher.utter_message("No hay incidencias " + tipoIncidencia + " en la estación " + codigoEstacion)
                        return []

class ActionApertura(Action):
    def name(self):
        # define the name of the action which can then be included in training stories
        return "action_apertura"

    def run(self, dispatcher, tracker, domain):
        incidencia = ""
        tipoIncidencia = tracker.get_slot("tipoIncidencia")
        codigoIncidencia = tracker.get_slot("codigoIncidencia")
        abrir = tracker.get_slot("abrir")

        cerrar = None

        cur = conexion()
        if tipoIncidencia != None:
            tipoIncidencia = tipoIncidencia.upper()
            tipoIncidencia = (
                tipoIncidencia.replace("'", "").replace(".", "").replace(" ", "")
            )
            if (
                tipoIncidencia == "HNC"
                or tipoIncidencia == "HNCS"
                or tipoIncidencia == "NOCONFORMIDADES"
                or tipoIncidencia == "NOCONFORMIDAD"
            ):
                tipoIncidencia = "HNC"
            elif (
                tipoIncidencia == "OBS"
                or tipoIncidencia == "OBSERVACIONES"
                or tipoIncidencia == "OB"
                or tipoIncidencia == "FINOBS"
                or tipoIncidencia == "FINOB"
                or tipoIncidencia == "OBSERVACION"
                or tipoIncidencia == "OB"
            ):
                tipoIncidencia = "Observaciones"
            elif tipoIncidencia == "DEMAT" or tipoIncidencia == "INCIDENCIA":
                tipoIncidencia = "Demat"
        '''
        elif tipoIncidencia == None:
            incidencia = "No existe ese tipo de incidencia"
            dispatcher.utter_message(incidencia)
            return []
        '''
        if codigoIncidencia == None:
            incidencia = "Introduzca numero de inicidencia en la consulta"
            dispatcher.utter_message(incidencia)
            return []
        else:
            codigoIncidencia = (
                codigoIncidencia.replace("'", "").replace('"', "").replace("/", "")
            )

        print(tipoIncidencia, codigoIncidencia, abrir, cerrar)

        if int(codigoIncidencia) >= 1000000000 and int(codigoIncidencia) <= 3000000000:
            #if tipoIncidencia == "hnc":
                if abrir != None:
                    cur.execute(
                        "SELECT aviso, creado_el, creado_por, usuario_realiza_toma_disposici, fecha_toma_disposición from zqm_hnc_2018 where aviso = '"
                        + codigoIncidencia
                        + "';"
                    )
                    rows = cur.fetchall()
                    incidencia = ""
                    if rows != []:
                        index = 0
                        for row in rows:
                            row = str(rows[index])
                            index += 1
                            row = "".join(row)
                            rowIncidencia = (
                                row.replace(",", "").replace("(", "").replace(")", "")
                            )
                            elements = rowIncidencia.split("'")
                            incidencia = (
                                "HNC: "
                                + elements[1]
                                + "<br>Abierta por: "
                                + elements[5]
                                + " el "
                                + elements[3]
                            )
                            dispatcher.utter_message(incidencia)
                    else:
                        incidencia = "La HNC " + codigoIncidencia + " no existe."
                        dispatcher.utter_message(incidencia)

                    return []

                elif cerrar != None:
                    cur.execute(
                        "SELECT aviso, creado_el, creado_por, usuario_realiza_toma_disposici, fecha_toma_disposición from zqm_hnc_2018 where aviso = '"
                        + codigoIncidencia
                        + "';"
                    )
                    rows = cur.fetchall()
                    incidencia = ""
                    if rows != []:
                        index = 0
                        for row in rows:
                            row = str(rows[index])
                            index += 1
                            row = "".join(row)
                            rowIncidencia = (
                                row.replace(",", "").replace("(", "").replace(")", "")
                            )
                            elements = rowIncidencia.split("'")
                            incidencia = (
                                "HNC: "
                                + elements[1]
                                + "<br>Cerrado por: "
                                + elements[7]
                                + " el "
                                + elements[9]
                            )
                            dispatcher.utter_message(incidencia)
                    else:
                        incidencia = "La HNC " + codigoIncidencia + " no existe."
                        dispatcher.utter_message(incidencia)

                    return []

                else:
                    cur.execute(
                        "SELECT aviso, creado_el, creado_por, usuario_realiza_toma_disposici, fecha_toma_disposición from zqm_hnc_2018 where aviso = '"
                        + codigoIncidencia
                        + "';"
                    )
                    rows = cur.fetchall()
                    incidencia = ""
                    if rows != []:
                        index = 0
                        for row in rows:
                            row = str(rows[index])
                            index += 1
                            row = "".join(row)
                            rowIncidencia = (
                                row.replace(",", "").replace("(", "").replace(")", "")
                            )
                            elements = rowIncidencia.split("'")
                            incidencia = (
                                "HNC: "
                                + elements[1]
                                + "<br>Abierta por: "
                                + elements[5]
                                + " el "
                                + elements[3]
                                + "<br>Cerrado por: "
                                + elements[7]
                                + " el "
                                + elements[9]
                            )
                            dispatcher.utter_message(incidencia)
                    else:
                        incidencia = "La HNC " + codigoIncidencia + " no existe."
                        dispatcher.utter_message(incidencia)

                    return []

        elif (
            int(codigoIncidencia) >= 4000000000 and int(codigoIncidencia) <= 5000000000
        ):
            #if tipoIncidencia == "obs":
                if abrir != None:
                    cur.execute(
                        "SELECT número_aviso, usuario_apertura, fecha_apertura, fecha_cierre, cierre_producción from zqm_ob_2018 where número_aviso = '"
                        + codigoIncidencia
                        + "';"
                    )
                    rows = cur.fetchall()
                    incidencia = ""
                    if rows != []:
                        index = 0
                        for row in rows:
                            row = str(rows[index])
                            index += 1
                            row = "".join(row)
                            rowIncidencia = (
                                row.replace(",", "").replace("(", "").replace(")", "")
                            )
                            elements = rowIncidencia.split("'")
                            incidencia = (
                                "OBS: "
                                + elements[1]
                                + "<br>Abierta por: "
                                + elements[3]
                                + " el "
                                + elements[5]
                            )
                            dispatcher.utter_message(incidencia)
                    else:
                        incidencia = "La OBS " + codigoIncidencia + " no existe."
                        dispatcher.utter_message(incidencia)

                    return []

                elif cerrar != None:
                    cur.execute(
                        "SELECT número_aviso, usuario_apertura, fecha_apertura, fecha_cierre, cierre_producción from zqm_ob_2018 where número_aviso = '"
                        + codigoIncidencia
                        + "';"
                    )
                    rows = cur.fetchall()
                    incidencia = ""
                    if rows != []:
                        index = 0
                        for row in rows:
                            row = str(rows[index])
                            index += 1
                            row = "".join(row)
                            rowIncidencia = (
                                row.replace(",", "").replace("(", "").replace(")", "")
                            )
                            elements = rowIncidencia.split("'")
                            incidencia = (
                                "OBS: "
                                + elements[1]
                                + "<br>Cerrada por: "
                                + elements[9]
                                + " el "
                                + elements[7]
                            )
                            dispatcher.utter_message(incidencia)
                    else:
                        incidencia = "La OBS " + codigoIncidencia + " no existe."
                        dispatcher.utter_message(incidencia)

                    return []

                else:
                    cur.execute(
                        "SELECT número_aviso, usuario_apertura, fecha_apertura, fecha_cierre, cierre_producción, usuario_realiza_toma_disposici_ from zqm_ob_2018 where número_aviso = '"
                        + codigoIncidencia
                        + "';"
                    )
                    rows = cur.fetchall()
                    incidencia = ""
                    if rows != []:
                        index = 0
                        for row in rows:
                            row = str(rows[index])
                            index += 1
                            row = "".join(row)
                            rowIncidencia = (
                                row.replace(",", "").replace("(", "").replace(")", "")
                            )
                            elements = rowIncidencia.split("'")
                            incidencia = (
                                "OBS: "
                                + elements[1]
                                + "<br>Abierta por: "
                                + elements[3]
                                + " el "
                                + elements[5]
                                + "Cerrada por: "
                                + elements[9]
                                + " el "
                                + elements[7]
                                + "<br>Responsable: "
                                + elements[11]
                            )
                            dispatcher.utter_message(incidencia)
                    else:
                        incidencia = "La OBS " + codigoIncidencia + " no existe."
                        dispatcher.utter_message(incidencia)

                    return []

        elif codigoIncidencia != None and int(codigoIncidencia) < 999999:
            if abrir != None:
                cur.execute(
                    "SELECT id, resp, created_str, modified_str, act_realstartdate_str, act_realenddate_str from demat where id = '"
                    + codigoIncidencia
                    + "';"
                )
                # created_by
                rows = cur.fetchall()
                incidencia = ""
                if rows != []:
                    index = 0
                    for row in rows:
                        row = str(rows[index])
                        index += 1
                        row = "".join(row)
                        rowIncidencia = (
                            row.replace(",", "").replace("(", "").replace(")", "")
                        )
                        elements = rowIncidencia.split("'")
                        for i in elements:
                            print("----"+i)
                        incidencia = (
                            "DEMAT: "
                            + elements[1]
                            + "<br>Abierta por: "
                            + elements[3]
                            + " el "
                            + elements[5]
                        )
                        dispatcher.utter_message(incidencia)
                else:
                    incidencia = "La Demat " + codigoIncidencia + " no existe."
                    dispatcher.utter_message(incidencia)

                return []

            elif cerrar != None:
                cur.execute(
                    "SELECT id, resp, created_str, modified_str, act_realstartdate_str, act_realenddate_str from demat where id = '"
                    + codigoIncidencia
                    + "';"
                )
                rows = cur.fetchall()
                incidencia = ""
                if rows != []:
                    index = 0
                    for row in rows:
                        row = str(rows[index])
                        index += 1
                        row = "".join(row)
                        rowIncidencia = (
                            row.replace(",", "").replace("(", "").replace(")", "")
                        )
                        elements = rowIncidencia.split("'")
                        incidencia = (
                            "DEMAT: "
                            + elements[1]
                            + "<br>Cerrada por: "
                            + elements[9]
                            + " el "
                            + elements[11]
                        )
                        dispatcher.utter_message(incidencia)
                else:
                    incidencia = "La Demat " + codigoIncidencia + " no existe."
                    dispatcher.utter_message(incidencia)

                return []

            else:
                cur.execute(
                    "SELECT id, resp, created_str, modified_str, act_realstartdate_str, act_realenddate_str from demat where id = '"
                    + codigoIncidencia
                    + "';"
                )
                rows = cur.fetchall()
                incidencia = ""
                if rows != []:
                    index = 0
                    for row in rows:
                        row = str(rows[index])
                        index += 1
                        row = "".join(row)
                        rowIncidencia = (
                            row.replace(",", "").replace("(", "").replace(")", "")
                        )
                        elements = rowIncidencia.split("'")
                        incidencia += (
                            "DEMAT: "
                            + elements[1]
                            + "<br>Abierta por: "
                            + elements[3]
                            + " el "
                            + elements[5]
                            + "<br>Cerrada por: "
                            + elements[9]
                            + " el "
                            + elements[11]
                            + "<br>Responsable: "
                            + elements[7]
                        )
                        dispatcher.utter_message(incidencia)
                else:
                    incidencia = "La Demat " + codigoIncidencia + " no existe."
                    dispatcher.utter_message(incidencia)

                return []

        else:
            incidencia = "La incidencia con numero " + codigoIncidencia + " no existe."

        dispatcher.utter_message(incidencia)

        return []

class ActionAperturaOperacion(Action):
    def name(self):
        # define the name of the action which can then be included in training stories
        return "action_apertura_operacion"

    def run(self, dispatcher, tracker, domain):
        incidencia = ""
        abrir = tracker.get_slot("abrir")
        operacion = tracker.get_slot("operacion")
        codigoOperacion = tracker.get_slot("codigoOperacion")

        cur = conexion()

        if re.match(r'[1,7,8]{1}[0-9]{6}$', codigoOperacion):
            codigoOrden = codigoOperacion
        else:
            dispatcher.utter_message("La operación no existe. Por favor introduzca un número de operación correcto")
            return []

        cur.execute(
            "SELECT inicio_real, nombres from estado_ordenes where orden = '"
            + codigoOrden
            + "';"
        )
        rows = cur.fetchall()
        if rows != []:
            index = 0
            for row in rows:
                row = str(rows[index])
                index += 1
                row = "".join(row)
                row = (
                    row.replace(",", "").replace("(", "").replace(")", "")
                )
                elements = row.split("'")
                dispatcher.utter_message(
                    "Operación: "
                    + codigoOrden
                    + "<br>Abierta por: "
                    + elements[3]
                    + " el "
                    + elements[1]
                )
        else:
            dispatcher.utter_message("La operacion " + codigoOrden + " no existe.")

        return []

class ActionCierre(Action):
    def name(self):
        # define the name of the action which can then be included in training stories
        return "action_cierre"

    def run(self, dispatcher, tracker, domain):
        incidencia = ""
        tipoIncidencia = tracker.get_slot("tipoIncidencia")
        codigoIncidencia = tracker.get_slot("codigoIncidencia")
        cerrar = tracker.get_slot("cerrar")
        abrir = None

        cur = conexion()
        if tipoIncidencia != None:
            tipoIncidencia = tipoIncidencia.upper()
            tipoIncidencia = (
                tipoIncidencia.replace("'", "").replace(".", "").replace(" ", "")
            )
            if (
                tipoIncidencia == "HNC"
                or tipoIncidencia == "HNCS"
                or tipoIncidencia == "NOCONFORMIDADES"
                or tipoIncidencia == "NOCONFORMIDAD"
            ):
                tipoIncidencia = "HNC"
            elif (
                tipoIncidencia == "OBS"
                or tipoIncidencia == "OBSERVACIONES"
                or tipoIncidencia == "OB"
                or tipoIncidencia == "FINOBS"
                or tipoIncidencia == "FINOB"
                or tipoIncidencia == "OBSERVACION"
                or tipoIncidencia == "OB"
            ):
                tipoIncidencia = "Observaciones"
            elif tipoIncidencia == "DEMAT" or tipoIncidencia == "INCIDENCIA":
                tipoIncidencia = "Demat"
        '''
        elif tipoIncidencia == None:
            incidencia = "No existe ese tipo de incidencia"
            dispatcher.utter_message(incidencia)
            return []
        '''
        if codigoIncidencia == None:
            incidencia = "Introduzca numero de inicidencia en la consulta"
            dispatcher.utter_message(incidencia)
            return []
        else:
            codigoIncidencia = (
                codigoIncidencia.replace("'", "").replace('"', "").replace("/", "")
            )

        if int(codigoIncidencia) >= 1000000000 and int(codigoIncidencia) <= 3000000000:
            #if tipoIncidencia == "hnc":
                if abrir != None:
                    cur.execute(
                        "SELECT aviso, creado_el, creado_por, usuario_realiza_toma_disposici, fecha_toma_disposición from zqm_hnc_2018 where aviso = '"
                        + codigoIncidencia
                        + "';"
                    )
                    rows = cur.fetchall()
                    incidencia = ""
                    if rows != []:
                        index = 0
                        for row in rows:
                            row = str(rows[index])
                            index += 1
                            row = "".join(row)
                            rowIncidencia = (
                                row.replace(",", "").replace("(", "").replace(")", "")
                            )
                            elements = rowIncidencia.split("'")
                            incidencia = (
                                "HNC: "
                                + elements[1]
                                + "<br>Abierta por: "
                                + elements[5]
                                + " el "
                                + elements[3]
                            )
                            dispatcher.utter_message(incidencia)
                    else:
                        incidencia = "La HNC " + codigoIncidencia + " no existe."
                        dispatcher.utter_message(incidencia)

                    return []

                elif cerrar != None:
                    cur.execute(
                        "SELECT aviso, creado_el, creado_por, usuario_realiza_toma_disposici, fecha_toma_disposición from zqm_hnc_2018 where aviso = '"
                        + codigoIncidencia
                        + "';"
                    )
                    rows = cur.fetchall()
                    incidencia = ""
                    if rows != []:
                        index = 0
                        for row in rows:
                            row = str(rows[index])
                            index += 1
                            row = "".join(row)
                            rowIncidencia = (
                                row.replace(",", "").replace("(", "").replace(")", "")
                            )
                            elements = rowIncidencia.split("'")
                            incidencia = (
                                "HNC: "
                                + elements[1]
                                + "<br>Cerrado por: "
                                + elements[7]
                                + " el "
                                + elements[9]
                            )
                            dispatcher.utter_message(incidencia)
                    else:
                        incidencia = "La HNC " + codigoIncidencia + " no existe."
                        dispatcher.utter_message(incidencia)

                    return []

                else:
                    cur.execute(
                        "SELECT aviso, creado_el, creado_por, usuario_realiza_toma_disposici, fecha_toma_disposición from zqm_hnc_2018 where aviso = '"
                        + codigoIncidencia
                        + "';"
                    )
                    rows = cur.fetchall()
                    incidencia = ""
                    if rows != []:
                        index = 0
                        for row in rows:
                            row = str(rows[index])
                            index += 1
                            row = "".join(row)
                            rowIncidencia = (
                                row.replace(",", "").replace("(", "").replace(")", "")
                            )
                            elements = rowIncidencia.split("'")
                            incidencia = (
                                "HNC: "
                                + elements[1]
                                + "<br>Abierta por: "
                                + elements[5]
                                + " el "
                                + elements[3]
                                + "<br>Cerrado por: "
                                + elements[7]
                                + " el "
                                + elements[9]
                            )
                            dispatcher.utter_message(incidencia)
                    else:
                        incidencia = "La HNC " + codigoIncidencia + " no existe."
                        dispatcher.utter_message(incidencia)

                    return []

        elif (
            int(codigoIncidencia) >= 4000000000 and int(codigoIncidencia) <= 5000000000
        ):
            #if tipoIncidencia == "obs":
                if abrir != None:
                    cur.execute(
                        "SELECT número_aviso, usuario_apertura, fecha_apertura, fecha_cierre, cierre_producción from zqm_ob_2018 where número_aviso = '"
                        + codigoIncidencia
                        + "';"
                    )
                    rows = cur.fetchall()
                    incidencia = ""
                    if rows != []:
                        index = 0
                        for row in rows:
                            row = str(rows[index])
                            index += 1
                            row = "".join(row)
                            rowIncidencia = (
                                row.replace(",", "").replace("(", "").replace(")", "")
                            )
                            elements = rowIncidencia.split("'")
                            incidencia = (
                                "OBS: "
                                + elements[1]
                                + "<br>Abierta por: "
                                + elements[3]
                                + " el "
                                + elements[5]
                            )
                            dispatcher.utter_message(incidencia)
                    else:
                        incidencia = "La OBS " + codigoIncidencia + " no existe."
                        dispatcher.utter_message(incidencia)

                    return []

                elif cerrar != None:
                    cur.execute(
                        "SELECT número_aviso, usuario_apertura, fecha_apertura, fecha_cierre, cierre_producción from zqm_ob_2018 where número_aviso = '"
                        + codigoIncidencia
                        + "';"
                    )
                    rows = cur.fetchall()
                    incidencia = ""
                    if rows != []:
                        index = 0
                        for row in rows:
                            row = str(rows[index])
                            index += 1
                            row = "".join(row)
                            rowIncidencia = (
                                row.replace(",", "").replace("(", "").replace(")", "")
                            )
                            elements = rowIncidencia.split("'")
                            incidencia = (
                                "OBS: "
                                + elements[1]
                                + "<br>Cerrada por: "
                                + elements[9]
                                + " el "
                                + elements[7]
                            )
                            dispatcher.utter_message(incidencia)
                    else:
                        incidencia = "La OBS " + codigoIncidencia + " no existe."
                        dispatcher.utter_message(incidencia)

                    return []

                else:
                    cur.execute(
                        "SELECT número_aviso, usuario_apertura, fecha_apertura, fecha_cierre, cierre_producción from zqm_ob_2018 where número_aviso = '"
                        + codigoIncidencia
                        + "';"
                    )
                    rows = cur.fetchall()
                    incidencia = ""
                    if rows != []:
                        index = 0
                        for row in rows:
                            row = str(rows[index])
                            index += 1
                            row = "".join(row)
                            rowIncidencia = (
                                row.replace(",", "").replace("(", "").replace(")", "")
                            )
                            elements = rowIncidencia.split("'")
                            incidencia = (
                                "OBS: "
                                + elements[1]
                                + "<br>Cerrada por: "
                                + elements[9]
                                + " el "
                                + elements[7]
                            )
                            dispatcher.utter_message(incidencia)
                    else:
                        incidencia = "La OBS " + codigoIncidencia + " no existe."
                        dispatcher.utter_message(incidencia)

                    return []

        elif codigoIncidencia != None and int(codigoIncidencia) < 111111111:
            if abrir != None:
                cur.execute(
                    "SELECT id, resp, created_by, modified_str, act_realstartdate_str, act_realenddate_str from demat where id = '"
                    + codigoIncidencia
                    + "';"
                )
                rows = cur.fetchall()
                incidencia = ""
                if rows != []:
                    index = 0
                    for row in rows:
                        row = str(rows[index])
                        index += 1
                        row = "".join(row)
                        rowIncidencia = (
                            row.replace(",", "").replace("(", "").replace(")", "")
                        )
                        elements = rowIncidencia.split("'")
                        incidencia = (
                            "DEMAT: "
                            + elements[1]
                            + "<br>Abierta por: "
                            + elements[3]
                            + " el "
                            + elements[5]
                        )
                        dispatcher.utter_message(incidencia)
                else:
                    incidencia = "La Demat " + codigoIncidencia + " no existe."
                    dispatcher.utter_message(incidencia)

                return []

            elif cerrar != None:
                cur.execute(
                    "SELECT id, resp, created_str, modified_str, act_realstartdate_str, act_realenddate_str from demat where id = '"
                    + codigoIncidencia
                    + "';"
                )
                rows = cur.fetchall()
                incidencia = ""
                if rows != []:
                    index = 0
                    for row in rows:
                        row = str(rows[index])
                        index += 1
                        row = "".join(row)
                        rowIncidencia = (
                            row.replace(",", "").replace("(", "").replace(")", "")
                        )
                        print(rowIncidencia)
                        elements = rowIncidencia.split("'")
                        for x in elements:
                            print(x)
                        incidencia = (
                            "DEMAT: "
                            + elements[1]
                            + "<br>Cerrada por: "
                            + elements[9]
                            + " el "
                            + elements[11]
                        )
                        dispatcher.utter_message(incidencia)
                else:
                    incidencia = "La Demat " + codigoIncidencia + " no existe."
                    dispatcher.utter_message(incidencia)

                return []

            else:
                cur.execute(
                    "SELECT id, resp, created_str, modified_str, act_realstartdate_str, act_realenddate_str from demat where id = '"
                    + codigoIncidencia
                    + "';"
                )
                rows = cur.fetchall()
                incidencia = ""
                if rows != []:
                    index = 0
                    for row in rows:
                        row = str(rows[index])
                        index += 1
                        row = "".join(row)
                        rowIncidencia = (
                            row.replace(",", "").replace("(", "").replace(")", "")
                        )
                        elements = rowIncidencia.split("'")
                        incidencia += (
                            "DEMAT: "
                            + elements[1]
                            + "<br>Abierta por: "
                            + elements[3]
                            + " el "
                            + elements[5]
                            + "<br>Cerrada por: "
                            + elements[9]
                            + " el "
                            + elements[11]
                            + "<br>Responsable: "
                            + elements[7]
                        )
                        dispatcher.utter_message(incidencia)
                else:
                    incidencia = "La Demat " + codigoIncidencia + " no existe."
                    dispatcher.utter_message(incidencia)

                return []

        else:
            incidencia = "La incidencia con numero " + codigoIncidencia + " no existe."

        dispatcher.utter_message(incidencia)

        return []

class ActionCierreOperacion(Action):
    def name(self):
        # define the name of the action which can then be included in training stories
        return "action_cierre_operacion"

    def run(self, dispatcher, tracker, domain):
        incidencia = ""
        cerrar = tracker.get_slot("cerrar")
        operacion = tracker.get_slot("operacion")
        codigoOperacion = tracker.get_slot("codigoOperacion")

        cur = conexion()

        if re.match(r'[1,7,8]{1}[0-9]{6}$', codigoOperacion):
            codigoOrden = codigoOperacion
        else:
            dispatcher.utter_message("La operación no existe. Por favor introduzca un número de operación correcto")
            return []

        cur.execute(
            "SELECT fin_real_notificado, nombres from estado_ordenes where orden = '"
            + codigoOrden
            + "';"
        )
        rows = cur.fetchall()
        if rows != []:
            index = 0
            for row in rows:
                row = str(rows[index])
                index += 1
                row = "".join(row)
                row = (
                    row.replace(",", "").replace("(", "").replace(")", "")
                )
                elements = row.split("'")
                dispatcher.utter_message(
                    "Operación: "
                    + codigoOrden
                    + "<br>Cerrada por: "
                    + elements[3]
                    + " el "
                    + elements[1]
                )
        else:
            dispatcher.utter_message("La operacion " + codigoOrden + " no existe.")

        return []


class ActionResponsable(Action):
    def name(self):
        # define the name of the action which can then be included in training stories
        return "action_responsable"

    def run(self, dispatcher, tracker, domain):
        incidencia = tracker.get_slot("incidencia")
        tipoIncidencia = tracker.get_slot("tipoIncidencia")
        codigoIncidencia = tracker.get_slot("codigoIncidencia")
        responsable = tracker.get_slot("responsable")
        operacion = tracker.get_slot("operacion")
        codigoOperacion = tracker.get_slot("codigoOperacion")

        cur = conexion()
        
        if codigoOperacion != None:
            if re.match(r'[1,7,8]{1}[0-9]{6}$', codigoOperacion):
                codigoOrden = codigoOperacion
            else:
                dispatcher.utter_message("La operación no existe. Por favor introduzca un número de operación correcto")
                return []

            cur = conexion()

            cur.execute(
                "SELECT inicio_real, fin_real_notificado, nombres from estado_ordenes where orden = '"
                + codigoOrden
                + "';"
            )
            rows = cur.fetchall()
            if rows != []:
                index = 0
                for row in rows:
                    row = str(rows[index])
                    index += 1
                    row = "".join(row)
                    row = (
                        row.replace(",", "").replace("(", "").replace(")", "")
                    )
                    elements = row.split("'")
                    dispatcher.utter_message(
                        "Operación: " + codigoOrden 
                        + "<br>Responsable: " + elements[5]
                        + "<br>Creada por: " + elements[5] + " el " + elements[1]
                        + "<br>Cerrada por: " + elements[5] + " el " + elements[3]
                    )
            else:
                dispatcher.utter_message("La operacion " + codigoOrden + " no existe.")
            
            return []

        if tipoIncidencia != None:
            tipoIncidencia = tipoIncidencia.upper()
            tipoIncidencia = (
                tipoIncidencia.replace("'", "").replace(".", "").replace(" ", "")
            )
            if (
                tipoIncidencia == "HNC"
                or tipoIncidencia == "HNCS"
                or tipoIncidencia == "NOCONFORMIDADES"
                or tipoIncidencia == "NOCONFORMIDAD"
            ):
                tipoIncidencia = "HNC"
            elif (
                tipoIncidencia == "OBS"
                or tipoIncidencia == "OBSERVACIONES"
                or tipoIncidencia == "OB"
                or tipoIncidencia == "FINOBS"
                or tipoIncidencia == "FINOB"
                or tipoIncidencia == "OBSERVACION"
                or tipoIncidencia == "OB"
            ):
                tipoIncidencia = "Observaciones"
            elif tipoIncidencia == "DEMAT" or tipoIncidencia == "INCIDENCIA":
                tipoIncidencia = "Demat"
        '''
        elif tipoIncidencia == None:
            incidencia = "No existe ese tipo de incidencia"
            dispatcher.utter_message(incidencia)
            return []
        '''
        if codigoIncidencia == None:
            incidencia = "Introduzca numero de inicidencia en la consulta"
            dispatcher.utter_message(incidencia)
            return []
        else:
            codigoIncidencia = (
                codigoIncidencia.replace("'", "").replace('"', "").replace("/", "")
            )

        if int(codigoIncidencia) >= 1000000000 and int(codigoIncidencia) <= 3000000000:
            cur.execute(
                "SELECT aviso, creado_el, creado_por, usuario_realiza_toma_disposici, fecha_toma_disposición, usuario_realiza_toma_disposici_ from zqm_hnc_2018 where aviso = '"
                + codigoIncidencia
                + "';"
            )
            rows = cur.fetchall()
            incidencia = ""
            if rows != []:
                index = 0
                for row in rows:
                    row = str(rows[index])
                    index += 1
                    row = "".join(row)
                    rowIncidencia = (
                        row.replace(",", "").replace("(", "").replace(")", "")
                    )
                    elements = rowIncidencia.split("'")
                    incidencia += (
                        "HNC: " + elements[1] 
                        + "<br>Responsable: " + elements[11]
                        + "<br>Creada por: " + elements[5] + " el " + elements[3]
                        + "<br>Cerrada por: " + elements[7] + " el " + elements[9]
                    )
                    dispatcher.utter_message(incidencia)
            else:
                incidencia = "La HNC " + codigoIncidencia + " no existe."                    
                dispatcher.utter_message(incidencia)
            return []

        elif int(codigoIncidencia) >= 4000000000 and int(codigoIncidencia) <= 5000000000:
            cur.execute(
                "SELECT número_aviso, usuario_apertura, fecha_apertura, fecha_cierre, cierre_producción from zqm_ob_2018 where número_aviso = '"
                + codigoIncidencia
                + "';"
            )
            rows = cur.fetchall()
            incidencia = ""
            if rows != []:
                index = 0
                for row in rows:
                    row = str(rows[index])
                    index += 1
                    row = "".join(row)
                    rowIncidencia = (
                        row.replace(",", "").replace("(", "").replace(")", "")
                    )
                    elements = rowIncidencia.split("'")
                    incidencia = (
                        "OBS: " + elements[1] 
                        + "<br>Responsable: " + elements[3]
                        + "<br>Creada por: " + elements[3] + " el " + elements[5]
                        + "<br>Cerrada por: " + elements[9] + " el " + elements[7]
                    )
                    dispatcher.utter_message(incidencia)
            else:
                incidencia = "La OBS " + codigoIncidencia + " no existe."
                dispatcher.utter_message(incidencia)
            return []

        else:
            cur.execute(
                "SELECT id, resp, created_str, modified_str, act_realstartdate_str, act_realenddate_str from demat where id = '"
                + codigoIncidencia
                + "';"
            )
            rows = cur.fetchall()
            incidencia = ""
            if rows != []:
                index = 0
                for row in rows:
                    row = str(rows[index])
                    index += 1
                    row = "".join(row)
                    rowIncidencia = (
                        row.replace(",", "").replace("(", "").replace(")", "")
                    )
                    elements = rowIncidencia.split("'")
                    incidencia = (
                        "DEMAT: " + elements[1] 
                        + "<br>Responsable: " + elements[3]
                        + "<br>Creada por: " + elements[9] + " el " + elements[5]
                        + "<br>Cerrada por: " + elements[7] + " el " + elements[11]
                    )
                    dispatcher.utter_message(incidencia)
            else:
                incidencia = "La Demat " + codigoIncidencia + " no existe."
                dispatcher.utter_message(incidencia)
            return []
        
        dispatcher.utter_message(incidencia)

        return [] 

class ActionResponsableOperacion(Action):
    def name(self):
        # define the name of the action which can then be included in training stories
        return "action_responsable_operacion"

    def run(self, dispatcher, tracker, domain):
        responsable = tracker.get_slot("responsable")
        operacion = tracker.get_slot("operacion")
        codigoOperacion = tracker.get_slot("codigoOperacion")

        if re.match(r'[1,7,8]{1}[0-9]{6}$', codigoOperacion):
            codigoOrden = codigoOperacion
        else:
            dispatcher.utter_message("La operación no existe. Por favor introduzca un número de operación correcto")
            return []

        cur = conexion()

        cur.execute(
            "SELECT inicio_real, fin_real_notificado, nombres from estado_ordenes where orden = '"
            + codigoOrden
            + "';"
        )
        rows = cur.fetchall()
        if rows != []:
            index = 0
            for row in rows:
                row = str(rows[index])
                index += 1
                row = "".join(row)
                row = (
                    row.replace(",", "").replace("(", "").replace(")", "")
                )
                elements = row.split("'")
                dispatcher.utter_message(
                    "Operación: " + codigoOrden 
                    + "<br>Responsable: " + elements[5]
                    + "<br>Creada por: " + elements[5] + " el " + elements[1]
                    + "<br>Cerrada por: " + elements[5] + " el " + elements[3]
                )
        else:
            dispatcher.utter_message("La operacion " + codigoOrden + " no existe.")
        
        return []


class ActionEstado(Action):
    def name(self):
        # define the name of the action which can then be included in training stories
        return "action_estado"

    def run(self, dispatcher, tracker, domain):
        incidencia = tracker.get_slot("incidencia")
        tipoIncidencia = tracker.get_slot("tipoIncidencia")
        codigoIncidencia = tracker.get_slot("codigoIncidencia")
        estado = tracker.get_slot("estado")
        descripcionEstado = tracker.get_slot("descripcionEstado")

        print(incidencia, tipoIncidencia, codigoIncidencia, estado, descripcionEstado)

        cur = conexion()
        if tipoIncidencia != None:
            tipoIncidencia = tipoIncidencia.upper()
            tipoIncidencia = (
                tipoIncidencia.replace("'", "").replace(".", "").replace(" ", "")
            )
            if (
                tipoIncidencia == "HNC"
                or tipoIncidencia == "HNCS"
                or tipoIncidencia == "NOCONFORMIDADES"
                or tipoIncidencia == "NOCONFORMIDAD"

            ):
                tipoIncidencia = "HNC"
            elif (
                tipoIncidencia == "OBS"
                or tipoIncidencia == "OBSERVACIONES"
                or tipoIncidencia == "OB"
                or tipoIncidencia == "FINOBS"
                or tipoIncidencia == "FINOB"
                or tipoIncidencia == "OBSERVACION"
                or tipoIncidencia == "OB"
            ):
                tipoIncidencia = "Observaciones"
            elif tipoIncidencia == "DEMAT" or tipoIncidencia == "INCIDENCIA":
                tipoIncidencia = "Demat"

        if codigoIncidencia != None:
            codigoIncidencia = (
                codigoIncidencia.replace("'", "").replace('"', "").replace("/", "")
            )

            if (int(codigoIncidencia) >= 1000000000 and int(codigoIncidencia) <= 3000000000):
                tipoIncidencia = "HNC"
                cur.execute(
                    "SELECT aviso, creado_el, creado_por, usuario_realiza_toma_disposici, fecha_toma_disposición, usuario_realiza_toma_disposici_, status_a from zqm_hnc_2018 where aviso = '"
                    + codigoIncidencia
                    + "';"
                )
                rows = cur.fetchall()
                incidencia = ""
                if rows != []:
                    index = 0
                    for row in rows:
                        row = str(rows[index])
                        index += 1
                        row = "".join(row)
                        rowIncidencia = (
                            row.replace(",", "").replace("(", "").replace(")", "")
                        )
                        elements = rowIncidencia.split("'")
                        incidencia = (
                            "HNC: " + elements[1] + "<br>Estado: " + elements[13]
                        )
                        dispatcher.utter_message(incidencia)
                else:
                    incidencia = "La " + tipoIncidencia + " " + codigoIncidencia + " no existe."
                    dispatcher.utter_message(incidencia)
                return[]

            elif (
                int(codigoIncidencia) >= 4000000000 and int(codigoIncidencia) <= 5000000000
            ):
                tipoIncidencia = "OBS"
                cur.execute(
                    "SELECT número_aviso, usuario_apertura, fecha_apertura, fecha_cierre, cierre_producción, estado from zqm_ob_2018 where número_aviso = '"
                    + codigoIncidencia
                    + "';"
                )
                rows = cur.fetchall()
                incidencia = ""
                if rows != []:
                    index = 0
                    for row in rows:
                        row = str(rows[index])
                        index += 1
                        row = "".join(row)
                        rowIncidencia = (
                            row.replace(",", "").replace("(", "").replace(")", "")
                        )
                        elements = rowIncidencia.split("'")
                        incidencia = (
                            "\nOBS: " + elements[1] + "<br>Estado: " + elements[11]
                        )
                        dispatcher.utter_message(incidencia)
                else:
                    incidencia = "La " + tipoIncidencia + " " + codigoIncidencia + " no existe."
                    dispatcher.utter_message(incidencia)
                return []

            elif int(codigoIncidencia) >= 0 and int(codigoIncidencia) <= 999999:
                tipoIncidencia = "DEMAT"
                cur.execute(
                    "SELECT id, status from demat where id = '" + codigoIncidencia + "';"
                )
                rows = cur.fetchall()
                incidencia = ""
                if rows != []:
                    index = 0
                    for row in rows:
                        row = str(rows[index])
                        index += 1
                        row = "".join(row)
                        rowIncidencia = (
                            row.replace(",", "").replace("(", "").replace(")", "")
                        )
                        elements = rowIncidencia.split("'")
                        incidencia = (
                            tipoIncidencia.upper()
                            + ": "
                            + elements[1]
                            + "<br>Estado: "
                            + elements[3]
                        )
                        dispatcher.utter_message(incidencia)
                else:
                    incidencia = "La " + tipoIncidencia + " " + codigoIncidencia + " no existe."
                    dispatcher.utter_message(incidencia)
                
                return []

            else:
                dispatcher.utter_message("La incidencia " + codigoIncidencia + " no existe.")
                return []
        
        if descripcionEstado != None:
            rowNumber = 0
            cur.execute(
                "SELECT count(*) from zqm_ob_2018 where estado like '"
                + descripcionEstado
                + "';"
            )
            rows = cur.fetchall()
            if str(rows[0]) != '(0,)':
                row = str(rows[0])
                row = "".join(row)
                rowNumber = (
                    row.replace(",", "").replace("(", "").replace(")", "")
                )
                if rowNumber == '1':
                    dispatcher.utter_message("Existe " + rowNumber + " OBS en el estado " + descripcionEstado)
                else:
                    dispatcher.utter_message("Existen " + rowNumber + " OBS en el estado " + descripcionEstado)

            cur.execute(
                "SELECT count(*) from zqm_hnc_2018 where status_a like '"
                + descripcionEstado
                + "';"
            )
            rows = cur.fetchall()
            if str(rows[0]) != '(0,)':
                row = str(rows[0])
                row = "".join(row)
                rowNumber = (
                    row.replace(",", "").replace("(", "").replace(")", "")
                )
                if rowNumber == '1':
                    dispatcher.utter_message("Existe " + rowNumber + " HNC en el estado " + descripcionEstado)
                else:
                    dispatcher.utter_message("Existen " + rowNumber + " HNC en el estado " + descripcionEstado)
            cur.execute(
                "SELECT count(*) from demat where status like '"
                + descripcionEstado
                + "';"
            )
            rows = cur.fetchall()
            if str(rows[0]) != '(0,)':
                row = str(rows[0])
                row = "".join(row)
                rowNumber = (
                    row.replace(",", "").replace("(", "").replace(")", "")
                )
                if rowNumber == '1':
                    dispatcher.utter_message("Existe " + rowNumber + " Demat en el estado " + descripcionEstado)
                else:
                    dispatcher.utter_message("Existen " + rowNumber + " Demat en el estado " + descripcionEstado)

            if rowNumber == 0:
                dispatcher.utter_message("No existen incidencias en el estado " + descripcionEstado)
                return []
        else:
            dispatcher.utter_message("No existen incidencias en el estado " + descripcionEstado)
            return []

        return []

class ActionEstadoOperacion(Action):
    def name(self):
        # define the name of the action which can then be included in training stories
        return "action_estado_operacion"

    def run(self, dispatcher, tracker, domain):
        estado = tracker.get_slot("estado")
        descripcionEstado = tracker.get_slot("descripcionEstado")
        operacion = tracker.get_slot("operacion")
        codigoOperacion = tracker.get_slot("codigoOperacion")

        cur = conexion()

        if codigoOperacion != None:
            if re.match(r'[1,7,8]{1}[0-9]{6}$', codigoOperacion):
                codigoOrden = codigoOperacion

                cur.execute("SELECT estado, inicio_real, fin_real_notificado, nombres from estado_ordenes where orden = '" + codigoOrden + "';")
                rows = cur.fetchall()
                if rows != []:
                    index = 0
                    for row in rows:
                        row = str(rows[index])
                        index += 1
                        row = "".join(row)
                        row = (
                            row.replace(",", "").replace("(", "").replace(")", "")
                        )
                        elements = row.split("'")
                        dispatcher.utter_message(
                            "Operación: "
                            + codigoOrden
                            + "<br>Estado: "
                            + elements[1]
                            + "<br>Abierta por: "
                            + elements[7]
                            + " el "
                            + elements[3]
                        )
                else:
                    dispatcher.utter_message("La operación " + codigoOrden + " no existe.")

        elif descripcionEstado != None:
            rowNumber = 0
            if descripcionEstado.upper() == 'NO INICIADAS':
                descripcionEstado = descripcionEstado.replace("s","")
            print(descripcionEstado)
            cur.execute(
                "SELECT count(*) from estado_ordenes where upper(estado) like upper('"
                + descripcionEstado
                + "');"
            )
            rows = cur.fetchall()
            print(rows)
            if str(rows[0]) != '(0,)':
                row = str(rows[0])
                row = "".join(row)
                rowNumber = (
                    row.replace(",", "").replace("(", "").replace(")", "")
                )
                if rowNumber == '1':
                    dispatcher.utter_message("Existe " + rowNumber + " operacion en el estado " + descripcionEstado)
                else:
                    dispatcher.utter_message("Existen " + rowNumber + " operaciones en el estado " + descripcionEstado)

            if rowNumber == 0:
                dispatcher.utter_message("No existen operaciones en el estado " + descripcionEstado)
                return []
        else:
            dispatcher.utter_message("La operación no existe. Por favor introduzca un número de operación correcto")
            return []

        return []


class ActionGNT(Action):
    def name(self):
        # define the name of the action which can then be included in training stories
        return "action_gnt"

    def run(self, dispatcher, tracker, domain):
        incidencia = tracker.get_slot("incidencia")
        tipoIncidencia = tracker.get_slot("tipoIncidencia")
        codigoIncidencia = tracker.get_slot("codigoIncidencia")
        tipoGNT = tracker.get_slot("tipoGNT")
        descripcionGNT = tracker.get_slot("descripcionGNT")
        estacion = tracker.get_slot("estaciones")
        codigoEstacion = tracker.get_slot("codigoEstacion")

        print(descripcionGNT, codigoEstacion)

        codigoEstacion = "Estación " + codigoEstacion

        cur = conexion()

        if descripcionGNT != None:
            descripcionGNT = descripcionGNT.upper()
            print(descripcionGNT)
            if ('ELECTRONICA' in descripcionGNT):
                print("df")
                descripcionGNT = descripcionGNT.replace("ELECTRONICA", "ELECTRÓNICA")

        if tipoIncidencia != None:
            tipoIncidencia = tipoIncidencia.upper()
            tipoIncidencia = (
                tipoIncidencia.replace("'", "").replace(".", "").replace(" ", "")
            )
            if (
                tipoIncidencia == "HNC"
                or tipoIncidencia == "HNCS"
                or tipoIncidencia == "NOCONFORMIDADES"
                or tipoIncidencia == "NOCONFORMIDAD"
            ):
                tipoIncidencia = "HNC"
            elif (
                tipoIncidencia == "OBS"
                or tipoIncidencia == "OBSERVACIONES"
                or tipoIncidencia == "OB"
                or tipoIncidencia == "FINOBS"
                or tipoIncidencia == "FINOB"
                or tipoIncidencia == "OBSERVACION"
                or tipoIncidencia == "OB"
            ):
                tipoIncidencia = "Observaciones"
            elif tipoIncidencia == "DEMAT" or tipoIncidencia == "INCIDENCIA":
                tipoIncidencia = "Demat"
            '''if codigoIncidencia == None:
                incidencia = "Introduzca numero de inicidencia en la consulta"
                dispatcher.utter_message(incidencia)
                return []
            else:
                codigoIncidencia = (
                    codigoIncidencia.replace("'", "").replace('"', "").replace("/", "")
                )'''
        cur.execute(
            "SELECT count(*) from lm_gnt WHERE descripcion_gnt LIKE '%" + descripcionGNT + "%'"
            +" and id_estacion_gnt = '" + codigoEstacion + "';"
        )
        rows = cur.fetchall()
        if str(rows[0]) == '(0,)':
            dispatcher.utter_message('<b>No existen incidencias del gnt ' + descripcionGNT + ' en la estación ' + codigoEstacion + '</b>')
            return []
        else:
            row = str(rows[0])
            row = "".join(row)
            rowNumber = (
                row.replace(",", "").replace("(", "").replace(")", "")
            )
            dispatcher.utter_message('<b>Existen ' + rowNumber + ' incidencias con el gnt ' + descripcionGNT + ' en la estacion ' + codigoEstacion + '</b>')

        if tipoGNT != None and descripcionGNT != None:
            cur.execute(
                "SELECT * from lm_gnt WHERE descripcion_gnt LIKE '%" + descripcionGNT + "%'"
                +" and id_estacion_gnt = '" + codigoEstacion + "';"
            )
            rows = cur.fetchall()
            print(rows)
            if rows != []:
                if tipoIncidencia != None:
                    index = 0
                    incidencia = ""
                    for row in rows:
                        row = str(rows[index])
                        index += 1
                        row = "".join(row)
                        rowEstacion = (
                            row.replace(",", "")
                            .replace("(", "")
                            .replace(")", "")
                            .replace("'", "")
                        )
                        cur.execute(
                            "SELECT id_unico, partnumber, orden, operacion, avion, estacion, version_demat, tipo_incidencia, descripcion_incidencia from lm_fil_opercaciones_incidencias where estacion = '"
                            + rowEstacion
                            + "'and tipo_incidencia = '"
                            + tipoIncidencia
                            + "';"
                        )
                        rowsGNT = cur.fetchall()
                        if rowsGNT != []:
                            index = 0
                            for rowGNT in rowsGNT:
                                rowGNT = str(rowsGNT[index])
                                index += 1
                                rowGNT = "".join(rowGNT)
                                rowGNT = (
                                    rowGNT.replace(",", "")
                                    .replace("(", "")
                                    .replace(")", "")
                                )
                                elements = rowGNT.split("'")
                                incidencia = (
                                    elements[15]
                                    + " número: "
                                    + elements[1]
                                    + "<br>Partnumber: "
                                    + elements[3]
                                    + "<br>Avión: "
                                    + elements[9]
                                    + "<br>Estación: "
                                    + elements[11]
                                )
                                dispatcher.utter_message(incidencia)
                        else:
                            incidencia = (
                                "No existen "
                                + tipoIncidencia
                                + " en la estacion "
                                + rowEstacion
                            )
                            dispatcher.utter_message(incidencia)
                    return []       

                elif tipoGNT != None and descripcionGNT != None and tipoIncidencia == None:
                    index = 0
                    incidencia = ""
                    for row in rows:
                        row = str(rows[index])
                        index += 1
                        row = "".join(row)
                        rowGNT = (
                            row.replace(",", "")
                            .replace("(", "")
                            .replace(")", "")
                            .replace("'", "")
                        )
                        rowGNT = rowGNT.split(" ")
                        cur.execute(
                            "SELECT id_unico, partnumber, orden, operacion, avion, estacion, id_gnt, descripcion_gnt, tipo_incidencia, descripcion_incidencia from lm_fil_opercaciones_incidencias where id_gnt = '"
                            + rowGNT[2]
                            + "';"
                        )

                        rowsGNT = cur.fetchall()
                        if rowsGNT != []:
                            row = str(rowsGNT[0])
                            row = "".join(row)
                            rowInci = row.replace("(", "").replace(")", "").replace("'", "")
                            elements = rowInci.split(",")
                            dispatcher.utter_message(
                                "<b>GNT con id:</b> "
                                + elements[0]
                                + "<br><b>PartNumber:</b> "
                                + elements[1]
                                + "<br><b>Orden:</b> "
                                + elements[2]
                                + "<br><b>Operación:</b> "
                                + elements[3]
                                + "<br><b>Avión:</b> "
                                + elements[4]
                                + "<br><b>Estación:</b> "
                                + elements[5]
                                + "<br><b>ID GNT:</b> "
                                + elements[6]
                                + "<br><b>Descripción de GNT:</b> "
                                + elements[7]
                                + "<br><b>Tipo Incidencia:</b> "
                                + elements[8]
                                + "<br><b>Descripción Incidencia:</b> "
                                + elements[9]
                            )
                        else:
                            incidencia = (
                                "No existen incidencias con el número "
                                + codigoIncidencia
                            )
                            dispatcher.utter_message(incidencia)
                    return []

            else:
                incidencia = "No existe GNT con la descripción " + descripcionGNT

        dispatcher.utter_message(incidencia)

        return []

class ActionAvionSiguientes(Action):
    def name(self):
        # define the name of the action which can then be included in training stories
        return "action_avion_siguientes"

    def run(self, dispatcher, tracker, domain):
        avion = tracker.get_slot("avion")
        codigoAvion = tracker.get_slot("codigoAvion")
        tipoIncidencia = tracker.get_slot("tipoIncidencia")
        estacion = tracker.get_slot("estaciones")
        codigoEstacion = tracker.get_slot("codigoEstacion")
        incidencia = tracker.get_slot("incidencia")
        partnumberSlot = tracker.get_slot("partNumber")

        cur = conexion()
        if tipoIncidencia != None:
            tipoIncidencia = tipoIncidencia.upper()
            tipoIncidencia = (
                tipoIncidencia.replace("'", "").replace(".", "").replace(" ", "")
            )
            if (
                tipoIncidencia == "HNC"
                or tipoIncidencia == "HNCS"
                or tipoIncidencia == "NOCONFORMIDADES"
                or tipoIncidencia == "NOCONFORMIDAD"
            ):
                tipoIncidencia = "HNC"
            elif (
                tipoIncidencia == "OBS"
                or tipoIncidencia == "OBSERVACIONES"
                or tipoIncidencia == "OB"
                or tipoIncidencia == "FINOBS"
                or tipoIncidencia == "FINOB"
                or tipoIncidencia == "OBSERVACION"
                or tipoIncidencia == "OB"
            ):
                tipoIncidencia = "Observaciones"
            elif tipoIncidencia == "DEMAT" or tipoIncidencia == "INCIDENCIA":
                tipoIncidencia = "Demat"

        if codigoEstacion != None:
            codigoEstacion = codigoEstacion.replace("'", "").replace('"', "").replace("/", "")

        if codigoAvion != None:
            codigoAvion = codigoAvion.replace("'", "").replace('"', "").replace("/", "")

        if codigoAvion != None and (int(codigoAvion) > 999 or int(codigoAvion) < 1):
            dispatcher.utter_message("Indícame el número de avión correcto por favor")
            return []

        print(
            avion, codigoAvion, tipoIncidencia, estacion, codigoEstacion, partnumberSlot
        )


        if avion != None and estacion == None and tipoIncidencia == None:
            # pregunta por incidencias en un avion
            cur.execute(
                "SELECT count(*) from lm_fil_opercaciones_incidencias where avion ='"
                + codigoAvion
                + "';"
            )
            rows = cur.fetchall()
            if str(rows[0]) != '(0,)':
                row = str(rows[0])
                row = "".join(row)
                rowAvion = row.replace(",", "").replace("(", "").replace(")", "")
                avionCount = ("<b>Hay " + rowAvion + " incidencias con el número de avión " + codigoAvion + "</b>")
                if int(rowAvion) < 5:
                    dispatcher.utter_message(avionCount)
                    cur.execute(
                        "SELECT * from lm_fil_opercaciones_incidencias where avion ='"
                        + codigoAvion
                        + "'ORDER BY orden ASC;"
                    )
                    rows = cur.fetchall()
                    avion = ""
                    if rows != []:
                        index = 0
                        for row in rows:
                            row = str(rows[index])
                            index += 1
                            row = "".join(row)
                            rowAvion = row.replace(",", "").replace("(", "").replace(")", "")
                            elements = rowAvion.split("'")
                            avion = (
                                elements[1].upper()
                                + ":"
                                + "<br>Pathnumber: "
                                + elements[3]
                                + "<br>Orden: "
                                + elements[5]
                                + "<br>Operación: "
                                + elements[7]
                                + "<br>Estación: "
                                + elements[11]
                                + "<br>Descripción: "
                                + elements[17]
                            )
                            dispatcher.utter_message(avion)
                    return []
                else:
                    cur.execute(
                        "SELECT * from lm_fil_opercaciones_incidencias where avion ='"
                        + codigoAvion
                        + "'ORDER BY orden ASC;"
                    )
                    rows = cur.fetchall()
                    avion = ""
                    if rows != []:
                        index = 5
                        try:
                            for row in rows:
                                while index < 10 and index >= 5:
                                    row = str(rows[index])
                                    index += 1
                                    row = "".join(row)
                                    rowAvion = row.replace(",", "").replace("(", "").replace(")", "")
                                    elements = rowAvion.split("'")
                                    avion = (
                                        elements[1].upper()
                                        + ":"
                                        + "<br>Pathnumber: "
                                        + elements[3]
                                        + "<br>Orden: "
                                        + elements[5]
                                        + "<br>Operación: "
                                        + elements[7]
                                        + "<br>Estación: "
                                        + elements[11]
                                        + "<br>Descripción: "
                                        + elements[17]
                                    )
                                    dispatcher.utter_message(avion)
                        except:
                            return []

            else:
                dispatcher.utter_message("Indícame el número de avión correcto por favor")
                return []
        
        return []

class ActionOrden(Action):
    def name(self):
        # define the name of the action which can then be included in training stories
        return "action_orden"

    def run(self, dispatcher, tracker, domain):
        operacion = tracker.get_slot("operacion")
        codigoOperacion = tracker.get_slot("codigoOperacion")
        aOrden = tracker.get_slot("aOrden")
        avion = tracker.get_slot("avion")
        gnt = tracker.get_slot("tipoGNT")

        cur = conexion()

        print(aOrden)

        if codigoOperacion == None:
            if "falta" in aOrden:
                cur.execute(
                    "SELECT count(*) from estado_ordenes where faltas_asociadas = 'Si';"
                )
                rows = cur.fetchall()
                if rows != []:
                    for row in rows:
                        row = str(rows[0])
                        row = row.replace("(", "").replace(")", "").replace(",", "")
                        if int(row) == 1:
                            dispatcher.utter_message(
                                "Existe " + row + " operacion con faltas asociadas"
                            )
                        elif int(row) > 1:
                            dispatcher.utter_message(
                                "Existen: " + row + " operaciones con faltas asociadas"
                            )
                else:
                    dispatcher.utter_message("No existen operaciones con faltas asociadas")

                return []

            if "95" in aOrden or "99" in aOrden:
                cur.execute(
                    "SELECT count(*) from estado_ordenes where progreso = '" + aOrden + "';"
                )
                rows = cur.fetchall()
                if rows != []:
                    for row in rows:
                        row = str(rows[0])
                        row = row.replace("(", "").replace(")", "").replace(",", "")
                        if int(row) == 1:
                            dispatcher.utter_message(
                                "Existe " + row + " operacion con " + aOrden + "%"
                            )
                        elif int(row) > 1:
                            dispatcher.utter_message(
                                "Existen " + row + " operaciones con " + aOrden + "%"
                            )
                else:
                    dispatcher.utter_message("No existen operaciones con " + aOrden + "% de progreso")

                return []

        if re.match(r'[1,7,8]{1}[0-9]{6}$', codigoOperacion):
            codigoOrden = codigoOperacion
        else:
            dispatcher.utter_message("La operación no existe. Por favor introduzca un número de operación correcto")
            return []

        print(aOrden, codigoOperacion, avion, gnt)

        if avion != None:
            cur.execute(
                "SELECT avión from estado_ordenes where orden = '" + codigoOrden + "';"
            )
            rows = cur.fetchall()
            if rows != []:
                index = 0
                for row in rows:
                    row = str(rows[index])
                    index += 1
                    row = "".join(row)
                    row = (
                        row.replace("'", "").replace("(", "").replace(")", "")
                    )
                    elements = row.split(",")
                    dispatcher.utter_message(
                        "Operación: "
                        + codigoOrden
                        + "<br>Pertenece al avión "
                        + elements[0]
                    )
            else:
                dispatcher.utter_message("La operacion " + codigoOrden + " no existe.")

            return []

        if gnt != None:
            cur.execute(
                "SELECT gnt from estado_ordenes where orden = '" + codigoOrden + "';"
            )
            rows = cur.fetchall()
            if rows != []:
                index = 0
                for row in rows:
                    row = str(rows[index])
                    index += 1
                    row = "".join(row)
                    row = (
                        row.replace("'", "").replace("(", "").replace(")", "")
                    )
                    elements = row.split(",")
                    dispatcher.utter_message(
                        "Operación: "
                        + codigoOrden
                        + "<br>Pertenece al gnt "
                        + elements[0]
                    )
            else:
                dispatcher.utter_message("La operacion " + codigoOrden + " no existe.")

            return []

        if "progreso" in aOrden or "avance" in aOrden:
            cur.execute(
                "SELECT progreso from estado_ordenes where orden = '" + codigoOrden + "';"
            )
            rows = cur.fetchall()
            if rows != []:
                index = 0
                for row in rows:
                    row = str(rows[index])
                    index += 1
                    row = "".join(row)
                    row = (
                        row.replace(",", "").replace("(", "").replace(")", "")
                    )
                    elements = row.split("'")
                    dispatcher.utter_message(
                        "Operación: "
                        + codigoOrden
                        + "<br>Tiene un progreso de: "
                        + elements[1]
                        + "%"
                    )
            else:
                dispatcher.utter_message("La operacion " + codigoOrden + " no existe.")

            return []

        if "operario" in aOrden or "trabajador" in aOrden or "blue" in aOrden:
            if "teorico" in aOrden or "teórico" in aOrden:
                cur.execute(
                    "SELECT n_operario_teórico from estado_ordenes where orden = '" + codigoOrden + "';"
                )
                rows = cur.fetchall()
                if rows != []:
                    index = 0
                    for row in rows:
                        row = str(rows[index])
                        index += 1
                        row = "".join(row)
                        row = (
                            row.replace(",", "").replace("(", "").replace(")", "")
                        )
                        elements = row.split("'")
                        dispatcher.utter_message(
                            "Operación: "
                            + codigoOrden
                            + "<br>Tiene asignado "
                            + elements[1]
                            + " operarios teóricos"
                        )
            elif "teorico" not in aOrden or "teórico" not in aOrden:
                cur.execute(
                    "SELECT n_operarios_reales from estado_ordenes where orden = '" + codigoOrden + "';"
                )
                rows = cur.fetchall()
                if rows != []:
                    index = 0
                    for row in rows:
                        row = str(rows[index])
                        index += 1
                        row = "".join(row)
                        row = (
                            row.replace(",", "").replace("(", "").replace(")", "")
                        )
                        elements = row.split("'")
                        dispatcher.utter_message(
                            "Operación: "
                            + codigoOrden
                            + "<br>Tiene asignado "
                            + elements[1]
                            + " operarios reales"
                        )
            else:
                dispatcher.utter_message("La operacion " + codigoOrden + " no existe.")

            return []

        if "material" in aOrden:
            cur.execute(
                "SELECT material from estado_ordenes where orden = '" + codigoOrden + "';"
            )
            rows = cur.fetchall()
            if rows != []:
                index = 0
                for row in rows:
                    row = str(rows[index])
                    index += 1
                    row = "".join(row)
                    row = (
                        row.replace(",", "").replace("(", "").replace(")", "")
                    )
                    elements = row.split("'")
                    dispatcher.utter_message(
                        "Operación: "
                        + codigoOrden
                        + "<br>Material "
                        + elements[1]
                        + " asignado"
                    )
            else:
                dispatcher.utter_message("La operacion " + codigoOrden + " no existe.")

            return []

        if "falta" in aOrden:
            cur.execute(
                "SELECT faltas_asociadas from estado_ordenes where orden = '" + codigoOrden + "';"
            )
            rows = cur.fetchall()
            if rows != []:
                index = 0
                for row in rows:
                    row = str(rows[index])
                    index += 1
                    row = "".join(row)
                    row = (
                        row.replace(",", "").replace("(", "").replace(")", "")
                    )
                    elements = row.split("'")
                    dispatcher.utter_message(
                        "Operación: "
                        + codigoOrden
                        + "<br>" + elements[1] + "falta material "
                    )
            else:
                dispatcher.utter_message("La operacion " + codigoOrden + " no existe.")

            return []

        if "duracion" in aOrden or "duración" in aOrden:
            if "teoric" in aOrden or "teóric" in aOrden:
                cur.execute(
                    "SELECT duracionteorica from estado_ordenes where orden = '" + codigoOrden + "';"
                )
            else:
                cur.execute(
                    "SELECT duración_real from estado_ordenes where orden = '" + codigoOrden + "';"
                )
            rows = cur.fetchall()
            if rows != []:
                index = 0
                for row in rows:
                    row = str(rows[index])
                    index += 1
                    row = "".join(row)
                    row = (
                        row.replace(",", "").replace("(", "").replace(")", "")
                    )
                    elements = row.split("'")
                    dispatcher.utter_message(
                        "Operación: "
                        + codigoOrden
                        + "<br>Tiene una duración de "
                        + elements[1]
                        + " horas/dias"
                    )
            else:
                dispatcher.utter_message("La operacion " + codigoOrden + " no existe.")

            return []

        if "camino" in aOrden or "critico" in aOrden or "crítico" in aOrden:
            cur.execute(
                "SELECT camino_crítico from estado_ordenes where orden = '" + codigoOrden + "';"
            )
            rows = cur.fetchall()
            if rows != []:
                index = 0
                for row in rows:
                    row = str(rows[index])
                    index += 1
                    row = "".join(row)
                    row = (
                        row.replace(",", "").replace("(", "").replace(")", "")
                    )
                    elements = row.split("'")
                    elements[1] = elements[1].upper()
                    if 'SI' in elements[1]:
                        dispatcher.utter_message(
                            "Si"
                        )
                    if 'NO' in elements[1]:
                        dispatcher.utter_message(
                            "No"
                        )
            else:
                dispatcher.utter_message("La operacion " + codigoOrden + " no existe.")

            return []

        if "nombre" in aOrden or "asignac" in aOrden:
            cur.execute(
                "SELECT nombre from estado_ordenes where orden = '" + codigoOrden + "';"
            )
            rows = cur.fetchall()
            if rows != []:
                index = 0
                for row in rows:
                    row = str(rows[index])
                    index += 1
                    row = "".join(row)
                    row = (
                        row.replace(",", "").replace("(", "").replace(")", "")
                    )
                    elements = row.split("'")
                    if elements[1] == '':
                        dispatcher.utter_message(
                            "Operación: "
                            + codigoOrden
                            + "<br>No tiene nombre"
                        )
                    else:
                        dispatcher.utter_message(
                            "Operación: "
                            + codigoOrden
                            + "<br>Tiene el nombre de: "
                            + elements[1]
                        )
            else:
                dispatcher.utter_message("La operacion " + codigoOrden + " no existe.")

            return []

        if "inicio" in aOrden:
            if "teoric" in aOrden or "teóric" in aOrden:
                cur.execute(
                    "SELECT inicio_teórico from estado_ordenes where orden = '" + codigoOrden + "';"
                )
            else:
                cur.execute(
                    "SELECT inicio_real from estado_ordenes where orden = '" + codigoOrden + "';"
                )
            rows = cur.fetchall()
            if rows != []:
                index = 0
                for row in rows:
                    row = str(rows[index])
                    index += 1
                    row = "".join(row)
                    row = (
                        row.replace(",", "").replace("(", "").replace(")", "")
                    )
                    elements = row.split("'")
                    dispatcher.utter_message(
                        "Operación: "
                        + codigoOrden
                        + "<br>Comenzó el "
                        + elements[1]
                    )
            else:
                dispatcher.utter_message("La operacion " + codigoOrden + " no existe.")

            return []

        if "fin" in aOrden:
            if "teoric" in aOrden or "teóric" in aOrden:
                cur.execute(
                    "SELECT fin_teórico from estado_ordenes where orden = '" + codigoOrden + "';"
                )
            else:
                cur.execute(
                    "SELECT fin_real_notificado from estado_ordenes where orden = '" + codigoOrden + "';"
                )
            rows = cur.fetchall()
            if rows != []:
                index = 0
                for row in rows:
                    row = str(rows[index])
                    index += 1
                    row = "".join(row)
                    row = (
                        row.replace(",", "").replace("(", "").replace(")", "")
                    )
                    elements = row.split("'")
                    dispatcher.utter_message(
                        "Operación: "
                        + codigoOrden
                        + "<br>Finalizó el "
                        + elements[1]
                    )
            else:
                dispatcher.utter_message("La operacion " + codigoOrden + " no existe.")

            return []

        if "comentar" in aOrden:
            cur.execute(
                "SELECT comentarios from estado_ordenes where orden = '" + codigoOrden + "';"
            )
            rows = cur.fetchall()
            if rows != []:
                index = 0
                for row in rows:
                    row = str(rows[index])
                    index += 1
                    row = "".join(row)
                    row = (
                        row.replace(",", "").replace("(", "").replace(")", "")
                    )
                    elements = row.split("'")
                    if elements[1] == '':
                        dispatcher.utter_message(
                            "Operación: "
                            + codigoOrden
                            + "<br>No tiene comentarios"
                        )
                    else:
                        dispatcher.utter_message(
                            "Operación: "
                            + codigoOrden
                            + "<br>Tiene los comentarios: "
                            + elements[1]
                        )
            else:
                dispatcher.utter_message("La operacion " + codigoOrden + " no existe.")

            return []

        if codigoOrden:
            dispatcher.utter_message("La operacion " + codigoOrden + " no existe.")
            return []

class ActionDescripcion(Action):
    def name(self):
        # define the name of the action which can then be included in training stories
        return "action_descripcion_incidencia"

    def run(self, dispatcher, tracker, domain):
        verbos = tracker.get_slot("verbos")
        servicio = tracker.get_slot("servicio")

        cur = conexion()

        cur.execute(
            "SELECT * from lm_fil_hnc where descripcion_incidencia like '%"
            + servicio 
            + "%' and descripcion_incidencia like '%"
            + verbos
            + "%';"
        )
        rows = cur.fetchall()
        if rows != []:
            for row in rows:
                row = str(rows[0])
                row = row.replace("(", "").replace(")", "").replace(",", "")
                dispatcher.utter_message(row)
        else:
            dispatcher.utter_message("Nada")

        return []
