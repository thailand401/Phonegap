/*
	The API to get data from server
*/
var RemoteApi = function(paintApp){
	this.paintApp = paintApp;
	this.paintApp.setApi(this);
};
RemoteApi.prototype.getFonts = function()
{
	return [
		{fontName:'CA Band',fileName:'CA_BND_Web_Bold_700'},
		{fontName:'Comic Sans',fileName:'Comic_Sans_MS'},
		{fontName:'Courier',fileName:'Courier_New'},
		{fontName:'Deja Vu',fileName:'DejaVu_Serif_400'},
		{fontName:'Delicious',fileName:'Delicious_500'},
		{fontName:'Encient Gothic',fileName:'Encient_German_Gothic_400'},
		{fontName:'Geneva',fileName:'geneva'},
		{fontName:'Georgia',fileName:'georgia'},
		{fontName:'Helvetica',fileName:'helvetica'},		
		{fontName:'Impact',fileName:'impact'},
		{fontName:'Georgia',fileName:'CA_BND_Web_Bold_700'},
		{fontName:'Georgia',fileName:'CA_BND_Web_Bold_700'},
		{fontName:'Georgia',fileName:'CA_BND_Web_Bold_700'},
		{fontName:'Georgia',fileName:'CA_BND_Web_Bold_700'},
		{fontName:'Georgia',fileName:'CA_BND_Web_Bold_700'},
		{fontName:'Georgia',fileName:'CA_BND_Web_Bold_700'}
		];
}