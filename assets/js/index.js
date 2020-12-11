/**
 * 
 * @authors cherish yii2 (cherish@cherish.pw)
 * @date    2020-12-10 16:48:28
 * @version v1.0
 * @description the core js of todolist project
 * 
 * ━━━━━━神兽出没━━━━━━
 * 　　   ┏┓　 ┏┓
 * 　┏━━━━┛┻━━━┛┻━━━┓
 * 　┃              ┃
 * 　┃       ━　    ┃
 * 　┃　  ┳┛ 　┗┳   ┃
 * 　┃              ┃
 * 　┃       ┻　    ┃
 * 　┃              ┃
 * 　┗━━━┓      ┏━━━┛ Code is far away from bugs with the animal protecting.
 *       ┃      ┃     神兽保佑,代码无bug。
 *       ┃      ┃
 *       ┃      ┗━━━┓
 *       ┃      　　┣┓
 *       ┃      　　┏┛
 *       ┗━┓┓┏━━┳┓┏━┛
 *     　  ┃┫┫　┃┫┫
 *     　  ┗┻┛　┗┻┛
 *
 * ━━━━━━感觉萌萌哒━━━━━━
 */

// 请根据考试说明文档中列出的需求进行作答
// 预祝各位顺利通过本次考试，see you next week！
// ...


$(function () {
    //添加
    const title = JSON.parse(window.localStorage.getItem($('#title').val()))
    window.localStorage.getItem('title',$('#title').val())
    $('#title').on('keydown', function (e) {
        
        console.log('title')
      e = e || window.event
     
      let code = e.keyCode || e.which
      if (code === 13) {
        let value = this.value.trim()
        if (!value) return
        e.preventDefault()
        let str = `
        <li>
          <input type="checkbox" />
          <p onclick="edit(${$('ol').children().length + 1})">${$('#title').val()}</p>
          <a href="javascript:remove(${$('ol').children().length + 1})">-</a>
        </li>
      `
        let span = `
        <span id="todocount">${ $('ol').children().length + 1}</span>
        `
        $('ol').append(str)
        $('#title').val('')
        $('.a').append(span)
        a()
      }
      window.localStorage.setItem('title', JSON.stringify($('#title').val()))
    })
    // 删除事件
    a()
    function a(){
    $('#todolist li a').on('click',function(){
        $(this).parent().remove()
    })
    $('li input').on('click',function(){
       if($(this).attr('checked')){
           $(this).removeAttr('checked')
           $('#todolist').append($(this).parent())
           b()
           c()
        }
       else{
        $(this).attr('checked','abc')
        $('#donelist').append($(this).parent())
           b()
           c()
       }
    })
    function b(){
      for(var i = 0;i<$('#todolist li').length;i++){
                 let a = i
            }
               $('#todocount').text(i-0)
                }
    function c(){
      for(var i = 0;i<$('#donelist li').length;i++){
                  let a = i
                    }
                $('#donecount').text(i-0)
                }
            }  
  })