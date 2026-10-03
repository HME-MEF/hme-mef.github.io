---
layout: page
lang: en
title: "Calculator technical methodology"
---

{% include beta-notice.html %}

This document explains the origin and status of every input used by the
[pay-discrimination evaluator]({{ '/en/herramientas/evaluador/' | relative_url }})
and the [fee band estimator]({{ '/en/herramientas/estimacion/' | relative_url }}),
so that anyone using them can tell apart a regulatory figure, an unofficial
industry benchmark, and a working assumption of the model — editable and
open to debate. Both tools share the same calculation engine (hour
estimation, cost floor, MEF floor).

Both calculators include a **year selector** (2023–2027), because the
collectively-bargained salary, the SMI (national minimum wage) and the
Deltek utilization rate do vary from one year to the next. The Italian
model and SEGIPSA do not carry a different value per year in this tool,
but they do update de facto with construction-cost inflation: both are
calculated as a percentage of the PEM (direct-execution budget), so
their amount in current euros rises or falls along with the cost of the
works, without needing an express regulatory revision. See section 6 for
the detail of what changes by year and what stays constant for lack of
published data.

It is not an official tariff or a professional-association fee scale: it
is information about several possible fee references — based on
non-discrimination (HME/MEF), business cost, or Spanish (SEGIPSA) and
Italian (DM 2016) regulatory parameters — built from explicit layers.
How anyone uses these figures is a matter of their own judgment.

---

## 1. Table of sources

