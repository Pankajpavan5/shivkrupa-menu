/* [marathi, english, price, uncertain?] */
const MENU = [
 {t:'चायनीज', e:'Chinese', items:[
  ['व्हेज फ्राईड राईस','Veg Fried Rice',110],
  ['ट्रिपल शेजवान फ्राईड राईस','Triple Schezwan Fried Rice',120],
  ['मसाला राईस','Masala Rice',110],
  ['व्हेज मंचुरियन','Veg Manchurian',110],
  ['व्हेज ६५','Veg 65',110],
  ['पनीर ६५','Paneer 65',150],
  ['सोयाबीन ६५','Soya 65',100],
  ['गोबी ६५','Gobi 65',100],
  ['पनीर मंचुरियन','Paneer Manchurian',140],
  ['सोया मंचुरियन','Soya Manchurian',110],
  ['मशरुम मंचुरियन','Mushroom Manchurian',100],
  ['गोबी मंचुरियन','Gobi Manchurian',110],
  ['पनीर चिल्ली','Chilli Paneer',150],
  ['नुडल्स','Noodles',70],
  ['हॉट अँड साऊर सूप','Hot & Sour Soup',70],
  ['टोमॅटो सूप','Tomato Soup',60],
  ['व्हेज मंचुरियन सूप','Veg Manchurian Soup',60]
 ]},
 {t:'चहा व थंड', e:'Tea & Cold', items:[
  ['चहा','Tea',10],
  ['कॉफी','Coffee',15],
  ['मलाई कॉफी','Malai Coffee',20],
  ['दुध','Milk',10],
  ['टिकाशन','Tikashan (word unclear)',5,true],
  ['मद्रु','Madru (word unclear)',30,true],
  ['लस्सी','Lassi',30],
  ['बासुदी','Basundi',40]
 ]},
 {t:'आईस्क्रिम', e:'Ice Cream', items:[
  ['आईस्क्रिम','Ice Cream',null,true]
 ]},
 {t:'मिक्स वेज डिश', e:'Mixed Veg', items:[
  ['व्हेज अंडाकरी','Veg Anda Curry',150],
  ['मिक्स व्हेज','Mix Veg',130],
  ['व्हेज कबाब मसाला','Veg Kabab Masala',150],
  ['व्हेज मराठा','Veg Maratha',140],
  ['व्हेज भुना','Veg Bhuna',120],
  ['व्हेज अंगार','Veg Angar',130],
  ['व्हेज हिद्राबादी','Veg Hyderabadi',130],
  ['व्हेज कढाई','Veg Kadhai',130],
  ['व्हेज चिलीमिली','Veg Chilli Milli',130],
  ['व्हेज हांडी','Veg Handi',130],
  ['व्हेज कादंबरी','Veg Kadambari',130]
 ]},
 {t:'पंजाबी डिश', e:'Punjabi', items:[
  ['स्टफ टोमॅटो','Stuffed Tomato',130],
  ['स्टफ शिमला','Stuffed Capsicum',120],
  ['आलु दम कश्मिरी','Aloo Dum Kashmiri',130]
 ]},
 {t:'टाईम पास', e:'Time Pass', items:[
  ['रोस्ट पापड','Roast Papad',15],
  ['मसाला पापड','Masala Papad',25],
  ['फ्राय पापड','Fry Papad',20],
  ['कांदा पकोडा','Kanda Pakoda (onion)',70],
  ['पनीर पकोडा','Paneer Pakoda',120],
  ['व्हेज पकोडा','Veg Pakoda',80],
  ['चिलीकट पकोडा','Chilli Cut Pakoda',70],
  ['फिंगर चिप्स मसाला','Finger Chips Masala',70],
  ['हवाई भेंडी','Hawai Bhendi',70],
  ['तवा शेंगदाना','Tawa Shengdana (peanut)',20],
  ['ग्रीन सलाड','Green Salad',40],
  ['सोयाबीन रोस्ट','Soya Roast',70],
  ['मटकी फ्राय','Matki Fry',80],
  ['काजू पकोडा','Kaju Pakoda',150],
  ['गोबी कंटकी','Gobi Kantaki',80],
  ['पनीर कंटकी','Paneer Kantaki',140]
 ]},
 {t:'तंदूरी रोटी', e:'Tandoori Roti', items:[
  ['तंदुर','Tandoor Roti',40],
  ['बटर रोटी','Butter Roti',45],
  ['बटर नान','Butter Naan',40],
  ['गार्लिक नान','Garlic Naan',50],
  ['प्लेन नान','Plain Naan',30],
  ['कश्मिरी नान','Kashmiri Naan',60]
 ]},
 {t:'रोटी', e:'Roti', items:[
  ['चपाती','Chapati',10],
  ['पराठा','Paratha',15],
  ['प्लेन रोटी','Plain Roti',15],
  ['ज्वार रोटी','Jowar Roti',15],
  ['बाजरी रोटी','Bajri Roti',20]
 ]},
 {t:'पराठे', e:'Parathe', items:[
  ['गोबी पराठा','Gobi Paratha',40],
  ['आलु पराठा','Aloo Paratha',40],
  ['मेथी पराठा','Methi Paratha',40],
  ['पनीर पराठा','Paneer Paratha',70]
 ]},
 {t:'महाराष्ट्रीयन डिश', e:'Maharashtrian', items:[
  ['बेसन','Besan',10,true],
  ['तवा बेसन','Tawa Besan',100],
  ['तडका बेसन','Tadka Besan',120],
  ['मेथी बेसन','Methi Besan',110],
  ['मुग ग्रेव','Mug Gravy',10,true],
  ['मेथी मटर','Methi Matar',10,true],
  ['मेथी लसूण','Methi Lasun',10,true],
  ['मेथी मसाला','Methi Masala',80],
  ['भेंडी ग्रेव','Bhendi Gravy',10,true],
  ['भेंडी मसाला','Bhendi Masala',80],
  ['वेंगन भरता','Brinjal Bharta',80],
  ['दाल तडका','Dal Tadka',110],
  ['राणी दाल फ्राय','Rani Dal Fry',90],
  ['जिरा दाल','Jeera Dal',80],
  ['राणी पालक','Rani Palak',80],
  ['पालक टमाटर','Palak Tomato',80],
  ['पालक बटर','Palak Butter',90],
  ['प्लेन पालक','Plain Palak',80],
  ['पालक मशरुम','Palak Mushroom',130],
  ['शेव टमाटर','Shev Tomato',130],
  ['मशरुम करी','Mushroom Curry',130],
  ['मशरुम मसाला','Mushroom Masala',140],
  ['मशरुम मेथी फ्राय','Mushroom Methi Fry',140],
  ['मटकी करी','Matki Curry',80],
  ['मटकी मसाला','Matki Masala',10,true],
  ['शेवगा करी','Shevga Curry (drumstick)',80],
  ['शेवगा मसाला','Shevga Masala',10,true],
  ['सोयाबीन करी','Soya Curry',80],
  ['सोयाबीन मसाला','Soya Masala',10,true],
  ['आलु मसाला','Aloo Masala',80],
  ['आलु मटर','Aloo Matar',80],
  ['जिरा आलु','Jeera Aloo',80],
  ['कोबी मसाला','Kobi Masala (cabbage)',80],
  ['व्हेज गावती हांडी','Veg Gavthi Handi',140]
 ]},
 {t:'राईस प्लेट', e:'Rice Plate', items:[
  ['राईस प्लेट','Rice Plate',100],
  ['स्पेशल राईस प्लेट','Special Rice Plate',150],
  ['शिवकृपा स्पेशल','Shivkripa Special',200]
 ]},
 {t:'राईस', e:'Rice', items:[
  ['जिरा राईस','Jeera Rice',90],
  ['प्लेन राईस','Plain Rice',70],
  ['पुलाव','Pulav',80],
  ['हाफ पुलाव','Half Pulav',40],
  ['व्हेज पुलाव','Veg Pulav',130],
  ['दाल खिचडी','Dal Khichdi',120],
  ['व्हेज बिर्याणी','Veg Biryani',120]
 ]},
 {t:'स्पेशल', e:'Specials', items:[
  ['शिवकृपा स्पेशल तिरंगा भाजी','Shivkripa Special Tiranga Bhaji',null,true],
  ['शिवकृपा स्पेशल दही धपाटे','Shivkripa Special Dahi Dhapate',40]
 ]}
];
