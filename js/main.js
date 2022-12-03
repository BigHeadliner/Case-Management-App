$(function () { 
    
  $("#country_selector").countrySelect({
      defaultCountry:"gb", 
      responsiveDropdown:true

    });  
     
    $('.app-tabs__item').on('click', function (e) {
      e.preventDefault();
      $('.app-tabs__item').removeClass('app-tabs__item--active');
      $(this).addClass('app-tabs__item--active'); 

      $('.app-tabs__content').removeClass('app-tabs__content--active');
      $($(this).attr('href')).addClass('app-tabs__content--active'); 
      
  });  
   
  $('.table__title-btn').on('click', function (e){  
    e.preventDefault();
    $('.table__main').slideToggle()       
    $('.table__title-img').toggleClass('table__title-img--transform')   

  })
   
  $('.table__pagination-link').on('click', function (e) {
    e.preventDefault();
    $('.table__pagination-link').removeClass('table__pagination-link--active');
    $(this).addClass('table__pagination-link--active');  
 }); 
  
});  