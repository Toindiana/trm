function creatingScale(range, scale) {
  const width = scale.clientWidth / range;

  const lineScale = document.createElement('div');
  lineScale.classList.add('lineScale');

  for (let i = 1; i <= range; i++) {
    const line = document.createElement('div');
    line.style.width = `${width}px`;

    lineScale.appendChild(line);

    if (i % 10 == 0 || i == 1) {
      line.classList.add('scaleLine');
    } else {
      line.classList.add('empty');
    }

    if (
      i == 1 ||
      i == 100 ||
      i == 200 ||
      i == 300 ||
      i == 400 ||
      i == 500 ||
      i == 600
    ) {
      line.classList.add('scaleLineBig');
      line.dataset.big = i;
    }
  }

  scale.appendChild(lineScale);

  const bigLines = document.querySelectorAll('.scaleLineBig');
  bigLines.forEach((el, ind) => {
    const span = document.createElement('span');
    span.classList.add('bigLineText');
    span.textContent = el.dataset.big;

    el.appendChild(span);

    if (ind === 0) {
      span.style.left = '-8px';
      span.textContent = 0;
    }
  });
}

export default creatingScale;
