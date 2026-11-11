---
ref: imprint
title: Impressum
permalink: /de/imprint/
math: false
---

<div id="generator_contentwrapper_dsi">
  <div><strong>Sie haben JavaScript nicht aktiviert.<br />
      &nbsp;</strong></div>
  <div><strong>Die Datenschutzinformationen können Sie
      <em><a href="https://dsi-generator.fraunhofer.de/dsi/view/de/9796bde6-e3df-4903-81b5-8b82723711e7/" id="generator_url_dsi">hier</a></em>
      herunterladen.</strong></div>
  <script src="https://s.fhg.de/jquery-min-js"></script>
  <script>
    //URL des Impressums
    var generator_url_dsi = $('#generator_url_dsi').attr('href');
    //ID des Divs, in das das Impressum eingefügt werden soll
    var generator_divid_dsi = "generator_contentwrapper_dsi";
    //Fehlermeldung, falls URL-Abruf nicht möglich
    var generator_errormsg =
      '<div><strong>Fehler beim Abrufen des Inhalts.<br />' +
      '&nbsp;</strong></div>' +
      '<div><strong>Die Datenschutzinformationen können Sie später unter ' +
      '<em><a href="' + generator_url_dsi + '">' + generator_url_dsi + '</a></em>' +
      ' herunterladen.</strong></div>';
    $.ajax({
      url: generator_url_dsi,
      success: function (result) {
        $("#" + generator_divid_dsi).html(result);
      },
      error: function (result) {
        $("#" + generator_divid_dsi).html(generator_errormsg);
      },
    });
  </script>
</div>
