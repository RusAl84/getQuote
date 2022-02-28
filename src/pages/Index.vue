<template>
  <q-page class="flex flex-center">
    <q-card class="big-card" bordered>
      <q-card class="box-card" bordered>
        <q-card-section>
          <q-input
            class="textInput"
            autofocus
            filled
            autogrow
            type="textarea"
            v-model="text"
          >
          </q-input> </q-card-section
      ></q-card>
      <q-card-actions class="flex flex-center">
        <q-btn color="primary" @click="onSendClick">
          Поиск ключевых слов
        </q-btn>
      </q-card-actions>
      <q-card class="box-card" bordered>
        <q-card-section>
          <q-input class="textInput" autogrow type="textarea" v-model="ke">
          </q-input> </q-card-section
      ></q-card>
    </q-card>
    {{ qeditor }}
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import API from "../api/api";

export default defineComponent({
  name: "PageIndex",
  setup() {
    return {
      ke: ref(
        "<pre>Check out the two different types of dropdowns" +
          ' in each of the "Align" buttons.</pre> '
      ),
      text: ref(""),
    };
  },
  methods: {
    // Реакция на кнопку отправки
    async onSendClick() {
      try {
        this.ke = await API.sendMessage(this.text);
        console.log(this.ke);
      } catch (e) {
        console.error(e);
      }
    },
  },
});
</script>
<style scoped>
.field-label {
  vertical-align: middle;
}
.big-card {
  height: 500px;
  width: 100%;
  margin: 20px auto;
  padding: 20px auto;
}
.box-card {
  max-width: 100%;
}
.textInput {
  margin: 20px auto;
  padding: 30px 24px;
}
.tag-item {
  margin-right: 15px;
}
</style>
