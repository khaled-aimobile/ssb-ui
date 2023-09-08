<script>
import {
    layoutComputed
} from "@/state/helpers";
//import Vertical from "./vertical";
import Horizontal from "./horizontal";

export default {
    components: {
        //Vertical,
        Horizontal,
    },
    data() {
        return {};
    },
    computed: {
        ...layoutComputed,
    },
    methods: {},
    mounted() {
        // document.querySelector("html").setAttribute('dir', 'rtl');
    }
};
</script>

<template>
<div>
    <Horizontal v-if="layoutType === 'vertical'" :layout="layoutType">
        <slot />
    </Horizontal>

    <Horizontal v-if="layoutType === 'horizontal'" :layout="layoutType">
        <slot />
    </Horizontal>
</div>
</template>
