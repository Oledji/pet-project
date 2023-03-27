<template>
    <button>
        <span>
            <slot></slot>
        </span>
    </button>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
button {
 position: relative;
 display: flex;
 justify-content: center;
 align-items: center;
 border-radius: 5px;
 font-size: 10px;
 font-weight: 900;
 background: var(--color-secondary-900);
 box-shadow: 0px 6px 24px 0px rgba(0, 0, 0, 0.2);
 overflow: hidden;
 border: none;
}

button:after {
 content: " ";
 width: 0%;
 height: 100%;
 background: var(--color-secondary-600);
 position: absolute;
 transition: all 0.4s ease-in-out;
 right: 0;
}

button:hover::after {
 right: auto;
 left: 0;
 width: 100%;
}

button span {
 text-align: center;
 text-decoration: none;
 width: 100%;
 padding: 5px 5px;
 color: var(--color-secondary-100);
 font-size: 1.125em;
 font-weight: 700;
 letter-spacing: 0.1em;
 z-index: 20;
 transition: all 0.3s ease-in-out;
}

button:hover span {
 color: var(--color-secondary-100);
 animation: scaleUp 0.3s ease-in-out;
}

@keyframes scaleUp {
 0% {
  transform: scale(1);
 }

 50% {
  transform: scale(0.95);
 }

 100% {
  transform: scale(1);
 }
}

</style>