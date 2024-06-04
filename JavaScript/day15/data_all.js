import { dgym_data } from "./dgym_data.js";
dgym_data;

const adList = document.querySelector(".adList");

const ad_data = dgym_data[0].result.liteAdList;

ad_data.forEach((v) => {
  adList.insertAdjacentHTML(
    "beforeend",
    `
      <div class=container>
      <div class=adcontainer>
      <div class=adList>
          <div class=adcard>
                
            
            <div class=imagebox>
                    <img src=${
                      v.gymPhotoSmall == null
                        ? `${v.gymPhotoBig}>`
                        : `${v.gymPhotoSmall}>`
                    }</img>
            </div>

            <div class=text>
                    <div class=texttop> 
                      <div class=type>${v.tags} </div>
                      <div class=name>${v.gymName}</div>
                      <div class=reviewline> 
                        <div class=review>${
                          v.review.count == 0
                            ? ""
                            : `<div class=score>⭐${v.review.rate}</div>
                         <div class=count>(${v.review.count})</div>`
                        }</div>
                        <div class=site>${v.address} · ${(
      (v.location[0] + v.location[1]) /
      100
    ).toFixed(1)}km </div> 
                      
                    </div>
               
                
                    
                     
    
    
                     
                  </div>
                  <div class=price>
                  <div class=discount_per></div>
                  <div class=monthprice>${
                    v.price.period == null
                      ? `${
                          Math.floor(v.price.lowestPrice / v.price.count / 10) *
                          10
                        }원~/회`
                      : `${
                          Math.floor(
                            v.price.lowestPrice / v.price.period / 10
                          ) * 10
                        }원~/월`
                  }
                  </div>  
                     
            </div>

                
            
          </div>
         
     </div>                    
     <div class=service>
     <div class=free>무료 서비스</div>
     <div class=free_info>${v.service.free}</div>

        </div></div>
        
  </div>`
  );
});

const centerList = document.querySelector(".centerList");

const centerdata = dgym_data[0].result.centerList;

centerdata.forEach((v) => {
  centerList.insertAdjacentHTML(
    "beforeend",
    `
  <div class="centerList">
            <div class="centerList_card">
            <div class=imagebox>
            <img src=${
              v.gymPhotoSmall == null
                ? `${v.gymPhotoBig}>`
                : `${v.gymPhotoSmall}>`
            }</img>
        </div>

              <div class="text">
              <div class=type>${v.tags[0]}/${v.tags[1]}</div>
              <div class=name>${v.gymName}</div>
              <div class=reviewline>
                <div class=review>${
                  v.review.count == 0
                    ? ""
                    : `<div class=score>⭐${v.review.rate}</div>
                    <div class=count>(${v.review.count})</div>`
                }
                      
                    </div>
                    
                    <div class=site>${v.address} · ${(
      (v.location[0] + v.location[1]) /
      100
    ).toFixed(1)}km </div>
    <div class=price>
    <div class=discount_per>
      
    </div>
    <div class=monthprice>${
      v.price.period == null
        ? `<div class=monthprice>${
            Math.floor(v.price.lowestPrice / v.price.count / 10) * 10
          }원~/회`
        : `<div class=monthprice>${
            Math.floor(v.price.lowestPrice / v.price.period / 10) * 10
          }원~/월`
    }
      
    </div>
              </div>

              <div class="pro">${
                v.program.free == ""
                  ? ""
                  : `<div class="pro">무료 프로그램 ${v.program.free}`
              }</div>


              <div class="service">무료 서비스
              ${v.service.free}
              </div>
            </div>
          </div>`
  );
});
