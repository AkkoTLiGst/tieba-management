export const systemBar = (postBar: number[], post: number[], user: number[]) => {
    // 七天每天对应的数据
    const data: [number[], number[], number[], number[], number[], number[], number[]] = [[], [], [], [], [], [], []]
    // 将数据压入每天数组
    data.forEach((item, index) => {
        item.push(postBar[index], post[index], user[index]);
    })
    return {
        title: {
            text: '最近一周帖子、用户、贴吧数量图',
            x: 'center'
        },
        tooltip: {},
        legend: {top: "6%"},
        xAxis: {
            type: 'category', axisLabel: {},
        },
        yAxis: {},
        dataset: {
            source: [
                ['type', '贴吧', '帖子', '用户'],
                ['周一', ...data[0]],
                ['周二', ...data[1]],
                ['周三', ...data[2]],
                ['周四', ...data[3]],
                ['周五', ...data[4]],
                ['周六', ...data[5]],
                ['周日', ...data[6]],
            ]
        },
        series: [
            {type: 'bar', label: {show: true, position: 'top', color: 'inherit'}, barMinWidth: '14', barGap: '0'},
            {type: 'bar', label: {show: true, position: 'top', color: 'inherit'}, barMinWidth: '14', barGap: '0'},
            {type: 'bar', label: {show: true, position: 'top', color: 'inherit'}, barMinWidth: '14', barGap: '0'}
        ],
        grid:{
            top: '20%'
        }
    }
}

// system折线图
export const systemLine = (postBar: number[], post: number[], user: number[]) => {

    // 半年每个月对应的数据
    const data: [number[], number[], number[], number[], number[], number[], number[]] = [[], [], [], [], [], [], []]
    // 将数据压入每天数组
    data.forEach((item, index) => {
        item.push(postBar[index], post[index], user[index]);
    })

    return {
        title: {
            text: '最近一周帖子、用户、贴吧数量趋势图',
            x: 'center'
        },
        tooltip: {},
        legend: {top: "6%"},
        xAxis: {type: 'category'}, yAxis: {},
        dataset: {
            source: [
                ['type', '贴吧', '帖子', '用户'],
                ['6月', ...data[0]],
                ['7月', ...data[1]],
                ['8月', ...data[2]],
                ['9月', ...data[3]],
                ['10月', ...data[4]],
                ['11月', ...data[5]]
            ]
        },
        series: [
            {type: 'line', label: {show: true}},
            {type: 'line', label: {show: true}},
            {type: 'line', label: {show: true}},
        ],
        grid:{
            top: '20%'
        }
    }
}