window.addEventListener('DOMContentLoaded', () => {
    let wrapper = document.getElementById('websitePage');
    let topLayer = wrapper.querySelector('#main');
    let slider = wrapper.querySelector('#slider');
    let skew = 1000;
    let allowDrag = true;
    let delta = 0;

    const moveSlider = (event) => {
      delta = (event.clientX - window.innerWidth / 2) * 0.5;
      topLayer.style.width = event.clientX + skew + delta + 'px';
      //slider.style.left = event.clientX + skew + delta + 'px';
    };

    wrapper.addEventListener('click', (event) => {
      if (window.innerWidth > 768) {
        allowDrag ? wrapper.addEventListener('mousemove', moveSlider) : wrapper.removeEventListener('mousemove', moveSlider);
        allowDrag = !allowDrag;
      }
    });
  });
