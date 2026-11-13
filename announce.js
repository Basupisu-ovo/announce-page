// ページを取得する
const startScreen = document.getElementById("start")
const header = document.getElementById("header")
const home = document.getElementById("home")
const map = document.getElementById("map")

// 初期状態
startScreen.style.display = "none" //flex
header.style.display = "block" //block
home.style.display = "flex" //flex
map.style.display = "none" //block

// ページ切り替え関数
// ホームへ
function ToHome() {
    header.style.display = "block"
    home.style.display = "flex"
}

//マップへ
function ToMap() {
    home.style.display = "none"
    header.style.display = "block"
    map.style.display = "block"
    mapButton.style.display = "block"

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
}

// スタートからホームへ

const exStartButton = document.getElementById("exStartBut")
const StartButton = document.getElementById("StartBut")


// 例を表示
exStartButton.addEventListener("click", () => {
    ToHome()
    startScreen.style.display = "none"
})
// スタート
// セレクトボックスの値を取得
const patternSelect = document.getElementById("patternSelect")

const pattern = Number(patternSelect.value) - 1

const patterns = ["pattern1.css", "pattern2.css", "pattern3.css", "pattern4.css"]

const CSSPattern = document.getElementById("CSSPattern")

StartButton.addEventListener("click", () => {
    ToHome()
    startScreen.style.display = "none"

    CSSPattern.setAttribute("href", patterns[pattern])

})


const otherAnnBut = document.getElementById("otherAnnBut")
const otherPlanBut = document.getElementById("otherPlanBut")

otherAnnBut.addEventListener("click", DisplayAnnTableDialog)
otherPlanBut.addEventListener("click", DisplayScheTableDialog)

// お知らせの詳細ダイアログ表示

let newsDialog = document.getElementById("detailDialog")

newsDialog.addEventListener('click', (event) => {
    if (event.target === newsDialog) {
        CloseDialog();
    }
});


// ダイアログを非表示にする
function CloseDialog() {
    newsDialog.style.display = "none"
    newsDialog.close()
}

// ダイアログを表示する
function DisplayDialog() {
    newsDialog.style.display = "flex"
    newsDialog.showModal()
}


// お知らせの詳細ダイアログ用の表示
let announces = [
    {
        title: "【重要】文化祭の開催に伴うスケジュール変更について",
        date: "11/9/月",
        place: "体育館",
        detail: "在校生の皆さん、および保護者の皆様へお知らせいたします。「秋桜祭（文化祭）」の準備期間に伴い、来週の月曜日から時間割および下校時刻が一部変更となります。火曜日から木曜日までの期間は、特別授業時程（45分授業×6コマ）とし、放課後の準備時間を1時間確保します。これに伴い、最終下校時刻は通常より30分遅い17時30分となります。なお、準備期間中の部活動は原則として活動休止となりますが、出場する一部の部活動については、顧問の許可を得た上で延長活動を認めます。各クラスの文化祭実行委員は、割り当てられた準備場所の片付けと戸締まりを徹底してください。なお、全体の機材搬入と打ち合わせを行います。詳細なタイムスケジュールは、本日配布したプリントをご確認ください。",
        from: "生徒指導部・文化祭実行委員会"
    }
]

let schedules = [

]

class CreateSell {
    constructor(title, date, place, detail, from) {
        this.title = title
        this.date = date
        this.place = place
        this.detail = detail
        this.from = from

        this.addSell = document.createElement("tr")
        this.addTdDate = document.createElement("td")
        this.addTdDetail = document.createElement("td")
        this.addTdButSell = document.createElement("td")
        this.addTdBut = document.createElement("button")
        this.iTag = document.createElement("i")
    }
    // 内容書き換えと子要素の追加
    CreateSell() {
        // 日付とタイトルの内容書き換え
        this.addTdDate.textContent = this.date
        this.addTdDetail.textContent = this.title

        // 子要素追加
        // ボタンセル
        this.addTdBut.appendChild(this.iTag)
        this.addTdButSell.appendChild(this.addTdBut)
        // trにtdを追加
        this.addSell.appendChild(this.addTdDate)
        this.addSell.appendChild(this.addTdDetail)
        this.addSell.appendChild(this.addTdButSell)
    }

