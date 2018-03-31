# SignalBlazorR
Blazor(Razor + WebAssembly on ASP.NET Core) + SignalR Basic Sample

aspnet/Blazor
https://github.com/aspnet/blazor

aspnet/SignalR
https://github.com/aspnet/SignalR

以下の記事で実際に作成したソリューションです。
It is the solution actually created in the following article.

C#の実験的なBlazor（WebAssembly＋Razor）とSignalRでチャットを作ってみた１準備編
https://qiita.com/lensouko/items/3aff7311887470ad0905

C#の実験的なBlazor（WebAssembly＋Razor）とSignalRでチャットを作ってみた２実装編
https://qiita.com/lensouko/items/f28dbbaf4dc8cedeff26

やってることは現状でSignalRを動かしてみる最低限のサンプルソースってところです。
What I am doing is the minimum sample source that I try to work SignalR as it is.

見た目はBlazorのテンプレートで作られたページをコピーしただけで何もいじっていません。
It looks like you just copied the page made with the template of Blazor and you did not mess with anything.

このソリューションに変更を加えるかどうかは未定ですが、
コンテンツの下部にチャット部分を配置して、各ページごとのグループと全コネクション共通のメッセージを受信するようにしたらいろいろと便利そうだとか妄想しています。
Whether to make changes to this solution is undecided,
If you place a chat part at the bottom of the content and receive messages common to all the connections and the group for each page, it seems that it seems to be useful in various ways.

まだまだ作成中のフレームワークとのことで日々更新があり実用レベルになるころには全く違うものになっているかもしれませんが、非常に面白い技術です。
ですが、どうにもテンプレートと同じようなサンプルしか見つからなかったので、実際に使う場合に必要となりそうなサンプルを求めて自作してしまったのがこのソリューションになります。
