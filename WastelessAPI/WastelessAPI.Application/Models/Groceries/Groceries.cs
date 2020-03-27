using System;
using System.Collections.Generic;

namespace WastelessAPI.Application.Models.Groceries
{
    public class Groceries
    {
        public String Name { get; set; }
        public ICollection<GroceryItem> Items { get; set; }
        public Int32 UserId { get; set; }
    }
}
