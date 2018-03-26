using SignalBlazorR.Shared;
using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace SignalBlazorR.Server.Hub
{
	public class ChatHub : Microsoft.AspNetCore.SignalR.Hub
	{
		public Task PostMessage(SimpleMessage msg)
		{
			// プレビュー１の場合
			return Clients.All.SendAsync("AddMessage", msg);
			// α2の場合
			//return Clients.All.InvokeAsync("AddMessage", msg);
		}
	}
}
