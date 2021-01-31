const materials = [
  {
    name: "煤矿(天然)",
    source: "采矿站"
  }, {
    name: "铜",
    source: "采矿站"
  }, {
    name: "琥珀",
    source: "采矿站"
  }, {
    name: "铁",
    source: "采矿站"
  }, {
    name: "铝",
    source: "采矿站"
  }, {
    name: "银",
    source: "采矿站"
  }, {
    name: "金",
    source: "采矿站"
  }, {
    name: "翡翠",
    source: "采矿站"
  }, {
    name: "铂",
    source: "采矿站"
  }, {
    name: "黄玉",
    source: "采矿站"
  }, {
    name: "红宝石",
    source: "采矿站"
  }, {
    name: "钻石",
    source: "采矿站"
  }, {
    name: "蓝宝石",
    source: "采矿站"
  }, {
    name: "紫晶",
    source: "采矿站"
  }, {
    name: "钛矿",
    source: "采矿站"
  }, {
    name: "紫翠宝石",
    source: "采矿站"
  }, {
    name: "铀",
    source: "采矿站"
  }, {
    name: "黑曜石",
    source: "采矿站"
  }, {
    name: "氦3",
    source: "采矿站"
  }, {
    name: "铀棒",
    source: "铀浓缩厂",
    time: "120",
    toMake: [
      {
        thing: "铀",
        quantity: "20"
      }, {
        thing: "钠",
        quantity: "10"
      }
    ]
  }, {
    name: "精磨紫翠玉",
    source: "珠宝制作",
    time: "60",
    toMake: [
      {
        thing: "紫翠宝石",
        quantity: "5"
      }
    ]
  }, {
    name: "精磨黑曜石",
    source: "珠宝制作",
    time: "60",
    toMake: [
      {
        thing: "黑曜石",
        quantity: "5"
      }
    ]
  }, {
    name: "钛",
    source: "化学",
    time: "20",
    batch: "50",
    toMake: [
      {
        thing: "硫酸",
        quantity: "1"
      }, {
        thing: "钛矿",
        quantity: "100"
      }
    ]
  }, {
    name: "乙醚",
    source: "化学",
    time: "60",
    toMake: [
      {
        thing: "硫酸",
        quantity: "1"
      }, {
        thing: "乙醇",
        quantity: "1"
      }
    ]
  }, {
    name: "火药",
    source: "化学",
    time: "120",
    batch: "20",
    toMake: [
      {
        thing: "乙醚",
        quantity: "1"
      }, {
        thing: "硫酸",
        quantity: "2"
      }, {
        thing: "木",
        quantity: "2"
      }
    ]
  }, {
    name: "齿轮",
    source: "制作",
    time: "80",
    toMake: [
      {
        thing: "砖石切割机",
        quantity: "1"
      }, {
        thing: "钛条",
        quantity: "1"
      }
    ]
  }, {
    name: "炸弹",
    source: "制作",
    time: "120",
    toMake: [
      {
        thing: "金属棒",
        quantity: "5"
      }, {
        thing: "火药",
        quantity: "10"
      }
    ]
  }, {
    name: "压缩机",
    source: "制作",
    time: "180",
    toMake: [
      {
        thing: "精炼油",
        quantity: "2"
      }, {
        thing: "橡胶",
        quantity: "1"
      }, {
        thing: "铁条",
        quantity: "5"
      }
    ]
  }, {
    name: "光纤电缆",
    source: "制作",
    time: "120",
    batch: "10",
    toMake: [
      {
        thing: "硅",
        quantity: "10"
      }, {
        thing: "氧",
        quantity: "10"
      }, {
        thing: "塑料",
        quantity: "1"
      }
    ]
  }, {
    name: "干冰",
    source: "制作",
    time: "120",
    batch: "4",
    toMake: [
      {
        thing: "压缩机",
        quantity: "1"
      }, {
        thing: "绿色激光",
        quantity: "10"
      }, {
        thing: "石墨",
        quantity: "1000"
      }
    ]
  }, {
    name: "氧气瓶",
    source: "制作",
    time: "120",
    toMake: [
      {
        thing: "压缩机",
        quantity: "1"
      }, {
        thing: "气瓶",
        quantity: "1"
      }, {
        thing: "氧",
        quantity: "5"
      }
    ]
  }, {
    name: "钛条",
    source: "冶炼",
    time: "60",
    toMake: [
      {
        thing: "钛",
        quantity: "5"
      }
    ]
  }, {
    name: "铜棒",
    source: "冶炼",
    time: "10",
    toMake: [
      {
        thing: "铜",
        quantity: "5"
      }
    ]
  }, {
    name: "铁条",
    source: "冶炼",
    time: "15",
    toMake: [
      {
        thing: "铁",
        quantity: "5"
      }
    ]
  }, {
    name: "玻璃",
    source: "冶炼",
    time: "60",
    toMake: [
      {
        thing: "硅",
        quantity: "2"
      }
    ]
  }, {
    name: "铝棒",
    source: "冶炼",
    time: "15",
    toMake: [
      {
        thing: "铝",
        quantity: "5"
      }
    ]
  }, {
    name: "金属棒",
    source: "冶炼",
    time: "45",
    toMake: [
      {
        thing: "铁条",
        quantity: "1"
      },
      {
        thing: "石墨",
        quantity: "1"
      }
    ]
  }, {
    name: "银条",
    source: "冶炼",
    time: "60",
    toMake: [
      {
        thing: "银",
        quantity: "5"
      }
    ]
  }, {
    name: "煤炭(烧木)",
    source: "冶炼",
    time: "60",
    batch: "50",
    toMake: [
      {
        thing: "木",
        quantity: "1"
      }
    ]
  }, {
    name: "金条",
    source: "冶炼",
    time: "60",
    toMake: [
      {
        thing: "金",
        quantity: "5"
      }
    ]
  }, {
    name: "铁盘子",
    source: "冶炼",
    time: "120",
    toMake: [
      {
        thing: "金属棒",
        quantity: "5"
      }
    ]
  }, {
    name: "磁铁矿条",
    source: "冶炼",
    time: "60",
    toMake: [
      {
        thing: "磁矿石",
        quantity: "5"
      }
    ]
  }, {
    name: "石墨",
    source: "制作",
    time: "5",
    value: "15",
    toMake: [
      {
        thing: "煤矿(天然)",
        quantity: "5"
      }
    ]
  }, {
    name: "铜钉",
    source: "制作",
    time: "20",
    batch: "10",
    value: "10",
    toMake: [
      {
        thing: "铜棒",
        quantity: "1"
      }
    ]
  }, {
    name: "线",
    source: "制作",
    time: "30",
    batch: "5",
    value: "15",
    toMake: [
      {
        thing: "铜棒",
        quantity: "1"
      }
    ]
  }, {
    name: "电池",
    source: "制作",
    time: "120",
    value: "200",
    toMake: [
      {
        thing: "琥珀",
        quantity: "1"
      }, {
        thing: "铁条",
        quantity: "1"
      }, {
        thing: "铜棒",
        quantity: "5"
      }
    ]
  }, {
    name: "电路",
    source: "制作",
    time: "180",
    value: "2070",
    toMake: [
      {
        thing: "铁条",
        quantity: "10"
      }, {
        thing: "石墨",
        quantity: "50"
      }, {
        thing: "铜棒",
        quantity: "20"
      }
    ]
  }, {
    name: "灯",
    source: "制作",
    time: "80",
    value: "760",
    toMake: [
      {
        thing: "线",
        quantity: "10"
      }, {
        thing: "石墨",
        quantity: "20"
      }, {
        thing: "铜棒",
        quantity: "5"
      }
    ]
  }, {
    name: "实验室烧瓶",
    source: "制作",
    time: "60",
    value: "800",
    toMake: [
      {
        thing: "玻璃",
        quantity: "1"
      }
    ]
  }, {
    name: "琥珀充电器",
    source: "制作",
    time: "5",
    value: "4",
    toMake: [
      {
        thing: "琥珀",
        quantity: "1"
      }
    ]
  }, {
    name: "铝瓶",
    source: "制作",
    time: "30",
    value: "55",
    toMake: [
      {
        thing: "铝棒",
        quantity: "1"
      }
    ]
  }, {
    name: "琥珀绝缘体",
    source: "制作",
    time: "20",
    value: "125",
    toMake: [
      {
        thing: "琥珀",
        quantity: "10"
      }, {
        thing: "铝瓶",
        quantity: "1"
      }
    ]
  }, {
    name: "绝缘线",
    source: "制作",
    time: "200",
    value: "750",
    toMake: [
      {
        thing: "线",
        quantity: "1"
      }, {
        thing: "琥珀绝缘体",
        quantity: "1"
      }
    ]
  }, {
    name: "铝罐",
    source: "制作",
    time: "120",
    batch: "5",
    value: "450",
    toMake: [
      {
        thing: "铝棒",
        quantity: "3"
      }
    ]
  }, {
    name: "镜子",
    source: "制作",
    time: "120",
    batch: "2",
    value: "450",
    toMake: [
      {
        thing: "玻璃",
        quantity: "1"
      }, {
        thing: "银条",
        quantity: "1"
      }
    ]
  }, {
    name: "镜面激光",
    source: "制作",
    time: "120",
    batch: "2",
    value: "5400",
    toMake: [
      {
        thing: "电池",
        quantity: "1"
      }, {
        thing: "灯",
        quantity: "1"
      }, {
        thing: "镜子",
        quantity: "3"
      }
    ]
  }, {
    name: "气瓶",
    source: "制作",
    time: "180",
    batch: "3",
    value: "30000",
    toMake: [
      {
        thing: "铁盘子",
        quantity: "1"
      }, {
        thing: "塑料",
        quantity: "1"
      }, {
        thing: "铝罐",
        quantity: "1"
      }
    ]
  }, {
    name: "绿色激光",
    source: "制作",
    time: "20",
    batch: "5",
    value: "400",
    toMake: [
      {
        thing: "抛光的翡翠",
        quantity: "1"
      }, {
        thing: "绝缘线",
        quantity: "1"
      }, {
        thing: "灯",
        quantity: "1"
      }
    ]
  }, {
    name: "砖石切割机",
    source: "制作",
    time: "30",
    value: "5000",
    toMake: [
      {
        thing: "铁盘子",
        quantity: "1"
      }, {
        thing: "抛光钻石",
        quantity: "5"
      }
    ]
  }, {
    name: "母板",
    source: "制作",
    time: "1800",
    value: "17000",
    toMake: [
      {
        thing: "硅",
        quantity: "3"
      }, {
        thing: "电路",
        quantity: "3"
      }, {
        thing: "金条",
        quantity: "1"
      }
    ]
  }, {
    name: "固体推进剂",
    source: "制作",
    time: "1200",
    value: "27000",
    toMake: [
      {
        thing: "橡胶",
        quantity: "3"
      }, {
        thing: "铝棒",
        quantity: "10"
      }
    ]
  }, {
    name: "累加器",
    source: "制作",
    time: "180",
    value: "9000",
    toMake: [
      {
        thing: "钠",
        quantity: "20"
      }, {
        thing: "硫",
        quantity: "20"
      }
    ]
  }, {
    name: "太阳能板",
    source: "制作",
    time: "60",
    value: "69000",
    toMake: [
      {
        thing: "橡胶",
        quantity: "1"
      }, {
        thing: "硅",
        quantity: "10"
      }, {
        thing: "玻璃",
        quantity: "50"
      }
    ]
  }, {
    name: "磁铁",
    source: "制作",
    time: "120",
    value: "69000",
    toMake: [
      {
        thing: "磁铁矿条",
        quantity: "1"
      }
    ]
  }, {
    name: "电气引擎",
    source: "制作",
    time: "600",
    value: "69000",
    toMake: [
      {
        thing: "绝缘线",
        quantity: "50"
      }, {
        thing: "铝棒",
        quantity: "20"
      }, {
        thing: "磁铁",
        quantity: "1"
      }
    ]
  }, {
    name: "LCD监视器",
    source: "制作",
    time: "600",
    value: "69000",
    toMake: [
      {
        thing: "绝缘线",
        quantity: "20"
      }, {
        thing: "硅",
        quantity: "5"
      }, {
        thing: "蓝宝石水晶玻璃",
        quantity: "5"
      }
    ]
  }, {
    name: "硅",
    source: "化学开采",
    time: "600",
    batch: "5",
    value: "100"
  }, {
    name: "硫",
    source: "化学开采",
    time: "600",
    batch: "5",
    value: "100"
  }, {
    name: "钠",
    source: "化学开采",
    time: "600",
    batch: "5",
    value: "100"
  }, {
    name: "氮",
    source: "化学开采",
    time: "600",
    batch: "5",
    value: "100"
  }, {
    name: "石油",
    source: "油泵",
    value: "21"
  }, {
    name: "水",
    source: "水收集器",
    value: "5"
  }, {
    name: "木",
    source: "温室",
    time: "1800",
    batch: "10",
    value: "193",
    toMake: [
      {
        thing: "种子",
        quantity: "1"
      }, {
        thing: "水",
        quantity: "10"
      }
    ]
  }, {
    name: "藤本",
    source: "温室",
    time: "1800",
    toMake: [
      {
        thing: "藤本种子",
        quantity: "1"
      }, {
        thing: "水",
        quantity: "20"
      }
    ]
  }, {
    name: "葡萄",
    source: "温室",
    time: "1800",
    batch: "2",
    toMake: [
      {
        thing: "葡萄种子",
        quantity: "1"
      }, {
        thing: "水",
        quantity: "15"
      }
    ]
  }, {
    name: "种子",
    source: "商店",
    value: "20"
  }, {
    name: "藤本种子",
    source: "商店",
    value: "1000"
  }, {
    name: "葡萄种子",
    source: "商店",
    value: "1200"
  }, {
    name: "干净的水",
    source: "化学",
    time: "600",
    value: "1200",
    toMake: [
      {
        thing: "水",
        quantity: "1"
      }, {
        thing: "实验室烧瓶",
        quantity: "1"
      }
    ]
  }, {
    name: "橡胶",
    source: "化学",
    time: "1800",
    value: "4000",
    batch: "2",
    toMake: [
      {
        thing: "藤本",
        quantity: "1"
      }
    ]
  }, {
    name: "硫酸",
    source: "化学",
    time: "1800",
    value: "3500",
    toMake: [
      {
        thing: "干净的水",
        quantity: "1"
      }, {
        thing: "硫",
        quantity: "2"
      }
    ]
  }, {
    name: "乙醇",
    source: "化学",
    time: "1800",
    value: "4200",
    toMake: [
      {
        thing: "铝瓶",
        quantity: "1"
      }, {
        thing: "葡萄",
        quantity: "2"
      }
    ]
  }, {
    name: "精炼油",
    source: "化学",
    time: "1800",
    value: "16500",
    toMake: [
      {
        thing: "实验室烧瓶",
        quantity: "1"
      }, {
        thing: "氢",
        quantity: "10"
      }, {
        thing: "石油",
        quantity: "10"
      }
    ]
  }, {
    name: "塑料",
    source: "化学",
    time: "600",
    value: "40000",
    toMake: [
      {
        thing: "精炼油",
        quantity: "1"
      }, {
        thing: "煤矿(天然)",
        quantity: "50"
      }, {
        thing: "绿色激光",
        quantity: "1"
      }
    ]
  }, {
    name: "氢",
    source: "化学",
    time: "900",
    value: "400",
    batch: "2",
    byproduct: "氧",
    toMake: [
      {
        thing: "干净的水",
        quantity: "1"
      }
    ]
  }, {
    name: "液态氮",
    source: "化学",
    time: "120",
    value: "400",
    toMake: [
      {
        thing: "铝瓶",
        quantity: "1"
      }, {
        thing: "压缩机",
        quantity: "1"
      }, {
        thing: "氮",
        quantity: "10"
      }
    ]
  }, {
    name: "磁矿石",
    source: "化学",
    time: "360",
    value: "400",
    toMake: [
      {
        thing: "绿色激光",
        quantity: "5"
      }, {
        thing: "铁条",
        quantity: "10"
      }, {
        thing: "氧",
        quantity: "5"
      }
    ]
  }, {
    name: "强化氦3",
    source: "化学",
    time: "1800",
    value: "400",
    toMake: [
      {
        thing: "铝瓶",
        quantity: "1"
      }, {
        thing: "压缩机",
        quantity: "1"
      }, {
        thing: "氦3",
        quantity: "100"
      }
    ]
  }, {
    name: "毒气弹",
    source: "化学",
    time: "120",
    value: "400",
    toMake: [
      {
        thing: "硫酸",
        quantity: "10"
      }
    ]
  }, {
    name: "氧",
    source: "氢",
    value: "800"
  }, {
    name: "抛光琥珀",
    source: "珠宝制作",
    time: "30",
    value: "70",
    toMake: [
      {
        thing: "琥珀",
        quantity: "5"
      }
    ]
  }, {
    name: "抛光的翡翠",
    source: "珠宝制作",
    time: "30",
    value: "160",
    toMake: [
      {
        thing: "翡翠",
        quantity: "5"
      }
    ]
  }, {
    name: "琥珀手链",
    source: "珠宝制作",
    time: "120",
    value: "280",
    toMake: [
      {
        thing: "抛光琥珀",
        quantity: "1"
      }, {
        thing: "银条",
        quantity: "1"
      }
    ]
  }, {
    name: "黑曜石小刀",
    source: "珠宝制作",
    time: "120",
    value: "280",
    toMake: [
      {
        thing: "精磨黑曜石",
        quantity: "50"
      }, {
        thing: "银条",
        quantity: "1"
      }
    ]
  }, {
    name: "蓝宝石水晶玻璃",
    source: "珠宝制作",
    time: "120",
    value: "280",
    toMake: [
      {
        thing: "抛光蓝宝石",
        quantity: "10"
      }
    ]
  }, {
    name: "翡翠戒指",
    source: "珠宝制作",
    time: "300",
    value: "450",
    toMake: [
      {
        thing: "抛光的翡翠",
        quantity: "1"
      }, {
        thing: "金条",
        quantity: "1"
      }
    ]
  }, {
    name: "抛光黄玉",
    source: "珠宝制作",
    time: "60",
    value: "70",
    toMake: [
      {
        thing: "黄玉",
        quantity: "5"
      }
    ]
  }, {
    name: "抛光红宝石",
    source: "珠宝制作",
    time: "60",
    value: "75",
    toMake: [
      {
        thing: "红宝石",
        quantity: "5"
      }
    ]
  }, {
    name: "抛光钻石",
    source: "珠宝制作",
    time: "60",
    value: "90",
    toMake: [
      {
        thing: "钻石",
        quantity: "5"
      }
    ]
  }, {
    name: "抛光蓝宝石",
    source: "珠宝制作",
    time: "60",
    value: "80",
    toMake: [
      {
        thing: "蓝宝石",
        quantity: "5"
      }
    ]
  }, {
    name: "抛光紫水晶",
    source: "珠宝制作",
    time: "60",
    value: "90",
    toMake: [
      {
        thing: "紫晶",
        quantity: "5"
      }
    ]
  }, {
    name: "玛雅日历",
    source: "珠宝制作",
    time: "120",
    toMake: [
      {
        thing: "金条",
        quantity: "10"
      }, {
        thing: "银条",
        quantity: "2"
      }
    ]
  }, {
    name: "发梳",
    source: "珠宝制作",
    time: "120",
    toMake: [
      {
        thing: "银条",
        quantity: "1"
      }, {
        thing: "抛光紫水晶",
        quantity: "15"
      }, {
        thing: "精磨紫翠玉",
        quantity: "10"
      }
    ]
  }
];
