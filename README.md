html-parts-popup
================

Uitbreiding op [html startup](https://github.com/am-impact/html-startup)

Popup die content uit andere pagina haalt of uit een element op de huidige pagina

Bestanden
---------
 * scss/components/_popup.scss
 * scripts/fw.popup.js

 ## Voorbeelden

 ### Html
    <a href="popup-content.html" data-popup>Popup</a>

    <script>
        head.js(
            { popup: 'resources/scripts/fw.popup.js' }
        );
    </script>