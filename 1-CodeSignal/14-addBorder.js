function addBorder(picture) {
  const initalElementLength = picture[0].length;
  picture = picture.map((el) => {
    return `*${el}*`;
  });

  let borderTopDown = "**";
  for (let i = 0; i < initalElementLength; i++) {
    borderTopDown += "*";
  }
  picture.push(borderTopDown);
  picture.unshift(borderTopDown);

  return picture;
}

function addBorder(picture) {
  var width = picture[0].length + 2;
  return [
    "*".repeat(width),
    ...picture.map((line) => `*${line}*`),
    "*".repeat(width),
  ];
}
