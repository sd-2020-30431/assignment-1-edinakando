using System;
using System.Collections.Generic;

namespace WastelessAPI.Application.Models
{
    public class Groceries
    {
        public String Name { get; set; }
        public ICollection<GroceryItem> Items { get; set; }
    }
}
