<template>
  <div>
    <h1>登录页</h1>
    <button @click="doLogin">登录</button>
  </div>
</template>
<script>
import router from "@/router";

export default {
  name: "Login",
  methods: {
    doLogin() {
      const api = "http://localhost:8080/getToken";
      this.axios.get(api).then((res) => {
        const token = res.data;
        localStorage.setItem("token", token);
        router.push("./");
      });
    },
  },
};
</script>