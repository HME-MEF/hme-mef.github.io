---
layout: page
title: "Memoria técnica de la calculadora"
---

{% include beta-notice.html %}

Este documento explica el origen y el estatus de cada dato que emplean el
[evaluador de indicios de discriminación retributiva]({{ '/herramientas/evaluador/' | relative_url }})
y el [estimador de banda de honorarios]({{ '/herramientas/estimacion/' | relative_url }}),
para que quien las use pueda distinguir qué es una cifra normativa, qué es
un benchmark de industria no oficial, y qué es una hipótesis propia
—editable y discutible— del modelo. Ambas herramientas comparten el mismo
motor de cálculo (estimación de horas, suelo de coste, suelo MEF).

Ambas calculadoras incluyen un **selector de año** (2023–2027), porque el
salario de convenio, el SMI y la facturabilidad Deltek sí varían de un
ejercicio a otro. El modelo italiano y SEGIPSA no tienen un valor
distinto por año en esta herramienta, pero sí se actualizan de facto con
la inflación de la construcción: ambos se calculan como un porcentaje
sobre el PEM (presupuesto de ejecución material), por lo que su importe
en euros corrientes sube o baja junto con el coste de la obra, sin
necesidad de una revisión normativa expresa. Ver la sección 6 para el
detalle de qué cambia por año
y qué se mantiene por falta de dato publicado.

No es una tarifa oficial ni un baremo colegial: es información sobre
distintas referencias de honorarios posibles —según no discriminación
(HME/MEF), coste empresarial, o parámetros normativos españoles
(SEGIPSA) e italianos (DM 2016)—, construida por capas explícitas. El
uso que cada quien haga de estas cifras depende de su propio criterio.

---

## 1. Tabla de fuentes

