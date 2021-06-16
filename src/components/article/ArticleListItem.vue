<template>
  <div class="article-list-item" v-lazy-container="{ selector: 'img' }">
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
              v-html="article.title"></router-link>
        </h2>
        <p v-if="article.digest" class="item-digest text-wrap" v-html="article.digest"></p>
        <div class="item-tags">
                <span v-for="(tag, index) of article.categories" :key="tag.id">
                  {{ index != 0 ? '&nbsp/&nbsp' : '' }}
                  <router-link :to="{name: 'CateList', params: {id: tag.id}}">
                    {{ tag.cateName }}
                  </router-link>
                </span>
        </div>
        <el-row class="item-info">
          <el-col :span="14">
            <span class="mr-4">
            <i class="fa fa-user-o" aria-hidden="true"></i>&nbsp;
            {{ article.author.nickname }}
            </span>
            <span class="mr-4">
            <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>&nbsp;
            {{ article.praise }}
            </span>
            <span>
            <i class="fa fa-calendar-o" aria-hidden="true"></i>&nbsp;
            {{ article.createDate | dateFormat("yyyy-MM-DD") }}
            </span>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "ArticleListItem",
  data() {
    return {
      errorImgUrl: '/static/images/notfound.gif'
    }
  },
  props: {
    article: null
  }
}
</script>

<style scoped>
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

.item-digest {
  text-align: justify;
  font-size: 14px;
  margin: 10px 0;
  width: 100%;
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

.item-info {
  font-size: 13px;
  text-align: left;
  margin-top: 10px;
  color: var(--subFontColor);
}
</style>