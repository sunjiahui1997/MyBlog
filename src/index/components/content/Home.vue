<template>
  <div>
    <div class="content">
      <div class="post-title" v-for="blog in blogs" :key="blog.title">
        <!-- <article v-html="blog.context"></article> -->
        <h2 class="title">
          <router-link class="title2" :to="'/showblog/' + blog.id">{{
            blog.title
          }}</router-link>
        </h2>
        <div class="title1">
          Posted On
          <div class="time">{{ blog.createdOn | day }}</div>
          | UpDateOn
          <div class="time">{{ blog.updateOn | day }}</div>
          <div class="creat">CreatBy {{blog.userName}}</div>
        </div>
        <article
          class="markdown-body"
          v-html="$options.filters.msg(blog.contextvalue)"
        ></article>
        <button class="but1">
          <router-link class="but2" :to="'/showblog/' + blog.id"
            >Read More >></router-link
          >
        </button>
      </div>
      <button v-for="index in num" :key="index" @click="page(index)">
        {{ index }}
      </button>
      <!-- <button @click="loadmore">下一页</button> -->
    </div>
  </div>
</template>

<script>
import * as fb from "index/network/firebase";

export default {
  name: "Home",
  data() {
    return {
      blogs: "",
      pageTotal: 1, //总页数
      rows: 1, //总条数
      num: 1, //
      pageNo: 1, //当前页码
      pageSize: 4 // 条数
      // moreblog: "",
      // lastblog: "",
      // defaultData: "preview"
    };
  },
  created() {
    //官方的startafter方法，暂时不删除
    // var first = fb.blogsCollection.orderBy('category').limit(2)

    // console.log(first);

    // return first.get().then(function (documentSnapshots) {
    // Get the last visible document
    //   var lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
    //   console.log("last", lastVisible);

    // Construct a new query starting at this document,
    // get the next 25 cities.
    //   var next = fb.blogsCollection.orderBy('category').startAfter(lastVisible).limit(2)
    //   console.log(next);
    // });

    // fb.usersCollection
    // .doc("AzzXqCkJ7fQAVsMnTKsvisjYXeh1")
    // .collection("blogs")
    // .orderBy("createdOn")
    // .limit(2)
    // .get()
    // .then(qunerySnapshot => {
    // var lastVisible = qunerySnapshot.docs[qunerySnapshot.docs.length - 1];
    // let queryBlog = [];
    // qunerySnapshot.forEach(doc => {
    // const mydata = doc.data();
    // mydata.id = doc.id;
    // queryBlog.push(mydata);
    // this.blogs = queryBlog;
    // });
    // this.lastblog = lastVisible;
    // console.log(lastVisible.documentId);
    // });
    fb.blogsCollection
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
    day(val) {
      if (!val) {
        return "-";
      }
      const x = val.seconds * 1000;
      var now = new Date(x);
      var year = now.getFullYear();
      var month = now.getMonth() + 1;
      var day = now.getDate();
      var time = year + "-" + month + "-" + day;
      return time;
    },
    msg(msg) {
      return msg.slice(0, 300) + "...";
    }
  },
  methods: {
    //加载更多的代码，由于firebase不是基于偏移，所以没法进行分页
    // loadmore() {
    // fb.usersCollection
    // .doc("AzzXqCkJ7fQAVsMnTKsvisjYXeh1")
    // .collection("blogs")
    // .orderBy("createdOn")
    // .startAfter(this.lastblog)
    // .limit(2)
    // .get()
    // .then(qunerySnapshot => {
    // var lastVisible = qunerySnapshot.docs[qunerySnapshot.docs.length - 1];
    // let queryBlog = [];
    // qunerySnapshot.forEach(doc => {
    // const mydata = doc.data();
    // mydata.id = doc.id;
    // queryBlog.push(mydata);
    // this.blogs = queryBlog;
    // this.blogs.push(...this.moreblog)
    // });
    // this.lastblog = lastVisible;
    // });
    // }
    getList(index) {
      this.pageNo = index || this.pageNo;
      fb.blogsCollection
        .orderBy("documentId", "asc")
        .where("documentId", "<=", this.pageSize * index)
        .where("documentId", ">=", (index - 1) * this.pageSize + 1)
        .limit(4)
        .get()
        .then(querySnapshot => {
          const queryblog = [];
          querySnapshot.forEach(doc => {
            const mydata = doc.data();
            mydata.id = doc.id;
            queryblog.push(mydata);
            console.log(queryblog);
            this.blogs = queryblog;
            // console.log(this.docid);
          });
        });
    },
    page(index) {
      this.getList(index);
    }
  },
  mounted() {
    this.getList(1);
  }
};
</script>

<style scoped>
.content {
  margin-top: 30px;
  margin-left: 20%;
  width: 800px;
  display: inline-block;
}
.post-title {
  color: #555;
  line-height: 1.2;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 -1px 0.5px 0 rgba(0, 0, 0, 0.09);
  border-radius: initial;
  padding: 10px 20px;
  margin-bottom: 10px;
}
.title {
  text-align: center;
}
.title2 {
  font-weight: 400;
  text-decoration: none;
  color: black;
}
.title2:hover {
  border-bottom: 2px solid black;
}
.title1 {
  text-align: center;
  font-size: 6px;
  position: relative;
  top: -10px;
  font-family: "Lato", "PingFang SC", "Microsoft YaHei", sans-serif;
}
.time {
  display: inline;
  text-align: center;
  font-size: 12px;
  position: relative;
  /* top: -10px; */
  border-bottom: black 1px dashed;
  cursor: help;
}
.but1 {
  margin-top: 20px;
  position: relative;
  right: -300px;
  display: block;
  border: black 2px solid;
}
.but2 {
  text-decoration: none;
  font-family: "Lato", "PingFang SC", "Microsoft YaHei", sans-serif;
  color: black;
  font-size: 10px;
}
.but1:hover {
  background-color: black;
  /* color: white; */
}
.but2:hover {
  color: white;
}
.creat{
  padding-top: 6px;
}
</style>