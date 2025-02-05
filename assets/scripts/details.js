window.onload = function () {

    const detailPosts = {
        "0001": {
            title: "Studium in Mainz",
            header: "Studium der angewandten Informatik in Mainz",
            content: "<p>In Zukunft plane ich, <strong>angewandte Informatik</strong> an der <strong>Hochschule Mainz</strong> zu studieren.<br>Dieser Studiengang bietet mir die Möglichkeit, meine Kenntnisse in der <strong>Softwareentwicklung</strong>, <strong>Datenanalyse</strong> und <strong>Informatik</strong> weiter zu vertiefen und neue Fähigkeiten in modernen Technologien zu erlernen.<br>Besonders interessiert mich die Kombination von praktischer Anwendung und theoretischem Wissen, die es mir ermöglicht, komplexe Probleme zu lösen und innovative Lösungen zu entwickeln.<br>Mainz bietet nicht nur ein erstklassiges akademisches Umfeld, sondern auch eine innovative Stadt mit einer lebendigen Technologieszene, was es zu einem idealen Standort für meine akademische und berufliche Weiterentwicklung macht.<br>Durch die enge Zusammenarbeit mit Unternehmen und die vielen Praktikumsmöglichkeiten kann ich bereits während des Studiums wertvolle Berufserfahrungen sammeln.<br>Ich freue mich darauf, mein Wissen und meine Fähigkeiten weiter auszubauen, um die Herausforderungen der digitalen Zukunft zu meistern und aktiv zur Weiterentwicklung der Technologiebranche beizutragen.<br>Das Studium in Mainz wird mir zudem die Möglichkeit geben, ein starkes Netzwerk aufzubauen und von der internationalen Perspektive und den interdisziplinären Kooperationen zu profitieren.<br>Durch die Stadt Mainz, die sowohl für ihre Geschichte als auch ihre moderne Entwicklung bekannt ist, werde ich inspiriert, in einem dynamischen Umfeld zu arbeiten und zu wachsen.</p>",
            imageSource: "./assets/images/details/KampusMainz.jpg"
        },
        "0002": {
            title: "Fachabitur in Hünfeld",
            header: "Fachabitur in der Konrad Zuse Schule in Hünfeld mit der Fachrichtung Technik",
            content: "<p>Derzeit besuche ich die <strong>Fachoberschule (FOS)</strong> an der <strong>Konrad Zuse Schule in Hünfeld</strong und strebe mein <strong>Fachabitur</strong> an.<br>In diesem Jahr habe ich die Möglichkeit, mein Wissen in den Bereichen <strong>Informatik</strong> und <strong>Wirtschaft</strong> zu vertiefen und mich auf zukünftige berufliche Herausforderungen vorzubereiten.<br>Das Fachabitur bietet mir eine fundierte Grundlage, die sowohl für den Einstieg in die <strong>berufliche Praxis</strong> als auch für ein mögliches <strong>Studium</strong> in verschiedenen Bereichen der <strong>Technologie</strong> und <strong>Wirtschaft</strong> von Vorteil ist.<br>Ich freue mich darauf, meine schulischen Fähigkeiten weiter auszubauen und neue, spannende Themen zu entdecken, die mich auf meinem weiteren Bildungsweg unterstützen werden.<br>Durch die <strong>Fachoberschule</strong> erhalte ich eine ausgezeichnete Vorbereitung auf mein späteres Studium und die berufliche Laufbahn, mit einem klaren Fokus auf die <strong>IT-Branche</strong> und <strong>digitale Technologien</strong>.<br>Der interdisziplinäre Ansatz ermöglicht es mir, sowohl technische als auch wirtschaftliche Aspekte der Informatik zu verstehen und anzuwenden – eine wertvolle Kombination für die Zukunft.</p>",
            imageSource: "./assets/images/details/KZSHünfeld.png"
        },
        "0003": {
            title: "Softwareentwicklung",
            header: "Softwareentwickler bei der StepAhead GmbH",
            content: "<p>Als ich vor zwei Jahren meine Stelle als Softwareentwickler bei der StepAhead GmbH antrat, wusste ich nicht genau, was mich erwarten würde. Heute kann ich sagen: Es war eine der besten Entscheidungen meiner Karriere.</p><h5>Ein typischer Arbeitstag</h5><p>Mein Tag beginnt meistens mit unserem Daily Stand-up, bei dem das Team die aktuellen Aufgaben bespricht. Danach geht es direkt ans Coden: Ob neue Features für unsere ERP-Software, Bugfixes oder Optimierungen – die Arbeit ist unglaublich abwechslungsreich. Besonders spannend finde ich die enge Zusammenarbeit mit dem Produktmanagement, denn so kann ich direkt sehen, welchen Mehrwert meine Arbeit für die Kunden bringt.</p><h5>Die Unternehmenskultur</h5><p>Was mir besonders gefällt, ist die offene und kollegiale Atmosphäre. Bei StepAhead arbeiten wir agil, was bedeutet, dass wir viel Eigenverantwortung haben, aber auch ständig voneinander lernen. Fehler sind kein Tabu, sondern eine Gelegenheit, besser zu werden.</p><h5>Herausforderungen und Highlights</h5><p>Eine meiner größten Herausforderungen war die Migration eines Legacy-Systems auf eine moderne Cloud-Architektur. Es war technisch anspruchsvoll, aber genau das macht es spannend! Am Ende war es ein Erfolg – und ich hatte das Gefühl, wirklich etwas bewirkt zu haben.</p><h5>Fazit</h5><p>StepAhead gibt mir nicht nur die Möglichkeit, mich technisch weiterzuentwickeln, sondern auch in einem großartigen Team zu arbeiten. Wer moderne Softwareentwicklung liebt und ein dynamisches Umfeld sucht, ist hier genau richtig.</p>",
            imageSource: "./assets/images/details/StepAheadLogo.png"
        },
    };

    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    function showDetailPost() {
        const detailId = getQueryParam("id");
        const detail = detailPosts[detailId];

        if (detail) {
            document.title = detail.title;
            document.getElementById("detail-header").innerHTML = detail.header;
            document.getElementById("detail-content").innerHTML = detail.content;
            document.getElementById("detail-image").src = detail.imageSource;
        } else {
            document.title = "Detail nicht gefunden";
            document.getElementById("detail-header").innerHTML = "Detail nicht gefunden";
            document.getElementById("detail-content").innerHTML = "Dieser Detail-Eintrag existiert nicht.";
            document.getElementById("detail-image").addClass("hidden");
        }
    }

    function flyIn(selector) {
        const image = document.querySelector(selector);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    image.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(image);
    }

    showDetailPost();

    flyIn('.header-fly-in-top');
    flyIn('.titel-fly-in-bottom');
    flyIn('.content-fly-in-bottom');
}