<template>
    <core-app>
        <template v-slot:default="{ isAuth, home, direction }">
            <div id="app"
                :dir="direction">
                <document-title/>
                <loader/>
                <fade>
                    <auth v-if="!isAuth"/>
                    <home v-else-if="home"/>
                    <default v-else/>
                </fade>
            </div>
        </template>
    </core-app>
</template>

<script>
import { Fade } from '@liberu-ui/transitions';
import DocumentTitle from '@liberu-ui/ui/src/core/components/DocumentTitle.vue';
import Loader from '@liberu-ui/ui/src/bulma/components/Loader.vue';
import Auth from '@liberu-ui/auth/src/bulma/layouts/Auth.vue';
import Home from '@liberu-ui/ui/src/bulma/layouts/Home.vue';
import Default from '@liberu-ui/ui/src/bulma/layouts/Default.vue';

export default {
    name: 'Root',

    components: {
        DocumentTitle, Loader, Fade, Auth, Home, Default,
    },
};
</script>
