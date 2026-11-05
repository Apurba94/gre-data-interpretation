/* Data Interpretation Lab: generated charts and tables with questions on change, share, average and ratio. */
(function () {
  'use strict';
  const TIPS = [
    ['Read the labels first', 'Title, units and scale. Thousands or percent? A y-axis that starts above zero exaggerates differences.'],
    ['Estimate before you calculate', 'Many choices are far apart. Rounding can be enough.'],
    ['Percent change', '(new − old) ÷ old. The base is the earlier value.'],
    ['Share of total', 'Add up the parts first. A part ÷ the total × 100 gives the percent.'],
    ['Use the calculator wisely', 'Data questions are where the on-screen calculator helps most.'],
  ];
  const App = {
    about: 'GRE data interpretation sets give a chart or table and several questions about it. This app generates a new data set every time, with a bar chart and the matching table, and five questions on percent change, share of total, average, comparison and ratio, each with the calculation shown.',
    how: ['Press **New data set** in **Practice**.', 'Read the chart title and units before answering.', 'Type numeric answers, rounded as each question asks.'],
    tabs: [
      { id: 'practice', label: 'Practice', render(el) {
        const start = () => {
          const d = SK.makeDataSet(SK.seedNow());
          SK.quiz(el, d.items, { title: d.title, mode: 'practice', onAgain: start });
        };
        el.appendChild(SK.card('Data interpretation', SK.h('p', { class: 'sk-muted', text: 'Each set has one chart and five questions.' }), SK.btn('New data set', start, '', { 'data-auto': 'once' })));
      } },
      { id: 'tips', label: 'Tips', render(el) { el.appendChild(SK.card('Tips', SK.table(['Habit', 'Why'], TIPS, false))); } },
    ],
    checks: {
      'every data set has five valid questions about the same chart': (data, assert) => {
        for (let s = 1; s < 60; s++) {
          const d = SK.makeDataSet(s);
          assert.equal(d.items.length, 5);
          for (const it of d.items) { assert.deepEqual(SK.validateItem(it), []); assert.deepEqual(it.figure.values, d.values); assert.ok(SK.isCorrect(it, it.answer)); }
        }
      },
    },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = App; else SK.start(App);
})();
