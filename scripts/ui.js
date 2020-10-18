class ChatUI{
    constructor(list){
        this.list = list;   
    }

    clear(){
        this.list.innerHTML = "";
    }

    render(data){
        // console.log(this.list, data)
        const html = `
        <li class="list-group-item">
            <span class="username">${data.author}</span>
            <span class="message">${data.message}</span>
            <div class="time">${dateFns.distanceInWordsToNow(data.created_at.toDate())} ago</div>
        </li>
        `;
        
        // console.log(html)
        this.list.innerHTML += html;
        this.list.scrollIntoView(false);
    }
}