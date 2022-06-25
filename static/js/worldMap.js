
var ec_mapData = echarts.init(document.getElementById('map'));

var mapData = []

var mapDataOption = {
    title: {
        sublink: 'http://esa.un.org/wpp/Excel-Data/population.htm',
        left: 'center',
        top: 'top'
    },
    tooltip: {
         trigger: 'item',
         formatter: function (params) {
             var value = (params.value + '').split('.');
             value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
                     ;
             return params.name + ' : ' + value;
         }
     },
    visualMap: {
        min: 0,
        max: 40000000,
        text: ['High', 'Low'],
        realtime: false,
        calculable: true,
        color: ['orangered', 'yellow', 'lightskyblue']
    },
    series: [
        {
            name: '新冠肺炎感染分布图',
            type: 'map',
            mapType: 'world',
            roam: true,
            zoom: 1.2,
            // 地图区域的多边形 图形样式
            itemStyle: {
                areaColor: "#6e6e73", // 地图区域的颜色 如果设置了visualMap，areaColor属性将不起作用 无数据地区
                borderWidth: 0.2, // 描边线宽 为 0 时无描边
                // borderColor: "#000", // 图形的描边颜色 支持的颜色格式同 color，不支持回调函数
                borderType: "solid", // 描边类型，默认为实线，支持 'solid', 'dashed', 'dotted'
            },
            // 高亮状态下的多边形和标签样式
            emphasis: {
              label: {
                show: true, // 是否显示标签
                color: "auto", // 文字的颜色 如果设置为 'auto'，则为视觉映射得到的颜色，如系列色
              },
              itemStyle: {
                areaColor: "#fded10", // 地图区域的颜色
                // areaColor: "none",
                opacity: 0.5,
              },
            },
            // 自定义地区的名称映射
            // nameMap: name,
            data: mapData
        }
    ]
};
ec_mapData.setOption(mapDataOption);