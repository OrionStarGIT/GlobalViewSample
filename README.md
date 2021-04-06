# GlobalViewSample
robot app global view instructions for use
# GlobalViewSample
## 1.目录结构
├─app 业务代码，每个文件夹对应一个功能组件的使用示例       
│  ├─chat 聊天框   
│  │  ├─ChatModel.ts 业务模块的数据模型  
│  │  ├─ChatScreen.ts 业务模块的UI显示  
│  │  ├─ChatViewModel.ts 负责模块的业务逻辑控制  
│  ├─recognize 引导框  
│  ├─App.js App的主界面  
│  ├─AppDebug.js App的调试主界面（调试的时候启动OPK不带参数，可以在这里模拟数据）   
│  ├─MainView.tsx 功能目录界面  
├─dist OPK存储目录（初始可能不存在，打包OPK后自动创建）  
├─extraResource 文件资源目录（例如：音视频）  
├─img 图片资源目录  
├─node_modules  App依赖的库（初始可能不存在，可在项目目录下执行npm install，会自动创建）  
├─.npmrc npm账号配置  
├─app.json App的基本配置文件（不能修改）  
├─index.js 程序入口  
├─package.json App配置及依赖库管理
## 2. 环境配置
机器人应用的开发需要依赖Android开发环境、Nodejs环境 ( 版本需要Node10以上且不高于Node13 ) 、脚手架工具及IDE工具，详细配置请参考以下文档。
Android开发环境
### 2.1 Android开发环境
机器人系统是基于Android定制开发，所以我们在开发机器人应用的时候需要配置Android开发环境，具体Android开发环境配置，请参考 : https://developer.android.com/ 。
### 2.2 Nodejs配置
机器人应用的编译及调试工具是基于node开发而成，必须配置Node.js环境才能正常使用。  
**注意：nodejs的版本不能高于V13。**
-  Windows  
   安装包下载地址：https://nodejs.org/dist/v12.10.0/   
   请在以上地址选择相应的版本进行下载：  
   32位系统请下载 node-v12.10.0-x86.msi  
   64位系统请下载 node-v12.10.0-x64.msi  
   下载完成后双击进行安装即可。
-  MacOS  
   安装包下载地址：https://nodejs.org/dist/v12.10.0/  
   请在以上地址下载MacOS安装包：node-v12.10.0.pkg  
   下载完成后双击进行安装即可。
-  Linux  
   下载解压：
~~~~
    # wget https://nodejs.org/dist/v12.10.0/node-v12.10.0-linux-x64.tar.gz    // 下载
    # tar xf node-v12.10.0-linux-x64.tar.xz                                   // 解压
    # cd node-v12.10.0--linux-x64/                                            // 进入解压目录
    # ./bin/node -v                                                           // 执行node命令 查看版本
~~~~
&nbsp; &nbsp; &nbsp; &nbsp;解压文件的 bin 目录下包含了 node、npm 等命令，可以使用 ln 命令来设置软连接：
~~~~
    # ln -s {解压路径}/nodejs/bin/npm   /usr/local/bin/ 
    # ln -s {解压路径}/nodejs/bin/node   /usr/local/bin/
~~~~
### 2.3 安装脚手架工具
在终端中执行npm login命令：
~~~~
npm login --registry=https://npm.ainirobot.com/repository/eve-group/
~~~~
依次输入用户名、密码及邮箱进行登录。  
在终端中执行npm install命令：
~~~~
npm install -g orionos-sh --registry=https://npm.ainirobot.com/repository/eve-group/
~~~~
### 2.4 安装IDE
机器人应用的开发是使用JavaScript语言进行开发，为了能更方便的开发调试，我们推荐您使用 WebStorm 或 Visual Studio Code 来进行机器人应用的开发，您可直接在官网下载安装。
## 3.运行程序
连接机器人，执行如下命令：
~~~~
orionos-sh debug
~~~~
### 4.更多帮助内容请查看官网文档
http://orionbase.cn/