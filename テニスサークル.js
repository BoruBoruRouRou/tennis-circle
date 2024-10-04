// イベント追加機能
document.getElementById('add-event-btn').addEventListener('click', function() {
    const eventList = document.getElementById('event-list');
    const newEvent = document.createElement('li');
    const eventName = prompt('新しいイベントを入力してください:');
    
    if (eventName) {
        newEvent.textContent = eventName;
        eventList.appendChild(newEvent);
        
        // 追加時にアニメーションを付ける
        newEvent.style.opacity = 0;
        setTimeout(() => newEvent.style.opacity = 1, 10);
    }
});

// 問い合わせフォームの送信確認
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // フォーム送信を止める
    const name = document.getElementById('name').value;
    alert(`${name}さん、お問い合わせありがとうございます！`);
});
