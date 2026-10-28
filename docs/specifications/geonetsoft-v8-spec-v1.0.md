# Geonet Soft — Specificații site

Document de lucru · versiune 1.0

---

## 1. Obiectiv de business

Geonet Soft administrează infrastructura IT pentru firme care depind de email și date pentru a funcționa. Diferențiatorul principal: infrastructura livrată respectă tehnic cerințele NIS2/NIST pentru email securizat — demonstrabil independent prin platforma MECSA a Comisiei Europene.

Obiectivul site-ului: să filtreze vizitatorii care au nevoie de un partener IT serios și să convertească interesul în ofertă.

---

## 2. Audiențe și căi de intrare

**Profil 1 — Directorul de firmă:** Nu știe ce e SPF sau DMARC, dar i-au picat comenzi după ce emailul a mers în spam. Calea: Hero scenariii recognoscibile CTA ofertă.

**Profil 2 — IT-istul intern:** Știe tehnic, vrea să vadă că știm și noi. Calea: Trust band (SPF/DKIM/DMARC/DNSSEC/DANE/MTA-STS/TLS-RPT) card MECSA raport public verificabil.

**Profil 3 — Auditorul de conformitate:** Caută dovezi independente pentru NIS2. Calea: MECSA score link raport CE secțiunile ancorate din Despre.

---

## 3. Arhitectura site-ului

Patru pagini principale:

- **index.html** — atracție și filtrare; nu vinde servicii, vinde credibilitate
- **despre.html** — substanță și dovezi; destinație pentru linkurile din cardurile perdea
- **servicii.html** — portofoliu complet IT; tot ce facem
- **contact.html** — conversie; formular ofertă

Navigare: logo (acasă) · Servicii · Despre · Ofertă

---

## 4. Pagini — descriere detaliată

### 4.1 Homepage (index.html)

**Misiunea paginii:** să atragă vizitatorii potriviți și să le dea un motiv să ceară o ofertă.

**Structura secțiunilor (de sus în jos):**

1. **Nav** — logo hexagonal SVG, hamburger mobile, linkuri: Servicii / Despre / Ofertă
2. **Hero** — headline problem-first, 3 scenarii recognoscibile (buyer profiles), CTA primar la #oferta
3. **Trust band** — 7 etichete tehnice: SPF DKIM DMARC DNSSEC DANE MTA-STS TLS-RPT
4. **Secțiunea MECSA** — 3 carduri cu perdea (id=mecsa): Confidențialitate / Identitate / Integritate; fiecare card are front cu scorul și buton "Ce înseamnă?" + perdea cu explicație + link "Detalii complete" ancorată în despre.html
5. **Proof bar** — ID raport MECSA: ce815e6df219167fb20f31e283c09954 + link public verificabil
6. **Secțiunea servicii (rezumat)** — 3-4 categorii principale, link "Vezi toate" spre servicii.html
7. **Backup panel** — 7 zile incluse / 30 zile opțional
8. **Tarife** — 3 planuri: \~10€ / \~20€ / \~50€ (PLACEHOLDER — confirmare necesară)
9. **Formular ofertă** (id=oferta) — câmpuri: firmă, email, telefon, mesaj
10. **Footer** — CUI placeholder, ANPC, DSA, an auto-fill

**Ancore GA4:** #mecsa (secțiune carduri), #oferta (formular)

**Custom events GA4 (inactive până la finalizare):** mecsa\_card\_open / hero\_cta\_click / lead\_form\_submit

**Stare actuală:** publicată la https://claude.ai/artifact/AT2scHymZskaCZkTteUhZW (v2)

---

### 4.2 Despre (despre.html)

**Misiunea paginii:** credibilitate completă — cine suntem, ce știm să facem (capabilități IT), și dovada independentă pentru emailul securizat. Nu e o pagină de tech deep-dive; e pagina care transformă interesul în încredere.

\*\*Structura (de sus în jos):

1. **Intro comercial (yada yada)** — max 3 paragrafe; importanța emailului ca infrastructură de business, NIS2/NIST ca codificare a principiilor tehnice mature, poziționarea Geonet: nu emitem certificate, construim infrastructura demonstrabilă
2. **Capabilități IT — ce facem** — prezentare compactă a gamei complete de servicii (rețea, servere, email, backup, stații, securitate, suport); nu un catalog detaliat — asta e la servicii.html; scopul e să arate "știm să facem tot"
3. **#confidentialitate** — h2 cu id; use case MECSA: email în tranzit criptat, ce înseamnă concret pentru client
4. **#identitate** — h2 cu id; use case MECSA: autentificarea expeditorului (SPF/DKIM/DMARC), protecție împotriva impersonării
5. **#integritate** — h2 cu id; use case MECSA: DNS securizat (DNSSEC/DANE), garantarea că serverul destinatar e cel real
6. **CTA final** — link spre servicii.html sau formular ofertă

**Regulă structurală:** intro → capabilități → cele 3 secțiuni ancorate → CTA. Capabilitățile sunt un bloc compact (card-uri sau listă) — nu o pagină separată, nu un catalog; scopul e percepția de întregime, nu detaliul. Același pattern ca barieradevaori.ro pentru secțiunile ancorate.

