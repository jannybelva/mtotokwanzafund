document.addEventListener('DOMContentLoaded', function() {
    // Main banner slider
    const mainBannerSwiper = new Swiper('.main-banner', {
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });

    // Partners logo slider
    const partnersSwiper = new Swiper('.logo-p', {
      slidesPerView: 3,
      spaceBetween: 0,
      loop: true,
      navigation: {
        nextEl: '.logo-p .swiper-button-next',
        prevEl: '.logo-p .swiper-button-prev',
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 0,
        },
      }
    });
  });

//data counter up
 document.addEventListener('DOMContentLoaded', function() {
            function updateCounter(counterId, target) {
                const counter = document.getElementById(counterId);
                const speed = 50; // lower number = faster count
                function count() {
                    const current = +counter.innerText;
                    const increment = target / speed;
                    if (current < target) {
                        counter.innerText = Math.ceil(current + increment);
                        setTimeout(count, 20);
                    } else {
                        counter.innerText = target;
                    }
                }
                count();
            }

            updateCounter('counter1', 7000);
            updateCounter('counter2', 837);
            updateCounter('counter3', 1795);
            updateCounter('counter4', 2000);
        });

//website my tabs
    document.querySelectorAll('nav button').forEach(button => {
      button.addEventListener('click', () => {
        document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('bg-gray-200'));
        button.classList.add('bg-gray-200');

        const tabContentElements = document.querySelectorAll('.tab-content');
        tabContentElements.forEach(tab => tab.classList.remove('active'));

        const activeTabContent = document.getElementById(button.getAttribute('data-tab'));
        activeTabContent.classList.add('active');
      });
    });



//website js modal
  document.addEventListener('DOMContentLoaded', function() {
      const modalToggleButtons = document.querySelectorAll('[data-modal-toggle]');
      const modalCloseButtons = document.querySelectorAll('[data-modal-hide]');
      const modals = document.querySelectorAll('[data-modal-target]');

      modalToggleButtons.forEach(button => {
        button.addEventListener('click', function() {
          const modalId = button.getAttribute('data-modal-target');
          const modal = document.getElementById(modalId);
          if (modal.classList.contains('hidden')) {
            modal.classList.remove('hidden');
            modal.classList.add('flex');
          } else {
            modal.classList.remove('flex');
            modal.classList.add('hidden');
          }
        });
      });

      modalCloseButtons.forEach(button => {
        button.addEventListener('click', function() {
          const modalId = button.getAttribute('data-modal-hide');
          const modal = document.getElementById(modalId);
          modal.classList.remove('flex');
          modal.classList.add('hidden');
        });
      });
    });

  //Data AOS
  AOS.init();


// auto play youtube video
 document.getElementById('static-modal-gallery').addEventListener('click', function () {
            document.getElementById('static-modal-gallery').classList.remove('hidden');
        });

        document.getElementById('static-modal-gallery').addEventListener('click', function () {
            document.getElementById('static-modal-gallery').classList.add('hidden');
        });

  //Phone field

//Hide birthday pledge modal 
document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.getElementById("submit-btn");
    const modal = document.getElementById("static-modal");
    const thankYouModal = document.getElementById("static-modal-thankYou");

    submitBtn.addEventListener("click", function (event) {
        event.preventDefault();
        // Hide the current modal
        modal.classList.add("hidden");
        // Show the thank you modal
        thankYouModal.classList.remove("hidden");
    });
});

     