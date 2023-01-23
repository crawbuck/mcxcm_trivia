<script setup>
  const email = "crawbuckk@gmail.com";
  const password = "123456";

  const signIn = async () => {
    try {
      const credentials = await signUserIn(email, password);
      console.log(credentials);
    } catch (err) {
      console.log("HEY", err);
    }
  };

  const signOut = async () => {
    try {
      const credentials = await signUserOut();
      console.log(credentials);
    } catch (err) {
      console.log(err);
    }
  };

  const createUser = async () => {
    try {
      const credentials = await createUser(email, password);
      console.log(credentials);
    } catch (err) {
      console.log(err);
    }
  };
</script>

<template>
  <div>
    <button role="button" @click="createUser">
      Create Account
    </button>
    <button role="button" @click="signIn">
      Sign In
    </button>
    <button role="button" @click="signOut">
      Sign Out
    </button>
  </div>
</template>
