html-parts-popup
================

Uitbreiding op [html startup](https://github.com/am-impact/html-startup)

Popup die content uit andere pagina haalt

Bestanden
---------
 * resources/sass/components/_popup.scss
 * resources/scripts/fw.popup.js

 ## Voorbeelden

 ### Html
    <a href="popup-content.html" class="popup">Popup</a>

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
     <script>
         head.js(
             { popup: 'resources/scripts/fw.popup.js' }
         );
     </script>