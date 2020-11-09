<template>
  <div>
    <div class="context">
      <div v-if="!submmited">
        <div class="editBlog">编辑博客</div>
        <div class="title">
          标题：
          <input
            id="nihao"
            type="text"
            placeholder="title"
            v-model="blog.title"
          />
        </div>
        <mavon-editor v-model="blog.context" @change="change"></mavon-editor>
        <div class="checkbox">
          <div class="title1">分类 ：</div>
          <tr v-for="(item, index) in cate" :key="item.name">
            <td>
              <input
                type="checkbox"
                :id="index"
                :value="item.name"
                v-model="blog.categories"
              />
            </td>
            <td>{{ item.name }}</td>
          </tr>
        </div>

        <button class="butcommit" @click.prevent="commitBlog">提交博客</button>
      </div>

      <div class="commited" v-if="submmited">
        博客提交成功<button class="butcommit" @click="sub">
          返回
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import * as fb from "../network/firebase";

export default {
  name: "commitblogs",
  data() {
    return {
      blog: {
        title: "",
        context: "",
        categories: []
      },
      html: "",
      submmited: false,
      docId: 1,
      cate: ""
    };
  },
  created() {
    fb.blogsCollection
      .orderBy("createdOn", "desc")
      .limit(1)
      .get()
      .then(qunerySnapshot => {
        qunerySnapshot.forEach(doc => {
          if (doc.exists) {
            const id = doc.data().documentId;
            this.docId = parseInt(id) + 1;
          } else {
            console.log("Error getting document:", error);
          }
        });
      });
    this.getCate();
  },

  methods: {
    change(value, render) {
      this.html = render;
      // console.log(this.html);
    },
    commitBlog() {
      fb.blogsCollection
        // .doc(fb.auth.currentUser.uid)
        // .collection("blogs")
        .add({
          createdOn: new Date(),
          title: this.blog.title,
          context: this.blog.context,
          contextvalue: this.html,
          categories: this.blog.categories,
          documentId: this.docId,
          userId: fb.auth.currentUser.uid,
          userName: this.$store.state.userProfile.name
        });
      this.submmited = true;
      console.log(this.$store.state.userProfile.name);
      // this.blog = "";
    },
    sub() {
      this.$router.push("/backstage/editblog");
    },
    getCate() {
      fb.categoryCollection
        .orderBy("date")
        .get()
        .then(qunerySnapshot => {
          const a = [];
          qunerySnapshot.forEach(doc => {
            a.push(doc.data());
            // console.log(a);
            this.cate = a;
            // console.log(this.cate);
          });
        });
    }
  }
};
</script>

<style scoped>
.context {
  position: relative;
  top: -60px;
}
.editBlog {
  display: inline-block;
  font-size: 40px;
  line-height: 70px;
  margin: 20px 0;
  padding-left: 30px;
}
.title {
  display: block;
  margin-bottom: 20px;
  margin-left: 30px;
  font-size: 20px;
  /* font-family: 'Times New Roman', Times, serif;   */
}
input {
  box-sizing: border-box;
  height: 30px;
  width: 200px;
  line-height: 30px;
  border-radius: 6px;
  outline: none;
}
.input {
  box-sizing: border-box;
  height: 30px;
  width: 200px;
  line-height: 30px;
  border-radius: 6px;
  outline: none;
}
.butcommit {
  display: inline-block;
  color: rgb(8, 8, 8);
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  margin-left: 70%;
  text-decoration: none;
  border: 1px solid #aaa;
  border-radius: 5px;
  background-color: #f1f1f1;
  white-space: nowrap;
}
.butcommit:hover {
  cursor: pointer;
  background-color: black;
  color: white;
}
.commited {
  position: relative;
  top: 200px;
  display: block;
}
input {
  width: 30px;
  height: 30px;
}
label {
  padding-right: 5px;
}
#nihao {
  width: 370px;
  border-radius: 10px;
  outline: none;
  padding: 5px 15px;
  border: 1px gray solid;
}
#nihao:focus {
  border: 1px solid slategray;
}
.checkbox {
  margin-top: 30px;
  display: flex;
}
.title1 {
  line-height: 3;
}
</style>
