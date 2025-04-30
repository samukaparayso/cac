
/* - ++theme++govbr.servicos/js/formwidget-autocomplete.js - */
// https://www.gov.br/portal_javascripts/++theme++govbr.servicos/js/formwidget-autocomplete.js?original=1
function formwidget_autocomplete_ready(event,data,formatted){(function($){var input_box=$(event.target);formwidget_autocomplete_new_value(input_box,data[0],data[1])}(jQuery))}
function formwidget_autocomplete_new_value(input_box,value,label){(function($){var base_id=input_box[0].id.replace(/-widgets-query$/,"");var base_name=input_box[0].name.replace(/\.widgets\.query$/,"");var widget_base=$('#'+base_id+"-input-fields");var all_fields=widget_base.find('input:radio, input:checkbox');input_box.val("");widget_base.find('input:radio').prop('checked',false);var selected_field=widget_base.find('input[value="'+value+'"]');if(selected_field.length){selected_field.each(function(){this.checked=true});return}
widget_base,base_name,base_id
var idx=all_fields.length;var klass=widget_base.data('klass');var title=widget_base.data('title');var type=widget_base.data('input_type');var multiple=widget_base.data('multiple');var span=$('<span/>').attr("id",base_id+"-"+idx+"-wrapper").attr("class","option ui-sortable-handle");span.append($("<label/>").attr("for",base_id+"-"+idx).append($('<input type="'+type+'"'+' name="'+base_name+(multiple?':list"':'"')+' checked="checked" />').attr("id",base_id+"-"+idx).attr("title",title).attr("value",value).addClass(klass)).append(" ").append($("<span>").attr("class","label").text(label)));widget_base.append(span);widget_base.sortable()}(jQuery))}
function formwidget_autocomplete_parser(formatResult,fieldNum){return function(data){var parsed=[];if(data!==undefined&&data.split){var rows=data.split("\n");for(var i=0;i<rows.length;i++){var row=$.trim(rows[i]);if(row){row=row.split("|");parsed[parsed.length]={data:row,value:row[fieldNum],result:formatResult(row,row[fieldNum])}}}}
return parsed}}

