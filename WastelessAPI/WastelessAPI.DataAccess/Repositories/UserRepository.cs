using System;
using System.Collections.Generic;
using System.Linq;
using WastelessAPI.DataAccess.Models;

namespace WastelessAPI.DataAccess.Repositories
{
    public class UserRepository
    {
        private readonly WastelessDbContext _context;

        public UserRepository(WastelessDbContext context)
        {
            _context = context;
        }

        public User AddUser(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
            return user;
        }

        public Boolean IsDuplicateUser(User user)
        {
            return _context.Users.Where(dbUser => dbUser.Email == user.Email).Any();
        }

        public Boolean IsValidUser(User user)
        {
            return _context.Users.Where(dbUser => dbUser.Email == user.Email && dbUser.Password == user.Password).Any();
        }

        public IList<User> GetUsers()
        {
            return _context.Users.ToList();
        }
    }
}
