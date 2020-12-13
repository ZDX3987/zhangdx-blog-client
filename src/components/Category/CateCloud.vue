<template>
  <div class="cloud-content">
    <svg :height='height' @mousemove='listener($event)'>
      <router-link :to="{name: 'CateList', params: {id: tag.id}}" v-for='tag in cateCloudList' :key="tag.id">
        <text :x='tag.x' :y='tag.y' :font-size='20 * (600/(600-tag.z))' :fill-opacity='((400+tag.z)/600)'>
          {{ tag.cateName }}
        </text>
      </router-link>
    </svg>
  </div>
</template>

<script>
export default {
  name: "CateCloud",
  data() {
    return {
      width: 300,
      height: 500,
      tagsNum: 20,
      RADIUS: 200,
      speedX: Math.PI / 360,
      speedY: Math.PI / 360,
      tags: [],
      cateCloudList: [],
    }
  },
  computed: {
    CX() {
      return this.width / 2;
    },
    CY() {
      return this.height / 2;
    }
  },
  created() {//初始化标签位置
    this.initCategories();
  },
  mounted() {//使球开始旋转
    setInterval(() => {
      this.rotateX(this.speedX);
      this.rotateY(this.speedY);
    }, 17)
  },
  methods: {
    initCategories() {
      this.$api.categoryApi.getAllCategory().then(res => {
        this.genCateCloud(res.data);
      }).catch(error => this.$message.error("标签云加载失败"))
    },
    genCateCloud(categories) {
      let length = categories.length;
      let tags = [];
      for (let i = 0; i < length; i++) {
        let tag = categories[i];
        let k = -1 + (2 * (i + 1) - 1) / length;
        let a = Math.acos(k);
        let b = a * Math.sqrt(length * Math.PI);
        tag.x = this.CX + this.RADIUS * Math.sin(a) * Math.cos(b);
        tag.y = this.CY + this.RADIUS * Math.sin(a) * Math.sin(b);
        tag.z = this.RADIUS * Math.cos(a);
        tag.href = '#';
        tags.push(tag);
      }
      this.cateCloudList = tags;
    },
    rotateX(angleX) {
      var cos = Math.cos(angleX);
      var sin = Math.sin(angleX);
      for (let tag of this.cateCloudList) {
        var y1 = (tag.y - this.CY) * cos - tag.z * sin + this.CY;
        var z1 = tag.z * cos + (tag.y - this.CY) * sin;
        tag.y = y1;
        tag.z = z1;
      }
    },
    rotateY(angleY) {
      var cos = Math.cos(angleY);
      var sin = Math.sin(angleY);
      for (let tag of this.cateCloudList) {
        var x1 = (tag.x - this.CX) * cos - tag.z * sin + this.CX;
        var z1 = tag.z * cos + (tag.x - this.CX) * sin;
        tag.x = x1;
        tag.z = z1;
      }
    },
    listener(event) {//响应鼠标移动
      var x = event.clientX - this.CX;
      var y = event.clientY - this.CY;
      this.speedX = x * 0.0001 > 0 ? Math.min(this.RADIUS * 0.00002, x * 0.0001) : Math.max(-this.RADIUS * 0.00002, x * 0.0001);
      this.speedY = y * 0.0001 > 0 ? Math.min(this.RADIUS * 0.00002, y * 0.0001) : Math.max(-this.RADIUS * 0.00002, y * 0.0001);
    }
  }
}
</script>

<style scoped>
.cloud-content {
  width: 96%;
  height: 500px;
  background-color: #fff;
  margin-left: 4%;
}

svg {
  width: 94%;
}
</style>