    addAnnTable() {
        // 追加されるテーブル
        const addedTable = document.getElementById("announceBody")

        // CSSクラスをつける
        this.addSell.setAttribute("class", "announceTR")
        this.addTdDate.setAttribute("class", "announceDate")
        this.addTdDetail.setAttribute("class", "announceDetail")
        this.addTdButSell.setAttribute("class", "announceMore")
        this.addTdBut.setAttribute("class", "moreButton")
        this.iTag.setAttribute("class", "fa-solid fa-ellipsis")

        this.CreateSell()

        addedTable.appendChild(this.addSell)
    }

    addScheTable() {
        // 追加されるテーブル
        const addedTable = document.getElementById("scheduleBody")

        // CSSクラスをつける
        this.addSell.setAttribute("class", "scheduleTR")
        this.addTdDate.setAttribute("class", "scheduleDate")
        this.addTdDetail.setAttribute("class", "scheduleDetail")
        this.addTdButSell.setAttribute("class", "scheduleMore")
        this.addTdBut.setAttribute("class", "moreButton")
        this.iTag.setAttribute("class", "fa-solid fa-ellipsis")

        this.CreateSell()

        addedTable.prepend(this.addSell)
    }

    // ダイアログ用の表
    CreateAnnDialogTable() {
        // CSSクラスをつける
        this.addSell.setAttribute("class", "dialogTableTR")
        this.addTdDate.setAttribute("class", "dialogDate")
        this.addTdDetail.setAttribute("class", "dialogDetail")

        // 日付とタイトルの内容書き換え
        this.addTdDate.textContent = this.date
        this.addTdDetail.textContent = this.title

        this.addSell.appendChild(this.addTdDate)
        this.addSell.appendChild(this.addTdDetail)

        return this.addSell
    }
}

window.addEventListener("load", DisplayAnnTable)
window.addEventListener("load", DisplayScheduleTable)

// テーブルにお知らせを表示する
function DisplayAnnTable() {
    // 二個以下なら、その他ボタンを非表示
    if (announces.length <= 2) {
        if (announces.length == 0) {
            otherAnnBut.textContent = "お知らせはありません"

            return
        }
        otherAnnBut.setAttribute("style", "display: none;")
    }

    let displayAnn;
    // 上から二つのお知らせを表示
    for (let i = 0; i < Math.min(announces.length, 2); i++) {

        displayAnn = new CreateSell(announces[i].title, announces[i].date, announces[i].place, announces[i].detail, announces[i].from)

        displayAnn.addAnnTable()
    }
}

// テーブルに行事予定を表示する
function DisplayScheduleTable() {
    if (schedules.length <= 2) {
        if (announces.length == 0) {
            otherPlanBut.textContent = "行事予定はありません"

            return
        }
        otherPlanBut.setAttribute("style", "display: none;")

        return
    }

    // 上から二つの行事予定を表示
    for (let i = 0; i < Math.min(schedules.length, 2); i++) {
        let displaySchedule = new CreateSell(schedules[i].title, schedules[i].date, schedules[i].place, schedules[i].detail, schedules[i].from)

        displaySchedule.addScheTable()
    }
}


// すべてのお知らせを表示するダイアログを表示
function DisplayAnnTableDialog() {
    const DialogTable = document.getElementById("dialogTable")
    const DialogTableBody = document.getElementById("DialogTableBody")

    let diaAnnTable

    for (let i = 0; i < announces.length; i++) {
        diaAnnTable = new CreateSell(
            announces[i].title, announces[i].date, announces[i].place, announces[i].detail, announces[i].from
        )

        let addSell = diaAnnTable.CreateAnnDialogTable()

        DialogTableBody.appendChild(addSell)
    }


    DialogTableBody.className = "dialogAnnounce"
        DialogTable.appendChild(DialogTableBody)
}

// すべての行事予定を表示するダイアログを表示
function DisplayScheTableDialog() {
    const DialogTable = document.getElementById("dialogTable")
    const DialogTableBody = document.getElementById("DialogTableBody")

    let diaAnnTable

    for (let i = 0; i < schedules.length; i++) {
        diaAnnTable = new CreateSell(
            schedules[i].title, schedules[i].date, schedules[i].place, schedules[i].detail, schedules[i].from
        )

        let addSell = diaAnnTable.CreateAnnDialogTable()

        DialogTableBody.className = "dialogSchedules"

        DialogTableBody.appendChild(addSell)
    }

    DialogTable.appendChild(DialogTableBody)
}

// ダイアログのセルをクリックしてセル番号を読み込む
let diaTable = document.getElementById("dialogTableBody")


