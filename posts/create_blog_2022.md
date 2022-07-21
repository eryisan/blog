---
title: 用Deno Deploy部署属于自己的博客Blog
publish_date: 2022-07-18
---
> [deno_blog官方仓库](https://github.com/denoland/deno_blog)

- [Deno Deploy部署博客网站Blog](#deno-deploy部署博客网站blog)
  - [环境配置：](#环境配置)
    - [安装Deno](#安装deno)
    - [安装VSCode](#安装vscode)
      - [安装VSCode插件Deno](#安装vscode插件deno)
    - [安装Git](#安装git)
  - [博客初始化](#博客初始化)
    - [初始化博客](#初始化博客)
    - [启动本地服务器](#启动本地服务器)
    - [打开浏览器输入](#打开浏览器输入)
  - [配置自己的博客信息](#配置自己的博客信息)
    - [博客配置文件](#博客配置文件)
    - [配置自己的信息](#配置自己的信息)
  - [更新博客](#更新博客)
    - [新增帖子](#新增帖子)
    - [帖子格式](#帖子格式)
    - [修改帖子](#修改帖子)
  - [GitHub存放代码](#github存放代码)
    - [登录GitHub](#登录github)
    - [新建代码仓库](#新建代码仓库)
    - [采用Git上传本地代码到GitHub](#采用git上传本地代码到github)
    - [初始化本地电脑代码仓库](#初始化本地电脑代码仓库)
    - [本地电脑代码上传到GitHub代码仓库](#本地电脑代码上传到github代码仓库)
  - [部署到自己的网站](#部署到自己的网站)
    - [登录Deno Deploy](#登录deno-deploy)
    - [部署GitHub仓库代码到Deno Deploy](#部署github仓库代码到deno-deploy)
    - [选择GitHub仓库](#选择github仓库)
  - [后续更新博客](#后续更新博客)

# Deno Deploy部署博客网站Blog

## 环境配置：

### 安装Deno
[PowerShell（Windows）](https://deno.land/#installation)
```
iwr https://deno.land/install.ps1 -useb | iex
```  
<br>

### 安装VSCode
[VSCode](https://code.visualstudio.com/)  
<br>

#### 安装VSCode插件Deno
[vscode_deno](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno)  
<br>

### 安装Git
[Git](https://git-scm.com/downloads)  
<br>

<hr>

## 博客初始化

### 初始化博客
```
deno run -r --allow-read --allow-write https://deno.land/x/blog/init.ts ./directory/for/blog/
```  
<br>

### 启动本地服务器
`./directory/for/blog/`目录下启动命令
```
deno task dev
```  
<br>

### 打开浏览器输入
``` 
localhost:8000
```
这个时候正常是能看到博客Blog页面了  
<br>

<hr>

## 配置自己的博客信息  

### 博客配置文件
`./directory/for/blog/` 文件里包含一个`main.ts`文件  
<br>


### 配置自己的信息
```
blog({
  author: "Dino",
  title: "My Blog",
  description: "The blog description.",
  avatar: "avatar.png",
  avatarClass: "rounded-full",
  links: [
    { title: "Email", url: "mailto:bot@deno.com" },
    { title: "GitHub", url: "https://github.com/denobot" },
    { title: "Twitter", url: "https://twitter.com/denobot" },
  ],
  favicon: "favicon.ico",
});
```

- **author**  :  作者
- **title**   :  网站名字
- **description**  :   简介
- **avatar**  :   头像
- **links**  :  社交媒体链接
- **favicon**   :  网站logo

头像和网站logo图像文件直接存放在`./directory/for/blog/`目录下\
修改成功后，正常能看到浏览器`localhost:8000`博客页面效果  
<br>

<hr>

## 更新博客

### 新增帖子
`./directory/for/blog/posts`目录下新增文件后缀名为`.md`格式\
采用[markdown语法](https://docs.github.com/cn/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)写作\
如新增第一篇帖子`first_post.md`  
<br>


### 帖子格式
```
---
title: 第一篇帖子
publish_date: 2022-07-18
---
开始写作.....
```  
<br>

### 修改帖子
直接在`first_post.md`文件里修改文字即可
```
---
title: 第一篇帖子
publish_date: 2022-07-18
---
重新写作.....

```
前四行帖子标题title和帖子发布日期，不建议忽略或删除。  
<br>

<hr>

## GitHub存放代码

### 登录GitHub

[GitHub](https://github.com/)  
<br>  

### 新建代码仓库

GitHub右上角头像左边**+**号`New repository`新建代码仓库\
`Repository name*`: blog\
然后点击`Create repository`创建代码仓库  
<br>

### 采用Git上传本地代码到GitHub

[Git 原理入门 - 阮一峰](https://www.ruanyifeng.com/blog/2018/10/git-internals.html)  
<br>

### 初始化本地电脑代码仓库

回到电脑`./directory/for/blog/`目录下，按顺序运行命令

```
git init
```

```
git add .
```

```
git commit -m 'blog init'
```  
<br> 

### 本地电脑代码上传到GitHub代码仓库

- [x] 完成初始化本地电脑代码仓库\
继续在`./directory/for/blog/`目录下，按顺序运行命令

```
git branch -M main
```

```
git remote add origin https://github.com/****/blog.git
```
后面这个`https://github.com/***/blog.git`链接更换成自己的
![20220718110105594.png](https://tva1.sinaimg.cn/large/007mygikgy1h4awf0df2pj31ao0epn5k.jpg)

```
git push -u origin main
```
做完这一步刷新一下GitHub仓库，\正常是能看到`./directory/for/blog/`里面的文件了
![20220718110604505.png](https://tva1.sinaimg.cn/mw690/007mygikgy1h4awi45npxj30yj0ga44d.jpg)  
<br>

<hr>

## 部署到自己的网站  

### 登录Deno Deploy
[Deno Deploy](https://deno.com/deploy)\
Sign in用**GitHub账号**登录  
<br>

### 部署GitHub仓库代码到Deno Deploy
登录后点击`+ New Project`新增项目  
<br>

### 选择GitHub仓库
![20220718111114542.png](https://tva1.sinaimg.cn/mw690/007mygikgy1h4awng6pzkj30lz0irtc0.jpg)

1. **Select GitHub repository**: 选择Github账号下的blog仓库代码
2. **Select production branch**: 选择main
3. **Project name**: 网站前缀名字(英文)

点击`Link`后，部署成功后点击`View`查看自己的博客网站\
网址格式: `***.deno.dev`  
<br>

<hr>

## 后续更新博客
- 本地代码编辑使用VSCode
- 代码上传到GitHub使用Git
- GitHub状态更新，博客网站自动部署更新\

全文完毕











