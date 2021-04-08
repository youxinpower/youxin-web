<template>
  <el-container style="border: 1px solid #eee;margin-top: -59px;height: 800px">
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>xin.you</span>
    </el-header>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu  :unique-opened="true" :router="true">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>后台</template>
            <el-submenu index="1-1">
              <template slot="title">功能列表</template>
              <el-menu-item index="/test1">test1</el-menu-item>
              <el-menu-item index="/test2">test2</el-menu-item>
            </el-submenu>
          </el-submenu>
<!--          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>-->
        </el-menu>
      </el-aside>
      <el-main><router-view/></el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {

    }
  }
}
</script>

<style>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}
.el-aside {
  color: #333;
}
</style>
