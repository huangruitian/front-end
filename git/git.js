/*
 * @Description: 
 * @Autor: hrt
 * @Date: 2019-08-22 15:45:00
 * @LastEditors: hrt
 * @LastEditTime: 2019-10-11 16:44:41
 */

`https://juejin.im/post/5d5d61e96fb9a06ace5254bd` //掘金的git好文

// git branch 查看分支 （git checkout -b xxx 新建分支并且切换）

// git checkout xxx  切换分支

// git merge --abort //取消一次合并

// 合并代码，合并之前一定要pull, git pull; 防止新增了代码继续冲突；合并前一定要检查错误！！！

// git merge origin/3115_memberManage （合了代码之后是在本地）origin/3206_loanManage

// git push (合了之后一定要push)

// git stash //暂存当前分支的代码

// git stash list//暂存列表

// stash apply stash@{1} //恢复某一个

// git stash drop stash@{0} //指定删除列表的某一项

// git stash clear //删除所有缓存的stash

// git checkout . // 点是所有，或者加具体某一文件

// git reset HEAD readme.txt //丢缓存区修改

// git checkout -- readme.txt //丢工作区修改

// $ git checkout -b 3206_loanManage origin/3206_loanManage //本地新建一个分支，映射到远程

// $ git remote update origin --prune //更新本地分支和远程分支的列表

// 新建本地分支映射到远程
// git branch R7.0_3500_roleManage
// git checkout R7.0_3500_roleManage
// git push origin R7.0_3500_roleManage:R7.0_3500_roleManage
// git push --set-upstream origin R7.0_3500_roleManagedd
// git pull

// 在gitlab上新建一个分支，然后拉xlusong的代码;
// 账号密码： huangruitian 576536299@qq.com

// ssh-keygen -t rsa -C "576536299@qq.com"

// git@120.79.228.145:hcadmin/hcredits-frontend.git




// git branch 查看分支 （git checkout -b xxx 新建分支并且切换）

// git checkout xxx  切换分支

// git merge --abort //取消一次合并

// 合并代码，合并之前一定要pull, git pull; 防止新增了代码继续冲突；合并前一定要检查错误！！！

// git merge origin/3115_memberManage （合了代码之后是在本地）origin/3206_loanManage

// git push (合了之后一定要push)

// git stash //暂存当前分支的代码

// git stash list//暂存列表

// stash apply stash@{1} //恢复某一个

// git stash drop stash@{0} //指定删除列表的某一项

// git stash clear //删除所有缓存的stash

// git checkout . // 点是所有，或者加具体某一文件

// git reset HEAD readme.txt //丢缓存区修改

// git checkout -- readme.txt //丢工作区修改

// $ git checkout -b 3206_loanManage origin/3206_loanManage //本地新建一个分支，映射到远程

// $ git remote update origin --prune //更新本地分支和远程分支的列表

// 合错代码回滚

// 本地分支会滚到指定版本

// git reset --hard <commit ID号>

// 推送到远程分支
// git push -f origin <分支>









