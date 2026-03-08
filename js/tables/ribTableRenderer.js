import { formatToField } from "../utils/formatter.js";

export function renderRibTable(model) {

  const container = document.getElementById("ribTable");
  if (!container) return;

  container.innerHTML = "";

  const ribs = model.ribs || [];
  const panels = model.panels || [];
  const wallLength = model.wallLength || 0;

  const panelCount = panels.length;

  // Title
  const title = document.createElement("h3");
  title.textContent = "Layout Summary";
  container.appendChild(title);

  // Panel count
  const panelText = document.createElement("p");
  panelText.innerHTML = "<strong>Total Panels:</strong> " + panelCount;
  container.appendChild(panelText);

  // Wall length
  const wallText = document.createElement("p");
  wallText.innerHTML = "<strong>Wall Length:</strong> " + formatToField(wallLength);
  container.appendChild(wallText);

  // Rib section title
  const ribTitle = document.createElement("h4");
  ribTitle.textContent = "Rib Layout";
  container.appendChild(ribTitle);

  const list = document.createElement("ul");

  ribs.forEach(function(rib, index) {

    const li = document.createElement("li");

    const inches = Math.round(rib.position);

    li.textContent =
      "Rib " +
      (index + 1) +
      " — " +
      formatToField(rib.position) +
      " (" +
      inches +
      '")';

    list.appendChild(li);

  });

  container.appendChild(list);
}
