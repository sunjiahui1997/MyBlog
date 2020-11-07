<template>
  <div>
    <div class="ti-tle">
      游客请登录后留言
      <div v-if="denglu"><button @click="sign = !sign">登录</button></div>
      <div v-if="tuichu" id="tuichu">
        <button @click="logout1">退出登录</button>
      </div>
    </div>

    <div id="login_frame" v-show="sign">
      <form action="" @submit.prevent v-if="showsignup">
        <h1 id="title">游客请登录后留言~</h1>
        <div>
          <label class="label_input" for="email1">邮箱</label>
          <input
            v-model.trim="loginForm.email"
            type="text"
            id="email1"
            placeholder="sjh name"
            class="text_field"
          />
        </div>
        <div>
          <label class="label_input" for="password1">密码</label>
          <input
            v-model.trim="loginForm.password"
            type="password"
            name=""
            id="password1"
            class="text_field"
          />
        </div>
        <div id="login_control">
          <button class="btn_login" @click="login()">登录</button>
          <button class="btn_login" @click="showsignup = !showsignup">
            新建账户
          </button>
        </div>
      </form>
      <form @submit.prevent v-else>
        <h1>Get Started</h1>
        <div>
          <label class="label_input" for="name">用户名</label>
          <input
            v-model.trim="signupForm.name"
            type="text"
            placeholder="name"
            id="name"
            class="text_field"
          />
        </div>
        <div>
          <label class="label_input" for="email2">邮箱</label>
          <input
            v-model.trim="signupForm.email"
            type="text"
            placeholder="you@email.com"
            id="email2"
            @blur="youxiang"
            class="text_field"
          />
        </div>
        <div>
          <label class="label_input" for="password2">密码</label>
          <input
            v-model.trim="signupForm.password"
            placeholder="min 6 characters"
            @keyup="testcode"
            type="password"
            id="password2"
            class="text_field"
          />
        </div>
        <div class="test1">
          <div class="test" :class="{ active: isActive }">弱</div>
          <div class="test" :class="{ active: isActive1 }">中</div>
          <div class="test" :class="{ active: isActive2 }">强</div>
        </div>
        <button class="btn_login but2" @click="signup()">注册</button>
        <div class="extras">
          <button class="btn_login but2" @click="showsignup = !showsignup">
            回到登录
          </button>
        </div>
      </form>
    </div>
    <div class="pinglun1" v-for="item in neirong" :key="item.name">
      <div class="username">用户名： {{ item.userName }}</div>
      <div class="content">内容: {{ item.content }}</div>
      <div class="time">createdOn: {{ item.createdOn | day }}</div>
    </div>
    <div class="pinglun">
      发表评论：
      <div>
        <textarea
          name=""
          id="comment"
          cols="30"
          rows="10"
          v-model="comment.context"
        ></textarea>
      </div>
      <button @click="comment1()">提交</button>
    </div>
  </div>
</template>

<script>
import * as fb from "index/network/firebase";

