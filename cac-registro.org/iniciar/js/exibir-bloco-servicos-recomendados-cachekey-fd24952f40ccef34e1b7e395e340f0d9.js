
/* Merged Plone Javascript file
 * This file is dynamically assembled from separate parts.
 * Some of these parts have 3rd party licenses or copyright information attached
 * Such information is valid for that section,
 * not for the entire composite file
 * originating files are separated by - filename.js -
 */

/* - exibir-bloco-servicos-recomendados.js - */
// https://www.gov.br/portal_javascripts/exibir-bloco-servicos-recomendados.js?original=1
function _get_lgpd_cookie_v2(){var value=('; '+document.cookie).split('lgpd-cookie-v2=').pop().split(';')[0];if(value){return JSON.parse(value)}
return false}
function get_cookie_group(){var lgpd=_get_lgpd_cookie_v2();if(lgpd){var groups=lgpd['g'];for(var i=0,l=groups.length;i<l;i++){if(groups[i]['id']=='cookies-de-desempenho'){return groups[i]}}}
return{}}
function get_group_selected(){var cookie_group=get_cookie_group();if(Object.keys(cookie_group).length==0){return false}
return cookie_group['on']}
window.onload=function(){var cookie_select=get_group_selected();if(!cookie_select){document.getElementById('servicos-recomendados-view-servicos').style.display='none'}}


/* - link_lgpd_edit_servico.js - */
// https://www.gov.br/portal_javascripts/link_lgpd_edit_servico.js?original=1
jQuery(document).ready(function(){jQuery("li#contentview-editar_lgpd a").attr("target","_blank");jQuery("li#contentview-adicionar_lgpd a").attr("target","_blank");var $liCloneLinkEditar=$('#contentview-editar_lgpd').clone(true);$liCloneLinkEditar.addClass('formTab');jQuery('ul.formTabs').append($liCloneLinkEditar);jQuery("#edit-bar .contentViews li#contentview-editar_lgpd").hide();var $liCloneLinkAdicionar=$('#contentview-adicionar_lgpd').clone(true);$liCloneLinkAdicionar.addClass('formTab');jQuery('ul.formTabs').append($liCloneLinkAdicionar);jQuery("#edit-bar .contentViews li#contentview-adicionar_lgpd").hide()});
