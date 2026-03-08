import { formatToField } from "../utils/formatter.js";

export function renderRibTable(model) {

  const container = document.getElementById("ribTable");

  if (!container) return;

  container.innerHTML = "";

  const ribs = model.ribs;
  const panels = model.panels;
  const wallLength = model.wallLength;

  const panelCount = panels.length;

  const summary = document.createElement("div");

  summary.innerHTML = `
    <h3>Layout Summary</h3>

    <p><strong>Total Panels:</strong> ${panelCount}</p>
    <p><strong>Wall Length:</strong> ${formatToField(wallLength)}</p>

    <h4>Rib Layout</h4>
  `;

  container.appendChild(summary);

  const list = document.createElement("ul");

  ribs.forEach((rib, index) => {

    const li = document.createElement("li");

    const inches = Math.round(rib.position);

    li.textContent =
      `Rib ${index + 1} — ${formatToField(rib.position)} (${inches}")`;

    list.appendChild(li);

  });

  container.appendChild(list);

}
