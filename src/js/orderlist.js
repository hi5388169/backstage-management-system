    jQuery(function($) {
        if (Cookie.get('username')) {
            $.ajax({
                type: 'get',
                async: true,
                url: '/orderlist',
                data: {

                },
                success: (str) => {
                    console.log(str.data);
                    let res = str.data.map((item) => {
                        return `<tr style="height: 37px; text-align:center;">
                                    <td><input type="checkbox"></td>
                                    <td>${item.id}</td>
                                    <td>${item.goodsname}</td>
                                    <td>${item.newprice}</td>
                                    <td>${item.num}</td>
                                    <td>${item.transportCosts}</td>
                                    <td>${item.goodstotal}</td>
                                    <td>${item.ordernum}</td>
                                    <td>${item.time}</td>
                                    <td><i class="iconfont icon-shanchu"></i></td>
                                </tr>`
                    }).join('');
                    $('.layui-body table tbody').html(res);
                }
            })
        }
    })