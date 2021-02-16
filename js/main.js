////////    SEARCH MODAL     ///////////
const searchModal = document.querySelector('.search-modal');

// open search modal
    document.querySelector('.first .fa-search').addEventListener('click', () => {
        searchModal.style.display = 'block';
        setTimeout(() => {
            searchModal.style.opacity = 1;
        }, 1);
    })
// close search modal
    document.querySelector('.search-input .fa-times').addEventListener('click', () => {
        searchModal.style.opacity = 0;
        setTimeout(() => {
            searchModal.style.display = 'none';
        }, 300);
    });

////////    OUR SCHOOLS MODAL    ///////

const ourSchools = document.querySelector('.our-schools');
const modal = document.querySelector('nav .modal');

ourSchools.addEventListener('click', () => {
    if(modal.style.opacity == 1) {
        modal.style.opacity = 0;
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    } else {
        modal.style.display = 'block';
        setTimeout(() => {
            modal.style.opacity = 1;
        }, 10);
    } 
})

document.body.addEventListener('click', (e) => {
    if(modal.style.opacity == 1 && (e.target.className !== 'our-schools' && !e.target.className.includes('our-schools-item'))) {
        modal.style.opacity = 0;
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
})


const modalNodesList = document.querySelectorAll(".header>p");
const modalContent = document.querySelector('nav .modal .content');

let currentIndex = 0;
modalNodesList[currentIndex].style.borderBottom = '4px solid #E9D666';

modalNodesList.forEach((item3, index3) => {
    if(index3 !== currentIndex) modalNodesList[index3].style.borderBottom = '4px solid rgba(0, 0, 0, 0.2)';
})

modalNodesList.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index;
        modalNodesList[index].style.borderBottom = '4px solid #E9D666';

        modalContent.innerHTML = ``;
        modalListItems[currentIndex].forEach((item) => {
            modalContent.innerHTML += `<li> ${item} </li>`;
        })

        modalNodesList.forEach((item2, index2) => {
            if(index2 !== index) modalNodesList[index2].style.borderBottom = '4px solid rgba(0, 0, 0, 0.2)';
        })
    });
})

const modalListItems = [
    [ 'Bluff Creek Elementary', 'Carver Elementary', 'Chanhanssen Elementary', 'Clover Ridge Elementary', 'East Union Elementary', 'La Academia & Kinder Elementary', 'VictoriaElementary' ],
    [ 'Bluff Creek Elementary1', 'Carver Elementary1', 'Chanhanssen Elementary1', 'Clover Ridge Elementary1', 'East Union Elementary1', 'La Academia & Kinder Elementary1', 'VictoriaElementary1' ],
    [ 'Bluff Creek Elementary2', 'Carver Elementary2', 'Chanhanssen Elementary2', 'Clover Ridge Elementary2', 'East Union Elementary2', 'La Academia & Kinder Elementary2', 'VictoriaElementary2' ],
    [ 'Bluff Creek Elementary3', 'Carver Elementary3', 'Chanhanssen Elementary3', 'Clover Ridge Elementary3', 'East Union Elementary3', 'La Academia & Kinder Elementary3', 'VictoriaElementary3' ]
];

modalListItems[currentIndex].forEach((item) => {
    modalContent.innerHTML += `<li> ${item} </li>`;
})

/////////////    MOBILE MODAL MENU   ///////////

document.querySelector('.close-mobile-modal-menu').addEventListener('click', () => {document.querySelector('.mobile-modal-menu').style.display = 'none';} )
document.querySelector('.menu').addEventListener('click', () => {document.querySelector('.mobile-modal-menu').style.display = 'flex';});

const plusButtons = document.querySelectorAll('.utils>div header .fas.fa-plus');
const minusButtons = document.querySelectorAll('.utils .fas.fa-minus');
const contentLists = document.querySelectorAll('.utils>div .content ');

plusButtons.forEach((item, index) => {
    item.addEventListener('click', () => {
        item.style.display = 'none';
        minusButtons[index].style.display = 'inline-block';

        contentLists[index].style.display = 'block';
        setTimeout(() => {
            contentLists[index].style.transform = "scaleY(1)";
        }, 1);
        // contentLists[index].classList.add
    })
})

minusButtons.forEach((item, index) => {
    item.addEventListener('click', () => {
        item.style.display = 'none';
        plusButtons[index].style.display = 'inline-block';
        contentLists[index].style.transform = "scaleY(0)";
        setTimeout(() => {
            contentLists[index].style.display = 'none';
        }, 190);
    })
})




///////////////        SEARCH       /////////////////

const searchButton = document.querySelector('.nav-search');

searchButton.addEventListener('click', () => {

})

//////////////           SLICK              ///////////////

$(document).ready(function(){
    $('.slick').slick({
        speed: 300,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: true,
        dots: true,
        fade: true,
        cssEase: 'linear'
    });
});

$('.fa-pause').on('click', function() {
    $('.slick')
        .slick('slickPause');
    $('.fa-pause').hide();
    $('.fa-angle-right').show();
});

$('.fa-angle-right').on('click', function() {
    $('.slick')
        .slick('slickPlay');
    $('.fa-pause').show();
    $('.fa-angle-right').hide();
})

/////////////   SLICK HAPPENING ///////////////

$(document).ready(function(){
    $('.slick-happening').slick({
        speed: 1000,
        infinite: true,
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
            }
        ]
    });
});

// <!----------    WHY CHOOSE  ---------->

$(document).ready(function(){
    $('.slick-why-choose').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        speed: 1000,
        responsive: [
            {
                breakpoint: 1625,
                settings: {
                    slidesToShow: 3
                }
            },
            {
            breakpoint: 1000,
            settings: {
                arrows: true,
                // centerMode: true,
                // centerPadding: '40px',
                slidesToShow: 2
            }
            },
            {
            breakpoint: 825,
            settings: {
                arrows: true,
                // centerMode: true,
                // centerPadding: '40px',
                slidesToShow: 1
            }
            }
        ]
      });
          
});