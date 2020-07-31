### gitlab 提交规范

[type] + ':' + subject

### type:

feature： 新功能（feature）
fix： 修补 bug
docs： 文档（documentation）
style： 格式（不影响代码运行的变动）
refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）
test： 增加测试
chore： 构建过程或辅助工具的变动

### subject

说明提交目的

1、确认禅道上的任务之后，点击开始任务
2、Git 切换到 dev 分支并同步
3、基于 dev 分支创建新分支：【feature-禅道任务 id】
4、新功能任务开发完成之后，本地存储【feature-禅道任务 id】分支
5、切换到 dev 分支并同步
6、合并【feature-禅道任务 id】分支到 dev 分支（如果有冲突，联系负责人）
7、推送本地 dev 分支到远程 dev 分支

开发分支（dev）功能修复操作流程：
1、本地切换到 dev 分支并同步
2、修复 bug
3、提交本地 dev 分支（如果禅道已安排该 bug 任务，提交时需要写上任务 id）
4、推送本地 dev 分支到远程 dev 分支

发布版本到测试线
1、本地切换到 dev 并同步
2、切换到 test 并同步
3、合并 dev 分支到 test 分支
4、推送代码，打 tag 推送到远程 （t1.0.xx）
5、Jenkins 构建（http://10.0.14.34:8080/job/hangjia-test/）

提交到预生产线
1、本地切换到 test 分支并同步
2、本地切换到 pre-pro 分支并同步
3、合并 test 分支到 pre-pro
4、解决冲突
7、推送 pre-pro 分支

提交到生产线
1、本地切换到 master 分支并同步
2、本地切换到 pre-pro 分支并同步
3、合并 pre-pro 分支到 master
4、解决冲突
7、推送 master 分支

线上 BUG 修复
1、基于 master 分支创建新分支（hotfix-XXX）
2、通过测试验证
3、合并 hotfix-XXX 分支到master
4、发布修复版本
5、根据实际情况决定是否需要合并 hotfix-XXX 到 dev、test、pre-pro 分支
