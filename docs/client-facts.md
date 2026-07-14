# Ogden Rock Walls — client facts

The source of truth for every factual claim on ogdenrockwalls.com. The `review-gate` agent reads
this file before any push and blocks content that contradicts it or invents claims it can't find
here.

**How to read a status:**

- **CONFIRMED** — Ross built and reviewed this site and stands behind the claim. Trustworthy.
  Beats the diff, beats the repo, beats the live site.
- **UNCONFIRMED** — the site contradicts *itself* on this point. Two or more versions of the same
  claim are live at once, so at most one of them can be true. Nobody can confirm the claim until
  Ross picks a version and the losing version is removed from the site.
- **SUPERSEDED &lt;date&gt;** — was true, now replaced. Kept, never deleted, so the history is
  auditable.

**How this file grows:** append only. Never edit or delete an entry. When the review gate blocks a
push it asks Ross a question; his answer gets appended here, dated and sourced, and the gate is
smarter on the next run.

Note on this repo: the site is an **Astro** project. Source lives in `src/` (`src/pages/*.astro`,
`src/components/`, `src/content/`, `src/data/business.json`); the rendered HTML a visitor actually
sees lives in `dist/`. Where the two disagree, `dist/` is what shipped.

Entry format:

```
- **[CONFIRMED|UNCONFIRMED]** <the fact, stated plainly and checkably>
  - Source: <who said it and how> — <YYYY-MM-DD>
```

---

## Confirmed

### Business identity

- **CONFIRMED** The site trades as **Ogden Rock Walls**, "A Division of AccuRite Excavation &
  Hauling, Inc." The legal entity behind it is AccuRite Excavation & Hauling, Inc.
  - Source: Ross built and reviewed these sites; blanket-confirmed — 2026-07-14

- **CONFIRMED** The site's phone number is **(385) 832-6596**. This is the number in the header,
  footer, contact page, every location page, and `src/data/business.json`. (Four blog posts carry a
  different number — see the UNCONFIRMED phone entry below.)
  - Source: Ross built and reviewed these sites; blanket-confirmed — 2026-07-14

- **CONFIRMED** Email **office@accuriteex.com**; office address **2940 Midland Dr, Ogden, UT
  84401**.
  - Source: Ross built and reviewed these sites; blanket-confirmed — 2026-07-14

- **CONFIRMED** Weekday hours are **Mon–Fri 7am–5pm**. (Saturday hours are contradicted — see the
  UNCONFIRMED hours entry below.)
  - Source: Ross built and reviewed these sites; blanket-confirmed — 2026-07-14

### Services offered

- **CONFIRMED** Seven services, sitewide and identical in the nav, footer, `/services/`, and
  `src/data/business.json`: **Rock & Boulder Retaining Walls, Concrete Block Retaining Walls,
  Retaining Wall Repair, Drainage Solutions, Erosion Control, Landscape Grading, Commercial
  Projects.**
  - Source: Ross built and reviewed these sites; blanket-confirmed — 2026-07-14

- **CONFIRMED** The company owns its heavy equipment — "We own excavators, skid steers, and hauling
  trucks — no rental delays" — and does not rent machines or subcontract the earthwork: "We don't
  rent machines or subcontract earthwork — we do it ourselves."
  - Source: Ross built and reviewed these sites; blanket-confirmed — 2026-07-14

- **CONFIRMED** Boulder-placement capability is stated as "We can place 5-ton boulders that smaller
  landscaping crews simply can't handle."
  - Source: Ross built and reviewed these sites; blanket-confirmed — 2026-07-14

### Service area

- **CONFIRMED** **19 cities across 4 counties.** Weber: Ogden, North Ogden, South Ogden, Roy, West
  Haven, Plain City, Riverdale, Washington Terrace, Eden, Huntsville. Davis: Layton, Clearfield,
  Syracuse, Kaysville, Farmington, Bountiful. Box Elder: Brigham City, Perry. Morgan: Morgan. The
  `/about/` page states this as "19 Communities Served / 4 Counties Covered" and it matches the
  footer, nav, and `src/data/business.json` exactly.
  - Source: Ross built and reviewed these sites; blanket-confirmed — 2026-07-14

