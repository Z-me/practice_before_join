var backets = new Vue({
  el: '#Shopping_backet',
  data:{
    items : [
      {
        name:"リンゴの腕時計",
        value:23770,
        imageURL:"http://store.storeimages.cdn-apple.com/8561/as-images.apple.com/is/image/AppleInc/aos/published/images/2/up/2up/ceramic/2up-ceramic-sport-cloud-select?wid=470&hei=556&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1473703206368",
        stock:200
      }
    ],
    newItems:{
      name: '',
      value:'',
      imageURL: '',
      stock: '',
    },
    methods:{
      
    }
  }
});