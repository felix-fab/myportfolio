window.onload = function () {

    const texts = ["Kreativer App-Designer", "Problemlöser", "Anwendungsentwickler", "Team Player", "Technischer Berater"];
    const typingSpeed = 200;
    const deletingSpeed = 100;
    const delayBetweenTexts = 2000;
    const element = document.querySelector('.typewriter');

    let projectShowMore = false;

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typewriter() {
        const currentText = texts[textIndex];
        let visibleText;

        if (isDeleting) {
            visibleText = currentText.substring(0, charIndex) + (charIndex === 0 ? '' : ' ');
            charIndex--;
        } else {
            visibleText = currentText.substring(0, charIndex);
            charIndex++;
        }

        element.textContent = visibleText;

        if (!isDeleting && charIndex === currentText.length) {
            setTimeout(() => (isDeleting = true), delayBetweenTexts);
        }

        if (isDeleting && charIndex < 0) {
            isDeleting = false;
            charIndex = 0;
            textIndex = (textIndex + 1) % texts.length;
        }

        const speed = isDeleting ? deletingSpeed : typingSpeed;
        setTimeout(typewriter, speed);
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
        }, { threshold: 0.5 });

        observer.observe(image);
    }

    function openReferencesCarousel() {
        $('.references-carousel').slick({
            dots: true,
            infinite: true,
            speed: 1500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 8000,
            responsive: [
                {
                    breakpoint: 1638,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 1240,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
            ]
        });
    }

    function setProjectShowMoreEvent() {
        $('#project-show-more').click(function () {
            if (!projectShowMore) {
                $('.projects-mobile-show-more').fadeIn(500);

                $(this).text('Weniger anzeigen');
            } else {
                $('.projects-mobile-show-more').fadeOut(500);

                $(this).text('Mehr anzeigen');
            }

            projectShowMore = !projectShowMore;
        });
    }

    typewriter();

    openReferencesCarousel();
    setProjectShowMoreEvent();

    flyIn('.home-fly-in-right');
    flyIn('.home-fly-in-left');

    flyIn('.home-fly-in-title');
    flyIn('.home-fly-in-description');

    flyIn('.about-me-fly-in-right');
    flyIn('.about-me-fly-in-left');
    flyIn('.about-me-fly-in-title');

    flyIn('.references-fly-in-title');
    flyIn('.references-fly-in-content');

    flyIn('.projects-fly-in-title');
    flyIn('.projects-fly-in-content');
};

