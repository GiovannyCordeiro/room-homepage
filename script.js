const image = document.getElementById('image');
const h2 = document.querySelector('#h2');
const p = document.querySelector('#p');
const arrowLeft = document.querySelector('#arrow-left');
const arrowRight = document.querySelector('#arrow-right');

const textH2One = 'Discover Innovative ways decorate';
const textPOne = 'We provide unmatched quality, confort, and style for property owners across the country. Our experts combine form and function in briging your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you leave.';

const textH2Two = 'We are available all across the globe';
const textPTwo = 'With store all over the world. Its easy for you to find furniture for your home or place of business. Locally, we re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Dont hesitate o contact us today.';

const textH2Three = 'Manufactured with the best materials';
const textPThree = 'Our modern furniture store provide a hight level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry. We understand what customers want for their home and office.';


const toggleRight = () => {
    if(h2.textContent === textH2One){
        h2.textContent = textH2Two;
        p.textContent = textPTwo;
        image.style.backgroundImage = 'url(images/desktop-image-hero-2.jpg)'
    }else if(h2.textContent === textH2Two){
        h2.textContent = textH2Three;
        p.textContent = textPThree;
        image.style.backgroundImage = 'url(images/desktop-image-hero-3.jpg)'
    }else if(h2.textContent === textH2Three){
        h2.textContent = textH2One;
        p.textContent = textPOne;
        image.style.backgroundImage = 'url(images/desktop-image-hero-1.jpg)'
    }
};

const toggleLeft = () => {
    if(h2.textContent === textH2One){
        h2.textContent = textH2Three;
        p.textContent = textPThree;
        image.style.backgroundImage = 'url(images/desktop-image-hero-3.jpg)'
    }
    else if(h2.textContent === textH2Two){
        h2.textContent = textH2One;
        p.textContent = textPOne;
        image.style.backgroundImage = 'url(images/desktop-image-hero-1.jpg)'
    }
    else if(h2.textContent === textH2Three){
        h2.textContent = textH2Two;
        p.textContent = textPTwo;
        image.style.backgroundImage = 'url(images/desktop-image-hero-2.jpg)'
    }
}

arrowRight.addEventListener('click', toggleRight);
arrowLeft.addEventListener('click', toggleLeft);

//menu-mobile

const menuMobile = document.querySelector('#menu-mobile');
const links = document.querySelector('#list-links');
const menuX = document.querySelector('#icon-x')

menuMobile.addEventListener('click', () => {
    links.classList.add('active');
})

menuX.addEventListener('click', () => {
    links.classList.remove('active');
})