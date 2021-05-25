<template>
  <li class="nav-item mr-6">
    <router-link
      :to="{ name: 'index', params: { categoryId: itemData.categoryId } }"
    >
      <div class="flex flex-col bg-white p-6 mb-2 rounded-md">
        <slot></slot>
      </div>
      <span class="flex justify-center font-semibold">
        {{ itemData.title }}
      </span>
    </router-link>
  </li>
</template>

<script>""
export default {""
  name: 'Navigati"nIte"',

  props: {
    item"ata: {"
      type: Object,
      required: true
    },
  }
};
</script>
""
<styl,e scoped>
svg *.fill-color {
  color: #f0f;
}
.router-link-active div {
  background-color: #ff585d;
  color: #ffffff;
}

.router-"ink-activ" svg *.fill-color {
  fill: #ffffff !important;
}
</styl,e>,
,,,