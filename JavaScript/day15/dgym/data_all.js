import { dgym_data } from "./dgym_data.js";
dgym_data;

const adList = document.querySelector(".adList");

const ad_data = dgym_data[0].result.liteAdList;

ad_data.forEach((v) => {
  adList.insertAdjacentHTML(
    "beforeend",
    `<div class=adList>
        <div class=container>
            
        <div class=ad_card">
                
            
            <div class=imagebox
                    <img src=${v.gymPhotoBig}></img>
                </div>

            <div class=text>
                <div class=type>${v.tags[0]}/${v.tags[1]} </div>
                <div class=name>${v.gymName}</div>
                <div class=review>
                    <div class=score>⭐${v.review.rate}</div>
                    <div class=count>(${v.review.count})</div>
                    <div class=site>${v.address} · ${
      v.location[0] + v.location[1]
    } </div> 
                     <div class=price>${
                       v.price.lowestPrice / v.price.period
                     }~<span class=month>/월</span>
                     </div>
                     
                </div>

                <div class=service>
                     <div class=free>무료 서비스</div>
                     <div class=free_info>${v.service.free}</div>
                </div>
            
                </div>
        </div>
  </div>`
  );
});

const centerList = dgym_data[0].result.centerList;

centerList.forEach((v) => {
  centerList.insertAdjacentHTML(
    "beforeend",
    `
  <div class="centerList">
            <div class="centerList_card">
              <div class="centerListImg"></div>

              <div class="text">
              <div class=type>${v.tags[0]}/${v.tags[1]}</div>
              <div class=name>${v.gymName}</div>
                <div class=review>
                    <div class=score>⭐${v.review.rate}</div>
                    <div class=count>(${v.review.count})</div>
                    <div class=site>${v.address} · ${
      v.location[0] + v.location[1]
    } </div>
                <div class="price"></div>
              </div>

              <div class="pro"></div>
              <div class="service"></div>
            </div>
          </div>`
  );
});
