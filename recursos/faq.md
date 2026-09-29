---
layout: page
title: "Preguntas Frecuentes"
---

## Preguntas Frecuentes sobre HME / MEF

---

## Concepto General

### ¿Qué es exactamente HME?

**HME (Honorarios Mínimos Equivalentes)** —o **MEF** en inglés, *Minimum
Equivalent Fees*— es una propuesta de regulación que establece un **piso
mínimo de retribución para profesionales autónomos** (arquitectos,
ingenieros, consultores, etc.), basada en el principio de que un
profesional por cuenta propia debe poder percibir, como mínimo, el coste
equivalente de lo que le costaría a un empleador contratar a un
profesional empleado con las mismas competencias.

El modelo distingue dos referencias, derivadas por capas de datos
normativos y convencionales explícitos (ver
[memoria técnica]({{ '/herramientas/metodologia/' | relative_url }})):

- **Suelo MEF**: el umbral antidiscriminatorio propiamente dicho —
  salario de convenio (o SMI) + cotización empresarial + costes
  operativos, dividido entre horas anuales y facturabilidad.
- **Suelo de coste**: el coste real de producción del estudio (retribución
  de referencia + coeficiente coste-empresa + gastos generales y
  beneficio industrial, por analogía con el art. 131 RGLCAP).

### ¿Por qué se propone HME?

Existe una **brecha retributiva estructural** entre profesionales
autónomos y empleados con la misma cualificación: según datos del
*Architects' Council of Europe*, el ingreso mediano de los arquitectos que
ejercen como autónomos en España es sensiblemente inferior al de quienes
ejercen en plantilla, tanto en el sector privado como en el público (cifras
completas en la [memoria técnica]({{ '/herramientas/metodologia/' | relative_url }})).

Esta desigualdad no responde a eficiencia del mercado, sino a la ausencia
de un suelo legal de protección retributiva que sí existe para el trabajo
asalariado (SMI, convenio colectivo).

### ¿No es esto un "arancel" que viola la libre competencia?

**No.** Hay una diferencia fundamental:

| Arancel Colegial (prohibido) | HME (propuesto) |
|---|---|
| Tarifa fija impuesta por colegio profesional | Piso mínimo derivado de análisis de costes |
| Acordada entre competidores | Regulada por el Estado |
| Elimina competencia en precio | Permite competencia por encima del mínimo |
| Contraria al art. 101 TFUE | Justificada por no discriminación (arts. 14 y 35 CE) |

**Referencia**: la jurisprudencia del TJUE (C-94/04 *Cipolla*, C-202/04
*Asnef-Equifax*, C-377/17, C-19/23) distingue precisamente entre ambos
supuestos — ver [Marco Legal]({{ '/marco-legal/' | relative_url }}).

---

## Marco Legal

### ¿Es constitucional en España?

**Ese es el fundamento de la propuesta.** Se apoya en:

- **Artículo 14 CE** (igualdad): no discriminación en retribución por
  trabajo equivalente.
- **Artículo 35 CE** (derecho al trabajo): la "remuneración suficiente"
  debe ser equivalente con independencia del tipo de contrato.

### ¿Es compatible con la Directiva de Servicios (2006/123/CE)?

Ese es el argumento sostenido en la propuesta: el artículo 15 permite
restricciones a la libre prestación de servicios por "razones imperativas
de interés general", entre ellas la protección de trabajadores y la no
discriminación — siempre que la medida sea necesaria y proporcionada (test
de la Directiva (UE) 2018/958).

### ¿Y con el TFUE art. 101 (prohibición de carteles)?

El argumento de compatibilidad se apoya en tres elementos:

1. No sería un acuerdo entre competidores (prohibido), sino una regulación
   estatal.
2. Respondería a un objetivo de interés general (no discriminación), no a
   la protección de un colectivo profesional.
3. No eliminaría la competencia en precio (es un piso, no un precio
   único ni máximo).

