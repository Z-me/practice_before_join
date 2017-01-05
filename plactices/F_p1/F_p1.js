//NOTE: データベース連結部
var baseURL = "https://practice-9a9dd.firebaseio.com";

var Messages = new Firebase(baseURL + 'messages');

//要素変更時の処理
Messages.on('child_added',function(){
  var message = snapshot.val();
  message.id = snapshot.name();
  app.message.push(message);
})

//NOTE: 表示処理
var app = new Vue({
  el: '#app',
  data: {
    messages: [],
    newMessage: {
      from: '',
      message: ''
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
