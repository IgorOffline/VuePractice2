<script>
export default {
  props: ["author", "avatar", "timeAgo", "text"],
};
</script>

<template>
  <div className="comment">
    <a href="/" className="avatar">
      <img alt="avatar" :src="avatar" />
    </a>
    <div className="content">
      <a href="/" className="author"> {{ author }} </a>
    </div>
    <div className="metadata">
      <span className="date">{{ timeAgo }}</span>
    </div>
    <div className="text">{{ text }}</div>
  </div>
</template>
