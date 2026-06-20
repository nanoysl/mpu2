# Datenschutz- und Formularanbieter-Empfehlung für MPU Safe

Stand: 20.06.2026

Hinweis: Diese Einschätzung ist eine technische und organisatorische Datenschutz-Bewertung für die Website-Umsetzung. Sie ersetzt keine anwaltliche Prüfung oder finale Datenschutzberatung.

## 1. Ist-Zustand der Website

### Projektstand

- React/Vite-Website mit statischem Build.
- Deployment-Kontext im Repository: GitHub Pages Workflow (`.github/workflows/deploy-pages.yml`).
- Datenschutzerklärung und Impressum sind aktuell Platzhalter und ausdrücklich nicht final.
- Externe Zahlungslinks zu Digistore24 sind im Code vorhanden.
- Es gibt aktuell keine eingebundene Formularanbieter- oder Backend-Abhängigkeit.
- Es gibt keine API-Keys, Tokens oder Provider-Konfigurationen im Formularbereich.

### Aktuelle Formulare und Eingaben

| Bereich | Aktueller Zustand | Echte Absende-Funktion? | Datenschutzbewertung |
|---|---:|---:|---|
| Kontaktformular | Nicht vorhanden | Nein | Aktuell kein Website-Formularrisiko, aber Datenschutzerklärung noch unvollständig. |
| Erstgespräch-Formular | Nicht vorhanden | Nein | Nur Buttons/Links zu Kontaktbereichen, kein Formular. |
| MPU-Check / Simulator | Interaktiver Browser-Fragebogen | Keine Server-Übermittlung | Antworten bleiben technisch im Browser-State, bis der Nutzer die E-Mail-Vorbereitung nutzt. |
| Simulator E-Mail-Feld | E-Mail-Input auf Ergebnis-Seite | Nur `mailto:` | Kein Backend-Senden. Nutzer-Mailprogramm wird geöffnet, E-Mail-Body enthält Auswertung/Antwortprotokoll. |
| Telefonlink | Nicht gefunden | Nein | Keine Telefonnummer im Code als Link erkannt. |
| WhatsApp-Link | Nicht gefunden | Nein | Keine WhatsApp-Integration erkannt. |
| Uploads | Nicht vorhanden | Nein | Sehr gut für den aktuellen Risikostand. |

### Wichtige technische Beobachtungen

- Es gibt kein `<form>`-Element.
- Es gibt keine `fetch()`- oder API-Übermittlung für Kontakt- oder Simulator-Daten.
- Der Simulator-Zugang wird aktuell über `?access=paid` freigeschaltet. Das ist technisch nur ein Frontend-Merkmal, keine sichere Kaufprüfung.
- Die Ergebnis-E-Mail wird per `mailto:` vorbereitet. Dadurch verlässt der Inhalt die Website erst, wenn der Nutzer sein Mailprogramm verwendet.
- Der Query-Parameter `email` wird optional aus der URL gelesen. E-Mail-Adressen in URLs können in Browser-Historie, Serverlogs, Referrer-Kontexten oder Screenshots auftauchen und sollten für echte Produktion vermieden oder sehr vorsichtig eingesetzt werden.

## 2. Realistisch verarbeitete Daten

### Aktuell technisch verarbeitet

- Browser-Aufrufe und technische Zugriffsdaten durch Hosting/CDN.
- Klicks und lokale Auswahl im Simulator nur im Browser-State.
- Optional E-Mail-Adresse im Simulator-Ergebnisfeld.
- Optional E-Mail-Adresse aus URL-Parameter `email`.
- Bei Klick auf "E-Mail vorbereiten": Auswertung und Antwortprotokoll werden an das lokale Mailprogramm übergeben.

### Bei einem späteren minimalen Kontaktformular realistisch

- Name.
- E-Mail-Adresse.
- Telefonnummer optional.
- Freitextnachricht.
- Zeitpunkt der Anfrage.
- IP-Adresse / technische Logs beim Formularanbieter oder Backend.
- Checkbox-/Einwilligungsnachweis inklusive Zeitpunkt, Formularversion und Datenschutzhinweis-Version.

### Für MPU-Kontext besonders kritisch

Folgende Daten dürfen nicht beiläufig über ein normales Kontaktformular oder unsichere Formularanbieter eingesammelt werden:

