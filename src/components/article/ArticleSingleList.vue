<template>
  <div class="list-content">
  <ul class="article-ul">
    <li v-for="(article, index) of articleList" :key="index">
      <div class="article-item">
        <el-row>
          <el-col v-if="article.coverImg" :sm="8" class="item-left">
            <router-link
                :to="{ name: 'ArticlePreview', params: { id: article.id } }"
            >
              <el-image :src="article.coverImg" fit="cover">
                <div slot="error">
                  <el-image :src="errorImgUrl" fit="cover"></el-image>
                </div>
              </el-image>
            </router-link>
          </el-col>
          <el-col :sm="article.coverImg ? 16 : 24" class="item-right">
            <h2>
              <router-link
                  class="item-title"
                  :to="{ name: 'ArticlePreview', params: { id: article.id } }"
              >
                {{ article.title }}
              </router-link>
            </h2>
            <p v-if="article.digest" class="item-text text-wrap text-truncate">
              {{ article.digest }}
            </p>
            <div class="item-tags">
                <span v-for="(tag, index) of article.categories" :key="tag.id">
                  {{ index != 0 ? '&nbsp/&nbsp' : '' }}
                  <router-link :to="{name: 'CateList', params: {id: tag.id}}">
                    {{ tag.cateName }}
                  </router-link>
                </span>
            </div>
            <el-row class="item-date">
              <el-col :span="7">
                <i class="fa fa-calendar-o" aria-hidden="true"></i>&nbsp;
                {{ article.createDate | dateFormat("yyyy-MM-DD") }}
              </el-col>
              <el-col :span="6">
                <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>&nbsp;
                {{ article.praise }}
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </li>
  </ul>
  </div>
</template>

<script>
export default {
  name: "ArticleSingleList",
  data() {
    return {
      errorImgUrl: '/static/images/notfound.gif'
    }
  },
  props: {
    articleList: Array
  }
}
</script>

<style scoped>
.list-content {
  width: 100%;
  background-color: var(--bgColor);
}
.article-ul {
  list-style: none;
  width: 100%;
  padding: 0;
}

.article-ul li {
  padding: 20px 20px;
  border-bottom: 1px solid var(--borderColor);
}

.item-left >>> .el-image {
  width: 100%;
  height: 150px;
  transition: all 0.5s;
  opacity: 1;
  overflow: hidden;
}

.item-left >>> img {
  transition: all 0.5s;
}

.item-left >>> img:hover {
  opacity: 0.8;
  transform: scale(1.2);
}

.item-right {
  padding-left: 2%;
}

.item-title {
  display: block;
  text-align: left;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  color: var(--articleTitle);
  transition: all 0.5s;
  overflow: hidden;
}

.item-title:hover {
  color: var(--mainThemeColor);
}

.item-text {
  text-align: justify;
  font-size: 13px;
  margin: 10px 0;
  height: 60px;
  overflow: hidden;
  font-weight: 300;
  color: var(--subFontColor);
}

.item-tags {
  margin-top: 10px;
  text-align: left;
}

.item-tags span, a {
  color: #B2BAC2;
  font-size: 14px;
  text-decoration: none;
}

.item-tags a:hover {
  color: var(--mainThemeColor);
}

.item-date {
  font-weight: 300;
  font-size: 12px;
  text-align: left;
  margin-top: 10px;
  color: var(--dateColor);
}
</style>
