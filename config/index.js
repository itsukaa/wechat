export const config = {
    /**
     * 公众号配置
     */

    // 公众号APP_ID
    APP_ID: "wxb10f05b413084440",
    // 公众号APP_SECRET
    APP_SECRET: "b253d2bbb6de651e461b2228bfd08e2c",
    // 模板消息id
    TEMPLATE_ID: "VaXQj4IPrE8LHlGh5EEGvcHOSfHKem6eZ2TzOC6iwAI",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    USERS: ["ogPI16pyZkEGWB3-0OP1UAZxt-1E","ogPI16k8UqvKf6VNaohmPLXI7IS0"],
     
    /**
     * 信息配置
     */

    /** 天气相关 */

    // 所在省份
    PROVINCE: "湖北",
    // 所在城市
    CITY: "武汉",

    /** 生日相关 */

    // 生日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
    BIRTHDAYS: [
      {"name": "花花", "year": "1993", "date": "12-27"},
    ],

    /** 日期相关 */

    // 在一起的日子，格式同上
    LOVE_DATE: "2016-08-20",
    // 结婚纪念日
    MARRY_DATE: "2025-01-04",


    /** 好文节选 */

    // 好文节选的内容类型
    // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
    LITERARY_PREFERENCE: "第四步：启用workflow自动任务,定时执行"


    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