Ver el desarrollo completo, con jurisprudencia y precedentes comparados,
en [Marco Legal]({{ '/marco-legal/' | relative_url }}).

---

## Aspectos Técnicos

### ¿Cómo se calcula el suelo MEF?

De forma resumida (derivación completa, con la tabla de fuentes por dato,
en la [memoria técnica]({{ '/herramientas/metodologia/' | relative_url }})):

1. Se parte del **salario de referencia** de convenio colectivo del
   sector (o, alternativamente, del SMI), más la **cotización
   empresarial** y los **costes operativos** del estudio.
2. Se divide entre las **horas anuales** de convenio (1.792 h).
3. El resultado son dos valores de referencia: **31,08 €/h** (suelo MEF,
   base convenio) y **21,59 €/h** (base SMI, el umbral absoluto).

Separadamente, el **suelo de coste** (lo que le cuesta a un estudio
producir una hora de trabajo, incluido su margen) ajusta esas horas por
un índice de **facturabilidad** (59,3%, segmento Architecture/A-E para el
ejercicio fiscal 2025, *benchmark* de industria — Deltek Clarity A&E, no
un dato oficial español) y añade gastos generales y beneficio industrial
por analogía con el art. 131 RGLCAP, resultando en **56,68 €/h**.

Estos valores se recalculan automáticamente, para cada encargo concreto,
en el [evaluador]({{ '/herramientas/evaluador/' | relative_url }}) y el
[estimador]({{ '/herramientas/estimacion/' | relative_url }}).

### ¿Quién define los datos de partida (salario, costes, facturabilidad)?

Cada dato tiene un origen y un estatus distinto, documentado en la
[memoria técnica]({{ '/herramientas/metodologia/' | relative_url }}):
algunos son **normativos** (SMI, cotizaciones a la Seguridad Social,
tarifas SEGIPSA), otros **convencionales** (convenio colectivo del
sector), y otros son **hipótesis propia**, editable y discutible
(costes operativos, facturabilidad). Nada se presenta como dato oficial
cuando no lo es.

### ¿Cómo se actualizarían estos valores?

Hoy son cifras fijadas por el autor de la propuesta conforme a las
fuentes citadas, pendientes de actualización periódica conforme al IPC y
a la revisión de convenio y SMI — no existe todavía un mecanismo
institucional de actualización, porque HME es una propuesta en fase de
[advocacy]({{ '/advocacy/' | relative_url }}), no una norma en vigor.

---

## Implementación y Alcance

### ¿A quién afectaría el HME?

La propuesta, tal como se ha planteado formalmente (ver
[Advocacy]({{ '/advocacy/' | relative_url }})), se centra en profesionales
autónomos sujetos a colegiación —inicialmente arquitectos, con vocación de
extenderse a otras profesiones equivalentes (ingenieros, consultores en
sectores regulados)—, con independencia del régimen de cotización
(autónomo o sociedad profesional).

### ¿Cómo se aplicaría?

Esto es todavía objeto de propuesta, no un mecanismo cerrado. La petición
formal plantea que el Estado establezca un sistema de Honorarios Mínimos
Equivalentes, directamente o mediante los colegios profesionales, bajo su
supervisión — ver el texto de la
[petición original]({{ '/advocacy/' | relative_url }}) para el
planteamiento exacto.

---

## Comparación Internacional

### ¿Cómo se regula en otros países?

| País | Modelo | Estatus |
|---|---|---|
| **Italia** | DM 17/6/2016: fórmula CP = V·G·ΣQ·P, tarifa horaria de referencia (art. 6.2) | Vigente |
| **España** | Propuesta HME | En fase de advocacy |

Desarrollo completo del modelo italiano, con artículos y fuentes primarias,
en [Marco Legal]({{ '/marco-legal/' | relative_url }}), que también recoge el
precedente alemán (HOAI) y los límites que marca para una propuesta como HME.

