import 'core-js';
import 'bootstrap';
import $ from 'jquery';
import '@fortawesome/fontawesome-free/js/all';

import './styles.scss';
import './favicon.ico';
import * as translator from './translator';

$(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('expanded').toggleClass('collapsed');
        $('#content').toggleClass('expanded').toggleClass('collapsed');
    });

    translator.init();
});