/**
 * Created by wangdi on 6/2/17.
 */
let qiniu = require("qiniu");

//需要填写你的 Access Key 和 Secret Key
qiniu.conf.ACCESS_KEY = 'Access_Key';
qiniu.conf.SECRET_KEY = 'Secret_Key';

//要上传的空间
const bucket = 'wangdi';

//上传到七牛后保存的文件名
const key = 'my-nodejs-logo.png';

//构建上传策略函数
function uptoken(key) {
    let putPolicy = new qiniu.rs.PutPolicy(bucket+":"+key);
    return putPolicy.token();
}

//构造上传函数
export default function uploadFile(key, localFile) {
    let extra = new qiniu.io.PutExtra();
    qiniu.io.putFile(uptoken(key), key, localFile, extra, function(err, ret) {
        if(!err) {
            // 上传成功， 处理返回值
            console.log(ret.hash, ret.key, ret.persistentId);
        } else {
            // 上传失败， 处理返回代码
            console.log(err);
        }
    });
}