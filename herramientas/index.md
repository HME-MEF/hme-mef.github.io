---
layout: page
title: "Herramientas"
---

# Herramientas

## Evaluador de indicios de discriminación retributiva en encargos de arquitectura

Esta herramienta tiene un alcance **deliberadamente acotado**. No es una
calculadora de honorarios para cualquier profesión ni un simulador de
tarifas orientativas. Sirve para un único propósito:

> Evaluar, a partir del Presupuesto de Ejecución Material (PEM) de una
> edificación, si el honorario ofertado o adjudicado para la **redacción
> del proyecto** y/o la **dirección de obra** de un arquitecto —en
> concurso público o en encargo de empresa privada— presenta indicios de
> infravaloración incompatible con el suelo antidiscriminatorio de
> Honorarios Mínimos Equivalentes (MEF).

No calcula honorarios "recomendados" ni sustituye ningún baremo. Compara
una cifra concreta (la ofertada o adjudicada) frente a dos suelos de
referencia objetivos, derivados de fuentes normativas y de coste, no de
un criterio colegial.

### Alcance

- **Encargo**: redacción de proyecto, dirección facultativa de obra, o
  ambos.
- **Procedimiento**: concurso público (licitación) o encargo directo de
  empresa privada.
- **Tipología**: edificación, en función de su PEM.
- **No cubre**: urbanismo, informes periciales, tasaciones, ni encargos
  de otras profesiones.

<div style="margin:24px 0;">
  <iframe src="{{ '/herramientas/calculadora-indicios.html' | relative_url }}"
          style="width:100%; height:1550px; border:none; border-radius:8px;"
          title="Evaluador de indicios de discriminación retributiva">
  </iframe>
</div>

---

### Metodología

La herramienta calcula dos suelos propios y sitúa el importe evaluado
frente a ellos:

- **Suelo de coste** (49,50 €/h): horas estimadas del encargo (HME) ×
  tarifa horaria de coste, derivada de la retribución media ACE 2020
  entre empleo público y dirección de estudio privado, con gastos
  generales 13% y beneficio industrial 6% (por analogía con el art. 131
  RGLCAP).
- **Suelo MEF** (31,08 €/h sobre salario de convenio; 21,59 €/h sobre
  SMI): HME × tarifa MEF/h — el suelo antidiscriminatorio propiamente
  dicho.

Las tablas de referencia (SEGIPSA, DM italiano) se muestran como
consulta manual, no se aplican automáticamente. Los tramos de SEGIPSA
están verificados directamente contra la Resolución de 11/5/2015 (BOE
27/5/2015) — ver [Marco Legal]({{ '/marco-legal/' | relative_url }}) —,
pero no se aplican de forma automática porque tarifan encomiendas de
gestión de la propia Administración, no cualquier encargo evaluado aquí.
Los parámetros de complejidad G/Q del modelo italiano requieren
identificar la categoría de edificio concreta en la tabla oficial
completa (Tablas Z-1 y Z-2 del DM 17/6/2016), que no se simplifica aquí
para no introducir umbrales aproximados. El usuario introduce
directamente su propia estimación de horas del encargo (HME), pudiendo
contrastarla con esas tablas — por ejemplo, dividiendo un importe de
referencia entre 60,5 €/h (extremo inferior de la banda del art. 6.2 del
DM italiano, actualizado por IPC italiano 2016→2024).

### Diagnóstico

| Resultado | Diagnóstico |
|---|---|
| Por encima del suelo de coste | Adecuado |
| Entre el suelo MEF y el suelo de coste | Ajustado — revisar |
| Por debajo del suelo MEF | Indicio de discriminación retributiva |

### Caso de referencia

El modelo se ha validado con dos contratos reales de redacción de
proyecto recogidos por el Observatorio de Honorarios del COAM
(26/5/2025):

| Concepto | Ripollet (Biblioteca) | Sta. Margarida (Comisaría) |
|---|---|---|
| PEM | 2.966.214 € | 1.287.888 € |
| Redacción adjudicada (% PEM) | 6,64% (196.950 €) | 3,15% (40.597 €) |
| Referencia italiana | 7,12% (211.302 €) | 6,73% (86.654 €) |
| €/h implícito pagado | 56,4 €/h | 28,3 €/h |
| Suelo MEF | 31,08 €/h | 31,08 €/h |
| Diagnóstico | Adecuado | **Indicio de discriminación** |

En Santa Margarida, la Administración pagó menos de la mitad de
cualquier referencia de valor, y por debajo del suelo MEF calculado
incluso con costes conservadores.

### Advertencias

- Esta herramienta **no es asesoramiento jurídico** ni un baremo de
  honorarios.
- Los valores monetarios (SMI, convenio, tarifas) deben actualizarse
  periódicamente conforme al IPC.
- El vehículo admisible para un suelo retributivo es la norma estatal o
  el control de la contratación pública (oferta anormalmente baja,
  art. 149 LCSP) — nunca una tabla de origen colegial.
- Un resultado "indicio de discriminación" no acredita por sí solo una
  infracción; es un punto de partida para revisar el expediente.

---

## Más información

[**Ver Marco Legal completo →**]({{ '/marco-legal/' | relative_url }})
[**Leer artículo académico →**]({{ '/publicaciones/' | relative_url }})
[**Preguntas frecuentes →**]({{ '/recursos/faq/' | relative_url }})
