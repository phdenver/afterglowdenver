// jQuery mobile navigation for Afterglow Vintage.
// The menu opens and closes when the menu button is clicked.
$(function () {
  const $button = $('.menu-button');
  const $nav = $('.main-nav');

  $button.attr('aria-expanded', 'false').attr('aria-controls', 'main-navigation');
  $nav.attr('id', 'main-navigation');

  $button.on('click', function () {
    const isOpen = $nav.toggleClass('is-open').hasClass('is-open');
    $button.attr('aria-expanded', String(isOpen));
    $button.attr('aria-label', isOpen ? 'Close menu' : 'Open menu');
    $button.text(isOpen ? '✕' : '☰');
  });

  $nav.find('a').on('click', function () {
    $nav.removeClass('is-open');
    $button.attr('aria-expanded', 'false').attr('aria-label', 'Open menu').text('☰');
  });

  $(window).on('resize', function () {
    if (window.innerWidth > 600) {
      $nav.removeClass('is-open');
      $button.attr('aria-expanded', 'false').attr('aria-label', 'Open menu').text('☰');
    }
  });
});
