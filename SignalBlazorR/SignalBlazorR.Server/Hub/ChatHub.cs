using SignalBlazorR.Shared;
using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace SignalBlazorR.Server.Hub
{
	public class ChatHub : Microsoft.AspNetCore.SignalR.Hub
	{
		public async Task PostMessage(SimpleMessage msg)
		{
			if (msg.room == SimpleMessage.AllGroup)
			{
				await Clients.All.SendAsync("AddMessage", msg);
			}
			else
			{
				await Clients.Group(msg.room).SendAsync("AddMessage", msg);
			}
		}

		public async Task JoinGroup(SimpleMessage msg)
		{
			await Groups.AddAsync(Context.ConnectionId, msg.room);
			msg.message = $"＜「{msg.room}」グループに参加しました＞";
			await Clients.Group(msg.room).SendAsync("AddMessage", msg);
		}

		public async Task LeaveGroup(SimpleMessage msg)
		{
			msg.message = $"＜「{msg.room}」グループから離脱しました＞";
			await Clients.Group(msg.room).SendAsync("AddMessage", msg);
			await Groups.RemoveAsync(Context.ConnectionId, msg.room);
		}
	}
}