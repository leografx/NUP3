let sheetWidth = double(25),
    sheetHeight = double(19),
    pageWidth = double(11),
    pageHeight = double(6),
    colorBarWidth = sheetWidth,
    colorBarHeight = double(.375),
    gripperWidth = sheetWidth,
    gripperHeight = double(.375),
    nupWidth = sheetWidth,
    nupHeight = sheetHeight - (colorBarHeight + gripperHeight),
    nupWidthSwing = sheetWidth,
    nupHeightSwing = sheetHeight - (colorBarHeight + gripperHeight),
    nupX = 0,
    nupY = 0,
    nupYSwing = 0,
    nupXSwing = 0,
    nupAmount;

function double(x) {
    return parseFloat(x);
}

function nupWithBleed(bleedAmount) {
    let bleed = double(bleedAmount * 2); //?
    let colorBarArea = colorBarWidth * colorBarHeight; //?
    let gripperArea = gripperWidth * gripperHeight; //?
    let sheetArea = (sheetWidth * sheetHeight) - (gripperArea + colorBarArea); //?
    let pageArea = (pageWidth + bleed) * (pageHeight + bleed); //?

    return Math.floor(sheetArea / pageArea); //?

}


function addPagesX(bleedAmount) {
    let bleed = bleedAmount * 2;
    if (nupWidth > pageWidth) {
        nupWidth = nupWidth - (pageWidth + bleed); //?
        nupX++;
        addPagesX(bleedAmount);
    }
}

function addPagesY(bleedAmount) {
    let bleed = bleedAmount * 2;
    if (nupHeight > pageHeight) {
        nupHeight = nupHeight - (pageHeight + bleed); //?
        nupY++;
        addPagesY(bleedAmount);
    }
}

function addPagesXSwing(bleedAmount) {
    let bleed = bleedAmount * 2;
    if (nupWidthSwing > pageHeight) {
        nupWidthSwing = nupWidthSwing - (pageHeight + bleed); //?
        nupXSwing++;
        addPagesXSwing(bleedAmount);
    }
}

function addPagesYSwing(bleedAmount) {
    let bleed = bleedAmount * 2;
    if (nupHeightSwing > pageHeight) {
        nupHeightSwing = nupHeightSwing - (pageHeight + bleed); //?
        nupYSwing++;
        addPagesYSwing(bleedAmount);
    }
}

addPagesX(.0625)
addPagesY(.0625)
addPagesXSwing(.0625)
addPagesYSwing(.0625)
nupWithBleed(.125);

nupX //? 
nupY
nupXSwing //?
nupYSwing //?

let resultX = (nupX > nupXSwing) ? nupX : nupXSwing //?
let resultY = (nupY > nupYSwing) ? nupY : nupYSwing //?

let NUP = resultX + resultY; //?