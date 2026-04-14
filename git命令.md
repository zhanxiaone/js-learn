  
  准备工作：
        open git bash here
        要开加速器
  
----------------------------------------------------
  command：
          初次推送：
              git init    初始化仓库
              git add .    添加所有文件到暂存区
              git commit -m  'xxxxx'    提交到本地仓库  引号里的内容是必须写的


              git remote add origin 远程仓库地址

              git push -u origin main   //本地仓库上传到了github

          之后再次推送：

              # 直接使用 git push 即可
                git add .
                git commit -m "更新文件"
                git push  # ✅ 自动推送到 origin/main
-----------------------------------------------------
      

git remote -v     再次查看远程仓库地址
git status        查看当前状态




error: failed to push some refs to 'https://github.com/zhanxiaone/js-learn.git'

这是表示
远程仓库（GitHub）已经有一些文件（比如 README.md 或其他），而你的本地没有这些文件，所以 Git 拒绝推送。
# 拉取远程内容并合并（允许无关历史）
git pull origin main --allow-unrelated-histories

