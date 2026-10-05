---
layout: page
lang: en
title: "Fee band estimator"
---

[← Back to Tools]({{ '/en/herramientas/' | relative_url }})

{% include beta-notice.html %}

This tool answers a different question from the
[pay-discrimination evaluator]({{ '/en/herramientas/evaluador/' | relative_url }}):
instead of comparing an amount already offered or awarded, it calculates
**in advance** a band of objective references for a commission to **draft a
project and/or supervise a site**, based on its PEM (construction budget),
its building type and its scope.

> Just as the collectively-bargained salary is public information, a
> self-employed professional's equivalent remuneration should be openly
> consultable. Hiding that figure perpetuates the information asymmetry
> that HME/MEF wants to correct. Publishing a band of cost and value
> references — open, with their origin documented and checkable by anyone —
> is not the same as a professional-association tariff: the case law (CJEU
> *Cipolla*, see [Legal Framework]({{ '/en/marco-legal/' | relative_url }}))
> distinguishes by who sets the figure and how, not by whether the figure is
> public.

**This is not a tariff, a fee scale, or a recommended fee.** No professional
is obliged to fall within the band or above it; it is a cost-and-value
reference for reasoning about one's own quote, with the origin of every
input made explicit in the
[technical methodology]({{ '/en/herramientas/metodologia/' | relative_url }}).

<div style="margin:24px 0;">
  <iframe src="{{ '/en/herramientas/calculadora-estimacion.html' | relative_url }}"
          style="width:100%; height:1500px; border:none; border-radius:8px;"
          title="Reference fee band estimator">
  </iframe>
</div>

---

### What it calculates

The band runs from the **MEF floor** (the anti-discrimination minimum: what
it would cost to hire an employee with the same qualification) up to the
higher of two external **value references**:

| Reference | What it measures |
|---|---|
| **MEF floor** | Opportunity cost — what it would cost to hire an employee with the same qualification. Anti-discrimination floor, always calculated on the collective-agreement salary (not the SMI: as an activity that legally requires a specific qualification and authorisation, the SMI is not an adequate comparator; the SMI is the reference where there is no such requirement). |
| **Cost floor** | The practice's real production cost (salary + overheads + industrial profit). |
| **SEGIPSA** (BOE 27/5/2015) | % of PEM that the Spanish General State Administration itself applies to its own commissioned work. |
| **Italy** (DM 17/6/2016) | A value-based fee model in force in the EU, cited as a comparative reference. |

Commission hours (HME) are estimated automatically using the same method as
the pay-discrimination evaluator: the DM 17/6/2016 formula
(CP = V·G·ΣQ·P) applied to the PEM, the chosen building type/complexity and
scope.

Besides the band, the calculator shows two **comparative references**
(dashed line), informative and not binding in Spain:

| Reference | What it measures |
|---|---|
| **Anti-dumping floor** | Threshold for covering the practice's real costs, without industrial profit. Below it, selling is treated as below-cost under art. 17 of Spain's Unfair Competition Act (Ley 3/1991). It shares a legal basis with the MEF floor: both converge on the same practical floor from different premises (a competing business vs. equivalence to employed work) — see the [technical methodology]({{ '/en/herramientas/metodologia/' | relative_url }}). |
| **Italy, fixed share** (public commissions only) | Non-discountable share in Italian public tenders: 65% of the fee if ≥€140,000, 80% if below that (art. 41.15-bis of the Codice dei Contratti Pubblici). Italian regulation, not binding in Spain. |

### Caveats

- It does not replace professional judgement about the specific commission,
  nor is it legal advice.
- No point on the band is a price to be charged: each professional sets
  their own fee freely, above or below any of these references, except for
  the MEF floor, which marks the anti-discrimination threshold.
- Monetary values should be updated periodically in line with CPI.

---

## More information

[**Pay-discrimination evaluator →**]({{ '/en/herramientas/evaluador/' | relative_url }})
[**See the calculator's technical methodology →**]({{ '/en/herramientas/metodologia/' | relative_url }})
[**See the full Legal Framework →**]({{ '/en/marco-legal/' | relative_url }})

---

**Last updated**: October 2026
