/*!
 * http://shop.digiseller.ru/my/sell_good_info_src.asp
 */

function ReturnVal(query_str, name_param){
	var url = query_str.toString();
	var param = name_param.toString();
	var find = parseInt(url.search(param), 10);
	var val_param = '';
	if(find > 0){
		var start = find + param.length + 1;
		var len = url.length;
		for(var i = start; i < len; i++){
			var symbol = url.substr(i, 1);
			if(symbol != '&'){
				val_param = val_param + symbol.toString();
			}
			else
				break;
		}
	}
	return val_param;
}
var url = window.location;
var np = ReturnVal(url, 'np');
var view = ReturnVal(url, 'view');
var idd = ReturnVal(url, 'idd');
var searchstr = ReturnVal(url, 'searchstr');
var agent = ReturnVal(url, 'agent');
var codepage = ReturnVal(url, 'codepage');
var currency = ReturnVal(url, 'currency');
var owner = ReturnVal(url, 'owner');
var _ids_shop = ReturnVal(url, '_ids_shop');
url = url.toString();
url = url.replace(/&/g, '|');
document.writeln('<' + 'script src=//shop.digiseller.ru/my/sell_good_info.asp?charset=&idd=' + idd + '&agent=184741' + agent + '&searchstr=' + searchstr + '&np=' + np + '&view=' + view + '&codepage=' + codepage + '&currency=' + currency + '&owner=0' + owner + '&_ids_shop=235719' + _ids_shop + '&url=' + url + '>');
document.writeln('<' + '/script' + '>');