### Legal / licensing / bonding — highest risk, a regulator can check these

- **CONFIRMED** "AccuRite Excavation & Hauling, Inc. is a fully licensed Utah contractor with
  comprehensive general liability and workers' compensation insurance. We carry the bonding required
  for commercial and government projects." The site says **Licensed, Bonded, and Insured**. No
  license number, DOPL reference, or BBB claim appears anywhere on the site.
  - Source: Ross built and reviewed these sites; blanket-confirmed — 2026-07-14

- **CONFIRMED** The site claims it **handles permitting for the customer**. Exact wordings in use:
  "We handle the permit process and work with local engineers when required" (all 19 location
  pages); "We handle the permitting process for you" (/retaining-walls-utah/); "We pull permits,
  meet code, and stand behind our work" (/retaining-walls-utah/); "Ogden Rock Walls handles the
  entire process — from engineering to permits to construction" (blog: retaining-wall-permit-ogden).
  - Source: Ross built and reviewed these sites; blanket-confirmed — 2026-07-14
  - **Flag for the gate:** this is a legally weighted promise. Any *stronger* wording — guaranteeing
    permit approval, guaranteeing an engineer's stamp, or implying in-house licensed engineers —
    goes beyond what is confirmed here and must be blocked.

- **CONFIRMED** Engineering is **coordinated, not performed in-house**. The site says it builds
  "from engineer-stamped plans and work[s] directly with geotechnical and structural engineers," and
  offers "design-build services where we handle engineering coordination through our **network of
  licensed structural engineers**." Nowhere does the site claim to employ a licensed PE.
  - Source: Ross built and reviewed these sites; blanket-confirmed — 2026-07-14
  - **Flag for the gate:** copy that says or implies "our engineers," "we engineer and stamp your
    plans," or "in-house PE" contradicts this and must be blocked.

- **CONFIRMED** Permit threshold as stated sitewide: retaining walls **over 4 feet** typically
  require a building permit and may need engineered plans; walls under 4 feet typically do not. This
  is repeated on every location page, /retaining-walls-utah/, and the permit blog post.
  - Source: Ross built and reviewed these sites; blanket-confirmed — 2026-07-14

### Pricing claims

- **CONFIRMED** Service-specific pricing, each stated once and not contradicted elsewhere:
  - Boulder retaining walls: "**$25-$50 per square foot** of wall face" (/services/rock-boulder-retaining-walls/)
  - Concrete block retaining walls: "**$20-$40 per square foot** of wall face" (/services/concrete-block-retaining-walls/)
  - Standalone drainage (French drains, yard drainage): "**$25-$50 per linear foot**" (/services/drainage-solutions/)
  - Landscape grading: "**$1,500-$5,000** for residential projects" (/services/landscape-grading/)
  - Whole-project ballpark: "Most homeowners in northern Utah spend somewhere between **$3,000 and
    $15,000+**" (blog: retaining-wall-cost-utah)
  - Source: Ross built and reviewed these sites; blanket-confirmed — 2026-07-14
  - Note: the *generic* per-square-foot retaining wall range is contradicted — see the UNCONFIRMED
    pricing entry below.

- **CONFIRMED** **Free estimates.** "Free on-site estimates," "no cost, no pressure, no obligation,"
  and "detailed written quote." Estimates are on-site, not phoned in. No fee is charged for a quote.
  - Source: Ross built and reviewed these sites; blanket-confirmed — 2026-07-14

### Project timelines and wall lifespan

- **CONFIRMED** "Most residential retaining walls take **2-5 days** to complete once we start. Larger
  projects or walls requiring engineered plans may take **1-2 weeks**."
  - Source: Ross built and reviewed these sites; blanket-confirmed — 2026-07-14

