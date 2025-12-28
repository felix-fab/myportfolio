// Internationalization System
const translations = {
    de: {
        nav: {
            home: 'Startseite',
            about: 'Über mich',
            references: 'Referenzen',
            projects: 'Projekte',
            contact: 'Kontakt'
        },
        home: {
            greeting: 'Hey, hier bin ich',
            iam: 'Ich bin',
            description: 'Lass uns gemeinsam smarte Lösungen entwickeln und die digitale Welt gestalten – mit Felix Wiegand.',
            portfolio: 'Mein Portfolio'
        },
        about: {
            title: 'Über',
            titleHighlight: 'Mich',
            subtitle: 'Anwendungsentwickler',
            description: 'Schon früh habe ich meine Leidenschaft für Softwareentwicklung entdeckt und mich seit der 8. Klasse intensiv mit Programmierung beschäftigt. Nach meinem Realschulabschluss habe ich eine Ausbildung als Fachinformatiker für Anwendungsentwicklung bei der StepAhead GmbH absolviert. Dort konnte ich in einem agilen Team an der Webanwendung <strong>mySteps</strong> mitarbeiten und wertvolle Erfahrungen in HTML, CSS und JavaScript sammeln. Aktuell studiere ich Angewandte Informatik an der Hochschule in Mainz. Nebenbei arbeite ich als Werkstudent weiterhin als DevOps Entwickler. <strong>Mein Ziel:</strong> Innovative Softwarelösungen entwickeln und mich stetig weiterentwickeln.'
        },
        references: {
            title: 'Meine',
            titleHighlight: 'Referenzen',
            moreBtn: 'Mehr ansehen',
            ref1: {
                title: 'Studium',
                time: 'Aktuell',
                desc: 'Nach meinem Fachabitur an der Konrad-Zuse-Schule in Hünfeld habe ich das Studium Angewandte Informatik an der Hochschule Mainz begonnen. Dort möchte ich mein Wissen vertiefen und innovative Softwarelösungen entwickeln.'
            },
            ref2: {
                title: 'DevOps Entwickler',
                time: 'StepAhead GmbH',
                desc: 'Nach meinem Fachabitur war ich bei der StepAhead GmbH als Entwickler tätig und arbeitete im agilen Team an der Konzeption und Umsetzung neuer Funktionen im MMS-Modul sowie an Erweiterungen der Plattform der Webanwendung mySteps.'
            },
            ref3: {
                title: '2nd Level Supporter',
                time: 'StepAhead GmbH',
                desc: 'Als Second-Level Supporter bei der StepAhead GmbH unterstütze ich die Nutzer der mySteps-Plattform bei technischen Problemen. Dabei analysiere ich Fehler, finde Lösungen und sorge für eine reibungslose Nutzung der Software.'
            },
            ref4: {
                title: 'Web Entwickler',
                time: 'StepAhead GmbH',
                desc: 'Nach meiner Ausbildung arbeitete ich als Entwickler bei der StepAhead GmbH, wo ich im agilen Team an der Webanwendung mySteps mitwirkte und praktische Erfahrungen in der Softwareentwicklung sammelte.'
            },
            ref5: {
                title: 'Fachabitur',
                time: '2025 - 2024',
                desc: 'Ich absolviere mein Fachabitur an der Konrad-Zuse-Schule in Hünfeld, um meine Kenntnisse in IT und allgemeinen Fächern zu vertiefen. Diese Ausbildung bereitet mich bestens auf mein geplantes Informatikstudium an der Hochschule Mainz vor.'
            },
            ref6: {
                title: 'Ausbildung',
                time: '2024 - 2021',
                desc: 'Während meiner Ausbildung zum Fachinformatiker für Anwendungsentwicklung bei der StepAhead GmbH lernte ich die Grundlagen der Softwareentwicklung und arbeitete in einem agilen Team an der Webanwendung mySteps mit.'
            }
        },
        featured: {
            title: 'Aktuelle',
            titleHighlight: 'Projekte',
            detailsBtn: 'Details ansehen',
            upthoughts: {
                title: 'UpThoughts',
                desc: 'Eine Mobile App, mit der du wichtige Gedanken und Zitate speichern und dich regelmäßig daran erinnern lassen kannst.'
            },
            homelab: {
                title: 'Homelab',
                desc: 'Ich betreibe einen Home-Server mit einem PC, einer NAS und einer USV, auf dem mehrere Dienste und Programme zuverlässig laufen.'
            }
        },
        projects: {
            title: 'Letzte',
            titleHighlight: 'Projekte',
            moreDetails: 'Für mehr Details hier klicken:',
            showMore: 'Mehr anzeigen',
            showLess: 'Weniger anzeigen',
            comingSoon: 'Coming Soon',
            videoError: 'Dein Browser unterstützt kein HTML5-Video.'
        },
        contact: {
            title: 'Kontaktiere',
            titleHighlight: 'Mich',
            firstName: 'Vorname',
            lastName: 'Nachname',
            email: 'E-Mail Adresse',
            mobile: 'Mobile Number',
            subject: 'Betreff',
            message: 'Nachricht',
            send: 'Senden'
        },
        modal: {
            success: 'Erfolg!',
            successMessage: 'Deine Nachricht wurde erfolgreich gesendet. Ich melde mich schnellstmöglich bei dir!',
            ok: 'OK',
            errorMessage: 'Ein unbekannter Fehler ist aufgetreten.'
        },
        footer: {
            home: 'Startseite',
            about: 'Über mich',
            references: 'Referenzen',
            projects: 'Projekte',
            contact: 'Kontakt',
            privacy: 'Datenschutz',
            imprint: 'Impressum'
        },
        typewriter: {
            texts: [
                'Innovativer Entwickler',
                'Web & Software Engineer',
                'Lösungsarchitekt',
                'Agiler Teamplayer',
                'Tech-Begeisterter',
                'UX-Treiber mit Blick fürs Frontend',
                'Systemarchitekt aus Leidenschaft'
            ]
        },
        details: {
            backLink: 'Zurück',
            moreInformation: 'Weitere Informationen',
            posts: {
                "0001": {
                    title: "Studium in Mainz",
                    header: "Studium der angewandten Informatik in Mainz",
                    content: "<p>Nach dem Abschluss meines Fachabiturs habe ich das Studium der <strong>Angewandten Informatik</strong> an der <strong>Hochschule Mainz</strong> begonnen. Dieser Schritt war für mich der nächste logische Schritt, um meine Kenntnisse in der <strong>Softwareentwicklung</strong> weiter zu vertiefen und mich auf die vielfältigen Herausforderungen der <strong>IT-Welt</strong> vorzubereiten. Die Hochschule Mainz bietet mit ihrem <strong>praxisorientierten Ansatz</strong> und den modernen Studieninhalten eine ideale Basis, um mein technisches Wissen auszubauen und neue Fähigkeiten zu erlernen. <br><br> Besonders interessiert mich der Bereich der <strong>Anwendungsentwicklung</strong> und die Möglichkeiten, innovative <strong>Softwarelösungen</strong> zu entwickeln, die in der realen Welt angewendet werden können. Ich freue mich darauf, tiefer in Themen wie <strong>Datenbanken</strong>, <strong>künstliche Intelligenz</strong> und <strong>IT-Sicherheit</strong> einzutauchen und mein Verständnis für komplexe Systeme zu erweitern. <br><br> Darüber hinaus bin ich gespannt auf die <strong>praxisorientierten Projekte</strong> und die Zusammenarbeit mit anderen <strong>Studierenden</strong> und <strong>Unternehmen</strong>. Diese Erfahrungen werden mir helfen, sowohl meine <strong>technischen</strong> als auch meine <strong>kommunikativen Fähigkeiten</strong> weiter auszubauen. <br><br> Insgesamt ist mein Ziel, nach dem Studium in der <strong>Softwareentwicklung</strong> zu arbeiten und mit meiner <strong>Expertise</strong> zur Gestaltung zukunftsweisender, digitaler Lösungen beizutragen. Die Hochschule Mainz bietet dafür den <strong>perfekten Rahmen</strong>.</p>",
                    sourceTitle: "Hochschule Mainz"
                },
                "0002": {
                    title: "Dev Ops Entwickler",
                    header: "Dreimonatige Vollzeitarbeit als DevOps Entwickler für die mySteps-Plattform bei der StepAhead GmbH",
                    content: "<p>Nach meinem <strong>Fachabitur</strong> begann ich meine berufliche Laufbahn bei der <strong>StepAhead GmbH</strong>, wo ich in Vollzeit als <strong>Softwareentwickler</strong> tätig war. In einem <strong>interdisziplinären, agilen Team</strong> wirkte ich an der kontinuierlichen Weiterentwicklung der <strong>Webanwendung mySteps</strong> mit, die Unternehmen dabei unterstützt, zentrale Geschäftsprozesse effizient und vollständig browserbasiert abzubilden.</p> <p>Mein Schwerpunkt lag auf der technischen Umsetzung neuer Funktionen innerhalb des <strong>MMS-Moduls</strong> (Material Management System) sowie auf strukturellen Erweiterungen der <strong>Plattformarchitektur</strong>. Dabei arbeitete ich sowohl an bestehenden Komponenten als auch an der Implementierung neuer Funktionalitäten, die direkt in produktiven Umgebungen zum Einsatz kamen. Die Arbeit an der Schnittstelle zwischen Nutzeranforderungen und technischer Umsetzung ermöglichte es mir, ein tiefes Verständnis für produktorientierte Softwareentwicklung zu entwickeln.</p> <p>Im Projektalltag setzte ich mich intensiv mit verschiedenen Technologien auseinander und erweiterte mein Wissen insbesondere in den Bereichen <strong>Modularchitektur</strong>, <strong>Codequalität</strong> und <strong>Versionskontrolle</strong>. Die Zusammenarbeit mit erfahrenen Kolleginnen und Kollegen, tägliche Abstimmungen und klar definierte <strong>Sprint-Ziele</strong> trugen dazu bei, dass ich nicht nur meine technischen Fähigkeiten, sondern auch mein <strong>Verständnis für agile Prozesse</strong> und <strong>Teamdynamik</strong> weiterentwickeln konnte.</p> <p>Diese Zeit war für mich besonders wertvoll, da sie mir praxisnah zeigte, wie moderne Softwareentwicklung in einem professionellen Umfeld funktioniert – ein Erfahrungsschatz, der meine weitere <strong>berufliche und akademische Laufbahn</strong> nachhaltig geprägt hat.</p>",
                    sourceTitle: "StepAhead GmbH"
                },
                "0003": {
                    title: "2nd Level Supporter",
                    header: "Minijob als Second-Level Supporter für die mySteps-Plattform bei der StepAhead GmbH",
                    content: "<p>In meinem <strong>Minijob</strong> als <strong>Second-Level Supporter</strong> bei der <strong>StepAhead GmbH</strong> bin ich verantwortlich für die <strong>technische Unterstützung</strong> der Nutzer der <strong>mySteps-Plattform</strong>. Die Anwendung ermöglicht es den Nutzern, verschiedene <strong>Geschäftsprozesse</strong> ohne Installation von Software direkt im <strong>Browser</strong> zu steuern. Dabei stelle ich sicher, dass <strong>technische Probleme</strong> schnell identifiziert und effizient gelöst werden. <br><br>Meine Aufgaben umfassen die <strong>Fehleranalyse</strong> und <strong>-behebung</strong> bei Anfragen, die von der ersten Support-Ebene nicht gelöst werden konnten. Dies erfordert ein tiefes Verständnis der <strong>Software</strong> und der zugrunde liegenden <strong>Technologien</strong>, wie <strong>HTML</strong>, <strong>CSS</strong> und <strong>JavaScript</strong>. In enger Zusammenarbeit mit dem <strong>Entwicklungsteam</strong> sorge ich dafür, dass alle <strong>Supportanfragen</strong> zeitnah bearbeitet und die Nutzer bestmöglich unterstützt werden. <br><br>Darüber hinaus helfe ich bei der <strong>Dokumentation</strong> von Fehlern und Lösungen und trage so dazu bei, den <strong>Supportprozess</strong> kontinuierlich zu optimieren. Durch diese Tätigkeit konnte ich nicht nur meine <strong>technischen Fähigkeiten</strong> weiter ausbauen, sondern auch meine <strong>Kommunikations-</strong> und <strong>Problemlösungsfähigkeiten</strong> verbessern. <br><br>Dieser <strong>Minijob</strong> stellt für mich eine ideale Gelegenheit dar, <strong>praktische Erfahrungen</strong> im <strong>Supportbereich</strong> zu sammeln und gleichzeitig mein Wissen in der <strong>Softwareentwicklung</strong> zu erweitern. Langfristig bereitet mich diese Erfahrung auf eine berufliche Karriere in der <strong>Softwareentwicklung</strong> vor.</p>",
                    sourceTitle: "StepAhead GmbH"
                },
                "0004": {
                    title: "Web Entwickler",
                    header: "Dreimonatige Vollzeitarbeit als Web Entwickler im HCM-Bereich – Arbeit an der mySteps Plattform",
                    content: "<p>Während meiner <strong>Vollzeit-Tätigkeit</strong> bei der <strong>StepAhead GmbH</strong> habe ich wertvolle Erfahrungen in der <strong>Softwareentwicklung</strong> gesammelt und meine Fähigkeiten als <strong>Entwickler</strong> weiter ausgebaut. Nach dem Abschluss meiner Ausbildung zum <strong>Fachinformatiker für Anwendungsentwicklung</strong> war ich Teil eines <strong>agilen Teams</strong>, das an der Weiterentwicklung der <strong>Webanwendung mySteps</strong> arbeitete. Diese Software ermöglicht es Nutzern, verschiedene Geschäftsprozesse direkt im <strong>Browser</strong> zu steuern, ohne zusätzliche Software installieren zu müssen. <br><br> In meinem Job war ich vor allem mit der Entwicklung und Verbesserung von Funktionen im <strong>HCM-Bereich</strong> (<strong>Human Capital Management</strong>) der Anwendung betraut. Dabei kam ich regelmäßig mit <strong>Technologien</strong> wie <strong>HTML</strong>, <strong>CSS</strong> und <strong>JavaScript</strong> in Kontakt und konnte meine Kenntnisse in der <strong>Frontend-Entwicklung</strong> vertiefen. Die enge Zusammenarbeit mit meinen Kollegen im <strong>Team</strong> hat mir geholfen, meine Fähigkeiten in der <strong>Kommunikation</strong> und <strong>Problemlösung</strong> weiter zu stärken. <br><br> Besonders prägend war für mich die Arbeit in einem <strong>agilen Umfeld</strong> mit einem wöchentlichen <strong>Entwicklungssprint</strong>. Diese Struktur hat mir geholfen, flexibel und effizient zu arbeiten, gleichzeitig aber auch den Wert von <strong>Zusammenarbeit</strong> und kontinuierlichem <strong>Lernen</strong> zu schätzen. Diese Zeit hat mich sowohl fachlich als auch persönlich weitergebracht und mir die nötige <strong>Praxis</strong> für mein weiteres <strong>Studium</strong> und meine berufliche Zukunft verschafft.</p>",
                    sourceTitle: "StepAhead GmbH"
                },
                "0005": {
                    title: "Fachabitur in Hünfeld",
                    header: "Fachabitur in der Konrad Zuse Schule in Hünfeld mit der Fachrichtung Technik",
                    content: "<p>An der <strong>Konrad-Zuse-Schule</strong> in Hünfeld absolviere ich aktuell mein <strong>Fachabitur</strong>, um meine Kenntnisse in den Bereichen <strong>IT</strong> und allgemeinbildende Fächer zu vertiefen. Der Schwerpunkt meiner Ausbildung liegt auf der <strong>Informatik</strong>, was mir ermöglicht, mein technisches Verständnis weiter auszubauen und mich auf die Herausforderungen der <strong>Softwareentwicklung</strong> vorzubereiten. Neben den klassischen Fächern wie <strong>Mathematik</strong>, <strong>Deutsch</strong> und <strong>Englisch</strong> werden mir spezialisierte <strong>IT-Kurse</strong> angeboten, die mich mit modernen <strong>Technologien</strong> und <strong>Softwaretools</strong> vertraut machen. <br><br> Die <strong>FOS</strong> bietet mir die Möglichkeit, sowohl theoretisches Wissen als auch praktische Fähigkeiten zu erwerben. Besonders interessant ist für mich die Kombination aus allgemeinen Fächern und der vertieften Auseinandersetzung mit <strong>IT-Themen</strong>, was mir eine fundierte Basis für mein zukünftiges <strong>Studium</strong> verschafft. Durch die praxisorientierten <strong>Projekte</strong> und die enge Verbindung zur realen Arbeitswelt kann ich meine Fähigkeiten in der <strong>Softwareentwicklung</strong> weiter ausbauen. <br><br> Zusätzlich besuche ich zwei Vorlesungen an der <strong>Hochschule Fulda</strong>, um einen Einblick in das <strong>Studentenleben</strong> zu bekommen und mich auf mein späteres <strong>Studium der Angewandten Informatik</strong> vorzubereiten. Diese Erfahrungen erweitern nicht nur mein technisches Wissen, sondern auch meine Fähigkeiten in der <strong>Teamarbeit</strong> und <strong>Kommunikation</strong>. Die <strong>FOS</strong> ist somit der perfekte Schritt auf meinem Weg zu einer erfolgreichen Karriere in der <strong>IT-Branche</strong>.</p>",
                    sourceTitle: "Konrad-Zuse-Schule"
                },
                "0006": {
                    title: "Ausbildung Anwendungsentwicklung",
                    header: "Dreijährige Ausbildung als Fachinformatiker für Anwendungsentwicklung – Praxisnahe Ausbildung bei der StepAhead GmbH",
                    content: "<p>Während meiner <strong>Ausbildung zum Fachinformatiker für Anwendungsentwicklung</strong> bei der <strong>StepAhead GmbH</strong> konnte ich die <strong>Grundlagen der Softwareentwicklung</strong> erlernen und praktische Erfahrungen sammeln. Zu Beginn der Ausbildung lag der Fokus auf den grundlegenden <strong>Programmiersprachen</strong> und <strong>Entwicklungstechniken</strong>, die für den Einstieg in die Softwarewelt notwendig sind. Schnell konnte ich mein Wissen in realen <strong>Projekten</strong> anwenden und mit den ersten eigenen <strong>Codezeilen</strong> erste Erfolge erzielen. <br><br> Nach dem ersten Jahr trat ich einem <strong>agilen Entwicklungsteam</strong> bei, das an der <strong>Webanwendung mySteps</strong> arbeitete. Die Software ermöglicht es Nutzern, <strong>Geschäftsprozesse</strong> direkt über den <strong>Browser</strong> zu steuern, ohne zusätzliche Software installieren zu müssen. In diesem Projekt war ich hauptsächlich mit der <strong>Frontend-Entwicklung</strong> beschäftigt und arbeitete mit <strong>Technologien</strong> wie <strong>HTML</strong>, <strong>CSS</strong> und <strong>JavaScript</strong>. Besonders wertvoll war für mich die enge Zusammenarbeit im <strong>Team</strong> und die Möglichkeit, in einem <strong>agilen Umfeld</strong> mit wöchentlichen <strong>Sprints</strong> zu arbeiten. <br><br> Die Ausbildung bei <strong>StepAhead</strong> ermöglichte es mir, sowohl meine <strong>technischen Fähigkeiten</strong> weiter auszubauen als auch meine <strong>Kommunikationsfähigkeiten</strong> zu verbessern. Durch den direkten Austausch mit <strong>Kollegen</strong> und <strong>Kunden</strong> konnte ich lernen, wie wichtig <strong>Teamarbeit</strong> und effektive <strong>Kommunikation</strong> für den Erfolg eines Projekts sind. Diese drei Jahre haben mich nicht nur fachlich, sondern auch persönlich enorm weitergebracht.</p>",
                    sourceTitle: "StepAhead GmbH"
                },
                "0008": {
                    title: "WohnPilot",
                    header: "WohnPilot – Die smarte App für dein Zuhause",
                    content: "<p>Mein <strong>WohnPilot Projekt</strong> ist mein persönliches Schulprojekt der FOS. Im Rahmen dieses Projekts soll ich ein eigenes Vorhaben umsetzen und dabei Zeitmanagement durch Time-Tracking lernen. Für mein Projekt habe ich mich entschieden, ein innovatives System zu entwickeln, das es ermöglicht, Türen über eine selbst entwickelte App zu steuern. <br><br> Das Besondere an meinem <strong>WohnPilot</strong> Projekt ist, dass das Gerät direkt auf den Schlüssel gesteckt werden kann, ohne dass ein vollständiges automatisches Türschloss installiert werden muss. So wird eine kostengünstige und einfachere Lösung für die Automatisierung von Türen geschaffen. Zusätzlich entwickle ich einen <strong>Bewegungsmelder</strong>, der Bewegungen erkennt und diese in der App anzeigt. Auch Benachrichtigungen werden automatisch gesendet, wenn eine Bewegung erfasst wird. <br><br> Ein weiterer spannender Aspekt meines Projekts ist die Verwendung von <strong>3D-Druck</strong>. Ich zeichne und drucke selbstständig die notwendigen 3D-Objekte und Gehäuse, die für die Integration des Systems erforderlich sind. Um die verschiedenen Komponenten miteinander zu verbinden, arbeite ich mit dem <strong>ESP32</strong>, einem leistungsstarken Mikrocontroller. Dieses Projekt gibt mir die Möglichkeit, sowohl mein technisches Wissen zu erweitern als auch meine Fähigkeiten im Bereich der App-Entwicklung und Hardware-Integration zu vertiefen. <br><br>Dokumentation: <a class=\"detail-link\" href=\"https://amplified-earth-712.notion.site/Dashboard-1148ab38f2b180d2850cf314ef460438\">Notion</a> <br> Repositorys: <a class=\"detail-link\" href=\"https://github.com/WohnPilot\">Github</a></p>"
                },
                "0009": {
                    title: "Portfolio",
                    header: "Meine Portfolio-Website",
                    content: "<p>Im Rahmen der FOS Hochschulebesuche müssen wir passend zum Fach <strong>WebDesign</strong> eine eigene Webseite entwickeln. Für dieses Projekt habe ich mich entschieden, eine eigene <strong>Portfolio Webseite</strong> zu erstellen, um mich im Markt besser vorzustellen. Auf dieser Seite zeige ich meine <strong>Referenzen</strong> und <strong>aktuellen Projekte</strong>, die einen Einblick in meine Fähigkeiten und meine bisherigen Arbeiten bieten. Außerdem integriere ich eine Möglichkeit zur <strong>Kontaktaufnahme</strong>, damit Interessenten schnell mit mir in Verbindung treten können. <br><br> Für die Entwicklung der Webseite nutze ich meine Kenntnisse in <strong>HTML</strong>, <strong>CSS</strong> und <strong>JavaScript</strong>, um die Seite komplett selbst zu gestalten. Ziel ist es, meine technischen Fähigkeiten zu demonstrieren und gleichzeitig eine ansprechende und funktionale Webseite zu schaffen. Zusätzlich baue ich eigene <strong>Animationen</strong> ein, um das Nutzererlebnis zu verbessern und die Seite visuell aufzuwerten. <br><br> Um sicherzustellen, dass die Webseite auf allen Geräten gut aussieht und funktioniert, mache ich sie mit <strong>Bootstrap</strong> <strong>responsive</strong>. Das bedeutet, dass sich das Layout automatisch an die Bildschirmgröße des jeweiligen Geräts anpasst, sei es ein Smartphone, Tablet oder Desktop-PC. Dieses Projekt hilft mir nicht nur, meine Fähigkeiten zu erweitern, sondern auch, mich selbst als Webentwickler auf dem Markt zu präsentieren. <br><br> Repository: <a class=\"detail-link\" href=\"https://github.com/felix-fab/myportfolio\">Github</a></p>"
                },
                "0010": {
                    title: "Nao Controller",
                    header: "Nao Controller – Interaktive Robotersteuerung für den Messeauftritt der Ferdinand-Braun-Schule",
                    content: "<p>Im Rahmen meiner Ausbildung an der Berufsschule <strong>Ferdinand Braun Schule</strong> in Fulda haben wir ein spannendes Projekt mit dem <strong>NAO Roboter</strong> entwickelt, um die Schule auf einer Technikmesse zu präsentieren. Die gesamte Klasse wurde in verschiedene Gruppen aufgeteilt, wobei jede Gruppe einen spezifischen Teil des Projekts bearbeitete. Eine Gruppe kümmerte sich um die <strong>Bewegungen des Roboters</strong>, eine andere entwickelte eine <strong>API</strong> als Schnittstelle zwischen der App und dem Roboter. <br><br> Meine Gruppe und ich waren für die Entwicklung der App verantwortlich, mit der Benutzer dem Roboter spezifische Fragen zur Schule stellen können. Das Besondere an dieser App ist, dass sie wie ein Dialog funktioniert, sodass die Benutzer eine natürliche Unterhaltung mit dem Roboter führen können. Die App wurde mit <strong>Angular</strong> entwickelt, was es uns ermöglichte, eine moderne und funktionale Benutzeroberfläche zu schaffen. <br><br> Das Projekt stieß auf der Messe auf großes Interesse und kam bei den Besuchern gut an. Darüber hinaus waren wir für die Betreuung des Schulstands verantwortlich und beantworteten Fragen zu unserem Projekt und der Technologie hinter dem NAO Roboter. Dieses Projekt hat nicht nur meine Fähigkeiten in der App-Entwicklung gestärkt, sondern mir auch wertvolle Erfahrungen in der Zusammenarbeit im Team und der Präsentation von Technikprojekten vermittelt. <br><br>Repository: <a class=\"detail-link\" href=\"https://github.com/felix-fab/fbs_nao_controllerapp\">Github</a></p>"
                },
                "0011": {
                    title: "Dark Animations Studio",
                    header: "Dark Animations Studio – Kreative Webpräsenz für ein Animationsstudio",
                    content: "Dieses Projekt umfasst die Entwicklung einer modernen und funktionalen Webseite für das <strong>Dark Animations Studio</strong>. <br>Die Seite ist unter <a class=\"detail-link\" href=\"https://darkstudios.de\">darkstudios.de</a> erreichbar und präsentiert die Arbeiten des Studios übersichtlich und ansprechend. <br><br>Die Webseite wurde mit <strong>HTML, CSS und JavaScript</strong> umgesetzt und bietet eine benutzerfreundliche Navigation sowie ein klares Design. <br>Dabei wurden gezielt Animationen und interaktive Elemente integriert, um die Inhalte ansprechend darzustellen. <br>Besonderer Wert wurde auf eine saubere Struktur und eine gute Performance gelegt. Zudem wurde darauf geachtet,dass die Webseite sowohl auf Desktop- als auch auf Mobilgeräten optimal funktioniert. <br><br>Das Projekt entstand in einem <strong>freiwilligen Rahmen</strong> durch die Zusammenarbeit mit einem Klassenkameraden. <br>Die Umsetzung erfolgte unabhängig und ohne kommerziellen Auftrag, um dem Studio eine professionelle Online-Präsenz bereitzustellen. <br>Neben der technischen Umsetzung wurden auch gestalterische Aspekte berücksichtigt, um das Design an den Stil des Studios anzupassen. <br><br>Eine <strong>weitere Zusammenarbeit mit dem Dark Animations Studio ist geplant</strong>, um die Webseite zu verbessern und neue Funktionen hinzuzufügen. <br>Zukünftige Erweiterungen könnten beispielsweise zusätzliche Inhalte oder eine interaktive Portfolio-Seite beinhalten. <br>Darüber hinaus sind Optimierungen in Bereichen wie Ladegeschwindigkeit, Suchmaschinenoptimierung und Barrierefreiheit vorgesehen,um die Nutzererfahrung weiter zu verbessern. Auch eine mögliche Blog-Integration oder ein News-Bereich könnte in Zukunft realisiert werden."
                },
                "0012": {
                    title: "UpThoughts",
                    header: "UpThoughts – Die App für deine inspirierenden Gedanken",
                    content: "<p>UpThoughts ist eine mobile Anwendung, die es Nutzern ermöglicht, wichtige Gedanken, Zitate und Inspirationen zu speichern und sich regelmäßig daran erinnern zu lassen. Die App wurde entwickelt, um Menschen dabei zu helfen, ihre positiven Gedanken festzuhalten und sie in ihrem Alltag zu integrieren. <br><br>Die Hauptfunktionen von UpThoughts umfassen das Hinzufügen, Bearbeiten und Löschen von Gedanken sowie die Möglichkeit, Erinnerungen für bestimmte Zeiten oder Intervalle einzustellen. Nutzer können ihre Gedanken in verschiedenen Kategorien organisieren und durch eine benutzerfreundliche Oberfläche navigieren. <br><br>Die App wurde mit Fokus auf Einfachheit und Benutzerfreundlichkeit gestaltet, um sicherzustellen, dass Nutzer schnell und unkompliziert ihre Gedanken festhalten können. UpThoughts ist sowohl für iOS als auch für Android verfügbar und bietet eine nahtlose Synchronisation zwischen",
                    sourceTitle: "UpThoughts Website"
                },
                "0013": {
                    title: "Homelab",
                    header: "meiner privaten Server-Infrastruktur",
                    content: "<p>Mein Homelab besteht aus einem leistungsstarken PC, einer NAS (Network Attached Storage) und einer USV (Unterbrechungsfreie Stromversorgung), die zusammen einen zuverlässigen Home-Server bilden. Dieses Setup ermöglicht es mir, verschiedene Dienste und Programme zu betreiben, die sowohl für den privaten Gebrauch als auch für meine beruflichen Projekte nützlich sind. <br><br>Der PC dient als Hauptserver und ist mit ausreichend Speicherplatz und Rechenleistung ausgestattet, um mehrere virtuelle Maschinen und Container gleichzeitig auszuführen. Dadurch kann ich verschiedene Anwendungen isoliert betreiben und bei Bedarf schnell anpassen oder erweitern. <br><br>Die NAS bietet zusätzlichen Speicherplatz und dient als zentrales Backup-System für meine Daten. Sie ermöglicht es mir, wichtige Dateien sicher zu speichern und von verschiedenen Geräten im Netzwerk darauf zuzugreifen. <br><br>Die USV sorgt dafür, dass mein Homelab auch bei Stromausfällen geschützt ist und ermöglicht eine geordnete Abschaltung der Systeme, um Datenverlust zu vermeiden. <br><br>In meinem Homelab betreibe ich verschiedene Dienste wie einen Webserver, eine Datenbank, ein Media-Server und weitere Anwendungen, die ich für meine Projekte benötige. Dieses Setup bietet mir die Flexibilität, neue Technologien auszuprobieren und meine Fähigkeiten in der Systemadministration und Netzwerktechnik zu erweitern.</p>"
                }
            }
        }
    },
    en: {
        nav: {
            home: 'Home',
            about: 'About Me',
            references: 'References',
            projects: 'Projects',
            contact: 'Contact'
        },
        home: {
            greeting: 'Hey, here I am',
            iam: 'I am',
            description: 'Let\'s develop smart solutions together and shape the digital world – with Felix Wiegand.',
            portfolio: 'My Portfolio'
        },
        about: {
            title: 'About',
            titleHighlight: 'Me',
            subtitle: 'Application Developer',
            description: 'I discovered my passion for software development early on and have been intensively involved with programming since 8th grade. After completing my secondary school diploma, I completed training as an IT specialist for application development at StepAhead GmbH. There I was able to work in an agile team on the <strong>mySteps</strong> web application and gain valuable experience in HTML, CSS and JavaScript. I am currently studying Applied Computer Science at Mainz University. I also continue to work as a working student as a DevOps developer. <strong>My goal:</strong> Develop innovative software solutions and continuously evolve.'
        },
        references: {
            title: 'My',
            titleHighlight: 'References',
            moreBtn: 'View more',
            ref1: {
                title: 'Studies',
                time: 'Currently',
                desc: 'After completing my technical diploma at the Konrad-Zuse School in Hünfeld, I started studying Applied Computer Science at Mainz University. There I want to deepen my knowledge and develop innovative software solutions.'
            },
            ref2: {
                title: 'DevOps Developer',
                time: 'StepAhead GmbH',
                desc: 'After my technical diploma, I worked as a developer at StepAhead GmbH and worked in an agile team on the conception and implementation of new functions in the MMS module as well as extensions to the platform of the mySteps web application.'
            },
            ref3: {
                title: '2nd Level Support',
                time: 'StepAhead GmbH',
                desc: 'As a second-level supporter at StepAhead GmbH, I support users of the mySteps platform with technical problems. I analyze errors, find solutions and ensure smooth use of the software.'
            },
            ref4: {
                title: 'Web Developer',
                time: 'StepAhead GmbH',
                desc: 'After my training, I worked as a developer at StepAhead GmbH, where I worked in an agile team on the mySteps web application and gained practical experience in software development.'
            },
            ref5: {
                title: 'Technical Diploma',
                time: '2025 - 2024',
                desc: 'I am completing my technical diploma at the Konrad-Zuse School in Hünfeld to deepen my knowledge in IT and general subjects. This training prepares me perfectly for my planned computer science studies at Mainz University.'
            },
            ref6: {
                title: 'Apprenticeship',
                time: '2024 - 2021',
                desc: 'During my apprenticeship as an IT specialist for application development at StepAhead GmbH, I learned the basics of software development and worked in an agile team on the mySteps web application.'
            }
        },
        featured: {
            title: 'Current',
            titleHighlight: 'Projects',
            detailsBtn: 'View Details',
            upthoughts: {
                title: 'UpThoughts',
                desc: 'A mobile app that lets you save important thoughts and quotes and get regular reminders about them.'
            },
            homelab: {
                title: 'Homelab',
                desc: 'I run a home server with a PC, NAS and UPS, on which several services and programs run reliably.'
            }
        },
        projects: {
            title: 'Latest',
            titleHighlight: 'Projects',
            moreDetails: 'Click here for more details:',
            showMore: 'Show more',
            showLess: 'Show less',
            comingSoon: 'Coming Soon',
            videoError: 'Your browser does not support HTML5 video.'
        },
        contact: {
            title: 'Contact',
            titleHighlight: 'Me',
            firstName: 'First Name',
            lastName: 'Last Name',
            email: 'Email Address',
            mobile: 'Mobile Number',
            subject: 'Subject',
            message: 'Message',
            send: 'Send'
        },
        modal: {
            success: 'Success!',
            successMessage: 'Your message has been sent successfully. I will get back to you as soon as possible!',
            ok: 'OK',
            errorMessage: 'An unknown error has occurred.'
        },
        footer: {
            home: 'Home',
            about: 'About me',
            references: 'References',
            projects: 'Projects',
            contact: 'Contact',
            privacy: 'Privacy',
            imprint: 'Imprint'
        },
        typewriter: {
            texts: [
                'Innovative Developer',
                'Web & Software Engineer',
                'Solution Architect',
                'Agile Team Player',
                'Tech Enthusiast',
                'UX-Driven Frontend Developer',
                'System Architect by Passion'
            ]
        },
        details: {
            backLink: 'Back',
            moreInformation: 'More Information',
            posts: {
                "0001": {
                    title: "Studies in Mainz",
                    header: "Studies in Applied Computer Science in Mainz",
                    content: "<p>After completing my technical diploma, I started studying <strong>Applied Computer Science</strong> at <strong>Mainz University</strong>. This was the next logical step for me to deepen my knowledge in <strong>software development</strong> and prepare myself for the diverse challenges of the <strong>IT world</strong>. Mainz University offers a <strong>practice-oriented approach</strong> and modern study content that provides an ideal foundation for expanding my technical knowledge and learning new skills. <br><br> I am particularly interested in the field of <strong>application development</strong> and the opportunities to develop innovative <strong>software solutions</strong> that can be applied in the real world. I look forward to diving deeper into topics such as <strong>databases</strong>, <strong>artificial intelligence</strong> and <strong>IT security</strong> and expanding my understanding of complex systems. <br><br> Furthermore, I am excited about the <strong>practice-oriented projects</strong> and collaboration with other <strong>students</strong> and <strong>companies</strong>. These experiences will help me further develop both my <strong>technical</strong> and <strong>communication skills</strong>. <br><br> Overall, my goal is to work in <strong>software development</strong> after graduation and contribute my <strong>expertise</strong> to shaping forward-thinking digital solutions. Mainz University provides the <strong>perfect framework</strong> for this.</p>",
                    sourceTitle: "Mainz University"
                },
                "0002": {
                    title: "DevOps Developer",
                    header: "Three months of full-time work as a DevOps Developer for the mySteps platform at StepAhead GmbH",
                    content: "<p>After my <strong>technical diploma</strong>, I began my professional career at <strong>StepAhead GmbH</strong>, where I worked full-time as a <strong>software developer</strong>. In an <strong>interdisciplinary, agile team</strong>, I contributed to the continuous development of the <strong>mySteps web application</strong>, which helps companies efficiently manage central business processes completely browser-based.</p> <p>My focus was on the technical implementation of new features within the <strong>MMS module</strong> (Material Management System) and structural extensions to the <strong>platform architecture</strong>. I worked on both existing components and the implementation of new functionalities that were deployed directly in production environments. Working at the interface between user requirements and technical implementation enabled me to develop a deep understanding of product-oriented software development.</p> <p>In day-to-day project work, I engaged intensively with various technologies and expanded my knowledge particularly in the areas of <strong>module architecture</strong>, <strong>code quality</strong> and <strong>version control</strong>. Collaboration with experienced colleagues, daily meetings and clearly defined <strong>sprint goals</strong> helped me not only develop my technical skills but also my understanding of <strong>agile processes</strong> and <strong>team dynamics</strong>.</p> <p>This time was particularly valuable to me because it showed me practically how modern software development works in a professional environment – an experience that has shaped my further <strong>professional and academic career</strong> sustainably.</p>",
                    sourceTitle: "StepAhead GmbH"
                },
                "0003": {
                    title: "2nd Level Support",
                    header: "Part-time work as Second-Level Support for the mySteps platform at StepAhead GmbH",
                    content: "<p>In my <strong>part-time job</strong> as a <strong>Second-Level Support</strong> at <strong>StepAhead GmbH</strong>, I am responsible for <strong>technical support</strong> for users of the <strong>mySteps platform</strong>. The application allows users to manage various <strong>business processes</strong> directly in the <strong>browser</strong> without installing software. I ensure that <strong>technical problems</strong> are quickly identified and efficiently resolved. <br><br>My tasks include <strong>error analysis</strong> and <strong>resolution</strong> for inquiries that could not be resolved by the first level support. This requires a deep understanding of the <strong>software</strong> and underlying <strong>technologies</strong> such as <strong>HTML</strong>, <strong>CSS</strong> and <strong>JavaScript</strong>. In close collaboration with the <strong>development team</strong>, I ensure that all <strong>support requests</strong> are processed promptly and users are supported as well as possible. <br><br>In addition, I assist in <strong>documenting</strong> errors and solutions, thereby helping to continuously optimize the <strong>support process</strong>. Through this work, I have not only been able to further develop my <strong>technical skills</strong> but also improve my <strong>communication</strong> and <strong>problem-solving skills</strong>. <br><br>This <strong>part-time job</strong> is an ideal opportunity for me to gain <strong>practical experience</strong> in the <strong>support area</strong> and at the same time expand my knowledge in <strong>software development</strong>. In the long term, this experience prepares me for a professional career in <strong>software development</strong>.</p>",
                    sourceTitle: "StepAhead GmbH"
                },
                "0004": {
                    title: "Web Developer",
                    header: "Three months of full-time work as a Web Developer in the HCM field – Work on the mySteps platform",
                    content: "<p>During my <strong>full-time work</strong> at <strong>StepAhead GmbH</strong>, I gained valuable experience in <strong>software development</strong> and further developed my skills as a <strong>developer</strong>. After completing my training as an <strong>IT specialist for application development</strong>, I was part of an <strong>agile team</strong> that worked on advancing the <strong>mySteps web application</strong>. This software allows users to manage various business processes directly in the <strong>browser</strong> without having to install additional software. <br><br> In my job, I was primarily responsible for developing and improving functions in the <strong>HCM area</strong> (<strong>Human Capital Management</strong>) of the application. I regularly came into contact with <strong>technologies</strong> such as <strong>HTML</strong>, <strong>CSS</strong> and <strong>JavaScript</strong> and was able to deepen my knowledge in <strong>frontend development</strong>. Close collaboration with my team members helped me further strengthen my skills in <strong>communication</strong> and <strong>problem-solving</strong>. <br><br> Particularly formative for me was the work in an <strong>agile environment</strong> with a weekly <strong>development sprint</strong>. This structure helped me work flexibly and efficiently, while also appreciating the value of <strong>collaboration</strong> and continuous <strong>learning</strong>. This time advanced me both professionally and personally and gave me the necessary <strong>experience</strong> for my further <strong>studies</strong> and professional future.</p>",
                    sourceTitle: "StepAhead GmbH"
                },
                "0005": {
                    title: "Technical Diploma in Hünfeld",
                    header: "Technical Diploma at Konrad Zuse School in Hünfeld with a focus on Technology",
                    content: "<p>At the <strong>Konrad-Zuse-School</strong> in Hünfeld, I am currently completing my <strong>technical diploma</strong> to deepen my knowledge in the fields of <strong>IT</strong> and general education. The focus of my education is <strong>computer science</strong>, which allows me to further develop my technical understanding and prepare myself for the challenges of <strong>software development</strong>. In addition to classical subjects such as <strong>mathematics</strong>, <strong>German</strong> and <strong>English</strong>, I am offered specialized <strong>IT courses</strong> that familiarize me with modern <strong>technologies</strong> and <strong>software tools</strong>. <br><br> The <strong>FOS</strong> (Technical College) gives me the opportunity to acquire both theoretical knowledge and practical skills. What is particularly interesting for me is the combination of general subjects and in-depth study of <strong>IT topics</strong>, which provides me with a solid foundation for my future <strong>studies</strong>. Through practice-oriented <strong>projects</strong> and close ties to the real working world, I can further develop my skills in <strong>software development</strong>. <br><br> Additionally, I attend two lectures at <strong>Fulda University of Applied Sciences</strong> to get an insight into student life and prepare myself for my later <strong>studies in Applied Computer Science</strong>. These experiences not only expand my technical knowledge but also my skills in <strong>teamwork</strong> and <strong>communication</strong>. The <strong>FOS</strong> is thus the perfect step on my path to a successful career in the <strong>IT industry</strong>.</p>",
                    sourceTitle: "Konrad-Zuse-School"
                },
                "0006": {
                    title: "Apprenticeship Application Development",
                    header: "Three-year apprenticeship as an IT specialist for application development – Practice-oriented training at StepAhead GmbH",
                    content: "<p>During my <strong>apprenticeship as an IT specialist for application development</strong> at <strong>StepAhead GmbH</strong>, I was able to learn the <strong>fundamentals of software development</strong> and gain practical experience. At the beginning of the apprenticeship, the focus was on the fundamental <strong>programming languages</strong> and <strong>development techniques</strong> necessary to get started in the software world. I was able to quickly apply my knowledge to real <strong>projects</strong> and achieve first successes with my own <strong>lines of code</strong>. <br><br> After the first year, I joined an <strong>agile development team</strong> working on the <strong>mySteps web application</strong>. The software allows users to manage <strong>business processes</strong> directly via the <strong>browser</strong> without having to install additional software. In this project, I was mainly involved in <strong>frontend development</strong> and worked with <strong>technologies</strong> such as <strong>HTML</strong>, <strong>CSS</strong> and <strong>JavaScript</strong>. Particularly valuable to me was the close collaboration within the <strong>team</strong> and the opportunity to work in an <strong>agile environment</strong> with weekly <strong>sprints</strong>. <br><br> The apprenticeship at <strong>StepAhead</strong> allowed me to further develop both my <strong>technical skills</strong> and my <strong>communication skills</strong>. Through direct exchange with <strong>colleagues</strong> and <strong>customers</strong>, I learned how important <strong>teamwork</strong> and effective <strong>communication</strong> are for the success of a project. These three years have advanced me tremendously both professionally and personally.</p>",
                    sourceTitle: "StepAhead GmbH"
                },
                "0008": {
                    title: "WohnPilot",
                    header: "WohnPilot – The smart app for your home",
                    content: "<p>My <strong>WohnPilot project</strong> is my personal school project for the FOS. As part of this project, I am to implement my own project and learn time management through time tracking. For my project, I decided to develop an innovative system that allows you to control doors via a self-developed app. <br><br> What is special about my <strong>WohnPilot</strong> project is that the device can be plugged directly onto the key without needing to install a complete automatic door lock. This creates a cost-effective and simpler solution for automating doors. Additionally, I am developing a <strong>motion detector</strong> that detects motion and displays it in the app. Notifications are also automatically sent when motion is detected. <br><br> Another exciting aspect of my project is the use of <strong>3D printing</strong>. I independently design and print the necessary 3D objects and housings needed for system integration. To connect the various components together, I work with the <strong>ESP32</strong>, a powerful microcontroller. This project gives me the opportunity to both expand my technical knowledge and deepen my skills in app development and hardware integration. <br><br>Documentation: <a class=\"detail-link\" href=\"https://amplified-earth-712.notion.site/Dashboard-1148ab38f2b180d2850cf314ef460438\">Notion</a> <br> Repositories: <a class=\"detail-link\" href=\"https://github.com/WohnPilot\">Github</a></p>"
                },
                "0009": {
                    title: "Portfolio",
                    header: "My Portfolio Website",
                    content: "<p>As part of FOS university visits, we need to develop our own website for the <strong>Web Design</strong> class. For this project, I decided to create my own <strong>portfolio website</strong> to better present myself in the market. On this site, I showcase my <strong>references</strong> and <strong>current projects</strong>, which provide an insight into my skills and previous work. I also integrate a way to <strong>make contact</strong> so interested parties can quickly get in touch with me. <br><br> For the development of the website, I use my knowledge of <strong>HTML</strong>, <strong>CSS</strong> and <strong>JavaScript</strong> to design the entire site myself. The goal is to demonstrate my technical skills while creating an attractive and functional website. Additionally, I incorporate my own <strong>animations</strong> to improve the user experience and enhance the site visually. <br><br> To ensure that the website looks good and works on all devices, I make it <strong>responsive</strong> with <strong>Bootstrap</strong>. This means the layout automatically adapts to the screen size of the device, whether it's a smartphone, tablet or desktop PC. This project not only helps me extend my skills but also present myself as a web developer in the market. <br><br> Repository: <a class=\"detail-link\" href=\"https://github.com/felix-fab/myportfolio\">Github</a></p>"
                },
                "0010": {
                    title: "Nao Controller",
                    header: "Nao Controller – Interactive robot control for the Ferdinand Braun School trade fair booth",
                    content: "<p>As part of my training at the vocational school <strong>Ferdinand Braun School</strong> in Fulda, we developed an exciting project with the <strong>NAO robot</strong> to present the school at a technology fair. The entire class was divided into different groups, with each group working on a specific part of the project. One group handled the <strong>robot's movements</strong>, another developed an <strong>API</strong> as an interface between the app and the robot. <br><br> My group and I were responsible for developing the app that allows users to ask the robot specific questions about the school. What makes this app special is that it works like a dialog, so users can have a natural conversation with the robot. The app was developed with <strong>Angular</strong>, which allowed us to create a modern and functional user interface. <br><br> The project generated great interest at the fair and was well received by visitors. In addition, we were responsible for managing the school booth and answering questions about our project and the technology behind the NAO robot. This project not only strengthened my app development skills but also gave me valuable experience in team collaboration and presenting technology projects. <br><br>Repository: <a class=\"detail-link\" href=\"https://github.com/felix-fab/fbs_nao_controllerapp\">Github</a></p>"
                },
                "0011": {
                    title: "Dark Animations Studio",
                    header: "Dark Animations Studio – Creative web presence for an animation studio",
                    content: "This project includes the development of a modern and functional website for <strong>Dark Animations Studio</strong>. <br>The site is accessible at <a class=\"detail-link\" href=\"https://darkstudios.de\">darkstudios.de</a> and presents the studio's work clearly and attractively. <br><br>The website was developed with <strong>HTML, CSS and JavaScript</strong> and offers user-friendly navigation and clear design. <br>Animations and interactive elements were strategically integrated to present the content appealingly. <br>Special emphasis was placed on clean structure and good performance. Care was also taken to ensure the website works optimally on both desktop and mobile devices. <br><br>The project was created on a <strong>voluntary basis</strong> through collaboration with a classmate. <br>The implementation was done independently and without commercial assignment, to provide the studio with a professional online presence. <br>In addition to the technical implementation, design aspects were also considered to adapt the design to the studio's style. <br><br>A <strong>further collaboration with Dark Animations Studio is planned</strong> to improve the website and add new features. <br>Future expansions could include additional content or an interactive portfolio page. <br>Furthermore, optimizations in areas such as loading speed, search engine optimization and accessibility are planned to further improve the user experience. A possible blog integration or news section could also be realized in the future."
                },
                "0012": {
                    title: "UpThoughts",
                    header: "UpThoughts – The app for your inspiring thoughts",
                    content: "<p>UpThoughts is a mobile application that allows users to save important thoughts, quotes and inspirations and receive regular reminders about them. The app was developed to help people capture their positive thoughts and integrate them into their daily lives. <br><br>The main features of UpThoughts include adding, editing and deleting thoughts as well as the ability to set reminders for specific times or intervals. Users can organize their thoughts in different categories and navigate through an easy-to-use interface. <br><br>The app was designed with a focus on simplicity and user-friendliness to ensure users can quickly and easily capture their thoughts. UpThoughts is available for both iOS and Android and offers seamless synchronization between",
                    sourceTitle: "UpThoughts Website"
                },
                "0013": {
                    title: "Homelab",
                    header: "my private server infrastructure",
                    content: "<p>My homelab consists of a powerful PC, a NAS (Network Attached Storage) and a UPS (Uninterruptible Power Supply) that together form a reliable home server. This setup allows me to run various services and programs that are useful for both personal use and my professional projects. <br><br>The PC serves as the main server and is equipped with sufficient storage and computing power to run multiple virtual machines and containers simultaneously. This allows me to run different applications in isolation and quickly adapt or expand them as needed. <br><br>The NAS provides additional storage and serves as a central backup system for my data. It allows me to securely store important files and access them from various devices on the network. <br><br>The UPS protects my homelab even during power outages and enables an orderly shutdown of systems to prevent data loss. <br><br>In my homelab, I run various services such as a web server, database, media server and other applications that I need for my projects. This setup gives me the flexibility to try out new technologies and expand my skills in system administration and networking.</p>"
                }
            }
        }
    }
};

