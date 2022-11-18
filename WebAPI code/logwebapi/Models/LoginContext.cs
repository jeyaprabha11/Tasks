using Microsoft.EntityFrameworkCore;



namespace logwebapi.Models
{
    public class LoginContext: DbContext


    {
            public LoginContext(DbContextOptions<LoginContext> options)
                : base(options)
        {
        }

        public DbSet<Login> Logs { get; set; }

    }
}

