var $chart = $('.ct-chart, .ct-chart-one, .ct-chart-two, .ct-chart-three, .ct-chart-four, .ct-chart-five, .ct-chart-six');

var $toolTip = $chart
  .append('<div class="ct-tooltip"></div>')
  .find('.ct-tooltip')
  .hide();

$chart.on('mouseenter', '.ct-point', function() {
  var $point = $(this),
    value = $point.attr('ct:value'),
    seriesName = $point.parent().attr('ct:series-name');
  $toolTip.html(seriesName + '<br>' + value).show();
});

$chart.on('mouseleave', '.ct-point', function() {
  $toolTip.hide();
});

$chart.on('mousemove', function(event) {
  $toolTip.css({
    left: (event.offsetX || event.originalEvent.layerX) - $toolTip.width() / 2 - 10,
    top: (event.offsetY || event.originalEvent.layerY) - $toolTip.height() - 40
  });
});
