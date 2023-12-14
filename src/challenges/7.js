function drawGift(size, symbol) {
  let giftLine = '#';
  let giftBorders = 2;
  let drawing = '';
  let tdBox = [];
  let tdBoxBottom = [];

  function drawTop() {
    let top = [];
    let bottom = [];
    let spaces = size - 1;
    let charsPerLine = size * 2 - 1;
    let halfChars
    let restChars
    let halfRestChars

    for (let i = 0; i < size; i++) {
      top = `${' '.repeat(spaces)}${giftLine}`.split('');

      if (i === 0) {
        halfChars = halfRestChars = giftLine
        .repeat(charsPerLine - top.length)
        .split('');
        bottom = halfChars.concat([giftLine])
      } else if (i === size - 1) {
        halfChars = giftLine.repeat(size - 1).split('');
        restChars = `${symbol.repeat(i - 1)}${giftLine}`.split('');
        halfRestChars = halfChars.concat(restChars)
        bottom.length = 0;
      } else if (i > 0 && i < size) {
        // fill
        halfChars = symbol.repeat(size - giftBorders).split('');
        halfChars.push(giftLine);
        restChars = `${symbol.repeat(i - 1)}${giftLine}`.split('');

        halfRestChars = halfChars.concat(restChars);
        bottom = `${giftLine}${halfChars
        .concat(restChars)
        .join('')}`
        .split('');
      }
      top = top.concat(halfRestChars);
      spaces--;

      top.push(`\n`);

      if (bottom.length) {
        bottom.push(`\n`);
        tdBoxBottom.unshift(...bottom);
      }

      tdBox.push(...top);
    }
  }

  if (size === 1) {
    drawing = [giftLine, '\n'];
  } else {
    drawTop();
    drawing = tdBox.concat(tdBoxBottom)
  }

  return `${drawing.join && drawing.join("")}`;
}