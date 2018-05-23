using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Blazor;
using SignalBlazorR.Shared;

namespace SignalBlazorR.Client
{
    public class LoginService
    {
        private HttpClient HttpClient { get; }

        public UserData UserData { get; private set; } = null;

        public string ErrMessagse { get; set; } = string.Empty;


        public LoginService(HttpClient httpClient)
        {
            HttpClient = httpClient;
        }

        public async Task ログイン(LoginData inputData)
        {
            if (string.IsNullOrWhiteSpace(inputData.ID) || string.IsNullOrWhiteSpace(inputData.PassWord))
            {
                ErrMessagse = "IDとパスワードは入力してね";
                return;
            }

            ErrMessagse = string.Empty;
            UserData = await HttpClient.PostJsonAsync<UserData>("/api/Loguin/GetUserData", inputData);
        }

    }
}
