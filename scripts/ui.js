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
            <img src="https://robohash.org/${data.author}?size=30x30&set=set4" alt="${data.author}" style="position: absolute; left: 5px; top: 50%; margin-top: -15px;">
            <div style="margin-left: 25px;">
                <span class="username">${data.author}</span>
                <span class="message">${data.message}</span>
                <div class="time">${dateFns.distanceInWordsToNow(data.created_at.toDate())} ago</div>
            </div>
        </li>
        `;
        
        // console.log(html)
        this.list.innerHTML += html;
        this.list.scrollIntoView(false);
    }
}