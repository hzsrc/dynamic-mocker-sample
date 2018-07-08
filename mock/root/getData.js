module.exports = {
    disabled: 0,
    body: function (query, post) {
        return new Promise(resolve => {
            var data = {
                status: 0,
                data: {
                    id: 1,
                    tag: "This is a simple json data",
                    name: "张三丰",
                    delay: post.delay,
                }
            }
            if (post.delay)
                setTimeout(t => resolve(data), 2000)
            else
                resolve(data)
        })
    }
}