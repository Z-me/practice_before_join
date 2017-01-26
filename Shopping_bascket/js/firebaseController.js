
//接続処理
var baseURL = 'https://practice-9a9dd.firebaseio.com';
var firebase = new Firebase(baseURL);
var DB = firebase.child('shopping');

//商品追加
DB.on('child_added',function(datas){
  var data = datas.val();
  data.id = datas.key();
  item.items.push(data);
  baskets.items.push(data); //確認用
  console.log(item.items);
});

//商品変更
DB.on('child_changed',function(datas){
  var id = datas.name();
  item.data.items.some(function(item){
    if(item.id === id){
      item.number = datas.val().number;
      return true;
    }
  })
});

var item = new Vue({
  el: "#Shopping",
  data:{
    items:[
      {
        name:"リンゴの腕時計",
        value:23770,
        imageURL:"http://store.storeimages.cdn-apple.com/8561/as-images.apple.com/is/image/AppleInc/aos/published/images/2/up/2up/ceramic/2up-ceramic-sport-cloud-select?wid=470&hei=556&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1473703206368",
        number:1
      }
    ],
    newItem:{
        name:"",
        value:"",
        imageURL:"",
        number:''
    },
    methods:{
      //TODO: 商品追加
      addItem: function(data){
        
      },
      //TODO: 商品変更
      changeItem: function(data){
      
      },
      //TODO: 商品削除
      deleteItem: function(data){
        
      }
    }
  }
});

//NOTE: 買い物かご
var baskets = new Vue({
  el: '#Shopping_basket',
  data:{
    user:"テストユーザ",
    items : [
      {
        name:"リンゴの腕時計",
        value:23770,
        imageURL:"http://store.storeimages.cdn-apple.com/8561/as-images.apple.com/is/image/AppleInc/aos/published/images/2/up/2up/ceramic/2up-ceramic-sport-cloud-select?wid=470&hei=556&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1473703206368",
        number:1
      }
    ],
    newItems:{
      name: '',
      value:'',
      imageURL: '',
      number: '',
    },
    methods:{
      //TODO: 購入物品登録
      addBasket: function(data){
        
      },
      //TODO: 購入物品変更
      changeBasket: function(data){
        
      },
      //TODO: 購入物品削除
      deleteBasket: function(data){
        
      }
    }
  }
});

//NOTE: ログイン
var auth = new Vue({
  el: "#Auth",
  data:{
    username:"test",
    password:"test"
  },
  methods:{
    //TODO: loginメソッド
    logIn: function(){
      
    }
  }
});

