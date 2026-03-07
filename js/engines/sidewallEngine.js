export function generateSidewall(config) {

  const ribs = calculateRibs(config);
  const panels = calculatePanels(config);

  return {

    wallLength: config.wallLength,
    ribSpacing: config.ribSpacing,
    panelCoverage: config.panelCoverage,

    ribs,
    panels

  };

}


function calculateRibs({ wallLength, ribSpacing, startOffset }) {

  const ribs = [];

  let pos = startOffset;

  let index = 0;

  while (pos <= wallLength) {

    ribs.push({
      index,
      position: pos
    });

    pos += ribSpacing;
    index++;

  }

  return ribs;

}


function calculatePanels({ wallLength, panelCoverage }) {

  const panels = [];

  let x = 0;

  while (x < wallLength) {

    const end = Math.min(x + panelCoverage, wallLength);

    panels.push({
      start: x,
      end
    });

    x += panelCoverage;

  }

  return panels;

}
