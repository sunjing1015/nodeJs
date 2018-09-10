var sd=require("silly-datetime")
var time=sd.format(new Date())
console.log(time);

//npm   install  silly-datetime    --save

/*
 * install=>i
 *
 * npm  install   安装项目依赖
 * npm  init    初始化文件  出现package.json
 * dependencies   生产环境   线上需要运行的包   --save==-S   会下载到生产环境里
 * devdependencies   开发环境   开发是需要用到的包     --save-dev ==-D   会下载到开发环境里
 * */