diaTable.addEventListener("click", (event) => {
    let dialogSells = event.target.close(".dialogTableTR")
    if(!dialogSells) return

    // const tableType = event.target.

    const sellNum = dialogSells.cellIndex
})




function CreateDetailDialog(tableType,sellNum) {
    const newsTitle = document.getElementById("dialogTitle")
    const newsDate = document.getElementById("dialogDate")
    const newsPlace = document.getElementById("dialogPlace")
    const newsDetail = document.getElementById("dialogDetail")
    const newsFrom = document.getElementById("dialogFrom")

    if(tableType == ""){

    }
    else if(tableType = ""){

    }
    else{

    }

    newsTitle.textContent = announces[sellNum].title
    newsDate.textContent = "日時: " + announces[sellNum].date
    newsPlace.textContent = "場所: " + announces[sellNum].place
    newsDetail.textContent = "詳細: " + announces[sellNum].detail
    newsFrom.textContent = "From: " + announces[sellNum].from
}









// マップからホームに戻る
const homeButton = document.getElementById("toHomeButton")
const mapButton = document.getElementById("mapButton")

homeButton.addEventListener("click", () => {
    ToHome()
    map.style.display = "none"
    mapButton.style.display = "none"
})

// MAPページへ
const toMapButton = document.getElementById("button1")

const firstSelect = document.getElementById("firstSelect")
let category = firstSelect.value

const secondSelect = document.getElementById("secondSelect")
let subCategory = secondSelect.value

toMapButton.addEventListener("click", ToMap)






// MAPアプリ
// ==========================================
// MAP機能の実装（フロア切替 & 検索連動対応）
// ==========================================

