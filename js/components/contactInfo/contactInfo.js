function renderContactInfo(data) {
   // input validation
   if (typeof data !== 'object'||
        Array.isArray(data)) {
        return 'Netinkamo tipo parametras'
   }
   const allowedKeys = ['selector', 'list'];
   const keys = Object.keys(data);
   if(keys.length !== 2) {
       return 'Netinkamas kiekis objektu raktazodziu'
   }
   for (const key of keys) {
      if(!allowedKeys.includes(key)) {
         return `Neatpazintas raktazodis "${key}"`;
   }
}

if (!Array.isArray(data.list)) {
   return 'Parametras "list" netinkamo formato'
}
if (typeof data.selector !== 'string' || data.selector === ''){
   return 'Parametras "selector" netinkamo formato'
}
   
   // logic
   const {selector, list} = data;
   const DOM = document.querySelector(selector);
   if (!DOM) {
      return 'Pagal pateikta selectoriu nerastas elementas';
    }

   let HTML = '';

   for (const item of list) {
      if (item.icon && item.title && item.text){
      HTML += `<div class="sec-icon">
                           <div class="icon">
                              <i class="${item.icon}"></i>
                           </div>
                           <div class="icon-text">
                              <h4>${item.title}</h4>
                              <p>${item.text}</p>
                           </div>
                        </div>`     
       } else if (item.icon && item.title &&item.link){
         HTML += `<div class="sec-icon">
                     <div class="icon">
                        <i class="${item.icon}"></i>
                     </div>
                  <div class="icon-text">
                        <h4>${item.title}</h4>
                        <a>${item.link}</a>
         </div>
      </div>`     
  }
   }
 
 
   // post logic validation
   if (HTML === ''){
      return 'Duomenyse nerasta jokios teisingos informacijos'
   }
   // result return
   DOM.innerHTML = HTML;
   return true;
}


export { renderContactInfo }