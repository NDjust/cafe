import {initTable} from "./utils/templates.js";
import {EVENT_TYPE} from './utils/constants.js'
import {mockTable} from "./utils/mockData.js";


function TableApp() {
    const $tableList = document.querySelector('#table-list')
    const $tableAddBtn = document.querySelector('#table-add-btn')
    const $tableNameInput = document.querySelector('#table-name')

    const onCreateTableItemHandler = () => {
        const newTable = {
            'tableName': $tableNameInput.value,
        }
        //TODO 생성 api 호출
    }

    const onDeleteTableItemHandler = event => {
        const $target = event.target
        const $tableItem = $target.closest('.table-item')
        const isDeleteButton = $target.classList.contains('mdi-delete')
        if (!isDeleteButton) {
            return
        }
        const tableId = $tableItem.dataset.id
        //TODO 삭제 api 호출
    }

    const initEventListeners = () => {
        $tableList.addEventListener(EVENT_TYPE.CLICK, onDeleteTableItemHandler)
        $tableAddBtn.addEventListener(EVENT_TYPE.CLICK, onCreateTableItemHandler)
    }

    const initTables = () => {
        //TODO api call 로 mock 데이터를 실제 데이터로 바꾸기
        initTable(mockTable);
        initEventListeners();
    }

    const init = () => {
        initTables();
    };

    return {
        init
    };
}

const tableApp = new TableApp();
tableApp.init();
