document.getElementById('deliver_input').style.display = 'none';
document.getElementById('reserve_input').style.display = 'none';
function show_deliverInput(){
    document.getElementById('deliver_input').style.display = '';
    document.getElementById('reserve_input').style.display = 'none'
    document.getElementById('choice').style.display = 'none';
} 
function hide_deliverInput(){
    document.getElementById('deliver_input').style.display = 'none';
    document.getElementById('reserve_input').style.display = 'none';
    document.getElementById('choice').style.display = '';
    document.getElementById('deliver_Number').value = null;
    document.getElementById('deliver_Name').value = null;
    document.getElementById('deliver_Location').value = null;
    document.getElementById('deliver_Menu').value = null;
    document.getElementById('deliver_Pay').value = null;
    document.getElementById('reserve_Number').value = null;
    document.getElementById('reserve_Name').value = null;
    document.getElementById('reserve_Time').value = null;
    document.getElementById('reserve_Menu').value = null;
} 
function show_reserveInput(){
    document.getElementById('deliver_input').style.display = 'none';
    document.getElementById('reserve_input').style.display = ''
    document.getElementById('choice').style.display = 'none';
}
const deliver_state = document.getElementById('deliver_btn');
const deliver_cancle = document.getElementById('cancleBtn_1');
const reserve_state = document.getElementById('reserve_btn');
const reserve_cancle = document.getElementById('cancleBtn_2')

deliver_state.addEventListener('click', show_deliverInput);
deliver_cancle.addEventListener('click', hide_deliverInput);
reserve_state.addEventListener('click', show_reserveInput);
reserve_cancle.addEventListener('click', hide_deliverInput)

document.getElementById('board_div_1').style.display = 'none';
document.getElementById('board_div_2').style.display = 'none';
document.getElementById('board_div_3').style.display = 'none';
document.getElementById('board_div_4').style.display = 'none';
document.getElementById('boardphoto_btn').style.display = 'none';

function showBoard(){
    document.getElementById('board_div_1').style.display = '';
    document.getElementById('board_div_2').style.display = '';
    document.getElementById('board_div_3').style.display = '';
    document.getElementById('board_div_4').style.display = '';

    document.getElementById('boardphoto_btn').style.display = '';
    document.getElementById('board_btn').style.display = 'none';

    window.scrollTo(0, document.body.scrollHeight);
}
const board_click = document.getElementById('board_btn');
board_click.addEventListener('click', showBoard);

function hideBoard(){
    document.getElementById('board_btn').style.display = '';
    document.getElementById('boardphoto_btn').style.display = 'none';
    
    document.getElementById('board_div_1').style.display = 'none';
    document.getElementById('board_div_2').style.display = 'none';
    document.getElementById('board_div_3').style.display = 'none';
    document.getElementById('board_div_4').style.display = 'none';
}
const boardphoto_click = document.getElementById('boardphoto_btn');
boardphoto_click.addEventListener('click', hideBoard)

document.getElementById('game_div').style.display = 'none';
document.getElementById('gamephoto_btn').style.display = 'none';

function showGame(){
    document.getElementById('game_div').style.display = '';

    document.getElementById('game_btn').style.display = 'none';
    document.getElementById('gamephoto_btn').style.display = '';

    window.scrollTo(0, document.body.scrollHeight);
}
const game_click = document.getElementById('game_btn');
game_click.addEventListener('click', showGame);

function hideGame(){
    document.getElementById('game_div').style.display = 'none';

    document.getElementById('game_btn').style.display = '';
    document.getElementById('gamephoto_btn').style.display = 'none';
}
const gamephoto_click = document.getElementById('gamephoto_btn');
gamephoto_click.addEventListener('click', hideGame)


function order_hotchoco(){
    window.scroll({top, behavior: 'smooth'});
    show_deliverInput();
    var input_menu = document.getElementById("deliver_Menu");
    var hist = input_menu.value;
    if (hist===''){
        input_menu.value = '????????? 1???'
    } else if (hist.indexOf('????????? 1???') != -1){
        input_menu.value = hist.replace(/????????? 1???/gi, '????????? 2???')
    } else {
        input_menu.value = hist + ', ????????? 1???'
    }
}
function order_bluecreamsoda() {
    window.scroll({top, behavior: 'smooth'});
    show_deliverInput();
    var input_menu = document.getElementById("deliver_Menu");
    var hist = input_menu.value;
    if (hist===''){
        input_menu.value = '?????????????????? 1???'
    } else if (hist.indexOf('?????????????????? 1???') != -1){
        input_menu.value = hist.replace(/?????????????????? 1???/gi, '?????????????????? 2???')
    } else {
        input_menu.value = hist + ', ?????????????????? 1???'
    }
}
function order_minchoco(){
    window.scroll({top, behavior: 'smooth'});
    show_deliverInput();
    var input_menu = document.getElementById("deliver_Menu");
    var hist = input_menu.value;
    if (hist===''){
        input_menu.value = '?????????????????? 1???'
    } else if (hist.indexOf('?????????????????? 1???') != -1){
        input_menu.value = hist.replace(/?????????????????? 1???/gi, '?????????????????? 2???')
    } else {
        input_menu.value = hist + ', ?????????????????? 1???'
    }
}
function order_lemonade(){
    window.scroll({top, behavior: 'smooth'});
    show_deliverInput();
    var input_menu = document.getElementById("deliver_Menu");
    var hist = input_menu.value;
    if (hist===''){
        input_menu.value = '??????????????? 1???'
    } else if (hist.indexOf('??????????????? 1???') != -1){
        input_menu.value = hist.replace(/??????????????? 1???/gi, '??????????????? 2???')
    } else {
        input_menu.value = hist + ', ??????????????? 1???'
    }
}
function order_grapefruit(){
    window.scroll({top, behavior: 'smooth'});
    show_deliverInput();
    var input_menu = document.getElementById("deliver_Menu");
    var hist = input_menu.value;
    if (hist===''){
        input_menu.value = '??????????????? 1???'
    } else if (hist.indexOf('??????????????? 1???') != -1){
        input_menu.value = hist.replace(/??????????????? 1???/gi, '??????????????? 2???')
    } else {
        input_menu.value = hist + ', ??????????????? 1???'
    }
}
function order_greengrape(){
    window.scroll({top, behavior: 'smooth'});
    show_deliverInput();
    var input_menu = document.getElementById("deliver_Menu");
    var hist = input_menu.value;
    if (hist===''){
        input_menu.value = '?????????????????? 1???'
    } else if (hist.indexOf('?????????????????? 1???') != -1){
        input_menu.value = hist.replace(/?????????????????? 1???/gi, '?????????????????? 2???')
    } else {
        input_menu.value = hist + ', ?????????????????? 1???'
    }
}