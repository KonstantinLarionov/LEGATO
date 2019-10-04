// var ObjectInterface =
//     {
//       MenuButton: document.getElementById('menu_buttom')
//     };
// var UserExperience =
//     {
//         MenuShow: function (button) {
//             alert(1);
//             button.visibility = "hidden";
//         }
//     };

function showMenu() {
    $('#menu').toggleClass('menu-active');
    $('.content').toggleClass('content-active');
   if ($('#menu').hasClass('menu-active')) {
       $('#menu_buttom :first-child').css("transform", "rotate(-45deg)");
       $('#menu_buttom :last-child').css("transform", "rotate(45deg)");
       $('#menu_buttom :nth-child(2)').css("display", "none");
   }
   else
   {
       $('#menu_buttom :first-child').css("transform", "rotate(0deg)");
       $('#menu_buttom :last-child').css("transform", "rotate(0deg)");
       $('#menu_buttom :nth-child(2)').css("display", "block");
   }
}