- Angaben zu Alkohol, Drogen, Abstinenz, Konsummustern.
- Angaben zu Gesundheit, psychischer Belastung, Therapie, Diagnosen.
- Angaben zu Verkehrsverstößen, Ermittlungen, Verurteilungen oder strafrechtlich relevanten Themen.
- MPU-Gutachten, Strafakten, Abstinenznachweise, Laborberichte, ärztliche Unterlagen.
- Führerscheinstellen-Schreiben, Bußgeldbescheide, Gerichtsbeschlüsse.
- Vollständige Fallakten oder Dokumenten-Uploads.

## 3. Datenschutz-Risiken speziell für MPU Safe

### Art. 9 DSGVO

MPU-Fallinformationen können schnell besondere Kategorien personenbezogener Daten berühren, insbesondere Gesundheitsdaten, psychische Angaben sowie Alkohol- oder Drogenbezug. Solche Daten haben ein erhöhtes Schutzniveau. Eine normale Kontaktanfrage sollte deshalb nicht aktiv nach solchen Details fragen.

### Art. 10 DSGVO

MPU-Kontexte können Angaben zu Verkehrsdelikten, Strafverfahren, Verurteilungen oder strafrechtlich relevanten Vorgängen enthalten. Solche Daten sind besonders streng zu behandeln und gehören nicht in ungesicherte Standardformulare.

### Konkrete Risiken

- Freitextfelder laden Nutzer dazu ein, sensible Details ungefragt preiszugeben.
- Mailto-Auswertungen können sensible Inhalte über private Mailanbieter, unsichere Postfächer oder falsche Empfänger versenden.
- URL-Parameter mit E-Mail oder Zugangsdaten können in Logs und Browser-Historien auftauchen.
- Formularanbieter ohne klaren AV-Vertrag, EU/EWR-Verarbeitung, Subprozessorenliste, Löschkonzept und Sicherheitsdokumentation sind für MPU-sensitive Daten riskant.
- Uploadfelder wären besonders riskant, weil Nutzer dort Gutachten, Abstinenznachweise oder Behördenunterlagen hochladen könnten.
- Öffentliche Repos, JSON-Dateien, statische Dateien, clientseitige Logs oder ungeschützte Links dürfen niemals Kundendaten oder Auswertungen enthalten.

## 4. Vergleich technischer Optionen

### Option A: Nur E-Mail-Link / Telefon / WhatsApp, kein echtes Website-Formular

| Kriterium | Bewertung |
|---|---|
| DSGVO-Risiko | Niedrig bis mittel. Kein Website-Formular, aber E-Mail/WhatsApp können sensible Inhalte erhalten. |
| Aufwand | Niedrig. |
| Kosten | Niedrig. |
| Technische Komplexität | Niedrig. |
| Eignung für MPU-sensitive Daten | Nur bedingt. Für Erstkontakt okay, für Fallanalyse nicht ausreichend. |
| AV-Vertrag nötig | Für reine eigene E-Mail-Infrastruktur abhängig vom Anbieter. Bei WhatsApp/Business-Tools sehr sorgfältig prüfen. |
| EU/EWR-Verarbeitung | Bei E-Mail-Anbieter prüfen. WhatsApp ist für MPU-sensitive Details eher kritisch. |
| Einwilligungsnachweis | Schwach, wenn nur E-Mail-Link. Besser mit klaren Hinweisen auf der Website. |
| Löschfristen | Über Mailpostfach organisatorisch machbar, aber manuell zu regeln. |

Bewertung: Für den sicheren Start gut, solange klar kommuniziert wird: keine sensiblen Dokumente oder vollständigen MPU-Details per Erstkontakt senden.

### Option B: Einfaches Kontaktformular nur für allgemeine Anfragen ohne sensible MPU-Details

| Kriterium | Bewertung |
|---|---|
| DSGVO-Risiko | Mittel. Freitext kann trotzdem sensible Daten enthalten. |
| Aufwand | Niedrig bis mittel. |
| Kosten | Niedrig bis mittel. |
| Technische Komplexität | Mittel, weil Formularversand, Spam-Schutz und Datenschutzlogik benötigt werden. |
| Eignung für MPU-sensitive Daten | Nicht geeignet. Nur allgemeine Kontaktaufnahme. |
| AV-Vertrag nötig | Ja, sobald ein Formularanbieter/Backend im Auftrag verarbeitet. |
| EU/EWR-Verarbeitung | Sinnvoll und für diesen Kontext zu bevorzugen. |
| Einwilligungsnachweis | Möglich über Checkbox, Zeitstempel, Formularversion. |
| Löschfristen | Umsetzbar, wenn Anbieter Export/Löschung/Retention gut unterstützt. |

