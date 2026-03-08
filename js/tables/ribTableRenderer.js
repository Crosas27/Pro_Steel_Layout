import { formatToField } from "../utils/formatter.js";

export function renderRibTable(model) {

  const container = document.getElementById("ribTable");
  if (!container) return;

  container.innerHTML = "";

  const ribs = model.ribs || [];
  const panels = model.panels || [];
  const wallLength = model.wallLength || 0;

  const panelCount = panels.length;

  const title = document.createElement("h3");
  title.textContent = "Layout Summary";
  container.appendChild(title);

  const panelLine = document.createElement("p");
  panelLine.textContent = "Total Panels: " + panelCount;
  container.appendChild(panelLine);

  const wallLine = document.createElement("p");
  wallLine.textContent = "Wall Length: " + formatToField(wallLength);
  container.appendChild(wallLine);

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
