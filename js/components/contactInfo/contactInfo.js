function renderContactInfo(data) {
   // input validation
   if (typeof data !== 'object'||
        Array.isArray(data)) {
        return 'Netinkamo tipo parametras'
   }

   // logic
   // post logic validation
   // result return
   return true;
}


export { renderContactInfo }