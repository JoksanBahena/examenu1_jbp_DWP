<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Welcome",
          href: "http://localhost:5173/#/welcome",
          name: "welcome",
        },
      ],
    };
  },
};
</script>
