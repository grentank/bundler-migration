const craInitTime = [
  { start: 1709714538894, end: 1709714656275 }, // первый
  { start: 1709714782725, end: 1709714799576 }, // повторный
  { start: 1709714820888, end: 1709714836874 }, // повторный
  { start: 1709714858024, end: 1709714876212 }, // повторный
  { start: 1709715604426, end: 1709715713285 }, // первый
  { start: 1709715864500, end: 1709715880076 }, // повторный
  { start: 1709715890744, end: 1709715908822 }, // повторный
  { start: 1709715964445, end: 1709715978041 }, // повторный
];

const craPageTransitions = [
  { start: 1709715763981, end: 1709715763996 },
  { start: 1709715833324, end: 1709715833345 },
];

const craBuildTime = [
  { start: 1709716104134, end: 1709716166710, jsGzip: 150.51, cssGzip: 7.67 }, // первый
  { start: 1709716238732, end: 1709716278587, jsGzip: 150.51, cssGzip: 7.67 }, // второй
  { start: 1709716382738, end: 1709716422187, jsGzip: 150.51, cssGzip: 7.67 }, // третий
  { start: 1709716429449, end: 1709716467024, jsGzip: 150.51, cssGzip: 7.67 }, // четвертый
];

const craInstallTime = [
    { start: 1709716620459, end: 1709716654474 }, 
]

const diff = craInitTime.map((metric) => ({
  ...metric,
  diff: (metric.end - metric.start) / 1000,
}));
console.table(diff);

const buildDiff = craBuildTime.map((metric) => ({
  ...metric,
  diff: (metric.end - metric.start) / 1000,
}));
console.table(buildDiff);
