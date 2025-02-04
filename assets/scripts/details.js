const detailPosts = {
    "0001": {
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

document.addEventListener("DOMContentLoaded", showDetailPost);