- **CONFIRMED** Lifespan claims: boulder walls "last **50-100+ years**"; block walls "last **50+
  years** when properly installed with adequate drainage."
  - Source: Ross built and reviewed these sites; blanket-confirmed — 2026-07-14

### Warranties, testimonials, badges

- **CONFIRMED** The site offers **no written warranty or guarantee of workmanship** anywhere. The
  only "guarantee" wording on the site is a **trust badge image** (`badge-quality-guaranteed.webp`,
  alt text "Quality guaranteed retaining wall contractor") and the standard terms-page disclaimer.
  - Source: Ross built and reviewed these sites; blanket-confirmed — 2026-07-14
  - **Flag for the gate:** any new copy asserting a specific warranty term ("10-year structural
    warranty," "lifetime guarantee," etc.) is a new claim, not supported by anything on the site,
    and must be blocked.

- **CONFIRMED** Four testimonials are published, attributed by first name + initial only: **Mike R.
  (Ogden), Sarah T. (Layton), David K. (Roy)** — homepage and /retaining-walls-utah/ — and **Steve
  D. (Washington Terrace)** on the Washington Terrace location page.
  - Source: Ross built and reviewed these sites; blanket-confirmed — 2026-07-14

- **CONFIRMED** Five trust badges display sitewide: 26+ Years, Quality Guaranteed, Top Rated,
  Locally Owned, Utah Approved. None is a third-party certification (no BBB, no Angi, no Google
  badge).
  - Source: Ross built and reviewed these sites; blanket-confirmed — 2026-07-14

### Named third parties

- **CONFIRMED** The site names **no organization as a client, customer, reference, or past project**.
  The only proper nouns from outside the business are (a) block *manufacturers* named as product
  examples — Allan Block, Versa-Lok, Pavestone — and (b) *municipal permit offices* linked as
  resources (Ogden City, Layton City Building Division, Weber/Davis/Box Elder county permit pages).
  Neither category is presented as a customer.
  - Source: Ross built and reviewed these sites; blanket-confirmed — 2026-07-14
  - **Flag for the gate:** this site is currently clean of the named-client risk. Any new copy that
    names a company, agency, or institution as a customer or past project is a brand-new claim and
    must be blocked until Ross confirms it individually.

---

## Unconfirmed — self-contradictions

Every item below is a claim the site makes **two different ways at the same time**. They cannot be
blanket-confirmed, because confirming one version would be confirming a claim the site itself
disproves on another page. Ross picks a version; the losing version has to come off the site.

- **UNCONFIRMED** The business's phone number.
  - Version A: **"(385) 832-6596"** — header, footer, contact page, all 19 location pages, all 7
    service pages, homepage, /retaining-walls-utah/, and `src/data/business.json`.
  - Version B: **"(385) 312-0606"** — the closing call-to-action of **all four blog posts**:
    `dist/blog/retaining-wall-cost-utah/`, `dist/blog/boulder-vs-block-retaining-walls/`,
    `dist/blog/retaining-wall-permit-ogden/`, `dist/blog/signs-retaining-wall-failing/` (hardcoded
    in `src/content/blog/*.md`, so it bypasses `business.json`).
  - Why unconfirmed: the site contradicts itself; both cannot be true. Ross must pick one. This is
    the highest-impact contradiction on the site — if (385) 312-0606 is not a live, tracked line,
    every blog reader who calls it is a lead that vanishes.
  - Source: extracted 2026-07-14

- **UNCONFIRMED** The generic per-square-foot price of a retaining wall in Northern Utah.
  - Version A: **"Retaining wall costs in [city] typically range from $20-$50 per square foot of
    wall face"** — all 19 location pages (e.g. `dist/locations/ogden/`, `dist/locations/layton/`).
  - Version B: **"Retaining wall costs in Northern Utah typically range from $25 to $75 per square
    foot"** — `dist/retaining-walls-utah/`, FAQ "How much does a retaining wall cost in Utah?".
  - Why unconfirmed: the site contradicts itself; both cannot be true. Ross must pick one. Same
    claim (all-in retaining wall cost per sq ft, same market), two incompatible ranges — the ceiling
    differs by 50%.
  - Source: extracted 2026-07-14

- **UNCONFIRMED** Saturday hours.
  - Version A: **"Mon-Fri: 7am-5pm | Sat: By Appointment"** — the visible top bar, footer, and
    contact page on every single page of the site (`business.hours.display`).
  - Version B: **`"Sa 08:00-12:00"`** — the LocalBusiness JSON-LD `openingHoursSpecification`
    emitted into every page's `<head>` (`business.hours.schema` in `src/data/business.json`, read by
    `src/layouts/BaseLayout.astro`).
  - Why unconfirmed: the site contradicts itself; both cannot be true. Ross must pick one. The
    structured data tells Google the business is open to walk-ins 8am–12pm Saturday; the visible copy
    tells the customer Saturday is appointment-only.
  - Source: extracted 2026-07-14

