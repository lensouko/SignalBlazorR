document.addEventListener('DOMContentLoaded', function () {

	console.log("DOMContentLoadedいべんとだー");

	// コネクション作成
	let connection = new signalR.HubConnection('/chathub');
	// 受信処理
	connection.on('AddMessage', Msg => {
		console.log("受信");
		for (var key in Msg) {
			console.log(`${key}＝${Msg[key]}`);
		}
		let AddMessageSMethod = Blazor.platform.findMethod(
			"SignalBlazorR.Client",
			"SignalBlazorR.Client.Shared",
			"Chat",
			"jusin"
		);
		console.log(`${Msg.name}「${Msg.message}」`);
		var ts = Blazor.platform.toDotNetString(JSON.stringify(Msg));
		console.log(ts);
		Blazor.platform.callMethod(AddMessageSMethod, null, [ts]);
	});

	// グループ追加処理
	Blazor.registerFunction("グループ追加", Msg => {
		console.log(`グループ追加「${Msg.room}」`);
		connection.invoke("JoinGroup", Msg)
			.catch(e => console.log(e));
		return true;
	});

	// グループ離脱処理
	Blazor.registerFunction("グループ離脱", Msg => {
		connection.invoke("LeaveGroup", Msg)
			.catch(e => console.log(e));
		return true;
	});

	// 送信処理
	Blazor.registerFunction("迷信", Msg => {
		connection.invoke("PostMessage", Msg)
			.catch(e => console.log(e));
		return true;
	});

	// 接続開始
	connection.start()
		.then(function () {
			console.log("接続開始");
			//var InitMethod = Blazor.platform.findMethod(
			//	"SignalBlazorR.Client",
			//	"SignalBlazorR.Client.Shared",
			//	"Chat",
			//	"JsInited"
			//);
			//Blazor.platform.callMethod(InitMethod, null, []);

		})
		.catch(e => console.log(e));

});
