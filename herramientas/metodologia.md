---
layout: page
title: "Memoria técnica de la calculadora"
---

# Memoria técnica del modelo de cálculo

Este documento explica el origen y el estatus de cada dato que emplean el
[evaluador de indicios de discriminación retributiva]({{ '/herramientas/' | relative_url }})
y el [estimador de banda de honorarios]({{ '/herramientas/estimacion/' | relative_url }}),
para que quien las use pueda distinguir qué es una cifra normativa, qué es
un benchmark de industria no oficial, y qué es una hipótesis propia
—editable y discutible— del modelo. Ambas herramientas comparten el mismo
motor de cálculo (estimación de horas, suelo de coste, suelo MEF).

No es una tarifa ni un baremo: es una metodología de justificación de
coste, construida por capas explícitas.

---

## 1. Tabla de fuentes

| Dato | Valor | Estatus |
|---|---|---|
| Salario de referencia (convenio) | 28.664 €/año | Convenio colectivo de ingeniería y oficinas técnicas de proyectos (nivel GI-N1) — **convencional** |
| Cotización empresarial | 9.459 €/año | Cálculo normativo de Seguridad Social sobre el salario de convenio — **normativo** |
| Costes operativos (Madrid) | 17.569 €/año (alquiler 10.500 €, responsabilidad civil 1.000 €, resto) | Valores medios de mercado en Madrid — **hipótesis propia**, conservadora y editable |
| Horas anuales | 1.792 h | Jornada máxima del convenio de ingeniería y oficinas técnicas — **convencional** |
| Facturabilidad (utilization rate) | 70% | Deltek Clarity A&E (*benchmark* de industria, EE.UU.) — **no es un dato oficial español** |
| Retribución bruta de referencia (suelo de coste) | 38.345 €/año | Media entre ACE 2020 empleo público (44.512 €) y dirección de estudio privado (32.178 €) — **hipótesis propia**, con dato de partida del Architects' Council of Europe |
| Coeficiente coste-empresa | 1,32 | Cotizaciones, pagas extra, IT — **hipótesis propia** |
| Gastos generales / beneficio industrial (suelo de coste) | 13% / 6% | Por analogía con el art. 131 RGLCAP (obra pública) — **normativo por analogía**, no una cifra propia del sector arquitectura |
| SMI | Anual, BOE | **Normativo**, debe actualizarse cada año |
| Tarifa de conversión importe→horas | 50 × 1,21 (IPC italiano 2016→2024) = 60,5 €/h | Extremo inferior de la banda del art. 6.2 del DM 17/6/2016, actualizado — **normativo actualizado** |
| Parámetros V, G, Q, P (modelo italiano) | Tablas Z-1 y Z-2 | DM 17/6/2016 — **normativo (Italia)**; el G y el ΣQ que usa esta herramienta son una categorización agregada orientativa, no el desglose línea a línea del decreto — ver [Marco Legal]({{ '/marco-legal/' | relative_url }}) |
| % sobre PEM (SEGIPSA) | 6,65%–3,08% según tramo y concepto | Resolución de 11/5/2015 (BOE 27/5/2015) — **normativo**, verificado contra el texto oficial |

---

## 2. Derivación del suelo de coste (49,50 €/h)

1. Retribución bruta de referencia: **38.345 €/año**.
2. × coeficiente coste-empresa (1,32): coste bruto para el empleador.
3. ÷ (1.792 horas anuales × 70% de facturabilidad): coste por hora
   efectivamente facturable.
4. × (1 + 13% GG + 6% BI): añade gastos generales y beneficio industrial
   por analogía con el art. 131 RGLCAP.
5. Resultado: **49,50 €/h**.

Este suelo responde a la pregunta "¿cuánto le cuesta a un estudio producir
una hora de trabajo, incluyendo su margen?" — es un suelo de **coste**,
no un suelo antidiscriminatorio. Un honorario por debajo de este suelo no
es necesariamente discriminatorio, pero sí indica un precio inadecuado.

## 3. Derivación del suelo MEF (31,08 €/h convenio / 21,59 €/h SMI)

1. Salario de referencia (convenio: 28.664 €; o SMI, según la base
   elegida) + cotización empresarial (9.459 €) + costes operativos de
   Madrid (17.569 €).
2. ÷ 1.792 horas anuales.
3. Resultado: **31,08 €/h** (base convenio) — el suelo antidiscriminatorio
   propiamente dicho, la comparación directa con lo que costaría contratar
   a un profesional empleado con la misma cualificación.
   Con base SMI: **21,59 €/h**, el umbral absoluto.

Este suelo es el fundamento de HME: el trabajador autónomo no debería
cobrar, por trabajo equivalente, menos que lo que le costaría al mismo
cliente contratar a un empleado.

## 4. Estimación automática de horas del encargo (HME)

Se explica en detalle en la página de [Herramientas]({{ '/herramientas/' | relative_url }}#metodología):
en síntesis, se aplica la fórmula del propio DM 17/6/2016
(CP = V·G·ΣQ·P, con los gastos forfettari del art. 5) al PEM introducido,
y el resultado se convierte a horas dividiendo por la tarifa de
conversión de 60,5 €/h. Es el mismo cálculo ya validado en el caso de
referencia (Ripollet / Santa Margarida).

---

## 5. Limitaciones explícitas

- Los datos marcados como **hipótesis propia** son editables y
  discutibles: representan una estimación razonable y documentada, no un
  hecho normativo. Quien discrepe de alguno puede recalcular el suelo con
  sus propios valores.
- El *benchmark* de facturabilidad (70%) procede de una fuente de
  industria estadounidense (Deltek Clarity A&E), no de datos oficiales
  españoles, a falta de un estudio equivalente publicado en España.
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

## Más información

[**Evaluador de indicios de discriminación →**]({{ '/herramientas/' | relative_url }})
[**Estimador de banda de honorarios →**]({{ '/herramientas/estimacion/' | relative_url }})
[**Ver Marco Legal completo →**]({{ '/marco-legal/' | relative_url }})

---

**Última actualización**: Septiembre 2026
