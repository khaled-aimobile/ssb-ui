<template>
    <h3>{{ currentPage }}</h3>
  
    <paginate
      v-model="currentPageNumber"
      :page-count="pageCount"
      :click-handler="clickCallback"
      :margin-pages="3"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination'"
      :page-class="'page-item'"
      :page-link-class="'page-link'"
      :active-class="'active-page'"
      :hide-prev-next="false"
    ></paginate>
    
  </template>
  
  <script>
  import Pagination from "vuejs-paginate-next";
  import { toRefs, ref, onBeforeMount } from "vue";
  
  export default {
    props: {
      currentPage: Number,
      pageCount: Number,
    },
    components: {
      paginate: Pagination,
    },
    setup(props, context) {
      const { currentPage: onCurrentPage, pageCount: onPageCount } = toRefs(
        props
      );
  
      const currentPageNumber = ref(onCurrentPage.value);
  
      const clickCallback = () => {
        console.log(
          "Call Back Triggered",
          `Current Page - ${currentPageNumber.value}`
        );
  
        context.emit("set-currentpage", currentPageNumber.value);
      };
  
      onBeforeMount(() => {
        console.log(onCurrentPage.value, onPageCount.value);
      });
  
      return {
        clickCallback,
        onCurrentPage,
        onPageCount,
        currentPageNumber,
      };
    },
  };
  </script>
  
  <style lang="scss">
  .pagination {
    background: white;
    margin: 0px;
    padding: 10px;
    display: flex;
    gap: 5px;
    align-items: center;
    border: none;
    box-sizing: border-box;
    overflow: hidden;
    word-wrap: break-word;
    align-content: center;
  }
  
  .page-item {
    display: flex;
    cursor: pointer;
    margin-bottom: 0px;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome, Edge, Opera and Firefox */
  }
  
  .page-link {
    color: #666B85;
    border-radius: 5px;
    padding: 10px 15px;
    font-size: 14px;
    font-weight: 800;
    &:hover {
      color: #333333;
      background-color: #e9e9e9;
      border: none;
    }
  }
  
  .active-page {
    background-color: #60d394 !important;
    color: white !important;
    &:hover {
      border: none;
    }
  }
  
  .disabled {
    .page-link {
      background-color: #f9fafb;
    }
    cursor: not-allowed;
  }
  </style>