using System;
using System.Collections.Generic;
using System.Text;

namespace SignalBlazorR.Shared
{
    public class UserData
    {
        private static readonly string DefaltName = "どこかの誰かさん";

        public string Name { get; set; } = DefaltName;
    }
}
