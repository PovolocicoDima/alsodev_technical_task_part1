<script setup>
import Logo from '@/components/Logo.vue'
import InputAdress from '@/components/InputAdress.vue'
import Button from '@/components/Button.vue'
</script>

<template>
  <div class="container">
    <header class="header">
      <Logo />
      <InputAdress />
      <div class="buttons">
        <span class="user-name"></span>
        <Button
          class="button button-primary button-auth"
          label="Войти"
          iconClass="button-auth-svg"
        />
        <Button
          class="button button-cart"
          label="Корзина"
          iconClass="button-cart-svg"
          id="cart-button"
        />
        <Button
          label="Выйти"
          iconClass="button-out-svg"
          class="button button-primary button-out"
        />
      </div>
    </header>
  </div>
</template>

<style scoped>
.user-name {
  display: none;
  margin-right: 20px;
  font-weight: bold;
  font-size: 18px;
}
.button {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.0015);
  border-radius: 2px;
  color: #595959;
  font-size: 16px;
  line-height: 24px;
}

.button:hover {
  background: #1890ff;
  border: 1px solid #1890ff;
  color: #fff;
}

.button-primary {
  background: #1890ff;
  border: 1px solid #1890ff;
  color: #fff;
  margin-right: 10px;
}

.button-primary:hover {
  background: #ffffff;
  border: 1px solid #d9d9d9;
  color: #595959;
}

.button-icon {
  margin-right: 6px;
}

.button-card-text {
  margin-right: 10px;
}

.button-auth {
  background-position: 20px 13px;
}

.button-cart {
  display: none;
  margin: 0 5px;
}

.button-out {
  display: none;
  margin: 0 5px;
}
.buttons {
  display: flex;
  align-items: center;
}

@media (max-width: 480px) {
  .button-text {
    display: none;
  }

  .button-icon {
    margin: 0;
  }

  .user-name {
    margin: 10px;
  }

  .buttons {
    flex-wrap: wrap;
    margin-left: auto;
  }

  .button {
    min-height: 40px;
    padding: 5px 12px;
  }
}
</style>
