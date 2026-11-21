window.onload = function () {
    function flyIn(selector) {
        const element = document.querySelector(selector);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    element.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(element);
    }

    flyIn('.error-fly-in-top');
    flyIn('.titel-fly-in-bottom');
    flyIn('.content-fly-in-bottom');
};
