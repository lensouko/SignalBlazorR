using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SignalBlazorR.Shared;

namespace SignalBlazorR.Server.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class LoguinController : Controller
    {

        [HttpPost("[action]")]
        public UserData GetUserData([FromBody]LoginData loginData)
        {
            var r = new UserData();

            if(loginData.ID=="admin")
            {
                return null;
            }

            // 実際にはまともなログイン処理
            if(loginData.ID.StartsWith("test"))
            {
                r.Name = loginData.ID.Replace("test","てすと");
            }
            else if(loginData.ID.StartsWith("aaa"))
            {
                r.Name = "勇者ああああ";
            }
            else
            {
                r.Name = loginData.ID;
            }

            return r;
        }

    }
}