Bewertung: Möglich, aber nur minimal und mit deutlichem Warnhinweis vor dem Nachrichtenfeld.

### Option C: Kontaktformular mit Formularanbieter / Backend-Anbieter

| Kriterium | Bewertung |
|---|---|
| DSGVO-Risiko | Mittel bis hoch, abhängig vom Anbieter. |
| Aufwand | Mittel. |
| Kosten | Niedrig bis mittel, je nach Anbieter. |
| Technische Komplexität | Mittel. |
| Eignung für MPU-sensitive Daten | Nur dann, wenn Anbieter eindeutig für sensible Daten geeignet ist. Sonst riskant. |
| AV-Vertrag nötig | Ja. |
| EU/EWR-Verarbeitung | Sollte zwingend möglich und dokumentiert sein. |
| Einwilligungsnachweis | Meist möglich, muss konkret geprüft werden. |
| Löschfristen | Nur geeignet, wenn Retention/Export/Löschung praktisch steuerbar sind. |

Bewertung: Nicht blind wählen. Viele bekannte Formularanbieter sind bequem, aber nicht automatisch passend für MPU-Daten.

Mindestprüfung vor Auswahl:

- AV-Vertrag verfügbar.
- EU/EWR-Hosting oder belastbares Transferkonzept.
- Subprozessoren transparent.
- Aufbewahrungsfristen konfigurierbar.
- Datenexport und Einzellöschung möglich.
- Verschlüsselung bei Übertragung und Speicherung.
- Keine Nutzung der Inhalte zu eigenen Analyse-, KI- oder Werbezwecken.
- Spam-Schutz ohne übermäßiges Tracking.
- Möglichkeit, sensible Felder auszuschließen und Uploads zu deaktivieren.

### Option D: Eigenes Backend / EU-Hosting / Datenbank / gesicherter Zugang

| Kriterium | Bewertung |
|---|---|
| DSGVO-Risiko | Bei sauberem Setup kontrollierbar, aber hohe Verantwortung. |
| Aufwand | Hoch. |
| Kosten | Mittel bis hoch. |
| Technische Komplexität | Hoch. |
| Eignung für MPU-sensitive Daten | Am ehesten geeignet, wenn professionell umgesetzt. |
| AV-Vertrag nötig | Ja, mit Hosting-/Mail-/Storage-Anbietern. |
| EU/EWR-Verarbeitung | Gut umsetzbar, sollte bevorzugt werden. |
| Einwilligungsnachweis | Sehr gut umsetzbar. |
| Löschfristen | Sehr gut steuerbar, wenn von Anfang an eingeplant. |

Bewertung: Für spätere sensible Fallanalyse technisch am saubersten, aber für den Start zu komplex.

Mindestanforderungen:

- EU/EWR-Hosting.
- Rollen- und Rechtekonzept.
- Verschlüsselung.
- Audit-Logs ohne sensible Inhalte.
- Löschkonzept.
- Zugangsschutz.
- Keine sensiblen Daten in GitHub oder statischen Dateien.
- Dokumentierte TOMs.
- Datenschutz-Folgenabschätzung prüfen.

### Option E: Externer Terminbuchungsanbieter + E-Mail-Kommunikation

| Kriterium | Bewertung |
|---|---|
| DSGVO-Risiko | Mittel. Terminbuchung verarbeitet Kontakt- und Termindaten, Freitext kann sensibel werden. |
| Aufwand | Niedrig bis mittel. |
| Kosten | Niedrig bis mittel. |
| Technische Komplexität | Niedrig bis mittel. |
| Eignung für MPU-sensitive Daten | Nur für Terminorganisation, nicht für Fallinhalte. |
| AV-Vertrag nötig | Ja, sofern Anbieter im Auftrag verarbeitet. |
| EU/EWR-Verarbeitung | Anbieter muss geprüft werden. |
| Einwilligungsnachweis | Teilweise möglich, abhängig vom Anbieter. |
| Löschfristen | Anbieterabhängig. |

Bewertung: Für Erstgespräch-Termine praktisch, aber nur mit sehr knappem Formular: Name, E-Mail, Telefon optional, Terminwunsch. Kein Fallbericht, keine Dokumente.

## 5. Klare Empfehlung für die aktuelle Situation

