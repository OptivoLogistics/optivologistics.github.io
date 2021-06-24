import './assets/css/main.css';
import './assets/css/custom.css';
import './assets/css/noscript.css';
import './assets/css/images/arrow.svg';
import './assets/css/images/bars.svg';
import './assets/css/images/close.svg';

import './assets/js/jquery.min.js';
import './assets/js/jquery.scrollex.min.js';
import './assets/js/jquery.scrolly.min.js';
import './assets/js/util.js';
import './assets/js/main.js';
import './assets/js/contactForm';

$(window).on("load", () => {
    $('#page-wrapper')[0].style.display = 'block';
    $('#main-loader').remove();
});