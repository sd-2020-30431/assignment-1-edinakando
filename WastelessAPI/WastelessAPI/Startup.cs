using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Cors;
using WastelessAPI.DataAccess.Repositories;
using WastelessAPI.Application.Logic;
using WastelessAPI.DataAccess;
using Microsoft.EntityFrameworkCore;

namespace WastelessAPI
{
    public class Startup
    {
        private IConfiguration _config{ get; }

        public Startup(IConfiguration configuration)
        {
            _config = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddTransient<UserRepository>();
            services.AddTransient<UserLogic>();

            services.AddDbContext<WastelessDbContext>(options => options.UseMySql(_config.GetConnectionString("WASTELESS_DB")));

            services.AddMvc(options => options.EnableEndpointRouting = false).SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            services.AddCors();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseCors(options => options.WithOrigins(_config.GetSection("RequestOrigin").Value)
                                          .AllowAnyMethod()
                                          .AllowAnyHeader());

            app.UseMvc();
        }
    }
}
