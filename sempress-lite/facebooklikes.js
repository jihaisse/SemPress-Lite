/*
 Facebooklikes v1.0 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/

jQuery(document).ready(function(){
	

var count = jQuery('li.social-facebook-like').length;

console.log(jQuery('li.social-facebook-like img'));

jQuery('ol.commentlist').prepend('<li id="social-facebook-like" class="comment" />');
jQuery('#social-facebook-like').append('<span>'+count+' personnes aiment ça</span>');
jQuery('#social-facebook-like').append('<ul />');
jQuery('li.social-facebook-like').each(function(){
    var link = jQuery(this).find('p a');
    var img = jQuery(this).find('img');
    var cite = jQuery(this).find('cite');
    link.html(cite.clone().wrap('<p>').parent().html() + img.clone().wrap('<p>').parent().html());
    jQuery('#social-facebook-like ul').append('<li />');
    jQuery('#social-facebook-like ul li').last().append(link);
});
jQuery('li.social-facebook-like').hide();
});