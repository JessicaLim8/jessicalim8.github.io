window.addEventListener('DOMContentLoaded', () => {
  let wrapper = document.getElementById('websitePage');
  let topLayer = wrapper.querySelector('#main');
  let skew = 1000;
  let delta = 0;

  wrapper.addEventListener('mousemove', (event) => {
    delta = (event.clientX - window.innerWidth / 2) * 0.5;
    topLayer.style.width = event.clientX + skew + delta + "px";
  });
});
