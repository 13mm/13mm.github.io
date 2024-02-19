var COLOR = new Array("", "赤い", "白い", "青い", "黄色い");
var TONE = new Array("", "磁気の", "月の", "電気の", "自己存在の", "倍音の", "律動の", "共振の", "銀河の", "太陽の", "惑星の", "スペクトルの", "水晶の", "宇宙の");
var SEAL = new Array("", "竜", "風", "夜", "種", "蛇", "世界の橋渡し", "手", "星", "月", "犬", "猿", "人", "空歩く者", "魔法使い", "鷲", "戦士", "地球", "鏡", "嵐", "太陽");

var TONEpic = new Array("", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "^", "\\");
var SEALpic = new Array("", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t");
var COLORflag = Array("", "RED", "WHITE", "BLUE", "YELLOW");

var TONE_ESSENCE = new Array("", "目的", "挑戦", "奉仕", "形", "輝き", "同等", "調律", "無欠性", "意図", "現われ", "解放", "協力", "存在");
var TONE_POWER = new Array("", "統一する", "分極化する", "活性化する", "定義する", "授ける", "組織する", "通す", "調和させる", "脈動させる", "仕上げる", "溶かす", "捧げる", "持ちこたえる");
var TONE_ACTION = new Array("", "引きつけ", "安定させ", "つなぎとめ", "計り", "命じ", "つり合わせ", "呼び起こし", "型どり", "実感し", "生み出し", "解き放ち", "普遍化し", "越え");
var SEAL_ACTION = new Array("", "育む", "伝える", "夢見る", "目指す", "生き残らせる", "等しくする", "知る", "美しくする", "清める", "愛する", "遊ぶ", "感化する", "探る", "魅惑する", "創り出す", "問う", "発展させる", "映し出す", "触発する", "照らす");
var SEAL_POWER = new Array("", "誕生", "スピリット", "豊かさ", "開花", "生命力", "死", "遂行", "気品", "普遍的な水", "ハート", "魔術", "自由意志", "空間", "永遠", "ヴィジョン", "知性", "舵取り", "果てしなさ", "自己発生", "普遍的な火");
var SEAL_ESSENCE = new Array("", "存在", "呼吸", "直観", "気づき", "本能", "機会", "癒し", "芸術", "流れ", "忠実", "幻想", "知恵", "用心深さ", "受容性", "心", "大胆さ", "共時性", "秩序", "エネルギー", "生命");
var TIME_CELL = new Array("", "入力", "母体", "出力", "処理", "保存");
var POLAR = new Array("確立", "変換", "拡張", "輸送");

//__________________________________________________________________________
var DD = new Date();
var Year = DD.getFullYear();
var Month = DD.getMonth() + 1;
var Day = DD.getDate();
//__________________________________________________________________________

document.write('<p class="center">', Year, "年", Month, "月", Day, "日は<br />Mayan");

var kin = oracle(Year, Month, Day);

MakeKinInfo(kin);
/*
document.write('ガイド<em class="spell">',SEALpic[guide],'</em><br />');
document.write('反対<em class="spell">',SEALpic[left],'</em><br />');
document.write('類似<em class="spell">',SEALpic[right],'</em><br />');
document.write('神秘<em class="spell">',SEALpic[myst],'</em><br />');
*/
document.write(
  kin, '：', COLOR[color], TONE[tone], SEAL[seal], '</p>', '<div class="center">',
  '<em class="spell">', TONEpic[tone], '<br /></em>',
  '<div class="spell"><div class="boxA"><div class="box1">　</div>',
  '<div class="box', COLORflag[color], '">', SEALpic[guide], '</div>',
  '<div class="box3">　</div></div>',
  '<div class="boxA"><div class="box', COLORflag[Lcolor], '">', SEALpic[left], '</div>',
  '<div class="box', COLORflag[color], '">', SEALpic[seal], '</div>',
  '<div class="box', COLORflag[Rcolor], '">', SEALpic[right], '</div></div>',
  '<div class="boxA"><div class="box7">　</div>',
  '<div class="box', COLORflag[Mcolor], '">', SEALpic[myst], '</div>',
  '<div class="box9">　</div></div></div><br /><br />',
  '<em class="spell tex', COLORflag[Wcolor], '">', SEALpic[wave], '</em><br />', '<br /><br /></div>'
);




//__________________________________________________________________________余剰の計算	

function mod(a, b) {
  return (a * b < 0) * b + a % b
}

function Dmod(x, y) {
  return (((x - 1) % y) + 1);
}

//__________________________________________________________________________西暦からKINを求める

function oracle(y, m, d) {
  var y, m, d;

  switch (m) {
    case 1:
      b = 0;
      break;
    case 2:
      b = 31;
      break;
    case 3:
      b = 59;
      break;
    case 4:
      b = 90;
      break;
    case 5:
      b = 120;
      break;
    case 6:
      b = 151;
      break;
    case 7:
      b = 181;
      break;
    case 8:
      b = 212;
      break;
    case 9:
      b = 243;
      break;
    case 10:
      b = 273;
      break;
    case 11:
      b = 304;
      break;
    case 12:
      b = 334;
      break;
  }

  a = y - 2014;
  a = mod(a, 52);
  kin = (a * 365 + b + d + 62) % 260;
  if (kin == 0) {
    kin = 260;
  }
  kin=(kin+206)%260;
  return kin;
}


//__________________________________________________________________________KINから情報を割り出す
function MakeKinInfo(kin) {
  color = Dmod(kin, 4); //色  
  if (color % 2 == 1) {
    Rcolor = color + 1;
    Rcolor = Dmod(Rcolor, 4);
    Mcolor = color + 3;
    Mcolor = Dmod(Mcolor, 4);
  } else {
    Rcolor = color + 3;
    Rcolor = Dmod(Rcolor, 4);
    Mcolor = color + 1;
    Mcolor = Dmod(Mcolor, 4);
  } //類似・神秘の色

  Lcolor = color + 2; //反対の色
  Lcolor = Dmod(Lcolor, 4);
  tone = Dmod(kin, 13); //音程
  seal = Dmod(kin, 20); //紋章
  guide = ((tone - 1) * 12) + seal; //導
  guide = Dmod(guide, 20);
  left = seal + 10; //反対
  left = Dmod(left, 20);
  right = 39 - seal; //類似
  right = Dmod(right, 20);
  myst = 21 - seal; //神秘
  wave = kin - tone + 1; //ウェイブスペル
  wave = Dmod(wave, 20);
  Wcolor = Dmod(wave, 4); //ウェブスペルの色
  cell = seal - color + 1; //タイムセル（順序が逆転）
  cell = Dmod(cell, 5);


  switch (tone) {
    case 3:
      polar = 0;
      break;
    case 4:
      polar = 1;
      break;
    case 10:
      polar = 2;
      break;
    case 11:
      polar = 3;
      break;
  }

}

//__________________________________________________________________________

function ORC(flag) {
  if (flag == 1) {
    var y = eval(document.fm.Y.value);
    var m = eval(document.fm.M.value);
    var d = eval(document.fm.D.value);
    kin = oracle(y, m, d);
    if (document.fm.Y.value == "" || document.fm.M.value == "" || document.fm.D.value == "") {
      alert("日付を入力して下さい。");
      kin = oracle(Year, Month, Day);
      return false;
    } else {

      MakeKinInfo(kin);
      var kekka1 = document.getElementById('midashi');
      kekka1.innerHTML = '<p class="center">' + y + '年' + m + '月' + d + '日は<br />Mayan' + kin +
        '：' + COLOR[color] + TONE[tone] + SEAL[seal] + '</p>' +
        '<div class="center">' +
        '<em class="spell">' + TONEpic[tone] + '<br /></em>' +
        '<div class="spell"><div class="boxA"><div class="box1">　</div>' +
        '<div class="box' + COLORflag[color] + '">' + SEALpic[guide] + '</div>' +
        '<div class="box3">　</div></div>' +
        '<div class="boxA"><div class="box' + COLORflag[Lcolor] + '">' + SEALpic[left] + '</div>' +
        '<div class="box' + COLORflag[color] + '">' + SEALpic[seal] + '</div>' +
        '<div class="box' + COLORflag[Rcolor] + '">' + SEALpic[right] + '</div></div>' +
        '<div class="boxA"><div class="box7">　</div>' +
        '<div class="box' + COLORflag[Mcolor] + '">' + SEALpic[myst] + '</div>' +
        '<div class="box9">　</div></div></div><br /><br />' +
        '<em class="spell tex' + COLORflag[Wcolor] + '">' + SEALpic[wave] + '</em><br />' + '<br /><br /></div>';
      MakeKinSong('song2');

    }

  } else {

    kin = eval(document.fm2.KIN.value);
    if (document.fm2.KIN.value == "") {
      alert("Mayanを入力して下さい。");
      kin = oracle(Year, Month, Day);
      return false;
    } else {

      MakeKinInfo(kin);

      var kekka1 = document.getElementById('midashi');
      kekka1.innerHTML = '<p class="center">' + 'Maya' + kin +
        '：' + COLOR[color] + TONE[tone] + SEAL[seal] + '</p>' +
        '<div class="center">' +
        '<em class="spell">' + TONEpic[tone] + '<br /></em>' +
        '<div class="spell"><div class="boxA"><div class="box1">　</div>' +
        '<div class="box' + COLORflag[color] + '">' + SEALpic[guide] + '</div>' +
        '<div class="box3">　</div></div>' +
        '<div class="boxA"><div class="box' + COLORflag[Lcolor] + '">' + SEALpic[left] + '</div>' +
        '<div class="box' + COLORflag[color] + '">' + SEALpic[seal] + '</div>' +
        '<div class="box' + COLORflag[Rcolor] + '">' + SEALpic[right] + '</div></div>' +
        '<div class="boxA"><div class="box7">　</div>' +
        '<div class="box' + COLORflag[Mcolor] + '">' + SEALpic[myst] + '</div>' +
        '<div class="box9">　</div></div></div><br /><br />' +
        '<em class="spell tex' + COLORflag[Wcolor] + '">' + SEALpic[wave] + '</em><br />' + '<br /><br /></div>';
      MakeKinSong('song2');

    }

  }

}
//__________________________________________________________________________
function Kininc() {

  kin = kin + 1;
  kin = Dmod(kin, 260);
  MakeKinInfo(kin);

  var kekka2 = document.getElementById('midashi');
  kekka2.innerHTML = '<p class="center">Mayan' + kin +
    '：' + COLOR[color] + TONE[tone] + SEAL[seal] + '</p>' +
    '<div class="center">' +
    '<em class="spell">' + TONEpic[tone] + '<br /></em>' +
    '<div class="spell"><div class="boxA"><div class="box1">　</div>' +
    '<div class="box' + COLORflag[color] + '">' + SEALpic[guide] + '</div>' +
    '<div class="box3">　</div></div>' +
    '<div class="boxA"><div class="box' + COLORflag[Lcolor] + '">' + SEALpic[left] + '</div>' +
    '<div class="box' + COLORflag[color] + '">' + SEALpic[seal] + '</div>' +
    '<div class="box' + COLORflag[Rcolor] + '">' + SEALpic[right] + '</div></div>' +
    '<div class="boxA"><div class="box7">　</div>' +
    '<div class="box' + COLORflag[Mcolor] + '">' + SEALpic[myst] + '</div>' +
    '<div class="box9">　</div></div></div><br /><br />' +
    '<em class="spell tex' + COLORflag[Wcolor] + '">' + SEALpic[wave] + '</em><br />' + '<br /><br /></div>';
  MakeKinSong('song2');
}
//__________________________________________________________________________
function Kindec() {

  kin = kin - 1;
  kin = mod(kin, 260);
  if (kin == 0) kin = 260;
  MakeKinInfo(kin);

  var kekka3 = document.getElementById('midashi');
  kekka3.innerHTML = '<p class="center">Mayan' + kin +
    '：' + COLOR[color] + TONE[tone] + SEAL[seal] + '</p>' +
    '<div class="center">' +
    '<em class="spell">' + TONEpic[tone] + '<br /></em>' +
    '<div class="spell"><div class="boxA"><div class="box1">　</div>' +
    '<div class="box' + COLORflag[color] + '">' + SEALpic[guide] + '</div>' +
    '<div class="box3">　</div></div>' +
    '<div class="boxA"><div class="box' + COLORflag[Lcolor] + '">' + SEALpic[left] + '</div>' +
    '<div class="box' + COLORflag[color] + '">' + SEALpic[seal] + '</div>' +
    '<div class="box' + COLORflag[Rcolor] + '">' + SEALpic[right] + '</div></div>' +
    '<div class="boxA"><div class="box7">　</div>' +
    '<div class="box' + COLORflag[Mcolor] + '">' + SEALpic[myst] + '</div>' +
    '<div class="box9">　</div></div></div><br /><br />' +
    '<em class="spell tex' + COLORflag[Wcolor] + '">' + SEALpic[wave] + '</em><br />' + '<br /><br /></div>';
  MakeKinSong('song2');
}
//__________________________________________________________________________
function CalKin() {
  var cal = eval(document.fm2.KIN.value);
  var yyy = eval(document.fm2.YYY.value);
  var n = eval(document.fm2.N.value);

  if (document.fm2.KIN.value == "" || document.fm2.YYY.value == "" || document.fm2.N.value == "") {
    alert("数値を入力して下さい。");
    return false;
  } else {
    var mmm = 1;
    var ddd = 1;


    for (j = 0; j < n; j++) {
      document.write(yyy, '年：');
      mmm = 1;
      while (mmm < 13) {
        ddd = 1;
        while (ddd < 32) {
          if (cal == oracle(yyy, mmm, ddd)) {
            switch (mmm) {
              case 1:
              case 3:
              case 5:
              case 7:
              case 8:
              case 10:
              case 12:
                document.write(mmm, '月', ddd, '日／');
                break;
              case 2:
                if (ddd < 30) {
                  document.write(mmm, '月', ddd, '日／');
                }
                break;
              case 4:
              case 6:
              case 9:
              case 11:
                if (ddd < 31) {
                  document.write(mmm, '月', ddd, '日／');
                }
                break;
            }
          };
          ddd++;
        };
        mmm++;
      }
      document.write('<br />');
      yyy++;
    }
    document.write('<br /><input type="button" value="前のページに戻る" onclick="window.location.reload();" />');
  }
}
//_____________________________________

function Kin260() {
  k = 0;
  while (k < 260) {

    var kekka4 = document.getElementById('k' + k);
    k++;
    MakeKinInfo(k);
    kekka4.innerHTML = '</div>' + '<p class="center">Mayan' + k +
      '：' + COLOR[color] + TONE[tone] + SEAL[seal] + '</p>' +
      '<div class="center">' +
      '<em class="spell">' + TONEpic[tone] + '<br /></em>' +
      '<div class="spell"><div class="boxA"><div class="box1">　</div>' +
      '<div class="box' + COLORflag[color] + '">' + SEALpic[guide] + '</div>' +
      '<div class="box3">　</div></div>' +
      '<div class="boxA"><div class="box' + COLORflag[Lcolor] + '">' + SEALpic[left] + '</div>' +
      '<div class="box' + COLORflag[color] + '">' + SEALpic[seal] + '</div>' +
      '<div class="box' + COLORflag[Rcolor] + '">' + SEALpic[right] + '</div></div>' +
      '<div class="boxA"><div class="box7">　</div>' +
      '<div class="box' + COLORflag[Mcolor] + '">' + SEALpic[myst] + '</div>' +
      '<div class="box9">　</div></div></div><br /><br />' +
      '<em class="spell tex' + COLORflag[Wcolor] + '">' + SEALpic[wave] + '</em><br />' + '<br /><br /><br /></div><div id="k' + k + '"><br />';
  }
}

//__________________________________________________________________________
function MakeKinSong(id) {


  MakeKinInfo(kin);

  if (CheckP(tone, seal)) {

    if (CheckG(kin)) {

      if (seal == guide) {
        var kekka6 = document.getElementById(id);
        kekka6.innerHTML = '<p class="center">' +
          '私は' + SEAL_ACTION[seal] + 'ために' + TONE_POWER[tone] +
          '<br />' +
          SEAL_ESSENCE[seal] + 'を' + TONE_ACTION[tone] + 'ながら' +
          '<br />' +
          TONE_ESSENCE[tone] + 'の' + TONE[tone] + '音で' +
          '<br />' +
          SEAL_POWER[seal] + 'の' + TIME_CELL[cell] + 'をシールする' +
          '<br />' +
          '私は自らの二重の力に導かれる' +
          '<br />' +
          "私は極性キン<br />" + COLOR[color] + "銀河スペクトルを" + POLAR[polar] + "する" +
          '<br />' +
          '銀河の活性化の正門　私に入りなさい';


      } else {

        var kekka6 = document.getElementById(id);
        kekka6.innerHTML = '<p class="center">' +
          '私は' + SEAL_ACTION[seal] + 'ために' + TONE_POWER[tone] +
          '<br />' +
          SEAL_ESSENCE[seal] + 'を' + TONE_ACTION[tone] + 'ながら' +
          '<br />' +
          TONE_ESSENCE[tone] + 'の' + TONE[tone] + '音で' +
          '<br />' +
          SEAL_POWER[seal] + 'の' + TIME_CELL[cell] + 'をシールする' +
          '<br />' +
          '私は' + SEAL_POWER[guide] + 'の力に導かれる' +
          '<br />' +
          "私は極性キン<br />" + COLOR[color] + "銀河スペクトルを" + POLAR[polar] + "する" +
          '<br />' +

          '銀河の活性化の正門　私に入りなさい';

      }

    } else {

      if (seal == guide) {
        var kekka6 = document.getElementById(id);
        kekka6.innerHTML = '<p class="center">' +
          '私は' + SEAL_ACTION[seal] + 'ために' + TONE_POWER[tone] +
          '<br />' +
          SEAL_ESSENCE[seal] + 'を' + TONE_ACTION[tone] + 'ながら' +
          '<br />' +
          TONE_ESSENCE[tone] + 'の' + TONE[tone] + '音で' +
          '<br />' +
          SEAL_POWER[seal] + 'の' + TIME_CELL[cell] + 'をシールする' +
          '<br />' +
          '私は自らの二重の力に導かれる' +
          '<br />' +
          "私は極性キン<br />" + COLOR[color] + "銀河スペクトルを" + POLAR[polar] + "する";

      } else {

        var kekka6 = document.getElementById(id);
        kekka6.innerHTML = '<p class="center">' +
          '私は' + SEAL_ACTION[seal] + 'ために' + TONE_POWER[tone] +
          '<br />' +
          SEAL_ESSENCE[seal] + 'を' + TONE_ACTION[tone] + 'ながら' +
          '<br />' +
          TONE_ESSENCE[tone] + 'の' + TONE[tone] + '音で' +
          '<br />' +
          SEAL_POWER[seal] + 'の' + TIME_CELL[cell] + 'をシールする' +
          '<br />' +
          '私は' + SEAL_POWER[guide] + 'の力に導かれる' +
          '<br />' +
          "私は極性キン<br />" + COLOR[color] + "銀河スペクトルを" + POLAR[polar] + "する";

      }
    }


  } else {

    if (CheckG(kin)) {

      if (seal == guide) {
        var kekka6 = document.getElementById(id);
        kekka6.innerHTML = '<p class="center">' +
          '私は' + SEAL_ACTION[seal] + 'ために' + TONE_POWER[tone] +
          '<br />' +
          SEAL_ESSENCE[seal] + 'を' + TONE_ACTION[tone] + 'ながら' +
          '<br />' +
          TONE_ESSENCE[tone] + 'の' + TONE[tone] + '音で' +
          '<br />' +
          SEAL_POWER[seal] + 'の' + TIME_CELL[cell] + 'をシールする' +
          '<br />' +
          '私は自らの二重の力に導かれる' +
          '<br />' +
          '銀河の活性化の正門　私に入りなさい';


      } else {

        var kekka6 = document.getElementById(id);
        kekka6.innerHTML = '<p class="center">' +
          '私は' + SEAL_ACTION[seal] + 'ために' + TONE_POWER[tone] +
          '<br />' +
          SEAL_ESSENCE[seal] + 'を' + TONE_ACTION[tone] + 'ながら' +
          '<br />' +
          TONE_ESSENCE[tone] + 'の' + TONE[tone] + '音で' +
          '<br />' +
          SEAL_POWER[seal] + 'の' + TIME_CELL[cell] + 'をシールする' +
          '<br />' +
          '私は' + SEAL_POWER[guide] + 'の力に導かれる' +
          '<br />' +
          '銀河の活性化の正門　私に入りなさい';

      }

    } else {

      if (seal == guide) {
        var kekka6 = document.getElementById(id);
        kekka6.innerHTML = '<p class="center">' +
          '私は' + SEAL_ACTION[seal] + 'ために' + TONE_POWER[tone] +
          '<br />' +
          SEAL_ESSENCE[seal] + 'を' + TONE_ACTION[tone] + 'ながら' +
          '<br />' +
          TONE_ESSENCE[tone] + 'の' + TONE[tone] + '音で' +
          '<br />' +
          SEAL_POWER[seal] + 'の' + TIME_CELL[cell] + 'をシールする' +
          '<br />' +
          '私は自らの二重の力に導かれる';

      } else {

        var kekka6 = document.getElementById(id);
        kekka6.innerHTML = '<p class="center">' +
          '私は' + SEAL_ACTION[seal] + 'ために' + TONE_POWER[tone] +
          '<br />' +
          SEAL_ESSENCE[seal] + 'を' + TONE_ACTION[tone] + 'ながら' +
          '<br />' +
          TONE_ESSENCE[tone] + 'の' + TONE[tone] + '音で' +
          '<br />' +
          SEAL_POWER[seal] + 'の' + TIME_CELL[cell] + 'をシールする' +
          '<br />' +
          '私は' + SEAL_POWER[guide] + 'の力に導かれる';
      }
    }


  }



}

//__________________________________________________________________________//キンの判定
function CheckP(tone, seal) {
  var p;
  p = Dmod(seal, 5);
  if (p != 5) {
    return (false);
  }
  if ((tone == 3) || (tone == 4) || (tone == 10) || (tone == 11)) {
    return (true);
  }
  return (false);
}

function CheckG(kin) {
  if (
    (kin == 1) || (kin == 20) || (kin == 22) || (kin == 39) || (kin == 43) || (kin == 50) || (kin == 51) || (kin == 58) || (kin == 64) || (kin == 69) || (kin == 72) || (kin == 77) || (kin == 85) || (kin ==
      88) || (kin == 93) || (kin == 96) || (kin == 106) || (kin == 107) || (kin == 108) || (kin == 109) || (kin == 110) || (kin == 111) || (kin == 112) || (kin == 113) || (kin == 114) || (kin == 115) || (kin ==
      146) || (kin == 147) || (kin == 148) || (kin == 149) || (kin == 150) || (kin == 151) || (kin == 152) || (kin == 153) || (kin == 154) || (kin == 155) || (kin == 165) || (kin == 168) || (kin == 173) || (kin ==
      176) || (kin == 184) || (kin == 189) || (kin == 192) || (kin == 197) || (kin == 203) || (kin == 210) || (kin == 211) || (kin == 218) || (kin == 222) || (kin == 239) || (kin == 241) || (kin == 260)
  ) {
    return (true);
  } else {
    return (false);
  }
}
/*__________________________________________________________________________

function KinCal(){
	var y=eval(document.fm.Y.value);
	var m=eval(document.fm.M.value);
	var d=eval(document.fm.D.value);
	var kinc=oracle(y,m,d);
if(document.fm.Y.value == "" || document.fm.M.value == "" || document.fm.D.value == ""){
        alert("日付を入力して下さい。");kin=oracle(Year,Month,Day);
	return false;
    }else{
	document.fm.K.value =kinc;
}

}
__________________________________________________________________________*/