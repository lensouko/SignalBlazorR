document.addEventListener('DOMContentLoaded', function () {

	console.log("DOMContentLoadedいべんとだー");

	// コネクション作成
    //let connection = new signalR.HubConnection('/chathub');
    let connection = new signalR.HubConnectionBuilder().withUrl('/chathub').build();
    let csIns = null;
	// 受信処理
	connection.on('AddMessage', Msg => {
		console.log("受信");
		for (var key in Msg) {
			console.log(`${key}＝${Msg[key]}`);
        }
        var meth = "";
        if (csIns === null) {
            meth = "jusin";
            console.log("static 受信");
        }
        else {
            meth = "jusini";
            console.log("インスタンス 受信");
        }
		let AddMessageSMethod = Blazor.platform.findMethod(
			"SignalBlazorR.Client",
			"SignalBlazorR.Client.Shared",
			"Chat",
            meth
		);
		console.log(`${Msg.name}「${Msg.message}」`);
		var ts = Blazor.platform.toDotNetString(JSON.stringify(Msg));
		console.log(ts);
        Blazor.platform.callMethod(AddMessageSMethod, csIns, [ts]);
	});

    window.Chat = {
        グループ追加: Msg => {
            console.log(`グループ追加「${Msg.room}」`);
            connection.invoke("JoinGroup", Msg)
                .catch(e => console.log(e));
            return true;
        },
        グループ離脱: Msg => {
            connection.invoke("LeaveGroup", Msg)
                .catch(e => console.log(e));
            return true;
        },
        迷信: Msg => {
            connection.invoke("PostMessage", Msg)
                .catch(e => console.log(e));
            return true;
        }
    };

    /*
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
    */

	// 接続開始
	connection.start()
		.then(function () {
			console.log("接続開始");
		})
		.catch(e => console.log(e));

    window.Chat.Chatインスタンス取得 = Msg => {
        let GetPageObjectMethod = Blazor.platform.findMethod(
            "SignalBlazorR.Client",
            "SignalBlazorR.Client.Shared",
            "Chat",
            "GetPageObject"
        );
        csIns = Blazor.platform.callMethod(GetPageObjectMethod, null, []);
        console.log(`インスタンス「${csIns}」`);
        return true;
    };

    /*
    Blazor.registerFunction("Chatインスタンス取得", Msg => {
        let GetPageObjectMethod = Blazor.platform.findMethod(
            "SignalBlazorR.Client",
            "SignalBlazorR.Client.Shared",
            "Chat",
            "GetPageObject"
        );
        csIns = Blazor.platform.callMethod(GetPageObjectMethod, null, []);
        console.log(`インスタンス「${csIns}」`);
        return true;
    });
    */

    window.Chat.Chatインスタンス解除 = Msg => {
        csIns = null;
        console.log(`インスタンス「${csIns}」`);
        return true;
    };

    /*
    Blazor.registerFunction("Chatインスタンス解除", Msg => {
        csIns = null;
        console.log(`インスタンス「${csIns}」`);
        return true;
    });
    */
});
