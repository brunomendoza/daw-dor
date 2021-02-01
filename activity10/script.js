// var topM1 = document.getElementById('topmenu1');

// topM1.onclick= function(){
//     if (topM1.querySelectorAll('.topmenu-suboption').length) {
//         topM1.innerHTML = '<div class="topmenu-option">Menu 1</div>';
//     } else {
//         topM1.innerHTML = '<div class="topmenu-option">Menu 1</div><div class="topmenu-submenu"><div class="topmenu-suboption"><a href="https://google.com/">Google</div><div class="topmenu-suboption"><a href="https://bing.com/">Bing</div></div>';
//     }
// }
// var topM2 = document.getElementById('topmenu2');
// topM2.onclick= function(){;
// location.href = 'https://www.wikipedia.org/';
// }
// var topM3 = document.getElementById('topmenu3');
// topM3.onclick= function(){;
// location.href = 'https://www.youtube.com/';
// }

function showContent1(){
    var content = document.getElementById('content');
    content.innerHTML = `
        <h2 class="important"></h2>
        <span class="important" style="color:#fffc16; font-size:2em;">This is the first content:<br/><img src="content1.png"></span>
        <h1>and lot more</h1>
        Lorem ipsum dolor sit amet, consectetur adipisci tempor incidunt ut laboreLorem ipsum dolor sit amet, consectetur adipisci tempor incidunt ut labore
        <h1>content</h1>
        <h4>is</h4>
        <h4>important</h4>'
    `;
    
}

function showContent2(){
    var content = document.getElementById('content');
    content.innerHTML = '<b>Lorem ipsum dolor sit amet</b>, consectetur adipisci tempor incidunt ut labore et dolore magna aliqua veniam, quis nostrud exercitation ullamcorpor s commodo consequat. Duis autem vel eum irrure esse molestiae consequat, vel illum dolore eu fugi et iusto odio dignissim qui blandit praesent luptat exceptur sint occaecat cupiditat non provident, deserunt mollit anim id est laborum et dolor fuga distinct. Nam liber tempor cum soluta nobis elige quod maxim placeat facer possim omnis volupt'
}