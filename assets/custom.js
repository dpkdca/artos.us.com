/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 */


$( document ).ready(function() {
  $('.Collapsible__Button__back').click(function(){
 
    if($(this).hasClass('is-active')){
      $(this).removeClass('is-active');
    }
    else{
      $('.Collapsible__Button').attr("aria-expanded","false");
      $(this).addClass('is-active');
    }
  });
  $('.Collapsible__Button__back__back').click(function(){
 
    if($(this).hasClass('is-active')){
      $('.Collapsible__Button').attr("aria-expanded","true");
      $(this).removeClass('is-active');
    }
    else{
      $('.Collapsible__Button.Collapsible__Button_sub').attr("aria-expanded","false");
      $(this).addClass('is-active');
    }
  });
  $('#sidebar-menu-toggle').click(function(){
     $("body").addClass('opensidebar');
  });
  $('#sidebar-menu-close').click(function(){
     $("body").removeClass('opensidebar');
  });

    $.expr[':'].external = function(obj){
    return !obj.href.match(/^mailto\:/)
           && (obj.hostname != location.hostname)
           && !obj.href.match(/^javascript\:/)
           && !obj.href.match(/^$/)
    };
    
    $('.Article__Content a:external').on("click", function (e) {
      e.preventDefault();
      var link = $(this).attr("href");
      window.open(link, "_blank");
    });
});