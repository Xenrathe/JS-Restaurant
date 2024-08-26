export function addImgOverlayEventToCards() {
  const imageOverlay = document.querySelector('#image-overlay');
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      const overlaySrc = card.querySelector('img').getAttribute('src');
      imageOverlay.querySelector('img').src = overlaySrc;
      imageOverlay.classList.remove('hidden');
      imageOverlay.classList.add('flex');
    });
  });
}