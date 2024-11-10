const HeroList = [
  {
    id: 1,
    englishName: "Agudo",
    chineseName: "阿古朵",
    imageLink: "/commons/images/f/f8/Agudo_Hero_Icon.jpg",
    occupation: "Jungling",
    altOccupation: '',
    counter:[50,66],
    beCountered:[75,44]
  },
  {
    id: 2,
    englishName: "Alessio",
    chineseName: "莱西奥",
    imageLink: "/commons/images/6/63/Alessio_Hero_Icon.jpg",
    occupation: "Farm Lane",
    altOccupation: '',
    counter:[91,12,28],
    beCountered:[70],
    combo:[65]
  },
  {
    id: 3,
    englishName: "Allain",
    chineseName: "亚连",
    imageLink: "/commons/images/5/5f/Allain_Hero_Icon.jpg",
    occupation: "Clash Lane",
    altOccupation: '',
    counter:[39,21,85],//黄忠，典韦
    beCountered:[5,60],//被阿离，马可克制
  },
  {
    id: 4,
    englishName: "Angela",
    chineseName: "安琪拉",
    imageLink: "/commons/images/5/5a/Angela_Hero_Icon.png",
    occupation: "Mid Lane",
    altOccupation: '',
    counter:[57],
    beCountered:[86,70]
  },
  {
    id: 5,
    englishName: "Arli",
    chineseName: "公孙离",
    imageLink: "/commons/images/5/5c/Gong_Sun_Li_Hero_Icon.png",
    occupation: "Farm Lane",
    altOccupation: '',
    counter:[75,31,71],
    combo:[87,27,17],
    beCountered:[25,6]//扁鹊，亚瑟
  },
  {
    id: 6,
    englishName: "Arthur",
    chineseName: "亚瑟",
    imageLink: "/commons/images/b/b5/Arthur_HOK_Hero_Icon.png",
    occupation: "Clash Lane",
    altOccupation: 'Jungling',
    counter:[59,5],//蒙犽，公孙离
    beCountered:[21,3,55]//被典韦，亚连，吕布克制
  },
  {
    id: 7,
    englishName: "Ata",
    chineseName: "猪八戒",
    imageLink: "/commons/images/3/35/Ata_Hero_Icon.jpg",
    occupation: "Clash Lane",
    altOccupation: '',
    combo:[78],
    counter:[79],
    beCountered:[15,57,72]
  },
  {
    id: 8,
    englishName: "Athena",
    chineseName: "雅典娜",
    imageLink: "/commons/images/4/45/Athena_Hero_Icon.png",
    occupation: "Jungling",
    altOccupation: '',
    counter:[43],
    beCountered:[63,22],
    combo:[62]
  },
  {
    id: 9,
    englishName: "Augran",
    chineseName: "大司命",
    imageLink: "/commons/images/5/5f/Da_Siming_Hero_Icon.jpg",
    occupation: "Jungling",
    altOccupation: 'Clash Lane',
    counter:[10],
    beCountered:[59,1,68],//不知火舞,宫本
    combo:[91]//周瑜
  },
  {
    id: 10,
    englishName: "Biron",
    chineseName: "狂铁",
    imageLink: "/commons/images/1/12/Kuang_Tie_Hero_Icon.png",
    occupation: "Clash Lane",
    altOccupation: '',
    counter:[77],
    beCountered:[21,9,26]
  },
  {
    id: 11,
    englishName: "Butterfly",
    chineseName: "刀锋宝贝",
    imageLink: "/commons/images/3/3f/Butterfly_Hero_Icon_2019.png",
    occupation: "Jungling",
    altOccupation: '',
    couter:[33,41],
    beCountered:[77,35],

  },
  {
    id: 12,
    englishName: "Cai Yan",
    chineseName: "蔡文姬",
    imageLink: "/commons/images/f/f8/Cai_Wenji_Hero_Icon.png",
    occupation: "Roaming",
    altOccupation: '',
    beCountered:[68], //宫本
    counter:[42,88,76]//克诸葛亮，杨玉环，守约
  },
  {
    id: 13,
    englishName: "Shi",
    chineseName: "西施",
    imageLink: "/commons/images/0/00/Cao_Cao_Hero_Icon.png",
    occupation: "Mid Lane",
    altOccupation: '',
    counter:[1,25],
    beCountered:[5,92,59]
  },
  {
    id: 14,
    englishName: "Charlotte",
    chineseName: "夏洛特",
    imageLink: "/commons/images/b/b2/Charlotte_Hero_Icon.jpg",
    occupation: "Clash Lane",
    altOccupation: '',
    counter:[77],
    beCountered:[6,50]
  },
  {
    id: 15,
    englishName: "Cirrus",
    chineseName: "云中君",
    imageLink: "/commons/images/1/1f/Yun_Zhongjun_Hero_Icon.jpg",
    occupation: "Jungling",
    altOccupation: '',
    counter:[7],
    beCountered:[88]
  },
  {
    id: 16,
    englishName: "Consort Yu",
    chineseName: "虞姬",
    imageLink: "/commons/images/1/14/Yu_Ji_Hero_Icon.png",
    occupation: "Farm Lane",
    altOccupation: '',
    combo:[17],//大乔
    counter:[81,69,5],
    beCountered:[1,75,59]
  },
  {
    id: 17,
    englishName: "Da Qiao",
    chineseName: "大乔",
    imageLink: "/commons/images/3/30/Da_Qiao_Hero_Icon.png",
    occupation: "Roaming",
    altOccupation: 'Mid Lane',
    counter:[20,1,37],
    beCountered:[5,34],
    combo:[16,30,68]//虞姬，老夫子，宫本

  },
  {
    id: 18,
    englishName: "Daji",
    chineseName: "妲己",
    imageLink: "/commons/images/3/39/Daji_Hero_Icon.png",
    occupation: "Mid Lane",
    altOccupation: '',
    counter:[59,32],
    beCountered:[1,49]
  },
  {
    id: 19,
    englishName: "Dharma",
    chineseName: "达摩",
    imageLink: "/commons/images/c/c8/Dharma_Hero_Icon.png",
    occupation: "Jungling",
    altOccupation: 'Clash Lane',
    counter:[77,94,28],
    beCountered:[83,21,41]
  },
  {
    id: 20,
    englishName: "Di Renjie",
    chineseName: "狄仁杰",
    imageLink: "/commons/images/9/92/Di_Renjie_Hero_Icon.png",
    occupation: "Farm Lane",
    altOccupation: '',
    counter:[43],
    beCountered:[42,28,31],
    combo:[12]
  },
  {
    id: 21,
    englishName: "Dian Wei",
    chineseName: "典韦",
    imageLink: "/commons/images/e/ec/Dian_Wei_Hero_Icon.png",
    occupation: "Clash Lane",
    altOccupation: 'Jungling',
    counter:[68,34],
    beCountered:[3,28,58]
  },
  {
    id: 22,
    englishName: "Diaochan",
    chineseName: "貂蝉",
    imageLink: "/commons/images/a/a9/KOG_Diaochan_Hero_Icon.png",
    occupation: "Mid Lane",
    altOccupation: '',
    beCountered:[65],
    counter:[73,92],
  },
  {
    id: 23,
    englishName: "Dolia",
    chineseName: "朵莉亚",
    imageLink: "/commons/images/4/43/Doria_Hero_Icon.jpg",
    occupation: "Roaming",
    altOccupation: '',
    counter:[92,88],
    combo:[9,26,75,88,68] //亚连，夏侯，婉儿，杨玉环
  },
  {
    id: 24,
    englishName: "Donghuang",
    chineseName: "东皇太一",
    imageLink: "/commons/images/7/73/East_Emperor_Taiyi_Hero_Icon.png",
    occupation: "Roaming",
    altOccupation: '',
    counter:[67],
    beCountered:[70,26]//哪吒，夏侯
  },
  {
    id: 25,
    englishName: "Dr. Bian",
    chineseName: "扁鹊",
    imageLink: "/commons/images/2/26/Bian_Que_Hero_Icon.png",
    occupation: "Mid Lane",
    altOccupation: '',
    combo:[78,26,9],//孙膑，夏侯,猪八戒
    beCountered:[74,35],//王昭君，鬼谷子
    counter:[76,70]//克守约，哪吒
  },
  {
    id: 26,
    englishName: "Dun",
    chineseName: "夏侯惇",
    imageLink: "/commons/images/5/56/Xiahou_Dun_Hero_Icon.png",
    occupation: "Clash Lane",
    altOccupation: 'Roaming',
    combo:[23,78], //朵莉亚
    counter:[32,30,10],
    beCountered:[45,55,37]
  },
  {
    id: 27,
    englishName: "Dyadia",
    chineseName: "少司缘",
    imageLink: "/commons/images/b/be/Shao_Siyuan_Hero_Icon.jpg",
    occupation: "Roaming",
    altOccupation: '',
    counter:[5],
    combo:[5,44]
  },
  {
    id: 28,
    englishName: "Erin",
    chineseName: "艾琳",
    imageLink: "/commons/images/8/87/Ailin_Hero_Icon.png",
    occupation: "Farm Lane",
    altOccupation: '',
    counter:[20,92,21],
    beCountered:[65],
    combo:[65]
  },
  {
    id: 29,
    englishName: " ",
    chineseName: " ",
    imageLink: "/commons/images/c/cb/Li_Yuanfang_Hero_Icon.png",
    occupation: "Farm Lane",
    altOccupation: 'Jungling'
  },
  {
    id: 30,
    englishName: "Fuzi",
    chineseName: "老夫子",
    imageLink: "/commons/images/7/7b/Lao_Fu_Zi_Hero_Icon.png",
    occupation: "Clash Lane",
    altOccupation: '',
    combo:[17,12],//大乔，蔡文姬
    counter:[88,78], //杨玉环
    beCountered:[26,53] //刘禅，夏侯
  },
  {
    id: 31,
    englishName: "Gan & Mo",
    chineseName: "干将莫邪",
    imageLink: "/commons/images/6/6d/Ganjiang_Moye_Hero_Icon.png",
    occupation: "Mid Lane",
    altOccupation: '',
    counter:[1,92,46],
    beCountered:[5,34]
  },
  {
    id: 32,
    englishName: "Gao",
    chineseName: "高渐离",
    imageLink: "/commons/images/d/db/Gao_Jianli_Hero_Icon.png",
    occupation: "Mid Lane",
    altOccupation: '',
    counter:[64],
    beCountered:[63]
  },
  {
    id: 33,
    englishName: "Garo",
    chineseName: "伽罗",
    imageLink: "/commons/images/b/b8/Jia_Luo_Hero_Icon.png",
    occupation: "Farm Lane",
    altOccupation: '',
    counter:[87],
    beCountered:[73,11],
    combo:[65]
  },
  {
    id: 34,
    englishName: "Guan Yu",
    chineseName: "关羽",
    imageLink: "/commons/images/2/21/Guan_Yu_Hero_Icon.png",
    occupation: "Clash Lane",
    altOccupation: '',
    counter:[31],
    beCountered:[21,61] //典韦
  },
  {
    id: 35,
    englishName: "Guiguzi",
    chineseName: "鬼谷子",
    imageLink: "/commons/images/b/bd/Gui_Guzi_Hero_Icon.png",
    occupation: "Roaming",
    altOccupation: '',
    combo:[52,74,84],//刘备，王昭君
    counter:[12,65,73],
    beCountered:[87,92,77]//瑶，庄周
  },
  {
    id: 36,
    englishName: "Han Xin",
    chineseName: "韩信",
    imageLink: "/commons/images/a/af/Han_Xin_Hero_Icon.png",
    occupation: "Jungling",
    altOccupation: '',
    counter:[71,13,74],
  },
  {
    id: 37,
    englishName: "Heino",
    chineseName: "海诺",
    imageLink: "/commons/images/4/47/Heino_Hero_Icon.jpg",
    occupation: "Mid Lane",
    altOccupation: 'Clash Lane',
    counter:[92,1],//鱼，阿古朵
    beCountered:[5,68]//阿离
  },
  {
    id: 38,
    englishName: "Hou Yi",
    chineseName: "后羿",
    imageLink: "/commons/images/4/49/Hou_Yi_Hero_Icon.png",
    occupation: "Farm Lane",
    altOccupation: '',
    counter:[],
    combo:[65]

  },
  {
    id: 39,
    englishName: "Huang Zhong",
    chineseName: "黄忠",
    imageLink: "/commons/images/0/0a/Huang_Zhong_Hero_Icon.png",
    occupation: "Farm Lane",
    altOccupation: '',
    counter:[42,33],
    beCountered:[35,60]
  },
  {
    id: 40,
    englishName: "Jing",
    chineseName: "镜",
    imageLink: "/commons/images/6/6f/Jing_HOK_Hero_Icon.jpg",
    occupation: "Jungling",
    altOccupation: '',
    counter:[3],
    beCountered:[6],
    combo:[5]
  },
  {
    id: 41,
    englishName: "Kaizer",
    chineseName: "凯",
    imageLink: "/commons/images/a/aa/Kai_Hero_Icon.png",
    occupation: "Jungling",
    altOccupation: 'Clash Lane',
    counter:[52],
    beCountered:[69,37]
  },
  {
    id: 42,
    englishName: "Kongming",
    chineseName: "诸葛亮",
    imageLink: "/commons/images/4/4e/Zhuge_Liang_Hero_Icon.png",
    occupation: "Mid Lane",
    altOccupation: '',
    counter:[52,36,21],
    beCountered:[39,25,12],//黄忠，扁鹊，蔡文姬
    combo:[65]//明世隐
  },
  {
    id: 43,
    englishName: "Kui",
    chineseName: "钟馗",
    imageLink: "/commons/images/b/b4/Zhong_Kui_Hero_Icon.png",
    occupation: "Roaming",
    altOccupation: '',
    beCountered:[92,20],
    counter:[65,39]
  },
  {
    id: 44,
    englishName: "Lady Sun",
    chineseName: "孙尚香",
    imageLink: "/commons/images/4/40/Sun_Shangxiang_Hero_Icon.png",
    occupation: "Farm Lane",
    altOccupation: '',
    counter:[72,77,76],
    beCountered:[],
    combo:[65,27]
  },
  {
    id: 45,
    englishName: "Lady Zhen",
    chineseName: "甄姬",
    imageLink: "/commons/images/c/c1/Zhen_Ji_2019.jpg",
    occupation: "Mid Lane",
    altOccupation: '',
    counter:[7],
    beCountered:[64,47]
  },
  {
    id: 46,
    englishName: "Lam",
    chineseName: "澜",
    imageLink: "/commons/images/c/c2/Lan_Hero_Icon.jpg",
    occupation: "Jungling",
    altOccupation: '',
    counter:[1,37,94],
    beCountered:[31]
  },
  {
    id: 47,
    englishName: "Li Bai",
    chineseName: "李白",
    imageLink: "/commons/images/9/9e/Li_Bai_Hero_Icon.png",
    occupation: "Jungling",
    altOccupation: '',
    counter:[45,94,69],
    beCountered:[6]
  },
  {
    id: 48,
    englishName: "Li Xin",
    chineseName: "李信",
    imageLink: "/commons/images/4/4d/Li_Xin_Hero_Icon.png",
    occupation: "Clash Lane",
    altOccupation: '',
    counter:[55,91],//吕布，甄姬
    beCountered:[85,31] //杨戬，干将
  },
  {
    id:49,
    englishName: "Lian Po",
    chineseName: "廉颇",
    imageLink: "/commons/images/2/20/Lian_Po_Hero_Icon.png",
    occupation: "Clash Lane",
    altOccupation:'Roaming',
    counter:[79,18],
    beCountered:[92,37]
  },
  {
    id: 50,
    englishName: "Liang",
    chineseName: "张良",
    imageLink: "/commons/images/b/bd/Zhang_Liang_2019.jpg",
    occupation: "Mid Lane",
    altOccupation: "Roaming",
    beCountered:[51], //刘邦
    combo:[74],//王昭君
    counter:[5,47]//克阿离，李白
  },
  {
    id: 51,
    englishName: "Liu Bang",
    chineseName: "刘邦",
    imageLink: "/commons/images/6/67/Liu_Bang_Hero_Icon.png",
    occupation: "Clash Lane",
    altOccupation: "Roaming",
    combo:[70],//哪吒
    beCountered: [30,63,58], //被老夫子，梦奇，露娜克
    counter:[50,32]//克张良
  },
  {
    id: 52,
    englishName: "Liu Bei",
    chineseName: "刘备",
    imageLink: "/commons/images/4/42/Liu_Bei_Hero_Icon.png",
    occupation: "Jungling",
    altOccupation: "",
    counter:[81,77,19],
    beCountered:[42,41],
    combo:[35]
  },
  {
    id: 53,
    englishName: "Liu Shan",
    chineseName: "刘禅",
    imageLink: "/commons/images/7/76/Liu_Shan_Hero_Icon.png",
    occupation: "Roaming",
    altOccupation: "",
    counter:[30,39],
    beCountered:[92,20,70],
    combo:[64,1]
  },
  {
    id: 54,
    englishName: "Loong",
    chineseName: "敖隐",
    imageLink: "/commons/images/d/d0/Aoyin_Hero_Icon.jpg",
    occupation: "Farm Lane",
    altOccupation: "",
    counter:[75,60,3],
    beCountered:[65,64]
  },
  {
    id: 55,
    englishName: "Lu Bu",
    chineseName: "吕布",
    imageLink: "/commons/images/2/2f/Lu_Bu_2022_Hero_Icon.png",
    occupation: "Clash Lane",
    altOccupation: "",
    combo:[23],//朵莉亚
    counter:[63,26],//梦奇，夏侯	
    beCountered:[3,48,37]//亚连，李信
  },
  {
    id: 56,
    englishName: "Luara",
    chineseName: "劳拉",
    imageLink: "/commons/images/thumb/8/82/Luara_Hero_Icon.jpg/180px-Luara_Hero_Icon.jpg",
    occupation: "Farm Lane",
    altOccupation: ""
  },
  {
    id: 57,
    englishName: "Luban No.7",
    chineseName: "鲁班七号",
    imageLink: "/commons/images/3/3a/Luban_No.7_Hero_Icon.png",
    occupation: "Farm Lane",
    altOccupation: "",
    counter:[7],
    beCountered:[4,52]
  },
  {
    id: 58,
    englishName: "Luna",
    chineseName: "露娜",
    imageLink: "/commons/images/7/74/Luna_2019.jpg",
    occupation: "Jungling",
    altOccupation: "Clash Lane",
    counter:[35,92],
    beCountered:[18,6]
  },
  {
    id: 59,
    englishName: "Mai Shiranui",
    chineseName: "不知火舞",
    imageLink: "/commons/images/1/13/Mai_Shiranui_Hero_Icon.png",
    occupation: "Mid Lane",
    altOccupation: "",
    counter:[71,94],
    beCountered:[6,18]

  },
  {
    id: 60,
    englishName: "Marco Polo",
    chineseName: "马可波罗",
    imageLink: "/commons/images/5/58/Marco_Polo_Hero_Icon.png",
    occupation: "Farm Lane",
    altOccupation: "",
    counter:[39,3],
    beCountered:[87,54],
    combo:[87]
  },
  {
    id: 61,
    englishName: "Mayene",
    chineseName: "姬小满",
    imageLink: "/commons/images/d/d2/Ji_Xiaoman_Hero_Icon.png",
    occupation: "Clash Lane",
    altOccupation: "",
    counter:[72,34,71],
    beCountered:[6,79,83,10]
  },
  {
    id: 62,
    englishName: "Meng Ya",
    chineseName: "蒙犽",
    imageLink: "/commons/images/6/67/Meng_Ya_Hero_Icon.png",
    occupation: "Farm Lane",
    altOccupation: "",
    counter:[1,90],
    beCountered:[73,34,60],
    combo:[8]
  },
  {
    id: 63,
    englishName: "Menki",
    chineseName: "梦奇",
    imageLink: "/commons/images/8/8a/Meng_Qi_Hero_Icon.png",
    occupation: "Clash Lane",
    altOccupation: "",
    counter:[68,32,77],//克宫本
    beCountered:[55,1]
  },
  {
    id: 64,
    englishName: "Milady",
    chineseName: "米莱狄",
    imageLink: "/commons/images/0/03/Milady_Hero_Icon.png",
    occupation: "Mid Lane",
    altOccupation: "",
    counter:[91,50],
    beCountered:[75,32,94],
    combo:[1]
  },
  {
    id: 65,
    englishName: "Ming",
    chineseName: "明世隐",
    imageLink: "/commons/images/c/c4/Ming_Shiyin_Hero_Icon.png",
    occupation: "Roaming",
    altOccupation: "",
    combo:[42,44,38,33,28],//诸葛亮，孙尚香
    counter:[92,77,28],
    beCountered:[35,43]

  },
  {
    id: 66,
    englishName: "Mozi",
    chineseName: "墨子",
    imageLink: "/commons/images/5/5f/Mozi_Hero_Icon.png",
    occupation: "Mid Lane",
    altOccupation: "Roaming",
    counter:[30,81,94],
    beCountered:[1,9,82],
    combo:[77]
  },
  {
    id: 67,
    englishName: "Mulan",
    chineseName: "花木兰",
    imageLink: "/commons/images/d/d4/Hua_Mulan_Hero_Icon.png",
    occupation: "Clash Lane",
    altOccupation: "",
    counter:[30,74,94],
    beCountered:[24,50]
  },
  {
    id: 68,
    englishName: "Musashi",
    chineseName: "宫本武藏",
    imageLink: "/commons/images/6/6c/Miyamoto_Musashi_Hero_Icon.png",
    occupation: "Jungling",
    altOccupation: "Clash Lane",
    counter:[7,9,12,71,37], //猪八戒,大司命,蔡文姬，女娲
    beCountered:[63,91,21], //梦奇,周瑜
    combo:[17,23]//大桥
  },
  {
    id: 69,
    englishName: "Nakoruru",
    chineseName: "娜可露露",
    imageLink: "/commons/images/a/ab/Nakoruru_Hero_Icon.png",
    occupation: "Jungling",
    altOccupation: "",
    counter:[52,41,7],
    beCountered:[81,47,16]
  },
  {
    id: 70,
    englishName: "Nezha",
    chineseName: "哪吒",
    imageLink: "/commons/images/d/d7/Nezha_Hero_Icon.png",
    occupation: "Jungling",
    altOccupation: "Clash Lane",
    combo:[51],//刘邦
    beCountered:[42],//被扁鹊克
    counter:[38]
  },
  {
    id: 71,
    englishName: "Nuwa",
    chineseName: "女娲",
    imageLink: "/commons/images/0/03/Nuwa_Hero_Icon.png",
    occupation: "Mid Lane",
    altOccupation: "",
    counter:[76,39,47,49],
    beCountered:[5,59]
  },
  {
    id: 72,
    englishName: "Pei",
    chineseName: "裴擒虎",
    imageLink: "/commons/images/1/16/Pei_Qin_Hu_Hero_Icon.png",
    occupation: "Jungling",
    altOccupation: "",
    counter:[70,71],
    beCountered:[61,38,93]
  },
  {
    id: 73,
    englishName: "Prince of Lanling",
    chineseName: "兰陵王",
    imageLink: "/commons/images/c/c6/Lan_Ling_Wan_Hero_Icon.png",
    occupation: "Jungling",
    altOccupation: "",
    counter:[33,71,31],
    beCountered:[76,35]
  },
  {
    id: 74,
    englishName: "Princess Frost",
    chineseName: "王昭君",
    imageLink: "/commons/images/1/1f/Wang_Zhaojun_Hero_Icon.png",
    occupation: "Mid Lane",
    altOccupation: "",
    combo:[50], //张良
    counter:[25,65],//扁鹊
    beCountered:[36,67,92,78]//韩信,木兰，鱼
  },
  {
    id: 75,
    englishName: "Shangguan",
    chineseName: "上官婉儿",
    imageLink: "/commons/images/0/0a/Shangguan_Wan%27er_Hero_Icon.png",
    occupation: "Mid Lane",
    altOccupation: "",
    counter:[94,1,64],
    beCountered:[54,5]//熬隐
  },
  {
    id: 76,
    englishName: "Shouyue",
    chineseName: "百里守约",
    imageLink: "/commons/images/9/9c/BaiLi_ShouYue_Hero_Icon.png",
    occupation: "Farm Lane",
    altOccupation: "",
    counter:[35,73],
    beCountered:[64,25],
    combo:[66]

  },
  {
    id: 77,
    englishName: "Sima Yi",
    chineseName: "司马懿",
    imageLink: "/commons/images/d/d9/Sima_Yi_Hero_Icon.png",
    occupation: "Jungling",
    altOccupation: "",
    combo:[35,90],
    counter:[35],
    beCountered:[90]

  },
  {
    id: 78,
    englishName: "Sun Bin",
    chineseName: "孙膑",
    imageLink: "/commons/images/d/d9/Sun_Bin_Hero_Icon.png",
    occupation: "Roaming",
    altOccupation: "",
    counter:[74,92,3],
    beCountered:[30],
    combo:[25,26,9,7]//扁鹊，夏侯,猪八戒
  },
  {
    id: 79,
    englishName: "Sun Ce",
    chineseName: "孙策",
    imageLink: "/commons/images/d/d9/Sun_Ce_Hero_Icon.png",
    occupation: "Jungling",
    altOccupation: "Clash Lane",
    counter:[65],
    beCountered:[92,7]//庄周，猪八戒
  },
  {
    id: 80,
    englishName: "Ukyo Tachibana",
    chineseName: "橘右京",
    imageLink: "/commons/images/b/b3/Ukyo_Tachibana_Hero_Icon.png",
    occupation: "Jungling",
    altOccupation: "Clash Lane",
    counter:[72,63],
    beCountered:[6,61]
  },
  {
    id: 81,
    englishName: "Wukong",
    chineseName: "孙悟空",
    imageLink: "/commons/images/6/6f/Sun_Wukong_Hero_Icon.png",
    occupation: "Jungling",
    altOccupation: "",
    counter:[69,5],
    beCountered:[53,16,82]
  },
  {
    id: 82,
    englishName: "Wuyan",
    chineseName: "钟无艳",
    imageLink: "/commons/images/e/e2/Zhong_Wu_Yan_Hero_Icon.png",
    occupation: "Jungling",
    altOccupation: "Clash Lane",
    counter:[59],
    beCountered:[70,55,37]
  },
  {
    id: 83,
    englishName: "Xiang Yu",
    chineseName: "项羽",
    imageLink: "/commons/images/a/ac/Xiang_Yu_Hero_Icon.png",
    occupation: "Clash Lane",
    altOccupation: "",
    combo:[39],//黄忠
    counter:[5,59,19],//克阿离，火舞，达摩
    beCountered:[9,37,7]//大司命，海诺，猪八戒
  },
  {
    id: 84,
    englishName: "Xiao Qiao",
    chineseName: "小乔",
    imageLink: "/commons/images/f/f9/Xiao_Qiao_Hero_Icon.png",
    occupation: "Mid Lane",
    altOccupation: "",
    counter:[5],
    beCountered:[39,7],
    combo:[35]
  },
  {
    id: 85,
    englishName: "Yang Jian",
    chineseName: "杨戬",
    imageLink: "/commons/images/8/86/Yang_Jian_Hero_Icon.png",
    occupation: "Jungling",
    altOccupation: "Clash Lane",
    counter:[66],
    beCountered:[7,21,3]
  },
  {
    id: 86,
    englishName: "Yao",
    chineseName: "曜",
    imageLink: "/commons/images/4/4d/Yao_Male_Hero_Icon.png",
    occupation: "Clash Lane",
    altOccupation: "Jungling",
    counter:[1,3,4],
    beCountered:[6,18]
  },
  {
    id: 87,
    englishName: "Yaria",
    chineseName: "瑶",
    imageLink: "/commons/images/d/d3/Yao_Hero_Icon.png",
    occupation: "Roaming",
    altOccupation: "",
    counter:[35,60,70],
    combo:[60,5,40],
    beCountered:[33]
  },
  {
    id: 88,
    englishName: "Yuhuan",
    chineseName: "杨玉环",
    imageLink: "/commons/images/7/76/Yang_Yuhuan_Hero_Icon.png",
    occupation: "Mid Lane",
    altOccupation: "Jungling",
    combo:[23],
    beCountered:[30,57,12],
    counter:[31,15,49]//干将
  },
  {
    id: 89,
    englishName: "Fang",
    chineseName: "李元芳",
    imageLink: "/commons/images/c/cb/Li_Yuanfang_Hero_Icon.png",
    occupation: "Farm Lane",
    altOccupation: "",
    counter:[73,35,11],
    beCountered:[68]
  },
  {
    id: 90,
    englishName: "Zhang Fei",
    chineseName: "张飞",
    imageLink: "/commons/images/9/9e/Zhang_Fei_Hero_Icon.png",
    occupation: "Roaming",
    altOccupation: "",
    counter:[64,77],
    beCountered:[62,20,25]
  },

  {
    id: 91,
    englishName: "Zhou Yu",
    chineseName: "周瑜",
    imageLink: "/commons/images/4/4a/Zhou_Yu_Hero_Icon.png",
    occupation: "Mid Lane",
    altOccupation: "",
    combo:[9],//大司命,
    counter:[68,7],
    beCountered:[2]
  },
  {
    id: 92,
    englishName: "Zhuang Zhou",
    chineseName: "庄周",
    imageLink: "/commons/images/3/31/Zhuang_Zhou_Hero_Icon.png",
    occupation: "Roaming",
    altOccupation: "Clash Lane",
    counter:[43,79,35],//克钟馗，孙策，鬼,
    beCountered:[37,65]//海诺，小明
  },
  {
    id: 93,
    englishName: "Zilong",
    chineseName: "赵云",
    imageLink: "/commons/images/9/97/Zhao_Yun_Hero_Icon.png",
    occupation: "Jungling",
    altOccupation: "Clash Lane",
    counter:[72],
    beCountered:[93,46,35]
  },
  {
    id: 94,
    englishName: "Ziya",
    chineseName: "姜子牙",
    imageLink: "/commons/images/3/33/Jiang_Ziya_Hero_Icon_2022.jpg",
    occupation: "Mid Lane",
    altOccupation: "Roaming",
    combo:[],
    counter:[64,1],
    beCountered:[75,59]
  },
  {
    id: 95,
    englishName: "Ying",
    chineseName: "云樱",
    imageLink: "/commons/images/3/33/Jiang_Ziya_Hero_Icon_2022.jpg",
    occupation: "Jungling",
    altOccupation: "Clash Lane",
    combo:[],
    counter:[66,30],
    beCountered:[92,41]
  }
];
export default HeroList;