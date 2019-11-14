let sheetW = double(25),
    sheetH = double(19),
    pageW = double(5.5),
    pageH = double(8.5),
    colorBarWidth = sheetW,
    colorBarHeight = double(.375),
    gripperWidth = sheetW,
    gripperHeight = double(.375),
    rows = [];


function double(x) {
    return parseFloat(x);
}

function pageHeight(bleedAmount = 0) {
    const bleed = bleedAmount * 2;
    return pageH + bleed;
}

function pageWidth(bleedAmount = 0) {
    const bleed = bleedAmount * 2;
    return pageW + bleed;
}

function sheetHeight(margins = 0) {
    return sheetH - (colorBarHeight + gripperHeight + margins);
}

function sheetWidth(margins = 0) {
    return sheetW - margins;
}

// Portrait normal bleed
Math.floor(sheetWidth() / pageWidth(.125))//?
Math.floor(sheetHeight() / pageHeight(.125)) //?

// Landscape normal bleed
Math.floor(sheetWidth(.5) / pageHeight(.125))//?
Math.floor(sheetHeight() / pageWidth(.125)) //?

// Portrait small bleed
Math.floor(sheetWidth() / pageWidth(.0625))//?
Math.floor(sheetHeight() / pageHeight(.0625)) //?

// Landscape small bleed
Math.floor(sheetWidth(.5) / pageHeight(.0625))//?
Math.floor(sheetHeight() / pageWidth(.0625)) //?

// Portrait no bleed
Math.floor(sheetWidth() / pageWidth())//?
Math.floor(sheetHeight() / pageHeight()) //?

// Landscape no bleed
Math.floor(sheetWidth(.5) / pageHeight())//?
Math.floor(sheetHeight() / pageWidth()) //?