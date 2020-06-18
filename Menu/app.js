//items
const menu = [
  {
    id: 1,
    title: "Iced Americano",
    category: "Espresso",
    price: 4100,
    img: "images/item1.jpg",
    desc:
      "풍부하고 진한 농도의 에스프레소에 시원한 정수물을 더하여 스타벅스의 깔끔하고 강렬한 에스프레소를 부드럽지만 시원하게 즐기실 수 있는 커피입니다.",
  },
  {
    id: 2,
    title: "Magic Pop Splash Fizzio™",
    category: "Fizzio",
    price: 6100,
    img: "images/item2.jpg",
    desc:
      "상큼한 레모네이드에 파인애플, 패션후르츠의 달콤한 과육 그리고 열대과일 맛의 보라색 팝시클이 더해진 상큼하고 시원하게 즐길 수 있는 피지오. 보라색의 음료가 점차 핑크색으로 변하는 마법을 경험하게 되는 컬러풀한 피지오 음료.",
  },
  {
    id: 3,
    title: "Cappuccino",
    category: "Espresso",
    price: 4600,
    img: "images/item3.jpg",
    desc:
      "풍부하고 진한 농도의 에스프레소에 따뜻한 우유와 벨벳같은 우유 거품이 1:1 비율로 어우러저 마무리된 대표적인 에스프레소 음료 입니다.",
  },
  {
    id: 4,
    title: "Iced Blonde Vanilla Double Shot Macchiato",
    category: "Espresso",
    price: 5600,
    img: "images/item4.jpg",
    desc:
      "블론드 에스프레소 2샷에 흑당 시럽과 바닐라 크림이 부드럽고 달콤하게 어우리진 마키아또 타입의 음료를 즐겨 보세요! ",
  },
  {
    id: 5,
    title: "Jeju Black Sesame Cream Frappuccino",
    category: "Frappuccino",
    price: 6600,
    img: "images/item5.jpg",
    desc:
      "[제주지역 한정음료] 제주 까망 라떼의 프라푸치노 버전으로 쫄깃한 국내산 흑임자 떡과 블랙 소보로 토핑으로 컵빙수처럼 먹는 음료. 고소한 국내산 흑임자와 쫄깃한 국내산 흑임자 떡, 달콤한 블랙 소보로 토핑으로 제주의 돌 하르방 길을 느껴보세요.",
  },
  {
    id: 6,
    title: "Starbucks Lime Mojito Tea",
    category: "Tea",
    price: 6100,
    img: "images/item6.jpg",
    desc:
      "라임과 사과 과즙이 팡팡 터지는 맑고 청량한 스타벅스 라임 모히토 티와 함께 가장 가까운 여름 휴가를 누리세요.",
  },
];

const sectionCenter = document.querySelector(".section-center");

const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuBtns();
});


function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return ` <article class="menu-item">
        <img src=${item.img} class="photo" alt=${item.title}>
        <div class="item-info">
            <header>
                 <h4>${item.title}</h4>
                 <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">
            ${item.desc}
            </p>
        </div>
     </article>`;
  });

  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuBtns(){
    const categories = menu.reduce(
        function (values, item) {
          if (!values.includes(item.category)) {
            values.push(item.category);
          }
          //console.log(values,item);
          return values;
        },
        ["all"]
      );
      let tmpbtns = categories.map(function (e) {
        return ` <button class="filter-btn" type="button" data-id=${e}>${e}</button>`;
      });
      tmpbtns = tmpbtns.join("");
      btnContainer.innerHTML = tmpbtns;
      const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    
      //filter btn
      filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (event) {
          const category = event.currentTarget.dataset.id;
          const menuCategory = menu.filter(function (menuItem) {
            if (menuItem.category === category) {
              return menuItem;
            }
          });
          //console.log(category, menuCategory);
          //displayMenuItems(menuCategory);
          if (category === "all") {
            displayMenuItems(menu);
          } else {
            displayMenuItems(menuCategory);
          }
        });
      });
}
