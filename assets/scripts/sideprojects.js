const works = [
    {
        title: "Projekt Eins",
        image: "https://via.placeholder.com/900x500?text=Projekt+1",
        description: "Ein Fotoprojekt, das mit Architektur, Licht und Schatten spielt. Ziel war es, Formen in der Stadt visuell neu zu interpretieren."
    },
    {
        title: "Projekt Zwei",
        image: "https://via.placeholder.com/900x500?text=Projekt+2",
        description: "Ein experimentelles Editorial-Design für ein fiktives Kunstmagazin. Fokus lag auf mutiger Typografie und dynamischen Layouts."
    }
];

function showWork(index) {
    const work = works[index];
    const detail = document.getElementById("workDetail");

    detail.innerHTML = `
      <div class="work-detail">
        <img src="${work.image}" alt="${work.title}">
        <h1>${work.title}</h1>
        <p>${work.description}</p>
      </div>
    `;
}
