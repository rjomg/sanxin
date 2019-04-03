<template>
  <div class="containerbox">
    <!-- 当前位置 -->
    <current-location :info="currentInfo"></current-location>
    <!-- 主窗口 -->
    <div class="wrap">
      <el-form ref="form" :label-position="left" :model="form" label-width="200px">
        <el-form-item label="店铺名称">
          <el-col :span="12">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="店铺LOGO">
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <el-upload
                class="upload-demo"
                action="/assets/images/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                :on-exceed="handleExceed"
                :file-list="form.logoList"
                list-type="picture"
                limit="1">
                <el-button size="small" type="primary">选择图片</el-button>
                <div slot="tip" class="el-upload__tip">正方形图片</div>
              </el-upload>
            </div>
          </el-col>
        </el-form-item>
        <el-form-item label="商铺简介">
          <el-col :span="12">
            <el-input type="textarea" v-model="form.desc" :autosize="{ minRows: 5, maxRows: 30}"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="店铺海报">
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <el-upload
                class="upload-demo"
                action="/assets/images/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="form.bannerList"
                list-type="picture">
                <el-button size="small" type="primary">选择图片</el-button>
                <div slot="tip" class="el-upload__tip">店铺海报，建议尺寸690*690</div>
              </el-upload>
            </div>
          </el-col>
        </el-form-item>
        <el-form-item label="所在地区">
          <el-col :span="12">
            <el-input v-model="form.area"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="详细地址">
          <el-col :span="12">
            <el-input v-model="form.address"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="店铺客服">
          <el-col :span="12">
            <el-input v-model="form.address"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="开启导航条">
          <el-radio-group v-model="form.resourceNav">
            <el-radio label="1">开启</el-radio>
            <el-radio label="2">关闭</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="店铺二维码">
          <el-row :gutter="20">
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <el-upload
                  class="upload-demo"
                  action="/assets/images/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :file-list="form.QRCode"
                  list-type="picture">
                  <el-button size="small" type="primary">选择图片</el-button>
                  <div slot="tip" class="el-upload__tip">正方形图片</div>
                </el-upload>
              </div>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="开店时间">
          <el-col :span="12">
            <el-input v-model="form.openTime"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <!-- <el-button>取消</el-button> -->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import CurrentLocation from '@/components/CurrentLocation' // 当前位置

export default {
  name: 'Index',
  components: {
    // 组件注册
    CurrentLocation
  },
  data () {
    return {
      currentInfo: {
        'name': '当前位置：',
        'title': '首页'
      },
      input: '',
      form: {
        name: '', // 店铺名称
        // LOGO图片
        logoList: [
          {
            name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          }
        ],
        desc: '', // 商铺介绍
        bannerList: '', // 店铺海报
        area: '', // 所在地区
        address: '', // 详细地址
        memberService: '', // 店铺客服
        resourceNav: '1', // 开启导航条
        QRCode: '', // 店铺二维码
        openTime: '' // 开店时间
      }
    }
  },
  methods: {
    // 表单提交
    onSubmit () {
      console.log('submit!')
    },
    handleRemove (file, fileList) {
      console.log(file)
      console.log(fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.upload-demo .el-upload-list__item {float: left !important;}
</style>
