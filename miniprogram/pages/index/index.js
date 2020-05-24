Page({
    data: {
    listData:[
     {"index":"01","store":"商场1","status":"已完成","fal":true},
     {"index":"02","store":"商场2","status":"进行中","fal":true},
     {"index":"03","store":"商场3","status":"延期","fal":true},
     {"index":"04","store":"商场4","status":"已完成","fal":true},
     {"index":"05","store":"商场5","status":"已完成","fal":true},
     {"index":"06","store":"商场6","status":"已完成","fal":true},
     {"index":"07","store":"商场7","status":"已完成","fal":true}
    ]
    },
    onLoad: function () {
        console.log('onLoad') 
        const db = wx.cloud.database({})
        const table = db.collection('t_task_info')
        table.add({
            data:{
                name:"store_test",
                status:"进行中"
            },
            success:function(res) {
                console.log(res._id)
            }
        })

        db.collection('t_task_info').get({
            success(res) {
                console.log(res.data)
            }
        })
    },
    onclick(e){
        let index=e.currentTarget.dataset["index"];
        let tpme=`listData[${index}].fal`;
        this.setData({
            [tpme]:false
        })
    }
    
   })