- **UNCONFIRMED** The review count and star rating.
  - Version A: **`"aggregateRating": { "ratingValue": "4.9", "reviewCount": "47" }`** — hardcoded
    into the LocalBusiness JSON-LD in `src/layouts/BaseLayout.astro` (lines 64–70) and therefore
    published in the `<head>` of every page in `dist/`.
  - Version B: **no rating and no review count appear anywhere a visitor can see them.** The site
    displays four first-name testimonials (Mike R., Sarah T., David K., Steve D.) and a
    non-specific "Top Rated" badge image — nothing that adds up to 47 reviews or a 4.9 average.
  - Why unconfirmed: the site contradicts itself; both cannot be true. Ross must pick one. Either
    the 47/4.9 figure is real and traceable to a review platform (in which case it should appear on
    the page too), or it is a placeholder — and a placeholder aggregateRating shipped to Google is a
    fabricated review claim, which is a live FTC/Google-penalty exposure. This is the single
    riskiest entry in this file.
  - Source: extracted 2026-07-14

- **UNCONFIRMED** Years in business.
  - Version A: **"26+ years"** — this site, everywhere: homepage hero ("backed by 26+ years of
    excavation expertise"), `/about/` ("Built on 26+ Years of Excavation Expertise", "26+ / Years in
    Business"), all 19 location pages ("26+ years experience"), the 26-years trust badge, and
    `src/data/business.json` (`"yearsInBusiness": "26+"`) — all describing the *same legal entity*,
    AccuRite Excavation & Hauling, Inc.
  - Version B: **founded 1995 / "Serving the Wasatch Front since 1995" / "In business 31+ years"** —
    AccuRite's own site, recorded at
    `/Users/rosswalker/projects/accurite-excavation/docs/client-facts.md`.
  - Why unconfirmed: the site contradicts itself; both cannot be true. Ross must pick one. Ogden
    Rock Walls is explicitly branded as a division of AccuRite Excavation & Hauling, Inc. and its
    26-year claim is a claim about AccuRite's own history — so AccuRite cannot have been founded in
    1995 *and* have 26 years of history in 2026. The two numbers are five years apart. (Both figures
    are currently unverified; AccuRite's 1995 date is itself flagged UNCONFIRMED in that repo's
    facts file.)
  - Source: extracted 2026-07-14

---

## Open questions for Ross

Answer these in one sitting and everything above flips to CONFIRMED.

1. Which phone number is live and tracked — (385) 832-6596 or (385) 312-0606? The four blog posts
   use the second one and nothing else on the site does.
2. Is the generic retaining-wall price range $20–$50/sq ft (location pages) or $25–$75/sq ft
   (/retaining-walls-utah/)?
3. Is Saturday appointment-only, or open 8am–12pm? The visible copy and the Google structured data
   disagree.
4. Is the 4.9 rating / 47 reviews in the JSON-LD real and traceable to a review platform, or is it a
   placeholder that needs to come out of `src/layouts/BaseLayout.astro` today?
5. When was AccuRite Excavation & Hauling, Inc. actually founded? This site says 26+ years;
   accuriteexcavation.com says 1995.
