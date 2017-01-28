
//接続処理
var baseURL = 'https://practice-9a9dd.firebaseio.com';
var firebase = new Firebase(baseURL);
var DB = firebase.child('shopping');
var Basket = firebase.child('bascket');

//商品追加
DB.on('child_added',function(datas){
  var data = datas.val();
  data.id = datas.key();
  item.items.push(data);
});

//商品変更
DB.on('child_changed',function(datas){
  var id = datas.key();
  item.items.some(function(item){
    if(item.id === id){
      item.number = datas.val().number;
      return true;
    }
  })
});

//商品削除
DB.on('child_removed',function(datas){
  
});

//NOTE: 買い物かご追加
Basket.on('child_added',function(datas){
  var data = datas.val();
  data.id = datas.key();
  item.baskets.push(data);
  item.totalValue += data.buy*data.value;
});


var item = new Vue({
  el: "#Shopping",
  data:{
    items:[],
    newItem:{
        name:"",
        value:"",
        imageURL:"",
        number:'',
        buy:0
    },
    baskets:[],
    totalValue:0
  },
  methods: {
    //NOTE: 商品追加
    addItem: function () {
      DB.push(this.newItem);
      console.table(this.newItem);    
    },
    //NOTE: 商品削除
    deleteItem: function(data){
      if(confirm("本当に「"+data.name+"」を削除しますか？")){
        console.log(data.id);
        DB.child(data.id).remove();
        var index = this.items.indexOf(data);
        this.items.splice(index,1);
      }
    },
    //NOTE: 商品を買い物かごに追加
    pushBasket: function(data){
      if(data.buy==0)
        return alert("購入個数を入力して下さい");
      console.log(data);
//      this.baskets.push(data);
      delete data.number;
      Basket.push(data);
      for(var i in this.items){
        if(data['id']==this.items[i]['id']){
          this.items[i]['number'] -= data['buy'];
          //NOTE:DBでの在庫変更
          DB.child(this.items[i]['id']).child('number').set(this.items[i]['number']);
        }
      }
    },
    
    
    
  }
});