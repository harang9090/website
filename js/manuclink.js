let count = 0;

function makingform() {

    count++;
    alert("이 웹페이지는 저장되지 않습니다. 참고해주세요.");
    document.getElementById("count").textContent = count;

    const container = document.getElementById("container");

    const div = document.createElement("div");

    div.innerHTML = `
    <p style="margin-left:450px;"><label>Review:</label></p>

    <div class="reviewBox">

    <div class="url">
        <input type="url" style="width:300px;" placeholder="https://www.yna.co.kr/">
        <button>확인</button>
    </div>

    <div class="review">
        <textarea rows="4" cols="50" placeholder="키워드와 간단한 요약을 작성해주세요."></textarea>
        <button>확인</button>

        <textarea rows="4" cols="50" placeholder="자신의 소감을 작성해 주세요."></textarea>
        <button>확인</button>
    </div>

</div>
    `;

    container.appendChild(div);
}

