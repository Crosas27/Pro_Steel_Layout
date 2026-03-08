import { formatToField } from "../utils/formatter.js";

export function renderRibTable(model) {

  const container = document.getElementById("ribTable");

  if (!container) return;

  container.innerHTML = "";

  const table = document.createElement("table");

  const header = document.createElement("tr");

  header.innerHTML = `
  <th>Rib</th>
  <th>Position</th>
  `;

  table.appendChild(header);

  model.ribs.forEach(rib => {

    const row = document.createElement("tr");

    row.innerHTML = `
    <td>R${rib.index}</td>
    <td>${formatToField(rib.position)}</td>
    `;

    table.appendChild(row);

  });

  container.appendChild(table);

}
