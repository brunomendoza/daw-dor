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
        <h2 class="important">This is the first content:</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quo nulla repellat minus ipsa tenetur odit commodi deleniti repudiandae rem assumenda, voluptates ullam! Eum, expedita maxime voluptate ea aliquid assumenda sunt numquam iste libero debitis accusantium optio doloribus, pariatur, eos repudiandae. Nostrum cumque consequuntur illum quas vel debitis est delectus!</p>
        <h3>And lot more</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quo nulla repellat minus ipsa tenetur odit commodi deleniti repudiandae rem assumenda, voluptates ullam! Eum, expedita maxime voluptate ea aliquid assumenda sunt numquam iste libero debitis accusantium optio doloribus, pariatur, eos repudiandae. Nostrum cumque consequuntur illum quas vel debitis est delectus!</p>
        <p class="display-1">Content</p>
        <p class="display-2">is</p>
        <p class="display-2">important</p>
    `;
    
}

function showContent2(){
    var content = document.getElementById('content');
    content.innerHTML = '<b>Lorem ipsum dolor sit amet</b>, consectetur adipisci tempor incidunt ut labore et dolore magna aliqua veniam, quis nostrud exercitation ullamcorpor s commodo consequat. Duis autem vel eum irrure esse molestiae consequat, vel illum dolore eu fugi et iusto odio dignissim qui blandit praesent luptat exceptur sint occaecat cupiditat non provident, deserunt mollit anim id est laborum et dolor fuga distinct. Nam liber tempor cum soluta nobis elige quod maxim placeat facer possim omnis volupt';
}