var isMenuOpen = true;
var menu_item1 = document.querySelector('#menu-item1')
var menu_item2 = document.querySelector('#menu-item2')
var menu_item3 = document.querySelector('#menu-item3')
var menu_item4 = document.querySelector('#menu-item4')
var menu_btn = document.querySelector('#nav-icon')
var hamburger_icon = document.querySelector('#hamburger-icon')

menu_btn.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen


//  changing the hamburger_icon
    isMenuOpen == true ? hamburger_icon.src = './images/close_icon.png' : hamburger_icon.src = './images/hamburger_icon.png'
    

//  for menu item 1
    isMenuOpen == true ? menu_item1.style.transform = "translateX(-102px) translateY(0px) rotate(-90deg)" : menu_item1.style.transform = "translateX(-102px) translateY(-85px) rotate(-90deg)"

    isMenuOpen == true ? menu_item1.style.visibility = "visible" : menu_item1.style.visibility = "hidden"

    isMenuOpen == true ? menu_item1.style.opacity = '1' : menu_item1.style.opacity = '0'


//  for menu item 2
    isMenuOpen == true ? menu_item2.style.transform = "translateX(-102px) translateY(0px) rotate(-90deg)" : menu_item2.style.transform = "translateX(-102px) translateY(-196px) rotate(-90deg)"

    isMenuOpen == true ? menu_item2.style.visibility = "visible" : menu_item2.style.visibility = "hidden"

    isMenuOpen == true ? menu_item2.style.opacity = '1' : menu_item2.style.opacity = '0'
    

//  for menu item 3
    isMenuOpen == true ? menu_item3.style.transform = "translateX(-102px) translateY(0px) rotate(-90deg)" : menu_item3.style.transform = "translateX(-102px) translateY(-308px) rotate(-90deg)"

    isMenuOpen == true ? menu_item3.style.visibility = "visible" : menu_item3.style.visibility = "hidden"

    isMenuOpen == true ? menu_item3.style.opacity = '1' : menu_item3.style.opacity = '0'
        

//  for menu item 4
    isMenuOpen == true ? menu_item4.style.transform = "translateX(-102px) translateY(0px) rotate(-90deg)" : menu_item4.style.transform = "translateX(-102px) translateY(-418px) rotate(-90deg)"

    isMenuOpen == true ? menu_item4.style.visibility = "visible" : menu_item4.style.visibility = "hidden"

    isMenuOpen == true ? menu_item4.style.opacity = '1' : menu_item4.style.opacity = '0'
})


