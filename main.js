$('section:not(:first)').addClass('hidden');
$('.accordian').on('click', 'h2', function () {
  $(this).parent().removeClass('hidden').siblings().addClass('hidden');
});