export default {
  name: "Signup",
  data() {
    return {
      showsignup: true,
      loginForm: {
        email: "",
        password: ""
      },
      signupForm: {
        name: "",
        password: "",
        email: ""
      },
      isActive: false,
      isActive1: false,
      isActive2: false,
      isLogin: false,
      sign: false,
      denglu: true,
      tuichu: false,
      comment: {
        context: ""
      },
      neirong: ""
    };
  },
  created() {
    fb.commitCollection
      .orderBy("createdOn", "desc")
      .get()
      .then(qunerySnapshot => {
        const mycomment = [];
        qunerySnapshot.forEach(doc => {
          const x = doc.data();
          mycomment.push(x);
          this.neirong = mycomment;
        });
      });
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.loginForm.email,
        password: this.loginForm.password
      });
      this.denglu = false;
      this.tuichu = true;
      this.sign = false;
      // this.$emit('login')
    },
    signup() {
      if (!/^[0-9a-zA-z]+@[0-9a-z]+\.(com)$/.test(this.signupForm.email)) {
        alert("请输入正确的邮箱格式");
      } else {
        this.$store.dispatch("signup", {
          email: this.signupForm.email,
          password: this.signupForm.password,
          name: this.signupForm.name
        });
        // alert("注册成功！");
        this.showsignup = true;
        this.isLogin = true;
      }
    },
    testcode() {
      var ovalue = this.signupForm.password;
      for (let x = 0; x < ovalue.length; x++) {
        this.isActive = false;
        this.isActive1 = false;
        this.isActive2 = false;
      }
      if (ovalue.length > 6) {
        if (
          /^[0-9]+$/.test(ovalue) ||
          /^[a-z]+$/.test(ovalue) ||
          /^[A-Z]+$/.test(ovalue)
        ) {
          this.isActive = true;
        } else if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/.test(ovalue)) {
          this.isActive2 = true;
        } else {
          this.isActive1 = true;
        }
      }
    },
    youxiang() {
      if (!/^[0-9a-zA-z]+@[0-9a-z]+\.(com)$/.test(this.signupForm.email)) {
        alert("请输入正确的邮箱格式");
      }
    },
    comment1() {
      fb.commitCollection
        .add({
          createdOn: new Date(),
          content: this.comment.context,
          userName: this.$store.state.userProfile.name,
          userId: fb.auth.currentUser.uid
        })
        .then(function() {
          alert("恭喜你，发表成功！");
        })
        .catch(function(error) {
          console.error("Error updating document: ", error);
        });
      this.comment.context = "";
    },
    logout1() {
      this.$store.dispatch("logout");
      this.denglu = true;
      this.tuichu = false;
    }
  },
  filters: {
    day(val) {
      let x = val.seconds * 1000;
      const now = new Date(x);
      var year = now.getFullYear();
      var month = now.getMonth() + 1;
      var day = now.getDate();
      var hour = now.getHours();
      var seconds = now.getSeconds();
      var time = year + "-" + month + "-" + day + " " + hour + ":" + seconds;
      return time;
    }
  }
};
</script>

<style scoped>
#login_frame {
  width: 400px;
  height: 260px;
  padding: 13px;

  position: absolute;
  left: 70%;
  top: 50%;
  margin-left: -200px;
  margin-top: -200px;

  background-color: rgba(240, 255, 255, 0.5);

  border-radius: 10px;
  text-align: center;

  z-index: 10;
}

.label_input {
  font-size: 14px;
  font-family: 宋体;

  width: 65px;
  height: 28px;
  line-height: 28px;
  text-align: center;

  color: white;
  background-color: cadetblue;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.text_field {
  width: 278px;
  height: 28px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 0;
  margin-bottom: 15px;
}

.btn_login {
  font-size: 14px;
  font-family: 宋体;

  width: 120px;
  height: 28px;
  line-height: 28px;
  text-align: center;

  color: white;
  background-color: cadetblue;
  border-radius: 6px;
  border: 0;

  float: left;
  cursor: pointer;
  margin-top: 20px;
  margin-right: 50px;
}

#login_control {
  padding: 0 28px;
}
#title {
  font-family: "Lato", "PingFang SC", "Microsoft YaHei", sans-serif;
}
.test1 {
  display: flex;
}
.test {
  /* flex: 1; */
  font-size: 14px;
  margin-right: 10px;
  background-color: gray;
  color: black;
  align-items: center;
  width: 35px;
  height: 20px;
  /* border: 1px solid blanchedalmond; */
  position: relative;
  left: 140px;
  top: -10px;
}
.but2 {
  position: relative;
  top: -20px;
  right: -50px;
}
.active {
  background-color: red;
}
#tuichu {
  position: right;
}
.ti-tle {
  display: flex;
  font-size: 18px;
  position: relative;
  left: 500px;
  font-weight: 400;
  margin-bottom: 40px;
  margin-top: 20px;
}
button {
  cursor: pointer;
  color: black;
  background-color: white;
  font-family: "Lato", "PingFang SC", "Microsoft YaHei", sans-serif;
  margin-right: 10px;
}
button:hover {
  background-color: black;
  color: white;
  border: 2px black solid;
  font-family: "Lato", "PingFang SC", "Microsoft YaHei", sans-serif;
}
#comment {
  width: 500px;
  height: 100px;
  border: 1px solid black;
}
.pinglun {
  position: relative;
  right: -200px;
  margin-top: 60px;
  margin-bottom: 100px;
  /* top: 400px; */
}
.pinglun1 {
  position: relative;
  right: -200px;
  color: #555;
  width: 600px;
  line-height: 1.2;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 -1px 0.5px 0 rgba(0, 0, 0, 0.09);
  border-radius: initial;
  padding: 10px 20px;
  margin-bottom: 10px;
}
.time {
  font-size: 12px;
  margin-top: 10px;
  position: relative;
  right: -430px;
}
.username {
  font-size: 15px;
  margin-bottom: 10px;
  font-weight: 400;
}
</style>