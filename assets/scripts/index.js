window.onload = function () {
    const lang = localStorage.getItem('language') || 'de';
    let texts = translations[lang].typewriter.texts;
    const typingSpeed = 200;
    const deletingSpeed = 100;
    const delayBetweenTexts = 2000;
    const element = document.querySelector('.typewriter');

    let projectShowMore = false;

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typewriterTimeout = null;

    function typewriter() {
        // Clear any existing timeout
        if (typewriterTimeout) {
            clearTimeout(typewriterTimeout);
        }
        
        // Safety check: ensure texts array and current text exist
        if (!texts || texts.length === 0 || textIndex >= texts.length) {
            typewriterTimeout = setTimeout(typewriter, 100);
            return;
        }
        
        const currentText = texts[textIndex];
        
        // Additional safety check for undefined text
        if (!currentText) {
            textIndex = 0;
            typewriterTimeout = setTimeout(typewriter, 100);
            return;
        }
        
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
            typewriterTimeout = setTimeout(() => {
                isDeleting = true;
                typewriter();
            }, delayBetweenTexts);
            return;
        }

        if (isDeleting && charIndex < 0) {
            isDeleting = false;
            charIndex = 0;
            textIndex = (textIndex + 1) % texts.length;
        }

        const speed = isDeleting ? deletingSpeed : typingSpeed;
        typewriterTimeout = setTimeout(typewriter, speed);
    }

    // Create global typewriter instance for i18n updates
    window.typewriterInstance = {
        updateTexts: function(newTexts) {
            if (!newTexts || newTexts.length === 0) return;
            
            // Clear any pending timeout
            if (typewriterTimeout) {
                clearTimeout(typewriterTimeout);
                typewriterTimeout = null;
            }
            
            // Update texts reference
            texts = newTexts;
            
            // Reset state
            textIndex = 0;
            charIndex = 0;
            isDeleting = false;
            
            // Clear current text and restart immediately
            element.textContent = '';
            typewriter();
        }
    };

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
            const lang = localStorage.getItem('language') || 'de';
            const showMoreText = translations[lang].projects.showMore;
            const showLessText = translations[lang].projects.showLess;
            
            if (!projectShowMore) {
                $('.projects-mobile-show-more').fadeIn(500);

                $(this).attr('data-i18n', 'projects.showLess');
                $(this).text(showLessText);
                $(this).blur();
            } else {
                $('.projects-mobile-show-more').fadeOut(500);

                const target = document.getElementById("projects");
                target.scrollIntoView({ behavior: "smooth" });

                $(this).attr('data-i18n', 'projects.showMore');
                $(this).text(showMoreText);
                $(this).blur();
            }

            projectShowMore = !projectShowMore;
        });
    }

    function setMoreButtonAction() {

        $('#mySideprojects').click(function () {
            location.href = './sideprojects.html';

        });

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

        let DevOpsDeveloper = $("#DevOpsDeveloper");
        DevOpsDeveloper.on("click", function(event) {
            location.href = 'details.html?id=0002';
        });

        DevOpsDeveloper.on("mousedown", function(event) {
            openNewTab(event, "details.html?id=0002");
        });

        let SecondLevelSupport = $("#SecondLevelSupport");
        SecondLevelSupport.on("click", function(event) {
            location.href = 'details.html?id=0003';
        });

        SecondLevelSupport.on("mousedown", function(event) {
            openNewTab(event, "details.html?id=0003");
        });

        let WebDeveloper = $("#WebDeveloper");
        WebDeveloper.on("click", function(event) {
            location.href = 'details.html?id=0004';
        });

        WebDeveloper.on("mousedown", function(event) {
            openNewTab(event, "details.html?id=0004");
        });

        let FOSMore = $("#FOSMore");
        FOSMore.on("click", function(event) {
            location.href = 'details.html?id=0005';
        });

        FOSMore.on("mousedown", function(event) {
            openNewTab(event, "details.html?id=0005");
        });

        let EducationMore = $("#EducationMore");
        EducationMore.on("click", function(event) {
            location.href = 'details.html?id=0006';
        });

        EducationMore.on("mousedown", function(event) {
            openNewTab(event, "details.html?id=0006");
        });

        let CrownUpMore = $("#CrownUpMore");
        CrownUpMore.on("click", function(event) {
            location.href = 'details.html?id=0007';
        });

        CrownUpMore.on("mousedown", function(event) {
            openNewTab(event, "details.html?id=0007");
        });

        let WohnPilotMore = $("#WohnPilotMore");
        WohnPilotMore.on("click", function(event) {
            location.href = 'details.html?id=0008';
        });

        WohnPilotMore.on("mousedown", function(event) {
            openNewTab(event, "details.html?id=0008");
        });

        let PortfolioMore = $("#PortfolioMore");
        PortfolioMore.on("click", function(event) {
            location.href = 'details.html?id=0009';
        });

        PortfolioMore.on("mousedown", function(event) {
            openNewTab(event, "details.html?id=0009");
        });

        let NaoControllerMore = $("#NaoControllerMore");
        NaoControllerMore.on("click", function(event) {
            location.href = 'details.html?id=0010';
        });

        NaoControllerMore.on("mousedown", function(event) {
            openNewTab(event, "details.html?id=00010");
        });

        let DarkAnimationsMore = $("#DarkAnimationsMore");
        DarkAnimationsMore.on("click", function(event) {
            location.href = 'details.html?id=0011';
        });

        DarkAnimationsMore.on("mousedown", function(event) {
            openNewTab(event, "details.html?id=0011");
        });

        let CrownUpDetailsBtn = $("#CrownUpDetailsBtn");
        CrownUpDetailsBtn.on("click", function(event) {
            location.href = 'details.html?id=0007';
        });

        CrownUpDetailsBtn.on("mousedown", function(event) {
            openNewTab(event, "details.html?id=0007");
        });

        let WohnPilotDetailsBtn = $("#WohnPilotDetailsBtn");
        WohnPilotDetailsBtn.on("click", function(event) {
            location.href = 'details.html?id=0008';
        });

        WohnPilotDetailsBtn.on("mousedown", function(event) {
            openNewTab(event, "details.html?id=0008");
        });

        let PortfolioDetailsBtn = $("#PortfolioDetailsBtn");
        PortfolioDetailsBtn.on("click", function(event) {
            location.href = 'details.html?id=0009';
        });

        PortfolioDetailsBtn.on("mousedown", function(event) {
            openNewTab(event, "details.html?id=0009");
        });

        let NaoControllerDetailsBtn = $("#NaoControllerDetailsBtn");
        NaoControllerDetailsBtn.on("click", function(event) {
            location.href = 'details.html?id=0010';
        });

        NaoControllerDetailsBtn.on("mousedown", function(event) {
            openNewTab(event, "details.html?id=0010");
        });

        let DarkAnimationsDetailsBtn = $("#DarkAnimationsDetailsBtn");
        DarkAnimationsDetailsBtn.on("click", function(event) {
            location.href = 'details.html?id=0011';
        });

        DarkAnimationsDetailsBtn.on("mousedown", function(event) {
            openNewTab(event, "details.html?id=0011");
        });

        let UpthoughsMore = $("#upthoughsMore");
        UpthoughsMore.on("click", function(event) {
            location.href = 'details.html?id=0012';
        });

        UpthoughsMore.on("mousedown", function(event) {
            openNewTab(event, "details.html?id=0012");
        });

        let HomelabMore = $("#HomeLabMore");
        HomelabMore.on("click", function(event) {
            location.href = 'details.html?id=0013';
        });

        HomelabMore.on("mousedown", function(event) {
            openNewTab(event, "details.html?id=0013");
        });
    }

    function setFormularSendEvent() {
        document.getElementById('contact-me').addEventListener('submit', function (event) {
            event.preventDefault();

            var firstName = document.getElementById('contact-firstName').value;
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
                        var toastEl = document.getElementById('errorMessage');
                        var toast = new bootstrap.Toast(toastEl);
                        toast.show();

                        console.log('Fehler: ' + JSON.stringify(data));
                    }
                })
                .catch(error => {
                    var toastEl = document.getElementById('errorMessage');
                    var toast = new bootstrap.Toast(toastEl);
                    toast.show();

                    console.error("Fehler: ", error)
                });
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

        if(canvas != null){
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

    flyIn('.featured-projects-fly-in-title');
    flyIn('.featured-projects-fly-in-content');

    flyIn('.contact-me-fly-in-title');
    flyIn('.contact-me-fly-in-content-name-left');
    flyIn('.contact-me-fly-in-content-name-right');
    flyIn('.contact-me-fly-in-content-data-left');
    flyIn('.contact-me-fly-in-content-data-right');
    flyIn('.contact-me-fly-in-content-bottom');

    flyIn('.featured-projects-fly-in-title');
    flyIn('.featured-projects-fly-in-content');
};

