<template>
    <div class="menu">
        <div class="greeter" v-if="!started">
            <h1>Press Start</h1>
        </div>
        <div class="options" v-else>
            <ul class="column column-left">
                <li v-for="item in menuItems" :key="item.title" class="menu-item">
                    <span v-bind:class="{'selected': item.selected}" @mouseover="select(item.index)">{{ item.title }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
const MAX_MENU_ITEMS_COL = 4;

export default {
    data() {
        return {
            started: false,
            selectedMenuIdx: 0,
        };
    },
    props: ['pages'],
    created() {
        window.addEventListener('keypress', this.doKeyboard);
        window.addEventListener('mousedown', this.doMouse);
    },
    destroyed() {
        window.removeEventListener('keypress', this.doKeyboard);
        window.removeEventListener('mousedown', this.doMouse);
    },
    computed: {
        menuItems() {
            return this.pages.map((page, idx) => {
                return {
                    ...page,
                    index: idx,
                    selected: idx === this.selectedMenuIdx
                };
            });
        },
        leftMenuItems: function() {
            return this.menuItems.slice(0, MAX_MENU_ITEMS_COL);
        }
    },
    methods: {
        select(idx) {
            this.selectedMenuIdx = idx;
        },
        doKeyboard(e) {
            const isFirstStart = !this.started;
            this.start();

            if (isFirstStart) {
                return;
            }

            const btnCode = e.code.toUpperCase();

            switch(btnCode) {
                // down
                case 'ARROWDOWN':
                case 'KEYS':
                    this.goDown();
                    break;
                case 'ARROWUP':
                case 'KEYW':
                    this.goUp();
                    break;
                case 'SPACE':
                case 'ENTER':
                    this.menuSelect();
                    break;
            }
        },
        doMouse() {
            this.start();
        },
        goUp() {
            if (this.selectedMenuIdx <= 0) {
                this.selectedMenuIdx = 0;
                return;
            }

            this.selectedMenuIdx--;
        },
        goDown() {
            if (this.selectedMenuIdx >= this.pages.length - 1) {
                this.selectedMenuIdx = this.pages.length - 1;
                return;
            }

            this.selectedMenuIdx++;
        },
        menuSelect() {
            this.$emit('navigated', this.menuItems.find(page => page.index === this.selectedMenuIdx));
        },
        start() {
            if (this.started) return;

            this.started = true;
        }
    }
}
</script>

<style scoped>
.column {
    margin-top: 20vh;
}

.column-left li {
    list-style-type: none;
    margin-top: 150px;
}

.menu-item span {
    padding: 5px;
    font-family: 'Press Start 2P', cursive;
    font-size: 30px;
    color:#47d6e9;
    cursor: pointer;
}

.menu-item .selected {
    background-color: white;
}


.greeter {
  text-align: center;
  margin-top: 40vh;
  color:#47d6e9;
}

.greeter-help {
  font-size: 50px;
}
</style>