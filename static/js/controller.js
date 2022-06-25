function gettime() {
    $.ajax({
        url: "/time",
        timeout: 10000,
        success: function (data) {
            $("#time").html(data)
        },
        error: function (xhr, type, erro) {
            alert("时间出错")
        }
    })
}

function get_map_data() {
    $.ajax({
        url: "/getMapData",
        timeout: 10000,
        success: function (data) {
            mapDataOption.series[0].data  = data.data//传地图数据
            console.log(data.data)
            ec_mapData.setOption(mapDataOption)
        },
        error: function (xhr, type, erro) {
            alert("地图数据获取失败")
        }
    })
}
get_map_data()
// setInterval(get_map_data, 100000)
gettime()
// setInterval(gettime, 1000)