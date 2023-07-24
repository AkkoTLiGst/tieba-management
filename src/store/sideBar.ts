import {defineStore} from 'pinia'
import {ref} from "vue";

export  const sideBar = defineStore(
    'sideBar',
    () => {
        let showSideBar = ref(false);

        function sideBarEvent() {
            showSideBar.value = !showSideBar.value;
        }

        return {showSideBar, sideBarEvent}
    }
)