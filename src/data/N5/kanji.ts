import type { KanjiItem } from "@/types/kanji";

export const kanji: KanjiItem[] = [
  // Numbers
  { character: "一", meaning: "One", onyomi: "イチ", kunyomi: "ひと（つ）", examples: [{ word: "一つ", reading: "ひとつ", meaning: "one thing" }, { word: "一日", reading: "いちにち", meaning: "one day" }] },
  { character: "二", meaning: "Two", onyomi: "ニ", kunyomi: "ふた（つ）", examples: [{ word: "二つ", reading: "ふたつ", meaning: "two things" }, { word: "二日", reading: "ふつか", meaning: "second day" }] },
  { character: "三", meaning: "Three", onyomi: "サン", kunyomi: "みっ（つ）", examples: [{ word: "三つ", reading: "みっつ", meaning: "three things" }, { word: "三日", reading: "みっか", meaning: "third day" }] },
  { character: "四", meaning: "Four", onyomi: "シ", kunyomi: "よん、よっ（つ）", examples: [{ word: "四つ", reading: "よっつ", meaning: "four things" }, { word: "四日", reading: "よっか", meaning: "fourth day" }] },
  { character: "五", meaning: "Five", onyomi: "ゴ", kunyomi: "いつ（つ）", examples: [{ word: "五つ", reading: "いつつ", meaning: "five things" }, { word: "五日", reading: "いつか", meaning: "fifth day" }] },
  { character: "六", meaning: "Six", onyomi: "ロク", kunyomi: "むっ（つ）", examples: [{ word: "六つ", reading: "むっつ", meaning: "six things" }, { word: "六日", reading: "むいか", meaning: "sixth day" }] },
  { character: "七", meaning: "Seven", onyomi: "シチ", kunyomi: "なな（つ）", examples: [{ word: "七つ", reading: "ななつ", meaning: "seven things" }, { word: "七日", reading: "なのか", meaning: "seventh day" }] },
  { character: "八", meaning: "Eight", onyomi: "ハチ", kunyomi: "やっ（つ）", examples: [{ word: "八つ", reading: "やっつ", meaning: "eight things" }, { word: "八日", reading: "ようか", meaning: "eighth day" }] },
  { character: "九", meaning: "Nine", onyomi: "キュウ、ク", kunyomi: "ここの（つ）", examples: [{ word: "九つ", reading: "ここのつ", meaning: "nine things" }, { word: "九日", reading: "ここのか", meaning: "ninth day" }] },
  { character: "十", meaning: "Ten", onyomi: "ジュウ", kunyomi: "とお", examples: [{ word: "十日", reading: "とおか", meaning: "tenth day" }, { word: "十円", reading: "じゅうえん", meaning: "ten yen" }] },
  { character: "百", meaning: "Hundred", onyomi: "ヒャク", kunyomi: "", examples: [{ word: "百円", reading: "ひゃくえん", meaning: "100 yen" }, { word: "三百", reading: "さんびゃく", meaning: "300" }] },
  { character: "千", meaning: "Thousand", onyomi: "セン", kunyomi: "ち", examples: [{ word: "千円", reading: "せんえん", meaning: "1000 yen" }, { word: "三千", reading: "さんぜん", meaning: "3000" }] },
  { character: "万", meaning: "Ten Thousand", onyomi: "マン", kunyomi: "", examples: [{ word: "一万", reading: "いちまん", meaning: "10,000" }, { word: "万円", reading: "まんえん", meaning: "10,000 yen" }] },

  // Days & Nature
  { character: "日", meaning: "Day / Sun", onyomi: "ニチ、ジツ", kunyomi: "ひ、か", examples: [{ word: "日本", reading: "にほん", meaning: "Japan" }, { word: "今日", reading: "きょう", meaning: "today" }] },
  { character: "月", meaning: "Month / Moon", onyomi: "ゲツ、ガツ", kunyomi: "つき", examples: [{ word: "月曜日", reading: "げつようび", meaning: "Monday" }, { word: "一月", reading: "いちがつ", meaning: "January" }] },
  { character: "火", meaning: "Fire", onyomi: "カ", kunyomi: "ひ", examples: [{ word: "火曜日", reading: "かようび", meaning: "Tuesday" }, { word: "火", reading: "ひ", meaning: "fire" }] },
  { character: "水", meaning: "Water", onyomi: "スイ", kunyomi: "みず", examples: [{ word: "水曜日", reading: "すいようび", meaning: "Wednesday" }, { word: "水", reading: "みず", meaning: "water" }] },
  { character: "木", meaning: "Tree", onyomi: "モク、ボク", kunyomi: "き", examples: [{ word: "木曜日", reading: "もくようび", meaning: "Thursday" }, { word: "木", reading: "き", meaning: "tree" }] },
  { character: "金", meaning: "Gold / Money", onyomi: "キン", kunyomi: "かね", examples: [{ word: "金曜日", reading: "きんようび", meaning: "Friday" }, { word: "お金", reading: "おかね", meaning: "money" }] },
  { character: "土", meaning: "Earth", onyomi: "ド、ト", kunyomi: "つち", examples: [{ word: "土曜日", reading: "どようび", meaning: "Saturday" }, { word: "土", reading: "つち", meaning: "soil" }] },

  // People & Family
  { character: "人", meaning: "Person", onyomi: "ジン、ニン", kunyomi: "ひと", examples: [{ word: "日本人", reading: "にほんじん", meaning: "Japanese person" }, { word: "大人", reading: "おとな", meaning: "adult" }] },
  { character: "男", meaning: "Man", onyomi: "ダン、ナン", kunyomi: "おとこ", examples: [{ word: "男の子", reading: "おとこのこ", meaning: "boy" }, { word: "男子", reading: "だんし", meaning: "male" }] },
  { character: "女", meaning: "Woman", onyomi: "ジョ", kunyomi: "おんな", examples: [{ word: "女の子", reading: "おんなのこ", meaning: "girl" }, { word: "女性", reading: "じょせい", meaning: "woman" }] },
  { character: "父", meaning: "Father", onyomi: "フ", kunyomi: "ちち", examples: [{ word: "父", reading: "ちち", meaning: "father" }, { word: "お父さん", reading: "おとうさん", meaning: "dad" }] },
  { character: "母", meaning: "Mother", onyomi: "ボ", kunyomi: "はは", examples: [{ word: "母", reading: "はは", meaning: "mother" }, { word: "お母さん", reading: "おかあさん", meaning: "mom" }] },
  { character: "子", meaning: "Child", onyomi: "シ", kunyomi: "こ", examples: [{ word: "子ども", reading: "こども", meaning: "child" }, { word: "男の子", reading: "おとこのこ", meaning: "boy" }] },
  { character: "友", meaning: "Friend", onyomi: "ユウ", kunyomi: "とも", examples: [{ word: "友だち", reading: "ともだち", meaning: "friend" }, { word: "親友", reading: "しんゆう", meaning: "close friend" }] },

  // Directions
  { character: "上", meaning: "Up", onyomi: "ジョウ", kunyomi: "うえ", examples: [{ word: "上", reading: "うえ", meaning: "above" }, { word: "上手", reading: "じょうず", meaning: "skillful" }] },
  { character: "下", meaning: "Down", onyomi: "カ", kunyomi: "した", examples: [{ word: "下", reading: "した", meaning: "below" }, { word: "地下", reading: "ちか", meaning: "underground" }] },
  { character: "左", meaning: "Left", onyomi: "サ", kunyomi: "ひだり", examples: [{ word: "左", reading: "ひだり", meaning: "left" }, { word: "左右", reading: "さゆう", meaning: "left and right" }] },
  { character: "右", meaning: "Right", onyomi: "ウ", kunyomi: "みぎ", examples: [{ word: "右", reading: "みぎ", meaning: "right" }, { word: "左右", reading: "さゆう", meaning: "left and right" }] },
  { character: "中", meaning: "Middle", onyomi: "チュウ", kunyomi: "なか", examples: [{ word: "中国", reading: "ちゅうごく", meaning: "China" }, { word: "中", reading: "なか", meaning: "inside" }] },
  { character: "外", meaning: "Outside", onyomi: "ガイ", kunyomi: "そと", examples: [{ word: "外国", reading: "がいこく", meaning: "foreign country" }, { word: "外", reading: "そと", meaning: "outside" }] },

  // Common Basics
  { character: "学", meaning: "Study", onyomi: "ガク", kunyomi: "まなぶ", examples: [{ word: "学生", reading: "がくせい", meaning: "student" }, { word: "大学", reading: "だいがく", meaning: "university" }] },
  { character: "先", meaning: "Previous", onyomi: "セン", kunyomi: "さき", examples: [{ word: "先生", reading: "せんせい", meaning: "teacher" }, { word: "先月", reading: "せんげつ", meaning: "last month" }] },
  { character: "生", meaning: "Life", onyomi: "セイ、ショウ", kunyomi: "いきる", examples: [{ word: "先生", reading: "せんせい", meaning: "teacher" }, { word: "学生", reading: "がくせい", meaning: "student" }] },
  
  // Verbs & Actions
  { character: "入", meaning: "Enter", onyomi: "ニュウ", kunyomi: "はい（る）", examples: [{ word: "入る", reading: "はいる", meaning: "to enter" }, { word: "入学", reading: "にゅうがく", meaning: "entering school" }] },
  { character: "出", meaning: "Exit / Go out", onyomi: "シュツ", kunyomi: "で（る）", examples: [{ word: "出る", reading: "でる", meaning: "to leave" }, { word: "出口", reading: "でぐち", meaning: "exit" }] },
  { character: "買", meaning: "Buy", onyomi: "バイ", kunyomi: "か（う）", examples: [{ word: "買う", reading: "かう", meaning: "to buy" }, { word: "買い物", reading: "かいもの", meaning: "shopping" }] },
  { character: "行", meaning: "Go", onyomi: "コウ", kunyomi: "い（く）", examples: [{ word: "行く", reading: "いく", meaning: "to go" }, { word: "銀行", reading: "ぎんこう", meaning: "bank" }] },
  { character: "来", meaning: "Come", onyomi: "ライ", kunyomi: "く（る）", examples: [{ word: "来る", reading: "くる", meaning: "to come" }, { word: "来年", reading: "らいねん", meaning: "next year" }] },
  { character: "会", meaning: "Meet", onyomi: "カイ", kunyomi: "あ（う）", examples: [{ word: "会う", reading: "あう", meaning: "to meet" }, { word: "会社", reading: "かいしゃ", meaning: "company" }] },

  // Everyday verbs
  { character: "休", meaning: "Rest", onyomi: "キュウ", kunyomi: "やす（む）", examples: [{ word: "休む", reading: "やすむ", meaning: "to rest" }, { word: "休日", reading: "きゅうじつ", meaning: "holiday" }] },
  { character: "食", meaning: "Eat", onyomi: "ショク", kunyomi: "た（べる）", examples: [{ word: "食べる", reading: "たべる", meaning: "to eat" }, { word: "食事", reading: "しょくじ", meaning: "meal" }] },
  { character: "飲", meaning: "Drink", onyomi: "イン", kunyomi: "の（む）", examples: [{ word: "飲む", reading: "のむ", meaning: "to drink" }, { word: "飲み物", reading: "のみもの", meaning: "drink" }] },
  { character: "立", meaning: "Stand", onyomi: "リツ", kunyomi: "た（つ）", examples: [{ word: "立つ", reading: "たつ", meaning: "to stand" }, { word: "立場", reading: "たちば", meaning: "position" }] },
  { character: "言", meaning: "Say", onyomi: "ゲン", kunyomi: "い（う）", examples: [{ word: "言う", reading: "いう", meaning: "to say" }, { word: "言葉", reading: "ことば", meaning: "word" }] },
  { character: "話", meaning: "Talk", onyomi: "ワ", kunyomi: "はな（す）", examples: [{ word: "話す", reading: "はなす", meaning: "to speak" }, { word: "電話", reading: "でんわ", meaning: "telephone" }] },
  { character: "見", meaning: "See", onyomi: "ケン", kunyomi: "み（る）", examples: [{ word: "見る", reading: "みる", meaning: "to see" }, { word: "見学", reading: "けんがく", meaning: "field trip" }] },
  { character: "聞", meaning: "Hear / Ask", onyomi: "ブン、モン", kunyomi: "き（く）", examples: [{ word: "聞く", reading: "きく", meaning: "to listen" }, { word: "新聞", reading: "しんぶん", meaning: "newspaper" }] },
  { character: "読", meaning: "Read", onyomi: "ドク", kunyomi: "よ（む）", examples: [{ word: "読む", reading: "よむ", meaning: "to read" }, { word: "読書", reading: "どくしょ", meaning: "reading books" }] },
  { character: "書", meaning: "Write", onyomi: "ショ", kunyomi: "か（く）", examples: [{ word: "書く", reading: "かく", meaning: "to write" }, { word: "図書館", reading: "としょかん", meaning: "library" }] },

  // Time & Space
  { character: "年", meaning: "Year", onyomi: "ネン", kunyomi: "とし", examples: [{ word: "今年", reading: "ことし", meaning: "this year" }, { word: "三年", reading: "さんねん", meaning: "three years" }] },
  { character: "時", meaning: "Time", onyomi: "ジ", kunyomi: "とき", examples: [{ word: "時間", reading: "じかん", meaning: "time" }, { word: "一時", reading: "いちじ", meaning: "1 o'clock" }] },
  { character: "分", meaning: "Minute / Understand", onyomi: "ブン、フン", kunyomi: "わかる", examples: [{ word: "五分", reading: "ごふん", meaning: "five minutes" }, { word: "分かる", reading: "わかる", meaning: "to understand" }] },
  { character: "前", meaning: "Before / Front", onyomi: "ゼン", kunyomi: "まえ", examples: [{ word: "前", reading: "まえ", meaning: "before" }, { word: "名前", reading: "なまえ", meaning: "name" }] },
  { character: "後", meaning: "After / Behind", onyomi: "ゴ", kunyomi: "あと", examples: [{ word: "後", reading: "あと", meaning: "after" }, { word: "午後", reading: "ごご", meaning: "afternoon" }] },
  { character: "間", meaning: "Between", onyomi: "カン", kunyomi: "あいだ", examples: [{ word: "時間", reading: "じかん", meaning: "time" }, { word: "間", reading: "あいだ", meaning: "between" }] },

  // Directions
  { character: "東", meaning: "East", onyomi: "トウ", kunyomi: "ひがし", examples: [{ word: "東京", reading: "とうきょう", meaning: "Tokyo" }, { word: "東", reading: "ひがし", meaning: "east" }] },
  { character: "西", meaning: "West", onyomi: "セイ", kunyomi: "にし", examples: [{ word: "西", reading: "にし", meaning: "west" }, { word: "関西", reading: "かんさい", meaning: "Kansai" }] },
  { character: "南", meaning: "South", onyomi: "ナン", kunyomi: "みなみ", examples: [{ word: "南", reading: "みなみ", meaning: "south" }, { word: "南口", reading: "みなみぐち", meaning: "south exit" }] },
  { character: "北", meaning: "North", onyomi: "ホク", kunyomi: "きた", examples: [{ word: "北", reading: "きた", meaning: "north" }, { word: "北海道", reading: "ほっかいどう", meaning: "Hokkaido" }] },

  // Adjectives
  { character: "高", meaning: "High / Expensive", onyomi: "コウ", kunyomi: "たか（い）", examples: [{ word: "高い", reading: "たかい", meaning: "expensive / high" }, { word: "高校", reading: "こうこう", meaning: "high school" }] },
  { character: "安", meaning: "Cheap / Safe", onyomi: "アン", kunyomi: "やす（い）", examples: [{ word: "安い", reading: "やすい", meaning: "cheap" }, { word: "安全", reading: "あんぜん", meaning: "safe" }] },
  { character: "多", meaning: "Many", onyomi: "タ", kunyomi: "おお（い）", examples: [{ word: "多い", reading: "おおい", meaning: "many" }, { word: "多分", reading: "たぶん", meaning: "maybe" }] },
  { character: "少", meaning: "Few / Little", onyomi: "ショウ", kunyomi: "すく（ない）", examples: [{ word: "少ない", reading: "すくない", meaning: "few" }, { word: "少年", reading: "しょうねん", meaning: "boy" }] },
  { character: "長", meaning: "Long", onyomi: "チョウ", kunyomi: "なが（い）", examples: [{ word: "長い", reading: "ながい", meaning: "long" }, { word: "社長", reading: "しゃちょう", meaning: "company president" }] },
  { character: "新", meaning: "New", onyomi: "シン", kunyomi: "あたら（しい）", examples: [{ word: "新しい", reading: "あたらしい", meaning: "new" }, { word: "新聞", reading: "しんぶん", meaning: "newspaper" }] },
  { character: "古", meaning: "Old", onyomi: "コ", kunyomi: "ふる（い）", examples: [{ word: "古い", reading: "ふるい", meaning: "old" }, { word: "中古", reading: "ちゅうこ", meaning: "used item" }] },

  // NEW ADDITIONS - Size & Distance
  { character: "大", meaning: "Big", onyomi: "ダイ、タイ", kunyomi: "おお（きい）", examples: [{ word: "大きい", reading: "おおきい", meaning: "big" }, { word: "大学", reading: "だいがく", meaning: "university" }] },
  { character: "近", meaning: "Near", onyomi: "キン", kunyomi: "ちか（い）", examples: [{ word: "近い", reading: "ちかい", meaning: "near" }, { word: "近所", reading: "きんじょ", meaning: "neighborhood" }] },
  { character: "有", meaning: "Have / Exist", onyomi: "ユウ", kunyomi: "あ（る）", examples: [{ word: "有名", reading: "ゆうめい", meaning: "famous" }, { word: "有料", reading: "ゆうりょう", meaning: "charged/paid" }] },
  { character: "広", meaning: "Wide / Spacious", onyomi: "コウ", kunyomi: "ひろ（い）", examples: [{ word: "広い", reading: "ひろい", meaning: "wide" }, { word: "広場", reading: "ひろば", meaning: "plaza" }] },

  // NEW ADDITIONS - Colors
  { character: "赤", meaning: "Red", onyomi: "セキ、シャク", kunyomi: "あか（い）", examples: [{ word: "赤い", reading: "あかい", meaning: "red" }, { word: "赤ちゃん", reading: "あかちゃん", meaning: "baby" }] },

  // Body Parts
  { character: "口", meaning: "Mouth", onyomi: "コウ", kunyomi: "くち", examples: [{ word: "口", reading: "くち", meaning: "mouth" }, { word: "出口", reading: "でぐち", meaning: "exit" }] },
  { character: "目", meaning: "Eye", onyomi: "モク", kunyomi: "め", examples: [{ word: "目", reading: "め", meaning: "eye" }, { word: "一目", reading: "ひとめ", meaning: "at first glance" }] },
  { character: "手", meaning: "Hand", onyomi: "シュ", kunyomi: "て", examples: [{ word: "手", reading: "て", meaning: "hand" }, { word: "上手", reading: "じょうず", meaning: "skillful" }] },
  { character: "足", meaning: "Foot / Leg", onyomi: "ソク", kunyomi: "あし", examples: [{ word: "足", reading: "あし", meaning: "foot" }, { word: "足りる", reading: "たりる", meaning: "to be enough" }] },
  { character: "耳", meaning: "Ear", onyomi: "ジ", kunyomi: "みみ", examples: [{ word: "耳", reading: "みみ", meaning: "ear" }, { word: "耳鼻科", reading: "じびか", meaning: "ENT clinic" }] },
  { character: "花", meaning: "Flower", onyomi: "カ", kunyomi: "はな", examples: [{ word: "花", reading: "はな", meaning: "flower" }, { word: "花見", reading: "はなみ", meaning: "flower viewing" }] },

  // Common Nouns
  { character: "名", meaning: "Name", onyomi: "メイ", kunyomi: "な", examples: [{ word: "名前", reading: "なまえ", meaning: "name" }, { word: "有名", reading: "ゆうめい", meaning: "famous" }] },
  { character: "白", meaning: "White", onyomi: "ハク", kunyomi: "しろ（い）", examples: [{ word: "白い", reading: "しろい", meaning: "white" }, { word: "白紙", reading: "はくし", meaning: "blank paper" }] },
  { character: "円", meaning: "Yen / Circle", onyomi: "エン", kunyomi: "まる（い）", examples: [{ word: "百円", reading: "ひゃくえん", meaning: "100 yen" }, { word: "円い", reading: "まるい", meaning: "round" }] },
  { character: "空", meaning: "Sky / Empty", onyomi: "クウ", kunyomi: "そら", examples: [{ word: "空", reading: "そら", meaning: "sky" }, { word: "空気", reading: "くうき", meaning: "air" }] },
  { character: "雨", meaning: "Rain", onyomi: "ウ", kunyomi: "あめ", examples: [{ word: "雨", reading: "あめ", meaning: "rain" }, { word: "大雨", reading: "おおあめ", meaning: "heavy rain" }] },
  { character: "国", meaning: "Country", onyomi: "コク", kunyomi: "くに", examples: [{ word: "国", reading: "くに", meaning: "country" }, { word: "外国", reading: "がいこく", meaning: "foreign country" }] },
  { character: "電", meaning: "Electricity", onyomi: "デン", kunyomi: "", examples: [{ word: "電話", reading: "でんわ", meaning: "telephone" }, { word: "電車", reading: "でんしゃ", meaning: "train" }] },
  { character: "車", meaning: "Car / Vehicle", onyomi: "シャ", kunyomi: "くるま", examples: [{ word: "車", reading: "くるま", meaning: "car" }, { word: "電車", reading: "でんしゃ", meaning: "train" }] },
  { character: "校", meaning: "School", onyomi: "コウ", kunyomi: "", examples: [{ word: "学校", reading: "がっこう", meaning: "school" }, { word: "高校", reading: "こうこう", meaning: "high school" }] },
  { character: "社", meaning: "Company", onyomi: "シャ", kunyomi: "", examples: [{ word: "会社", reading: "かいしゃ", meaning: "company" }, { word: "神社", reading: "じんじゃ", meaning: "shrine" }] },
  { character: "何", meaning: "What", onyomi: "カ", kunyomi: "なに", examples: [{ word: "何", reading: "なに", meaning: "what" }, { word: "何人", reading: "なんにん", meaning: "how many people" }] },
  { character: "語", meaning: "Language", onyomi: "ゴ", kunyomi: "かた（る）", examples: [{ word: "日本語", reading: "にほんご", meaning: "Japanese language" }, { word: "英語", reading: "えいご", meaning: "English" }] },

  // NEW ADDITIONS - Objects
  { character: "紙", meaning: "Paper", onyomi: "シ", kunyomi: "かみ", examples: [{ word: "紙", reading: "かみ", meaning: "paper" }, { word: "新聞紙", reading: "しんぶんし", meaning: "newspaper" }] },

  // Time Periods
  { character: "午", meaning: "Noon", onyomi: "ゴ", kunyomi: "", examples: [{ word: "午前", reading: "ごぜん", meaning: "AM" }, { word: "午後", reading: "ごご", meaning: "PM" }] },
  { character: "半", meaning: "Half", onyomi: "ハン", kunyomi: "なか（ば）", examples: [{ word: "半分", reading: "はんぶん", meaning: "half" }, { word: "三時半", reading: "さんじはん", meaning: "3:30" }] },
  { character: "今", meaning: "Now", onyomi: "コン", kunyomi: "いま", examples: [{ word: "今", reading: "いま", meaning: "now" }, { word: "今日", reading: "きょう", meaning: "today" }] },
  { character: "毎", meaning: "Every", onyomi: "マイ", kunyomi: "", examples: [{ word: "毎日", reading: "まいにち", meaning: "every day" }, { word: "毎年", reading: "まいとし", meaning: "every year" }] },
  { character: "週", meaning: "Week", onyomi: "シュウ", kunyomi: "", examples: [{ word: "今週", reading: "こんしゅう", meaning: "this week" }, { word: "来週", reading: "らいしゅう", meaning: "next week" }] },

  // NEW ADDITIONS - Time of Day
  { character: "朝", meaning: "Morning", onyomi: "チョウ", kunyomi: "あさ", examples: [{ word: "朝", reading: "あさ", meaning: "morning" }, { word: "今朝", reading: "けさ", meaning: "this morning" }] },
  { character: "昼", meaning: "Daytime / Noon", onyomi: "チュウ", kunyomi: "ひる", examples: [{ word: "昼", reading: "ひる", meaning: "daytime" }, { word: "昼ご飯", reading: "ひるごはん", meaning: "lunch" }] },
  { character: "夕", meaning: "Evening", onyomi: "セキ", kunyomi: "ゆう", examples: [{ word: "夕方", reading: "ゆうがた", meaning: "evening" }, { word: "夕飯", reading: "ゆうはん", meaning: "dinner" }] },
  { character: "夜", meaning: "Night", onyomi: "ヤ", kunyomi: "よる", examples: [{ word: "夜", reading: "よる", meaning: "night" }, { word: "今夜", reading: "こんや", meaning: "tonight" }] },

  // Animals
  { character: "魚", meaning: "Fish", onyomi: "ギョ", kunyomi: "さかな", examples: [{ word: "魚", reading: "さかな", meaning: "fish" }, { word: "金魚", reading: "きんぎょ", meaning: "goldfish" }] },
  { character: "店", meaning: "Shop", onyomi: "テン", kunyomi: "みせ", examples: [{ word: "店", reading: "みせ", meaning: "shop" }, { word: "本店", reading: "ほんてん", meaning: "main store" }] },

  // NEW ADDITIONS - Pronouns & People
  { character: "私", meaning: "I / Me", onyomi: "シ", kunyomi: "わたし", examples: [{ word: "私", reading: "わたし", meaning: "I/me" }, { word: "私立", reading: "しりつ", meaning: "private (school)" }] },

  // NEW ADDITIONS - Places
  { character: "家", meaning: "House / Home", onyomi: "カ、ケ", kunyomi: "いえ、うち", examples: [{ word: "家", reading: "いえ", meaning: "house" }, { word: "家族", reading: "かぞく", meaning: "family" }] },

  // NEW ADDITIONS - Verbs
  { character: "知", meaning: "Know", onyomi: "チ", kunyomi: "し（る）", examples: [{ word: "知る", reading: "しる", meaning: "to know" }, { word: "知識", reading: "ちしき", meaning: "knowledge" }] },
  { character: "思", meaning: "Think", onyomi: "シ", kunyomi: "おも（う）", examples: [{ word: "思う", reading: "おもう", meaning: "to think" }, { word: "思い出", reading: "おもいで", meaning: "memory" }] },
  { character: "歩", meaning: "Walk", onyomi: "ホ", kunyomi: "ある（く）", examples: [{ word: "歩く", reading: "あるく", meaning: "to walk" }, { word: "散歩", reading: "さんぽ", meaning: "stroll" }] },
  { character: "走", meaning: "Run", onyomi: "ソウ", kunyomi: "はし（る）", examples: [{ word: "走る", reading: "はしる", meaning: "to run" }, { word: "走者", reading: "そうしゃ", meaning: "runner" }] },
  { character: "住", meaning: "Live / Reside", onyomi: "ジュウ", kunyomi: "す（む）", examples: [{ word: "住む", reading: "すむ", meaning: "to live" }, { word: "住所", reading: "じゅうしょ", meaning: "address" }] },

  // Places
  { character: "本", meaning: "Book / Origin", onyomi: "ホン", kunyomi: "もと", examples: [{ word: "本", reading: "ほん", meaning: "book" }, { word: "日本", reading: "にほん", meaning: "Japan" }] },
  { character: "山", meaning: "Mountain", onyomi: "サン", kunyomi: "やま", examples: [{ word: "山", reading: "やま", meaning: "mountain" }, { word: "富士山", reading: "ふじさん", meaning: "Mount Fuji" }] },
  { character: "川", meaning: "River", onyomi: "セン", kunyomi: "かわ", examples: [{ word: "川", reading: "かわ", meaning: "river" }, { word: "山川", reading: "さんせん", meaning: "mountains and rivers" }] },
  { character: "天", meaning: "Heaven / Sky", onyomi: "テン", kunyomi: "あま", examples: [{ word: "天気", reading: "てんき", meaning: "weather" }, { word: "天国", reading: "てんごく", meaning: "heaven" }] },
  { character: "気", meaning: "Spirit / Air", onyomi: "キ", kunyomi: "", examples: [{ word: "天気", reading: "てんき", meaning: "weather" }, { word: "元気", reading: "げんき", meaning: "healthy / energetic" }] },
  { character: "駅", meaning: "Station", onyomi: "エキ", kunyomi: "", examples: [{ word: "駅", reading: "えき", meaning: "station" }, { word: "東京駅", reading: "とうきょうえき", meaning: "Tokyo Station" }] },
  { character: "道", meaning: "Road / Way", onyomi: "ドウ", kunyomi: "みち", examples: [{ word: "道", reading: "みち", meaning: "road" }, { word: "北海道", reading: "ほっかいどう", meaning: "Hokkaido" }] },
  { character: "室", meaning: "Room", onyomi: "シツ", kunyomi: "むろ", examples: [{ word: "教室", reading: "きょうしつ", meaning: "classroom" }, { word: "会議室", reading: "かいぎしつ", meaning: "meeting room" }] },

  // NEW ADDITIONS - Money/Metal
  { character: "銀", meaning: "Silver", onyomi: "ギン", kunyomi: "", examples: [{ word: "銀行", reading: "ぎんこう", meaning: "bank" }, { word: "銀色", reading: "ぎんいろ", meaning: "silver color" }] },
];
