using Microsoft.AspNetCore.Blazor.Hosting;
using System;

namespace SignalBlazorR.Client
{
    public class Program
    {
        static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IWebAssemblyHostBuilder CreateHostBuilder(string[] args) =>
            BlazorWebAssemblyHost.CreateDefaultBuilder()
                .UseBlazorStartup<Startup>();
    }
}
