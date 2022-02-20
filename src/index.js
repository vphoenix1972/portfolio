import 'bootstrap';
import $ from 'jquery';
import '@fortawesome/fontawesome-free/js/all';

import './styles.scss';
import './index.html';
import './favicon.ico';
import './assets/cv.pdf';

$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('expanded').toggleClass('collapsed');
        $('#content').toggleClass('expanded').toggleClass('collapsed');
    });
});