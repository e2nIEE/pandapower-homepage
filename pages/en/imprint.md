---
ref: imprint
title: Imprint
permalink: /imprint/
math: false
---

<div id="generator_contentwrapper_dsi">
  <div><strong>You have not activated JavaScript.<br />
      &nbsp;</strong></div>
  <div><strong>You can download the privacy information
      <em><a href="https://dsi-generator.fraunhofer.de/dsi/view/en/9796bde6-e3df-4903-81b5-8b82723711e7/" id="generator_url_dsi">here</a></em>
      .</strong></div>
  <script src="https://s.fhg.de/jquery-min-js"></script>
  <script>
    //URL of the dsi
    var generator_url_dsi = $('#generator_url_dsi').attr('href');
    //ID of the div in which the dsi should be inserted
    var generator_divid_dsi = "generator_contentwrapper_dsi";
    //Error message if URL retrieval is not possible
    var generator_errormsg =
      '<div><strong>Error retrieving content.<br />' +
      '&nbsp;</strong></div>' +
      '<div><strong>You can download the privacy information later at ' +
      '<em><a href="' + generator_url_dsi + '">' + generator_url_dsi + '</a></em>' +
      '.</strong></div>';
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
