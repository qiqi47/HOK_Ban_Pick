import re
import requests
import os
import json
import time
from urllib.parse import unquote
from pathlib import Path

# Extract hero data from the provided list

hero_list = [
    {
        "id": 1,
        "englishName": "Agudo",
        "chineseName": "阿古朵",
        "imageLink": "https://liquipedia.net/commons/images/f/f8/Agudo_Hero_Icon.jpg",
        "occupation": "Jungling",
        "altOccupation": ''
    },
    {
        "id": 2,
        "englishName": "Alessio",
        "chineseName": "莱西奥",
        "imageLink": "https://liquipedia.net/commons/images/6/63/Alessio_Hero_Icon.jpg",
        "occupation": "Farm Lane",
        "altOccupation": ''
    },
    {
        "id": 3,
        "englishName": "Allain",
        "chineseName": "亚连",
        "imageLink": "https://liquipedia.net/commons/images/5/5f/Allain_Hero_Icon.jpg",
        "occupation": "Clash Lane",
        "altOccupation": ''
    },
    {
        "id": 4,
        "englishName": "Angela",
        "chineseName": "安琪拉",
        "imageLink": "https://liquipedia.net/commons/images/5/5a/Angela_Hero_Icon.png",
        "occupation": "Mid Lane",
        "altOccupation": ''
    },
    {
        "id": 5,
        "englishName": "Arli",
        "chineseName": "公孙离",
        "imageLink": "https://liquipedia.net/commons/images/5/5c/Gong_Sun_Li_Hero_Icon.png",
        "occupation": "Farm Lane",
        "altOccupation": ''
    },
    {
        "id": 6,
        "englishName": "Arthur",
        "chineseName": "亚瑟",
        "imageLink": "https://liquipedia.net/commons/images/b/b5/Arthur_HOK_Hero_Icon.png",
        "occupation": "Clash Lane",
        "altOccupation": 'Jungling'
    },
    {
        "id": 7,
        "englishName": "Ata",
        "chineseName": "猪八戒",
        "imageLink": "https://liquipedia.net/commons/images/3/35/Ata_Hero_Icon.jpg",
        "occupation": "Clash Lane",
        "altOccupation": ''
    },
    {
        "id": 8,
        "englishName": "Athena",
        "chineseName": "雅典娜",
        "imageLink": "https://liquipedia.net/commons/images/4/45/Athena_Hero_Icon.png",
        "occupation": "Jungling",
        "altOccupation": ''
    },
    {
        "id": 9,
        "englishName": "Augran",
        "chineseName": "大司命",
        "imageLink": "https://liquipedia.net/commons/images/5/5f/Da_Siming_Hero_Icon.jpg",
        "occupation": "Jungling",
        "altOccupation": 'Clash Lane'
    },
    {
        "id": 10,
        "englishName": "Biron",
        "chineseName": "狂铁",
        "imageLink": "https://liquipedia.net/commons/images/1/12/Kuang_Tie_Hero_Icon.png",
        "occupation": "Class Lane",
        "altOccupation": ''
    },
    {
        "id": 11,
        "englishName": "Butterfly",
        "chineseName": "刀锋宝贝",
        "imageLink": "https://liquipedia.net/commons/images/3/3f/Butterfly_Hero_Icon_2019.png",
        "occupation": "Jungling",
        "altOccupation": ''
    },
    {
        "id": 12,
        "englishName": "Cai Yan",
        "chineseName": "蔡文姬",
        "imageLink": "https://liquipedia.net/commons/images/f/f8/Cai_Wenji_Hero_Icon.png",
        "occupation": "Roaming",
        "altOccupation": ''
    },
    {
        "id": 13,
        "englishName": "Cao Cao",
        "chineseName": "曹操",
        "imageLink": "https://liquipedia.net/commons/images/0/00/Cao_Cao_Hero_Icon.png",
        "occupation": "Jungling",
        "altOccupation": ''
    },
    {
        "id": 14,
        "englishName": "Charlotte",
        "chineseName": "夏洛特",
        "imageLink": "https://liquipedia.net/commons/images/b/b2/Charlotte_Hero_Icon.jpg",
        "occupation": "Clash Lane",
        "altOccupation": ''
    },
    {
        "id": 15,
        "englishName": "Cirrus",
        "chineseName": "云中君",
        "imageLink": "https://liquipedia.net/commons/images/1/1f/Yun_Zhongjun_Hero_Icon.jpg",
        "occupation": "Jungling",
        "altOccupation": ''
    },
    {
        "id": 16,
        "englishName": "Consort Yu",
        "chineseName": "虞姬",
        "imageLink": "https://liquipedia.net/commons/images/1/14/Yu_Ji_Hero_Icon.png",
        "occupation": "Farm Lane",
        "altOccupation": ''
    },
    {
        "id": 17,
        "englishName": "Da Qiao",
        "chineseName": "大乔",
        "imageLink": "https://liquipedia.net/commons/images/3/30/Da_Qiao_Hero_Icon.png",
        "occupation": "Roaming",
        "altOccupation": 'Mid Lane'
    },
    {
        "id": 18,
        "englishName": "Daji",
        "chineseName": "妲己",
        "imageLink": "https://liquipedia.net/commons/images/3/39/Daji_Hero_Icon.png",
        "occupation": "Mid Lane",
        "altOccupation": ''
    },
    {
        "id": 19,
        "englishName": "Dharma",
        "chineseName": "达摩",
        "imageLink": "https://liquipedia.net/commons/images/c/c8/Dharma_Hero_Icon.png",
        "occupation": "Jungling",
        "altOccupation": 'Clash Lane'
    },
    {
        "id": 20,
        "englishName": "Di Renjie",
        "chineseName": "狄仁杰",
        "imageLink": "https://liquipedia.net/commons/images/9/94/Di_Renjie_Hero_Icon.png",
        "occupation": "Farm Lane",
        "altOccupation": ''
    },
    {
        "id": 21,
        "englishName": "Dian Wei",
        "chineseName": "典韦",
        "imageLink": "https://liquipedia.net/commons/images/e/ec/Dian_Wei_Hero_Icon.png",
        "occupation": "Clash Lane",
        "altOccupation": 'Jungling'
    },
    {
        "id": 22,
        "englishName": "Diaochan",
        "chineseName": "貂蝉",
        "imageLink": "https://liquipedia.net/commons/images/a/a9/KOG_Diaochan_Hero_Icon.png",
        "occupation": "Mid Lane",
        "altOccupation": ''
    },
    {
        "id": 23,
        "englishName": "Dolia",
        "chineseName": "朵莉亚",
        "imageLink": "https://liquipedia.net/commons/images/4/43/Doria_Hero_Icon.jpg",
        "occupation": "Roaming",
        "altOccupation": ''
    },
    {
        "id": 24,
        "englishName": "Donghuang",
        "chineseName": "东皇太一",
        "imageLink": "https://liquipedia.net/commons/images/7/73/East_Emperor_Taiyi_Hero_Icon.png",
        "occupation": "Roaming",
        "altOccupation": ''
    },
    {
        "id": 25,
        "englishName": "Dr. Bian",
        "chineseName": "扁鹊",
        "imageLink": "https://liquipedia.net/commons/images/2/26/Bian_Que_Hero_Icon.png",
        "occupation": "Mid Lane",
        "altOccupation": ''
    },
    {
        "id": 26,
        "englishName": "Dun",
        "chineseName": "夏侯惇",
        "imageLink": "https://liquipedia.net/commons/images/5/56/Xiahou_Dun_Hero_Icon.png",
        "occupation": "Clash Lane",
        "altOccupation": 'Roaming'
    },
    {
        "id": 27,
        "englishName": "Dyadia",
        "chineseName": "少司缘",
        "imageLink": "https://liquipedia.net/commons/images/b/be/Shao_Siyuan_Hero_Icon.jpg",
        "occupation": "Roaming",
        "altOccupation": ''
    },
    {
        "id": 28,
        "englishName": "Erin",
        "chineseName": "艾琳",
        "imageLink": "https://liquipedia.net/commons/images/8/87/Ailin_Hero_Icon.png",
        "occupation": "Farm Lane",
        "altOccupation": ''
    },
    {
        "id": 29,
        "englishName": "Fang",
        "chineseName": "李元芳",
        "imageLink": "https://liquipedia.net/commons/images/c/cb/Li_Yuanfang_Hero_Icon.png",
        "occupation": "Farm Lane",
        "altOccupation": 'Jungling'
    },
    {
        "id": 30,
        "englishName": "Fuzi",
        "chineseName": "老夫子",
        "imageLink": "https://liquipedia.net/commons/images/7/7b/Lao_Fu_Zi_Hero_Icon.png",
        "occupation": "Clash Lane",
        "altOccupation": ''
    },
    {
        "id": 31,
        "englishName": "Gan & Mo",
        "chineseName": "干将莫邪",
        "imageLink": "https://liquipedia.net/commons/images/6/6d/Ganjiang_Moye_Hero_Icon.png",
        "occupation": "Mid Lane",
        "altOccupation": ''
    },
    {
        "id": 32,
        "englishName": "Gao",
        "chineseName": "高渐离",
        "imageLink": "https://liquipedia.net/commons/images/d/db/Gao_Jianli_Hero_Icon.png",
        "occupation": "Mid Lane",
        "altOccupation": ''
    },
    {
        "id": 33,
        "englishName": "Garo",
        "chineseName": "伽罗",
        "imageLink": "https://liquipedia.net/commons/images/b/b8/Jia_Luo_Hero_Icon.png",
        "occupation": "Farm Lane",
        "altOccupation": ''
    },
    {
        "id": 34,
        "englishName": "Guan Yu",
        "chineseName": "关羽",
        "imageLink": "https://liquipedia.net/commons/images/2/21/Guan_Yu_Hero_Icon.png",
        "occupation": "Clash Lane",
        "altOccupation": ''
    },
    {
        "id": 35,
        "englishName": "Guiguzi",
        "chineseName": "鬼谷子",
        "imageLink": "https://liquipedia.net/commons/images/b/bd/Gui_Guzi_Hero_Icon.png",
        "occupation": "Roaming",
        "altOccupation": ''
    },
    {
        "id": 36,
        "englishName": "Han Xin",
        "chineseName": "韩信",
        "imageLink": "https://liquipedia.net/commons/images/a/af/Han_Xin_Hero_Icon.png",
        "occupation": "Jungling",
        "altOccupation": ''
    },
    {
        "id": 37,
        "englishName": "Heino",
        "chineseName": "海诺",
        "imageLink": "https://liquipedia.net/commons/images/4/47/Heino_Hero_Icon.jpg",
        "occupation": "Mid Lane",
        "altOccupation": 'Clash Lane'
    },
    {
        "id": 38,
        "englishName": "Hou Yi",
        "chineseName": "后羿",
        "imageLink": "https://liquipedia.net/commons/images/4/49/Hou_Yi_Hero_Icon.png",
        "occupation": "Farm Lane",
        "altOccupation": ''
    },
    {
        "id": 39,
        "englishName": "Huang Zhong",
        "chineseName": "黄忠",
        "imageLink": "https://liquipedia.net/commons/images/0/0a/Huang_Zhong_Hero_Icon.png",
        "occupation": "Farm Lane",
        "altOccupation": ''
    },
    {
        "id": 40,
        "englishName": "Jing",
        "chineseName": "镜",
        "imageLink": "https://liquipedia.net/commons/images/6/6f/Jing_HOK_Hero_Icon.jpg",
        "occupation": "Jungling",
        "altOccupation": ''
    },
    {
        "id": 41,
        "englishName": "Kaizer",
        "chineseName": "凯",
        "imageLink": "https://liquipedia.net/commons/images/a/aa/Kai_Hero_Icon.png",
        "occupation": "Jungling",
        "altOccupation": 'Clash Lane'
    },
    {
        "id": 42,
        "englishName": "Kongming",
        "chineseName": "诸葛亮",
        "imageLink": "https://liquipedia.net/commons/images/4/4e/Zhuge_Liang_Hero_Icon.png",
        "occupation": "Mid Lane",
        "altOccupation": ''
    },
    {
        "id": 43,
        "englishName": "Kui",
        "chineseName": "钟馗",
        "imageLink": "https://liquipedia.net/commons/images/b/b4/Zhong_Kui_Hero_Icon.png",
        "occupation": "Roaming",
        "altOccupation": ''
    },
    {
        "id": 44,
        "englishName": "Lady Sun",
        "chineseName": "孙尚香",
        "imageLink": "https://liquipedia.net/commons/images/4/40/Sun_Shangxiang_Hero_Icon.png",
        "occupation": "Farm Lane",
        "altOccupation": ''
    },
    {
        "id": 45,
        "englishName": "Lady Zhen",
        "chineseName": "甄姬",
        "imageLink": "https://liquipedia.net/commons/images/c/c1/Zhen_Ji_2019.jpg",
        "occupation": "Mid Lane",
        "altOccupation": ''
    },
    {
        "id": 46,
        "englishName": "Lam",
        "chineseName": "澜",
        "imageLink": "https://liquipedia.net/commons/images/c/c2/Lan_Hero_Icon.jpg",
        "occupation": "Jungling",
        "altOccupation": ''
    },
    {
        "id": 47,
        "englishName": "Li Bai",
        "chineseName": "李白",
        "imageLink": "https://liquipedia.net/commons/images/9/9e/Li_Bai_Hero_Icon.png",
        "occupation": "Jungling",
        "altOccupation": ''
    },
    {
        "id": 48,
        "englishName": "Li Xin",
        "chineseName": "李信",
        "imageLink": "https://liquipedia.net/commons/images/4/4d/Li_Xin_Hero_Icon.png",
        "occupation": "Clash Lane",
        "altOccupation": ''
    },
    {
        "id": 49,
        "englishName": "Lian Po",
        "chineseName": "廉颇",
        "imageLink": "https://liquipedia.net/commons/images/2/20/Lian_Po_Hero_Icon.png",
        "occupation": "Clash Lane",
        "altOccupation": 'Roaming'
    },
    {
        "id": 50,
        "englishName": "Liang",
        "chineseName": "张良",
        "imageLink": "https://liquipedia.net/commons/images/b/bd/Zhang_Liang_2019.jpg",
        "occupation": "Mid Lane",
        "altOccupation": "Roaming"
    },
    {
        "id": 51,
        "englishName": "Liu Bang",
        "chineseName": "刘邦",
        "imageLink": "https://liquipedia.net/commons/images/6/67/Liu_Bang_Hero_Icon.png",
        "occupation": "Clash Lane",
        "altOccupation": "Roaming"
    },
    {
        "id": 52,
        "englishName": "Liu Bei",
        "chineseName": "刘备",
        "imageLink": "https://liquipedia.net/commons/images/4/42/Liu_Bei_Hero_Icon.png",
        "occupation": "Jungling",
        "altOccupation": ""
    },
    {
        "id": 53,
        "englishName": "Liu Shan",
        "chineseName": "刘禅",
        "imageLink": "https://liquipedia.net/commons/images/7/76/Liu_Shan_Hero_Icon.png",
        "occupation": "Roaming",
        "altOccupation": ""
    },
    {
        "id": 54,
        "englishName": "Loong",
        "chineseName": "敖隐",
        "imageLink": "https://liquipedia.net/commons/images/d/d0/Aoyin_Hero_Icon.jpg",
        "occupation": "Farm Lane",
        "altOccupation": ""
    },
    {
        "id": 55,
        "englishName": "Lu Bu",
        "chineseName": "吕布",
        "imageLink": "https://liquipedia.net/commons/images/2/2f/Lu_Bu_2022_Hero_Icon.png",
        "occupation": "Clash Lane",
        "altOccupation": ""
    },
    {
        "id": 56,
        "englishName": "Luara",
        "chineseName": "劳拉",
        "imageLink": "https://liquipedia.net/commons/images/thumb/8/82/Luara_Hero_Icon.jpg/180px-Luara_Hero_Icon.jpg",
        "occupation": "Farm Lane",
        "altOccupation": ""
    },
    {
        "id": 57,
        "englishName": "Luban No.7",
        "chineseName": "鲁班七号",
        "imageLink": "https://liquipedia.net/commons/images/3/3a/Luban_No.7_Hero_Icon.png",
        "occupation": "Farm Lane",
        "altOccupation": ""
    },
    {
        "id": 58,
        "englishName": "Luna",
        "chineseName": "露娜",
        "imageLink": "https://liquipedia.net/commons/images/7/74/Luna_2019.jpg",
        "occupation": "Jungling Lane",
        "altOccupation": ""
    },
    {
        "id": 59,
        "englishName": "Mai Shiranui",
        "chineseName": "不知火舞",
        "imageLink": "https://liquipedia.net/commons/images/1/13/Mai_Shiranui_Hero_Icon.png",
        "occupation": "Mid Lane",
        "altOccupation": ""
    },
    {
        "id": 60,
        "englishName": "Marco Polo",
        "chineseName": "马可波罗",
        "imageLink": "https://liquipedia.net/commons/images/5/58/Marco_Polo_Hero_Icon.png",
        "occupation": "Farm Lane",
        "altOccupation": ""
    },
    {
        "id": 61,
        "englishName": "Mayene",
        "chineseName": "姬小满",
        "imageLink": "https://liquipedia.net/commons/images/d/d2/Ji_Xiaoman_Hero_Icon.png",
        "occupation": "Clash Lane",
        "altOccupation": ""
    },
    {
        "id": 62,
        "englishName": "Meng Ya",
        "chineseName": "蒙犽",
        "imageLink": "https://liquipedia.net/commons/images/6/67/Meng_Ya_Hero_Icon.png",
        "occupation": "Farm Lane",
        "altOccupation": ""
    },
    {
        "id": 63,
        "englishName": "Menki",
        "chineseName": "蒙恬",
        "imageLink": "https://liquipedia.net/commons/images/8/8a/Meng_Qi_Hero_Icon.png",
        "occupation": "Clash Lane",
        "altOccupation": ""
    },
    {
        "id": 64,
        "englishName": "Milady",
        "chineseName": "米莱狄",
        "imageLink": "https://liquipedia.net/commons/images/0/03/Milady_Hero_Icon.png",
        "occupation": "Mid Lane",
        "altOccupation": ""
    },
    {
        "id": 65,
        "englishName": "Ming",
        "chineseName": "明世隐",
        "imageLink": "https://liquipedia.net/commons/images/c/c4/Ming_Shiyin_Hero_Icon.png",
        "occupation": "Roaming",
        "altOccupation": ""
    },
    {
        "id": 66,
        "englishName": "Mozi",
        "chineseName": "墨子",
        "imageLink": "https://liquipedia.net/commons/images/5/5f/Mozi_Hero_Icon.png",
        "occupation": "Mid Lane",
        "altOccupation": "Roaming"
    },
    {
        "id": 67,
        "englishName": "Mulan",
        "chineseName": "花木兰",
        "imageLink": "https://liquipedia.net/commons/images/d/d4/Hua_Mulan_Hero_Icon.png",
        "occupation": "Clash Lane",
        "altOccupation": ""
    },
    {
        "id": 68,
        "englishName": "Musashi",
        "chineseName": "宫本武藏",
        "imageLink": "https://liquipedia.net/commons/images/6/6c/Miyamoto_Musashi_Hero_Icon.png",
        "occupation": "Jungling",
        "altOccupation": "Clash Lane"
    },
    {
        "id": 69,
        "englishName": "Nakoruru",
        "chineseName": "娜可露露",
        "imageLink": "https://liquipedia.net/commons/images/a/ab/Nakoruru_Hero_Icon.png",
        "occupation": "Jungling",
        "altOccupation": ""
    },
    {
        "id": 70,
        "englishName": "Nezha",
        "chineseName": "哪吒",
        "imageLink": "https://liquipedia.net/commons/images/d/d7/Nezha_Hero_Icon.png",
        "occupation": "Jungling",
        "altOccupation": "Clash Lane"
    },
    {
        "id": 71,
        "englishName": "Nuwa",
        "chineseName": "女娲",
        "imageLink": "https://liquipedia.net/commons/images/0/03/Nuwa_Hero_Icon.png",
        "occupation": "Mid Lane",
        "altOccupation": ""
    },
    {
        "id": 72,
        "englishName": "Pei",
        "chineseName": "裴擒虎",
        "imageLink": "https://liquipedia.net/commons/images/1/16/Pei_Qin_Hu_Hero_Icon.png",
        "occupation": "Jungling",
        "altOccupation": ""
    },
    {
        "id": 73,
        "englishName": "Prince of Lanling",
        "chineseName": "兰陵王",
        "imageLink": "https://liquipedia.net/commons/images/c/c6/Lan_Ling_Wan_Hero_Icon.png",
        "occupation": "Jungling",
        "altOccupation": ""
    },
    {
        "id": 74,
        "englishName": "Princess Frost",
        "chineseName": "王昭君",
        "imageLink": "https://liquipedia.net/commons/images/1/1f/Wang_Zhaojun_Hero_Icon.png",
        "occupation": "Mid Lane",
        "altOccupation": ""
    },
    {
        "id": 75,
        "englishName": "Shangguan",
        "chineseName": "上官婉儿",
        "imageLink": "https://liquipedia.net/commons/images/0/0a/Shangguan_Wan%27er_Hero_Icon.png",
        "occupation": "Mid Lane",
        "altOccupation": ""
    },
    {
        "id": 76,
        "englishName": "Shouyue",
        "chineseName": "百里守约",
        "imageLink": "https://liquipedia.net/commons/images/9/9c/BaiLi_ShouYue_Hero_Icon.png",
        "occupation": "Farm Lane",
        "altOccupation": ""
    },
    {
        "id": 77,
        "englishName": "Sima Yi",
        "chineseName": "司马懿",
        "imageLink": "https://liquipedia.net/commons/images/d/d9/Sima_Yi_Hero_Icon.png",
        "occupation": "Jungling",
        "altOccupation": ""
    },
    {
        "id": 78,
        "englishName": "Sun Bin",
        "chineseName": "孙膑",
        "imageLink": "https://liquipedia.net/commons/images/d/d9/Sun_Bin_Hero_Icon.png",
        "occupation": "Roaming",
        "altOccupation": ""
    },
    {
        "id": 79,
        "englishName": "Sun Ce",
        "chineseName": "孙策",
        "imageLink": "https://liquipedia.net/commons/images/d/d9/Sun_Ce_Hero_Icon.png",
        "occupation": "Jungling",
        "altOccupation": "Clash Lane"
    },
    {
        "id": 80,
        "englishName": "Ukyo Tachibana",
        "chineseName": "橘右京",
        "imageLink": "https://liquipedia.net/commons/images/b/b3/Ukyo_Tachibana_Hero_Icon.png",
        "occupation": "Jungling",
        "altOccupation": "Clash Lane"
    },
    {
        "id": 81,
        "englishName": "Wukong",
        "chineseName": "孙悟空",
        "imageLink": "https://liquipedia.net/commons/images/6/6f/Sun_Wukong_Hero_Icon.png",
        "occupation": "Jungling",
        "altOccupation": ""
    },
    {
        "id": 82,
        "englishName": "Wuyan",
        "chineseName": "钟无艳",
        "imageLink": "https://liquipedia.net/commons/images/e/e2/Zhong_Wu_Yan_Hero_Icon.png",
        "occupation": "Jungling",
        "altOccupation": "Jungling"
    },
    {
        "id": 83,
        "englishName": "Xiang Yu",
        "chineseName": "项羽",
        "imageLink": "https://liquipedia.net/commons/images/a/ac/Xiang_Yu_Hero_Icon.png",
        "occupation": "Clash Lane",
        "altOccupation": ""
    },
    {
        "id": 84,
        "englishName": "Xiao Qiao",
        "chineseName": "小乔",
        "imageLink": "https://liquipedia.net/commons/images/f/f9/Xiao_Qiao_Hero_Icon.png",
        "occupation": "Mid Lane",
        "altOccupation": ""
    },
    {
        "id": 85,
        "englishName": "Yang Jian",
        "chineseName": "杨戬",
        "imageLink": "https://liquipedia.net/commons/images/8/86/Yang_Jian_Hero_Icon.png",
        "occupation": "Jungling",
        "altOccupation": "Clash Lane"
    },
    {
        "id": 86,
        "englishName": "Yao",
        "chineseName": "曜",
        "imageLink": "https://liquipedia.net/commons/images/4/4d/Yao_Male_Hero_Icon.png",
        "occupation": "Clash Lane",
        "altOccupation": "Jungling"
    },
    {
        "id": 87,
        "englishName": "Yaria",
        "chineseName": "瑶",
        "imageLink": "https://liquipedia.net/commons/images/d/d3/Yao_Hero_Icon.png",
        "occupation": "Roaming",
        "altOccupation": ""
    },
    {
        "id": 88,
        "englishName": "Yuhuan",
        "chineseName": "杨玉环",
        "imageLink": "https://liquipedia.net/commons/images/7/76/Yang_Yuhuan_Hero_Icon.png",
        "occupation": "Mid Lane",
        "altOccupation": "Jungling"
    },
    {
        "id": 89,
        "englishName": "Fang",
        "chineseName": "李元芳",
        "imageLink": "https://liquipedia.net/commons/images/c/cb/Li_Yuanfang_Hero_Icon.png",
        "occupation": "Farm Lane",
        "altOccupation": ""
    },
    {
        "id": 90,
        "englishName": "Zhang Fei",
        "chineseName": "张飞",
        "imageLink": "https://liquipedia.net/commons/images/9/9e/Zhang_Fei_Hero_Icon.png",
        "occupation": "Roaming",
        "altOccupation": ""
    },
    {
        "id": 91,
        "englishName": "Zhen Ji",
        "chineseName": "甄姬",
        "imageLink": "https://liquipedia.net/commons/images/c/c1/Zhen_Ji_Hero_Icon.png",
        "occupation": "Mid Lane",
        "altOccupation": ""
    },
    {
        "id": 92,
        "englishName": "Zhou Yu",
        "chineseName": "周瑜",
        "imageLink": "https://liquipedia.net/commons/images/4/4a/Zhou_Yu_Hero_Icon.png",
        "occupation": "Mid Lane",
        "altOccupation": ""
    },
    {
        "id": 93,
        "englishName": "Zhong Kui",
        "chineseName": "钟馗",
        "imageLink": "https://liquipedia.net/commons/images/b/b4/Zhong_Kui_Hero_Icon.png",
        "occupation": "Roaming",
        "altOccupation": ""
    },
    {
        "id": 94,
        "englishName": "Zhuang Zhou",
        "chineseName": "庄周",
        "imageLink": "https://liquipedia.net/commons/images/3/31/Zhuang_Zhou_Hero_Icon.png",
        "occupation": "Roaming",
        "altOccupation": "Clash Lane"
    },
    {
        "id": 95,
        "englishName": "Zilong",
        "chineseName": "赵云",
        "imageLink": "https://liquipedia.net/commons/images/9/97/Zhao_Yun_Hero_Icon.png",
        "occupation": "Jungling",
        "altOccupation": "Clash Lane"
    },
    {
        "id": 96,
        "englishName": "Ziya",
        "chineseName": "姜子牙",
        "imageLink": "https://liquipedia.net/commons/images/3/33/Jiang_Ziya_Hero_Icon_2022.jpg",
        "occupation": "Mid Lane",
        "altOccupation": "Roaming"
    }
]


