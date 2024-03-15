<template>
  <div class="product_box">
    <div
      style="
        display: flex;
        border-radius: 10px;
        overflow: hidden;
        margin: 10px 0;
        box-shadow: 0px 0px 1px;
      "
      v-for="product in obj.data"
      :key="product.id"
    >
      <el-image style="width: 150px; height: 150px" fit="cover" />
      <div
        style="
          margin-left: 30px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        "
      >
        <h3 style="text-align: center; margin: 10px 0">{{ product.name }}</h3>
        <p style="font-size: 14px">{{ product.description }}</p>
        <p style="font-size: 10px">{{ product.category.name }}</p>
        <div style="display: flex; justify-content: space-between">
          <span>￥{{ product.price }}</span>
          <span
            ><el-icon
              style="vertical-align: middle; transform: translateY(-2px)"
              size="18"
              ><Star /></el-icon
            >{{ avgRating(product.reviews) }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive } from "vue";

const obj = reactive({
  status: "success",
  data: [
    {
      id: 1,
      name: "Product 1",
      description: "Description for Product 1",
      price: 99.99,
      category: {
        id: 1,
        name: "Electronics",
      },
      images: ["image1.jpg", "image2.jpg"],
      reviews: [
        {
          id: 1,
          rating: 4,
          comment: "Great product!",
          author: "John Doe",
        },
        {
          id: 2,
          rating: 3,
          comment: "Great product!",
          author: "John Doe",
        },
      ],
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description for Product 2",
      price: 99.99,
      category: {
        id: 1,
        name: "Electronics",
      },
      images: ["image1.jpg", "image2.jpg"],
      reviews: [
        {
          id: 1,
          rating: 1,
          comment: "Great product!",
          author: "John Doe",
        },
        {
          id: 2,
          rating: 1,
          comment: "Great product!",
          author: "John Doe",
        },
      ],
    },
    {
      id: 3,
      name: "Product 3",
      description: "Description for Product 3",
      price: 99.99,
      category: {
        id: 1,
        name: "Electronics",
      },
      images: ["image1.jpg", "image2.jpg"],
      reviews: [
        {
          id: 1,
          rating: 5,
          comment: "Great product!",
          author: "John Doe",
        },
        {
          id: 2,
          rating: 4,
          comment: "Great product!",
          author: "John Doe",
        },
      ],
    },
  ],
});
let arr = [];
const avgRating = computed(
  () => (reviews) =>
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
);
</script>

<style   scoped>
* {
  margin: 0;
  padding: 0;
}
.product_box {
  padding: 20px;
  background-color: #fff;
}
</style>