### Empfehlung kurz

Für den Start: Option A, ergänzt durch klare Kontaktregeln und ohne Website-Formular für sensible MPU-Daten.

Falls ein Formular unbedingt gewünscht ist: Option B als minimales allgemeines Kontaktformular, aber erst nach Auswahl eines geprüften EU/EWR-tauglichen Formular-/Backend-Anbieters mit AV-Vertrag. Keine Uploads. Keine sensiblen Pflichtfelder. Keine automatische MPU-Fallanalyse über Standardformular.

### Warum

- Die Website läuft aktuell statisch. Das passt gut zu einem risikoarmen Start.
- Es gibt noch keinen geprüften Formularanbieter und keine Backend-Struktur.
- MPU-Daten können schnell Art.-9- oder Art.-10-Relevanz bekommen.
- Ein normales Freitextformular kann trotz guter Absicht sensible Inhalte einsammeln.
- Uploads wären für diese Website besonders riskant.
- Eine sichere Fallanalyse sollte erst nach Erstkontakt über einen abgestimmten, geschützteren Weg erfolgen.

## 6. Entscheidung

### EMPFEHLUNG

Anbieter/Ansatz: Kein Formularanbieter für den Start. Erst allgemeine Kontaktaufnahme per klar benannter E-Mail/Telefon und optional später geprüfter Terminbuchung. Wenn Formular, dann nur Minimalformular für allgemeine Anfragen mit EU/EWR-Verarbeitung, AV-Vertrag und ohne Uploads.

### Warum

- Niedrigstes Risiko bei statischer Website.
- Keine unnötige Verarbeitung sensibler MPU-Daten.
- Keine Abhängigkeit von ungeprüften Formularanbietern.
- Datenschutzfreundlicher Start ohne technische Komplexität.
- Sensible Fallanalyse kann später kontrolliert und dokumentiert aufgebaut werden.

### Was muss in die Datenschutzerklärung eingetragen werden

Mindestens ergänzen:

- Verantwortlicher Betreiber mit vollständigen Kontaktdaten.
- Hosting/GitHub Pages bzw. finaler Hostinganbieter inklusive technischer Zugriffsdaten.
- Kontaktaufnahme per E-Mail/Telefon: Zwecke, Rechtsgrundlage, Datenarten, Speicherdauer.
- Digistore24 bzw. Zahlungs-/Checkout-Anbieter, falls final genutzt.
- Simulator/MPU-Check: Erklärung, ob Antworten nur lokal im Browser verarbeitet werden oder wohin sie übertragen werden.
- Mailto-Funktion: Hinweis, dass beim E-Mail-Versand das eigene Mailprogramm und Mailanbieter des Nutzers beteiligt sind.
- Keine Uploads und keine Aufforderung zur Übermittlung sensibler Unterlagen über normale Kontaktwege.
- Betroffenenrechte.
- Löschfristen.
- Empfänger/Auftragsverarbeiter.
- Drittlandtransfers, falls Anbieter außerhalb EU/EWR beteiligt sind.

### Welche Formular-Checkboxen brauchen wir

Bei einem späteren allgemeinen Kontaktformular:

- Pflichtcheckbox: "Ich habe die Datenschutzerklärung gelesen und bin mit der Verarbeitung meiner Angaben zur Bearbeitung meiner Anfrage einverstanden."
- Pflicht-Hinweis direkt am Nachrichtenfeld: "Bitte senden Sie hier keine Gutachten, Abstinenznachweise, medizinischen Unterlagen, Strafakten oder detaillierten Angaben zu Alkohol, Drogen, Gesundheit, Psyche oder Strafverfahren."
- Keine Marketing-Checkbox vorausgewählt.
- Separate freiwillige Marketing-Einwilligung nur falls Newsletter/werbliche Nachfass-E-Mails geplant sind.

Bei einem späteren sensiblen MPU-Fallanalyseformular:

- Separate ausdrückliche Einwilligung für besondere Kategorien personenbezogener Daten, falls solche Daten wirklich abgefragt werden.
- Separater Hinweis zu Art, Zweck, Umfang, Empfängern, Speicherdauer und Widerruf.
- Keine Kopplung an unnötige Zwecke.
- Protokollierung von Einwilligungszeitpunkt, Textversion und Formularversion.

### Welche Daten dürfen abgefragt werden

Für Start / allgemeines Kontaktformular:

- Name.
- E-Mail.
- Telefonnummer optional.
- Kurze allgemeine Nachricht.
- Wunsch nach Rückruf oder Erstgespräch.
- Grobe Auswahl: Koffer, Simulator, Coaching, allgemeine Frage.

Für Terminbuchung:

- Name.
- E-Mail.
- Telefonnummer optional.
- Terminwunsch.
- Zeitzone, falls nötig.
- Kein Freitext oder nur stark begrenzter Freitext mit Warnhinweis.

### Welche Daten dürfen NICHT abgefragt werden

Nicht über normales Website-Formular:

- MPU-Gutachten.
- Abstinenznachweise.
- Laborberichte.
- Strafakten.
- Führerscheinstellen-Akten.
- Gerichtliche Unterlagen.
- Medizinische Unterlagen.
- Psychologische Diagnosen oder Therapieangaben.
- Detaillierte Alkohol-/Drogenhistorie.
- Vollständige Verkehrsverstoßhistorie.
- Aktenzeichen, sofern nicht absolut notwendig und gesichert.
- Dokumenten-Uploads.

### Welche Abschnitte in der Datenschutzerklärung bleiben / entfernt / angepasst werden sollten

Bleiben:

- Verantwortlicher.
- Kontaktanfragen.
- Hosting.
- Zahlungsanbieter.
- Betroffenenrechte.
- Speicherdauer/Löschung.

Anpassen:

- Kontaktanfragen konkret auf aktuelle Kontaktwege beschreiben.
- Simulator/Check konkret beschreiben: lokale Verarbeitung vs. E-Mail-Versand vs. späteres Backend.
- Hinweis aufnehmen, dass keine sensiblen Unterlagen über allgemeine Kontaktwege eingereicht werden sollen.
- Digistore24 nur dann konkret aufführen, wenn final produktiv verwendet.
- Hosting final auf tatsächlichen Anbieter anpassen.

Entfernen / nicht aufnehmen:

- Formularanbieter-Abschnitt, solange kein Formularanbieter genutzt wird.
- Upload-Abschnitt, solange keine Uploads angeboten werden.
- Newsletter/Marketing-Abschnitt, solange kein Newsletter existiert.
- Tracking-/Analytics-Abschnitt, solange kein Tracking eingebaut ist.

### Welche nächsten Schritte nötig sind

1. Final entscheiden: Start ohne Formularanbieter.
2. Impressum mit echten Betreiberkontaktdaten finalisieren.
3. Datenschutzerklärung mit Hosting, Kontakt, Zahlungsanbieter und Simulator-Logik finalisieren.
4. Kontaktbereich der Website so formulieren, dass keine sensiblen Unterlagen angefordert werden.
5. Falls E-Mail-Link genutzt wird: Hinweis ergänzen, dass sensible Dokumente erst nach Absprache über einen geeigneten Weg übermittelt werden sollen.
6. `email` als URL-Parameter für echte Produktion kritisch prüfen und möglichst vermeiden.
7. `mailto:`-Auswertung beim Simulator kritisch prüfen, weil sie Antwortprotokolle in ein E-Mail-Programm übergibt.
8. Vor echtem sensiblen Fallanalyseformular: Anbieter-/Backend-Auswahl, AV-Vertrag, Löschkonzept, TOMs, Einwilligungstexte, Zugriffsschutz und mögliche DSFA prüfen.

## 7. Konkrete Textbausteine für spätere Datenschutzerklärung

### Kontaktaufnahme

Bei Ihrer Kontaktaufnahme mit uns per E-Mail, Telefon oder einem später bereitgestellten Kontaktformular verarbeiten wir die von Ihnen mitgeteilten Kontaktdaten und Inhalte Ihrer Anfrage, um diese zu beantworten und gegebenenfalls ein Erstgespräch vorzubereiten. Bitte übermitteln Sie über allgemeine Kontaktwege keine Gutachten, Abstinenznachweise, medizinischen Unterlagen, Strafakten oder vollständigen MPU-Fallakten.

### Allgemeines Kontaktformular

Das Kontaktformular dient ausschließlich allgemeinen Anfragen. Pflichtangaben sind auf das notwendige Minimum beschränkt. Wir bitten ausdrücklich darum, keine sensiblen Gesundheitsdaten, Angaben zu Alkohol- oder Drogenkonsum, psychischen Themen, strafrechtlichen Vorgängen oder behördlichen/medizinischen Dokumente über dieses Formular zu senden.