| Input | Value | Status |
|---|---|---|
| Reference salary (collective agreement) | €28,027/year (2023) / €28,664/year (2024–2027) | Level 1 salary tables of the 20th Collective Agreement for engineering and technical consultancy firms — **collectively-bargained**: **2023** ([BOE-A-2023-11785, 18/5/2023](https://www.boe.es/buscar/doc.php?id=BOE-A-2023-11785)), **2024** ([BOE-A-2024-5873, 12/3/2024](https://www.boe.es/buscar/doc.php?id=BOE-A-2024-5873)). No agreed table for 2025–2027; the 2024 figure is kept — see section 6 |
| Employer social security contribution | 33.01% of the base salary | Regulatory Social Security calculation on the collectively-bargained salary or the SMI — **regulatory** (percentage held constant between 2024 and 2027 as a simplification; does not incorporate the annual increase of the Intergenerational Equity Mechanism) |
| Operating costs (Madrid) | €17,569/year (rent €10,500, professional liability insurance €1,000, remainder) | Average market values in Madrid — **working assumption**, conservative and editable; with no single reference year, applied equally across the four years in the selector |
| Annual hours | 1,792 h | Maximum working hours under the engineering and technical consultancy collective agreement — **collectively-bargained** |
| Utilization rate | 59.3% (2024–2027) | "Architecture or A/E" segment, fiscal year **2025** — *47th Annual Deltek Clarity A&E Industry Study* (Deltek / CMG Consulting), "Statistics at a Glance" table, p. 122 (the narrative median for the whole A&E sector, not just architecture, is 58.9%, p. 99) — **industry benchmark, U.S.**, not an official Spanish figure ([full report](https://info.deltek.com/47th-Annual-Deltek-Clarity-AE-Report-PDF)). The only architecture-specific figure published; applied equally across the four years in the selector — see section 6 |
| Reference gross remuneration (cost floor) | €38,345/year | Average between ACE **2020** public-sector employment (€44,512) and private-practice management (€32,178) — **working assumption**, with a starting figure from the Architects' Council of Europe |
| Employer cost-multiplier coefficient | 1.356 | Ratio of gross cost / wages and salaries, Services sector — [INE, Annual Labour Cost Survey (EACL), 2025, Table 1](https://www.ine.es/dyngs/Prensa/EACL2025.htm) (€37,717.75 / €27,817.39) — **industry benchmark (Spain)**; the INE does not break this down by a finer branch of activity, so the Services sector as a whole is taken as a proxy for architecture |
| Overheads / industrial profit (cost floor) | 13% / 6% | By analogy with art. 131 RGLCAP (public works) — **regulatory by analogy**, not a figure specific to the architecture sector |
| SMI (national minimum wage) | €15,120 (2023) / €15,876 (2024) / €16,576 (2025) / €17,094 (2026–2027) | **Regulatory** — [RD 99/2023](https://www.boe.es/buscar/doc.php?id=BOE-A-2023-3982), [BOE-A-2024-2251](https://www.boe.es/buscar/doc.php?id=BOE-A-2024-2251), [BOE-A-2025-2576](https://www.boe.es/buscar/doc.php?id=BOE-A-2025-2576), [BOE-A-2026-3815](https://www.boe.es/buscar/doc.php?id=BOE-A-2026-3815). No Royal Decree published yet for 2027; the 2026 figure is kept |
| Amount→hours conversion rate | 50 × 1.21 (Italian CPI 2016→2024) = €60.5/h | Lower end of the band under art. 6.2 of DM 17/6/2016, updated — **updated regulatory figure** |
| Parameters V, G, Q, P (Italian model) | Tables Z-1 and Z-2 | DM 17/6/2016 — **regulatory (Italy)**; the G and ΣQ used by this tool are an indicative aggregated categorisation, not the decree's line-by-line breakdown — see [Legal Framework]({{ '/en/marco-legal/' | relative_url }}) |
| DM 2016 public-works maximum rebate | 65% fixed / 35% open to rebate; 20% for direct award (< €140,000) | As of 1/1/2025, the Italian *Codice dei Contratti Pubblici* (D.Lgs. 209/2024, amending D.Lgs. 36/2023) limits the admissible rebate on the DM 17/6/2016 parametric tariff: in a tender, 65% of the tariff is fixed (not reducible) and only the remaining 35% can be rebated, which sets the maximum discount range; for direct award (commissions under €140,000), the maximum admissible rebate is 20% — **regulatory (Italy)**, cited as a comparative reference, not applicable in Spain |
| % of PEM (SEGIPSA) | 6.65%–3.08% depending on bracket and item | Resolution of 11/5/2015 (BOE 27/5/2015) — **regulatory**, verified against the official text |

### Detail of the SEGIPSA tariffs (BOE 27/5/2015)

SEGIPSA (Sociedad Estatal de Gestión Inmobiliaria de Patrimonio, S.A.), an
in-house instrumental body of the Spanish General State Administration,
applies these percentage tariffs on the Execution Cost Budget (PEM) for
drafting projects and site supervision commissioned by the Administration:

| Item | PEM bracket | % of PEM |
|---|---|---|
| **Project drafting** (incl. Health and Safety Study) | Up to €1,000,000 | 6.65% |
| | €1,000,001 – €3,000,000 | 5.61% |
| | €3,000,001 – €6,000,000 | 4.63% |
| | €6,000,001 – €10,000,000 | 4.11% |
| | Over €10,000,000 | 3.60% |
| **Site supervision and execution management** (without safety and health coordination) | Up to €1,000,000 | 5.68% |
| | €1,000,001 – €3,000,000 | 4.77% |
| | €3,000,001 – €6,000,000 | 3.97% |
| | €6,000,001 – €10,000,000 | 3.53% |
| | Over €10,000,000 | 3.08% |

These brackets are the reference used — as a manual check, not applied
automatically in every case — in this site's calculators. In practice,
this is the same mechanism as the historical state architects' fee
tariffs (1905, 1922, 1977 — see [Legal Framework]({{ '/en/marco-legal/' | relative_url }})) —
a percentage of the cost of the works, decreasing by bracket — applied
today by the General State Administration itself to its own commissioned
work.
[Download the SEGIPSA Resolution (BOE 27/5/2015)]({{ '/assets/docs/segipsa-boe-2015-es.pdf' | relative_url }}) *(Spanish original)*

---

## 2. Derivation of the cost floor (€58.23/h)

1. Reference gross remuneration: **€38,345/year**.
2. × employer cost-multiplier coefficient (1.356 — *INE, EACL 2025, Services
   sector*): gross cost to the employer.
3. ÷ (1,792 annual hours × 59.3% utilization rate — *Deltek Clarity A&E*):
   cost per effectively billable hour.
4. × (1 + 13% overheads + 6% industrial profit): adds overheads and
   industrial profit by analogy with art. 131 RGLCAP.
5. Result: **€58.23/h**.

This floor answers the question "how much does it cost a practice to
produce one hour of work, including its margin?" — it is a **cost** floor,
not an anti-discrimination floor. A fee below this floor is not necessarily
discriminatory, but it does indicate a price lower than adequate.

## 3. Derivation of the MEF floor (by year — see table in section 6)

1. Reference salary for the selected year (collectively-bargained; or the
   SMI, depending on the chosen base) + employer social security
   contribution (33.01% of the base salary) + Madrid operating costs
   (€17,569).
2. ÷ 1,792 annual hours.
3. Result: the actual anti-discrimination floor (collective-agreement
   base) — the direct comparison with what it would cost to hire an
   employed professional with the same qualification — and, on the SMI
   base, the absolute threshold. The values for 2024–2027 are in section 6.

This floor is the foundation of MEF: a self-employed worker should not earn,
for equivalent work, less net remuneration than a salaried worker would
receive for the same work.

## 4. Automatic estimation of commission hours (HME)

Explained in detail on the [Evaluator]({{ '/en/herramientas/evaluador/' | relative_url }}#methodology)
page: in summary, the DM 17/6/2016 formula itself —
**CP = V·G·ΣQ·P**, with the flat-rate expenses under art. 5 — is applied to
the PEM entered, where:

- **V** = the PEM (value of the works) entered by the user.
- **G** = *grado di complessità* (degree of complexity), read from Table
  Z-1 according to the building type and degree of complexity chosen.
- **ΣQ** = aggregated incidence of the commission's phases (Table Z-2),
  according to the scope selected (drafting, supervision, or both, with or
  without safety coordination).
- **P** = 0.03 + 10/V^0.4, the decree's own decreasing parametric factor as
  a function of V.

The result (CP, in euros) is converted to hours by dividing by the
conversion rate of €60.5/h.

---

## 5. Explicit limitations

- Data marked as a **working assumption** are editable and open to debate:
  they represent a reasonable, documented estimate, not a matter of
  regulation. Anyone who disagrees with one can recalculate the floor with
  their own values.
- The utilization-rate *benchmark* (59.3%, Architecture/A-E segment, fiscal
  year 2025) comes from a U.S. industry source (Deltek Clarity A&E), not
  from official Spanish data, for lack of an equivalent study published in
  Spain. It is an annual sector figure that varies from year to year;
  the most recent edition of the study should be reviewed periodically.
- The employer cost-multiplier coefficient (1.356) comes from the ratio of
  gross cost / wages and salaries for the Services sector in the INE's
  EACL 2025, not from a figure specific to architectural practices or
  professional firms; the most recent edition of the EACL should be
  reviewed periodically.
- Operating costs (€17,569/year) are calculated for Madrid; in other cities
  or regions the cost floor will vary.
- The building-type/complexity categorisation (parameter G) and the ΣQ for
  the commission's scope are indicative simplifications of Tables Z-1 and
  Z-2 of DM 17/6/2016, not the official full breakdown by subcategory.
- The SMI and the conversion rates should be updated periodically in line
  with CPI; the figures here reflect the latest verified values.

---

## 6. Data and results by year (2023–2027)

Both calculators let you choose a reference year because the
collectively-bargained salary, the SMI and the Deltek utilization rate are
published (or not) year by year — unlike the Italian model or SEGIPSA,
which do not depend on the chosen year. The band estimator defaults to the
current year; the pay-discrimination evaluator requires an explicit choice
of year, with no default, so as not to presuppose a given year in a
comparative calculation.

| Year | Collective-agreement salary | SMI | MEF floor (collective agreement) | MEF floor (SMI) | Cost floor | Notes |
|---|---|---|---|---|---|---|
| 2023 | €28,027 | €15,120 | €30.61/h | €21.03/h | €58.23/h | Collective-agreement salary and SMI are official 2023 figures; utilization rate and cost-multiplier coefficient have no edition of their own for that year, so the same FY2025 Deltek / EACL 2025 figures used for every other year apply |
| 2024 | €28,664 | €15,876 | €31.08/h | €21.59/h | €58.23/h | All figures are official or the reference benchmark (FY2025 Deltek, EACL 2025) verified for this year |
| 2025 | €28,664 *(no agreed table; 2024 kept)* | €16,576 | €31.08/h | €22.11/h | €58.23/h | Official 2025 SMI; utilization rate and cost-multiplier coefficient with the latest published editions (Deltek FY2025, EACL 2025) |
| 2026 | €28,664 *(no agreed table; 2024 kept)* | €17,094 | €31.08/h | €22.49/h | €58.23/h | Official 2026 SMI; utilization rate and cost-multiplier coefficient with no more recent edition, Deltek FY2025 / EACL 2025 kept |
| 2027 | €28,664 *(no agreed table; 2024 kept)* | €17,094 *(no RD published; 2026 kept)* | €31.08/h | €22.49/h | €58.23/h | A year with no figure of its own published yet; all figures are the latest available |

The cost floor does not change between 2023 and 2027 because its only three
year-sensitive inputs — the reference gross remuneration (ACE 2020, a
working assumption with no annual series), the Deltek utilization rate
(FY2025, the only architecture-specific figure available) and the
employer cost-multiplier coefficient (EACL 2025, Services sector) — are
held constant for lack of an applied time series. The year selector is
already set up to reflect the change automatically once a new edition of
the Deltek study, the EACL, or an updated working assumption for gross
remuneration becomes available.

The employer social security contribution is calculated as a fixed
percentage (33.01%) of the base salary for each year, without modelling the
annual increase of the Intergenerational Equity Mechanism (MEI), which
raises the contribution rate slightly each year; this is a deliberate
simplification, consistent with the rest of the model's "working
assumptions."

---

## More information

[**Pay-discrimination evaluator →**]({{ '/en/herramientas/evaluador/' | relative_url }})
[**Fee band estimator →**]({{ '/en/herramientas/estimacion/' | relative_url }})
[**Historical comparison of the fee regulations (1905–1977) →**]({{ '/en/herramientas/normas-historicas/' | relative_url }})
[**See the full Legal Framework →**]({{ '/en/marco-legal/' | relative_url }})

---

**Last updated**: September 2026
