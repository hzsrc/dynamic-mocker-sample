module.exports = {
    disabled: 0,
    status: 200,
    body: function (query, post, header, request){
      var cookie = header["cookie"] || header['Cookie'] || '';
        console.log(cookie+'---')
      return  {
        status: cookie.indexOf('a=b')>-1 ? 0 : 2,
        data: '', 
        msg: 'Session Expired'
      }
    }
}
