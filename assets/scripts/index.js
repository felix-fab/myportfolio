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
            infinite: false,
            speed: 1500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 8000,
            responsive: [
                {
                    breakpoint: 1638,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 1240,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: true
                    }
                },
            ]
        });

        $('.references-carousel').slick('slickSetOption', 'infinite', false, true);
    }

    function setProjectShowMoreEvent() {
        $('#project-show-more').click(function () {
            if (!projectShowMore) {
                $('.projects-mobile-show-more').fadeIn(500);

                $(this).text('Weniger anzeigen');
            } else {
                $('.projects-mobile-show-more').fadeOut(500);

                const target = document.getElementById("projects");
                target.scrollIntoView({ behavior: "smooth" });

                $(this).text('Mehr anzeigen');
            }

            projectShowMore = !projectShowMore;
        });
    }

    function setMoreButtonAction() {

        $('#myPortfolio').click(function () {
            location.href = '#references';
        });

        let StudiumMore = $("#StudiumMore");
        StudiumMore.on("click", function(event) {
            location.href = 'details.html?id=0001';
        });

        StudiumMore.on("mousedown", function(event) {
            openNewTab(event, "details.html?id=0001");
        });

        let FOSMore = $("#FOSMore");
        FOSMore.on("click", function(event) {
            location.href = 'details.html?id=0002';
        });

        FOSMore.on("mousedown", function(event) {
            openNewTab(event, "details.html?id=0002");
        });

        let FulltimeMore = $("#FulltimeMore");
        FulltimeMore.on("click", function(event) {
            location.href = 'details.html?id=0003';
        });

        FulltimeMore.on("mousedown", function(event) {
            openNewTab(event, "details.html?id=0003");
        });

        let EducationMore = $("#EducationMore");
        EducationMore.on("click", function(event) {
            location.href = 'details.html?id=0004';
        });

        EducationMore.on("mousedown", function(event) {
            openNewTab(event, "details.html?id=0004");
        });

        let SchoolDiplomaMore = $("#SchoolDiplomaMore");
        SchoolDiplomaMore.on("click", function(event) {
            location.href = 'details.html?id=0005';
        });

        SchoolDiplomaMore.on("mousedown", function(event) {
            openNewTab(event, "details.html?id=0005");
        });

        let WohnPilotMore = $("#WohnPilotMore");
        WohnPilotMore.on("click", function(event) {
            location.href = 'details.html?id=0006';
        });

        WohnPilotMore.on("mousedown", function(event) {
            openNewTab(event, "details.html?id=0006");
        });

        let PortfolioMore = $("#PortfolioMore");
        PortfolioMore.on("click", function(event) {
            location.href = 'details.html?id=0007';
        });

        PortfolioMore.on("mousedown", function(event) {
            openNewTab(event, "details.html?id=0007");
        });

        let NaosControllerMore = $("#NaoControllerMore");
        NaosControllerMore.on("click", function(event) {
            location.href = 'details.html?id=0008';
        });

        NaosControllerMore.on("mousedown", function(event) {
            openNewTab(event, "details.html?id=0008");
        });
    }

    function setFormularSendEvent() {
        document.getElementById('contact-me').addEventListener('submit', function (event) {
            event.preventDefault();

            /*var firstName = document.getElementById('contact-firstName').value;
            var lastName = document.getElementById('contact-lastName').value;
            var email = document.getElementById('contact-email').value;
            var mobileNumber = document.getElementById('contact-mobileNumber').value;

            var subject = document.getElementById('contact-subject').value;
            var message = document.getElementById('contact-message').value;

            var templateParams = {
                firstName,
                lastName,
                email,
                mobileNumber,
                subject,
                message
            };

            fetch("https://default-api-manager.felixfab.de/send-contact-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(templateParams),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        console.log("Kontakt erfolgreich gesendet");

                        const modal = document.getElementById('successModal');
                        modal.style.display = 'flex';
                    } else {
                        console.log('FAILED...', error);
                    }
                })
                .catch(error => console.error("Fehler:", error));
                */

            const modal = document.getElementById('successModal');
            modal.style.display = 'flex';
        });

        document.getElementById('dialogOk').addEventListener('click', function (event) {
            event.preventDefault();

            const modal = document.getElementById('successModal');
            modal.style.display = 'none';
        });
    }

    function openNewTab(event ,url){
        if (event.button === 1) {
            let newWindow = window.open(url, "_blank");
            if (newWindow) {
                newWindow.focus();
            } else {
                alert("Bitte Pop-up-Blocker deaktivieren, um die Seite zu öffnen.");
            }
            event.preventDefault();
        }
    }

    function configCanvasElement(){
        const canvas = document.getElementById("modal-canvas");
        const ctx = canvas.getContext("2d");

        let x = (canvas.width - 100) / 2;
        let y = (canvas.height - 60) / 2;
        let shakeOffset = 0;
        let shaking = false;
        let shakeDuration = 0;
        let timeElapsed = 0;

        function drawEnvelope() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let shakeX = x + shakeOffset;

        ctx.fillStyle = "#FFA500";
        ctx.fillRect(shakeX, y, 100, 60);
        ctx.strokeRect(shakeX, y, 100, 60);

        ctx.beginPath();
        ctx.moveTo(shakeX, y);
        ctx.lineTo(shakeX + 50, y - 30);
        ctx.lineTo(shakeX + 100, y);
        ctx.closePath();
        ctx.fillStyle = "#FF8C00";
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(shakeX, y);
        ctx.lineTo(shakeX + 50, y + 30);
        ctx.lineTo(shakeX + 100, y);
        ctx.strokeStyle = "#000000";
        ctx.stroke();
        }

        function shakeEnvelope() {
        if (shaking) {
            timeElapsed += 0.08;

            shakeOffset = Math.sin(timeElapsed * 2) * 10;

            drawEnvelope();

            if (timeElapsed > shakeDuration) {
            shaking = false;
            timeElapsed = 0;
            }
        }
        }

        function startShaking() {
            shaking = true;
            shakeDuration = 0.5;
            timeElapsed = 0;
        }

        setInterval(() => {
            startShaking();
        }, 2500);

        function animate() {
            shakeEnvelope();
            requestAnimationFrame(animate);
        }

        animate();
        drawEnvelope();
    }

    typewriter();

    openReferencesCarousel();
    setProjectShowMoreEvent();

    setMoreButtonAction();
    setFormularSendEvent();

    configCanvasElement();

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

    flyIn('.contact-me-fly-in-title');
    flyIn('.contact-me-fly-in-content-name-left');
    flyIn('.contact-me-fly-in-content-name-right');
    flyIn('.contact-me-fly-in-content-data-left');
    flyIn('.contact-me-fly-in-content-data-right');
    flyIn('.contact-me-fly-in-content-bottom');
};

