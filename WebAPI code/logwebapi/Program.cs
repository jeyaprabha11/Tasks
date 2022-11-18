using logwebapi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System.Configuration;

internal class Program
{
    private static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.

       


            builder.Services.AddControllers();

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
        builder.Services.AddCors(option =>
        {
            option.AddPolicy("MyPolicy", builder =>
            {

               builder.AllowAnyOrigin().
                AllowAnyMethod().
                AllowAnyHeader();

            });
        });

            builder.Services.AddDbContext<LoginContext>(
                o => o.UseSqlServer(builder.Configuration.GetConnectionString("Conc")));





            var app = builder.Build();

            // Configure the HTTP request pipeline.

            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();
            app.UseRouting();

            app.UseCors("MyPolicy");
        app.UseAuthentication();

            app.UseAuthorization();

        app.MapControllers();
       

            app.Run();
        }
        }
    
