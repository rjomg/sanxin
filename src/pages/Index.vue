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
          <el-radio-group v-model="form.resource">
            <el-radio label="开启"></el-radio>
            <el-radio label="关闭"></el-radio>
          </el-radio-group>
        </el-form-item>


        <el-form-item label="店铺LOGO">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="即时配送">
          <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="活动性质">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
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
        resourceNav: '', // 开启导航条
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        
        
      }
    }
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