// 各部屋が存在する階数（floor）情報を追加
const classroomData = {
    homerooms: [
        { name: "1-1", id: "1-1", floor: "3F" },
        { name: "1-2", id: "1-2", floor: "3F" },
        { name: "1-3", id: "1-3", floor: "3F" },
        { name: "1-4", id: "1-4", floor: "2F" },
        { name: "1-5", id: "1-5", floor: "2F" },
        { name: "1-6", id: "1-6", floor: "2F" },
        { name: "2-1", id: "2-1", floor: "1F" },
        { name: "2-2", id: "2-2", floor: "1F" },
        { name: "2-3", id: "2-3", floor: "1F" },
        { name: "2-4", id: "2-4", floor: "1F" },
        { name: "2-5", id: "2-5", floor: "1F" },
        { name: "2-6", id: "2-6", floor: "1F" },
        { name: "3-1", id: "3-1", floor: "2F" },
        { name: "3-2", id: "3-2", floor: "2F" },
        { name: "3-3", id: "3-3", floor: "2F" },
        { name: "3-4", id: "3-4", floor: "3F" },
        { name: "3-5", id: "3-5", floor: "3F" },
        { name: "3-6", id: "3-6", floor: "3F" }
    ],
    specialRooms: [
        { name: "物理室", id: "Physics_room", floor: "2F" },
        { name: "化学教室", id: "ChemistryLecture_room", floor: "1F" },
        { name: "生物教室", id: "BiologyLecture_room", floor: "2F" },
        { name: "音楽室", id: "Music_room", floor: "3F" },
        { name: "書道教室", id: "Calligraphy_room", floor: "3F" },
        { name: "美術教室", id: "ArtClass_room", floor: "3F" },
        { name: "コンピューター室", id: "Computer_room", floor: "1F" },
        { name: "調理室", id: "Cooking_room", floor: "1F" },
        { name: "図書室", id: "Library", floor: "2F" },
        { name: "化学実験室", id: "Chemistry_Lab", floor: "1F" },
        { name: "化学講義室", id: "ChemistryLecture_room", floor: "1F" },
        { name: "家庭科室", id: "HomeEconomics_room", floor: "1F" },
        { name: "調理実習室", id: "Cooking_room", floor: "1F" },
        { name: "生物実験室", id: "Biology_Lab", floor: "2F" },
        { name: "生物講義室", id: "BiologyLecture_room", floor: "2F" },
        { name: "講義室B", id: "Lecture_roomB", floor: "2F" },
        { name: "講義室D", id: "Lecture_roomD", floor: "2F" },
        { name: "和室", id: "JapaneseStyle_room", floor: "2F" },
        { name: "被服室", id: "Sewing_room", floor: "2F" },
        { name: "多目的室", id: "Multipurpose_room", floor: "2F" },
        { name: "書道室", id: "CalligraphyClass_room", floor: "3F" },
        { name: "講義室A", id: "Lecture_roomA", floor: "3F" },
        { name: "講義室", id: "Lecture_room", floor: "3F" },
    ],
    otherRooms: [
        { name: "体育館", id: "Gym", floor: "1F" },
        { name: "武道場", id: "MartialArtsHall", floor: "1F" },
        { name: "事務室", id: "AdministrativeOffice", floor: "1F" },
        { name: "職員室", id: "MainStaff_room", floor: "2F" },
        { name: "保健室", id: "Nurse'sOffice", floor: "1F" },
        { name: "校長室", id: "Principal'sOffice", floor: "1F" },
        { name: "売店", id: "SchoolStore", floor: "1F" },
        { name: "教育相談室", id: "EducationalCounseling_room", floor: "1F" },
        { name: "学習室B", id: "Study_roomB", floor: "1F" },
        { name: "学習室A", id: "Study_roomA", floor: "1F" },
        { name: "講義室E", id: "Lecture_roomE", floor: "1F" },
        { name: "進路資料室", id: "CareerResources_room", floor: "1F" },
        { name: "進路相談室", id: "CareerCounseling_room", floor: "1F" },
        { name: "進路指導室", id: "CareerGuidanceOffice", floor: "1F" },
        { name: "更衣室", id: "Changing_room", floor: "1F" },
        { name: "SSH職員室", id: "SSHStaff_room", floor: "1F" },
        { name: "化学準備室", id: "ChemistryPrep_room", floor: "1F" },
        { name: "化学職員室", id: "ChemistryStaff_room", floor: "1F" },
        { name: "家庭科職員室", id: "HomeEconomicsStaff_room", floor: "1F" },
        { name: "家庭科準備室", id: "HomeEconomicsStorage", floor: "1F" },
        { name: "印刷室", id: "Printing_room", floor: "2F" },
        { name: "面談室", id: "Interview_room", floor: "2F" },
        { name: "小会議室", id: "SmallConference_room", floor: "2F" },
        { name: "大会議室", id: "LargeConference_room", floor: "2F" },
        { name: "物理職員室", id: "PhysicsStaff_room", floor: "2F" },
        { name: "部活動支援室", id: "ClubActivitiesSupport_room", floor: "2F" },
        { name: "生物準備室", id: "BiologyPrep_room", floor: "2F" },
        { name: "生物職員室", id: "BiologyStaff_room", floor: "2F" },
        { name: "準備室2", id: "Prep_room2", floor: "2F" },
        { name: "学習室C", id: "Study_roomC", floor: "3F" },
        { name: "倉庫 / 備品庫", id: "Storage", floor: "3F" },
        { name: "音楽準備室", id: "SecondaryMusic_room", floor: "3F" },
    ]
};

// 階数管理変数・要素取得
const floors = ["1F", "2F", "3F"];
let currentFloorIndex = 0; // 0: 1F, 1: 2F, 2: 3F

const prevFloorBtn = document.getElementById("prevFloorBtn"); // 上ボタン（上の階へ）
const nextFloorBtn = document.getElementById("nextFloorBtn"); // 下ボタン（下の階へ）
const currentFloorText = document.getElementById("currentFloorText");

const maps = {
    "1F": document.getElementById("schoolMap1F"),
    "2F": document.getElementById("schoolMap2F"),
    "3F": document.getElementById("schoolMap3F")
};

function switchFloor(floorName) {
    const targetIndex = floors.indexOf(floorName);
    if (targetIndex === -1) return;

    currentFloorIndex = targetIndex;
    currentFloorText.textContent = floors[currentFloorIndex];

    Object.keys(maps).forEach(f => {
        if (maps[f]) maps[f].classList.remove("activeMap");
    });
    if (maps[floorName]) {
        maps[floorName].classList.add("activeMap");
    }

    // 上ボタンは3F（最高階）の時に無効、下ボタンは1F（最下階）の時に無効
    prevFloorBtn.disabled = (currentFloorIndex === floors.length - 1);
    nextFloorBtn.disabled = (currentFloorIndex === 0);
}

// 上ボタン：階数を増やす（1F -> 2F -> 3F）
prevFloorBtn.addEventListener("click", () => {
    if (currentFloorIndex < floors.length - 1) {
        switchFloor(floors[currentFloorIndex + 1]);
    }
});

