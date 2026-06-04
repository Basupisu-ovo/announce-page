// ページを取得する
const header = document.getElementById("header")
const home = document.getElementById("home")
const map = document.getElementById("map")

// ページ切り替え

// ホームに戻る
const homeButton = document.getElementById("toHomeButton")
const mapButton = document.getElementById("mapButton")

homeButton.addEventListener("click",()=>{
    home.classList.add("isActive")
    map.classList.remove("isActive")
    mapButton.classList.remove("isActive")
})

// MAPページへ
const toMapButton = document.getElementById("button1")

const firstSelect = document.getElementById("firstSelect")
let category = firstSelect.value

const secondSelect = document.getElementById("secondSelect")
let subCategory = secondSelect.value

toMapButton.addEventListener("click",()=>{

    home.classList.remove("isActive")
    map.classList.add("isActive")
    mapButton.classList.add("isActive")

    // セレクトボックスを初期化する
    secondSelect.length = 0
    firstSelect.value = ""

    secondSelect.setAttribute("disabled", true)

    const ResetOption = document.createElement("option")
    ResetOption.value = ""
    ResetOption.text = "先に種類を選択してください"
    ResetOption.disabled = true
    ResetOption.selected = true
    secondSelect.appendChild(ResetOption)

})

// MAPアプリ
// 教室検索用
let classrooms = {
    homerooms: ["1-1", "1-2", "1-3", "1-4", 1-5, 1-6],
    specialRooms: ["事務室", "職員室", "書道室"],
    otherRooms: ["体育館", "運動場", ""]
}



// つぎのセレクトボックスを出す
function UpdateSecondSelect(){
    secondSelect.removeAttribute("disabled")
    secondSelect.length = 0


}

firstSelect.addEventListener("change",UpdateSecondSelect)