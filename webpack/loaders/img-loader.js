function loader(buffer){ // buffer 是二进制数据
   console.log("文件大小是（字节）：", buffer.byteLength)
   var content = getBase64(buffer)
   console.log(content)
   return `module.exports = \`${content}\``
}
loader.raw = true //该loader处理的是原始数据

module.exports = loader;

function getBase64(buffer){
   return "data:image/png;base64," + buffer.toString("base64")
}