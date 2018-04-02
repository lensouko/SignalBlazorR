using System;
using System.Collections.Generic;
using System.Text;

namespace SignalBlazorR.Shared
{
	public class SimpleMessage
	{
		public string room { get; set; } = string.Empty;
		public string name { get; set; } = string.Empty;
		public string message { get; set; } = string.Empty;

		public static readonly string AllGroup = "All";

		public SimpleMessage Clone()
		{
			return new SimpleMessage
			{
				room = this.room,
				name = this.name,
				message = this.message
			};
		}

	}
}
