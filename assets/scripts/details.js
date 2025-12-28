window.onload = function () {

    // Image source mapping (same for both languages)
    const detailImages = {
        "0001": { imageSource: "./assets/images/details/studium.webp", source: "https://www.hs-mainz.de/" },
        "0002": { imageSource: "./assets/images/details/stepahead-logo.webp", source: "https://www.stepahead.de/" },
        "0003": { imageSource: "./assets/images/details/stepahead-logo.webp", source: "https://www.stepahead.de/" },
        "0004": { imageSource: "./assets/images/details/stepahead-logo.webp", source: "https://www.stepahead.de/" },
        "0005": { imageSource: "./assets/images/details/fachoberschule.webp", source: "https://www.konrad-zuse-schule.de/de/konradzuseschule" },
        "0006": { imageSource: "./assets/images/details/stepahead-cloud.webp", source: "https://www.stepahead.de/" },
        "0008": { imageSource: "./assets/images/details/wohnpilot.webp", source: null },
        "0009": { imageSource: "./assets/images/details/portfolio.webp", source: null },
        "0010": { imageSource: "./assets/images/details/nao-controller.webp", source: null },
        "0011": { imageSource: "./assets/images/details/dark-animations-studio.webp", source: null },
        "0012": { imageSource: "./assets/images/details/upthoughts.webp", source: "https://upthoughts.felixfab.de/" },
        "0013": { imageSource: "./assets/images/details/homelab.webp", source: null }
    };

    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    function showDetailPost() {
        const detailId = getQueryParam("id");
        
        // Get current language from localStorage (inherited from main page)
        const currentLang = localStorage.getItem('language') || 'de';
        
        // Get detail translation from i18n system
        const detail = translations[currentLang]?.details?.posts?.[detailId];
        const imageData = detailImages[detailId];

        if (detail && imageData) {
            document.title = "Portfolio Felix Wiegand - " + detail.title;
            document.getElementById("detail-header").innerHTML = detail.header;
            document.getElementById("detail-content").innerHTML = detail.content;
            document.getElementById("detail-image").src = imageData.imageSource;

            if(imageData.source && detail.sourceTitle){
                document.getElementById("detail-source").innerHTML = detail.sourceTitle;
                document.getElementById("detail-more-information").style.display = "flex";
                document.getElementById("detail-source").href = imageData.source;
            }

        } else {
            const notFoundText = currentLang === 'de' ? 'Detail nicht gefunden' : 'Detail not found';
            const notFoundDesc = currentLang === 'de' ? 'Dieser Detail-Eintrag existiert nicht.' : 'This detail entry does not exist.';
            
            document.title = notFoundText;
            document.getElementById("detail-header").innerHTML = notFoundText;
            document.getElementById("detail-content").innerHTML = notFoundDesc;
            document.getElementById("detail-image").classList.add("hidden");
        }
    }

    function attachLanguageButtonListeners() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const lang = this.getAttribute('data-lang');
                
                if (lang) {
                    localStorage.setItem('language', lang);
                    
                    // Update active button
                    document.querySelectorAll('.lang-btn').forEach(b => {
                        b.classList.remove('active');
                    });
                    this.classList.add('active');
                    
                    // Reload detail content with new language
                    showDetailPost();
                }
            });
        });
        
        // Set active button based on current language
        const currentLang = localStorage.getItem('language') || 'de';
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === currentLang) {
                btn.classList.add('active');
            }
        });
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

    function setImageFullscreen(){
        const imgElement = document.querySelector('img[data-bs-toggle="modal"]');
        const modalImage = document.getElementById('modalImage');

        imgElement.addEventListener('click', function() {
        modalImage.src = imgElement.src;
        });
    }

    showDetailPost();
    attachLanguageButtonListeners();
    setImageFullscreen();

    flyIn('.header-fly-in-top');
    flyIn('.titel-fly-in-bottom');
    flyIn('.content-fly-in-bottom');
}