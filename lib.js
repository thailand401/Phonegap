function save() {
	window.localStorage.setItem("key", $("#datas").val());
	$("#debug").val($("#debug").val()+$("#datas").val()+"\n");
}