### MPU-Check / Simulator

Der MPU-Check bzw. Simulator dient der digitalen Selbsteinschätzung und Vorbereitung. Sofern die Antworten nur lokal im Browser verarbeitet werden, findet keine serverseitige Speicherung durch uns statt. Wird eine Auswertung per E-Mail vorbereitet oder versendet, können die eingegebenen Daten und Antworten über das jeweilige E-Mail-System verarbeitet werden.

### Keine Uploads

Über die Website werden keine Dokumenten-Uploads für Gutachten, Abstinenznachweise, ärztliche Unterlagen, Behördenakten oder sonstige Nachweise angeboten. Eine Übermittlung solcher Unterlagen erfolgt nur nach vorheriger Abstimmung über einen geeigneten sicheren Weg.

## 8. Formularregeln für die Umsetzung

### Allgemeines Kontaktformular

- Maximalfelder: Name, E-Mail, Telefon optional, Betreff/Kategorie, kurze Nachricht.
- Kein Upload.
- Kein Geburtsdatum.
- Keine Adresse als Pflichtfeld.
- Keine Führerscheinnummer.
- Keine Aktenzeichen.
- Keine Pflichtauswahl zu Alkohol/Drogen/Straftaten.
- Klare Warnung vor sensiblen Angaben über dem Freitextfeld.
- Datenschutzcheckbox als Pflichtfeld.
- Server-/Provider-Logs ohne sensible Inhalte.
- Spam-Schutz möglichst datensparsam.
- Formular-Submission nicht in GitHub Issues, öffentlichen JSON-Dateien oder statischen Artefakten speichern.

### MPU-sensitive Formulare

- Nicht in Phase 1 umsetzen.
- Nur mit geprüfter Rechtsgrundlage, ausdrücklicher Einwilligung, AV-Verträgen, Zugriffsschutz, Löschkonzept und dokumentierten TOMs.
- Falls Uploads später nötig werden: nur in einem gesicherten Portal, nicht in einem normalen Formularanbieter-Postfach.

## 9. Offene Fragen an den Kunden

1. Welche echte Kontakt-E-Mail und Telefonnummer sollen im Impressum und Kontaktbereich verwendet werden?
2. Soll es am Anfang überhaupt ein Formular geben oder nur E-Mail/Telefon?
3. Wird ein externer Terminbuchungsanbieter gewünscht?
4. Sollen Kunden nach dem Simulator ihre Auswertung wirklich per E-Mail erhalten, oder reicht eine Anzeige auf der Seite?
5. Wer beantwortet Kontaktanfragen und wer darf sensible Fälle sehen?
6. Welche Löschfrist soll für allgemeine Kontaktanfragen gelten?
7. Welche Löschfrist soll für zahlungsbezogene Kommunikation gelten?
8. Gibt es bereits einen E-Mail-Anbieter mit AV-Vertrag und EU/EWR-Option?
9. Soll später ein gesichertes Kundenportal für sensible Unterlagen geplant werden?
10. Wer übernimmt die finale rechtliche Prüfung der Datenschutzerklärung?

## 10. Quellen / Orientierung

- European Data Protection Board, Data protection basics: personenbezogene Daten, besondere Kategorien, Art.-10-Daten, Grundsätze wie Datenminimierung, Zweckbindung, Speicherbegrenzung und Sicherheit.
  https://www.edpb.europa.eu/sme-data-protection-guide/data-protection-basics_en
- European Data Protection Board, Data controller or data processor: Rollen von Verantwortlichem und Auftragsverarbeiter.
  https://www.edpb.europa.eu/sme-data-protection-guide/data-controller-data-processor_en
- European Data Protection Board, Secure personal data: risikoorientierte Sicherheitsmaßnahmen.
  https://www.edpb.europa.eu/sme-data-protection-guide/secure-personal-data_en
- European Data Protection Board, International data transfers: Schutz bei Transfers außerhalb des EWR.
  https://www.edpb.europa.eu/sme-data-protection-guide/international-data-transfers_en
- BfDI-Muster zur Auftragsverarbeitung als Orientierung für AV-Verträge.
  https://www.bfdi.bund.de/SharedDocs/Downloads/DE/Muster/Muster_zur_Auftragsverarbeitung.pdf
- DSGVO Art. 9, Art. 10, Art. 13, Art. 28, Art. 32 als rechtliche Referenzpunkte für die finale juristische Prüfung.
  https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679
