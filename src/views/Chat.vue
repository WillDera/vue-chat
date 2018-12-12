<template>
    <div class="container chat">
        <h2 class="center teal-text">Real-Time Chat</h2>
        <h5 class="text-secondary text-center">Powered By Vue.js & Firebase</h5>
        <div class="card">
            <div class="card-content">
                <p class="text-secondary nomessages" v-if="messages.length == 0">
                    [No Messages Yet!]
                </p>
                <div class="messages" v-chat-scroll="{always: false, smooth: true}">
                    <div v-for="message in messages" :key="message.id">
                        <span class="teal-text">[{{ message.name }}]: </span>
                        <span class="grey-text text-darken-3">{{ message.message }}</span>
                        <span class="grey-text time">{{message.timestamp}}</span>
                    </div>
                </div>
            </div>
            <div class="card-action">
                <CreateMessage :name="name" />
            </div>
        </div>
    </div>
</template>

<script>
import CreateMessage from "@/components/CreateMessage";
import fb from "@/firebase/init"
import moment from "moment";

export default {
    name: "Chat",
    props: ['name'],
    components: {
        CreateMessage
    },
    data() {
        return {
            messages: []
        }
    },
    created() {
        let ref = fb.collection('messages').orderBy('timestamp');

        ref.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if (change.type = 'added') {
                    let doc = change.doc;
                    this.messages.push({
                        id: doc.id,
                        name: doc.data().name,
                        message: doc.data().message,
                        timestamp: moment(doc.data().timestamp).format('LTS')
                    });
                }
            });
        });
    }
}
</script>

<style>
.chat h2{
    font-size: 2.6em;
    margin-bottom: 0px;
}

.chat h5{
    margin-top: 0px;
    margin-bottom: 40px;
}

.chat span {
    font-size: 1.2em;
}

.chat .time{
    font-size: 0.7em;
    display: block;
}

.messages {
    max-height: 300px;
    overflow: auto;
}
</style>
