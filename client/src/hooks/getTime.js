export const getTime = (blogDate) => {
    const miliseconds = Date.now() - blogDate;

    if(miliseconds<=60000){
      return Math.trunc(miliseconds/1000) + 'seconds ago';
    } else if(miliseconds<=3600000){
      return Math.trunc(miliseconds/60000) + 'm ago';
    } else if(miliseconds<=86400000){
      return Math.trunc(miliseconds/3600000) + 'h ago';
    } else{
      return Math.trunc(miliseconds/86400000) + 'day ago';
    }
}