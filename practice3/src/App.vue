<script>
import CommentDetail from "./CommentDetail.vue";
import ApprovalCard from "./ApprovalCard.vue";
import faker from "@faker-js/faker";

export default {
  components: {
    CommentDetail,
    ApprovalCard,
  },
  data() {
    return {
      comments: [
        {
          id: 1,
          author: "Sam",
          avatar: faker.image.avatar(),
          timeAgo: "Today at 4:45PM",
          text: "Nice blog post! 1",
        },
      ],
    };
  },
};
</script>

<template>
  <div className="ui container comments">
    <ApprovalCard v-for="comment in comments" :key="comment.id"
      ><CommentDetail
        :author="comment.author"
        :avatar="comment.avatar"
        :timeAgo="comment.timeAgo"
        :text="comment.text"
    /></ApprovalCard>
  </div>
</template>
