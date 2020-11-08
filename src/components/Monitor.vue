<template>
    <div class="monitor">
        <div class="bezel">
            <div class="display">
                <div class="scanline"></div>
                <Menu v-if="isMenuActive" v-on:navigated="navigate" :pages="pages"/>
                <div class="page" v-if="currentPage">
                  <div class="header">
                    <span class="page-title">
                      <h2>{{ currentPage.title }}</h2>
                    </span>
                  </div>
                  <component :is="currentPage.component"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Menu from './Menu.vue';
import Contact from './pages/Contact.vue';

const PAGES = [
    { title: 'Contact', content: Contact },
    { title: 'About', content: Contact }
];

export default {
  components: {
    Menu
  },
  data() {
    return {
      pages: PAGES,
      isMenuActive: true,
      currentPage: null,
    }
  },
  methods: {
    navigate(page) {
      this.isMenuActive = false;
      this.currentPage = page;
    }
  }
}
</script>

<style>
.display:before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(
        to bottom,
        rgba(18, 16, 16, 0) 50%,
        rgba(0, 0, 0, 0.25) 50%
    );
    background-size: 100% 8px;
    z-index: 2;
    pointer-events: none;
}

.scanline {
    width: 99%;
    height: 100px;
    z-index: 8;
    padding: 0;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(255, 255, 255, 0.2) 10%,
        rgba(0, 0, 0, 0.1) 100%
    );
    opacity: 0.1;
    position: absolute;
    bottom: 100%;
    animation: scanline 8s linear infinite;
}

.display {
    animation: textShadow 3s infinite;
}

.header {
  color: #b8729f;
  margin-left: 20px;
  margin-top: 10px;
}

.page-title {
  background-color: white;
}

@keyframes scanline {
    0% {
        bottom: 100%;
    }
    80% {
        bottom: 100%;
    }
    100% {
        bottom: 0%;
    }
}

@keyframes textShadow {
  0% {
    text-shadow: 0.4389924193300864px 0 5px rgba(0,30,255,0.7), -0.4389924193300864px 0 5px rgba(255,0,80,0.3), 0 0 10px;
  }
  5% {
    text-shadow: 2.7928974010788217px 0 5px rgba(0,30,255,0.7), -2.7928974010788217px 0 5px rgba(255,0,80,0.3), 0 0 10px;
  }
  10% {
    text-shadow: 0.02956275843481219px 0 5px rgba(0,30,255,0.7), -0.02956275843481219px 0 5px rgba(255,0,80,0.3), 0 0 10px;
  }
  15% {
    text-shadow: 0.40218538552878136px 0 5px rgba(0,30,255,0.7), -0.40218538552878136px 0 5px rgba(255,0,80,0.3), 0 0 10px;
  }
  20% {
    text-shadow: 3.4794037899852017px 0 5px rgba(0,30,255,0.7), -3.4794037899852017px 0 5px rgba(255,0,80,0.3), 0 0 10px;
  }
  25% {
    text-shadow: 1.6125630401149584px 0 5px rgba(0,30,255,0.7), -1.6125630401149584px 0 5px rgba(255,0,80,0.3), 0 0 10px;
  }
  30% {
    text-shadow: 0.7015590085143956px 0 5px rgba(0,30,255,0.7), -0.7015590085143956px 0 5px rgba(255,0,80,0.3), 0 0 10px;
  }
  35% {
    text-shadow: 3.896914047650351px 0 5px rgba(0,30,255,0.7), -3.896914047650351px 0 5px rgba(255,0,80,0.3), 0 0 10px;
  }
  40% {
    text-shadow: 3.870905614848819px 0 5px rgba(0,30,255,0.7), -3.870905614848819px 0 5px rgba(255,0,80,0.3), 0 0 10px;
  }
  45% {
    text-shadow: 2.231056963361899px 0 5px rgba(0,30,255,0.7), -2.231056963361899px 0 5px rgba(255,0,80,0.3), 0 0 10px;
  }
  50% {
    text-shadow: 0.08084290417898504px 0 5px rgba(0,30,255,0.7), -0.08084290417898504px 0 5px rgba(255,0,80,0.3), 0 0 10px;
  }
  55% {
    text-shadow: 2.3758461067427543px 0 5px rgba(0,30,255,0.7), -2.3758461067427543px 0 5px rgba(255,0,80,0.3), 0 0 10px;
  }
  60% {
    text-shadow: 2.202193051050636px 0 5px rgba(0,30,255,0.7), -2.202193051050636px 0 5px rgba(255,0,80,0.3), 0 0 10px;
  }
  65% {
    text-shadow: 2.8638780614874975px 0 5px rgba(0,30,255,0.7), -2.8638780614874975px 0 5px rgba(255,0,80,0.3), 0 0 10px;
  }
  70% {
    text-shadow: 0.48874025155497314px 0 5px rgba(0,30,255,0.7), -0.48874025155497314px 0 5px rgba(255,0,80,0.3), 0 0 10px;
  }
  75% {
    text-shadow: 1.8948491305757957px 0 5px rgba(0,30,255,0.7), -1.8948491305757957px 0 5px rgba(255,0,80,0.3), 0 0 10px;
  }
  80% {
    text-shadow: 0.0833037308038857px 0 5px rgba(0,30,255,0.7), -0.0833037308038857px 0 5px rgba(255,0,80,0.3), 0 0 10px;
  }
  85% {
    text-shadow: 0.09769827255241735px 0 5px rgba(0,30,255,0.7), -0.09769827255241735px 0 5px rgba(255,0,80,0.3), 0 0 10px;
  }
  90% {
    text-shadow: 3.443339761481782px 0 5px rgba(0,30,255,0.7), -3.443339761481782px 0 5px rgba(255,0,80,0.3), 0 0 10px;
  }
  95% {
    text-shadow: 2.1841838852799786px 0 5px rgba(0,30,255,0.7), -2.1841838852799786px 0 5px rgba(255,0,80,0.3), 0 0 10px;
  }
  100% {
    text-shadow: 2.6208764473832513px 0 5px rgba(0,30,255,0.7), -2.6208764473832513px 0 5px rgba(255,0,80,0.3), 0 0 10px;
  }
}
</style>