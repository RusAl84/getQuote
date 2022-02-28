<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md q-gutter-sm">О проекте</div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "PageIndex",
  setup() {
    return {
      qeditor: ref(
        "<pre>Check out the two different types of dropdowns" +
          ' in each of the "Align" buttons.</pre> '
      ),
    };
  },
});
</script>
