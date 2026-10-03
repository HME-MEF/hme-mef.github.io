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
| Costes operativos (Madrid) | 17.569 €/año (alquiler 10.500 €, responsabilidad civil 1.000 €, resto) | Valores medios de mercado en Madrid — **hipótesis propia**, conservadora y editable; sin año de referencia único, se aplica igual a los cuatro años del selector |
| Horas anuales | 1.792 h | Jornada máxima del convenio de ingeniería y oficinas técnicas — **convencional** |
| Facturabilidad (utilization rate) | 59,3% (2024–2027) | Segmento "Architecture or A/E", ejercicio fiscal **2025** — *47th Annual Deltek Clarity A&E Industry Study* (Deltek / CMG Consulting), tabla "Statistics at a Glance", p. 122 (la mediana narrativa de todo el sector A&E, no solo arquitectura, es 58,9%, p. 99) — **benchmark de industria, EE.UU.**, no es un dato oficial español ([informe completo](https://info.deltek.com/47th-Annual-Deltek-Clarity-AE-Report-PDF)). Único dato específico de arquitectura publicado; se aplica igual a los cuatro años del selector — ver sección 6 |
| Retribución bruta de referencia (suelo de coste) | 29.496,50 €/año | Media entre dos categorías del sector privado, ACE **2020**: administrador único/socios/directivos/alta dirección (32.178 €) y empleados de empresas privadas (26.815 €) — **hipótesis propia**, con datos de partida de *The Architectural Profession in Europe 2020: A Sector Study* (Mirza & Nacey Research Ltd, 2021, p. 55), Architects' Council of Europe |
| Coeficiente coste-empresa | 1,356 | Ratio coste bruto / sueldos y salarios, sector Servicios — [INE, Encuesta Anual de Coste Laboral (EACL), año 2025, Tabla 1](https://www.ine.es/dyngs/Prensa/EACL2025.htm) (37.717,75 € / 27.817,39 €) — **benchmark de industria (España)**; el INE no desglosa por rama de actividad más fina, así que se toma el conjunto de Servicios como proxy del sector arquitectura |
| Gastos generales / beneficio industrial (suelo de coste) | 13% / 6% | Por analogía con el art. 131 RGLCAP (obra pública) — **normativo por analogía**, no una cifra propia del sector arquitectura |
| SMI | 15.120 € (2023) / 15.876 € (2024) / 16.576 € (2025) / 17.094 € (2026–2027) | **Normativo** — [RD 99/2023](https://www.boe.es/buscar/doc.php?id=BOE-A-2023-3982), [BOE-A-2024-2251](https://www.boe.es/buscar/doc.php?id=BOE-A-2024-2251), [BOE-A-2025-2576](https://www.boe.es/buscar/doc.php?id=BOE-A-2025-2576), [BOE-A-2026-3815](https://www.boe.es/buscar/doc.php?id=BOE-A-2026-3815). Sin Real Decreto publicado aún para 2027; se mantiene la cifra de 2026 |
| Tarifa de conversión importe→horas | 50 × 1,21 (IPC italiano 2016→2024) = 60,5 €/h | Extremo inferior de la banda del art. 6.2 del DM 17/6/2016, actualizado — **normativo actualizado** |
| Parámetros V, G, Q, P (modelo italiano) | Tablas Z-1 y Z-2 | DM 17/6/2016 — **normativo (Italia)**; el G y el ΣQ que usa esta herramienta son una categorización agregada orientativa, no el desglose línea a línea del decreto — ver [Marco Legal]({{ '/marco-legal/' | relative_url }}) |
| DM 2016 O.P. (baja máxima en obra pública) | 65% fijo / 35% con baja posible; 20% en adjudicación directa (< 140.000 €) | Desde el 1/1/2025, el *Codice dei Contratti Pubblici* italiano (D.Lgs. 209/2024, que modifica el D.Lgs. 36/2023) limita la baja admisible sobre la tarifa paramétrica del DM 17/6/2016: en licitación, el 65% de la tarifa es fijo (no rebajable) y solo el 35% restante puede ser objeto de baja, lo que fija el rango máximo de descuento; en adjudicación directa (encargos por debajo de 140.000 €), la baja máxima admitida es del 20% — **normativo (Italia)**, citado como referencia comparada, no aplicable en España |
| % sobre PEM (SEGIPSA) | 6,65%–3,08% según tramo y concepto | Resolución de 11/5/2015 (BOE 27/5/2015) — **normativo**, verificado contra el texto oficial |

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

## 2. Derivación del suelo de coste (44,79 €/h)

1. Retribución bruta de referencia: **29.496,50 €/año**.
2. × coeficiente coste-empresa (1,356 — *INE, EACL 2025, sector Servicios*):
   coste bruto para el empleador.
3. ÷ (1.792 horas anuales × 59,3% de facturabilidad — *Deltek Clarity A&E*):
   coste por hora efectivamente facturable.
4. × (1 + 13% GG + 6% BI): añade gastos generales y beneficio industrial
   por analogía con el art. 131 RGLCAP.
5. Resultado: **44,79 €/h**.

Este suelo responde a la pregunta "¿cuánto le cuesta a un estudio producir
una hora de trabajo, incluyendo su margen?" — es un suelo de **coste**,
no un suelo antidiscriminatorio. Un honorario por debajo de este suelo no
es necesariamente discriminatorio, pero sí indica un precio inferior al adecuado.

## 3. Derivación del suelo MEF (por año — ver tabla en la sección 6)

1. Salario de referencia del año seleccionado (convenio; o SMI, según la
   base elegida) + cotización empresarial (33,01% del salario base) +
   costes operativos de Madrid (17.569 €).
2. ÷ 1.792 horas anuales.
3. Resultado: el suelo antidiscriminatorio propiamente dicho (base
   convenio) — la comparación directa con lo que costaría contratar a un
   profesional empleado con la misma cualificación — y, con base SMI, el
   umbral absoluto. Los valores para 2024–2027 están en la sección 6.

Este suelo es el fundamento de HME: el trabajador autónomo no debería
cobrar, por trabajo equivalente, menos remuneración neta que la que
recibiría por el mismo trabajo un trabajador asalariado.

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
- Los costes operativos (17.569 €/año) están calculados para Madrid; en
  otras ciudades o regiones el suelo de coste variará.
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
del año elegido. El estimador de banda usa por defecto el año en curso; el
evaluador de indicios exige elegir un año explícitamente, sin valor por
defecto, para no dar por supuesto un ejercicio en un cálculo comparativo.

| Año | Salario convenio | SMI | Suelo MEF (convenio) | Suelo MEF (SMI) | Suelo de coste | Notas |
|---|---|---|---|---|---|---|
| 2023 | 28.027 € | 15.120 € | 30,61 €/h | 21,03 €/h | 44,79 €/h | Salario de convenio y SMI son cifras oficiales de 2023; facturabilidad y coeficiente coste-empresa sin edición propia de ese ejercicio, se usan las mismas FY2025 Deltek / EACL 2025 que en el resto de años |
| 2024 | 28.664 € | 15.876 € | 31,08 €/h | 21,59 €/h | 44,79 €/h | Todos los datos son cifras oficiales o el benchmark de referencia (FY2025 Deltek, EACL 2025) verificadas para este ejercicio |
| 2025 | 28.664 € *(sin tabla pactada; se mantiene 2024)* | 16.576 € | 31,08 €/h | 22,11 €/h | 44,79 €/h | SMI oficial de 2025; facturabilidad y coeficiente coste-empresa con las últimas ediciones publicadas (Deltek FY2025, EACL 2025) |
| 2026 | 28.664 € *(sin tabla pactada; se mantiene 2024)* | 17.094 € | 31,08 €/h | 22,49 €/h | 44,79 €/h | SMI oficial de 2026; facturabilidad y coeficiente coste-empresa sin edición más reciente, se mantienen Deltek FY2025 / EACL 2025 |
| 2027 | 28.664 € *(sin tabla pactada; se mantiene 2024)* | 17.094 € *(sin RD publicado; se mantiene 2026)* | 31,08 €/h | 22,49 €/h | 44,79 €/h | Año sin ningún dato propio publicado todavía; todas las cifras son la última disponible |

El suelo de coste no varía entre 2023 y 2027 porque sus tres únicos
insumos sensibles al año —la retribución bruta de referencia (ACE 2020,
hipótesis propia sin serie anual), la facturabilidad Deltek (FY2025,
único dato específico de arquitectura disponible) y el coeficiente
coste-empresa (EACL 2025, sector Servicios)— se mantienen constantes por
falta de una serie temporal aplicada. El selector de año queda preparado
para reflejar el cambio automáticamente en cuanto se disponga de una
nueva edición del estudio Deltek, de la EACL, o de una hipótesis propia
actualizada de retribución bruta.

La cotización empresarial se calcula como un porcentaje fijo (33,01%) del
salario base de cada año, sin modelar el incremento anual del Mecanismo
de Equidad Intergeneracional (MEI), que sube ligeramente el tipo de
cotización cada ejercicio; es una simplificación deliberada, coherente
con el resto de "hipótesis propia" del modelo.

---

## Más información

[**Evaluador de indicios de discriminación →**]({{ '/herramientas/evaluador/' | relative_url }})
[**Estimador de banda de honorarios →**]({{ '/herramientas/estimacion/' | relative_url }})
[**Comparación histórica de las normas de honorarios (1905–1977) →**]({{ '/herramientas/normas-historicas/' | relative_url }})
[**Ver Marco Legal completo →**]({{ '/marco-legal/' | relative_url }})

---

**Última actualización**: Octubre 2026
