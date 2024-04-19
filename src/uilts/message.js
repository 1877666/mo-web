import { ElNotification } from 'element-plus'
let is = false
  export const message = (message, type = 'success', time=3000,dangerouslyUseHTMLString = false) => {

  ElNotification({
      message,
      type,
      duration: time,
      dangerouslyUseHTMLString
  })
}

export const lazyMessage = (message, type = 'success', time=3000,dangerouslyUseHTMLString = false) => {
if(is) return
is = true
ElNotification({
  message,
  type,
  duration: time,
  dangerouslyUseHTMLString
})
setTimeout(() => {
  is = false
},1000);
}