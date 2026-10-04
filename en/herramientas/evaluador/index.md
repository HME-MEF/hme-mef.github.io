---
layout: page
lang: en
title: "Pay-discrimination evaluator"
---

[← Back to Tools]({{ '/en/herramientas/' | relative_url }})

{% include beta-notice.html %}

This tool has a **deliberately narrow** scope. It is not a fee calculator
for any profession, nor a simulator of indicative tariffs. It serves a
single purpose:

> To assess, from the Execution Cost Budget (PEM) of a building, whether the
> fee offered or awarded for an architect's **project drafting** and/or
> **site supervision** — in a public tender or a private-sector commission
> — shows indicators of undervaluation incompatible with the
> anti-discrimination floor of Minimum Equivalent Fees (MEF).

It does not calculate "recommended" fees and does not replace any fee scale.
It compares a specific figure (the one offered or awarded) against two
objective reference floors, derived from regulatory and cost sources, not
from professional-association criteria.

If what you need is to calculate in advance a reference band for a
commission — instead of evaluating a figure already offered — use the
[**fee band estimator →**]({{ '/en/herramientas/estimacion/' | relative_url }}).

### Scope

- **Commission**: project drafting, site supervision, or both, with or
  without health-and-safety coordination.
- **Procedure**: public tender or a direct private-sector commission.
- **Building type**: based on its PEM, use (residential, educational/
  healthcare, cultural/social, administrative/security, industrial) and
  degree of complexity.
- **Not covered**: urban planning, expert reports, valuations, or
  commissions in other professions.

<div style="margin:24px 0;">
  <iframe src="{{ '/en/herramientas/calculadora-indicios.html' | relative_url }}"
          style="width:100%; height:1550px; border:none; border-radius:8px;"
          title="Pay-discrimination evaluator">
  </iframe>
</div>

---

### Methodology

**Hour estimation (HME).** Unlike an earlier version of this tool, the
commission's hours are not requested as a subjective user estimate: they
are calculated automatically from three objective facts about the works:

1. **PEM** (V) — the value of the works.
2. **Building type and degree of complexity** — determine parameter G
   (*grado di complessità*), read from Table Z-1 of DM 17/6/2016 by broad
   category (residential, educational/healthcare, cultural/social,
   administrative/security, industrial).
3. **Scope of the commission** (drafting, supervision, or both, with or
   without safety coordination) — determines ΣQ, an aggregated
   approximation of the phase incidence in Table Z-2 of the same decree.

With these three inputs, the DM 17/6/2016 formula is applied —
CP = V·G·ΣQ·P, with P = 0.03 + 10/V^0.4 and flat-rate expenses according to
the V bracket (art. 5) — and the result is converted to hours by dividing
by €60.5/h (the lower end of the band under art. 6.2, updated by Italian
CPI 2016→2024). This is exactly the method already used to calculate the
"implicit design hours" of the reference case (Ripollet / Santa Margarida)
shown below, which had already been validated against real data before it
was automated here. Anyone who prefers to apply their own professional
judgement can switch on the manual hours adjustment.

The tool requires choosing a **reference year** (2024–2027) first, because
the collectively-bargained salary, the SMI (national minimum wage) and the
Deltek utilization rate vary by year — unlike the Italian model or SEGIPSA.
Once the year is chosen, it calculates two floors of its own and places the
evaluated amount against them:

- **Cost floor** (€40.18/h in 2023; €48.09/h from 2024 to 2027): estimated
  commission hours (HME) × hourly cost rate, derived from the average pay
  of employees of private firms (ACE 2022 for 2023, ACE 2024 for
  2024–2027), with 13% overheads and 6% industrial profit (by analogy
  with art. 131 RGLCAP).
- **MEF floor** (€47.80-€48.76/h on the collectively-bargained salary,
  depending on the year; between €31.64/h and €34.28/h on the SMI,
  depending on the year): HME × MEF hourly rate — the actual
  anti-discrimination floor. See
  the
  [technical methodology]({{ '/en/herramientas/metodologia/' | relative_url }}#6-data-and-results-by-year-2024-2027)
  for the exact value for each year and why some figures stay constant for
  lack of a more recent official figure.

The SEGIPSA and Italian DM tables shown alongside the result are for manual
reference and are not applied automatically in the calculation. The SEGIPSA
brackets are verified directly against the Resolution of 11/5/2015 (BOE
27/5/2015) — see [Legal Framework]({{ '/en/marco-legal/' | relative_url }}).
The building-type/complexity categorisation used for G is an indicative
simplification by broad groups of the full Table Z-1, just as ΣQ is an
aggregated approximation of Table Z-2, not the decree's line-by-line
breakdown.

Every input (reference salary, operating costs, utilization rate,
overheads…) has a different origin and status — regulatory,
collectively-bargained, industry benchmark, or an editable working
assumption. Full detail, with the step-by-step derivation of both floors, is
in the [technical methodology]({{ '/en/herramientas/metodologia/' | relative_url }}).

### Diagnosis

| Result | Diagnosis |
|---|---|
| Above the cost floor | Adequate |
| Between the MEF floor and the cost floor | Borderline — review |
| Below the MEF floor | Indicator of pay discrimination |

### Reference case

The model has been validated against two real project-drafting contracts
recorded by the CSCAE's Fee Observatory (26/5/2025) — they correspond to year
2025 in the tool's year selector:

| Item | Ripollet (Library) | Sta. Margarida (Police station) |
|---|---|---|
| PEM | €2,966,214 | €1,287,888 |
| Awarded drafting fee (% of PEM) | 6.64% (€196,950) | 3.15% (€40,597) |
| Italian reference | 7.12% (€211,302) | 6.73% (€86,654) |
| Implicit €/h paid | €56.4/h | €28.3/h |
| MEF floor (2024) | €48.64/h | €48.64/h |
| Diagnosis | Adequate | **Indicator of discrimination and dumping** |

In Santa Margarida, the awarding administration paid less than half of
either value reference, and below both the MEF floor and the
antidumping floor (real cost without industrial profit), even
calculated with conservative costs.

### Caveats

- This tool **is not legal advice**, nor is it a fee scale.
- Monetary values (SMI, collectively-bargained salary, rates) should be
  updated periodically in line with CPI.
- The admissible vehicle for a remuneration floor is state regulation or
  public-procurement oversight (abnormally low tenders, art. 149 LCSP) —
  never a professional-association-set table.
- A result showing an "indicator of discrimination" does not, by itself,
  prove an infringement; it is a starting point for reviewing the case.

---

## More information

[**Fee band estimator →**]({{ '/en/herramientas/estimacion/' | relative_url }})
[**See the calculator's technical methodology →**]({{ '/en/herramientas/metodologia/' | relative_url }})
[**See the full Legal Framework →**]({{ '/en/marco-legal/' | relative_url }})
[**Read the academic article →**]({{ '/en/publicaciones/' | relative_url }})
[**FAQ →**]({{ '/en/recursos/faq/' | relative_url }})
