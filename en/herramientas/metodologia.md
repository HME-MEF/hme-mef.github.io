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
| Reference gross remuneration (cost floor) | €29,496.50/year | Average between two private-sector categories, ACE **2020**: sole administrator/partners/directors/senior management (€32,178) and employees of private firms (€26,815) — **working assumption**, with starting data from *The Architectural Profession in Europe 2020: A Sector Study* (Mirza & Nacey Research Ltd, 2021, p. 55), Architects' Council of Europe |
| Employer cost-multiplier coefficient | 1.356 | Ratio of gross cost / wages and salaries, Services sector — [INE, Annual Labour Cost Survey (EACL), 2025, Table 1](https://www.ine.es/dyngs/Prensa/EACL2025.htm) (€37,717.75 / €27,817.39) — **industry benchmark (Spain)**; the INE does not break this down by a finer branch of activity, so the Services sector as a whole is taken as a proxy for architecture |
| Overheads / industrial profit (cost floor) | 13% / 6% | By analogy with art. 131 of the [General Regulation of the Public Administration Contracts Act (RD 1098/2001)](https://www.boe.es/eli/es/rd/2001/10/12/1098/con) (public works) — **regulatory by analogy**, not a figure specific to the architecture sector |
| SMI (national minimum wage) | €15,120 (2023) / €15,876 (2024) / €16,576 (2025) / €17,094 (2026–2027) | **Regulatory** — [RD 99/2023](https://www.boe.es/buscar/doc.php?id=BOE-A-2023-3982), [BOE-A-2024-2251](https://www.boe.es/buscar/doc.php?id=BOE-A-2024-2251), [BOE-A-2025-2576](https://www.boe.es/buscar/doc.php?id=BOE-A-2025-2576), [BOE-A-2026-3815](https://www.boe.es/buscar/doc.php?id=BOE-A-2026-3815). No Royal Decree published yet for 2027; the 2026 figure is kept |
| Amount→hours conversion rate | 50 × 1.21 (Italian CPI 2016→2024) = €60.5/h | Lower end of the band under art. 6.2 of DM 17/6/2016, updated — **updated regulatory figure** |
| Parameters V, G, Q, P (Italian model): V = PEM (value of the works), G = degree of complexity (Table Z-1), ΣQ = aggregated incidence of the commission's phases (Table Z-2), P = 0.03 + 10/V^0.4 | Tables Z-1 and Z-2 | DM 17/6/2016 — **regulatory (Italy)**; the G and ΣQ used by this tool are an indicative aggregated categorisation, not the decree's line-by-line breakdown — see [Legal Framework]({{ '/en/marco-legal/' | relative_url }}) |
| DM 2016 public-works maximum rebate | 65% fixed / 35% open to rebate; 20% for direct award (< €140,000) | As of 1/1/2025, the Italian *Codice dei Contratti Pubblici* (D.Lgs. 209/2024, amending D.Lgs. 36/2023) limits the admissible rebate on the DM 17/6/2016 parametric tariff: in a tender, 65% of the tariff is fixed (not reducible) and only the remaining 35% can be rebated, which sets the maximum discount range; for direct award (commissions under €140,000), the maximum admissible rebate is 20% — **regulatory (Italy)**, cited as a comparative reference, not applicable in Spain |
| % of PEM (SEGIPSA) | 6.65%–3.08% depending on bracket and item | [Resolution of 11/5/2015](https://www.boe.es/eli/es/res/2015/05/11/(2)) (BOE 27/5/2015) — **regulatory**, verified against the official text |

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

## 2. Derivation of the cost floor (€44.79/h)

1. Reference gross remuneration: **€29,496.50/year**.
2. × employer cost-multiplier coefficient (1.356 — *INE, EACL 2025, Services
   sector*): gross cost to the employer.
3. ÷ (1,792 annual hours × 59.3% utilization rate — *Deltek Clarity A&E*):
   cost per effectively billable hour.
4. × (1 + 13% overheads + 6% industrial profit): adds overheads and
   industrial profit by analogy with art. 131 RGLCAP.
5. Result: **€44.79/h**.

This floor answers the question "how much does it cost a practice to
produce one hour of work, including its margin?" — it is a **cost** floor,
not an anti-discrimination floor. A fee below this floor is not necessarily
discriminatory, but it does indicate a price lower than adequate.

**Note — cost-coverage threshold (without industrial profit):** of the two
components in step 4, only overheads (GG) are a real operating cost for
the practice; industrial profit (BI) is margin, not cost. Repeating the
calculation with only the overheads applied (× 1.13, without the
industrial profit) gives **€42.54/h**: the threshold below which a
practice does not even cover its real costs. This distinction matters
because art. 17 of the [Ley 3/1991, de 10 de enero, de Competencia Desleal](https://www.boe.es/eli/es/l/1991/01/10/3/con)
(Spain's Unfair Competition Act, "venta a pérdida" / selling at a loss)
treats selling below **cost** — not below cost plus profit — as unfair.
The full cost floor (with industrial profit) is therefore stricter than
the legal no-dumping threshold, which sits at €42.54/h.

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
which do not depend on the chosen year in this tool, although they do
update de facto with construction-cost inflation, since both are
calculated as a percentage of the PEM (value of the works). The band
estimator defaults to the current year; the pay-discrimination evaluator
requires an explicit choice of year, with no default, so as not to
presuppose a given year in a comparative calculation.

| Year | Collective-agreement salary | SMI | MEF floor (collective agreement) | MEF floor (SMI) | Cost floor | Notes |
|---|---|---|---|---|---|---|
| 2023 | €28,027 | €15,120 | €30.61/h | €21.03/h | €44.79/h | Collective-agreement salary and SMI are official 2023 figures; utilization rate and cost-multiplier coefficient have no edition of their own for that year, so the same FY2025 Deltek / EACL 2025 figures used for every other year apply |
| 2024 | €28,664 | €15,876 | €31.08/h | €21.59/h | €44.79/h | All figures are official or the reference benchmark (FY2025 Deltek, EACL 2025) verified for this year |
| 2025 | €28,664 *(no agreed table; 2024 kept)* | €16,576 | €31.08/h | €22.11/h | €44.79/h | Official 2025 SMI; utilization rate and cost-multiplier coefficient with the latest published editions (Deltek FY2025, EACL 2025) |
| 2026 | €28,664 *(no agreed table; 2024 kept)* | €17,094 | €31.08/h | €22.49/h | €44.79/h | Official 2026 SMI; utilization rate and cost-multiplier coefficient with no more recent edition, Deltek FY2025 / EACL 2025 kept |
| 2027 | €28,664 *(no agreed table; 2024 kept)* | €17,094 *(no RD published; 2026 kept)* | €31.08/h | €22.49/h | €44.79/h | A year with no figure of its own published yet; all figures are the latest available |

The cost floor does not change between 2023 and 2027 because its only three
year-sensitive inputs — the reference gross remuneration (ACE 2020, a
working assumption kept at a fixed figure), the Deltek utilization rate
(FY2025, the only architecture-specific figure available) and the
employer cost-multiplier coefficient (EACL 2025, Services sector) — are
held constant for lack of an applied time series. The year selector is
already set up to reflect the change automatically once a new edition of
the Deltek study, the EACL, or an updated working assumption for gross
remuneration becomes available.

ACE does publish a per-country series every two years (Spain country
profile, 2014–2024, in *The Architectural Profession in Europe 2024*,
Mirza & Nacey Research Ltd, April 2025, p. 103), but this tool does not
chain the figure automatically to each new edition: in that same series,
earnings for private-sector partners/directors in Spain go from
€26,000/year (2018) to €30,000 (2020), €37,000 (2022) and €35,000
(2024) — swings larger than one would expect from a stable variable,
which may reflect methodological changes not always made explicit
between editions (which countries took part, whether figures are PPP-
adjusted, the exchange-rate date used) or high sensitivity to the size
and composition of the survey sample: for Spain, the number of
responses ranges from 198 to 847 depending on the edition, with a margin
of error of ±3.3% to ±7.0% (95% confidence). For that reason the working
assumption is reviewed manually against each new edition rather than
chained to it automatically.

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
market rate for principals (€39–41/h) sits above the MEF floor
(€31.08/h), but **below** both the cost-coverage threshold without
industrial profit (€42.54/h, see section 2) and the full cost floor
(€44.79/h). In other words, the rate actually billed on average in the
Spanish market does not cover the real cost of producing that hour of
work — consistent with this methodology's underlying diagnosis that
market fees tend to sit below the real cost of the service.

Source: *The Architectural Profession in Europe 2024*, Mirza & Nacey
Research Ltd, April 2025, Table 3-5, p. 40.

### 7.2 Indicative reference values under Directive (EU) 2022/2041

Art. 5(4) of [Directive (EU) 2022/2041 of the European Parliament and of
the Council of 19 October 2022 on adequate minimum wages in the European
Union](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022L2041)
provides that Member States may use internationally common indicative
reference values to assess the adequacy of their statutory minimum
wages: 60% of the gross median wage or 50% of the gross average wage.
Applied to Spain's gross median and average wage for 2024 (INE,
*Decil de salarios del empleo principal*, press release of 14/11/2025),
these criteria give the following indicative HME:

| | From the median wage | From the average wage |
|---|---|---|
| Indicative HME (60% median / 50% average) | €2,001.40/month · €24,016.80/year | €2,385.60/month · €28,627.20/year |
| Operating expenses and social security | €17,294.54/year | €18,816.00/year |
| Resulting HME | €41,311.34/year | €47,443.20/year |
| HME per hour (1,760 h/year working time) | €23.47/h | €26.96/h |

This estimate uses an annual working time (1,760 h) and a composition of
operating expenses and social security contributions different from this
methodology's own (1,792 h, 33.01% contribution rate + €17,569/year in
Madrid operating costs), so it is not directly interchangeable with the
MEF floor in sections 2 and 3 — but it confirms that both approaches —
the collective agreement/SMI basis on one hand, and the Directive's
art. 5(4) indicative values on the other — place the anti-discrimination
floor for a self-employed architect in a similar range, roughly
€21–31/h depending on the chosen reference salary base.

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

**Last updated**: October 2026
