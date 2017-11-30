module.exports = {
    disabled: 0,
    status: 200,
    headers: function (query, post, header, request){
      var r = {}
      r['set-cookie'] = 'a=b; Max-Age=0; path=/';
      return r;
    },
    body: {
        status: 0,
        data: ""
    }
}
