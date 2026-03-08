import { formatToField } from "../utils/formatter.js";

export function renderSvg(model) {

  const svg = document.getElementById("wallSvg");
  if (!svg) return;

  svg.innerHTML = "";

  const wallLength = model.wallLength;
  const ribs = model.ribs;

  const width = svg.clientWidth || 900;
  const height = 260;

  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.setAttribute("shape-rendering", "crispEdges");

  const scale = wallLength > 0 ? width / wallLength : 1;

  const wallTop = 80;
  const wallHeight = 80;

  const wall = document.createElementNS("http://www.w3.org/2000/svg", "rect");

  wall.setAttribute("x", 0);
  wall.setAttribute("y", wallTop);
  wall.setAttribute("width", wallLength * scale);
  wall.setAttribute("height", wallHeight);

  wall.setAttribute("class", "wall-outline");

  svg.appendChild(wall);

  ribs.forEach((rib) => {

    const x = rib.position * scale;

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

    line.setAttribute("x1", x);
    line.setAttribute("x2", x);
    line.setAttribute("y1", wallTop);
    line.setAttribute("y2", wallTop + wallHeight);

    line.setAttribute("class", "rib-line");

    svg.appendChild(line);

  });

}
