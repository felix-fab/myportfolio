const works = ['detail-website', 'detail-software', 'detail-tests', 'detail-individuals'];

function showWork(index, init = false) {
  const work = works[index];
  const all = document.querySelectorAll('.work-detail');

  all.forEach(el => {
    el.classList.remove('show-detail');
  });

  const next = document.getElementById(work);
  next.classList.add('show-detail');

  const workItems = document.querySelectorAll('.work-item');
  workItems.forEach(element => {
    element.classList.remove('selected');
  })

  workItems[index].classList.add('selected')

  if (!init && window.innerWidth <= 1092) {
    document.getElementById('workDetail').scrollIntoView({ behavior: 'smooth' });
  }
}

function goToContact() {
  location.href = './index.html#contact-me';
}

function flyIn(selector) {
  const image = document.querySelector(selector);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        image.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  observer.observe(image);
}

showWork(0, true);

flyIn('.work-fly-in-title');
flyIn('.work-fly-in-content');