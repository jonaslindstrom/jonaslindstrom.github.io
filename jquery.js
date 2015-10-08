var $chart = $('.ct-chart, .ct-chart-one, .ct-chart-two, .ct-chart-three, .ct-chart-four, .ct-chart-five, .ct-chart-five');

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

var $chartbar = $('.ct-chart-six');

var $toolTip2 = $chartbar
  .append('<div class="ct-toolTip2"></div>')
  .find('.ct-toolTip2')
  .hide();

$chartbar.on('mouseenter', '.ct-series', function() {
  var $point = $(this),
    value = $point.val('ct:series-val'),
    seriesName = $point.attr('ct:series-name');
  $toolTip2.html(seriesName).show();
});

$chartbar.on('mouseleave', '.ct-series', function() {
  $toolTip2.hide();
});

$chartbar.on('mousemove', function(event) {
  $toolTip2.css({
    left: (event.offsetX || event.originalEvent.layerX) - $toolTip2.width() / 2 - 10,
    top: (event.offsetY || event.originalEvent.layerY) - $toolTip2.height() - 40
  });
});

