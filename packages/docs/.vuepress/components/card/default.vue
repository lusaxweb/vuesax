<template>
  <div class="con-demo flex">
    <vs-card>
      <template #header>
        <vs-avatar >
          <img
            src="/86.jpg"
            alt="user"
          >
        </vs-avatar>
        <div class="vs-card__header-text">
          <h3>Title of card</h3>
          <p>
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </template>

      <template #media>
        <vs-card-media-group>
          <vs-card-media-group-item>
            <img
              src="/card1.jpg"
              alt="user"
            >
          </vs-card-media-group-item>
          <vs-card-media-group-item>
            <img
              src="/card2.jpg"
              alt="user"
            >
          </vs-card-media-group-item>
          <vs-card-media-group-item>
            <img
              src="/card3.jpg"
              alt="user"
            >
          </vs-card-media-group-item>
        </vs-card-media-group>
      </template>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia temporibus asperiores sapiente quisquam tempore esse <strong>Reiciendis quo?</strong> Earum velit voluptatibus voluptates vitae, ipsa dolorem doloremque eaque illo quia repellat nostrum.
      </p>

      <template #footer>
        <div />

        <div>
          <span class="item-card">
            <i class='bx bxs-conversation' ></i> 4
          </span>
          <span class="item-card">
            <i class='bx bx-heart' ></i> Like
          </span>
        </div>
      </template>
    </vs-card>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus" scoped>
.con-demo
  padding 40px 0px
  background #fdfdfd
  border-radius 10px
  align-items flex-start
  .item-card
    margin-left 10px
  a
    color $textColor
    font-weight 600
    text-decoration underline
</style>
