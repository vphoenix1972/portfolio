import 'bootstrap';
import $ from 'jquery';

import './styles.scss';
import './index.html';
import './favicon.png';

$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});