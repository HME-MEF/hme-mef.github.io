---
layout: page
title: "Estimador de banda de honorarios"
---

[← Volver a Herramientas]({{ '/herramientas/' | relative_url }})

Esta herramienta responde a una pregunta distinta de la del
[evaluador de indicios de discriminación]({{ '/herramientas/evaluador/' | relative_url }}):
en vez de comparar un importe ya ofertado o adjudicado, calcula **de
antemano** una banda de referencias objetivas para un encargo de
**redacción de proyecto y/o dirección de obra**, a partir de su PEM, su
tipología y su alcance.

> Igual que el salario de convenio es un dato público, la remuneración
> equivalente de un profesional autónomo debería poder consultarse
> abiertamente. Ocultar esa cifra perpetúa la asimetría de información
> que HME quiere corregir. Publicar una banda de referencias de coste y
> de valor —abiertas, con su origen documentado y contrastables por
> cualquiera— no es lo mismo que un arancel colegial: la jurisprudencia
> (STJUE *Cipolla*, ver [Marco Legal]({{ '/marco-legal/' | relative_url }}))
> distingue por quién fija la cifra y cómo, no por si la cifra es
> pública.

**No es una tarifa, ni un baremo, ni un honorario recomendado.** Ningún
profesional está obligado a situarse dentro de la banda ni por encima de
ella; es una referencia de coste y de valor para razonar el propio
presupuesto, con el origen de cada dato explícito en la
[memoria técnica]({{ '/herramientas/metodologia/' | relative_url }}).

<div style="margin:24px 0;">
  <iframe src="{{ '/herramientas/calculadora-estimacion.html' | relative_url }}"
          style="width:100%; height:1500px; border:none; border-radius:8px;"
          title="Estimador de banda de honorarios de referencia">
  </iframe>
</div>

---

### Qué calcula

La banda va del **suelo MEF** (el mínimo antidiscriminatorio: lo que
costaría contratar a un empleado con la misma cualificación) hasta la
mayor de dos **referencias de valor** externas:

| Referencia | Qué mide |
|---|---|
| **Suelo MEF** | Coste de oportunidad de la equivalencia autónomo–asalariado. Mínimo absoluto. |
| **Suelo de coste** | Coste real de producción del estudio (salario + gastos generales + beneficio industrial). |
| **SEGIPSA** (BOE 27/5/2015) | % sobre PEM que la propia Administración General del Estado aplica a sus encomiendas de gestión. |
| **Italia** (DM 17/6/2016) | Modelo de honorarios de base-valor vigente en la UE, citado como referencia comparada. |

Las horas del encargo (HME) se estiman automáticamente con el mismo
método que el evaluador de indicios: la fórmula del DM 17/6/2016
(CP = V·G·ΣQ·P) aplicada al PEM, la tipología/complejidad y el alcance
elegidos.

### Advertencias

- No sustituye el juicio profesional sobre el encargo concreto, ni es
  asesoramiento jurídico.
- Ningún punto de la banda es un precio a cobrar: cada profesional fija
  su honorario libremente, por encima o por debajo de cualquiera de
  estas referencias, salvo el suelo MEF, que marca el umbral
  antidiscriminatorio.
- Los valores monetarios deben actualizarse periódicamente conforme al
  IPC.

---

## Más información

[**Evaluador de indicios de discriminación →**]({{ '/herramientas/evaluador/' | relative_url }})
[**Ver memoria técnica de la calculadora →**]({{ '/herramientas/metodologia/' | relative_url }})
[**Ver Marco Legal completo →**]({{ '/marco-legal/' | relative_url }})

---

**Última actualización**: Septiembre 2026
