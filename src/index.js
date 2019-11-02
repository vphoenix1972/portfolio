import 'bootstrap';
import $ from 'jquery';
import '@fortawesome/fontawesome-free/js/all';

import './styles.scss';
import './index.html';
import './favicon.ico';

$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('#content').toggleClass('active');
    });
});