| Dato | Valor | Estatus |
|---|---|---|
| Salario de referencia (convenio) | 28.027 €/año (2023) / 28.664 €/año (2024–2027) | Nivel 1, tablas salariales del XX Convenio colectivo de ingeniería y oficinas de estudios técnicos — **convencional**: **2023** ([BOE-A-2023-11785, 18/5/2023](https://www.boe.es/buscar/doc.php?id=BOE-A-2023-11785)), **2024** ([BOE-A-2024-5873, 12/3/2024](https://www.boe.es/buscar/doc.php?id=BOE-A-2024-5873)). Sin tabla pactada para 2025–2027; se mantiene la cifra de 2024 — ver sección 6 |
| Cotización empresarial | 33,01% del salario base | Cálculo normativo de Seguridad Social sobre el salario de convenio o el SMI — **normativo** (porcentaje mantenido constante entre 2024 y 2027 como simplificación; no incorpora el incremento anual del Mecanismo de Equidad Intergeneracional) |
| Costes operativos (Madrid) | 12.885,18 €/año (2023) / 12.930,40 €/año (2024) / 12.988,63 €/año (2025) / 13.059,92 €/año (2026) | Tabla de 8 partidas (cuota colegial, seguro de RC, local, vehículo —leasing y combustible—, licencias de software, equipamiento informático, otros gastos corrientes) con fuente específica y, donde existe dato real, variación año a año — ver tabla completa más abajo (§1-bis) y memoria técnica §11. Sustituye a la estimación agregada inicial (17.569 €/año) |
| Horas anuales | 1.792 h | Jornada máxima del convenio de ingeniería y oficinas técnicas — **convencional** |
| Facturabilidad (utilization rate) | 59,3% (2024–2027) | Segmento "Architecture or A/E", ejercicio fiscal **2025** — *47th Annual Deltek Clarity A&E Industry Study* (Deltek / CMG Consulting), tabla "Statistics at a Glance", p. 122 (la mediana narrativa de todo el sector A&E, no solo arquitectura, es 58,9%, p. 99) — **benchmark de industria, EE.UU.**, no es un dato oficial español ([informe completo](https://info.deltek.com/47th-Annual-Deltek-Clarity-AE-Report-PDF)). Único dato específico de arquitectura publicado; se aplica igual a los cuatro años del selector — ver sección 6 |
| Retribución bruta de referencia (suelo de coste) | 26.462 €/año (2023) / 31.672 €/año (2024–2027) | Salario medio de empleados de empresas privadas en España, ajustado por PPA (sin promediar con directivos/socios — ver nota en sección 2): **2023** — *ACE Sector Study* **2022**, Tabla 4-2, España, p. 55; **2024–2027** — *ACE Sector Study* **2024**, Tabla 4-2, España, p. 57 — **hipótesis propia**, con datos de partida de *The Architectural Profession in Europe* (Mirza & Nacey Research Ltd, Architects' Council of Europe), ediciones 2022 y 2024 |
| Coeficiente coste-empresa | 1,356 | Ratio coste bruto / sueldos y salarios, sector Servicios — [INE, Encuesta Anual de Coste Laboral (EACL), año 2025, Tabla 1](https://www.ine.es/dyngs/Prensa/EACL2025.htm) (37.717,75 € / 27.817,39 €) — **benchmark de industria (España)**; el INE no desglosa por rama de actividad más fina, así que se toma el conjunto de Servicios como proxy del sector arquitectura |
| Gastos generales / beneficio industrial (suelo de coste) | 15% / 6% | Por analogía con el art. 131 del [Reglamento General de la Ley de Contratos de las Administraciones Públicas (RD 1098/2001)](https://www.boe.es/eli/es/rd/2001/10/12/1098/con) (obra pública), que fija para los gastos generales un rango del 13% al 17% y para el beneficio industrial el 6%: se toma el **15%, valor intermedio del rango que explicita la Ley**, y el 6% de beneficio industrial — **normativo por analogía**, no una cifra propia del sector arquitectura |
| SMI | 15.120 € (2023) / 15.876 € (2024) / 16.576 € (2025) / 17.094 € (2026–2027) | **Normativo** — [RD 99/2023](https://www.boe.es/buscar/doc.php?id=BOE-A-2023-3982), [BOE-A-2024-2251](https://www.boe.es/buscar/doc.php?id=BOE-A-2024-2251), [BOE-A-2025-2576](https://www.boe.es/buscar/doc.php?id=BOE-A-2025-2576), [BOE-A-2026-3815](https://www.boe.es/buscar/doc.php?id=BOE-A-2026-3815). Sin Real Decreto publicado aún para 2027; se mantiene la cifra de 2026 |
| Tarifa de conversión importe→horas | 50 × 1,21 (IPC italiano 2016→2024) = 60,5 €/h | Extremo inferior de la banda del art. 6.2 del DM 17/6/2016, actualizado — **normativo actualizado** |
| Parámetros V, G, Q, P (modelo italiano): V = PEM, G = grado de complejidad (Tabla Z-1), ΣQ = incidencia agregada de las fases del encargo (Tabla Z-2), P = 0,03 + 10/V^0,4 | Tablas Z-1 y Z-2 | DM 17/6/2016 — **normativo (Italia)**; el G y el ΣQ que usa esta herramienta son una categorización agregada orientativa, no el desglose línea a línea del decreto — ver [Marco Legal]({{ '/marco-legal/' | relative_url }}) |
| DM 2016 O.P. (baja máxima en obra pública) | 65% fijo / 35% con baja posible; 20% en adjudicación directa (< 140.000 €) | Desde el 1/1/2025, el *Codice dei Contratti Pubblici* italiano (D.Lgs. 209/2024, que modifica el D.Lgs. 36/2023) limita la baja admisible sobre la tarifa paramétrica del DM 17/6/2016: en licitación, el 65% de la tarifa es fijo (no rebajable) y solo el 35% restante puede ser objeto de baja, lo que fija el rango máximo de descuento; en adjudicación directa (encargos por debajo de 140.000 €), la baja máxima admitida es del 20% — **normativo (Italia)**, citado como referencia comparada, no aplicable en España |
| % sobre PEM (SEGIPSA) | 6,65%–3,08% según tramo y concepto | [Resolución de 11/5/2015](https://www.boe.es/eli/es/res/2015/05/11/(2)) (BOE 27/5/2015) — **normativo**, verificado contra el texto oficial |

### Detalle de los costes operativos (2023-2026)

Desagregación de los costes operativos del MEF en ocho partidas, cada una con su propia fuente. Ante la ausencia de fuentes oficiales para varias de ellas, se han aceptado fuentes privadas de mercado, señaladas en cada caso. Sustituye a la estimación agregada inicial (17.569 €/año, alquiler 10.500 € + RC 1.000 €).

| Partida | 2023 | 2024 | 2025 | 2026 | Fuente |
|---|---|---|---|---|---|
| Cuota colegial COAM | 230,00 € | 230,00 € | 255,00 € | 262,00 € | [web.archive.org](https://web.archive.org), páginas de cuotas COAM para colegiados residentes (capturas del 31/05/2023 y del 22/01/2025); cifra de 2026 confirmada directamente por el titular del estudio; 2024 repite el valor de 2023 a falta de dato propio para ese ejercicio |
| Seguro de responsabilidad civil profesional | 767,39 € | 788,98 € | 810,00 € | 838,43 € | SEGURCOAM, tabla de primas del seguro de RC profesional del COAM (documento de octubre de 2025), cobertura 190.000 €/facturación ≤150.000 €: 810 €/año (dato real de 2025); 2023, 2024 y 2026 extrapolados aplicando los mismos factores de variación interanual del modelo: 2023→2024 +2,80 %, 2024→2025 +2,69 %, 2025→2026 +3,51 % |
| Local (coworking, puesto fijo + sala de reuniones 4 h/mes) | 4.229,00 € | 4.229,00 € | 4.229,00 € | 4.229,00 € | Informe sectorial Coworking Spain 2025 (puesto fijo) + referencia WeWork (sala de reuniones). Nota: la cifra resultante es equivalente a la media del alquiler de un despacho propio de 20 m² en Madrid (4.200 €/año, CBRE), lo que corrobora la cifra adoptada. Se mantiene fija para los cuatro años: no ha sido posible construir una serie 2023-2026 homogénea de precios de oficina/coworking en Madrid por incompatibilidad metodológica entre fuentes (definiciones de zona «periferia» no comparables entre consultoras) y por limitaciones de extracción de datos de informes históricos (Knight Frank 2023/2024) |
| Vehículo — leasing | 3.534,00 € | 3.534,00 € | 3.534,00 € | 3.534,00 € | Leasing de coche compacto en Madrid, rango de mercado 244-345 €/mes + IVA, adoptado el punto medio (cobertura e impuestos incluidos); cifra fija para los cuatro años. Alternativas: renting todo incluido, 5.108 €/año; carsharing por minuto (Zity, WiBLE, Free2Move, Share Now, GoTo), aplicado al mismo supuesto de uso, ≈3.500 €/año —coincidencia notable con el leasing pese a un modelo de precio completamente distinto—, aunque el carsharing solo cubre desplazamientos dentro del municipio de Madrid |
| Vehículo — combustible | 123,73 € | 128,18 € | 121,63 € | 132,22 € | Precio medio anual de la gasolina 95 (boletín sectorial de precios de carburantes) × consumo de referencia 6 l/100 km × kilometraje anual estimado a partir de la frecuencia propia de visitas de obra (1,5/semana) y de visitas a clientes/administraciones (0,3/semana), con 15,6 km de distancia media ida y vuelta (corroborada independientemente por la Encuesta Domiciliaria de Movilidad EDM 2018 de la Comunidad de Madrid/CRTM) |
| Licencias de software (CAD/BIM + Office 365 + IA generativa) | 2.429,50 € | 2.429,50 € | 2.429,50 € | 2.429,50 € | Media de Revit (2.610 €/año, Autodesk, precio de lista España) y ArchiCAD Studio (1.659 €/año, Graphisoft, precio de lista España) = 2.134,50 €/año, más Microsoft 365 Business Basic 72,84 €/año y suscripción de IA generativa estándar (ChatGPT Plus/Claude Pro) ≈222,16 €/año; precios públicos de suscripción, referencia septiembre de 2026, cifra fija para los cuatro años. Allplan (Nemetschek), tercer modelo BIM considerado, no publica lista de precios (se cotiza por distribuidor) y queda fuera de la media; según G2.com se sitúa un 31% por encima de la media de software BIM comparado (que incluye Revit y ArchiCAD), por lo que la media de dos aquí usada es, si acaso, conservadora a la baja. Sustituye a la cifra anterior de solo Revit (2.765 €/año), que sobrerrepresentaba el software más caro de los tres |
| Equipamiento informático | 889,50 € | 889,50 € | 889,50 € | 889,50 € | Precios de mercado (MediaMarkt y similares), amortizados según vida útil: CPU/torre con GPU dedicada de gama media (≈1.300 €, renovación cada 2 años = 650 €/año); monitor 24″ (≈160 €, renovación cada 5 años = 32 €/año); disco duro externo 2 TB para copias de seguridad (≈65 €, renovación cada 2 años = 32,50 €/año); teléfono móvil de gama media (≈350 €, renovación cada 2 años = 175 €/año). Cifra fija para los cuatro años |
| Otros gastos corrientes | 682,06 € | 701,24 € | 720,00 € | 745,27 € | Hipótesis propia —papelería, consumibles de impresora, equipamiento técnico menor y cuota de telefonía móvil (60 €/mes, base 2025)—, actualizada a los demás años con los factores de variación interanual del modelo |
| **Total costes operativos documentados** | **12.885,18 €** | **12.930,40 €** | **12.988,63 €** | **13.059,92 €** | |

Nota final: el Estado cuenta con información detallada sobre la estructura de gastos de los profesionales autónomos a través de las propias declaraciones de la renta (IRPF), información que no es pública y que, por tanto, no ha podido emplearse como fuente para esta tabla.

### Detalle de las tarifas SEGIPSA (BOE 27/5/2015)

La Sociedad Estatal de Gestión Inmobiliaria de Patrimonio, S.A. (SEGIPSA),
medio propio instrumental de la Administración General del Estado, aplica
estas tarifas porcentuales sobre el Presupuesto de Ejecución Material
(PEM) para la redacción de proyectos y la dirección facultativa de obra
que encomienda la Administración:

| Concepto | Tramo PEM | % sobre PEM |
|---|---|---|
| **Redacción de proyecto** (incl. Estudio de Seguridad y Salud) | Hasta 1.000.000 € | 6,65% |
| | 1.000.001 € – 3.000.000 € | 5,61% |
| | 3.000.001 € – 6.000.000 € | 4,63% |
| | 6.000.001 € – 10.000.000 € | 4,11% |
| | Más de 10.000.000 € | 3,60% |
| **Dirección de obra y dirección de ejecución** (sin coordinación de seguridad y salud) | Hasta 1.000.000 € | 5,68% |
| | 1.000.001 € – 3.000.000 € | 4,77% |
| | 3.000.001 € – 6.000.000 € | 3,97% |
| | 6.000.001 € – 10.000.000 € | 3,53% |
| | Más de 10.000.000 € | 3,08% |

Estos tramos son la referencia empleada —como consulta manual, no de
aplicación automática en todos los casos— en las calculadoras de este
sitio. Es, en la práctica, el mismo mecanismo que las tarifas estatales
históricas de honorarios de arquitecto (1905, 1922, 1977, ver
[Marco Legal]({{ '/marco-legal/' | relative_url }})) —un porcentaje sobre
el coste de la obra, decreciente por tramos—, aplicado hoy por la propia
Administración General del Estado a sus encomiendas de gestión.
[Descargar Resolución SEGIPSA (BOE 27/5/2015)]({{ '/assets/docs/segipsa-boe-2015-es.pdf' | relative_url }})

---

## 2. Derivación del suelo de coste (por año)

1. Retribución bruta de referencia: salario medio de empleados de
   empresas privadas, ACE — **26.462 €/año** (2023, ACE 2022) /
   **31.672 €/año** (2024–2027, ACE 2024).
2. × coeficiente coste-empresa (1,356 — *INE, EACL 2025, sector Servicios*):
   coste bruto para el empleador.
3. ÷ (1.792 horas anuales × 59,3% de facturabilidad — *Deltek Clarity A&E*):
   coste por hora efectivamente facturable.
4. × (1 + 15% GG + 6% BI): añade gastos generales y beneficio industrial
   por analogía con el art. 131 RGLCAP. El 15% de GG es el valor intermedio
   del rango del 13% al 17% que explicita dicho artículo; el 6% de BI es el
   porcentaje que fija el mismo artículo.
5. Resultado: **40,86 €/h** (2023) / **48,90 €/h** (2024–2027).

Este suelo responde a la pregunta "¿cuánto le cuesta a un estudio producir
una hora de trabajo, incluyendo su margen?" — es un suelo de **coste**,
no un suelo antidiscriminatorio. Un honorario por debajo de este suelo no
es necesariamente discriminatorio, pero sí indica un precio inferior al adecuado.

**Nota — porcentaje de gastos generales (5 de octubre de 2026):** hasta esta
fecha el modelo aplicaba el 13% de gastos generales, el extremo inferior del
rango del 13% al 17% que fija expresamente el art. 131 RGLCAP. Se sustituye
por el **15%, valor intermedio de ese rango**, para no situar el modelo en un
extremo del intervalo que la propia norma contempla. El beneficio industrial
se mantiene en el 6%. Efecto: el suelo de coste pasa de 40,18 €/h a 40,86 €/h
(2023) y de 48,09 €/h a 48,90 €/h (2024–2027), y el umbral de cobertura de
costes (sin BI) de 38,16 €/h a 38,83 €/h (2023) y de 45,67 €/h a 46,48 €/h
(2024–2027), es decir, +1,7% y +1,8%. El suelo MEF no se ve afectado: su
fórmula no incluye gastos generales ni beneficio industrial.

**Nota — por qué solo "empleados", sin promediar con directivos/socios:**
hasta octubre de 2026 esta memoria usaba la media entre la retribución de
"empleados" y la de "directivos/socios" del sector privado (ACE 2020). Se
ha corregido: el suelo de coste modela lo que le cuesta a un estudio
producir una hora de trabajo con un equipo — y en un encargo real, la
mayoría de las horas las produce personal empleado (de distintos niveles
de antigüedad, ya agregados en la categoría ACE "empleados de empresas
privadas"), no quien dirige el estudio. Promediar al 50% con la
retribución de un directivo asumía implícitamente que la mitad de las
horas de cualquier encargo las hace el titular, lo que sobrestima el
coste real para un equipo típico. Queda como limitación abierta que, para
un arquitecto autónomo que trabaja en solitario y redacta todas las horas
él mismo, su coste de oportunidad real se parece más al de un "sole
principal" ACE (47.772 €/año en España, 2024) que al de un empleado — ver
sección 5.

**Nota — umbral de cobertura de costes (sin beneficio industrial):** de los
dos componentes del paso 4, solo los gastos generales (GG) son coste real
de explotación del estudio; el beneficio industrial (BI) es margen, no
coste. Si se repite el cálculo aplicando solo el GG (× 1,15, sin el BI),
el resultado es **38,83 €/h** (2023) / **46,48 €/h** (2024–2027): el
umbral por debajo del cual un estudio no cubre siquiera sus costes
reales. Esta distinción es relevante porque el art. 17 de la
[Ley 3/1991, de 10 de enero, de Competencia Desleal](https://www.boe.es/eli/es/l/1991/01/10/3/con)
("venta a pérdida") considera deslealtad vender por debajo de **coste**,
no por debajo de coste más beneficio; el suelo de coste completo (con BI)
es, por tanto, más exigente que el umbral legal de no dumping.

**Nota — por qué el modelo mantiene MEF y antidumping como referencias
"sólidas", y no la Directiva (UE) 2022/2041 (4 de octubre de 2026):**
hasta esta fecha, el estimador y el evaluador incluían una tercera
referencia comparativa, calculada aplicando a la fórmula del suelo MEF el
criterio de adecuación salarial de la Directiva (UE) 2022/2041 (salario
medio del INE en vez de salario de convenio). Se ha retirado: al ser un
suelo de salario mínimo y no de empleo equivalente, quedaba siempre por
debajo del suelo MEF principal sin aportar un umbral adicional distinto,
y su presencia en la gráfica introducía más confusión que valor
informativo. En su lugar, el modelo mantiene **dos** referencias con
fundamento jurídico sólido —MEF (art. 14 CE) y antidumping (art. 17 Ley
3/1991)— frente al suelo de coste con beneficio industrial, cuyo
fundamento es solo una analogía regulatoria (art. 131 RGLCAP, una norma
de contratación pública, no de aplicación directa a honorarios
profesionales). La razón para mantener ambas referencias sólidas, y no
solo una, es que son **complementarias, no redundantes**: la
liberalización de 1997 (Ley 7/1997) sustituyó las tarifas obligatorias
por la premisa de que el arquitecto autónomo actúa como una empresa en
competencia, no como el equivalente funcional de un empleado. Si se
acepta esa premisa empresarial, resulta aplicable la normativa de
competencia desleal —y por tanto el suelo antidumping del art. 17 de la
Ley 3/1991—; MEF, en cambio, parte de la premisa alternativa y en
principio excluyente de que el autónomo debe recibir un trato equivalente
al del trabajador por cuenta ajena (art. 14 CE). Ambas premisas no pueden
ser ciertas a la vez desde el punto de vista conceptual, pero convergen
en el mismo suelo práctico: acéptese la premisa empresarial o la de
equivalencia laboral, el resultado es la necesidad de un suelo
retributivo mínimo. Esto cierra la objeción de que el art. 14 CE "no
sería aplicable" por tratarse de autónomos y no de empleados —la propia
premisa alternativa que sostuvo la liberalización de 1997 conduce, por
otra vía jurídica, al mismo suelo. Ver también
[Marco Legal]({{ '/marco-legal/' | relative_url }}#3-normativa-administrativa-española).

## 3. Derivación del suelo MEF (por año — ver tabla en la sección 6)

1. Salario de referencia del año seleccionado (el de convenio cuando la
   actividad exige legalmente una cualificación o habilitación específica a
   la que se aplica convenio; el SMI cuando no existe tal exigencia) + cotización empresarial (33,01% del salario base) +
   costes operativos de Madrid del año correspondiente (12.885,18 €-13.059,92 €,
   ver tabla en la sección 1).
2. ÷ (1.792 horas anuales × 59,3% de facturabilidad — *Deltek Clarity
   A&E*): coste por hora efectivamente facturable.
3. Resultado: el suelo antidiscriminatorio propiamente dicho (base
   convenio) — la comparación directa con lo que costaría contratar a un
   profesional empleado con la misma cualificación — y, con base SMI, el
   umbral absoluto. Los valores para 2024–2027 están en la sección 6.

Este suelo es el fundamento de HME: el trabajador autónomo no debería
cobrar, por trabajo equivalente, menos remuneración neta que la que
recibiría por el mismo trabajo un trabajador asalariado.

**Nota — corrección de facturabilidad (4 de octubre de 2026):** hasta
esta actualización, el paso 2 dividía directamente por 1.792 horas
anuales, sin descontar la fracción no facturable. Esto era inconsistente
con el resto del modelo: las horas de la estimación HME (sección 4) se
obtienen dividiendo el honorario de Italia por una tarifa comercial
(60,5 €/h) que ya es una tarifa *facturable*, y el suelo de coste (sección 2)
sí aplica esta misma facturabilidad del 59,3% antes de añadir el margen.
Multiplicar horas facturables por un suelo MEF calculado sobre horas
totales trabajadas (sin descontar la parte no facturable) infla
artificialmente el reparto del coste entre menos horas de las que
realmente lo soportan, y rebajaba el suelo MEF resultante en un factor
constante de 1/0,593 ≈ 1,69 frente a lo que debería ser. La corrección
eleva el suelo MEF de 28,84 €/h a 48,64 €/h (2024, base convenio) y lo
sitúa, como es esperable, muy cerca del suelo de coste (48,90 €/h,
2024) — pese a que el MEF no incluye el 15%/6% de gastos generales y
beneficio industrial que sí lleva el suelo de coste. La proximidad entre
ambos suelos tras la corrección es una comprobación de consistencia
interna del modelo, no una coincidencia buscada.

**Nota — contraste de la partida de software (4 de octubre de 2026):**
la partida "Licencias de software" de los costes operativos (sección 1)
usaba inicialmente solo el precio de Revit (2.765 €/año), el más caro de
los tres modelos BIM de trabajo habituales en el sector. Para una cifra
menos cuestionable, se sustituye por la media de precios públicos de
lista de Revit (2.610 €/año, Autodesk) y ArchiCAD Studio (1.659 €/año,
Graphisoft) — 2.134,50 €/año —; Allplan (Nemetschek), el tercer modelo
considerado, no publica lista de precios. Esto reduce los costes
operativos en 630,50 €/año (cifra fija, igual en los cuatro años) y, con
ello, el suelo MEF: 48,64 €/h → 48,05 €/h (2024, base convenio). El
suelo de coste (48,90 €/h) no se ve afectado, al no derivarse de esta
tabla de costes operativos — ver sección 2.

## 4. Estimación automática de horas del encargo (HME)

Se explica en detalle en la página del [Evaluador]({{ '/herramientas/evaluador/' | relative_url }}#metodología):
en síntesis, se aplica la fórmula del propio DM 17/6/2016 —
**CP = V·G·ΣQ·P**, con los gastos forfettari del art. 5— al PEM
introducido, donde:

- **V** = el PEM (valor de la obra) introducido por el usuario.
- **G** = grado di complessità, leído de la Tabla Z-1 según la
  tipología y el grado de complejidad elegidos.
- **ΣQ** = incidencia agregada de las fases del encargo (Tabla Z-2),
  según el alcance seleccionado (redacción, dirección, o ambos, con o
  sin coordinación de seguridad).
- **P** = 0,03 + 10/V^0,4, el parámetro paramétrico decreciente del
  propio decreto en función de V.

El resultado (CP, en euros) se convierte a horas dividiendo por la
tarifa de conversión de 60,5 €/h.

---

## 5. Limitaciones explícitas

- Los datos marcados como **hipótesis propia** son editables y
  discutibles: representan una estimación razonable y documentada, no un
  hecho normativo. Quien discrepe de alguno puede recalcular el suelo con
  sus propios valores.
- El *benchmark* de facturabilidad (59,3%, segmento Architecture/A-E,
  ejercicio fiscal 2025) procede de una fuente de industria estadounidense
  (Deltek Clarity A&E), no de datos oficiales españoles, a falta de un
  estudio equivalente publicado en España. Es una cifra anual del sector,
  que varía de un ejercicio a otro; conviene revisar la edición más
  reciente del estudio periódicamente.
- El coeficiente coste-empresa (1,356) procede del ratio coste bruto /
  sueldos y salarios del sector Servicios en la EACL 2025 del INE, no de
  un dato específico de estudios de arquitectura ni de despachos
  profesionales; conviene revisar la edición más reciente de la EACL
  periódicamente.
- Los costes operativos (12.885,18 €-13.059,92 €/año según el ejercicio)
  están calculados para Madrid; en otras ciudades o regiones el suelo de
  coste variará. Desde esta actualización están desagregados en ocho
  partidas con fuente específica para cada una (cuota colegial, seguro de
  RC, local, vehículo, licencias de software, equipamiento informático,
  otros gastos corrientes) — ver tabla completa y fuentes en la sección 1.
  Ante la ausencia de fuentes oficiales para varias partidas se han
  aceptado fuentes privadas de mercado, señaladas en cada caso.
- La retribución bruta de referencia (ACE, "empleados de empresas
  privadas") modela el coste de un equipo típico, no el coste de
  oportunidad de un arquitecto autónomo que trabaja en solitario — para
  ese caso, su coste real se aproxima más al de un "sole principal" ACE
  (47.772 €/año en España, 2024), sensiblemente más alto — ver nota en
  la sección 2.
- La categorización de tipología/complejidad (parámetro G) y el ΣQ del
  alcance del encargo son simplificaciones orientativas de las Tablas Z-1
  y Z-2 del DM 17/6/2016, no el desglose oficial completo por
  subcategoría.
- El SMI y las tarifas de conversión deben actualizarse periódicamente
  conforme al IPC; las cifras aquí reflejan los últimos valores
  verificados.

---

## 6. Datos y resultados por año (2023–2027)

Las dos calculadoras permiten elegir un año de referencia porque el
salario de convenio, el SMI y la facturabilidad Deltek se publican (o no)
año a año — a diferencia del modelo italiano o de SEGIPSA, que no dependen
del año elegido en esta herramienta, aunque sí se actualizan de facto con
la inflación de la construcción, al calcularse como un porcentaje sobre
el PEM. El estimador de banda usa por defecto el año en curso; el
evaluador de indicios exige elegir un año explícitamente, sin valor por
defecto, para no dar por supuesto un ejercicio en un cálculo comparativo.

| Año | Salario convenio | SMI | Costes operativos | Suelo MEF (convenio) | Suelo MEF (SMI) | Suelo de coste | Notas |
|---|---|---|---|---|---|---|---|
| 2023 | 28.027 € | 15.120 € | 12.885,18 € | 47,21 €/h | 31,05 €/h | 40,86 €/h | Salario de convenio y SMI son cifras oficiales de 2023; costes operativos con la tabla de 8 partidas (sección 1); suelo de coste con retribución de referencia ACE **2022** (empleados, España); facturabilidad y coeficiente coste-empresa sin edición propia de ese ejercicio, se usan las mismas FY2025 Deltek / EACL 2025 que en el resto de años |
| 2024 | 28.664 € | 15.876 € | 12.930,40 € | 48,05 €/h | 32,04 €/h | 48,90 €/h | Todos los datos son cifras oficiales o el benchmark de referencia (FY2025 Deltek, EACL 2025, ACE **2024**) verificadas para este ejercicio; costes operativos con la tabla de 8 partidas (sección 1) |
| 2025 | 28.664 € *(sin tabla pactada; se mantiene 2024)* | 16.576 € | 12.988,63 € | 48,10 €/h | 32,97 €/h | 48,90 €/h | SMI oficial de 2025; costes operativos con la tabla de 8 partidas (sección 1); suelo de coste con retribución ACE 2024 (sin edición propia de 2025); facturabilidad y coeficiente coste-empresa con las últimas ediciones publicadas (Deltek FY2025, EACL 2025) |
| 2026 | 28.664 € *(sin tabla pactada; se mantiene 2024)* | 17.094 € | 13.059,92 € | 48,17 €/h | 33,69 €/h | 48,90 €/h | SMI oficial de 2026; costes operativos con la tabla de 8 partidas (sección 1); suelo de coste con retribución ACE 2024 (sin edición propia de 2026); facturabilidad y coeficiente coste-empresa sin edición más reciente, se mantienen Deltek FY2025 / EACL 2025 |
| 2027 | 28.664 € *(sin tabla pactada; se mantiene 2024)* | 17.094 € *(sin RD publicado; se mantiene 2026)* | 13.059,92 € *(sin dato propio; se mantiene 2026)* | 48,17 €/h | 33,69 €/h | 48,90 €/h | Año sin ningún dato propio publicado todavía; todas las cifras son la última disponible, incluida la retribución ACE 2024 del suelo de coste |

Desde octubre de 2026, el suelo de coste **sí varía por año**: se
encadena a la edición de ACE más reciente con dato disponible para cada
ejercicio (2022 para 2023; 2024 para 2024–2027, hasta que se publique
una nueva edición), igual que ya se hacía con el salario de convenio y
el SMI. Antes se usaba una única cifra fija (ACE 2020), explícitamente
sin encadenar, porque el dato combinado con "directivos/socios" mostraba
oscilaciones fuertes entre ediciones que parecían poco fiables para
actualizar automáticamente. Al limitar la retribución de referencia a la
categoría "empleados de empresas privadas" (ver nota en la sección 2),
se elimina ese componente más volátil — aunque el dato de empleados
tampoco es perfectamente estable: en España pasa de 26.462 €/año (ACE
2022) a 31.672 €/año (ACE 2024), un +19,7% en dos ediciones, dentro del
mismo orden de magnitud que el crecimiento salarial general del sector
en ese periodo. Se encadena de todos modos porque es, igual que el
salario de convenio o el SMI, la mejor cifra específica del año
disponible — con la salvedad, ya señalada en la sección 5, de que el
tamaño de muestra de ACE en España (198–847 respuestas según la edición,
margen de error ±3,3% a ±7,0% al 95% de confianza) sigue introduciendo
ruido año a año.

Desde esta misma actualización, el suelo MEF **también varía por año**,
al depender ahora de los costes operativos desagregados (sección 1), que
sí tienen variación interanual real en varias de sus partidas (seguro de
RC, combustible) en lugar de la cifra fija de 17.569 €/año usada hasta
ahora.

La cotización empresarial se calcula como un porcentaje fijo (33,01%) del
salario base de cada año, sin modelar el incremento anual del Mecanismo
de Equidad Intergeneracional (MEI), que sube ligeramente el tipo de
cotización cada ejercicio; es una simplificación deliberada, coherente
con el resto de "hipótesis propia" del modelo.

---

## 7. Referencias externas de contraste

### 7.1 Tarifas de mercado (ACE Sector Study 2024)

Como referencia independiente, el estudio *ACE Sector Study 2024* (Mirza
& Nacey Research Ltd, abril 2025) recoge en su Tabla 3-5 las tarifas
horarias de facturación medias que efectivamente aplican los estudios de
arquitectura en España, por categoría profesional:

| Categoría | €/h ajustado por PPA | €/h sin ajustar |
|---|---|---|
| Principales (socios/directores) | 41 | 39 |
| Empleados arquitectos | 37 | 35 |
| Delineantes/técnicos | 26 | 25 |

Son tarifas de mercado (lo que de hecho se factura a clientes), no de
coste, por lo que no son directamente equivalentes al suelo MEF ni al
suelo de coste de esta memoria — pero su comparación es reveladora: la
tarifa media de mercado para principales en España (39–41 €/h) queda
**por debajo** tanto del suelo MEF (47,21-48,17 €/h, según el año) como
del umbral de cobertura de costes sin beneficio industrial (46,48 €/h,
2024, ver sección 2) y del suelo de coste completo (48,90 €/h, 2024).
Es decir, la tarifa media que de hecho se cobra en el mercado español no
llega a cubrir ni el coste real de producir esa hora ni, con el suelo
MEF corregido (sección 3), el equivalente a lo que costaría contratar a
un profesional empleado con la misma cualificación — lo que es coherente
con el diagnóstico de fondo de esta memoria: los honorarios de mercado
tienden a situarse por debajo del coste real del servicio.

Fuente: *The Architectural Profession in Europe 2024*, Mirza & Nacey
Research Ltd, abril 2025, Tabla 3-5, p. 40.

### 7.2 Valores orientativos de la Directiva (UE) 2022/2041

El art. 5.4 de la [Directiva (UE) 2022/2041 del Parlamento Europeo y del
Consejo, de 19 de octubre de 2022, relativa a unos salarios mínimos
adecuados en la Unión Europea](https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32022L2041)
establece que los Estados miembros podrán utilizar valores de referencia
indicativos de uso internacional para evaluar la adecuación de sus
salarios mínimos legales: el 60% de la mediana salarial bruta o el 50%
del salario medio bruto. Esta memoria no aplica ese 60%/50% como un
descuento adicional, sino como justificación de usar directamente la
mediana y la media del INE como salario de referencia: si un salario
mínimo por debajo del 60% de la mediana se considera inadecuado según
la Directiva, un salario de referencia **igual** a la mediana (muy por
encima de ese umbral) es, con más razón, una base defendible para el
HME. Aplicados así al salario bruto mediano y medio de España en 2024
(INE, *Decil de salarios del empleo principal*, nota de prensa de
14/11/2025), se obtienen los siguientes HME orientativos:

| | A partir del salario mediano | A partir del salario medio |
|---|---|---|
| Salario de referencia (mediana / media INE) | 2.001,40 €/mes · 24.016,80 €/año | 2.385,60 €/mes · 28.627,20 €/año |
| Gastos de explotación y Seguridad Social | 17.294,54 €/año | 18.816,00 €/año |
| HME resultante | 41.311,34 €/año | 47.443,20 €/año |
| HME por hora trabajada (jornada de 1.760 h/año) | 23,47 €/h | 26,96 €/h |
| HME por hora facturable (1.760 h × 59,3% de facturabilidad) | 39,58 €/h | 45,46 €/h |

Esta estimación usa una jornada anual (1.760 h) y una composición de
gastos de explotación y Seguridad Social distintas de las de esta
memoria (1.792 h, 33,01% de cotización + 12.885,18 €-13.059,92 €/año de
costes operativos de Madrid, según el ejercicio), por lo que no es
directamente sustituible por el suelo MEF de las secciones 2 y 3. Dividida
por la facturabilidad del 59,3% (Deltek Clarity A&E) para mantener la
misma base de horas que el resto de esta memoria, da como resultado "por
hora facturable" 39,58 €/h (a partir del salario mediano) y 45,46 €/h (a
partir del salario medio). Ambos enfoques —convenio colectivo/SMI, por un
lado, y los valores orientativos del art. 5.4 de la Directiva, por otro—
sitúan el suelo antidiscriminatorio de un arquitecto en ejercicio
independiente en un rango similar, de aproximadamente 33 a 49 €/h sobre
hora facturable, según la base salarial de referencia elegida. Esta
referencia se mantiene aquí como contraste analítico, pero —desde el 4 de
octubre de 2026— ya no se muestra como línea discontinua en las
calculadoras del estimador y el evaluador (ver nota en la sección 2):
al ser un suelo de salario mínimo y no de empleo equivalente, quedaba
siempre por debajo del suelo MEF principal sin aportar un umbral
adicional distinto, y el modelo prioriza las dos referencias con
fundamento jurídico sólido (MEF y antidumping).

Fuente: elaboración propia a partir del salario bruto mediano y medio en
España en 2024, [INE, Decil de salarios del empleo principal, nota de
prensa de 14 de noviembre de 2025](https://www.ine.es/dyngs/Prensa/dsEPA2024.htm).

---

## Más información

[**Evaluador de indicios de discriminación →**]({{ '/herramientas/evaluador/' | relative_url }})
[**Estimador de banda de honorarios →**]({{ '/herramientas/estimacion/' | relative_url }})
[**Comparación histórica de las normas de honorarios (1905–1977) →**]({{ '/herramientas/normas-historicas/' | relative_url }})
[**Ver Marco Legal completo →**]({{ '/marco-legal/' | relative_url }})

---

**Publicada**: septiembre de 2026 · **Última actualización**: 5 de octubre de 2026