class I18n {
    constructor() {
        this.currentLang = this.detectLanguage();
        this.init();
    }

    detectLanguage() {
        // Check if language is already stored
        const storedLang = localStorage.getItem('language');
        if (storedLang && (storedLang === 'de' || storedLang === 'en')) {
            return storedLang;
        }

        // Get browser language
        const browserLang = navigator.language || navigator.userLanguage;
        
        // Check if German (de, de-DE, de-AT, de-CH, etc.)
        if (browserLang && browserLang.toLowerCase().startsWith('de')) {
            return 'de';
        }
        
        // Default to English for all other languages
        return 'en';
    }

    init() {
        this.setLanguage(this.currentLang);
        this.attachEventListeners();
    }

    attachEventListeners() {
        const self = this;
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const lang = this.getAttribute('data-lang');
                if (lang && (lang === 'de' || lang === 'en')) {
                    self.setLanguage(lang);
                }
            });
        });
    }

    setLanguage(lang) {
        // Validate language
        if (!lang || (lang !== 'de' && lang !== 'en')) {
            lang = 'de';
        }
        
        this.currentLang = lang;
        localStorage.setItem('language', lang);
        
        // Update active button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });

        // Update all i18n elements
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.dataset.i18n;
            const translation = this.getTranslation(key);
            if (translation) {
                element.innerHTML = translation;
            }
        });

        // Update typewriter texts
        if (window.typewriterInstance && translations[lang] && translations[lang].typewriter) {
            window.typewriterInstance.updateTexts(translations[lang].typewriter.texts);
        }
    }

    getTranslation(key) {
        if (!this.currentLang || !translations[this.currentLang]) {
            this.currentLang = 'de';
        }
        
        const keys = key.split('.');
        let translation = translations[this.currentLang];
        
        for (const k of keys) {
            if (!translation) return null;
            translation = translation[k];
        }
        
        return translation;
    }

    getCurrentLang() {
        return this.currentLang;
    }
}

// Initialize i18n when DOM is ready
let i18nInstance;
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        i18nInstance = new I18n();
    });
} else {
    i18nInstance = new I18n();
}
