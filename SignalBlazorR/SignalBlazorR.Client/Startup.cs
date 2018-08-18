using Microsoft.AspNetCore.Blazor.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace SignalBlazorR.Client
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSingleton<LoginService>();
        }

        public void Configure(IBlazorApplicationBuilder app)
        {
            app.AddComponent<App>("app");
        }
    }
}
