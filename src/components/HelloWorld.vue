<template>
  <div style="margin-left: 100px">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="账号">
        <el-input v-model="formInline.user" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item label="密码">
          <el-input v-model="formInline.user" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      formInline: {
        user: '',
        region: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$router.push("/HomePage")
    }
  }
}
</script>
