<template>
  <div>
    <div><img src="../assets/1.jpg" alt=""></div>
    <div id="login_frame" >
      <form action="" @submit.prevent  v-if="showsignup" >
        <h1 id="title">博客后台</h1>
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
               type="text"
               name=""
               id="password1"
               class="text_field"
             />
         </div>
         <div id="login_control">
            <button class="btn_login" @click="login()">登录</button>
            <button class="btn_login" @click="showsignup = !showsignup">新建账户</button>
         </div>
      </form>
      <form @submit.prevent v-else >
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
            class="text_field"
          />
        </div>
        <div>
          <label class="label_input" for="password2">密码</label>
          <input
            v-model.trim="signupForm.password"
            type="password"
            placeholder="min 6 characters"
            id="password2"
            class="text_field"
          />
        </div>
        <button class="btn_login" @click="signup()" >注册</button>
        <div class="extras">
          <button class="btn_login" @click="showsignup = !showsignup">回到登录</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

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
      }
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login",
        {
          email: this.loginForm.email,
          password: this.loginForm.password
        });
      // this.$emit('login')
    },
    signup() {
      this.$store.dispatch("signup", {
        email: this.signupForm.email,
        password: this.signupForm.password,
        name: this.signupForm.name,
      });
      // alert("注册成功！");
      this.showsignup = true;
    }
  }
};
</script>

<style scoped>
img{
  width: 100%;
  height: 100%;
}
#login_frame {
    width: 400px;
    height: 260px;
    padding: 13px;
 
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -200px;
    margin-top: -200px;
 
    background-color: rgba(240, 255, 255, 0.5);
 
    border-radius: 10px;
    text-align: center;
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
    margin-bottom: 15px ;
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
#title{
  font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
}

</style>