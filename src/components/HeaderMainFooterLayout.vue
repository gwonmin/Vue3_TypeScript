<template>
  <el-container>
    <el-header>
      <slot name="header"></slot>
    </el-header>
    <el-main>
      <slot name="main"></slot>
    </el-main>
    <el-footer>
      <slot name="footer"></slot>
    </el-footer>
  </el-container>
</template>
