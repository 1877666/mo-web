import request from "@/uilts/request"

export const userLogin = (body) => request.post('/user/login',body)