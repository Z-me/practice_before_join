//NOTE: データベース連結部
var baseURL = "https://practice-9a9dd.firebaseio.com";

var firebase = new Firebase(baseURL);
var Messages = firebase.child('messages');

//要素変更時の処理
Messages.on('child_added',function(snapshot){
  var message = snapshot.val();
  console.log(message.from + ":" + message.body);
//  message.from = snapshot.name();
  app.data.messages.push(message);
})

//NOTE: 表示処理
var app = new Vue({
  el: '#app',
  data: {
    messages: [],
    newMessage: {
      from: 'テスト',
      body: 'テストｔ'
    }
  },
  methods: {
    addMessage: function(e){
      e.prventDefault();
      Messages.push(this.newMessage)
        this.newMessage.body = '';
    },
    changeMessage: function(e){
      console.log("chngeMessage:" + message.body);
    },
    deleteMessage: function(e){
      console.log("deleteMessage:"+this.messages[index].body);
      this.message.$remove(index);
    }
  }
})
