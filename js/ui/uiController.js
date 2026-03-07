import { generateSidewall } from "../engines/sidewallEngine.js";
import { renderSvg } from "../renderers/svgRenderer.js";
import { renderRibTable } from "../tables/ribTableRenderer.js";

export function initUI() {

  const btn = document.getElementById("renderBtn");

  if (!btn) {
    console.warn("Render button missing");
    return;
  }

  btn.addEventListener("click", handleRender);

}

function handleRender() {

  const wallLength = parseFloat(document.getElementById("wallLength").value) || 0;
  const ribSpacing = parseFloat(document.getElementById("ribSpacing").value) || 12;
  const panelCoverage = parseFloat(document.getElementById("panelCoverage").value) || 36;
  const startOffset = parseFloat(document.getElementById("offset").value) || 0;

  const config = {
    wallLength,
    ribSpacing,
    panelCoverage,
    startOffset
  };

  const model = generateSidewall(config);

  console.log("MODEL:", model);

  renderSvg(model);
  renderRibTable(model);

}
