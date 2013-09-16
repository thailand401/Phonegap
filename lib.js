function save() {
	window.localStorage.setItem("key", $("#datas").val());
	$("#debug").val($("#debug").val()+$("#datas").val()+"\n");
}
function get() {
	$("#debug").val($("#debug").val()+"Get Data: "+window.localStorage.getItem("key")+"\n");
}