### ¿Se basa la propuesta HME en el modelo italiano?

No. El fundamento de HME es el principio constitucional de no
discriminación (arts. 14 y 35 CE), planteado formalmente en España en
marzo de 2021 — antes, por tanto, de que la Ley italiana 49/2023 de
*equo compenso* existiera. Italia se cita como referencia comparada por
dos motivos, no como origen de la propuesta:

- El DM 17/6/2016 aporta un método de cálculo técnicamente útil para
  contrastar el suelo MEF.
- La Ley 49/2023 confirma que otro Estado miembro de la UE ya ha
  implementado un mecanismo equivalente, lo que respalda la viabilidad
  jurídica de HME frente al Derecho de la competencia de la Unión.

---

## Impacto Económico

### ¿Aumentaría mucho el coste de servicios profesionales?

El argumento sostenido en la propuesta es que no de forma significativa,
porque:

1. Muchos profesionales ya cobran por encima del suelo MEF —el mínimo
   afecta principalmente a la cola inferior de precios, la más asociada al
   dumping.
2. HME es un **piso**, no un precio único: la competencia en precio por
   encima del mínimo se mantiene.
3. Corrige una asimetría de información (el cliente no conoce el coste
   real de producción del servicio), no introduce una distorsión nueva.

Este es un argumento razonado, no un dato empírico verificado sobre el
caso español: la propuesta está en fase de advocacy, sin implementación
todavía que permita medir su impacto real.

### ¿Afectaría a la competencia?

El argumento es que no de forma adversa: la competencia en precio por
encima del suelo se mantiene, la competencia en calidad y especialización
se refuerza, y se elimina la competencia por dumping —que no es
competencia por eficiencia, sino por precarización.

---

## Objeciones Comunes

### "Esto es proteccionismo colegial disfrazado"

La diferencia con el arancel colegial es esencial: un arancel es una
tarifa fija, acordada entre competidores y que elimina la competencia en
precio. HME es un piso derivado de un análisis de costes, regulado por el
Estado —no por un colegio—, que permite la competencia por encima del
mínimo. El "proteccionismo" sería, en todo caso, permitir el dumping de
forma indefinida.

### "El mercado debe fijarse libremente"

El argumento sostenido es que el mercado no funciona libremente cuando hay
información asimétrica (el cliente no conoce el coste real de producción
del servicio) y cuando la alternativa al piso mínimo es la competencia
desleal por precios por debajo de coste. HME pretende corregir ese fallo
de mercado, no sustituirlo.

### "¿Por qué no simplemente cambiar de profesión?"

Porque la brecha retributiva entre trabajo autónomo y asalariado, si
existe, es sistémica —afecta potencialmente a distintas profesiones
reguladas—, y un cambio de profesión implicaría además una pérdida de
cualificación. El problema que plantea la propuesta es de naturaleza
regulatoria, no individual.

---

## Próximos Pasos

### ¿Cuál es el estado actual?

El estado de tramitación completo y actualizado —peticiones, quejas,
recursos y sus fechas— está en la
[cronología de Advocacy]({{ '/advocacy/' | relative_url }}#estado-de-tramitación),
que se mantiene al día conforme avanza el expediente. En resumen: la vía
judicial iniciada en 2021 quedó resuelta (firme) en 2024–2025; la vía
institucional abierta en 2026 ante el Ministerio de Economía, Comercio y
Empresa y el Defensor del Pueblo sigue en curso.

### ¿Cómo colaborar?

A través del [formulario de contacto]({{ '/recursos/contacto/' | relative_url }}) —
para proponer una colaboración, aportar datos de coste o testimonio
profesional (incluyendo de otras profesiones u oficios), informar de una
norma o actuación relevante no recogida todavía en el sitio, o dejar
cualquier feedback sobre la propuesta.

---

**Última actualización**: Septiembre 2026
