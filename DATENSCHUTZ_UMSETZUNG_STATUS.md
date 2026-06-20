# Datenschutz Umsetzung Status

Stand: 20.06.2026

Diese Datei dokumentiert die technische Umsetzung im Projekt. Sie ist keine Rechtsberatung und ersetzt keine finale juristische Prüfung.

## Welche Datenschutzseite wurde eingebaut?

- Eingebaut wurde die beigefügte Datenschutzerklärung als statische Seite `datenschutz.html`.
- Die Seite ist an den aktuell erkennbaren technischen Stand des Projekts angepasst.
- Es wurde nichts live deployt.
- Es wurden keine neuen Anbieter, Accounts, API-Keys, Tokens, Passwörter oder Kundendaten eingefügt.

## Welche Abschnitte wurden angepasst oder entfernt?

- Abschnitt 13 „Formulare, Formularanbieter und technische Übermittlung“ wurde nicht mit Anbieter-Platzhaltern übernommen.
- Abschnitt 13 wurde durch den aktuellen Stand ersetzt: Auf der Website werden derzeit keine Formulardaten über einen Formularanbieter oder Backend-Dienst verarbeitet.
- Der Abschnitt zu Terminbuchung, Videocalls und Kommunikationstools wurde entfernt, weil aktuell kein solcher Anbieter im Code erkennbar ist.
- Der unbekannte konkrete Maildienst wurde nicht als Anbieter-Platzhalter übernommen.
- Die E-Mail-Kommunikation ist neutral beschrieben: Für die E-Mail-Kommunikation wird der vom Verantwortlichen eingesetzte E-Mail-Dienst genutzt.
- Die Simulatorbeschreibung wurde an den aktuellen Stand angepasst: Der Simulator läuft im Browser und der E-Mail-Link darf nur eine neutrale allgemeine Anfrage öffnen.
- Hinweise zu sensiblen MPU-Daten, Art. 9 DSGVO, strafrechtlichen Angaben, Unterlagen, Uploads und sicheren Übermittlungswegen wurden beibehalten und auf den aktuellen Stand eingeordnet.
## Gibt es noch Platzhalter?

Ja. Es bleiben nur Pflicht-Platzhalter offen, bei denen echte Kundendaten fehlen:

- Vollständiger rechtlicher Name / Firma
- Straße und Hausnummer
- PLZ und Ort
- E-Mail-Adresse
- Telefonnummer, falls vorhanden
- Domain
- Name der zuständigen Datenschutzaufsichtsbehörde
- Anschrift der zuständigen Datenschutzaufsichtsbehörde
- Website der zuständigen Datenschutzaufsichtsbehörde

Es wurden keine sichtbaren Anbieter-Platzhalter für Formular-, Backend-, Termin-/Kalender-, Videocall-, Kommunikations- oder Maildienste belassen.

## Gibt es aktuell einen Formularanbieter?

NEIN.

Aktuelle technische Prüfung:

- Kein echtes Kontaktformular im Code gefunden.
- Kein Erstgespräch-Formular im Code gefunden.
- Kein Formularanbieter oder Formular-Backend im Code gefunden.
- Kein Upload-Feld im Code gefunden.
- Keine direkte Website-Absende-Funktion für Formulardaten gefunden.

## Gibt es aktuell Terminbuchung, Videocall, WhatsApp oder Kalenderanbieter?

NEIN.

Aktuelle technische Prüfung:

- Kein externer Terminbuchungsanbieter im Code gefunden.
- Kein Kalenderanbieter im Code gefunden.
- Kein Videocall-Tool im Code gefunden.
- Kein WhatsApp-Link im Code gefunden.
- Kein Telefonlink im Code gefunden.

## Gibt es noch sensible Daten in mailto oder URL-Parametern?

NEIN.

Aktuelle technische Prüfung:

- Der Simulator-Mailto enthält keine Simulatorantworten.
- Der Simulator-Mailto enthält keine Risikowerte.
- Der Simulator-Mailto enthält keine Auswertung.
- Der Simulator-Mailto enthält kein Antwortprotokoll.
- Der Simulator-Mailto öffnet nur eine neutrale allgemeine Anfrage.
- Es wird keine E-Mail-Adresse mehr aus `?email=` gelesen.
- Es wurden keine sensiblen MPU-Daten in URL-Parametern gefunden.

Hinweis: `?access=paid` wird weiterhin als einfacher Demo-/Zugangsparameter für die Simulatorseite verwendet. Das ist nach aktueller Prüfung kein sensibler personenbezogener Wert, aber keine sichere produktive Kaufprüfung.

## Datenschutzseite passend zum aktuellen technischen Stand?

JA.

Die Datenschutzseite passt zum aktuellen Stand:

- statische Website
- GitHub-Pages-Kontext
- Digistore24-Checkout-Links
- kein Website-Formularanbieter
- kein Formular-Backend
- kein Upload
- kein Terminbuchungsanbieter
- kein Videocall-Tool
- kein WhatsApp-Link
- neutraler Simulator-Mailto

## Was muss vor Livegang noch geprüft oder ergänzt werden?

- Vollständige Betreiberangaben eintragen.
- Zuständige Datenschutzaufsichtsbehörde eintragen.
- Impressum und Datenschutz mit echten Kundendaten abgleichen.
- Finale rechtliche Prüfung durchführen lassen.
- Prüfen, ob GitHub Pages tatsächlich der produktive Hostinganbieter bleibt.
- Prüfen, ob Digistore24 produktiv genau so eingesetzt wird.
- Falls später ein Formular, Backend, Terminbuchung, Videocall-Tool, WhatsApp, Upload oder Kundenportal eingebaut wird, muss die Datenschutzerklärung vorher erneut angepasst werden.