// 下ボタン：階数を減らす（3F -> 2F -> 1F）
nextFloorBtn.addEventListener("click", () => {
    if (currentFloorIndex > 0) {
        switchFloor(floors[currentFloorIndex - 1]);
    }
});

// 初期表示
switchFloor("1F");

// ------------------------------------------
// 検索機能とフロア連動
// ------------------------------------------
const searchButton = document.getElementById("searchButton");
const mapDialog = document.querySelector("#searchSelect dialog");
const selectedClassText = document.getElementById("selectedClass");

searchButton.addEventListener("click", () => {
    if (mapDialog) mapDialog.showModal();
});

if (mapDialog) {
    mapDialog.addEventListener("click", (event) => {
        if (event.target === mapDialog) mapDialog.close();
    });
}

firstSelect.addEventListener("change", () => {
    const selectedCategory = firstSelect.value;
    secondSelect.length = 0;

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.text = "詳細な場所を選択してください";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    secondSelect.appendChild(defaultOption);

    if (selectedCategory && classroomData[selectedCategory]) {
        secondSelect.removeAttribute("disabled");
        classroomData[selectedCategory].forEach(item => {
            const option = document.createElement("option");
            option.value = item.id;
            option.textContent = `${item.name} (${item.floor})`;
            option.dataset.floor = item.floor;
            secondSelect.appendChild(option);
        });
    } else {
        secondSelect.setAttribute("disabled", true);
    }
});

secondSelect.addEventListener("change", () => {
    const selectedId = secondSelect.value;
    const selectedOption = secondSelect.options[secondSelect.selectedIndex];
    const targetFloor = selectedOption.dataset.floor;
    const selectedOptionText = selectedOption.text;

    if (!selectedId) return;

    if (targetFloor) {
        switchFloor(targetFloor);
    }

    selectedClassText.textContent = selectedOptionText;
    if (mapDialog) mapDialog.close();

    const allSvgElements = document.querySelectorAll(".schoolMaps path, .schoolMaps g");
    allSvgElements.forEach(el => {
        if (el.getAttribute("fill") && !["#F5F5F5", "#E5E5E5", "#D9D9D9", "#FFAC11", "#ABF8FF"].includes(el.getAttribute("fill"))) {
            el.style.fill = "#FDFFCC";
        }
    });

    const currentActiveMap = maps[targetFloor];
    if (currentActiveMap) {
        const targetElement = currentActiveMap.querySelector(`#${CSS.escape(selectedId)}`);
        if (targetElement) {
            targetElement.style.fill = "#FF5722";
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
});

const roomInfoMap = {};
Object.keys(classroomData).forEach(category => {
    classroomData[category].forEach(room => {
        roomInfoMap[room.id] = room;
    });
});

// 全てのSVG内の要素（pathやg）を取得し、登録されている部屋にクリックイベントを設定
const allMapElements = document.querySelectorAll(".schoolMaps path, .schoolMaps g");
allMapElements.forEach(el => {
    const roomId = el.id;
    // 教室データに存在するIDの場合のみ処理を行う
    if (roomId && roomInfoMap[roomId]) {
        // マウスカーソルをポインター（指マーク）にする
        el.style.cursor = "pointer";

        el.addEventListener("click", (event) => {
            event.stopPropagation(); // イベントの伝播を防ぐ
            const roomData = roomInfoMap[roomId];
            if (!roomData) return;

            // 1. 「選択されている教室」のテキストを更新
            selectedClassText.textContent = `${roomData.name} (${roomData.floor})`;

            // 2. SVG上のハイライト色を一度すべてリセット（初期色の #FDFFCC に戻す）
            allMapElements.forEach(elem => {
                if (elem.getAttribute("fill") && !["#F5F5F5", "#E5E5E5", "#D9D9D9", "#FFAC11", "#ABF8FF"].includes(elem.getAttribute("fill"))) {
                    elem.style.fill = "#FDFFCC";
                }
            });

            // 3. クリックされた部屋を赤色（#FF5722）で強調表示
            el.style.fill = "#FF5722";
        });
    }
});



// // つぎのセレクトボックスを出す
// function UpdateSecondSelect(){
//     secondSelect.removeAttribute("disabled")
//     secondSelect.length = 0


// }

// firstSelect.addEventListener("change",UpdateSecondSelect)