**Linkurile din perdea** din homepage pointează la: despre.html#confidentialitate / despre.html#identitate / despre.html#integritate

**Stare:** necreat

---

### 4.3 Servicii (servicii.html)

**Misiunea paginii:** portofoliu complet; răspunde la "dar faceți și...?"

**Categorii confirmate (toate):**

1. **Rețea** — configurare routere, switch-uri, VPN, firewall, WiFi enterprise
2. **Servere** — instalare, configurare, virtualizare (Hyper-V/VMware), Active Directory
3. **Email** — hosting, migrare, configurare SPF/DKIM/DMARC/DANE, administrare continuă
4. **Backup** — strategii 3-2-1, backup local + cloud, testare restaurare, rapoarte
5. **Stații de lucru** — deployment Windows/macOS, patch management, suport utilizatori
6. **Securitate** — antivirus gestionat, MDM, politici acces, audit
7. **Suport** — helpdesk remote, intervenție on-site, SLA, raportare lunară

**Acoperire geografică:** baza Timișoara, clienți naționali (Prahova, București, etc.)

**Stare:** necreat

---

### 4.4 Contact / Ofertă (contact.html)

**Misiunea paginii:** conversie finală; formular detaliat pentru ofertă personalizată.

**Câmpuri formular:** nume, firmă, email, telefon, serviciu de interes (dropdown), mesaj, accept GDPR

**Stare:** necreat (formularul din homepage e un pre-formular mai simplu)

---

## 5. Fluxurile utilizatorului

**Flux A — Directorul grăbit:** homepage hero → scenariul lui → CTA ofertă → formular → trimite

**Flux B — Curios tehnic:** homepage → card MECSA → "Ce înseamnă?" (perdea) → "Detalii complete" → despre.html#ancora → servicii.html

**Flux C — Auditor conformitate:** homepage → proof bar (ID raport) → verifică extern pe mecsa.jrc.ec.europa.eu → revenire site → ofertă

---

## 6. Elemente comune (toate paginile)

- **Logo:** SVG hexagonal, același fișier, link spre index.html
- **Nav:** identic pe toate paginile; hamburger pe mobile
- **Footer:** CUI Geonet Soft (de completat), ANPC, DSA, copyright auto-year
- **Fonturi:** sistem (fără import extern pentru viteză)
- **Paleta:** dark navy (#0b223f / #143456), cyan accent (#19d3e6), alb text
- **Filigran SVG:** shared între card front și perdea (gestalt continuity)

---

## 7. Limite deliberate (KISS/YAGNI)

- **WordPress + Hestia:** livrare ca HTML + CSS, fără page builder
- **3 ancore fixe:** #confidentialitate #identitate #integritate — hardcodate, nu generate dinamic
- **Fără plugin de ancore:** 3 id= pe h2, scrise de mână
- **GA4 inactiv** până la finalizarea paginilor: tag G-9673YB2ZFW
- **Fără certificat de conformitate NIS2:** nu suntem organism de certificare; livrăm infrastructura, clientul demonstrează
- **Prețuri placeholder:** 10€ / 20€ / 50€ — confirmare necesară înainte de publicare
- **Lipsă:** număr telefon în hero/CTA (de adăugat), CUI în footer (de completat)

---

## 9. Fișiere auxiliare

### llms.txt (la rădăcina site-ului)

**Scop:** index pentru LLM-uri — ce face site-ul, ce pagini există, cum să fie citat.

**Regulă de sincronizare:** llms.txt este parte din proiect, nu un fișier static. Orice modificare în site (pagini noi, prețuri, servicii, URL-uri) se reflectă imediat și în llms.txt.

**Structură:**

1. H1 titlu + blockquote sumar (diferențiator principal + MECSA)
2. `## Servicii` — gama completă IT, nu doar email/hosting
3. `## Acoperire geografică` — baza Timișoara, clienți naționali
4. `## Tarife` — prețuri reale, în sync cu pagina Servicii
5. `## Întrebări frecvente` — 4-5 Q&A scurte care răspund proactiv la ce ar întreba un LLM
6. `## Contact` — telefon, email, web
7. `## Pagini relevante` — linkuri spre toate paginile cu descriere

**llms-full.txt (opțional):** versiune extinsă cu conținut inline din fiecare pagină, pentru LLM-uri care vor mai mult context fără să urmeze linkuri.

**Stare:** se scrie ULTIMUL, după finalizarea tuturor paginilor și confirmarea slug-urilor WordPress. V1 există (email/hosting-centric); v2 draft în scratchpad — de finalizat și publicat când site-ul e live.

## 8. Stare și plan de lucru

| Pagină | Stare | Următorul pas |
| --- | --- | --- |
| index.html | Publicată v2 | Confirmare prețuri, adăugare telefon, activare GA4 |
| despre.html | Necreat | Redactare copy yada yada + 3 secțiuni ancorate |
| servicii.html | Necreat | Layout portofoliu complet 7 categorii |
| contact.html | Necreat | Formular detaliat conversie |