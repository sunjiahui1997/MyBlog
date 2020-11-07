<template>
  <div>
    <!-- <div class="context"> -->
    <!-- <div class="boke" v-for="blogs in blog" :key="blogs.title"> -->
    <!-- <div> -->
    <!-- <h3>博客标题：{{ blogs.title }}</h3> -->
    <!-- <div v-html="$options.filters.msg(blogs.contextvalue || '')"></div> -->
    <!-- </div> -->
    <!-- <div class="hh"> -->
    <!-- <router-link :to="'/backstage/edititem/' + blogs.id"> -->
    <!-- <button class="title">修改</button></router-link -->
    <!-- > -->
    <!-- <button class="title" @click="deletaBlog(blogs.id)">删除</button> -->
    <!-- </div> -->
    <!-- </div> -->
    <!-- </div> -->
    <table border="1">
      <caption>
        全部文章
      </caption>
      <thead>
        <tr id="thead">
          <th id="title1">标题</th>
          <th id="category">分类</th>
          <th id="time">发布时间</th>
          <th id="operate">操作</th>
          <th id="id">id</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="blogs in blog" :key="blogs.title">
          <td>{{ blogs.title }}</td>
          <td>{{ blogs.categories | cate }}</td>
          <td>{{ blogs.createdOn | day }}</td>
          <td>
            <router-link :to="'/backstage/edititem/' + blogs.id"
              ><button class="title">修改</button></router-link
            >
            <button class="title" @click="deletaBlog(blogs.id)">删除</button>
          </td>
          <td>{{ blogs.documentId }}</td>
        </tr>
      </tbody>
    </table>
    <button v-for="index in num" :key="index" @click="page(index)">
      {{ index }}
    </button>
  </div>
</template>

<script>
import * as fb from "../network/firebase";

export default {
  name: "editblog",
  data() {
    return {
      blog: [],
      blogcontext: "",
      docid: "",
      pageTotal: 1, //总页数
      rows: 1, //总条数
      num: 1, //
      pageNo: 1, //当前页码
      pageSize: 3 // 条数
    };
  },
  created() {
    fb.usersCollection
      .doc(fb.auth.currentUser.uid)
      .collection("blogs")
      .orderBy("createdOn", "desc")
      .limit(1)
      .get()
      .then(qunerySnapshot => {
        qunerySnapshot.forEach(doc => {
          if (doc.exists) {
            const id = doc.data().documentId;
            const x = Math.ceil(id / 3);
            this.num = x;
          } else {
            console.log("Error getting document:", error);
          }
        });
      });
  },
  filters: {
    simplify(val) {
      return val.slice(1, 45) + "...";
    },
    msg(msg) {
      return msg.slice(0, 50);
    },
    day(value) {
      const x = value.seconds * 1000;
      const now = new Date(x);
      var year = now.getFullYear();
      var month = now.getMonth() + 1;
      var day = now.getDate();
      var time = year + "-" + month + "-" + day;
      return time;
    },
    cate(val) {
      return val.join(" ");
    }
  },
  methods: {
    getList(index) {
      this.pageNo = index || this.pageNo;
      fb.usersCollection
        .doc(fb.auth.currentUser.uid)
        .collection("blogs")
        .orderBy("documentId", "asc")
        .where("documentId", "<=", this.pageSize * index)
        .where("documentId", ">=", (index - 1) * this.pageSize + 1)
        .limit(3)
        .get()
        .then(querySnapshot => {
          const queryblog = [];
          querySnapshot.forEach(doc => {
            const mydata = doc.data();
            mydata.id = doc.id;
            queryblog.push(mydata);
            // this.docid = queryblog
            this.blog = queryblog;
            // console.log(this.docid);
          });
        });
    },
    deletaBlog(id) {
      const r = confirm("确认删除？");
      if (r == true) {
        fb.usersCollection
          .doc(fb.auth.currentUser.uid)
          .collection("blogs")
          .doc(id)
          .delete()
          .then(() => {
            alert("删除成功！");
          })
          .catch(error => {
            console.log(error);
          });
      } else {
      }
    },
    page(index) {
      console.log(index);
      this.getList(index);
    }
  },
  mounted() {
    this.getList(1);
  }
};
</script>

<style scoped>
.boke {
  display: flex;
  color: #555;
  line-height: 1.2;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 -1px 0.5px 0 rgba(0, 0, 0, 0.09);
  border-radius: initial;
  padding: 10px 20px;
  margin-bottom: 10px;
}
.hh {
  display: flex;
  /* position: relative; */
  /* left: 200px; */
  /* top: 30px; */
  position: absolute;
  right: 10px;
  margin-top: 20px;
}
.title {
  /* display: inline-block; */
  float: left;
  text-align: center;
  margin-right: 10px;
  padding: 0;
  width: 40px;
  background-color: #f1f1f1;
  height: 30px;
  display: block;
  color: #000;
  /* padding: 8px 16px; */
  text-decoration: none;
  font-size: 10px;
}
.title:hover {
  background-color: #555;
  color: white;
}
a {
  text-decoration: none;
}
hr {
  position: relative;
  top: -10px;
  width: 500px;
}
.context {
  position: relative;
  top: -80px;
}
#title1 {
  width: 300px;
}
table {
  border-collapse: collapse;
}
#thead {
  background-color: antiquewhite;
}
#category {
  width: 170px;
}
#time {
  width: 170px;
}
#operate {
  width: 170px;
  display: flex;
}
td,
th,
tr {
  position: relative;
  padding: 9px 15px;
  min-height: 20px;
  line-height: 20px;
  font-size: 14px;
  border: 1px solid #e2e2e2;
}
</style>