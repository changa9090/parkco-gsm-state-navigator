/* PNC Legal Pty Ltd t/a Park & Co Lawyers — GSM Points (189·190·491 Schedule 6D) & 8-State Nomination Navigator */
(function () {
  "use strict";

  const DEFAULT_SOURCES = [{"id": "migration_regs_sch6d", "category": "Federal Legislation", "name_ko": "Migration Regulations 1994 — Schedule 6D (General Points Test 189/190/491) & LIN 19/210", "name_en": "Migration Regulations 1994 — Schedule 6D (General Points Test) & Pool/Pass Mark 65 (LIN 19/210)", "authority": "Federal Register of Legislation", "url": "https://www.legislation.gov.au/F1996B03551/latest/text", "method": "FRL Compilation Store (meta.json + clauses.jsonl)", "cadence": "Monthly", "tracks": "Part 6D.1–6D.13 points items, 6D51 20-pt combined employment cap, 190 (+5 pts) & 491 (+15 pts)", "status": "verified_ok", "freshness": "live_verified", "http_status": 200, "last_checked": "2026-10-28T13:35:37+10:00", "last_verified_ok": "2026-10-28T13:35:37+10:00", "sha256_prefix": "a964fbdacae4f71a", "content_length": 3580174, "live_method": "frl-legis-store-c289-F2026C01017", "compilation": "289", "register_id": "F2026C01017", "effective_start": "2026-10-02", "clause_count": 2599}, {"id": "dha_189_190_491_vac", "category": "DHA Pricing API", "name_ko": "이민성 기술이민 비자 신청비 (GetPriceList — 189 $6,135 · 190/491 $6,140 · 191 $630)", "name_en": "Home Affairs Live Visa Pricing API (GetPriceList — 189 $6,135 · 190/491 $6,140 · 191 $630)", "authority": "Department of Home Affairs", "url": "https://immi.homeaffairs.gov.au/_layouts/15/api/data.aspx/GetPriceList", "method": "JSON POST API", "cadence": "Monthly (1 July Indexation)", "tracks": "189 Base $6,135; 190/491 Base $6,140 (18+ $3,070, <18 $1,535); 191 PR Base $630 (18+ $315, <18 $160)", "status": "verified_ok", "freshness": "live_verified", "http_status": 200, "last_checked": "2026-10-28T13:35:37+10:00", "last_verified_ok": "2026-10-28T13:35:37+10:00", "sha256_prefix": "0ab169e8525c9030", "content_length": 247792, "live_method": "dha-json-api-post"}, {"id": "dha_subclass_191_pr", "category": "Federal PR Pathway", "name_ko": "Subclass 191 (Permanent Residence — Skilled Regional) 영주권 전환 요건 (cl 191.212 / 191.214)", "name_en": "Subclass 191 (Permanent Residence — Skilled Regional) Criteria (cl 191.212 / 191.214)", "authority": "Department of Home Affairs", "url": "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-regional-191", "method": "SharePoint PageSchemaHiddenField JSON", "cadence": "Monthly", "tracks": "3 yrs on 491/494, 3 ATO NOAs, $0 minimum taxable income requirement (no $53,900 threshold), Condition 8579 compliance", "status": "verified_ok", "freshness": "live_verified", "http_status": 200, "last_checked": "2026-10-28T13:35:37+10:00", "last_verified_ok": "2026-10-28T13:35:37+10:00", "sha256_prefix": "89c65d3c3519b88b", "content_length": 1295378, "live_method": "https-direct-live"}, {"id": "dha_skillselect_rounds", "category": "SkillSelect Rounds", "name_ko": "SkillSelect 초청 라운드 직군별 컷오프(139개 직군) 및 주정부 노미네이션 연간 쿼터(20,350석)", "name_en": "SkillSelect Invitation Round Cut-Offs (139 Occupations) & State Nomination Allocations (20,350 Places)", "authority": "Department of Home Affairs", "url": "https://immi.homeaffairs.gov.au/visas/working-in-australia/skillselect/invitation-rounds", "method": "PageSchemaHiddenField HTML Table Parser", "cadence": "Weekly", "tracks": "139 occupation minimum scores invited, tie-break dates, and 8-state 190/491 YTD nominations vs 20,350 quota", "status": "verified_ok", "freshness": "live_verified", "http_status": 200, "last_checked": "2026-10-28T13:35:37+10:00", "last_verified_ok": "2026-10-28T13:35:37+10:00", "sha256_prefix": "812cf87169ce9c23", "content_length": 1346991, "live_method": "https-direct-live"}, {"id": "qld_migration", "category": "QLD State Nomination", "name_ko": "퀸즐랜드 주정부 노미네이션 (Migration Queensland — 190 9개월 / 491 6개월 · 졸업생 · 건설우대)", "name_en": "Migration Queensland (QLD 190/491 Skilled Workers, Graduates, Construction & SBO Rules)", "authority": "Migration Queensland", "url": "https://www.migration.qld.gov.au/visa-options/skilled-visas", "method": "State Portal HTML Parser", "cadence": "Weekly", "tracks": "ROI required, Fee $630.30 (onshore)/$573 (offshore), 190 9m work+12m offer, 491 6m regional work+6m offer, SBO closed post-19 Sep 2025", "status": "verified_ok", "freshness": "live_verified", "http_status": 200, "last_checked": "2026-10-28T13:35:37+10:00", "last_verified_ok": "2026-10-28T13:35:37+10:00", "sha256_prefix": "dee54e978e36229f", "content_length": 37472, "live_method": "https-direct-live"}, {"id": "nsw_migration", "category": "NSW State Nomination", "name_ko": "뉴사우스웨일스 주정부 노미네이션 (Investment NSW — 190 및 491 Pathway 1·2·3)", "name_en": "Investment NSW (Subclass 190 & Subclass 491 Pathways 1, 2 & 3 Regional Graduate)", "authority": "Investment NSW", "url": "https://www.nsw.gov.au/visas-and-migration/skilled-visas", "method": "State Portal HTML Parser", "cadence": "Weekly", "tracks": "Fee $346.50/$315, 190 6m residency, 491 Path 1 (6m regional work @ TSMIT/CSIT), Path 2 (EOI invite 3m), Path 3 (Regional NSW Graduate 0m work)", "status": "verified_ok", "freshness": "live_verified", "http_status": 200, "last_checked": "2026-10-28T13:35:37+10:00", "last_verified_ok": "2026-10-28T13:35:37+10:00", "sha256_prefix": "ebe865a062ac4d57", "content_length": 161648, "live_method": "https-direct-live"}, {"id": "vic_migration", "category": "VIC State Nomination", "name_ko": "빅토리아 주정부 노미네이션 (Live in Melbourne — ROI · 빅토리아 숙련 연봉 평가 · 지방 491)", "name_en": "Live in Melbourne (VIC 190/491 ROI, Victorian Points Test & Onshore Skilled Earnings)", "authority": "Live in Melbourne (Victorian Government)", "url": "https://liveinmelbourne.vic.gov.au/migrate/skilled-migration-visas", "method": "State Portal HTML Parser", "cadence": "Weekly", "tracks": "ROI ($66) + Nomination ($198), Victorian skilled earnings assessment (ANZSCO 1-3), Onshore 491 requires Regional VIC residence & skilled work", "status": "verified_ok", "freshness": "live_verified", "http_status": 200, "last_checked": "2026-10-28T13:35:37+10:00", "last_verified_ok": "2026-10-28T13:35:37+10:00", "sha256_prefix": "0767e054fbb38f66", "content_length": 107939, "live_method": "https-direct-live"}, {"id": "wa_migration", "category": "WA State Nomination", "name_ko": "서호주 주정부 노미네이션 (Migration WA — 신청비 $0 · 졸업생 무경력 · 491 고용계약 면제)", "name_en": "Migration WA (WASMOL Sch 1/2 & Graduate Stream — $0 Fee, Contract Waivers)", "authority": "Migration WA", "url": "https://migration.wa.gov.au/our-services-support/state-nominated-migration-program", "method": "State Portal HTML Parser", "cadence": "Weekly", "tracks": "$0 fee, No ROI, WA residents prioritized, 190 6m contract (waived for Construction & WA Graduates), 491 requires NO employment contract", "status": "verified_ok", "freshness": "live_verified", "http_status": 200, "last_checked": "2026-10-28T13:35:37+10:00", "last_verified_ok": "2026-10-28T13:35:37+10:00", "sha256_prefix": "8c02090280384dc7", "content_length": 335771, "live_method": "https-direct-live"}, {"id": "sa_migration", "category": "SA State Nomination", "name_ko": "남호주 주정부 노미네이션 (Move to South Australia — SA 취업 · SA 졸업생 · 외곽지방 · 해외)", "name_en": "Skilled & Business Migration SA (Onshore ROI, SA Graduates, Outer Regional SA & Offshore)", "authority": "Department of State Development SA", "url": "https://www.migration.sa.gov.au/visa-options/skilled-visas", "method": "State Portal HTML Parser", "cadence": "Weekly", "tracks": "Fee $394, Onshore ROI ($0), 190 (6-12m @ 30h/wk), 491 (6m @ 20h/wk), SA Graduates (75% SA study), Outer Regional SA (9m/6m)", "status": "cached_last_good", "freshness": "cached_snapshot", "http_status": 503, "last_checked": "2026-10-28T13:35:37+10:00", "last_verified_ok": "2026-10-22T12:30:54+10:00", "sha256_prefix": "97f213445293cdc6", "content_length": 219763, "live_method": "cached-last-good"}, {"id": "tas_migration", "category": "TAS State Nomination", "name_ko": "태즈메이니아 주정부 노미네이션 (Migration Tasmania Gateway — Gold/Green/Orange Pass 6대 경로)", "name_en": "Migration Tasmania Gateway (Gold/Green/Orange-Plus/Orange Pass & 6 Pathways)", "authority": "Migration Tasmania", "url": "https://www.migration.tas.gov.au/skilled_migration", "method": "State Portal HTML Parser", "cadence": "Weekly", "tracks": "Fee $425.70, TSE (190: 6/9/15m @ 20h/wk; 491: 6m), TSG Graduate (190: 2yr study; 491: 1yr study, 0m work required), TER (3yr/2yr)", "status": "verified_ok", "freshness": "live_verified", "http_status": 200, "last_checked": "2026-10-28T13:35:37+10:00", "last_verified_ok": "2026-10-28T13:35:37+10:00", "sha256_prefix": "9b99e19295d157ef", "content_length": 25391, "live_method": "https-direct-live"}, {"id": "act_migration", "category": "ACT Territory Nomination", "name_ko": "호주 수도준주 노미네이션 (Canberra Matrix — 190 6개월/26주 · 491 3개월/13주 · 박사/482/SBO 특례)", "name_en": "ACT Canberra Matrix (Resident 190 26/30 wks · 491 3m/13 wks · PhD, SBO & 482 Streams)", "authority": "ACT Government Migration", "url": "https://www.act.gov.au/migration/skilled-migrants", "method": "Territory Portal HTML Parser", "cadence": "Weekly", "tracks": "Matrix Fee $27.50 + Nom Fee $357.50, 190 (6m res + 30h/wk 26/30w + Proficient Eng unless SL3-5/Chef), 491 (3m res + 15h/wk 13/15w), ACT PhD $0 fee", "status": "verified_ok", "freshness": "live_verified", "http_status": 200, "last_checked": "2026-10-28T13:35:37+10:00", "last_verified_ok": "2026-10-28T13:35:37+10:00", "sha256_prefix": "a5c5e2a8b1b273a9", "content_length": 40344, "live_method": "https-direct-live"}, {"id": "nt_migration", "category": "NT Territory Nomination", "name_ko": "노던준주 노미네이션 (MigrationNT — 직접 신청 $300 · NT 졸업생 · 6개월 거주/풀타임 · 해외 491)", "name_en": "MigrationNT (Direct Application $300 — NT Graduates, 6m Full-Time Resident & Offshore 491)", "authority": "MigrationNT", "url": "https://theterritory.com.au/migrate/migrate-to-work/northern-territory-government-visa-nomination", "method": "Territory Portal HTML Parser", "cadence": "Weekly", "tracks": "Fee $300, No ROI pool (direct application), Onshore non-grad 6m res + 6m full-time (35h/wk) + 12m offer, Offshore 491 (Priority/Family/Job Offer)", "status": "verified_ok", "freshness": "live_verified", "http_status": 200, "last_checked": "2026-10-28T13:35:37+10:00", "last_verified_ok": "2026-10-28T13:35:37+10:00", "sha256_prefix": "bbe3b89ac69fbf74", "content_length": 159235, "live_method": "https-direct-live"}];
  const DEFAULT_SKILLSELECT_DATA = {"status": "verified_ok", "http_status": 200, "bytes": 1346991, "sha256": "812cf87169ce9c23942b4b44e53e720bbb1d9071aaf5f4e14d4e7e687bd11545", "sha256_prefix": "812cf87169ce9c23", "latest_round_date": "4 June 2026", "round_summary": [{"subclass": "Skilled Independent visa (subclass 189)", "total_invited": "10,000", "tie_break_date": "24/04/2026"}], "occupation_count": 139, "occupation_cutoffs": [{"occupation": "Actuary", "min_score_189": 90, "min_score_491_fs": "N/A"}, {"occupation": "Agricultural Consultant", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Agricultural Scientist", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Airconditioning and Mechanical Services Plumber", "min_score_189": 65, "min_score_491_fs": "N/A"}, {"occupation": "Airconditioning and Refrigeration Mechanic", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Architect", "min_score_189": 85, "min_score_491_fs": "N/A"}, {"occupation": "Arts Administrator or Manager", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Audiologist", "min_score_189": 75, "min_score_491_fs": "N/A"}, {"occupation": "Automotive Electrician", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Barrister", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Biotechnologist", "min_score_189": 95, "min_score_491_fs": "N/A"}, {"occupation": "Boat Builder and Repairer", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Bricklayer", "min_score_189": 65, "min_score_491_fs": "N/A"}, {"occupation": "Cabinetmaker", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Cardiologist", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Carpenter", "min_score_189": 65, "min_score_491_fs": "N/A"}, {"occupation": "Carpenter and Joiner", "min_score_189": 65, "min_score_491_fs": "N/A"}, {"occupation": "Cartographer", "min_score_189": 85, "min_score_491_fs": "N/A"}, {"occupation": "Chemist", "min_score_189": 85, "min_score_491_fs": "N/A"}, {"occupation": "Child Care Centre Manager", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Chiropractor", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Clinical Psychologist", "min_score_189": 75, "min_score_491_fs": "N/A"}, {"occupation": "Construction Project Manager", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Dancer or Choreographer", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Dermatologist", "min_score_189": 85, "min_score_491_fs": "N/A"}, {"occupation": "Diagnostic and Interventional Radiologist", "min_score_189": 85, "min_score_491_fs": "N/A"}, {"occupation": "Drainer", "min_score_189": 65, "min_score_491_fs": "N/A"}, {"occupation": "Economist", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Electrical Engineering Draftsperson", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Electrical Engineering Technician", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Electrician (General)", "min_score_189": 65, "min_score_491_fs": "N/A"}, {"occupation": "Electrician (Special Class)", "min_score_189": 65, "min_score_491_fs": "N/A"}, {"occupation": "Electronic Equipment Trades Worker", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Electronic Instrument Trades Worker (General)", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Electronic Instrument Trades Worker (Special Class)", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Electronics Engineer", "min_score_189": 95, "min_score_491_fs": "N/A"}, {"occupation": "Emergency Medicine Specialist", "min_score_189": 75, "min_score_491_fs": "N/A"}, {"occupation": "Endocrinologist", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Engineering Manager", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Environmental Consultant", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Environmental Manager", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Environmental Research Scientist", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Environmental Scientists nec", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Fibrous Plasterer", "min_score_189": 65, "min_score_491_fs": "N/A"}, {"occupation": "Fitter (General)", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Fitter and Turner", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Food Technologist", "min_score_189": 85, "min_score_491_fs": "N/A"}, {"occupation": "Footballer", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Forester", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Gasfitter", "min_score_189": 70, "min_score_491_fs": "N/A"}, {"occupation": "Gastroenterologist", "min_score_189": 85, "min_score_491_fs": "N/A"}, {"occupation": "General Practitioner", "min_score_189": 75, "min_score_491_fs": "N/A"}, {"occupation": "Geophysicist", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Glazier", "min_score_189": 65, "min_score_491_fs": "N/A"}, {"occupation": "Hydrogeologist", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Intensive Care Specialist", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Joiner", "min_score_189": 65, "min_score_491_fs": "N/A"}, {"occupation": "Land Economist", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Landscape Architect", "min_score_189": 85, "min_score_491_fs": "N/A"}, {"occupation": "Life Scientist (General)", "min_score_189": 95, "min_score_491_fs": "N/A"}, {"occupation": "Life Scientists nec", "min_score_189": 95, "min_score_491_fs": "N/A"}, {"occupation": "Lift mechanic", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Management Consultant", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Marine Biologist", "min_score_189": 95, "min_score_491_fs": "N/A"}, {"occupation": "Medical Diagnostic Radiographer", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Medical Laboratory Scientist", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Medical Practitioners nec", "min_score_189": 75, "min_score_491_fs": "N/A"}, {"occupation": "Medical Radiation Therapist", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Metal Fabricator", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Metal Machinist (First Class)", "min_score_189": 85, "min_score_491_fs": "N/A"}, {"occupation": "Metallurgist", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Meteorologist", "min_score_189": 85, "min_score_491_fs": "N/A"}, {"occupation": "Microbiologist", "min_score_189": 95, "min_score_491_fs": "N/A"}, {"occupation": "Midwife", "min_score_189": 75, "min_score_491_fs": "N/A"}, {"occupation": "Mining Engineer (excluding Petroleum)", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Multimedia Specialist", "min_score_189": 95, "min_score_491_fs": "N/A"}, {"occupation": "Music Director", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Musician (Instrumental)", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Natural and Physical Science Professionals nec", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Nuclear Medicine Technologist", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Nurse Practitioner", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Obstetrician and Gynaecologist", "min_score_189": 85, "min_score_491_fs": "N/A"}, {"occupation": "Ophthalmologist", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Optometrist", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Organisational Psychologist", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Orthopaedic Surgeon", "min_score_189": 85, "min_score_491_fs": "N/A"}, {"occupation": "Orthotist or Prosthetist", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Osteopath", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Other Spatial Scientist", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Paediatrician", "min_score_189": 75, "min_score_491_fs": "N/A"}, {"occupation": "Panelbeater", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Petroleum Engineer", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Physicist", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Physiotherapist", "min_score_189": 75, "min_score_491_fs": "N/A"}, {"occupation": "Plumber (General)", "min_score_189": 65, "min_score_491_fs": "N/A"}, {"occupation": "Podiatrist", "min_score_189": 75, "min_score_491_fs": "N/A"}, {"occupation": "Primary Health Organisation Manager", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Psychiatrist", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Psychologists nec", "min_score_189": 75, "min_score_491_fs": "N/A"}, {"occupation": "Registered Nurse (Aged Care)", "min_score_189": 75, "min_score_491_fs": "N/A"}, {"occupation": "Registered Nurse (Child and Family Health)", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Registered Nurse (Community Health)", "min_score_189": 75, "min_score_491_fs": "N/A"}, {"occupation": "Registered Nurse (Critical Care and Emergency)", "min_score_189": 75, "min_score_491_fs": "N/A"}, {"occupation": "Registered Nurse (Developmental Disability)", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Registered Nurse (Disability and Rehabilitation)", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Registered Nurse (Medical Practice)", "min_score_189": 75, "min_score_491_fs": "N/A"}, {"occupation": "Registered Nurse (Medical)", "min_score_189": 75, "min_score_491_fs": "N/A"}, {"occupation": "Registered Nurse (Mental Health)", "min_score_189": 75, "min_score_491_fs": "N/A"}, {"occupation": "Registered Nurse (Paediatrics)", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Registered Nurse (Perioperative)", "min_score_189": 75, "min_score_491_fs": "N/A"}, {"occupation": "Registered Nurse (Surgical)", "min_score_189": 75, "min_score_491_fs": "N/A"}, {"occupation": "Registered Nurses nec", "min_score_189": 75, "min_score_491_fs": "N/A"}, {"occupation": "Roof Plumber", "min_score_189": 65, "min_score_491_fs": "N/A"}, {"occupation": "Secondary School Teacher", "min_score_189": 75, "min_score_491_fs": "N/A"}, {"occupation": "Sheetmetal Trades Worker", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Shipwright", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Social Worker", "min_score_189": 75, "min_score_491_fs": "N/A"}, {"occupation": "Solicitor", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Solid Plasterer", "min_score_189": 65, "min_score_491_fs": "N/A"}, {"occupation": "Sonographer", "min_score_189": 85, "min_score_491_fs": "N/A"}, {"occupation": "Special Education Teachers nec", "min_score_189": 85, "min_score_491_fs": "N/A"}, {"occupation": "Special Needs Teacher", "min_score_189": 75, "min_score_491_fs": "N/A"}, {"occupation": "Specialist Physician (General Medicine)", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Specialist Physicians nec", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Speech Pathologist", "min_score_189": 75, "min_score_491_fs": "N/A"}, {"occupation": "Statistician", "min_score_189": 90, "min_score_491_fs": "N/A"}, {"occupation": "Stonemason", "min_score_189": 65, "min_score_491_fs": "N/A"}, {"occupation": "Surgeon (General)", "min_score_189": 85, "min_score_491_fs": "N/A"}, {"occupation": "Surveyor", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Telecommunications Engineer", "min_score_189": 95, "min_score_491_fs": "N/A"}, {"occupation": "Telecommunications Network Engineer", "min_score_189": 95, "min_score_491_fs": "N/A"}, {"occupation": "Tennis Coach", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Thoracic Medicine Specialist", "min_score_189": 95, "min_score_491_fs": "N/A"}, {"occupation": "Urologist", "min_score_189": 100, "min_score_491_fs": "N/A"}, {"occupation": "Valuer", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Veterinarian", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Wall and Floor Tiler", "min_score_189": 65, "min_score_491_fs": "N/A"}, {"occupation": "Welder (First Class)", "min_score_189": 80, "min_score_491_fs": "N/A"}, {"occupation": "Welfare Centre Manager", "min_score_189": 85, "min_score_491_fs": "N/A"}], "national_state_quota": {"total_190": 12850, "total_491": 7500, "combined_total": 20350}, "state_allocations": [{"state": "NSW", "quota_190": 2100, "quota_491": 1500, "total_quota": 3600, "ytd_190": "11", "ytd_491": "0", "round_model": "EOI Target Sectors (190/491 Path 2) + Direct Application (491 Path 1 & 3)", "min_cutoff_note_ko": "190: 건설·의료·디지털 75~95점 / 491 Path 1·3: 65점+ 직접 신청", "min_cutoff_note_en": "190: Priority sectors 75–95 pts / 491 Path 1 & 3: Direct apply from 65 pts"}, {"state": "VIC", "quota_190": 2700, "quota_491": 700, "total_quota": 3400, "ytd_190": "0", "ytd_491": "0", "round_model": "Live in Melbourne ROI (Ranked by Onshore Skilled Earnings & Priority Sectors)", "min_cutoff_note_ko": "190 온쇼어: 연봉($90k~$120k+) + 의료·교육·건설 우선 / 491: 지방 VIC 재직 필수", "min_cutoff_note_en": "190 Onshore: Ranked by skilled earnings ($90k+) & Healthcare/Teaching/Construction"}, {"state": "WA", "quota_190": 2000, "quota_491": 1400, "total_quota": 3400, "ytd_190": "17", "ytd_491": "120", "round_model": "Monthly Direct EOI Invitation (WA Residents Ranked #1, $0 Fee)", "min_cutoff_note_ko": "건설·기능직 65~75점 / 의료·교육 75~85점 / WA 졸업생 75~90점 (신청비 $0)", "min_cutoff_note_en": "Building & Construction 65–75 pts / Healthcare & Teaching 75–85 pts / WA Grads 75–90 pts"}, {"state": "QLD", "quota_190": 1850, "quota_491": 650, "total_quota": 2500, "ytd_190": "6", "ytd_491": "<5", "round_model": "Migration Queensland ROI (Monthly Targeted Invitations)", "min_cutoff_note_ko": "건설·에너지 65~75점(경력 완화) / 일반 온쇼어(190 9개월·491 6개월) 80~95점", "min_cutoff_note_en": "Construction/Energy 65–75 pts / General Onshore (9m/6m work) 80–95 pts"}, {"state": "SA", "quota_190": 1350, "quota_491": 900, "total_quota": 2250, "ytd_190": "0", "ytd_491": "0", "round_model": "SA Onshore ROI + Monthly Offshore EOI Rounds (464 Occupations)", "min_cutoff_note_ko": "온쇼어 SA 취업·졸업생 65~80점 / 오프쇼어 EOI 최소 65~85점 (직군별 상이)", "min_cutoff_note_en": "Onshore SA Employment & Graduates 65–80 pts / Offshore EOI min 65–85 pts"}, {"state": "TAS", "quota_190": 1100, "quota_491": 750, "total_quota": 1850, "ytd_190": "206", "ytd_491": "55", "round_model": "Migration Tasmania Gateway (Gold / Green / Orange-Plus / Orange Pass)", "min_cutoff_note_ko": "Gold Pass 즉시 초청 / Green Pass 8주 내 초청 / Orange-Plus 우선속성 갯수 순", "min_cutoff_note_en": "Gold Pass immediate / Green Pass within 8 wks / Orange-Plus ranked by attributes"}, {"state": "NT", "quota_190": 950, "quota_491": 800, "total_quota": 1750, "ytd_190": "91", "ytd_491": "25", "round_model": "Direct Application via MigrationNT Portal (Criteria-Based, Non-Points Ranked)", "min_cutoff_note_ko": "Schedule 6D 65점 충족 + NT 6개월 풀타임 재직(또는 NT 2년 졸업생) 시 직접 승인", "min_cutoff_note_en": "Schedule 6D 65 pts + 6m full-time NT work (or 2yr NT Graduate) via direct portal"}, {"state": "ACT", "quota_190": 800, "quota_491": 800, "total_quota": 1600, "ytd_190": "<5", "ytd_491": "<5", "round_model": "ACT Canberra Matrix Ranking + ACT PhD Streamlined ($0 Fee, Auto-Invite)", "min_cutoff_note_ko": "Canberra Matrix 자체 점수(직군별 65~115 Matrix pts) / ACT 박사(PhD) 무점수 즉시 초청", "min_cutoff_note_en": "Canberra Matrix occupation cut-offs (65–115 Matrix pts) / ACT PhD streamlined"}]};

  const DEFAULT_PROGRAM_STATUS = {"schema_version": "2026-10-28.1", "generated_at": "2026-10-28T13:35:37+10:00", "as_at_date": "2026-10-28", "dama_navigator_url": "https://changa9090.github.io/parkco-dama-navigator/", "dama_link_ko": "DAMA 일정·직종·양보는 DAMA 네비게이터를 본다.", "dama_link_en": "For DAMA deadlines, occupations, and concessions, see the DAMA Navigator.", "records": [{"id": "nsw_190", "source_id": "nsw_190", "jurisdiction": "NSW", "subclass": "190", "program_year": null, "program_year_source": "unsaid", "badge": "unsaid", "places": null, "places_quote": "", "places_claim_state": "absent", "summary_ko": "이 조회에서 2026–27 개방·마감 문장은 없음. 직접 신청 불가(초청 전용 · 초청 유효 14일, 연장 불가).", "summary_en": "No 2026–27 open/closed banner on page. Direct application is not permitted (invitation-only; 14-day non-extendable window).", "quote": "You cannot directly apply for NSW nomination.", "secondary_quote": "Your invitation to apply will be valid for 14 days only. When you apply, you need to provide valid documents to substantiate every claim made in your EOI. This 14-day window will not be extended.", "source_url": "https://www.nsw.gov.au/visas-and-migration/skilled-visas/skilled-nominated-visa-subclass-190", "source_title": "NSW Skilled Nominated visa (subclass 190)", "retrieved_on": "2026-10-28", "last_checked": "2026-10-28T13:35:37+10:00", "claim_state": "current", "freshness": "live_verified", "content_sha256": "421ee825ff0629d4e96bcd5daef7ef5c62f929ac4f276046281c80083df6f0f1", "gaps_ko": ["2026–27 배정 자리 수 미기재", "접수 개시·마감 문장 없음", "주 정부 수수료 미기재"], "history": [], "consecutive_failures": 0}, {"id": "nsw_491", "source_id": "nsw_491", "jurisdiction": "NSW", "subclass": "491", "program_year": null, "program_year_source": "unsaid", "badge": "closed", "places": null, "places_quote": "", "places_claim_state": "absent", "pathway_1_status": "Currently Closed", "summary_ko": "현재 프로그램 연도(연도 숫자 미표기) 신청 마감 — 배정 자리 전량 소진. Pathway 1 상태: Currently Closed.", "summary_en": "Applications closed for the current program year (year number unstated; places fully allocated). Pathway 1: Currently Closed.", "quote": "applications are now closed for the current program year, as all available nomination places have been fully allocated.", "secondary_quote": "Apply For Nomination: Currently Closed.", "source_url": "https://www.nsw.gov.au/visas-and-migration/skilled-visas/skilled-work-regional-visa-subclass-491", "source_title": "NSW Skilled Work Regional visa (subclass 491)", "retrieved_on": "2026-10-28", "last_checked": "2026-10-28T13:35:37+10:00", "claim_state": "current", "freshness": "live_verified", "content_sha256": "35811af475050094f24ac59dd09f4f059a9274904a254e625abe93fbb14e2878", "gaps_ko": ["프로그램 연도 숫자 미표기(current program year)", "배정 자리 수 미기재", "수수료 미기재"], "history": [], "consecutive_failures": 0}, {"id": "vic_190", "source_id": "vic_prog", "jurisdiction": "VIC", "subclass": "190", "program_year": "2026-27", "program_year_source": "page", "badge": "open", "places": 900, "places_quote": "For 2026–27, Victoria has been provided with 900 nomination places for the Skilled Nominated visa (subclass 190).", "places_claim_state": "current", "summary_ko": "2026–27 ROI 접수 중. 주 페이지 발표 자리 900석 (ROI $60/GST 포함 $66, 노미 $180/$198).", "summary_en": "2026–27 ROIs open for subclass 190. State-published places: 900.", "quote": "For 2026–27, Victoria has been provided with 900 nomination places for the Skilled Nominated visa (subclass 190).", "secondary_quote": "Victoria’s 2026–27 skilled visa nomination program is now open for Registrations of Interest for the Skilled Nominated visa (subclass 190).", "source_url": "https://liveinmelbourne.vic.gov.au/migrate/skilled-migration-visas/2026-27-skilled-visa-nomination-program", "source_title": "2026-27 Skilled visa nomination program", "retrieved_on": "2026-10-28", "last_checked": "2026-10-28T13:35:37+10:00", "claim_state": "current", "freshness": "live_verified", "content_sha256": "1b2b1888880dcd1c61186b291c6a53f70c3003f90ae81442cdd0390236ced577", "gaps_ko": [], "history": [], "consecutive_failures": 0}, {"id": "vic_491", "source_id": "vic_prog", "jurisdiction": "VIC", "subclass": "491", "program_year": "2026-27", "program_year_source": "page", "badge": "closed", "places": null, "places_quote": "", "places_claim_state": "absent", "summary_ko": "2026–27 491 배정 자리 미확정 · 현재 491 ROI 접수 중단.", "summary_en": "2026–27 subclass 491 places not yet finalised; 491 ROIs are not currently being accepted.", "quote": "Victoria’s 2026–27 nomination places for the Skilled Work Regional (Provisional) visa (subclass 491) have not yet been finalised.", "secondary_quote": "Registrations of Interest for subclass 491 nomination are not currently being accepted.", "source_url": "https://liveinmelbourne.vic.gov.au/migrate/skilled-migration-visas/2026-27-skilled-visa-nomination-program", "source_title": "2026-27 Skilled visa nomination program", "retrieved_on": "2026-10-28", "last_checked": "2026-10-28T13:35:37+10:00", "claim_state": "current", "freshness": "live_verified", "content_sha256": "1b2b1888880dcd1c61186b291c6a53f70c3003f90ae81442cdd0390236ced577", "gaps_ko": ["2026–27 491 배정 자리 수 미확정", "491 재개 일정 미기재"], "history": [], "consecutive_failures": 0}, {"id": "qld_190", "source_id": "qld_home", "jurisdiction": "QLD", "subclass": "190", "program_year": "2025-26", "program_year_source": "page", "next_program_year_opening": "unsaid", "badge": "closed", "places": null, "places_quote": "", "places_claim_state": "absent", "summary_ko": "2025–26 SNMP ROI 마감(자리 전량 소진). 2026–27 개시일·배정은 페이지에 없음(unsaid).", "summary_en": "2025–26 SNMP ROIs closed (all places filled). 2026–27 opening date and allocations are unsaid on page.", "quote": "Queensland's Registrations of Interest (ROIs) for the 2025-26 State Nominated Migration Program (SNMP) are now closed.", "secondary_quote": "all available nomination places for this program year have been filled.", "source_url": "https://www.migration.qld.gov.au/", "source_title": "Migration Queensland — Home", "retrieved_on": "2026-10-28", "last_checked": "2026-10-28T13:35:37+10:00", "claim_state": "current", "freshness": "live_verified", "content_sha256": "76fa392f2e0288bf8219451f19b409343c60a22500ddbd3b75fa1620b77ac7ce", "gaps_ko": ["2026–27 개시일 없음(unsaid)", "배정 자리 수 미기재", "자격 페이지에 나이·영어·점수 숫자 미기재"], "history": [], "consecutive_failures": 0}, {"id": "qld_491", "source_id": "qld_home", "jurisdiction": "QLD", "subclass": "491", "program_year": "2025-26", "program_year_source": "page", "next_program_year_opening": "unsaid", "badge": "closed", "places": null, "places_quote": "", "places_claim_state": "absent", "summary_ko": "2025–26 SNMP ROI 마감(자리 전량 소진). 2026–27 개시일·배정은 페이지에 없음(unsaid).", "summary_en": "2025–26 SNMP ROIs closed (all places filled). 2026–27 opening date and allocations are unsaid on page.", "quote": "Queensland's Registrations of Interest (ROIs) for the 2025-26 State Nominated Migration Program (SNMP) are now closed.", "secondary_quote": "all available nomination places for this program year have been filled.", "source_url": "https://www.migration.qld.gov.au/", "source_title": "Migration Queensland — Home", "retrieved_on": "2026-10-28", "last_checked": "2026-10-28T13:35:37+10:00", "claim_state": "current", "freshness": "live_verified", "content_sha256": "76fa392f2e0288bf8219451f19b409343c60a22500ddbd3b75fa1620b77ac7ce", "gaps_ko": ["2026–27 개시일 없음(unsaid)", "배정 자리 수 미기재", "자격 페이지에 나이·영어·점수 숫자 미기재"], "history": [], "consecutive_failures": 0}, {"id": "wa_190", "source_id": "wa_snmp", "jurisdiction": "WA", "subclass": "190", "program_year": null, "program_year_source": "unsaid", "badge": "unsaid", "places": null, "places_quote": "", "places_claim_state": "absent", "summary_ko": "이 조회에서 2026–27 개방·마감 문장은 없음(앵커·뉴스는 2025–26). 스트림: General(WASMOL Sch 1·2), Defence(Sch 3), Graduate(WA 2년 학업). 각주: WA 건설업 직종 초청자는 고용계약 면제.", "summary_en": "No 2026–27 open/closed statement on page (anchors/news reference 2025–26). Footnote: WA building & construction sector invitees do not need an employment contract.", "quote": "Applicants invited through a WA building and construction industry sector occupation (as per the WA State nomination occupation lists) do not need to have a contract of employment.", "secondary_quote": "for international students who have studied in Western Australia for at least two years and have attained a vocational education and training (VET) or higher education qualification in WA.", "source_url": "https://migration.wa.gov.au/our-services-support/state-nominated-migration-program", "source_title": "Migration WA — State Nominated Migration Program", "retrieved_on": "2026-10-28", "last_checked": "2026-10-28T13:35:37+10:00", "claim_state": "current", "freshness": "live_verified", "content_sha256": "33ce8c56eb84fd9029dca2f282911f437c6822d8e5db8fe60c41f6ed66943f08", "gaps_ko": ["2026–27 개시·마감 문장 없음", "배정 자리 수 미기재", "수수료 문구 미확인", "요건 표 체크 표시 텍스트 미추출"], "history": [], "consecutive_failures": 0}, {"id": "wa_491", "source_id": "wa_snmp", "jurisdiction": "WA", "subclass": "491", "program_year": null, "program_year_source": "unsaid", "badge": "unsaid", "places": null, "places_quote": "", "places_claim_state": "absent", "summary_ko": "이 조회에서 2026–27 개방·마감 문장은 없음(앵커·뉴스는 2025–26). 스트림: General(WASMOL Sch 1·2), Defence(Sch 3), Graduate(WA 2년 학업). 각주: WA 건설업 직종 초청자는 고용계약 면제.", "summary_en": "No 2026–27 open/closed statement on page (anchors/news reference 2025–26). Footnote: WA building & construction sector invitees do not need an employment contract.", "quote": "Applicants invited through a WA building and construction industry sector occupation (as per the WA State nomination occupation lists) do not need to have a contract of employment.", "secondary_quote": "for international students who have studied in Western Australia for at least two years and have attained a vocational education and training (VET) or higher education qualification in WA.", "source_url": "https://migration.wa.gov.au/our-services-support/state-nominated-migration-program", "source_title": "Migration WA — State Nominated Migration Program", "retrieved_on": "2026-10-28", "last_checked": "2026-10-28T13:35:37+10:00", "claim_state": "current", "freshness": "live_verified", "content_sha256": "33ce8c56eb84fd9029dca2f282911f437c6822d8e5db8fe60c41f6ed66943f08", "gaps_ko": ["2026–27 개시·마감 문장 없음", "배정 자리 수 미기재", "수수료 문구 미확인", "요건 표 체크 표시 텍스트 미추출"], "history": [], "consecutive_failures": 0}, {"id": "sa_190", "source_id": "sa_news", "jurisdiction": "SA", "subclass": "190", "program_year": "2026-27", "program_year_source": "page", "badge": "limited", "places": null, "places_quote": "", "places_claim_state": "absent", "mentioned_date": "2027-01-31", "summary_ko": "2026-10-22 공지: SA 거주·취업자 중 현 비자가 2027-01-31까지 만료되는 대상에 한해 온쇼어 ROI 개방. 해외 지원자는 ROI 없이 SkillSelect EOI로 선발(뉴스 우선 분야: building & construction, defence, education, engineering, health, manufacturing).", "summary_en": "22 Oct 2026 update: Onshore ROI open for SA residents working in SA with visas expiring by 31 Jan 2027; offshore selected directly via SkillSelect EOI.", "quote": "South Australia is now open for Registrations of Interest (ROI) for individuals living and working in South Australia whose current visas are due to expire by 31 January 2027.", "secondary_quote": "with a focus on candidates working in priority sectors, including building and construction, defence, education, engineering, health and manufacturing.", "source_url": "https://migration.sa.gov.au/news/south-australias-general-skilled-migration-program-update", "source_title": "South Australia’s General Skilled Migration Program Update (22 Oct 2026)", "retrieved_on": "2026-10-28", "last_checked": "2026-10-28T13:35:37+10:00", "claim_state": "current", "freshness": "live_verified", "content_sha256": "bb489b7696ac9cc5b7da58dbcb7e9b5713e668c5987fe7d01bf5d95b3bd45949", "gaps_ko": ["2026–27 배정 자리 수 미기재", "수수료 전용 표 미확인($394 단순 링크 문구는 수수료 레코드로 단정 안 함)"], "history": [], "consecutive_failures": 0}, {"id": "sa_491", "source_id": "sa_news", "jurisdiction": "SA", "subclass": "491", "program_year": "2026-27", "program_year_source": "page", "badge": "limited", "places": null, "places_quote": "", "places_claim_state": "absent", "mentioned_date": "2027-01-31", "summary_ko": "2026-10-22 공지: SA 거주·취업자 중 현 비자가 2027-01-31까지 만료되는 대상에 한해 온쇼어 ROI 개방. 해외 지원자는 ROI 없이 SkillSelect EOI로 선발(뉴스 우선 분야: building & construction, defence, education, engineering, health, manufacturing).", "summary_en": "22 Oct 2026 update: Onshore ROI open for SA residents working in SA with visas expiring by 31 Jan 2027; offshore selected directly via SkillSelect EOI.", "quote": "South Australia is now open for Registrations of Interest (ROI) for individuals living and working in South Australia whose current visas are due to expire by 31 January 2027.", "secondary_quote": "with a focus on candidates working in priority sectors, including building and construction, defence, education, engineering, health and manufacturing.", "source_url": "https://migration.sa.gov.au/news/south-australias-general-skilled-migration-program-update", "source_title": "South Australia’s General Skilled Migration Program Update (22 Oct 2026)", "retrieved_on": "2026-10-28", "last_checked": "2026-10-28T13:35:37+10:00", "claim_state": "current", "freshness": "live_verified", "content_sha256": "bb489b7696ac9cc5b7da58dbcb7e9b5713e668c5987fe7d01bf5d95b3bd45949", "gaps_ko": ["2026–27 배정 자리 수 미기재", "수수료 전용 표 미확인($394 단순 링크 문구는 수수료 레코드로 단정 안 함)"], "history": [], "consecutive_failures": 0}, {"id": "tas_190", "source_id": "tas_news", "jurisdiction": "TAS", "subclass": "190", "program_year": "2026-27", "program_year_source": "page", "badge": "open", "places": 1250, "total_state_places": 2050, "places_quote": "1,250 nomination places for subclass 190", "places_claim_state": "current", "mentioned_date": "2026-08-17", "summary_ko": "2026-08-17 개시 공지(갱신 2026-08-05, 이후 마감 공지 없음): 주 전체 2,050석 중 190 배정 1,250석. 8월 20일부터 주 단위 초청 · ROI 무료, 노미 수수료 $387(GST 포함 $425.70) · TSE Gold 단일 직장 주 30시간 · PIL $57,000/년 유지.", "summary_en": "2026–27 opening notice: 1,250 places for subclass 190 (of 2,050 total). Weekly invitations; ROI free, nomination fee $387 ($425.70 incl. GST).", "quote": "Tasmania has now received a total 2,050 nomination allocations for the 2026-27 program year.", "secondary_quote": "The service fee to apply for nomination has increased to $387 ($425.70 including GST). There remains no charge to submit a Registration of Interest.", "source_url": "https://www.migration.tas.gov.au/news/2024-25_program_open_to_rois", "source_title": "Migration Tasmania — 2026-27 Program Opening Notice", "retrieved_on": "2026-10-28", "last_checked": "2026-10-28T13:35:37+10:00", "claim_state": "current", "freshness": "live_verified", "content_sha256": "34a6d6c66583d4501f270d14878bc2e6fb17fc7bac4b921a0ddb360ef42a4685", "gaps_ko": [], "history": [], "consecutive_failures": 0}, {"id": "tas_491", "source_id": "tas_news", "jurisdiction": "TAS", "subclass": "491", "program_year": "2026-27", "program_year_source": "page", "badge": "open", "places": 800, "total_state_places": 2050, "places_quote": "800 nomination places for subclass 491.", "places_claim_state": "current", "osop_closed": true, "mentioned_date": "2026-08-17", "summary_ko": "2026-08-17 개시 공지: 주 전체 2,050석 중 491 배정 800석(ROI 접수 중). 단, 해외 491 Overseas Skilled Occupation Profiles(초청 전용 경로)는 2026–27 초청 미실시.", "summary_en": "2026–27 opening notice: 800 places for subclass 491 (of 2,050 total). Subclass 491 Overseas Skilled Occupation Profiles invitation-only pathway has no invitations planned for 2026–27.", "quote": "Tasmania has now received a total 2,050 nomination allocations for the 2026-27 program year.", "secondary_quote": "Subclass 491 Overseas Skilled Occupation Profiles - Invitation Only Pathway - No invitations planned for 2026-27", "source_url": "https://www.migration.tas.gov.au/news/2024-25_program_open_to_rois", "source_title": "Migration Tasmania — 2026-27 Program Opening Notice", "retrieved_on": "2026-10-28", "last_checked": "2026-10-28T13:35:37+10:00", "claim_state": "current", "freshness": "live_verified", "content_sha256": "34a6d6c66583d4501f270d14878bc2e6fb17fc7bac4b921a0ddb360ef42a4685", "gaps_ko": [], "history": [], "consecutive_failures": 0}, {"id": "act_190", "source_id": "act_round", "jurisdiction": "ACT", "subclass": "190", "program_year": "2026-27", "program_year_source": "page", "badge": "limited", "places": null, "places_quote": "", "places_claim_state": "absent", "mentioned_date": "2026-10-12", "summary_ko": "2026–27 회계연도 배정 미발표(2025–26 배정 190 800석·잔여 0은 전년도 수치). [별도 기재 사실] 2026-10-12 라운드에서 190 초청 발행(박사 54, SBO 18[최소 120점], 거주 Critical 126, 해외 Critical 63 · 재원 연도는 페이지 미설명).", "summary_en": "2026–27 financial year allocation has not yet been announced (800 places / 0 remaining was 2025–26). Separate page fact: 12 Oct 2026 round issued 190 invitations only.", "quote": "The allocation for the 2026-27 financial year has not yet been announced.", "secondary_quote": "Matrix nominating Doctorate Streamlined Pathway 190 nominations: 54 invitations 491 nominations: 0 invitations", "source_url": "https://www.act.gov.au/migration/resources/canberra-matrix-invitation-round", "source_title": "Canberra Matrix Invitation Round", "retrieved_on": "2026-10-28", "last_checked": "2026-10-28T13:35:37+10:00", "claim_state": "current", "freshness": "live_verified", "content_sha256": "73be8e326b817f0661c8d6cd7857d9b609965575f7ffdf6f3fbec21f7ccfb9a5", "gaps_ko": ["2026–27 연간 배정 자리 수 미발표", "10월 12일 초청분의 배정 연도 미설명"], "history": [], "consecutive_failures": 0}, {"id": "act_491", "source_id": "act_round", "jurisdiction": "ACT", "subclass": "491", "program_year": "2026-27", "program_year_source": "page", "badge": "limited", "places": null, "places_quote": "", "places_claim_state": "absent", "mentioned_date": "2026-10-12", "summary_ko": "2026–27 회계연도 배정 미발표(2025–26 배정 491 800석·잔여 0은 전년도 수치). [별도 기재 사실] 2026-10-12 라운드의 491 초청은 0건.", "summary_en": "2026–27 financial year allocation has not yet been announced (800 places / 0 remaining was 2025–26). Separate page fact: 12 Oct 2026 round issued 0 subclass 491 invitations.", "quote": "The allocation for the 2026-27 financial year has not yet been announced.", "secondary_quote": "Matrix nominating Doctorate Streamlined Pathway 190 nominations: 54 invitations 491 nominations: 0 invitations", "source_url": "https://www.act.gov.au/migration/resources/canberra-matrix-invitation-round", "source_title": "Canberra Matrix Invitation Round", "retrieved_on": "2026-10-28", "last_checked": "2026-10-28T13:35:37+10:00", "claim_state": "current", "freshness": "live_verified", "content_sha256": "73be8e326b817f0661c8d6cd7857d9b609965575f7ffdf6f3fbec21f7ccfb9a5", "gaps_ko": ["2026–27 연간 배정 자리 수 미발표"], "history": [], "consecutive_failures": 0}, {"id": "nt_190", "source_id": "nt_nom", "jurisdiction": "NT", "subclass": "190", "program_year": "2026-27", "program_year_source": "page", "badge": "closed", "places": null, "places_quote": "", "places_claim_state": "absent", "offshore_closed": true, "summary_ko": "2026–27 충분한 신청 접수 완료 — Subclass 190 및 모든 해외(Offshore) 스트림 신규 노미네이션 신청 접수 중단.", "summary_en": "Sufficient applications received for 2026–27 — no new nomination applications accepted for subclass 190 or any offshore streams.", "quote": "No new nomination applications will be accepted at this time for Skilled Nominated (subclass 190) visa or any offshore streams.", "secondary_quote": "The NT Government has now received sufficient applications for the 2026-27 program year.", "source_url": "https://australiasnorthernterritory.com.au/move/migrate-to-work/nt-government-visa-nomination", "source_title": "NT Government Visa Nomination", "retrieved_on": "2026-10-28", "last_checked": "2026-10-28T13:35:37+10:00", "claim_state": "current", "freshness": "live_verified", "content_sha256": "ac0b2cad5ff315d54ba9415d8db6da34c6e83acc04b4b3aceba2eeb60a17dbf1", "gaps_ko": ["2026–27 배정 자리 수 미기재", "주 정부 수수료 미기재"], "history": [], "consecutive_failures": 0}, {"id": "nt_491", "source_id": "nt_nom", "jurisdiction": "NT", "subclass": "491", "program_year": "2026-27", "program_year_source": "page", "badge": "limited", "places": null, "places_quote": "", "places_claim_state": "absent", "offshore_closed": true, "mentioned_date": "2027-09-30", "summary_ko": "2026–27 해외·일반 491 신규 접수 중단. 온쇼어 NT Graduate·NT Resident 중 2027-09-30 전 비자 만료(485 불가)·만 45세 도래·점수 65점 미달 예정자만 예외 접수(허가 후 3년 거주·취업 약속).", "summary_en": "2026–27 offshore 491 closed; new 491 applications accepted by exception only for onshore NT Graduate/Resident applicants facing visa/age/points deadlines before 30 Sep 2027.", "quote": "The NT Government has now received sufficient applications for the 2026-27 program year.", "secondary_quote": "", "source_url": "https://australiasnorthernterritory.com.au/move/migrate-to-work/nt-government-visa-nomination", "source_title": "NT Government Visa Nomination", "retrieved_on": "2026-10-28", "last_checked": "2026-10-28T13:35:37+10:00", "claim_state": "current", "freshness": "live_verified", "content_sha256": "ac0b2cad5ff315d54ba9415d8db6da34c6e83acc04b4b3aceba2eeb60a17dbf1", "gaps_ko": ["2026–27 배정 자리 수 미기재", "주 정부 수수료 미기재"], "history": [], "consecutive_failures": 0}], "supplementary_records": [{"id": "vic_190_criteria", "source_id": "vic_190", "jurisdiction": "VIC", "kind": "criteria_note", "summary_ko": "VIC 190 요건 페이지 확인 항목: 빅토리아/해외 거주, 거주·취업 의사, ROI 선정, 45세 미만, Competent English+, 유효 기술심사, 65점+(주 5점 포함), 취업 필수 아님, 노미 신청 시 영어·기술심사 잔여 12주+, 노미 후 60일 내 비자 신청, 최소 2년 거주·취업, 평균 처리 20영업일.", "quote": "be living in Victoria or overseas, be committed to living and working in Victoria, have had your Registration of Interest (ROI) selected, be under 45 years of age, have at least Competent English", "secondary_quote": "The average processing time for skilled visa nomination applications is 20 business days.", "source_url": "https://liveinmelbourne.vic.gov.au/migrate/skilled-migration-visas/skilled-nominated-visa-subclass-190", "retrieved_on": "2026-10-28", "last_checked": "2026-10-28T13:35:37+10:00", "claim_state": "current", "freshness": "live_verified", "content_sha256": "8f54999777871cbaa956077053fdac96a037cc631eef6a9e267ed55ce5bad47e", "history": []}, {"id": "vic_491_page", "source_id": "vic_491", "jurisdiction": "VIC", "kind": "status_corroboration", "summary_ko": "VIC 491 전용 페이지도 현재 미개방 및 491 ROI 미접수 명시.", "quote": "Victoria’s Skilled Work Regional (subclass 491) visa nomination program is not currently open, and Registrations of Interest for subclass 491 nomination are not being accepted.", "secondary_quote": "", "source_url": "https://liveinmelbourne.vic.gov.au/migrate/skilled-migration-visas/491", "retrieved_on": "2026-10-28", "last_checked": "2026-10-28T13:35:37+10:00", "claim_state": "current", "freshness": "live_verified", "content_sha256": "3b8a61b0e3d99542e8536f98d93c87c94f144be8b47a617ef00ee15b6ed690bf", "history": []}, {"id": "vic_fees", "source_id": "vic_fees", "jurisdiction": "VIC", "kind": "fee_table", "summary_ko": "VIC 2026–27 공식 수수료 표: ROI $60(GST 포함 $66, 프로그램 연도당 1회), 190 노미 $180($198), 491 노미 $180($198).", "quote": "2026-27 fees Excluding GST Including GST* Registration of Interest $60 $66 Subclass 190 nomination application** $180 $198 Subclass 491 nomination application** $180 $198", "secondary_quote": "The Registration of Interest fee is charged once per program year.", "source_url": "https://liveinmelbourne.vic.gov.au/migrate/skilled-migration-visas/fees", "retrieved_on": "2026-10-28", "last_checked": "2026-10-28T13:35:37+10:00", "claim_state": "current", "freshness": "live_verified", "content_sha256": "4020566eaa6607d50b9f16a8516e7897fd385fd69d36e42820b98ab3f601c68c", "history": []}, {"id": "qld_eligibility", "source_id": "qld_elig", "jurisdiction": "QLD", "kind": "criteria_note", "summary_ko": "QLD 자격 요건 페이지는 스트림별 기준 상이만 안내하며 나이·영어·점수·근무개월 숫자를 본문에 두지 않음.", "quote": "Eligibility criteria are specific for each visa stream.", "secondary_quote": "", "source_url": "https://www.migration.qld.gov.au/nomination-process/eligibility-criteria", "retrieved_on": "2026-10-28", "last_checked": "2026-10-28T13:35:37+10:00", "claim_state": "current", "freshness": "live_verified", "content_sha256": "f0de97b979996f912a9e08b872044488fdaf48607d0919c7fa1714992d8f4ec8", "history": []}, {"id": "sa_offshore", "source_id": "sa_offshore", "jurisdiction": "SA", "kind": "offshore_criteria_and_sectors", "summary_ko": "SA 해외 페이지(뉴스 목록과 별도): 2026–27 우선 산업 Construction, Engineering, Manufacturing, Trades, Health, Education. 최근 5년 내 숙련 경력 3년, 풀타임 주 20시간(SkillSelect 기준), 초청 후 14일 내 신청.", "quote": "For the 2026-27 GSM program, South Australia will prioritise candidates working in the following industries: Construction Engineering Manufacturing Trades Health Education", "secondary_quote": "Have at least three years of skilled work experience in your nominated or closely related occupation (within the last 5 years)", "source_url": "https://migration.sa.gov.au/before-applying/visa-options-and-pathways/skilled-migrants/moving-to-south-australia-from-overseas", "retrieved_on": "2026-10-28", "last_checked": "2026-10-28T13:35:37+10:00", "claim_state": "current", "freshness": "live_verified", "content_sha256": "00bbafe7fa14b4a4e922c6f4575409c19081f757f6cb8c15a7714633946bd871", "history": []}, {"id": "act_home_allocation", "source_id": "act_home", "jurisdiction": "ACT", "kind": "status_corroboration", "summary_ko": "ACT 홈: 2026–27 노미네이션 배정 자리는 연방 정부 미확정 상태.", "quote": "The ACT’s 2026-27 allocation of nomination places have not yet been confirmed by the Australian Government.", "secondary_quote": "", "source_url": "https://www.act.gov.au/migration", "retrieved_on": "2026-10-28", "last_checked": "2026-10-28T13:35:37+10:00", "claim_state": "current", "freshness": "live_verified", "content_sha256": "a5241dcba453d7fe9267ac90211d41911f644d328444d4a4ef844f0f5a67f7c0", "history": []}, {"id": "act_190_criteria", "source_id": "act_190", "jurisdiction": "ACT", "kind": "criteria_note", "summary_ko": "ACT 190 기준 페이지: 비자 허가일(해외는 캔버라 도착일)부터 최소 2년 캔버라 거주·취업 서약(항목별 세부 점수표는 본문 미기재).", "quote": "you must live and work in Canberra for at least two years from visa grant, or if you are moving from overseas, date of arrival in Canberra.", "secondary_quote": "", "source_url": "https://www.act.gov.au/migration/skilled-migrants/190-nomination-criteria", "retrieved_on": "2026-10-28", "last_checked": "2026-10-28T13:35:37+10:00", "claim_state": "current", "freshness": "live_verified", "content_sha256": "c209efbce92e989cf3602467ef1f276778b2a1725ad92efbcd3381a64b828c18", "history": []}], "source_health": {"vic_prog": {"url": "https://liveinmelbourne.vic.gov.au/migrate/skilled-migration-visas/2026-27-skilled-visa-nomination-program", "content_sha256": "1b2b1888880dcd1c61186b291c6a53f70c3003f90ae81442cdd0390236ced577", "consecutive_failures": 0, "last_checked": "2026-10-28T13:35:37+10:00", "last_http_status": 200, "status": "live_verified"}, "vic_190": {"url": "https://liveinmelbourne.vic.gov.au/migrate/skilled-migration-visas/skilled-nominated-visa-subclass-190", "content_sha256": "8f54999777871cbaa956077053fdac96a037cc631eef6a9e267ed55ce5bad47e", "consecutive_failures": 0, "last_checked": "2026-10-28T13:35:37+10:00", "last_http_status": 200, "status": "live_verified"}, "vic_491": {"url": "https://liveinmelbourne.vic.gov.au/migrate/skilled-migration-visas/491", "content_sha256": "3b8a61b0e3d99542e8536f98d93c87c94f144be8b47a617ef00ee15b6ed690bf", "consecutive_failures": 0, "last_checked": "2026-10-28T13:35:37+10:00", "last_http_status": 200, "status": "live_verified"}, "vic_fees": {"url": "https://liveinmelbourne.vic.gov.au/migrate/skilled-migration-visas/fees", "content_sha256": "4020566eaa6607d50b9f16a8516e7897fd385fd69d36e42820b98ab3f601c68c", "consecutive_failures": 0, "last_checked": "2026-10-28T13:35:37+10:00", "last_http_status": 200, "status": "live_verified"}, "qld_home": {"url": "https://www.migration.qld.gov.au/", "content_sha256": "76fa392f2e0288bf8219451f19b409343c60a22500ddbd3b75fa1620b77ac7ce", "consecutive_failures": 0, "last_checked": "2026-10-28T13:35:37+10:00", "last_http_status": 200, "status": "live_verified"}, "qld_elig": {"url": "https://www.migration.qld.gov.au/nomination-process/eligibility-criteria", "content_sha256": "f0de97b979996f912a9e08b872044488fdaf48607d0919c7fa1714992d8f4ec8", "consecutive_failures": 0, "last_checked": "2026-10-28T13:35:37+10:00", "last_http_status": 200, "status": "live_verified"}, "nsw_190": {"url": "https://www.nsw.gov.au/visas-and-migration/skilled-visas/skilled-nominated-visa-subclass-190", "content_sha256": "421ee825ff0629d4e96bcd5daef7ef5c62f929ac4f276046281c80083df6f0f1", "consecutive_failures": 0, "last_checked": "2026-10-28T13:35:37+10:00", "last_http_status": 200, "status": "live_verified"}, "nsw_491": {"url": "https://www.nsw.gov.au/visas-and-migration/skilled-visas/skilled-work-regional-visa-subclass-491", "content_sha256": "35811af475050094f24ac59dd09f4f059a9274904a254e625abe93fbb14e2878", "consecutive_failures": 0, "last_checked": "2026-10-28T13:35:37+10:00", "last_http_status": 200, "status": "live_verified"}, "wa_snmp": {"url": "https://migration.wa.gov.au/our-services-support/state-nominated-migration-program", "content_sha256": "33ce8c56eb84fd9029dca2f282911f437c6822d8e5db8fe60c41f6ed66943f08", "consecutive_failures": 0, "last_checked": "2026-10-28T13:35:37+10:00", "last_http_status": 200, "status": "live_verified"}, "wa_home": {"url": "https://migration.wa.gov.au/", "content_sha256": "859a4fe630f6a316d67c7f7a3dfae253441f103feeae16f5c48306acd7040127", "consecutive_failures": 0, "last_checked": "2026-10-28T13:35:37+10:00", "last_http_status": 200, "status": "live_verified"}, "sa_news": {"url": "https://migration.sa.gov.au/news/south-australias-general-skilled-migration-program-update", "content_sha256": "bb489b7696ac9cc5b7da58dbcb7e9b5713e668c5987fe7d01bf5d95b3bd45949", "consecutive_failures": 0, "last_checked": "2026-10-28T13:35:37+10:00", "last_http_status": 200, "status": "live_verified"}, "sa_offshore": {"url": "https://migration.sa.gov.au/before-applying/visa-options-and-pathways/skilled-migrants/moving-to-south-australia-from-overseas", "content_sha256": "00bbafe7fa14b4a4e922c6f4575409c19081f757f6cb8c15a7714633946bd871", "consecutive_failures": 0, "last_checked": "2026-10-28T13:35:37+10:00", "last_http_status": 200, "status": "live_verified"}, "sa_skilled": {"url": "https://migration.sa.gov.au/before-applying/visa-options-and-pathways/skilled-migrants", "content_sha256": "3bc3996ae08691b130e94c66c25d4cdf1831ed9a5d2f55607a50464de7240364", "consecutive_failures": 0, "last_checked": "2026-10-28T13:35:37+10:00", "last_http_status": 200, "status": "live_verified"}, "tas_news": {"url": "https://www.migration.tas.gov.au/news/2024-25_program_open_to_rois", "content_sha256": "34a6d6c66583d4501f270d14878bc2e6fb17fc7bac4b921a0ddb360ef42a4685", "consecutive_failures": 0, "last_checked": "2026-10-28T13:35:37+10:00", "last_http_status": 200, "status": "live_verified"}, "tas_home": {"url": "https://www.migration.tas.gov.au/", "content_sha256": "074665a97b76ba56107bf6f081d5b610fa9b72a046dabd928f1ca4b5dae6480d", "consecutive_failures": 0, "last_checked": "2026-10-28T13:35:37+10:00", "last_http_status": 200, "status": "live_verified"}, "act_home": {"url": "https://www.act.gov.au/migration", "content_sha256": "a5241dcba453d7fe9267ac90211d41911f644d328444d4a4ef844f0f5a67f7c0", "consecutive_failures": 0, "last_checked": "2026-10-28T13:35:37+10:00", "last_http_status": 200, "status": "live_verified"}, "act_round": {"url": "https://www.act.gov.au/migration/resources/canberra-matrix-invitation-round", "content_sha256": "73be8e326b817f0661c8d6cd7857d9b609965575f7ffdf6f3fbec21f7ccfb9a5", "consecutive_failures": 0, "last_checked": "2026-10-28T13:35:37+10:00", "last_http_status": 200, "status": "live_verified"}, "act_190": {"url": "https://www.act.gov.au/migration/skilled-migrants/190-nomination-criteria", "content_sha256": "c209efbce92e989cf3602467ef1f276778b2a1725ad92efbcd3381a64b828c18", "consecutive_failures": 0, "last_checked": "2026-10-28T13:35:37+10:00", "last_http_status": 200, "status": "live_verified"}, "nt_nom": {"url": "https://australiasnorthernterritory.com.au/move/migrate-to-work/nt-government-visa-nomination", "content_sha256": "ac0b2cad5ff315d54ba9415d8db6da34c6e83acc04b4b3aceba2eeb60a17dbf1", "consecutive_failures": 0, "last_checked": "2026-10-28T13:35:37+10:00", "last_http_status": 200, "status": "live_verified"}}};

  const STATE = {
    lang: "ko",
    activeTab: "QLD",
    pts189: 75,
    pts190: 80,
    pts491: 90,
    sources: DEFAULT_SOURCES,
    skillselect: DEFAULT_SKILLSELECT_DATA,
    programStatus: DEFAULT_PROGRAM_STATUS,
    selectedOcc: "Registered Nurse (Nec)"
  };

  function escHtml(str) {
    return String(str ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function getTodayBneStr() {
    try {
      return new Intl.DateTimeFormat("en-CA", { timeZone: "Australia/Brisbane" }).format(new Date());
    } catch (_) {
      return "2026-10-28";
    }
  }

  function getProgramRecord(jurisdiction, subclass) {
    const recs = STATE.programStatus?.records || [];
    return recs.find((r) => r.jurisdiction === jurisdiction && String(r.subclass) === String(subclass)) || null;
  }

  function getSupplementaryRecords(jurisdiction) {
    const recs = STATE.programStatus?.supplementary_records || [];
    return recs.filter((r) => r.jurisdiction === jurisdiction && r.claim_state === "current");
  }

  function isActiveCurrent(rec) {
    return Boolean(rec && (rec.claim_state === "current" || rec.claim_state === "cached_last_good"));
  }

  function formatBadgePill(rec, en) {
    const b = rec?.badge || "unsaid";
    const labels = {
      open: en ? "● OPEN" : "● 접수 개방 (open)",
      limited: en ? "◐ LIMITED" : "◐ 제한 접수 (limited)",
      closed: en ? "⛔ CLOSED" : "⛔ 접수 마감 (closed)",
      unsaid: en ? "○ UNSAID" : "○ 문장 없음 (unsaid)",
      needs_review: en ? "⚑ NEEDS REVIEW" : "⚑ 수동 확인 필요 (needs_review)"
    };
    const cachedTag = rec?.freshness === "cached_last_good"
      ? (en ? " · Cached Last OK" : " · 마지막 검증본 유지")
      : "";
    return `<span class="ps-badge ps-badge--${escHtml(b)}">${labels[b] || escHtml(b)}${cachedTag}</span>`;
  }

  function formatStatePortalPlacesCell(stateCode, en) {
    const r190 = getProgramRecord(stateCode, "190");
    const r491 = getProgramRecord(stateCode, "491");
    if (!r190 && !r491) return `<span style="color:#64748B;">—</span>`;

    const parts = [];
    if (r190?.total_state_places && (r190.places_claim_state === "current" || r491?.places_claim_state === "current")) {
      const p190 = r190.places_claim_state === "current" && r190.places != null ? Number(r190.places).toLocaleString() : (en ? "unsaid" : "미기재");
      const p491 = r491?.places_claim_state === "current" && r491?.places != null ? Number(r491.places).toLocaleString() : (en ? "unsaid" : "미기재");
      parts.push(en
        ? `<strong>State notice: ${Number(r190.total_state_places).toLocaleString()}</strong> (190: ${p190} · 491: ${p491})`
        : `<strong>주 페이지 발표: 합계 ${Number(r190.total_state_places).toLocaleString()}석</strong> (190: ${p190} · 491: ${p491})`);
    } else {
      if (r190?.places_claim_state === "current" && r190.places != null) {
        parts.push(en
          ? `<strong>State 190: ${Number(r190.places).toLocaleString()}</strong>`
          : `<strong>주 페이지 190: ${Number(r190.places).toLocaleString()}석</strong>`);
      } else if (stateCode === "ACT" && isActiveCurrent(r190)) {
        parts.push(en
          ? `2026–27 unannounced <span style="color:#64748B;">(800+800 on page was 2025–26)</span>`
          : `2026–27 배정 미발표 <span style="color:#64748B;">(페이지의 800+800은 2025–26)</span>`);
      } else {
        parts.push(en ? `State places: unsaid` : `주 페이지 자리 수: 미기재`);
      }
      if (r491?.places_claim_state === "current" && r491.places != null) {
        parts.push(en
          ? `<strong>State 491: ${Number(r491.places).toLocaleString()}</strong>`
          : `<strong>주 페이지 491: ${Number(r491.places).toLocaleString()}석</strong>`);
      } else if (stateCode === "VIC" && isActiveCurrent(r491) && r491.badge === "closed") {
        parts.push(en ? `491: unfinalised (ROI closed)` : `491: 미확정 (ROI 중단)`);
      }
    }
    const b190 = r190?.badge || "unsaid";
    const b491 = r491?.badge || "unsaid";
    parts.push(`<span style="font-size:11px;color:#475569;">190: <code>${escHtml(b190)}</code> · 491: <code>${escHtml(b491)}</code></span>`);
    return `<div style="font-size:12px;line-height:1.45;">${parts.join("<br/>")}</div>`;
  }

  function renderProgramStatusStrip(stateCode, compact) {
    const en = STATE.lang === "en";
    const r190 = getProgramRecord(stateCode, "190");
    const r491 = getProgramRecord(stateCode, "491");
    if (!r190 && !r491) return "";
    const todayBne = getTodayBneStr();
    const damaUrl = STATE.programStatus?.dama_navigator_url || "https://changa9090.github.io/parkco-dama-navigator/";

    const renderSubCard = (rec, subLabel) => {
      if (!rec) return "";
      const b = rec.badge || "unsaid";
      const yrText = rec.program_year_source === "page" && rec.program_year
        ? (en ? `Program Year ${rec.program_year}` : `프로그램 연도 ${rec.program_year}`)
        : (en ? "Program year unsaid on page" : "연도 숫자 미표기 (unsaid)");
      const pastTag = (rec.mentioned_date && rec.mentioned_date < todayBne && isActiveCurrent(rec))
        ? `<span style="font-size:11px;background:#F1F5F9;color:#475569;padding:1px 6px;border-radius:4px;font-weight:700;">${en ? "Past date still on page" : "원문 유지 중 · 지난 일정"}</span>`
        : "";
      const summaryText = en ? (rec.summary_en || rec.summary_ko || "") : (rec.summary_ko || "");
      const unsaidLine = b === "unsaid"
        ? `<div style="font-size:11.8px;color:#475569;font-weight:600;">${en ? "No 2026–27 opening/closing banner found in this check." : "이 조회에서 2026–27 개방·마감 문장은 없음."}</div>`
        : "";
      const placesLine = (rec.places_claim_state === "current" && rec.places != null)
        ? `<div style="font-size:12px;color:#166534;font-weight:800;">${en ? `State-published places: ${Number(rec.places).toLocaleString()}` : `주 페이지가 밝힌 자리: ${Number(rec.places).toLocaleString()}석`}</div>`
        : "";
      const quoteBlock = (!compact && rec.quote && isActiveCurrent(rec))
        ? `<blockquote class="ps-quote">“${escHtml(rec.quote)}”${rec.secondary_quote ? ` <span style="opacity:0.85;">“${escHtml(rec.secondary_quote)}”</span>` : ""}</blockquote>`
        : (compact && rec.quote && isActiveCurrent(rec)
          ? `<blockquote class="ps-quote">“${escHtml(rec.quote)}”</blockquote>`
          : "");
      const gapsLine = (!compact && Array.isArray(rec.gaps_ko) && rec.gaps_ko.length > 0 && !en)
        ? `<div style="font-size:11.5px;color:#6B4A1F;"><strong>이 페이지에 없음:</strong> ${rec.gaps_ko.map(escHtml).join(" · ")}</div>`
        : "";

      return `
        <div class="ps-card ps-card--${escHtml(b)}">
          <div class="ps-card-top">
            <span class="ps-subclass">${escHtml(stateCode)} · Subclass ${escHtml(subLabel)} <span style="font-weight:600;font-size:12px;color:#525866;">(${escHtml(yrText)})</span></span>
            <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
              ${pastTag}
              ${formatBadgePill(rec, en)}
            </div>
          </div>
          ${placesLine}
          <p class="ps-summary">${escHtml(summaryText)}</p>
          ${unsaidLine}
          ${quoteBlock}
          ${gapsLine}
          <div class="ps-meta">
            <span>Retrieved <code>${escHtml(rec.retrieved_on || "—")}</code></span>
            <a href="${escHtml(rec.source_url || "#")}" target="_blank" rel="noopener noreferrer">${en ? "Official Source Page ↗" : "원문 출처 확인 ↗"}</a>
          </div>
        </div>
      `;
    };

    const supp = !compact ? getSupplementaryRecords(stateCode) : [];
    const suppHtml = supp.length > 0
      ? `<div style="margin-top:10px;display:grid;gap:6px;">
          ${supp.map((s) => `
            <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;padding:8px 12px;font-size:12px;color:#334155;">
              <div><strong>${en ? "Additional Verified Source Note" : "추가 원문 검증 항목"}</strong> (${escHtml(s.retrieved_on)} · <a href="${escHtml(s.source_url)}" target="_blank" rel="noopener noreferrer" style="color:#7A1F2B;font-weight:700;">${en ? "Source ↗" : "출처 ↗"}</a>): ${escHtml(en ? (s.summary_en || s.summary_ko) : s.summary_ko)}</div>
              ${s.quote ? `<div style="margin-top:3px;font-style:italic;color:#475569;">“${escHtml(s.quote)}”</div>` : ""}
            </div>
          `).join("")}
        </div>`
      : "";

    return `
      <div class="program-status-strip" data-jurisdiction="${escHtml(stateCode)}">
        <div class="program-status-head">
          <span class="program-status-title">📡 ${en
            ? `${stateCode} Program-Year Official Intake Status (190 & 491 Verbatim Check)`
            : `${stateCode} 프로그램 연도 공식 접수 상태 층 (190 · 491 원문 문장 기준)`}</span>
          <span style="font-size:11.5px;color:#525866;">${en
            ? "Verified directly from official State/Territory pages · Separate from standing criteria below"
            : "주 정부 원문 인용 기반 · 아래 상설 요건(STATE_RULES)보다 우선 확인"}</span>
        </div>
        <div class="program-status-pair">
          ${renderSubCard(r190, "190")}
          ${renderSubCard(r491, "491")}
        </div>
        ${suppHtml}
        <div class="ps-dama-link">
          ${en
            ? `For DAMA deadlines, occupations, and concessions, see the <a href="${escHtml(damaUrl)}" target="_blank" rel="noopener noreferrer">DAMA Navigator →</a>`
            : `DAMA 일정·직종·양보는 <a href="${escHtml(damaUrl)}" target="_blank" rel="noopener noreferrer">DAMA 네비게이터</a>를 본다.`}
        </div>
      </div>
    `;
  }

  const I18N = {
    ko: {
      brandTag: "호주 기술이민 (189 · 190 · 491 Schedule 6D) & 8개 주정부 노미네이션 네비게이터",
      pollBtnLabel: "12/12 연방·8개 주정부 검증됨",
      topCta: "박앤코 상담·문의하기 →",
      urgentBadge: "🔥 Schedule 6D & 8개 주 핵심 경고",
      urgentText: "① 해외+호주 경력 합산은 Item 6D51에 따라 최대 20점으로 상한 캡 적용(단순 합산 35점 불가) · ② WA 노미네이션 신청비 $0 & 491 잡오퍼 면제 · ③ 491→191 영주권 전환 시 $53,900 소득 하한선 완전 폐지(NOA 3개 연도만 제출)!",
      urgentLink: "내 점수 & 주정부 즉시 진단 →",
      heroOverline: "Migration Regulations 1994 Schedule 6D · LIN 19/210 · 8-State Nomination Portals (QLD · NSW · VIC · WA · SA · TAS · ACT · NT)",
      hero_title: "호주 일반기술이민 (189 · 190 · 491) Schedule 6D 점수 계산기 & 8개 주정부 노미네이션 조건 통합 네비게이터",
      hero_lead: "연방 법정 점수표(Schedule 6D)의 숨은 상한선(해외+호주 경력 합산 20점 캡, 파트너 기술/영어 10점·5점, STEM 연구석박사 10점)부터 8개 주/준주(QLD·NSW·VIC·WA·SA·TAS·ACT·NT)별 온쇼어 최소 거주·근무 개월 수, 수수료($0~$630.30), 졸업생 특례, 그리고 491→191 영주권 전환($0 소득하한)까지 한 화면에서 완벽히 시뮬레이션하세요.",
      sec0_title: "호주 8개 주/준주 노미네이션 핵심 요건 & Schedule 6D 점수 구조 시각화",
      sec1_title: "호주 기술이민 Schedule 6D 법정 점수 정밀 계산기 (189 · 190 · 491 동시 산출)",
      sec2_title: "8개 주/준주 노미네이션(190 · 491) 조건 철저 검증 & 내 프로필 맞춤 매칭기",
      sec3_title: "491/494 → Subclass 191 영주권 전환 진단($0 소득하한) & 주정부+연방 비자비 계산기",
      sec4_title: "12개 연방 법령 · SkillSelect · 8개 주/준주 노미네이션 공식 포털 모니터링 대시보드"
    },
    en: {
      brandTag: "Australia GSM Points (189 · 190 · 491 Schedule 6D) & 8-State Nomination Navigator",
      pollBtnLabel: "12/12 Federal & 8-State Sources Verified",
      topCta: "Book a Consultation →",
      urgentBadge: "🔥 Schedule 6D & 8-State Key Rules",
      urgentText: "① Overseas + Australian skilled employment is capped at 20 pts total under Item 6D51 · ② WA charges $0 nomination fee & requires no job offer for 491 · ③ Subclass 491→191 PR has $0 minimum income threshold (3 ATO NOAs required)!",
      urgentLink: "Calculate Points & State Match →",
      heroOverline: "Migration Regulations 1994 Schedule 6D · LIN 19/210 · 8-State Nomination Portals (QLD · NSW · VIC · WA · SA · TAS · ACT · NT)",
      hero_title: "Australia General Skilled Migration (189 · 190 · 491) Schedule 6D Points & 8-State Nomination Navigator",
      hero_lead: "Simulate statutory Schedule 6D points (including the Item 6D51 20-point combined experience cap, Partner 10/5 pts, and STEM Masters/PhD 10 pts), compare onshore residence/employment rules and fees ($0–$630.30) across all 8 States & Territories, and verify Subclass 491 → 191 PR transition ($0 minimum taxable income).",
      sec0_title: "8-State Nomination Requirements & Schedule 6D Points Visual Dashboard",
      sec1_title: "Statutory Schedule 6D GSM Points Calculator (Simultaneous 189 · 190 · 491)",
      sec2_title: "8-State & Territory (QLD–NT) Nomination Eligibility Combinator & Deep-Dive",
      sec3_title: "491/494 → Subclass 191 PR Transition ($0 Min Income) & Total Fee Calculator",
      sec4_title: "12 Federal & 8-State Official Portal Monitoring Dashboard"
    }
  };

  const STATE_RULES = {
    QLD: {
      name: "Queensland (QLD — Migration Queensland)",
      portal: "https://www.migration.qld.gov.au/visa-options/skilled-visas",
      process: "SkillSelect EOI + Migration Queensland ROI 필수",
      process_en: "SkillSelect EOI + Mandatory Migration Queensland ROI",
      fee: "$630.30 AUD (Onshore GST 포함) / $573.00 AUD (Offshore)",
      fee_en: "$630.30 AUD (Onshore incl. GST) / $573.00 AUD (Offshore)",
      minMonths190: 9,
      minMonths491: 6,
      minHours190: 30,
      minHours491: 30,
      streams: [
        "1. Skilled Workers Living in QLD (Onshore): 190은 QLD 내 9개월 이상 연속 거주·풀타임 근무(주 30h+) + 향후 12개월 고용보장 필요(2025–26 강화). 491은 지방(Regional) QLD 내 6개월 이상 연속 거주·근무 + 향후 6~12개월 지방 고용보장 필요.",
        "2. Queensland University Graduates: QLD 소재 대학에서 학사·석사·박사 학위를 100% 수료한 졸업생 통합 트랙 (전공과 지명 직군이 반드시 일치하지 않아도 QLD Onshore Skills List 직군이면 신청 가능).",
        "3. Building & Construction / Energy Priority Pathways: 건설·에너지 직종 종사자는 완화된 온쇼어 경력(3~6개월)으로도 190 우선 선발.",
        "4. Small Business Owners (SBO — 491 전용): ⚠️ 2025년 9월 19일 이후 신규 인수·창업 사업체는 접수 중단. 기존 적격 사업체는 Pathway 1(최소 $100,000 인수 후 6개월 운영 + 호주 영주권/시민권자 1명 주 20h+ 고용) 또는 Pathway 2(창업 후 2년 연속 운영 + 연매출 $200,000 이상) 충족 시 신청 가능.",
        "5. Skilled Workers Outside Australia (Offshore): 학위 취득 후 최소 1년 이상 관련 경력 및 현재 재직 중(QLD Offshore Skills List)."
      ],
      streams_en: [
        "1. Skilled Workers Living in QLD (Onshore): 190 requires ≥9 months continuous QLD residence & full-time work (≥30h/wk) + 12 months ongoing employment. 491 requires ≥6 months regional QLD residence & work + 6–12 months ongoing regional employment.",
        "2. Queensland University Graduates: Unified pathway for Bachelor, Masters & PhD graduates who completed 100% of their degree at a QLD university in any occupation on the QLD Onshore Skills List.",
        "3. Building & Construction / Energy Priority Pathways: Reduced onshore employment threshold (3–6 months) for eligible trade & engineering occupations.",
        "4. Small Business Owners (SBO — 491 only): ⚠️ Closed to businesses purchased or started after 19 September 2025. Legacy eligible businesses require $100k purchase + 6m operation + 1 AU employee (20h+/wk) or 2yr startup ($200k turnover).",
        "5. Skilled Workers Outside Australia (Offshore): ≥1 year post-qualification experience and currently employed in a QLD Offshore Skills List occupation."
      ],
      traps: "⚠️ 2025–26 프로그램부터 온쇼어 일반 근로자의 사전 근무 기간이 190은 6개월→9개월, 491은 3개월→6개월로 상향되었으며, SBO(소규모 사업체 491)는 2025.09.19 이후 신규 매수분에 대해 폐지되었습니다.",
      traps_en: "⚠️ From 2025–26, QLD increased standard onshore prior employment from 6m→9m (190) and 3m→6m (491), and closed the 491 SBO stream to businesses acquired or established after 19 Sep 2025."
    },
    NSW: {
      name: "New South Wales (NSW — Investment NSW)",
      portal: "https://www.nsw.gov.au/visas-and-migration/skilled-visas",
      process: "190 & 491 Path 2는 SkillSelect EOI 초청 전용 (별도 ROI 없음) / 491 Path 1 & Path 3는 Investment NSW 직접 신청(Direct Application)",
      process_en: "190 & 491 Path 2 by EOI Invitation Only (No ROI) / 491 Path 1 & Path 3 via Direct Application to Investment NSW",
      fee: "$346.50 AUD (Onshore GST 포함) / $315.00 AUD (Offshore)",
      fee_en: "$346.50 AUD (Onshore incl. GST) / $315.00 AUD (Offshore)",
      minMonths190: 6,
      minMonths491: 3,
      minHours190: 20,
      minHours491: 20,
      streams: [
        "1. Subclass 190 (EOI Invitation Only): NSW Skills List 대상 섹터(건설, 재생에너지, 케어경제, 디지털/사이버, 농업, 첨단제조) 직군 + NSW 내 최소 6개월 연속 거주(또는 해외 6개월 연속 거주).",
        "2. Subclass 491 — Pathway 1 (Work in Regional NSW — 직접 신청!): 지정 지방 NSW의 단일 고용주(Single Regional NSW Employer) 아래에서 지명 직군(주 20h+)으로 최소 6개월 연속 근무 + 연봉이 TSMIT/CSIT($76,515 / FY26–27 $79,423 비례 환산) 이상인 경우 초청 대기 없이 직접 노미네이션 신청 가능!",
        "3. Subclass 491 — Pathway 2 (Investment NSW EOI 초청): NSW(또는 해외) 3개월 연속 거주자 중 SkillSelect EOI에서 선발.",
        "4. Subclass 491 — Pathway 3 (Regional NSW Graduate — 직접 신청!): 최근 2년 이내에 지방 NSW 캠퍼스에서 학사(Bachelor) 이상 학위를 마친 졸업생 — 경력 및 잡오퍼 없이 직접 신청 가능!"
      ],
      streams_en: [
        "1. Subclass 190 (EOI Invitation Only): NSW Skills List target sectors (Construction, Renewables, Care Economy, Digital/Cyber, Agri, Advanced Manufacturing) + ≥6 months continuous residence in NSW (or offshore).",
        "2. Subclass 491 — Pathway 1 (Work in Regional NSW — Direct Application): ≥6 months continuous employment (≥20h/wk) with a single Regional NSW employer in your nominated/closely related occupation paid at or above TSMIT/CSIT ($76,515 / $79,423 pro-rata).",
        "3. Subclass 491 — Pathway 2 (Investment NSW EOI Invitation): Selected from SkillSelect EOI with ≥3 months continuous residence in NSW or offshore.",
        "4. Subclass 491 — Pathway 3 (Regional NSW Graduate — Direct Application): Completed a Bachelor or higher degree at a Regional NSW campus within the last 2 years — no work experience or job offer required!"
      ],
      traps: "💡 팁: 지방 NSW에서 6개월간 TSMIT/CSIT 이상 급여를 받으며 일하고 있다면 초청장을 기다리지 말고 491 Pathway 1로 즉시 직접 신청(Direct Application)하세요!",
      traps_en: "💡 Tip: If you have worked 6 months in Regional NSW earning ≥TSMIT/CSIT or graduated from a Regional NSW university within 2 years, apply directly under 491 Pathway 1 or 3 without waiting for an EOI invitation!"
    },
    VIC: {
      name: "Victoria (VIC — Live in Melbourne)",
      portal: "https://liveinmelbourne.vic.gov.au/migrate/skilled-migration-visas",
      process: "SkillSelect EOI + Live in Melbourne ROI 필수 (Victorian Points Test 랭킹)",
      process_en: "SkillSelect EOI + Mandatory Live in Melbourne ROI (Ranked on Earnings & Priority Sectors)",
      fee: "$264.00 AUD 합계 (ROI 접수비 $66 [연 1회] + Nomination 신청비 $198 — GST 포함)",
      fee_en: "$264.00 AUD Total (ROI $66 + Nomination $198 incl. GST)",
      minMonths190: 0,
      minMonths491: 1,
      minHours190: 20,
      minHours491: 20,
      streams: [
        "1. Subclass 190 (Onshore & Offshore): 빅토리아 거주자 및 해외 신청자 모두 가능. 온쇼어 신청자는 빅토리아 내 물리적 사업장을 둔 고용주로부터 받는 숙련 직무(ANZSCO Skill Level 1–3) 연간 추정 소득(Estimated Annual Earnings)이 가장 핵심적인 선발 지표로 작용.",
        "2. Subclass 491 (Onshore Regional & Offshore): 온쇼어 신청자가 491 ROI를 제출하려면 반드시 지정 지방 빅토리아(Regional Victoria)에 거주하면서 동시에 지방 빅토리아 내 숙련 직무(ANZSCO 1–3)에 재직 중이어야 함.",
        "3. 우선 선발 섹터: 보건·의료(Health), 사회복지(Social Services), 교육(특히 유아교사 Early Childhood), 건설(Construction), 신에너지, 디지털 경제(190 온쇼어), 호스피탈리티·관광(491 지방)."
      ],
      streams_en: [
        "1. Subclass 190 (Onshore & Offshore): Open to VIC residents and offshore applicants. For onshore applicants, Estimated Annual Earnings from skilled employment (ANZSCO Skill Level 1–3) with a physically present VIC employer is a primary ranking factor.",
        "2. Subclass 491 (Onshore Regional & Offshore): Onshore applicants must live AND work in skilled employment (ANZSCO 1–3) in designated Regional Victoria to lodge a 491 ROI.",
        "3. Priority Sectors: Health, Social Services, Education (Early Childhood), Construction, New Energy, Digital Economy (190 onshore), and Hospitality/Tourism (491 regional)."
      ],
      traps: "⚠️ 빅토리아 온쇼어 190은 최소 근무 개월 수 제한은 없으나, ROI에 기재한 연간 소득(Earnings)을 급여명세서·고용계약서로 100% 입증하지 못하면 노미네이션이 즉시 거절됩니다.",
      traps_en: "⚠️ VIC onshore 190 has no minimum prior employment duration, but failure to substantiate the exact Estimated Annual Earnings claimed in your ROI results in immediate nomination refusal."
    },
    WA: {
      name: "Western Australia (WA — Migration WA)",
      portal: "https://migration.wa.gov.au/our-services-support/state-nominated-migration-program",
      process: "별도 ROI 없음 — 매월 SkillSelect EOI에서 직접 초청 (WA 거주자 최우선 선발)",
      process_en: "No separate ROI — Direct monthly invitations from SkillSelect EOI (WA residents ranked #1)",
      fee: "$0 AUD (서호주 주정부 노미네이션 수수료 전면 무료!)",
      fee_en: "$0 AUD (Zero State Nomination Application Fee!)",
      minMonths190: 0,
      minMonths491: 0,
      minHours190: 35,
      minHours491: 0,
      streams: [
        "1. General Stream — WASMOL Schedule 1 (보건·의료직군): 최근 10년 내 호주 또는 해외 경력 1년 이상(주 20h+). 190은 WA 내 6개월 이상 풀타임 고용계약(주 35h+, 최대 2개 계약 합산) 필요, 491은 고용계약 불요!",
        "2. General Stream — WASMOL Schedule 2 (일반 및 우선직군): WA 주정부 차원의 사전 경력 요건 없음(0개월)! 190은 WA 내 6개월 풀타임 고용계약이 필요하나 건축·건설(Building & Construction) 직군은 190 고용계약마저 전면 면제! 491은 전 직군 고용계약 불요!",
        "3. Graduate Stream (Higher Education & VET Cert III+): 서호주 내 대학 또는 VET(Cert III 이상)에서 2년(92주) 이상 대면 학업 수료 시 190·491 모두 경력 면제 & 고용계약 면제!",
        "4. 우선 선발 순위: WA 거주자(Onshore WA) > 타 주 거주자 및 해외 신청자. 4대 우선 산업(건설, 의료·사회복지, 호스피탈리티·관광, 교육)."
      ],
      streams_en: [
        "1. General Stream — WASMOL Schedule 1 (Health & Medical): ≥1 yr AU/overseas experience in last 10 yrs. 190 requires a 6-month full-time (≥35h/wk) WA employment contract; 491 requires NO employment contract!",
        "2. General Stream — WASMOL Schedule 2: Zero prior work experience required! 190 requires a 6-month WA full-time contract (waived completely for Building & Construction occupations!). 491 requires NO employment contract!",
        "3. Graduate Stream (Higher Education & VET Cert III+): 2 years (92 weeks) WA face-to-face study waives both work experience AND employment contracts for both 190 and 491!",
        "4. Ranking Priority: WA residents > Interstate/Offshore across 4 priority sectors (Building & Construction, Healthcare & Social Assistance, Hospitality & Tourism, Education & Training)."
      ],
      traps: "💡 서호주(WA)는 호주 8개 주 중 유일하게 신청비가 $0이며, 정착자금(Settlement Funds) 증빙도 폐지되었고, WA 졸업생과 491 신청자에게 고용계약서를 요구하지 않는 가장 파격적인 주입니다.",
      traps_en: "💡 Western Australia is the only state charging $0 nomination fee, has abolished settlement fund requirements, and waives job offers for WA Graduates and all 491 applicants."
    },
    SA: {
      name: "South Australia (SA — Skilled & Business Migration SA)",
      portal: "https://www.migration.sa.gov.au/visa-options/skilled-visas",
      process: "온쇼어 3개 스트림은 SA ROI 필수 (ROI 무료) / 오프쇼어는 SkillSelect EOI에서 직접 초청",
      process_en: "Onshore streams require SA ROI (free) / Offshore selected directly from SkillSelect EOI",
      fee: "$394.00 AUD (노미네이션 신청 시 납부)",
      fee_en: "$394.00 AUD (Payable upon full nomination application)",
      minMonths190: 12,
      minMonths491: 6,
      minHours190: 30,
      minHours491: 20,
      streams: [
        "1. Skilled Employment in SA (Onshore): SA 내 12개월 이상 거주 + 190은 통상 12개월(직군별 6~12개월) 주 30시간(격주 60시간) 이상 숙련 근무 / 491은 6개월 이상 주 20시간 이상 숙련 근무.",
        "2. South Australian Graduates: SA에서 CRICOS 과정의 75% 이상 이수(최소 12개월 거주). 190은 통상 6개월(주 30h+), 491은 3~6개월(주 20h+) 전공 관련 근무 시 우대.",
        "3. Outer Regional SA: 애들레이드 대도시권 외곽(Outer Regional SA)에서 거주·근무 시 190은 9개월(주 30h+), 491은 6개월(주 20h+)로 요건 완화.",
        "4. Offshore Stream: EOI 직접 초청. 최근 5년 내 3년 이상 경력(건설 기능직은 최근 3년 내 1년 경력) 보유자."
      ],
      streams_en: [
        "1. Skilled Employment in SA (Onshore): ≥12 months SA residence + 190 typically requires 12 months (6–12m by occupation) working ≥30h/wk (60h/fortnight); 491 requires ≥6 months working ≥20h/wk.",
        "2. South Australian Graduates: Completed ≥75% of CRICOS study in SA (≥12m residence). Concessional work thresholds (typically 6m @ 30h/wk for 190; 3–6m @ 20h/wk for 491).",
        "3. Outer Regional SA: Living and working outside Greater Adelaide reduces thresholds (9m @ 30h/wk for 190; 6m @ 20h/wk for 491).",
        "4. Offshore Stream: Direct EOI invitation with ≥3 years experience in last 5 years (1 year in last 3 years for construction trades)."
      ],
      traps: "⚠️ 남호주(SA) 온쇼어 190은 주당 30시간(격주 60시간) 이상 근무가 핵심 기준이므로 주 20~25시간 파트타임 근무자는 491 트랙으로 먼저 진입하거나 근무시간을 늘려야 합니다.",
      traps_en: "⚠️ SA onshore 190 strictly requires ≥30 hours/week (60h/fortnight); applicants working 20–25h/wk should target 491 or increase hours."
    },
    TAS: {
      name: "Tasmania (TAS — Migration Tasmania Gateway)",
      portal: "https://www.migration.tas.gov.au/skilled_migration",
      process: "Migration Tasmania Gateway (ROI) 필수 — Gold / Green / Orange-Plus / Orange Pass 4단계 우선순위 부여",
      process_en: "Migration Tasmania Gateway (ROI) Mandatory — Ranked via Gold / Green / Orange-Plus / Orange Pass",
      fee: "$425.70 AUD ($387 + GST $38.70, ROI 접수 자체는 무료)",
      fee_en: "$425.70 AUD ($387 + $38.70 GST; Gateway ROI is free)",
      minMonths190: 6,
      minMonths491: 6,
      minHours190: 20,
      minHours491: 20,
      streams: [
        "1. Tasmanian Skilled Employment (TSE): 주 20시간 이상 숙련 근무 기준 — 190은 보건·교육 직군(TOSL) 6개월, 일반 TOSL 직군 9개월, 비-TOSL 직군(연봉 $57k+ 충족) 15개월 근무 필요. 491은 Skill 1–3 직무 6개월(주 20h+) 근무로 충족!",
        "2. Tasmanian Skilled Graduate (TSG): 190은 TAS 내 2년(92주) 풀타임 학업·거주, 491은 TAS 내 1년(40주+) 풀타임 학업·거주 (기본 자격에는 취업 요건이 없으나 취업 시 Gold/Green Pass 획득).",
        "3. Tasmanian Established Resident (TER): TAS 내 장기 거주자 — 190은 3년 이상 거주(+12~18개월 근무), 491은 2년 이상 거주(+6~12개월 근무).",
        "4. Tasmanian Business Operator (491 전용): TAS 내 본인 사업체 12개월 이상 운영 + 개인 과세소득 $67,509(TSMIT 85%) 이상.",
        "5. Overseas Applicant (Job Offer / OSOP): 보건·교육 정식 잡오퍼 보유 시 해외에서도 190 가능, 일반 직군 잡오퍼는 491."
      ],
      streams_en: [
        "1. Tasmanian Skilled Employment (TSE): Working ≥20h/wk — 190 requires 6m (Health/Allied Health/Education TOSL), 9m (general TOSL), or 15m (non-TOSL earning ≥$57k). 491 requires 6m (≥20h/wk) in any ANZSCO Skill 1–3 role!",
        "2. Tasmanian Skilled Graduate (TSG): 190 requires 2 yrs (92 wks) TAS study & residence; 491 requires 1 yr (40 wks) TAS study & residence (skilled employment elevates pass to Gold/Green).",
        "3. Tasmanian Established Resident (TER): Long-term TAS residents — 3+ yrs residence for 190; 2+ yrs residence for 491.",
        "4. Tasmanian Business Operator (491 only): 12m qualifying TAS business operation yielding ≥$67,509 personal taxable income (85% of TSMIT).",
        "5. Overseas Applicant (Job Offer / OSOP): Formal job offer in Health/Education qualifies for 190 offshore; other occupations qualify for 491."
      ],
      traps: "💡 태즈메이니아는 Gateway에서 Gold Pass(즉시 초청) 또는 Green Pass(8주 내 초청 보장)에 해당하는 속성(Priority Attributes)을 몇 개 확보하는지가 당락을 좌우합니다.",
      traps_en: "💡 Securing Gold Pass (immediate invitation) or Green Pass (invitation within 8 weeks) priority attributes in the Migration Tasmania Gateway is decisive."
    },
    ACT: {
      name: "Australian Capital Territory (ACT — Canberra Matrix)",
      portal: "https://www.act.gov.au/migration/skilled-migrants",
      process: "SkillSelect EOI + Canberra Matrix (연방 점수와 별개인 캔버라 자체 배점표) 필수",
      process_en: "SkillSelect EOI + Mandatory Canberra Matrix (Separate territory scoring system)",
      fee: "$385.00 AUD 합계 (Matrix 제출비 $27.50 + Nomination 신청비 $357.50 / ACT 박사 스트림은 $0 무료)",
      fee_en: "$385.00 AUD Total ($27.50 Matrix + $357.50 Nomination / $0 for ACT Doctorate Stream)",
      minMonths190: 6,
      minMonths491: 3,
      minHours190: 30,
      minHours491: 15,
      streams: [
        "1. Canberra Resident — 190: 캔버라 6개월 이상 거주 + 직전 30주 중 최소 26주간 주 30시간 이상 유급 근무(최소 주급 $1,175 또는 시급 $31 이상) + Proficient(IELTS 7.0) 이상 영어 필수 (단, 요리사 351311 및 ANZSCO Skill Level 3–5 직군은 Competent 6.0 허용).",
        "2. Canberra Resident — 491: 캔버라 3개월 이상 거주 + 직전 15주 중 최소 13주간 주 15시간 이상 유급 근무(최소 주급 $610 이상, 기존 주 20시간에서 완화!) + Competent 영어 가능.",
        "3. ACT Doctorate Streamlined Nomination: ACT 소재 대학 박사(PhD) 수료자는 ACT Critical Skills List, 취업·소득 요건, 영어 상향 요건 및 신청비($0)가 모두 면제!",
        "4. Small Business Owner (SBO) & 457/482 Holder Stream: ACT 사업체 지분 51%+ 보유·연매출 $200k·호주인 고용(190 6개월 / 491 3개월) 또는 ACT 스폰서 아래 482 비자로 6개월 이상 근무 시 Critical Skills List 면제."
      ],
      streams_en: [
        "1. Canberra Resident — 190: ≥6m ACT residence + paid work ≥30h/wk in at least 26 of the last 30 weeks (min $1,175/wk or $31/hr) + Proficient English (IELTS 7.0+), unless Chef 351311 or ANZSCO Skill 3–5.",
        "2. Canberra Resident — 491: ≥3m ACT residence + paid work ≥15h/wk in at least 13 of the last 15 weeks (min $610/wk, reduced from 20h/wk!) + Competent English.",
        "3. ACT Doctorate Streamlined Nomination: ANU/ACT PhD graduates are exempt from the ACT Critical Skills List, employment/income thresholds, higher English, and pay $0 fee!",
        "4. Small Business Owner (SBO) & 457/482 Holder Stream: 51%+ business ownership ($200k turnover) or 6m working in ACT on a 482 visa with an ACT sponsor waives the Critical Skills List requirement."
      ],
      traps: "⚠️ 캔버라(ACT) 거주자 스트림은 유급 휴가 한도 및 주당 근무시간(190은 30주 중 26주 주 30h+, 491은 15주 중 13주 주 15h+)을 단 1주라도 놓치면 Matrix 접수 자격이 박탈되므로 급여명세서 주수 계산이 매우 중요합니다.",
      traps_en: "⚠️ ACT strictly audits weekly payslips: missing even 1 qualifying week (26/30 weeks @ 30h+ for 190; 13/15 weeks @ 15h+ for 491) voids Canberra Matrix eligibility."
    },
    NT: {
      name: "Northern Territory (NT — MigrationNT)",
      portal: "https://theterritory.com.au/migrate/migrate-to-work/northern-territory-government-visa-nomination",
      process: "별도 ROI 대기열 없음 — SkillSelect EOI 후 MigrationNT 포털(visas.nt.gov.au)에 직접 노미네이션 신청 (점수순이 아닌 자격 심사제)",
      process_en: "No separate ROI queue — Direct application via MigrationNT portal (visas.nt.gov.au) after lodging EOI",
      fee: "$300.00 AUD (Direct Application)",
      fee_en: "$300.00 AUD (Direct Application)",
      minMonths190: 6,
      minMonths491: 6,
      minHours190: 35,
      minHours491: 35,
      streams: [
        "1. NT Graduates (Onshore): NT 소재 교육기관에서 2년(4학기) 이상 풀타임 학업 수료. 졸업 후 NT에서 6개월 이상 풀타임 취업 가능 비자로 거주하며 전공 관련 근무 시 190 신청 가능 (비자 기간 부족 시 즉시 491 신청 가능).",
        "2. Other NT Residents (Non-Graduate Onshore): NT 내 6개월 연속 거주 + 지명 직군에서 6개월 연속 풀타임(주 35시간 이상) 근무 + 향후 12개월 고용보장.",
        "3. Offshore Streams (491 전용 — 3대 트랙): ① Priority Occupations Stream (NTOMOL 직군 + 경력 1년+ + 정착자금 독신 $35k/부부 $50k), ② Family Stream (NT에 12개월 이상 거주 중인 시민권/영주권 친척 보유), ③ Job Offer Stream (NT 기업 12개월 풀타임 잡오퍼)."
      ],
      streams_en: [
        "1. NT Graduates (Onshore): Completed ≥2 years (4 semesters) full-time study in NT. Eligible for 190 after 6 months post-study full-time skilled residence/work in NT (or immediate 491 if visa expiring).",
        "2. Other NT Residents (Non-Graduate Onshore): ≥6 months continuous NT residence + ≥6 months full-time (≥35h/wk) employment in nominated occupation + 12 months ongoing job offer.",
        "3. Offshore Streams (491 only — 3 tracks): ① Priority Occupations (NTOMOL + 1yr exp + $35k single / $50k couple funds), ② Family Stream (eligible relative living in NT ≥12m), ③ Job Offer Stream (12m full-time NT job offer)."
      ],
      traps: "⚠️ 노던준주(NT)는 비자 승인 후 최소 3년간 NT에 거주·근무하겠다는 서약서(Commitment Declaration)를 받으며, 타 주 이주 동의서(Release Letter)를 발급해 주지 않습니다.",
      traps_en: "⚠️ NT requires a formal 3-year post-grant NT residence/work Commitment Declaration and strictly refuses to issue interstate Release Letters."
    }
  };

  function fmtAUD(n) {
    return "$" + Number(n).toLocaleString("en-AU", { minimumFractionDigits: n % 1 ? 2 : 0, maximumFractionDigits: 2 });
  }

  /* 1. Render SVG Charts (Park & Co 2026 Rebrand Kit Palette) */
  function renderCharts() {
    const en = STATE.lang === "en";
    const stateChart = document.getElementById("svg-state-months-chart");
    if (stateChart) {
      stateChart.innerHTML = `
        <svg viewBox="0 0 680 275" width="100%" style="display:block;height:auto;font-family:'Pretendard Variable','Manrope',sans-serif;">
          <rect x="0" y="0" width="680" height="275" rx="10" fill="#FCFAF6"/>
          <line x1="55" y1="215" x2="655" y2="215" stroke="#DED6C8" stroke-width="1.5"/>
          <!-- QLD -->
          <rect x="68" y="98" width="22" height="117" rx="4" fill="#7A1F2B"/>
          <rect x="92" y="137" width="22" height="78" rx="4" fill="#B67A1E"/>
          <text x="79" y="92" text-anchor="middle" font-size="10" font-weight="700" fill="#7A1F2B">9m</text>
          <text x="103" y="131" text-anchor="middle" font-size="10" font-weight="700" fill="#6B4A1F">6m</text>
          <text x="91" y="234" text-anchor="middle" font-size="11" font-weight="800" fill="#1A1211">QLD</text>
          <text x="91" y="250" text-anchor="middle" font-size="9.5" fill="#47433E">$630.30</text>

          <!-- NSW -->
          <rect x="142" y="137" width="22" height="78" rx="4" fill="#7A1F2B"/>
          <rect x="166" y="176" width="22" height="39" rx="4" fill="#B67A1E"/>
          <text x="153" y="131" text-anchor="middle" font-size="10" font-weight="700" fill="#7A1F2B">6m</text>
          <text x="177" y="170" text-anchor="middle" font-size="10" font-weight="700" fill="#6B4A1F">3–6m</text>
          <text x="165" y="234" text-anchor="middle" font-size="11" font-weight="800" fill="#1A1211">NSW</text>
          <text x="165" y="250" text-anchor="middle" font-size="9.5" fill="#47433E">$346.50</text>

          <!-- VIC -->
          <rect x="216" y="195" width="22" height="20" rx="4" fill="#7A1F2B"/>
          <rect x="240" y="185" width="22" height="30" rx="4" fill="#B67A1E"/>
          <text x="227" y="189" text-anchor="middle" font-size="9.5" font-weight="700" fill="#7A1F2B">${en ? "Salary" : "연봉심사"}</text>
          <text x="251" y="178" text-anchor="middle" font-size="9.5" font-weight="700" fill="#6B4A1F">${en ? "Reg Job" : "재직필수"}</text>
          <text x="239" y="234" text-anchor="middle" font-size="11" font-weight="800" fill="#1A1211">VIC</text>
          <text x="239" y="250" text-anchor="middle" font-size="9.5" fill="#47433E">$264.00</text>

          <!-- WA -->
          <rect x="290" y="198" width="22" height="17" rx="4" fill="#2E6B4F"/>
          <rect x="314" y="204" width="22" height="11" rx="4" fill="#2E6B4F"/>
          <text x="313" y="190" text-anchor="middle" font-size="9.5" font-weight="800" fill="#2E6B4F">${en ? "0m (Contract/Waived)" : "0m (계약/면제)"}</text>
          <text x="313" y="234" text-anchor="middle" font-size="11" font-weight="800" fill="#2E6B4F">WA</text>
          <text x="313" y="250" text-anchor="middle" font-size="9.5" font-weight="800" fill="#2E6B4F">${en ? "$0 (FREE!)" : "$0 (무료!)"}</text>

          <!-- SA -->
          <rect x="364" y="59" width="22" height="156" rx="4" fill="#7A1F2B"/>
          <rect x="388" y="137" width="22" height="78" rx="4" fill="#B67A1E"/>
          <text x="375" y="52" text-anchor="middle" font-size="10" font-weight="700" fill="#7A1F2B">6–12m</text>
          <text x="399" y="131" text-anchor="middle" font-size="10" font-weight="700" fill="#6B4A1F">6m</text>
          <text x="387" y="234" text-anchor="middle" font-size="11" font-weight="800" fill="#1A1211">SA</text>
          <text x="387" y="250" text-anchor="middle" font-size="9.5" fill="#47433E">$394.00</text>

          <!-- TAS -->
          <rect x="438" y="98" width="22" height="117" rx="4" fill="#7A1F2B"/>
          <rect x="462" y="137" width="22" height="78" rx="4" fill="#B67A1E"/>
          <text x="449" y="91" text-anchor="middle" font-size="10" font-weight="700" fill="#7A1F2B">6–15m</text>
          <text x="473" y="131" text-anchor="middle" font-size="10" font-weight="700" fill="#6B4A1F">6m</text>
          <text x="461" y="234" text-anchor="middle" font-size="11" font-weight="800" fill="#1A1211">TAS</text>
          <text x="461" y="250" text-anchor="middle" font-size="9.5" fill="#47433E">$425.70</text>

          <!-- ACT -->
          <rect x="512" y="137" width="22" height="78" rx="4" fill="#7A1F2B"/>
          <rect x="536" y="176" width="22" height="39" rx="4" fill="#B67A1E"/>
          <text x="523" y="131" text-anchor="middle" font-size="10" font-weight="700" fill="#7A1F2B">6m(26w)</text>
          <text x="547" y="170" text-anchor="middle" font-size="10" font-weight="700" fill="#6B4A1F">3m(13w)</text>
          <text x="535" y="234" text-anchor="middle" font-size="11" font-weight="800" fill="#1A1211">ACT</text>
          <text x="535" y="250" text-anchor="middle" font-size="9.5" fill="#47433E">$385.00</text>

          <!-- NT -->
          <rect x="586" y="137" width="22" height="78" rx="4" fill="#7A1F2B"/>
          <rect x="610" y="137" width="22" height="78" rx="4" fill="#B67A1E"/>
          <text x="597" y="131" text-anchor="middle" font-size="10" font-weight="700" fill="#7A1F2B">6m FT</text>
          <text x="621" y="131" text-anchor="middle" font-size="10" font-weight="700" fill="#6B4A1F">6m FT</text>
          <text x="609" y="234" text-anchor="middle" font-size="11" font-weight="800" fill="#1A1211">NT</text>
          <text x="609" y="250" text-anchor="middle" font-size="9.5" fill="#47433E">$300.00</text>

          <!-- Legend -->
          <rect x="65" y="14" width="12" height="12" rx="2" fill="#7A1F2B"/>
          <text x="82" y="24" font-size="10.5" font-weight="700" fill="#7A1F2B">${en ? "Subclass 190 Min Onshore Work/Res" : "Subclass 190 온쇼어 최소 근무/거주"}</text>
          <rect x="295" y="14" width="12" height="12" rx="2" fill="#B67A1E"/>
          <text x="312" y="24" font-size="10.5" font-weight="700" fill="#6B4A1F">${en ? "Subclass 491 Min Onshore Work/Res" : "Subclass 491 온쇼어 최소 근무/거주"}</text>
        </svg>
      `;
    }

    const sch6dChart = document.getElementById("svg-sch6d-points-chart");
    if (sch6dChart) {
      sch6dChart.innerHTML = `
        <svg viewBox="0 0 680 275" width="100%" style="display:block;height:auto;font-family:'Pretendard Variable','Manrope',sans-serif;">
          <rect x="0" y="0" width="680" height="275" rx="10" fill="#FCFAF6"/>
          <text x="24" y="34" font-size="11.5" font-weight="700" fill="#2E2E2E">${en ? "1. Age (Peak at 25–32 yrs)" : "1. 연령 (만 25~32세 최고)"}</text>
          <rect x="235" y="20" width="240" height="20" rx="4" fill="#7A1F2B"/>
          <text x="485" y="35" font-size="11" font-weight="800" fill="#7A1F2B">${en ? "Max 30 pts (Part 6D.1)" : "최대 30점 (Part 6D.1)"}</text>

          <text x="24" y="68" font-size="11.5" font-weight="700" fill="#2E2E2E">${en ? "2. English (Superior IELTS 8.0 / PTE 79)" : "2. 영어 (Superior IELTS 8.0 / PTE 79)"}</text>
          <rect x="235" y="54" width="160" height="20" rx="4" fill="#1F5A5E"/>
          <text x="405" y="69" font-size="11" font-weight="800" fill="#1F5A5E">${en ? "Max 20 pts (Part 6D.2)" : "최대 20점 (Part 6D.2)"}</text>

          <text x="24" y="102" font-size="11.5" font-weight="800" fill="#530009">${en ? "3. Overseas (15) + AU (20) Employment" : "3. 해외(15점)+호주(20점) 경력 합산"}</text>
          <rect x="235" y="88" width="160" height="20" rx="4" fill="#530009"/>
          <text x="405" y="103" font-size="11" font-weight="800" fill="#530009">${en ? "20 pts Combined Cap! (Item 6D51)" : "최대 20점 상한! (Item 6D51)"}</text>

          <text x="24" y="136" font-size="11.5" font-weight="700" fill="#2E2E2E">${en ? "4. Qualifications (PhD 20 · Deg 15 · Trade 10)" : "4. 학력 (박사 20 · 학/석사 15 · 디플로마 10)"}</text>
          <rect x="235" y="122" width="160" height="20" rx="4" fill="#2E6B4F"/>
          <text x="405" y="137" font-size="11" font-weight="800" fill="#2E6B4F">${en ? "Max 20 pts (Part 6D.7)" : "최대 20점 (Part 6D.7)"}</text>

          <text x="24" y="170" font-size="11.5" font-weight="700" fill="#2E2E2E">${en ? "5. STEM Research (+10) · Partner/Single (+10)" : "5. STEM 연구석박사(+10) · 미혼/파트너(+10)"}</text>
          <rect x="235" y="156" width="160" height="20" rx="4" fill="#6B4A1F"/>
          <text x="405" y="171" font-size="11" font-weight="800" fill="#6B4A1F">${en ? "10 pts each (6D.7A / 6D.11)" : "각 10점 (6D.7A / 6D.11)"}</text>

          <text x="24" y="204" font-size="11.5" font-weight="700" fill="#2E2E2E">${en ? "6. AU Study · Regional · PY · NAATI CCL" : "6. 호주학업 · 지방학업 · PY · NAATI CCL"}</text>
          <rect x="235" y="190" width="160" height="20" rx="4" fill="#7D756D"/>
          <text x="405" y="205" font-size="11" font-weight="700" fill="#47433E">${en ? "5 pts each (up to 20 pts total)" : "각 5점씩 (최대 합산 20점)"}</text>

          <text x="24" y="242" font-size="11.5" font-weight="800" fill="#6B4A1F">${en ? "7. State 190 / Regional 491 Nomination" : "7. 주정부 190 / 지방 491 노미네이션 가점"}</text>
          <rect x="235" y="227" width="120" height="22" rx="4" fill="#B67A1E"/>
          <text x="365" y="243" font-size="11" font-weight="800" fill="#6B4A1F">${en ? "190: +5 pts (6D.12) / 491: +15 pts (6D.13)" : "190: +5점 (6D.12) / 491: +15점 (6D.13)"}</text>
        </svg>
      `;
    }
  }

  /* 2. Schedule 6D Points Test Calculator */
  function updatePointsCalculator() {
    const en = STATE.lang === "en";
    const ageVal = document.getElementById("pt-age")?.value || "30";
    const agePts = ageVal === "25_33" ? 25 : parseInt(ageVal, 10);
    const engPts = parseInt(document.getElementById("pt-english")?.value || "10", 10);
    const ovExp = parseInt(document.getElementById("pt-overseas-exp")?.value || "0", 10);
    const auExp = parseInt(document.getElementById("pt-au-exp")?.value || "5", 10);
    const rawExp = ovExp + auExp;
    const cappedExp = Math.min(20, rawExp);
    const capTriggered = rawExp > 20;

    const eduPts = parseInt(document.getElementById("pt-edu")?.value || "15", 10);
    const partVal = document.getElementById("pt-partner")?.value || "10_single";
    const partPts = partVal.startsWith("10") ? 10 : (partVal.startsWith("5") ? 5 : 0);

    const auStudy = document.getElementById("pt-au-study")?.checked ? 5 : 0;
    const regStudy = document.getElementById("pt-reg-study")?.checked ? 5 : 0;
    const stem = document.getElementById("pt-stem")?.checked ? 10 : 0;
    const py = document.getElementById("pt-py")?.checked ? 5 : 0;
    const ccl = document.getElementById("pt-ccl")?.checked ? 5 : 0;

    const base189 = agePts + engPts + cappedExp + eduPts + partPts + auStudy + regStudy + stem + py + ccl;
    const score190 = base189 + 5;
    const score491 = base189 + 15;

    STATE.pts189 = base189;
    STATE.pts190 = score190;
    STATE.pts491 = score491;

    const out = document.getElementById("points-calc-result");
    if (!out) return;

    const ageBlocked = agePts === 0;

    out.innerHTML = `
      <div class="result-summary-grid">
        <div class="mini-kpi" style="border-top:3px solid ${base189 >= 65 && !ageBlocked ? "#2E6B4F" : "#B23A2E"};">
          <span>${en ? "Subclass 189 (Independent)" : "Subclass 189 (독립기술)"}</span>
          <strong style="color:${base189 >= 65 && !ageBlocked ? "#2E6B4F" : "#B23A2E"};">${ageBlocked ? (en ? "Ineligible (45+)" : "신청불가 (45세+)") : (en ? `${base189} pts` : `${base189}점`)}</strong>
          <small>${base189 >= 65 ? (en ? "✅ Meets 65-pt Pool Mark" : "✅ 65점 Pool 통과") : (en ? `❌ ${65 - base189} pts short` : `❌ ${65 - base189}점 부족`)}</small>
        </div>
        <div class="mini-kpi" style="border-top:3px solid ${score190 >= 65 && !ageBlocked ? "#7A1F2B" : "#B23A2E"};">
          <span>${en ? "Subclass 190 (State +5 pts)" : "Subclass 190 (주정부 +5점)"}</span>
          <strong>${ageBlocked ? (en ? "Ineligible (45+)" : "신청불가 (45세+)") : (en ? `${score190} pts` : `${score190}점`)}</strong>
          <small>${score190 >= 65 ? (en ? "✅ Eligible for 190 Nomination" : "✅ 190 노미네이션 가능") : (en ? `❌ ${65 - score190} pts short` : `❌ ${65 - score190}점 부족`)}</small>
        </div>
        <div class="mini-kpi" style="border-top:3px solid ${score491 >= 65 && !ageBlocked ? "#6B4A1F" : "#B23A2E"};">
          <span>${en ? "Subclass 491 (Regional +15 pts)" : "Subclass 491 (지방 +15점)"}</span>
          <strong style="color:#6B4A1F;">${ageBlocked ? (en ? "Ineligible (45+)" : "신청불가 (45세+)") : (en ? `${score491} pts` : `${score491}점`)}</strong>
          <small>${score491 >= 65 ? (en ? "✅ Eligible for 491 Nomination" : "✅ 491 노미네이션 가능") : (en ? `❌ ${65 - score491} pts short` : `❌ ${65 - score491}점 부족`)}</small>
        </div>
      </div>

      ${capTriggered ? `
        <div class="alert-box alert-box--warn" style="margin-top:0.8rem;">
          ${en
            ? `<strong>⚠️ Item 6D51 Combined Employment Cap (20 pts) Applied!</strong>: Overseas (${ovExp} pts) + Australian (${auExp} pts) raw sum is ${rawExp} pts, but capped at <strong>20 points maximum (${rawExp - 20} pts deducted)</strong> under Schedule 6D Item 6D51.`
            : `<strong>⚠️ Item 6D51 경력 합산 상한(20점) 발동!</strong>: 해외 경력(${ovExp}점) + 호주 경력(${auExp}점) 단순 합계는 ${rawExp}점이나, <em>Migration Regulations 1994</em> Schedule 6D Item 6D51에 따라 <strong>최대 20점까지만 인정(${rawExp - 20}점 차감)</strong>되었습니다.`}
        </div>
      ` : ""}

      <div class="alert-box ${ageBlocked ? "alert-box--danger" : "alert-box--success"}" style="margin-top:0.8rem;">
        ${ageBlocked
          ? (en
            ? "<strong>🛑 Age 45+ Statutory Bar</strong>: GSM (189/190/491) requires being under 45 at invitation. If aged 45–54, check our <a href='https://changa9090.github.io/parkco-dama-navigator/'><strong>DAMA 13-Region Navigator (Age 50/55 PR Concessions)</strong></a> or <a href='https://changa9090.github.io/parkco-sid-ens-navigator/'><strong>SID 482 → ENS 186 Age Exemptions</strong></a>."
            : "<strong>🛑 만 45세 이상 연령 제한</strong>: GSM(189/190/491)은 초청 시점 만 45세 미만이어야 합니다. 만 45~54세이신 경우 <a href='https://changa9090.github.io/parkco-dama-navigator/'><strong>DAMA 13개 지역 네비게이터(만 50/55세 영주권 특례)</strong></a> 또는 <a href='https://changa9090.github.io/parkco-sid-ens-navigator/'><strong>SID 482 → ENS 186 고소득/학계/의사 면제</strong></a>를 확인하세요.")
          : (en
            ? `<strong>📊 Breakdown</strong>: Age(${agePts}) + English(${engPts}) + Employment(${cappedExp}) + Education(${eduPts}) + Partner/Single(${partPts}) + Extras(${auStudy + regStudy + stem + py + ccl}) = <strong>Base ${base189} pts</strong> (190: <strong>${score190} pts</strong> / 491: <strong>${score491} pts</strong>)`
            : `<strong>📊 항목별 합산 내역</strong>: 나이(${agePts}) + 영어(${engPts}) + 경력(${cappedExp}) + 학력(${eduPts}) + 파트너/미혼(${partPts}) + 추가가점(${auStudy + regStudy + stem + py + ccl}) = <strong>기본 ${base189}점</strong> (190: <strong>${score190}점</strong> / 491: <strong>${score491}점</strong>)`)}
      </div>
    `;
    updateDiagnosticPreview();
    renderSkillSelectExplorer();
  }

  /* 2-B. SkillSelect Occupation Cut-Offs & 8-State Quota Explorer (F03) */
  function renderSkillSelectExplorer() {
    const en = STATE.lang === "en";
    const ss = STATE.skillselect || DEFAULT_SKILLSELECT_DATA;
    const occs = Array.isArray(ss.occupation_cutoffs) ? ss.occupation_cutoffs : [];
    const allocs = Array.isArray(ss.state_allocations) ? ss.state_allocations : [];

    const selEl = document.getElementById("ss-occ-select");
    const searchEl = document.getElementById("ss-occ-search");
    const verdictEl = document.getElementById("ss-occ-verdict");
    const cutoffTbody = document.getElementById("ss-cutoff-tbody");
    const quotaTbody = document.getElementById("ss-state-quota-tbody");

    if (selEl && selEl.options.length !== occs.length && occs.length > 0) {
      selEl.innerHTML = occs.map((o) => {
        const isSel = o.occupation === STATE.selectedOcc ? "selected" : "";
        return `<option value="${o.occupation}" ${isSel}>${o.occupation} — 189 Cut-off: ${o.min_score_189} pts</option>`;
      }).join("");
    }

    const chosenName = selEl?.value || STATE.selectedOcc || (occs[0] && occs[0].occupation) || "";
    STATE.selectedOcc = chosenName;
    const chosenObj = occs.find((o) => o.occupation === chosenName) || occs[0];

    if (verdictEl && chosenObj) {
      const cut189 = Number(chosenObj.min_score_189) || 85;
      const diff189 = STATE.pts189 - cut189;
      const diff190 = STATE.pts190 - cut189;
      const diff491 = STATE.pts491 - cut189;
      const ok189 = diff189 >= 0;
      verdictEl.innerHTML = `
        <div class="alert-box ${ok189 ? "alert-box--success" : "alert-box--warn"}" style="margin:0;">
          <strong>${ok189 ? "✅" : "💡"} [${chosenObj.occupation}] ${en ? `Latest 189 Invitation Cut-Off: ${cut189} pts` : `직전 라운드 189 실제 초청 커트라인: ${cut189}점`}</strong><br/>
          ${ok189
            ? (en
              ? `Your calculated 189 score (<strong>${STATE.pts189} pts</strong>) meets or exceeds the latest 189 cut-off (${cut189} pts, <strong>+${diff189} pts margin</strong>). Your 190 score is <strong>${STATE.pts190} pts</strong> and 491 is <strong>${STATE.pts491} pts</strong>.`
              : `내 산출 189 점수(<strong>${STATE.pts189}점</strong>)가 직전 라운드 실제 초청 컷오프(${cut189}점) 대비 <strong>+${diff189}점 여유</strong>로 189 직접 초청권입니다! (주정부 190: <strong>${STATE.pts190}점</strong> · 지방 491: <strong>${STATE.pts491}점</strong>)`)
            : (en
              ? `Your 189 score (<strong>${STATE.pts189} pts</strong>) is <strong>${Math.abs(diff189)} pts below</strong> the latest 189 cut-off (${cut189} pts). However, with State Nomination your score rises to <strong>190: ${STATE.pts190} pts (${diff190 >= 0 ? "+" + diff190 : diff190})</strong> and <strong>491: ${STATE.pts491} pts (${diff491 >= 0 ? "+" + diff491 : diff491})</strong>!`
              : `내 189 점수(<strong>${STATE.pts189}점</strong>)는 연방 189 컷오프(${cut189}점) 대비 <strong>${Math.abs(diff189)}점 부족</strong>하지만, 주정부 가점 합산 시 <strong>190(${STATE.pts190}점) · 491(${STATE.pts491}점)</strong>으로 상승하므로 아래 8개 주정부 노미네이션(특히 WA·NSW·QLD·TAS) 병행 전략이 훨씬 유리합니다!`)}
        </div>
      `;
    }

    if (cutoffTbody) {
      const q = (searchEl?.value || "").trim().toLowerCase();
      const filtered = q ? occs.filter((o) => o.occupation.toLowerCase().includes(q)) : occs;
      cutoffTbody.innerHTML = filtered.map((o) => {
        const cut = Number(o.min_score_189) || 85;
        const delta = STATE.pts189 - cut;
        const badge = delta >= 0
          ? `<span class="badge-ok">189 적격 (${delta === 0 ? "동점" : "+" + delta + "점"})</span>`
          : `<span class="badge badge-burgundy">${delta}점 부족</span>`;
        const strat = delta >= 0
          ? (en ? "189 Direct + 190 Backup" : "189 단독 + 190 병행")
          : (STATE.pts190 >= cut
            ? (en ? `190 (${STATE.pts190} pts) Recommended` : `190 주정부(${STATE.pts190}점) 돌파 가능`)
            : (en ? `491 (${STATE.pts491} pts) / State ROI` : `491 지방(${STATE.pts491}점) · 주정부 우선트랙`));
        return `
          <tr style="${o.occupation === chosenName ? "background:#FDF3F4;" : ""}">
            <td><strong>${o.occupation}</strong></td>
            <td><strong>${cut}${en ? " pts" : "점"}</strong></td>
            <td>${badge}</td>
            <td style="font-size:12.5px;">${strat}</td>
          </tr>
        `;
      }).join("");
    }

    if (quotaTbody && allocs.length > 0) {
      quotaTbody.innerHTML = allocs.map((a) => {
        const r190 = getProgramRecord(a.state, "190");
        const r491 = getProgramRecord(a.state, "491");
        let noteText = en ? a.min_cutoff_note_en : a.min_cutoff_note_ko;
        if (a.state === "NSW" && isActiveCurrent(r491) && r491.badge === "closed") {
          noteText = en
            ? "190: Priority sectors EOI invite / 491: Closed for current program year (Pathway 1 Currently Closed)"
            : "190: 우선 섹터 EOI 초청 / 491: 현재 연도 신청 마감 (Pathway 1 Currently Closed)";
        } else if (a.state === "NT" && isActiveCurrent(r190) && r190.badge === "closed") {
          noteText = en
            ? "190 & Offshore: Closed for 2026–27 / Onshore 491: Deadline exceptions (<30 Sep 2027) only"
            : "190·해외 신규 중단 / 온쇼어 491: 2027-09-30 전 만료·연령·점수 예외 대상만 접수";
        } else if (a.state === "QLD" && isActiveCurrent(r190) && r190.badge === "closed") {
          noteText = en
            ? "2025–26 ROIs closed (2026–27 opening unsaid) · Standing rule: 190 9m / 491 6m"
            : "2025–26 ROI 마감 (2026–27 개시일 unsaid) · 상설 기준: 190 9개월 / 491 6개월";
        } else if (a.state === "VIC" && isActiveCurrent(r491) && r491.badge === "closed") {
          noteText = en
            ? "190 ROI open (900 state places) / 491 places unfinalised & ROI currently closed"
            : "190 ROI 접수 중(주 발표 900석) / 491 자리 미확정·현재 ROI 접수 중단";
        } else if (a.state === "ACT" && isActiveCurrent(r190) && r190.badge === "limited") {
          noteText = en
            ? "2026–27 allocation unannounced (SkillSelect 800/800 is separate source; 12 Oct round invited 190 only)"
            : "2026–27 배정 미발표 (좌측 800/800은 SkillSelect 출처 · 별도: 10월 12일 라운드 190만 초청)";
        }
        return `
          <tr>
            <td><strong>${a.state}</strong></td>
            <td><strong>${Number(a.quota_190).toLocaleString()}</strong> <span style="font-size:11.5px;color:#525866;">(YTD: ${a.ytd_190})</span></td>
            <td><strong>${Number(a.quota_491).toLocaleString()}</strong> <span style="font-size:11.5px;color:#525866;">(YTD: ${a.ytd_491})</span></td>
            <td><strong style="color:#7A1F2B;">${Number(a.total_quota).toLocaleString()}</strong></td>
            <td>${formatStatePortalPlacesCell(a.state, en)}</td>
            <td style="font-size:12px;line-height:1.4;">${noteText}</td>
          </tr>
        `;
      }).join("");
    }
  }

  /* 3. 8-State Combinator */
  function updateStateCombinator() {
    const en = STATE.lang === "en";
    const loc = document.getElementById("sc-current-loc")?.value || "QLD";
    const sector = document.getElementById("sc-sector")?.value || "general";
    const resM = parseFloat(document.getElementById("sc-res-months")?.value || "6");
    const workM = parseFloat(document.getElementById("sc-work-months")?.value || "6");
    const hrs = parseInt(document.getElementById("sc-work-hours")?.value || "35", 10);
    const grad = document.getElementById("sc-graduate")?.value || "no";
    const out = document.getElementById("state-combinator-result");
    if (!out) return;

    let findings = [];

    if (loc === "OFFSHORE") {
      const nt190 = getProgramRecord("NT", "190");
      const nsw491 = getProgramRecord("NSW", "491");
      const vic491 = getProgramRecord("VIC", "491");
      const tas491 = getProgramRecord("TAS", "491");
      const qld190 = getProgramRecord("QLD", "190");

      const ntLineKo = (isActiveCurrent(nt190) && nt190.offshore_closed)
        ? `• <strong>NT (노던준주)</strong>: ⛔ <strong>현재 190 및 모든 해외(Offshore) 스트림 신규 신청 접수 중단</strong> (2026–27 충분한 신청 접수 완료).`
        : `• <strong>NT (노던준주)</strong>: 상설 해외 491 스트림 공고 확인 필요.`;
      const ntLineEn = (isActiveCurrent(nt190) && nt190.offshore_closed)
        ? `• <strong>NT (Northern Territory)</strong>: ⛔ <strong>Closed to subclass 190 and all offshore streams</strong> for 2026–27.`
        : `• <strong>NT (Northern Territory)</strong>: Check current offshore 491 stream availability.`;

      const tasLineKo = (isActiveCurrent(tas491) && tas491.osop_closed)
        ? `• <strong>TAS (태즈메이니아)</strong>: 491 Overseas Skilled Occupation Profiles(초청 전용)는 <strong>2026–27 초청 미실시</strong> (단, 태즈메이니아 보건·학교 잡오퍼 보유 시 190 경로는 유지).`
        : `• <strong>TAS (태즈메이니아)</strong>: 해외 경로 개방 공지 확인.`;
      const tasLineEn = (isActiveCurrent(tas491) && tas491.osop_closed)
        ? `• <strong>TAS (Tasmania)</strong>: Subclass 491 Overseas Skilled Occupation Profiles has <strong>no invitations planned for 2026–27</strong> (190 Health/Education Job Offer pathway remains).`
        : `• <strong>TAS (Tasmania)</strong>: Check current offshore pathways.`;

      const vicNswKo = `• <strong>VIC / NSW</strong>: VIC <strong>190 ROI 접수 중(주 발표 900석)</strong>${isActiveCurrent(vic491) && vic491.badge === "closed" ? " · <strong>VIC 491 현재 ROI 중단</strong>" : ""} / NSW 190 초청 전용(개방·마감 문구 unsaid)${isActiveCurrent(nsw491) && nsw491.badge === "closed" ? " · <strong>NSW 491 현재 연도 마감</strong>" : ""}.`;
      const vicNswEn = `• <strong>VIC / NSW</strong>: VIC <strong>190 ROI open (900 places)</strong>${isActiveCurrent(vic491) && vic491.badge === "closed" ? " · <strong>VIC 491 ROI closed</strong>" : ""} / NSW 190 invitation-only${isActiveCurrent(nsw491) && nsw491.badge === "closed" ? " · <strong>NSW 491 closed</strong>" : ""}.`;

      const qldLineKo = (isActiveCurrent(qld190) && qld190.badge === "closed")
        ? `• <strong>QLD (퀸즐랜드)</strong>: ⛔ <strong>2025–26 SNMP ROI 마감</strong> (2026–27 개시일 unsaid).`
        : `• <strong>QLD (퀸즐랜드)</strong>: QLD Offshore Skills List 요건 확인.`;
      const qldLineEn = (isActiveCurrent(qld190) && qld190.badge === "closed")
        ? `• <strong>QLD (Queensland)</strong>: ⛔ <strong>2025–26 SNMP ROIs closed</strong> (2026–27 opening unsaid).`
        : `• <strong>QLD (Queensland)</strong>: Check QLD Offshore Skills List.`;

      findings.push(en
        ? `<div class="alert-box alert-box--warn"><strong>🌏 Offshore Applicant Program-Year Intake &amp; Standing Summary</strong>:<br/>
        • <strong>SA (South Australia)</strong>: Direct SkillSelect EOI invitations (no ROI needed offshore; ≥3 yrs experience in last 5 yrs; offshore page priority industries: Construction, Engineering, Manufacturing, Trades, Health, Education).<br/>
        ${vicNswEn}<br/>
        • <strong>ACT (Canberra)</strong>: 2026–27 allocation unannounced; separate fact: 12 Oct 2026 round issued 63 Overseas Critical Skill 190 invitations (491: 0).<br/>
        • <strong>WA (Western Australia)</strong>: 2026–27 opening/closing unsaid on SNMP page (anchors show 2025–26; WA construction sector invitees exempt from job contract).<br/>
        ${tasLineEn}<br/>
        ${qldLineEn}<br/>
        ${ntLineEn}</div>`
        : `<div class="alert-box alert-box--warn"><strong>🌏 해외 거주자(Offshore) 주별 현재 접수 상태 &amp; 상설 기준 요약</strong>:<br/>
        • <strong>SA (남호주)</strong>: 해외 지원자는 별도 ROI 없이 SkillSelect EOI로 선발 (최근 5년 내 숙련 경력 3년 · 해외 페이지 2026–27 우선 산업: Construction, Engineering, Manufacturing, Trades, Health, Education).<br/>
        ${vicNswKo}<br/>
        • <strong>ACT (캔버라)</strong>: 2026–27 배정 미발표 (별도 기재 사실: 2026-10-12 라운드에서 해외 Critical Skill 190 63건 초청 · 491 0건).<br/>
        • <strong>WA (서호주)</strong>: 이 조회에서 2026–27 개방·마감 문장 없음(unsaid · 각주상 WA 건설업 직종 초청자는 고용계약 면제).<br/>
        ${tasLineKo}<br/>
        ${qldLineKo}<br/>
        ${ntLineKo}</div>`);
    } else {
      const rule = STATE_RULES[loc];
      const rec190 = getProgramRecord(loc, "190");
      const rec491 = getProgramRecord(loc, "491");
      const closed190 = isActiveCurrent(rec190) && rec190.badge === "closed";
      const closed491 = isActiveCurrent(rec491) && rec491.badge === "closed";

      findings.push(renderProgramStatusStrip(loc, true));

      let status190 = "";
      let status491 = "";

      if (loc === "QLD") {
        const req190 = sector === "construction" ? 3 : 9;
        const stand190 = (resM >= req190 && workM >= req190 && hrs >= 30)
          ? (en ? `Standing criteria met (≥${req190}m res & work @ ≥30h/wk)` : `상설 거주·근무 기준(${req190}개월 · 주 30h+) 충족`)
          : (en ? `Standing criteria shortfall (needs ≥${req190}m @ ≥30h/wk)` : `상설 기준 미달 (최소 ${req190}개월 · 주 30h+ 필요)`);
        const stand491 = (resM >= 6 && workM >= 6 && hrs >= 30)
          ? (en ? `Standing regional criteria met (≥6m @ ≥30h/wk)` : `상설 지방 QLD 기준(6개월 · 주 30h+) 충족`)
          : (en ? `Standing regional criteria shortfall (needs ≥6m @ ≥30h/wk)` : `상설 지방 QLD 기준 미달 (6개월 · 주 30h+ 필요)`);
        status190 = closed190
          ? (en ? `⛔ <strong>QLD 190 [2025–26 ROIs Closed · 2026–27 Opening Unsaid]</strong> — ${stand190}` : `⛔ <strong>QLD 190 [2025–26 ROI 마감 · 2026–27 개시일 unsaid]</strong> — (${stand190})`)
          : (en ? `✅ <strong>QLD 190</strong>: ${stand190}` : `✅ <strong>QLD 190</strong>: ${stand190}`);
        status491 = closed491
          ? (en ? `⛔ <strong>QLD 491 [2025–26 ROIs Closed · 2026–27 Opening Unsaid]</strong> — ${stand491}` : `⛔ <strong>QLD 491 [2025–26 ROI 마감 · 2026–27 개시일 unsaid]</strong> — (${stand491})`)
          : (en ? `✅ <strong>QLD 491</strong>: ${stand491}` : `✅ <strong>QLD 491</strong>: ${stand491}`);
      } else if (loc === "NSW") {
        status190 = resM >= 6
          ? (en ? `ℹ️ <strong>NSW 190 (EOI Invite Only · Status Unsaid)</strong>: ≥6m NSW residence met (cannot apply directly; 14-day invite window)` : `ℹ️ <strong>NSW 190 (초청 전용 · 개방/마감 문장 unsaid)</strong>: NSW 6개월 연속 거주 상설 요건 충족 (직접 신청 불가 · 초청 유효 14일)`)
          : (en ? `⏳ <strong>NSW 190</strong>: Requires 6m continuous NSW residence (or paid ≥20h/wk in nominated role)` : `⏳ <strong>NSW 190</strong>: NSW 6개월 연속 거주 또는 지명직군 주 20h+ 재직 필요 (직접 신청 불가)`);
        const standNsw491Ko = (grad === "bachelor_master" || grad === "phd")
          ? "상설 Pathway 3(지방 NSW 졸업생) 요건 해당"
          : ((workM >= 6 && hrs >= 20) ? "상설 Pathway 1(지방 NSW 6개월 근무) 요건 해당" : (resM >= 3 ? "상설 Pathway 2(3개월 거주) 요건 해당" : "상설 최소 거주/근무 미달"));
        const standNsw491En = (grad === "bachelor_master" || grad === "phd")
          ? "Meets standing Pathway 3 criteria"
          : ((workM >= 6 && hrs >= 20) ? "Meets standing Pathway 1 criteria" : (resM >= 3 ? "Meets standing Pathway 2 residence" : "Below standing residence/work threshold"));
        status491 = closed491
          ? (en
            ? `⛔ <strong>NSW 491 Closed for Current Program Year (Pathway 1: Currently Closed)</strong> — Direct applications are NOT open (${standNsw491En} for future reopening)`
            : `⛔ <strong>NSW 491 현재 프로그램 연도 신청 마감 (Pathway 1: Currently Closed)</strong> — 현재 직접 신청 불가 (${standNsw491Ko} · 차기 개방 시 참고)`)
          : ((grad === "bachelor_master" || grad === "phd")
            ? (en ? `✅ <strong>NSW 491 Pathway 3 Eligible</strong>` : `✅ <strong>NSW 491 Pathway 3 직접 신청 가능!</strong>`)
            : ((workM >= 6 && hrs >= 20)
              ? (en ? `✅ <strong>NSW 491 Pathway 1 Eligible</strong>` : `✅ <strong>NSW 491 Pathway 1 직접 신청 가능!</strong>`)
              : (en ? `⏳ NSW 491: ${standNsw491En}` : `⏳ NSW 491: ${standNsw491Ko}`)));
      } else if (loc === "VIC") {
        status190 = en
          ? `✅ <strong>VIC 190 ROI Open (900 State Places)</strong>: Living in VIC or overseas; no minimum employment required on 190 criteria page`
          : `✅ <strong>VIC 190 ROI 접수 중 (주 페이지 발표 900석)</strong>: 빅토리아/해외 거주 가능 · 190 요건 페이지상 취업 필수 아님`;
        const standVic491Ko = (hrs >= 20 && workM >= 1)
          ? "상설 온쇼어 요건(지방 VIC 거주·숙련 재직) 해당"
          : "상설 온쇼어 요건은 지방 VIC 거주·재직 필요";
        const standVic491En = (hrs >= 20 && workM >= 1)
          ? "Meets standing Regional VIC work rule"
          : "Standing onshore rule requires Regional VIC work";
        status491 = closed491
          ? (en
            ? `⛔ <strong>VIC 491 ROIs Not Currently Accepted (2026–27 Places Not Finalised)</strong> — (${standVic491En})`
            : `⛔ <strong>VIC 491 현재 ROI 접수 중단 (2026–27 배정 자리 미확정)</strong> — (${standVic491Ko})`)
          : (en ? `✅ <strong>VIC 491</strong>: ${standVic491En}` : `✅ <strong>VIC 491</strong>: ${standVic491Ko}`);
      } else if (loc === "WA") {
        status190 = (grad !== "no" || sector === "construction" || hrs >= 35)
          ? (en ? `ℹ️ <strong>WA 190 (2026–27 Status Unsaid · Standing Criteria Met)</strong>: ${grad !== "no" ? "WA Graduate stream" : (sector === "construction" ? "WA Building & Construction sector (contract waived per footnote)" : "Standing 6m FT contract rule")}` : `ℹ️ <strong>WA 190 (2026–27 개방·마감 문구 unsaid · 상설 기준 충족)</strong>: ${grad !== "no" ? "WA Graduate 스트림(2년+ 학업)" : (sector === "construction" ? "WA 건설업 직종(원문 각주상 고용계약 면제)" : "상설 6개월 풀타임 고용계약 기준 충족")}`)
          : (en ? `⏳ <strong>WA 190 (Status Unsaid)</strong>: General stream standing rule requires 6m FT WA contract (waived for WA Construction & Graduates)` : `⏳ <strong>WA 190 (개방·마감 문구 unsaid)</strong>: 상설 일반 스트림은 WA 6개월 풀타임 고용계약 필요 (WA 건설업·졸업생 면제)`);
        status491 = en
          ? `ℹ️ <strong>WA 491 (2026–27 Status Unsaid)</strong>: Standing WA 491 stream criteria met`
          : `ℹ️ <strong>WA 491 (2026–27 개방·마감 문구 unsaid)</strong>: 상설 서호주 491 기준 충족`;
      } else if (loc === "SA") {
        const req190 = grad !== "no" ? 6 : 12;
        const standSa190 = (resM >= 12 && workM >= req190 && hrs >= 30)
          ? (en ? `Standing ≥${req190}m work met` : `상설 ${req190}개월 근무 기준 충족`)
          : (en ? `Standing rule typically needs 12m res + ${req190}m work` : `상설 기준 통상 12개월 거주 + ${req190}개월 근무`);
        const standSa491 = (workM >= 6 && hrs >= 20)
          ? (en ? `Standing ≥6m work met` : `상설 6개월 근무 기준 충족`)
          : (en ? `Standing rule needs ≥6m work @ ≥20h/wk` : `상설 기준 주 20h+ 6개월 근무 필요`);
        status190 = en
          ? `◐ <strong>SA 190 [Limited Onshore ROI — Visas Expiring by 31 Jan 2027]</strong>: ${standSa190}`
          : `◐ <strong>SA 190 [제한 개방 — 현 비자 2027-01-31까지 만료자 ROI 접수]</strong>: ${standSa190}`;
        status491 = en
          ? `◐ <strong>SA 491 [Limited Onshore ROI — Visas Expiring by 31 Jan 2027]</strong>: ${standSa491}`
          : `◐ <strong>SA 491 [제한 개방 — 현 비자 2027-01-31까지 만료자 ROI 접수]</strong>: ${standSa491}`;
      } else if (loc === "TAS") {
        status190 = (grad === "bachelor_master" || grad === "phd" || grad === "vet_2yr")
          ? (en ? `✅ <strong>TAS 190 Open (1,250 State Places · TSG 2yr Study)</strong>: Eligible to lodge ROI` : `✅ <strong>TAS 190 개방 (주 발표 1,250석 · 졸업생 TSG 2년 학업)</strong>: ROI 접수 가능`)
          : ((workM >= 6 && hrs >= 20) ? (en ? `✅ <strong>TAS 190 Open (1,250 State Places · TSE Employment)</strong>: 6–15m @ ≥20h/wk (TSE Gold requires ≥30h/wk single job)` : `✅ <strong>TAS 190 개방 (주 발표 1,250석 · 숙련취업 TSE)</strong>: 6~15개월 근무 확인 (TSE Gold는 단일 직장 주 30시간 필수)`) : (en ? `⏳ TAS 190: Needs 6–15m work @ ≥20h/wk or 2yr TAS study` : `⏳ TAS 190: 최소 6~15개월(주 20h+) 근무 또는 2년 학업 필요`));
        status491 = (grad !== "no" || (workM >= 6 && hrs >= 20))
          ? (en ? `✅ <strong>TAS 491 Open Onshore (800 State Places)</strong>: 1yr TAS study or 6m work @ ≥20h/wk met` : `✅ <strong>TAS 491 온쇼어 개방 (주 발표 800석)</strong>: 1년 학업 또는 6개월(주 20h+) 근무 충족`)
          : (en ? `⏳ TAS 491: Needs 6m work @ ≥20h/wk or 1yr TAS study` : `⏳ TAS 491: 주 20h+ 6개월 근무 또는 1년 학업 필요`);
      } else if (loc === "ACT") {
        const standAct190 = grad === "phd"
          ? (en ? "Meets ACT Doctorate Streamlined standing rule (54 invited in 12 Oct 2026 round)" : "상설 ACT 박사(Doctorate) 특례 해당 (2026-10-12 라운드 54건 초청)")
          : ((resM >= 6 && workM >= 6 && hrs >= 30) ? (en ? "Meets standing 6m res + 26/30w work" : "상설 6개월 거주 + 30주 중 26주 근무 충족") : (en ? "Needs 6m res + 26/30w work" : "상설 6개월 거주 + 30주 중 26주 근무 필요"));
        const standAct491 = (resM >= 3 && workM >= 3 && hrs >= 15)
          ? (en ? "Meets standing 3m res + 13/15w work" : "상설 3개월 거주 + 15주 중 13주 근무 충족")
          : (en ? "Needs 3m res + 13/15w work" : "상설 3개월 거주 + 15주 중 13주 근무 필요");
        status190 = en
          ? `◐ <strong>ACT 190 [2026–27 Allocation Unannounced]</strong>: ${standAct190}`
          : `◐ <strong>ACT 190 [2026–27 배정 미발표]</strong>: ${standAct190}`;
        status491 = en
          ? `◐ <strong>ACT 491 [2026–27 Allocation Unannounced · 0 Invited on 12 Oct]</strong>: ${standAct491}`
          : `◐ <strong>ACT 491 [2026–27 배정 미발표 · 10월 12일 라운드 초청 0건]</strong>: ${standAct491}`;
      } else if (loc === "NT") {
        const standNt190 = (resM >= 6 && (grad !== "no" || (workM >= 6 && hrs >= 35)))
          ? (en ? "Standing 6m NT rule met" : "상설 NT 6개월/졸업생 기준 해당")
          : (en ? "Below standing 6m FT NT rule" : "상설 NT 6개월 풀타임 기준 미달");
        const standNt491 = (grad !== "no" || (resM >= 6 && workM >= 6 && hrs >= 35))
          ? (en ? "Meets onshore NT Graduate/Resident base criteria" : "온쇼어 NT Graduate/Resident 기본 자격 해당")
          : (en ? "Below onshore NT Graduate/Resident base criteria" : "온쇼어 NT Graduate/Resident 기본 자격 미달");
        status190 = closed190
          ? (en
            ? `⛔ <strong>NT 190 Closed for 2026–27</strong> — No new subclass 190 or offshore applications accepted (${standNt190})`
            : `⛔ <strong>NT 190 신규 신청 접수 중단 (2026–27 충분한 신청 접수)</strong> — (${standNt190})`)
          : (en ? `✅ <strong>NT 190</strong>: ${standNt190}` : `✅ <strong>NT 190</strong>: ${standNt190}`);
        status491 = (isActiveCurrent(rec491) && rec491.badge !== "open")
          ? (en
            ? `◐ <strong>NT 491 Exception-Only Intake</strong> — Open ONLY if onshore NT Graduate/Resident facing visa expiry (ineligible for 485), turning 45, or dropping below 65 pts before <strong>30 Sep 2027</strong> (${standNt491}; offshore closed)`
            : `◐ <strong>NT 491 예외 대상만 제한 접수</strong> — 온쇼어 NT Graduate/Resident 중 <strong>2027-09-30 전</strong> 비자 만료(485 불가)·만 45세 도래·점수 65점 미달 예정자만 신청 가능 (${standNt491} · 해외 491 중단)`)
          : (en ? `✅ <strong>NT 491</strong>: ${standNt491}` : `✅ <strong>NT 491</strong>: ${standNt491}`);
      }

      const boxTone = (closed190 && closed491) ? "alert-box--danger" : ((closed190 || closed491) ? "alert-box--warn" : "alert-box--success");
      findings.push(`
        <div class="alert-box ${boxTone}" style="margin-bottom:0.65rem;">
          <strong>📍 ${en ? "Standing Criteria & Intake Gate" : "상설 자격 기준 대조 결과 (접수 상태 우선 적용)"}: ${rule.name}</strong><br/>
          • <strong>${en ? "Standing Process & Fee" : "상설 절차·수수료 안내"}</strong>: ${en ? rule.process_en : rule.process} | <strong>${en ? rule.fee_en : rule.fee}</strong><br/>
          • ${status190}<br/>
          • ${status491}
        </div>
        <div class="alert-box alert-box--warn">
          ${en
            ? "<strong>💡 Interstate Alternative Check</strong>: VIC 190 ROIs (900 places) and TAS 190/491 ROIs (2,050 total places) have active 2026–27 opening notices; always verify each state's live status strip above before relocating."
            : "<strong>💡 타 주(Interstate) 대안 확인</strong>: 2026–27 개시 공지가 확인된 VIC 190(900석), TAS(합계 2,050석) 또는 SA 해외/제한 ROI 등 위 상태 층의 실시간 개방 여부를 먼저 비교한 뒤 이주·접수 시점을 설계하세요."}
        </div>
      `);
    }

    out.innerHTML = findings.join("");
    if (STATE_RULES[loc]) {
      renderStateDeepDive(loc);
    }
    updateDiagnosticPreview();
  }

  /* 4. Render 8-State Deep Dive Card */
  function renderStateDeepDive(stateCode) {
    const en = STATE.lang === "en";
    STATE.activeTab = stateCode;
    document.querySelectorAll(".state-tab-btn").forEach((btn) => {
      const active = btn.getAttribute("data-state") === stateCode;
      btn.classList.toggle("active", active);
    });
    const r = STATE_RULES[stateCode];
    const card = document.getElementById("state-deep-dive-card");
    if (!r || !card) return;

    const rec491 = getProgramRecord(stateCode, "491");
    const rec190 = getProgramRecord(stateCode, "190");
    let trapText = en ? r.traps_en : r.traps;
    if (stateCode === "NSW" && isActiveCurrent(rec491) && rec491.badge === "closed") {
      trapText = en
        ? "⚠️ Program-Year Closure Gate: Subclass 491 applications (including Pathway 1: Currently Closed) are closed for the current program year as all places are allocated. The Pathway 1 & 3 rules above remain standing criteria for future reopening."
        : "⚠️ 현재 프로그램 연도 마감 주의: NSW 491은 배정 소진으로 마감되었으며 Pathway 1 단계도 ‘Currently Closed’입니다. 위 Pathway 1·3 직접 신청 요건은 상설 기준(Standing Criteria)이므로 원문 배지가 open으로 바뀌기 전에는 현재 접수 경로로 보지 마세요.";
    } else if (stateCode === "NT" && isActiveCurrent(rec190) && rec190.badge === "closed") {
      trapText = en
        ? "⚠️ 2026–27 Intake Gate: Subclass 190 and all offshore streams are closed; onshore 491 accepts only deadline-exception applicants (<30 Sep 2027). Standing stream rules above apply only when intake is open."
        : "⚠️ 2026–27 접수 제한 주의: 현재 NT 190 및 모든 해외 스트림 신규 접수는 중단되었고, 온쇼어 491도 2027-09-30 전 비자·연령·점수 마감 예외 대상만 받습니다. 위 일반 스트림은 상설 요건입니다.";
    }

    const rawStreams = en ? r.streams_en : r.streams;
    const streams = rawStreams.map((s) => {
      if (stateCode === "NSW" && isActiveCurrent(rec491) && rec491.badge === "closed" && s.includes("Subclass 491")) {
        return en
          ? `[Closed for Current Program Year — Standing Rule] ${s.replace(/Direct Application/g, "Standing Direct Pathway (Currently Closed)")}`
          : `[현재 프로그램 연도 마감 — 상설 요건] ${s.replace(/직접 신청!/g, "상설 직접 신청 경로(현재 Closed)").replace(/직접 노미네이션 신청 가능!/g, "상설 요건(현재 연도 마감)") .replace(/직접 신청 가능!/g, "상설 요건(현재 연도 마감)")}`;
      }
      return s;
    });
    card.innerHTML = `
      ${renderProgramStatusStrip(stateCode, false)}
      <div style="background:#FCFAF6;border:1.5px solid #DED6C8;border-radius:12px;padding:20px;">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px;margin-bottom:14px;">
          <div>
            <span style="display:inline-block;font-size:11px;font-weight:800;background:#EAE3D5;color:#47433E;padding:2px 8px;border-radius:4px;margin-bottom:5px;">
              ${en ? "STANDING ELIGIBILITY CRITERIA (APPLY WHEN INTAKE IS OPEN)" : "상설 스트림 요건 (Standing Criteria — 위 프로그램 연도 접수 상태 우선)"}
            </span>
            <h4 style="margin:0;font-size:18px;font-weight:800;color:#1A1211;">${r.name}</h4>
            <p style="margin:4px 0 0;font-size:13.8px;color:#47433E;"><strong>${en ? "Standing Process" : "상설 전형 방식"}</strong>: ${en ? r.process_en : r.process} | <strong>${en ? "Standing Fee Reference" : "상설 수수료 안내"}</strong>: <strong style="color:#7A1F2B;">${en ? r.fee_en : r.fee}</strong></p>
          </div>
          <a href="${r.portal}" target="_blank" rel="noopener noreferrer" class="btn-burgundy" style="font-size:12.5px;padding:7px 14px;">${en ? "Open Official State Portal →" : "공식 주정부 포털 열기 →"}</a>
        </div>
        <ul style="margin:0 0 14px;padding-left:18px;font-size:14px;line-height:1.65;color:#2E2E2E;">
          ${streams.map((s) => `<li style="margin-bottom:6px;">${s}</li>`).join("")}
        </ul>
        <div class="alert-box alert-box--warn" style="margin:0;">
          ${trapText}
        </div>
      </div>
    `;
  }

  /* 5. Subclass 191 & Total Cost Calculator */
  function updateCostAnd191() {
    const en = STATE.lang === "en";
    const sub = document.getElementById("cost-visa-sub")?.value || "491";
    const stSelect = document.getElementById("cost-state");
    const st = stSelect?.value || "QLD";
    const adults = parseInt(document.getElementById("cost-adults")?.value || "1", 10);
    const children = parseInt(document.getElementById("cost-children")?.value || "1", 10);
    const s191Years = document.getElementById("s191-years")?.value || "ready";
    const s191Cond = document.getElementById("s191-cond")?.value || "compliant";
    const s191Fields = document.getElementById("s191-transition-fields");
    const directPrNotice = document.getElementById("s191-direct-pr-notice");
    const out = document.getElementById("cost-191-result");
    if (!out) return;

    const is191Pathway = sub === "491" || sub === "191";
    const usesStateNom = sub === "190" || sub === "491";

    if (stSelect) {
      stSelect.disabled = !usesStateNom;
      stSelect.style.opacity = usesStateNom ? "1" : "0.55";
    }

    if (s191Fields) {
      s191Fields.style.display = is191Pathway ? "grid" : "none";
    }
    if (directPrNotice) {
      if (!is191Pathway) {
        directPrNotice.style.display = "block";
        directPrNotice.innerHTML = en
          ? `ℹ️ <strong>Subclass ${sub} is a Direct Permanent Residency (PR) visa from grant</strong>: The 3-year Subclass 191 PR transition rules (3 ATO NOAs &amp; Condition 8579) apply <strong>ONLY to Subclass 491 / 494 regional provisional visa holders</strong> and do NOT apply to Subclass ${sub}.`
          : `ℹ️ <strong>Subclass ${sub}는 승인 즉시 영주권(Direct PR)이 부여되는 비자입니다</strong>: 5번·6번의 '3년 후 Subclass 191 영주권 전환(ATO NOA 3년치 · Condition 8579)' 요건은 <strong>지방 임시비자(491·494) 소지자에게만 해당</strong>하며, 189·190 영주비자에는 적용되지 않습니다.`;
      } else {
        directPrNotice.style.display = "none";
      }
    }

    const stateFees = { QLD: 630.30, NSW: 346.50, VIC: 264.00, WA: 0, SA: 394.00, TAS: 425.70, ACT: 385.00, NT: 300.00 };
    const stateFee = usesStateNom ? (stateFees[st] ?? 0) : 0;

    let baseVac = 6140, adultVac = 3070, childVac = 1535;
    if (sub === "189") {
      baseVac = 6135; adultVac = 3070; childVac = 1540;
    } else if (sub === "191") {
      baseVac = 630; adultVac = 315; childVac = 160;
    }

    const totalVac = baseVac + adultVac * adults + childVac * children;
    const stage2Vac191 = 630 + 315 * adults + 160 * children;
    const grandTotal = stateFee + totalVac;

    let pathwayDetailHtml = "";
    if (is191Pathway) {
      pathwayDetailHtml = `
        <div class="alert-box ${s191Years === "ready" && s191Cond === "compliant" ? "alert-box--success" : "alert-box--warn"}" style="margin-top:0.85rem;">
          <p style="margin:0 0 0.35rem;"><strong>🏆 ${en ? "[491/494 Provisional Holders Only · Subclass 191 PR Transition Rules (<code>cl 191.212 / 191.214</code>)]" : "[491/494 임시비자 소지자 전용 · Subclass 191 영주권 전환 법리 (<code>cl 191.212 / 191.214</code>)]"}</strong></p>
          <p style="margin:0;font-size:0.88rem;">
            • ${en
              ? "<strong>$53,900 Minimum Income Threshold Abolished ($0 Minimum Income)</strong>: Because no legislative instrument sets a dollar floor under <code>cl 191.214</code>, there is <strong>NO minimum taxable income amount</strong>. Providing <strong>3 ATO Notices of Assessment (NOAs)</strong> out of 5 years satisfies the income rule regardless of dollar amount!"
              : "<strong>최저 과세소득 기준($53,900) 완전 폐지 ($0 Minimum Income)</strong>: 과거 예고되었던 $53,900 소득 하한선은 법령(Legislative Instrument)으로 제정되지 않아 <strong>현재 금액 제한이 전혀 없습니다</strong>. 금액과 무관하게 5년 중 <strong>3개 과세연도의 ATO Notice of Assessment (NOA)</strong>만 제출하면 소득 요건(<code>cl 191.214</code>)을 통과합니다!"}<br/>
            ${sub === "491" ? (en
              ? `• <strong>2-Stage Total Cost Preview (491 → 191)</strong>: Stage 1 (491 Grant) = <strong>${fmtAUD(grandTotal)}</strong> + Stage 2 (Subclass 191 PR after 3 yrs) = <strong>${fmtAUD(stage2Vac191)}</strong> (Combined 2-Stage Total: <strong>${fmtAUD(grandTotal + stage2Vac191)}</strong>).<br/>`
              : `• <strong>2단계 영주권 총비용 미리보기 (491 → 3년 후 191)</strong>: 1단계 491 납부액(<strong>${fmtAUD(grandTotal)}</strong>) + 3년 후 2단계 191 영주권 전환 비자비(<strong>${fmtAUD(stage2Vac191)}</strong>, 주신청 $630+가족) = <strong>영주권 취득까지 2단계 총합 ${fmtAUD(grandTotal + stage2Vac191)}</strong>.<br/>`) : ""}
            • <strong>${en ? "Current 191 Transition Assessment" : "현재 191 전환 판정"}</strong>: ${s191Years === "ready" && s191Cond === "compliant"
              ? (en
                ? `✅ 3 years held on 491/494 + 3 ATO NOAs + Condition 8579 compliance met — <strong>eligible to lodge Subclass 191 PR immediately for ${fmtAUD(stage2Vac191)} (primary $630) with $0 state fee</strong>!`
                : `✅ 491/494 3년 보유 + NOA 3년치 + 지방 거주 조건(8579) 준수로 <strong>주정부 재노미네이션($0) 없이 가족 합계 ${fmtAUD(stage2Vac191)}(주신청자 $630)만으로 즉시 Subclass 191 영주권 신청이 가능</strong>합니다!`)
              : (en
                ? "⚠️ Requires holding 491/494 for 3 years, 3 ATO NOAs, and strict compliance with Condition 8579 (designated regional area) and Condition 8578 (notify changes within 14 days)."
                : "⚠️ 491/494 보유 3년 및 NOA 3개 연도 확보가 필요하며, 특히 Condition 8579(지정 지방 외 근무·거주 금지) 및 8578(주소·고용 변경 14일 내 통보) 위반이 없어야 합니다.")}
          </p>
        </div>
      `;
    } else if (sub === "190") {
      pathwayDetailHtml = `
        <div class="alert-box alert-box--success" style="margin-top:0.85rem;">
          <p style="margin:0 0 0.35rem;"><strong>✅ ${en ? "[Subclass 190 Direct PR — Not Subject to Subclass 191 Transition]" : "[Subclass 190 Direct PR 영주비자 안내 — Subclass 191 전환 대상 아님]"}</strong></p>
          <p style="margin:0;font-size:0.88rem;">
            • ${en
              ? "<strong>Direct Permanent Residency from Day 1</strong>: Subclass 190 grants immediate permanent residency upon approval. Unlike Subclass 491/494 provisional visas, <strong>you do NOT need to wait 3 years, collect 3 ATO NOAs, or apply for a second-stage Subclass 191 visa</strong>."
              : "<strong>승인 즉시 영주권(Direct PR) 부여</strong>: Subclass 190은 비자 승인 시점에 곧바로 영주권자가 됩니다. 지방 임시비자(491/494)와 달리 <strong>3년 후 Subclass 191 영주권 전환 신청이나 ATO NOA 3년치 제출 의무가 전혀 없습니다</strong>."}<br/>
            • ${en
              ? "<strong>No Condition 8579/8578</strong>: Mandatory regional conditions 8579 and 8578 do not attach to Subclass 190 (only a 2-year moral commitment to the nominating State/Territory applies)."
              : "<strong>법정 지방 강제 조건(8579/8578) 미부과</strong>: 491에 부과되는 Condition 8579(지정 지방 거주 강제)가 없으며, 지명해 준 주(State)에 2년간 거주하겠다는 주정부 차원의 서약만 적용됩니다."}
          </p>
        </div>
      `;
    } else {
      pathwayDetailHtml = `
        <div class="alert-box alert-box--success" style="margin-top:0.85rem;">
          <p style="margin:0 0 0.35rem;"><strong>✅ ${en ? "[Subclass 189 Independent Direct PR — No State Nomination &amp; No Subclass 191 Transition]" : "[Subclass 189 독립기술 영주비자 안내 — 주정부 노미네이션 및 191 전환 대상 아님]"}</strong></p>
          <p style="margin:0;font-size:0.88rem;">
            • ${en
              ? "<strong>Unrestricted Federal Direct PR</strong>: Subclass 189 is a direct permanent visa with <strong>$0 State Nomination fee, zero regional residence conditions (no Condition 8579), and no Subclass 191 second-stage transition</strong>."
              : "<strong>조건 없는 연방 직접 영주권(Direct PR)</strong>: Subclass 189는 주정부 노미네이션($0)이 필요 없고, 승인 즉시 호주 전역 어디서나 자유롭게 거주·근무할 수 있는 완전한 영주권이므로 <strong>Subclass 191 전환 절차가 아예 해당하지 않습니다</strong>."}
          </p>
        </div>
      `;
    }

    out.innerHTML = `
      <div class="result-summary-grid">
        <div class="mini-kpi" style="border-top:3px solid #7A1F2B;">
          <span>${en ? (usesStateNom ? `State Nomination/ROI Fee (${st})` : "State Nomination Fee (N/A)") : (usesStateNom ? `주정부 노미네이션/ROI 비용 (${st})` : "주정부 노미네이션 비용 (해당 없음)")}</span>
          <strong>${fmtAUD(stateFee)}</strong>
          <small>${!usesStateNom ? (en ? `Subclass ${sub} requires no state nomination ($0)` : `Subclass ${sub}는 주정부 노미네이션 불요 ($0)`) : (en ? `${st} Official Fee` : `${st} 공식 수수료`)}</small>
        </div>
        <div class="mini-kpi" style="border-top:3px solid #6B4A1F;">
          <span>${en ? `Federal Subclass ${sub} VAC (FY26–27)` : `연방 Subclass ${sub} 비자 신청비 (FY26–27)`}</span>
          <strong style="color:#6B4A1F;">${fmtAUD(totalVac)}</strong>
          <small>${en ? `Base ${fmtAUD(baseVac)} + Adults ${fmtAUD(adultVac * adults)} + Children ${fmtAUD(childVac * children)}` : `주신청 ${fmtAUD(baseVac)} + 성인 ${fmtAUD(adultVac * adults)} + 자녀 ${fmtAUD(childVac * children)}`}</small>
        </div>
        <div class="mini-kpi" style="border-top:3px solid #2E6B4F;">
          <span>${en ? "Total Government Charges" : "정부 납부 총합계"}</span>
          <strong style="color:#2E6B4F;">${fmtAUD(grandTotal)}</strong>
          <small>${sub === "491" ? (en ? `+ ${fmtAUD(stage2Vac191)} for 191 PR after 3 yrs` : `+ 3년 후 191 전환 시 ${fmtAUD(stage2Vac191)} 별도`) : (en ? "Excludes card surcharge (1.4%)" : "신용카드 수수료(1.4%) 별도")}</small>
        </div>
      </div>
      ${pathwayDetailHtml}
    `;
    updateDiagnosticPreview();
  }

  /* 6. Update 1-Click Diagnostic Summary */
  function updateDiagnosticPreview() {
    const en = STATE.lang === "en";
    const previewEl = document.getElementById("gsm-diagnostic-preview");
    const emailBtn = document.getElementById("btn-gsm-email");
    if (!previewEl) return;

    const loc = document.getElementById("sc-current-loc")?.value || "QLD";
    const resM = document.getElementById("sc-res-months")?.value || "6";
    const workM = document.getElementById("sc-work-months")?.value || "6";
    const hrs = document.getElementById("sc-work-hours")?.value || "35";
    const grad = document.getElementById("sc-graduate")?.selectedOptions?.[0]?.text || "일반";
    const sub = document.getElementById("cost-visa-sub")?.value || "190";

    const text = en ? [
      "=== [PNC Legal Pty Ltd t/a Park & Co Lawyers | GSM (189·190·491) & State Nomination Diagnostic] ===",
      `• Schedule 6D Points: 189 (${STATE.pts189} pts) | 190 (${STATE.pts190} pts) | 491 (${STATE.pts491} pts)`,
      `• Current Location & Work: ${loc} | Residence ${resM}m | Skilled Work ${workM}m (${hrs}h+/wk)`,
      `• Graduate Stream Status: ${grad}`,
      `• Target Visa: Subclass ${sub} (${sub === "189" ? "Federal Independent Direct PR — No State Nomination" : (sub === "191" ? "491/494 → 191 Regional PR Transition — No State Re-nomination" : `State Nomination Jurisdiction: ${loc}`)})`,
      `• Official Legal Inquiry: Park & Co Lawyers (https://parklawyers.com.au/links/)`
    ].join("\n") : [
      "=== [PNC Legal Pty Ltd t/a Park & Co Lawyers | 호주 기술이민(189·190·491) & 주정부 진단서] ===",
      `• Schedule 6D 산출 점수: 189 (${STATE.pts189}점) | 190 (${STATE.pts190}점) | 491 (${STATE.pts491}점)`,
      `• 현재 거주지 및 근무: ${loc} | 거주 ${resM}개월 | 숙련근무 ${workM}개월 (주 ${hrs}시간+)`,
      `• 학력/졸업생 특례 여부: ${grad}`,
      `• 희망 신청 비자: Subclass ${sub} (${sub === "189" ? "연방 독립기술 Direct PR — 주정부 노미네이션/191 전환 해당 없음" : (sub === "191" ? "491/494 소지자 3년 후 191 영주권 전환 — 주정부 재노미네이션 불요" : `노미네이션 검토 주: ${loc}${sub === "190" ? " · Direct PR (191 전환 해당 없음)" : " · 3년 후 191 영주권 전환 대상"}`)})`,
      `• 공식 법률 자문 문의: Park & Co Lawyers (https://parklawyers.com.au/links/?lang=ko)`
    ].join("\n");

    previewEl.textContent = text;
    if (emailBtn) {
      emailBtn.href = en ? "https://parklawyers.com.au/links/" : "https://parklawyers.com.au/links/?lang=ko";
      emailBtn.target = "_blank";
      emailBtn.rel = "noopener";
      emailBtn.dataset.briefText = text;
      if (!emailBtn.dataset.copyBound) {
        emailBtn.dataset.copyBound = "1";
        emailBtn.addEventListener("click", () => {
          const t = emailBtn.dataset.briefText || "";
          if (t && navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(t).catch(() => {});
          }
        });
      }
    }
  }

  function renderPollerTable(sources) {
    const en = STATE.lang === "en";
    const tbody = document.getElementById("gsm-poller-tbody");
    const statusBadge = (s) => {
      if (s.status === "cached_last_good") {
        return `<span class="badge badge-burgundy" title="Preserved last verified snapshot">● Cached Snapshot (Last OK)</span>`;
      }
      return `<span class="badge-ok">● Verified Live (${s.http_status || 200})</span>`;
    };
    const compLine = (s) => s.compilation
      ? `<div style="font-size:11.5px;color:#1F5A5E;font-weight:700;margin-top:2px;">FRL Compilation #${s.compilation} (${s.register_id || ""}) · Effective ${s.effective_start || ""}</div>`
      : "";
    const rowsHtml = sources.map((s, idx) => `
      <tr>
        <td><code>${idx + 1}</code></td>
        <td><span class="badge badge-burgundy">${s.category}</span></td>
        <td>
          <a href="${s.url}" target="_blank" rel="noopener noreferrer"><strong>${en ? s.name_en : s.name_ko}</strong></a>
          ${compLine(s)}
          <div style="font-size:11.5px;color:#525866;margin-top:2px;">SHA-256: <code>${s.sha256_prefix || "—"}</code> (${Math.round((s.content_length || 45200) / 1024)} KB)</div>
        </td>
        <td>${s.authority}</td>
        <td>${s.tracks}</td>
        <td>${s.cadence}</td>
        <td>${statusBadge(s)}</td>
      </tr>
    `).join("");
    if (tbody) tbody.innerHTML = rowsHtml;

    const modalBody = document.getElementById("modal-body-content");
    if (modalBody) {
      modalBody.innerHTML = `
        <p style="font-size:13.5px;color:#47433E;margin-bottom:14px;">
          ${en
            ? "Live status of 12 Federal (Schedule 6D / LIN 19/210 / SkillSelect) and 8-State/Territory nomination portals verified by <code>poller/gsm_state_poller.py</code>."
            : "<code>poller/gsm_state_poller.py</code>가 정기 점검하는 12개 연방 법령(Schedule 6D / LIN 19/210 / SkillSelect) 및 호주 8개 주/준주 노미네이션 포털 상태입니다."}
        </p>
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr><th>#</th><th>${en ? "Category" : "구분"}</th><th>${en ? "Source & Content Hash" : "출처명 및 본문 해시"}</th><th>${en ? "Authority" : "관할"}</th><th>${en ? "Status" : "상태"}</th></tr>
            </thead>
            <tbody>
              ${sources.map((s, i) => `
                <tr>
                  <td><code>${i + 1}</code></td>
                  <td><span class="badge badge-burgundy">${s.category}</span></td>
                  <td>
                    <a href="${s.url}" target="_blank" rel="noopener"><strong>${en ? s.name_en : s.name_ko}</strong></a>
                    ${compLine(s)}
                    <div style="font-size:11.5px;color:#525866;">SHA-256: <code>${s.sha256_prefix || "—"}</code> (${Math.round((s.content_length || 45200) / 1024)} KB)</div>
                  </td>
                  <td>${s.authority}</td>
                  <td>${statusBadge(s)}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `;
    }
  }

  function updateFooterCurrency(pollPayload) {
    const el = document.getElementById("footer-currency-line");
    const pollBtn = document.querySelector('[data-i18n="pollBtnLabel"]');
    const en = STATE.lang === "en";
    const ps = STATE.programStatus || DEFAULT_PROGRAM_STATUS;
    const asAt = (pollPayload && pollPayload.as_at_date) || ps.generated_at_bne || "Live";
    const okCnt = (pollPayload && pollPayload.verified_ok_count) || (STATE.sources ? STATE.sources.length : 12);
    const totCnt = (pollPayload && pollPayload.total_sources) || 12;
    const subCnt = Array.isArray(ps.records) ? ps.records.length : 16;
    if (el) {
      el.textContent = en
        ? `Statutory & State Portal Baseline: Checked ${String(asAt).slice(0, 10)} (${okCnt}/${totCnt} primary portals + ${subCnt} subclass status records · Schedule 6D · LIN 19/210)`
        : `법령 및 주정부 원문 검증 기준일: ${String(asAt).slice(0, 10)} (${okCnt}/${totCnt} 공식 포털 + ${subCnt}개 서브클래스 접수 상태 검증 · Schedule 6D · LIN 19/210)`;
    }
    if (pollBtn) {
      pollBtn.textContent = en
        ? `${okCnt}/${totCnt} Portals & ${subCnt} Status Records Verified (${String(asAt).slice(0, 10)})`
        : `${okCnt}/${totCnt} 포털 · ${subCnt}개 접수 상태 검증됨 (${String(asAt).slice(0, 10)})`;
    }
  }

  function init() {
    renderCharts();
    updatePointsCalculator();
    renderSkillSelectExplorer();
    renderStateDeepDive("QLD");
    updateStateCombinator();
    updateCostAnd191();
    renderPollerTable(STATE.sources);
    updateFooterCurrency(null);

    document.getElementById("ss-occ-select")?.addEventListener("change", function () {
      STATE.selectedOcc = this.value;
      renderSkillSelectExplorer();
    });
    document.getElementById("ss-occ-search")?.addEventListener("input", renderSkillSelectExplorer);

    ["pt-age", "pt-english", "pt-overseas-exp", "pt-au-exp", "pt-edu", "pt-partner", "pt-au-study", "pt-reg-study", "pt-stem", "pt-py", "pt-ccl"].forEach((id) => {
      document.getElementById(id)?.addEventListener("input", updatePointsCalculator);
      document.getElementById(id)?.addEventListener("change", updatePointsCalculator);
    });

    ["sc-current-loc", "sc-sector", "sc-res-months", "sc-work-months", "sc-work-hours", "sc-graduate"].forEach((id) => {
      document.getElementById(id)?.addEventListener("input", updateStateCombinator);
      document.getElementById(id)?.addEventListener("change", updateStateCombinator);
    });

    document.querySelectorAll(".state-tab-btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        renderStateDeepDive(this.getAttribute("data-state") || "QLD");
      });
    });

    ["cost-visa-sub", "cost-state", "cost-adults", "cost-children", "s191-years", "s191-cond"].forEach((id) => {
      document.getElementById(id)?.addEventListener("input", updateCostAnd191);
      document.getElementById(id)?.addEventListener("change", updateCostAnd191);
    });

    document.getElementById("btn-gsm-copy")?.addEventListener("click", function () {
      const txt = document.getElementById("gsm-diagnostic-preview")?.textContent || "";
      navigator.clipboard?.writeText(txt);
      this.textContent = "✅ 복사 완료! (Copied)";
      setTimeout(() => { this.textContent = "📋 진단 요약 클립보드 복사"; }, 2200);
    });
    document.getElementById("btn-gsm-print")?.addEventListener("click", function () {
      window.print();
    });

    const modal = document.getElementById("detail-modal");
    document.getElementById("btn-polling-status")?.addEventListener("click", function () {
      modal?.classList.add("open");
    });
    document.getElementById("modal-close-btn")?.addEventListener("click", function () {
      modal?.classList.remove("open");
    });
    modal?.addEventListener("click", function (e) {
      if (e.target === modal) modal.classList.remove("open");
    });

    if (window.location.protocol !== "file:") {
      fetch("data/polling_status.json")
        .then((r) => r.json())
        .then((d) => {
          if (d && Array.isArray(d.sources)) {
            STATE.sources = d.sources;
            STATE.pollingMeta = d;
            renderPollerTable(d.sources);
            updateFooterCurrency(d);
          }
        })
        .catch(() => {});
      fetch("data/program_status.json")
        .then((r) => r.json())
        .then((psData) => {
          if (psData && Array.isArray(psData.records)) {
            STATE.programStatus = psData;
            renderSkillSelectExplorer();
            updateStateCombinator();
            renderStateDeepDive(STATE.activeTab || "QLD");
            updateFooterCurrency(STATE.pollingMeta || null);
          }
        })
        .catch(() => {});
      fetch("data/gsm_skillselect_data.json")
        .then((r) => r.json())
        .then((ssData) => {
          if (ssData && Array.isArray(ssData.occupation_cutoffs)) {
            STATE.skillselect = ssData;
            renderSkillSelectExplorer();
          }
        })
        .catch(() => {});
    }

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        STATE.lang = this.dataset.lang || "ko";
        document.querySelectorAll(".lang-btn").forEach((b) => b.classList.toggle("active", b === this));
        const dict = I18N[STATE.lang] || I18N.ko;
        document.querySelectorAll("[data-i18n]").forEach((el) => {
          const k = el.getAttribute("data-i18n");
          if (dict[k]) el.textContent = dict[k];
        });
        renderCharts();
        updatePointsCalculator();
        renderSkillSelectExplorer();
        updateStateCombinator();
        renderStateDeepDive(STATE.activeTab || "QLD");
        updateCostAnd191();
        if (STATE.sources.length) renderPollerTable(STATE.sources);
        updateFooterCurrency(STATE.pollingMeta || null);
      });
    });
  }

  globalThis.updateStateCombinator = updateStateCombinator;
  globalThis.renderStateDeepDive = renderStateDeepDive;
  globalThis.renderSkillSelectExplorer = renderSkillSelectExplorer;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();


/* === Park & Co Universal Ecosystem Strip & Static Leaf KO<->EN Enhancer === */
(function () {
  var LEAF_KO_TO_EN = {
    "← 박앤코 법률 인텔리전스 통합 허브 (All 12 Navigators)": "← Park & Co Legal Intelligence Hub (All 12 Navigators)",
    "파트너(820)·485": "Partner (820) & 485",
    "부모비자": "Parent Visas",
    "고용법(FWC)": "Employment Law (FWC)",
    "가족법·재산분할": "Family Law & Property",
    "위기·ART": "Visa Crisis & ART",
    "← 전체 네비게이터 허브": "← All Navigators Hub",
    "💬 온라인 상담신청": "💬 Enquire Online",
    "박창민 대표변호사 (Chang Min Park)": "Chang Min Park (Legal Practitioner Director)",
    "\"삶에 집중하세요, 법률은 저희가 맡겠습니다.\"": "\"You focus on life, we'll handle the law.\"",
    "법무법인 박앤코 (PNC Legal Pty Ltd t/a Park & Co Lawyers)": "PNC Legal Pty Ltd t/a Park & Co Lawyers",
    "법령 및 주정부 심사 근거": "Statutory & State Nomination Authority",
    "법령 및 심사 근거": "Statutory & Policy Authority",
    "법령 및 재판소 근거": "Statutory & Tribunal Authority",
    "Schedule 6D (189·190·491) 점수 계산기 ↓": "Schedule 6D (189·190·491) Points Calculator ↓",
    "8개 주정부(QLD~NT) 자격 매칭 & 백과사전": "8-State (QLD–NT) Eligibility Matcher & Compendium",
    "1. 8개 주정부 비교 & 점수 차트": "1. 8-State Comparison & Points Charts",
    "2. Schedule 6D 점수 계산기": "2. Schedule 6D Points Calculator",
    "3. 8개 주정부(QLD~NT) 정밀 매칭기": "3. 8-State (QLD–NT) Eligibility Matcher",
    "4. 491→191 영주권 & 총비용·진단서": "4. 491→191 PR & Total Cost / Brief",
    "변호사 1:1 기술이민·주정부 노미네이션 상담 신청 →": "Request 1:1 Skilled & State Nomination Consultation →",
    "65점": "65 pts",
    "190(+5점) · 491(+15점) 가점 포함": "Incl. 190 (+5 pts) & 491 (+15 pts)",
    "최대 20점": "Max 20 pts",
    "해외(15점)+호주(20점) 통합 상한": "Combined Overseas (15) + AUS (20) Cap",
    "FY26–27 주신청자 (189는 $6,135)": "FY26–27 Primary VAC (189 is $6,135)",
    "$0 하한": "$0 Floor",
    "최저소득 폐지 · ATO NOA 3년치 제출": "No min income · 3 yrs ATO NOAs required",
    "배우자 +$315 · 미성년 자녀 +$160": "Partner +$315 · Child +$160",
    "190·491 최소 거주·근무 개월 수 및 주정부 수수료 비교": "190/491 Minimum Residency/Work Months & State Fee Comparison",
    "그래프 1 · 8개 주/준주 일반 거주자 190 vs 491 필수 근무/거주 개월 수 & 신청비 비교": "Chart 1 · 8-State/Territory Onshore 190 vs 491 Minimum Work/Residency Months & Fees",
    "WA는 491 고용계약·경력 면제 및 신청비 $0이며, QLD는 2025–26부터 190 9개월 / 491 6개월로 강화되었어요.": "WA waives application fees ($0) and 491 job-offer rules; QLD requires 9 months (190) / 6 months (491).",
    "그래프 2 · Schedule 6D 항목별 최대 배점 및 해외+호주 경력 20점 통합 상한(Item 6D51)": "Chart 2 · Schedule 6D Maximum Points & Item 6D51 20-Point Combined Work Experience Cap",
    "나이(30점) + 영어(20점) + 경력합산(최대 20점) + 학력/STEM/호주학업/파트너 + 주정부 가점(+5/+15점).": "Age (30) + English (20) + Combined Work (max 20) + Education/STEM/Study/Partner + State (+5/+15).",
    "Schedule 6D 11대 평가 항목 입력": "Schedule 6D 11-Factor Assessment Inputs",
    "1. 초청 시점 만 나이 (Part 6D.1)": "1. Age at Time of Invitation (Part 6D.1)",
    "만 18세 ~ 24세 (25점)": "Aged 18–24 (25 pts)",
    "만 25세 ~ 32세 (30점 — 최고 배점)": "Aged 25–32 (30 pts — Maximum)",
    "만 33세 ~ 39세 (25점)": "Aged 33–39 (25 pts)",
    "만 40세 ~ 44세 (15점)": "Aged 40–44 (15 pts)",
    "만 45세 이상 (0점 — GSM 189/190/491 신청 불가)": "Aged 45+ (0 pts — Ineligible for GSM 189/190/491)",
    "2. 영어 능력 (Part 6D.2 — 유효기간 3년)": "2. English Language Ability (Part 6D.2 — 3-Year Validity)",
    "Competent English — IELTS 각 6.0 / PTE 50 (0점 · 최소 기본요건)": "Competent English — IELTS 6.0 / PTE 50 (0 pts · Minimum Threshold)",
    "Proficient English — IELTS 각 7.0 / PTE 65 (10점)": "Proficient English — IELTS 7.0 / PTE 65 (10 pts)",
    "Superior English — IELTS 각 8.0 / PTE 79 (20점)": "Superior English — IELTS 8.0 / PTE 79 (20 pts)",
    "3. 해외 숙련 경력 (Part 6D.3 — 최근 10년 내 주 20h+)": "3. Overseas Skilled Employment (Part 6D.3 — 20h+/wk in last 10 yrs)",
    "3년 미만 (0점)": "Under 3 years (0 pts)",
    "3년 이상 ~ 5년 미만 (5점)": "3 to <5 years (5 pts)",
    "5년 이상 ~ 8년 미만 (10점)": "5 to <8 years (10 pts)",
    "8년 이상 (15점)": "8+ years (15 pts)",
    "4. 호주 내 숙련 경력 (Part 6D.4 — 최근 10년 내 주 20h+)": "4. Australian Skilled Employment (Part 6D.4 — 20h+/wk in last 10 yrs)",
    "1년 미만 (0점)": "Under 1 year (0 pts)",
    "1년 이상 ~ 3년 미만 (5점)": "1 to <3 years (5 pts)",
    "8년 이상 (20점)": "8+ years (20 pts)",
    "5. 최종 학력/자격 (Part 6D.7)": "5. Educational Qualifications (Part 6D.7)",
    "박사 학위 (Doctorate / PhD — 20점)": "Doctorate / PhD (20 pts)",
    "학사(Bachelor) 또는 석사(Masters) 학위 (15점)": "Bachelor or Masters Degree (15 pts)",
    "호주 Diploma / Trade 학위 또는 기술심사기관 인정 자격 (10점)": "Australian Diploma / Trade Qualification or Recognised Award (10 pts)",
    "인정 학력 없음 (0점)": "No Recognised Qualification (0 pts)",
    "6. 배우자/파트너 자격 또는 미혼 (Part 6D.11)": "6. Partner Skills or Single Status (Part 6D.11)",
    "미혼(Single) 또는 파트너가 호주 시민권자/영주권자 (10점 — 6D112)": "Single OR Partner is Australian Citizen/PR (10 pts — 6D112)",
    "파트너가 만 45세 미만 + Competent 영어 + 동일 리스트 기술심사 보유 (10점 — 6D111)": "Partner <45 + Competent English + Skilled Assessment (10 pts — 6D111)",
    "파트너가 Competent 영어(IELTS 6.0)만 보유 (5점 — 6D113)": "Partner has Competent English (IELTS 6.0) only (5 pts — 6D113)",
    "파트너가 시민권/영주권자가 아니며 영어/기술심사 미보유 (0점)": "Partner is non-citizen/PR without English or Skills Assessment (0 pts)",
    "7. 추가 가점 항목 (해당 항목 모두 체크 — Part 6D.6 / 6D.7A / 6D.8 / 6D.9 / 6D.10)": "7. Bonus Point Factors (Tick all that apply — Parts 6D.6–6D.10)",
    "Subclass 189 · 190 · 491 법정 점수 산출 결과": "Subclass 189 · 190 · 491 Statutory Points Breakdown",
    "8개 주/준주 중 현재 바로 노미네이션 신청(또는 ROI/Matrix 접수)이 가능한 주와 부족한 개월 수를 즉시 판정": "Instantly identify eligible States/Territories and any remaining residency/work months required",
    "내 거주지 · 근무 개월 · 주당 시간 · 졸업생 프로필 입력": "Your Current State, Work Months, Weekly Hours & Graduate Profile",
    "1. 현재 거주 중인 주/준주 (또는 해외)": "1. Current State/Territory of Residence (or Offshore)",
    "Queensland (QLD — 브리즈번 / 골드코스트·지방 QLD)": "Queensland (QLD — Brisbane / Gold Coast & Regional QLD)",
    "New South Wales (NSW — 시드니 / 지방 NSW)": "New South Wales (NSW — Sydney / Regional NSW)",
    "Victoria (VIC — 멜버른 / 지방 VIC)": "Victoria (VIC — Melbourne / Regional VIC)",
    "Western Australia (WA — 퍼스 및 서호주 전역)": "Western Australia (WA — Perth & Statewide WA)",
    "South Australia (SA — 애들레이드 및 외곽 SA)": "South Australia (SA — Adelaide & Regional SA)",
    "Tasmania (TAS — 호바트·론세스턴 등 전역)": "Tasmania (TAS — Hobart, Launceston & Statewide)",
    "Australian Capital Territory (ACT — 캔버라)": "Australian Capital Territory (ACT — Canberra)",
    "Northern Territory (NT — 다윈·앨리스스프링스 등)": "Northern Territory (NT — Darwin & Regional NT)",
    "해외 거주 중 (Offshore — 한국 등 호주 외 거주)": "Residing Offshore (Outside Australia)",
    "2. 직군 산업 분야 (Priority Sector)": "2. Occupation Industry Sector",
    "일반 기술·전문직·기능직 (General CSOL/State List)": "General Skilled / Professional / Trade Occupation",
    "건축·건설·트레이드 (Building & Construction — QLD·WA·SA 최우선 우대)": "Building & Construction Trades (Priority in QLD, WA, SA)",
    "보건·의료·간호·교육·사회복지 (Health, Nursing, Teaching, Social Work)": "Health, Nursing, Teaching & Social Work",
    "3. 현 거주 주(State) 연속 거주 개월 수 (개월)": "3. Continuous Residency in Current State (Months)",
    "4. 현 거주 주 내 숙련 직무 연속 근무 개월 수 (개월)": "4. Continuous Skilled Employment in Current State (Months)",
    "5. 주당 평균 유급 근무시간 (시간/주)": "5. Average Paid Working Hours per Week",
    "주 35~38시간 이상 (Full-time — 전 주정부 190/491 기준 충족)": "35–38+ hrs/wk (Full-time — Meets all State 190/491 thresholds)",
    "주 30시간 이상 (QLD·SA·ACT 190 기준 충족)": "30+ hrs/wk (Meets QLD, SA, ACT 190 thresholds)",
    "주 20시간 이상 (NSW·TAS·SA 491 기준 충족)": "20+ hrs/wk (Meets NSW, TAS, SA 491 thresholds)",
    "주 15시간 이상 (ACT 491 13/15주 기준 충족)": "15+ hrs/wk (Meets ACT 491 threshold)",
    "현재 미취업 (졸업생 무경력 스트림 또는 해외 경력 활용)": "Currently Unemployed (Graduate stream or offshore experience)",
    "6. 현 거주 주(State) 내 대학/VET 졸업 여부": "6. Graduate of a University/VET Institution in Current State?",
    "아니오 (일반 숙련 근로자 스트림)": "No (Standard Skilled Worker Stream)",
    "예 — 해당 주에서 학사/석사/학위(2년+) 졸업 (Regional NSW·WA·TAS·SA·NT 졸업생 특례)": "Yes — Bachelor/Masters (2+ yrs) in this State (Graduate concessions)",
    "예 — 해당 주에서 박사(PhD) 학위 취득 (ACT 무료·자동초청 / QLD·WA·SA 우대)": "Yes — Doctorate (PhD) completed in this State (Priority stream)",
    "예 — 해당 주에서 2년 이상 VET (Cert III/IV/Diploma) 졸업 (WA·TAS·SA 졸업생)": "Yes — 2+ yr VET (Cert III/IV/Diploma) in this State",
    "내 프로필 기준 주정부 노미네이션(190 · 491) 적격 판정": "State Nomination (190 · 491) Eligibility Assessment",
    "8개 주/준주별 190·491 세부 스트림 · 거주/근무/고용계약 · 수수료 · 숨은 함정 총정리": "8-State/Territory 190 & 491 Streams, Residency/Work Rules, Fees & Key Traps",
    "QLD (퀸즐랜드)": "QLD (Queensland)",
    "NSW (뉴사우스웨일스)": "NSW (New South Wales)",
    "VIC (빅토리아)": "VIC (Victoria)",
    "WA (서호주)": "WA (Western Australia)",
    "SA (남호주)": "SA (South Australia)",
    "TAS (태즈메이니아)": "TAS (Tasmania)",
    "ACT (캔버라)": "ACT (Canberra)",
    "NT (노던준주)": "NT (Northern Territory)",
    "최저소득 폐지($0 기준 · NOA 3년치 제출)": "No Minimum Income ($0 floor · 3 ATO NOAs required)",
    "주정부 노미네이션 수수료 + FY2026–27 연방 비자비(VAC) 총합": "State Nomination Fee + FY2026–27 Federal VAC Total",
    "비자 종류 · 노미네이션 주 · 가족 수 · [491/494 전용] 191 전환 요건": "Visa Subclass, Nominating State, Family Size & [491/494 Only] 191 PR Check",
    "1. 신청 비자 서브클래스": "1. Target Visa Subclass",
    "Subclass 491 — 지방 주정부/가족 지명 임시 5년 (3년 후 191 영주권 전환 대상 · VAC $6,140)": "Subclass 491 — Regional Provisional 5-Yr (Eligible for 191 PR after 3 yrs · VAC $6,140)",
    "Subclass 191 — [491/494 소지자 전용] 3년 후 영주권 전환 신청 (VAC $630 · 주정부 비용 $0)": "Subclass 191 — [491/494 Holders Only] 3-Yr PR Transition (VAC $630 · State Fee $0)",
    "Subclass 190 — 주정부 지명 영주비자 (처음부터 영주권 Direct PR · 191 전환 대상 아님 · VAC $6,140)": "Subclass 190 — State Nominated Direct PR (Direct PR · Not a 191 pathway · VAC $6,140)",
    "Subclass 189 — 독립기술 영주비자 (처음부터 영주권 Direct PR · 주정부/191 대상 아님 · VAC $6,135)": "Subclass 189 — Skilled Independent Direct PR (Direct PR · Not a 191 pathway · VAC $6,135)",
    "2. 노미네이션 신청 주/준주 (190·491만 해당)": "2. Nominating State/Territory (190 & 491 Only)",
    "QLD — $630.30 (Onshore GST 포함)": "QLD — $630.30 (incl. Onshore GST)",
    "NSW — $346.50 (Onshore GST 포함)": "NSW — $346.50 (incl. Onshore GST)",
    "WA — $0 (서호주 주정부 신청비 전면 무료!)": "WA — $0 (Western Australia $0 Nomination Fee)",
    "3. 동반 성인 가족 수 (만 18세 이상 배우자 등)": "3. Accompanying Adult Applicants (18+ Partner/Dependants)",
    "0명 (단독 신청)": "0 (Single Applicant)",
    "1명 (+$3,070 / 191은 +$315)": "1 Adult (+$3,070 / 191 is +$315)",
    "1명 (배우자 동반)": "1 Adult (Accompanying Partner)",
    "2명": "2",
    "3명": "3",
    "0명": "0",
    "1명": "1",
    "4. 동반 미성년 자녀 수 (만 18세 미만)": "4. Accompanying Minor Children (Under 18)",
    "1명 (+$1,535 / 189는 +$1,540 / 191은 +$160)": "1 Child (+$1,535 / 189 is +$1,540 / 191 is +$160)",
    "5. [491/494 소지자 전용] 보유 기간 & ATO NOA 수": "5. [491/494 Holders Only] Years Held & ATO NOAs",
    "491/494 보유 3년 이상 + ATO Notice of Assessment 3개 연도 확보 완료": "Held 491/494 for 3+ yrs + 3 income years of ATO NOAs ready",
    "아직 3년 미만 보유 중 (5년 비자 기간 중 총 3개 과세연도 NOA 확보 필요)": "Held <3 yrs (Must complete 3 years and 3 ATO NOAs within 5-yr validity)",
    "6. [491/494 소지자 전용] 지방 거주·근무 조건(8579) 준수": "6. [491/494 Holders Only] Condition 8579 Regional Compliance",
    "준수 완료 — 지정 지방(Designated Regional Area) 내 거주·근무·학업 유지": "Compliant — Resided, worked & studied exclusively in Designated Regional Areas",
    "주의 필요 — 대도시(시드니·멜버른·브리즈번) 장기 체류 또는 주소 변경 미신고(8578)": "Caution — Extended metro stay (Sydney/Melbourne/Brisbane) or unnotified address (8578)",
    "FY2026–27 총비용 & Subclass 191 영주권 전환 판정": "FY2026–27 Total Statutory Cost & Subclass 191 PR Assessment",
    "내 기술이민 점수(Schedule 6D) & 주정부 노미네이션 진단서 복사 · 인쇄(PDF) & 온라인 상담 신청": "Copy, Print (PDF) & Enquire Online with Your GSM Points & State Nomination Brief",
    "위 모듈에서 계산된 189·190·491 점수, 거주 주 노미네이션 적격 판정, 총비용 요약문을 즉시 복사하여 공식 온라인 상담 신청 시 붙여넣을 수 있어요.": "Copy your calculated 189/190/491 points, state nomination eligibility, and fee breakdown to attach directly to your Park & Co online consultation request.",
    "📋 진단 요약 클립보드 복사": "📋 Copy Diagnostic Summary",
    "📋 긴급 진단서 클립보드 복사": "📋 Copy Urgent Diagnostic Brief",
    "🖨️ PDF / 브리프 인쇄": "🖨️ Print / Save PDF",
    "💬 진단 요약 복사 & 박앤코 온라인 상담 →": "💬 Copy Brief & Enquire Online →",
    "🚨 진단 결과 담아 박앤코 긴급 자문 요청 →": "🚨 Email Urgent Brief to Park & Co →",
    "구분": "Category",
    "공식 법령 · 주정부 이민 포털 및 링크": "Official Legislation / State Portal & Link",
    "공식 문서명 및 링크": "Official Instrument / Source & Link",
    "공식 법령 · 재판소 안내 및 링크": "Official Legislation / Tribunal Guide & Link",
    "관할 기관": "Authority",
    "추적 지표": "Monitored Metrics",
    "검증 주기": "Schedule",
    "상태": "Status",
    "법률 면책공고 (Legal Disclaimer) · 주정부 노미네이션 할당량(Quota) 안내": "Legal Disclaimer & State Nomination Quota Notice",
    "법률 면책공고 (Legal Disclaimer) · Migration Act s 245AR 비용 전가 금지 안내": "Legal Disclaimer & Migration Act s 245AR Prohibition Notice",
    "법률 면책공고 (Legal Disclaimer) · 송달 간주 규정(s 494B / s 494C) 안내": "Legal Disclaimer & Deemed Notification Rules (s 494B / s 494C)",
    "연방 Schedule 6D & 8개 주정부 포털 실시간 모니터 (12/12 Live Verified)": "Federal Schedule 6D & 8-State Portal Live Monitor (12/12 Verified)",
    "공식 1차 출처 실시간 모니터 (12/12 Live Verified)": "Official Primary Source Live Monitor (12/12 Verified)",
    "공식 1차 법령·ART 출처 실시간 모니터 (12/12 Live Verified)": "Official Statutory & ART Primary Source Monitor (12/12 Verified)",
    "비자 만료 시까지 (Until Visa Expiry)": "Until Visa Expiry (LIN 22/012 & LIN 22/013)",
    "28 역일": "28 Calendar Days",
    "일반 비자·노미네이션 거절 (reg 4.10)": "Standard Onshore Visa/Nomination Refusal (reg 4.10)",
    "7 영업일": "7 Working Days",
    "호주 내 일반 비자 취소 · 구금 재심": "Onshore s 116 Cancellation / Detention Review",
    "9일 / 28일": "9 Days / 28 Days",
    "ART 재심 9일(s 500(6B)) · 철회 28일": "ART s 500(6B) 9d · Revocation Request 28d",
    "+ 파트너(820) · 의료(602) · 보호(866)": "+ Partner (820) · Medical (602) · Protection (866)",
    "3년 / 10년": "3 Yrs / 10 Yrs",
    "허위서류 3년(Waiver유) · 신원 10년(무)": "Bogus Doc 3yr (Waivable) · Identity 10yr (No Waiver)",
    "35 역일": "35 Calendar Days",
    "ART 기각 후 관할권 오류 사법심사(s 477)": "FCFCOA Judicial Review after ART Dismissal (s 477)",
    "2. ART 재심 · s 501 데드라인 계산기": "2. ART Review & s 501 Deadline Calculator",
    "3. Section 48 Bar 예외 비자 진단": "3. Section 48 Bar Exempt Visa Checker",
    "긴급 비자 거절·취소 1:1 변호사 자문 요청 →": "Request Urgent 1:1 Refusal/Cancellation Legal Advice →"
  };

  function applyUniversalLeafTranslation(lang) {
    var isEn = lang === "en";
    document.querySelectorAll(".parkco-svc-link").forEach(function (lnk) {
      var h = isEn ? lnk.getAttribute("data-en-href") : lnk.getAttribute("data-ko-href");
      if (h) lnk.setAttribute("href", h);
    });
    document.querySelectorAll("a.cta-enquiry").forEach(function (a) {
      a.setAttribute("href", isEn ? "https://parklawyers.com.au/links/" : "https://parklawyers.com.au/links/?lang=ko");
    });
    var walk = function (el) {
      if (!el || el.tagName === "SCRIPT" || el.tagName === "STYLE" || el.tagName === "PRE") return;
      var hasElementChildren = false;
      for (var i = 0; i < el.children.length; i++) {
        if (el.children[i].tagName !== "BR") {
          hasElementChildren = true;
          break;
        }
      }
      if (!hasElementChildren) {
        var raw = (el.textContent || "").trim().replace(/\s+/g, " ");
        if (!el.getAttribute("data-ko-leaf") && /[가-힣]/.test(raw) && raw.indexOf("한국어") === -1) {
          el.setAttribute("data-ko-leaf", el.textContent);
        }
        var koOrig = el.getAttribute("data-ko-leaf");
        if (koOrig) {
          var normKo = koOrig.trim().replace(/\s+/g, " ");
          if (isEn) {
            if (LEAF_KO_TO_EN[normKo]) {
              el.textContent = LEAF_KO_TO_EN[normKo];
            } else if (normKo.indexOf("(") !== -1 && /[A-Za-z]/.test(normKo)) {
              /* If option has bilingual text like '1월 (Jan)' or '만 67세 미만 (Under 67)', extract English or keep clean */
            }
          } else {
            el.textContent = koOrig;
          }
        }
      }
      for (var j = 0; j < el.children.length; j++) {
        walk(el.children[j]);
      }
    };
    walk(document.body);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var btns = document.querySelectorAll("#lang-en, #lang-ko, #lang-toggle-en, #lang-toggle-ko, .lang-btn");
    btns.forEach(function (b) {
      b.addEventListener("click", function () {
        var isEn = (b.id && b.id.indexOf("en") !== -1) || b.getAttribute("data-lang") === "en";
        document.documentElement.lang = isEn ? "en" : "ko";
        setTimeout(function () { applyUniversalLeafTranslation(isEn ? "en" : "ko"); }, 20);
      });
    });

    var params = new URLSearchParams(window.location.search);
    if (params.get("lang") === "en") {
      var enBtn = document.getElementById("lang-en") || document.getElementById("lang-toggle-en") || document.querySelector('[data-lang="en"]');
      if (enBtn) {
        enBtn.click();
        setTimeout(function () { applyUniversalLeafTranslation("en"); }, 40);
      }
    }
  });
})();