def download_image(url, save_path, hero_name):
    """Download an image from URL with error handling"""
    try:
        # Add headers to mimic a browser request
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }

        # Make the request
        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()

        # Save the image
        with open(save_path, 'wb') as f:
            f.write(response.content)
        return True
    except requests.exceptions.RequestException as e:
        print(f"Error downloading {hero_name}: {str(e)}")
        return False
    except Exception as e:
        print(f"Unexpected error for {hero_name}: {str(e)}")
        return False


def main():
    # Set the output directory using Path
    output_dir = Path('/Users/siqi/HOK_Ban_Pick/vite-project/public/heroesImg')

    # Create output directory if it doesn't exist
    output_dir.mkdir(parents=True, exist_ok=True)

    # Track statistics
    total = len(hero_list)
    successful = 0
    failed = []

    print(f"Starting download of {total} hero icons...")
    print(f"Saving to: {output_dir}")

    for i, hero in enumerate(hero_list, 1):
        # Get hero info
        english_name = hero['englishName']
        chinese_name = hero['chineseName']
        image_url = hero['imageLink']

        # Extract file extension from URL
        file_extension = Path(image_url).suffix
        if not file_extension:
            file_extension = '.jpg'  # Default to .jpg if no extension found

        # Create filename from hero names
        file_name = f"{hero['id']}{file_extension}"
        # Replace any forward slashes in names
        save_path = output_dir / file_name

        # Show progress
        print(
            f"[{i}/{total}] Downloading {english_name} ({chinese_name})...", end=' ')

        # Download the image
        if download_image(image_url, save_path, english_name):
            print("Success")
            successful += 1
        else:
            print("Failed")
            failed.append(f"{english_name} ({chinese_name})")

        # Add a small delay between downloads
        time.sleep(0.5)

    # Print summary
    print("\nDownload Summary:")
    print(f"Total heroes: {total}")
    print(f"Successfully downloaded: {successful}")
    print(f"Failed: {len(failed)}")

    if failed:
        print("\nFailed downloads:")
        for hero in failed:
            print(f"- {hero}")


if __name__ == "__main__":
    main()
