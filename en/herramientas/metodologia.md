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
| Operating costs (Madrid) | €12,885.18/year (2023) / €12,930.40/year (2024) / €12,988.63/year (2025) / €13,059.92/year (2026) | Table of 8 line items (professional association fee, liability insurance, workspace, vehicle —leasing and fuel—, software licenses, IT equipment, other current expenses) each with its own source and, where real year-specific data exists, year-on-year variation — see the full table below (§1-bis) and technical memo §11. Replaces the initial aggregate estimate (€17,569/year) |
| Annual hours | 1,792 h | Maximum working hours under the engineering and technical consultancy collective agreement — **collectively-bargained** |
| Utilization rate | 59.3% (2024–2027) | "Architecture or A/E" segment, fiscal year **2025** — *47th Annual Deltek Clarity A&E Industry Study* (Deltek / CMG Consulting), "Statistics at a Glance" table, p. 122 (the narrative median for the whole A&E sector, not just architecture, is 58.9%, p. 99) — **industry benchmark, U.S.**, not an official Spanish figure ([full report](https://info.deltek.com/47th-Annual-Deltek-Clarity-AE-Report-PDF)). The only architecture-specific figure published; applied equally across the four years in the selector — see section 6 |
| Reference gross remuneration (cost floor) | €26,462/year (2023) / €31,672/year (2024–2027) | Average pay of employees of private firms in Spain, PPP-adjusted (not averaged with partners/directors — see note in section 2): **2023** — *ACE Sector Study* **2022**, Table 4-2, Spain, p. 55; **2024–2027** — *ACE Sector Study* **2024**, Table 4-2, Spain, p. 57 — **working assumption**, with starting data from *The Architectural Profession in Europe* (Mirza & Nacey Research Ltd, Architects' Council of Europe), 2022 and 2024 editions |
| Employer cost-multiplier coefficient | 1.356 | Ratio of gross cost / wages and salaries, Services sector — [INE, Annual Labour Cost Survey (EACL), 2025, Table 1](https://www.ine.es/dyngs/Prensa/EACL2025.htm) (€37,717.75 / €27,817.39) — **industry benchmark (Spain)**; the INE does not break this down by a finer branch of activity, so the Services sector as a whole is taken as a proxy for architecture |
| Overheads / industrial profit (cost floor) | 13% / 6% | By analogy with art. 131 of the [General Regulation of the Public Administration Contracts Act (RD 1098/2001)](https://www.boe.es/eli/es/rd/2001/10/12/1098/con) (public works) — **regulatory by analogy**, not a figure specific to the architecture sector |
| SMI (national minimum wage) | €15,120 (2023) / €15,876 (2024) / €16,576 (2025) / €17,094 (2026–2027) | **Regulatory** — [RD 99/2023](https://www.boe.es/buscar/doc.php?id=BOE-A-2023-3982), [BOE-A-2024-2251](https://www.boe.es/buscar/doc.php?id=BOE-A-2024-2251), [BOE-A-2025-2576](https://www.boe.es/buscar/doc.php?id=BOE-A-2025-2576), [BOE-A-2026-3815](https://www.boe.es/buscar/doc.php?id=BOE-A-2026-3815). No Royal Decree published yet for 2027; the 2026 figure is kept |
| Amount→hours conversion rate | 50 × 1.21 (Italian CPI 2016→2024) = €60.5/h | Lower end of the band under art. 6.2 of DM 17/6/2016, updated — **updated regulatory figure** |
| Parameters V, G, Q, P (Italian model): V = PEM (value of the works), G = degree of complexity (Table Z-1), ΣQ = aggregated incidence of the commission's phases (Table Z-2), P = 0.03 + 10/V^0.4 | Tables Z-1 and Z-2 | DM 17/6/2016 — **regulatory (Italy)**; the G and ΣQ used by this tool are an indicative aggregated categorisation, not the decree's line-by-line breakdown — see [Legal Framework]({{ '/en/marco-legal/' | relative_url }}) |
| DM 2016 public-works maximum rebate | 65% fixed / 35% open to rebate; 20% for direct award (< €140,000) | As of 1/1/2025, the Italian *Codice dei Contratti Pubblici* (D.Lgs. 209/2024, amending D.Lgs. 36/2023) limits the admissible rebate on the DM 17/6/2016 parametric tariff: in a tender, 65% of the tariff is fixed (not reducible) and only the remaining 35% can be rebated, which sets the maximum discount range; for direct award (commissions under €140,000), the maximum admissible rebate is 20% — **regulatory (Italy)**, cited as a comparative reference, not applicable in Spain |
| % of PEM (SEGIPSA) | 6.65%–3.08% depending on bracket and item | [Resolution of 11/5/2015](https://www.boe.es/eli/es/res/2015/05/11/(2)) (BOE 27/5/2015) — **regulatory**, verified against the official text |

### Detail of operating costs (2023-2026)

Breakdown of the MEF's operating costs into eight line items, each with its own source. In the absence of official sources for several of them, private market sources have been accepted and flagged in each case. Replaces the initial aggregate estimate (€17,569/year, rent €10,500 + liability insurance €1,000).

| Item | 2023 | 2024 | 2025 | 2026 | Source |
|---|---|---|---|---|---|
| COAM professional association fee | €230.00 | €230.00 | €255.00 | €262.00 | [web.archive.org](https://web.archive.org), COAM resident-member fee pages (snapshots from 31/05/2023 and 22/01/2025); 2026 figure confirmed directly by the study's author; 2024 repeats the 2023 figure for lack of a figure of its own for that year |
| Professional liability insurance | €767.39 | €788.98 | €810.00 | €838.43 | SEGURCOAM, COAM professional liability insurance premium table (document dated October 2025), €190,000 coverage/turnover ≤€150,000: €810/year (real 2025 figure); 2023, 2024 and 2026 extrapolated applying the model's same year-on-year variation factors: 2023→2024 +2.80%, 2024→2025 +2.69%, 2025→2026 +3.51% |
| Workspace (coworking, fixed desk + meeting room 4 h/month) | €4,229.00 | €4,229.00 | €4,229.00 | €4,229.00 | Coworking Spain 2025 sector report (fixed desk) + WeWork reference (meeting room). Note: the resulting figure is equivalent to the average cost of renting a 20 m² private office in Madrid (€4,200/year, CBRE), corroborating the adopted figure. Kept fixed across the four years: it was not possible to build a homogeneous 2023-2026 series of Madrid office/coworking prices due to methodological incompatibility between sources (non-comparable "periphery" zone definitions across consultancies) and data-extraction limitations in historical reports (Knight Frank 2023/2024) |
| Vehicle — leasing | €3,534.00 | €3,534.00 | €3,534.00 | €3,534.00 | Compact car leasing in Madrid, market range €244-345/month + VAT, midpoint adopted (coverage and taxes included); fixed figure across the four years. Alternatives: full-service renting raises the figure to €5,108/year; per-minute carsharing (Zity, WiBLE, Free2Move, Share Now, GoTo), applied to the same usage scenario, yields ≈€3,500/year —a notable coincidence with the leasing figure despite a completely different pricing model—, though carsharing only covers trips within the Madrid municipality |
| Vehicle — fuel | €123.73 | €128.18 | €121.63 | €132.22 | Annual average price of 95-octane petrol (sector fuel-price bulletin) × reference consumption of 6 l/100 km × annual mileage estimated from the author's own frequency of site visits (1.5/week) and client/administration visits (0.3/week), with an average round-trip distance of 15.6 km (independently corroborated by the Community of Madrid/CRTM's 2018 Household Mobility Survey, EDM) |
| Software licenses (CAD/BIM + Office 365 + generative AI) | €2,429.50 | €2,429.50 | €2,429.50 | €2,429.50 | Average of Revit (€2,610/year, Autodesk, Spain list price) and ArchiCAD Studio (€1,659/year, Graphisoft, Spain list price) = €2,134.50/year, plus Microsoft 365 Business Basic €72.84/year and a standard generative-AI subscription (ChatGPT Plus/Claude Pro) ≈€222.16/year; public subscription prices, September 2026 reference, fixed figure across the four years. Allplan (Nemetschek), the third BIM package considered, has no published price list (quote-only through resellers) and is left out of the average; per G2.com it sits 31% above the average of compared BIM software (which includes Revit and ArchiCAD), so the two-way average used here is, if anything, conservative on the low side. Replaces the earlier Revit-only figure (€2,765/year), which over-weighted the most expensive of the three |
| IT equipment | €889.50 | €889.50 | €889.50 | €889.50 | Market prices (MediaMarkt and similar), amortised over useful life: mid-range tower/CPU with dedicated GPU (≈€1,300, replaced every 2 years = €650/year); 24″ monitor (≈€160, replaced every 5 years = €32/year); 2 TB external backup hard drive (≈€65, replaced every 2 years = €32.50/year); mid-range mobile phone (≈€350, replaced every 2 years = €175/year). Fixed figure across the four years |
| Other current expenses | €682.06 | €701.24 | €720.00 | €745.27 | Working assumption —stationery, printer consumables, minor technical equipment and mobile phone plan (€60/month, 2025 base)—, updated to the other years with the model's year-on-year variation factors |
| **Total documented operating costs** | **€12,885.18** | **€12,930.40** | **€12,988.63** | **€13,059.92** | |

Final note: the State holds detailed information on the expense structure of self-employed professionals through their own personal income tax returns (IRPF), information that is not public and therefore could not be used as a source for this table.

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

## 2. Derivation of the cost floor (by year)

1. Reference gross remuneration: average pay of employees of private
   firms, ACE — **€26,462/year** (2023, ACE 2022) / **€31,672/year**
   (2024–2027, ACE 2024).
2. × employer cost-multiplier coefficient (1.356 — *INE, EACL 2025, Services
   sector*): gross cost to the employer.
3. ÷ (1,792 annual hours × 59.3% utilization rate — *Deltek Clarity A&E*):
   cost per effectively billable hour.
4. × (1 + 13% overheads + 6% industrial profit): adds overheads and
   industrial profit by analogy with art. 131 RGLCAP.
5. Result: **€40.18/h** (2023) / **€48.09/h** (2024–2027).

This floor answers the question "how much does it cost a practice to
produce one hour of work, including its margin?" — it is a **cost** floor,
not an anti-discrimination floor. A fee below this floor is not necessarily
discriminatory, but it does indicate a price lower than adequate.

**Note — why only "employees", not averaged with partners/directors:**
until October 2026 this methodology used the average between the pay of
"employees" and of "partners/directors" in the private sector (ACE 2020).
That has been corrected: the cost floor models what it costs a practice
to produce an hour of work with a team — and on a real commission, most
hours are produced by employed staff (across seniority levels, already
aggregated in ACE's "employees of private firms" category), not by
whoever runs the practice. Averaging 50/50 with a director's pay
implicitly assumed that half of any commission's hours are done by the
principal, which overstates the real cost for a typical team. It remains
an open limitation that, for a self-employed architect working alone and
billing every hour themselves, their real opportunity cost looks more
like ACE's "sole principal" figure (€47,772/year in Spain, 2024) than an
employee's — see section 5.

**Note — cost-coverage threshold (without industrial profit):** of the two
components in step 4, only overheads (GG) are a real operating cost for
the practice; industrial profit (BI) is margin, not cost. Repeating the
calculation with only the overheads applied (× 1.13, without the
industrial profit) gives **€38.16/h** (2023) / **€45.67/h** (2024–2027):
the threshold below which a practice does not even cover its real costs.
This distinction matters because art. 17 of the
[Ley 3/1991, de 10 de enero, de Competencia Desleal](https://www.boe.es/eli/es/l/1991/01/10/3/con)
(Spain's Unfair Competition Act, "venta a pérdida" / selling at a loss)
treats selling below **cost** — not below cost plus profit — as unfair.
The full cost floor (with industrial profit) is therefore stricter than
the legal no-dumping threshold.

## 3. Derivation of the MEF floor (by year — see table in section 6)

1. Reference salary for the selected year (collectively-bargained; or the
   SMI, depending on the chosen base) + employer social security
   contribution (33.01% of the base salary) + Madrid operating costs for
   the corresponding year (€12,885.18-€13,059.92, see table in section 1).
2. ÷ (1,792 annual hours × 59.3% utilization rate — *Deltek Clarity
   A&E*): cost per effectively billable hour.
3. Result: the actual anti-discrimination floor (collective-agreement
   base) — the direct comparison with what it would cost to hire an
   employed professional with the same qualification — and, on the SMI
   base, the absolute threshold. The values for 2024–2027 are in section 6.

This floor is the foundation of MEF: a self-employed worker should not earn,
for equivalent work, less net remuneration than a salaried worker would
receive for the same work.

**Note — utilization-rate correction (4 October 2026):** until this
update, step 2 divided directly by 1,792 annual hours, without
deducting the non-billable fraction. This was inconsistent with the
rest of the model: the HME estimate's hours (section 4) are obtained by
dividing Italy's fee by a commercial rate (€60.5/h) that is already a
*billable* rate, and the cost floor (section 2) already applies this
same 59.3% utilization rate before adding margin. Multiplying billable
hours by an MEF floor computed over total hours worked (without
deducting the non-billable share) artificially spreads the cost over
fewer hours than actually bear it, understating the resulting MEF floor
by a constant factor of 1/0.593 ≈ 1.69 relative to what it should be.
The correction raises the MEF floor from €28.84/h to €48.64/h (2024,
collective-agreement base), bringing it, as expected, very close to the
cost floor (€48.09/h, 2024) — even though MEF excludes the 13%/6%
overhead and industrial profit that the cost floor does carry. This
closeness after the correction is an internal-consistency check on the
model, not a sought-after coincidence.

**Note — corroborating the software line item (4 October 2026):** the
"Software licenses" operating-cost item (section 1) originally used only
Revit's price (€2,765/year), the most expensive of the three BIM
packages commonly used in practice. For a less contestable figure, it is
replaced with the average of Revit's (€2,610/year, Autodesk) and
ArchiCAD Studio's (€1,659/year, Graphisoft) public list prices —
€2,134.50/year; Allplan (Nemetschek), the third package considered, has
no published price list. This lowers operating costs by €630.50/year (a
fixed figure, the same across all four years) and, with it, the MEF
floor: €48.64/h → €48.05/h (2024, collective-agreement base). The cost
floor (€48.09/h) is unaffected, since it is not derived from this
operating-cost table — see section 2.

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
- Operating costs (€12,885.18-€13,059.92/year depending on the year) are
  calculated for Madrid; in other cities or regions the cost floor will
  vary. As of this update they are broken down into eight line items each
  with its own source (professional association fee, liability insurance,
  workspace, vehicle, software licenses, IT equipment, other current
  expenses) — see the full table and sources in section 1. In the absence
  of official sources for several items, private market sources have been
  accepted and flagged in each case.
- The reference gross remuneration (ACE, "employees of private firms")
  models the cost of a typical team, not the opportunity cost of a
  self-employed architect working alone — for that case, their real cost
  is closer to ACE's "sole principal" figure (€47,772/year in Spain,
  2024), noticeably higher — see the note in section 2.
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
which do not depend on the chosen year in this tool, although they do
update de facto with construction-cost inflation, since both are
calculated as a percentage of the PEM (value of the works). The band
estimator defaults to the current year; the pay-discrimination evaluator
requires an explicit choice of year, with no default, so as not to
presuppose a given year in a comparative calculation.

| Year | Collective-agreement salary | SMI | Operating costs | MEF floor (collective agreement) | MEF floor (SMI) | Cost floor | Notes |
|---|---|---|---|---|---|---|---|
| 2023 | €28,027 | €15,120 | €12,885.18 | €47.21/h | €31.05/h | €40.18/h | Collective-agreement salary and SMI are official 2023 figures; operating costs from the 8-item table (section 1); cost floor uses the ACE **2022** reference remuneration (employees, Spain); utilization rate and cost-multiplier coefficient have no edition of their own for that year, so the same FY2025 Deltek / EACL 2025 figures used for every other year apply |
| 2024 | €28,664 | €15,876 | €12,930.40 | €48.05/h | €32.04/h | €48.09/h | All figures are official or the reference benchmark (FY2025 Deltek, EACL 2025, ACE **2024**) verified for this year; operating costs from the 8-item table (section 1) |
| 2025 | €28,664 *(no agreed table; 2024 kept)* | €16,576 | €12,988.63 | €48.10/h | €32.97/h | €48.09/h | Official 2025 SMI; operating costs from the 8-item table (section 1); cost floor uses the ACE 2024 remuneration (no edition of its own for 2025); utilization rate and cost-multiplier coefficient with the latest published editions (Deltek FY2025, EACL 2025) |
| 2026 | €28,664 *(no agreed table; 2024 kept)* | €17,094 | €13,059.92 | €48.17/h | €33.69/h | €48.09/h | Official 2026 SMI; operating costs from the 8-item table (section 1); cost floor uses the ACE 2024 remuneration (no edition of its own for 2026); utilization rate and cost-multiplier coefficient with no more recent edition, Deltek FY2025 / EACL 2025 kept |
| 2027 | €28,664 *(no agreed table; 2024 kept)* | €17,094 *(no RD published; 2026 kept)* | €13,059.92 *(no figure of its own; 2026 kept)* | €48.17/h | €33.69/h | €48.09/h | A year with no figure of its own published yet; all figures are the latest available, including the ACE 2024 remuneration behind the cost floor |

As of October 2026, the cost floor **does vary by year**: it is chained
to the most recent ACE edition with a figure available for each year
(2022 for 2023; 2024 for 2024–2027, until a new edition is published),
the same way the collective-agreement salary and the SMI already were.
Previously a single fixed figure was used (ACE 2020), deliberately not
chained, because the figure combined with "partners/directors" showed
strong swings between editions that looked unreliable to update
automatically. Limiting the reference remuneration to the "employees of
private firms" category (see the note in section 2) removes that more
volatile component — though the employees figure is not perfectly
stable either: in Spain it goes from €26,462/year (ACE 2022) to
€31,672/year (ACE 2024), a +19.7% rise across two editions, in the same
order of magnitude as the sector's general wage growth over that period.
It is chained anyway because, like the collective-agreement salary or
the SMI, it is the best year-specific figure available — with the
caveat, already noted in section 5, that ACE's sample size in Spain
(198–847 responses depending on the edition, margin of error ±3.3% to
±7.0% at 95% confidence) still introduces year-to-year noise.

As of this same update, the MEF floor **also varies by year**, since it
now depends on the broken-down operating costs (section 1), which do
have real year-on-year variation in several of their line items
(liability insurance, fuel) rather than the fixed €17,569/year figure
used until now.

The employer social security contribution is calculated as a fixed
percentage (33.01%) of the base salary for each year, without modelling the
annual increase of the Intergenerational Equity Mechanism (MEI), which
raises the contribution rate slightly each year; this is a deliberate
simplification, consistent with the rest of the model's "working
assumptions."

---

## 7. External cross-check references

### 7.1 Market rates (ACE Sector Study 2024)

As an independent reference, the *ACE Sector Study 2024* (Mirza & Nacey
Research Ltd, April 2025) gives, in its Table 3-5, the average hourly
charge-out rates actually billed by architecture practices in Spain, by
professional category:

| Category | €/h adjusted for PPP | €/h unadjusted |
|---|---|---|
| Principals (partners/directors) | 41 | 39 |
| Architect employees | 37 | 35 |
| Technologists | 26 | 25 |

These are market rates (what is actually billed to clients), not cost
figures, so they are not directly equivalent to this methodology's MEF
floor or cost floor — but the comparison is revealing: Spain's average
market rate for principals (€39–41/h) sits **below** the MEF floor
(€47.21-€48.17/h, depending on the year), the cost-coverage threshold
without industrial profit (€45.67/h, 2024, see section 2), and the full
cost floor (€48.09/h, 2024) alike. In other words, the rate actually
billed on average in the Spanish market does not cover either the real
cost of producing that hour of work or, with the corrected MEF floor
(section 3), the equivalent of what it would cost to hire an employed
professional with the same qualification — consistent with this
methodology's underlying diagnosis that market fees tend to sit below
the real cost of the service.

Source: *The Architectural Profession in Europe 2024*, Mirza & Nacey
Research Ltd, April 2025, Table 3-5, p. 40.

### 7.2 Indicative reference values under Directive (EU) 2022/2041

Art. 5(4) of [Directive (EU) 2022/2041 of the European Parliament and of
the Council of 19 October 2022 on adequate minimum wages in the European
Union](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022L2041)
provides that Member States may use internationally common indicative
reference values to assess the adequacy of their statutory minimum
wages: 60% of the gross median wage or 50% of the gross average wage.
This methodology does not apply that 60%/50% as a further discount, but
as the justification for using the INE's median and average wage
directly as the reference salary: if a minimum wage below 60% of the
median is considered inadequate under the Directive, a reference salary
**equal to** the median (well above that threshold) is, a fortiori, a
defensible base for the HME. Applied this way to Spain's gross median
and average wage for 2024 (INE, *Decil de salarios del empleo
principal*, press release of 14/11/2025), the following indicative HME
are obtained:

| | From the median wage | From the average wage |
|---|---|---|
| Reference salary (INE median / average) | €2,001.40/month · €24,016.80/year | €2,385.60/month · €28,627.20/year |
| Operating expenses and social security | €17,294.54/year | €18,816.00/year |
| Resulting HME | €41,311.34/year | €47,443.20/year |
| HME per hour actually worked (1,760 h/year working time) | €23.47/h | €26.96/h |
| HME per billable hour (1,760 h × 59.3% utilization rate) | €39.58/h | €45.46/h |

This estimate uses an annual working time (1,760 h) and a composition of
operating expenses and social security contributions different from this
methodology's own (1,792 h, 33.01% contribution rate + €12,885.18-€13,059.92/year
in Madrid operating costs, depending on the year), so it is not directly interchangeable with the
MEF floor in sections 2 and 3. Like the MEF floor (section 3), the
calculator multiplies this value by the billable hours from the HME
estimate (Italy ÷ €60.5/h), so since 4 October 2026 it is also divided
by the 59.3% utilization rate (Deltek Clarity A&E) to keep it on the
same hour basis — the value the calculator uses is the "per billable
hour" one (€45.46/h, from the average wage), not the "per hour actually
worked" one (€26.96/h). Both approaches — the collective agreement/SMI
basis on one hand, and the Directive's art. 5(4) indicative values on
the other — place the anti-discrimination floor for a self-employed
architect in a similar range, roughly €33–49/h on a billable-hour
basis, depending on the chosen reference salary base.

Source: own elaboration from Spain's gross median and average wage for
2024, [INE, Decil de salarios del empleo principal, press release of
14 November 2025](https://www.ine.es/dyngs/Prensa/dsEPA2024.htm).

---

## More information

[**Pay-discrimination evaluator →**]({{ '/en/herramientas/evaluador/' | relative_url }})
[**Fee band estimator →**]({{ '/en/herramientas/estimacion/' | relative_url }})
[**Historical comparison of the fee regulations (1905–1977) →**]({{ '/en/herramientas/normas-historicas/' | relative_url }})
[**See the full Legal Framework →**]({{ '/en/marco-legal/' | relative_url }})

---

**Last updated**: 3 October 2026
