class Chatroom{
    constructor(room, username){
        // console.log('Chat initiated')
        this.username = username;
        this.room = room;
        this.chats = db.collection('chats');
        this.unsub;
    }

    async addChat(message){
        const now = new Date();
        const chat = {
            author: this.username,
            room: this.room,
            message: message,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        }

        const response = await this.chats.add(chat);
        return response;
    }

    getChats(callback){
        // console.log('Getting chats')
        this.unsub = this.chats
            .where('room', '==', this.room)
            .orderBy('created_at')
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    if(change.type === 'added' && change.doc.data().room === this.room){
                        callback(change.doc.data());
                        // console.log('Done')
                    } 
                });
            });
    }

    updateName(username){
        this.username = username;
    }

    updateRoom(room){
        this.room = room;
        if(this.unsub){
            this.unsub();
        }

    }
}
