if (typeof LANG_CONTENT === 'undefined') LANG_CONTENT = []

LANG_CONTENT[LANG_DE] = {
    CONFIG_FUNCTION_TITLE: "Funktionen",
    NOT_REGULAR_PAGE: "HExBot: es läuft nix. Dies ist keine normale Gameseite",
    CONTROL_PANEL_TITLE: "Hacker Experience Bot",
    PERFORM_MEDIUM_MISSIONS: "Mittlere Missionen",
    PERFORM_HARD_MISSIONS: "Harte Missionen",
    PERFORM_DELETE_SOFTWARE: "Sehr einfache Missionen",
    NOTIFY_MISSIONS: "Informier mich über neue Missionen",
    NOTIFY_NAME: "Benachrichtigen mit Namen des Hackers",
    AUTO_CHANGE_IP: "Ändern Sie die IP-Adresse, wenn jemand automatisch in Sie eindringt",
    DDOS_DELETE: "DDoS Reports löschen",
    INTERCEPT_TRANSACTIONS: "Bank Transaktionen abfangen bei ",
    TRANSFER_TO_BTC: "Übertrag das verdiente Geld auf dein Bitcoin Konto",
    CLEAN_OWN_LOGS: "Eigene Logs löschen",
    CLEAN_VICTIM_LOGS: "Opfer Logs löschen",
    ACCESS_CLEAR: "Brute-Force und klare Protokolle",
    ACCESS_CLEAR_PORT: "Protokolle Exploit und löschen",
    NOTIFY_LOGS: "Über verdächtige Aktivitäten in deinen Logs informieren",
    RUN_WEBCRAWLER: "Starte Webcrawler",
    PASTE_IPS: "Text mit IPs",
    SECONDS: "Sekunden",
    WEBCRAWLER_INITIAL_HOSTS: "startend mit diesen IPs:",
    WEBCRAWLER_IGNORE_HOSTS: "Ignorier diese IPs:",
    WEBCRAWLER_UPLOAD_SOFTWARES: "Lade diese Software hoch:",
    WEBCRAWLER_UPLOAD_WAIT: "Warte bis",
    WEBCRAWLER_EXPLOIT: "Verwenden Sie Exploits anstelle von Brute-Force",
    WEBCRAWLER_SKIP_AFTER_UPLOAD: "Installier gleich nach dem hochladen, und lösche die Logs erst nach dem Installieren.",
    WEBCRAWLER_HIDE_UPLOAD: "Versteck die Software nach dem installieren",
    WEBCRAWLER_LEAVE_SIGNATURE: "Hinterlass meine Signatur",
    WEBCRAWLER_FIND_SIGNATURE: "(Finde andere Signaturen)",
    WEBCRAWLER_FILTER_WITH: "Filter den Inhalt mit dem RegEx (z.B.  .*\\.crc.*  oder  .*\\.vcol.*  oder  .*irgendetwas.*)",
    REQUEST_ASSIT: "Hilfe anfordern",
    CREDITS_TITLE: "Danksagung",
    CREDITS_cmathiswausau: "Domain repariert auf manifest.json Datei",
    CREDITS_dominicusdev: "Massive Code reorganisation und Bugfixes",
    CREDITS_gresendesa: "Framework implementation, Puzzlelöser, Webcrawler, Benachrichtigungen und Übersetzung in Portugisisch & Deutsch ",
    CREDITS_Klorker: "Code Überarbeitung, neue visuelle Funktionen und Logsäuberer",
    CREDITS_perfilrobo: "Missionslöser, Hochlader und Bankcamping (Erst und Hauptprogrammierer)",
    CREDITS_Quartz101: "Performanceüberarbeitung",
    CREDITS_sjs1985: "Software upload Verbesserungen, zwei neue Checkboxen hinzugefügt",
    CREDITS_fkapitalism: "Einstellungsbereich und Webcrawler scripts sandbox",
    CREDITS_AssHole12: "Übersetzung in Deutsch",
    CREDITS_OTHERS: "und viele andere Leute welche mithalfen mit Vorschlägen und Bugs meldeten.",
    CREDITS_BACK_BUTTON: "Zurück",
    REPOSITORY_LINK: '<b>version ' + VERSION_BOT + '</b> neuste Versionen auf <a href="https://github.com/R34P3R5/BetterHExBot" target="_blank">offiziellen Repository</a> oder besuch unser <a href="https://hexbotwiki.000webhostapp.com/" target="_blank">Wiki</a>',
    WARNING_BUTTON: 'IMPORTANT!\n\n *Um  Puzzles zu lösen, geh zu einer UNGELÖSTEN Puzzle Seite und klick auf den Blaue Button welcher erscheint.\n\n*Vermeide es den Bot in einem inaktiven Tab laufen zu lassen. In den meisten Browsern  gibt es Zeitlimitierungen wenn der Tab inaktiv ist. So wird der Bot vielleicht langsam, wenn er in einem inaktiven Tab läuft.\n\n* Benutze die Benachrichtigungen verantwortungsvoll. Der verdächtige Aktivitäten in den Logs Benachrichtiger sendet ununterbrochen jede Sekunde eine GET-Anfrage. Der neue Missionen Benachrichtiger sendet alle 2 Sekunden eine GET-Anfrage, nur wenn der neue Missionen in Zähler kleiner oder gleich 1 ist. Sonst wartet er nur. Viele Anfragen werden eventuell vom Gameserver erkannt. \'X-Requested-With\' header wird nicht mitgesendet. :)\n\n* Stop den Bot jederzeit. Klick einfach auf den Roten Button. \n\n* Wenn der Bot plötzlich stoppt, versuch einfach die Seite neuzuladen. Wenn es danach nicht funktioniert, stopp den Bot. Wenn du weißt wie man die Browser Konsole aufrufen kann, kopiere den error und/oder jSpaghetti debug Logs und melde das Problem bei der offiziellen Repository.',
    DISCONNECTED_BTC_WALLET: 'Du hast ausgewählt das verdiente Geld auf dein Bitcoin Wallet zu transferieren. Aber du musst dich davor in deinem Bitcoin Wallet anmelden. Bitte log dich in dein Bitcoin Konto ein und versuche es erneut.',
    CAMPING_WITHOUT_VINCULATED_ACCOUNT: 'Es gibt kein Bankaccount welcher Verknüpft ist mit {CONTENT}',
    CAMPING_CHOOSE_IP: 'Wähle eine Bank IP',
    MISSIONS_PERMISSION_TO_ABORT: 'Erlaubst du dem Bot Missionen abzubrechen wenn es nötig ist? (Abbrechen heißt Nein)',
    MISSIONS_WEAK_CRACKER: 'Dein Cracker ist nicht stark genug um weiterzumachen.',
    MISSION_ANOTHER_MISSION_KIND_ALREADY_ACCEPTED: 'Es sieht so aus, als hättest du eine andere Mission am laufen. Beende oder brech sie ab, und versuch es erneut.',
    WEBCRAWLER_SINTAX_SOFTWARE_FIELD: 'Ops. Prüf das Software Feld. \nVergewisser dich dass der Software-Name und die Software-Version mit \":\" seperiert sind\":\". \nNutze \",\" um verschiedene Softwares zu seperieren.',
    WEBCRAWLER_SOFTWARE_NOT_FOUND: 'Software "{CONTENT1}" Version "{CONTENT2}" wurde nicht gefunden',
    WEBCRAWLER_UPLOAD_SOFTWARE_MODEL: '{name:version}, ...',
    WEBCRAWLER_RESULTS_IPS_FOUND: '## NEUE IPS GEFUNDEN ## ',
    WEBCRAWLER_RESULTS_ACCESSIBLE_HOSTS: '## ZUGÄNGLICHE HOSTS ##',
    WEBCRAWLER_RESULTS_INACCESSIBLE_HOSTS: '## UNZUGÄNGLICHE HOSTS ## ',
    WEBCRAWLER_RESULTS_NOVPC: '## keineVPC LIST ## ',
    WEBCRAWLER_RESULTS_UNCHECKED_HOSTS: '## UNGECHECKTE HOSTS ## ',
    WEBCRAWLER_RESULTS_UPLOADS: '## UPLOADS ##',
    WEBCRAWLER_RESULTS_BTC: '## BTC LOGS ## ',
    WEBCRAWLER_RESULTS_SHOPPING: '## SHOPPING LOGS ## ',
    WEBCRAWLER_RESULTS_SOFTWARES: '## SOFTWARES GEFUNDEN ##',
    WEBCRAWLER_SCRIPT_TITLE: 'Webcrawler Skript',
    UPDATE_CRACKER: "Löse Puzzles und verbessere dein Cracker",
    COMPLETE_PATH_ERROR: "Du musst dich zuerst in einen Puzzle Server einloggen, bevor du diese Funktion nutzt!",
    CONFIG_AREA_TITLE: "Einstellungen",
    CONFIG_GENERAL_TITLE: "Allgemein",
    CONFIG_NOTIFIERS_TITLE: "Benachrichtigung",
    CONFIG_WEBCRAWL_TITLE: "Webcrawler",
    CONFIG_POPUP_BOT: "Öffne das Bot Fenster nach den Instruktionen",
    CONFIG_LANG_NAME: "Sprache",
    SEND: "Send",
    INSERT_EMAIL: "Enter Your Email",
    SEND_USERNAME: "Send Your Username and Invasor IP To Monarchs",
    SEND_IP: "Send Invasor IP To Monarchs",
    ASK_PROTECTION_CONFIRM: "Bist du dir sicher?\nDein Name und IP wird an den Monarchs Discord gesendet!",
    IP_RESETED_SUECCESFULY: "IP Reset Erfolgreich!",
    NEW_INTRUDER: "Neuer Hacker!",
    NEW_INTRUDER_TEXT: "Du wurdest gehackt von ",
    RUN_DDOSER: "Starte DDoS",
    DDOS_IP: "Anzugreifende IP: ",
    DDOS_HOST: "Anzahl der Angriffe:",
	NOTIFICATION_TITLE: "Thanks To Enable Notification!",
	NOTIFICATION_BODY: "Now you Able to get Notified!"
}
