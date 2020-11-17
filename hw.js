<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>第一个 ECharts 实例</title>
    <!-- 引入 echarts.js -->
    <script src="https://cdn.staticfile.org/echarts/4.3.0/echarts.min.js"></script>
</head>
<body>
    <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
    <div id="main" style="width: 600px;height:400px;"></div>
    <script type="text/javascript">
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        var option = {
    xAxis: {
        type: '支出',
        data: ['食品','衣着','设备','医疗','交通','教育','居住','杂项']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [4934.05, 1512.88,981.13,1294.07,2328.51,2383.96,1246.19,649.66],
        type: 'line'
    }]
};

var option = {
    xAxis: {
        type: '支出',
        data: ['食品','衣着','设备','医疗','交通','教育','居住','杂项']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [4934.05, 1512.88,981.13,1294.07,2328.51,2383.96,1246.19,649.66],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
            color: 'rgba(220, 220, 220, 0.8)'
        }
    }]
};

var option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['食品','衣着','设备','医疗','交通','教育','居住']
    },
    series: [
        {
            name: '支出',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 4934.05, name: '食品'},
                {value: 1512.88, name: '衣着'},
                {value: 981.13, name: '设备'},
                {value: 1294.07, name: '医疗'},
                {value: 2328.51, name: '交通'},
                {value: 1246.19, name: '教育'},
                {value: 649.66, name: '居住'},
            ]
        }
    ]
};

option = {
    title: {
        text: '基础雷达图'
    },
    tooltip: {},
    legend: {
        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        indicator: [
            { name: '销售（sales）', max: 6500},
            { name: '管理（Administration）', max: 16000},
            { name: '信息技术（Information Techology）', max: 30000},
            { name: '客服（Customer Support）', max: 38000},
            { name: '研发（Development）', max: 52000},
            { name: '市场（Marketing）', max: 25000}
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
            {
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: '预算分配（Allocated Budget）'
            },
            {
                value: [5000, 14000, 28000, 31000, 42000, 21000],
                name: '实际开销（Actual Spending）'
            }
        ]
    }]
};


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    </script>
</body>
</html>