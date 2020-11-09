<template>
  <div>
    <table border="1">
      <thead>
        <tr id="thead">
          <th id="title1">名称</th>
          <th id="time">创建时间</th>
          <th id="time">创建时间</th>
          <th id="operate">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="datas in data" :key="datas.name">
          <td>{{ datas.name }}</td>
          <td><a :href= datas.url  target="_blank">{{datas.url}}</a></td>
          <td>{{ datas.date | day }}</td>
          <td>
            <button @click="tolink(datas.id)">编辑</button
            ><button @click="delate(datas.id)">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import * as fb from "../network/firebase";

export default {
  name: "addlink",
  data() {
    return {
      data: ""
    };
  },
  inject: ["reload"],
  created() {
    fb.categoryCollection
      .get()
      .then(qunerySnapshot => {
        const x = [];
        qunerySnapshot.forEach(doc => {
          console.log(doc.data());
          const y = doc.data();
          y.id = doc.id;
          // console.log(y);
          x.push(y);
          this.data = x;
          // console.log(this.data);
        });
      });
  },
  filters: {
    day(value) {
      const x = value.seconds * 1000;
      const now = new Date(x);
      var year = now.getFullYear();
      var month = now.getMonth() + 1;
      var day = now.getDate();
      var time = year + "-" + month + "-" + day;
      return time;
    }
  },
  methods: {
    tolink(val) {
      this.$router.push({
        path: `/backstage/editcate/${val}`
      });
    },
    delate(id) {
      const r = confirm("确认删除?");
      if (r) {
        fb.usersCollection
          .doc(fb.auth.currentUser.uid)
          .collection("categories")
          .doc(id)
          .delete()
          .then(() => {
            alert("删除成功！");
            this.reload();
          })
          .catch(error => {
            console.log(error);
          });
      } else {
      }
    }
  }
};
</script>

<style scoped>
table {
  border-collapse: collapse;
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
  width: 470px;
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
button {
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
button {
  background-color: #555;
  color: white;
}
</style>