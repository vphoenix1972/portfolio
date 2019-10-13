import 'bootstrap';
import $ from 'jquery';

import './styles.scss';
import './index.html';
import './favicon.ico';

$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});